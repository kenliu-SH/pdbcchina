import { Module } from '@nestjs/common';
import { SubscribeController } from './subscribe.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { SubscribeService } from './subscribe.service';
import { SubscribeDto } from './subscribe.dto';
import { SubscribeRule, User } from '@model/index';
import { SearchModule } from '../search/search.module';
@Module({
	imports: [
		ConfigModule,
		RedisModule,
		SearchModule,
		SequelizeModule.forFeature([User, SubscribeRule]),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [SubscribeController],
	providers: [SubscribeDto, SubscribeService],
	exports: [],
})
export class SubscribeModule {}
