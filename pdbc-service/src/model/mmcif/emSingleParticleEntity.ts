import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'em_single_particle_entity', timestamps: false })
export class emSingleParticleEntity extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entry_id', allowNull: true, type: DataType.STRING(10) })
	declare entryId?: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ field: 'symmetry_type', allowNull: true, type: DataType.STRING(80) })
	symmetryType?: string;

	@Column({ field: 'image_processing_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	imageProcessingId!: string;

	@Column({ field: 'point_symmetry', allowNull: true, type: DataType.STRING(20) })
	declare pointSymmetry?: string;
}
