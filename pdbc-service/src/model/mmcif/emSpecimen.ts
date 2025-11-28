import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_specimen", timestamps: false })
export class emSpecimen extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    concentration?: number;

    @Column({ allowNull: true, type: DataType.STRING(511) })
    details?: string;

    @Column({ field: "embedding_applied", allowNull: true, type: DataType.STRING(80) })
    embeddingApplied?: string;

    @Column({ field: "experiment_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    experimentId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "shadowing_applied", allowNull: true, type: DataType.STRING(80) })
    shadowingApplied?: string;

    @Column({ field: "staining_applied", allowNull: true, type: DataType.STRING(80) })
    stainingApplied?: string;

    @Column({ field: "vitrification_applied", allowNull: true, type: DataType.STRING(80) })
    vitrificationApplied?: string;
}
