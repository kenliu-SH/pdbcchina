import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_data_processing_detector", timestamps: false })
export class pdbxDataProcessingDetector extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    name?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    wavelength?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    polarization?: number;

    @Column({ field: "beam_position_x", allowNull: true, type: DataType.FLOAT(12) })
    beamPositionX?: number;

    @Column({ field: "beam_position_y", allowNull: true, type: DataType.FLOAT(12) })
    beamPositionY?: number;

    @Column({ field: "cassette_rot_x", allowNull: true, type: DataType.FLOAT(12) })
    cassetteRotX?: number;

    @Column({ field: "cassette_rot_y", allowNull: true, type: DataType.FLOAT(12) })
    cassetteRotY?: number;

    @Column({ field: "cassette_rot_z", allowNull: true, type: DataType.FLOAT(12) })
    cassetteRotZ?: number;

    @Column({ field: "scale_y", allowNull: true, type: DataType.FLOAT(12) })
    scaleY?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    skew?: number;

    @Column({ field: "crossfire_x", allowNull: true, type: DataType.FLOAT(12) })
    crossfireX?: number;

    @Column({ field: "crossfire_y", allowNull: true, type: DataType.FLOAT(12) })
    crossfireY?: number;

    @Column({ field: "crossfire_xy", allowNull: true, type: DataType.FLOAT(12) })
    crossfireXy?: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    date?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    experimentor?: string;

    @Column({ field: "crystal_data_id", allowNull: true, type: DataType.STRING(200) })
    crystalDataId?: string;

    @Column({ field: "processing_path", allowNull: true, type: DataType.STRING(200) })
    processingPath?: string;

    @Column({ field: "processing_files", allowNull: true, type: DataType.STRING(200) })
    processingFiles?: string;
}
