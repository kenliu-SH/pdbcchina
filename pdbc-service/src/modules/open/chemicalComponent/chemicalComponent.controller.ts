import { ApiBearerAuth, ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { WebController } from '@core/decorator/controller';
import { ChemicalComponentService } from './chemicalComponent.service';
import { OpenAuthorize } from '@core/decorator/authorize';
import { ChemicalComponentVo, DrugBankAnnotationsVo } from './chemicalComponent.vo';

@ApiTags('Chemical Component Service')
@ApiBearerAuth()
@WebController('Chemical Component')
export class ChemicalComponentController {
	constructor(private readonly service: ChemicalComponentService) {}

	@ApiOperation({ summary: 'Get chemical component (ligands, small molecules and monomers) by CCD ID.' })
	@ApiParam({
		name: 'comp_id',
		description:
			'CHEM COMP ID that uniquely identifies the chemical component. For protein polymer entities, this is the three-letter code for the amino acid. For nucleic acid polymer entities, this is the one-letter code for the base.',
		type: String,
		example: 'CFF',
	})
	@ApiResponse({ status: 200, description: 'OK', type: ChemicalComponentVo })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/ChemComp/:comp_id')
	async getChemicalComponent(@Param('compId') compId: string) {
		const result = await this.service.getChemicalComponent(compId);
		return result;
	}

	@ApiOperation({
		summary:
			'Get DrugBank annotations (integrated from DrugBank resource) for a given chemical component (identified by CHEM COMP ID) .',
	})
	@ApiParam({
		name: 'comp_id',
		description:
			'CHEM COMP ID that uniquely identifies the chemical component. For protein polymer entities, this is the three-letter code for the amino acid. For nucleic acid polymer entities, this is the one-letter code for the base.',
		type: String,
		example: 'CFF',
	})
	@ApiResponse({ status: 200, description: 'OK', type: DrugBankAnnotationsVo })
	@HttpCode(HttpStatus.OK)
	@OpenAuthorize()
	@Get('/drugbBank/:comp_id')
	async getDrugBankAnnotations(@Param('compId') compId: string) {
		const result = await this.service.getDrugBankAnnotations(compId);
		return result;
	}
}
