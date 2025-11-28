import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_database_related', timestamps: false })
export class pdbxDatabaseRelated extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'db_name', primaryKey: true, type: DataType.STRING(12) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	dbName!: string;

	@Column({ allowNull: true, type: DataType.STRING(4095) })
	details?: string;

	@Column({ field: 'db_id', primaryKey: true, type: DataType.STRING(80) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	dbId!: string;

	@Column({ field: 'content_type', primaryKey: true, type: DataType.STRING(80) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	contentType!: string;
}
