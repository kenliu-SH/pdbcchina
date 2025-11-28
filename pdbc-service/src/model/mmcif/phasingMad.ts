import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "phasing_MAD", timestamps: false })
export class phasingMad extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    method?: string;

    @Column({ field: "pdbx_d_res_low", allowNull: true, type: DataType.FLOAT(12) })
    pdbxDResLow?: number;

    @Column({ field: "pdbx_d_res_high", allowNull: true, type: DataType.FLOAT(12) })
    pdbxDResHigh?: number;

    @Column({ field: "pdbx_reflns_acentric", allowNull: true, type: DataType.INTEGER })
    pdbxReflnsAcentric?: number;

    @Column({ field: "pdbx_reflns_centric", allowNull: true, type: DataType.INTEGER })
    pdbxReflnsCentric?: number;

    @Column({ field: "pdbx_reflns", allowNull: true, type: DataType.INTEGER })
    pdbxReflns?: number;

    @Column({ field: "pdbx_fom_acentric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFomAcentric?: number;

    @Column({ field: "pdbx_fom_centric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFomCentric?: number;

    @Column({ field: "pdbx_fom", allowNull: true, type: DataType.FLOAT(12) })
    pdbxFom?: number;

    @Column({ field: "pdbx_R_cullis_centric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRCullisCentric?: number;

    @Column({ field: "pdbx_R_cullis_acentric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRCullisAcentric?: number;

    @Column({ field: "pdbx_R_cullis", allowNull: true, type: DataType.FLOAT(12) })
    pdbxRCullis?: number;

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

    @Column({ field: "pdbx_power_centric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxPowerCentric?: number;

    @Column({ field: "pdbx_power_acentric", allowNull: true, type: DataType.FLOAT(12) })
    pdbxPowerAcentric?: number;

    @Column({ field: "pdbx_power", allowNull: true, type: DataType.FLOAT(12) })
    pdbxPower?: number;

    @Column({ field: "pdbx_number_data_sets", allowNull: true, type: DataType.INTEGER })
    pdbxNumberDataSets?: number;

    @Column({ field: "pdbx_anom_scat_method", allowNull: true, type: DataType.STRING(200) })
    pdbxAnomScatMethod?: string;
}
