import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "ndb_struct_na_base_pair", timestamps: false })
export class ndbStructNaBasePair extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "model_number", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    modelNumber!: number;

    @Column({ field: "pair_number", allowNull: true, type: DataType.INTEGER })
    pairNumber?: number;

    @Column({ field: "pair_name", allowNull: true, type: DataType.STRING(80) })
    pairName?: string;

    @Column({ field: "i_label_asym_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    iLabelAsymId!: string;

    @Column({ field: "i_label_comp_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    iLabelCompId!: string;

    @Column({ field: "i_label_seq_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    iLabelSeqId!: number;

    @Column({ field: "i_symmetry", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    iSymmetry!: string;

    @Column({ field: "j_label_asym_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    jLabelAsymId!: string;

    @Column({ field: "j_label_comp_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    jLabelCompId!: string;

    @Column({ field: "j_label_seq_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    jLabelSeqId!: number;

    @Column({ field: "j_symmetry", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    jSymmetry!: string;

    @Column({ field: "i_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    iAuthAsymId?: string;

    @Column({ field: "i_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    iAuthSeqId?: string;

    @Column({ field: "i_PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    iPdbInsCode?: string;

    @Column({ field: "j_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    jAuthAsymId?: string;

    @Column({ field: "j_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    jAuthSeqId?: string;

    @Column({ field: "j_PDB_ins_code", allowNull: true, type: DataType.STRING(10) })
    jPdbInsCode?: string;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    shear?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    stretch?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    stagger?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    buckle?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    propeller?: number;

    @Column({ allowNull: true, type: DataType.FLOAT(12) })
    opening?: number;

    @Column({ field: "hbond_type_12", allowNull: true, type: DataType.INTEGER })
    hbondType_12?: number;

    @Column({ field: "hbond_type_28", allowNull: true, type: DataType.INTEGER })
    hbondType_28?: number;
}
