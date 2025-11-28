import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_nmr_computing", timestamps: false })
export class pdbxNmrComputing extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    collection?: string;

    @Column({ field: "collection_version", allowNull: true, type: DataType.STRING(10) })
    collectionVersion?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    processing?: string;

    @Column({ field: "processing_version", allowNull: true, type: DataType.STRING(10) })
    processingVersion?: string;

    @Column({ field: "data_analysis", allowNull: true, type: DataType.STRING(80) })
    dataAnalysis?: string;

    @Column({ field: "data_analysis_version", allowNull: true, type: DataType.STRING(10) })
    dataAnalysisVersion?: string;

    @Column({ field: "structure_solution", allowNull: true, type: DataType.STRING(80) })
    structureSolution?: string;

    @Column({ field: "structure_solution_version", allowNull: true, type: DataType.STRING(10) })
    structureSolutionVersion?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    refinement?: string;

    @Column({ field: "refinement_version", allowNull: true, type: DataType.STRING(10) })
    refinementVersion?: string;

    @Column({ field: "iterative_relaxation_matrix", allowNull: true, type: DataType.STRING(80) })
    iterativeRelaxationMatrix?: string;

    @Column({ field: "iterative_relaxation_matrix_version", allowNull: true, type: DataType.STRING(10) })
    iterativeRelaxationMatrixVersion?: string;
}
