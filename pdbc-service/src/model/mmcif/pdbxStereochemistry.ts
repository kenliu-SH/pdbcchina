import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_stereochemistry", timestamps: false })
export class pdbxStereochemistry extends Model {
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

    @Column({ field: "label_asym_id", allowNull: true, type: DataType.STRING(10) })
    labelAsymId?: string;

    @Column({ field: "label_comp_id", allowNull: true, type: DataType.STRING(10) })
    labelCompId?: string;

    @Column({ field: "auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    authSeqId?: string;

    @Column({ field: "label_seq_id", allowNull: true, type: DataType.INTEGER })
    labelSeqId?: number;

    @Column({ field: "label_atom_id", allowNull: true, type: DataType.STRING(6) })
    labelAtomId?: string;

    @Column({ field: "label_alt_id", allowNull: true, type: DataType.STRING(10) })
    labelAltId?: string;

    @Column({ field: "label_atom_id_u", allowNull: true, type: DataType.STRING(6) })
    labelAtomIdU?: string;

    @Column({ field: "label_alt_id_u", allowNull: true, type: DataType.STRING(10) })
    labelAltIdU?: string;

    @Column({ field: "label_atom_id_v", allowNull: true, type: DataType.STRING(6) })
    labelAtomIdV?: string;

    @Column({ field: "label_alt_id_v", allowNull: true, type: DataType.STRING(10) })
    labelAltIdV?: string;

    @Column({ field: "label_atom_id_w", allowNull: true, type: DataType.STRING(6) })
    labelAtomIdW?: string;

    @Column({ field: "label_alt_id_w", allowNull: true, type: DataType.STRING(10) })
    labelAltIdW?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    volume3?: number;

    @Column({ field: "angle_out_of_plane", allowNull: true, type: DataType.FLOAT(12) })
    angleOutOfPlane?: number;
}
