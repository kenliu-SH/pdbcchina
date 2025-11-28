import { Module } from '@nestjs/common';
import { HighlightController } from './highlight.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { Highlight } from '@model/highlight.model';
import { sign } from 'crypto';
import { HighlightService } from './highlight.service';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { HighlightTag, User } from '@model/index';
@Module({
  imports: [
    ConfigModule,
    RedisModule,
    SequelizeModule.forFeature([Highlight, User, HighlightTag]),
    JwtModule.register({
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
    }),
  ],
  controllers: [HighlightController],
  providers: [HighlightService],
  exports: [],
})
export class HighlightModule {}
