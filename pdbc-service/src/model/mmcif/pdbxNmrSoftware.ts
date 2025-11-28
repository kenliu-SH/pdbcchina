import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_nmr_software', timestamps: false })
export class pdbxNmrSoftware extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ primaryKey: true, type: DataType.INTEGER })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare ordinal?: number;

	@Column({ allowNull: true, type: DataType.STRING(128) })
	declare classification?: string;

	@Column({ allowNull: true, type: DataType.STRING(255) })
	declare name?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare version?: string;

	@Column({ allowNull: true, type: DataType.STRING(511) })
	declare authors?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare details?: string;
}
