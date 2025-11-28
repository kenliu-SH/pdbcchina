import { ApiProperty, ApiTags } from '@nestjs/swagger';

export class CrystalizationExperiments {
	//id
	@ApiProperty({ description: 'crystal_id' })
	id: string;
	// Method
	@ApiProperty({ description: 'method' })
	method: string;
	//pH
	@ApiProperty({ description: 'pH' })
	pH: number;
	// Temperature
	@ApiProperty({ description: 'temp' })
	temperature: number;
	//Details
	@ApiProperty({ description: 'pdbx_details' })
	details: string;
}

export class CrystalProperties {
	//Matthews coefficient
	@ApiProperty({
		description: 'density_Matthews',
	})
	matthewsCoefficient: number;

	//	Solvent content
	@ApiProperty({
		description: 'density_percent_sol',
	})
	solventContent: number;
}

export class UnitCell {
	//Length ( Å )
	@ApiProperty({
		description: 'Length ( Å )',
	})
	length: number;

	//Angle ( ˚ )
	@ApiProperty({
		description: 'Angle ( ˚ )',
	})
	angle: number;
}

export class DiffractionExperiment {
	//id
	@ApiProperty({ description: 'id' })
	declare id: string;
	// Crystal ID
	@ApiProperty({ description: 'Crystal ID' })
	crystalID: string;
	// Scattering Type
	@ApiProperty({ description: 'Scattering Type' })
	scatteringType: string;
	// 	Data Collection Temperature
	@ApiProperty({ description: 'Data Collection Temperature' })
	declare dataCollectionTemperature: number;
	//Detector
	@ApiProperty({ description: 'Detector' })
	detector: string;
	//Detector Type
	@ApiProperty({ description: 'Detector Type' })
	declare detectorType: string;
	//Details
	@ApiProperty({ description: 'Details' })
	details: string;
	//Collection Date
	@ApiProperty({ description: 'Collection Date' })
	collectionDate: Date;
	//Monochromator
	@ApiProperty({ description: 'Monochromator' })
	monochromator: string;
	//Protocol
	@ApiProperty({ description: 'Protocol' })
	protocol: string;
}

export class RadiationSource {
	@ApiProperty({ description: 'id' })
	id: string;
	//Source
	@ApiProperty({ description: 'Source' })
	source: string;
	//Type
	@ApiProperty({ description: 'Type' })
	type: string;
	//Wavelength List
	@ApiProperty({ description: 'Wavelength List' })
	wavelengthList: string;
	//Synchrotron Site
	@ApiProperty({ description: 'Synchrotron Site' })
	synchrotronSite: string;
	//Beamline
	@ApiProperty({ description: 'Beamline' })
	beamline: string;
}

// export class Diffraction {}

export class Overall {
	@ApiProperty({ description: 'id' })
	id: string;

	//Resolution (High)
	@ApiProperty({ description: 'Resolution (High)' })
	resolutionHigh: number;

	//Resolution (Low)
	@ApiProperty({ description: 'Resolution (Low)' })
	resolutionLow: number;

	//Percent Possible (Observed)
	@ApiProperty({ description: 'PercentPossible(Observed)' })
	percentPossibleObs: number;

	//R Merge I (Observed)
	@ApiProperty({ description: 'R Merge I (Observed)' })
	RMergeIObs: number;

	//R Sym I (Observed)
	@ApiProperty({ description: 'R Sym I (Observed)' })
	RSymIObs: number;

	//Rrim I (All)
	@ApiProperty({ description: 'Rrim I (All)' })
	rrimIAll: number;

	//Rpim I (All)
	@ApiProperty({ description: 'Rpim I (All)' })
	rpimIAll: number;

	//CC (Half)
	@ApiProperty({ description: 'CC (Half)' })
	CcHalf: number;

	//Net I Over Average Sigma (I)
	@ApiProperty({ description: 'Net I Over Average Sigma (I)' })
	netIOverSigmaI: number;

