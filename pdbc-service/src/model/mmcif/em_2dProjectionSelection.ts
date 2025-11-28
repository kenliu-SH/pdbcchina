import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_2d_projection_selection", timestamps: false })
export class em_2dProjectionSelection extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    declare  id?: string;

    @Column({ field: "num_particles", allowNull: true, type: DataType.INTEGER })
    numParticles?: number;

    @Column({ field: "software_name", allowNull: true, type: DataType.STRING(80) })
    softwareName?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    method?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "citation_id", allowNull: true, type: DataType.STRING(10) })
    citationId?: string;
}
