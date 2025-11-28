import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_dcc_density", timestamps: false })
export class pdbxDccDensity extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "DCC_version", allowNull: true, type: DataType.STRING(80) })
    dccVersion?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    pdbtype?: string;

    @Column({ field: "unit_cell", allowNull: true, type: DataType.STRING(80) })
    unitCell?: string;

    @Column({ field: "space_group_name_H_M", allowNull: true, type: DataType.STRING(80) })
    spaceGroupNameHM?: string;

    @Column({ field: "space_group_pointless", allowNull: true, type: DataType.STRING(80) })
    spaceGroupPointless?: string;

    @Column({ field: "ls_d_res_high", allowNull: true, type: DataType.FLOAT(12) })
    lsDResHigh?: number;

    @Column({ field: "ls_d_res_high_sf", allowNull: true, type: DataType.FLOAT(12) })
    lsDResHighSf?: number;

    @Column({ field: "ls_d_res_low_sf", allowNull: true, type: DataType.FLOAT(12) })
    lsDResLowSf?: number;

    @Column({ field: "R_value_R_work", allowNull: true, type: DataType.FLOAT(12) })
    rValueRWork?: number;

    @Column({ field: "R_value_R_free", allowNull: true, type: DataType.FLOAT(12) })
    rValueRFree?: number;

    @Column({ field: "working_set_count", allowNull: true, type: DataType.INTEGER })
    workingSetCount?: number;

    @Column({ field: "free_set_count", allowNull: true, type: DataType.INTEGER })
    freeSetCount?: number;

    @Column({ field: "occupancy_min", allowNull: true, type: DataType.FLOAT(12) })
    occupancyMin?: number;

    @Column({ field: "occupancy_max", allowNull: true, type: DataType.FLOAT(12) })
    occupancyMax?: number;

    @Column({ field: "occupancy_mean", allowNull: true, type: DataType.FLOAT(12) })
    occupancyMean?: number;

    @Column({ field: "Biso_min", allowNull: true, type: DataType.FLOAT(12) })
    bisoMin?: number;

    @Column({ field: "Biso_max", allowNull: true, type: DataType.FLOAT(12) })
    bisoMax?: number;

    @Column({ field: "Biso_mean", allowNull: true, type: DataType.FLOAT(12) })
    bisoMean?: number;

    @Column({ field: "B_wilson", allowNull: true, type: DataType.FLOAT(12) })
    bWilson?: number;

    @Column({ field: "B_wilson_scale", allowNull: true, type: DataType.FLOAT(12) })
    bWilsonScale?: number;

    @Column({ field: "mean_I2_over_mean_I_square", allowNull: true, type: DataType.FLOAT(12) })
    meanI2OverMeanISquare?: number;

    @Column({ field: "mean_F_square_over_mean_F2", allowNull: true, type: DataType.FLOAT(12) })
    meanFSquareOverMeanF2?: number;

    @Column({ field: "mean_E2_1_abs", allowNull: true, type: DataType.FLOAT(12) })
    meanE2_1Abs?: number;

    @Column({ field: "Padilla_Yeates_L_mean", allowNull: true, type: DataType.FLOAT(12) })
    padillaYeatesLMean?: number;

    @Column({ field: "Padilla_Yeates_L2_mean", allowNull: true, type: DataType.FLOAT(12) })
    padillaYeatesL2Mean?: number;

    @Column({ field: "Padilla_Yeates_L2_mean_pointless", allowNull: true, type: DataType.FLOAT(12) })
    padillaYeatesL2MeanPointless?: number;

    @Column({ field: "Z_score_L_test", allowNull: true, type: DataType.FLOAT(12) })
    zScoreLTest?: number;

    @Column({ field: "twin_type", allowNull: true, type: DataType.STRING(80) })
    twinType?: string;

    @Column({ field: "twin_operator_xtriage", allowNull: true, type: DataType.STRING(200) })
    twinOperatorXtriage?: string;

    @Column({ field: "twin_fraction_xtriage", allowNull: true, type: DataType.FLOAT(12) })
    twinFractionXtriage?: number;

    @Column({ field: "twin_Rfactor", allowNull: true, type: DataType.FLOAT(12) })
    twinRfactor?: number;

    @Column({ field: "I_over_sigI_resh", allowNull: true, type: DataType.FLOAT(12) })
    iOverSigIResh?: number;

    @Column({ field: "I_over_sigI_diff", allowNull: true, type: DataType.FLOAT(12) })
    iOverSigIDiff?: number;

    @Column({ field: "I_over_sigI_mean", allowNull: true, type: DataType.FLOAT(12) })
    iOverSigIMean?: number;

    @Column({ field: "ice_ring", allowNull: true, type: DataType.STRING(80) })
    iceRing?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    anisotropy?: number;

    @Column({ field: "Z_score", allowNull: true, type: DataType.FLOAT(12) })
    zScore?: number;

    @Column({ field: "prob_peak_value", allowNull: true, type: DataType.FLOAT(12) })
    probPeakValue?: number;

    @Column({ field: "translational_pseudo_symmetry", allowNull: true, type: DataType.STRING(80) })
    translationalPseudoSymmetry?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    wavelength?: number;

    @Column({ field: "B_solvent", allowNull: true, type: DataType.FLOAT(12) })
    bSolvent?: number;

    @Column({ field: "K_solvent", allowNull: true, type: DataType.FLOAT(12) })
    kSolvent?: number;

    @Column({ field: "TLS_refinement_reported", allowNull: true, type: DataType.STRING(80) })
    tlsRefinementReported?: string;

    @Column({ field: "partial_B_value_correction_attempted", allowNull: true, type: DataType.STRING(80) })
    partialBValueCorrectionAttempted?: string;

    @Column({ field: "partial_B_value_correction_success", allowNull: true, type: DataType.STRING(80) })
    partialBValueCorrectionSuccess?: string;

    @Column({ field: "reflection_status_archived", allowNull: true, type: DataType.STRING(80) })
    reflectionStatusArchived?: string;

    @Column({ field: "reflection_status_used", allowNull: true, type: DataType.STRING(80) })
    reflectionStatusUsed?: string;

    @Column({ field: "iso_B_value_type", allowNull: true, type: DataType.STRING(80) })
    isoBValueType?: string;

    @Column({ field: "reflns_twin", allowNull: true, type: DataType.STRING(80) })
    reflnsTwin?: string;

    @Column({ field: "twin_by_xtriage", allowNull: true, type: DataType.STRING(80) })
    twinByXtriage?: string;

    @Column({ field: "twin_operator", allowNull: true, type: DataType.STRING(80) })
    twinOperator?: string;

    @Column({ field: "twin_fraction", allowNull: true, type: DataType.STRING(80) })
    twinFraction?: string;

    @Column({ field: "tls_group_number", allowNull: true, type: DataType.INTEGER })
    tlsGroupNumber?: number;

    @Column({ field: "ncs_group_number", allowNull: true, type: DataType.INTEGER })
    ncsGroupNumber?: number;

    @Column({ field: "mtrix_number", allowNull: true, type: DataType.INTEGER })
    mtrixNumber?: number;

    @Column({ field: "Matthew_coeff", allowNull: true, type: DataType.FLOAT(12) })
    matthewCoeff?: number;

    @Column({ field: "solvent_content", allowNull: true, type: DataType.FLOAT(12) })
    solventContent?: number;

    @Column({ field: "Cruickshank_dpi_xyz", allowNull: true, type: DataType.FLOAT(12) })
    cruickshankDpiXyz?: number;

    @Column({ field: "dpi_free_R", allowNull: true, type: DataType.FLOAT(12) })
    dpiFreeR?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    fom?: number;

    @Column({ field: "correlation_overall", allowNull: true, type: DataType.FLOAT(12) })
    correlationOverall?: number;

    @Column({ field: "real_space_R_overall", allowNull: true, type: DataType.FLOAT(12) })
    realSpaceROverall?: number;

    @Column({ field: "mFo_DFc_3sigma_positive", allowNull: true, type: DataType.INTEGER })
    mFoDFc_3sigmaPositive?: number;

    @Column({ field: "mFo_DFc_6sigma_positive", allowNull: true, type: DataType.INTEGER })
    mFoDFc_6sigmaPositive?: number;

    @Column({ field: "mFo_DFc_3sigma_negative", allowNull: true, type: DataType.INTEGER })
    mFoDFc_3sigmaNegative?: number;

    @Column({ field: "mFo_DFc_6sigma_negative", allowNull: true, type: DataType.INTEGER })
    mFoDFc_6sigmaNegative?: number;

    @Column({ field: "Bmean_Bwilson", allowNull: true, type: DataType.FLOAT(12) })
    bmeanBwilson?: number;

    @Column({ field: "Rfree_Rwork", allowNull: true, type: DataType.FLOAT(12) })
    rfreeRwork?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    error?: string;
}
