import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, Req, HttpCode, HttpStatus, Param, Post, Query, Put, Delete } from '@nestjs/common';
import { WebController } from '@core/decorator/controller';
import { HomeService } from './home.service';
import { DepositFindDto, FindHighlightPaginationDto, footerFindDto, HomeDto, menuBarFindDto } from './home.dto';
import { Request } from 'express';
import { MailService } from '@library/mail/mail.service';
import { OpenAuthorize } from '@core/decorator/authorize';
import { SystemConfig } from '@model/systemConfig.model';
import { SystemConfigKey } from '@common/constant';

@ApiTags('首页')
@ApiBearerAuth()
@WebController('home')
export class HomeController {
	constructor(private readonly service: HomeService, private readonly mailService: MailService) {}
	@ApiOperation({ summary: '基础信息' })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/base')
	async base(@Body() dto, @Req() request: Request) {
		const result = await this.service.base();
		return result;
	}

	// 高光时刻列表
	@ApiOperation({ summary: '高光时刻列表' })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/highlights')
	async highlights(@Query() dto: FindHighlightPaginationDto, @CurrentPage() pagination: Pagination) {
		const result = await this.service.findPaginationHighlights(dto, pagination);
		return result;
	}

	// 页尾列表
	@ApiOperation({ summary: '页尾列表' })
	@OpenAuthorize()
	@HttpCode(HttpStatus.OK)
	@Get('/footers')
	async footers(@Query() dto: footerFindDto, @Req() request: any) {
		const language = request.headers['local'];
		const result = await this.service.findFooters(dto);
		return result;
	}

	// 主题配置
	@ApiOperation({ summary: '主题配置' })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/theme')
	async findTheme() {
		const result = await this.service.findTheme();
		return result;
	}

	//获取菜单栏列表
	@ApiOperation({ summary: '菜单栏列表' })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/menuBar')
	async menuBar() {
		const result = await this.service.findMenuBar();
		return result;
	}

	//获取菜单栏列表
	@ApiOperation({ summary: '导航栏列表' })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/navBar')
	async navBar() {
		const result = await this.service.findNavBar();
		return result;
	}

	// 首页蛋白质数量描述
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '首页蛋白质数量描述' })
	@OpenAuthorize()
	@Get('/protein')
	async getProtein() {
		const result = await SystemConfig.findOne({
			where: {
				key: SystemConfigKey.homeProteinCountDesc,
			},
		});
		return result;
	}

	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '获取 LOGO 图文配置' })
	@OpenAuthorize()
	@Get('/logo')
	async getLogo() {
		const result = await SystemConfig.findOne({
			where: {
				key: SystemConfigKey.homeLogo,
			},
		});
		return result;
	}

	// 建设中页面配置
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '获取建设中页面信息' })
	@OpenAuthorize()
	@Get('/building')
	async getBuilding() {
		const result = await SystemConfig.findOne({
			where: {
				key: SystemConfigKey.building,
			},
		});
		return result;
	}

	// 验证访问码
	@OpenAuthorize()
	@ApiOperation({ summary: '验证访问码' })
	@HttpCode(HttpStatus.OK)
	@Get('/verifyCode/:code')
	async verifyCode(@Param('code') code: string) {
		const result = await this.service.verifyCode(code);
		return result;
	}
}
