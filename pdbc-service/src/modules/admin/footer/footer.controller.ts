import { Pagination } from '@common/interface';
import { AdminController, CurrentPage } from '@core/decorator';
import { Footer } from '@model/footer.model';
import { FooterItem } from '@model/footerItem.model';
import { Tag } from '@model/tag.model';
import { Body, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { footerFindDto, footerCreateDto, itemCreateDto } from './footer.dto';
import { FooterService } from './footer.service';
@ApiTags('页尾管理')
@ApiBearerAuth()
@AdminController('footer')
export class FooterController {
	constructor(
		private readonly service: FooterService,
		@InjectModel(Footer)
		private footerModel: typeof Footer,
		@InjectModel(FooterItem)
		private footerItemModel: typeof FooterItem,
	) {}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '新建主项' })
	@Post('/')
	async create(@Body() dto: footerCreateDto) {
		const result = await this.service.create(dto);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '新建子项' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Post('/:id')
	async addItem(@Body() dto: itemCreateDto, @Param() Param) {
		const { id: footerId } = Param;
		dto.footerId = footerId;
		delete dto['id'];
		const result = await this.service.addItem(dto, footerId);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '编辑主项' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Put('/:id')
	async edit(@Body() dto: footerCreateDto, @Param() params) {
		const { id } = params;
		const result = await this.service.edit(dto, id);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '编辑子项' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Put('item/:id')
	async editItem(@Body() dto: itemCreateDto, @Param() params) {
		const { id } = params;
		const result = await this.service.editItem(dto, id);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '删除主项' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Delete('/:id')
	async delete(@Param() params) {
		const { id } = params;
		const result = await this.service.delete(id);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '删除子项' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Delete('item/:id')
	async deleteItem(@Param() params) {
		const { id } = params;
		const result = await this.service.deleteItem(id);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@Get('/')
	@ApiOperation({ summary: '搜索' })
	async find(@Query() dto: footerFindDto) {
		const result = await this.service.find(dto);
		return result;
	}
}
