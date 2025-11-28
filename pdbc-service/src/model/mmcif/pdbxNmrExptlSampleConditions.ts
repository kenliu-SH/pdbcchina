import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'pdbx_nmr_exptl_sample_conditions', timestamps: false })
export class pdbxNmrExptlSampleConditions extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'conditions_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	conditionsId!: string;

	@Column({ allowNull: true, type: DataType.STRING(30) })
	declare temperature?: string;

	@Column({ field: 'pressure_units', allowNull: true, type: DataType.STRING(10) })
	declare pressureUnits?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare pressure?: string;

	@Column({ allowNull: true, type: DataType.STRING(30) })
	declare pH?: string;

	@Column({ field: 'ionic_strength', allowNull: true, type: DataType.STRING(255) })
	declare ionicStrength?: string;

	@Column({ allowNull: true, type: DataType.STRING(511) })
	details?: string;

	@Column({ field: 'ionic_strength_err', allowNull: true, type: DataType.FLOAT(12) })
	ionicStrengthErr?: number;

	@Column({ field: 'ionic_strength_units', allowNull: true, type: DataType.STRING(80) })
	ionicStrengthUnits?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	label?: string;

	@Column({ field: 'pH_err', allowNull: true, type: DataType.FLOAT(12) })
	pHErr?: number;

	@Column({ field: 'pH_units', allowNull: true, type: DataType.STRING(80) })
	pHUnits?: string;

	@Column({ field: 'pressure_err', allowNull: true, type: DataType.FLOAT(12) })
	pressureErr?: number;

	@Column({ field: 'temperature_err', allowNull: true, type: DataType.FLOAT(12) })
	temperatureErr?: number;

	@Column({ field: 'temperature_units', allowNull: true, type: DataType.STRING(80) })
	temperatureUnits?: string;
}
