import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, UseInterceptors, UploadedFile, Req, HttpException } from '@nestjs/common';
import { AdminController, WebController } from '@core/decorator/controller';
import { UserService } from './user.service';
import {
	FindUserPaginationDto,
	DeleteManyUserDto,
	CreateManyUserDto,
	CreateUser,
	FileUploadDto,
	CreateAccountDto,
	LoginAccountDto,
	hashDto,
} from './user.dto';
import { User } from '@model/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { Sms } from '@model/sms.model';
import { Op } from '@model/shared';
import { OpenAuthorize } from '@core/decorator/authorize';
import ERR from '@common/ERR';
import { JwtService } from '@nestjs/jwt';
import { FileInterceptor } from '@nestjs/platform-express';
import { Role } from '@model/role.model';
import { CryptoUtil } from '@library/utils';

@ApiTags('user')
@ApiBearerAuth()
@AdminController('user')
export class UserController {
	constructor(
		private readonly service: UserService,
		private readonly jwtService: JwtService,
		@InjectModel(User)
		private userModel: typeof User,
		@InjectModel(Sms)
		private smsModel: typeof Sms,
	) { }

	@ApiOperation({ summary: '创建账户' })
	@HttpCode(HttpStatus.OK)
	@Post('/account')
	async create(@Body() dto: CreateAccountDto, @Req() req: any) {
		const creatorId = req['user']['id'];
		const user = await this.service.create(dto, creatorId);
		return { token: this.jwtService.sign({ userID: user.id }), user };
	}

	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Post('/token')
	async login(@Body() dto: LoginAccountDto) {
		let user = await this.userModel.findOne({
			where: { accountName: dto.accountName },
			attributes: ['id', 'accountName', 'password', 'loginFailCount', 'lockTime'],
			include: [{ model: Role }],
		});
		console.log('user: ', user);
		if (!user) {
			throw ERR.USER_NOT_EXISTS;
		}
		if (user.lockTime && new Date(user.lockTime).getTime() > new Date().getTime()) {
			throw new HttpException('账号已被锁定，等待15分钟后再登陆或联系管理员', 400);
		}
		const hashedPassword = CryptoUtil.hashing(dto.password);
		console.log('hashedPassword: ', hashedPassword);
		if (hashedPassword !== user.password) {
			console.log('user.loginFailCount00: ', user.loginFailCount);

			if (!user.loginFailCount) {
				user.loginFailCount = 0
			}
			user.loginFailCount = user.loginFailCount + 1;

			// 锁定10分钟
			if (user.loginFailCount >= 5) {
				user.loginFailCount = 0;
				user.lockTime = new Date(new Date().getTime() + (15 * 60 * 1000));
				await user.save();
				throw new HttpException('账号已被锁定，等待15分钟后再登陆或联系管理员', 400);
			}
			await user.save();
			throw new HttpException(`密码错误，连续五次密码错误您的账户将会被锁定`, 400);
		}
		user.lockTime = null;
		user.loginFailCount = 0;
		await user.save();
		delete user.password;
		return { token: this.jwtService.sign({ userID: user.id }), user };
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '更改账号信息' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Put(':id')
	async edit(@Body() dto: CreateAccountDto, @Param() params) {
		const { id } = params;
		const result = await this.service.edit(dto, id);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '获取账户信息' })
	@Get('/user')
	async find(@Req() req: any) {
		let account = await this.service.find(req.user['id']);
		if (account) {
			account = await account.reload({
				where: {},
				include: [{ model: Role }],
			});
		}
		const user = await User.findOne({
			where: { id: req.user['id'] },
			include: [{ model: Role }],
		});

		return { user: user, account };
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '筛选账户列表' })
	@Get('find/account')
	async findPagination(@Query() dto: FindUserPaginationDto, @CurrentPage() pagination: Pagination) {
		const result = await this.service.findPagination(dto, pagination);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '删除账户' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Delete(':id')
	async delete(@Param() params) {
		const { id } = params;
		const result = await this.service.delete(id);
		return result;
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
}