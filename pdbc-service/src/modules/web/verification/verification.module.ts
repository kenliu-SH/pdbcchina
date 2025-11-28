import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { Sms } from '@model/sms.model';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { User } from '@model/user.model';
import { Verification } from '@model/verification.model';
import { VerificationService } from './verification.service';
import { MailModule } from '@library/mail';

@Module({
	imports: [
		ConfigModule,
		RedisModule,
		MailModule,
		SequelizeModule.forFeature([Verification, User]),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [],
	providers: [VerificationService],
	exports: [VerificationService],
})
export class VerificationModule {}