	//Redundancy
	@ApiProperty({ description: 'Redundancy' })
	redundancy: number;

	//Number Reflections (All)
	@ApiProperty({ description: 'Number Reflections (All)' })
	numberReflectionsAll: number;
	//Number Reflections (Observed)
	@ApiProperty({ description: 'Number Reflections (Observed)' })
	numberReflectionsObs: number;
	//Observed Criterion Sigma (F)
	@ApiProperty({ description: 'Observed Criterion Sigma (F)' })
	observedCriterionSigmaF: number;
	//Observed Criterion Sigma (I)
	@ApiProperty({ description: 'Observed Criterion Sigma (I)' })
	observedCriterionSigmaI: number;
	//B (Isotropic) From Wilson Plot
	@ApiProperty({ description: 'B (Isotropic) From Wilson Plot' })
	BIsoFromWilsonPlot: number;
}

export class HighestResolutionShell {
	@ApiProperty({ description: 'id' })
	id: string;
	//Resolution (High)
	@ApiProperty({ description: 'Resolution (High)' })
	resolutionHigh: number;
	//Resolution (Low)
	@ApiProperty({ description: 'Resolution (Low)' })
	resolutionLow: number;
	//Percent Possible (All)
	@ApiProperty({ description: 'Percent Possible (All)' })
	percentPossibleAll: number;
	//Percent Possible (Observed)
	@ApiProperty({ description: 'Percent Possible (Observed)' })
	percentPossibleObs: number;
	//R Merge I (Observed)
	@ApiProperty({ description: 'R Merge I (Observed)' })
	RMergeIObs: number;
	//R-Sym I (Observed)
	@ApiProperty({ description: 'R-Sym I (Observed)' })
	RSymIObs: number;
	//Rrim I (All)
	@ApiProperty({ description: 'Rrim I (All)' })
	rrimIAll: number;
	//Rpim I (All)
	@ApiProperty({ description: 'Rpim I (All)' })
	rpimIAll: number;
	//CC (Half)
	@ApiProperty({ description: 'CC (Half)' })
	CcHalf: number;
	//Mean I Over Sigma (Observed)
	@ApiProperty({ description: 'Mean I Over Sigma (Observed)' })
	meanIOverSigmaObs: number;
	//Redundancy
	@ApiProperty({ description: 'Redundancy' })
	redundancy: number;
	//Number Unique Reflections (All)
	@ApiProperty({ description: 'Number Unique Reflections (All)' })
	numberUniqueReflectionsAll: number;
}

export class Statistics {
	//Diffraction ID
	@ApiProperty({ description: 'Diffraction ID' })
	diffractionID: string;
	//Structure Solution Method
	@ApiProperty({ description: 'Structure Solution Method' })
	structureSolutionMethod: string;
	//Cross Validation method
	@ApiProperty({ description: 'Cross Validation method' })
	crossValidationmethod: string;
	//Starting model
	@ApiProperty({ description: 'Starting model' })
	startingModel: string;
	//Resolution (High)
	@ApiProperty({ description: 'Resolution (High)' })
	resolutionHigh: number;
	//Resolution (Low)
	@ApiProperty({ description: 'Resolution (Low)' })
	resolutionLow: number;
	//Cut-off Sigma (F)
	@ApiProperty({ description: 'Cut-off Sigma (F)' })
	cutOffSigmaF: number;
	//Number Reflections (Observed)
	@ApiProperty({ description: 'Number Reflections (Observed)' })
	numberReflectionsObs: number;
	//Number Reflections (R-Free)
	@ApiProperty({ description: 'Number Reflections (R-Free)' })
	numberReflectionsRFree: number;
	//Percent Reflections (Observed)
	@ApiProperty({ description: 'Percent Reflections (Observed)' })
	percentReflectionsObs: number;
	//R-Factor (Observed)
	@ApiProperty({ description: 'R-Factor (Observed)' })
	RFactorObs: number;
	//R-Work
	@ApiProperty({ description: 'R-Work' })
	RWork: number;
	//R-Free
	@ApiProperty({ description: 'R-Free' })
	RFree: number;
	//R-Free Selection Details
	@ApiProperty({ description: 'R-Free Selection Details' })
	RFreeSelectionDetails: string;
	//Mean Isotropic B
	@ApiProperty({ description: 'Mean Isotropic B' })
	meanIsotropicB: number;
}

