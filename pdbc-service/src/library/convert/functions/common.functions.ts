import { ConfigProvider } from '@library/configs';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

import {
	Biological,
	BiologicallyInterestingMolecules,
	DepositionData,
	Details,
	ExperimentalDataSnapshot,
	FundingOrganization,
	Ligands,
	Literature,
	MacromoleculeContent,
	Macromolecules,
	ModifiedResidues,
	NucleicAcidsOrHybrid,
	Oligosaccharides,
	Proteins,
	RelatedCitationsVo,
	RevisionHistory,
	SmallMolecules,
	UniqueLigand,
	UnitCell,
	Validation,
} from '@modules/web/entry/entry.vo';
import { SchemaMap } from '../schema/schemaMap.interface';
import { Functions } from './functions.interface';
import { PDBTableName } from '@common/type';
import { Model } from 'sequelize-typescript';
import * as mmcifModels from '@model/mmcif';
import {
	atomSite,
	auditAuthor,
	cell1,
	chemComp,
	citation,
	citationAuthor,
	emExperiment,
	emSoftware,
	em_3dReconstruction,
	entity,
	entityPoly,
	entitySrcGen,
	entitySrcNat,
	entry,
	exptl,
	pdbxAuditRevisionCategory,
	pdbxAuditRevisionDetails,
	pdbxAuditRevisionGroup,
	pdbxAuditRevisionHistory,
	pdbxAuditSupport,
	pdbxChemCompDescriptor,
	pdbxDatabaseRelated,
	pdbxEntitySrcSyn,
	pdbxMolecule,
	pdbxMoleculeFeatures,
	pdbxNmrEnsemble,
	pdbxPolySeqScheme,
	pdbxStructAssembly,
	pdbxStructAssemblyAuthEvidence,
	refine,
	software,
	structConn,
	structRef,
	structRefSeqDif,
	symmetry,
} from '@model/mmcif';
import { Op } from 'sequelize';
import * as nodeNcbi from 'node-ncbi';
import axios from 'axios';
import * as xml2js from 'xml2js';

@Injectable()
export class CommonFunctionsService implements Functions {
	constructor(private readonly configs: ConfigProvider) {}
	getModelClass(tableName: PDBTableName): typeof Model {
		const modelClass = Object.values(mmcifModels).find(item => {
			return item.getTableName() === tableName;
		});
		if (!modelClass) {
			throw new Error(`Model class not found for table name ${tableName}`);
		}
		return modelClass;
	}

