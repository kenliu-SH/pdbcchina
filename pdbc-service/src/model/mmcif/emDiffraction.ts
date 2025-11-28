import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_diffraction", timestamps: false })
export class emDiffraction extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "camera_length", allowNull: true, type: DataType.FLOAT(12) })
    cameraLength?: number;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "imaging_id", allowNull: true, type: DataType.STRING(10) })
    imagingId?: string;

    @Column({ field: "tilt_angle_list", allowNull: true, type: DataType.STRING(80) })
    tiltAngleList?: string;
}
