import { Module } from '@nestjs/common';
import { ChemicalComponentController } from './chemicalComponent.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { ParseModule } from '@library/parse';
import { User, entry } from '@model/index';
import { ChemicalComponentService } from './chemicalComponent.service';
@Module({
	imports: [
		ConfigModule,
		RedisModule,
		ParseModule,
		SequelizeModule.forFeature([User, entry]),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [ChemicalComponentController],
	providers: [ChemicalComponentService],
	exports: [],
})
export class ChemicalComponentModule {}
