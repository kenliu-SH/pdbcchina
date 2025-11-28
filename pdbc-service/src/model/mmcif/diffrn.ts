import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { diffrnDetector } from './diffrnDetector';
import { entity } from './entity';

@Table({ tableName: 'diffrn', timestamps: false })
export class diffrn extends Model {
	@ForeignKey(() => diffrnDetector)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'ambient_environment', allowNull: true, type: DataType.STRING(80) })
	ambientEnvironment?: string;

	@Column({ field: 'ambient_temp', allowNull: true, type: DataType.FLOAT(12) })
	declare ambientTemp?: number;

	@Column({ field: 'ambient_temp_details', allowNull: true, type: DataType.STRING(511) })
	ambientTempDetails?: string;

	@Column({ field: 'ambient_temp_esd', allowNull: true, type: DataType.FLOAT(12) })
	ambientTempEsd?: number;

	@Column({ field: 'crystal_id', allowNull: true, type: DataType.STRING(10) })
	declare crystalId?: string;

	@Column({ field: 'crystal_support', allowNull: true, type: DataType.STRING(200) })
	crystalSupport?: string;

	@Column({ field: 'crystal_treatment', allowNull: true, type: DataType.STRING(200) })
	crystalTreatment?: string;

	@Column({ allowNull: true, type: DataType.STRING(511) })
	details?: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id?: string;

	@Column({ field: 'ambient_pressure', allowNull: true, type: DataType.FLOAT(12) })
	ambientPressure?: number;

	@Column({ field: 'ambient_pressure_esd', allowNull: true, type: DataType.FLOAT(12) })
	ambientPressureEsd?: number;

	@Column({ field: 'ambient_pressure_gt', allowNull: true, type: DataType.FLOAT(12) })
	ambientPressureGt?: number;

	@Column({ field: 'ambient_pressure_lt', allowNull: true, type: DataType.FLOAT(12) })
	ambientPressureLt?: number;

	@Column({ field: 'ambient_temp_gt', allowNull: true, type: DataType.FLOAT(12) })
	ambientTempGt?: number;

	@Column({ field: 'ambient_temp_lt', allowNull: true, type: DataType.FLOAT(12) })
	ambientTempLt?: number;

	// @ForeignKey(()=> diffrnDetector)
}
