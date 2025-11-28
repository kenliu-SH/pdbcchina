import {
	Biological,
	BiologicallyInterestingMolecules,
	DepositionData,
	ExperimentalDataSnapshot,
	FundingOrganization,
	Literature,
	MacromoleculeContent,
	Macromolecules,
	RevisionHistory,
	SmallMolecules,
	UniqueLigand,
	UnitCell,
	Validation,
} from '@modules/web/entry/entry.vo';
import { SchemaMap } from '../schema/schemaMap.interface';
import { PDBTableName } from '@common/type';
import { Model } from 'sequelize-typescript';

export interface Functions {
	getLiterature(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<Literature>;

	/**
	 * 获取 macromolecules xray
	 */
	getMacromolecules(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<Macromolecules>;

	/**
	 * 获取 SmallMolecules
	 */
	getSmallMolecules(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<SmallMolecules>;
	/**
	 * 获取 Validation
	 */
	getValidation(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<Validation>;

	/**
	 * 获取 DepositionData
	 */
	getDepositionData(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<DepositionData>;

	/**
	 * 获取 fundingOrganizationList
	 */
	getFundingOrganizationList(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<FundingOrganization[]>;

	/**
	 * 获取 revisionHistorys
	 */
	getRevisionHistorys(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<RevisionHistory[]>;

	/**
	 * 获取 unitCells xray
	 */
	getUnitCells(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<UnitCell[]>;

	/**
	 * 获取 macromoleculeContent xray
	 */
	getMacromoleculeContent(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<MacromoleculeContent>;
	/**
	 * 获取 biological xray
	 */
	// getBiological(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<Biological[]>;

	/**
	 * 获取 uniqueLigands xray
	 */
	getUniqueLigands(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<UniqueLigand[]>;

	/**
	 * 获取 title
	 */
	getTitle(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<string>;

	/**
	 * 获取 classification
	 */
	getClassification(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<string[]>;

	/**
	 * 获取 doi
	 */
	getDoi(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<string>;

	/**
	 * 获取 emdb
	 */
	getEmdb(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<string>;

	/**
	 * 获取 organisms
	 */
	getOrganisms(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<string[]>;

	/**
	 * 获取 mutations
	 */
	getMutations(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<string>;

	/**
	 * 获取 deposited
	 */
	getDeposited(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<Date[]>;
	/**
	 * 获取 released
	 */
	getReleased(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<Date[]>;
	/**
	 * 获取 depositionAuthors
	 */
	getDepositionAuthors(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<string[]>;
	/**
	 * 获取 fundingOrganizations
	 */
	getFundingOrganizations(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<string[]>;
	/**
	 * 获取 experimentalDataSnapshot
	 */
	getExperimentalDataSnapshot(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<ExperimentalDataSnapshot[]>;
	/**
	 * 获取 classifications
	 */
	getClassifications(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<string[]>;
	/**
	 * 获取 Oligosaccharides
	 */
	getOligosaccharides(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<string[]>;

	/**
	 * 获取 modelClass
	 */
	getModelClass(tableName: PDBTableName): typeof Model;

	/**
	 * 获取 ExpressionSystem
	 */
	getExpressionSystem(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<string[]>;

	/**
	 * 获取biologicallyInterestingMolecules
	 */
	getBiologicallyInterestingMolecules(
		pdbId: string,
		schemaMap: SchemaMap,
		models: Map<PDBTableName, any[]>,
	): Promise<BiologicallyInterestingMolecules[]>;
}
