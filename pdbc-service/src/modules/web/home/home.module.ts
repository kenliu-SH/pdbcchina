import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { HomeService } from './home.service';
import { HomeDto } from './home.dto';
import { Banner, EntityFullText, Footer, Theme, User } from '@model/index';
import { _EntryModule } from '../entry/entry.module';
import { MailModule } from '@library/mail';
import { MailService } from '@library/mail/mail.service';
@Module({
	imports: [
		ConfigModule,
		RedisModule,
		_EntryModule,
		MailModule,
		SequelizeModule.forFeature([User, Banner, Footer, Theme, EntityFullText]),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [HomeController],
	providers: [HomeDto, HomeService, MailService],
	exports: [],
})
export class HomeModule {}
