import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'em_helical_entity', timestamps: false })
export class emHelicalEntity extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ field: 'entity_assembly_id', allowNull: true, type: DataType.STRING(10) })
	entityAssemblyId?: string;

	@Column({ field: 'image_processing_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	imageProcessingId!: string;

	@Column({ allowNull: true, type: DataType.STRING(255) })
	details?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	dyad?: string;

	@Column({ field: 'axial_symmetry', allowNull: true, type: DataType.STRING(5) })
	declare axialSymmetry?: string;

	@Column({ field: 'angular_rotation_per_subunit', allowNull: true, type: DataType.FLOAT(12) })
	declare angularRotationPerSubunit?: number;

	@Column({ field: 'axial_rise_per_subunit', allowNull: true, type: DataType.FLOAT(12) })
	declare axialRisePerSubunit?: number;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	hand?: string;
}
