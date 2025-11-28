import { ApiBearerAuth, ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, Req, HttpCode, HttpStatus, Param, Post, Query, Put, Delete } from '@nestjs/common';
import { WebController } from '@core/decorator/controller';
import { HighlightsService } from './highlights.service';
import { FindHighlightDto } from './highlights.dto';
import { Request } from 'express';
import { OpenAuthorize } from '@core/decorator/authorize';

@ApiTags('高光时刻')
@ApiBearerAuth()
@WebController('highlights')
export class HighlightsController {
	constructor(private readonly service: HighlightsService) {}
	@ApiOperation({ summary: '详情' })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Get('/:id')
	async details(@Param() dto, @Req() request: Request) {
		const { id } = dto;
		const result = await this.service.details(id);
		return result;
	}

	@ApiOperation({ summary: '高光时刻列表' })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('')
	async getList(@Query() dto: FindHighlightDto, @CurrentPage() pagination: Pagination) {
		const result = await this.service.getList(dto, pagination);
		return result;
	}

	@ApiOperation({ summary: '获取年份' })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Get('find/year')
	async getDate() {
		const result = await this.service.getDate();
		return result;
	}

	@ApiOperation({ summary: '获取id列表' })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Get('find/id')
	async getIdList() {
		const result = await this.service.getIdList();
		return result;
	}
}
