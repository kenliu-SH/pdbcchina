import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, Req, HttpCode, HttpStatus, Param, Post, Query, Put, Delete } from '@nestjs/common';
import { WebController } from '@core/decorator/controller';
import { SearchService } from './search.service';
import { FullTextDto, SearchDto, SuggestDto } from './search.dto';
import { Request } from 'express';
import { AdvancedSearchDto } from './filter/model/advancedSearch.dto';
import * as slelectData from './data.json';
import { OpenAuthorize } from '@core/decorator/authorize';
import { QueryDto } from './filter/model/query.dto';

@ApiTags('搜索')
@ApiBearerAuth()
@WebController('search')
export class SearchController {
	constructor(private readonly service: SearchService) { }
	@ApiOperation({ summary: '自动完成建议' })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('suggest')
	async suggest(@Query() dto: SuggestDto, @Req() request: Request) {
		const result = await this.service.suggest(dto);
		return result;
	}

	@ApiOperation({ summary: '高级搜索' })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Post('advanced')
	async advanced(@Body() dto: AdvancedSearchDto, @CurrentPage() pagination: Pagination, @Req() request: Request) {
		const result = await this.service.advancedSearch(dto, pagination);
		return result;
	}

	// 高级搜索 只返回PDBID列表
	@ApiOperation({ summary: '高级搜索（只返回PDBID列表）' })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Post('advanced/pdbid')
	async advancedPdbid(@Body() dto: AdvancedSearchDto, @CurrentPage() pagination: Pagination, @Req() request: Request) {
		const result = await this.service.advancedSearch(
			{
				...dto,
				isExcludeStructureSummaryVO: true,
			},
			{
				...pagination,
				pageSize: 9000000,
			},
		);
		return result.rows.map(item => item['entityId']);
	}
	/**
	 * 高级检索计数
	 */
	@ApiOperation({ summary: '高级检索计数' })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Post('advanced/count')
	async advancedCount(@Body() dto: AdvancedSearchDto, @Req() request: Request) {
		const result = await this.service.advancedSearchCount(dto);
		return result;
	}

	/**
	 * 获取细化统计信息
	 */
	@ApiOperation({ summary: '获取细化统计信息' })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Post('refinements/statistics')
	async refinementsStatistics(@Body() dto: AdvancedSearchDto, @Req() request: Request) {
		const result = await this.service.getRefineStatistics(dto);
		return result;
	}

	/**
	 * 获取筛选数据
	 */
	@ApiOperation({ summary: '获取筛选数据' })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('select/data')
	slelectData() {
		return slelectData;
	}

	/**
	 * 生成查询描述
	 */
	@ApiOperation({ summary: '生成查询描述' })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Post('query/description')
	async queryDescription(@Body() dto: QueryDto, @Req() request: Request) {
		const result = await this.service.buildQueryDescription(dto);
		return result;
	}
}
