import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "exptl_crystal_face", timestamps: false })
export class exptlCrystalFace extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "crystal_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    crystalId!: string;

    @Column({ field: "diffr_chi", allowNull: true, type: DataType.FLOAT(12) })
    diffrChi?: number;

    @Column({ field: "diffr_kappa", allowNull: true, type: DataType.FLOAT(12) })
    diffrKappa?: number;

    @Column({ field: "diffr_phi", allowNull: true, type: DataType.FLOAT(12) })
    diffrPhi?: number;

    @Column({ field: "diffr_psi", allowNull: true, type: DataType.FLOAT(12) })
    diffrPsi?: number;

    @Column({ field: "index_h", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    indexH!: number;

    @Column({ field: "index_k", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    indexK!: number;

    @Column({ field: "index_l", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    indexL!: number;

    @Column({ field: "perp_dist", allowNull: true, type: DataType.FLOAT(12) })
    perpDist?: number;
}
