import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'pdbx_poly_seq_scheme', timestamps: false })
export class pdbxPolySeqScheme extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'asym_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	asymId!: string;

	@Column({ field: 'entity_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	entityId!: string;

	@Column({ field: 'seq_id', primaryKey: true, type: DataType.INTEGER })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	seqId!: number;

	@Column({ allowNull: true, type: DataType.STRING(10) })
	hetero?: string;

	@Column({ field: 'mon_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	monId!: string;

	@Column({ field: 'pdb_strand_id', allowNull: true, type: DataType.STRING(10) })
	pdbStrandId?: string;

	@Column({ field: 'ndb_seq_num', allowNull: true, type: DataType.INTEGER })
	ndbSeqNum?: number;

	@Column({ field: 'pdb_seq_num', allowNull: true, type: DataType.STRING(10) })
	pdbSeqNum?: string;

	@Column({ field: 'auth_seq_num', allowNull: true, type: DataType.STRING(10) })
	authSeqNum?: string;

	@Column({ field: 'pdb_mon_id', allowNull: true, type: DataType.STRING(10) })
	pdbMonId?: string;

	@Column({ field: 'auth_mon_id', allowNull: true, type: DataType.STRING(10) })
	authMonId?: string;

	@Column({ field: 'pdb_ins_code', allowNull: true, type: DataType.STRING(10) })
	pdbInsCode?: string;
}
