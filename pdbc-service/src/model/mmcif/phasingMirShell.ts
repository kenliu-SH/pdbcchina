import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "phasing_MIR_shell", timestamps: false })
export class phasingMirShell extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "d_res_high", primaryKey: true, type: DataType.FLOAT(12) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    dResHigh!: number;

    @Column({ field: "d_res_low", primaryKey: true, type: DataType.FLOAT(12) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    dResLow!: number;

    @Column({ field: "FOM", allowNull: true, type: DataType.FLOAT(12) })
    fom?: number;

    @Column({ field: "FOM_acentric", allowNull: true, type: DataType.FLOAT(12) })
    fomAcentric?: number;

    @Column({ field: "FOM_centric", allowNull: true, type: DataType.FLOAT(12) })
    fomCentric?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    loc?: number;

    @Column({ field: "mean_phase", allowNull: true, type: DataType.FLOAT(12) })
    meanPhase?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    power?: number;

    @Column({ field: "R_cullis", allowNull: true, type: DataType.FLOAT(12) })
    rCullis?: number;

    @Column({ field: "R_kraut", allowNull: true, type: DataType.FLOAT(12) })
    rKraut?: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    reflns?: number;

    @Column({ field: "reflns_acentric", allowNull: true, type: DataType.INTEGER })
    reflnsAcentric?: number;

    @Column({ field: "reflns_anomalous", allowNull: true, type: DataType.INTEGER })
    reflnsAnomalous?: number;

    @Column({ field: "reflns_centric", allowNull: true, type: DataType.INTEGER })
    reflnsCentric?: number;

    @Column({ field: "pdbx_loc_centric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxLocCentric?: number;

    @Column({ field: "pdbx_loc_acentric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxLocAcentric?: number;

    @Column({ field: "pdbx_power_centric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxPowerCentric?: number;

    @Column({ field: "pdbx_power_acentric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxPowerAcentric?: number;

    @Column({ field: "pdbx_R_kraut_centric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRKrautCentric?: number;

    @Column({ field: "pdbx_R_kraut_acentric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRKrautAcentric?: number;

    @Column({ field: "pdbx_R_cullis_centric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRCullisCentric?: number;

    @Column({ field: "pdbx_R_cullis_acentric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRCullisAcentric?: number;
}
