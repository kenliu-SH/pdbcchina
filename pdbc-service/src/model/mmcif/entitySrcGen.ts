import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entity } from './entity';
import { entry } from './entry';

@Table({ tableName: 'entity_src_gen', timestamps: false })
export class entitySrcGen extends Model {
	@ForeignKey(() => entry)
	@ForeignKey(() => entity)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entity_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	entityId!: string;

	@Column({ field: 'gene_src_common_name', allowNull: true, type: DataType.STRING(200) })
	declare geneSrcCommonName?: string;

	@Column({ field: 'gene_src_details', allowNull: true, type: DataType.STRING(1023) })
	declare geneSrcDetails?: string;

	@Column({ field: 'gene_src_genus', allowNull: true, type: DataType.STRING(200) })
	declare geneSrcGenus?: string;

	@Column({ field: 'gene_src_species', allowNull: true, type: DataType.STRING(200) })
	declare geneSrcSpecies?: string;

	@Column({ field: 'gene_src_strain', allowNull: true, type: DataType.STRING(200) })
	declare geneSrcStrain?: string;

	@Column({ field: 'gene_src_tissue', allowNull: true, type: DataType.STRING(200) })
	declare geneSrcTissue?: string;

	@Column({ field: 'gene_src_tissue_fraction', allowNull: true, type: DataType.STRING(200) })
	declare geneSrcTissueFraction?: string;

	@Column({ field: 'host_org_genus', allowNull: true, type: DataType.STRING(200) })
	declare hostOrgGenus?: string;

	@Column({ field: 'host_org_species', allowNull: true, type: DataType.STRING(200) })
	declare hostOrgSpecies?: string;

	@Column({ field: 'pdbx_gene_src_fragment', allowNull: true, type: DataType.STRING(200) })
	declare pdbxGeneSrcFragment?: string;

	@Column({ field: 'pdbx_gene_src_gene', allowNull: true, type: DataType.STRING(1023) })
	declare pdbxGeneSrcGene?: string;

	@Column({ field: 'pdbx_gene_src_scientific_name', allowNull: true, type: DataType.STRING(200) })
	declare pdbxGeneSrcScientificName?: string;

	@Column({ field: 'pdbx_gene_src_variant', allowNull: true, type: DataType.STRING(200) })
	declare pdbxGeneSrcVariant?: string;

	@Column({ field: 'pdbx_gene_src_cell_line', allowNull: true, type: DataType.STRING(200) })
	declare pdbxGeneSrcCellLine?: string;

	@Column({ field: 'pdbx_gene_src_atcc', allowNull: true, type: DataType.STRING(200) })
	declare pdbxGeneSrcAtcc?: string;

	@Column({ field: 'pdbx_gene_src_organ', allowNull: true, type: DataType.STRING(200) })
	declare pdbxGeneSrcOrgan?: string;

	@Column({ field: 'pdbx_gene_src_organelle', allowNull: true, type: DataType.STRING(200) })
	declare pdbxGeneSrcOrganelle?: string;

	@Column({ field: 'pdbx_gene_src_plasmid', allowNull: true, type: DataType.STRING(200) })
	declare pdbxGeneSrcPlasmdeclareId?: string;

	@Column({ field: 'pdbx_gene_src_plasmid_name', allowNull: true, type: DataType.STRING(200) })
	declare pdbxGeneSrcPlasmidName?: string;

	@Column({ field: 'pdbx_gene_src_cell', allowNull: true, type: DataType.STRING(200) })
	declare pdbxGeneSrcCell?: string;

	@Column({ field: 'pdbx_gene_src_cellular_location', allowNull: true, type: DataType.STRING(200) })
	declare pdbxGeneSrcCellularLocation?: string;

	@Column({ field: 'pdbx_host_org_gene', allowNull: true, type: DataType.STRING(200) })
	declare pdbxHostOrgGene?: string;

	@Column({ field: 'pdbx_host_org_organ', allowNull: true, type: DataType.STRING(200) })
	declare pdbxHostOrgOrgan?: string;

	@Column({ field: 'pdbx_host_org_organelle', allowNull: true, type: DataType.STRING(200) })
	declare pdbxHostOrgOrganelle?: string;

	@Column({ field: 'pdbx_host_org_cellular_location', allowNull: true, type: DataType.STRING(200) })
	declare pdbxHostOrgCellularLocation?: string;

