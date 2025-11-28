import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "diffrn_orient_matrix", timestamps: false })
export class diffrnOrientMatrix extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "diffrn_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    diffrnId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    type?: string;

    @Column({ field: "UB_1_1", allowNull: true, type: DataType.FLOAT(12) })
    ub_1_1?: number;

    @Column({ field: "UB_1_2", allowNull: true, type: DataType.FLOAT(12) })
    ub_1_2?: number;

    @Column({ field: "UB_1_3", allowNull: true, type: DataType.FLOAT(12) })
    ub_1_3?: number;

    @Column({ field: "UB_2_1", allowNull: true, type: DataType.FLOAT(12) })
    ub_2_1?: number;

    @Column({ field: "UB_2_2", allowNull: true, type: DataType.FLOAT(12) })
    ub_2_2?: number;

    @Column({ field: "UB_2_3", allowNull: true, type: DataType.FLOAT(12) })
    ub_2_3?: number;

    @Column({ field: "UB_3_1", allowNull: true, type: DataType.FLOAT(12) })
    ub_3_1?: number;

    @Column({ field: "UB_3_2", allowNull: true, type: DataType.FLOAT(12) })
    ub_3_2?: number;

    @Column({ field: "UB_3_3", allowNull: true, type: DataType.FLOAT(12) })
    ub_3_3?: number;
}