export class TemperatureFactorModeling {
	@ApiProperty({ description: 'Anisotropic B[1][1]' })
	anisotropicB11: number;

	@ApiProperty({ description: 'Anisotropic B[2][2]' })
	anisotropicB22: number;

	@ApiProperty({ description: 'Anisotropic B[3][3]' })
	anisotropicB33: number;

	@ApiProperty({ description: 'Anisotropic B[1][2]' })
	anisotropicB12: number;

	@ApiProperty({ description: 'Anisotropic B[1][3]' })
	anisotropicB13: number;

	@ApiProperty({ description: 'Anisotropic B[2][3]' })
	anisotropicB23: number;
}

export class ImageProcessing {
	@ApiProperty({ description: 'CTF Correction Type' })
	ctfCorrectionType: string;
	@ApiProperty({ description: 'CTF Correction Details' })
	ctfCorrectionDetails: string;
	@ApiProperty({ description: 'Number of Particles Selected' })
	numberOfParticlesSelected: number;
	@ApiProperty({ description: 'Particle Selection Details' })
	particleSelectionDetails: string;
}

export class ImagingExperiment {
	@ApiProperty({ description: 'Imaging Experiment' })
	imagingExperiment: string;
	@ApiProperty({ description: 'Date of Experiment' })
	dateOfExperiment: Date;
	@ApiProperty({ description: 'Temperature (Kelvin)' })
	temperatureKelvin: number;
	@ApiProperty({ description: 'Microscope Model' })
	microscopeModel: string;
	@ApiProperty({ description: 'Minimum Defocus (nm)' })
	minimumDefocus: number;
	@ApiProperty({ description: 'Maximum Defocus (nm)' })
	maximumDefocus: number;
	@ApiProperty({ description: 'Minimum Tilt Angle (degrees)' })
	minimumTiltAngle: number;
	@ApiProperty({ description: 'Maximum Tilt Angle (degrees)' })
	maximumTiltAngle: number;
	@ApiProperty({ description: 'Nominal CS' })
	nominalCS: number;
	@ApiProperty({ description: 'Imaging Mode' })
	imagingMode: string;
	@ApiProperty({ description: 'Specimen Holder Model' })
	specimenHolderModel: string;
	@ApiProperty({ description: 'Nominal Magnification' })
	nominalMagnification: number;
	@ApiProperty({ description: 'Calibrated Magnification' })
	calibratedMagnification: number;
	@ApiProperty({ description: 'Source' })
	source: string;
	@ApiProperty({ description: 'Acceleration Voltage (kV)' })
	accelerationVoltage: number;
	@ApiProperty({ description: 'Imaging Details' })
	imagingDetails: string;
}

export class MapModelFittingAndRefinement {
	@ApiProperty({ description: 'id' })
	id: string;
	@ApiProperty({ description: 'Refinement Space' })
	refinementSpace: string;
	@ApiProperty({ description: 'Refinement Protocol' })
	refinementProtocol: string;
	@ApiProperty({ description: 'Refinement Target' })
	refinementTarget: string;
	@ApiProperty({ description: 'Overall B Value' })
	overallBValue: number;
	// @ApiProperty({ description: 'Fitting Procedure' })
	// fittingProcedure: string;
	@ApiProperty({ description: 'Model fitting software' })
	modelFittingSoftware: string;
	@ApiProperty({ description: 'Model refinement software' })
	modelRefinementSoftware: string;

