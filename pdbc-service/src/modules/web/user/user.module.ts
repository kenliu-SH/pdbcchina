import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { User } from '@model/user.model';
import { UserService } from './user.service';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { Sms } from '@model/sms.model';
import { MulterModule } from '@nestjs/platform-express';
import * as MAO from 'multer-aliyun-oss';
import * as uuid from 'uuid';
import { MailModule } from '@library/mail';
import { WeChatModule } from '@library/wechat';
import { Verification } from '@model/verification.model';
import { VerificationModule } from '../verification/verification.module';
@Module({
	imports: [
		ConfigModule,
		RedisModule,
		MailModule,
		VerificationModule,
		SequelizeModule.forFeature([User, Sms, Verification]),
		WeChatModule,
		MulterModule.register({
			storage: MAO({
				config: {
					region: 'oss-cn-hangzhou',
					accessKeyId: '你的ACCESS_KEY_ID_已删除',
					accessKeySecret: 'zFp9ymln7GVflxvtYA12vN4Ok7B4ZV',
					bucket: 'cdn-stgame',
				},
				filename: (req, file, cb) => {
					console.log(333, file);

					const filename = `lz1/uploads/${uuid.v4()}.${file.originalname.split('.').pop()
						}`;
					return cb(null, filename);
				},
			}),
		}),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [UserController],
	providers: [UserService],
	exports: [],
})
export class UserModule { }
