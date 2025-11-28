import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "struct_sheet_hbond", timestamps: false })
export class structSheetHbond extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "range_1_beg_auth_atom_id", allowNull: true, type: DataType.STRING(6) })
    range_1BegAuthAtomId?: string;

    @Column({ field: "range_1_end_auth_atom_id", allowNull: true, type: DataType.STRING(6) })
    range_1EndAuthAtomId?: string;

    @Column({ field: "range_2_beg_auth_atom_id", allowNull: true, type: DataType.STRING(6) })
    range_2BegAuthAtomId?: string;

    @Column({ field: "range_2_end_auth_atom_id", allowNull: true, type: DataType.STRING(6) })
    range_2EndAuthAtomId?: string;

    @Column({ field: "range_1_beg_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    range_1BegAuthSeqId?: string;

    @Column({ field: "range_1_end_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    range_1EndAuthSeqId?: string;

    @Column({ field: "range_2_beg_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    range_2BegAuthSeqId?: string;

    @Column({ field: "range_2_end_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    range_2EndAuthSeqId?: string;

    @Column({ field: "range_1_beg_label_atom_id", allowNull: true, type: DataType.STRING(6) })
    range_1BegLabelAtomId?: string;

    @Column({ field: "range_1_end_label_atom_id", allowNull: true, type: DataType.STRING(6) })
    range_1EndLabelAtomId?: string;

    @Column({ field: "range_2_beg_label_atom_id", allowNull: true, type: DataType.STRING(6) })
    range_2BegLabelAtomId?: string;

    @Column({ field: "range_2_end_label_atom_id", allowNull: true, type: DataType.STRING(6) })
    range_2EndLabelAtomId?: string;

    @Column({ field: "range_1_beg_label_seq_id", allowNull: true, type: DataType.INTEGER })
    range_1BegLabelSeqId?: number;

    @Column({ field: "range_1_end_label_seq_id", allowNull: true, type: DataType.INTEGER })
    range_1EndLabelSeqId?: number;

    @Column({ field: "range_2_beg_label_seq_id", allowNull: true, type: DataType.INTEGER })
    range_2BegLabelSeqId?: number;

    @Column({ field: "range_2_end_label_seq_id", allowNull: true, type: DataType.INTEGER })
    range_2EndLabelSeqId?: number;

    @Column({ field: "sheet_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    sheetId!: string;

    @Column({ field: "range_id_1", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    rangeId_1!: string;

    @Column({ field: "range_id_2", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    rangeId_2!: string;

    @Column({ field: "pdbx_range_1_beg_auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    pdbxRange_1BegAuthCompId?: string;

    @Column({ field: "pdbx_range_1_beg_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    pdbxRange_1BegAuthAsymId?: string;

    @Column({ field: "pdbx_range_1_end_auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    pdbxRange_1EndAuthCompId?: string;

    @Column({ field: "pdbx_range_1_end_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    pdbxRange_1EndAuthAsymId?: string;

    @Column({ field: "pdbx_range_1_beg_label_comp_id", allowNull: true, type: DataType.STRING(10) })
    pdbxRange_1BegLabelCompId?: string;

    @Column({ field: "pdbx_range_1_beg_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    pdbxRange_1BegLabelAsymId?: string;

    @Column({ field: "pdbx_range_1_beg_PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    pdbxRange_1BegPdbInsCode?: string;

    @Column({ field: "pdbx_range_1_end_label_comp_id", allowNull: true, type: DataType.STRING(10) })
    pdbxRange_1EndLabelCompId?: string;

    @Column({ field: "pdbx_range_1_end_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    pdbxRange_1EndLabelAsymId?: string;

    @Column({ field: "pdbx_range_1_end_PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    pdbxRange_1EndPdbInsCode?: string;

    @Column({ field: "pdbx_range_2_beg_label_comp_id", allowNull: true, type: DataType.STRING(10) })
    pdbxRange_2BegLabelCompId?: string;

    @Column({ field: "pdbx_range_2_beg_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    pdbxRange_2BegLabelAsymId?: string;

    @Column({ field: "pdbx_range_2_beg_PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    pdbxRange_2BegPdbInsCode?: string;

    @Column({ field: "pdbx_range_2_end_label_comp_id", allowNull: true, type: DataType.STRING(10) })
    pdbxRange_2EndLabelCompId?: string;

    @Column({ field: "pdbx_range_2_end_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    pdbxRange_2EndLabelAsymId?: string;

    @Column({ field: "pdbx_range_2_end_label_ins_code", allowNull: true, type: DataType.STRING(10) })
    pdbxRange_2EndLabelInsCode?: string;
}
