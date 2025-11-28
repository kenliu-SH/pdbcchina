import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_entity_src_syn', timestamps: false })
export class pdbxEntitySrcSyn extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ allowNull: true, type: DataType.STRING(4095) })
	declare details?: string;

	@Column({ field: 'organism_scientific', allowNull: true, type: DataType.STRING(200) })
	declare organismScientific?: string;

	@Column({ field: 'organism_common_name', allowNull: true, type: DataType.STRING(200) })
	declare organismCommonName?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare strain?: string;

	@Column({ field: 'ncbi_taxonomy_id', allowNull: true, type: DataType.STRING(80) })
	declare ncbiTaxonomyId?: string;

	@Column({ field: 'entity_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	entityId!: string;

	@Column({ field: 'pdbx_src_id', primaryKey: true, type: DataType.INTEGER })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare pdbxSrcId?: number;

	@Column({ field: 'pdbx_alt_source_flag', allowNull: true, type: DataType.STRING(10) })
	declare pdbxAltSourceFlag?: string;

	@Column({ field: 'pdbx_beg_seq_num', allowNull: true, type: DataType.INTEGER })
	declare pdbxBegSeqNum?: number;

	@Column({ field: 'pdbx_end_seq_num', allowNull: true, type: DataType.INTEGER })
	declare pdbxEndSeqNum?: number;
}
