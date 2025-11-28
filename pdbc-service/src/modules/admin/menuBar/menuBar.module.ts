import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';

import { MenuBar } from '@model/menuBar.model';
import { MenuBarItem } from '@model/menuBarItem.model';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { MenuBarController } from './menuBar.controller';
import { MenuBarService } from './menuBar.service';
import { Options } from '@model/options.model';

@Module({
	imports: [
		ConfigModule,
		RedisModule,
		SequelizeModule.forFeature([MenuBar, MenuBarItem, Options]),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [MenuBarController],
	providers: [MenuBarService],
	exports: [],
})
export class MenuBarModule {}
