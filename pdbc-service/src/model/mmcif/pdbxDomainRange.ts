import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_domain_range", timestamps: false })
export class pdbxDomainRange extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "beg_label_alt_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    begLabelAltId!: string;

    @Column({ field: "beg_label_asym_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    begLabelAsymId!: string;

    @Column({ field: "beg_label_comp_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    begLabelCompId!: string;

    @Column({ field: "beg_label_seq_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    begLabelSeqId!: number;

    @Column({ field: "beg_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    begAuthAsymId?: string;

    @Column({ field: "beg_auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    begAuthCompId?: string;

    @Column({ field: "beg_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    begAuthSeqId?: string;

    @Column({ field: "domain_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    domainId!: string;

    @Column({ field: "end_label_alt_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    endLabelAltId!: string;

    @Column({ field: "end_label_asym_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    endLabelAsymId!: string;

    @Column({ field: "end_label_comp_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    endLabelCompId!: string;

    @Column({ field: "end_label_seq_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    endLabelSeqId!: number;

    @Column({ field: "end_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    endAuthAsymId?: string;

    @Column({ field: "end_auth_comp_id", allowNull: true, type: DataType.STRING(10) })
    endAuthCompId?: string;

    @Column({ field: "end_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    endAuthSeqId?: string;
}
