import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'diffrn_radiation', timestamps: false })
export class diffrnRadiation extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'diffrn_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare diffrnId: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	collimation?: string;

	@Column({ field: 'filter_edge', allowNull: true, type: DataType.FLOAT(12) })
	filterEdge?: number;

	@Column({ allowNull: true, type: DataType.FLOAT(12) })
	inhomogeneity?: number;

	@Column({ allowNull: true, type: DataType.STRING(511) })
	monochromator?: string;

	@Column({ field: 'polarisn_norm', allowNull: true, type: DataType.FLOAT(12) })
	polarisnNorm?: number;

	@Column({ field: 'polarisn_ratio', allowNull: true, type: DataType.FLOAT(12) })
	polarisnRatio?: number;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	probe?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	type?: string;

	@Column({ field: 'xray_symbol', allowNull: true, type: DataType.STRING(80) })
	xraySymbol?: string;

	@Column({ field: 'wavelength_id', allowNull: true, type: DataType.STRING(10) })
	declare wavelengthId?: string;

	@Column({ field: 'pdbx_monochromatic_or_laue_m_l', allowNull: true, type: DataType.STRING(10) })
	declare pdbxMonochromaticOrLaueML?: string;

	@Column({ field: 'pdbx_wavelength_list', allowNull: true, type: DataType.STRING(80) })
	pdbxWavelengthList?: string;

	@Column({ field: 'pdbx_wavelength', allowNull: true, type: DataType.STRING(80) })
	pdbxWavelength?: string;

	@Column({ field: 'pdbx_diffrn_protocol', allowNull: true, type: DataType.STRING(128) })
	declare pdbxDiffrnProtocol?: string;

	@Column({ field: 'pdbx_analyzer', allowNull: true, type: DataType.STRING(200) })
	pdbxAnalyzer?: string;

	@Column({ field: 'pdbx_scattering_type', allowNull: true, type: DataType.STRING(80) })
	declare pdbxScatteringType?: string;
}
