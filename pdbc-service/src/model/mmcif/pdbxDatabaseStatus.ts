import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'pdbx_database_status', timestamps: false })
export class pdbxDatabaseStatus extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ field: 'status_code', allowNull: true, type: DataType.STRING(10) })
	declare statusCode?: string;

	@Column({ field: 'author_release_status_code', allowNull: true, type: DataType.STRING(10) })
	declare authorReleaseStatusCode?: string;

	@Column({ field: 'status_code_sf', allowNull: true, type: DataType.STRING(10) })
	statusCodeSf?: string;

	@Column({ field: 'status_code_mr', allowNull: true, type: DataType.STRING(10) })
	statusCodeMr?: string;

	@Column({ field: 'dep_release_code_coordinates', allowNull: true, type: DataType.STRING(80) })
	depReleaseCodeCoordinates?: string;

	@Column({ field: 'dep_release_code_sequence', allowNull: true, type: DataType.STRING(80) })
	depReleaseCodeSequence?: string;

	@Column({ field: 'dep_release_code_struct_fact', allowNull: true, type: DataType.STRING(80) })
	declare depReleaseCodeStructFact?: string;

	@Column({ field: 'dep_release_code_nmr_constraints', allowNull: true, type: DataType.STRING(80) })
	declare depReleaseCodeNmrConstraints?: string;

	@Column({ field: 'entry_id', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	entryId!: string;

	@Column({ field: 'recvd_deposit_form', allowNull: true, type: DataType.STRING(2) })
	recvdDepositForm?: string;

	@Column({ field: 'date_deposition_form', allowNull: true, type: DataType.DATE })
	dateDepositionForm?: Date;

	@Column({ field: 'date_begin_deposition', allowNull: true, type: DataType.DATE })
	dateBeginDeposition?: Date;

	@Column({ field: 'date_begin_processing', allowNull: true, type: DataType.DATE })
	dateBeginProcessing?: Date;

	@Column({ field: 'date_end_processing', allowNull: true, type: DataType.DATE })
	dateEndProcessing?: Date;

	@Column({ field: 'date_begin_release_preparation', allowNull: true, type: DataType.DATE })
	dateBeginReleasePreparation?: Date;

	@Column({ field: 'date_author_release_request', allowNull: true, type: DataType.DATE })
	declare dateAuthorReleaseRequest?: Date;

	@Column({ field: 'recvd_coordinates', allowNull: true, type: DataType.STRING(2) })
	recvdCoordinates?: string;

	@Column({ field: 'date_coordinates', allowNull: true, type: DataType.DATE })
	declare dateCoordinates?: Date;

	@Column({ field: 'recvd_struct_fact', allowNull: true, type: DataType.STRING(2) })
	recvdStructFact?: string;

	@Column({ field: 'date_struct_fact', allowNull: true, type: DataType.DATE })
	dateStructFact?: Date;

	@Column({ field: 'recvd_nmr_constraints', allowNull: true, type: DataType.STRING(2) })
	recvdNmrConstraints?: string;

	@Column({ field: 'date_nmr_constraints', allowNull: true, type: DataType.DATE })
	dateNmrConstraints?: Date;

	@Column({ field: 'recvd_internal_approval', allowNull: true, type: DataType.STRING(2) })
	declare recvdInternalApproval?: string;

	@Column({ field: 'recvd_manuscript', allowNull: true, type: DataType.STRING(2) })
	recvdManuscript?: string;

	@Column({ field: 'date_manuscript', allowNull: true, type: DataType.DATE })
	dateManuscript?: Date;

	@Column({ field: 'name_depositor', allowNull: true, type: DataType.STRING(200) })
	nameDepositor?: string;

	@Column({ field: 'recvd_author_approval', allowNull: true, type: DataType.STRING(2) })
	recvdAuthorApproval?: string;

	@Column({ field: 'author_approval_type', allowNull: true, type: DataType.STRING(10) })
	authorApprovalType?: string;

	@Column({ field: 'date_author_approval', allowNull: true, type: DataType.DATE })
	dateAuthorApproval?: Date;

	@Column({ field: 'recvd_initial_deposition_date', allowNull: true, type: DataType.DATE })
	declare recvdInitialDepositionDate?: Date;

	@Column({ field: 'date_submitted', allowNull: true, type: DataType.DATE })
	dateSubmitted?: Date;

	@Column({ field: 'rcsb_annotator', allowNull: true, type: DataType.STRING(10) })
	declare rcsbAnnotator?: string;

	@Column({ field: 'date_of_sf_release', allowNull: true, type: DataType.DATE })
	dateOfSfRelease?: Date;

	@Column({ field: 'date_of_mr_release', allowNull: true, type: DataType.DATE })
	dateOfMrRelease?: Date;

	@Column({ field: 'date_of_PDB_release', allowNull: true, type: DataType.DATE })
	dateOfPdbRelease?: Date;

	@Column({ field: 'date_hold_coordinates', allowNull: true, type: DataType.DATE })
	dateHoldCoordinates?: Date;

	@Column({ field: 'date_hold_struct_fact', allowNull: true, type: DataType.DATE })
	dateHoldStructFact?: Date;

	@Column({ field: 'date_hold_nmr_constraints', allowNull: true, type: DataType.DATE })
	dateHoldNmrConstraints?: Date;

	@Column({ field: 'hold_for_publication', allowNull: true, type: DataType.STRING(2) })
	holdForPublication?: string;

	@Column({ field: 'SG_entry', allowNull: true, type: DataType.STRING(2) })
	declare sgEntry?: string;

	@Column({ field: 'pdb_date_of_author_approval', allowNull: true, type: DataType.DATE })
	pdbDateOfAuthorApproval?: Date;

	@Column({ field: 'deposit_site', allowNull: true, type: DataType.STRING(10) })
	declare depositSite?: string;

	@Column({ field: 'process_site', allowNull: true, type: DataType.STRING(10) })
	declare processSite?: string;

	@Column({ field: 'dep_release_code_chemical_shifts', allowNull: true, type: DataType.STRING(80) })
	depReleaseCodeChemicalShifts?: string;

	@Column({ field: 'recvd_chemical_shifts', allowNull: true, type: DataType.STRING(2) })
	recvdChemicalShifts?: string;

	@Column({ field: 'date_chemical_shifts', allowNull: true, type: DataType.DATE })
	dateChemicalShifts?: Date;

	@Column({ field: 'date_hold_chemical_shifts', allowNull: true, type: DataType.DATE })
	dateHoldChemicalShifts?: Date;

	@Column({ field: 'status_code_cs', allowNull: true, type: DataType.STRING(10) })
	statusCodeCs?: string;

	@Column({ field: 'date_of_cs_release', allowNull: true, type: DataType.DATE })
	dateOfCsRelease?: Date;

	@Column({ field: 'methods_development_category', allowNull: true, type: DataType.STRING(80) })
	methodsDevelopmentCategory?: string;

	@Column({ field: 'pdb_format_compatible', allowNull: true, type: DataType.STRING(2) })
	pdbFormatCompatible?: string;

	@Column({ field: 'auth_req_rel_date', allowNull: true, type: DataType.DATE })
	authReqRelDate?: Date;

	@Column({ field: 'ndb_tid', allowNull: true, type: DataType.STRING(10) })
	declare ndbTdeclareId?: string;

	@Column({ field: 'status_coordinates_in_NDB', allowNull: true, type: DataType.STRING(2) })
	statusCoordinatesInNdb?: string;

	@Column({ field: 'date_revised', allowNull: true, type: DataType.DATE })
	dateRevised?: Date;

	@Column({ field: 'replaced_entry_id', allowNull: true, type: DataType.STRING(10) })
	replacedEntryId?: string;

	@Column({ field: 'revision_id', allowNull: true, type: DataType.STRING(10) })
	revisionId?: string;

	@Column({ field: 'revision_description', allowNull: true, type: DataType.STRING(200) })
	declare revisionDescription?: string;

	@Column({ field: 'pdbx_annotator', allowNull: true, type: DataType.STRING(10) })
	declare pdbxAnnotator?: string;

	@Column({ field: 'date_of_NDB_release', allowNull: true, type: DataType.DATE })
	dateOfNdbRelease?: Date;

	@Column({ field: 'date_released_to_PDB', allowNull: true, type: DataType.DATE })
	declare dateReleasedToPdb?: Date;

	@Column({ field: 'skip_PDB_REMARK_500', allowNull: true, type: DataType.STRING(2) })
	skipPdbRemark_500?: string;

	@Column({ field: 'skip_PDB_REMARK', allowNull: true, type: DataType.STRING(80) })
	skipPdbRemark?: string;

	@Column({ field: 'title_suppression', allowNull: true, type: DataType.STRING(2) })
	declare titleSuppression?: string;
}
