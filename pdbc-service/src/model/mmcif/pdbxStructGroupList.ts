import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_struct_group_list", timestamps: false })
export class pdbxStructGroupList extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "struct_group_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structGroupId!: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    name?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    type?: string;

    @Column({ field: "group_enumeration_type", allowNull: true, type: DataType.STRING(25) })
    groupEnumerationType?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    description?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    selection?: string;

    @Column({ field: "selection_details", allowNull: true, type: DataType.STRING(200) })
    selectionDetails?: string;
}
