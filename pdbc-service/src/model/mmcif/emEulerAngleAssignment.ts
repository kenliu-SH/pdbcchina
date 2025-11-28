import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_euler_angle_assignment", timestamps: false })
export class emEulerAngleAssignment extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "image_processing_id", allowNull: true, type: DataType.STRING(10) })
    imageProcessingId?: string;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    order1?: string;

    @Column({ field: "proj_matching_angular_sampling", allowNull: true, type: DataType.FLOAT(12) })
    projMatchingAngularSampling?: number;

    @Column({ field: "proj_matching_merit_function", allowNull: true, type: DataType.STRING(80) })
    projMatchingMeritFunction?: string;

    @Column({ field: "proj_matching_num_projections", allowNull: true, type: DataType.INTEGER })
    projMatchingNumProjections?: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    type?: string;
}
