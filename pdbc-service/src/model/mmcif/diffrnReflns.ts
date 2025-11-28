import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "diffrn_reflns", timestamps: false })
export class diffrnReflns extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "diffrn_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    diffrnId!: string;

    @Column({ field: "av_R_equivalents", allowNull: true, type: DataType.FLOAT(12) })
    avREquivalents?: number;

    @Column({ field: "av_sigmaI_over_netI", allowNull: true, type: DataType.FLOAT(12) })
    avSigmaIOverNetI?: number;

    @Column({ field: "limit_h_max", allowNull: true, type: DataType.INTEGER })
    limitHMax?: number;

    @Column({ field: "limit_h_min", allowNull: true, type: DataType.INTEGER })
    limitHMin?: number;

    @Column({ field: "limit_k_max", allowNull: true, type: DataType.INTEGER })
    limitKMax?: number;

    @Column({ field: "limit_k_min", allowNull: true, type: DataType.INTEGER })
    limitKMin?: number;

    @Column({ field: "limit_l_max", allowNull: true, type: DataType.INTEGER })
    limitLMax?: number;

    @Column({ field: "limit_l_min", allowNull: true, type: DataType.INTEGER })
    limitLMin?: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    number?: number;

    @Column({ field: "reduction_process", allowNull: true, type: DataType.STRING(200) })
    reductionProcess?: string;

    @Column({ field: "theta_max", allowNull: true, type: DataType.FLOAT(12) })
    thetaMax?: number;

    @Column({ field: "theta_min", allowNull: true, type: DataType.FLOAT(12) })
    thetaMin?: number;

    @Column({ field: "transf_matrix_1_1", allowNull: true, type: DataType.FLOAT(12) })
    transfMatrix_1_1?: number;

    @Column({ field: "transf_matrix_1_2", allowNull: true, type: DataType.FLOAT(12) })
    transfMatrix_1_2?: number;

    @Column({ field: "transf_matrix_1_3", allowNull: true, type: DataType.FLOAT(12) })
    transfMatrix_1_3?: number;

    @Column({ field: "transf_matrix_2_1", allowNull: true, type: DataType.FLOAT(12) })
    transfMatrix_2_1?: number;

    @Column({ field: "transf_matrix_2_2", allowNull: true, type: DataType.FLOAT(12) })
    transfMatrix_2_2?: number;

    @Column({ field: "transf_matrix_2_3", allowNull: true, type: DataType.FLOAT(12) })
    transfMatrix_2_3?: number;

    @Column({ field: "transf_matrix_3_1", allowNull: true, type: DataType.FLOAT(12) })
    transfMatrix_3_1?: number;

    @Column({ field: "transf_matrix_3_2", allowNull: true, type: DataType.FLOAT(12) })
    transfMatrix_3_2?: number;

    @Column({ field: "transf_matrix_3_3", allowNull: true, type: DataType.FLOAT(12) })
    transfMatrix_3_3?: number;

    @Column({ field: "av_unetI_netI", allowNull: true, type: DataType.FLOAT(12) })
    avUnetINetI?: number;

    @Column({ field: "pdbx_d_res_low", allowNull: true, type: DataType.FLOAT(12) })
    pdbxDResLow?: number;

    @Column({ field: "pdbx_d_res_high", allowNull: true, type: DataType.FLOAT(12) })
    pdbxDResHigh?: number;

    @Column({ field: "pdbx_percent_possible_obs", allowNull: true, type: DataType.FLOAT(12) })
    pdbxPercentPossibleObs?: number;

    @Column({ field: "pdbx_Rmerge_I_obs", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRmergeIObs?: number;

    @Column({ field: "pdbx_Rsym_value", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRsymValue?: number;

    @Column({ field: "pdbx_chi_squared", allowNull: true, type: DataType.FLOAT(12) })
    pdbxChiSquared?: number;

    @Column({ field: "pdbx_redundancy", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRedundancy?: number;

    @Column({ field: "pdbx_rejects", allowNull: true, type: DataType.INTEGER })
    pdbxRejects?: number;

    @Column({ field: "pdbx_observed_criterion", allowNull: true, type: DataType.FLOAT(12) })
    pdbxObservedCriterion?: number;

    @Column({ field: "pdbx_number_obs", allowNull: true, type: DataType.INTEGER })
    pdbxNumberObs?: number;
}
