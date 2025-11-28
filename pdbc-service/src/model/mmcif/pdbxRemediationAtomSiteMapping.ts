import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_remediation_atom_site_mapping", timestamps: false })
export class pdbxRemediationAtomSiteMapping extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "group_PDB", allowNull: true, type: DataType.STRING(10) })
    groupPdb?: string;

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

    @Column({ field: "pdbx_align", allowNull: true, type: DataType.INTEGER })
    pdbxAlign?: number;

    @Column({ field: "PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    pdbInsCode?: string;

    @Column({ field: "pre_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    preAuthAsymId?: string;

    @Column({ field: "pre_auth_atom_id", allowNull: true, type: DataType.STRING(6) })
    preAuthAtomId?: string;

    @Column({ field: "pre_auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    preAuthCompId?: string;

    @Column({ field: "pre_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    preAuthSeqId?: string;

    @Column({ field: "pre_PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    prePdbInsCode?: string;

    @Column({ field: "pre_group_PDB", allowNull: true, type: DataType.STRING(10) })
    preGroupPdb?: string;

    @Column({ field: "pre_auth_alt_id", allowNull: true, type: DataType.STRING(10) })
    preAuthAltId?: string;

    @Column({ field: "pre_pdbx_align", allowNull: true, type: DataType.INTEGER })
    prePdbxAlign?: number;

    @Column({ field: "auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    authAsymId?: string;

    @Column({ field: "auth_atom_id", allowNull: true, type: DataType.STRING(6) })
    authAtomId?: string;

    @Column({ field: "auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    authCompId?: string;

    @Column({ field: "auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    authSeqId?: string;

    @Column({ field: "auth_alt_id", allowNull: true, type: DataType.STRING(10) })
    authAltId?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    occupancy?: number;

    @Column({ field: "pre_occupancy", allowNull: true, type: DataType.FLOAT(12) })
    preOccupancy?: number;
}
