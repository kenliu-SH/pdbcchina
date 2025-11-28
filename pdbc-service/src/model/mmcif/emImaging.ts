import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'em_imaging', timestamps: false })
export class emImaging extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entry_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	entryId!: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	astigmatism?: string;

	@Column({ field: 'electron_beam_tilt_params', allowNull: true, type: DataType.STRING(200) })
	electronBeamTiltParams?: string;

	@Column({ field: 'residual_tilt', allowNull: true, type: DataType.FLOAT(12) })
	residualTilt?: number;

	@Column({ field: 'sample_support_id', allowNull: true, type: DataType.STRING(10) })
	sampleSupportId?: string;

	@Column({ field: 'detector_id', allowNull: true, type: DataType.STRING(10) })
	detectorId?: string;

	@Column({ field: 'scans_id', allowNull: true, type: DataType.STRING(10) })
	scansId?: string;

	@Column({ field: 'microscope_id', allowNull: true, type: DataType.STRING(10) })
	microscopeId?: string;

	@Column({ field: 'microscope_model', allowNull: true, type: DataType.STRING(80) })
	declare microscopeModel?: string;

	@Column({ field: 'specimen_holder_type', allowNull: true, type: DataType.STRING(200) })
	specimenHolderType?: string;

	@Column({ field: 'specimen_holder_model', allowNull: true, type: DataType.STRING(80) })
	declare specimenHolderModel?: string;

	@Column({ allowNull: true, type: DataType.STRING(1023) })
	declare details?: string;

	@Column({ allowNull: true, type: DataType.DATE })
	declare date?: Date;

	@Column({ field: 'accelerating_voltage', allowNull: true, type: DataType.INTEGER })
	declare acceleratingVoltage?: number;

	@Column({ field: 'illumination_mode', allowNull: true, type: DataType.STRING(80) })
	illuminationMode?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	mode?: string;

	@Column({ field: 'nominal_cs', allowNull: true, type: DataType.FLOAT(12) })
	declare nominalCs?: number;

	@Column({ field: 'nominal_defocus_min', allowNull: true, type: DataType.FLOAT(12) })
	declare nominalDefocusMin?: number;

	@Column({ field: 'nominal_defocus_max', allowNull: true, type: DataType.FLOAT(12) })
	declare nominalDefocusMax?: number;

	@Column({ field: 'calibrated_defocus_min', allowNull: true, type: DataType.FLOAT(12) })
	calibratedDefocusMin?: number;

	@Column({ field: 'calibrated_defocus_max', allowNull: true, type: DataType.FLOAT(12) })
	calibratedDefocusMax?: number;

	@Column({ field: 'tilt_angle_min', allowNull: true, type: DataType.FLOAT(12) })
	declare tiltAngleMin?: number;

	@Column({ field: 'tilt_angle_max', allowNull: true, type: DataType.FLOAT(12) })
	declare tiltAngleMax?: number;

	@Column({ field: 'nominal_magnification', allowNull: true, type: DataType.INTEGER })
	declare nominalMagnification?: number;

	@Column({ field: 'calibrated_magnification', allowNull: true, type: DataType.INTEGER })
	declare calibratedMagnification?: number;

	@Column({ field: 'electron_source', allowNull: true, type: DataType.STRING(80) })
	declare electronSource?: string;

	@Column({ field: 'electron_dose', allowNull: true, type: DataType.FLOAT(12) })
	electronDose?: number;

	@Column({ field: 'energy_filter', allowNull: true, type: DataType.STRING(80) })
	energyFilter?: string;

	@Column({ field: 'energy_window', allowNull: true, type: DataType.STRING(80) })
	energyWindow?: string;

	@Column({ field: 'citation_id', allowNull: true, type: DataType.STRING(10) })
	citationId?: string;

	@Column({ allowNull: true, type: DataType.FLOAT(12) })
	declare temperature?: number;

	@Column({ field: 'detector_distance', allowNull: true, type: DataType.FLOAT(12) })
	detectorDistance?: number;

	@Column({ field: 'recording_temperature_minimum', allowNull: true, type: DataType.FLOAT(12) })
	recordingTemperatureMinimum?: number;

	@Column({ field: 'recording_temperature_maximum', allowNull: true, type: DataType.FLOAT(12) })
	recordingTemperatureMaximum?: number;

	@Column({ field: 'alignment_procedure', allowNull: true, type: DataType.STRING(80) })
	alignmentProcedure?: string;

	@Column({ field: 'c2_aperture_diameter', allowNull: true, type: DataType.FLOAT(12) })
	c2ApertureDiameter?: number;

	@Column({ field: 'specimen_id', allowNull: true, type: DataType.STRING(10) })
	specimenId?: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	cryogen?: string;
}
