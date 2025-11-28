import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_tomography", timestamps: false })
export class emTomography extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "axis1_angle_increment", allowNull: true, type: DataType.FLOAT(12) })
    axis1AngleIncrement?: number;

    @Column({ field: "axis1_max_angle", allowNull: true, type: DataType.FLOAT(12) })
    axis1MaxAngle?: number;

    @Column({ field: "axis1_min_angle", allowNull: true, type: DataType.FLOAT(12) })
    axis1MinAngle?: number;

    @Column({ field: "axis2_angle_increment", allowNull: true, type: DataType.FLOAT(12) })
    axis2AngleIncrement?: number;

    @Column({ field: "axis2_max_angle", allowNull: true, type: DataType.FLOAT(12) })
    axis2MaxAngle?: number;

    @Column({ field: "axis2_min_angle", allowNull: true, type: DataType.FLOAT(12) })
    axis2MinAngle?: number;

    @Column({ field: "dual_tilt_axis_rotation", allowNull: true, type: DataType.FLOAT(12) })
    dualTiltAxisRotation?: number;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "imaging_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    imagingId!: string;
}
