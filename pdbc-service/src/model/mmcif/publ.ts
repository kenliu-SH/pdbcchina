import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "publ", timestamps: false })
export class publ extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "contact_author", allowNull: true, type: DataType.STRING(200) })
    contactAuthor?: string;

    @Column({ field: "contact_author_address", allowNull: true, type: DataType.STRING(200) })
    contactAuthorAddress?: string;

    @Column({ field: "contact_author_email", allowNull: true, type: DataType.STRING(80) })
    contactAuthorEmail?: string;

    @Column({ field: "contact_author_fax", allowNull: true, type: DataType.STRING(80) })
    contactAuthorFax?: string;

    @Column({ field: "contact_author_name", allowNull: true, type: DataType.STRING(200) })
    contactAuthorName?: string;

    @Column({ field: "contact_author_phone", allowNull: true, type: DataType.STRING(80) })
    contactAuthorPhone?: string;

    @Column({ field: "contact_letter", allowNull: true, type: DataType.STRING(200) })
    contactLetter?: string;

    @Column({ field: "manuscript_creation", allowNull: true, type: DataType.STRING(200) })
    manuscriptCreation?: string;

    @Column({ field: "manuscript_processed", allowNull: true, type: DataType.STRING(200) })
    manuscriptProcessed?: string;

    @Column({ field: "manuscript_text", allowNull: true, type: DataType.STRING(200) })
    manuscriptText?: string;

    @Column({ field: "requested_category", allowNull: true, type: DataType.STRING(80) })
    requestedCategory?: string;

    @Column({ field: "requested_coeditor_name", allowNull: true, type: DataType.STRING(80) })
    requestedCoeditorName?: string;

    @Column({ field: "requested_journal", allowNull: true, type: DataType.STRING(80) })
    requestedJournal?: string;

    @Column({ field: "section_abstract", allowNull: true, type: DataType.STRING(200) })
    sectionAbstract?: string;

    @Column({ field: "section_acknowledgements", allowNull: true, type: DataType.STRING(200) })
    sectionAcknowledgements?: string;

    @Column({ field: "section_comment", allowNull: true, type: DataType.STRING(200) })
    sectionComment?: string;

    @Column({ field: "section_discussion", allowNull: true, type: DataType.STRING(200) })
    sectionDiscussion?: string;

    @Column({ field: "section_experimental", allowNull: true, type: DataType.STRING(200) })
    sectionExperimental?: string;

    @Column({ field: "section_exptl_prep", allowNull: true, type: DataType.STRING(200) })
    sectionExptlPrep?: string;

    @Column({ field: "section_exptl_refinement", allowNull: true, type: DataType.STRING(200) })
    sectionExptlRefinement?: string;

    @Column({ field: "section_exptl_solution", allowNull: true, type: DataType.STRING(200) })
    sectionExptlSolution?: string;

    @Column({ field: "section_figure_captions", allowNull: true, type: DataType.STRING(200) })
    sectionFigureCaptions?: string;

    @Column({ field: "section_introduction", allowNull: true, type: DataType.STRING(200) })
    sectionIntroduction?: string;

    @Column({ field: "section_references", allowNull: true, type: DataType.STRING(200) })
    sectionReferences?: string;

    @Column({ field: "section_synopsis", allowNull: true, type: DataType.STRING(200) })
    sectionSynopsis?: string;

    @Column({ field: "section_table_legends", allowNull: true, type: DataType.STRING(200) })
    sectionTableLegends?: string;

    @Column({ field: "section_title", allowNull: true, type: DataType.STRING(200) })
    sectionTitle?: string;

    @Column({ field: "section_title_footnote", allowNull: true, type: DataType.STRING(200) })
    sectionTitleFootnote?: string;
}
