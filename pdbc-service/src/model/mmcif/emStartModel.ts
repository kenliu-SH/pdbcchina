import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_start_model", timestamps: false })
export class emStartModel extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "emdb_id", allowNull: true, type: DataType.STRING(15) })
    emdbId?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "image_processing_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    imageProcessingId!: string;

    @Column({ field: "insilico_model", allowNull: true, type: DataType.STRING(200) })
    insilicoModel?: string;

    @Column({ field: "orthogonal_tilt_angle1", allowNull: true, type: DataType.FLOAT(12) })
    orthogonalTiltAngle1?: number;

    @Column({ field: "orthogonal_tilt_angle2", allowNull: true, type: DataType.FLOAT(12) })
    orthogonalTiltAngle2?: number;

    @Column({ field: "orthogonal_tilt_num_images", allowNull: true, type: DataType.INTEGER })
    orthogonalTiltNumImages?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    other?: string;

    @Column({ field: "pdb_id", allowNull: true, type: DataType.STRING(20) })
    pdbId?: string;

    @Column({ field: "random_conical_tilt_angle", allowNull: true, type: DataType.FLOAT(12) })
    randomConicalTiltAngle?: number;

    @Column({ field: "random_conical_tilt_num_images", allowNull: true, type: DataType.INTEGER })
    randomConicalTiltNumImages?: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    type?: string;
}
