import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_val_chiral", timestamps: false })
export class pdbxValChiral extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ field: "model_id", allowNull: true, type: DataType.INTEGER })
    modelId?: number;

    @Column({ field: "auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    authAsymId?: string;

    @Column({ field: "auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    authCompId?: string;

    @Column({ field: "auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    authSeqId?: string;

    @Column({ field: "auth_PDB_insert_id", allowNull: true, type: DataType.STRING(10) })
    authPdbInsertId?: string;

    @Column({ field: "label_asym_id", allowNull: true, type: DataType.STRING(10) })
    labelAsymId?: string;

    @Column({ field: "label_comp_id", allowNull: true, type: DataType.STRING(10) })
    labelCompId?: string;

    @Column({ field: "label_seq_id", allowNull: true, type: DataType.INTEGER })
    labelSeqId?: number;

    @Column({ field: "chiral_center_atom_name", allowNull: true, type: DataType.STRING(10) })
    chiralCenterAtomName?: string;

    @Column({ field: "chiral_neighbor_atom_name", allowNull: true, type: DataType.STRING(10) })
    chiralNeighborAtomName?: string;

    @Column({ field: "chiral_center_atom_alt_id", allowNull: true, type: DataType.STRING(10) })
    chiralCenterAtomAltId?: string;

    @Column({ field: "chiral_neighbor_atom_alt_id", allowNull: true, type: DataType.STRING(10) })
    chiralNeighborAtomAltId?: string;
}
