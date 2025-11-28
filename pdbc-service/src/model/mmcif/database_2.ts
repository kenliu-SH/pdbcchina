import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: "database_2", timestamps: false })
export class database_2 extends Model {
    @ForeignKey(() => entry)
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare structureId: string;

    @Column({ field: "database_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare databaseId: string;

    @Column({ field: "database_code", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare databaseCode: string;
}