	@ApiProperty({ description: 'Details' })
	details: string;
}
export class RMSDeviations {
	//Key
	@ApiProperty({ description: 'Key' })
	key: string;
	//Refinement Restraint Deviation
	@ApiProperty({ description: 'Refinement Restraint Deviation' })
	refinementRestraintDeviation: number;
}

// Non-Hydrogen Atoms Used in Refinement
export class NonHydrogenAtomsRefinement {
	//Protein Atoms
	@ApiProperty({ description: 'Protein Atoms' })
	proteinAtoms: number;
	//Nucleic Acid Atoms
	@ApiProperty({ description: 'Nucleic Acid Atoms' })
	nucleicAcidAtoms: number;
	//Solvent Atoms
	@ApiProperty({ description: 'Solvent Atoms' })
	solventAtoms: number;
	//Heterogen Atoms
	@ApiProperty({ description: 'Heterogen Atoms' })
	heterogenAtoms: number;
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

export class DataAcquisition {
	// Detector Type
	@ApiProperty({ description: 'Detector Type' })
	detectorType: string;

	// Electron Dose (electrons/Å**2)
	@ApiProperty({ description: 'Electron Dose (electrons/Å**2)' })
	electronDose: number;
}

export class Reconstruction {
	@ApiProperty({ description: 'Reconstruction Method' })
	reconstructionMethod: string;

	@ApiProperty({ description: 'Number of Particles' })
	numberofParticles: number;

	@ApiProperty({ description: 'Reported Resolution (Å)' })
	reportedResolution: number;

	@ApiProperty({ description: 'Resolution Method' })
	resolutionMethod: string;

	@ApiProperty({ description: 'Other Details' })
	otherDetails: string;

	@ApiProperty({ description: 'Refinement Type' })
	refinementType: string;

	@ApiProperty({ description: 'Symmetry Type' })
	symmetryType: string;

	@ApiProperty({ description: 'Space Group Name' })
	spaceGroupName: string;

	@ApiProperty({ description: 'Length a ' })
	lengthA: number;

	@ApiProperty({ description: 'Length b' })
	lengthB: number;

	@ApiProperty({ description: 'Length c' })
	lengthC: number;

	@ApiProperty({ description: 'Angle Alpha' })
	angleAlpha: number;

	@ApiProperty({ description: 'Angle Beta' })
	angleBeta: number;

	@ApiProperty({ description: 'Angle Gamma' })
	angleGamma: number;

	@ApiProperty({ description: 'Point Symmetry' })
	declare pointSymmetry: string;

	@ApiProperty({ description: 'Axial Symmetry' })
	axialSymmetry: string;

	@ApiProperty({ description: 'Axial Rise' })
	axialRise: number;

	@ApiProperty({ description: 'Angular Rotation' })
	angularRotation: number;
}

export class SpecimenPreparation {
	@ApiProperty({ description: 'Sample Aggregation State' })
	sampleAggregationState: string;

	@ApiProperty({ description: 'Vitrification Instrument' })
	vitrificationInstrument: string;

	@ApiProperty({ description: 'Cryogen Name' })
	cryogenName: string;

	@ApiProperty({ description: 'Sample Vitrification Details' })
	sampleVitrificationDetails: string;

	//Embedding Material
	@ApiProperty({ description: 'Embedding Material' })
	embeddingMaterial: string;

	// Embedding Details
	@ApiProperty({ description: 'Embedding Details' })
	embeddingDetails: string;
}

export class NMRExperiment {
	//Experiment
	@ApiProperty({ description: 'Experiment' })
	experiment: string;

	//Type
	@ApiProperty({ description: 'Type' })
	type: string;

	//	Sample Contents
	@ApiProperty({ description: 'Sample Contents' })
	sampleContents: string;

	//Solvent
	@ApiProperty({ description: 'Solvent' })
	solvent: string;

	//Ionic Strength
	@ApiProperty({ description: 'Ionic Strength' })
	ionicStrength: string;

	//pH
	@ApiProperty({ description: 'pH' })
	pH: string;

	//Pressure
	@ApiProperty({ description: 'Pressure' })
	pressure: string;

