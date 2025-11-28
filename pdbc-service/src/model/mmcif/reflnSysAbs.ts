import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "refln_sys_abs", timestamps: false })
export class reflnSysAbs extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "I", allowNull: true, type: DataType.FLOAT(12) })
    i?: number;

    @Column({ field: "I_over_sigmaI", allowNull: true, type: DataType.FLOAT(12) })
    iOverSigmaI?: number;

    @Column({ field: "index_h", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    indexH!: number;

    @Column({ field: "index_k", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    indexK!: number;

    @Column({ field: "index_l", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    indexL!: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    sigmaI?: number;
}
