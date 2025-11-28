import { SuperRedis } from '@sophons/redis';
import { Pagination } from '@common/interface';
import { RedisProvider } from '@library/redis';
import { ConfigProvider } from '@library/configs';
// import { _Entry } from "@model/entry.model";
import { HttpException, Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { _Entry } from '@model/entry.model';
import { Response } from 'express';
const glob = require('glob');
import { createReadStream, createWriteStream, existsSync, mkdirSync, statSync } from 'fs';
import { join } from 'path';
import axios from 'axios';
import path = require('path');
import { ParseService } from '@library/parse';
import {
	BIRDVo,
	Biological,
	BiologicallyInterestingMolecules,
	Biologicals,
	ChemCompVo,
	ChemicalComponentSummary,
	ChemicalComponentSummaryBIRD,
	ChemicalDetails,
	ChemicalDetailsBIRD,
	DepositionData,
	Details,
	EMSoftware,
	ExperimentalDataSnapshot,
	FundingOrganization,
	Ligands,
	Literature,
	MacromoleculeContent,
	Macromolecules,
	ModifiedResidues,
	NucleicAcidsOrHybrid,
	Oligosaccharides,
	ProteinFeatureView,
	Proteins,
	RelatedCitationsVo,
	RevisionHistory,
	SmallMolecules,
	StructureSummaryVO,
	UniqueLigand,
	Validation,
	idSequence,
	uniprotSequence,
	unmodeledSequence,
} from './entry.vo';
import {
	atomSites,
	audit,
	auditAuthor,
	cell1,
	chemComp,
	chemCompAtom,
	chemCompBond,
	citation,
	citationAuthor,
	database_2,
	diffrn,
	diffrnDetector,
	diffrnRadiation,
	diffrnSource,
	emCtfCorrection,
	emEntityAssembly,
	emEntityAssemblyNaturalsource,
	emEntityAssemblyRecombinant,
	emExperiment,
	emHelicalEntity,
	emImageRecording,
	emImaging,
	emSingleParticleEntity,
	emSoftware,
	emVitrification,
	em_3dFittingList,
	em_3dReconstruction,
	entity,
	entityKeywords,
	entityPoly,
	entitySrcGen,
	entitySrcNat,
	entry,
	exptl,
	exptlCrystal,
	exptlCrystalGrow,
	pdbxAuditRevisionCategory,
	pdbxAuditRevisionDetails,
	pdbxAuditRevisionGroup,
	pdbxAuditRevisionHistory,
	pdbxAuditSupport,
	pdbxChemCompAudit,
	pdbxChemCompDescriptor,
	pdbxChemCompIdentifier,
	pdbxDatabaseRelated,
	pdbxDatabaseStatus,
	pdbxDepositGroup,
	pdbxEntitySrcSyn,
	pdbxMolecule,
	pdbxMoleculeFeatures,
	pdbxNmrEnsemble,
	pdbxNonpolyScheme,
	pdbxPolySeqScheme,
	pdbxReferenceEntityPoly,
	pdbxReferenceEntityPolySeq,
	pdbxReferenceMolecule,
	pdbxStructAssembly,
	pdbxStructAssemblyAuthEvidence,
	pdbxStructAssemblyGen,
	pdbxStructAsymGen,
	pdbxUnobsOrZeroOccResidues,
	refine,
	refineHist,
	refineLsRestr,
	reflns,
	reflnsShell,
	software,
	struct,
	structConn,
	structKeywords,
	structRef,
	structRefSeq,
	structRefSeqDif,
	symmetry,
} from '@model/mmcif';
import {
	CrystalizationExperiments,
	CrystalProperties,
	DataAcquisition,
	DiffractionExperiment,
	ExperimentVo,
	HighestResolutionShell,
	ImageProcessing,
	ImagingExperiment,
	MapModelFittingAndRefinement,
	NonHydrogenAtomsRefinement,
	Overall,
	RadiationSource,
	Reconstruction,
	RMSDeviations,
	Software,
	SpecimenPreparation,
	Statistics,
	TemperatureFactorModeling,
	UnitCell,
} from './experiment.vo';
import { Op } from '@model/shared';
import _ = require('lodash');
import * as nodeNcbi from 'node-ncbi';
import { atomSite } from '@model/mmcif/atomSite';
import * as xml2js from 'xml2js';
import { ExperimentalMethod, PDB_STATUS } from '@common/constant';
import { ParseImplCommon } from './parse/parseImpl.common';
import { pdbxBranchScheme } from '@model/mmcif/pdbxBranchScheme';
import { PdbcAssembly, PdbcEntry, PdbcLigandEntity, PdbcModifiedResiduesEntity, PdbcPolymerEntry } from '@model/expansion';
import * as fg from 'fast-glob';
import { PdbcStructsFlag } from '@model/expansion/pdbcStructsFlag';
@Injectable()
export class _EntryService {
	constructor(
		@Inject(RedisProvider.local)
		private readonly redis: SuperRedis,
		@InjectModel(_Entry)
		private entryModel: typeof _Entry,
		@InjectModel(entry)
		private mmcifEntryModel: typeof entry,
		private readonly configs: ConfigProvider,
		private readonly parseService: ParseService,
		private readonly parseImplCommon: ParseImplCommon,
	) { }

	public async basicInfo(PDBId: string) {
		const result = await this.entryModel.findOne({
			where: {
				PDBId: PDBId,
			},
		});
		if (!result) {
			throw new HttpException(null, 400007);
		}
		return result;
	}

	public async getfile(PDBId: string, response: Response) {
		PDBId = PDBId.toLocaleLowerCase();
		PDBId = PDBId.split('.')[0];
		let path = `${this.configs.info.DataPath}/pdb/data/biounit/coordinates/divided/*/${PDBId}.pdb1.gz`;
		const files: any = await new Promise((resolve, reject) => {
			glob(path, {}, function (er, files) {
				resolve(files);
			});
		});
		if (files.length < 1) {
			throw new HttpException(null, 400008);
		}
		//  // 下载文件
		//  const rootDir = join(__dirname, "../../../../");
		// //

		//  const publicTmpPath = join(rootDir, "public/tmp");
		//  const fileName = PDBId + `.cif`;
		//  if (!existsSync(publicTmpPath)) {
		//

		//    mkdirSync(publicTmpPath);
		//  }
		//  const resp = await axios({
		//    url: `https://files.rcsb.org/download/${PDBId}.cif`,
		//    method: "GET",
		//    responseType: "stream",
		//  });

		//  const mypath = path.resolve(publicTmpPath, fileName);
		//  const writer = createWriteStream(files[0]);
		//  resp.data.pipe(writer);
		//  await new Promise((resolve, reject) => {
		//    writer.on("finish", resolve);
		//    writer.on("error", reject);
		//  });
		const writeStream = createReadStream(files[0]);
		const stats = statSync(files[0]);
		response.set({
			// 'Content-type': 'application/octet-stream', // 下载
			'Content-type': 'text/plain; charset=UTF-8',
			'Content-Disposition': 'attachment;filename=' + encodeURI(files[0]),
			'Content-Length': stats.size,
			'Content-Encoding': 'gzip',
		});
		writeStream.pipe(response);
	}

	public async supplement(PDBId: string) {
		const pdbparse = await this.parseService.parsePDB(PDBId);
		const supplement = {
			supplementByPDB: pdbparse,
		};
		return supplement;
	}

	/**
	 * 条目结构摘要
	 */
	public async structureSummary(PDBId: string, isBase = false, isHome = false) {
		const structureSummaryVO = new StructureSummaryVO();
		let fullInclude = [
			{
				model: pdbxDatabaseStatus,
				attributes: ['recvdInitialDepositionDate'],
			},
			{
				model: pdbxAuditRevisionHistory,
				attributes: ['revisionDate', 'ordinal'],
			},
			{
				model: em_3dReconstruction,
				attributes: ['resolution'],
			},
			{
				model: emExperiment,
				attributes: ['aggregationState', 'reconstructionMethod'],
			},
			{
				model: citation,
				attributes: ['title', 'year', 'pdbxDatabaseIdPubMed', 'pdbxDatabaseIdDoi', 'journalAbbrev', 'journalVolume', 'pageFirst', 'pageLast'],
			},
			{
				model: citationAuthor,
				attributes: ['name'],
			},
			{
				model: emSoftware,
				attributes: ['name', 'category', 'version'],
			},
			{
				model: pdbxAuditSupport,
				attributes: ['fundingOrganization', 'country', 'grantNumber'],
			},
			{
				model: pdbxAuditRevisionDetails,
				attributes: ['ordinal', 'type'],
			},
			{
				model: entitySrcGen,
				attributes: ['hostOrgCommonName', 'pdbxGeneSrcPlasmidName', 'pdbxGeneSrcScientificName', 'pdbxHostOrgScientificName'],
			},
		];
		let baseInclude = [
			{
				model: pdbxDatabaseStatus,
				attributes: ['recvdInitialDepositionDate'],
			},
			{
				model: pdbxAuditRevisionHistory,
				attributes: ['revisionDate', 'ordinal'],
			},
			{
				model: emExperiment,
				attributes: ['aggregationState', 'reconstructionMethod'],
			},
			{
				model: citation,
				attributes: ['title', 'year', 'pdbxDatabaseIdPubMed', 'pdbxDatabaseIdDoi'],
			},
			{
				model: citationAuthor,
				attributes: ['name'],
			},
			{
				model: pdbxAuditSupport,
				attributes: ['fundingOrganization', 'country', 'grantNumber'],
			},
			{
				model: pdbxAuditRevisionDetails,
				attributes: ['ordinal', 'type'],
			},
			{
				model: entitySrcGen,
				attributes: ['hostOrgCommonName', 'pdbxGeneSrcPlasmidName', 'pdbxGeneSrcScientificName', 'pdbxHostOrgScientificName'],
			},
		];
		const mmcifEntry = await this.mmcifEntryModel.findOne({
			where: {
				id: PDBId,
			},
			include: isBase ? baseInclude : fullInclude,
		});

		const _entityKeywords = await entityKeywords.findAll({
			where: {
				structureId: PDBId,
			},

			attributes: ['text'],
		});
		const _structKeywords = await structKeywords.findAll({
			where: {
				structureId: PDBId,
			},
			attributes: ['text', 'pdbxKeywords'],
		});

		const auditAuthors = await auditAuthor.findAll({
			where: {
				structureId: PDBId,
			},
			attributes: ['name'],
		});

		const _struct = await struct.findOne({
			where: {
				structureId: PDBId,
			},
			attributes: ['title', 'pdbxModelDetails'],
		});
		if (!mmcifEntry) {
			return structureSummaryVO;
		}
		structureSummaryVO.entityId = mmcifEntry.id;
		structureSummaryVO.title = _struct?.pdbxModelDetails || _struct?.title;
		structureSummaryVO.doi = `https://doi.org/10.2210/pdb${mmcifEntry.id}/pdb`;
		// const find = await database_2.findOne({});

		structureSummaryVO.mutations = 'NO';
		if (isHome) {
			return structureSummaryVO;
		}
		let structRefSeqDifs = await structRefSeqDif.findAll({
			where: {
				structureId: PDBId,
			},
			attributes: ['alignId', 'details'],
		});
		structRefSeqDifs.map(item => {
			if (item.details.indexOf('engineered mutation') != -1 || item.details.indexOf('ENGINEERED') != -1) {
				structureSummaryVO.mutations = 'YES';
			}
		});
		if (_structKeywords.length > 0) {
			if (structureSummaryVO.classification === null || structureSummaryVO.classification === undefined) {
				structureSummaryVO.classification = _structKeywords[0]?.pdbxKeywords?.split(',');
			}
		} else if (_entityKeywords.length > 0) {
			structureSummaryVO.classification = [_entityKeywords[0]?.text];
		}

		structureSummaryVO.organisms = await this.getOrganism(PDBId);

		structureSummaryVO.depositionAuthors = auditAuthors.map(item => item?.name);
		structureSummaryVO.depositionAuthors = structureSummaryVO.depositionAuthors.filter(item => item !== '' && item !== null);
		mmcifEntry.pdbxDatabaseStatus.map(item => {
			if (item.recvdInitialDepositionDate) {
				structureSummaryVO.deposited = item.recvdInitialDepositionDate;
			}
		});

		const findPdbxAuditSupport = await pdbxAuditSupport.findAll({
			where: {
				structureId: PDBId,
			},
		});
		structureSummaryVO.fundingOrganizations = findPdbxAuditSupport.map(item => {
			return item.fundingOrganization;
		});
		// fundingOrganizations 去重
		structureSummaryVO.fundingOrganizations = [...new Set(structureSummaryVO.fundingOrganizations)];

		structureSummaryVO.released = mmcifEntry.pdbxAuditRevisionHistorys[0]?.revisionDate;
		if (!structureSummaryVO.released) {
			const _audit = await audit.findOne({
				where: {
					structureId: PDBId,
					revisionId: {
						[Op.like]: '%initial%',
					},
				},
			});
			structureSummaryVO.released = _audit?.creationDate;
		}
		structureSummaryVO.uniqueLigands = await this.getUniqueLigands(PDBId);

		const findExptl = await exptl.findAll({
			where: {
				structureId: PDBId,
				entryId: PDBId,
			},
		});
		const experimentalDataSnapshotList = [];

		for (const item of findExptl) {
			const experimentalDataSnapshot = new ExperimentalDataSnapshot();
			experimentalDataSnapshot.method = item.method;
			if (item.method === 'SOLUTION NMR' || item.method === 'SOLID-STATE NMR') {
				const findPdbxNmrEnsemble = await pdbxNmrEnsemble.findOne({
					where: { structureId: PDBId },
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
						structureId: PDBId,
					},
				});
				experimentalDataSnapshot.resolution = findRefine?.lsDResHigh;
				experimentalDataSnapshot.rValueFree = findRefine?.lsRFactorRFree;
				experimentalDataSnapshot.rValueWork = findRefine?.lsRFactorRWork;
				experimentalDataSnapshot.rValueObserved = findRefine?.lsRFactorObs;

				const findSymmetry = await symmetry.findOne({
					where: {
						structureId: PDBId,
					},
				});

				experimentalDataSnapshot.spaceGroup = findSymmetry?.spaceGroupNameHM;
			}
			if (item.method === 'ELECTRON MICROSCOPY' || item.method === 'ELECTRON CRYSTALLOGRAPHY') {
				const findRefine = await em_3dReconstruction.findOne({
					where: {
						structureId: PDBId,
					},
					raw: true,
				});
				experimentalDataSnapshot.resolution = findRefine?.resolution;
				experimentalDataSnapshot.numberOfParticles = findRefine?.numParticles;

				const findEmExperiment = await emExperiment.findOne({
					where: {
						structureId: PDBId,
					},
				});
				experimentalDataSnapshot.aggregationState = findEmExperiment?.aggregationState;
				experimentalDataSnapshot.reconstructionMethod = findEmExperiment?.reconstructionMethod;
			}
			experimentalDataSnapshotList.push(experimentalDataSnapshot);
		}
		structureSummaryVO.experimentalDataSnapshot = experimentalDataSnapshotList;

		let entities = await entity.findAll({
			where: {
				structureId: PDBId,
				type: { [Op.not]: 'water' },
			},
			attributes: ['formulaWeight', 'pdbxNumberOfMolecules'],
		});

		const findExpressionSystem = await entitySrcGen.findAll({
			where: {
				structureId: PDBId,
			},
		});
		structureSummaryVO.expressionSystem = findExpressionSystem.map(item => item?.pdbxHostOrgScientificName);
		// expressionSystem 去重
		structureSummaryVO.expressionSystem = [...new Set(structureSummaryVO.expressionSystem)];

		const emdb = await pdbxDatabaseRelated.findOne({
			where: {
				structureId: PDBId,
				dbName: 'EMDB',
				contentType: 'associated EM volume',
			},
		});
		structureSummaryVO.emdb = emdb?.dbId;

		structureSummaryVO.macromolecules = await this.getMacromolecules(PDBId, isBase);
		structureSummaryVO.oligosaccharides = await this.getOligosaccharides(PDBId);
		if (isBase) {
			return structureSummaryVO;
		}
		let validation = new Validation();
		validation.softwares = [];
		const unitCells = [];
		const findCell = await cell1.findOne({
			where: {
				structureId: PDBId,
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
				structureId: PDBId,
				name: { [Op.not]: null || '' },
			},
		});

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
					structureId: mmcifEntry.id,
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
		structureSummaryVO.validation = validation;
		// 获取沉积信息
		const depositionData = new DepositionData();

		const findPdbxAuditRevisionDetails = await pdbxAuditRevisionDetails.findOne({
			where: {
				structureId: PDBId,
				type: 'Initial release',
			},
		});
		const findPdbxAuditRevisionHistory = await pdbxAuditRevisionHistory.findOne({
			where: {
				structureId: PDBId,
				ordinal: findPdbxAuditRevisionDetails?.revisionOrdinal,
			},
		});
		depositionData.releasedDate = findPdbxAuditRevisionHistory?.revisionDate;

		depositionData.depositionAuthors = auditAuthors.map(item => item.name);
		// 去除空的
		depositionData.depositionAuthors = depositionData.depositionAuthors.filter(item => item !== '' && item !== null);
		structureSummaryVO.depositionData = depositionData;
		//高分子内容
		const macromoleculeContent = new MacromoleculeContent();
		let a = 0;
		entities.map(item => {
			a = a + item.formulaWeight * item.pdbxNumberOfMolecules;
		});
		macromoleculeContent.totalStructureWeight = a / 1000;

		const maxPDBModelNum = await atomSite.max('pdbxPDBModelNum', {
			where: {
				structureId: PDBId,
			},
		});

		const atomCount = await atomSite.count({
			where: {
				structureId: PDBId,
				typeSymbol: {
					[Op.not]: 'H',
				},
			},
		});

		const normalizedAtomCount = atomCount / (maxPDBModelNum as number);

		macromoleculeContent.atomCount = normalizedAtomCount;

		const depositedResidueCount = await pdbxPolySeqScheme.count({
			where: {
				structureId: PDBId,
			},
		});
		macromoleculeContent.depositedResidueCount = depositedResidueCount;

		const modelledResidueCount = await pdbxPolySeqScheme.count({
			where: {
				structureId: PDBId,
				[Op.and]: [{ auth_seq_num: { [Op.ne]: '' } }, { pdb_mon_id: { [Op.ne]: '' } }, { auth_mon_id: { [Op.ne]: '' } }],
			},
		});

		macromoleculeContent.modelledResidueCount = modelledResidueCount;

		const UniqueProteinChains = await entityPoly.count({
			where: {
				structureId: PDBId,
				type: 'polypeptide(L)',
			},
		});

		macromoleculeContent.uniqueProteinChains = UniqueProteinChains !== 0 ? UniqueProteinChains : null;

		const findUniqueNucleicAcidChains = await entityPoly.count({
			where: {
				structureId: PDBId,
				type: { [Op.not]: 'polypeptide(L)' },
			},
		});
		macromoleculeContent.uniqueNucleicAcidChains = findUniqueNucleicAcidChains !== 0 ? findUniqueNucleicAcidChains : null;

		structureSummaryVO.macromoleculeContent = macromoleculeContent;

		const fundingOrganizationList = [];
		mmcifEntry.pdbxAuditSupports.map(item => {
			const fundingOrganization = new FundingOrganization();
			fundingOrganization.fundingOrganization = item?.fundingOrganization;
			fundingOrganization.location = item?.country;
			fundingOrganization.grantNumber = item?.grantNumber;
			fundingOrganizationList.push(fundingOrganization);
		});
		structureSummaryVO.fundingOrganizationList = fundingOrganizationList;

		const revisionHistorys = [];

		const findRevisionHistory = await pdbxAuditRevisionHistory.findAll({
			where: {
				structureId: PDBId,
			},
		});
		for (const item of findRevisionHistory) {
			const revisionHistory = new RevisionHistory();
			revisionHistory.version = item.majorRevision + '.' + item.minorRevision;
			revisionHistory.revisionDate = item.revisionDate;

			const findPdbxAuditRevisionDetails = await pdbxAuditRevisionDetails.findOne({
				where: {
					structureId: PDBId,
					revisionOrdinal: item.ordinal,
				},
			});

			revisionHistory.type = findPdbxAuditRevisionDetails?.type;

			const findPdbxAuditRevisionGroup = await pdbxAuditRevisionGroup.findAll({
				where: {
					structureId: PDBId,
					revisionOrdinal: item.ordinal,
				},
			});

			revisionHistory.changes = findPdbxAuditRevisionGroup.map(item => item.group1).join(',');

			const findCategory = await pdbxAuditRevisionCategory.findAll({
				where: {
					structureId: PDBId,
					revisionOrdinal: item.ordinal,
				},
			});
			revisionHistory.category = findCategory.map(item => item.category).join(',');

			revisionHistorys.push(revisionHistory);
		}

		structureSummaryVO.revisionHistorys = revisionHistorys;
		// 获取小分子信息
		// ！！！！！！根据实验方法调用不同的方法
		structureSummaryVO.smallMolecules = await this.parseImplCommon.getSmallMolecules(PDBId);

		// biologicalAssembly
		// structureSummaryVO.biological = await this.biologicalAssembly(PDBId, macromoleculeContent.uniqueProteinChains);

		structureSummaryVO.biologicallyInterestingMolecules = await this.getBiologicallyInterestingMolecules(PDBId);
		return structureSummaryVO;
	}

	/**
	 * 条目结构摘要
	 */
	public async structureSummaryV2(PDBId: string, isBase = false, isHome = false) {
		const structureSummaryVO = new StructureSummaryVO();
		const findFlag = await PdbcStructsFlag.findOne({
			where: {
				entityId: PDBId,
			},
		});
		if (!findFlag) {
			return structureSummaryVO;
		}
		let findPdbcEntry = await PdbcEntry.findOne({
			where: {
				structureId: PDBId,
			},
			attributes: [
				'structureId',
				'removedData',
				'unreleasedData',
				'title',
				'doi',
				'emdb',
				'classification',
				'organisms',
				'expressionSystem',
				'mutations',
				'depositionAuthors',
				'depositedDate',
				'releasedDate',
				'depositionAuthors',
				'fundingOrganization',
				'exptls',
				'literature',
				'fundingOrganizationList',
				'totalStructureWeight',
				'atomCount',
				'modelledResidueCount',
				'depositedResidueCount',
				'uniqueProteinChains',
				'uniqueNucleicAcidChains',
				'biologicallyInterestingMolecules',
				'revisionHistorys',
				'oligosaccharides',
				'validation',
				'uniqueLigands',
			],
		});

		const findGroupId = await pdbxDepositGroup.findOne({
			where: {
				structureId: PDBId,
			},
			attributes: ['groupId'],
		});
		if (!findPdbcEntry) {
			return structureSummaryVO;
		}
		structureSummaryVO.status = findFlag.status;
		structureSummaryVO.removedData = findPdbcEntry.removedData;
		structureSummaryVO.unreleasedData = findPdbcEntry.unreleasedData;
		structureSummaryVO.entityId = findPdbcEntry?.structureId;
		if (findFlag.status == PDB_STATUS.UNRELEASED || findFlag.status == PDB_STATUS.DELETED) {
			return structureSummaryVO;
		}
		structureSummaryVO.entityId = findPdbcEntry?.structureId;
		structureSummaryVO.title = findPdbcEntry?.title;
		structureSummaryVO.doi = findPdbcEntry?.doi;
		structureSummaryVO.groupId = findGroupId?.groupId;
		structureSummaryVO.emdb = findPdbcEntry?.emdb;
		structureSummaryVO.classification = findPdbcEntry?.classification;
		structureSummaryVO.organisms = findPdbcEntry?.organisms;
		structureSummaryVO.expressionSystem = findPdbcEntry?.expressionSystem;
		structureSummaryVO.mutations = findPdbcEntry?.mutations;
		structureSummaryVO.deposited = findPdbcEntry?.depositedDate;
		structureSummaryVO.released = findPdbcEntry?.releasedDate;
		structureSummaryVO.depositionAuthors = findPdbcEntry?.depositionAuthors;
		structureSummaryVO.fundingOrganizations = findPdbcEntry?.fundingOrganization;
		structureSummaryVO.experimentalDataSnapshot = findPdbcEntry?.exptls;
		structureSummaryVO.literature = findPdbcEntry?.literature;
		structureSummaryVO.fundingOrganizationList = findPdbcEntry?.fundingOrganizationList;
		structureSummaryVO.uniqueLigands = findPdbcEntry?.uniqueLigands;
		if (isHome) {
			return structureSummaryVO;
		}

		let findProteins = await PdbcPolymerEntry.findAll({
			where: {
				structureId: PDBId,
				type: 'polypeptide(L)',
			},
			attributes: [
				'entityId',
				'molecule',
				'chains',
				'auths',
				'sequenceLength',
				'molecularWeight',
				'uniProt',
				'organism',
				'uniprotOrganism',
				'mutation',
				'geneNames',
				'ec',
				'proteinFeatureView',
			],
		});
		const macromolecules = new Macromolecules();
		macromolecules.proteins = [];
		macromolecules.nucleicAcidsOrHybrids = [];
		for (const item of findProteins) {
			const proteins = new Proteins();
			proteins.id = item?.entityId;
			proteins.molecule = item?.molecule;
			proteins.chains = item?.chains;
			proteins.auth = item?.auths;
			proteins.sequenceLength = item?.sequenceLength;
			proteins.molecularWeight = item?.molecularWeight;
			proteins.uniprot = item?.uniProt;
			proteins.organism = item?.organism;
			proteins.uniprotOrganism = item?.uniprotOrganism;
			const details = new Details();
			details.mutation = item?.mutation;
			details.geneNames = item?.geneNames;
			details.ec = item?.ec;
			proteins.details = details;
			proteins.proteinFeatureView = item?.proteinFeatureView;
			macromolecules.proteins.push(proteins);
		}
		if (isBase) {
			return structureSummaryVO;
		}
		let findNucleicAcidsOrHybrid = await PdbcPolymerEntry.findAll({
			where: {
				structureId: PDBId,
				type: {
					[Op.and]: [{ [Op.not]: 'polypeptide(L)' }, { [Op.not]: 'Oligosaccharide' }],
				},
			},
			attributes: ['entityId', 'molecule', 'chains', 'auths', 'sequenceLength', 'organism', 'proteinFeatureView'],
		});
		let findPdbcModifiedResiduesEntity = await PdbcModifiedResiduesEntity.findAll({
			where: {
				structureId: PDBId,
			},
			attributes: ['entityId', 'tag', 'chains', 'auths', 'type', 'formula', 'parent'],
		});
		let findPdbcLigandEntity = await PdbcLigandEntity.findAll({
			where: {
				structureId: PDBId,
			},
			attributes: ['entityId', 'tag', 'chains', 'auths', 'name', 'formula', 'inchiKey'],
		});

		const macromoleculeContent = new MacromoleculeContent();
		macromoleculeContent.totalStructureWeight = findPdbcEntry?.totalStructureWeight;
		macromoleculeContent.atomCount = findPdbcEntry?.atomCount;
		macromoleculeContent.modelledResidueCount = findPdbcEntry?.modelledResidueCount;
		macromoleculeContent.depositedResidueCount = findPdbcEntry?.depositedResidueCount;
		macromoleculeContent.uniqueProteinChains = findPdbcEntry?.uniqueProteinChains;
		macromoleculeContent.uniqueNucleicAcidChains = findPdbcEntry?.uniqueNucleicAcidChains;
		structureSummaryVO.macromoleculeContent = macromoleculeContent;

		structureSummaryVO.biologicallyInterestingMolecules = findPdbcEntry?.biologicallyInterestingMolecules;

		structureSummaryVO.revisionHistorys = findPdbcEntry?.revisionHistorys;
		structureSummaryVO.oligosaccharides = findPdbcEntry?.oligosaccharides;

		const smallMolecules = new SmallMolecules();
		smallMolecules.ligands = [];
		smallMolecules.modifiedResidues = [];
		for (const item of findPdbcLigandEntity) {
			const ligands = new Ligands();
			ligands.id = item?.entityId;
			ligands.tag = item?.tag;
			ligands.chains = item?.chains;
			ligands.auth = item?.auths;
			ligands.name = item?.name;
			ligands.formula = item?.formula;
			ligands.inchiKey = item?.inchiKey;
			smallMolecules.ligands.push(ligands);
		}
		for (const item of findPdbcModifiedResiduesEntity) {
			const modifiedResidues = new ModifiedResidues();
			modifiedResidues.id = item?.entityId;
			modifiedResidues.tag = item?.tag;
			modifiedResidues.chains = item?.chains;
			modifiedResidues.auth = item?.auths;
			modifiedResidues.type = item?.type;
			modifiedResidues.formula = item?.formula;
			modifiedResidues.parent = item?.parent;
			smallMolecules.modifiedResidues.push(modifiedResidues);
		}
		structureSummaryVO.smallMolecules = smallMolecules;

		for (const item of findNucleicAcidsOrHybrid) {
			if (item.prdId) {
				continue;
			}
			const nucleicAcidsOrHybrids = new NucleicAcidsOrHybrid();
			nucleicAcidsOrHybrids.id = item?.entityId;
			nucleicAcidsOrHybrids.molecule = item?.molecule;
			nucleicAcidsOrHybrids.chains = item?.chains;
			nucleicAcidsOrHybrids.auth = item?.auths;
			nucleicAcidsOrHybrids.Length = item?.sequenceLength;
			nucleicAcidsOrHybrids.organism = item?.organism;
			nucleicAcidsOrHybrids.proteinFeatureView = item?.proteinFeatureView;
			macromolecules.nucleicAcidsOrHybrids.push(nucleicAcidsOrHybrids);
		}
		structureSummaryVO.macromolecules = macromolecules;
		if (isBase) {
			return structureSummaryVO;
		}
		const biological = await pdbxStructAssembly.findAll({
			where: {
				structureId: PDBId,
			},
			attributes: ['id', 'details', 'methodDetails'],
		});
		const _biological = new Biological();
		const biologicalList = [];
		for (const item of biological) {
			const biologicals = new Biologicals();
			biologicals.assemblyId = item?.id;
			console.log('item?.id: ', item?.id);
			biologicals.details = `${'Biological assembly'}${' '}${item?.id}${' '}${item?.details}${item?.methodDetails ? '(' : ''}${item?.methodDetails ? item?.methodDetails : ''
				}${item?.methodDetails ? ')' : ''}`;
			const findBiologicalAssemblyEvidence = await pdbxStructAssemblyAuthEvidence.findAll({
				where: {
					structureId: PDBId,
					assemblyId: item?.id,
				},
				attributes: ['experimentalSupport'],
			});
			biologicals.biologicalAssemblyEvidence = findBiologicalAssemblyEvidence.map(item => item?.experimentalSupport).join(',') || null;
			biologicalList.push(biologicals);
		}
		_biological.image = await this.get3dImageList(PDBId);
		_biological.biologicals = biologicalList;
		structureSummaryVO.biological = _biological;

		structureSummaryVO.validation = findPdbcEntry?.validation;

		return structureSummaryVO;
	}

	/**
	 * 解析biological assembly
	 */
	// public async biologicalAssembly(PDBId: string, uniqueProteinChains: number) {
	// 	const biologicalList = [];

	// 	const findPdbxStructAssembly = await pdbxStructAssembly.findAll({
	// 		where: {
	// 			structureId: PDBId,
	// 		},
	// 	});

	// 	for (const item of findPdbxStructAssembly) {
	// 		const biologicals = new Biological();
	// 		biologicals.assemblyId = item?.id;
	// 		biologicals.details = `${'Biological assembly'}${' '}${item?.id}${' '}${item?.details}${item?.methodDetails ? '(' : ''}${
	// 			item?.methodDetails ? item?.methodDetails : ''
	// 		}${item?.methodDetails ? ')' : ''}`;

	// 		const findBiologicalAssemblyEvidence = await pdbxStructAssemblyAuthEvidence.findAll({
	// 			where: {
	// 				structureId: PDBId,
	// 				assemblyId: item?.id,
	// 			},
	// 		});

	// 		biologicals.biologicalAssemblyEvidence = findBiologicalAssemblyEvidence.map(item => item?.experimentalSupport).join(',') || null;

	// 		biologicalList.push(biologicals);
	// 	}

	// 	return biologicalList;
	// }

	/**
	 * 获取大分子信息
	 */
	public async getMacromolecules(PDBId: string, isBase: boolean = true) {
		const macromoleculesVOs = new Macromolecules();
		macromoleculesVOs.proteins = [];
		macromoleculesVOs.nucleicAcidsOrHybrids = [];

		const [proteinsList, nucleicAcidsOrHybridsList] = await Promise.all([
			entityPoly.findAll({
				where: {
					structureId: PDBId,
					type: 'polypeptide(L)',
				},
				order: [['entityId', 'ASC']],
			}),
			entityPoly.findAll({
				where: {
					structureId: PDBId,
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
					structureId: PDBId,
					id: item.entityId,
				},
			});
			proteins.molecule = findMolecule?.pdbxDescription;

			const findAuth = await atomSite.findAll({
				where: {
					structureId: PDBId,
					labelEntityId: proteins?.id,
				},
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
					structureId: PDBId,
					entityId: item.entityId,
					dbName: 'UNP',
				},
			});
			proteins.uniprot = findUniprot?.pdbxDbAccession;

			proteins.organism = await this.getOrganism(PDBId, item.entityId);
			if (isBase) {
				return proteins;
			}
			proteins.uniprotOrganism = await this.getUniprotOrganism(findUniprot?.pdbxDbAccession);
			const details = new Details();
			const sumStructRefSeqDif = await structRefSeqDif.count({
				where: {
					structureId: PDBId,
					pdbxPdbStrandId: item.pdbxStrandId,
					details: 'engineered mutation',
				},
			});
			const chainsCount = await entityPoly.count({
				where: {
					structureId: PDBId,
					entityId: item.entityId,
				},
			});
			details.mutation = sumStructRefSeqDif / chainsCount;
			const findEntity = await entity.findOne({
				where: {
					structureId: PDBId,
					id: item.entityId,
				},
			});
			details.geneNames = await this.getGeneInfo(findUniprot?.pdbxDbAccession);

			// details.ec = findEntity?.pdbxEc;
			proteins.details = details;

			//Protein Feature View
			const proteinFeatureView = new ProteinFeatureView();

			const name = new idSequence();
			name.id = `${PDBId}_${item.entityId}`;
			const canEntityPoly = await entityPoly.findOne({
				where: {
					structureId: PDBId,
					entityId: item.entityId,
				},
			});
			name.sequence = canEntityPoly?.pdbxSeqOneLetterCodeCan;
			proteinFeatureView.name = name;

			const uniprot = new uniprotSequence();
			uniprot.id = findUniprot?.pdbxDbAccession;
			uniprot.sequence = findUniprot?.pdbxSeqOneLetterCode;
			proteinFeatureView.uniprot = uniprot;

			const pdbChains = [];
			const unmodeledList = await pdbxUnobsOrZeroOccResidues.findAll({
				where: {
					structureId: PDBId,
					// labelAsymId: proteins.chains,
				},
			});
			console.log('proteins.chains: ', proteins.chains);
			for (const item of unmodeledList) {
				const pdbChain = new unmodeledSequence();
				pdbChain.id = item?.labelCompId;
				console.log('pdbChain.id11111111111111: ', pdbChain.id);
				pdbChain.sequence = item?.labelSeqId;
				pdbChains.push(pdbChain);
			}
			proteinFeatureView.unmodeled = pdbChains;

			proteins.proteinFeatureView = proteinFeatureView;

			return proteins;
		});

		const nucleicAcidsOrHybridsPromise = nucleicAcidsOrHybridsList.map(async item => {
			const nucleicAcidsOrHybrids = new NucleicAcidsOrHybrid();

			nucleicAcidsOrHybrids.id = item?.entityId;
			const findMolecule = await entity.findOne({
				where: {
					structureId: PDBId,
					id: item.entityId,
				},
			});
			nucleicAcidsOrHybrids.molecule = findMolecule?.pdbxDescription;
			nucleicAcidsOrHybrids.chains = item.pdbxStrandId.split('');

			const trimmedCode = item?.pdbxSeqOneLetterCodeCan?.replace(/\s/g, '');
			nucleicAcidsOrHybrids.Length = trimmedCode?.length;
			nucleicAcidsOrHybrids.organism = await this.getOrganism(PDBId, item.entityId);
			return nucleicAcidsOrHybrids;
		});

		const [proteins, nucleicAcidsOrHybrids] = await Promise.all([Promise.all(proteinsPromise), Promise.all(nucleicAcidsOrHybridsPromise)]);

		macromoleculesVOs.proteins.push(...proteins);
		macromoleculesVOs.nucleicAcidsOrHybrids.push(...nucleicAcidsOrHybrids);

		return macromoleculesVOs;
	}

	/**
	 * Organism(s)
	 */
	public async getOrganism(PDBId: string, entityId?: string): Promise<any> {
		const result = {
			tag: null,
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
			result.tag = 'Genetically Engineered';
			result.organism = findEntitySrcGen?.pdbxGeneSrcScientificName;
		}
		if (findEntitySrcNat?.pdbxOrganismScientific) {
			result.tag = 'Natural';
			result.organism = findEntitySrcNat?.pdbxOrganismScientific;
		}
		if (findPdbxEntitySrcSyn?.organismScientific) {
			result.tag = 'Synthetic';
			result.organism = findPdbxEntitySrcSyn?.organismScientific;
		}

		return result;
	}

	/**
	 * 低聚糖信息
	 */
	public async getOligosaccharides(PDBId: string) {
		const oligosaccharidesVo = [];
		const mmcifEntry = await this.mmcifEntryModel.findOne({
			where: {
				id: PDBId,
			},
			include: [
				{
					model: entity,
					where: {
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
					required: false,
				},
			],
		});
		// 创建一个数组，用于存放所有的异步操作
		let promises = mmcifEntry.entities.map(async _entity => {
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
					structureId: PDBId,
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

	/**
	 * 生物学上有趣的分子
	 */
	public async getBiologicallyInterestingMolecules(PDBId: string) {
		let biologicallyInterestingMoleculesVos = [];
		const mmcifEntry = await pdbxMoleculeFeatures.findAll({
			where: {
				structureId: PDBId,
			},
		});

		for (const comp of mmcifEntry) {
			const biologicallyInterestingMoleculesVo = new BiologicallyInterestingMolecules();

			const chains = await pdbxMolecule.findAll({
				where: {
					structureId: PDBId,
					prdId: comp.prdId,
				},
			});

			const entityID = await atomSite.findOne({
				where: {
					structureId: PDBId,
					labelAsymId: chains[0].asymId,
				},
			});

			biologicallyInterestingMoleculesVo.entityID = entityID?.labelEntityId;
			biologicallyInterestingMoleculesVo.id = comp.prdId;
			biologicallyInterestingMoleculesVo.name = comp.name;
			biologicallyInterestingMoleculesVo.type = comp.type;
			biologicallyInterestingMoleculesVo.class = comp.class;

			biologicallyInterestingMoleculesVo.chains = chains.map(item => item.asymId);

			const auth = await atomSite.findAll({
				where: {
					structureId: PDBId,
					labelEntityId: biologicallyInterestingMoleculesVo?.entityID,
				},
			});
			biologicallyInterestingMoleculesVo.auth = auth.map(item => (item?.authAsymId !== item?.labelAsymId ? item?.authAsymId : ''));

			biologicallyInterestingMoleculesVo.auth = [...new Set(biologicallyInterestingMoleculesVo.auth)];

			biologicallyInterestingMoleculesVos.push(biologicallyInterestingMoleculesVo);
		}

		return biologicallyInterestingMoleculesVos;
	}

	/**
	 * 获取文献 Affiliation
	 */
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

	/**
	 * 获取Unique Ligands
	 */
	public async getUniqueLigands(PDBId: string) {
		const uniqueLigandsVos = [];
		const list = await chemComp.findAll({
			attributes: ['id'],
			where: {
				structureId: PDBId,
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
		});
		for (let index = 0; index < list.length; index++) {
			const comp = list[index];
			const uniqueLigandsVo = new UniqueLigand();
			uniqueLigandsVo.id = comp.id;
			uniqueLigandsVos.push(uniqueLigandsVo);
		}
		return uniqueLigandsVos;
	}

	/**
	 * 获取文献附加信息
	 */
	public async getCitationSubjoin(PDBId: string) {
		const findCitationPubMed = await citation.findOne({
			where: {
				structureId: PDBId,
				id: 'primary',
			},
		});

		const result = {
			title: null,
			authors: null,
			citation: null,
			uid: null,
			doi: null,
			similar: null,
			abstract: null,
			relatedCitations: null,
			affiliation: null,
		};

		if (findCitationPubMed?.pdbxDatabaseIdPubMed) {
			const pubmed = nodeNcbi.pubmed;
			const summary = await pubmed.summary(findCitationPubMed?.pdbxDatabaseIdPubMed);

			try {
				result.title = summary.raw['title'];
				result.authors = summary.raw['authors'].map(item => item.name);
				result.citation = `${'('}${summary.raw['pubdate']}${')'} + ${summary.raw['source']}
				 ${summary.raw['volume']} ${':'} + ${summary.raw['pages']} `;
				result.doi = ' https://doi.org/' + summary.doi;
				result.uid = summary.raw['uid'];
				const findSimilar = await citation.findAll({
					where: {
						structureId: PDBId,
						pdbxDatabaseIdPubMed: findCitationPubMed?.pdbxDatabaseIdPubMed,
					},
				});
				result.similar = findSimilar.map(item => item.structureId);
				result.abstract = await pubmed.abstract(findCitationPubMed?.pdbxDatabaseIdPubMed);

				const findRelatedCitations = await citation.findAll({
					where: {
						structureId: PDBId,
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
								structureId: PDBId,
								citationId: item?.id,
							},
						});
						relatedCitations.authors = findAuthors.map(item => item?.name);
						relatedCitations.citation =
							'(' + item?.year + ')' + item?.journalAbbrev + item?.journalVolume + ':' + item?.pageFirst + item?.pageLast
								? '-'
								: '' + item?.pageLast;
						relatedCitationsList.push(relatedCitations);
					}
					result.relatedCitations = relatedCitationsList;
				}

				let affiliation = await this.getAffiliation(findCitationPubMed?.pdbxDatabaseIdPubMed);
				// 转换成数组
				result.affiliation = affiliation;
			} catch (e) {
				console.error(e);
			}
			return result;
		}
		if (findCitationPubMed?.pdbxDatabaseIdPubMed === null || ' ') {
			const findRelatedCitations = await citation.findOne({
				where: {
					structureId: PDBId,
					id: {
						[Op.not]: null || '',
					},
				},
			});

			result.title = findRelatedCitations?.title;
			const findAuthors = await citationAuthor.findAll({
				where: {
					structureId: PDBId,
					// citationId: findRelatedCitations?.id,
				},
			});
			result.authors = findAuthors.map(item => item?.name);
			result.citation = `${findRelatedCitations?.year ? '(' : ''}${findRelatedCitations?.year || ''}${findRelatedCitations?.year ? ')' : ''}${findRelatedCitations?.journalAbbrev || ''
				}${findRelatedCitations?.journalVolume || ''}${findRelatedCitations?.pageFirst ? '' : ':'}${findRelatedCitations?.pageFirst || ''}${findRelatedCitations?.pageLast ? '-' : ''
				}${findRelatedCitations?.pageLast || ''}`;

			result.doi =
				`${findRelatedCitations?.pdbxDatabaseIdDoi ? 'https://doi.org/' : ''}${findRelatedCitations?.pdbxDatabaseIdDoi || ''}` || null;

			return result;
		}
	}

	private readonly baseUrl = 'https://www.uniprot.org';

	async getGeneInfo(accession: string) {
		let geneNames = [];
		if (!accession) {
			return geneNames;
		}
		try {
			const url = `${this.baseUrl}/uniprotkb/${accession}.json`;
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
		if (!accession) {
			return null;
		}
		const url = `${this.baseUrl}/uniprotkb/${accession}.json`;
		const response = await axios.get(url, {
			timeout: 1000 * 10,
		});
		const organism = response.data.organism?.scientificName;
		return organism;
	}

	//getCcd
	async getCcd(compID: string) {
		const chemComps = new ChemCompVo();
		const findChemComp = await chemComp.findOne({
			where: {
				structureId: compID,
			},
		});
		chemComps.compId = compID;
		chemComps.name = findChemComp?.name || null;
		const chemicalComponentSummary = new ChemicalComponentSummary();
		chemicalComponentSummary.name = findChemComp?.name;
		chemicalComponentSummary.synonyms = findChemComp?.pdbxSynonyms;
		// chemicalComponentSummary.identifiers =
		chemicalComponentSummary.formula = findChemComp?.formula;
		chemicalComponentSummary.molecularWeight = findChemComp?.formulaWeight;
		chemicalComponentSummary.type = findChemComp?.type;

		const findCreateDate = await pdbxChemCompAudit.findOne({
			where: {
				structureId: compID,
				actionType: 'Create component',
			},
		});
		chemicalComponentSummary.createDate = findCreateDate?.date;

		const findReleaseDate = await pdbxChemCompAudit.findOne({
			where: {
				structureId: compID,
				actionType: 'Initial release',
			},
		});
		chemicalComponentSummary.releaseDate = findReleaseDate?.date || null;

		const findIsomericSMILES = await pdbxChemCompDescriptor.findOne({
			where: {
				structureId: compID,
				type: 'SMILES_CANONICAL',
				program: 'OpenEye OEToolkits',
			},
		});
		chemicalComponentSummary.isomericSMILES = findIsomericSMILES?.descriptor;

		const findInChi = await pdbxChemCompDescriptor.findOne({
			where: {
				structureId: compID,
				type: 'InChI',
			},
		});
		chemicalComponentSummary.inChI = findInChi?.descriptor;

		const findInChIKey = await pdbxChemCompDescriptor.findOne({
			where: {
				structureId: compID,
				type: 'InChIKey',
			},
		});
		chemicalComponentSummary.inChIKey = findInChIKey?.descriptor;
		chemComps.chemicalComponentSummary = chemicalComponentSummary;

		const chemicalDetails = new ChemicalDetails();
		chemicalDetails.formalCharge = findChemComp?.pdbxFormalCharge;
		const atomCount = await chemCompAtom.count({
			where: {
				structureId: compID,
			},
		});
		chemicalDetails.atomCount = atomCount;

		const heavyAtomCount = await chemCompAtom.count({
			where: {
				structureId: compID,
				[Op.not]: {
					typeSymbol: 'H' || 'h',
				},
			},
		});
		chemicalDetails.NonHydrogenAtomCount = heavyAtomCount;

		const chiralAtomCount = await chemCompAtom.count({
			where: {
				structureId: compID,
				[Op.not]: {
					pdbxStereoConfig: 'N' || 'n',
				},
			},
		});
		chemicalDetails.chiralAtomCount = chiralAtomCount;

		const bondCount = await chemCompBond.count({
			where: {
				structureId: compID,
			},
		});
		chemicalDetails.bondCount = bondCount;

		const aromaticBondCount = await chemCompBond.count({
			where: {
				structureId: compID,
				pdbxAromaticFlag: 'Y' || 'y',
			},
		});
		chemicalDetails.aromaticBondCount = aromaticBondCount;

		chemComps.chemicalDetails = chemicalDetails;

		return chemComps;
	}

	//getBird
	async getBird(prdID: string) {
		const bird = new BIRDVo();
		const findpdbxReferenceMolecule = await pdbxReferenceMolecule.findOne({
			where: {
				prdId: prdID,
			},
		});
		bird.prdId = prdID;
		bird.name = findpdbxReferenceMolecule?.name;

		const chemicalComponentSummary = new ChemicalComponentSummaryBIRD();
		chemicalComponentSummary.name = findpdbxReferenceMolecule?.name;
		const findPdbxChemCompIdentifier = await pdbxChemCompIdentifier.findOne({
			where: {
				compId: prdID,
				[Op.and]: [{ type: 'SYSTEMATIC NAME' }, { program: 'OpenEye OEToolkits' }],
			},
		});
		chemicalComponentSummary.identifiers = findPdbxChemCompIdentifier?.identifier;
		chemicalComponentSummary.formula = findpdbxReferenceMolecule?.formula;
		chemicalComponentSummary.molecularWeight = findpdbxReferenceMolecule?.formulaWeight;
		const findChemComp = await chemComp.findOne({
			where: {
				id: prdID,
			},
		});
		chemicalComponentSummary.type = findChemComp?.type;
		const findisomericSMILES = await pdbxChemCompDescriptor.findOne({
			where: {
				compId: prdID,
				type: 'SMILES_CANONICAL',
				program: 'OpenEye OEToolkits',
			},
		});
		chemicalComponentSummary.isomericSMILES = findisomericSMILES?.descriptor;
		const findInChi = await pdbxChemCompDescriptor.findOne({
			where: {
				compId: prdID,
				type: 'InChI',
			},
		});
		chemicalComponentSummary.inChI = findInChi?.descriptor;

		const findInChIKey = await pdbxChemCompDescriptor.findOne({
			where: {
				compId: prdID,
				type: 'InChIKey',
			},
		});
		chemicalComponentSummary.inChIKey = findInChIKey?.descriptor;

		const findComposition = await pdbxReferenceEntityPolySeq.findAll({
			where: {
				structureId: prdID,
			},
		});
		chemicalComponentSummary.composition = findComposition.map(item => item?.monId);
		chemicalComponentSummary.BIRDclass = findpdbxReferenceMolecule?.class;
		chemicalComponentSummary.representedAs = findpdbxReferenceMolecule?.representAs;
		chemicalComponentSummary.compoundDetails = findpdbxReferenceMolecule?.compoundDetails || 'n/a';
		chemicalComponentSummary.description = findpdbxReferenceMolecule?.description;
		bird.chemicalComponentSummary = chemicalComponentSummary;

		const chemicalDetails = new ChemicalDetailsBIRD();
		chemicalDetails.formalCharge = findChemComp?.pdbxFormalCharge;
		const atomCount = await chemCompAtom.count({
			where: {
				compId: prdID,
			},
		});
		chemicalDetails.atomCount = atomCount;

		const heavyAtomCount = await chemCompAtom.count({
			where: {
				compId: prdID,
				[Op.not]: {
					typeSymbol: 'H' || 'h',
				},
			},
		});
		chemicalDetails.NonHydrogenAtomCount = heavyAtomCount;

		const chiralAtomCount = await chemCompAtom.count({
			where: {
				compId: prdID,
				[Op.not]: {
					pdbxStereoConfig: 'N' || 'n',
				},
			},
		});
		chemicalDetails.chiralAtomCount = chiralAtomCount;

		const bondCount = await chemCompBond.count({
			where: {
				compId: prdID,
			},
		});
		chemicalDetails.bondCount = bondCount;

		const aromaticBondCount = await chemCompBond.count({
			where: {
				compId: prdID,
				pdbxAromaticFlag: 'Y' || 'y',
			},
		});
		chemicalDetails.aromaticBondCount = aromaticBondCount;

		bird.chemicalDetails = chemicalDetails;

		return bird;
	}

	public async get3dImageList(id: string) {
		const { DataPath } = this.configs.info;
		const pdbId = id.toLowerCase();
		const filePath = `${DataPath}/images/snapshot/${pdbId}`;
		const files = await fg(`${filePath}/*.png`, {
			stats: false,
		});
		let fileNames = files.map(file => {
			return file.split('/').pop();
		});
		let result = {
			assemblys: [],
			unit: '',
		};
		if (fileNames && fileNames.length > 0) {
			fileNames.map(file => {
				if (file.indexOf('assembly') != -1) {
					result.assemblys.push(file);
				} else {
					result.unit = file;
				}
			});
		}
		return result;
	}
}
