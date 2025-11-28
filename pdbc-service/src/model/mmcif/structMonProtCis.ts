import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "struct_mon_prot_cis", timestamps: false })
export class structMonProtCis extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    authAsymId?: string;

    @Column({ field: "auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    authCompId?: string;

    @Column({ field: "auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    authSeqId?: string;

    @Column({ field: "label_alt_id", allowNull: true, type: DataType.STRING(10) })
    labelAltId?: string;

    @Column({ field: "label_comp_id", allowNull: true, type: DataType.STRING(10) })
    labelCompId?: string;

    @Column({ field: "label_seq_id", allowNull: true, type: DataType.INTEGER })
    labelSeqId?: number;

    @Column({ field: "label_asym_id", allowNull: true, type: DataType.STRING(10) })
    labelAsymId?: string;

    @Column({ field: "pdbx_auth_asym_id_2", allowNull: true, type: DataType.STRING(10) })
    pdbxAuthAsymId_2?: string;

    @Column({ field: "pdbx_auth_comp_id_2", allowNull: true, type: DataType.STRING(10) })
    pdbxAuthCompId_2?: string;

    @Column({ field: "pdbx_auth_seq_id_2", allowNull: true, type: DataType.STRING(10) })
    pdbxAuthSeqId_2?: string;

    @Column({ field: "pdbx_label_asym_id_2", allowNull: true, type: DataType.STRING(10) })
    pdbxLabelAsymId_2?: string;

    @Column({ field: "pdbx_label_comp_id_2", allowNull: true, type: DataType.STRING(10) })
    pdbxLabelCompId_2?: string;

    @Column({ field: "pdbx_label_seq_id_2", allowNull: true, type: DataType.INTEGER })
    pdbxLabelSeqId_2?: number;

    @Column({ field: "pdbx_PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    pdbxPdbInsCode?: string;

    @Column({ field: "pdbx_PDB_ins_code_2", allowNull: true, type: DataType.STRING(10) })
    pdbxPdbInsCode_2?: string;

    @Column({ field: "pdbx_PDB_model_num", allowNull: true, type: DataType.INTEGER })
    pdbxPdbModelNum?: number;

    @Column({ field: "pdbx_omega_angle", allowNull: true, type: DataType.STRING(10) })
    pdbxOmegaAngle?: string;

    @Column({ field: "pdbx_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    pdbxId!: string;

    @Column({ field: "pdbx_auth_ins_code", allowNull: true, type: DataType.STRING(10) })
    pdbxAuthInsCode?: string;

    @Column({ field: "pdbx_auth_ins_code_2", allowNull: true, type: DataType.STRING(10) })
    pdbxAuthInsCode_2?: string;
}
