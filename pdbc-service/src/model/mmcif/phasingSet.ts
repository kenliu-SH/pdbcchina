import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "phasing_set", timestamps: false })
export class phasingSet extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "cell_angle_alpha", allowNull: true, type: DataType.FLOAT(12) })
    cellAngleAlpha?: number;

    @Column({ field: "cell_angle_beta", allowNull: true, type: DataType.FLOAT(12) })
    cellAngleBeta?: number;

    @Column({ field: "cell_angle_gamma", allowNull: true, type: DataType.FLOAT(12) })
    cellAngleGamma?: number;

    @Column({ field: "cell_length_a", allowNull: true, type: DataType.FLOAT(12) })
    cellLengthA?: number;

    @Column({ field: "cell_length_b", allowNull: true, type: DataType.FLOAT(12) })
    cellLengthB?: number;

    @Column({ field: "cell_length_c", allowNull: true, type: DataType.FLOAT(12) })
    cellLengthC?: number;

    @Column({ field: "detector_specific", allowNull: true, type: DataType.STRING(200) })
    detectorSpecific?: string;

    @Column({ field: "detector_type", allowNull: true, type: DataType.STRING(200) })
    detectorType?: string;

    @Column({ primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "radiation_source_specific", allowNull: true, type: DataType.STRING(200) })
    radiationSourceSpecific?: string;

    @Column({ field: "radiation_wavelength", allowNull: true, type: DataType.FLOAT(12) })
    radiationWavelength?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    temp?: number;

    @Column({ field: "pdbx_temp_details", allowNull: true, type: DataType.STRING(200) })
    pdbxTempDetails?: string;

    @Column({ field: "pdbx_d_res_high", allowNull: true, type: DataType.FLOAT(12) })
    pdbxDResHigh?: number;

    @Column({ field: "pdbx_d_res_low", allowNull: true, type: DataType.FLOAT(12) })
    pdbxDResLow?: number;
}
