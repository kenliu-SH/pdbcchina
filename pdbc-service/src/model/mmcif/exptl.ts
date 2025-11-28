import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'exptl', timestamps: false })
export class exptl extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'entry_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare entryId: string;

	@Column({ field: 'absorpt_coefficient_mu', allowNull: true, type: DataType.FLOAT(12) })
	absorptCoefficientMu?: number;

	@Column({ field: 'absorpt_correction_T_max', allowNull: true, type: DataType.FLOAT(12) })
	absorptCorrectionTMax?: number;

	@Column({ field: 'absorpt_correction_T_min', allowNull: true, type: DataType.FLOAT(12) })
	declare absorptCorrectionTMin?: number;

	@Column({ field: 'absorpt_correction_type', allowNull: true, type: DataType.STRING(10) })
	declare absorptCorrectionType?: string;

	@Column({ field: 'absorpt_process_details', allowNull: true, type: DataType.STRING(200) })
	declare absorptProcessDetails?: string;

	@Column({ field: 'crystals_number', allowNull: true, type: DataType.INTEGER })
	declare crystalsNumber?: number;

	@Column({ allowNull: true, type: DataType.STRING(1023) })
	declare details?: string;

	@Column({ primaryKey: true, type: DataType.STRING(80) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare method: string;

	@Column({ field: 'method_details', allowNull: true, type: DataType.STRING(1023) })
	declare methodDetails?: string;
}
