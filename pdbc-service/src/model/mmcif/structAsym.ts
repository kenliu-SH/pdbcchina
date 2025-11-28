import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'struct_asym', timestamps: false })
export class structAsym extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entity_id', allowNull: true, type: DataType.STRING(10) })
	entityId?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare details?: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ field: 'pdbx_modified', allowNull: true, type: DataType.STRING(200) })
	declare pdbxModified?: string;

	@Column({ field: 'pdbx_blank_PDB_chainid_flag', allowNull: true, type: DataType.STRING(10) })
	declare pdbxBlankPdbChainidFlag?: string;

	@Column({ field: 'pdbx_PDB_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxPdbId?: string;

	@Column({ field: 'pdbx_alt_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbxAltId?: string;

	@Column({ field: 'pdbx_type', allowNull: true, type: DataType.STRING(10) })
	declare pdbxType?: string;

	@Column({ field: 'pdbx_order', allowNull: true, type: DataType.INTEGER })
	declare pdbxOrder?: number;

	@Column({ field: 'pdbx_fraction_per_asym_unit', allowNull: true, type: DataType.STRING(200) })
	declare pdbxFractionPerAsymUnit?: string;

	@Column({ field: 'pdbx_missing_num_begin_of_chain_not_in_seqres', allowNull: true, type: DataType.INTEGER })
	declare pdbxMissingNumBeginOfChainNotInSeqres?: number;

	@Column({ field: 'pdbx_missing_num_end_of_chain_not_in_seqres', allowNull: true, type: DataType.INTEGER })
	declare pdbxMissingNumEndOfChainNotInSeqres?: number;

	@Column({ field: 'pdbx_missing_num_begin_of_chain_in_seqres', allowNull: true, type: DataType.INTEGER })
	declare pdbxMissingNumBeginOfChainInSeqres?: number;
}
