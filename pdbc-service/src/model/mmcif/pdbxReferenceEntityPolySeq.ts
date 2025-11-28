import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_reference_entity_poly_seq', timestamps: false })
export class pdbxReferenceEntityPolySeq extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'prd_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	prdId!: string;

	@Column({ field: 'ref_entity_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	refEntityId!: string;

	@Column({ field: 'mon_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare monId?: string;

	@Column({ field: 'parent_mon_id', allowNull: true, type: DataType.STRING(10) })
	declare parentMonId?: string;

	@Column({ primaryKey: true, type: DataType.INTEGER })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	num!: number;

	@Column({ allowNull: true, type: DataType.STRING(10) })
	declare observed?: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	hetero!: string;
}
