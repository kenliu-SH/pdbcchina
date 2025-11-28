const { firstUpperCase } = require('../../util')
const controllerTemplate = (modelName) => {
  const modelNameUp = firstUpperCase(modelName);
  return `
import { ApiBearerAuth, ApiTags,ApiOperation } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get,Req ,HttpCode, HttpStatus,Param, Post, Query,Put,Delete } from '@nestjs/common';
import {WebController} from '@core/decorator/controller'
import { ${modelNameUp}Service } from './${modelName}.service';
import {${modelNameUp}Dto} from './${modelName}.dto';
import { Request } from "express";

@ApiTags('模块分组')
@ApiBearerAuth()
@WebController('${modelName}')
export class ${modelNameUp}Controller {
  constructor(private readonly service: ${modelNameUp}Service) {}
  @ApiOperation({summary:"接口简要"})
  @HttpCode(HttpStatus.OK)
  @Get('/')
  async create(@Body() dto: ${modelNameUp}Dto, @Req() request: Request) {
  }
}
  `;
}

module.exports = controllerTemplate