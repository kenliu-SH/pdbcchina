import { ApiBearerAuth, ApiTags, ApiOperation, ApiParam, ApiConsumes } from '@nestjs/swagger';
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
	UseInterceptors,
	UploadedFile,
	HttpException,
	Req,
} from '@nestjs/common';
import { AdminController } from '@core/decorator/controller';
import { FindPaginationDto } from './businessAPILog.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Sequelize } from 'sequelize-typescript';
import { User } from '@model/user.model';
import { BusinessAPILogService } from './businessAPILog.service';

@ApiTags('业务接口日志')
@ApiBearerAuth()
@AdminController('businessAPILog')
export class BusinessAPILogController {
	constructor(private readonly service: BusinessAPILogService, private readonly sequelize: Sequelize) { }
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '列表' })
	@Get('findPagination')
	async findPagination(@Query() dto: FindPaginationDto, @CurrentPage() pagination: Pagination, @Req() req: any) {
		const result = await this.service.findPagination(dto, pagination);
		return result;
	}
}


