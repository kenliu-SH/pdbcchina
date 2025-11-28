import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "phasing_MIR_der_refln", timestamps: false })
export class phasingMirDerRefln extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "der_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    derId!: string;

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

    @Column({ field: "HL_A_iso", allowNull: true, type: DataType.FLOAT(12) })
    hlAIso?: number;

    @Column({ field: "HL_B_iso", allowNull: true, type: DataType.FLOAT(12) })
    hlBIso?: number;

    @Column({ field: "HL_C_iso", allowNull: true, type: DataType.FLOAT(12) })
    hlCIso?: number;

    @Column({ field: "HL_D_iso", allowNull: true, type: DataType.FLOAT(12) })
    hlDIso?: number;

    @Column({ field: "index_h", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    indexH!: number;

    @Column({ field: "index_k", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    indexK!: number;

    @Column({ field: "index_l", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    indexL!: number;

    @Column({ field: "phase_calc", allowNull: true, type: DataType.FLOAT(12) })
    phaseCalc?: number;

    @Column({ field: "set_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    setId!: string;
}
