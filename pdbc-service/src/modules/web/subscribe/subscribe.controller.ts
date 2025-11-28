import { ApiBearerAuth, ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { Body, Get, Req, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, Res } from '@nestjs/common';
import { WebController } from '@core/decorator/controller';
import { SubscribeService } from './subscribe.service';
import { CreateSubscribeRuleDto, GetSubscribeRuleListDto } from './subscribe.dto';
import { Request, Response } from 'express';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { OpenAuthorize } from '@core/decorator/authorize';

@ApiTags('查询规则订阅')
@ApiBearerAuth()
@WebController('subscribe')
export class SubscribeController {
	constructor(private readonly service: SubscribeService) {}
	/**
	 * 创建订阅规则
	 */
	@Post('/')
	@HttpCode(HttpStatus.OK)
	@ApiOperation({ summary: '创建订阅规则' })
	async createSubscribeRule(@Body() body: CreateSubscribeRuleDto, @Req() req: Request) {
		const userId = req.user['id'];
		return await this.service.createSubscribeRule(body, userId);
	}

	/**
	 * 获取订阅规则列表
	 */
	@Get('/')
	@ApiOperation({ summary: '获取订阅规则列表' })
	async getSubscribeRuleList(
		@Req() req: Request,
		@Query() query: GetSubscribeRuleListDto,
		@CurrentPage() pagination: Pagination,
	) {
		const userId = req.user['id'];
		return await this.service.getSubscribeRuleList(query, pagination, userId);
	}

	/**
	 * 获取RSS订阅，每周更新
	 */
	@Get('/rss/:code')
	@OpenAuthorize()
	@ApiOperation({ summary: '获取RSS订阅，每周更新' })
	@ApiParam({ name: 'code', description: '订阅码' })
	@HttpCode(HttpStatus.OK)
	async getWeeklyUpdateFeed(@Req() req: Request, @Param('code') code: string, @Res() res: Response) {
		res.set('Content-Type', 'text/xml');
		res.send(await this.service.getWeeklyUpdateFeed(code));
	}
}
