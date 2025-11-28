import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_reference_molecule_related_structures", timestamps: false })
export class pdbxReferenceMoleculeRelatedStructures extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "family_prd_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    familyPrdId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;

    @Column({ field: "db_name", allowNull: true, type: DataType.STRING(200) })
    dbName?: string;

    @Column({ field: "db_code", allowNull: true, type: DataType.STRING(200) })
    dbCode?: string;

    @Column({ field: "db_accession", allowNull: true, type: DataType.STRING(200) })
    dbAccession?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    name?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    formula?: string;

    @Column({ field: "citation_id", allowNull: true, type: DataType.STRING(10) })
    citationId?: string;
}
