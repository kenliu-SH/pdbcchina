import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_struct_assembly_prop', timestamps: false })
export class pdbxStructAssemblyProp extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'biol_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	biolId!: string;

	@Column({ primaryKey: true, type: DataType.STRING(80) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	type!: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare value?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare details?: string;
}
