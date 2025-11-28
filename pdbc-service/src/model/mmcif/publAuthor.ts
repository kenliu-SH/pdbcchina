import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "publ_author", timestamps: false })
export class publAuthor extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    address?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    email?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    footnote?: string;

    @Column({ primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    name!: string;

    @Column({ field: "id_iucr", allowNull: true, type: DataType.STRING(10) })
    idIucr?: string;
}
