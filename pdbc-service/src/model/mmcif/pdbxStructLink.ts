import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_link", timestamps: false })
export class pdbxStructLink extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ allowNull: true, type: DataType.STRING(10) })
    type?: string;

    @Column({ field: "ptnr1_label_alt_id", allowNull: true, type: DataType.STRING(10) })
    ptnr1LabelAltId?: string;

    @Column({ field: "ptnr1_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    ptnr1LabelAsymId?: string;

    @Column({ field: "ptnr1_label_atom_id", allowNull: true, type: DataType.STRING(6) })
    ptnr1LabelAtomId?: string;

    @Column({ field: "ptnr1_label_comp_id", allowNull: true, type: DataType.STRING(10) })
    ptnr1LabelCompId?: string;

    @Column({ field: "ptnr1_label_seq_id", allowNull: true, type: DataType.INTEGER })
    ptnr1LabelSeqId?: number;

    @Column({ field: "ptnr1_label_ins_code", allowNull: true, type: DataType.STRING(10) })
    ptnr1LabelInsCode?: string;

    @Column({ field: "ptnr1_symmetry", allowNull: true, type: DataType.STRING(10) })
    ptnr1Symmetry?: string;

    @Column({ field: "ptnr2_label_alt_id", allowNull: true, type: DataType.STRING(10) })
    ptnr2LabelAltId?: string;

    @Column({ field: "ptnr2_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    ptnr2LabelAsymId?: string;

    @Column({ field: "ptnr2_label_atom_id", allowNull: true, type: DataType.STRING(6) })
    ptnr2LabelAtomId?: string;

    @Column({ field: "ptnr2_label_comp_id", allowNull: true, type: DataType.STRING(10) })
    ptnr2LabelCompId?: string;

    @Column({ field: "ptnr2_label_seq_id", allowNull: true, type: DataType.INTEGER })
    ptnr2LabelSeqId?: number;

    @Column({ field: "ptnr2_label_ins_code", allowNull: true, type: DataType.STRING(10) })
    ptnr2LabelInsCode?: string;

    @Column({ field: "ptnr2_symmetry", allowNull: true, type: DataType.STRING(10) })
    ptnr2Symmetry?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    details?: string;

    @Column({ field: "pdbx_dist_value", allowNull: true, type: DataType.FLOAT(12) })
    pdbxDistValue?: number;
}
