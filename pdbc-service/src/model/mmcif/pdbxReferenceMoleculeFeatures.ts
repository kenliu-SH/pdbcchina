import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_reference_molecule_features", timestamps: false })
export class pdbxReferenceMoleculeFeatures extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "family_prd_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    familyPrdId!: string;

    @Column({ field: "prd_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    prdId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;

    @Column({ field: "source_ordinal", allowNull: true, type: DataType.INTEGER })
    sourceOrdinal?: number;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    type?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    value?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    source?: string;

    @Column({ field: "chem_comp_id", allowNull: true, type: DataType.STRING(10) })
    chemCompId?: string;
}
