import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'audit', timestamps: false })
export class audit extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'creation_date', allowNull: true, type: DataType.DATE })
	declare creationDate?: Date;

	@Column({ field: 'creation_method', allowNull: true, type: DataType.STRING(200) })
	creationMethod?: string;

	@Column({ field: 'revision_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare revisionId: string;

	@Column({ field: 'update_record', allowNull: true, type: DataType.STRING(511) })
	updateRecord?: string;
}
