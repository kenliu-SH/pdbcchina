import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { NavBar } from '@model/navBar.model';
import { NavBarItem } from '@model/navBarItem.model';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { NavBarController } from './navBar.controller';
import { NavBarService } from './navBar.service';

@Module({
	imports: [
		ConfigModule,
		RedisModule,
		// SequelizeModule.forFeature([Deposit, DepositItem]),
		SequelizeModule.forFeature([NavBar, NavBarItem]),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [NavBarController],
	providers: [NavBarService],
	exports: [],
})
export class NavBarModule {}
