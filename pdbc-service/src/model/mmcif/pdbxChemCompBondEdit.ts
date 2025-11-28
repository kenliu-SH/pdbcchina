import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_chem_comp_bond_edit", timestamps: false })
export class pdbxChemCompBondEdit extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.INTEGER })
    ordinal?: number;

    @Column({ field: "comp_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    compId!: string;

    @Column({ field: "edit_op", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    editOp!: string;

    @Column({ field: "atom_id_1", primaryKey: true, type: DataType.STRING(6) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomId_1!: string;

    @Column({ field: "atom_id_2", primaryKey: true, type: DataType.STRING(6) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomId_2!: string;

    @Column({ field: "edit_bond_value", allowNull: true, type: DataType.STRING(80) })
    editBondValue?: string;
}
