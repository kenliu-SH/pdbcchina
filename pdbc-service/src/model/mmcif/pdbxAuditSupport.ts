import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'pdbx_audit_support', timestamps: false })
export class pdbxAuditSupport extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'funding_organization', allowNull: true, type: DataType.STRING(255) })
	declare fundingOrganization?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare country?: string;

	@Column({ field: 'grant_number', allowNull: true, type: DataType.STRING(255) })
	declare grantNumber?: string;

	@Column({ primaryKey: true, type: DataType.INTEGER })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare ordinal: number;
}
