import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "pdbx_depui_status_flags", timestamps: false })
export class pdbxDepuiStatusFlags extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "dep_dataset_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    depDatasetId!: string;

    @Column({ field: "primary_citation_status", allowNull: true, type: DataType.STRING(10) })
    primaryCitationStatus?: string;

    @Column({ field: "corresponding_author_status", allowNull: true, type: DataType.STRING(10) })
    correspondingAuthorStatus?: string;

    @Column({ field: "reference_citation_status", allowNull: true, type: DataType.STRING(10) })
    referenceCitationStatus?: string;

    @Column({ field: "is_grant_funded", allowNull: true, type: DataType.STRING(10) })
    isGrantFunded?: string;

    @Column({ field: "has_ncs_data", allowNull: true, type: DataType.STRING(10) })
    hasNcsData?: string;

    @Column({ field: "prediction_target", allowNull: true, type: DataType.STRING(10) })
    predictionTarget?: string;

    @Column({ field: "has_helical_symmetry", allowNull: true, type: DataType.STRING(10) })
    hasHelicalSymmetry?: string;

    @Column({ field: "has_point_symmetry", allowNull: true, type: DataType.STRING(10) })
    hasPointSymmetry?: string;

    @Column({ field: "has_cyclic_symmetry", allowNull: true, type: DataType.STRING(10) })
    hasCyclicSymmetry?: string;

    @Column({ field: "has_accepted_terms_and_conditions", allowNull: true, type: DataType.STRING(10) })
    hasAcceptedTermsAndConditions?: string;

    @Column({ field: "has_viewed_validation_report", allowNull: true, type: DataType.STRING(10) })
    hasViewedValidationReport?: string;

    @Column({ field: "validated_model_file_name", allowNull: true, type: DataType.STRING(80) })
    validatedModelFileName?: string;

    @Column({ field: "merge_prior_model_file_name", allowNull: true, type: DataType.STRING(80) })
    mergePriorModelFileName?: string;

    @Column({ field: "merge_replace_model_file_name", allowNull: true, type: DataType.STRING(80) })
    mergeReplaceModelFileName?: string;

    @Column({ field: "merge_output_model_file_name", allowNull: true, type: DataType.STRING(80) })
    mergeOutputModelFileName?: string;

    @Column({ field: "is_ligand_processing_complete", allowNull: true, type: DataType.STRING(200) })
    isLigandProcessingComplete?: string;

    @Column({ field: "sample_xyz_sequence_alignments_valid", allowNull: true, type: DataType.STRING(200) })
    sampleXyzSequenceAlignmentsValdeclareId?: string;

    @Column({ field: "has_sas_data", allowNull: true, type: DataType.STRING(10) })
    hasSasData?: string;

    @Column({ field: "is_sas_deposited", allowNull: true, type: DataType.STRING(10) })
    isSasDeposited?: string;
}
