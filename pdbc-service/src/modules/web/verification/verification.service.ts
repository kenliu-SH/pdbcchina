import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import _ = require('lodash');
import { FindOptions, FindPaginationOptions, Op, Sequelize } from '@model/shared';
import { Verification } from '@model/verification.model';
import * as crypto from 'crypto';
import { User } from '@model/user.model';
import { MailService } from '@library/mail';

@Injectable()
export class VerificationService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,

		@InjectModel(User)
		private readonly userModel: typeof User,
		@InjectModel(Verification)
		private readonly verificationModel: typeof Verification,
		private sequelize: Sequelize,
		private readonly configs: ConfigProvider,
		private readonly mailService: MailService,
	) { }

	private smsCacheKey(...args: any[]) {
		return `${this.configs.info.appName}:smsLIST:${JSON.stringify(args)}`;
	}

	public async create(dto: Verification) {
		const result = await this.verificationModel.create(dto);
		return result;
	}

	async sendVerificationEmail(email: string, id: number) {
		const authCode = crypto.randomBytes(20).toString('hex');
		const link = `${this.configs.info.homeUrl}/verify-email?authCode=${authCode}`;
		const html = `<h2>尊敬的用户：</h2>
		<p>感谢您注册我们的网站。请点击下面的按钮验证您的邮箱地址：</p>
		<a href="${link}" class="btn">验证邮箱</a>
			<p>如果您无法点击上面的按钮，请复制以下链接地址到您的浏览器中进行验证：</p>
			<p>${link}</p>
		<p>此邮件由系统自动发送，请勿回复。</p>`;
		// 保存验证码到数据库
		await this.verificationModel.create({ email: email, authCode, userId: id, isVerified: 0 });

		// 发送验证邮件
		await this.mailService.sendMail(email, '欢迎注册我们的网站！', html);
	}

	async verifyEmail(authCode: string) {
		const verification = await this.verificationModel.findOne({
			where: {
				authCode,
				createdAt: {
					// 邮箱有效期为10分钟
					[Op.gt]: new Date(new Date().getTime() - 10 * 60 * 1000),
				},
			},
		});
		if (!verification) {
			return false;
		}

		const user = await this.userModel.findOne({ where: { email: verification.email } });
		if (!user) {
			return false;
		}

		user.isVerify = 1;
		await user.save();
		return true;
	}
}
