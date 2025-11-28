import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'exptl_crystal', timestamps: false })
export class exptlCrystal extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	colour?: string;

	@Column({ field: 'density_diffrn', allowNull: true, type: DataType.FLOAT(12) })
	densityDiffrn?: number;

	@Column({ field: 'density_Matthews', allowNull: true, type: DataType.FLOAT(12) })
	declare densityMatthews?: number;

	@Column({ field: 'density_method', allowNull: true, type: DataType.STRING(200) })
	densityMethod?: string;

	@Column({ field: 'density_percent_sol', allowNull: true, type: DataType.FLOAT(12) })
	declare densityPercentSol?: number;

	@Column({ allowNull: true, type: DataType.STRING(4095) })
	description?: string;

	@Column({ field: 'F_000', allowNull: true, type: DataType.INTEGER })
	f_000?: number;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ allowNull: true, type: DataType.STRING(511) })
	preparation?: string;

	@Column({ field: 'size_max', allowNull: true, type: DataType.FLOAT(12) })
	sizeMax?: number;

	@Column({ field: 'size_mid', allowNull: true, type: DataType.FLOAT(12) })
	sizeMid?: number;

	@Column({ field: 'size_min', allowNull: true, type: DataType.FLOAT(12) })
	sizeMin?: number;

	@Column({ field: 'size_rad', allowNull: true, type: DataType.FLOAT(12) })
	sizeRad?: number;

	@Column({ field: 'colour_lustre', allowNull: true, type: DataType.STRING(80) })
	colourLustre?: string;

	@Column({ field: 'colour_modifier', allowNull: true, type: DataType.STRING(80) })
	colourModifier?: string;

	@Column({ field: 'colour_primary', allowNull: true, type: DataType.STRING(80) })
	colourPrimary?: string;

	@Column({ field: 'density_meas', allowNull: true, type: DataType.FLOAT(12) })
	densityMeas?: number;

	@Column({ field: 'density_meas_esd', allowNull: true, type: DataType.FLOAT(12) })
	densityMeasEsd?: number;

	@Column({ field: 'density_meas_gt', allowNull: true, type: DataType.FLOAT(12) })
	densityMeasGt?: number;

	@Column({ field: 'density_meas_lt', allowNull: true, type: DataType.FLOAT(12) })
	densityMeasLt?: number;

	@Column({ field: 'density_meas_temp', allowNull: true, type: DataType.FLOAT(12) })
	densityMeasTemp?: number;

	@Column({ field: 'density_meas_temp_esd', allowNull: true, type: DataType.FLOAT(12) })
	densityMeasTempEsd?: number;

	@Column({ field: 'density_meas_temp_gt', allowNull: true, type: DataType.FLOAT(12) })
	densityMeasTempGt?: number;

	@Column({ field: 'density_meas_temp_lt', allowNull: true, type: DataType.FLOAT(12) })
	densityMeasTempLt?: number;

	@Column({ field: 'pdbx_crystal_image_url', allowNull: true, type: DataType.STRING(80) })
	pdbxCrystalImageUrl?: string;

	@Column({ field: 'pdbx_crystal_image_format', allowNull: true, type: DataType.STRING(80) })
	pdbxCrystalImageFormat?: string;

	@Column({ field: 'pdbx_mosaicity', allowNull: true, type: DataType.FLOAT(12) })
	pdbxMosaicity?: number;

	@Column({ field: 'pdbx_mosaicity_esd', allowNull: true, type: DataType.FLOAT(12) })
	pdbxMosaicityEsd?: number;

	@Column({ field: 'pdbx_crystal_image', allowNull: true, type: DataType.STRING(10) })
	pdbxCrystalImage?: string;

	@Column({ field: 'pdbx_x_ray_image', allowNull: true, type: DataType.STRING(10) })
	pdbxXRayImage?: string;

	@Column({ field: 'pdbx_x_ray_image_type', allowNull: true, type: DataType.STRING(200) })
	pdbxXRayImageType?: string;

	@Column({ field: 'pdbx_crystal_diffrn_limit', allowNull: true, type: DataType.FLOAT(12) })
	pdbxCrystalDiffrnLimit?: number;

	@Column({ field: 'pdbx_crystal_diffrn_lifetime', allowNull: true, type: DataType.FLOAT(12) })
	pdbxCrystalDiffrnLifetime?: number;

	@Column({ field: 'pdbx_crystal_direction_1', allowNull: true, type: DataType.FLOAT(12) })
	pdbxCrystalDirection_1?: number;

	@Column({ field: 'pdbx_crystal_direction_2', allowNull: true, type: DataType.FLOAT(12) })
	pdbxCrystalDirection_2?: number;

	@Column({ field: 'pdbx_crystal_direction_3', allowNull: true, type: DataType.FLOAT(12) })
	pdbxCrystalDirection_3?: number;
}
