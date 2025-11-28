import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_view_item", timestamps: false })
export class pdbxViewItem extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "category_id", allowNull: true, type: DataType.STRING(10) })
    categoryId?: string;

    @Column({ field: "item_name", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    itemName!: string;

    @Column({ field: "item_view_name", allowNull: true, type: DataType.STRING(80) })
    itemViewName?: string;

    @Column({ field: "item_view_mandatory_code", allowNull: true, type: DataType.STRING(10) })
    itemViewMandatoryCode?: string;

    @Column({ field: "item_view_allow_alternate_value", allowNull: true, type: DataType.STRING(10) })
    itemViewAllowAlternateValue?: string;
}
