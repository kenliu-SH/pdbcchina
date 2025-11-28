import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'em_particle_selection', timestamps: false })
export class emParticleSelection extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ allowNull: true, type: DataType.STRING(1023) })
	declare details?: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ field: 'image_processing_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	imageProcessingId!: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare method?: string;

	@Column({ field: 'num_particles_selected', allowNull: true, type: DataType.INTEGER })
	declare numParticlesSelected?: number;

	@Column({ field: 'reference_model', allowNull: true, type: DataType.STRING(200) })
	declare referenceModel?: string;
}
