import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_related_exp_data_set", timestamps: false })
export class pdbxRelatedExpDataSet extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;

    @Column({ field: "data_reference", allowNull: true, type: DataType.STRING(128) })
    dataReference?: string;

    @Column({ field: "metadata_reference", allowNull: true, type: DataType.STRING(80) })
    metadataReference?: string;

    @Column({ field: "data_set_type", allowNull: true, type: DataType.STRING(80) })
    dataSetType?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;
}
