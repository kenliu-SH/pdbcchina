import { AdminController } from '@core/decorator';
import { MenuBar } from '@model/menuBar.model';
// import { Deposit } from '@model/deposit.model';
import { Tag } from '@model/tag.model';
import { Body, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ENUM } from 'sequelize';
import {
	DepositCreateDto,
	DepositFindDto,
	DepositItemCreateDto,
	DepositUpdateDto,
	menuBarDto,
	menuBarUpdateDto,
} from './menuBar.dto';
import { MenuBarService } from './menuBar.service';

@ApiTags('菜单栏menuBar')
@ApiBearerAuth()
@AdminController('menuBar')
export class MenuBarController {
	constructor(
		private readonly service: MenuBarService,
		@InjectModel(MenuBar)
		private menuBarModel: typeof MenuBar,
	) {}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '新建主项' })
	@Post('/deposit')
	async create(@Body() dto: DepositCreateDto) {
		const result = await this.service.create(dto);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '新建标题' })
	@Post('/')
	async createMenu(@Body() dto: menuBarDto) {
		const result = await this.service.createMenu(dto);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '新建子项' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Post('/deposit/:id')
	async addItem(@Body() dto: DepositItemCreateDto, @Param() Param) {
		const { id: menuBarId } = Param;
		dto.menuBarId = menuBarId;
		delete dto['id'];
		const result = await this.service.addItem(dto, menuBarId);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '编辑标题' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Put('/:id')
	async editMenu(@Body() dto: menuBarUpdateDto, @Param() params) {
		const { id } = params;
		const result = await this.service.editMenu(dto, id);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '编辑主项标题' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Put('/deposit/:id')
	async edit(@Body() dto: DepositUpdateDto, @Param() params) {
		const { id } = params;
		const result = await this.service.edit(dto, id);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '编辑子项' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Put('/deposit/item/:id')
	async editItem(@Body() dto: DepositItemCreateDto, @Param() params) {
		const { id } = params;
		const result = await this.service.editItem(dto, id);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '删除项' })
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
	@Delete('/deposit/item/:id')
	async deleteItem(@Param() params) {
		const { id } = params;
		const result = await this.service.deleteItem(id);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@Get('/')
	@ApiOperation({ summary: '搜索' })
	async find(@Query() dto: DepositFindDto) {
		const result = await this.service.find(dto);
		return result;
	}
}
