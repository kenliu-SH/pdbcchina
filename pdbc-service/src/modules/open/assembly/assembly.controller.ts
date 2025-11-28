import { ApiBearerAuth, ApiTags, ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { Body, Get, Req, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, Res } from '@nestjs/common';
import { WebController } from '@core/decorator/controller';
import { AssemblyService } from './assembly.service';
import { OpenAuthorize } from '@core/decorator/authorize';
import { AssemblyVo } from './assembly.vo';

@ApiTags('Assembly Service')
@ApiBearerAuth()
@WebController('assembly')
export class AssemblyController {
	constructor(private readonly service: AssemblyService) {}

	@ApiOperation({ summary: 'Get structural assembly description by ENTRY ID and ASSEMBLY ID.' })
	@ApiParam({ name: 'PDBID', description: 'ENTRY ID of the entry.', type: String, example: '5YZ9' })
	@ApiParam({
		name: 'assemblyId',
		description: 'ASSEMBLY ID of the biological assembly candidate.',
		type: String,
		example: '1',
	})
	@ApiResponse({ status: 200, description: 'OK', type: AssemblyVo })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/:PDBID/:assemblyId')
	async getAssembly(@Param('PDBID') PDBID: string, @Param('assemblyId') assemblyId: string) {
		const result = await this.service.getAssembly(PDBID, assemblyId);
		return result;
	}
}
