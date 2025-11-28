import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { _Entry } from '@model/entry.model';
import { History } from '@model/history.model';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import { entry } from '@model/mmcif';
import { Highlight } from '@model/highlight.model';
import { News } from '@model/news.model';

@Module({
	imports: [
		ConfigModule,
		RedisModule,
		SequelizeModule.forFeature([History, entry, Highlight, News]),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [HistoryController],
	providers: [HistoryService],
	exports: [],
})
export class HistoryModule {}
