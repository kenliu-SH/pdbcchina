import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'em_software', timestamps: false })
export class emSoftware extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare category?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	details?: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ field: 'image_processing_id', allowNull: true, type: DataType.STRING(10) })
	imageProcessingId?: string;

	@Column({ field: 'fitting_id', allowNull: true, type: DataType.STRING(10) })
	fittingId?: string;

	@Column({ field: 'imaging_id', allowNull: true, type: DataType.STRING(10) })
	imagingId?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare name?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare version?: string;
}
