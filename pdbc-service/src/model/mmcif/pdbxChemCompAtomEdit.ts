import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_chem_comp_atom_edit", timestamps: false })
export class pdbxChemCompAtomEdit extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;

    @Column({ field: "comp_id", allowNull: true, type: DataType.STRING(10) })
    compId?: string;

    @Column({ field: "edit_op", allowNull: true, type: DataType.STRING(10) })
    editOp?: string;

    @Column({ field: "atom_id", allowNull: true, type: DataType.STRING(6) })
    atomId?: string;

    @Column({ field: "edit_atom_id", allowNull: true, type: DataType.STRING(6) })
    editAtomId?: string;

    @Column({ field: "edit_atom_value", allowNull: true, type: DataType.STRING(80) })
    editAtomValue?: string;
}
