import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: "database1", timestamps: false })
export class database1 extends Model {
    @Column({ field: "Structure_ID", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    structureId!: string;

    @Column({ field: "entry_id", primaryKey: true, type: DataType.STRING(10) })
    @Index({ name: "primary_index", using: "BTREE", order: "ASC", unique: true })
    entryId!: string;

    @Column({ field: "journal_ASTM", allowNull: true, type: DataType.STRING(80) })
    journalAstm?: string;

    @Column({ field: "journal_CSD", allowNull: true, type: DataType.STRING(80) })
    journalCsd?: string;

    @Column({ field: "CSD_history", allowNull: true, type: DataType.STRING(200) })
    csdHistory?: string;

    @Column({ field: "code_CAS", allowNull: true, type: DataType.STRING(80) })
    codeCas?: string;

    @Column({ field: "code_CSD", allowNull: true, type: DataType.STRING(80) })
    codeCsd?: string;

    @Column({ field: "code_ICSD", allowNull: true, type: DataType.STRING(80) })
    codeIcsd?: string;

    @Column({ field: "code_MDF", allowNull: true, type: DataType.STRING(80) })
    codeMdf?: string;

    @Column({ field: "code_NBS", allowNull: true, type: DataType.STRING(80) })
    codeNbs?: string;

    @Column({ field: "code_PDB", allowNull: true, type: DataType.STRING(80) })
    codePdb?: string;

    @Column({ field: "code_PDF", allowNull: true, type: DataType.STRING(80) })
    codePdf?: string;

    @Column({ field: "code_depnum_ccdc_fiz", allowNull: true, type: DataType.STRING(80) })
    codeDepnumCcdcFiz?: string;

    @Column({ field: "code_depnum_ccdc_journal", allowNull: true, type: DataType.STRING(80) })
    codeDepnumCcdcJournal?: string;

    @Column({ field: "code_depnum_ccdc_archive", allowNull: true, type: DataType.STRING(80) })
    codeDepnumCcdcArchive?: string;

    @Column({ field: "pdbx_code_NDB", allowNull: true, type: DataType.STRING(80) })
    pdbxCodeNdb?: string;

    @Column({ field: "pdbx_code_PDB", allowNull: true, type: DataType.STRING(10) })
    pdbxCodePdb?: string;

    @Column({ field: "pdbx_related_codes_PDB", allowNull: true, type: DataType.STRING(80) })
    pdbxRelatedCodesPdb?: string;
}
