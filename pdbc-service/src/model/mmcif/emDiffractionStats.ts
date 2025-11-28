import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_diffraction_stats", timestamps: false })
export class emDiffractionStats extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "fourier_space_coverage", allowNull: true, type: DataType.FLOAT(12) })
    fourierSpaceCoverage?: number;

    @Column({ field: "high_resolution", allowNull: true, type: DataType.FLOAT(12) })
    highResolution?: number;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "image_processing_id", allowNull: true, type: DataType.STRING(10) })
    imageProcessingId?: string;

    @Column({ field: "num_intensities_measured", allowNull: true, type: DataType.INTEGER })
    numIntensitiesMeasured?: number;

    @Column({ field: "num_structure_factors", allowNull: true, type: DataType.INTEGER })
    numStructureFactors?: number;

    @Column({ field: "overall_phase_error", allowNull: true, type: DataType.FLOAT(12) })
    overallPhaseError?: number;

    @Column({ field: "overall_phase_residual", allowNull: true, type: DataType.FLOAT(12) })
    overallPhaseResidual?: number;

    @Column({ field: "phase_error_rejection_criteria", allowNull: true, type: DataType.STRING(80) })
    phaseErrorRejectionCriteria?: string;

    @Column({ field: "r_merge", allowNull: true, type: DataType.FLOAT(12) })
    rMerge?: number;

    @Column({ field: "r_sym", allowNull: true, type: DataType.FLOAT(12) })
    rSym?: number;
}
