import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_deposition_message_file_reference", timestamps: false })
export class pdbxDepositionMessageFileReference extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;

    @Column({ field: "deposition_data_set_id", allowNull: true, type: DataType.STRING(10) })
    depositionDataSetId?: string;

    @Column({ field: "message_id", allowNull: true, type: DataType.STRING(10) })
    messageId?: string;

    @Column({ field: "content_type", allowNull: true, type: DataType.STRING(10) })
    contentType?: string;

    @Column({ field: "content_format", allowNull: true, type: DataType.STRING(80) })
    contentFormat?: string;

    @Column({ field: "partition_number", allowNull: true, type: DataType.STRING(10) })
    partitionNumber?: string;

    @Column({ field: "version_id", allowNull: true, type: DataType.STRING(10) })
    versionId?: string;

    @Column({ field: "storage_type", allowNull: true, type: DataType.STRING(10) })
    storageType?: string;
}
