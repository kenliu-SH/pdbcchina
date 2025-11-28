import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { SystemConfigController } from './systemConfig.controller';
import { SystemConfigService } from './systemConfig.service';
import { SystemConfig } from '@model/systemConfig.model';

@Module({
	imports: [
		ConfigModule,
		RedisModule,
		SequelizeModule.forFeature([SystemConfig]),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [SystemConfigController],
	providers: [SystemConfigService],
	exports: [],
})
export class SystemConfigModule {}
