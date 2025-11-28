import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_sheet_hbond", timestamps: false })
export class pdbxStructSheetHbond extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "range_id_1", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    rangeId_1!: string;

    @Column({ field: "range_id_2", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    rangeId_2!: string;

    @Column({ field: "sheet_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    sheetId!: string;

    @Column({ field: "range_1_label_atom_id", allowNull: true, type: DataType.STRING(6) })
    range_1LabelAtomId?: string;

    @Column({ field: "range_1_label_seq_id", allowNull: true, type: DataType.INTEGER })
    range_1LabelSeqId?: number;

    @Column({ field: "range_1_label_comp_id", allowNull: true, type: DataType.STRING(10) })
    range_1LabelCompId?: string;

    @Column({ field: "range_1_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    range_1LabelAsymId?: string;

    @Column({ field: "range_1_auth_atom_id", allowNull: true, type: DataType.STRING(6) })
    range_1AuthAtomId?: string;

    @Column({ field: "range_1_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    range_1AuthSeqId?: string;

    @Column({ field: "range_1_auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    range_1AuthCompId?: string;

    @Column({ field: "range_1_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    range_1AuthAsymId?: string;

    @Column({ field: "range_1_PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    range_1PdbInsCode?: string;

    @Column({ field: "range_2_label_atom_id", allowNull: true, type: DataType.STRING(6) })
    range_2LabelAtomId?: string;

    @Column({ field: "range_2_label_seq_id", allowNull: true, type: DataType.INTEGER })
    range_2LabelSeqId?: number;

    @Column({ field: "range_2_label_comp_id", allowNull: true, type: DataType.STRING(10) })
    range_2LabelCompId?: string;

    @Column({ field: "range_2_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    range_2LabelAsymId?: string;

    @Column({ field: "range_2_auth_atom_id", allowNull: true, type: DataType.STRING(6) })
    range_2AuthAtomId?: string;

    @Column({ field: "range_2_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    range_2AuthSeqId?: string;

    @Column({ field: "range_2_auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    range_2AuthCompId?: string;

    @Column({ field: "range_2_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    range_2AuthAsymId?: string;

    @Column({ field: "range_2_PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    range_2PdbInsCode?: string;
}
