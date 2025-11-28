import { Module } from '@nestjs/common';
import { OptionsController } from './options.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { OptionsService } from './options.service';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { MenuBar, NavBar, Options, User } from '@model/index';
@Module({
	imports: [
		ConfigModule,
		RedisModule,
		SequelizeModule.forFeature([User, Options, MenuBar, NavBar]),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [OptionsController],
	providers: [OptionsService],
	exports: [],
})
export class OptionsModule {}
