export class Structure {
  constructor() {
    this.Organisms = []
    this.ExpressionSystem = []
    this.PrimaryCitationOfRelatedStructures = []
    this.Mutations = false
    this.Macromolecules = new Macromolecules()
    this.SmallMolecules = []
    this.ExperimentalDataSnapshot = new ExperimentalDataSnapshot()
    this.ExperimentalStatistics = []
    this.vo = null
  }
  Method: string
  Organisms: string[]
  DOI: string
  Mutations: boolean
  ExpressionSystem: string[]
  PrimaryCitationOfRelatedStructures: string[]
  Macromolecules: Macromolecules
  SmallMolecules: SmallMolecule[]
  ExperimentalDataSnapshot: ExperimentalDataSnapshot
  ExperimentalStatistics: ExperimentalDataSnapshot[] // 新
  vo: any
}

class Column {
  index: number
  data: string
}

class Macromolecules {
  constructor() {
    this.entitys = []
  }
  entitys: Entity[]
}

export class Entity {
  ID: number
  Molecule: string
  Chains: string
  SequenceLength: number
  Organism: string
}

export class SmallMolecule {
  constructor() {
    this.Chains = []
    this.Name = []
  }
  ID: string
  Chains: string[]
  Name: string[]
}

export class RadiationSource {
  ID: number
  Source: string
  Type: string
  WavelengthList: string
  SynchrotronSite: string
  Beamline: string
}

export class ExperimentalDataSnapshot {
  Method: string
  // X-RAY DIFFRACTION/other
  Resolution: string
  R_ValueFree: string
  R_ValueWork: string
  R_ValueObserved: string
  // SOLUTION NMR/SOLID-STATE NMR/THEORETICAL MODEL
  ConformersCalculated: string
  ConformersSubmitted: string
  SelectionCriteria: string
  // ELECTRON MICROSCOPY
  // Resolution:string
  AggregationState: string
  ReconstructionMethod: string

  // SOLUTION SCATTERING
  // Method: string

  // FIBER DIFFRACTION
  // Resolution:string

  // POWDER DIFFRACTION
  // null

  // FIBER DIFFRACTION
  // Resolution:string

  // INFRARED SPECTROSCOPY
  // Method: string

  // FLUORESCENCE TRANSFER
  // Method: string
}
