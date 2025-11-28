import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_reference_publication_list", timestamps: false })
export class pdbxReferencePublicationList extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "publication_abbrev", primaryKey: true, type: DataType.STRING(80) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    publicationAbbrev!: string;

    @Column({ field: "ASTM_code_type", allowNull: true, type: DataType.STRING(80) })
    astmCodeType?: string;

    @Column({ field: "ASTM_code_value", allowNull: true, type: DataType.STRING(80) })
    astmCodeValue?: string;

    @Column({ field: "ISSN_code_type", allowNull: true, type: DataType.STRING(80) })
    issnCodeType?: string;

    @Column({ field: "ISSN_code_value", allowNull: true, type: DataType.STRING(80) })
    issnCodeValue?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    country?: string;

    @Column({ field: "start_year", allowNull: true, type: DataType.STRING(80) })
    startYear?: string;

    @Column({ field: "end_year", allowNull: true, type: DataType.STRING(80) })
    endYear?: string;
}
