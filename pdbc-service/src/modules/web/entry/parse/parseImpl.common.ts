import { Injectable } from '@nestjs/common';
import { IWebEntryParse } from './parse.interface';
import {
	AdditionalNMRExperimentalInformation,
	CrystalProperties,
	CrystalizationExperiments,
	DataAcquisition,
	DiffractionExperiment,
	EMSoftware,
	ExperimentVo,
	HighestResolutionShell,
	ImageProcessing,
	ImagingExperiment,
	MapModelFittingAndRefinement,
	NMREnsembleInformation,
	NMRExperiment,
	NMRRefinement,
	NMRSoftware,
	NMRSpectrometerInformation,
	NonHydrogenAtomsRefinement,
	Overall,
	RMSDeviations,
	RadiationSource,
	Reconstruction,
	Software,
	SolutionScatteringDataAcquistion,
	SolutionScatteringDataAnalysisAndModelFitting,
	SpecimenPreparation,
	Statistics,
	TemperatureFactorModeling,
	UnitCell,
} from '../experiment.vo';
import {
	atomSite,
	audit,
	auditAuthor,
	cell1,
	chemComp,
	citation,
	citationAuthor,
	database_2,
	diffrn,
	diffrnDetector,
	diffrnRadiation,
	diffrnSource,
	emCtfCorrection,
	emEmbedding,
	emEntityAssembly,
	emEntityAssemblyNaturalsource,
	emEntityAssemblyRecombinant,
	emExperiment,
	emHelicalEntity,
	emImageRecording,
	emImaging,
	emParticleSelection,
	emSingleParticleEntity,
	emSoftware,
	emVitrification,
	em_3dCrystalEntity,
	em_3dFitting,
	em_3dReconstruction,
	entity,
	entityPoly,
	entitySrcGen,
	entitySrcNat,
	entry,
	exptl,
	exptlCrystal,
	exptlCrystalGrow,
	pdbxAuditRevisionDetails,
	pdbxAuditRevisionHistory,
	pdbxAuditSupport,
	pdbxChemCompDescriptor,
	pdbxDatabaseStatus,
	pdbxNmrEnsemble,
	pdbxNmrExptl,
	pdbxNmrExptlSampleConditions,
	pdbxNmrRefine,
	pdbxNmrRepresentative,
	pdbxNmrSampleDetails,
	pdbxNmrSoftware,
	pdbxNmrSpectrometer,
	pdbxNonpolyScheme,
	pdbxPolySeqScheme,
	pdbxSolnScatter,
	pdbxSolnScatterModel,
	refine,
	refineHist,
	refineLsRestr,
	reflns,
	reflnsShell,
	software,
	struct,
	structConn,
	structKeywords,
	structRefSeq,
	structRefSeqDif,
	symmetry,
} from '@model/mmcif';
import { ExperimentalMethod } from '@common/constant';
import { Op } from '@model/shared';
import {
	DepositionData,
	ExperimentalDataSnapshot,
	FundingOrganization,
	Ligands,
	Literature,
	MacromoleculeContent,
	Macromolecules,
	ModifiedResidues,
	Oligosaccharides,
	RevisionHistory,
	SmallMolecules,
	StructureSummaryVO,
	UniqueLigand,
	Validation,
} from '../entry.vo';
import _ = require('lodash');
import { InjectModel } from '@nestjs/sequelize';
import { pdbxNmrDetails } from '@model/mmcif/pdbxNmrDetails';
import { log } from 'console';

@Injectable()
export class ParseImplCommon implements IWebEntryParse {
	constructor(
		@InjectModel(entry)
		private mmcifEntryModel: typeof entry,
	) {}

