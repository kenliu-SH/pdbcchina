import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_struct_assembly', timestamps: false })
export class pdbxStructAssembly extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'method_details', allowNull: true, type: DataType.STRING(200) })
	declare methodDetails?: string;

	@Column({ field: 'oligomeric_details', allowNull: true, type: DataType.STRING(255) })
	declare oligomericDetails?: string;

	@Column({ field: 'oligomeric_count', allowNull: true, type: DataType.INTEGER })
	declare oligomericCount?: number;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare details?: string;

	@Column({ primaryKey: true, type: DataType.STRING(80) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id?: string;
}
