import { Module } from '@nestjs/common';
import { ThemeController } from './theme.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@common/constant';
import { sign } from 'crypto';
import { ThemeService } from './theme.service';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { Theme } from '@model/index';
@Module({
  imports: [
    ConfigModule,
    RedisModule,
    SequelizeModule.forFeature([Theme]),
    JwtModule.register({
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn }
    })
  ],
  controllers: [ThemeController],
  providers: [ThemeService],
  exports: []
})
export class ThemeModule {}
