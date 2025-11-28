import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_phasing_MR", timestamps: false })
export class pdbxPhasingMr extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "method_rotation", allowNull: true, type: DataType.STRING(80) })
    methodRotation?: string;

    @Column({ field: "d_res_high_rotation", allowNull: true, type: DataType.FLOAT(12) })
    dResHighRotation?: number;

    @Column({ field: "d_res_low_rotation", allowNull: true, type: DataType.FLOAT(12) })
    dResLowRotation?: number;

    @Column({ field: "sigma_F_rotation", allowNull: true, type: DataType.FLOAT(12) })
    sigmaFRotation?: number;

    @Column({ field: "sigma_I_rotation", allowNull: true, type: DataType.FLOAT(12) })
    sigmaIRotation?: number;

    @Column({ field: "reflns_percent_rotation", allowNull: true, type: DataType.FLOAT(12) })
    reflnsPercentRotation?: number;

    @Column({ field: "method_translation", allowNull: true, type: DataType.STRING(80) })
    methodTranslation?: string;

    @Column({ field: "d_res_high_translation", allowNull: true, type: DataType.FLOAT(12) })
    dResHighTranslation?: number;

    @Column({ field: "d_res_low_translation", allowNull: true, type: DataType.FLOAT(12) })
    dResLowTranslation?: number;

    @Column({ field: "sigma_F_translation", allowNull: true, type: DataType.FLOAT(12) })
    sigmaFTranslation?: number;

    @Column({ field: "sigma_I_translation", allowNull: true, type: DataType.FLOAT(12) })
    sigmaITranslation?: number;

    @Column({ field: "reflns_percent_translation", allowNull: true, type: DataType.FLOAT(12) })
    reflnsPercentTranslation?: number;

    @Column({ field: "correlation_coeff_Io_to_Ic", allowNull: true, type: DataType.FLOAT(12) })
    correlationCoeffIoToIc?: number;

    @Column({ field: "correlation_coeff_Fo_to_Fc", allowNull: true, type: DataType.FLOAT(12) })
    correlationCoeffFoToFc?: number;

    @Column({ field: "R_factor", allowNull: true, type: DataType.FLOAT(12) })
    rFactor?: number;

    @Column({ field: "R_rigid_body", allowNull: true, type: DataType.FLOAT(12) })
    rRigidBody?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    packing?: number;

    @Column({ field: "model_details", allowNull: true, type: DataType.STRING(200) })
    modelDetails?: string;

    @Column({ field: "native_set_id", allowNull: true, type: DataType.STRING(80) })
    nativeSetId?: string;

    @Column({ field: "d_res_high_fit", allowNull: true, type: DataType.FLOAT(12) })
    dResHighFit?: number;

    @Column({ field: "d_res_low_fit", allowNull: true, type: DataType.FLOAT(12) })
    dResLowFit?: number;

    @Column({ field: "zscore_rotation", allowNull: true, type: DataType.FLOAT(12) })
    zscoreRotation?: number;

    @Column({ field: "LL_gain_rotation", allowNull: true, type: DataType.FLOAT(12) })
    llGainRotation?: number;

    @Column({ field: "zscore_translation", allowNull: true, type: DataType.FLOAT(12) })
    zscoreTranslation?: number;

    @Column({ field: "LL_gain_translation", allowNull: true, type: DataType.FLOAT(12) })
    llGainTranslation?: number;
}
