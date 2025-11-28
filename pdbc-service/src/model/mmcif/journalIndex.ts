import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "journal_index", timestamps: false })
export class journalIndex extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    subterm?: string;

    @Column({ primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    term!: string;

    @Column({ primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    type!: string;
}
