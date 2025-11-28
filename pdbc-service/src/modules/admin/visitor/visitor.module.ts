import { Module } from '@nestjs/common';
import { VisitorController } from './visitor.controller';
import { VisitorService } from './visitor.service';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { Visitor } from '@model/visitor.model';

@Module({
	imports: [
		ConfigModule,
		RedisModule,
		SequelizeModule.forFeature([Visitor]),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [VisitorController],
	providers: [VisitorService],
})
export class VisitorModule {}
