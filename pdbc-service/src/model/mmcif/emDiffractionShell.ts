import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_diffraction_shell", timestamps: false })
export class emDiffractionShell extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "em_diffraction_stats_id", allowNull: true, type: DataType.STRING(10) })
    emDiffractionStatsId?: string;

    @Column({ field: "fourier_space_coverage", allowNull: true, type: DataType.FLOAT(12) })
    fourierSpaceCoverage?: number;

    @Column({ field: "high_resolution", allowNull: true, type: DataType.FLOAT(12) })
    highResolution?: number;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "low_resolution", allowNull: true, type: DataType.FLOAT(12) })
    lowResolution?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    multiplicity?: number;

    @Column({ field: "num_structure_factors", allowNull: true, type: DataType.INTEGER })
    numStructureFactors?: number;

    @Column({ field: "phase_residual", allowNull: true, type: DataType.FLOAT(12) })
    phaseResidual?: number;
}
