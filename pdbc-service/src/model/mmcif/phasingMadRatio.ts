import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "phasing_MAD_ratio", timestamps: false })
export class phasingMadRatio extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "clust_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    clustId!: string;

    @Column({ field: "expt_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    exptId!: string;

    @Column({ field: "d_res_high", allowNull: true, type: DataType.FLOAT(12) })
    dResHigh?: number;

    @Column({ field: "d_res_low", allowNull: true, type: DataType.FLOAT(12) })
    dResLow?: number;

    @Column({ field: "ratio_one_wl", allowNull: true, type: DataType.FLOAT(12) })
    ratioOneWl?: number;

    @Column({ field: "ratio_one_wl_centric", allowNull: true, type: DataType.FLOAT(12) })
    ratioOneWlCentric?: number;

    @Column({ field: "ratio_two_wl", allowNull: true, type: DataType.FLOAT(12) })
    ratioTwoWl?: number;

    @Column({ primaryKey: true, type: DataType.FLOAT(12) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    wavelength_1!: number;

    @Column({ primaryKey: true, type: DataType.FLOAT(12) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    wavelength_2!: number;
}
