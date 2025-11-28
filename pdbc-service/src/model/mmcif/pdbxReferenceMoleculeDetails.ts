import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_reference_molecule_details", timestamps: false })
export class pdbxReferenceMoleculeDetails extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "family_prd_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    familyPrdId!: string;

    @Column({ field: "prd_id", allowNull: true, type: DataType.STRING(10) })
    prdId?: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    source?: string;

    @Column({ field: "source_id", allowNull: true, type: DataType.STRING(200) })
    sourceId?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    text?: string;
}
