const fs = require("fs");
const modelPath = "../src/model/";
const fieldAndtypeRe = /\w+:\s(string|number|object)/g;
const commentRe = /comment:\s"\w+[\s\S]\w+/g; //

const main = async function () {
  // 获取模型成员列表 [{ name: 'title', type: ' String', comment: 'book title' }]
  const models = await getModelObjs("book");
  const dto = moduleDto("book", models);
  const dao = moduleDao("book", models);
  const service = moduleService("book", models);
  const controller = moduleController("book", models);
  const _module = __module("book");

  //写入文件
  writeFile("book", dto, dao, service, controller, _module);
};

main();

// 业务方法

async function getModelObjs(modelName) {
  const arr = [];
  const path = modelPath + modelName + ".model.ts";
  // 获取字段名和属性列表 字段名:属性
  const fieldsAndTypes = await getReArr(path, fieldAndtypeRe);
  // 获取注释列表 comment: "项目名",
  const commens = await getReArr(path, commentRe);
  for (let index = 0; index < fieldsAndTypes.length; index++) {
    const fieldsAndTypeStr = fieldsAndTypes[index];
    const commenTypeStr = commens[index];
    const vo = {
      name: fieldsAndTypeStr.split(":")[0],
      type: firstUpperCase(fieldsAndTypeStr.split(":")[1]),
      comment: commenTypeStr.replace('comment: "', "").replace('",', ""),
    };

    arr.push(vo);
  }
  return arr;
}

// 从模型中匹配正则，返回数组结果
function getReArr(path, re) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        const fields = [];
        let arr;
        while ((arr = re.exec(data)) != null) {
          fields.push(arr[0]);
        }
        resolve(fields);
      }
    });
  });
}

// 工具

// 首字母大写
function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

function writeFile(modelName, dto, dao, service, controller, _module) {
  const modulesPath = "../src/modules/user/" + modelName;
  if (!fs.existsSync(modulesPath)) {
    fs.mkdir(modulesPath, (err) => {
      // 创建失败
      if (err) throw err;

      // 创建成功
      console.log("文件创建成功！");
    });
  }

  fs.writeFile(
    modulesPath + `/${modelName}.dto.ts`,
    dto,
    "utf8",
    function (error) {
      if (error) {
        console.log(error);
        return false;
      }
      console.log("写入成功");
    }
  );

  fs.writeFile(
    modulesPath + `/${modelName}.dao.ts`,
    dao,
    "utf8",
    function (error) {
      if (error) {
        console.log(error);
        return false;
      }
      console.log("写入成功");
    }
  );
  fs.writeFile(
    modulesPath + `/${modelName}.service.ts`,
    service,
    "utf8",
    function (error) {
      if (error) {
        console.log(error);
        return false;
      }
      console.log("写入成功");
    }
  );
  fs.writeFile(
    modulesPath + `/${modelName}.controller.ts`,
    controller,
    "utf8",
    function (error) {
      if (error) {
        console.log(error);
        return false;
      }
      console.log("写入成功");
    }
  );

  fs.writeFile(
    modulesPath + `/${modelName}.module.ts`,
    _module,
    "utf8",
    function (error) {
      if (error) {
        console.log(error);
        return false;
      }
      console.log("写入成功");
    }
  );
}

// 模板

const moduleDto = (modelName, arr) => {
  console.log(1111,arr);
  return `
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ModelIds } from '@common/baseDto';

export class ${firstUpperCase(modelName)}Dto{
    ${arr
      .map(
        (vo) => `
      @ApiProperty({ name: '${vo.name}', type: ${vo.type}, required: false, description: '${vo.comment}' })
      userName: ${vo.type};
    `
      )
      .join("")}
}
export class Find${firstUpperCase(
    modelName
  )}PaginationDto extends ${firstUpperCase(modelName)}Dto {
  @ApiProperty({ name: 'order', type: String, required: false, description: 'order' })
  order?: string;
  @ApiProperty({ name: 'page', type: String, required: false, description: 'page' })
  page?: string;
  @ApiProperty({ name: 'pageSize', type: String, required: false, description: 'pageSize' })
  pageSize?: string;
}
export class CreateMany${firstUpperCase(modelName)}Dto{
  @IsNotEmpty({ message: '传入列表不能为空' })
  @ApiProperty({ name: '${modelName}s', type: [${firstUpperCase(
    modelName
  )}Dto], required: true, description: '列表' })
  ${modelName}s:${firstUpperCase(modelName)}Dto[];
}
export class DeleteMany${firstUpperCase(modelName)}Dto{
  @IsNotEmpty({ message: '传入列表不能为空' })
  @ApiProperty({ name: 'ids', type: [ModelIds], required: true, description: '列表' })
  ids:ModelIds[];
}
export class Find${firstUpperCase(modelName)}Dto extends ${firstUpperCase(
    modelName
  )}Dto {
  @ApiProperty({ name: 'id', type: String, required: false, description: '主键' })
  id?: string;
}
  `;
};

