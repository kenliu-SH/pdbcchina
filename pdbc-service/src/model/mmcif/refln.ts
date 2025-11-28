import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "refln", timestamps: false })
export class refln extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "wavelength_id", allowNull: true, type: DataType.STRING(10) })
    wavelengthId?: string;

    @Column({ field: "crystal_id", allowNull: true, type: DataType.STRING(10) })
    crystalId?: string;

    @Column({ field: "A_calc", allowNull: true, type: DataType.FLOAT(12) })
    aCalc?: number;

    @Column({ field: "A_calc_au", allowNull: true, type: DataType.FLOAT(12) })
    aCalcAu?: number;

    @Column({ field: "A_meas", allowNull: true, type: DataType.FLOAT(12) })
    aMeas?: number;

    @Column({ field: "A_meas_au", allowNull: true, type: DataType.FLOAT(12) })
    aMeasAu?: number;

    @Column({ field: "B_calc", allowNull: true, type: DataType.FLOAT(12) })
    bCalc?: number;

    @Column({ field: "B_calc_au", allowNull: true, type: DataType.FLOAT(12) })
    bCalcAu?: number;

    @Column({ field: "B_meas", allowNull: true, type: DataType.FLOAT(12) })
    bMeas?: number;

    @Column({ field: "B_meas_au", allowNull: true, type: DataType.FLOAT(12) })
    bMeasAu?: number;

    @Column({ field: "F_calc", allowNull: true, type: DataType.FLOAT(12) })
    fCalc?: number;

    @Column({ field: "F_calc_au", allowNull: true, type: DataType.FLOAT(12) })
    fCalcAu?: number;

    @Column({ field: "F_meas", allowNull: true, type: DataType.FLOAT(12) })
    fMeas?: number;

    @Column({ field: "F_meas_au", allowNull: true, type: DataType.FLOAT(12) })
    fMeasAu?: number;

    @Column({ field: "F_meas_sigma", allowNull: true, type: DataType.FLOAT(12) })
    fMeasSigma?: number;

    @Column({ field: "F_meas_sigma_au", allowNull: true, type: DataType.FLOAT(12) })
    fMeasSigmaAu?: number;

    @Column({ field: "F_squared_calc", allowNull: true, type: DataType.FLOAT(12) })
    fSquaredCalc?: number;

    @Column({ field: "F_squared_meas", allowNull: true, type: DataType.FLOAT(12) })
    fSquaredMeas?: number;

    @Column({ field: "F_squared_sigma", allowNull: true, type: DataType.FLOAT(12) })
    fSquaredSigma?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    fom?: number;

    @Column({ field: "index_h", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    indexH!: number;

    @Column({ field: "index_k", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    indexK!: number;

    @Column({ field: "index_l", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    indexL!: number;

    @Column({ field: "intensity_calc", allowNull: true, type: DataType.FLOAT(12) })
    intensityCalc?: number;

    @Column({ field: "intensity_meas", allowNull: true, type: DataType.FLOAT(12) })
    intensityMeas?: number;

    @Column({ field: "intensity_sigma", allowNull: true, type: DataType.FLOAT(12) })
    intensitySigma?: number;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    status?: string;

    @Column({ field: "phase_calc", allowNull: true, type: DataType.FLOAT(12) })
    phaseCalc?: number;

    @Column({ field: "phase_meas", allowNull: true, type: DataType.FLOAT(12) })
    phaseMeas?: number;

    @Column({ field: "refinement_status", allowNull: true, type: DataType.STRING(10) })
    refinementStatus?: string;

    @Column({ field: "scale_group_code", allowNull: true, type: DataType.STRING(80) })
    scaleGroupCode?: string;

    @Column({ field: "sint_over_lambda", allowNull: true, type: DataType.FLOAT(12) })
    sintOverLambda?: number;

    @Column({ field: "symmetry_epsilon", allowNull: true, type: DataType.INTEGER })
    symmetryEpsilon?: number;

    @Column({ field: "symmetry_multiplicity", allowNull: true, type: DataType.INTEGER })
    symmetryMultiplicity?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    wavelength?: number;

    @Column({ field: "class_code", allowNull: true, type: DataType.STRING(10) })
    classCode?: string;

    @Column({ field: "d_spacing", allowNull: true, type: DataType.FLOAT(12) })
    dSpacing?: number;

    @Column({ field: "include_status", allowNull: true, type: DataType.STRING(10) })
    includeStatus?: string;

    @Column({ field: "mean_path_length_tbar", allowNull: true, type: DataType.FLOAT(12) })
    meanPathLengthTbar?: number;

    @Column({ field: "pdbx_F_calc_part_solvent", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFCalcPartSolvent?: number;

    @Column({ field: "pdbx_phase_calc_part_solvent", allowNull: true, type: DataType.FLOAT(12) })
    pdbxPhaseCalcPartSolvent?: number;

    @Column({ field: "pdbx_F_calc_with_solvent", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFCalcWithSolvent?: number;

    @Column({ field: "pdbx_phase_calc_with_solvent", allowNull: true, type: DataType.FLOAT(12) })
    pdbxPhaseCalcWithSolvent?: number;

    @Column({ field: "pdbx_anom_difference", allowNull: true, type: DataType.FLOAT(12) })
    pdbxAnomDifference?: number;

    @Column({ field: "pdbx_anom_difference_sigma", allowNull: true, type: DataType.FLOAT(12) })
    pdbxAnomDifferenceSigma?: number;

    @Column({ field: "pdbx_I_plus", allowNull: true, type: DataType.FLOAT(12) })
    pdbxIPlus?: number;

    @Column({ field: "pdbx_I_minus", allowNull: true, type: DataType.FLOAT(12) })
    pdbxIMinus?: number;

    @Column({ field: "pdbx_F_plus", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFPlus?: number;

    @Column({ field: "pdbx_F_minus", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFMinus?: number;

    @Column({ field: "pdbx_I_plus_sigma", allowNull: true, type: DataType.FLOAT(12) })
    pdbxIPlusSigma?: number;

    @Column({ field: "pdbx_I_minus_sigma", allowNull: true, type: DataType.FLOAT(12) })
    pdbxIMinusSigma?: number;

    @Column({ field: "pdbx_F_minus_sigma", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFMinusSigma?: number;

    @Column({ field: "pdbx_F_plus_sigma", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFPlusSigma?: number;

    @Column({ field: "pdbx_HL_A_iso", allowNull: true, type: DataType.FLOAT(12) })
    pdbxHlAIso?: number;

    @Column({ field: "pdbx_HL_B_iso", allowNull: true, type: DataType.FLOAT(12) })
    pdbxHlBIso?: number;

    @Column({ field: "pdbx_HL_C_iso", allowNull: true, type: DataType.FLOAT(12) })
    pdbxHlCIso?: number;

    @Column({ field: "pdbx_HL_D_iso", allowNull: true, type: DataType.FLOAT(12) })
    pdbxHlDIso?: number;

    @Column({ field: "pdbx_fiber_layer", allowNull: true, type: DataType.INTEGER })
    pdbxFiberLayer?: number;

    @Column({ field: "pdbx_fiber_coordinate", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFiberCoordinate?: number;

    @Column({ field: "pdbx_fiber_F_meas_au", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFiberFMeasAu?: number;

    @Column({ field: "pdbx_FWT", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFwt?: number;

    @Column({ field: "pdbx_PHWT", allowNull: true, type: DataType.FLOAT(12) })
    pdbxPhwt?: number;

    @Column({ field: "pdbx_DELFWT", allowNull: true, type: DataType.FLOAT(12) })
    pdbxDelfwt?: number;

    @Column({ field: "pdbx_DELPHWT", allowNull: true, type: DataType.FLOAT(12) })
    pdbxDelphwt?: number;

    @Column({ field: "pdbx_diffrn_id", allowNull: true, type: DataType.STRING(10) })
    pdbxDiffrnId?: string;

    @Column({ field: "pdbx_r_free_flag", allowNull: true, type: DataType.INTEGER })
    pdbxRFreeFlag?: number;

    @Column({ field: "pdbx_anomalous_diff", allowNull: true, type: DataType.FLOAT(12) })
    pdbxAnomalousDiff?: number;

    @Column({ field: "pdbx_anomalous_diff_sigma", allowNull: true, type: DataType.FLOAT(12) })
    pdbxAnomalousDiffSigma?: number;

    @Column({ field: "pdbx_phase_cycle", allowNull: true, type: DataType.FLOAT(12) })
    pdbxPhaseCycle?: number;

    @Column({ field: "pdbx_cos_phase_calc", allowNull: true, type: DataType.FLOAT(12) })
    pdbxCosPhaseCalc?: number;

    @Column({ field: "pdbx_sin_phase_calc", allowNull: true, type: DataType.FLOAT(12) })
    pdbxSinPhaseCalc?: number;
}
