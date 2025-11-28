export const THEME = {
  红: { 1: 'red_deep_theme', 2: 'red_middle_theme', 3: 'red_shallow_theme' },
  绿: {
    1: 'green_deep_theme',
    2: 'green_middle_theme',
    3: 'green_shallow_theme',
  },
  蓝: { 1: 'blue_deep_theme', 2: 'blue_middle_theme', 3: 'blue_shallow_theme' },
  黄: {
    1: 'yellow_deep_theme',
    2: 'yellow_middle_theme',
    3: 'yellow_shallow_theme',
  },
  黑白: 'black_theme',
};

export const THEME_COLOR_LIST = {
  red_deep_theme: '#a21a20',
  green_deep_theme: '#385723',
  blue_deep_theme: '#203864',
  yellow_deep_theme: '#b07736',
  red_middle_theme: 'rgba(192, 0, 0, 1)',
  green_middle_theme: 'rgba(27, 129, 62, 1)',
  blue_middle_theme: 'rgba(0, 92, 175, 1)',
  yellow_middle_theme: 'rgba(235, 177, 13, 1)',
  red_shallow_theme: 'rgba(230, 46, 66, 1)',
  green_shallow_theme: 'rgba(80, 179, 126, 1)',
  blue_shallow_theme: 'rgba(89, 157, 227, 1)',
  yellow_shallow_theme: 'rgba(217, 205, 144, 1)',
};

export enum MENU_TYPE {
  'desposit' = 'desposit',
  'search' = 'search',
  'visualize' = 'visualize',
  'download' = 'download',
  'documentation' = 'documentation',
}

export enum OPERATOR {
  'exact_match' = 'is',
  'contains_words' = 'has any of words',
  'contains_phrase' = 'has exact phrase',
  'exists' = 'is not empty',
  'in' = 'is any of', //传数组，逗号隔开
  'equals' = '=',
  'greater' = '>',
  'greater_or_equal' = '>=',
  'less' = '<',
  'less_or_equal' = '<=',
  'range_upper_excl' = 'range (upper excl.)', //传数组，逗号隔开
  'range_upper_incl' = 'range (upper incl.)', //传数组，逗号隔开
  'last_seven_days_range' = 'last 7 days',
  'last_thirty_days_range' = 'last 30 days',
}

export enum SUBSCRIBE_CHANNEL {
  '微信' = 'wechat',
  '邮件' = 'email',
  'rss' = 'rss',
}
export enum SUBSCRIBE_CHANNEL_NAME {
  'wechat' = '微信',
  'email' = '邮件',
  'rss' = 'rss',
}
// WechatScanLog 状态
export enum WechatScanLogStatus {
  // 待扫码
  waitScan = 'waitScan',
  // 已扫码
  scanned = 'scanned',
  // 已过期
  expired = 'expired',
}

//检索页列表显示形式
export enum LIST_VIEW_TYPE {
  'list-outlined' = 'list-outlined',
  'grid' = 'grid',
  'list' = 'list',
}
//检索联想数据类型
export enum SUGGEST_STATUS {
  // "in Entry ID(s)"
  RELEASED = 'released',
  // unreleased 7XKW "in Unreleased Structures"
  UNRELEASED = 'unreleased',
  // 已删除 1A20 "in Obsolete PDB IDs"
  DELETED = 'deleted',
  //小分子
  chemical = 'chemical', //小分子
}

export enum SUGGEST_STATUS_NAME {
  released = 'in Entry ID(s)',
  unreleased = 'in Unreleased Structures',
  deleted = 'in Obsolete PDB IDs',
  chemical = 'in Chemical ID(s)',
}

export const METHODS: any = {
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
    'reconstruction',
    'emSoftware',
    'mapModelFittingAndRefinement',
    'imageProcessing',
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
