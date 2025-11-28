import { WebController } from '@core/decorator';
import { OpenAuthorize } from '@core/decorator/authorize';
import { Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EntityInstanceService } from './entityInstance.service';
import { EntityBranchedVO, EntityNonpolymerVO, EntityPolymerVO } from './entityInstance.vo';

@ApiTags('Entity Instance Service')
@ApiBearerAuth()
@WebController('entity_instance')
export class EntityInstanceController {
	constructor(private readonly service: EntityInstanceService) {}

	@ApiOperation({ summary: 'Get branched entity instance description by ENTRY ID and ASYM ID.' })
	@ApiParam({
		name: 'PDBID',
		description: 'ID of the entry that needs to be fetched.',
		type: String,
		example: '1AT9',
	})
	@ApiParam({
		name: 'asymId',
		description: 'ID of the instance (chain) that needs to be fetched.',
		type: String,
		example: '2',
	})
	@ApiResponse({ status: 200, description: 'OK', type: EntityBranchedVO })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/branched/:PDBID/:asymId')
	async getEntityBranched(@Param('PDBID') PDBID: string, @Param('asymId') asymId: string) {
		const result = await this.service.getEntityBranched(PDBID, asymId);
		return result;
	}

	@ApiOperation({ summary: 'Get non-polymer entity instance description by ENTRY ID and ASYM ID (label_asym_id).' })
	@ApiParam({
		name: 'PDBID',
		description: 'ENTRY ID of the entry.',
		type: String,
		example: '1AT9',
	})
	@ApiParam({
		name: 'asymId',
		description: 'ASYM ID (label_asym_id) of the instance (chain).',
		type: String,
		example: '2',
	})
	@ApiResponse({ status: 200, description: 'OK', type: EntityNonpolymerVO })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/nonpolymer/:PDBID/:asymId')
	async getEntityNonpolymer(@Param('PDBID') PDBID: string, @Param('asymId') asymId: string) {
		const result = await this.service.getEntityNonPolymer(PDBID, asymId);
		return result;
	}

	@ApiOperation({
		summary: 'Get polymer entity instance (a.k.a chain) data by ENTRY ID and ASYM ID (label_asym_id).',
	})
	@ApiParam({
		name: 'PDBID',
		description: 'ENTRY ID of the entry.',
		type: String,
		example: '1AT9',
	})
	@ApiParam({
		name: 'asymId',
		description: 'ASYM ID (label_asym_id) of the instance (chain).',
		type: String,
		example: '2',
	})
	@ApiResponse({ status: 200, description: 'OK', type: EntityPolymerVO })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/polymer/:PDBID/:asymId')
	async getEntityPolymer(@Param('PDBID') PDBID: string, @Param('asymId') asymId: string) {
		const result = await this.service.getEntityPolymer(PDBID, asymId);
		return result;
	}
}
