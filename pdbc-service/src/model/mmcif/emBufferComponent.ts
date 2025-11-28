import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_buffer_component", timestamps: false })
export class emBufferComponent extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "buffer_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    bufferId!: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    concentration?: number;

    @Column({ field: "concentration_units", allowNull: true, type: DataType.STRING(80) })
    concentrationUnits?: string;

    @Column({ allowNull: true, type: DataType.STRING(32) })
    formula?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    name?: string;
}
