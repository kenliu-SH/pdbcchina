import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_audit_conform_extension", timestamps: false })
export class pdbxAuditConformExtension extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "extension_dict_location", allowNull: true, type: DataType.STRING(200) })
    extensionDictLocation?: string;

    @Column({ field: "extension_dict_name", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    extensionDictName!: string;

    @Column({ field: "extension_dict_version", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    extensionDictVersion!: string;
}
