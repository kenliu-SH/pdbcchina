import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_mask_depositor_info", timestamps: false })
export class emMaskDepositorInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "upload_file_name", allowNull: true, type: DataType.STRING(80) })
    uploadFileName?: string;

    @Column({ field: "upload_format", allowNull: true, type: DataType.STRING(10) })
    uploadFormat?: string;

    @Column({ field: "contour_level", allowNull: true, type: DataType.FLOAT(12) })
    contourLevel?: number;

    @Column({ field: "annotation_details", allowNull: true, type: DataType.STRING(200) })
    annotationDetails?: string;

    @Column({ field: "pixel_spacing_x", allowNull: true, type: DataType.FLOAT(12) })
    pixelSpacingX?: number;

    @Column({ field: "pixel_spacing_y", allowNull: true, type: DataType.FLOAT(12) })
    pixelSpacingY?: number;

    @Column({ field: "pixel_spacing_z", allowNull: true, type: DataType.FLOAT(12) })
    pixelSpacingZ?: number;
}
