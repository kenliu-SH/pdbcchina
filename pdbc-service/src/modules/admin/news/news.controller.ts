import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, Req } from '@nestjs/common';
import { AdminController, WebController } from '@core/decorator/controller';
import { NewsService } from './news.service';
import { FindNewsPaginationDto, DeleteManyNewsDto, CreateManyNewsDto, NewsCreateDto } from './news.dto';
import { News } from '@model/news.model';
import { InjectModel } from '@nestjs/sequelize';
import { NewsTag } from '@model/newsTag.model';
import { Request } from 'express';

@ApiTags('新闻列表')
@ApiBearerAuth()
@AdminController('news')
export class NewsController {
	constructor(
		private readonly service: NewsService,
		@InjectModel(News)
		private newsModel: typeof News,
	) {}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '新增新闻' })
	@Post('/')
	async create(@Body() dto: NewsCreateDto, @Req() request: Request) {
		const userId = request['user']['id'];
		const result = await this.service.create(dto, userId);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Put(':id')
	async edit(@Body() dto: NewsCreateDto, @Param() params) {
		const { id } = params;
		const result = await this.service.edit(dto, id);
		return result;
	}
	@HttpCode(HttpStatus.OK)
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Delete(':id')
	async delete(@Param() params) {
		const { id } = params;
		const result = await this.service.delete(id);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Get(':id')
	async find(@Param() Param) {
		const result = await this.service.find(Param.id);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@Get('/')
	async findPagination(@Query() dto: FindNewsPaginationDto, @CurrentPage() pagination: Pagination) {
		const result = await this.service.findPagination(dto, pagination);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '添加标签' })
	@Post('/tags')
	async addTag(@Body() dto: NewsTag) {
		console.log('dto: ', dto);
		const result = await this.service.addTag(dto);
		return result;
	}
}
