import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_shadowing", timestamps: false })
export class emShadowing extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    angle?: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    material?: string;

    @Column({ field: "specimen_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    specimenId!: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    thickness?: number;
}
