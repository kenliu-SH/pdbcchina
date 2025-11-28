import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_chem_comp_upload_depositor_info", timestamps: false })
export class pdbxChemCompUploadDepositorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;

    @Column({ field: "comp_id", allowNull: true, type: DataType.STRING(10) })
    compId?: string;

    @Column({ field: "upload_file_type", allowNull: true, type: DataType.STRING(80) })
    uploadFileType?: string;

    @Column({ field: "upload_file_name", allowNull: true, type: DataType.STRING(80) })
    uploadFileName?: string;
}
