import { Module } from '@nestjs/common'
import { BannerController } from './banner.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { JwtModule } from '@nestjs/jwt'
import { JWT_CONSTANTS } from '@common/constant'
import { Banner } from '@model/banner.model'
import { sign } from 'crypto'
import { BannerService } from './banner.service'
import { ConfigModule } from '@library/configs'
import { RedisModule } from '@library/redis'
import { User } from '@model/index'
@Module({
  imports: [
    ConfigModule,
    RedisModule,
    SequelizeModule.forFeature([Banner, User]),
    JwtModule.register({
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
    }),
  ],
  controllers: [BannerController],
  providers: [BannerService],
  exports: [],
})
export class BannerModule {}
