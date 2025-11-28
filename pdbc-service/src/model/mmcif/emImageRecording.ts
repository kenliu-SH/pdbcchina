import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'em_image_recording', timestamps: false })
export class emImageRecording extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'average_exposure_time', allowNull: true, type: DataType.FLOAT(12) })
	averageExposureTime?: number;

	@Column({ field: 'avg_electron_dose_per_image', allowNull: true, type: DataType.FLOAT(12) })
	declare avgElectronDosePerImage?: number;

	@Column({ allowNull: true, type: DataType.STRING(1023) })
	details?: string;

	@Column({ field: 'detector_mode', allowNull: true, type: DataType.STRING(80) })
	detectorMode?: string;

	@Column({ field: 'film_or_detector_model', allowNull: true, type: DataType.STRING(80) })
	declare filmOrDetectorModel?: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ field: 'imaging_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	imagingId!: string;

	@Column({ field: 'num_diffraction_images', allowNull: true, type: DataType.INTEGER })
	numDiffractionImages?: number;

	@Column({ field: 'num_grids_imaged', allowNull: true, type: DataType.INTEGER })
	numGridsImaged?: number;

	@Column({ field: 'num_real_images', allowNull: true, type: DataType.INTEGER })
	numRealImages?: number;
}
