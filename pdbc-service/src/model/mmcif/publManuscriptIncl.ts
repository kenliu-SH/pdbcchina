import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "publ_manuscript_incl", timestamps: false })
export class publManuscriptIncl extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "extra_defn", allowNull: true, type: DataType.STRING(80) })
    extraDefn?: string;

    @Column({ field: "extra_info", allowNull: true, type: DataType.STRING(200) })
    extraInfo?: string;

    @Column({ field: "extra_item", allowNull: true, type: DataType.STRING(80) })
    extraItem?: string;
}
