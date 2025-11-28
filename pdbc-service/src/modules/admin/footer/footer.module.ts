import { JWT_CONSTANTS } from '@common/constant';
import { ConfigModule } from '@library/configs';
import { RedisModule } from '@library/redis';
import { Footer } from '@model/footer.model';
import { FooterItem } from '@model/footerItem.model';
import { Tag } from '@model/tag.model';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { FooterController } from './footer.controller';
import { FooterService } from './footer.service';

@Module({
  imports: [
    ConfigModule,
    RedisModule,
    SequelizeModule.forFeature([Footer, FooterItem]),
    JwtModule.register({
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
    }),
  ],
  controllers: [FooterController],
  providers: [FooterService],
  exports: [],
})
export class FooterModule {}
