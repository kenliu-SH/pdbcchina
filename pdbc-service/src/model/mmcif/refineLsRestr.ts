import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'refine_ls_restr', timestamps: false })
export class refineLsRestr extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'pdbx_refine_id', primaryKey: true, type: DataType.STRING(80) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	pdbxRefineId!: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	criterion?: string;

	@Column({ field: 'dev_ideal', allowNull: true, type: DataType.FLOAT(12) })
	declare devIdeal?: number;

	@Column({ field: 'dev_ideal_target', allowNull: true, type: DataType.FLOAT(12) })
	devIdealTarget?: number;

	@Column({ allowNull: true, type: DataType.INTEGER })
	number?: number;

	@Column({ allowNull: true, type: DataType.INTEGER })
	rejects?: number;

	@Column({ primaryKey: true, type: DataType.STRING(80) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare type: string;

	@Column({ allowNull: true, type: DataType.FLOAT(12) })
	weight?: number;

	@Column({ field: 'pdbx_restraint_function', allowNull: true, type: DataType.STRING(200) })
	pdbxRestraintFunction?: string;
}
