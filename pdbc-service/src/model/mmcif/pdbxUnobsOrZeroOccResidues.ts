import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_unobs_or_zero_occ_residues', timestamps: false })
export class pdbxUnobsOrZeroOccResidues extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ primaryKey: true, type: DataType.INTEGER })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: number;

	@Column({ field: 'polymer_flag', allowNull: true, type: DataType.STRING(10) })
	polymerFlag?: string;

	@Column({ field: 'occupancy_flag', allowNull: true, type: DataType.INTEGER })
	occupancyFlag?: number;

	@Column({ field: 'PDB_model_num', allowNull: true, type: DataType.INTEGER })
	pdbModelNum?: number;

	@Column({ field: 'auth_asym_id', allowNull: true, type: DataType.STRING(10) })
	authAsymId?: string;

	@Column({ field: 'auth_comp_id', allowNull: true, type: DataType.STRING(10) })
	authCompId?: string;

	@Column({ field: 'auth_seq_id', allowNull: true, type: DataType.STRING(10) })
	authSeqId?: string;

	@Column({ field: 'PDB_ins_code', allowNull: true, type: DataType.STRING(10) })
	pdbInsCode?: string;

	@Column({ field: 'label_asym_id', allowNull: true, type: DataType.STRING(10) })
	labelAsymId?: string;

	@Column({ field: 'label_comp_id', allowNull: true, type: DataType.STRING(10) })
	labelCompId?: string;

	@Column({ field: 'label_seq_id', allowNull: true, type: DataType.INTEGER })
	labelSeqId?: number;
}
