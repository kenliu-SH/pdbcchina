import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_dcc_rscc_mapman", timestamps: false })
export class pdbxDccRsccMapman extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ field: "model_id", allowNull: true, type: DataType.STRING(10) })
    modelId?: string;

    @Column({ field: "pdb_id", allowNull: true, type: DataType.STRING(10) })
    pdbId?: string;

    @Column({ field: "auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    authAsymId?: string;

    @Column({ field: "auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    authCompId?: string;

    @Column({ field: "auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    authSeqId?: string;

    @Column({ field: "label_alt_id", allowNull: true, type: DataType.STRING(10) })
    labelAltId?: string;

    @Column({ field: "label_ins_code", allowNull: true, type: DataType.STRING(10) })
    labelInsCode?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    correlation?: number;

    @Column({ field: "real_space_R", allowNull: true, type: DataType.FLOAT(12) })
    realSpaceR?: number;

    @Column({ field: "weighted_real_space_R", allowNull: true, type: DataType.FLOAT(12) })
    weightedRealSpaceR?: number;

    @Column({ field: "real_space_Zscore", allowNull: true, type: DataType.FLOAT(12) })
    realSpaceZscore?: number;

    @Column({ field: "Biso_mean", allowNull: true, type: DataType.FLOAT(12) })
    bisoMean?: number;

    @Column({ field: "occupancy_mean", allowNull: true, type: DataType.FLOAT(12) })
    occupancyMean?: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    flag?: string;
}
