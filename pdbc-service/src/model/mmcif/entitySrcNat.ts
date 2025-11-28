import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entity } from './entity';
import { entry } from './entry';

@Table({ tableName: 'entity_src_nat', timestamps: false })
export class entitySrcNat extends Model {
	@ForeignKey(() => entity)
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entity_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare entityId: string;

	@Column({ field: 'common_name', allowNull: true, type: DataType.STRING(200) })
	declare commonName?: string;

	@Column({ allowNull: true, type: DataType.STRING(511) })
	declare details?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare genus?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare species?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare strain?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare tissue?: string;

	@Column({ field: 'tissue_fraction', allowNull: true, type: DataType.STRING(200) })
	declare tissueFraction?: string;

	@Column({ field: 'pdbx_organism_scientific', allowNull: true, type: DataType.STRING(200) })
	declare pdbxOrganismScientific?: string;

	@Column({ field: 'pdbx_secretion', allowNull: true, type: DataType.STRING(200) })
	declare pdbxSecretion?: string;

	@Column({ field: 'pdbx_fragment', allowNull: true, type: DataType.STRING(200) })
	declare pdbxFragment?: string;

	@Column({ field: 'pdbx_variant', allowNull: true, type: DataType.STRING(200) })
	declare pdbxVariant?: string;

	@Column({ field: 'pdbx_cell_line', allowNull: true, type: DataType.STRING(200) })
	declare pdbxCellLine?: string;

	@Column({ field: 'pdbx_atcc', allowNull: true, type: DataType.STRING(200) })
	declare pdbxAtcc?: string;

	@Column({ field: 'pdbx_cellular_location', allowNull: true, type: DataType.STRING(200) })
	declare pdbxCellularLocation?: string;

	@Column({ field: 'pdbx_organ', allowNull: true, type: DataType.STRING(200) })
	declare pdbxOrgan?: string;

	@Column({ field: 'pdbx_organelle', allowNull: true, type: DataType.STRING(200) })
	declare pdbxOrganelle?: string;

	@Column({ field: 'pdbx_cell', allowNull: true, type: DataType.STRING(200) })
	declare pdbxCell?: string;

	@Column({ field: 'pdbx_plasmid_name', allowNull: true, type: DataType.STRING(200) })
	declare pdbxPlasmidName?: string;

	@Column({ field: 'pdbx_plasmid_details', allowNull: true, type: DataType.STRING(200) })
	declare pdbxPlasmidDetails?: string;

	@Column({ field: 'pdbx_ncbi_taxonomy_id', allowNull: true, type: DataType.STRING(80) })
	declare pdbxNcbiTaxonomyId?: string;

	@Column({ field: 'pdbx_src_id', primaryKey: true, type: DataType.INTEGER })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	pdbxSrcId!: number;

	@Column({ field: 'pdbx_alt_source_flag', allowNull: true, type: DataType.STRING(10) })
	declare pdbxAltSourceFlag?: string;

	@Column({ field: 'pdbx_beg_seq_num', allowNull: true, type: DataType.INTEGER })
	declare pdbxBegSeqNum?: number;

	@Column({ field: 'pdbx_end_seq_num', allowNull: true, type: DataType.INTEGER })
	declare pdbxEndSeqNum?: number;

	@Column({ field: 'pdbx_culture_collection', allowNull: true, type: DataType.STRING(200) })
	declare pdbxCultureCollection?: string;
}
