import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "diffrn_orient_refln", timestamps: false })
export class diffrnOrientRefln extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "diffrn_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    diffrnId!: string;

    @Column({ field: "angle_chi", allowNull: true, type: DataType.FLOAT(12) })
    angleChi?: number;

    @Column({ field: "angle_kappa", allowNull: true, type: DataType.FLOAT(12) })
    angleKappa?: number;

    @Column({ field: "angle_omega", allowNull: true, type: DataType.FLOAT(12) })
    angleOmega?: number;

    @Column({ field: "angle_phi", allowNull: true, type: DataType.FLOAT(12) })
    anglePhi?: number;

    @Column({ field: "angle_psi", allowNull: true, type: DataType.FLOAT(12) })
    anglePsi?: number;

    @Column({ field: "angle_theta", allowNull: true, type: DataType.FLOAT(12) })
    angleTheta?: number;

    @Column({ field: "index_h", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    indexH!: number;

    @Column({ field: "index_k", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    indexK!: number;

    @Column({ field: "index_l", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    indexL!: number;
}
