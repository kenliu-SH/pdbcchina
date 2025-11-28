import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { FileDto } from './file.dto';
import { ParseModule } from '@library/parse';
import { User } from '@model/index';
import { FileService } from '@modules/web/file/file.service';
@Module({
	imports: [
		ConfigModule,
		RedisModule,
		ParseModule,
		SequelizeModule.forFeature([User]),
		JwtModule.register({
			secret: JWT_CONSTANTS.secret,
			signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
		}),
	],
	controllers: [FileController],
	providers: [FileService],
	exports: [],
})
export class FileModule {}
