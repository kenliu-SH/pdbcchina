import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, HttpCode, HttpStatus, Param, Post, Query, Put, Delete } from '@nestjs/common';
import { AdminController } from '@core/decorator/controller';
import { ThemeService } from './theme.service';
import { ThemeFindAllDto } from './theme.dto';
import { Theme } from '@model/theme.model';

@ApiTags('主题管理')
@ApiBearerAuth()
@AdminController('theme')
export class ThemeController {
	constructor(private readonly service: ThemeService) {}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '获取主题列表' })
	@Get('/')
	async find() {
		const result = await this.service.findAll();
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '编辑主题配置' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Put(':id')
	async updata(@Body() dto: ThemeFindAllDto, @Param() params) {
		const { id } = params;
		console.log('id: ', id);
		const result = await this.service.updata(dto, id);
		return result;
	}
}
