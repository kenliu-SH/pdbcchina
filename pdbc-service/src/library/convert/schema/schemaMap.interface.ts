import { ExperimentalDataSnapshot } from '@library/parse/entity';
import {
	Biological,
	BiologicallyInterestingMolecules,
	DepositionData,
	FundingOrganization,
	Literature,
	MacromoleculeContent,
	Macromolecules,
	Oligosaccharides,
	RevisionHistory,
	SmallMolecules,
	UniqueLigand,
	UnitCell,
	Validation,
} from '@modules/web/entry/entry.vo';

export interface SchemaMap {
	entityId: string;

	classification: string[];

	title: string;

	doi: string;

	emdb: string;

	organisms: string[];

	expressionSystem: string[];

	mutations: string;

	deposited: Date;

	released: Date;

	depositionAuthors: string[];

	fundingOrganizations: string[];

	experimentalDataSnapshot: ExperimentalDataSnapshot[];

	literature: Literature;

	macromolecules: Macromolecules;

	oligosaccharides: Oligosaccharides[];

	smallMolecules: SmallMolecules;

	biologicallyInterestingMolecules: BiologicallyInterestingMolecules[];

	validation: Validation;

	depositionData: DepositionData;

	fundingOrganizationList: FundingOrganization[];

	revisionHistorys: RevisionHistory[];

	unitCells: UnitCell[];

	macromoleculeContent: MacromoleculeContent;

	biological: Biological[];

	uniqueLigands: UniqueLigand[];
}
