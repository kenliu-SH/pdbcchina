import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'symmetry', timestamps: false })
export class symmetry extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entry_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	entryId!: string;

	@Column({ field: 'cell_setting', allowNull: true, type: DataType.STRING(13) })
	cellSetting?: string;

	@Column({ field: 'Int_Tables_number', allowNull: true, type: DataType.INTEGER })
	intTablesNumber?: number;

	@Column({ field: 'space_group_name_Hall', allowNull: true, type: DataType.STRING(80) })
	spaceGroupNameHall?: string;

	@Column({ field: 'space_group_name_H_M', allowNull: true, type: DataType.STRING(80) })
	declare spaceGroupNameHM?: string;

	@Column({ field: 'pdbx_full_space_group_name_H_M', allowNull: true, type: DataType.STRING(80) })
	pdbxFullSpaceGroupNameHM?: string;
}
