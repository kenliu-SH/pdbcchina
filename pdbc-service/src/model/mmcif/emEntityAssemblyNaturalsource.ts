import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_entity_assembly_naturalsource", timestamps: false })
export class emEntityAssemblyNaturalsource extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare structureId: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    cell1?: string;

    @Column({ field: "cellular_location", allowNull: true, type: DataType.STRING(200) })
    cellularLocation?: string;

    @Column({ field: "entity_assembly_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entityAssemblyId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "ncbi_tax_id", allowNull: true, type: DataType.INTEGER })
    declare ncbiTaxId?: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    declare organism?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    organelle?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    organ?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    strain?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    tissue?: string;
}
