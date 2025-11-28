import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "database_PDB_matrix", timestamps: false })
export class databasePdbMatrix extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    origx_1_1?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    origx_1_2?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    origx_1_3?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    origx_2_1?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    origx_2_2?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    origx_2_3?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    origx_3_1?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    origx_3_2?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    origx_3_3?: number;

    @Column({ field: "origx_vector_1", allowNull: true, type: DataType.FLOAT(12) })
    origxVector_1?: number;

    @Column({ field: "origx_vector_2", allowNull: true, type: DataType.FLOAT(12) })
    origxVector_2?: number;

    @Column({ field: "origx_vector_3", allowNull: true, type: DataType.FLOAT(12) })
    origxVector_3?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    scale_1_1?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    scale_1_2?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    scale_1_3?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    scale_2_1?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    scale_2_2?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    scale_2_3?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    scale_3_1?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    scale_3_2?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    scale_3_3?: number;

    @Column({ field: "scale_vector_1", allowNull: true, type: DataType.FLOAT(12) })
    scaleVector_1?: number;

    @Column({ field: "scale_vector_2", allowNull: true, type: DataType.FLOAT(12) })
    scaleVector_2?: number;

    @Column({ field: "scale_vector_3", allowNull: true, type: DataType.FLOAT(12) })
    scaleVector_3?: number;
}
