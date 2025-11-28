import { Module } from '@nestjs/common'
import { FileV2Controller } from './filev2.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { JwtModule } from '@nestjs/jwt'
import { JWT_CONSTANTS } from '@common/constant'
import { ConfigModule } from '@library/configs'
import { RedisModule } from '@library/redis'
import { FileServiceV2 } from './filev2.service'
import { ParseModule } from '@library/parse'
import { User } from '@model/index'
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
  controllers: [FileV2Controller],
  providers: [FileServiceV2],
  exports: [],
})
export class FileV2Module { }
