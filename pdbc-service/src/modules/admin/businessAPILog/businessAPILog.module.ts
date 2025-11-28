
import { Module } from "@nestjs/common";
import { BusinessAPILogController } from "./businessAPILog.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { JwtModule } from "@nestjs/jwt";
import { JWT_CONSTANTS } from "@common/constant";
import { sign } from "crypto";
import { ConfigModule } from "@library/configs";
import { RedisModule } from '@library/redis';
import { BusinessAPILog } from "@model/businessAPILog.model";
import { BusinessAPILogService } from "./businessAPILog.service";
import { structKeywords } from "@model/index";
@Module({
  imports: [
    ConfigModule,
    RedisModule,
    SequelizeModule.forFeature([BusinessAPILog]),
    JwtModule.register({
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
    }),
  ],
  controllers: [BusinessAPILogController],
  providers: [BusinessAPILogService],
  exports: [],
})
export class BusinessAPILogModule { }
