import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "entity_link", timestamps: false })
export class entityLink extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "link_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    linkId!: string;

    @Column({ field: "entity_id_1", allowNull: true, type: DataType.STRING(10) })
    entityId_1?: string;

    @Column({ field: "entity_id_2", allowNull: true, type: DataType.STRING(10) })
    entityId_2?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    details?: string;

    @Column({ field: "entity_seq_num_1", allowNull: true, type: DataType.INTEGER })
    entitySeqNum_1?: number;

    @Column({ field: "entity_seq_num_2", allowNull: true, type: DataType.INTEGER })
    entitySeqNum_2?: number;
}
