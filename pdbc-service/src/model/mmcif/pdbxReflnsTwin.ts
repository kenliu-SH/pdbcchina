import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_reflns_twin", timestamps: false })
export class pdbxReflnsTwin extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "diffrn_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    diffrnId!: string;

    @Column({ field: "crystal_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    crystalId!: string;

    @Column({ field: "domain_id", allowNull: true, type: DataType.STRING(10) })
    domainId?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    type?: string;

    @Column({ primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    operator!: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    fraction?: number;

    @Column({ field: "mean_I2_over_mean_I_square", allowNull: true, type: DataType.FLOAT(12) })
    meanI2OverMeanISquare?: number;

    @Column({ field: "mean_F_square_over_mean_F2", allowNull: true, type: DataType.FLOAT(12) })
    meanFSquareOverMeanF2?: number;
}
