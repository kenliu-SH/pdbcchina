import { Module } from '@nestjs/common';
import { _EntryController } from './entry.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { _EntryService } from './entry.service';
import { _EntryDto } from './entry.dto';
import { User } from '@model/user.model';
import { _Entry } from '@model/entry.model';
import { ParseModule } from '@library/parse';
import { entry } from '@model/mmcif';
import { ParseImplCommon } from './parse/parseImpl.common';
import { FileServiceV2 } from '../filev2/filev2.service';
import { FileV2Module } from '../filev2/filev2.module';
@Module({
	imports: [
		ConfigModule,
		RedisModule,
		ParseModule,
		SequelizeModule.forFeature([User, _Entry, entry]),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [_EntryController],
	providers: [_EntryService, ParseImplCommon],
	exports: [_EntryService, ParseImplCommon],
})
export class _EntryModule {}
