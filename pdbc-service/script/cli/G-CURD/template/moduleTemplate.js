const { firstUpperCase } = require("../../util");
const moduleTemplate = (modelName) => {
    const modelNameUp = firstUpperCase(modelName);
    return `
import { Module } from "@nestjs/common";
import { ${modelNameUp}Controller } from "./${modelName}.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { JwtModule } from "@nestjs/jwt";
import { JWT_CONSTANTS } from "@common/constant";
import { ${modelNameUp} } from "@model/${modelName}.model";
import { sign } from "crypto";
import { ${modelNameUp}Service } from "./${modelName}.service";
import { ConfigModule } from "@library/configs";
import { RedisModule } from '@library/redis';
import { UserDao } from "@modules/user/user/user.dao";
import { AccountDao } from "@modules/admin/account/account.dao";
import { OperatAccount,User } from "@model/index";
@Module({
  imports: [
    ConfigModule,
    RedisModule,
    SequelizeModule.forFeature([${modelNameUp}, OperatAccount,User]),
    JwtModule.register({
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
    }),
  ],
  controllers: [${modelNameUp}Controller],
  providers: [AccountDao, UserDao,${modelNameUp}Service],
  exports: [],
})
export class ${modelNameUp}Module {}
  `;
};

module.exports = moduleTemplate