import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_branch_scheme', timestamps: false })
export class pdbxBranchScheme extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entity_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	entityId!: string;

	@Column({ field: 'asym_id', primaryKey: true, type: DataType.STRING(10) })
	declare asymId?: string;

	@Column({ field: 'num', primaryKey: true, type: DataType.INTEGER })
	declare num?: number;

	@Column({ field: 'pdb_asym_id', primaryKey: true, type: DataType.STRING(10) })
	declare pdbAsymId?: string;

	@Column({ field: 'pdb_mon_id', primaryKey: true, type: DataType.STRING(10) })
	declare pdbMonId?: string;

	@Column({ field: 'pdb_seq_num', primaryKey: true, type: DataType.INTEGER })
	declare pdbSeqNum?: number;

	@Column({ field: 'auth_asym_id', primaryKey: true, type: DataType.STRING(10) })
	declare authAsymId?: string;

	@Column({ field: 'auth_mon_id', primaryKey: true, type: DataType.STRING(10) })
	declare authMonId?: string;

	@Column({ field: 'auth_seq_num', primaryKey: true, type: DataType.INTEGER })
	declare authSeqNum?: number;

	@Column({ field: 'hetero', primaryKey: true, type: DataType.STRING(10) })
	declare hetero?: string;
}
