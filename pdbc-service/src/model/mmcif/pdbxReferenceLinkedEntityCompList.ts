import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_reference_linked_entity_comp_list", timestamps: false })
export class pdbxReferenceLinkedEntityCompList extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "linked_entity_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    linkedEntityId!: number;

    @Column({ field: "list_id", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    listId!: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    name?: string;

    @Column({ field: "comp_id", allowNull: true, type: DataType.STRING(10) })
    compId?: string;
}