	//Temperature (K)
	@ApiProperty({ description: 'Temperature (K)' })
	temperature: string;

	//Spectrometer
	@ApiProperty({ description: 'Spectrometer' })
	spectrometer: string;
}

export class NMRSpectrometerInformation {
	//Spectrometer
	@ApiProperty({ description: 'Spectrometer' })
	spectrometer: string;

	//Manufacturer
	@ApiProperty({ description: 'Manufacturer' })
	manufacturer: string;

	//Model
	@ApiProperty({ description: 'Model' })
	model: string;

	//Field Strength
	@ApiProperty({ description: 'Field Strength' })
	fieldStrength: number;
}

export class NMRRefinement {
	//Method
	@ApiProperty({ description: 'Method' })
	method: string;

	//Details
	@ApiProperty({ description: 'Details' })
	details: string;

	// Software
	@ApiProperty({ description: 'Software' })
	software: string;
}

export class NMREnsembleInformation {
	//Conformer Selection Criteria
	@ApiProperty({ description: 'Conformer Selection Criteria' })
	conformerSelectionCriteria: string;

	// Conformers Calculated Total Number
	@ApiProperty({ description: 'Conformers Calculated Total Number' })
	conformersCalculatedTotalNumber: number;

	//Conformers Submitted Total Number
	@ApiProperty({ description: 'Conformers Submitted Total Number' })
	conformersSubmittedTotalNumber: number;

	// Representative Model
	@ApiProperty({ description: 'Representative Model' })
	representativeModel: string;
}

export class AdditionalNMRExperimentalInformation {
	//Details
	@ApiProperty({ description: 'Details' })
	details: string;
}

// Solution Scattering Data Acquistion
export class SolutionScatteringDataAcquistion {
	id: string;
	scatteringType: string;
	radiationNeutronSource: string;
	synchrotron: string;
	beamlineType: string;
	detectorType: string;
	detectorManufacturerDetails: string;
	temperature: number;
	pH: number;
	numerOfTimeFramesUsed: number;
	proteinConcentrationRange: string;
	sampleBuffer: string;
	dataReductionSoftware: string;
	guinerMeanRadiusOfGyration: number;
	sigmaMeanRadiusOfGyration: number;
	'R(XS-1)MeanCrossSectionalRadii': number;
	'R(XS-1)SigmaMeanCrossSectionalRadii': number;
	'R(XS-2)MeanCrossSectionalRadii': number;
	'R(XS-2)SigmaMeanCrossSectionalRadii': number;
	'P(R)ProteinLength': string;
}

//Solution Scattering Data Analysis and Model Fitting
export class SolutionScatteringDataAnalysisAndModelFitting {
	method: string;
	software: string;
	softwareAuthors: string;
	startingModel: string;
	conformersNumberCalculated: number;
	conformersNumberSubmitted: number;
	conformersSelectionCriteria: string;
	bestRepresentativeConformer: number;
	otherDetails: string;
}

export class ExperimentVo {
	@ApiProperty({ description: 'entityId' })
	entityId: string;
	// title
	@ApiProperty({ description: 'title' })
	title: string;
	//method
	@ApiProperty({ description: 'method' })
	method: string[];

	// Space Group
	@ApiProperty({ description: 'Space Group' })
	spaceGroup: string;

	// Sample
	@ApiProperty({ description: 'Sample' })
	sample: string;

	//CrystalizationExperiments
	@ApiProperty({
		description: 'CrystalizationExperiments',
		type: [CrystalizationExperiments],
	})
	crystalizationExperiments: CrystalizationExperiments[];

	//Crystal Properties
	@ApiProperty({
		description: 'CrystalProperties',
		type: [CrystalProperties],
	})
	crystalProperties: CrystalProperties[];

	//UnitCell
	@ApiProperty({
		description: 'UnitCell',
		type: [UnitCell],
	})
	unitCell: UnitCell[];

