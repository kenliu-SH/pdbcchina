import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_depui_entry_details", timestamps: false })
export class pdbxDepuiEntryDetails extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "dep_dataset_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    depDatasetId!: string;

    @Column({ field: "wwpdb_site_id", allowNull: true, type: DataType.STRING(10) })
    wwpdbSiteId?: string;

    @Column({ field: "experimental_methods", allowNull: true, type: DataType.STRING(200) })
    experimentalMethods?: string;

    @Column({ field: "requested_accession_types", allowNull: true, type: DataType.STRING(80) })
    requestedAccessionTypes?: string;

    @Column({ field: "validated_contact_email", allowNull: true, type: DataType.STRING(80) })
    validatedContactEmail?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    country?: string;

    @Column({ field: "structural_genomics_flag", allowNull: true, type: DataType.STRING(10) })
    structuralGenomicsFlag?: string;

    @Column({ field: "related_database_name", allowNull: true, type: DataType.STRING(80) })
    relatedDatabaseName?: string;

    @Column({ field: "related_database_code", allowNull: true, type: DataType.STRING(80) })
    relatedDatabaseCode?: string;

    @Column({ field: "replace_pdb_id", allowNull: true, type: DataType.STRING(10) })
    replacePdbId?: string;
}
