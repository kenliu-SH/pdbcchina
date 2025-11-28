import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "em_virus_natural_host", timestamps: false })
export class emVirusNaturalHost extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entity_assembly_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entityAssemblyId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "ncbi_tax_id", allowNull: true, type: DataType.INTEGER })
    ncbiTaxId?: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    organism?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    strain?: string;
}
