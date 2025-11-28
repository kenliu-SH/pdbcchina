import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { Tag } from '@model/tag.model';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
  imports: [
    ConfigModule,
    RedisModule,
    SequelizeModule.forFeature([Tag]),
    JwtModule.register({
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
    }),
  ],
  controllers: [TagController],
  providers: [TagService],
  exports: [],
})
export class TagModule {}
