import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, Req } from '@nestjs/common';
import { WebController } from '@core/decorator/controller';
import { NewsService } from './news.service';
import { FindNewsPaginationDto, DeleteManyNewsDto, CreateManyNewsDto, FindNewsDto } from './news.dto';
import { News } from '@model/news.model';
import { InjectModel } from '@nestjs/sequelize';
import { OpenAuthorize } from '@core/decorator/authorize';
import { Sequelize } from 'sequelize';
import { uniqBy } from 'lodash';

@ApiTags('新闻')
@ApiBearerAuth()
@WebController('news')
export class NewsController {
	constructor(
		private readonly service: NewsService,
		@InjectModel(News)
		private newsModel: typeof News,
	) {}
	@ApiOperation({ summary: '详情' })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Get('/:id')
	async details(@Param() dto) {
		const { id } = dto;
		const result = await this.service.details(id);
		return result;
	}

	@OpenAuthorize()
	@ApiOperation({ summary: '新闻列表' })
	@HttpCode(HttpStatus.OK)
	@Get('/')
	async getList(@Query() dto: FindNewsDto, @CurrentPage() pagination: Pagination) {
		const result = await this.service.getList(dto, pagination);
		return result;
	}

	// @ApiOperation({ summary: '新闻列表' })
	// @HttpCode(HttpStatus.OK)
	// @Get('')
	// async findPagination(@Query() dto: FindNewsPaginationDto, @CurrentPage() pagination: Pagination) {
	// 	const result = await this.service.findPagination({ ...dto, isShow: true }, pagination);
	// 	return result;
	// }
	@OpenAuthorize()
	@ApiOperation({ summary: '获取年份' })
	@HttpCode(HttpStatus.OK)
	@Get('find/year')
	async getDate() {
		const result = await this.service.getDate();
		return result;
	}
	@OpenAuthorize()
	@ApiOperation({ summary: '获取id列表' })
	@HttpCode(HttpStatus.OK)
	@Get('find/id')
	async getIdList() {
		const result = await this.service.getIdList();
		return result;
	}
}
