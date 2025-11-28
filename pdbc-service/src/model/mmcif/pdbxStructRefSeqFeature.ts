import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_ref_seq_feature", timestamps: false })
export class pdbxStructRefSeqFeature extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "feature_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    featureId!: number;

    @Column({ field: "align_id", allowNull: true, type: DataType.STRING(10) })
    alignId?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    type?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "pdb_strand_id", allowNull: true, type: DataType.STRING(10) })
    pdbStrandId?: string;

    @Column({ field: "asym_id", allowNull: true, type: DataType.STRING(10) })
    asymId?: string;

    @Column({ field: "beg_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    begAuthSeqId?: string;

    @Column({ field: "end_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    endAuthSeqId?: string;

    @Column({ field: "beg_seq_num", allowNull: true, type: DataType.STRING(10) })
    begSeqNum?: string;

    @Column({ field: "end_seq_num", allowNull: true, type: DataType.STRING(10) })
    endSeqNum?: string;

    @Column({ field: "beg_auth_mon_id", allowNull: true, type: DataType.STRING(10) })
    begAuthMonId?: string;

    @Column({ field: "end_auth_mon_id", allowNull: true, type: DataType.STRING(10) })
    endAuthMonId?: string;

    @Column({ field: "beg_pdb_ins_code", allowNull: true, type: DataType.STRING(10) })
    begPdbInsCode?: string;

    @Column({ field: "end_pdb_ins_code", allowNull: true, type: DataType.STRING(10) })
    endPdbInsCode?: string;
}
