import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_audit_revision_group', timestamps: false })
export class pdbxAuditRevisionGroup extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ primaryKey: true, type: DataType.INTEGER })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare ordinal?: number;

	@Column({ field: 'revision_ordinal', primaryKey: true, type: DataType.INTEGER })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare revisionOrdinal?: number;

	@Column({ field: 'data_content_type', primaryKey: true, type: DataType.STRING(80) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare dataContentType?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare group1?: string;
}
