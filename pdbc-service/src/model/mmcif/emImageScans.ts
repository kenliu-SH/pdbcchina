import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_image_scans", timestamps: false })
export class emImageScans extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", allowNull: true, type: DataType.STRING(10) })
    entryId?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "number_digital_images", allowNull: true, type: DataType.INTEGER })
    numberDigitalImages?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "scanner_model", allowNull: true, type: DataType.STRING(80) })
    scannerModel?: string;

    @Column({ field: "sampling_size", allowNull: true, type: DataType.FLOAT(12) })
    samplingSize?: number;

    @Column({ field: "od_range", allowNull: true, type: DataType.FLOAT(12) })
    odRange?: number;

    @Column({ field: "quant_bit_size", allowNull: true, type: DataType.INTEGER })
    quantBitSize?: number;

    @Column({ field: "citation_id", allowNull: true, type: DataType.STRING(10) })
    citationId?: string;

    @Column({ field: "dimension_height", allowNull: true, type: DataType.INTEGER })
    dimensionHeight?: number;

    @Column({ field: "dimension_width", allowNull: true, type: DataType.INTEGER })
    dimensionWidth?: number;

    @Column({ field: "frames_per_image", allowNull: true, type: DataType.INTEGER })
    framesPerImage?: number;

    @Column({ field: "image_recording_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    imageRecordingId!: string;

    @Column({ field: "used_frames_per_image", allowNull: true, type: DataType.STRING(20) })
    usedFramesPerImage?: string;
}