const moduleDao = (modelName, arr) => {
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
import { Find${modelNameUp}PaginationDto, ${modelNameUp}Dto,CreateMany${modelNameUp}Dto,DeleteMany${modelNameUp}Dto } from "./${modelName}.dto";
import { Pagination } from "@common/interface";
import { ModelIds } from '@common/baseDto';
import * as _ from "lodash";
@Injectable()
export class ${modelNameUp}Dao {
  constructor(
    @InjectModel({${modelNameUp}})
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
    const result = await this.${modelName}Model.findPagination<${modelNameUp}>(options);
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
            where:{id:vo.id}
          });
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

const moduleService = (modelName, arr) => {
  const modelNameUp = firstUpperCase(modelName);
  return `
import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
import { Inject, Injectable } from '@nestjs/common';

import { ${modelNameUp}Dao } from './${modelName}.dao';
import { Find${modelNameUp}PaginationDto, ${modelNameUp}Dto,Find${modelNameUp}Dto, CreateMany${modelNameUp}Dto,DeleteMany${modelNameUp}Dto } from './${modelName}.dto';

@Injectable()
export class ${modelNameUp}Service {

constructor(
  @Inject(RedisProvider.local)
  private readonly redis: SuperRedis,

  private readonly dao: ${modelNameUp}Dao,
  private readonly configs: ConfigProvider,
) {}

private ${modelName}CacheKey(...args: any[]) {
  return \`\${this.configs.info.appName}:BOOKLIST:\${JSON.stringify(args)}\`;
}

public async create(dto: ${modelNameUp}Dto) {
  const result = await this.dao.create(dto);
  return result;
}

public async createMany(dto: CreateMany${modelNameUp}Dto) {
  const result = await this.dao.createMany(dto);
  return result;
}

public async edit(dto: ${modelNameUp}Dto,id: number) {
  await this.dao.update(dto,id);
}

public async delete(id: number) {
  await this.dao.delete(id);
}

public async deleteMany(dto: DeleteMany${modelNameUp}Dto) {
  await this.dao.deleteMany(dto);
}

public async find(dto: Find${modelNameUp}Dto) {
  const result = await this.dao.findOne(dto);
  return result;
}

public async findPagination(dto: Find${modelNameUp}PaginationDto, pagination: Pagination) {
  const key = this.${modelName}CacheKey(dto, pagination);

  const result = await this
    .redis
    .cache({ key, ttl: 600, next: this.dao.findPagination })
    .with(dto, pagination);

  return result;
}
}
  `;
};

const moduleController = (modelName, arr) => {
  const modelNameUp = firstUpperCase(modelName);
  return `
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, HttpCode, HttpStatus,Param, Post, Query,Put,Delete } from '@nestjs/common';
import {WebController} from '@core/decorator/controller'
import { ${modelNameUp}Service } from './${modelName}.service';
import {${modelNameUp}Dto, Find${modelNameUp}Dto, Find${modelNameUp}PaginationDto, DeleteMany${modelNameUp}Dto , CreateMany${modelNameUp}Dto } from './${modelName}.dto';

@ApiTags('${modelName}')
@ApiBearerAuth()
@WebController('${modelName}')
export class ${modelNameUp}Controller {
  constructor(private readonly service: ${modelNameUp}Service) {}

  @Post('/')
  async create(@Body() dto: ${modelNameUp}Dto) {
    const result = await this.service.create(dto);
    return result;
  }

  @Post('createMany')
  async createMany(@Body() dto: CreateManyBookDto) {
    const result = await this.service.createMany(dto);
    return result;
  }

  @Put(':id')
  async edit(@Body() dto: ${modelNameUp}Dto,id: number,@Param() params) {
    const {id} = params
    const result = await this.service.edit(dto,id);
    return result;
  }

  @Delete(':id')
  async delete(@Param() params) {
    const {id} = params
    const result = await this.service.delete(id);
    return result;
  }

  @Delete('deleteMany')
  async deleteMany(@Body() dto: DeleteMany${modelNameUp}Dto) {
    const result = await this.service.deleteMany(dto);
    return result;
  }

  @Get('find')
  async find(@Query() dto: Find${modelNameUp}Dto) {
    const result = await this.service.find(dto);
    return result;
  }

  @Get('findPagination')
  async findPagination(
    @Query() dto: Find${modelNameUp}PaginationDto,
    @CurrentPage() pagination: Pagination,
  ) {
    const result = await this.service.findPagination(dto, pagination); 
    return result;
  }
}
  `;
};

const __module = (modelName) => {
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
import { ${modelNameUp}Dto } from "./${modelName}.dto";
import { ${modelNameUp}Dao } from "./${modelName}.dao";
import { UserDao } from "@modules/user/user/user.dao";
import { AccountDao } from "@modules/admin/account/account.dao";
import { OperatAccount,User } from "@model/index";
@Module({
  imports: [
    SequelizeModule.forFeature([${modelNameUp}, OperatAccount,User]),
    JwtModule.register({
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: JWT_CONSTANTS.accessTokenExpiresIn },
    }),
  ],
  controllers: [${modelNameUp}Controller],
  providers: [${modelNameUp}Dao, ${modelNameUp}Dto, AccountDao, UserDao,${modelNameUp}Service],
  exports: [],
})
export class ${modelNameUp}Module {}
  `;
};
