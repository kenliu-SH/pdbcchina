import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "struct_biol_gen", timestamps: false })
export class structBiolGen extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "asym_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    asymId!: string;

    @Column({ field: "biol_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    biolId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    symmetry!: string;

    @Column({ field: "pdbx_full_symmetry_operation", allowNull: true, type: DataType.STRING(10) })
    pdbxFullSymmetryOperation?: string;

    @Column({ field: "pdbx_PDB_order", allowNull: true, type: DataType.INTEGER })
    pdbxPdbOrder?: number;

    @Column({ field: "pdbx_new_asym_id", allowNull: true, type: DataType.STRING(10) })
    pdbxNewAsymId?: string;

    @Column({ field: "pdbx_new_pdb_asym_id", allowNull: true, type: DataType.STRING(10) })
    pdbxNewPdbAsymId?: string;

    @Column({ field: "pdbx_color_red", allowNull: true, type: DataType.FLOAT(12) })
    pdbxColorRed?: number;

    @Column({ field: "pdbx_color_green", allowNull: true, type: DataType.FLOAT(12) })
    pdbxColorGreen?: number;

    @Column({ field: "pdbx_color_blue", allowNull: true, type: DataType.FLOAT(12) })
    pdbxColorBlue?: number;

    @Column({ field: "pdbx_after_begin_residue_no", allowNull: true, type: DataType.STRING(10) })
    pdbxAfterBeginResidueNo?: string;

    @Column({ field: "pdbx_after_end_residue_no", allowNull: true, type: DataType.STRING(10) })
    pdbxAfterEndResidueNo?: string;

    @Column({ field: "pdbx_before_begin_residue_no", allowNull: true, type: DataType.STRING(10) })
    pdbxBeforeBeginResidueNo?: string;

    @Column({ field: "pdbx_before_end_residue_no", allowNull: true, type: DataType.STRING(10) })
    pdbxBeforeEndResidueNo?: string;
}
