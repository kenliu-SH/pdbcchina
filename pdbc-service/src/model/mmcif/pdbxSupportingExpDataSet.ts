import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_supporting_exp_data_set", timestamps: false })
export class pdbxSupportingExpDataSet extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;

    @Column({ field: "data_content_type", allowNull: true, type: DataType.STRING(80) })
    dataContentType?: string;

    @Column({ field: "data_version_major", allowNull: true, type: DataType.INTEGER })
    dataVersionMajor?: number;

    @Column({ field: "data_version_minor", allowNull: true, type: DataType.INTEGER })
    dataVersionMinor?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;
}
