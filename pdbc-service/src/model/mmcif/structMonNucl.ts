import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "struct_mon_nucl", timestamps: false })
export class structMonNucl extends Model {
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
    alpha?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    beta?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    chi1?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    chi2?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    delta?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    details?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    epsilon?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    gamma?: number;

    @Column({ field: "mean_B_all", allowNull: true, type: DataType.FLOAT(12) })
    meanBAll?: number;

    @Column({ field: "mean_B_base", allowNull: true, type: DataType.FLOAT(12) })
    meanBBase?: number;

    @Column({ field: "mean_B_phos", allowNull: true, type: DataType.FLOAT(12) })
    meanBPhos?: number;

    @Column({ field: "mean_B_sugar", allowNull: true, type: DataType.FLOAT(12) })
    meanBSugar?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    nu0?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    nu1?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    nu2?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    nu3?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    nu4?: number;

    @Column({ field: "P", allowNull: true, type: DataType.FLOAT(12) })
    p?: number;

    @Column({ field: "RSCC_all", allowNull: true, type: DataType.FLOAT(12) })
    rsccAll?: number;

    @Column({ field: "RSCC_base", allowNull: true, type: DataType.FLOAT(12) })
    rsccBase?: number;

    @Column({ field: "RSCC_phos", allowNull: true, type: DataType.FLOAT(12) })
    rsccPhos?: number;

    @Column({ field: "RSCC_sugar", allowNull: true, type: DataType.FLOAT(12) })
    rsccSugar?: number;

    @Column({ field: "RSR_all", allowNull: true, type: DataType.FLOAT(12) })
    rsrAll?: number;

    @Column({ field: "RSR_base", allowNull: true, type: DataType.FLOAT(12) })
    rsrBase?: number;

    @Column({ field: "RSR_phos", allowNull: true, type: DataType.FLOAT(12) })
    rsrPhos?: number;

    @Column({ field: "RSR_sugar", allowNull: true, type: DataType.FLOAT(12) })
    rsrSugar?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    tau0?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    tau1?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    tau2?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    tau3?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    tau4?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    taum?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    zeta?: number;
}
