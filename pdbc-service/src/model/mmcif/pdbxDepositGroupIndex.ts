import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_deposit_group_index", timestamps: false })
export class pdbxDepositGroupIndex extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "group_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    groupId!: string;

    @Column({ field: "ordinal_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinalId!: number;

    @Column({ field: "dep_set_id", allowNull: true, type: DataType.STRING(10) })
    depSetId?: string;

    @Column({ field: "pdb_id_code", allowNull: true, type: DataType.STRING(10) })
    pdbIdCode?: string;

    @Column({ field: "group_file_name", allowNull: true, type: DataType.STRING(10) })
    groupFileName?: string;

    @Column({ field: "group_file_timestamp", allowNull: true, type: DataType.DATE })
    groupFileTimestamp?: Date;

    @Column({ field: "auth_file_label", allowNull: true, type: DataType.STRING(80) })
    authFileLabel?: string;

    @Column({ field: "auth_file_content_type", allowNull: true, type: DataType.STRING(80) })
    authFileContentType?: string;

    @Column({ field: "auth_file_format_type", allowNull: true, type: DataType.STRING(10) })
    authFileFormatType?: string;

    @Column({ field: "auth_file_name", allowNull: true, type: DataType.STRING(80) })
    authFileName?: string;

    @Column({ field: "auth_file_size", allowNull: true, type: DataType.INTEGER })
    authFileSize?: number;
}
