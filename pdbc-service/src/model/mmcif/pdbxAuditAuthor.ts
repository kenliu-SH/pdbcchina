import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_audit_author", timestamps: false })
export class pdbxAuditAuthor extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    address?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    name?: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    ordinal!: number;
}
