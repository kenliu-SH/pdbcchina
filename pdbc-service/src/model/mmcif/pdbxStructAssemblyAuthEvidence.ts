import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_struct_assembly_auth_evidence', timestamps: false })
export class pdbxStructAssemblyAuthEvidence extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id?: string;

	@Column({ field: 'assembly_id', primaryKey: true, type: DataType.STRING(80) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare assemblyId?: string;

	@Column({ field: 'experimental_support', allowNull: true, type: DataType.STRING(80) })
	declare experimentalSupport?: string;

	@Column({ allowNull: true, type: DataType.STRING(511) })
	declare details?: string;
}
