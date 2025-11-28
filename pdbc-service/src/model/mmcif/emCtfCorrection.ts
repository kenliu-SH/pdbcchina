import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'em_ctf_correction', timestamps: false })
export class emCtfCorrection extends Model {
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'amplitude_correction', allowNull: true, type: DataType.STRING(10) })
	amplitudeCorrection?: string;

	@Column({ field: 'amplitude_correction_factor', allowNull: true, type: DataType.FLOAT(12) })
	amplitudeCorrectionFactor?: number;

	@Column({ field: 'amplitude_correction_space', allowNull: true, type: DataType.STRING(10) })
	amplitudeCorrectionSpace?: string;

	@Column({ field: 'correction_operation', allowNull: true, type: DataType.STRING(10) })
	correctionOperation?: string;

	@Column({ allowNull: true, type: DataType.STRING(1023) })
	declare details?: string;

	@Column({ field: 'em_image_processing_id', allowNull: true, type: DataType.STRING(10) })
	emImageProcessingId?: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ field: 'phase_reversal', allowNull: true, type: DataType.STRING(10) })
	phaseReversal?: string;

	@Column({ field: 'phase_reversal_anisotropic', allowNull: true, type: DataType.STRING(10) })
	phaseReversalAnisotropic?: string;

	@Column({ field: 'phase_reversal_correction_space', allowNull: true, type: DataType.STRING(10) })
	phaseReversalCorrectionSpace?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare type?: string;
}
