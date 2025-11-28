import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "phasing_MIR_der_shell", timestamps: false })
export class phasingMirDerShell extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "der_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    derId!: string;

    @Column({ field: "d_res_high", primaryKey: true, type: DataType.FLOAT(12) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    dResHigh!: number;

    @Column({ field: "d_res_low", primaryKey: true, type: DataType.FLOAT(12) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    dResLow!: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    fom?: number;

    @Column({ field: "ha_ampl", allowNull: true, type: DataType.FLOAT(12) })
    haAmpl?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    loc?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    phase?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    power?: number;

    @Column({ field: "R_cullis", allowNull: true, type: DataType.FLOAT(12) })
    rCullis?: number;

    @Column({ field: "R_kraut", allowNull: true, type: DataType.FLOAT(12) })
    rKraut?: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    reflns?: number;

    @Column({ field: "pdbx_R_cullis_centric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRCullisCentric?: number;

    @Column({ field: "pdbx_R_cullis_acentric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRCullisAcentric?: number;

    @Column({ field: "pdbx_R_kraut_centric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRKrautCentric?: number;

    @Column({ field: "pdbx_R_kraut_acentric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRKrautAcentric?: number;

    @Column({ field: "pdbx_loc_centric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxLocCentric?: number;

    @Column({ field: "pdbx_loc_acentric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxLocAcentric?: number;

    @Column({ field: "pdbx_power_centric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxPowerCentric?: number;

    @Column({ field: "pdbx_power_acentric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxPowerAcentric?: number;

    @Column({ field: "pdbx_fom_centric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFomCentric?: number;

    @Column({ field: "pdbx_fom_acentric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFomAcentric?: number;

    @Column({ field: "pdbx_reflns_centric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxReflnsCentric?: number;

    @Column({ field: "pdbx_reflns_acentric", allowNull: true, type: DataType.INTEGER })
    pdbxReflnsAcentric?: number;
}
