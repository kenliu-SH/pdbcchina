import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "struct_mon_prot", timestamps: false })
export class structMonProt extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    authAsymId?: string;

    @Column({ field: "auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    authCompId?: string;

    @Column({ field: "auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    authSeqId?: string;

    @Column({ field: "label_alt_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    labelAltId!: string;

    @Column({ field: "label_comp_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    labelCompId!: string;

    @Column({ field: "label_seq_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    labelSeqId!: number;

    @Column({ field: "label_asym_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    labelAsymId!: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    chi1?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    chi2?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    chi3?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    chi4?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    chi5?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    details?: number;

    @Column({ field: "RSCC_all", allowNull: true, type: DataType.FLOAT(12) })
    rsccAll?: number;

    @Column({ field: "RSCC_main", allowNull: true, type: DataType.FLOAT(12) })
    rsccMain?: number;

    @Column({ field: "RSCC_side", allowNull: true, type: DataType.FLOAT(12) })
    rsccSide?: number;

    @Column({ field: "RSR_all", allowNull: true, type: DataType.FLOAT(12) })
    rsrAll?: number;

    @Column({ field: "RSR_main", allowNull: true, type: DataType.FLOAT(12) })
    rsrMain?: number;

    @Column({ field: "RSR_side", allowNull: true, type: DataType.FLOAT(12) })
    rsrSide?: number;

    @Column({ field: "mean_B_all", allowNull: true, type: DataType.FLOAT(12) })
    meanBAll?: number;

    @Column({ field: "mean_B_main", allowNull: true, type: DataType.FLOAT(12) })
    meanBMain?: number;

    @Column({ field: "mean_B_side", allowNull: true, type: DataType.FLOAT(12) })
    meanBSide?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    omega?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    phi?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    psi?: number;
}
