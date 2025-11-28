import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags
} from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import {
  Body,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Put,
  Delete,
  Res,
  Req
} from '@nestjs/common';
import { AdminController, WebController } from '@core/decorator/controller';
import { HighlightService } from './highlight.service';
import {
  FindHighlightPaginationDto,
  DeleteManyHighlightDto,
  CreateManyHighlightDto,
  CreateDto,
  FindDto
} from './highlight.dto';
import { Highlight } from '@model/highlight.model';
import { Request, Response } from 'express';
import { HighlightTag } from '@model/highlightTag.model';
import { OpenAuthorize } from '@core/decorator/authorize';

@ApiTags('高光时刻')
@ApiBearerAuth()
@AdminController('highlight')
export class HighlightController {
  constructor(private readonly service: HighlightService) {}
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '新增条目' })
  @Post('/')
  async create(@Body() dto: CreateDto, @Req() response: Request) {
    const userId = response['user']['id'];
    const result = await this.service.create(dto, userId);
    return result;
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '编辑条目' })
  @ApiParam({ name: 'id', required: true, description: 'id', type: Number })
  @Put(':id')
  async edit(@Body() dto: CreateDto, @Param() params) {
    const { id } = params;
    const result = await this.service.edit(dto, id);
    return result;
  }
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '删除条目' })
  @ApiParam({ name: 'id', required: true, description: 'id', type: Number })
  @Delete(':id')
  async delete(@Param() params) {
    const { id } = params;
    const result = await this.service.delete(id);
    return result;
  }

  @HttpCode(HttpStatus.OK)
  @ApiParam({ name: 'id', required: true, description: 'id', type: Number })
  @Get('find/:id')
  async find(@Param() Param) {
    const result = await this.service.find(Param.id);
    return result;
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '筛选条件获取条目' })
  @Get('findPagination')
  async findPagination(
    @Query() dto: FindHighlightPaginationDto,
    @CurrentPage() pagination: Pagination
  ) {
    const result = await this.service.findPagination(dto, pagination);
    return result;
  }
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: '添加标签' })
  @Post('/tags')
  async addTag(@Body() dto: HighlightTag) {
    console.log('dto: ', dto);
    const result = await this.service.addTag(dto);
    return result;
  }
}
