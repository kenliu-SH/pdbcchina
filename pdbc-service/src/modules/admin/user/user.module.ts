import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { JwtModule } from '@nestjs/jwt'
import { JWT_CONSTANTS } from '@common/constant'
import { User } from '@model/user.model'
import { UserService } from './user.service'
import { ConfigModule } from '@library/configs'
import { RedisModule } from '@library/redis'
import { Sms } from '@model/sms.model'
import { MulterModule } from '@nestjs/platform-express'
import * as MAO from 'multer-aliyun-oss'
import * as uuid from 'uuid'

@Module({
  imports: [
    ConfigModule,
    RedisModule,
    SequelizeModule.forFeature([User, Sms]),
    MulterModule.register({
      storage: MAO({
        config: {
          region: 'oss-cn-hangzhou',
          accessKeyId: '你的ACCESS_KEY_ID_已删除',
          accessKeySecret: 'zFp9ymln7GVflxvtYA12vN4Ok7B4ZV',
          bucket: 'cdn-stgame',
        },
        filename: (req, file, cb) => {
          const filename = `lz1/uploads/${uuid.v4()}.${file.originalname.split('.').pop()
            }`;
          return cb(null, filename)
        },
      }),
    }),
    JwtModule.register({
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule { }
