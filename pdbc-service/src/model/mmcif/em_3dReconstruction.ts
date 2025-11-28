import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'em_3d_reconstruction', timestamps: false })
export class em_3dReconstruction extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entry_id', allowNull: true, type: DataType.STRING(10) })
	declare entryId?: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ allowNull: true, type: DataType.STRING(511) })
	declare method?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare algorithm?: string;

	@Column({ field: 'citation_id', allowNull: true, type: DataType.STRING(10) })
	declare citationId?: string;

	@Column({ allowNull: true, type: DataType.STRING(4095) })
	declare details?: string;

	@Column({ allowNull: true, type: DataType.FLOAT(12) })
	declare resolution?: number;

	@Column({ field: 'resolution_method', allowNull: true, type: DataType.STRING(200) })
	declare resolutionMethod?: string;

	@Column({ field: 'magnification_calibration', allowNull: true, type: DataType.STRING(511) })
	declare magnificationCalibration?: string;

	@Column({ field: 'ctf_correction_method', allowNull: true, type: DataType.STRING(200) })
	declare ctfCorrectionMethod?: string;

	@Column({ field: 'nominal_pixel_size', allowNull: true, type: DataType.FLOAT(12) })
	declare nominalPixelSize?: number;

	@Column({ field: 'actual_pixel_size', allowNull: true, type: DataType.FLOAT(12) })
	declare actualPixelSize?: number;

	@Column({ field: 'num_particles', allowNull: true, type: DataType.INTEGER })
	declare numParticles?: number;

	@Column({ field: 'euler_angles_details', allowNull: true, type: DataType.STRING(200) })
	declare eulerAnglesDetails?: string;

	@Column({ field: 'num_class_averages', allowNull: true, type: DataType.INTEGER })
	declare numClassAverages?: number;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare software?: string;

	@Column({ field: 'fsc_type', allowNull: true, type: DataType.STRING(200) })
	declare fscType?: string;

	@Column({ field: 'refinement_type', allowNull: true, type: DataType.STRING(200) })
	declare refinementType?: string;

	@Column({ field: 'image_processing_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	imageProcessingId!: string;

	@Column({ field: 'symmetry_type', allowNull: true, type: DataType.STRING(80) })
	declare symmetryType?: string;
}
