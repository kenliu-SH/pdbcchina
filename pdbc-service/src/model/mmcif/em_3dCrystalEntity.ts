import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'em_3d_crystal_entity', timestamps: false })
export class em_3dCrystalEntity extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'angle_alpha', allowNull: true, type: DataType.FLOAT(12) })
	declare angleAlpha?: number;

	@Column({ field: 'angle_beta', allowNull: true, type: DataType.FLOAT(12) })
	declare angleBeta?: number;

	@Column({ field: 'angle_gamma', allowNull: true, type: DataType.FLOAT(12) })
	declare angleGamma?: number;

	@Column({ field: 'image_processing_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	imageProcessingId!: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ field: 'length_a', allowNull: true, type: DataType.FLOAT(12) })
	declare lengthA?: number;

	@Column({ field: 'length_b', allowNull: true, type: DataType.FLOAT(12) })
	declare lengthB?: number;

	@Column({ field: 'length_c', allowNull: true, type: DataType.FLOAT(12) })
	declare lengthC?: number;

	@Column({ field: 'space_group_name', allowNull: true, type: DataType.STRING(80) })
	declare spaceGroupName?: string;

	@Column({ field: 'space_group_num', allowNull: true, type: DataType.INTEGER })
	declare spaceGroupNum?: number;
}
