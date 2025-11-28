import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_dcc_rscc_mapman_overall", timestamps: false })
export class pdbxDccRsccMapmanOverall extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    correlation?: number;

    @Column({ field: "correlation_sigma", allowNull: true, type: DataType.FLOAT(12) })
    correlationSigma?: number;

    @Column({ field: "real_space_R", allowNull: true, type: DataType.FLOAT(12) })
    realSpaceR?: number;

    @Column({ field: "real_space_R_sigma", allowNull: true, type: DataType.FLOAT(12) })
    realSpaceRSigma?: number;
}
