import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_chem_comp_descriptor', timestamps: false })
export class pdbxChemCompDescriptor extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare structureId: string;

	@Column({ field: 'comp_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare compId: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare descriptor?: string;

	@Column({ primaryKey: true, type: DataType.STRING(80) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare type: string;

	@Column({ primaryKey: true, type: DataType.STRING(80) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare program: string;

	@Column({ field: 'program_version', primaryKey: true, type: DataType.STRING(80) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	programVersion!: string;

	@Column({ allowNull: true, type: DataType.INTEGER })
	declare ordinal?: number;
}
