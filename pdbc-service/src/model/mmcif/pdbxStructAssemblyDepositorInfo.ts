import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_assembly_depositor_info", timestamps: false })
export class pdbxStructAssemblyDepositorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "method_details", allowNull: true, type: DataType.STRING(200) })
    methodDetails?: string;

    @Column({ field: "oligomeric_details", allowNull: true, type: DataType.STRING(80) })
    oligomericDetails?: string;

    @Column({ field: "oligomeric_count", allowNull: true, type: DataType.STRING(80) })
    oligomericCount?: string;

    @Column({ field: "matrix_flag", allowNull: true, type: DataType.STRING(10) })
    matrixFlag?: string;

    @Column({ field: "upload_file_name", allowNull: true, type: DataType.STRING(200) })
    uploadFileName?: string;
}
