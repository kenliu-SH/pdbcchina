import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entity } from './entity';
import { entry } from './entry';

@Table({ tableName: 'chem_comp', timestamps: false })
export class chemComp extends Model {
	@ForeignKey(() => entry)
	@ForeignKey(() => entity)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ allowNull: true, type: DataType.STRING(200) })
	declare formula?: string;

	@Column({ field: 'formula_weight', allowNull: true, type: DataType.FLOAT(12) })
	declare formulaWeight?: number;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id?: string;

	@Column({ field: 'model_details', allowNull: true, type: DataType.STRING(200) })
	declare modelDetails?: string;

	@Column({ field: 'model_erf', allowNull: true, type: DataType.STRING(80) })
	declare modelErf?: string;

	@Column({ field: 'model_source', allowNull: true, type: DataType.STRING(200) })
	declare modelSource?: string;

	@Column({ field: 'mon_nstd_class', allowNull: true, type: DataType.STRING(200) })
	declare monNstdClass?: string;

	@Column({ field: 'mon_nstd_details', allowNull: true, type: DataType.STRING(200) })
	declare monNstdDetails?: string;

	@Column({ field: 'mon_nstd_flag', allowNull: true, type: DataType.STRING(10) })
	declare monNstdFlag?: string;

	@Column({ field: 'mon_nstd_parent', allowNull: true, type: DataType.STRING(10) })
	declare monNstdParent?: string;

	@Column({ field: 'mon_nstd_parent_comp_id', allowNull: true, type: DataType.STRING(80) })
	declare monNstdParentCompId?: string;

	@Column({ allowNull: true, type: DataType.STRING(1023) })
	declare name?: string;

	@Column({ field: 'number_atoms_all', allowNull: true, type: DataType.INTEGER })
	declare numberAtomsAll?: number;

	@Column({ field: 'number_atoms_nh', allowNull: true, type: DataType.INTEGER })
	declare numberAtomsNh?: number;

	@Column({ field: 'one_letter_code', allowNull: true, type: DataType.STRING(10) })
	declare oneLetterCode?: string;

	@Column({ field: 'three_letter_code', allowNull: true, type: DataType.STRING(4) })
	declare threeLetterCode?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	declare type?: string;

	@Column({ field: 'pdbx_synonyms', allowNull: true, type: DataType.STRING(1023) })
	declare pdbxSynonyms?: string;

	@Column({ field: 'pdbx_modification_details', allowNull: true, type: DataType.STRING(200) })
	declare pdbxModificationDetails?: string;

	@Column({ field: 'pdbx_component_no', allowNull: true, type: DataType.INTEGER })
	declare pdbxComponentNo?: number;

	@Column({ field: 'pdbx_type', allowNull: true, type: DataType.STRING(80) })
	declare pdbxType?: string;

	@Column({ field: 'pdbx_ambiguous_flag', allowNull: true, type: DataType.STRING(10) })
	declare pdbxAmbiguousFlag?: string;

	@Column({ field: 'pdbx_replaced_by', allowNull: true, type: DataType.STRING(10) })
	declare pdbxReplacedBy?: string;

	@Column({ field: 'pdbx_replaces', allowNull: true, type: DataType.STRING(80) })
	declare pdbxReplaces?: string;

	@Column({ field: 'pdbx_formal_charge', allowNull: true, type: DataType.INTEGER })
	declare pdbxFormalCharge?: number;

	@Column({ field: 'pdbx_subcomponent_list', allowNull: true, type: DataType.STRING(200) })
	declare pdbxSubcomponentList?: string;

	@Column({ field: 'pdbx_model_coordinates_details', allowNull: true, type: DataType.STRING(200) })
	declare pdbxModelCoordinatesDetails?: string;

	@Column({ field: 'pdbx_model_coordinates_db_code', allowNull: true, type: DataType.STRING(80) })
	declare pdbxModelCoordinatesDbCode?: string;

	@Column({ field: 'pdbx_ideal_coordinates_details', allowNull: true, type: DataType.STRING(200) })
	declare pdbxIdealCoordinatesDetails?: string;

	@Column({ field: 'pdbx_ideal_coordinates_missing_flag', allowNull: true, type: DataType.STRING(10) })
	declare pdbxIdealCoordinatesMissingFlag?: string;

	@Column({ field: 'pdbx_model_coordinates_missing_flag', allowNull: true, type: DataType.STRING(10) })
	declare pdbxModelCoordinatesMissingFlag?: string;

	@Column({ field: 'pdbx_initial_date', allowNull: true, type: DataType.DATE })
	declare pdbxInitialDate?: Date;

	@Column({ field: 'pdbx_modified_date', allowNull: true, type: DataType.DATE })
	declare pdbxModifiedDate?: Date;

	@Column({ field: 'pdbx_release_status', allowNull: true, type: DataType.STRING(80) })
	declare pdbxReleaseStatus?: string;

	@Column({ field: 'pdbx_processing_site', allowNull: true, type: DataType.STRING(10) })
	declare pdbxProcessingSite?: string;

	@Column({ field: 'pdbx_number_subcomponents', allowNull: true, type: DataType.INTEGER })
	declare pdbxNumberSubcomponents?: number;

	@Column({ field: 'pdbx_class_1', allowNull: true, type: DataType.STRING(80) })
	declare pdbxClass_1?: string;

	@Column({ field: 'pdbx_class_2', allowNull: true, type: DataType.STRING(80) })
	declare pdbxClass_2?: string;

	@Column({ field: 'pdbx_comp_type', allowNull: true, type: DataType.STRING(80) })
	declare pdbxCompType?: string;

	@Column({ field: 'pdbx_reserved_name', allowNull: true, type: DataType.STRING(200) })
	declare pdbxReservedName?: string;

	@Column({ field: 'pdbx_status', allowNull: true, type: DataType.STRING(10) })
	declare pdbxStatus?: string;

	@Column({ field: 'pdbx_type_modified', allowNull: true, type: DataType.INTEGER })
	declare pdbxTypeModified?: number;

	@Column({ field: 'pdbx_casnum', allowNull: true, type: DataType.STRING(80) })
	declare pdbxCasnum?: string;

	@Column({ field: 'pdbx_smiles', allowNull: true, type: DataType.STRING(200) })
	declare pdbxSmiles?: string;

	@Column({ field: 'pdbx_nscnum', allowNull: true, type: DataType.STRING(10) })
	declare pdbxNscnum?: string;
}
