import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_conn_angle", timestamps: false })
export class pdbxStructConnAngle extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "ptnr1_label_alt_id", allowNull: true, type: DataType.STRING(10) })
    ptnr1LabelAltId?: string;

    @Column({ field: "ptnr1_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    ptnr1LabelAsymId?: string;

    @Column({ field: "ptnr1_label_atom_id", allowNull: true, type: DataType.STRING(6) })
    ptnr1LabelAtomId?: string;

    @Column({ field: "ptnr1_label_comp_id", allowNull: true, type: DataType.STRING(10) })
    ptnr1LabelCompId?: string;

    @Column({ field: "ptnr1_label_seq_id", allowNull: true, type: DataType.INTEGER })
    ptnr1LabelSeqId?: number;

    @Column({ field: "ptnr1_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    ptnr1AuthAsymId?: string;

    @Column({ field: "ptnr1_auth_atom_id", allowNull: true, type: DataType.STRING(6) })
    ptnr1AuthAtomId?: string;

    @Column({ field: "ptnr1_auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    ptnr1AuthCompId?: string;

    @Column({ field: "ptnr1_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    ptnr1AuthSeqId?: string;

    @Column({ field: "ptnr1_symmetry", allowNull: true, type: DataType.STRING(10) })
    ptnr1Symmetry?: string;

    @Column({ field: "ptnr2_label_alt_id", allowNull: true, type: DataType.STRING(10) })
    ptnr2LabelAltId?: string;

    @Column({ field: "ptnr2_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    ptnr2LabelAsymId?: string;

    @Column({ field: "ptnr2_label_atom_id", allowNull: true, type: DataType.STRING(6) })
    ptnr2LabelAtomId?: string;

    @Column({ field: "ptnr2_label_comp_id", allowNull: true, type: DataType.STRING(10) })
    ptnr2LabelCompId?: string;

    @Column({ field: "ptnr2_label_seq_id", allowNull: true, type: DataType.INTEGER })
    ptnr2LabelSeqId?: number;

    @Column({ field: "ptnr2_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    ptnr2AuthAsymId?: string;

    @Column({ field: "ptnr2_auth_atom_id", allowNull: true, type: DataType.STRING(6) })
    ptnr2AuthAtomId?: string;

    @Column({ field: "ptnr2_auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    ptnr2AuthCompId?: string;

    @Column({ field: "ptnr2_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    ptnr2AuthSeqId?: string;

    @Column({ field: "ptnr2_symmetry", allowNull: true, type: DataType.STRING(10) })
    ptnr2Symmetry?: string;

    @Column({ field: "ptnr1_PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    ptnr1PdbInsCode?: string;

    @Column({ field: "ptnr1_auth_alt_id", allowNull: true, type: DataType.STRING(10) })
    ptnr1AuthAltId?: string;

    @Column({ field: "ptnr2_PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    ptnr2PdbInsCode?: string;

    @Column({ field: "ptnr2_auth_alt_id", allowNull: true, type: DataType.STRING(10) })
    ptnr2AuthAltId?: string;

    @Column({ field: "ptnr3_auth_alt_id", allowNull: true, type: DataType.STRING(10) })
    ptnr3AuthAltId?: string;

    @Column({ field: "ptnr3_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    ptnr3AuthAsymId?: string;

    @Column({ field: "ptnr3_auth_atom_id", allowNull: true, type: DataType.STRING(6) })
    ptnr3AuthAtomId?: string;

    @Column({ field: "ptnr3_auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    ptnr3AuthCompId?: string;

    @Column({ field: "ptnr3_PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    ptnr3PdbInsCode?: string;

    @Column({ field: "ptnr3_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    ptnr3AuthSeqId?: string;

    @Column({ field: "ptnr3_label_alt_id", allowNull: true, type: DataType.STRING(10) })
    ptnr3LabelAltId?: string;

    @Column({ field: "ptnr3_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    ptnr3LabelAsymId?: string;

    @Column({ field: "ptnr3_label_atom_id", allowNull: true, type: DataType.STRING(6) })
    ptnr3LabelAtomId?: string;

    @Column({ field: "ptnr3_label_comp_id", allowNull: true, type: DataType.STRING(10) })
    ptnr3LabelCompId?: string;

    @Column({ field: "ptnr3_label_seq_id", allowNull: true, type: DataType.INTEGER })
    ptnr3LabelSeqId?: number;

    @Column({ field: "ptnr3_symmetry", allowNull: true, type: DataType.STRING(10) })
    ptnr3Symmetry?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    value?: number;

    @Column({ field: "value_esd", allowNull: true, type: DataType.FLOAT(12) })
    valueEsd?: number;
}
