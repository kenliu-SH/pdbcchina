import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_nonpoly_scheme', timestamps: false })
export class pdbxNonpolyScheme extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare structureId: string;

	@Column({ field: 'asym_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare asymId: string;

	@Column({ field: 'entity_id', allowNull: true, type: DataType.STRING(10) })
	declare entityId?: string;

	@Column({ field: 'mon_id', allowNull: true, type: DataType.STRING(10) })
	declare monId: string;

	@Column({ field: 'pdb_strand_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbStrandId?: string;

	@Column({ field: 'ndb_seq_num', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare ndbSeqNum: string;

	@Column({ field: 'pdb_seq_num', allowNull: true, type: DataType.STRING(10) })
	declare pdbSeqNum?: string;

	@Column({ field: 'auth_seq_num', allowNull: true, type: DataType.STRING(10) })
	declare authSeqNum?: string;

	@Column({ field: 'pdb_mon_id', allowNull: true, type: DataType.STRING(10) })
	declare pdbMonId?: string;

	@Column({ field: 'auth_mon_id', allowNull: true, type: DataType.STRING(10) })
	declare authMonId?: string;

	@Column({ field: 'pdb_ins_code', allowNull: true, type: DataType.STRING(10) })
	declare pdbInsCode?: string;
}
