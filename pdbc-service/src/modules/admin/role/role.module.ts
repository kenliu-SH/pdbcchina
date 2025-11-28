import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { Banner } from '@model/banner.model';
import { sign } from 'crypto';
import { RoleService } from './role.service';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { User } from '@model/index';
import { Role } from '@model/role.model';
@Module({
  imports: [
    ConfigModule,
    RedisModule,
    SequelizeModule.forFeature([Role, User]),
    JwtModule.register({
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
    }),
  ],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [],
})
export class RoleModule {}
