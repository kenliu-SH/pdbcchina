import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_group_component_range", timestamps: false })
export class pdbxStructGroupComponentRange extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;

    @Column({ field: "struct_group_id", allowNull: true, type: DataType.STRING(10) })
    structGroupId?: string;

    @Column({ field: "PDB_model_num", allowNull: true, type: DataType.INTEGER })
    pdbModelNum?: number;

    @Column({ field: "beg_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    begAuthAsymId?: string;

    @Column({ field: "beg_auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    begAuthCompId?: string;

    @Column({ field: "beg_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    begAuthSeqId?: string;

    @Column({ field: "beg_PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    begPdbInsCode?: string;

    @Column({ field: "beg_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    begLabelAsymId?: string;

    @Column({ field: "beg_label_comp_id", allowNull: true, type: DataType.STRING(10) })
    begLabelCompId?: string;

    @Column({ field: "beg_label_seq_id", allowNull: true, type: DataType.INTEGER })
    begLabelSeqId?: number;

    @Column({ field: "beg_label_alt_id", allowNull: true, type: DataType.STRING(10) })
    begLabelAltId?: string;

    @Column({ field: "end_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    endAuthAsymId?: string;

    @Column({ field: "end_auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    endAuthCompId?: string;

    @Column({ field: "end_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    endAuthSeqId?: string;

    @Column({ field: "end_PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    endPdbInsCode?: string;

    @Column({ field: "end_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    endLabelAsymId?: string;

    @Column({ field: "end_label_comp_id", allowNull: true, type: DataType.STRING(10) })
    endLabelCompId?: string;

    @Column({ field: "end_label_seq_id", allowNull: true, type: DataType.INTEGER })
    endLabelSeqId?: number;

    @Column({ field: "end_label_alt_id", allowNull: true, type: DataType.STRING(10) })
    endLabelAltId?: string;
}
