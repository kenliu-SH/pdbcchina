import { Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { BaseModel } from '../shared/base';

@Table({ tableName: 'pdbc_entry', timestamps: true })
export class PdbcEntry extends BaseModel<PdbcEntry> {
	@Column({
		comment: '结构ID',
		type: DataType.STRING(10),
		allowNull: false,
		field: 'Structure_ID',
	})
	declare structureId: string;

	@Column({
		comment: 'title',
		type: DataType.TEXT,
	})
	declare title: string;

	@Column({
		comment: 'DOI',
		type: DataType.STRING(255),
	})
	declare doi: string;

	@Column({
		comment: 'emdb',
		type: DataType.STRING(255),
	})
	declare emdb: string;

	@Column({
		comment: '分类',
		type: DataType.JSON,
	})
	declare classification: string[];

	@Column({
		comment: '学名',
		type: DataType.JSON,
	})
	declare organisms: string[];

	@Column({
		comment: '突变',
		type: DataType.STRING(255),
	})
	declare mutations: string;

	@Column({
		comment: '存储日期',
		type: DataType.DATE,
	})
	declare depositedDate: Date;

	@Column({
		comment: '发布日期',
		type: DataType.DATE,
	})
	declare releasedDate: Date;

	@Column({
		comment: '提交作者',
		type: DataType.JSON,
	})
	declare depositionAuthors: string[];

	@Column({
		comment: '资助机构',
		type: DataType.JSON,
	})
	declare fundingOrganization: string[];

	//fundingOrganizationList
	@Column({
		comment: '资助机构列表',
		type: DataType.JSON,
	})
	declare fundingOrganizationList: any;

	@Column({
		comment: '实验方法',
		type: DataType.JSON,
	})
	declare exptls: any;

	@Column({
		comment: '文献',
		type: DataType.JSON,
	})
	declare literature: any;

	@Column({
		comment: '总结构权重',
		type: DataType.FLOAT,
	})
	declare totalStructureWeight: number;

	@Column({
		comment: '原子数',
		type: DataType.INTEGER,
	})
	declare atomCount: number;

	@Column({
		comment: '氢原子数',
		type: DataType.INTEGER,
	})
	declare hydrogenAtomCount: number;

	@Column({
		comment: '模型残基数',
		type: DataType.INTEGER,
	})
	declare modelledResidueCount: number;

	@Column({
		comment: '存储残基数',
		type: DataType.INTEGER,
	})
	declare depositedResidueCount: number;

	@Column({
		comment: '独特蛋白质链',
		type: DataType.INTEGER,
	})
	declare uniqueProteinChains: number;

	// uniqueNucleicAcidChains
	@Column({
		comment: '独特核酸链',
		type: DataType.INTEGER,
	})
	declare uniqueNucleicAcidChains: number;

	// expressionSystem
	@Column({
		comment: '表达系统',
		type: DataType.JSON,
	})
	declare expressionSystem: string[];

	// revisionHistorys
	@Column({
		comment: '修订历史',
		type: DataType.JSON,
	})
	declare revisionHistorys: any;

	// oligosaccharides
	@Column({
		comment: '寡糖',
		type: DataType.JSON,
	})
	declare oligosaccharides: any;

	//emdbIds
	@Column({
		comment: 'EMDB ID(s) for Related Maps',
		type: DataType.JSON,
	})
	declare emdbIds: string;

	// GenBank
	@Column({
		comment: 'GenBank',
		type: DataType.JSON,
	})
	declare genBank: string[];

	// Norine
	@Column({
		comment: 'Norine',
		type: DataType.JSON,
	})
	declare norine: string[];

	// Number of Assemblies
	@Column({
		comment: 'Number of Assemblies',
		type: DataType.INTEGER,
	})
	declare numberOfAssemblies: number;

	//Number of Distinct Molecular Entities
	@Column({
		comment: 'Number of Distinct Molecular Entities',
		type: DataType.INTEGER,
	})
	declare numberOfDistinctMolecularEntities: number;

	//Number of Distinct Non-polymer Entities
	@Column({
		comment: 'Number of Distinct Non-polymer Entities',
		type: DataType.INTEGER,
	})
	declare numberOfDistinctNonpolymerEntities: number;

	// Number of Water Molecules per Deposited Model
	@Column({
		comment: 'Number of Water Molecules per Deposited Model',
		type: DataType.INTEGER,
	})
	declare numberOfWaterMoleculesPerDepositedModel: number;

	// Validation
	@Column({
		comment: 'Validation',
		type: DataType.JSON,
	})
	declare validation: any;

	// biologicallyInterestingMolecules
	@Column({
		comment: 'biologicallyInterestingMolecules',
		type: DataType.JSON,
	})
	declare biologicallyInterestingMolecules: any;

	// removed data
	@Column({
		comment: 'removed data',
		type: DataType.JSON,
	})
	declare removedData: any;

	// unreleased data
	@Column({
		comment: 'unreleased data',
		type: DataType.JSON,
	})
	declare unreleasedData: any;

	// polymerCountProtein
	@Column({
		comment: 'polymerCountProtein',
		type: DataType.INTEGER,
	})
	declare polymerCountProtein: number;

	//polymerCountRna
	@Column({
		comment: 'polymerCountRna',
		type: DataType.INTEGER,
	})
	declare polymerCountRna: number;

	//polymerCountDna
	@Column({
		comment: 'polymerCountDna',
		type: DataType.INTEGER,
	})
	declare polymerCountDna: number;

	//polymerCountHybrid
	@Column({
		comment: 'polymerCountHybrid',
		type: DataType.INTEGER,
	})
	declare polymerCountHybrid: number;

	//polymerInstances
	@Column({
		comment: 'polymerInstances',
		type: DataType.INTEGER,
	})
	declare polymerInstances: number;

	//nonPolymerInstances
	@Column({
		comment: 'nonPolymerInstances',
		type: DataType.INTEGER,
	})
	declare nonPolymerInstances: number;

	// polymerResiduesNumber
	@Column({
		comment: 'polymerResiduesNumber',
		type: DataType.INTEGER,
	})
	declare polymerResiduesNumber: number;

	//disulfideBondCount
	@Column({
		comment: 'disulfideBondCount',
		type: DataType.INTEGER,
	})
	declare disulfideBondCount: number;

	//hasExperimentalData
	@Column({
		comment: 'hasExperimentalData',
		type: DataType.STRING(255),
	})
	declare hasExperimentalData: string;

	//depositedModelCount
	@Column({
		comment: 'depositedModelCount',
		type: DataType.INTEGER,
	})
	declare depositedModelCount: number;

	//uniqueLigands
	@Column({
		comment: 'uniqueLigands',
		type: DataType.JSON,
	})
	declare uniqueLigands: string[];

	//macromoleculeName
	@Column({
		comment: 'macromoleculeName',
		type: DataType.JSON,
	})
	declare macromoleculeName: string[];

	//sourceOrganismTaxonomyName
	@Column({
		comment: 'sourceOrganismTaxonomyName',
		type: DataType.JSON,
	})
	declare sourceOrganismTaxonomyName: string[];

	//sourceOrganismType
	@Column({
		comment: 'sourceOrganismType',
		type: DataType.JSON,
	})
	declare sourceOrganismType: string[];

	//sourceOrganismtaxonomyID
	@Column({
		comment: 'sourceOrganismtaxonomyID',
		type: DataType.JSON,
	})
	declare sourceOrganismtaxonomyID: string[];

	@Column({
		comment: 'polymerEntitySourceCount',
		type: DataType.JSON,
	})
	declare polymerEntitySourceCount: number[];

	//enzymeClassificationNumber
	@Column({
		comment: 'enzymeClassificationNumber',
		type: DataType.JSON,
	})
	declare enzymeClassificationNumber: string[];

	//oligosaccharideEntityDescription
	@Column({
		comment: 'oligosaccharideEntityDescription',
		type: DataType.JSON,
	})
	declare oligosaccharideEntityDescription: string[];

	//PubMed Abstract
	@Column({
		comment: 'PubMed Abstract',
		type: DataType.TEXT,
	})
	declare pubMedAbstract: string;

	//Primary Citation Title
	@Column({
		comment: 'Primary Citation Title',
		type: DataType.TEXT,
	})
	declare primaryCitationTitle: string;

	//Primary Citation DOI
	@Column({
		comment: 'Primary Citation DOI',
		type: DataType.STRING,
	})
	declare primaryCitationDOI: string;

	//Primary Citation Publication Year
	@Column({
		comment: 'primaryYear',
		type: DataType.INTEGER,
	})
	declare primaryYear: number[];

	//Primary Citation Journal Name (Abbreviated)
	@Column({
		comment: 'PrimaryJournalName',
		type: DataType.JSON,
	})
	declare primaryJournalName: string[];

	//UniProt Molecule Name
	@Column({
		comment: 'UniProt Molecule Name',
		type: DataType.JSON,
	})
	declare uniProtMoleculeName: string[];

	//Polymer Entity Mutation Count
	@Column({
		comment: 'Polymer Entity Mutation Count',
		type: DataType.JSON,
	})
	declare mutationCount: number[];

	//EMDB ID(s) for Related Maps
	@Column({
		comment: 'EMDB ID(s) for Related Maps',
		type: DataType.JSON,
	})
	declare emdbId: string[];

	@Column({
		comment: 'primaryCitationORCID',
		type: DataType.JSON,
	})
	declare primaryCitationORCID: string[];
}
