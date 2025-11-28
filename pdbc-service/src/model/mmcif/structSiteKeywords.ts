import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "struct_site_keywords", timestamps: false })
export class structSiteKeywords extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "site_id", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    siteId!: string;

    @Column({ primaryKey: true, type: DataType.STRING(200) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    text!: string;
}
