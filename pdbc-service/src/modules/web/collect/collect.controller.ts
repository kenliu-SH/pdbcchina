import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, Req, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, HttpException } from '@nestjs/common';
import { WebController } from '@core/decorator/controller';
import { CollectService } from './collect.service';
import { CollectDto, CollectMany, PaginationDto } from './collect.dto';
import { Request } from 'express';
import { Collect } from '@model/collect.model';

@ApiTags('收藏')
@ApiBearerAuth()
@WebController('collect')
export class CollectController {
	constructor(private readonly service: CollectService) {}
	@ApiOperation({ summary: '收藏实体' })
	@HttpCode(HttpStatus.OK)
	@Post('/')
	async create(@Body() dto: Collect, @Req() request: Request) {
		const userId: any = request['user']['id'];
		if (!userId) {
			throw new HttpException(null, 401);
		}
		const result = await this.service.create(dto, userId);
		return result;
	}

	@ApiOperation({ summary: '收藏多个' })
	@HttpCode(HttpStatus.OK)
	@Post('/many')
	async createMany(@Body() dto: CollectMany, @Req() request: Request) {
		const userId: any = request['user']['id'];
		if (!userId) {
			throw new HttpException(null, 401);
		}
		const result = await this.service.createMany(dto, userId);
		return result;
	}

	@ApiOperation({ summary: '收藏列表' })
	@HttpCode(HttpStatus.OK)
	@Get('/pagination')
	async pagination(@Query() dto: PaginationDto, @CurrentPage() pagination: Pagination, @Req() request: Request) {
		const userId: any = request['user']['id'];
		const row = {};
		if (!userId) {
			throw new HttpException(null, 401);
		}
		const result = await this.service.pagination(dto, pagination, userId);
		return result;
	}
}
