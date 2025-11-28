import { SuperRedis } from '@sophons/redis';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
import { HttpException, Inject, Injectable } from '@nestjs/common';
import _ = require('lodash');
import {
	entity,
	entityPoly,
	entitySrcGen,
	entitySrcNat,
	pdbxEntityNonpoly,
	pdbxEntitySrcSyn,
	pdbxStructAssembly,
	pdbxStructAssemblyAuthEvidence,
	pdbxStructAssemblyGen,
	pdbxStructAssemblyProp,
	pdbxStructOperList,
	pdbxStructSpecialSymmetry,
	structAsym,
} from '@model/mmcif';
import { log } from 'console';
import {
	EntityDescriptionVo,
	EntityNonPolymerVo,
	EntityPoly,
	EntityPolymerVo,
	EntitySrcGen,
	EntitySrcNat,
	PdbxEntityNonpoly,
	PdbxEntitySrcSyn,
} from './entity.vo';

@Injectable()
export class EntityService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,
		private readonly configs: ConfigProvider,
	) {}

	public async getEntityDescription(PDBID: string, entityId: string) {
		const entityDescriptionVo = new EntityDescriptionVo();

		const entityPolyList = new EntityPoly();
		const findEntityPoly = await entityPoly.findOne({
			where: { structureId: PDBID, entityId },
		});
		entityPolyList.nstd_linkage = findEntityPoly.nstdLinkage;
		entityPolyList.nstd_monomer = findEntityPoly.nstdMonomer;
		entityPolyList.pdbx_seq_one_letter_code = findEntityPoly.pdbxSeqOneLetterCode;
		entityPolyList.pdbx_seq_one_letter_code_can = findEntityPoly.pdbxSeqOneLetterCodeCan;
		entityPolyList.pdbx_sequence_evidence_code = findEntityPoly.pdbxSequenceEvidenceCode;
		entityPolyList.pdbx_strand_id = findEntityPoly.pdbxStrandId;
		entityPolyList.pdbx_target_identifier = findEntityPoly.pdbxTargetIdentifier;
		entityPolyList.type = findEntityPoly.type;
		entityDescriptionVo.entity_poly = entityPolyList;

		const entitySrcGenList = [];
		const findEntitySrcGen = await entitySrcGen.findAll({
			where: { structureId: PDBID, entityId },
		});
		findEntitySrcGen.map(item => {
			const entitySrcGen = new EntitySrcGen();
			entitySrcGen.expression_system_id = item.expressionSystemId;
			entitySrcGen.gene_src_common_name = item.geneSrcCommonName;
			entitySrcGen.gene_src_details = item.geneSrcDetails;
			entitySrcGen.gene_src_genus = item.geneSrcGenus;
			entitySrcGen.gene_src_species = item.geneSrcSpecies;
			entitySrcGen.gene_src_strain = item.geneSrcStrain;
			entitySrcGen.gene_src_tissue = item.geneSrcTissue;
			entitySrcGen.gene_src_tissue_fraction = item.geneSrcTissueFraction;
			entitySrcGen.host_org_common_name = item.hostOrgCommonName;
			entitySrcGen.host_org_details = item.hostOrgDetails;
			entitySrcGen.host_org_genus = item.hostOrgGenus;
			entitySrcGen.host_org_species = item.hostOrgSpecies;
			entitySrcGen.pdbx_alt_source_flag = item.pdbxAltSourceFlag;
			entitySrcGen.pdbx_beg_seq_num = item.pdbxBegSeqNum;
			entitySrcGen.pdbx_description = item.pdbxDescription;
			entitySrcGen.pdbx_end_seq_num = item.pdbxEndSeqNum;
			entitySrcGen.pdbx_gene_src_atcc = item.pdbxGeneSrcAtcc;
			entitySrcGen.pdbx_gene_src_cell = item.pdbxGeneSrcCell;
			entitySrcGen.pdbx_gene_src_cell_line = item.pdbxGeneSrcCellLine;
			entitySrcGen.pdbx_gene_src_cellular_location = item.pdbxGeneSrcCellularLocation;
			entitySrcGen.pdbx_gene_src_fragment = item.pdbxGeneSrcFragment;
			entitySrcGen.pdbx_gene_src_gene = item.pdbxGeneSrcGene;
			entitySrcGen.pdbx_gene_src_ncbi_taxonomy_id = item.pdbxGeneSrcNcbiTaxonomyId;
			entitySrcGen.pdbx_gene_src_organ = item.pdbxGeneSrcOrgan;
			entitySrcGen.pdbx_gene_src_organelle = item.pdbxGeneSrcOrganelle;
			entitySrcGen.pdbx_gene_src_scientific_name = item.pdbxGeneSrcScientificName;
			entitySrcGen.pdbx_gene_src_variant = item.pdbxGeneSrcVariant;
			entitySrcGen.pdbx_host_org_atcc = item.pdbxHostOrgAtcc;
			entitySrcGen.pdbx_host_org_cell = item.pdbxHostOrgCell;
			entitySrcGen.pdbx_host_org_cell_line = item.pdbxHostOrgCellLine;
			entitySrcGen.pdbx_host_org_cellular_location = item.pdbxHostOrgCellularLocation;
			entitySrcGen.pdbx_host_org_culture_collection = item.pdbxHostOrgCultureCollection;
			entitySrcGen.pdbx_host_org_gene = item.pdbxHostOrgGene;
			entitySrcGen.pdbx_host_org_ncbi_taxonomy_id = item.pdbxHostOrgNcbiTaxonomyId;
			entitySrcGen.pdbx_host_org_organ = item.pdbxHostOrgOrgan;
			entitySrcGen.pdbx_host_org_organelle = item.pdbxHostOrgOrganelle;
			entitySrcGen.pdbx_host_org_scientific_name = item.pdbxHostOrgScientificName;
			entitySrcGen.pdbx_host_org_strain = item.pdbxHostOrgStrain;
			entitySrcGen.pdbx_host_org_tissue = item.pdbxHostOrgTissue;
			entitySrcGen.pdbx_host_org_tissue_fraction = item.pdbxHostOrgTissueFraction;
			entitySrcGen.pdbx_host_org_variant = item.pdbxHostOrgVariant;
			entitySrcGen.pdbx_host_org_vector = item.pdbxHostOrgVector;
			entitySrcGen.pdbx_host_org_vector_type = item.pdbxHostOrgVectorType;
			entitySrcGen.pdbx_seq_type = item.pdbxSeqType;
			entitySrcGen.pdbx_src_id = item.pdbxSrcId;
			entitySrcGen.plasmid_details = item.plasmidDetails;
			entitySrcGen.plasmid_name = item.plasmidName;
			entitySrcGenList.push(entitySrcGen);
		});
		entityDescriptionVo.entity_src_gen = entitySrcGenList;

		const entitySrcNatList = [];
		const findEntitySrcNat = await entitySrcNat.findAll({
			where: {
				structureId: PDBID,
				entityId: entityId,
			},
		});
		findEntitySrcNat.map(item => {
			const entitySrcNat = new EntitySrcNat();
			entitySrcNat.common_name = item?.commonName;
			entitySrcNat.details = item.details;
			entitySrcNat.genus = item.genus;
			entitySrcNat.pdbx_alt_source_flag = item.pdbxAltSourceFlag;
			entitySrcNat.pdbx_atcc = item.pdbxAtcc;
			entitySrcNat.pdbx_beg_seq_num = item.pdbxBegSeqNum;
			entitySrcNat.pdbx_cell = item.pdbxCell;
			entitySrcNat.pdbx_cell_line = item.pdbxCellLine;
			entitySrcNat.pdbx_cellular_location = item.pdbxCellularLocation;
			entitySrcNat.pdbx_end_seq_num = item.pdbxEndSeqNum;
			entitySrcNat.pdbx_fragment = item.pdbxFragment;
			entitySrcNat.pdbx_ncbi_taxonomy_id = item.pdbxNcbiTaxonomyId;
			entitySrcNat.pdbx_organ = item.pdbxOrgan;
			entitySrcNat.pdbx_organelle = item.pdbxOrganelle;
			entitySrcNat.pdbx_organism_scientific = item.pdbxOrganismScientific;
			entitySrcNat.pdbx_plasmid_details = item.pdbxPlasmidDetails;
			entitySrcNat.pdbx_plasmid_name = item.pdbxPlasmidName;
			entitySrcNat.pdbx_secretion = item.pdbxSecretion;
			entitySrcNat.pdbx_src_id = item.pdbxSrcId;
			entitySrcNat.pdbx_variant = item.pdbxVariant;
			entitySrcNat.species = item.species;
			entitySrcNat.strain = item.strain;
			entitySrcNat.tissue = item.tissue;
			entitySrcNat.tissue_fraction = item.tissueFraction;
			entitySrcNatList.push(entitySrcNat);
		});
		entityDescriptionVo.entity_src_nat = entitySrcNatList;

		const PdbxEntitySrcSynList = [];
		const findPdbxEntitySrcSyn = await pdbxEntitySrcSyn.findAll({
			where: {
				structureId: PDBID,
				entityId: entityId,
			},
		});
		findPdbxEntitySrcSyn.map(item => {
			const pdbxEntitySrcSyn = new PdbxEntitySrcSyn();
			pdbxEntitySrcSyn.details = item.details;
			pdbxEntitySrcSyn.ncbi_taxonomy_id = item.ncbiTaxonomyId;
			pdbxEntitySrcSyn.organism_common_name = item.organismCommonName;
			pdbxEntitySrcSyn.organism_scientific = item.organismScientific;
			pdbxEntitySrcSyn.pdbx_alt_source_flag = item.pdbxAltSourceFlag;
			pdbxEntitySrcSyn.pdbx_beg_seq_num = item.pdbxBegSeqNum;
			pdbxEntitySrcSyn.pdbx_end_seq_num = item.pdbxEndSeqNum;
			pdbxEntitySrcSyn.pdbx_src_id = item.pdbxSrcId;
			PdbxEntitySrcSynList.push(pdbxEntitySrcSyn);
		});
		entityDescriptionVo.pdbx_entity_src_syn = PdbxEntitySrcSynList;

		return entityDescriptionVo;
	}

	public async getEntityNonPolymer(PDBID: string, entityId: string) {
		const entityNonPolymerVo = new EntityNonPolymerVo();

		const pdbxEntityNonpolyList = new PdbxEntityNonpoly();
		const findPdbxEntityNonpoly = await pdbxEntityNonpoly.findOne({
			where: {
				structureId: PDBID,
				entityId: entityId,
			},
		});
		pdbxEntityNonpolyList.comp_id = findPdbxEntityNonpoly.compId;
		pdbxEntityNonpolyList.entity_id = findPdbxEntityNonpoly.entityId;
		pdbxEntityNonpolyList.name = findPdbxEntityNonpoly.name;
		pdbxEntityNonpolyList.rcsb_prd_id = 'TODO';
		entityNonPolymerVo.pdbx_entity_nonpoly = pdbxEntityNonpolyList;

		return entityNonPolymerVo;
	}

	public async getEntityPolymer(PDBID: string, entityId: string) {
		const entityPolymerVo = new EntityPolymerVo();

		const entityPolyList = new EntityPoly();
		const findEntityPoly = await entityPoly.findOne({
			where: { structureId: PDBID, entityId },
		});
		entityPolyList.nstd_linkage = findEntityPoly.nstdLinkage;
		entityPolyList.nstd_monomer = findEntityPoly.nstdMonomer;
		entityPolyList.pdbx_seq_one_letter_code = findEntityPoly.pdbxSeqOneLetterCode;
		entityPolyList.pdbx_seq_one_letter_code_can = findEntityPoly.pdbxSeqOneLetterCodeCan;
		entityPolyList.pdbx_sequence_evidence_code = findEntityPoly.pdbxSequenceEvidenceCode;
		entityPolyList.pdbx_strand_id = findEntityPoly.pdbxStrandId;
		entityPolyList.pdbx_target_identifier = findEntityPoly.pdbxTargetIdentifier;
		entityPolyList.type = findEntityPoly.type;
		entityPolymerVo.entity_poly = entityPolyList;

		const entitySrcGenList = [];
		const findEntitySrcGen = await entitySrcGen.findAll({
			where: { structureId: PDBID, entityId },
		});
		findEntitySrcGen.map(item => {
			const entitySrcGen = new EntitySrcGen();
			entitySrcGen.expression_system_id = item.expressionSystemId;
			entitySrcGen.gene_src_common_name = item.geneSrcCommonName;
			entitySrcGen.gene_src_details = item.geneSrcDetails;
			entitySrcGen.gene_src_genus = item.geneSrcGenus;
			entitySrcGen.gene_src_species = item.geneSrcSpecies;
			entitySrcGen.gene_src_strain = item.geneSrcStrain;
			entitySrcGen.gene_src_tissue = item.geneSrcTissue;
			entitySrcGen.gene_src_tissue_fraction = item.geneSrcTissueFraction;
			entitySrcGen.host_org_common_name = item.hostOrgCommonName;
			entitySrcGen.host_org_details = item.hostOrgDetails;
			entitySrcGen.host_org_genus = item.hostOrgGenus;
			entitySrcGen.host_org_species = item.hostOrgSpecies;
			entitySrcGen.pdbx_alt_source_flag = item.pdbxAltSourceFlag;
			entitySrcGen.pdbx_beg_seq_num = item.pdbxBegSeqNum;
			entitySrcGen.pdbx_description = item.pdbxDescription;
			entitySrcGen.pdbx_end_seq_num = item.pdbxEndSeqNum;
			entitySrcGen.pdbx_gene_src_atcc = item.pdbxGeneSrcAtcc;
			entitySrcGen.pdbx_gene_src_cell = item.pdbxGeneSrcCell;
			entitySrcGen.pdbx_gene_src_cell_line = item.pdbxGeneSrcCellLine;
			entitySrcGen.pdbx_gene_src_cellular_location = item.pdbxGeneSrcCellularLocation;
			entitySrcGen.pdbx_gene_src_fragment = item.pdbxGeneSrcFragment;
			entitySrcGen.pdbx_gene_src_gene = item.pdbxGeneSrcGene;
			entitySrcGen.pdbx_gene_src_ncbi_taxonomy_id = item.pdbxGeneSrcNcbiTaxonomyId;
			entitySrcGen.pdbx_gene_src_organ = item.pdbxGeneSrcOrgan;
			entitySrcGen.pdbx_gene_src_organelle = item.pdbxGeneSrcOrganelle;
			entitySrcGen.pdbx_gene_src_scientific_name = item.pdbxGeneSrcScientificName;
			entitySrcGen.pdbx_gene_src_variant = item.pdbxGeneSrcVariant;
			entitySrcGen.pdbx_host_org_atcc = item.pdbxHostOrgAtcc;
			entitySrcGen.pdbx_host_org_cell = item.pdbxHostOrgCell;
			entitySrcGen.pdbx_host_org_cell_line = item.pdbxHostOrgCellLine;
			entitySrcGen.pdbx_host_org_cellular_location = item.pdbxHostOrgCellularLocation;
			entitySrcGen.pdbx_host_org_culture_collection = item.pdbxHostOrgCultureCollection;
			entitySrcGen.pdbx_host_org_gene = item.pdbxHostOrgGene;
			entitySrcGen.pdbx_host_org_ncbi_taxonomy_id = item.pdbxHostOrgNcbiTaxonomyId;
			entitySrcGen.pdbx_host_org_organ = item.pdbxHostOrgOrgan;
			entitySrcGen.pdbx_host_org_organelle = item.pdbxHostOrgOrganelle;
			entitySrcGen.pdbx_host_org_scientific_name = item.pdbxHostOrgScientificName;
			entitySrcGen.pdbx_host_org_strain = item.pdbxHostOrgStrain;
			entitySrcGen.pdbx_host_org_tissue = item.pdbxHostOrgTissue;
			entitySrcGen.pdbx_host_org_tissue_fraction = item.pdbxHostOrgTissueFraction;
			entitySrcGen.pdbx_host_org_variant = item.pdbxHostOrgVariant;
			entitySrcGen.pdbx_host_org_vector = item.pdbxHostOrgVector;
			entitySrcGen.pdbx_host_org_vector_type = item.pdbxHostOrgVectorType;
			entitySrcGen.pdbx_seq_type = item.pdbxSeqType;
			entitySrcGen.pdbx_src_id = item.pdbxSrcId;
			entitySrcGen.plasmid_details = item.plasmidDetails;
			entitySrcGen.plasmid_name = item.plasmidName;
			entitySrcGenList.push(entitySrcGen);
		});
		entityPolymerVo.entity_src_gen = entitySrcGenList;

		const entitySrcNatList = [];
		const findEntitySrcNat = await entitySrcNat.findAll({
			where: {
				structureId: PDBID,
				entityId: entityId,
			},
		});
		findEntitySrcNat.map(item => {
			const entitySrcNat = new EntitySrcNat();
			entitySrcNat.common_name = item?.commonName;
			entitySrcNat.details = item.details;
			entitySrcNat.genus = item.genus;
			entitySrcNat.pdbx_alt_source_flag = item.pdbxAltSourceFlag;
			entitySrcNat.pdbx_atcc = item.pdbxAtcc;
			entitySrcNat.pdbx_beg_seq_num = item.pdbxBegSeqNum;
			entitySrcNat.pdbx_cell = item.pdbxCell;
			entitySrcNat.pdbx_cell_line = item.pdbxCellLine;
			entitySrcNat.pdbx_cellular_location = item.pdbxCellularLocation;
			entitySrcNat.pdbx_end_seq_num = item.pdbxEndSeqNum;
			entitySrcNat.pdbx_fragment = item.pdbxFragment;
			entitySrcNat.pdbx_ncbi_taxonomy_id = item.pdbxNcbiTaxonomyId;
			entitySrcNat.pdbx_organ = item.pdbxOrgan;
			entitySrcNat.pdbx_organelle = item.pdbxOrganelle;
			entitySrcNat.pdbx_organism_scientific = item.pdbxOrganismScientific;
			entitySrcNat.pdbx_plasmid_details = item.pdbxPlasmidDetails;
			entitySrcNat.pdbx_plasmid_name = item.pdbxPlasmidName;
			entitySrcNat.pdbx_secretion = item.pdbxSecretion;
			entitySrcNat.pdbx_src_id = item.pdbxSrcId;
			entitySrcNat.pdbx_variant = item.pdbxVariant;
			entitySrcNat.species = item.species;
			entitySrcNat.strain = item.strain;
			entitySrcNat.tissue = item.tissue;
			entitySrcNat.tissue_fraction = item.tissueFraction;
			entitySrcNatList.push(entitySrcNat);
		});
		entityPolymerVo.entity_src_nat = entitySrcNatList;

		const PdbxEntitySrcSynList = [];
		const findPdbxEntitySrcSyn = await pdbxEntitySrcSyn.findAll({
			where: {
				structureId: PDBID,
				entityId: entityId,
			},
		});
		findPdbxEntitySrcSyn.map(item => {
			const pdbxEntitySrcSyn = new PdbxEntitySrcSyn();
			pdbxEntitySrcSyn.details = item.details;
			pdbxEntitySrcSyn.ncbi_taxonomy_id = item.ncbiTaxonomyId;
			pdbxEntitySrcSyn.organism_common_name = item.organismCommonName;
			pdbxEntitySrcSyn.organism_scientific = item.organismScientific;
			pdbxEntitySrcSyn.pdbx_alt_source_flag = item.pdbxAltSourceFlag;
			pdbxEntitySrcSyn.pdbx_beg_seq_num = item.pdbxBegSeqNum;
			pdbxEntitySrcSyn.pdbx_end_seq_num = item.pdbxEndSeqNum;
			pdbxEntitySrcSyn.pdbx_src_id = item.pdbxSrcId;
			PdbxEntitySrcSynList.push(pdbxEntitySrcSyn);
		});
		entityPolymerVo.pdbx_entity_src_syn = PdbxEntitySrcSynList;

		return entityPolymerVo;
	}

	public async getEntityMacromolecular(PDBID: string, entityId: string) {
		const entityPolymerVo = new EntityPolymerVo();

		return entityPolymerVo;
	}
}
