import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "refine_analyze", timestamps: false })
export class refineAnalyze extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "pdbx_refine_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    pdbxRefineId!: string;

    @Column({ field: "Luzzati_coordinate_error_free", allowNull: true, type: DataType.FLOAT(12) })
    luzzatiCoordinateErrorFree?: number;

    @Column({ field: "Luzzati_coordinate_error_obs", allowNull: true, type: DataType.FLOAT(12) })
    luzzatiCoordinateErrorObs?: number;

    @Column({ field: "Luzzati_d_res_low_free", allowNull: true, type: DataType.FLOAT(12) })
    luzzatiDResLowFree?: number;

    @Column({ field: "Luzzati_d_res_low_obs", allowNull: true, type: DataType.FLOAT(12) })
    luzzatiDResLowObs?: number;

    @Column({ field: "Luzzati_sigma_a_free", allowNull: true, type: DataType.FLOAT(12) })
    luzzatiSigmaAFree?: number;

    @Column({ field: "Luzzati_sigma_a_free_details", allowNull: true, type: DataType.STRING(200) })
    luzzatiSigmaAFreeDetails?: string;

    @Column({ field: "Luzzati_sigma_a_obs", allowNull: true, type: DataType.FLOAT(12) })
    luzzatiSigmaAObs?: number;

    @Column({ field: "Luzzati_sigma_a_obs_details", allowNull: true, type: DataType.STRING(200) })
    luzzatiSigmaAObsDetails?: string;

    @Column({ field: "number_disordered_residues", allowNull: true, type: DataType.FLOAT(12) })
    numberDisorderedResidues?: number;

    @Column({ field: "occupancy_sum_hydrogen", allowNull: true, type: DataType.FLOAT(12) })
    occupancySumHydrogen?: number;

    @Column({ field: "occupancy_sum_non_hydrogen", allowNull: true, type: DataType.FLOAT(12) })
    occupancySumNonHydrogen?: number;

    @Column({ field: "RG_d_res_high", allowNull: true, type: DataType.FLOAT(12) })
    rgDResHigh?: number;

    @Column({ field: "RG_d_res_low", allowNull: true, type: DataType.FLOAT(12) })
    rgDResLow?: number;

    @Column({ field: "RG_free", allowNull: true, type: DataType.FLOAT(12) })
    rgFree?: number;

    @Column({ field: "RG_work", allowNull: true, type: DataType.FLOAT(12) })
    rgWork?: number;

    @Column({ field: "RG_free_work_ratio", allowNull: true, type: DataType.FLOAT(12) })
    rgFreeWorkRatio?: number;

    @Column({ field: "pdbx_Luzzati_d_res_high_obs", allowNull: true, type: DataType.FLOAT(12) })
    pdbxLuzzatiDResHighObs?: number;
}
