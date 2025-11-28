import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_entity_nonpoly', timestamps: false })
export class pdbxEntityNonpoly extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entity_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare entityId?: string;

	@Column({ field: 'comp_id', allowNull: true, type: DataType.STRING(10) })
	declare compId?: string;

	@Column({ allowNull: true, type: DataType.STRING(1023) })
	declare name?: string;
}
