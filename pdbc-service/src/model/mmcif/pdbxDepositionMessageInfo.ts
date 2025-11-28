import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_deposition_message_info", timestamps: false })
export class pdbxDepositionMessageInfo extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;

    @Column({ field: "deposition_data_set_id", allowNull: true, type: DataType.STRING(10) })
    depositionDataSetId?: string;

    @Column({ field: "message_id", allowNull: true, type: DataType.STRING(10) })
    messageId?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    timestamp?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    sender?: string;

    @Column({ field: "content_type", allowNull: true, type: DataType.STRING(80) })
    contentType?: string;

    @Column({ field: "content_value", allowNull: true, type: DataType.STRING(80) })
    contentValue?: string;

    @Column({ field: "parent_message_id", allowNull: true, type: DataType.STRING(10) })
    parentMessageId?: string;

    @Column({ field: "message_subject", allowNull: true, type: DataType.STRING(200) })
    messageSubject?: string;

    @Column({ field: "message_text", allowNull: true, type: DataType.STRING(200) })
    messageText?: string;

    @Column({ field: "message_type", allowNull: true, type: DataType.STRING(10) })
    messageType?: string;

    @Column({ field: "send_status", allowNull: true, type: DataType.STRING(10) })
    sendStatus?: string;
}
