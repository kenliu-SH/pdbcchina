import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "struct_conf", timestamps: false })
export class structConf extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "beg_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    begAuthAsymId?: string;

    @Column({ field: "end_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    endAuthAsymId?: string;

    @Column({ field: "beg_auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    begAuthCompId?: string;

    @Column({ field: "end_auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    endAuthCompId?: string;

    @Column({ field: "beg_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    begAuthSeqId?: string;

    @Column({ field: "end_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    endAuthSeqId?: string;

    @Column({ field: "beg_label_comp_id", allowNull: true, type: DataType.STRING(10) })
    begLabelCompId?: string;

    @Column({ field: "end_label_comp_id", allowNull: true, type: DataType.STRING(10) })
    endLabelCompId?: string;

    @Column({ field: "beg_label_seq_id", allowNull: true, type: DataType.INTEGER })
    begLabelSeqId?: number;

    @Column({ field: "end_label_seq_id", allowNull: true, type: DataType.INTEGER })
    endLabelSeqId?: number;

    @Column({ field: "beg_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    begLabelAsymId?: string;

    @Column({ field: "end_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    endLabelAsymId?: string;

    @Column({ field: "conf_type_id", allowNull: true, type: DataType.STRING(10) })
    confTypeId?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ primaryKey: true, type: DataType.STRING(12) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "pdbx_beg_PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    pdbxBegPdbInsCode?: string;

    @Column({ field: "pdbx_end_PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    pdbxEndPdbInsCode?: string;

    @Column({ field: "pdbx_PDB_helix_class", allowNull: true, type: DataType.STRING(80) })
    pdbxPdbHelixClass?: string;

    @Column({ field: "pdbx_PDB_helix_length", allowNull: true, type: DataType.INTEGER })
    pdbxPdbHelixLength?: number;

    @Column({ field: "pdbx_PDB_helix_id", allowNull: true, type: DataType.STRING(10) })
    pdbxPdbHelixId?: string;
}
