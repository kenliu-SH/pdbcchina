import { Module } from '@nestjs/common';
import { HighlightsController } from './highlights.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { HighlightsService } from './highlights.service';
import { Highlight, User } from '@model/index';
@Module({
	imports: [
		ConfigModule,
		RedisModule,
		SequelizeModule.forFeature([User, Highlight]),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [HighlightsController],
	providers: [HighlightsService],
	exports: [],
})
export class HighlightsModule {}
