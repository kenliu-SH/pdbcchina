import { Module } from '@nestjs/common';
import { NoticeController } from './notice.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { Notice } from '@model/notice.model';
import { NoticeService } from './notice.service';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { User } from '@model/index';
@Module({
	imports: [
		ConfigModule,
		RedisModule,
		SequelizeModule.forFeature([Notice, User]),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [NoticeController],
	providers: [NoticeService],
	exports: [],
})
export class NoticeModule {}
