import { ApiProperty } from '@nestjs/swagger';

export class ExperimentalDataSnapshot {
	@ApiProperty({ description: 'method' })
	declare method?: string;
	@ApiProperty({ description: 'resolution' })
	declare resolution?: number;
	@ApiProperty({ description: 'aggregationState' })
	declare aggregationState?: string;
	@ApiProperty({ description: 'reconstruction' })
	declare reconstruction?: string;
	@ApiProperty({ description: 'Reconstruction Method' })
	declare reconstructionMethod?: string;
	// R-Value Free
	@ApiProperty({ description: 'R-Value Free' })
	declare rValueFree?: number;
	// R-Value Work
	@ApiProperty({ description: 'R-Value Work' })
	declare rValueWork?: number;
	// R-Value Observed
	@ApiProperty({ description: 'R-Value Observed' })
	declare rValueObserved?: number;
	//Conformers Calculated
	@ApiProperty({ description: 'Conformers Calculated' })
	declare conformersCalculated?: number;
	// Conformers Submitted
	@ApiProperty({ description: 'Conformers Submitted' })
	declare conformersSubmitted?: number;
	//Selection Criteria
	@ApiProperty({ description: 'Selection Criteria' })
	declare selectionCriteria?: string;

	declare numberOfParticles?: number;

	declare spaceGroup?: string;
}

export class FundingOrganization {
	// funding_organization
	@ApiProperty({ description: 'funding_organization' })
	fundingOrganization: string;
	// Location
	@ApiProperty({ description: 'Location' })
	location: string;

	// Grant Number
	@ApiProperty({ description: 'Grant Number' })
	grantNumber: string;
}

export class RevisionHistory {
	// version
	@ApiProperty({ description: 'version' })
	version: string;
	// date
	@ApiProperty({ description: 'date' })
	revisionDate: Date;
	// type
	@ApiProperty({ description: 'type' })
	type: string;
	// Changes
	@ApiProperty({ description: 'Changes' })
	changes: string;
	//Category
	@ApiProperty({ description: 'Category' })
	category: string;
}

export class Software {
	//Software Name
	@ApiProperty({ description: 'Software Name' })
	softwareName: string;

	//Purpose
	@ApiProperty({ description: 'Purpose' })
	purpose: string;
}

export class EMSoftware {
	task: string;
	softwarePackage: string;
	version: string;
}

export class NMRSoftware {
	//ordinal
	@ApiProperty({ description: 'ordinal' })
	ordinal: number;

	//Classification
	@ApiProperty({ description: 'Classification' })
	classification: string;

	//Version
	@ApiProperty({ description: 'Version' })
	version: string;

	//Software Name
	@ApiProperty({ description: 'Software Name' })
	softwareName: string;

	//Author
	@ApiProperty({ description: 'Author' })
	author: string;
}

export class DepositionData {
	// Released Date
	@ApiProperty({ description: 'Released Date' })
	releasedDate: Date;

	// Deposition Author
	@ApiProperty({ description: 'Deposition Author' })
	depositionAuthors: string[];
}

export class UnitCell {
	// Length ( Å )
	@ApiProperty({ description: 'Length ( Å )' })
	length: number;
	// Angle ( ° )
	@ApiProperty({ description: 'Angle ( ° )' })
	angle: number;
}

export class Validation {
	@ApiProperty({ description: 'softwares', type: [Software] })
	softwares: Software[];

	@ApiProperty({ description: 'EMSoftwares', type: [EMSoftware] })
	emSoftwares: EMSoftware[];
	// spaceGroup
	@ApiProperty({ description: 'spaceGroup' })
	spaceGroup: string;
	// unitCells
	@ApiProperty({ description: 'unitCells', type: [UnitCell] })
	unitCells: UnitCell[];
}

export class Details {
	// mutation
	@ApiProperty({ description: 'mutation' })
	mutation: number;
	// Gene Name
	@ApiProperty({ description: 'Gene Name' })
	geneNames: string[];
	// EC
	@ApiProperty({ description: 'EC' })
	ec: string;
}

