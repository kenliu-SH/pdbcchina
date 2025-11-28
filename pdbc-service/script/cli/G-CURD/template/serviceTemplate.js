const { firstUpperCase } = require("../../util");
const serviceTemplate = (modelName) => {
  const modelNameUp = firstUpperCase(modelName);
  return `
  import { SuperRedis } from '@sophons/redis';
  import { Pagination } from '@common/interface';
  import { RedisProvider } from '@library/redis';
  import { ConfigProvider } from '@library/configs';
  import { InjectModel } from "@nestjs/sequelize";
  import { HttpException, Inject, Injectable } from "@nestjs/common";
  import _ = require("lodash");
  import { FindOptions, FindPaginationOptions, Sequelize } from "@model/shared";
  import { ${modelNameUp} } from "@model/${modelName}.model";
  import { Find${modelNameUp}PaginationDto,Find${modelNameUp}Dto, CreateMany${modelNameUp}Dto,DeleteMany${modelNameUp}Dto } from './${modelName}.dto';
  
  @Injectable()
  export class ${modelNameUp}Service {
  
  constructor(
    @Inject(RedisProvider.local)
    private readonly redis: SuperRedis,
  
    @InjectModel(${modelNameUp})
    private ${modelName}Model: typeof ${modelNameUp},
    private sequelize: Sequelize,
    private readonly configs: ConfigProvider,
  ) {}
  
  private ${modelName}CacheKey(...args: any[]) {
    return \`\${this.configs.info.appName}:${modelName}LIST:\${JSON.stringify(args)}\`;
  }
  
  public async create(dto: ${modelNameUp}) {
    const result = await this.${modelName}Model.create(dto);
    return result;
  }
  
  public async createMany(dto: CreateMany${modelNameUp}Dto) {
    let result: ${modelNameUp}[];
      const ${modelName}s: ${modelNameUp}[] = [];
      try {
        result = await this.sequelize.transaction(async (t) => {
          const transactionHost = { transaction: t };
          dto.${modelName}s.forEach(async (vo) => {
            const ${modelName} = await this.${modelName}Model.create(vo, transactionHost);
            ${modelName}s.push(${modelName});
          });
          // Transaction 会自动提交
          // result 是事务回调中使用promise链中执行结果
          return ${modelName}s;
        });
      } catch (err) {
        // Transaction 会自动回滚
        // err 是事务回调中使用promise链中的异常结果
      }
      return result;
  }
  
  public async edit(dto: ${modelNameUp},id: number) {
    let ${modelName} = await this.${modelName}Model.findOne({ where: { id } });
    if (!${modelName}) {
      throw new HttpException(null, 500001);
    }
    await ${modelName}.update(dto);
    ${modelName} = await this.${modelName}Model.findOne({ where: { id } });
    return ${modelName};
  }
  
  public async delete(id: number) {
    const result = await this.${modelName}Model.destroy({
      where: {
        id: id,
      },
    });
    return result;
  }
  
  public async deleteMany(dto: DeleteMany${modelNameUp}Dto) {
    let successCount = 0;
    let result = true;
      try {
        for (let index = 0; index < dto.ids.length; index++) {
            const ${modelName} = await this.${modelName}Model.destroy({
              where:{id:vo}
            });
        }
      } catch (err) {
        throw new HttpException(null,400037)
      }
      if(successCount<dto.ids.length){
        throw new HttpException(null, 400037);
      }
      return result;
  }
  
  public async find(id: number) {
    const options: FindOptions = { where: {id},include: [{ all: true }] };
    const result = await ${modelNameUp}.findOne(options);
    return result;
  }
  
  public async findPagination(dto: Find${modelNameUp}PaginationDto, pagination: Pagination) {
    const key = this.${modelName}CacheKey(dto, pagination);
  
    const result = await this
      .redis
      .cache({ key, ttl: 10, next: this.findPaginationDao })
      .with(dto, pagination);
  
    return result;
  }

  public async findPaginationDao(
    dto: any,
    pagination: Pagination
  ) {  
    const whereOrList = [_.pickBy(dto, _.identity)];
    if (dto.name) {
      // 模糊查询
      whereOrList.push({
        name: { [Op.like]: \`%\${dto.name}%\` },
      });
    }
    const options: FindPaginationOptions = {
      where: Object.keys(dto).length > 0 ? { [Op.or]: whereOrList } : {}, //删除对象中为空的属性
      include:[{all:true}],
      pagination,
    };
    const result = await ${modelNameUp}.findPagination<${modelNameUp}>(options);
    return result;
  }
  }
    `;
};

module.exports = serviceTemplate
