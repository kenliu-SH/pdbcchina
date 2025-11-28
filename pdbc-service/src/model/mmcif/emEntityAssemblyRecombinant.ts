import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_entity_assembly_recombinant", timestamps: false })
export class emEntityAssemblyRecombinant extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare structureId: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    cell1?: string;

    @Column({ field: "entity_assembly_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entityAssemblyId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "ncbi_tax_id", allowNull: true, type: DataType.INTEGER })
    ncbiTaxId?: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    declare organism?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    plasmdeclareId?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    strain?: string;
}
