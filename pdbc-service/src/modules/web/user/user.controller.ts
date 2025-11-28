import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, UseInterceptors, UploadedFile, Req, HttpException } from '@nestjs/common';
import { WebController } from '@core/decorator/controller';
import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto, updataUserDto } from './user.dto';
import { User } from '@model/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { Sms } from '@model/sms.model';
import { Op } from '@model/shared';
import { OpenAuthorize } from '@core/decorator/authorize';
import ERR from '@common/ERR';
import { JwtService } from '@nestjs/jwt';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadDto } from '@modules/admin/user/user.dto';
import { Role } from '@model/role.model';
import { MailService } from '@library/mail';
import { WechatScanLog } from '@model/wechatScanLog.model';
import { VerificationService } from '../verification/verification.service';
import { WechatScanLogStatus } from '@common/constant';

@ApiTags('user')
@ApiBearerAuth()
@WebController('user')
export class UserController {
	constructor(
		private readonly service: UserService,
		private readonly jwtService: JwtService,
		@InjectModel(User)
		private userModel: typeof User,
		@InjectModel(Sms)
		private smsModel: typeof Sms,
		private readonly verificationService: VerificationService,
	) {}

	@OpenAuthorize()
	@ApiOperation({ summary: '注册' })
	@HttpCode(HttpStatus.OK)
	@Post('/register')
	async create(@Body() dto: CreateUserDto) {
		const result = await this.service.create(dto);
		return result;
	}

	// 验证邮箱
	@ApiOperation({ summary: '验证邮箱' })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Get('/verification/:authCode')
	async verifyEmail(@Param('authCode') authCode: string) {
		const isVerified = await this.verificationService.verifyEmail(authCode);
		if (isVerified) {
			return '邮箱验证成功';
		} else {
			throw ERR.INVALID_AUTH_CODE;
		}
	}

	@ApiOperation({ summary: '登录' })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Post('/token')
	async login(@Body() dto: LoginUserDto) {
		const result = await this.service.login(dto);
		return result;
	}

	@ApiOperation({ summary: '用户信息' })
	@HttpCode(HttpStatus.OK)
	@Get('/')
	async find(@Req() req: any) {
		const user = await User.findOne({
			where: { id: req.user['id'] },
			attributes: ['id', 'firstname', 'lastname', 'nickname', 'surname', 'email', 'photoLink', 'openId'],
		});
		return { user: user };
	}

	// 修改用户信息
	@ApiOperation({ summary: '修改用户信息' })
	@HttpCode(HttpStatus.OK)
	@Put('/')
	async update(@Req() req: any, @Body() dto: updataUserDto) {
		const user = await User.findOne({
			where: { id: req.user['id'] },
			attributes: ['id', 'firstname', 'lastname', 'nickname', 'surname', 'email', 'photoLink', 'openId'],
		});
		if (user) {
			user.firstname = dto.firstname;
			user.lastname = dto.lastname;
			user.nickname = dto.nickname;
			user.surname = dto.surname;
			user.email = dto.email;
			user.photoLink = dto.photoLink;
			await user.save();
		}
		return { user: user };
	}

	// 公共上传图片
	@ApiOperation({ summary: '文件上传，接收 multipart/form-data 的数据' })
	@ApiConsumes('multipart/form-data')
	@ApiBody({
		description: '文件上传',
		type: FileUploadDto,
	})
	@OpenAuthorize()
	@Post('file')
	@UseInterceptors(
		FileInterceptor('file', {
			limits: {
				fieldSize: 9999999,
			},
		}),
	)
	uploadFile(@UploadedFile() file) {
		return file.url.replace('http://cdn-stgame.oss-cn-hangzhou.aliyuncs.com/', 'https://c.stgame.cn/');
	}

	/**
	 * 获取绑定微信的二维码
	 */
	@ApiOperation({ summary: '获取绑定微信的二维码' })
	@Get('wechat/bind/qrcode')
	async getWechatBindQrcode(@Req() req: any) {
		return await this.service.getWechatBindQrcode(req.user['id']);
	}

	/**
	 * 获取微信登录状态
	 */
	@ApiOperation({ summary: '获取微信绑定状态' })
	@Get('wechat/bind/status/:ticket')
	async getWechatBindStatus(@Req() req: any, @Param('ticket') ticket: string) {
		const wechatScanLog = await WechatScanLog.findOne({
			where: {
				ticket: ticket,
			},
		});
		if (!wechatScanLog) {
			throw new HttpException('ticket 不存在', HttpStatus.BAD_REQUEST);
		}
		return {
			status: wechatScanLog.status,
		};
	}

	/**
	 * 获取微信登录的二维码
	 */
	@OpenAuthorize()
	@ApiOperation({ summary: '获取微信登录的二维码' })
	@Get('wechat/login/qrcode')
	async getWechatLoginQrcode(@Req() req: any) {
		return await this.service.getWechatLoginQrcode();
	}

	/**
	 * 获取微信登录/绑定状态
	 */
	@OpenAuthorize()
	@ApiOperation({ summary: '获取微信登录状态（扫码后会返回token）' })
	@Get('wechat/login/status/:ticket')
	async getWechatLoginStatus(@Req() req: any, @Param('ticket') ticket: string) {
		const wechatScanLog = await WechatScanLog.findOne({
			where: {
				ticket: ticket,
			},
		});
		let token = '';
		let user = null;
		if (!wechatScanLog) {
			throw new HttpException('ticket 不存在', HttpStatus.BAD_REQUEST);
		}
		if (wechatScanLog.status == WechatScanLogStatus.scanned) {
			// 已扫码
			user = await User.findOne({
				where: {
					id: wechatScanLog.userId,
				},
			});
			if (user) {
				token = this.jwtService.sign({ userID: user.id });
			}
		}
		return {
			status: wechatScanLog.status,
			user: user,
			token: token,
		};
	}
}