	async getClassifications(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<string[]> {
		let structKeywords = models.get('struct_keywords');
		let entityKeywords = models.get('entity_keywords');
		this.getDoi(pdbId, schemaMap, models);
		if (!structKeywords) {
			// @ts-ignore
			structKeywords = await this.getModelClass('struct_keywords').findAll({
				where: {
					structureId: pdbId,
				},
				raw: true,
			});
			models.set('struct_keywords', [structKeywords]);
		}
		if (!entityKeywords) {
			// @ts-ignore
			entityKeywords = await this.getModelClass('entity_keywords').findAll({
				where: {
					structureId: pdbId,
				},
				raw: true,
			});
			models.set('entity_keywords', [entityKeywords]);
		}
		if (structKeywords.length > 0) {
			if (schemaMap.classification === null || schemaMap.classification === undefined) {
				schemaMap.classification = structKeywords[0]?.pdbxKeywords?.split(',');
			}
		} else if (entityKeywords.length > 0) {
			schemaMap.classification = [entityKeywords[0]?.text];
		}
		return schemaMap.classification;
	}
	async getLiterature(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<Literature> {
		const literature = new Literature();

		let citations = modelMap.get('citation');
		if (!citations) {
			citations = await citation.findAll({
				where: {
					structureId: pdbId,
				},
				raw: true,
			});
			modelMap.set('citation', citations);
		}
		// const result = {
		// 	title: null,
		// 	authors: null,
		// 	citation: null,
		// 	uid: null,
		// 	doi: null,
		// 	similar: null,
		// 	abstract: null,
		// 	relatedCitations: null,
		// 	affiliation: null,
		// };

		if (citations[0]?.pdbxDatabaseIdPubMed) {
			const pubmed = nodeNcbi.pubmed;
			const summary = await pubmed.summary(citations[0]?.pdbxDatabaseIdPubMed);

			try {
				literature.title = summary.raw['title'];
				literature.authors = summary.raw['authors'].map(item => item.name);
				literature.citation = `${'('}${summary.raw['pubdate']}${')'} + ${summary.raw['source']}
				 ${summary.raw['volume']} ${':'} + ${summary.raw['pages']} `;
				literature.doi = ' https://doi.org/' + summary.doi;
				literature.uid = summary.raw['uid'];
				const findSimilar = await citation.findAll({
					where: {
						structureId: pdbId,
						pdbxDatabaseIdPubMed: citations[0]?.pdbxDatabaseIdPubMed,
					},
				});
				literature.similar = findSimilar.map(item => item.structureId);
				literature.abstract = await pubmed.abstract(citations[0]?.pdbxDatabaseIdPubMed);

				const findRelatedCitations = await citation.findAll({
					where: {
						structureId: pdbId,
						id: {
							[Op.not]: 'primary',
						},
					},
				});
				const relatedCitationsList = [];
				if (findRelatedCitations.length > 0) {
					for (const item of findRelatedCitations) {
						const relatedCitations = new RelatedCitationsVo();
						relatedCitations.title = item?.title;

						const findAuthors = await citationAuthor.findAll({
							where: {
								structureId: pdbId,
								citationId: item?.id,
							},
						});
						relatedCitations.authors = findAuthors.map(item => item?.name);
						relatedCitations.citation =
							'(' + item?.year + ')' + item?.journalAbbrev + item?.journalVolume + ':' + item?.pageFirst + '-' + item?.pageLast;
						relatedCitationsList.push(relatedCitations);
					}
					literature.relatedCitations = relatedCitationsList;
				}

				let affiliation = await this.getAffiliation(citations[0]?.pdbxDatabaseIdPubMed);
				// 转换成数组
				literature.affiliation = affiliation;
			} catch (e) {
				console.error(e);
			}
		}
		if (citations[0]?.pdbxDatabaseIdPubMed === null || ' ') {
			const findRelatedCitations = await citation.findOne({
				where: {
					structureId: pdbId,
					id: {
						[Op.not]: null || '',
					},
				},
			});

			literature.title = findRelatedCitations?.title;
			const findAuthors = await citationAuthor.findAll({
				where: {
					structureId: pdbId,
				},
			});
			literature.authors = findAuthors.map(item => item?.name);
			literature.citation = `${findRelatedCitations?.year ? '(' : ''}${findRelatedCitations?.year || ''}${
				findRelatedCitations?.year ? ')' : ''
			}${findRelatedCitations?.journalAbbrev || ''}${findRelatedCitations?.journalVolume || ''}${findRelatedCitations?.pageFirst ? '' : ':'}${
				findRelatedCitations?.pageFirst || ''
			}${findRelatedCitations?.pageLast ? '-' : ''}${findRelatedCitations?.pageLast || ''}`;

			literature.doi =
				`${findRelatedCitations?.pdbxDatabaseIdDoi ? 'https://doi.org/' : ''}${findRelatedCitations?.pdbxDatabaseIdDoi || ''}` || null;
		}

		return literature;
	}

	public async getAffiliation(pubmedId: any) {
		try {
			const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&retmode=xml&id=${pubmedId}`;
			const response = await axios.get(url);
			const data = response.data;

			const parser = new xml2js.Parser();
			const parsedData = await parser.parseStringPromise(data);
			const authors = parsedData.PubmedArticleSet.PubmedArticle[0].MedlineCitation[0].Article[0].AuthorList[0].Author;

			const affiliations = authors
				.filter(author => author.AffiliationInfo)
				.map(author => author.AffiliationInfo[author.AffiliationInfo.length - 1].Affiliation[0]);

			const uniqueAffiliations = [...new Set(affiliations)];
			return uniqueAffiliations[uniqueAffiliations.length - 1];
		} catch (error) {
			console.error('Error fetching data:', error);
		}
		return [];
	}

	async getMacromolecules(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<Macromolecules> {
		const macromolecules = new Macromolecules();
		macromolecules.proteins = [];
		macromolecules.nucleicAcidsOrHybrids = [];

		const [proteinsList, nucleicAcidsOrHybridsList] = await Promise.all([
			entityPoly.findAll({
				where: {
					structureId: pdbId,
					type: 'polypeptide(L)',
				},
				order: [['entityId', 'ASC']],
			}),
			entityPoly.findAll({
				where: {
					structureId: pdbId,
					type: { [Op.not]: 'polypeptide(L)' },
				},
				order: [['entityId', 'ASC']],
			}),
		]);

		proteinsList.sort((a, b) => parseInt(a.entityId) - parseInt(b.entityId));

		const proteinsPromise = proteinsList.map(async item => {
			const proteins = new Proteins();

			proteins.id = item?.entityId;

			const findMolecule = await entity.findOne({
				where: {
					structureId: pdbId,
					id: item.entityId,
				},
			});
			proteins.molecule = findMolecule?.pdbxDescription;

			const findAuth = await atomSite.findAll({
				where: {
					structureId: pdbId,
					labelEntityId: proteins?.id,
				},
				attributes: ['labelAsymId', 'authAsymId'],
				logging: true,
			});
			proteins.chains = findAuth.map(item => {
				return item?.labelAsymId;
			});
			proteins.chains = [...new Set(proteins.chains)];

			proteins.auth = findAuth?.map(item => (item?.labelAsymId !== item?.authAsymId ? item.authAsymId : ''));
			proteins.auth = [...new Set(proteins.auth)];

			const trimmedCode = item?.pdbxSeqOneLetterCodeCan?.replace(/\s/g, '');
			proteins.sequenceLength = trimmedCode?.length;

			const findUniprot = await structRef.findOne({
				where: {
					structureId: pdbId,
					entityId: item.entityId,
					dbName: 'UNP',
				},
			});
			proteins.uniprot = findUniprot?.pdbxDbAccession;

			if (findUniprot?.pdbxDbAccession) {
				proteins.uniprotOrganism = await this.getUniprotOrganism(findUniprot?.pdbxDbAccession);
			} else {
				proteins.uniprotOrganism = null;
			}

			proteins.organism = await this.getOrganism(pdbId, item.entityId);

			const details = new Details();
			const sumStructRefSeqDif = await structRefSeqDif.count({
				where: {
					structureId: pdbId,
					pdbxPdbStrandId: item.pdbxStrandId,
					details: 'engineered mutation',
				},
			});
			const chainsCount = await entityPoly.count({
				where: {
					structureId: pdbId,
					entityId: item.entityId,
				},
			});
			details.mutation = sumStructRefSeqDif / chainsCount;
			const findEntity = await entity.findOne({
				where: {
					structureId: pdbId,
					id: item.entityId,
				},
			});

			if (findUniprot?.pdbxDbAccession) {
				details.geneNames = await this.getGeneInfo(findUniprot?.pdbxDbAccession);
			} else {
				details.geneNames = null;
			}

			// details.ec = findEntity?.pdbxEc;
			proteins.details = details;

			return proteins;
		});

		const nucleicAcidsOrHybridsPromise = nucleicAcidsOrHybridsList.map(async item => {
			const nucleicAcidsOrHybrids = new NucleicAcidsOrHybrid();

			nucleicAcidsOrHybrids.id = item?.entityId;
			const findMolecule = await entity.findOne({
				where: {
					structureId: pdbId,
					id: item.entityId,
				},
			});
			nucleicAcidsOrHybrids.molecule = findMolecule?.pdbxDescription;
			nucleicAcidsOrHybrids.chains = item.pdbxStrandId.split('');

			const trimmedCode = item?.pdbxSeqOneLetterCodeCan?.replace(/\s/g, '');
			nucleicAcidsOrHybrids.Length = trimmedCode?.length;
			nucleicAcidsOrHybrids.organism = await this.getOrganism(pdbId, item.entityId);
			return nucleicAcidsOrHybrids;
		});

		const [proteins, nucleicAcidsOrHybrids] = await Promise.all([Promise.all(proteinsPromise), Promise.all(nucleicAcidsOrHybridsPromise)]);
		macromolecules.proteins.push(...proteins);
		macromolecules.nucleicAcidsOrHybrids.push(...nucleicAcidsOrHybrids);

		return macromolecules;
	}
	/**
	 * Organism(s)
	 */
	public async getOrganism(PDBId: string, entityId?: string): Promise<any> {
		const result = {
			organism: null,
		};
		const queryOptions: any = {
			where: {
				structureId: PDBId,
			},
		};

		if (entityId) {
			queryOptions.where.entityId = entityId;
		}

		const findEntitySrcGen = await entitySrcGen.findOne(queryOptions);

		const findEntitySrcNat = await entitySrcNat.findOne(queryOptions);

		const findPdbxEntitySrcSyn = await pdbxEntitySrcSyn.findOne(queryOptions);

		if (findEntitySrcGen?.pdbxGeneSrcScientificName && findEntitySrcGen?.pdbxHostOrgScientificName) {
			result.organism = findEntitySrcGen?.pdbxGeneSrcScientificName;
		}
		if (findEntitySrcNat?.pdbxOrganismScientific) {
			result.organism = findEntitySrcNat?.pdbxOrganismScientific;
		}
		if (findPdbxEntitySrcSyn?.organismScientific) {
			result.organism = findPdbxEntitySrcSyn?.organismScientific;
		}

		return result.organism;
	}

	async getGeneInfo(accession: string) {
		let geneNames = [];
		if (!accession) {
			return geneNames;
		}
		try {
			const url = `https://www.uniprot.org/uniprotkb/${accession}.json`;
			const response = await axios.get(url, {
				timeout: 1000 * 10,
			});
			const geneInfo = response.data.genes || [];
			const geneNames = geneInfo.flatMap(gene => {
				const names = [];
				Object.values(gene).forEach(fieldValue => {
					if (fieldValue && typeof fieldValue === 'object') {
						if ('value' in fieldValue) {
							names.push(fieldValue.value);
						} else {
							names.push(
								...Object.values(fieldValue)
									.map(val => val.value)
									.filter(Boolean),
							);
						}
					}
				});
				return names;
			});
			return geneNames;
		} catch (error) {
			// 处理请求错误
			console.error('Failed to get gene info from UniProt:', error);
		}
		return geneNames;
	}

	async getUniprotOrganism(accession: string) {
		let organism = null;
		try {
			const url = `https://www.uniprot.org/uniprotkb/${accession}.json`;
			const response = await axios.get(url, {
				timeout: 1000 * 10,
			});
			organism = response.data.organism?.scientificName;
			return organism;
		} catch (e) {
			console.error(e);
		}
		return organism;
	}

	async getSmallMolecules(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<SmallMolecules> {
		let smallMoleculesVOs = new SmallMolecules();
		smallMoleculesVOs.ligands = [];
		smallMoleculesVOs.modifiedResidues = [];

		const [ligandsList, modifiedResiduesList] = await Promise.all([
			chemComp.findAll({
				where: {
					structureId: pdbId,
					monNstdFlag: '' || null,
					name: { [Op.not]: 'WATER' },
				},
			}),
			chemComp.findAll({
				attributes: ['id', 'formula', 'modelErf', 'name'],
				where: {
					structureId: pdbId,
					monNstdFlag: { [Op.or]: ['N', 'n'] },
					name: { [Op.not]: 'WATER' },
				},
			}),
		]);

		const ligandPromises = ligandsList.map(async comp => {
			const ligand = new Ligands();

			ligand.id = comp.id;
			ligand.name = comp.name;
			ligand.formula = comp.formula;
			const inchiKey = await pdbxChemCompDescriptor.findOne({
				where: {
					structureId: comp.id,
					type: 'InChIKey',
				},
			});

			ligand.inchiKey = inchiKey?.descriptor;

			const findAuth = await atomSite.findAll({
				where: {
					structureId: pdbId,
					labelCompId: comp.id,
				},
			});
			ligand.chains = findAuth.map(item => {
				return item?.labelAsymId;
			});
			ligand.chains = [...new Set(ligand.chains)];

			ligand.auth = findAuth?.map(item => (item?.labelAsymId !== item?.authAsymId ? item.authAsymId : ''));
			ligand.auth = [...new Set(ligand.auth)];
			return ligand;
		});

		const modifiedResiduesPromises = modifiedResiduesList.map(async comp => {
			const modifiedResidues = new ModifiedResidues();

			modifiedResidues.id = comp.id;
			modifiedResidues.type = comp.type;
			modifiedResidues.formula = comp.formula;
			// modifiedResidues.parent = ;

			const findAuth = await atomSite.findAll({
				where: {
					structureId: pdbId,
					labelCompId: comp.id,
				},
			});
			modifiedResidues.chains = findAuth.map(item => {
				return item?.labelAsymId;
			});
			modifiedResidues.chains = [...new Set(modifiedResidues.chains)];

			modifiedResidues.auth = findAuth?.map(item => (item?.labelAsymId !== item?.authAsymId ? item.authAsymId : ''));
			modifiedResidues.auth = [...new Set(modifiedResidues.auth)];

			return modifiedResidues;
		});

		const [ligands, modifiedResidues] = await Promise.all([Promise.all(ligandPromises), Promise.all(modifiedResiduesPromises)]);

		smallMoleculesVOs.ligands.push(...ligands);
		smallMoleculesVOs.modifiedResidues.push(...modifiedResidues);

		return smallMoleculesVOs;
	}
	async getValidation(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<Validation> {
		let validation = new Validation();
		validation.softwares = [];
		const unitCells = [];
		const findCell = await cell1.findOne({
			where: {
				structureId: pdbId,
				lengthA: {
					[Op.not]: null,
				},
			},
			raw: true,
			attributes: ['lengthA', 'lengthB', 'lengthC', 'angleAlpha', 'angleBeta', 'angleGamma'],
		});
		if (findCell) {
			if (findCell.lengthA) {
				let unitCell = new UnitCell();
				unitCell.length = findCell.lengthA;
				unitCell.angle = findCell.angleAlpha;
				unitCells.push(unitCell);
			}
			if (findCell.lengthB) {
				let unitCell = new UnitCell();
				unitCell.length = findCell.lengthB;
				unitCell.angle = findCell.angleBeta;
				unitCells.push(unitCell);
			}
			if (findCell.lengthC) {
				let unitCell = new UnitCell();
				unitCell.length = findCell.lengthC;
				unitCell.angle = findCell.angleGamma;
				unitCells.push(unitCell);
			}
		}

		validation.unitCells = unitCells;
		// 软件信息
		const findEmSoftware = await emSoftware.findAll({
			where: {
				structureId: pdbId,
				name: { [Op.not]: null || '' },
			},
		});

		console.log('validation.softwares: ', validation.softwares);
		validation.softwares = findEmSoftware?.map(item => {
			return {
				task: item.category,
				softwarePackage: item.name,
				version: item.version,
				softwareName: null,
				purpose: null,
			};
		});
		if (validation?.softwares?.length < 1) {
			const softwares = await software.findAll({
				where: {
					structureId: pdbId,
				},
			});
			validation.softwares = softwares?.map(item => {
				return {
					task: null,
					softwarePackage: null,
					version: null,
					softwareName: item.name,
					purpose: item.classification,
				};
			});
		}
		schemaMap.validation = validation;
		return validation;
	}
	async getDepositionData(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<DepositionData> {
		const depositionData = new DepositionData();

		const findPdbxAuditRevisionDetails = await pdbxAuditRevisionDetails.findOne({
			where: {
				structureId: pdbId,
				type: 'Initial release',
			},
		});
		const findPdbxAuditRevisionHistory = await pdbxAuditRevisionHistory.findOne({
			where: {
				structureId: pdbId,
				ordinal: findPdbxAuditRevisionDetails?.revisionOrdinal,
			},
		});
		depositionData.releasedDate = findPdbxAuditRevisionHistory?.revisionDate;

		const auditAuthors = await auditAuthor.findAll({
			where: {
				structureId: pdbId,
			},
			attributes: ['name'],
		});
		depositionData.depositionAuthors = auditAuthors.map(item => item.name);
		// 去除空的
		depositionData.depositionAuthors = depositionData.depositionAuthors.filter(item => item !== '' && item !== null);
		schemaMap.depositionData = depositionData;
		return depositionData;
	}
	async getFundingOrganizationList(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<FundingOrganization[]> {
		let fundingOrganizationList = modelMap.get('pdbx_audit_support');
		if (!fundingOrganizationList) {
			fundingOrganizationList = await pdbxAuditSupport.findAll({
				where: {
					structureId: pdbId,
				},
			});
			modelMap.set('pdbx_audit_support', fundingOrganizationList);
		}
		const fundingOrganizationLists = [];
		fundingOrganizationList.map(item => {
			const fundingOrganization = new FundingOrganization();
			fundingOrganization.fundingOrganization = item?.fundingOrganization;
			fundingOrganization.location = item?.country;
			fundingOrganization.grantNumber = item?.grantNumber;
			fundingOrganizationLists.push(fundingOrganization);
		});
		schemaMap.fundingOrganizationList = fundingOrganizationLists;
		return schemaMap.fundingOrganizationList;
	}
	async getRevisionHistorys(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<RevisionHistory[]> {
		const revisionHistorys = [];

		const findRevisionHistory = await pdbxAuditRevisionHistory.findAll({
			where: {
				structureId: pdbId,
			},
		});
		for (const item of findRevisionHistory) {
			const revisionHistory = new RevisionHistory();
			revisionHistory.version = item.majorRevision + '.' + item.minorRevision;
			revisionHistory.revisionDate = item.revisionDate;

			const findPdbxAuditRevisionDetails = await pdbxAuditRevisionDetails.findOne({
				where: {
					structureId: pdbId,
					revisionOrdinal: item.ordinal,
				},
			});

			revisionHistory.type = findPdbxAuditRevisionDetails?.type;

			const findPdbxAuditRevisionGroup = await pdbxAuditRevisionGroup.findAll({
				where: {
					structureId: pdbId,
					revisionOrdinal: item.ordinal,
				},
			});

			revisionHistory.changes = findPdbxAuditRevisionGroup.map(item => item.group1).join(',');

			const findCategory = await pdbxAuditRevisionCategory.findAll({
				where: {
					structureId: pdbId,
					revisionOrdinal: item.ordinal,
				},
			});
			revisionHistory.category = findCategory.map(item => item.category).join(',');

			revisionHistorys.push(revisionHistory);
		}

		schemaMap.revisionHistorys = revisionHistorys;
		return schemaMap.revisionHistorys;
	}
	async getUnitCells(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<UnitCell[]> {
		const unitCells = [];
		const findCell = await cell1.findOne({
			where: {
				structureId: pdbId,
				lengthA: {
					[Op.not]: null,
				},
			},
			raw: true,
			attributes: ['lengthA', 'lengthB', 'lengthC', 'angleAlpha', 'angleBeta', 'angleGamma'],
		});
		if (findCell) {
			if (findCell.lengthA) {
				let unitCell = new UnitCell();
				unitCell.length = findCell.lengthA;
				unitCell.angle = findCell.angleAlpha;
				unitCells.push(unitCell);
			}
			if (findCell.lengthB) {
				let unitCell = new UnitCell();
				unitCell.length = findCell.lengthB;
				unitCell.angle = findCell.angleBeta;
				unitCells.push(unitCell);
			}
			if (findCell.lengthC) {
				let unitCell = new UnitCell();
				unitCell.length = findCell.lengthC;
				unitCell.angle = findCell.angleGamma;
				unitCells.push(unitCell);
			}
		}

		schemaMap.unitCells = unitCells;
		return schemaMap.unitCells;
	}
	async getMacromoleculeContent(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<MacromoleculeContent> {
		const macromoleculeContent = new MacromoleculeContent();
		let a = 0;
		let entities = await entity.findAll({
			where: {
				structureId: pdbId,
				type: { [Op.not]: 'water' },
			},
			attributes: ['formulaWeight', 'pdbxNumberOfMolecules'],
		});
		entities.map(item => {
			a = a + item.formulaWeight * item.pdbxNumberOfMolecules;
		});
		macromoleculeContent.totalStructureWeight = a / 1000;

		const maxPDBModelNum = await atomSite.max('pdbxPDBModelNum', {
			where: {
				structureId: pdbId,
			},
		});

		const atomCount = await atomSite.count({
			where: {
				structureId: pdbId,
				typeSymbol: {
					[Op.not]: 'H',
				},
			},
		});

		const normalizedAtomCount = atomCount / (maxPDBModelNum as number);

		macromoleculeContent.atomCount = normalizedAtomCount;

		const depositedResidueCount = await pdbxPolySeqScheme.count({
			where: {
				structureId: pdbId,
			},
		});
		macromoleculeContent.depositedResidueCount = depositedResidueCount;

		const modelledResidueCount = await pdbxPolySeqScheme.count({
			where: {
				structureId: pdbId,
				[Op.and]: [{ auth_seq_num: { [Op.ne]: '' } }, { pdb_mon_id: { [Op.ne]: '' } }, { auth_mon_id: { [Op.ne]: '' } }],
			},
		});

		macromoleculeContent.modelledResidueCount = modelledResidueCount;

		const UniqueProteinChains = await entityPoly.count({
			where: {
				structureId: pdbId,
				type: 'polypeptide(L)',
			},
		});

		macromoleculeContent.uniqueProteinChains = UniqueProteinChains !== 0 ? UniqueProteinChains : null;

		const findUniqueNucleicAcidChains = await entityPoly.count({
			where: {
				structureId: pdbId,
				type: { [Op.not]: 'polypeptide(L)' },
			},
		});
		macromoleculeContent.uniqueNucleicAcidChains = findUniqueNucleicAcidChains !== 0 ? findUniqueNucleicAcidChains : null;

		schemaMap.macromoleculeContent = macromoleculeContent;
		return schemaMap.macromoleculeContent;
	}
	// async getBiological(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<Biological[]> {
	// 	let biological = modelMap.get('pdbx_struct_assembly');
	// 	if (!biological) {
	// 		biological = await pdbxStructAssembly.findAll({
	// 			where: {
	// 				structureId: pdbId,
	// 			},
	// 			logging: true,
	// 			raw: true,
	// 		});
	// 		modelMap.set('pdbx_struct_assembly', [biological]);
	// 	}

	// 	const biologicalList = [];
	// 	for (const item of biological) {
	// 		const biologicals = new Biological();
	// 		biologicals.assemblyId = item?.id;
	// 		biologicals.details = `${'Biological assembly'}${' '}${item?.id}${' '}${item?.details}${item?.methodDetails ? '(' : ''}${
	// 			item?.methodDetails ? item?.methodDetails : ''
	// 		}${item?.methodDetails ? ')' : ''}`;

	// 		const findBiologicalAssemblyEvidence = await pdbxStructAssemblyAuthEvidence.findAll({
	// 			where: {
	// 				structureId: pdbId,
	// 				assemblyId: item?.id,
	// 			},
	// 		});
	// 		biologicals.biologicalAssemblyEvidence = findBiologicalAssemblyEvidence.map(item => item?.experimentalSupport).join(',') || null;
	// 		biologicalList.push(biologicals);
	// 	}

	// 	schemaMap.biological = biologicalList;

	// 	return schemaMap.biological;
	// }
	async getUniqueLigands(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<UniqueLigand[]> {
		let uniqueLigands = modelMap.get('chem_comp');
		if (!uniqueLigands) {
			uniqueLigands = await chemComp.findAll({
				attributes: ['id'],
				where: {
					structureId: pdbId,
					[Op.or]: [
						{
							monNstdClass: 'non-polymer',
						},
						{
							type: {
								[Op.or]: ['non-polymer', 'NON-POLYMER'],
							},
						},
					],
					modelErf: {
						[Op.not]: 'WATER',
					},
				},
				logging: true,
				raw: true,
			});
			modelMap.set('chem_comp', [uniqueLigands]);
		}
		const uniqueLigandsVos = [];
		for (let index = 0; index < uniqueLigands.length; index++) {
			const comp = uniqueLigands[index];
			const uniqueLigandsVo = new UniqueLigand();
			uniqueLigandsVo.id = comp.id;
			uniqueLigandsVos.push(uniqueLigandsVo);
		}
		return uniqueLigandsVos;
	}
	async getTitle(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<string> {
		return '';
	}
	async getClassification(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<string[]> {
		return [];
	}
	async getDoi(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<string> {
		return `https://doi.org/10.2210/pdb${pdbId}/pdb`;
	}
	async getEmdb(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<string> {
		let emdb = modelMap.get('pdbx_database_related');
		if (!emdb) {
			emdb = await pdbxDatabaseRelated.findAll({
				where: {
					structureId: pdbId,
					dbName: 'EMDB',
					contentType: 'associated EM volume',
				},
				logging: true,
				raw: true,
			});
			modelMap.set('pdbx_database_related', [emdb]);
		}
		schemaMap.emdb = emdb[0]?.dbId;

		return schemaMap.emdb;
	}
	async getOrganisms(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<string[]> {
		const result = {
			organism: null,
		};
		const queryOptions: any = {
			where: {
				structureId: pdbId,
			},
		};

		const findEntitySrcGen = await entitySrcGen.findOne(queryOptions);

		const findEntitySrcNat = await entitySrcNat.findOne(queryOptions);

		const findPdbxEntitySrcSyn = await pdbxEntitySrcSyn.findOne(queryOptions);

		if (findEntitySrcGen?.pdbxGeneSrcScientificName && findEntitySrcGen?.pdbxHostOrgScientificName) {
			result.organism = findEntitySrcGen?.pdbxGeneSrcScientificName;
		}
		if (findEntitySrcNat?.pdbxOrganismScientific) {
			result.organism = findEntitySrcNat?.pdbxOrganismScientific;
		}
		if (findPdbxEntitySrcSyn?.organismScientific) {
			result.organism = findPdbxEntitySrcSyn?.organismScientific;
		}
		return result.organism;
	}
	async getMutations(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<string> {
		schemaMap.mutations = 'NO';
		let structRefSeqDifs = await structRefSeqDif.findAll({
			where: {
				structureId: pdbId,
			},
			attributes: ['alignId', 'details'],
		});
		structRefSeqDifs.map(item => {
			if (item.details.indexOf('engineered mutation') != -1 || item.details.indexOf('ENGINEERED') != -1) {
				schemaMap.mutations = 'YES';
			}
		});
		return schemaMap.mutations;
	}
	async getDeposited(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<Date[]> {
		return [];
	}
	async getReleased(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<Date[]> {
		return [];
	}
	async getDepositionAuthors(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<string[]> {
		let depositionAuthors = modelMap.get('audit_author');
		if (!depositionAuthors) {
			depositionAuthors = await auditAuthor.findAll({
				where: {
					structureId: pdbId,
				},
				raw: true,
			});
			modelMap.set('audit_author', [depositionAuthors]);
		}
		schemaMap.depositionAuthors = depositionAuthors?.map(item => item?.name);
		return schemaMap.depositionAuthors;
	}
	async getFundingOrganizations(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<string[]> {
		let fundingOrganizations = modelMap.get('pdbx_audit_support');
		if (!fundingOrganizations) {
			fundingOrganizations = await pdbxAuditSupport.findAll({
				where: {
					structureId: pdbId,
				},
				raw: true,
			});
			modelMap.set('pdbx_audit_support', [fundingOrganizations]);
		}
		schemaMap.fundingOrganizations = fundingOrganizations?.map(item => item?.fundingOrganization);
		// 去重
		schemaMap.fundingOrganizations = [...new Set(schemaMap.fundingOrganizations)];
		return schemaMap.fundingOrganizations;
	}
	async getExperimentalDataSnapshot(pdbId: string, schemaMap: SchemaMap, modelMap: Map<PDBTableName, any[]>): Promise<ExperimentalDataSnapshot[]> {
		let experimentalDataSnapshot = modelMap.get('exptl');
		if (!experimentalDataSnapshot) {
			experimentalDataSnapshot = await exptl.findAll({
				where: {
					structureId: pdbId,
				},
				raw: true,
			});
			modelMap.set('exptl', [experimentalDataSnapshot]);
		}

		const experimentalDataSnapshotList = [];

		for (const item of experimentalDataSnapshot) {
			const experimentalDataSnapshot = new ExperimentalDataSnapshot();
			experimentalDataSnapshot.method = item.method;
			if (item.method === 'SOLUTION NMR' || item.method === 'SOLID-STATE NMR') {
				const findPdbxNmrEnsemble = await pdbxNmrEnsemble.findOne({
					where: { structureId: pdbId },
				});
				experimentalDataSnapshot.conformersCalculated = findPdbxNmrEnsemble?.conformersCalculatedTotalNumber;
				experimentalDataSnapshot.conformersSubmitted = findPdbxNmrEnsemble?.conformersSubmittedTotalNumber;
				experimentalDataSnapshot.selectionCriteria = findPdbxNmrEnsemble?.conformerSelectionCriteria;
			}
			if (
				item.method === 'FIBER DIFFRACTION' ||
				item.method === 'POWDER DIFFRACTION' ||
				item.method === 'X-RAY DIFFRACTION' ||
				item.method === 'SOLUTION SCATTERING' ||
				item.method === 'NEUTRON DIFFRACTION'
			) {
				const findRefine = await refine.findOne({
					where: {
						structureId: pdbId,
					},
				});
				experimentalDataSnapshot.resolution = findRefine?.lsDResHigh;
				experimentalDataSnapshot.rValueFree = findRefine?.lsRFactorRFree;
				experimentalDataSnapshot.rValueWork = findRefine?.lsRFactorRWork;
				experimentalDataSnapshot.rValueObserved = findRefine?.lsRFactorObs;

				const findSymmetry = await symmetry.findOne({
					where: {
						structureId: pdbId,
					},
				});

				experimentalDataSnapshot.spaceGroup = findSymmetry?.spaceGroupNameHM;
			}
			if (item.method === 'ELECTRON MICROSCOPY' || item.method === 'ELECTRON CRYSTALLOGRAPHY') {
				const findRefine = await em_3dReconstruction.findOne({
					where: {
						structureId: pdbId,
					},
					raw: true,
				});
				experimentalDataSnapshot.resolution = findRefine?.resolution;
				experimentalDataSnapshot.numberOfParticles = findRefine?.numParticles;

				const findEmExperiment = await emExperiment.findOne({
					where: {
						structureId: pdbId,
					},
				});
				experimentalDataSnapshot.aggregationState = findEmExperiment?.aggregationState;
				experimentalDataSnapshot.reconstructionMethod = findEmExperiment?.reconstructionMethod;
			}
			experimentalDataSnapshotList.push(experimentalDataSnapshot);
		}
		schemaMap.experimentalDataSnapshot = experimentalDataSnapshotList;
		return experimentalDataSnapshotList;
	}
	async getOligosaccharides(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<string[]> {
		let oligosaccharides = models.get('entity');
		if (!oligosaccharides) {
			oligosaccharides = await entity.findAll({
				where: {
					structureId: pdbId,
					[Op.or]: [
						{
							type: {
								[Op.or]: ['branched', 'BRANCHED'],
							},
						},
						{
							pdbxFragment: {
								[Op.or]: ['branched', 'BRANCHED'],
							},
						},
					],
				},
			});
			models.set('entry', [oligosaccharides]);
		}
		const oligosaccharidesVo = [];

		// // 创建一个数组，用于存放所有的异步操作
		let promises = oligosaccharides.map(async _entity => {
			if (!_entity) {
				return;
			}
			const oligosaccharides = new Oligosaccharides();
			let structureId = _entity.structureId;
			// 这里我们使用 Promise.all 来并行执行两个异步操作
			let [_entityResult, glycosylations] = await Promise.all([
				entity.findOne({
					where: {
						structureId: structureId,
						id: _entity.id,
					},
					attributes: ['id', 'srcMethod', 'type', 'structureId', 'pdbxFragment', 'pdbxDescription'],
					include: [
						// ...
					],
				}),
				structConn.findAll({
					where: {
						structureId: structureId,
						pdbxRole: {
							[Op.not]: null || '',
						},
					},
				}),
			]);
			if (!_entityResult) {
				return;
			}
			oligosaccharides.id = _entityResult.id;
			oligosaccharides.molecule = _entityResult.pdbxDescription;

			console.log('oligosaccharides.id: ', oligosaccharides.id);
			const findChains = await atomSite.findAll({
				where: {
					structureId: structureId,
					labelEntityId: oligosaccharides?.id,
				},
			});

			oligosaccharides.chains = findChains.map(item => item?.labelAsymId);
			oligosaccharides.chains = [...new Set(oligosaccharides.chains)];

			const auth = await atomSite.findAll({
				where: {
					structureId: pdbId,
					labelEntityId: oligosaccharides?.id,
				},
			});
			oligosaccharides.auth = auth.map(item => (item?.authAsymId !== item?.labelAsymId ? item?.authAsymId : ''));
			oligosaccharides.auth = [...new Set(oligosaccharides.auth)];
			// chains 数量
			oligosaccharides.chainLength = findChains.length;

			oligosaccharides.glycosylation = glycosylations[0]?.pdbxRole ? glycosylations[0]?.pdbxRole : 'N/A';

			oligosaccharidesVo.push(oligosaccharides);
		});

		// 等待所有的异步操作完成
		await Promise.all(promises);

		return oligosaccharidesVo;
	}
	async getExpressionSystem(pdbId: string, schemaMap: SchemaMap, models: Map<PDBTableName, any[]>): Promise<string[]> {
		const findExpressionSystem = await entitySrcGen.findAll({
			where: {
				structureId: pdbId,
			},
		});
		schemaMap.expressionSystem = findExpressionSystem.map(item => item?.pdbxHostOrgScientificName);
		// expressionSystem 去重
		schemaMap.expressionSystem = [...new Set(schemaMap.expressionSystem)];
		return schemaMap.expressionSystem;
	}
	async getBiologicallyInterestingMolecules(
		pdbId: string,
		schemaMap: SchemaMap,
		models: Map<PDBTableName, any[]>,
	): Promise<BiologicallyInterestingMolecules[]> {
		let biologicallyInterestingMoleculesVos = [];
		const mmcifEntry = await pdbxMoleculeFeatures.findAll({
			where: {
				structureId: pdbId,
			},
		});
		for (const comp of mmcifEntry) {
			const biologicallyInterestingMoleculesVo = new BiologicallyInterestingMolecules();

			const chains = await pdbxMolecule.findAll({
				where: {
					structureId: pdbId,
					prdId: comp.prdId,
				},
			});

			const entityID = await atomSite.findOne({
				where: {
					structureId: pdbId,
					labelAsymId: chains[0].asymId,
				},
			});

			biologicallyInterestingMoleculesVo.entityID = entityID?.labelEntityId;
			biologicallyInterestingMoleculesVo.id = comp.prdId;
			biologicallyInterestingMoleculesVo.name = comp.name;
			biologicallyInterestingMoleculesVo.type = comp.type;
			biologicallyInterestingMoleculesVo.class = comp.class;

			biologicallyInterestingMoleculesVo.chains = chains.map(item => item.asymId);
			console.log('biologicallyInterestingMoleculesVo.chains: ', biologicallyInterestingMoleculesVo.chains);

			const auth = await atomSite.findAll({
				where: {
					structureId: pdbId,
					labelEntityId: biologicallyInterestingMoleculesVo?.entityID,
				},
			});
			biologicallyInterestingMoleculesVo.auth = auth.map(item => (item?.authAsymId !== item?.labelAsymId ? item?.authAsymId : ''));

			biologicallyInterestingMoleculesVo.auth = [...new Set(biologicallyInterestingMoleculesVo.auth)];

			biologicallyInterestingMoleculesVos.push(biologicallyInterestingMoleculesVo);
		}
		return biologicallyInterestingMoleculesVos;
	}
}
