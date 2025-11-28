import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, Req } from '@nestjs/common';
import { WebController } from '@core/decorator/controller';
import { NoticeService } from './notice.service';
import { FindNoticePaginationDto } from './notice.dto';
import { Request } from 'express';

@ApiTags('站内信')
@ApiBearerAuth()
@WebController('notice')
export class NoticeController {
	constructor(private readonly service: NoticeService) {}
	@ApiOperation({ summary: '列表' })
	@HttpCode(HttpStatus.OK)
	@Get('findPagination')
	async findPagination(
		@Query() dto: FindNoticePaginationDto,
		@CurrentPage() pagination: Pagination,
		@Req() request: Request,
	) {
		const userId = request.user['id'];
		const result = await this.service.findPagination(dto, pagination, userId);
		return result;
	}
}
