import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'pdbx_audit_revision_history', timestamps: false })
export class pdbxAuditRevisionHistory extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ primaryKey: true, type: DataType.INTEGER })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare ordinal: number;

	@Column({ field: 'data_content_type', primaryKey: true, type: DataType.STRING(80) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare dataContentType: string;

	@Column({ field: 'major_revision', allowNull: true, type: DataType.INTEGER })
	declare majorRevision?: number;

	@Column({ field: 'minor_revision', allowNull: true, type: DataType.INTEGER })
	declare minorRevision?: number;

	@Column({ field: 'revision_date', allowNull: true, type: DataType.DATE })
	declare revisionDate?: Date;

	@Column({ field: 'internal_version', allowNull: true, type: DataType.INTEGER })
	declare internalVersion?: number;

	@Column({ field: 'internal_deposition_id', allowNull: true, type: DataType.STRING(10) })
	declare internalDepositionId?: string;
}
