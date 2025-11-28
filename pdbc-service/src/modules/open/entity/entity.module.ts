import { Module } from '@nestjs/common';
import { EntityController } from './entity.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { ParseModule } from '@library/parse';
import { User, entry } from '@model/index';
import { EntityService } from './entity.service';
import { EntityInstanceController } from './entityInstance.controller';
import { EntityInstanceService } from './entityInstance.service';
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
	controllers: [EntityController, EntityInstanceController],
	providers: [EntityService, EntityInstanceService],
	exports: [],
})
export class EntityModule {}
