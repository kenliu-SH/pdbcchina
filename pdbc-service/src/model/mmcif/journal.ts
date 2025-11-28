import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "journal", timestamps: false })
export class journal extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "coden_ASTM", allowNull: true, type: DataType.STRING(80) })
    codenAstm?: string;

    @Column({ field: "coden_Cambridge", allowNull: true, type: DataType.STRING(80) })
    codenCambridge?: string;

    @Column({ field: "coeditor_address", allowNull: true, type: DataType.STRING(200) })
    coeditorAddress?: string;

    @Column({ field: "coeditor_code", allowNull: true, type: DataType.STRING(80) })
    coeditorCode?: string;

    @Column({ field: "coeditor_email", allowNull: true, type: DataType.STRING(80) })
    coeditorEmail?: string;

    @Column({ field: "coeditor_fax", allowNull: true, type: DataType.STRING(80) })
    coeditorFax?: string;

    @Column({ field: "coeditor_name", allowNull: true, type: DataType.STRING(80) })
    coeditorName?: string;

    @Column({ field: "coeditor_notes", allowNull: true, type: DataType.STRING(200) })
    coeditorNotes?: string;

    @Column({ field: "coeditor_phone", allowNull: true, type: DataType.STRING(80) })
    coeditorPhone?: string;

    @Column({ field: "data_validation_number", allowNull: true, type: DataType.STRING(10) })
    dataValidationNumber?: string;

    @Column({ field: "date_accepted", allowNull: true, type: DataType.DATE })
    dateAccepted?: Date;

    @Column({ field: "date_from_coeditor", allowNull: true, type: DataType.DATE })
    dateFromCoeditor?: Date;

    @Column({ field: "date_to_coeditor", allowNull: true, type: DataType.DATE })
    dateToCoeditor?: Date;

    @Column({ field: "date_printers_final", allowNull: true, type: DataType.DATE })
    datePrintersFinal?: Date;

    @Column({ field: "date_printers_first", allowNull: true, type: DataType.DATE })
    datePrintersFirst?: Date;

    @Column({ field: "date_proofs_in", allowNull: true, type: DataType.DATE })
    dateProofsIn?: Date;

    @Column({ field: "date_proofs_out", allowNull: true, type: DataType.DATE })
    dateProofsOut?: Date;

    @Column({ field: "date_recd_copyright", allowNull: true, type: DataType.DATE })
    dateRecdCopyright?: Date;

    @Column({ field: "date_recd_electronic", allowNull: true, type: DataType.DATE })
    dateRecdElectronic?: Date;

    @Column({ field: "date_recd_hard_copy", allowNull: true, type: DataType.DATE })
    dateRecdHardCopy?: Date;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    issue?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    language?: string;

    @Column({ field: "name_full", allowNull: true, type: DataType.STRING(80) })
    nameFull?: string;

    @Column({ field: "page_first", allowNull: true, type: DataType.STRING(80) })
    pageFirst?: string;

    @Column({ field: "page_last", allowNull: true, type: DataType.STRING(80) })
    pageLast?: string;

    @Column({ field: "paper_category", allowNull: true, type: DataType.STRING(80) })
    paperCategory?: string;

    @Column({ field: "suppl_publ_number", allowNull: true, type: DataType.STRING(80) })
    supplPublNumber?: string;

    @Column({ field: "suppl_publ_pages", allowNull: true, type: DataType.STRING(80) })
    supplPublPages?: string;

    @Column({ field: "techeditor_address", allowNull: true, type: DataType.STRING(200) })
    techeditorAddress?: string;

    @Column({ field: "techeditor_code", allowNull: true, type: DataType.STRING(80) })
    techeditorCode?: string;

    @Column({ field: "techeditor_email", allowNull: true, type: DataType.STRING(80) })
    techeditorEmail?: string;

    @Column({ field: "techeditor_fax", allowNull: true, type: DataType.STRING(80) })
    techeditorFax?: string;

    @Column({ field: "techeditor_name", allowNull: true, type: DataType.STRING(80) })
    techeditorName?: string;

    @Column({ field: "techeditor_notes", allowNull: true, type: DataType.STRING(200) })
    techeditorNotes?: string;

    @Column({ field: "techeditor_phone", allowNull: true, type: DataType.STRING(80) })
    techeditorPhone?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    volume?: string;

    @Column({ allowNull: true, type: DataType.STRING(80) })
    year?: string;
}