export class idSequence {
	id: string;
	sequence: string;
}

export class uniprotSequence {
	id: string;
	sequence: string;
}

export class unmodeledSequence {
	id: string;
	sequence: number;
}

//Protein Feature View
export class ProteinFeatureView {
	name: idSequence;
	uniprot: uniprotSequence;
	unmodeled: unmodeledSequence[];
}

export class Proteins {
	// id
	@ApiProperty({ description: 'id' })
	id: string;
	// Molecule
	@ApiProperty({ description: 'Molecule' })
	molecule: string;
	// Chains
	@ApiProperty({ description: 'Chains' })
	chains: string[];

	auth: string[];
	// Sequence Length
	@ApiProperty({ description: 'Sequence Length' })
	sequenceLength: number;

	molecularWeight: number;
	// Organism
	@ApiProperty({ description: 'Organism' })
	organism: string[];
	// Details
	@ApiProperty({ description: 'Details' })
	details: Details;
	// UniProt
	@ApiProperty({ description: 'UniProt' })
	uniprot: string;

	uniprotOrganism: string;

	// Protein Feature View
	proteinFeatureView: ProteinFeatureView;

	// Sequence Clusters
	@ApiProperty({ description: 'Sequence Clusters' })
	sequenceClusters: string;

	// UniProt Group
	@ApiProperty({ description: 'UniProt Group' })
	uniprotGroup: string[];

	// type
	@ApiProperty({ description: 'type' })
	type: string;
}

export class NucleicAcidsOrHybrid {
	id: string;
	molecule: string;
	chains: string[];
	auth: string[];
	Length: number;
	organism: string[];
	type: string;

	proteinFeatureView: ProteinFeatureView;
}

export class Macromolecules {
	@ApiProperty({ type: [Proteins] })
	proteins: Proteins[];

	@ApiProperty({ type: [NucleicAcidsOrHybrid] })
	nucleicAcidsOrHybrids: NucleicAcidsOrHybrid[];
}

export class Oligosaccharides {
	// id
	@ApiProperty({ description: 'id' })
	id: string;
	// Molecule
	@ApiProperty({ description: 'Molecule' })
	molecule: string;
	// Chains
	@ApiProperty({ description: 'Chains' })
	chains: string[];

	auth: string[];
	// chain Length
	@ApiProperty({ description: 'Sequence Length' })
	chainLength: number;
	// Glycosylation
	@ApiProperty({ description: 'Glycosylation' })
	glycosylation?: string;
	// GlyTouCan
	@ApiProperty({ description: 'GlyTouCan' })
	glyTouCan: string;
	// GlyCosmos
	@ApiProperty({ description: 'GlyCosmos' })
	glyCosmos: string;
	// GlyGen
	@ApiProperty({ description: 'GlyGen' })
	glyGen: string;
}

export class Ligands {
	// id
	@ApiProperty({ description: 'id' })
	id: string;

	tag: string;

	// Chains
	@ApiProperty({ description: 'Chains' })
	chains: string[];

	auth: string[];
	// Name
	@ApiProperty({ description: 'Name' })
	name: string;
	// Formula
	@ApiProperty({ description: 'Formula' })
	formula: string;

	// InChI Key
	@ApiProperty({ description: 'InChI Key' })
	inchiKey: string;

	// type
	@ApiProperty({ description: 'type' })
	type: string;
}

//Modified Residues
export class ModifiedResidues {
	// id
	@ApiProperty({ description: 'id' })
	id: string;

	tag: string;

	// chains
	@ApiProperty({ description: 'chains' })
	chains: string[];

	auth: string[];

	// type
	@ApiProperty({ description: 'type' })
	type: string;

	// formula
	@ApiProperty({ description: 'formula' })
	formula: string;

	//Parent
	@ApiProperty({ description: 'Parent' })
	parent: string;
}

export class SmallMolecules {
	//Ligands
	@ApiProperty({ description: 'Ligands', type: [Ligands] })
	ligands: Ligands[];

