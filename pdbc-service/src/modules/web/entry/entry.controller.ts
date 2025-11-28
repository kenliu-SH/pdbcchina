import { ApiBearerAuth, ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { CurrentPage } from '@core/decorator';
import { Pagination } from '@common/interface';
import { Body, Get, Req, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, Res } from '@nestjs/common';
import { WebController } from '@core/decorator/controller';
import { _EntryService } from './entry.service';
import { Request, Response } from 'express';
import { OpenAuthorize } from '@core/decorator/authorize';
import { ParseImplCommon } from './parse/parseImpl.common';

@ApiTags('条目')
@ApiBearerAuth()
@WebController('entry')
export class _EntryController {
	constructor(private readonly service: _EntryService, private readonly parseImplCommon: ParseImplCommon) {}
	@ApiOperation({ summary: '条目详情概要' })
	@ApiParam({ name: 'id', required: true, description: 'PDBId', type: String })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('basicInfo/:id')
	async basicInfo(@Param() param, @Req() request: Request) {
		const { id: PDBId } = param;
		const result = await this.service.basicInfo(PDBId);
		return result;
	}

	@ApiOperation({ summary: '获取PDB文件' })
	@ApiParam({ name: 'id', required: true, description: 'PDBId', type: String })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('file/:id')
	async getfile(@Param() param, @Req() request: Request, @Res() response: Response) {
		const { id: PDBId } = param;
		await this.service.getfile(PDBId, response);
		// response.send(result)
	}

	@ApiOperation({ summary: '条目补充信息' })
	@OpenAuthorize()
	@ApiParam({ name: 'id', required: true, description: 'PDBId', type: String })
	@HttpCode(HttpStatus.OK)
	@Get('supplement/:id')
	async supplement(@Param() param) {
		const { id } = param;
		const result = await this.service.supplement(id);
		return result;
	}

	/**
	 * @description: Structure Summary
	 */
	@ApiOperation({ summary: '条目结构摘要' })
	@ApiParam({ name: 'id', required: true, description: 'PDBId', example: '8ED0', type: String })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('structureSummary/:id')
	async structureSummary(@Param('id') id) {
		console.log('id: ', id);
		const result = await this.service.structureSummary(id);
		return result;
	}

	/**
	 * @description: Structure Summary
	 */
	@ApiOperation({ summary: '条目结构摘要v2' })
	@ApiParam({ name: 'id', required: true, description: 'PDBId', example: '8ED0', type: String })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('structureSummary/v2/:id')
	async structureSummaryV2(@Param('id') id) {
		console.log('id: ', id);
		const result = await this.service.structureSummaryV2(id);
		return result;
	}

	/**
	 * @description: Experiment
	 */
	@ApiOperation({ summary: '实验信息' })
	@OpenAuthorize()
	@ApiParam({ name: 'id', required: true, description: 'PDBId', example: '8ED0', type: String })
	@HttpCode(HttpStatus.OK)
	@Get('experiment/:id')
	async experiment(@Param('id') id) {
		const result = await this.parseImplCommon.experiment(id);
		return result;
	}

	/**
	 * 获取文献附加信息
	 */
	@ApiOperation({ summary: '文献附加信息' })
	@OpenAuthorize()
	@ApiParam({ name: 'id', required: true, description: 'PDBId', example: '8C90', type: String })
	@HttpCode(HttpStatus.OK)
	@Get('citation/subjoin/:id')
	async citationSubjoin(@Param('id') id) {
		const result = await this.service.getCitationSubjoin(id);
		return result;
	}

	/**
	 *  CCD 信息
	 */
	@ApiOperation({ summary: '获取CCD 信息' })
	@OpenAuthorize()
	@ApiParam({ name: 'id', required: true, description: 'compID', example: 'ALA', type: String })
	@HttpCode(HttpStatus.OK)
	@Get('ccd/:id')
	async ccd(@Param('id') id) {
		const result = await this.service.getCcd(id);
		return result;
	}

	/**
	 * BIRD 信息
	 */
	@ApiOperation({ summary: '获取BIRD 信息' })
	@OpenAuthorize()
	@ApiParam({ name: 'id', required: true, description: 'prdID', example: 'PRD_900003', type: String })
	@HttpCode(HttpStatus.OK)
	@Get('bird/:id')
	async bird(@Param('id') id) {
		const result = await this.service.getBird(id);
		return result;
	}
}
