import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_contact_author", timestamps: false })
export class pdbxContactAuthor extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    declare id: number;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    address_1?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    address_2?: string;

    @Column({ allowNull: true, type: DataType.STRING(200) })
    address_3?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    city?: string;

    @Column({ field: "state_province", allowNull: true, type: DataType.STRING(80) })
    stateProvince?: string;

    @Column({ field: "postal_code", allowNull: true, type: DataType.STRING(80) })
    postalCode?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    email?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    fax?: string;

    @Column({ field: "name_first", allowNull: true, type: DataType.STRING(80) })
    nameFirst?: string;

    @Column({ field: "name_last", allowNull: true, type: DataType.STRING(80) })
    nameLast?: string;

    @Column({ field: "name_mi", allowNull: true, type: DataType.STRING(80) })
    nameMi?: string;

    @Column({ field: "name_salutation", allowNull: true, type: DataType.STRING(80) })
    nameSalutation?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    country?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    continent?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    phone?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    role?: string;

    @Column({ field: "organization_type", allowNull: true, type: DataType.STRING(80) })
    organizationType?: string;

    @Column({ field: "identifier_ORCID", allowNull: true, type: DataType.STRING(80) })
    identifierOrcdeclareId?: string;
}
