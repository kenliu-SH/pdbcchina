import { ApiBearerAuth, ApiTags, ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { Body, Get, Req, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, Res } from '@nestjs/common';
import { WebController } from '@core/decorator/controller';
import { EntityService as EntityService } from './entity.service';
import { OpenAuthorize } from '@core/decorator/authorize';
import { EntityDescriptionVo, EntityMacromolecularVo, EntityNonPolymerVo, EntityPolymerVo } from './entity.vo';

@ApiTags('Entity Service')
@ApiBearerAuth()
@WebController('entity')
export class EntityController {
	constructor(private readonly service: EntityService) {}

	@ApiOperation({ summary: 'Get branched entity description by ENTRY ID and ENTITY ID.' })
	@ApiParam({
		name: 'PDBID',
		description: 'ID of the entry that needs to be fetched.',
		type: String,
		example: '5YZ9',
	})
	@ApiParam({
		name: 'entityId',
		description: 'ID of the entity that needs to be fetched.',
		type: String,
		example: '1',
	})
	@ApiResponse({ status: 200, description: 'OK', type: EntityDescriptionVo })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/description/:PDBID/:entityId')
	async getEntityDescription(@Param('PDBID') PDBID: string, @Param('entityId') entityId: string) {
		const result = await this.service.getEntityDescription(PDBID, entityId);
		return result;
	}

	@ApiOperation({ summary: 'Get non-polymer entity data by ENTRY ID and ENTITY ID.' })
	@ApiParam({ name: 'PDBID', description: 'ENTRY ID of the entry.', type: String, example: '1AT9' })
	@ApiParam({ name: 'entityId', description: 'ENTITY ID of the non-polymer entity.', type: String, example: '2' })
	@ApiResponse({ status: 200, description: 'OK', type: EntityNonPolymerVo })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/nonpolymer/:PDBID/:entityId')
	async getEntityNonPolymer(@Param('PDBID') PDBID: string, @Param('entityId') entityId: string) {
		const result = await this.service.getEntityNonPolymer(PDBID, entityId);
		return result;
	}

	@ApiOperation({ summary: 'Get polymer entity data by ENTRY ID and ENTITY ID.' })
	@ApiParam({ name: 'PDBID', description: 'ENTRY ID of the entry.', type: String, example: '1AT9' })
	@ApiParam({ name: 'entityId', description: 'ENTITY ID of the polymer entity.', type: String, example: '2' })
	@ApiResponse({ status: 200, description: 'OK', type: EntityPolymerVo })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/polymer/:PDBID/:entityId')
	async getEntityPolymer(@Param('PDBID') PDBID: string, @Param('entityId') entityId: string) {
		const result = await this.service.getEntityPolymer(PDBID, entityId);
		return result;
	}

	@ApiOperation({
		summary: 'Get UniProt annotations for a given macromolecular entity (identified by ENTRY ID and ENTITY ID).',
	})
	@ApiParam({ name: 'PDBID', description: 'ENTRY ID of the entry.', type: String, example: '1AT9' })
	@ApiParam({ name: 'entityId', description: 'ENTITY ID of the polymer entity.', type: String, example: '2' })
	@ApiResponse({ status: 200, description: 'OK', type: EntityMacromolecularVo })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/macromolecular/:PDBID/:entityId')
	async getEntityMacromolecular(@Param('PDBID') PDBID: string, @Param('entityId') entityId: string) {
		const result = await this.service.getEntityMacromolecular(PDBID, entityId);
		return result;
	}
}
