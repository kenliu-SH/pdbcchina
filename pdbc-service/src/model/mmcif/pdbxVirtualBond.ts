import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_virtual_bond", timestamps: false })
export class pdbxVirtualBond extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "model_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    modelId!: number;

    @Column({ field: "atom_site_id_1", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomSiteId_1!: string;

    @Column({ field: "atom_site_label_alt_id_1", allowNull: true, type: DataType.STRING(10) })
    atomSiteLabelAltId_1?: string;

    @Column({ field: "atom_site_label_atom_id_1", allowNull: true, type: DataType.STRING(6) })
    atomSiteLabelAtomId_1?: string;

    @Column({ field: "atom_site_label_comp_id_1", allowNull: true, type: DataType.STRING(10) })
    atomSiteLabelCompId_1?: string;

    @Column({ field: "atom_site_label_seq_id_1", allowNull: true, type: DataType.INTEGER })
    atomSiteLabelSeqId_1?: number;

    @Column({ field: "atom_site_label_asym_id_1", allowNull: true, type: DataType.STRING(10) })
    atomSiteLabelAsymId_1?: string;

    @Column({ field: "atom_site_id_2", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    atomSiteId_2!: string;

    @Column({ field: "atom_site_label_alt_id_2", allowNull: true, type: DataType.STRING(10) })
    atomSiteLabelAltId_2?: string;

    @Column({ field: "atom_site_label_atom_id_2", allowNull: true, type: DataType.STRING(6) })
    atomSiteLabelAtomId_2?: string;

    @Column({ field: "atom_site_label_comp_id_2", allowNull: true, type: DataType.STRING(10) })
    atomSiteLabelCompId_2?: string;

    @Column({ field: "atom_site_label_seq_id_2", allowNull: true, type: DataType.INTEGER })
    atomSiteLabelSeqId_2?: number;

    @Column({ field: "atom_site_label_asym_id_2", allowNull: true, type: DataType.STRING(10) })
    atomSiteLabelAsymId_2?: string;

    @Column({ field: "atom_site_auth_atom_id_1", allowNull: true, type: DataType.STRING(6) })
    atomSiteAuthAtomId_1?: string;

    @Column({ field: "atom_site_auth_asym_id_1", allowNull: true, type: DataType.STRING(10) })
    atomSiteAuthAsymId_1?: string;

    @Column({ field: "atom_site_auth_comp_id_1", allowNull: true, type: DataType.STRING(10) })
    atomSiteAuthCompId_1?: string;

    @Column({ field: "atom_site_auth_seq_id_1", allowNull: true, type: DataType.STRING(10) })
    atomSiteAuthSeqId_1?: string;

    @Column({ field: "atom_site_auth_atom_id_2", allowNull: true, type: DataType.STRING(6) })
    atomSiteAuthAtomId_2?: string;

    @Column({ field: "atom_site_auth_asym_id_2", allowNull: true, type: DataType.STRING(10) })
    atomSiteAuthAsymId_2?: string;

    @Column({ field: "atom_site_auth_comp_id_2", allowNull: true, type: DataType.STRING(10) })
    atomSiteAuthCompId_2?: string;

    @Column({ field: "atom_site_auth_seq_id_2", allowNull: true, type: DataType.INTEGER })
    atomSiteAuthSeqId_2?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    dist?: number;

    @Column({ field: "dist_esd", allowNull: true, type: DataType.FLOAT(12) })
    distEsd?: number;

    @Column({ field: "site_symmetry_1", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    siteSymmetry_1!: string;

    @Column({ field: "site_symmetry_2", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    siteSymmetry_2!: string;
}
