import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_phasing_MAD_set", timestamps: false })
export class pdbxPhasingMadSet extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(13) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "d_res_low", allowNull: true, type: DataType.FLOAT(12) })
    dResLow?: number;

    @Column({ field: "d_res_high", allowNull: true, type: DataType.FLOAT(12) })
    dResHigh?: number;

    @Column({ field: "number_of_sites", allowNull: true, type: DataType.INTEGER })
    numberOfSites?: number;

    @Column({ field: "reflns_acentric", allowNull: true, type: DataType.INTEGER })
    reflnsAcentric?: number;

    @Column({ field: "reflns_centric", allowNull: true, type: DataType.INTEGER })
    reflnsCentric?: number;

    @Column({ allowNull: true, type: DataType.INTEGER })
    reflns?: number;

    @Column({ field: "fom_acentric", allowNull: true, type: DataType.FLOAT(12) })
    fomAcentric?: number;

    @Column({ field: "fom_centric", allowNull: true, type: DataType.FLOAT(12) })
    fomCentric?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    fom?: number;

    @Column({ field: "R_cullis_centric", allowNull: true, type: DataType.FLOAT(12) })
    rCullisCentric?: number;

    @Column({ field: "R_cullis_acentric", allowNull: true, type: DataType.FLOAT(12) })
    rCullisAcentric?: number;

    @Column({ field: "R_cullis", allowNull: true, type: DataType.FLOAT(12) })
    rCullis?: number;

    @Column({ field: "R_kraut_centric", allowNull: true, type: DataType.FLOAT(12) })
    rKrautCentric?: number;

    @Column({ field: "R_kraut_acentric", allowNull: true, type: DataType.FLOAT(12) })
    rKrautAcentric?: number;

    @Column({ field: "R_kraut", allowNull: true, type: DataType.FLOAT(12) })
    rKraut?: number;

    @Column({ field: "loc_centric", allowNull: true, type: DataType.FLOAT(12) })
    locCentric?: number;

    @Column({ field: "loc_acentric", allowNull: true, type: DataType.FLOAT(12) })
    locAcentric?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    loc?: number;

    @Column({ field: "power_centric", allowNull: true, type: DataType.FLOAT(12) })
    powerCentric?: number;

    @Column({ field: "power_acentric", allowNull: true, type: DataType.FLOAT(12) })
    powerAcentric?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    power?: number;
}
