const { firstUpperCase } = require("../../util");
const serviceTemplate = (modelName) => {
  const modelNameUp = firstUpperCase(modelName);
  return `
import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
// import { ${modelNameUp} } from "@model/${modelName}.model";
import { Inject, Injectable } from '@nestjs/common';
import {  } from './${modelName}.dto';

@Injectable()
export class ${modelNameUp}Service {

constructor(
  @Inject(RedisProvider.local)
  private readonly redis: SuperRedis,
  //   @InjectModel(${modelNameUp})
  //   private ${modelName}Model: typeof ${modelNameUp},
  private readonly configs: ConfigProvider,
) {}

private ${modelName}CacheKey(...args: any[]) {
  return \`\${this.configs.info.appName}:BOOKLIST:\${JSON.stringify(args)}\`;
}
}
    `;
};

module.exports = serviceTemplate
