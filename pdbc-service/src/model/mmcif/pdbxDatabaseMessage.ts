import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_database_message", timestamps: false })
export class pdbxDatabaseMessage extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "message_id", primaryKey: true, type: DataType.STRING(200) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    messageId!: string;

    @Column({ allowNull: true, type: DataType.DATE })
    date?: Date;

    @Column({ field: "content_type", allowNull: true, type: DataType.STRING(10) })
    contentType?: string;

    @Column({ field: "message_type", allowNull: true, type: DataType.STRING(10) })
    messageType?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    sender?: string;

    @Column({ field: "sender_address_fax", allowNull: true, type: DataType.STRING(25) })
    senderAddressFax?: string;

    @Column({ field: "sender_address_phone", allowNull: true, type: DataType.STRING(25) })
    senderAddressPhone?: string;

    @Column({ field: "sender_address_email", allowNull: true, type: DataType.STRING(80) })
    senderAddressEmail?: string;

    @Column({ field: "sender_address_mail", allowNull: true, type: DataType.STRING(200) })
    senderAddressMail?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    receiver?: string;

    @Column({ field: "receiver_address_fax", allowNull: true, type: DataType.STRING(25) })
    receiverAddressFax?: string;

    @Column({ field: "receiver_address_phone", allowNull: true, type: DataType.STRING(25) })
    receiverAddressPhone?: string;

    @Column({ field: "receiver_address_email", allowNull: true, type: DataType.STRING(80) })
    receiverAddressEmail?: string;

    @Column({ field: "receiver_address_mail", allowNull: true, type: DataType.STRING(200) })
    receiverAddressMail?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    message?: string;
}
