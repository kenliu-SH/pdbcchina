const {firstUpperCase} = require('../../util')
const controllerTemplate = (modelName)=>{
    const modelNameUp = firstUpperCase(modelName);
    return `
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, HttpCode, HttpStatus,Param, Post, Query,Put,Delete } from '@nestjs/common';
import {WebController} from '@core/decorator/controller'
import { ${modelNameUp}Service } from './${modelName}.service';
import {${modelNameUp}Dto, Find${modelNameUp}PaginationDto, DeleteMany${modelNameUp}Dto , CreateMany${modelNameUp}Dto } from './${modelName}.dto';

@ApiTags('${modelName}')
@ApiBearerAuth()
@WebController('${modelName}')
export class ${modelNameUp}Controller {
  constructor(private readonly service: ${modelNameUp}Service) {}
  @HttpCode(HttpStatus.OK)
  @Post('/')
  async create(@Body() dto: ${modelNameUp}) {
    const result = await this.service.create(dto);
    return result;
  }
  @HttpCode(HttpStatus.OK)
  @Post('createMany')
  async createMany(@Body() dto: CreateMany${modelNameUp}Dto) {
    const result = await this.service.createMany(dto);
    return result;
  }
  @HttpCode(HttpStatus.OK)
  @ApiParam({name:"id",required:true,description:"id",type:Number})
  @Put(':id')
  async edit(@Body() dto: ${modelNameUp},@Param() params) {
    const {id} = params
    const result = await this.service.edit(dto,id);
    return result;
  }
  @HttpCode(HttpStatus.OK)
  @ApiParam({name:"id",required:true,description:"id",type:Number})
  @Delete(':id')
  async delete(@Param() params) {
    const {id} = params
    const result = await this.service.delete(id);
    return result;
  }
  @HttpCode(HttpStatus.OK)
  @Delete('deleteMany')
  async deleteMany(@Body() dto: DeleteMany${modelNameUp}Dto) {
    const result = await this.service.deleteMany(dto);
    return result;
  }
  @HttpCode(HttpStatus.OK)
  @ApiParam({name:"id",required:true,description:"id",type:Number})
  @Get('find/:id')
  async find(@Param() Param) {
    const result = await this.service.find(Param.id);
    return result;
  }
  @HttpCode(HttpStatus.OK)
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
}

module.exports =  controllerTemplate