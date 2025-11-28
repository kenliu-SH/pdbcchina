import { AdminController } from '@core/decorator';
import { NavBar } from '@model/navBar.model';
// import { MenuBar } from '@model/menuBar.model';
// import { Deposit } from '@model/deposit.model';
import { Tag } from '@model/tag.model';
import { Body, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ENUM } from 'sequelize';
import { NavBarCreateDto, NavBarFindDto, NavBarItemCreateDto, NavBarUpdateDto } from './navBar.dto';
import { NavBarService } from './navBar.service';

@ApiTags('导航栏navBar')
@ApiBearerAuth()
@AdminController('navBar')
export class NavBarController {
	constructor(
		private readonly service: NavBarService,
		@InjectModel(NavBar)
		private navBarModel: typeof NavBar,
	) {}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '新建主项' })
	@Post('/')
	async create(@Body() dto: NavBarCreateDto) {
		const result = await this.service.create(dto);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '新建子项' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Post('/:id')
	async addItem(@Body() dto: NavBarItemCreateDto, @Param() Param) {
		const { id: navBarId } = Param;
		dto.navBarId = navBarId;
		delete dto['id'];
		const result = await this.service.addItem(dto, navBarId);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '编辑标题' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Put('/:id')
	async edit(@Body() dto: NavBarUpdateDto, @Param() params) {
		const { id } = params;
		const result = await this.service.edit(dto, id);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '编辑子项' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Put('/item/:id')
	async editItem(@Body() dto: NavBarItemCreateDto, @Param() params) {
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
	@Delete('/item/:id')
	async deleteItem(@Param() params) {
		const { id } = params;
		const result = await this.service.deleteItem(id);
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@Get('/')
	@ApiOperation({ summary: '搜索' })
	async find(@Query() dto: NavBarFindDto) {
		const result = await this.service.find(dto);
		return result;
	}

	// 预览列表
	@HttpCode(HttpStatus.OK)
	@Get('/preview')
	@ApiOperation({ summary: '预览列表' })
	async preview() {
		const result = await this.service.getPreview();
		return result;
	}
}
