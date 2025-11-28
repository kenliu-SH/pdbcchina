import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import _ = require('lodash');
import { FindOptions, FindPaginationOptions, Op, Sequelize } from '@model/shared';
import { User } from '@model/user.model';
import { FindUserPaginationDto, CreateManyUserDto, DeleteManyUserDto, CreateUserDto, LoginUserDto } from './user.dto';
import ERR from '@common/ERR';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '@library/mail/mail.service';
import { CryptoUtil } from '@library/utils';
import { WeChatService } from '@library/wechat';
import { WechatScanLog } from '@model/wechatScanLog.model';
import { WechatScanLogStatus } from '@common/constant';
import { VerificationService } from '../verification/verification.service';

@Injectable()
export class UserService {
	constructor(
		private readonly jwtService: JwtService,
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,

		@InjectModel(User)
		private userModel: typeof User,
		private sequelize: Sequelize,
		private readonly configs: ConfigProvider,
		private readonly mailService: MailService,
		private readonly weChatService: WeChatService,
		private readonly verificationService: VerificationService,
	) { }

	private userCacheKey(...args: any[]) {
		return `${this.configs.info.appName}:userLIST:${JSON.stringify(args)}`;
	}

	public async create(dto: CreateUserDto) {
		const user = await this.userModel.findOne({
			where: {
				email: dto.email,
			},
		});
		if (user) {
			if (!user.isVerify) {
				await this.verificationService.sendVerificationEmail(dto.email, user.id);
				throw ERR.EMAIL_NEEDS_VERIFICATION;
			}
			throw ERR.USER_EXISTS;
		}
		if (!this.passwordComplexity(dto.password)) {
			throw new HttpException('密码强度过低，必须8位并必须包含数字、字母、特殊字符', 400);
		}
		dto.password = CryptoUtil.hashing(dto.password);
		const result = await this.userModel.create({ ...dto, isVerify: 0, isAdmin: 0 });
		try {
			await this.verificationService.sendVerificationEmail(dto.email, result.id);
		} catch (error) {
			if (error === ERR.EMAIL_ALREADY_EXISTS) {
				// 如果邮箱已被注册，检查是否验证成功
				const user = await this.userModel.findOne({
					where: {
						email: dto.email,
					},
				});
				if (user && !user.isVerify) {
					await this.verificationService.sendVerificationEmail(dto.email, user.id);
					throw ERR.EMAIL_NEEDS_VERIFICATION;
				}
				return '该邮箱已被注册，请前往登录';
			}
			throw error;
		}
		return await result.save();
	}

	/**
	 * 密码复杂性验证：必须大于8位，必须包含数字、字母、特殊字符
	 * @param password 
	 * @returns 
	 */
	public passwordComplexity(password: string) {
		const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{8,}$/;
		return reg.test(password);
	}

	public async login(dto: LoginUserDto) {
		let user = await this.userModel.findOne({
			where: { email: dto.email },
			attributes: ['id', 'firstname', 'lastname', 'nickname', 'loginFailCount', 'lockTime', 'surname', 'email', 'password', 'photoLink', 'openId', 'isVerify'],
		});
		if (!user) {
			throw ERR.USER_NOT_EXISTS;
		}
		if (user.lockTime && new Date(user.lockTime).getTime() > new Date().getTime()) {
			throw new HttpException('账号已被锁定，等待15分钟后再登陆或联系管理员', 400);
		}
		const hashedPassword = CryptoUtil.hashing(dto.password);
		if (hashedPassword !== user.password) {
			console.log('user.loginFailCount00: ', user.loginFailCount);
			if (!user.loginFailCount) {
				user.loginFailCount = 0
			}

			user.loginFailCount = user.loginFailCount + 1;
			await user.save()
			// 锁定15分钟
			if (user.loginFailCount >= 5) {
				user.loginFailCount = 0;
				user.lockTime = new Date(new Date().getTime() + (15 * 60 * 1000));
				await user.save();
				throw new HttpException('账号已被锁定，等待15分钟后再登陆或联系管理员', 400);
			}
			throw new HttpException(`密码错误，连续五次密码错误您的账户将会被锁定`, 400);
		}

		if (user.isVerify == 0) {
			throw ERR.EMAIL_NEEDS_VERIFICATION;
		}
		user.lockTime = null;
		user.loginFailCount = 0;
		await user.save();
		delete user.password;
		return { token: this.jwtService.sign({ userID: user.id }), user };
	}

	public async find(id: number) {
		const options: FindOptions = { where: { id }, include: [{ all: true }] };
		const result = await User.findOne(options);
		return result;
	}

	public async findPagination(dto: FindUserPaginationDto, pagination: Pagination) {
		const key = this.userCacheKey(dto, pagination);
		const result = await this.redis.cache({ key, ttl: 10, next: this.findPaginationDao }).with(dto, pagination);
		return result;
	}

	public async findPaginationDao(dto: any, pagination: Pagination) {
		const whereOrList = [_.pickBy(dto, _.identity)];
		if (dto.name) {
			// 模糊查询
			whereOrList.push({
				name: { [Op.like]: `%${dto.name}%` },
			});
		}
		const options: FindPaginationOptions = {
			where: Object.keys(dto).length > 0 ? { [Op.or]: whereOrList } : {}, //删除对象中为空的属性
			include: [{ all: true }],
			pagination,
		};
		const result = await User.findPagination<User>(options);
		return result;
	}

	/**
	 * 获取绑定微信的二维码
	 */
	public async getWechatBindQrcode(userId: number) {
		let sceneStr = `ACTION:BIND#${userId}`;
		const { ticket, url } = await this.weChatService.qrcodeCreate(sceneStr);
		const wechatScanLog = await WechatScanLog.findOne({
			where: {
				ticket: ticket,
			},
		});
		if (!wechatScanLog) {
			await WechatScanLog.create({ userId, ticket, sceneStr, status: WechatScanLogStatus.waitScan });
		} else {
			wechatScanLog.status = WechatScanLogStatus.waitScan;
			await wechatScanLog.save();
		}
		return { ticket, url };
	}
	/**
	 * 获取登录微信的二维码
	 */
	public async getWechatLoginQrcode() {
		let sceneStr = `ACTION:LOGIN#`;
		const { ticket, url } = await this.weChatService.qrcodeCreate(sceneStr);
		const wechatScanLog = await WechatScanLog.findOne({
			where: {
				ticket: ticket,
			},
		});
		if (!wechatScanLog) {
			await WechatScanLog.create({ ticket, sceneStr, status: WechatScanLogStatus.waitScan });
		} else {
			wechatScanLog.status = WechatScanLogStatus.waitScan;
			await wechatScanLog.save();
		}
		return { ticket, url };
	}
}
