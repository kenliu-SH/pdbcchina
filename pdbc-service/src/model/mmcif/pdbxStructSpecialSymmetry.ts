import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_struct_special_symmetry', timestamps: false })
export class pdbxStructSpecialSymmetry extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ primaryKey: true, type: DataType.INTEGER })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: number;

	@Column({ field: 'PDB_model_num', allowNull: true, type: DataType.INTEGER })
	declare pdbModelNum?: number;

	@Column({ field: 'auth_asym_id', allowNull: true, type: DataType.STRING(10) })
	declare authAsymId?: string;

	@Column({ field: 'auth_comp_id', allowNull: true, type: DataType.STRING(10) })
	declare authCompId?: string;

	@Column({ field: 'auth_seq_id', allowNull: true, type: DataType.STRING(10) })
	declare authSeqId?: string;

	@Column({ field: 'PDB_ins_code', allowNull: true, type: DataType.STRING(10) })
	declare pdbInsCode?: string;

	@Column({ field: 'label_alt_id', allowNull: true, type: DataType.STRING(10) })
	declare labelAltId?: string;

	@Column({ field: 'label_asym_id', allowNull: true, type: DataType.STRING(10) })
	declare labelAsymId?: string;

	@Column({ field: 'label_comp_id', allowNull: true, type: DataType.STRING(10) })
	declare labelCompId?: string;

	@Column({ field: 'label_seq_id', allowNull: true, type: DataType.INTEGER })
	declare labelSeqId?: number;
}
