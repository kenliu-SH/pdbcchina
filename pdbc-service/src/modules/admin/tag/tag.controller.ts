import { AdminController } from '@core/decorator';
import { OpenAuthorize } from '@core/decorator/authorize';
import { Tag } from '@model/tag.model';
import { Body, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { PutOrderDto } from './tag.dto';
import { TagService } from './tag.service';

@ApiTags('标签')
@ApiBearerAuth()
@AdminController('tag')
export class TagController {
	constructor(
		private readonly service: TagService,
		@InjectModel(Tag)
		private tagModel: typeof Tag,
	) {}

	// @OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '新建标签' })
	@Post('/')
	async create(@Body() dto: Tag) {
		const result = await this.service.create(dto);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '获取列表' })
	@Get('/')
	async getAll() {
		const result = await this.service.findAll();
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '编辑标签' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Put('/:id')
	async edit(@Body() dto: Tag, @Param() params) {
		const { id } = params;
		const result = await this.service.edit(dto, id);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '删除标签' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Delete('/:id')
	async delete(@Param() params) {
		const { id } = params;
		const result = await this.service.delete(id);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '拖拽排序' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Put('/:id/order')
	async putOrder(@Param() param, @Body() dto: PutOrderDto) {
		const { id } = param;
		const result = await this.service.putOrder(dto, id);
		return result;
	}
}