	//ModifiedResidues
	@ApiProperty({ description: 'ModifiedResidues', type: [ModifiedResidues] })
	modifiedResidues: ModifiedResidues[];
}

//Biologically Interesting Molecules
export class BiologicallyInterestingMolecules {
	@ApiProperty({ description: 'Entity ID' })
	entityID?: number;

	@ApiProperty({ description: ' ID' })
	id: string;

	// Chains
	@ApiProperty({ description: 'Chains' })
	chains: string[];

	// auth
	@ApiProperty({ description: 'auth' })
	auth: string[];

	@ApiProperty({ description: 'Name' })
	name: string;

	@ApiProperty({ description: 'Type' })
	type: string;

	@ApiProperty({ description: 'Class' })
	class: string;
}

export class Literature {
	@ApiProperty({ description: '标题' })
	title: string;
	@ApiProperty({ description: '引用作者名称' })
	authors: string[];
	@ApiProperty({ description: 'citation' })
	citation: string;
	// doi
	@ApiProperty({ description: 'doi' })
	doi: string;
	// PubMed
	@ApiProperty({ description: 'PubMed' })
	declare uid?: number;

	similar: string[];
	// 摘要
	@ApiProperty({ description: '摘要' })
	abstract: string;

	relatedCitations: RelatedCitationsVo[];

	@ApiProperty({ description: 'Primary Citation of Related Structures' })
	primaryCitationofRelatedStructures: string[];
	// 文献的机构归属信息
	@ApiProperty({ description: '文献的机构归属信息' })
	affiliation: any;
}

//Macromolecule Content
export class MacromoleculeContent {
	@ApiProperty({ description: 'Total Structure Weight' })
	totalStructureWeight: number;
	@ApiProperty({ description: 'Atom Count' })
	atomCount: number;
	@ApiProperty({ description: 'Modelled Residue Count' })
	modelledResidueCount: number;
	@ApiProperty({ description: 'TDeposited Residue Count' })
	depositedResidueCount: number;
	@ApiProperty({ description: 'Unique protein chains' })
	uniqueProteinChains: number;
	uniqueNucleicAcidChains: number;
}

export class Biologicals {
	assemblyId: string;

	// image: any;

	// Global Symmetry
	@ApiProperty({ description: 'Global Symmetry' })
	globalSymmetry: string;

	// Global Stoichiometry
	@ApiProperty({ description: 'Global Stoichiometry' })
	globalStoichiometry: string;

	details: string;

	// Biological Assembly Evidence
	@ApiProperty({ description: 'Biological Assembly Evidence' })
	biologicalAssemblyEvidence: string;
}

export class Biological {
	biologicals: Biologicals[];
	image: any;
}

export class UniqueLigand {
	// id
	@ApiProperty({ description: 'id' })
	id: string;
}

export class StructureSummaryVO {
	@ApiProperty({ description: 'entityId' })
	entityId: string;

	// 状态
	@ApiProperty({ description: '状态' })
	status: string;

	// removedData
	@ApiProperty({ description: 'removedData' })
	removedData: object;

	// unreleasedData
	@ApiProperty({ description: 'unreleasedData' })
	declare unreleasedData: object;

	//group_id
	@ApiProperty({ description: 'group_id' })
	groupId: string;

	// 分类
	@ApiProperty({ description: '分类' })
	classification: string[];
	// title
	@ApiProperty({ description: 'title' })
	title: string;
	// dio
	@ApiProperty({ description: 'doi' })
	doi: string;
	// EMDB
	@ApiProperty({ description: 'EMDB' })
	emdb: string;
	// Organism
	@ApiProperty({ description: 'Organisms' })
	organisms: string[];

	// Expression System
	@ApiProperty({ description: 'Expression System' })
	expressionSystem: string[];

	// Mutations
	@ApiProperty({ description: 'Mutations' })
	mutations: string;

