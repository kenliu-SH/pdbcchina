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
// import { ${modelNameUp} } from "@model/${modelName}.model";
import {  } from "./${modelName}.dto";
import { Pagination } from "@common/interface";
import { ModelIds } from '@common/baseDto';
import * as _ from "lodash";
@Injectable()
export class ${modelNameUp}Dao {
  constructor(
 //   @InjectModel(${modelNameUp})
 //   private ${modelName}Model: typeof ${modelNameUp},
    private sequelize: Sequelize
  ) {}

}  
  `;
};


module.exports =  daoTemplate