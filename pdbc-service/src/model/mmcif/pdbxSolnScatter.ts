import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_soln_scatter', timestamps: false })
export class pdbxSolnScatter extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entry_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	entryId!: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ allowNull: true, type: DataType.STRING(10) })
	declare type?: string;

	@Column({ field: 'source_beamline', allowNull: true, type: DataType.STRING(200) })
	declare sourceBeamline?: string;

	@Column({ field: 'source_beamline_instrument', allowNull: true, type: DataType.STRING(200) })
	declare sourceBeamlineInstrument?: string;

	@Column({ field: 'detector_type', allowNull: true, type: DataType.STRING(200) })
	declare detectorType?: string;

	@Column({ field: 'detector_specific', allowNull: true, type: DataType.STRING(200) })
	declare detectorSpecific?: string;

	@Column({ field: 'source_type', allowNull: true, type: DataType.STRING(200) })
	declare sourceType?: string;

	@Column({ field: 'source_class', allowNull: true, type: DataType.STRING(200) })
	declare sourceClass?: string;

	@Column({ field: 'num_time_frames', allowNull: true, type: DataType.INTEGER })
	declare numTimeFrames?: number;

	@Column({ field: 'sample_pH', allowNull: true, type: DataType.FLOAT(12) })
	declare samplePH?: number;

	@Column({ allowNull: true, type: DataType.FLOAT(12) })
	declare temperature?: number;

	@Column({ field: 'concentration_range', allowNull: true, type: DataType.STRING(80) })
	declare concentrationRange?: string;

	@Column({ field: 'buffer_name', allowNull: true, type: DataType.STRING(128) })
	declare bufferName?: string;

	@Column({ field: 'mean_guiner_radius', allowNull: true, type: DataType.FLOAT(12) })
	declare meanGuinerRadius?: number;

	@Column({ field: 'mean_guiner_radius_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare meanGuinerRadiusEsd?: number;

	@Column({ field: 'min_mean_cross_sectional_radii_gyration', allowNull: true, type: DataType.FLOAT(12) })
	declare minMeanCrossSectionalRadiiGyration?: number;

	@Column({ field: 'min_mean_cross_sectional_radii_gyration_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare minMeanCrossSectionalRadiiGyrationEsd?: number;

	@Column({ field: 'max_mean_cross_sectional_radii_gyration', allowNull: true, type: DataType.FLOAT(12) })
	declare maxMeanCrossSectionalRadiiGyration?: number;

	@Column({ field: 'max_mean_cross_sectional_radii_gyration_esd', allowNull: true, type: DataType.FLOAT(12) })
	declare maxMeanCrossSectionalRadiiGyrationEsd?: number;

	@Column({ field: 'protein_length', allowNull: true, type: DataType.STRING(80) })
	declare proteinLength?: string;

	@Column({ field: 'data_reduction_software_list', allowNull: true, type: DataType.STRING(200) })
	declare dataReductionSoftwareList?: string;

	@Column({ field: 'data_analysis_software_list', allowNull: true, type: DataType.STRING(200) })
	declare dataAnalysisSoftwareList?: string;
}
