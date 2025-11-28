import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_nmr_upload", timestamps: false })
export class pdbxNmrUpload extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "data_file_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    dataFileId!: number;

    @Column({ field: "data_file_name", allowNull: true, type: DataType.STRING(80) })
    dataFileName?: string;

    @Column({ field: "data_file_category", allowNull: true, type: DataType.STRING(80) })
    dataFileCategory?: string;

    @Column({ field: "data_file_syntax", allowNull: true, type: DataType.STRING(80) })
    dataFileSyntax?: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;
}
