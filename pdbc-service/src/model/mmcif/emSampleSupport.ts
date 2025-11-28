import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_sample_support", timestamps: false })
export class emSampleSupport extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "film_material", allowNull: true, type: DataType.STRING(80) })
    filmMaterial?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    method?: string;

    @Column({ field: "grid_material", allowNull: true, type: DataType.STRING(80) })
    gridMaterial?: string;

    @Column({ field: "grid_mesh_size", allowNull: true, type: DataType.INTEGER })
    gridMeshSize?: number;

    @Column({ field: "grid_type", allowNull: true, type: DataType.STRING(80) })
    gridType?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    pretreatment?: string;

    @Column({ allowNull: true, type: DataType.STRING(255) })
    details?: string;

    @Column({ field: "specimen_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    specimenId!: string;

    @Column({ field: "citation_id", allowNull: true, type: DataType.STRING(10) })
    citationId?: string;
}
