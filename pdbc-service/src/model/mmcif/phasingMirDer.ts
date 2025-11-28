import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "phasing_MIR_der", timestamps: false })
export class phasingMirDer extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "d_res_high", allowNull: true, type: DataType.FLOAT(12) })
    dResHigh?: number;

    @Column({ field: "d_res_low", allowNull: true, type: DataType.FLOAT(12) })
    dResLow?: number;

    @Column({ field: "der_set_id", allowNull: true, type: DataType.STRING(80) })
    derSetId?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "native_set_id", allowNull: true, type: DataType.STRING(80) })
    nativeSetId?: string;

    @Column({ field: "number_of_sites", allowNull: true, type: DataType.INTEGER })
    numberOfSites?: number;

    @Column({ field: "power_acentric", allowNull: true, type: DataType.FLOAT(12) })
    powerAcentric?: number;

    @Column({ field: "power_centric", allowNull: true, type: DataType.FLOAT(12) })
    powerCentric?: number;

    @Column({ field: "R_cullis_acentric", allowNull: true, type: DataType.FLOAT(12) })
    rCullisAcentric?: number;

    @Column({ field: "R_cullis_anomalous", allowNull: true, type: DataType.FLOAT(12) })
    rCullisAnomalous?: number;

    @Column({ field: "R_cullis_centric", allowNull: true, type: DataType.FLOAT(12) })
    rCullisCentric?: number;

    @Column({ field: "reflns_acentric", allowNull: true, type: DataType.INTEGER })
    reflnsAcentric?: number;

    @Column({ field: "reflns_anomalous", allowNull: true, type: DataType.INTEGER })
    reflnsAnomalous?: number;

    @Column({ field: "reflns_centric", allowNull: true, type: DataType.INTEGER })
    reflnsCentric?: number;

    @Column({ field: "reflns_criteria", allowNull: true, type: DataType.STRING(200) })
    reflnsCriteria?: string;

    @Column({ field: "pdbx_R_kraut_centric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRKrautCentric?: number;

    @Column({ field: "pdbx_R_kraut_acentric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRKrautAcentric?: number;

    @Column({ field: "pdbx_R_kraut", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRKraut?: number;

    @Column({ field: "pdbx_loc_centric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxLocCentric?: number;

    @Column({ field: "pdbx_loc_acentric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxLocAcentric?: number;

    @Column({ field: "pdbx_loc", allowNull: true, type: DataType.FLOAT(12) })
    pdbxLoc?: number;

    @Column({ field: "pdbx_fom_centric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFomCentric?: number;

    @Column({ field: "pdbx_fom_acentric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFomAcentric?: number;

    @Column({ field: "pdbx_fom", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFom?: number;

    @Column({ field: "pdbx_power", allowNull: true, type: DataType.FLOAT(12) })
    pdbxPower?: number;

    @Column({ field: "pdbx_R_cullis", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRCullis?: number;

    @Column({ field: "pdbx_reflns", allowNull: true, type: DataType.INTEGER })
    pdbxReflns?: number;
}
