import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_validate_symm_contact", timestamps: false })
export class pdbxValidateSymmContact extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ field: "PDB_model_num", allowNull: true, type: DataType.INTEGER })
    pdbModelNum?: number;

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

    @Column({ field: "PDB_ins_code_1", allowNull: true, type: DataType.STRING(10) })
    pdbInsCode_1?: string;

    @Column({ field: "PDB_ins_code_2", allowNull: true, type: DataType.STRING(10) })
    pdbInsCode_2?: string;

    @Column({ field: "label_alt_id_1", allowNull: true, type: DataType.STRING(10) })
    labelAltId_1?: string;

    @Column({ field: "label_alt_id_2", allowNull: true, type: DataType.STRING(10) })
    labelAltId_2?: string;

    @Column({ field: "site_symmetry_1", allowNull: true, type: DataType.STRING(80) })
    siteSymmetry_1?: string;

    @Column({ field: "site_symmetry_2", allowNull: true, type: DataType.STRING(80) })
    siteSymmetry_2?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    dist?: number;
}