	@Column({ field: 'pdbx_host_org_strain', allowNull: true, type: DataType.STRING(200) })
	declare pdbxHostOrgStrain?: string;

	@Column({ field: 'pdbx_host_org_tissue_fraction', allowNull: true, type: DataType.STRING(200) })
	declare pdbxHostOrgTissueFraction?: string;

	@Column({ field: 'pdbx_description', allowNull: true, type: DataType.STRING(4095) })
	declare pdbxDescription?: string;

	@Column({ field: 'host_org_common_name', allowNull: true, type: DataType.STRING(200) })
	declare hostOrgCommonName?: string;

	@Column({ field: 'host_org_details', allowNull: true, type: DataType.STRING(255) })
	declare hostOrgDetails?: string;

	@Column({ field: 'host_org_strain', allowNull: true, type: DataType.STRING(200) })
	declare hostOrgStrain?: string;

	@Column({ field: 'plasmid_details', allowNull: true, type: DataType.STRING(511) })
	declare plasmidDetails?: string;

	@Column({ field: 'plasmid_name', allowNull: true, type: DataType.STRING(200) })
	declare plasmidName?: string;

	@Column({ field: 'pdbx_host_org_variant', allowNull: true, type: DataType.STRING(200) })
	declare pdbxHostOrgVariant?: string;

	@Column({ field: 'pdbx_host_org_cell_line', allowNull: true, type: DataType.STRING(200) })
	declare pdbxHostOrgCellLine?: string;

	@Column({ field: 'pdbx_host_org_atcc', allowNull: true, type: DataType.STRING(200) })
	declare pdbxHostOrgAtcc?: string;

	@Column({ field: 'pdbx_host_org_culture_collection', allowNull: true, type: DataType.STRING(200) })
	declare pdbxHostOrgCultureCollection?: string;

	@Column({ field: 'pdbx_host_org_cell', allowNull: true, type: DataType.STRING(200) })
	declare pdbxHostOrgCell?: string;

	@Column({ field: 'pdbx_host_org_scientific_name', allowNull: true, type: DataType.STRING(200) })
	declare pdbxHostOrgScientificName?: string;

	@Column({ field: 'pdbx_host_org_tissue', allowNull: true, type: DataType.STRING(200) })
	declare pdbxHostOrgTissue?: string;

	@Column({ field: 'pdbx_host_org_vector', allowNull: true, type: DataType.STRING(200) })
	declare pdbxHostOrgVector?: string;

	@Column({ field: 'pdbx_host_org_vector_type', allowNull: true, type: DataType.STRING(200) })
	declare pdbxHostOrgVectorType?: string;

	@Column({ field: 'expression_system_id', allowNull: true, type: DataType.STRING(80) })
	declare expressionSystemId?: string;

	@Column({ field: 'gene_src_dev_stage', allowNull: true, type: DataType.STRING(200) })
	declare geneSrcDevStage?: string;

	@Column({ field: 'start_construct_id', allowNull: true, type: DataType.STRING(10) })
	declare startConstructId?: string;

	@Column({ field: 'pdbx_gene_src_ncbi_taxonomy_id', allowNull: true, type: DataType.STRING(80) })
	declare pdbxGeneSrcNcbiTaxonomyId?: string;

	@Column({ field: 'pdbx_host_org_ncbi_taxonomy_id', allowNull: true, type: DataType.STRING(80) })
	declare pdbxHostOrgNcbiTaxonomyId?: string;

	@Column({ field: 'pdbx_src_id', primaryKey: true, type: DataType.INTEGER })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare pdbxSrcId: number;

	@Column({ field: 'pdbx_alt_source_flag', allowNull: true, type: DataType.STRING(10) })
	declare pdbxAltSourceFlag?: string;

	@Column({ field: 'pdbx_seq_type', allowNull: true, type: DataType.STRING(80) })
	declare pdbxSeqType?: string;

	@Column({ field: 'pdbx_beg_seq_num', allowNull: true, type: DataType.INTEGER })
	declare pdbxBegSeqNum?: number;

	@Column({ field: 'pdbx_end_seq_num', allowNull: true, type: DataType.INTEGER })
	declare pdbxEndSeqNum?: number;

	@Column({ field: 'pdbx_gene_src_culture_collection', allowNull: true, type: DataType.STRING(200) })
	declare pdbxGeneSrcCultureCollection?: string;
}
