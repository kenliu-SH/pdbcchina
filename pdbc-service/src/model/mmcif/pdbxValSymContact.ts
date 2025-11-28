import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_val_sym_contact", timestamps: false })
export class pdbxValSymContact extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ field: "model_id", allowNull: true, type: DataType.INTEGER })
    modelId?: number;

    @Column({ field: "auth_asym_id_1", allowNull: true, type: DataType.STRING(10) })
    authAsymId_1?: string;

    @Column({ field: "auth_atom_id_1", allowNull: true, type: DataType.STRING(6) })
    authAtomId_1?: string;

    @Column({ field: "auth_comp_id_1", allowNull: true, type: DataType.STRING(10) })
    authCompId_1?: string;

    @Column({ field: "auth_seq_id_1", allowNull: true, type: DataType.STRING(10) })
    authSeqId_1?: string;

    @Column({ field: "auth_atom_id_2", allowNull: true, type: DataType.STRING(6) })
    authAtomId_2?: string;

    @Column({ field: "auth_asym_id_2", allowNull: true, type: DataType.STRING(10) })
    authAsymId_2?: string;

    @Column({ field: "auth_comp_id_2", allowNull: true, type: DataType.STRING(10) })
    authCompId_2?: string;

    @Column({ field: "auth_seq_id_2", allowNull: true, type: DataType.STRING(10) })
    authSeqId_2?: string;

    @Column({ field: "auth_PDB_insert_id_1", allowNull: true, type: DataType.STRING(10) })
    authPdbInsertId_1?: string;

    @Column({ field: "auth_PDB_insert_id_2", allowNull: true, type: DataType.STRING(10) })
    authPdbInsertId_2?: string;

    @Column({ field: "label_alt_id_1", allowNull: true, type: DataType.STRING(10) })
    labelAltId_1?: string;

    @Column({ field: "label_asym_id_1", allowNull: true, type: DataType.STRING(10) })
    labelAsymId_1?: string;

    @Column({ field: "label_atom_id_1", allowNull: true, type: DataType.STRING(6) })
    labelAtomId_1?: string;

    @Column({ field: "label_comp_id_1", allowNull: true, type: DataType.STRING(10) })
    labelCompId_1?: string;

    @Column({ field: "label_seq_id_1", allowNull: true, type: DataType.INTEGER })
    labelSeqId_1?: number;

    @Column({ field: "label_alt_id_2", allowNull: true, type: DataType.STRING(10) })
    labelAltId_2?: string;

    @Column({ field: "label_asym_id_2", allowNull: true, type: DataType.STRING(10) })
    labelAsymId_2?: string;

    @Column({ field: "label_atom_id_2", allowNull: true, type: DataType.STRING(6) })
    labelAtomId_2?: string;

    @Column({ field: "label_comp_id_2", allowNull: true, type: DataType.STRING(10) })
    labelCompId_2?: string;

    @Column({ field: "label_seq_id_2", allowNull: true, type: DataType.INTEGER })
    labelSeqId_2?: number;

    @Column({ field: "site_symmetry_1", allowNull: true, type: DataType.STRING(10) })
    siteSymmetry_1?: string;

    @Column({ field: "site_symmetry_2", allowNull: true, type: DataType.STRING(10) })
    siteSymmetry_2?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    dist?: number;
}
