import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "ndb_struct_na_base_pair_step", timestamps: false })
export class ndbStructNaBasePairStep extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "model_number", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    modelNumber!: number;

    @Column({ field: "step_number", allowNull: true, type: DataType.INTEGER })
    stepNumber?: number;

    @Column({ field: "step_name", allowNull: true, type: DataType.STRING(80) })
    stepName?: string;

    @Column({ field: "i_label_asym_id_1", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    iLabelAsymId_1!: string;

    @Column({ field: "i_label_comp_id_1", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    iLabelCompId_1!: string;

    @Column({ field: "i_label_seq_id_1", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    iLabelSeqId_1!: number;

    @Column({ field: "i_symmetry_1", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    iSymmetry_1!: string;

    @Column({ field: "j_label_asym_id_1", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    jLabelAsymId_1!: string;

    @Column({ field: "j_label_comp_id_1", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    jLabelCompId_1!: string;

    @Column({ field: "j_label_seq_id_1", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    jLabelSeqId_1!: number;

    @Column({ field: "j_symmetry_1", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    jSymmetry_1!: string;

    @Column({ field: "i_label_asym_id_2", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    iLabelAsymId_2!: string;

    @Column({ field: "i_label_comp_id_2", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    iLabelCompId_2!: string;

    @Column({ field: "i_label_seq_id_2", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    iLabelSeqId_2!: number;

    @Column({ field: "i_symmetry_2", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    iSymmetry_2!: string;

    @Column({ field: "j_label_asym_id_2", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    jLabelAsymId_2!: string;

    @Column({ field: "j_label_comp_id_2", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    jLabelCompId_2!: string;

    @Column({ field: "j_label_seq_id_2", type: DataType.INTEGER })
    jLabelSeqId_2!: number;

    @Column({ field: "j_symmetry_2", type: DataType.STRING(10) })
    jSymmetry_2!: string;

    @Column({ field: "i_auth_asym_id_1", allowNull: true, type: DataType.STRING(10) })
    iAuthAsymId_1?: string;

    @Column({ field: "i_auth_seq_id_1", allowNull: true, type: DataType.STRING(10) })
    iAuthSeqId_1?: string;

    @Column({ field: "i_PDB_ins_code_1", allowNull: true, type: DataType.STRING(10) })
    iPdbInsCode_1?: string;

    @Column({ field: "j_auth_asym_id_1", allowNull: true, type: DataType.STRING(10) })
    jAuthAsymId_1?: string;

    @Column({ field: "j_auth_seq_id_1", allowNull: true, type: DataType.STRING(10) })
    jAuthSeqId_1?: string;

    @Column({ field: "j_PDB_ins_code_1", allowNull: true, type: DataType.STRING(10) })
    jPdbInsCode_1?: string;

    @Column({ field: "i_auth_asym_id_2", allowNull: true, type: DataType.STRING(10) })
    iAuthAsymId_2?: string;

    @Column({ field: "i_auth_seq_id_2", allowNull: true, type: DataType.STRING(10) })
    iAuthSeqId_2?: string;

    @Column({ field: "i_PDB_ins_code_2", allowNull: true, type: DataType.STRING(10) })
    iPdbInsCode_2?: string;

    @Column({ field: "j_auth_asym_id_2", allowNull: true, type: DataType.STRING(10) })
    jAuthAsymId_2?: string;

    @Column({ field: "j_auth_seq_id_2", allowNull: true, type: DataType.STRING(10) })
    jAuthSeqId_2?: string;

    @Column({ field: "j_PDB_ins_code_2", allowNull: true, type: DataType.STRING(10) })
    jPdbInsCode_2?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    shift?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    slide?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    rise?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    tilt?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    roll?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    twist?: number;

    @Column({ field: "x_displacement", allowNull: true, type: DataType.FLOAT(12) })
    xDisplacement?: number;

    @Column({ field: "y_displacement", allowNull: true, type: DataType.FLOAT(12) })
    yDisplacement?: number;

    @Column({ field: "helical_rise", allowNull: true, type: DataType.FLOAT(12) })
    helicalRise?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    inclination?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    tip?: number;

    @Column({ field: "helical_twist", allowNull: true, type: DataType.FLOAT(12) })
    helicalTwist?: number;
}