	async getSmallMolecules(PDBId: string): Promise<SmallMolecules> {
		let smallMoleculesVOs = new SmallMolecules();
		smallMoleculesVOs.ligands = [];
		smallMoleculesVOs.modifiedResidues = [];

		const [ligandsList, modifiedResiduesList] = await Promise.all([
			chemComp.findAll({
				where: {
					structureId: PDBId,
					monNstdFlag: '' || null,
					name: { [Op.not]: 'WATER' },
				},
			}),
			chemComp.findAll({
				attributes: ['id', 'formula', 'modelErf', 'name'],
				where: {
					structureId: PDBId,
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
					structureId: PDBId,
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
					structureId: PDBId,
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

	async getUniqueLigands(PDBId: string): Promise<string[]> {
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

	async experiment(PDBId: string, isBase = false): Promise<ExperimentVo> {
		const experimentVo = new ExperimentVo();
		let fullInclude = [
			{
				model: struct,
				attributes: ['pdbxModelDetails', 'title'],
			},
			{
				model: exptl,
				attributes: ['method'],
			},
			{
				model: exptlCrystalGrow,
				attributes: ['crystalId', 'method', 'pH', 'temp', 'pdbxDetails'],
			},
			{
				model: symmetry,
				attributes: ['spaceGroupNameHM'],
			},
			{
				model: emEntityAssembly,
				attributes: ['name'],
			},
			{
				model: exptlCrystal,
				attributes: ['densityMatthews', 'densityPercentSol'],
			},
			{
				model: diffrnRadiation,
				attributes: ['diffrnId', 'wavelengthId', 'pdbxScatteringType', 'pdbxMonochromaticOrLaueML', 'pdbxDiffrnProtocol'],
			},
			{
				model: diffrnSource,
			},
			{
				model: reflns,
			},
			{
				model: reflnsShell,
			},
			{
				model: refine,
			},
			{
				model: refineLsRestr,
				attributes: ['type', 'devIdeal'],
			},
			{
				model: software,
			},
			{
				model: emImageRecording,
			},
			{
				model: diffrnDetector,
			},
			{
				model: emExperiment,
				attributes: ['aggregationState'],
			},
			{
				model: emVitrification,
				attributes: ['instrument', 'cryogenName', 'details'],
			},
		];
		let baseInclude = [
			{
				model: struct,
				attributes: ['pdbxModelDetails', 'title'],
			},
			{
				model: exptl,
				attributes: ['method'],
			},
			{
				model: exptlCrystalGrow,
				attributes: ['crystalId', 'method', 'pH', 'temp', 'pdbxDetails'],
			},
			{
				model: symmetry,
				attributes: ['spaceGroupNameHM'],
			},
			{
				model: emEntityAssembly,
				attributes: ['name'],
			},
			{
				model: exptlCrystal,
				attributes: ['densityMatthews', 'densityPercentSol'],
			},
		];
		const mmcifEntry = await this.mmcifEntryModel.findOne({
			where: {
				id: PDBId,
			},
			include: isBase ? baseInclude : fullInclude,
		});
		if (!mmcifEntry) {
			return experimentVo;
		}
		experimentVo.entityId = mmcifEntry.id;
		experimentVo.title = mmcifEntry.struct.title || mmcifEntry.struct.pdbxModelDetails;
		const findAllMethod = await exptl.findAll({
			where: {
				structureId: PDBId,
			},
		});
		experimentVo.method = findAllMethod?.map(item => item.method);
		experimentVo.spaceGroup = mmcifEntry.symmetry?.spaceGroupNameHM;
		experimentVo.sample = mmcifEntry.emEntityAssembly?.name;

		const crystalizationExperiments = [];
		mmcifEntry.exptlCrystalGrow.map(item => {
			const crystalizationExperiment = new CrystalizationExperiments();
			crystalizationExperiment.id = item.crystalId;
			crystalizationExperiment.method = item.method;
			crystalizationExperiment.pH = item.pH;
			crystalizationExperiment.temperature = item.temp;
			crystalizationExperiment.details = item.pdbxDetails;
			crystalizationExperiments.push(crystalizationExperiment);
		});
		experimentVo.crystalizationExperiments = crystalizationExperiments;

		const crystalProperties = [];
		mmcifEntry.exptlCrystal.map(item => {
			const crystalPropertie = new CrystalProperties();
			crystalPropertie.matthewsCoefficient = item.densityMatthews;
			crystalPropertie.solventContent = item.densityPercentSol;
			crystalProperties.push(crystalPropertie);
		});
		experimentVo.crystalProperties = crystalProperties;
		const diffractionExperiments = [];
		const findDiffractionExperiment = await diffrn.findAll({
			where: {
				structureId: PDBId,
			},
		});
		for (const item of findDiffractionExperiment) {
			const diffractionExperiment = new DiffractionExperiment();
			const diffrnDetectorList = await diffrnDetector.findOne({
				where: {
					structureId: PDBId,
					diffrnId: item?.id,
				},
			});
			const diffrnRadiatioList = await diffrnRadiation.findOne({
				where: {
					structureId: PDBId,
					diffrnId: item?.id,
				},
			});
			diffractionExperiment.id = item?.id;
			diffractionExperiment.crystalID = item?.crystalId;

			diffractionExperiment.scatteringType = diffrnRadiatioList?.pdbxScatteringType;
			diffractionExperiment.dataCollectionTemperature = item?.ambientTemp;

			diffractionExperiment.detector = diffrnDetectorList?.detector;
			diffractionExperiment.detectorType = diffrnDetectorList?.type;
			diffractionExperiment.details = diffrnDetectorList?.details;
			diffractionExperiment.collectionDate = diffrnDetectorList?.pdbxCollectionDate;
			diffractionExperiment.monochromator = diffrnRadiatioList?.pdbxMonochromaticOrLaueML;
			diffractionExperiment.protocol = diffrnRadiatioList?.pdbxDiffrnProtocol;
			diffractionExperiments.push(diffractionExperiment);
		}
		experimentVo.diffractionExperiment = diffractionExperiments;

		const radiationSources = [];
		mmcifEntry.diffrnSource.map(item => {
			const radiationSource = new RadiationSource();
			radiationSource.id = item.diffrnId;
			radiationSource.source = item.source;
			radiationSource.type = item.type;
			radiationSource.wavelengthList = item.pdbxWavelengthList;
			radiationSource.synchrotronSite = item.pdbxSynchrotronSite;
			radiationSource.beamline = item.pdbxSynchrotronBeamline;
			radiationSources.push(radiationSource);
		});
		experimentVo.radiationSource = radiationSources;
		const overalls = [];
		mmcifEntry.reflns.map(item => {
			const overall = new Overall();
			overall.id = item.pdbxDiffrnId;
			overall.resolutionHigh = item.dResolutionHigh;
			overall.resolutionLow = item.dResolutionLow;
			overall.percentPossibleObs = item.percentPossibleObs;
			overall.RMergeIObs = item.pdbxRmergeIObs;
			overall.RSymIObs = item?.pdbxRsymValue;
			overall.rrimIAll = item.pdbxRrimIAll;
			overall.rpimIAll = item.pdbxRpimIAll;
			overall.CcHalf = item.pdbxCcHalf;
			overall.netIOverSigmaI = item.pdbxNetIOverSigmaI;
			overall.redundancy = item.pdbxRedundancy;
			overall.numberReflectionsAll = item.numberAll;
			overall.numberReflectionsObs = item.numberObs;
			overall.observedCriterionSigmaF = item.observedCriterionSigmaF;
			overall.observedCriterionSigmaI = item.observedCriterionSigmaI;
			overall.BIsoFromWilsonPlot = item.bIsoWilsonEstimate;
			overalls.push(overall);
		});
		experimentVo.overall = overalls;
		const highestResolutionShells = [];
		const reflnsShellList = await reflnsShell.findAll({
			where: {
				structureId: PDBId,
			},
		});
		for (const item of reflnsShellList) {
			const highestResolutionShell = new HighestResolutionShell();
			highestResolutionShell.id = item?.pdbxDiffrnId;
			highestResolutionShell.resolutionHigh = item?.dResHigh;
			highestResolutionShell.resolutionLow = item?.dResLow;
			highestResolutionShell.percentPossibleAll = item?.percentPossibleAll;
			highestResolutionShell.percentPossibleObs = item?.percentPossibleObs;
			highestResolutionShell.RMergeIObs = item?.rmergeIObs;
			highestResolutionShell.RSymIObs = item?.pdbxRsymValue;
			highestResolutionShell.rrimIAll = item?.pdbxRrimIAll;
			highestResolutionShell.rpimIAll = item?.pdbxRpimIAll;
			highestResolutionShell.CcHalf = item?.pdbxCcHalf;
			highestResolutionShell.meanIOverSigmaObs = item?.meanIOverSigIObs;
			highestResolutionShell.redundancy = item?.pdbxRedundancy;
			highestResolutionShell.numberUniqueReflectionsAll = item?.numberUniqueAll;
			highestResolutionShells.push(highestResolutionShell);
		}
		experimentVo.highestResolutionShell = highestResolutionShells;
		const statisticsList = [];
		mmcifEntry.refine.map(item => {
			const statistics = new Statistics();
			statistics.diffractionID = item?.pdbxRefineId;
			statistics.structureSolutionMethod = item?.pdbxMethodToDetermineStruct;
			statistics.crossValidationmethod = item?.pdbxLsCrossValidMethod;
			statistics.startingModel = item?.pdbxStartingModel;
			statistics.resolutionHigh = item?.lsDResHigh;
			statistics.resolutionLow = item?.lsDResLow;
			statistics.cutOffSigmaF = item?.pdbxLsSigmaF;
			statistics.numberReflectionsObs = item?.lsNumberReflnsObs;
			statistics.numberReflectionsRFree = item?.lsNumberReflnsRFree;
			statistics.percentReflectionsObs = item?.lsPercentReflnsObs;
			statistics.RFactorObs = item?.lsRFactorObs;
			statistics.RWork = item?.lsRFactorRWork;
			statistics.RFree = item?.lsRFactorRFree;
			statistics.RFreeSelectionDetails = item?.pdbxRFreeSelectionDetails;
			statistics.meanIsotropicB = item?.bIsoMean;
			statisticsList.push(statistics);
		});
		experimentVo.statistics = statisticsList;
		const TemperatureFactorModelingList = new TemperatureFactorModeling();
		const findRefine = await refine.findOne({
			where: {
				structureId: PDBId,
				pdbxRefineId: {
					[Op.in]: ExperimentalMethod,
				},
			},
			raw: true,
		});
		TemperatureFactorModelingList.anisotropicB11 = findRefine?.anisoB11;
		TemperatureFactorModelingList.anisotropicB12 = findRefine?.anisoB12;
		TemperatureFactorModelingList.anisotropicB13 = findRefine?.anisoB13;
		TemperatureFactorModelingList.anisotropicB22 = findRefine?.anisoB22;
		TemperatureFactorModelingList.anisotropicB23 = findRefine?.anisoB23;
		TemperatureFactorModelingList.anisotropicB33 = findRefine?.anisoB33;
		experimentVo.temperatureFactorModeling = TemperatureFactorModelingList;

		const nonHydrogenAtomsRefinementList = new NonHydrogenAtomsRefinement();
		const findRefineHist = await refineHist.findOne({
			where: {
				structureId: PDBId,
				pdbxRefineId: {
					[Op.in]: ExperimentalMethod,
				},
			},
			raw: true,
		});
		nonHydrogenAtomsRefinementList.proteinAtoms = findRefineHist?.pdbxNumberAtomsProtein;
		nonHydrogenAtomsRefinementList.nucleicAcidAtoms = findRefineHist?.pdbxNumberAtomsNucleicAcid;
		nonHydrogenAtomsRefinementList.solventAtoms = findRefineHist?.numberAtomsSolvent;
		nonHydrogenAtomsRefinementList.heterogenAtoms = findRefineHist?.pdbxNumberAtomsLigand;
		experimentVo.nonHydrogenAtomsRefinement = nonHydrogenAtomsRefinementList;

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
		experimentVo.unitCell = unitCells;
		const RMSDeviationsList = [];
		mmcifEntry.refineLsRestr.map(item => {
			const rmsDeviations = new RMSDeviations();
			rmsDeviations.key = item.type;
			rmsDeviations.refinementRestraintDeviation = item.devIdeal;
			RMSDeviationsList.push(rmsDeviations);
		});
		RMSDeviationsList.sort((a, b) => {
			return b.refinementRestraintDeviation - a.refinementRestraintDeviation;
		});
		experimentVo.rmsDeviations = RMSDeviationsList;
		const softwareList = [];
		mmcifEntry.software.map(item => {
			const software = new Software();
			software.softwareName = item.name;
			software.purpose = item.classification;
			softwareList.push(software);
		});
		experimentVo.software = softwareList;

		const EMSoftwareList = [];
		const findEMSoftware = await emSoftware.findAll({
			where: {
				structureId: PDBId,
				name: {
					[Op.not]: null || '',
				},
			},
		});
		for (const item of findEMSoftware) {
			const emSoftware = new EMSoftware();
			emSoftware.task = item?.category;
			emSoftware.softwarePackage = item?.name;
			emSoftware.version = item?.version;
			EMSoftwareList.push(emSoftware);
		}
		experimentVo.emSoftware = EMSoftwareList;

		const dataAcquisitionList = [];
		mmcifEntry.emImageRecording.map(item => {
			const dataAcquisition = new DataAcquisition();
			dataAcquisition.detectorType = item.filmOrDetectorModel;
			dataAcquisition.electronDose = item.avgElectronDosePerImage;
			dataAcquisitionList.push(dataAcquisition);
		});
		experimentVo.dataAcquisition = dataAcquisitionList;

		const reconstruction = new Reconstruction();
		const findEmExperiment = await emExperiment.findOne({
			where: {
				structureId: PDBId,
			},
		});
		const findem_3dReconstruction = await em_3dReconstruction.findOne({
			where: {
				structureId: PDBId,
			},
		});
		const findem_single_particle_entity = await emSingleParticleEntity.findOne({
			where: {
				structureId: PDBId,
			},
		});
		const findEmHelicalEntity = await emHelicalEntity.findOne({
			where: {
				structureId: PDBId,
			},
		});
		const findEm_3dCrystalEntity = await em_3dCrystalEntity.findOne({
			where: {
				structureId: PDBId,
			},
		});
		reconstruction.reconstructionMethod = findEmExperiment?.reconstructionMethod;
		reconstruction.numberofParticles = findem_3dReconstruction?.numParticles;
		reconstruction.reportedResolution = findem_3dReconstruction?.resolution;
		reconstruction.resolutionMethod = findem_3dReconstruction?.resolutionMethod;
		reconstruction.otherDetails = findem_3dReconstruction?.details;
		reconstruction.refinementType = findem_3dReconstruction?.refinementType;
		reconstruction.symmetryType = findem_3dReconstruction?.symmetryType;
		// reconstruction.spaceGroupName = ;
		reconstruction.lengthA = findEm_3dCrystalEntity?.lengthA ?? null;
		reconstruction.lengthB = findEm_3dCrystalEntity?.lengthB ?? null;
		reconstruction.lengthC = findEm_3dCrystalEntity?.lengthC ?? null;
		reconstruction.angleAlpha = findEm_3dCrystalEntity?.angleAlpha ?? null;
		reconstruction.angleBeta = findEm_3dCrystalEntity?.angleBeta ?? null;
		reconstruction.angleGamma = findEm_3dCrystalEntity?.angleGamma ?? null;
		reconstruction.pointSymmetry = findem_single_particle_entity?.pointSymmetry ?? null;
		reconstruction.axialSymmetry = findEmHelicalEntity?.axialSymmetry ?? null;
		reconstruction.axialRise = findEmHelicalEntity?.axialRisePerSubunit ?? null;
		reconstruction.angularRotation = findEmHelicalEntity?.angularRotationPerSubunit ?? null;

		experimentVo.reconstruction = reconstruction;

		if (experimentVo.method.includes('ELECTRON MICROSCOPY') || experimentVo.method.includes('ELECTRON CRYSTALLOGRAPHY')) {
			const reconstructionlist = {
				'ELECTRON MICROSCOPY': [
					'reconstructionMethod',
					'numberofParticles',
					'reportedResolution',
					'resolutionMethod',
					'otherDetails',
					'refinementType',
					'symmetryType',
					'pointSymmetry',
					'axialSymmetry',
					'axialRise',
					'angularRotation',
				],
				'ELECTRON CRYSTALLOGRAPHY': [
					'reconstructionMethod',
					'numberofParticles',
					'reportedResolution',
					'resolutionMethod',
					'otherDetails',
					'refinementType',
					'symmetryType',
					'spaceGroupName',
					'lengthA',
					'lengthB',
					'lengthC',
					'angleAlpha',
					'angleBeta',
					'angleGamma',
				],
			};
			const reconstructionField = [];
			experimentVo.method.map(item => {
				log('item: ', item);
				if (['ELECTRON MICROSCOPY', 'ELECTRON CRYSTALLOGRAPHY'].includes(item)) {
					reconstructionField.push(...reconstructionlist[item]);
				}
			});

			for (const key in reconstruction) {
				if (!reconstructionField.includes(key)) {
					delete reconstruction[key];
				}
			}

			if (experimentVo.method.includes('ELECTRON MICROSCOPY') && reconstruction.reconstructionMethod === 'HELICAL') {
				delete reconstruction.pointSymmetry;
			} else {
				delete reconstruction.axialSymmetry;
				delete reconstruction.axialRise;
				delete reconstruction.angularRotation;
			}
		}

		const specimenPreparation = new SpecimenPreparation();
		specimenPreparation.sampleAggregationState = findEmExperiment?.aggregationState;
		const emVitrificationList = await emVitrification.findOne({
			where: {
				structureId: PDBId,
			},
		});
		specimenPreparation.vitrificationInstrument = emVitrificationList?.instrument;
		specimenPreparation.cryogenName = emVitrificationList?.cryogenName;
		specimenPreparation.sampleVitrificationDetails = emVitrificationList?.details;
		const emEmbeddingList = await emEmbedding.findOne({
			where: {
				structureId: PDBId,
			},
		});
		specimenPreparation.embeddingMaterial = emEmbeddingList?.material;
		specimenPreparation.embeddingDetails = emEmbeddingList?.details;
		if (experimentVo.method.includes('ELECTRON MICROSCOPY')) {
			delete specimenPreparation.embeddingMaterial;
			delete specimenPreparation.embeddingDetails;
		}
		experimentVo.specimenPreparation = specimenPreparation;

		const imageProcessing = new ImageProcessing();
		const findEmCtfCorrection = await emCtfCorrection.findOne({
			where: {
				structureId: PDBId,
			},
			raw: true,
		});
		imageProcessing.ctfCorrectionType = findEmCtfCorrection?.type;
		imageProcessing.ctfCorrectionDetails = findEmCtfCorrection?.details;
		const findEmParticleSelection = await emParticleSelection.findOne({
			where: {
				structureId: PDBId,
			},
		});
		imageProcessing.numberOfParticlesSelected = findEmParticleSelection?.numParticlesSelected;
		imageProcessing.particleSelectionDetails = findEmParticleSelection?.details;
		experimentVo.imageProcessing = imageProcessing;

		function setValueOrEmpty(value) {
			return value !== 0 ? value : null;
		}

		const imagingExperiments = [];
		const findImagingExperiment = await emImaging.findAll({
			where: {
				structureId: PDBId,
			},
			raw: true,
		});
		for (const item of findImagingExperiment) {
			const imagingExperiment = new ImagingExperiment();
			imagingExperiment.imagingExperiment = setValueOrEmpty(item?.id);
			imagingExperiment.dateOfExperiment = setValueOrEmpty(item?.date);
			imagingExperiment.temperatureKelvin = setValueOrEmpty(item?.temperature);
			imagingExperiment.microscopeModel = setValueOrEmpty(item?.microscopeModel);
			imagingExperiment.minimumDefocus = setValueOrEmpty(item?.nominalDefocusMin);
			imagingExperiment.maximumDefocus = setValueOrEmpty(item?.nominalDefocusMax);
			imagingExperiment.minimumTiltAngle = setValueOrEmpty(item?.tiltAngleMin);
			imagingExperiment.maximumTiltAngle = setValueOrEmpty(item?.tiltAngleMax);
			imagingExperiment.nominalCS = setValueOrEmpty(item?.nominalCs);
			imagingExperiment.imagingMode = setValueOrEmpty(item?.mode);
			imagingExperiment.specimenHolderModel = setValueOrEmpty(item?.specimenHolderModel);
			imagingExperiment.nominalMagnification = setValueOrEmpty(item?.nominalMagnification);
			imagingExperiment.calibratedMagnification = setValueOrEmpty(item?.calibratedMagnification);
			imagingExperiment.source = setValueOrEmpty(item?.electronSource);
			imagingExperiment.accelerationVoltage = setValueOrEmpty(item?.acceleratingVoltage);
			imagingExperiment.imagingDetails = setValueOrEmpty(item?.details);
			imagingExperiments.push(imagingExperiment);
		}
		experimentVo.imagingExperiment = imagingExperiments;

		const mapModelFittingAndRefinement = new MapModelFittingAndRefinement();
		const findMapModelFittingAndRefinement = await em_3dFitting.findOne({
			where: {
				structureId: PDBId,
			},
			raw: true,
		});
		mapModelFittingAndRefinement.id = findMapModelFittingAndRefinement?.id;
		mapModelFittingAndRefinement.refinementSpace = findMapModelFittingAndRefinement?.refSpace;
		mapModelFittingAndRefinement.refinementProtocol = findMapModelFittingAndRefinement?.refProtocol;
		mapModelFittingAndRefinement.refinementTarget = findMapModelFittingAndRefinement?.targetCriteria;
		mapModelFittingAndRefinement.overallBValue =
			findMapModelFittingAndRefinement?.overallBValue !== 0 ? findMapModelFittingAndRefinement?.overallBValue : null;

		const modelFittingSoftware = await emSoftware.findOne({
			where: {
				structureId: PDBId,
				category: 'MODEL FITTING',
			},
		});
		mapModelFittingAndRefinement.modelFittingSoftware = modelFittingSoftware?.name;
		const modelRefinementSoftware = await emSoftware.findOne({
			where: {
				structureId: PDBId,
				category: 'MODEL REFINEMENT',
			},
		});
		mapModelFittingAndRefinement.modelRefinementSoftware = modelRefinementSoftware?.name;

		mapModelFittingAndRefinement.details = findMapModelFittingAndRefinement?.details;
		experimentVo.mapModelFittingAndRefinement = mapModelFittingAndRefinement;

		let nmrExperimentList = [];
		const find = await pdbxNmrExptl.findAll({
			where: {
				structureId: PDBId,
			},
		});
		const promises = find.map(async element => {
			const nmrExperiment = new NMRExperiment();
			nmrExperiment.experiment = element.experimentId;
			nmrExperiment.type = element.type;

			const findPdbxNmrSampleDetailsPromise = pdbxNmrSampleDetails.findOne({
				where: {
					structureId: PDBId,
					solutionId: element.solutionId,
				},
			});

			const findPdbxNmrExptlSampleConditionsPromise = pdbxNmrExptlSampleConditions.findOne({
				where: {
					structureId: PDBId,
					conditionsId: element.conditionsId,
				},
			});

			const findpdbxNmrSpectrometerPromise = pdbxNmrSpectrometer.findOne({
				where: {
					structureId: PDBId,
					spectrometerId: element.spectrometerId,
				},
			});

			const [findPdbxNmrSampleDetails, findPdbxNmrExptlSampleConditions, findpdbxNmrSpectrometer] = await Promise.all([
				findPdbxNmrSampleDetailsPromise,
				findPdbxNmrExptlSampleConditionsPromise,
				findpdbxNmrSpectrometerPromise,
			]);

			nmrExperiment.sampleContents = findPdbxNmrSampleDetails?.contents;
			nmrExperiment.solvent = findPdbxNmrSampleDetails?.solventSystem;
			nmrExperiment.ionicStrength = findPdbxNmrExptlSampleConditions?.ionicStrength;
			nmrExperiment.pH = findPdbxNmrExptlSampleConditions?.pH;
			nmrExperiment.pressure =
				findPdbxNmrExptlSampleConditions?.pressure && findPdbxNmrExptlSampleConditions?.pressureUnits
					? `${findPdbxNmrExptlSampleConditions?.pressure} ${findPdbxNmrExptlSampleConditions?.pressureUnits}`
					: null;
			nmrExperiment.temperature = findPdbxNmrExptlSampleConditions?.temperature;

			const { manufacturer, model, fieldStrength } = findpdbxNmrSpectrometer || {};
			nmrExperiment.spectrometer = `${manufacturer || ''} ${model || ''} ${fieldStrength || ''}`;

			// nmrExperiment.spectrometer = `${findpdbxNmrSpectrometer?.manufacturer} ${findpdbxNmrSpectrometer?.model} ${findpdbxNmrSpectrometer?.fieldStrength}`;

			return nmrExperiment;
		});

		nmrExperimentList = await Promise.all(promises);
		experimentVo.nmrExperiment = nmrExperimentList;

		const nmrSpectrometerInformationList = [];
		const findPdbxNmrSpectrometer = await pdbxNmrSpectrometer.findAll({
			where: {
				structureId: PDBId,
			},
		});
		findPdbxNmrSpectrometer.map(itme => {
			const nmrSpectrometerInformation = new NMRSpectrometerInformation();
			nmrSpectrometerInformation.spectrometer = itme.spectrometerId;
			nmrSpectrometerInformation.manufacturer = itme.manufacturer;
			nmrSpectrometerInformation.model = itme.model;
			nmrSpectrometerInformation.fieldStrength = itme.fieldStrength;
			nmrSpectrometerInformationList.push(nmrSpectrometerInformation);
		});
		experimentVo.nmrSpectrometerInformation = nmrSpectrometerInformationList;

		const nmrRefinementList = new NMRRefinement();
		const findPdbxNmrRefine = await pdbxNmrRefine.findOne({
			where: {
				structureId: PDBId,
			},
		});
		nmrRefinementList.method = findPdbxNmrRefine?.method;
		nmrRefinementList.details = findPdbxNmrRefine?.details;

		const findSoftware = await pdbxNmrSoftware.findOne({
			where: {
				structureId: PDBId,
				ordinal: findPdbxNmrRefine?.softwareOrdinal || 0,
			},
		});
		nmrRefinementList.software = findSoftware?.name;
		experimentVo.nmrRefinement = nmrRefinementList;

		const nmrEnsembleInformationList = new NMREnsembleInformation();
		const findPdbxNmrEnsemble = await pdbxNmrEnsemble.findOne({
			where: {
				structureId: PDBId,
			},
		});

		nmrEnsembleInformationList.conformerSelectionCriteria = findPdbxNmrEnsemble?.conformerSelectionCriteria;
		nmrEnsembleInformationList.conformersCalculatedTotalNumber = findPdbxNmrEnsemble?.conformersCalculatedTotalNumber;
		nmrEnsembleInformationList.conformersSubmittedTotalNumber = findPdbxNmrEnsemble?.conformersSubmittedTotalNumber;
		const findPdbxNmrRepresentative = await pdbxNmrRepresentative.findOne({
			where: {
				structureId: PDBId,
			},
		});
		const conformerId = findPdbxNmrRepresentative?.conformerId ?? null;
		const selectionCriteria = findPdbxNmrRepresentative?.selectionCriteria ?? null;
		nmrEnsembleInformationList.representativeModel =
			conformerId != null || selectionCriteria != null
				? `${conformerId ?? ''} ${selectionCriteria != null ? '(' : ''}${selectionCriteria ?? ''}${selectionCriteria != null ? ')' : ''}`
				: null;

		experimentVo.nmrEnsembleInformation = nmrEnsembleInformationList;

		const additionalNMRExperimentalInformation = new AdditionalNMRExperimentalInformation();
		const findPdbxNmrDetails = await pdbxNmrDetails.findOne({
			where: {
				structureId: PDBId,
			},
		});
		additionalNMRExperimentalInformation.details = findPdbxNmrDetails?.text;
		console.log('additionalNMRExperimentalInformation: ', additionalNMRExperimentalInformation);
		experimentVo.additionalNMRExperimentalInformation = additionalNMRExperimentalInformation;

		const nmrSoftwareList = [];
		const findNmrSoftware = await pdbxNmrSoftware.findAll({
			where: {
				structureId: PDBId,
			},
		});
		findNmrSoftware.map(item => {
			const nmrSoftware = new NMRSoftware();
			nmrSoftware.ordinal = item?.ordinal;
			nmrSoftware.classification = item?.classification;
			nmrSoftware.version = item?.name;
			nmrSoftware.softwareName = item?.version;
			nmrSoftware.author = item?.authors;
			nmrSoftwareList.push(nmrSoftware);
		});
		experimentVo.nmrSoftware = nmrSoftwareList;

		const solutionScatteringDataAcquistionList = [];
		const pdbxSolnScatterList = await pdbxSolnScatter.findAll({
			where: {
				structureId: PDBId,
			},
		});
		for (const item of pdbxSolnScatterList) {
			const solutionScatteringDataAcquistion = new SolutionScatteringDataAcquistion();
			solutionScatteringDataAcquistion.id = item?.id;
			solutionScatteringDataAcquistion.scatteringType = item?.type;
			solutionScatteringDataAcquistion.radiationNeutronSource = item?.sourceType;
			solutionScatteringDataAcquistion.synchrotron = item?.sourceClass;
			solutionScatteringDataAcquistion.beamlineType = item?.sourceBeamline;
			solutionScatteringDataAcquistion.detectorType = item?.detectorType;
			solutionScatteringDataAcquistion.detectorManufacturerDetails = item?.detectorSpecific;
			solutionScatteringDataAcquistion.temperature = item?.temperature;
			solutionScatteringDataAcquistion.pH = item?.samplePH;
			solutionScatteringDataAcquistion.numerOfTimeFramesUsed = item?.numTimeFrames;
			solutionScatteringDataAcquistion.proteinConcentrationRange = item?.concentrationRange;
			solutionScatteringDataAcquistion.sampleBuffer = item?.bufferName;
			solutionScatteringDataAcquistion.dataReductionSoftware = item?.dataReductionSoftwareList;
			solutionScatteringDataAcquistion.guinerMeanRadiusOfGyration = item?.meanGuinerRadius;
			solutionScatteringDataAcquistion.sigmaMeanRadiusOfGyration = item?.meanGuinerRadiusEsd;
			solutionScatteringDataAcquistion['R(XS-1)MeanCrossSectionalRadii'] = item?.minMeanCrossSectionalRadiiGyration;
			solutionScatteringDataAcquistion['R(XS-1)SigmaMeanCrossSectionalRadii'] = item?.minMeanCrossSectionalRadiiGyrationEsd;
			solutionScatteringDataAcquistion['R(XS-2)MeanCrossSectionalRadii'] = item?.maxMeanCrossSectionalRadiiGyration;
			solutionScatteringDataAcquistion['R(XS-2)SigmaMeanCrossSectionalRadii'] = item?.maxMeanCrossSectionalRadiiGyrationEsd;
			solutionScatteringDataAcquistion['P(R)ProteinLength'] = item?.proteinLength;
			solutionScatteringDataAcquistionList.push(solutionScatteringDataAcquistion);
		}
		experimentVo.solutionScatteringDataAcquistion = solutionScatteringDataAcquistionList;

		const solutionScatteringDataAnalysisAndModelFittingList = [];
		const pdbxSolnScatterModelList = await pdbxSolnScatterModel.findAll({
			where: {
				structureId: PDBId,
			},
		});
		for (const item of pdbxSolnScatterModelList) {
			const solutionScatteringDataAnalysisAndModelFitting = new SolutionScatteringDataAnalysisAndModelFitting();
			solutionScatteringDataAnalysisAndModelFitting.method = item?.method;
			solutionScatteringDataAnalysisAndModelFitting.software = item?.softwareList;
			solutionScatteringDataAnalysisAndModelFitting.softwareAuthors = item?.softwareAuthorList;
			solutionScatteringDataAnalysisAndModelFitting.startingModel = item?.entryFittingList;
			solutionScatteringDataAnalysisAndModelFitting.conformersNumberCalculated = item?.numConformersCalculated;
			solutionScatteringDataAnalysisAndModelFitting.conformersNumberSubmitted = item?.numConformersSubmitted;
			solutionScatteringDataAnalysisAndModelFitting.conformersSelectionCriteria = item?.conformerSelectionCriteria;
			solutionScatteringDataAnalysisAndModelFitting.bestRepresentativeConformer = item?.representativeConformer;
			solutionScatteringDataAnalysisAndModelFitting.otherDetails = item?.details;
			solutionScatteringDataAnalysisAndModelFittingList.push(solutionScatteringDataAnalysisAndModelFitting);
		}
		experimentVo.solutionScatteringDataAnalysisAndModelFitting = solutionScatteringDataAnalysisAndModelFittingList;

		const COMMON = ['entityId', 'title'];

		const METHODS = {
			'X-RAY DIFFRACTION': [
				'method',
				'crystalizationExperiments',
				'crystalProperties',
				'unitCell',
				'spaceGroup',
				'diffractionExperiment',
				'radiationSource',
				'overall',
				'highestResolutionShell',
				'statistics',
				'temperatureFactorModeling',
				'rmsDeviations',
				'nonHydrogenAtomsRefinement',
				'software',
			],
			'ELECTRON MICROSCOPY': [
				'method',
				'rmsDeviations',
				'sample',
				'dataAcquisition',
				'specimenPreparation',
				'imagingExperiment',
				'imageProcessing',
				'reconstruction',
				'mapModelFittingAndRefinement',
				'emSoftware',
			],
			'SOLID-STATE NMR': [
				'method',
				'nmrExperiment',
				'nmrSpectrometerInformation',
				'nmrRefinement',
				'nmrEnsembleInformation',
				'additionalNMRExperimentalInformation',
				'nmrSoftware',
			],
			'SOLUTION NMR': [
				'method',
				'nmrExperiment',
				'nmrSpectrometerInformation',
				'nmrRefinement',
				'nmrEnsembleInformation',
				'additionalNMRExperimentalInformation',
				'nmrSoftware',
			],
			'NEUTRON DIFFRACTION': [
				'method',
				'crystalizationExperiments',
				'crystalProperties',
				'unitCell',
				'spaceGroup',
				'diffractionExperiment',
				'radiationSource',
				'overall',
				'highestResolutionShell',
				'statistics',
				'rmsDeviations',
				'nonHydrogenAtomsRefinement',
				'software',
			],
			'ELECTRON CRYSTALLOGRAPHY': [
				'method',
				'unitCell',
				'spaceGroup',
				'statistics',
				'rmsDeviations',
				'software',
				'sample',
				'dataAcquisition',
				'specimenPreparation',
				'imagingExperiment',
				'reconstruction',
				'emSoftware',
				'mapModelFittingAndRefinement',
				'imageProcessing',
				// 'crystalProperties',
				// 'diffractionExperiment',
				// 'nonHydrogenAtomsRefinement',
			],
			'POWDER DIFFRACTION': [
				'method',
				'crystalizationExperiments',
				'crystalProperties',
				'unitCell',
				'spaceGroup',
				'diffractionExperiment',
				'radiationSource',
				'overall',
				'statistics',
				'rmsDeviations',
				'nonHydrogenAtomsRefinement',
				'software',
			],
			'FIBER DIFFRACTION': [
				'method',
				'crystalizationExperiments',
				'unitCell',
				'spaceGroup',
				'diffractionExperiment',
				'radiationSource',
				'overall',
				'statistics',
				'nonHydrogenAtomsRefinement',
				'software',
			],
			'SOLUTION SCATTERING': [
				'method',
				'solutionScatteringDataAcquistion',
				'solutionScatteringDataAnalysisAndModelFitting',
				'radiationSource',
				'highestResolutionShell',
			],
			EPR: ['method'],
			'FLUORESCENCE TRANSFER': ['method'],
			'INFRARED SPECTROSCOPY': [
				'method',
				'nmrExperiment',
				'nmrSpectrometerInformation',
				'nmrRefinement',
				'nmrEnsembleInformation',
				'additionalNMRExperimentalInformation',
				'nmrSoftware',
			],
			'THEORETICAL MODEL': ['method'],
		};
		// 获取所有应该显示的字段
		const fullFields = [];
		experimentVo.method.map(item => {
			fullFields.push(...METHODS[item]);
		});
		fullFields.push(...COMMON);

		// 过滤返回字段
		for (const key in experimentVo) {
			if (!fullFields.includes(key)) {
				delete experimentVo[key];
			}
		}

		console.log('experimentVo: ', experimentVo);
		return experimentVo;
	}

	async getOligosaccharides(PDBId: string): Promise<Oligosaccharides[]> {
		let oligosaccharidesVo = [];
		const mmcifEntry = await entry.findOne({
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
		const promises = mmcifEntry.entities.map(async _entity => {
			if (!_entity) {
				return;
			}
			const oligosaccharides = new Oligosaccharides();
			let structureId = _entity.structureId;
			_entity = await entity.findOne({
				where: {
					structureId: structureId,
					id: _entity.id,
				},
				attributes: ['id', 'srcMethod', 'type', 'structureId', 'pdbxFragment', 'pdbxDescription'],
				include: [
					{
						model: structRefSeq,
						attributes: ['pdbxStrandId', 'pdbxDbAccession'],
						where: {
							refId: Number(_entity.id),
						},
						required: false,
					},
					{
						model: entitySrcNat,
						attributes: ['pdbxEndSeqNum', 'pdbxOrganismScientific'],
						where: {
							entityId: _entity.id,
						},
						required: false,
					},
					{
						model: entitySrcGen,
						where: {
							entityId: _entity.id,
							pdbxGeneSrcGene: {
								[Op.not]: '',
							},
						},
						attributes: ['pdbxEndSeqNum', 'pdbxGeneSrcScientificName', 'pdbxGeneSrcGene'],
						required: false,
					},
				],
			});
			if (!_entity) {
				return;
			}
			oligosaccharides.id = _entity.id;
			oligosaccharides.molecule = _entity.pdbxDescription;
			// oligosaccharides.chains = _entity.structRefSeqs.map(item => item.pdbxStrandId);
			// oligosaccharides.chainLength = 'TODO';
			const glycosylations = await structConn.findAll({
				where: {
					structureId: structureId,
					pdbxRole: {
						[Op.not]: null,
					},
				},
			});
			if (glycosylations) {
				oligosaccharides.glycosylation = glycosylations[0]?.pdbxRole;
			} else {
				oligosaccharides.glycosylation = 'N/A';
			}
			return oligosaccharides;
		});

		oligosaccharidesVo = await Promise.all(promises);

		return oligosaccharidesVo;
	}
}
