import { Module } from '@nestjs/common';
import { AssemblyController } from './assembly.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { ParseModule } from '@library/parse';
import { User, entry } from '@model/index';
import { AssemblyService } from './assembly.service';
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
	controllers: [AssemblyController],
	providers: [AssemblyService],
	exports: [],
})
export class AssemblyModule {}
