import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'software', timestamps: false })
export class software extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'citation_id', allowNull: true, type: DataType.STRING(10) })
	citationId?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare classification?: string;

	@Column({ field: 'compiler_name', allowNull: true, type: DataType.STRING(80) })
	compilerName?: string;

	@Column({ field: 'compiler_version', allowNull: true, type: DataType.STRING(80) })
	compilerVersion?: string;

	@Column({ field: 'contact_author', allowNull: true, type: DataType.STRING(255) })
	contactAuthor?: string;

	@Column({ field: 'contact_author_email', allowNull: true, type: DataType.STRING(80) })
	contactAuthorEmail?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	date?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	description?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	dependencies?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	hardware?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	language?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	location?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	mods?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare name?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	os?: string;

	@Column({ field: 'os_version', allowNull: true, type: DataType.STRING(200) })
	osVersion?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	type?: string;

	@Column({ allowNull: true, type: DataType.STRING(255) })
	declare version?: string;

	@Column({ field: 'pdbx_ordinal', primaryKey: true, type: DataType.INTEGER })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	pdbxOrdinal!: number;
}
