import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "refine_ls_shell", timestamps: false })
export class refineLsShell extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "pdbx_refine_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    pdbxRefineId!: string;

    @Column({ field: "d_res_high", primaryKey: true, type: DataType.FLOAT(12) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    dResHigh!: number;

    @Column({ field: "d_res_low", allowNull: true, type: DataType.FLOAT(12) })
    dResLow?: number;

    @Column({ field: "number_reflns_all", allowNull: true, type: DataType.INTEGER })
    numberReflnsAll?: number;

    @Column({ field: "number_reflns_obs", allowNull: true, type: DataType.INTEGER })
    numberReflnsObs?: number;

    @Column({ field: "number_reflns_R_free", allowNull: true, type: DataType.INTEGER })
    numberReflnsRFree?: number;

    @Column({ field: "number_reflns_R_work", allowNull: true, type: DataType.INTEGER })
    numberReflnsRWork?: number;

    @Column({ field: "percent_reflns_obs", allowNull: true, type: DataType.FLOAT(12) })
    percentReflnsObs?: number;

    @Column({ field: "percent_reflns_R_free", allowNull: true, type: DataType.FLOAT(12) })
    percentReflnsRFree?: number;

    @Column({ field: "R_factor_all", allowNull: true, type: DataType.FLOAT(12) })
    rFactorAll?: number;

    @Column({ field: "R_factor_obs", allowNull: true, type: DataType.FLOAT(12) })
    rFactorObs?: number;

    @Column({ field: "R_factor_R_free", allowNull: true, type: DataType.FLOAT(12) })
    rFactorRFree?: number;

    @Column({ field: "R_factor_R_free_error", allowNull: true, type: DataType.FLOAT(12) })
    rFactorRFreeError?: number;

    @Column({ field: "R_factor_R_work", allowNull: true, type: DataType.FLOAT(12) })
    rFactorRWork?: number;

    @Column({ field: "redundancy_reflns_all", allowNull: true, type: DataType.FLOAT(12) })
    redundancyReflnsAll?: number;

    @Column({ field: "redundancy_reflns_obs", allowNull: true, type: DataType.FLOAT(12) })
    redundancyReflnsObs?: number;

    @Column({ field: "wR_factor_all", allowNull: true, type: DataType.FLOAT(12) })
    wRFactorAll?: number;

    @Column({ field: "wR_factor_obs", allowNull: true, type: DataType.FLOAT(12) })
    wRFactorObs?: number;

    @Column({ field: "wR_factor_R_free", allowNull: true, type: DataType.FLOAT(12) })
    wRFactorRFree?: number;

    @Column({ field: "wR_factor_R_work", allowNull: true, type: DataType.FLOAT(12) })
    wRFactorRWork?: number;

    @Column({ field: "pdbx_total_number_of_bins_used", allowNull: true, type: DataType.INTEGER })
    pdbxTotalNumberOfBinsUsed?: number;

    @Column({ field: "pdbx_phase_error", allowNull: true, type: DataType.FLOAT(12) })
    pdbxPhaseError?: number;

    @Column({ field: "pdbx_fsc_work", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFscWork?: number;

    @Column({ field: "pdbx_fsc_free", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFscFree?: number;
}
