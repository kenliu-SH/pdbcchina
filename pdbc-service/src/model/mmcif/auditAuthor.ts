import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: "audit_author", timestamps: false })
export class auditAuthor extends Model {
    @ForeignKey(() => entry)
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    declare address?: string;

    @Column({ allowNull: true, type: DataType.STRING(128) })
    declare  name?: string;

    @Column({ field: "pdbx_ordinal", primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare pdbxOrdinal: number;

    @Column({ field: "identifier_ORCID", allowNull: true, type: DataType.STRING(80) })
    declare identifierOrcdeclareId?: string;
}
