import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, HttpException } from '@nestjs/common';
import { AdminController } from '@core/decorator/controller';
import { OptionsService } from './options.service';
import { InjectModel } from '@nestjs/sequelize';
import { Options } from '@model/options.model';
import { FindOptions, Op } from 'sequelize';
import ERR from '@common/ERR';
import { MenuBar } from '@model/menuBar.model';
import { NavBar } from '@model/navBar.model';
import { findTypeDto } from './options.dto';

@ApiTags('选择栏')
@ApiBearerAuth()
@AdminController('options')
export class OptionsController {
	constructor(
		private readonly service: OptionsService,
		@InjectModel(Options)
		private optionsModel: typeof Options,
		@InjectModel(MenuBar)
		private menuBarModel: typeof MenuBar,
		@InjectModel(NavBar)
		private navBarModel: typeof NavBar,
	) {}

	// 新增选择项
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '新增选择项' })
	@Post('/')
	async create(@Body() dto: Options) {
		const find = await this.optionsModel.findOne({
			where: {
				[Op.or]: [{ name: dto.name }, { zhName: dto.zhName }],
			},
		});
		if (find) {
			throw await ERR.SQL_DUPLICATION;
		}
		const result = await this.optionsModel.create(dto);
		return result;
	}

	// 编辑选择项
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '编辑选择项' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Put('/:id')
	async edit(@Body() dto: Options, @Param() params) {
		const { id } = params;
		let option = await this.optionsModel.findOne({ where: { id } });
		if (!option) {
			throw await ERR.RESTFUL_GET_ID;
		}
		await option.update(dto);
		option = await this.optionsModel.findOne({ where: { id } });
		return option;
	}

	// 删除选择项
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '删除选择项' })
	@ApiParam({ name: 'id', required: true, description: 'id', type: Number })
	@Delete('/:id')
	async delete(@Param() params) {
		const { id } = params;
		const find = await this.navBarModel.findOne({
			where: { optionId: id },
		});
		const findNavBar = await this.navBarModel.findOne({
			where: { optionId: id },
		});

		const findMenuBar = await this.menuBarModel.findOne({
			where: { optionId: id },
		});

		if (findNavBar || findMenuBar) {
			throw new HttpException('导航栏或菜单栏中存在内容，不可删除', 400);
		}
		const result = await this.optionsModel.destroy({
			where: { id },
		});
		return result;
	}

	// 获取选择项列表
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '获取选择项列表' })
	@Get('/')
	async getList(@Query() dto: findTypeDto) {
		const result = await this.optionsModel.findAll({
			where: {
				type: dto.type,
			},
		});
		return result;
	}
}
