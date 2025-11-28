import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_deposit_group', timestamps: false })
export class pdbxDepositGroup extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'group_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare groupId: string;

	@Column({ field: 'group_title', allowNull: true, type: DataType.STRING(200) })
	groupTitle?: string;

	@Column({ field: 'group_description', allowNull: true, type: DataType.STRING(255) })
	groupDescription?: string;

	@Column({ field: 'group_type', allowNull: true, type: DataType.STRING(255) })
	groupType?: string;
}
