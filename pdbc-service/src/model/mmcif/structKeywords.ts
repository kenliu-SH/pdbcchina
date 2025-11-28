import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: "struct_keywords", timestamps: false })
export class structKeywords extends Model {
    @ForeignKey(() => entry)
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ allowNull: true, type: DataType.STRING(1023) })
    declare text?: string;

    @Column({ field: "pdbx_keywords", allowNull: true, type: DataType.STRING(80) })
    declare pdbxKeywords?: string;

    @Column({ field: "pdbx_details", allowNull: true, type: DataType.STRING(200) })
    declare pdbxDetails?: string;
}