	@ApiProperty({
		description: 'DiffractionExperiment',
		type: [DiffractionExperiment],
	})
	diffractionExperiment: DiffractionExperiment[];

	@ApiProperty({
		description: 'RadiationSource',
		type: [RadiationSource],
	})
	radiationSource: RadiationSource[];

	@ApiProperty({
		description: 'Overall',
		type: [Overall],
	})
	overall: Overall[];

	@ApiProperty({
		description: 'HighestResolutionShell',
		type: [HighestResolutionShell],
	})
	highestResolutionShell: HighestResolutionShell[];

	@ApiProperty({
		description: 'Statistics',
		type: [Statistics],
	})
	statistics: Statistics[];

	@ApiProperty({
		description: 'TemperatureFactorModeling',
		type: TemperatureFactorModeling,
	})
	temperatureFactorModeling: TemperatureFactorModeling;

	@ApiProperty({
		description: 'RMSDeviations',
		type: [RMSDeviations],
	})
	rmsDeviations: RMSDeviations[];

	@ApiProperty({
		description: 'NonHydrogenAtomsRefinement',
		type: NonHydrogenAtomsRefinement,
	})
	nonHydrogenAtomsRefinement: NonHydrogenAtomsRefinement;

	// Software
	@ApiProperty({
		description: 'Software',
		type: [Software],
	})
	software: Software[];

	@ApiProperty({
		description: 'EMSoftware',
		type: [EMSoftware],
	})
	emSoftware: EMSoftware[];

	@ApiProperty({
		description: 'DataAcquisition',
		type: [DataAcquisition],
	})
	dataAcquisition: DataAcquisition[];

	@ApiProperty({
		description: 'Reconstruction',
		type: Reconstruction,
	})
	reconstruction: Reconstruction;

	@ApiProperty({
		description: 'SpecimenPreparation',
		type: SpecimenPreparation,
	})
	specimenPreparation: SpecimenPreparation;

	@ApiProperty({
		description: 'ImageProcessing',
		type: ImageProcessing,
	})
	imageProcessing: ImageProcessing;

	@ApiProperty({
		description: 'ImagingExperiment',
		type: [ImagingExperiment],
	})
	imagingExperiment: ImagingExperiment[];

	@ApiProperty({
		description: 'MapModelFittingAndRefinement',
		type: MapModelFittingAndRefinement,
	})
	mapModelFittingAndRefinement: MapModelFittingAndRefinement;

	@ApiProperty({
		description: 'NMRExperiment',
		type: [NMRExperiment],
	})
	nmrExperiment: NMRExperiment[];

	@ApiProperty({
		description: 'NMRSpectrometerInformation',
		type: [NMRSpectrometerInformation],
	})
	nmrSpectrometerInformation: NMRSpectrometerInformation[];

	@ApiProperty({
		description: 'NMRRefinement',
		type: NMRRefinement,
	})
	nmrRefinement: NMRRefinement;

	@ApiProperty({
		description: 'NMREnsembleInformation',
		type: NMREnsembleInformation,
	})
	nmrEnsembleInformation: NMREnsembleInformation;

	@ApiProperty({
		description: 'AdditionalNMRExperimentalInformation',
		type: AdditionalNMRExperimentalInformation,
	})
	additionalNMRExperimentalInformation: AdditionalNMRExperimentalInformation;

	@ApiProperty({
		description: 'NMRSoftware',
		type: [NMRSoftware],
	})
	nmrSoftware: NMRSoftware[];

	@ApiProperty({
		description: 'SolutionScatteringDataAcquistion',
		type: [SolutionScatteringDataAcquistion],
	})
	solutionScatteringDataAcquistion: SolutionScatteringDataAcquistion[];

	@ApiProperty({
		description: 'SolutionScatteringDataAnalysisAndModelFitting',
		type: [SolutionScatteringDataAnalysisAndModelFitting],
	})
	solutionScatteringDataAnalysisAndModelFitting: SolutionScatteringDataAnalysisAndModelFitting[];
}
