import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_depui_upload", timestamps: false })
export class pdbxDepuiUpload extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;

    @Column({ field: "file_content_type", allowNull: true, type: DataType.STRING(80) })
    fileContentType?: string;

    @Column({ field: "file_type", allowNull: true, type: DataType.STRING(80) })
    fileType?: string;

    @Column({ field: "file_name", allowNull: true, type: DataType.STRING(80) })
    fileName?: string;

    @Column({ field: "file_size", allowNull: true, type: DataType.INTEGER })
    fileSize?: number;

    @Column({ field: "valid_flag", allowNull: true, type: DataType.STRING(10) })
    validFlag?: string;

    @Column({ field: "diagnostic_message", allowNull: true, type: DataType.STRING(200) })
    diagnosticMessage?: string;

    @Column({ field: "sequence_align", allowNull: true, type: DataType.STRING(200) })
    sequenceAlign?: string;
}
