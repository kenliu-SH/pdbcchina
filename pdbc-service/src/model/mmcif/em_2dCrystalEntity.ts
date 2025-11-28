import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_2d_crystal_entity", timestamps: false })
export class em_2dCrystalEntity extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "angle_gamma", allowNull: true, type: DataType.FLOAT(12) })
    angleGamma?: number;

    @Column({ field: "c_sampling_length", allowNull: true, type: DataType.FLOAT(12) })
    cSamplingLength?: number;

    @Column({ field: "image_processing_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    imageProcessingId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "entity_assembly_id", allowNull: true, type: DataType.STRING(10) })
    entityAssemblyId?: string;

    @Column({ field: "length_a", allowNull: true, type: DataType.FLOAT(12) })
    lengthA?: number;

    @Column({ field: "length_b", allowNull: true, type: DataType.FLOAT(12) })
    lengthB?: number;

    @Column({ field: "length_c", allowNull: true, type: DataType.FLOAT(12) })
    lengthC?: number;

    @Column({ field: "space_group_name_H_M", allowNull: true, type: DataType.STRING(80) })
    spaceGroupNameHM?: string;
}
