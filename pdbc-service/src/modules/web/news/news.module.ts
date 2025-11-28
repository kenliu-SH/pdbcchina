import { Module } from '@nestjs/common'
import { NewsController } from './news.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { JwtModule } from '@nestjs/jwt'
import { JWT_CONSTANTS } from '@common/constant'
import { News } from '@model/news.model'
import { NewsService } from './news.service'
import { ConfigModule } from '@library/configs'
import { RedisModule } from '@library/redis'
import { User } from '@model/user.model'

@Module({
  imports: [
    ConfigModule,
    RedisModule,
    SequelizeModule.forFeature([News, User]),
    JwtModule.register({
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
    }),
  ],
  controllers: [NewsController],
  providers: [NewsService],
  exports: [],
})
export class NewsModule {}
