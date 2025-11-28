import { Module } from '@nestjs/common'
import { SmsController } from './sms.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { JwtModule } from '@nestjs/jwt'
import { JWT_CONSTANTS } from '@common/constant'
import { Sms } from '@model/sms.model'
import { SmsService } from './sms.service'
import { ConfigModule } from '@library/configs'
import { RedisModule } from '@library/redis'
import { User } from '@model/user.model'

@Module({
  imports: [
    ConfigModule,
    RedisModule,
    SequelizeModule.forFeature([Sms, User]),
    JwtModule.register({
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
    }),
  ],
  controllers: [SmsController],
  providers: [SmsService],
  exports: [],
})
export class SmsModule {}
