import { Module } from '@nestjs/common';
import { CollectController } from './collect.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { CollectService } from './collect.service';
import { CollectDto } from './collect.dto';
import { Collect, User, _Entry, entry } from '@model/index';
import { _EntryService } from '../entry/entry.service';
import { ParseModule } from '@library/parse';
import { ParseImplCommon } from '../entry/parse/parseImpl.common';
import { _EntryModule } from '../entry/entry.module';
@Module({
	imports: [
		ConfigModule,
		ParseModule,
		RedisModule,
		_EntryModule,
		SequelizeModule.forFeature([User, Collect, entry, _Entry]),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [CollectController],
	providers: [CollectDto, CollectService],
	exports: [],
})
export class CollectModule {}
