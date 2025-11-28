import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "diffrn_refln", timestamps: false })
export class diffrnRefln extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "diffrn_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    diffrnId!: string;

    @Column({ field: "wavelength_id", allowNull: true, type: DataType.STRING(10) })
    wavelengthId?: string;

    @Column({ field: "angle_chi", allowNull: true, type: DataType.FLOAT(12) })
    angleChi?: number;

    @Column({ field: "angle_kappa", allowNull: true, type: DataType.FLOAT(12) })
    angleKappa?: number;

    @Column({ field: "angle_omega", allowNull: true, type: DataType.FLOAT(12) })
    angleOmega?: number;

    @Column({ field: "angle_phi", allowNull: true, type: DataType.FLOAT(12) })
    anglePhi?: number;

    @Column({ field: "angle_psi", allowNull: true, type: DataType.FLOAT(12) })
    anglePsi?: number;

    @Column({ field: "angle_theta", allowNull: true, type: DataType.FLOAT(12) })
    angleTheta?: number;

    @Column({ field: "attenuator_code", allowNull: true, type: DataType.STRING(10) })
    attenuatorCode?: string;

    @Column({ field: "counts_bg_1", allowNull: true, type: DataType.INTEGER })
    countsBg_1?: number;

    @Column({ field: "counts_bg_2", allowNull: true, type: DataType.INTEGER })
    countsBg_2?: number;

    @Column({ field: "counts_net", allowNull: true, type: DataType.INTEGER })
    countsNet?: number;

    @Column({ field: "counts_peak", allowNull: true, type: DataType.INTEGER })
    countsPeak?: number;

    @Column({ field: "counts_total", allowNull: true, type: DataType.INTEGER })
    countsTotal?: number;

    @Column({ field: "detect_slit_horiz", allowNull: true, type: DataType.FLOAT(12) })
    detectSlitHoriz?: number;

    @Column({ field: "detect_slit_vert", allowNull: true, type: DataType.FLOAT(12) })
    detectSlitVert?: number;

    @Column({ field: "elapsed_time", allowNull: true, type: DataType.FLOAT(12) })
    elapsedTime?: number;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "index_h", allowNull: true, type: DataType.INTEGER })
    indexH?: number;

    @Column({ field: "index_k", allowNull: true, type: DataType.INTEGER })
    indexK?: number;

    @Column({ field: "index_l", allowNull: true, type: DataType.INTEGER })
    indexL?: number;

    @Column({ field: "intensity_net", allowNull: true, type: DataType.FLOAT(12) })
    intensityNet?: number;

    @Column({ field: "intensity_sigma", allowNull: true, type: DataType.FLOAT(12) })
    intensitySigma?: number;

    @Column({ field: "scale_group_code", allowNull: true, type: DataType.STRING(10) })
    scaleGroupCode?: string;

    @Column({ field: "scan_mode", allowNull: true, type: DataType.STRING(10) })
    scanMode?: string;

    @Column({ field: "scan_mode_backgd", allowNull: true, type: DataType.STRING(10) })
    scanModeBackgd?: string;

    @Column({ field: "scan_rate", allowNull: true, type: DataType.FLOAT(12) })
    scanRate?: number;

    @Column({ field: "scan_time_backgd", allowNull: true, type: DataType.FLOAT(12) })
    scanTimeBackgd?: number;

    @Column({ field: "scan_width", allowNull: true, type: DataType.FLOAT(12) })
    scanWidth?: number;

    @Column({ field: "sint_over_lambda", allowNull: true, type: DataType.FLOAT(12) })
    sintOverLambda?: number;

    @Column({ field: "standard_code", allowNull: true, type: DataType.STRING(10) })
    standardCode?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    wavelength?: number;

    @Column({ field: "class_code", allowNull: true, type: DataType.STRING(10) })
    classCode?: string;

    @Column({ field: "intensity_u", allowNull: true, type: DataType.FLOAT(12) })
    intensityU?: number;
}
