import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_refine_tls_group", timestamps: false })
export class pdbxRefineTlsGroup extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: string;

    @Column({ field: "pdbx_refine_id", allowNull: true, type: DataType.STRING(80) })
    pdbxRefineId?: string;

    @Column({ field: "refine_tls_id", allowNull: true, type: DataType.STRING(10) })
    refineTlsId?: string;

    @Column({ field: "beg_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    begLabelAsymId?: string;

    @Column({ field: "beg_label_seq_id", allowNull: true, type: DataType.INTEGER })
    begLabelSeqId?: number;

    @Column({ field: "beg_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    begAuthAsymId?: string;

    @Column({ field: "beg_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    begAuthSeqId?: string;

    @Column({ field: "end_label_asym_id", allowNull: true, type: DataType.STRING(10) })
    endLabelAsymId?: string;

    @Column({ field: "end_label_seq_id", allowNull: true, type: DataType.INTEGER })
    endLabelSeqId?: number;

    @Column({ field: "end_auth_asym_id", allowNull: true, type: DataType.STRING(10) })
    endAuthAsymId?: string;

    @Column({ field: "end_auth_seq_id", allowNull: true, type: DataType.STRING(10) })
    endAuthSeqId?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    selection?: string;

    @Column({ field: "selection_details", allowNull: true, type: DataType.STRING(4095) })
    selectionDetails?: string;
}
