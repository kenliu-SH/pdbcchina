import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'citation', timestamps: false })
export class citation extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare structureId: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare abstract?: string;

	@Column({ field: 'abstract_id_CAS', allowNull: true, type: DataType.STRING(200) })
	declare abstractIdCas?: string;

	@Column({ field: 'book_id_ISBN', allowNull: true, type: DataType.STRING(80) })
	declare bookIdIsbn?: string;

	@Column({ field: 'book_publisher', allowNull: true, type: DataType.STRING(200) })
	declare bookPublisher?: string;

	@Column({ field: 'book_publisher_city', allowNull: true, type: DataType.STRING(200) })
	declare bookPublisherCity?: string;

	@Column({ field: 'book_title', allowNull: true, type: DataType.STRING(200) })
	declare bookTitle?: string;

	@Column({ field: 'coordinate_linkage', allowNull: true, type: DataType.STRING(10) })
	declare coordinateLinkage?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare country?: string;

	@Column({ field: 'database_id_Medline', allowNull: true, type: DataType.INTEGER })
	declare databaseIdMedline?: number;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare details?: string;

	@Column({ primaryKey: true, type: DataType.STRING(16) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id?: string;

	@Column({ field: 'journal_abbrev', allowNull: true, type: DataType.STRING(255) })
	declare journalAbbrev?: string;

	@Column({ field: 'journal_id_ASTM', allowNull: true, type: DataType.STRING(80) })
	declare journalIdAstm?: string;

	@Column({ field: 'journal_id_CSD', allowNull: true, type: DataType.STRING(80) })
	declare journalIdCsd?: string;

	@Column({ field: 'journal_id_ISSN', allowNull: true, type: DataType.STRING(80) })
	declare journalIdIssn?: string;

	@Column({ field: 'journal_full', allowNull: true, type: DataType.STRING(200) })
	declare journalFull?: string;

	@Column({ field: 'journal_issue', allowNull: true, type: DataType.STRING(80) })
	declare journalIssue?: string;

	@Column({ field: 'journal_volume', allowNull: true, type: DataType.STRING(80) })
	declare journalVolume?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare language?: string;

	@Column({ field: 'page_first', allowNull: true, type: DataType.STRING(80) })
	declare pageFirst?: string;

	@Column({ field: 'page_last', allowNull: true, type: DataType.STRING(80) })
	declare pageLast?: string;

	@Column({ allowNull: true, type: DataType.STRING(1023) })
	declare title?: string;

	@Column({ allowNull: true, type: DataType.INTEGER })
	declare year?: number;

	@Column({ field: 'database_id_CSD', allowNull: true, type: DataType.STRING(10) })
	declare databaseIdCsd?: string;

	@Column({ field: 'pdbx_database_id_DOI', allowNull: true, type: DataType.STRING(69) })
	declare pdbxDatabaseIdDoi?: string;

	@Column({ field: 'pdbx_database_id_PubMed', allowNull: true, type: DataType.INTEGER })
	declare pdbxDatabaseIdPubMed?: number;

	@Column({ field: 'unpublished_flag', allowNull: true, type: DataType.STRING(10) })
	declare unpublishedFlag?: string;
}
