import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_dcc_density_corr", timestamps: false })
export class pdbxDccDensityCorr extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    program?: string;

    @Column({ field: "ls_d_res_high", allowNull: true, type: DataType.FLOAT(12) })
    lsDResHigh?: number;

    @Column({ field: "ls_d_res_low", allowNull: true, type: DataType.FLOAT(12) })
    lsDResLow?: number;

    @Column({ field: "ls_R_factor_R_all", allowNull: true, type: DataType.FLOAT(12) })
    lsRFactorRAll?: number;

    @Column({ field: "ls_R_factor_R_work", allowNull: true, type: DataType.FLOAT(12) })
    lsRFactorRWork?: number;

    @Column({ field: "ls_R_factor_R_free", allowNull: true, type: DataType.FLOAT(12) })
    lsRFactorRFree?: number;

    @Column({ field: "ls_number_reflns_obs", allowNull: true, type: DataType.INTEGER })
    lsNumberReflnsObs?: number;

    @Column({ field: "ls_percent_reflns_obs", allowNull: true, type: DataType.FLOAT(12) })
    lsPercentReflnsObs?: number;

    @Column({ field: "ls_number_reflns_R_free", allowNull: true, type: DataType.INTEGER })
    lsNumberReflnsRFree?: number;

    @Column({ field: "correlation_coeff_Fo_to_Fc", allowNull: true, type: DataType.FLOAT(12) })
    correlationCoeffFoToFc?: number;

    @Column({ field: "real_space_R", allowNull: true, type: DataType.FLOAT(12) })
    realSpaceR?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    correlation?: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    details?: string;
}
