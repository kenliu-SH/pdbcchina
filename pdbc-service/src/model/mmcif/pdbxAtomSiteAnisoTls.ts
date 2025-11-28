import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_atom_site_aniso_tls", timestamps: false })
export class pdbxAtomSiteAnisoTls extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "type_symbol", allowNull: true, type: DataType.STRING(10) })
    typeSymbol?: string;

    @Column({ field: "tls_group_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    tlsGroupId!: string;

    @Column({ field: "auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    authCompId?: string;

    @Column({ field: "auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    authSeqId?: string;

    @Column({ field: "auth_atom_id", allowNull: true, type: DataType.STRING(6) })
    authAtomId?: string;

    @Column({ field: "auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    authAsymId?: string;

    @Column({ field: "PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    pdbInsCode?: string;

    @Column({ field: "label_alt_id", allowNull: true, type: DataType.STRING(10) })
    labelAltId?: string;

    @Column({ field: "label_asym_id", allowNull: true, type: DataType.STRING(10) })
    labelAsymId?: string;

    @Column({ field: "label_atom_id", allowNull: true, type: DataType.STRING(6) })
    labelAtomId?: string;

    @Column({ field: "label_comp_id", allowNull: true, type: DataType.STRING(10) })
    labelCompId?: string;

    @Column({ field: "label_seq_id", allowNull: true, type: DataType.INTEGER })
    labelSeqId?: number;

    @Column({ field: "U_tls_1_1", allowNull: true, type: DataType.FLOAT(12) })
    uTls_1_1?: number;

    @Column({ field: "U_tls_2_2", allowNull: true, type: DataType.FLOAT(12) })
    uTls_2_2?: number;

    @Column({ field: "U_tls_3_3", allowNull: true, type: DataType.FLOAT(12) })
    uTls_3_3?: number;

    @Column({ field: "U_tls_1_2", allowNull: true, type: DataType.FLOAT(12) })
    uTls_1_2?: number;

    @Column({ field: "U_tls_1_3", allowNull: true, type: DataType.FLOAT(12) })
    uTls_1_3?: number;

    @Column({ field: "U_tls_2_3", allowNull: true, type: DataType.FLOAT(12) })
    uTls_2_3?: number;
}
