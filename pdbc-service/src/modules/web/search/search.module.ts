import { forwardRef, Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { SearchService } from './search.service';
import { SearchDto } from './search.dto';
import { User } from '@model/user.model';
import { _Entry } from '@model/entry.model';
import { Collect } from '@model/collect.model';
import { _EntryModule } from '../entry/entry.module';
import { ParseModule } from '@library/parse';
import { MeilisearchModule } from '@library/meilisearch';
import { _EntryService } from '../entry/entry.service';
import { entry } from '@model/mmcif';
import { ParseImplCommon } from '../entry/parse/parseImpl.common';
@Module({
	imports: [
		ConfigModule,
		ParseModule,
		RedisModule,
		MeilisearchModule,
		SequelizeModule.forFeature([User, _Entry, Collect, entry]),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [SearchController],
	providers: [SearchService, _EntryService, ParseImplCommon],
	exports: [SearchService],
})
export class SearchModule {}
