import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { _EntryService } from '../../web/entry/entry.service';
import { User } from '@model/user.model';
import { _Entry } from '@model/entry.model';
import { ParseModule } from '@library/parse';
import { entry } from '@model/mmcif';
import { ParseImplCommon } from '@modules/web/entry/parse/parseImpl.common';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';
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
	controllers: [EntryController],
	providers: [EntryService, ParseImplCommon],
	exports: [EntryService, ParseImplCommon],
})
export class _EntryModule {}