	// Deposited
	@ApiProperty({ description: '存储时间' })
	deposited: Date;
	// Released
	@ApiProperty({ description: '发布时间' })
	released: Date;
	//Deposition Author(s)
	@ApiProperty({ description: '作者' })
	depositionAuthors: string[];
	// Funding Organization(s):
	@ApiProperty({ description: '资助机构' })
	fundingOrganizations: string[];

	@ApiProperty({
		description: 'experimentalDataSnapshot',
		type: [ExperimentalDataSnapshot],
	})
	experimentalDataSnapshot: ExperimentalDataSnapshot[];

	@ApiProperty({
		description: 'literature',
		type: Literature,
	})
	literature: Literature;

	@ApiProperty({
		description: 'macromolecules',
		type: Macromolecules,
	})
	macromolecules: Macromolecules;

	@ApiProperty({
		description: 'Oligosaccharides',
		type: [Oligosaccharides],
	})
	oligosaccharides: Oligosaccharides[];

	// smallMolecules
	@ApiProperty({
		description: 'smallMolecules',
		type: SmallMolecules,
	})
	smallMolecules: SmallMolecules;

	@ApiProperty({
		description: 'BiologicallyInterestingMolecules',
		type: [BiologicallyInterestingMolecules],
	})
	biologicallyInterestingMolecules: BiologicallyInterestingMolecules[];

	@ApiProperty({
		description: 'validation',
		type: Validation,
	})
	validation: Validation;

	// DepositionData
	@ApiProperty({
		description: 'depositionData',
		type: DepositionData,
	})
	depositionData: DepositionData;

	// FundingOrganization
	@ApiProperty({
		description: 'fundingOrganizations',
		type: [FundingOrganization],
	})
	fundingOrganizationList: FundingOrganization[];

	// RevisionHistory
	@ApiProperty({
		description: 'revisionHistory',
		type: [RevisionHistory],
	})
	revisionHistorys: RevisionHistory[];

	// unitCells
	@ApiProperty({ description: 'unitCells', type: [UnitCell] })
	unitCells: UnitCell[];

	@ApiProperty({
		description: 'MacromoleculeContent',
		type: MacromoleculeContent,
	})
	macromoleculeContent: MacromoleculeContent;

	@ApiProperty({
		description: 'Biological',
		type: Biological,
	})
	biological: Biological;

	// UniqueLigand
	@ApiProperty({ description: 'UniqueLigand' })
	uniqueLigands: string[];
}

export class RelatedCitationsVo {
	@ApiProperty({ description: 'title' })
	title: string;
	@ApiProperty({ description: 'authors' })
	authors: string[];
	@ApiProperty({ description: 'citation' })
	citation: string;
}

export class ChemicalComponentSummary {
	name: string;
	synonyms: string;
	// identifiers: string;
	formula: string;
	molecularWeight: number;
	type: string;
	createDate: Date;
	releaseDate: Date;
	isomericSMILES: string;
	inChI: string;
	inChIKey: string;
}

export class ChemicalDetails {
	formalCharge: number;
	atomCount: number;
	NonHydrogenAtomCount: number;
	chiralAtomCount: number;
	bondCount: number;
	aromaticBondCount: number;
}

export class ChemCompVo {
	compId: string;
	name: string;
	chemicalComponentSummary: ChemicalComponentSummary;
	chemicalDetails: ChemicalDetails;
}

export class ChemicalComponentSummaryBIRD {
	name: string;
	identifiers: string;
	formula: string;
	molecularWeight: number;
	type: string;
	isomericSMILES: string;
	inChI: string;
	inChIKey: string;
	composition: string[];
	BIRDclass: string;
	representedAs: string;
	compoundDetails: string;
	description: string;
}

export class ChemicalDetailsBIRD {
	formalCharge: number;
	atomCount: number;
	NonHydrogenAtomCount: number;
	chiralAtomCount: number;
	bondCount: number;
	aromaticBondCount: number;
}

export class BIRDVo {
	prdId: string;
	name: string;
	chemicalComponentSummary: ChemicalComponentSummaryBIRD;
	chemicalDetails: ChemicalDetailsBIRD;
}
