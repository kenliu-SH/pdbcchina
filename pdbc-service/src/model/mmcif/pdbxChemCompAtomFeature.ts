import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_chem_comp_atom_feature", timestamps: false })
export class pdbxChemCompAtomFeature extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "comp_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    compId!: string;

    @Column({ field: "atom_id", primaryKey: true, type: DataType.STRING(6) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomId!: string;

    @Column({ field: "feature_type", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    featureType!: string;
}
