import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';
import { entry } from './entry';

@Table({ tableName: 'em_entity_assembly', timestamps: false })
export class emEntityAssembly extends Model {
	@ForeignKey(() => entry)
	@Column({ field: 'Structure_ID', primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	structureId!: string;

	@Column({ primaryKey: true, type: DataType.STRING(10) })
	@Index({ name: 'primary_index', using: 'BTREE', order: 'ASC', unique: true })
	declare id: string;

	@Column({ field: 'assembly_id', allowNull: true, type: DataType.STRING(10) })
	assemblyId?: string;

	@Column({ field: 'parent_id', allowNull: true, type: DataType.INTEGER })
	parentId?: number;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	source?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	type?: string;

	@Column({ allowNull: true, type: DataType.STRING(511) })
	declare name?: string;

	@Column({ allowNull: true, type: DataType.STRING(1023) })
	details?: string;

	@Column({ field: 'go_id', allowNull: true, type: DataType.STRING(80) })
	goId?: string;

	@Column({ field: 'ipr_id', allowNull: true, type: DataType.STRING(80) })
	iprId?: string;

	@Column({ allowNull: true, type: DataType.STRING(80) })
	synonym?: string;

	@Column({ field: 'number_of_copies', allowNull: true, type: DataType.INTEGER })
	numberOfCopies?: number;

	@Column({ field: 'oligomeric_details', allowNull: true, type: DataType.STRING(200) })
	oligomericDetails?: string;

	@Column({ field: 'entity_id_list', allowNull: true, type: DataType.STRING(511) })
	declare entityIdList?: string;

	@Column({ field: 'ebi_organism_scientific', allowNull: true, type: DataType.STRING(80) })
	ebiOrganismScientific?: string;

	@Column({ field: 'ebi_organism_common', allowNull: true, type: DataType.STRING(200) })
	ebiOrganismCommon?: string;

	@Column({ field: 'ebi_strain', allowNull: true, type: DataType.STRING(200) })
	ebiStrain?: string;

	@Column({ field: 'ebi_tissue', allowNull: true, type: DataType.STRING(200) })
	ebiTissue?: string;

	@Column({ field: 'ebi_cell', allowNull: true, type: DataType.STRING(200) })
	ebiCell?: string;

	@Column({ field: 'ebi_organelle', allowNull: true, type: DataType.STRING(200) })
	ebiOrganelle?: string;

	@Column({ field: 'ebi_cellular_location', allowNull: true, type: DataType.STRING(200) })
	ebiCellularLocation?: string;

	@Column({ field: 'ebi_engineered', allowNull: true, type: DataType.STRING(80) })
	ebiEngineered?: string;

	@Column({ field: 'ebi_expression_system', allowNull: true, type: DataType.STRING(80) })
	ebiExpressionSystem?: string;

	@Column({ field: 'ebi_expression_system_plasmid', allowNull: true, type: DataType.STRING(80) })
	ebiExpressionSystemPlasmdeclareId?: string;

	@Column({ field: 'mutant_flag', allowNull: true, type: DataType.STRING(80) })
	mutantFlag?: string;
}
