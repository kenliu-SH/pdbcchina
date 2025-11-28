import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_solvent_atom_site_mapping", timestamps: false })
export class pdbxSolventAtomSiteMapping extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

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

    @Column({ field: "pre_auth_alt_id", allowNull: true, type: DataType.STRING(10) })
    preAuthAltId?: string;

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

    @Column({ field: "Cartn_x", allowNull: true, type: DataType.FLOAT(12) })
    cartnX?: number;

    @Column({ field: "Cartn_y", allowNull: true, type: DataType.FLOAT(12) })
    cartnY?: number;

    @Column({ field: "Cartn_z", allowNull: true, type: DataType.FLOAT(12) })
    cartnZ?: number;

    @Column({ field: "pre_Cartn_x", allowNull: true, type: DataType.FLOAT(12) })
    preCartnX?: number;

    @Column({ field: "pre_Cartn_y", allowNull: true, type: DataType.FLOAT(12) })
    preCartnY?: number;

    @Column({ field: "pre_Cartn_z", allowNull: true, type: DataType.FLOAT(12) })
    preCartnZ?: number;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    symmetry?: string;

    @Column({ field: "symmetry_as_xyz", allowNull: true, type: DataType.STRING(80) })
    symmetryAsXyz?: string;
}
