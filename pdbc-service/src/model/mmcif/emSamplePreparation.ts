import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

@Table({ tableName: "em_sample_preparation", timestamps: false })
export class emSamplePreparation extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;
    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;
    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;
    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    ph?: number;
    @Column({ field: "buffer_id", allowNull: true, type: DataType.STRING(10) })
    bufferId?: string;
    @Column({ field: "sample_concentration", allowNull: true, type: DataType.FLOAT(12) })
    sampleConcentration?: number;
    @Column({ field: "2d_crystal_grow_id", allowNull: true, type: DataType.STRING(10) })
    _2dCrystalGrowId?: string;
    @Column({ field: "support_id", allowNull: true, type: DataType.STRING(10) })
    supportId?: string;
    @Column({ field: "entity_assembly_id", allowNull: true, type: DataType.STRING(10) })
    entityAssemblyId?: string;
    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;
}