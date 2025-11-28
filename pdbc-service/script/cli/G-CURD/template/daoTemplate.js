const { firstUpperCase } = require("../../util");
const daoTemplate = (modelName) => {
    const modelNameUp = firstUpperCase(modelName);
    return `
  import {
    Op,
    FindOptions,
    Sequelize,
    FindPaginationOptions,
  } from "@model/shared";
  import { HttpException, Injectable } from "@nestjs/common";
  import { InjectModel } from "@nestjs/sequelize";
  import { ${modelNameUp} } from "@model/${modelName}.model";
  import { Find${modelNameUp}PaginationDto, ${modelNameUp}Dto,CreateMany${modelNameUp}Dto,DeleteMany${modelNameUp}Dto,Find${modelNameUp}Dto } from "./${modelName}.dto";
  import { Pagination } from "@common/interface";
  import { ModelIds } from '@common/baseDto';
  import * as _ from "lodash";
  @Injectable()
  export class ${modelNameUp}Dao {
    constructor(
      @InjectModel(${modelNameUp})
      private ${modelName}Model: typeof ${modelNameUp},
      private sequelize: Sequelize
    ) {}
    public async create(dto: ${modelNameUp}Dto) {
      const result = await this.${modelName}Model.create(dto);
      return result;
    }
    public async findPagination(
      dto: Find${modelNameUp}PaginationDto,
      pagination: Pagination
    ) {  
      const options: FindPaginationOptions = {
        where: _.pickBy(dto, _.identity), //删除对象中为空的属性
        pagination,
      };
      const result = await ${modelNameUp}.findPagination<${modelNameUp}>(options);
      return result;
    }
    public async findOne(dto: Find${modelNameUp}Dto) {
      const options: FindOptions = { where: _.pickBy(dto, _.identity) };
      const result = await ${modelNameUp}.findOne(options);
      return result;
    }
    public async update(dto: ${modelNameUp}Dto, id: number) {
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
  
    public async deleteMany(dto: DeleteMany${modelNameUp}Dto) {
      let result = true;
      try {
          dto.ids.forEach(async (vo) => {
            const ${modelName} = await this.${modelName}Model.destroy({
              where:{id:vo}
            });
        });
      } catch (err) {
        result = false
      }
      return result;
    }
  }  
    `;
};


module.exports =  daoTemplate