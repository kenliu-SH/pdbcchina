import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_reference_molecule_family", timestamps: false })
export class pdbxReferenceMoleculeFamily extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "family_prd_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    familyPrdId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    name?: string;

    @Column({ field: "release_status", allowNull: true, type: DataType.STRING(80) })
    releaseStatus?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    replaces?: string;

    @Column({ field: "replaced_by", allowNull: true, type: DataType.STRING(80) })
    replacedBy?: string;
}
