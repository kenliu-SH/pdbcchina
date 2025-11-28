import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_view_category", timestamps: false })
export class pdbxViewCategory extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "view_group_id", allowNull: true, type: DataType.STRING(10) })
    viewGroupId?: string;

    @Column({ field: "category_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    categoryId!: string;

    @Column({ field: "category_view_name", allowNull: true, type: DataType.STRING(80) })
    categoryViewName?: string;
}
