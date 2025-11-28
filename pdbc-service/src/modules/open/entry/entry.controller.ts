import { ApiBearerAuth, ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, Req, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, Res } from '@nestjs/common';
import { WebController } from '@core/decorator/controller';
import { EntryService } from './entry.service';

@ApiTags('条目')
@ApiBearerAuth()
@WebController('Entry Service')
export class EntryController {
	constructor(private readonly service: EntryService) {}
}
