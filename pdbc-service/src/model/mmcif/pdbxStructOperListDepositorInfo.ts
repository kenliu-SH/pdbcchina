import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_oper_list_depositor_info", timestamps: false })
export class pdbxStructOperListDepositorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    type?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    name?: string;

    @Column({ field: "symmetry_operation", allowNull: true, type: DataType.STRING(80) })
    symmetryOperation?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    matrix_1_1?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    matrix_1_2?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    matrix_1_3?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    matrix_2_1?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    matrix_2_2?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    matrix_2_3?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    matrix_3_1?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    matrix_3_2?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    matrix_3_3?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    vector_1?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    vector_2?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    vector_3?: number;
}
