import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_buffer", timestamps: false })
export class emBuffer extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "specimen_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    specimenId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    name?: string;

    @Column({ allowNull: true, type: DataType.STRING(255) })
    details?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    pH?: number;
}
