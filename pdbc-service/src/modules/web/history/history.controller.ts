import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Body, Get, HttpCode, HttpStatus, Param, Post, Query, Put, Delete } from '@nestjs/common';
import { WebController } from '@core/decorator/controller';
import { InjectModel } from '@nestjs/sequelize';
import { History } from '@model/history.model';
import { HistoryService } from './history.service';
import { EntryHistroyCreateDto, FindHistoryDto } from './history.dto';
import { Pagination } from '@common/interface';
import { CurrentPage } from '@core/decorator';
import { OpenAuthorize } from '@core/decorator/authorize';

@ApiTags('历史记录')
@ApiBearerAuth()
@WebController('history')
export class HistoryController {
	constructor(
		@InjectModel(History)
		private historyModel: typeof History,
		private readonly service: HistoryService,
	) {}

	@OpenAuthorize()
	@ApiOperation({ summary: '新增历史记录' })
	@HttpCode(HttpStatus.OK)
	@Post('/')
	async create(@Body() dto: EntryHistroyCreateDto) {
		const result = await this.service.create(dto);
		return result;
	}

	@ApiOperation({ summary: '获取历史记录' })
	@HttpCode(HttpStatus.OK)
	@Get('/')
	async getList(@Query() dto: FindHistoryDto, @CurrentPage() pagination: Pagination) {
		const result = await this.service.getList(dto, pagination);
		return result;
	}
}
