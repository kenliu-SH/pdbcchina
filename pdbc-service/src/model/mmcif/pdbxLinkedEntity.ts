import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_linked_entity", timestamps: false })
export class pdbxLinkedEntity extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "linked_entity_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    linkedEntityId!: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    type?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    class?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    name?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    description?: string;

    @Column({ field: "prd_id", allowNull: true, type: DataType.STRING(10) })
    prdId?: string;
}
