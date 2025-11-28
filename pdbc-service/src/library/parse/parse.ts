// const { cifParser } = require('cif-to-json') // 废弃 部分数据不准确 如：7R8E#_chem_comp
import CIF from 'libs/ciftools';
const axios = require('axios');
const fs = require('fs');
const _ = require('lodash');
const { rest } = require('lodash');

const cifParser = (cifText) => {
  const comp = CIF.Text.parse(cifText);
  const result = {};
  // return comp['result']['dataBlocks'][0]['categories']
  // 格式化
  comp['result']['dataBlocks'][0]['categories'].map((vo, index) => {
    vo = vo.toJSON();
    let node = {};
    const tableKey = vo.name;
    const rows = vo['rows'].map((vo) => {
      const _vo = {};
      for (const key in vo) {
        if (Object.prototype.hasOwnProperty.call(vo, key)) {
          _vo[tableKey + '.' + key] = vo[key];
        }
      }
      return _vo;
    });
    result[tableKey + '.'] = rows;
  });
  return result;
};

// Summary - Experimental Data Snapshot
const PARSE_SUMMARY_CONFIG = [
  [['_exptl.', 'Experimental Data Snapshot'], [['method', 'Method']]],
  [
    ['_pdbx_nmr_ensemble.', 'SOLUTION NMR'],
    [
      ['conformers_calculated_total_number', 'Conformers Calculated'],
      ['conformers_submitted_total_number', 'Conformers Submitted'],
      ['conformer_selection_criteria', 'Selection Criteria'],
    ],
  ],
  [
    ['_pdbx_nmr_ensemble.', 'SOLID-STATE NMR'],
    [
      ['conformers_calculated_total_number', 'Conformers Calculated'],
      ['conformers_submitted_total_number', 'Conformers Submitted'],
      ['conformer_selection_criteria', 'Selection Criteria'],
    ],
  ],
  [
    ['_em_3d_reconstruction.', 'ELECTRON MICROSCOPY'],
    [['resolution', 'Resolution', 'Å']],
  ],
  [
    ['_em_experiment.', 'ELECTRON MICROSCOPY'],
    [
      ['aggregation_state', 'Aggregation State'],
      ['reconstruction_method', 'Reconstruction Method'],
    ],
  ],
  [['_refine.', 'FIBER DIFFRACTION'], [['ls_d_res_high', 'Resolution', 'Å']]],
  [
    ['_refine.', 'NEUTRON DIFFRACTION'],
    [
      ['ls_d_res_high', 'Resolution', 'Å'],
      ['ls_R_factor_R_free', 'R-Value Free'],
      ['ls_R_factor_R_work', 'R-Value Work'],
      ['ls_R_factor_obs', 'R-Value Observed'],
    ],
  ],
  [
    ['_refine.', 'X-RAY DIFFRACTION'],
    [
      ['ls_d_res_high', 'Resolution', 'Å'],
      ['ls_R_factor_R_free', 'R-Value Free'],
      ['ls_R_factor_R_work', 'R-Value Work'],
      ['ls_R_factor_obs', 'R-Value Observed'],
    ],
  ],
];

const TEST_CONFIG = [
  [['_exptl.', 'exptl'], [['method', 'Method']]],
  [
    ['_refine.', 'Refine'],
    [
      ['pdbx_refine_id', 'Method'],
      ['ls_d_res_high', 'Resolution', 'Å'],
      ['ls_R_factor_R_free', 'R-Value Free'],
      ['ls_R_factor_R_work', 'R-Value Work'],
      ['ls_R_factor_obs', 'R-Value Observed'],
    ],
  ],
  [
    ['_pdbx_nmr_ensemble.', 'Ensemble'],
    [
      ['conformers_calculated_total_number', 'Conformers Calculated'],
      ['conformers_submitted_total_number', 'Conformers Submitted'],
      ['conformer_selection_criteria', 'Selection Criteria'],
    ],
  ],
  [
    ['_em_3d_reconstruction.', 'Reconstruction'],
    [['resolution', 'ResolutionEM', 'Å']],
  ],
  [
    ['_em_experiment.', 'ELECTRON MICROSCOPY'],
    [
      ['aggregation_state', 'Aggregation State'],
      ['reconstruction_method', 'Reconstruction Method'],
    ],
  ],
];

const parseSummary = (cifJson: any) => {
  let rawResult: any = {};
  let result: any = {};

  //   解析原始数据
  for (let [keyOrigin, convert] of PARSE_SUMMARY_CONFIG) {
    let table: any, objectNames: any, key: any;
    if (_.isArray(keyOrigin)) {
      table = keyOrigin[1];
      objectNames = keyOrigin[2];
      key = keyOrigin[0];
    } else {
      key = keyOrigin;
    }
    if (cifJson[key]) {
      // 数组格式
      rawResult[key] = cifJson[key];
    } else {
      // 对象格式
      rawResult[key] = [].concat(
        _.pickBy(cifJson, (v, k) => {
          return k.indexOf(key) == 0;
        }),
      );
    }
    // 移除？数据
    rawResult[key] = rawResult[key].map((vo) => _.pickBy(vo, (v) => v != '?'));

    // console.log('rawResult', rawResult)

    // 转换数据
    if (convert && table) {
      // 填入的数据
      let inserts = rawResult[key].map((vo) => {
        //  取出提取字段
        let newVO: any = _.pick(
          vo,
          _.flatten(convert.map((v) => [].concat(v[0]).map((v2) => key + v2))),
        );
        // key值替换
        newVO = _.mapKeys(
          newVO,
          (v, k) =>
            _.find(convert, ([k1]) =>
              _.find([].concat(k1), (k2) => key + k2 == k),
            )[1],
        );

        // 增加后缀
        for (let [, k2, end] of convert) {
          if (end) {
            newVO[k2] += ' ' + end;
          }
        }
        return newVO;
      });

      // 特殊格式转换
      if (objectNames) {
        let [way, values] = objectNames;
        switch (way) {
          case 1:
            {
              inserts = _.keys(inserts[0]).map((key) => ({
                [values[0]]: key,
                [values[1]]: inserts[0][key],
              }));
            }
            break;
          case 2:
            {
              let keys = _.keys(inserts[0]);
              let [fKeys, eKeys] = _.chunk(keys, keys.length / 2);
              inserts = fKeys.map((key, i) => ({
                [values[0]]: `${key} = ${inserts[0][key]}`,
                [values[1]]: `${eKeys[i]} = ${inserts[0][eKeys[i]]}`,
              }));
            }
            break;
        }
      }
      // 填入
      if (_.has(result, [table])) {
        // 已经存在则补全 _diffrn等存在多表合一
        _.get(result, [table]).forEach((vo, i) => {
          _.assign(vo, inserts[i]);
        });
      } else {
        _.set(result, [table], inserts);
      }
    }
  }

  // 补全内容
  let MAIN_KEY = 'Experimental Data Snapshot';
  let METHOD = 'Method';
  result[MAIN_KEY] = result[MAIN_KEY].map((vo) => ({
    ...vo,
    ...(result[vo[METHOD]] ? result[vo[METHOD]][0] : null),
  }));
  result = _.pick(result, [MAIN_KEY]);

  return result;
};

const PARSE_EXPERIMENT_CONFIG = [
  // Crystallization - Crystalization Experiments
  [
    ['_exptl_crystal_grow.', 'Crystallization', 'Crystalization Experiments'],
    [
      ['crystal_id', 'ID'],
      ['method', 'Method'],
      ['pH', 'pH'],
      ['temp', 'Temperature'],
      ['pdbx_details', 'Details'],
    ],
  ],
  // Crystallization - Crystal Properties
  [
    ['_exptl_crystal.', 'Crystallization', 'Crystal Properties'],
    [
      ['density_Matthews', 'Matthews coefficient'],
      ['density_percent_sol', 'Solvent content'],
    ],
  ],

  // Crystal Data - Unit Cell
  [
    [
      '_cell.',
      'Crystal Data',
      'Unit Cell',
      [2, ['Length ( Å )', 'Angle ( ˚ )']],
    ],
    [
      ['length_a', 'a'],
      ['length_b', 'b'],
      ['length_c', 'c'],
      ['angle_alpha', 'α'],
      ['angle_beta', 'β'],
      ['angle_gamma', 'γ'],
    ],
  ],
  // Crystal Data - Symmetry
  [
    ['_symmetry.', 'Crystal Data', 'Symmetry'],
    [['space_group_name_H-M', 'Space Group']],
  ],

  // Diffraction - Diffraction Experiment
  [
    ['_diffrn.', 'Diffraction', 'Diffraction Experiment'],
    [
      ['id', 'ID #'],
      ['crystal_id', 'Crystal ID'],
      ['ambient_temp', 'Data Collection Temperature'],
    ],
  ],
  [
    ['_diffrn_detector.', 'Diffraction', 'Diffraction Experiment'],
    [
      ['detector', 'Detector'],
      ['type', 'Detector Type'],
      ['details', 'Details'],
      ['pdbx_collection_date', 'Collection Date'],
    ],
  ],
  [
    ['_diffrn_radiation.', 'Diffraction', 'Diffraction Experiment'],
    [
      ['pdbx_scattering_type', 'Scattering Type'],
      ['pdbx_monochromatic_or_laue_m_l', 'Monochromator'],
      ['pdbx_diffrn_protocol', 'Protocol'],
    ],
  ],
  // Diffraction - Radiation Source
  [
    ['_diffrn_source.', 'Diffraction', 'Radiation Source'],
    [
      ['diffrn_id', 'ID #'],
      ['source', 'Source'],
      ['type', 'Type'],
      ['pdbx_wavelength_list', 'Wavelength List'],
      ['pdbx_synchrotron_site', 'Synchrotron Sit'],
      ['pdbx_synchrotron_beamline', 'Beamline'],
    ],
  ],

  // Data Collection - Overall
  [
    //   key, CATEGORY, NAME, convertWay
    ['_reflns.', 'Data Collection', 'Overall'],
    [
      ['pdbx_ordinal', 'ID #'],
      ['d_resolution_high', 'Resolution (High)'],
      ['d_resolution_low', 'Resolution (Low)'],
      ['percent_possible_obs', 'Percent Possible (Observed)'],
      ['pdbx_Rmerge_I_obs', 'R Merge I (Observed)'],
      [['pdbx_rrim_iall', 'pdbx_Rrim_I_all'], 'Rrim I (All)'],
      [['pdbx_rpim_iall', 'pdbx_Rpim_I_all'], 'Rpim I (All)'],
      [['pdbx_cchalf', 'pdbx_CC_half'], 'CC (Half)'],
      ['pdbx_netI_over_sigmaI', 'Net I Over Average Sigma (I)'],
      ['pdbx_redundancy', 'Redundancy'],
      ['number_all', 'Number Reflections (All)'],
      ['number_obs', 'Number Reflections (Observed)'],
      ['observed_criterion_sigma_f', 'Observed Criterion Sigma (F)'],
      ['observed_criterion_sigma_i', 'Observed Criterion Sigma (I)'],
      ['B_iso_Wilson_estimate', 'B (Isotropic) From Wilson Plot'],
    ],
  ],
  // Data Collection - Highest Resolution Shell
  [
    ['_reflns_shell.', 'Data Collection', 'Highest Resolution Shell'],
    [
      ['pdbx_diffrn_id', 'ID #'],
      ['d_res_high', 'Resolution (High)'],
      ['d_res_low', 'Resolution (Low)'],
      [['pdbx_rrim_iall', 'pdbx_Rrim_I_all'], 'Rrim I (All)'],
      [['pdbx_rpim_iall', 'pdbx_Rpim_I_all'], 'Rpim I (All)'],
      [['pdbx_cchalf', 'pdbx_CC_half'], 'CC (Half)'],
      ['Rmerge_I_obs', 'R Merge I (Observed)'],
      ['meanI_over_sigI_obs', 'Mean I Over Sigma (Observed)'],
      ['pdbx_redundancy', 'Redundancy'],
    ],
  ],

  // Refinement - Statistics
  [
    ['_refine.', 'Refinement', 'Statistics'],
    [
      ['pdbx_refine_id', 'Diffraction ID'],
      ['pdbx_method_to_determine_struct', 'Structure Solution Method'],
      ['pdbx_ls_cross_valid_method', 'Cross Validation method'],
      ['pdbx_starting_model', 'Starting model'],
      ['ls_d_res_high', 'Resolution (High)'],
      ['ls_d_res_low', 'Resolution (Low)'],
      ['ls_number_reflns_obs', 'Number Reflections (Observed)'],
      ['ls_number_reflns_R_free', 'Number Reflections (R-Free)'],
      ['ls_percent_reflns_obs', 'Percent Reflections (Observed)'],
      ['ls_R_factor_obs', 'R-Factor (Observed)'],
      ['ls_R_factor_R_work', 'R-Work'],
      ['ls_R_factor_R_free', 'R-Free'],
      ['pdbx_R_Free_selection_details', 'R-Free Selection Details'],
      ['B_iso_mean', 'Mean Isotropic B'],
    ],
  ],
  // Refinement - Statistics
  [
    ['_refine.', 'Refinement', 'Temperature Factor Modeling'],
    [
      ['aniso_B[1][1]', 'Anisotropic B[1][1]'],
      ['aniso_B[2][2]', 'Anisotropic B[2][2]'],
      ['aniso_B[3][3]', 'Anisotropic B[3][3]'],
    ],
  ],
  // Refinement - RMS Deviations
  [
    ['_refine_ls_restr.', 'Refinement', 'RMS Deviations'],
    [
      ['type', 'Key'],
      ['dev_ideal', 'Refinement Restraint Deviation'],
    ],
  ],
  // Refinement - Non-Hydrogen Atoms Used in Refinement
  [
    [
      '_refine_hist.',
      'Refinement',
      'Non-Hydrogen Atoms Used in Refinement',
      [1, ['Non-Hydrogen Atoms', 'Number']],
    ],
    [
      ['pdbx_number_atoms_protein', 'Protein Atoms'],
      ['pdbx_number_atoms_nucleic_acid', 'Nucleic Acid Atoms'],
      ['number_atoms_solvent', 'Solvent Atoms'],
      ['pdbx_number_atoms_ligand', 'Heterogen Atoms'],
    ],
  ],

  // Software - Software
  [
    ['_software.', 'Software', 'Software'],
    [
      ['name', 'Software Name'],
      ['classification', 'Purpose'],
    ],
  ],
  // Software - NMR Ensemble Information
  [
    ['_pdbx_nmr_ensemble.', 'Software', 'NMR Ensemble Information'],
    [
      ['conformer_selection_criteria', 'Conformer Selection Criteria'],
      [
        'conformers_calculated_total_number',
        'Conformers Calculated Total Number',
      ],
      [
        'conformers_submitted_total_number',
        'Conformers Submitted Total Number',
      ],
    ],
  ],
];
const parseExpirment = (cifJson) => {
  let rawResult = {};
  let result = {};

  //   解析原始数据
  for (let [keyOrigin, convert] of PARSE_EXPERIMENT_CONFIG) {
    let category, table, objectNames, key;
    if (_.isArray(keyOrigin)) {
      category = keyOrigin[1];
      table = keyOrigin[2];
      objectNames = keyOrigin[3];
      key = keyOrigin[0];
    } else {
      key = keyOrigin;
    }
    if (cifJson[key]) {
      // 数组格式
      rawResult[key] = cifJson[key];
    } else {
      // 对象格式
      rawResult[key] = [].concat(
        _.pickBy(cifJson, (v, k) => {
          return k.indexOf(key) == 0;
        }),
      );
    }
    // 移除？数据
    rawResult[key] = rawResult[key].map((vo) => _.pickBy(vo, (v) => v != '?'));

    // console.log('rawResult', rawResult)

    // 转换数据
    if (convert && table && rawResult[key]) {
      // 填入的数据
      let inserts = rawResult[key].map((vo) => {
        //  取出提取字段
        let newVO: any = _.pick(
          vo,
          _.flatten(convert.map((v) => [].concat(v[0]).map((v2) => key + v2))),
        );
        // key值替换
        newVO = _.mapKeys(
          newVO,
          (v, k) =>
            _.find(convert, ([k1]) =>
              _.find([].concat(k1), (k2) => key + k2 == k),
            )[1],
        );
        // 增加后缀
        for (let [, k2, end] of convert) {
          if (end) {
            newVO[k2.toString()] = newVO[k2.toString()] + ' ' + end;
          }
        }
        return newVO;
      });
      // 移除？数据
      rawResult[key] = rawResult[key].map((vo) =>
        _.pickBy(vo, (v) => v != '?'),
      );

      // 特殊格式转换
      if (objectNames) {
        let [way, values] = objectNames;
        switch (way) {
          case 1:
            {
              inserts = _.keys(inserts[0]).map((key) => ({
                [values[0]]: key,
                [values[1]]: inserts[0][key],
              }));
            }
            break;
          case 2:
            {
              let keys = _.keys(inserts[0]);
              if (keys.length) {
                // console.log('keys: ', keys, inserts[0])
                let [fKeys, eKeys] = _.chunk(keys, keys.length / 2);
                inserts = fKeys.map((key, i) => ({
                  [values[0]]: `${key} = ${inserts[0][key]}`,
                  [values[1]]: `${eKeys[i]} = ${inserts[0][eKeys[i]]}`,
                }));
              }
            }
            break;
        }
      }
      // 填入
      if (_.has(result, [category, table])) {
        // 已经存在则补全 _diffrn等存在多表合一
        _.get(result, [category, table]).forEach((vo, i) => {
          _.assign(vo, inserts[i]);
        });
      } else {
        _.set(result, [category, table], inserts);
      }
    }
  }
  // 移除？内容，移除空对象
  for (let key1 in result) {
    result[key1] = _.pickBy(result[key1], (v, k) => {
      return 0 < v.filter((v2) => _.keys(v2).length).length;
    });
  }
  result = _.pickBy(result, (v, k) => _.keys(v).length);

  return result;
};

// ["表名","转化名称"],[["字段名称","转化字段名称（最后带s表示数组 不支持索引为0的）"]]
const PARSE_MACROMOLECULES_CONFIG = [
  [
    ['_entity.', 'entity'],
    [
      ['id', 'ID'],
      ['type', 'type'],
      ['pdbx_description', 'Molecule'],
    ],
  ],
  [
    ['_entity_src_gen.', 'entitySrcGen'],
    [
      ['entity_id', 'ID'],
      ['pdbx_gene_src_scientific_name', 'Organisms'],
    ],
  ],
  [
    ['_entity_src_nat.', 'entitySrcNat'],
    [
      ['entity_id', 'ID'],
      ['pdbx_organism_scientific', 'Organisms'],
    ],
  ],
  [
    ['_pdbx_entity_src_syn.', 'entitySrcSyn'],
    [
      ['entity_id', 'ID'],
      ['organism_scientific', 'Organisms'],
    ],
  ],
  [
    ['_struct_ref_seq_dif.', 'structRefSeq'],
    [
      ['align_id', 'ID'],
      ['pdbx_auth_seq_num', 'Sequence Length'],
    ],
  ],
  [
    ['_entity_poly_seq.', 'entityPolySeq'],
    [
      ['entity_id', 'ID'],
      ['num', 'Sequence Length'],
    ],
  ],
  [
    ['_struct_asym.', 'structAsym'],
    [
      ['entity_id', 'ID'],
      ['id', 'chains'],
    ],
  ],
];

const PARSE_SMALL_MOLECULES_CONFIG = [
  [['_pdbx_nonpoly_scheme.', 'nonpolyScheme'], [['mon_id', 'ID']]],
  [
    ['_pdbx_nonpoly_scheme.', '_nonpolyScheme'],
    [
      ['mon_id', 'ID'],
      ['asym_id', 'asymIDs'],
      ['pdb_strand_id', 'strandIDs'],
    ],
  ],
  [
    ['_chem_comp.', 'chemComp'],
    [
      ['id', 'ID'],
      ['name', 'Name'],
      ['formula', 'Formula'],
    ],
  ],
];

const SUMMARY_BASIS_CONFIG = [
  [
    ['_struct.', 'Struct'],
    [
      ['entry_id', 'ID'],
      ['title', 'Title'],
    ],
  ],
  [['_pdbx_deposit_group.', 'DepositGroup'], [['group_id', 'groupID']]],
  [['_pdbx_database_related.', 'Related'], [['db_id', 'EMDataResource']]],
  [['_struct_keywords.', 'Keywords'], [['pdbx_keywords', 'Classification']]],
  // [['_em_entity_assembly_recombinant.', 'Recombinant'], [['organism', 'Organism']]],

  [
    ['_pdbx_entity_src_syn.', 'SrcSyn'],
    [
      ['pdbx_src_id', 'srcID'],
      ['organism_scientific', '_Organisms'],
    ],
  ],
  [
    ['_entity_src_nat.', 'entitySrcNat'],
    [
      ['pdbx_src_id', 'srcID'],
      ['pdbx_organism_scientific', 'Organisms'],
    ],
  ],
  [
    ['_pdbx_entity_src_syn.', 'entitySrcSyn'],
    [
      ['pdbx_src_id', 'srcID'],
      ['organism_scientific', 'Organisms'],
    ],
  ],
  [
    ['_entity_src_gen.', 'Gen'],
    [
      ['pdbx_src_id', 'srcID'],
      ['pdbx_host_org_scientific_name', 'Expression Systems'],
      ['pdbx_gene_src_scientific_name', 'Organisms'],
    ],
  ],
  [['_struct_ref_seq_dif.', 'Dif'], [['details', 'Mutations']]],
  [['_citation.', 'Citation'], [['journal_abbrev', 'JournalAbbrev']]],
  [
    ['_pdbx_database_status.', 'Status'],
    [['recvd_initial_deposition_date', 'Deposited']],
  ],
  [
    ['_pdbx_audit_revision_history.', 'History', null, 0],
    [['revision_date', 'Released']],
  ],
  // [['_audit_author.', 'Author'], [['name', 'Authors']]],
  // [['_struct_keywords.', 'StructKeywords'], [['pdbx_keywords', 'Keywords']]],
];

// 结构关键字
const SUMMARY_STRUCT_KEYWORDS_CONFIG = [
  [
    ['_struct_keywords.', 'StructKeywords'],
    [
      ['entry_id', '_EntryID'],
      ['text', 'Text'],
      ['pdbx_keywords', 'PdbxKeywords'],
    ],
  ],
];
// 引用信息
const SUMMARY_CITATION_CONFIG = [
  [
    ['_citation.', 'Citation'],
    [
      ['abstract', 'Abstract'],
      ['abstract_id_CAS', 'AbstractIDCAS'],
      ['country', 'Country'],
      ['id', 'ID'],
      ['journal_abbrev', 'JournalAbbrev'],
      ['journal_id_ISSN', 'JournalIDISSN'],
      ['page_first', 'PageFirst'],
      ['page_last', 'PageLast'],
      ['pdbx_database_id_DOI', 'PDBXDatabaseIDDOI'],
      ['pdbx_database_id_PubMed', 'PDBXDatabaseIDPubMed'],
      ['title', 'Title'],
      ['year', 'Year'],
    ],
  ],
];
// 引用作者
const SUMMARY_CITATION_AUTHORS_CONFIG = [
  [
    ['_citation_author.', 'CitationAuthor'],
    [
      ['name', 'Name'],
      ['citation_id', 'ID'],
      ['ordinal', 'Ordinal'],
      ['identifier_ORCID', 'IdentifierORCID'],
    ],
  ],
];
// 审计作者
const SUMMARY_AUDIT_AUTHOR = [
  [
    ['_audit_author.', 'AuditAuthor'],
    [
      ['name', 'Name'],
      ['pdbx_ordinal', 'PdbxOrdinal'],
      ['identifier_ORCID', 'IdentifierORCID'],
    ],
  ],
];
//pdbx数据库状态
const SUMMARY_DATABASE_STATUS = [
  [
    ['_pdbx_database_status.', 'DatabaseStatus'],
    [
      ['status_code', 'StatusCode'],
      ['status_code_sf', 'StatusCodeSf'],
      ['status_code_mr', 'StatusCodeMr'],
      ['entry_id', '_EntryID'],
      ['recvd_initial_deposition_date', 'RecvdInitialDepositionDate'],
      ['SG_entry', 'SG_Entry'],
      ['deposit_site', 'DepositSite'],
      ['process_site', 'ProcessSite'],
      ['status_code_cs', 'StatusCodeCs'],
      ['status_code_nmr_data', 'StatusCodeNmrData'],
      ['methods_development_category', 'MethodsDevelopmentCategory'],
      ['pdb_format_compatible', 'PdbFormatCompatible'],
    ],
  ],
];
//pdbx数据库相关
const SUMMARY_DATABASE_RELATED = [
  [
    ['_pdbx_database_related.', 'DatabaseRelated'],
    [
      ['db_name', 'DbName'],
      ['details', 'Details'],
      ['db_id', 'DbID'],
      ['content_type', 'ContentType'],
    ],
  ],
];
//pdbx结构体程序集认证证据
const SUMMARY_STRUCT_ASSEMBLY_AUTH_EVIDENCE = [
  [
    ['_pdbx_struct_assembly_auth_evidence.', 'StructAssemblyAuthEvidence'],
    [
      ['id', 'ID'],
      ['assembly_id', 'AssemblyId'],
      ['experimental_support', 'ExperimentalSupport'],
      ['details', 'Details'],
    ],
  ],
];
//改进
const SUMMARY_REFINE = [
  [
    ['_refine.', 'Refine'],
    [
      ['pdbx_method_to_determine_struct', 'PdbxMethodToDetermineStruct'],
      ['B_iso_mean', 'BIsoMean'],
      ['ls_R_factor_obs', 'LsRFactorObs'],
      ['ls_R_factor_all', 'lsRFactorAll'],
      ['ls_R_factor_R_work', 'LsRFactorRWork'],
      ['ls_R_factor_R_free', 'lsRFactorRFree'],
      ['details', 'Details'],
    ],
  ],
];
//备份
const SUMMARY_REFLNS = [
  [
    ['_reflns.', 'Reflns'],
    [
      ['B_iso_Wilson_estimate', 'BIsoWilsonEstimate'],
      ['pdbx_redundancy', 'PdbxRedundancy'],
      ['percent_possible_obs', 'PercentPossibleObs'],
      ['pdbx_Rmerge_I_obs', 'PdbxRmergeIObs'],
    ],
  ],
];
//diffrn 探测器
const SUMMAPY_DIFFRN_DETECTOR = [
  [
    ['_diffrn_detector.', 'DiffrnDetector'],
    [
      ['detector', 'Detector'],
      ['diffrn_id', 'DiffrnID'],
      ['type', 'Type'],
      ['pdbx_collection_date', 'PdbxCollectionDate'],
    ],
  ],
];
//diffrn 来源
const SUMMAPY_DIFFRN_SOURCE = [
  [
    ['_diffrn_source.', 'DiffrnSource'],
    [
      ['diffrn_id', 'DiffrnID'],
      ['source', 'Source'],
      ['type', 'Type'],
      ['pdbx_wavelength_list', 'PdbxWavelengthList'],
      ['pdbx_synchrotron_beamline', 'PdbxSynchrotronBeamline'],
      ['pdbx_synchrotron_site', 'PdbxSynchrotronSite'],
    ],
  ],
];
//diffrn
const SUMMAPY_DIFFRN = [
  [
    ['_diffrn.', 'Diffrn'],
    [
      ['ambient_temp', 'AmbientTemp'],
      ['crystal_id', 'CrystalID'],
      ['id', 'ID'],
    ],
  ],
];
//细胞
const SUMMAPY_CELL = [
  [
    ['_cell.', 'Cell'],
    [
      ['length_a', 'LengthA'],
      ['length_b', 'LengthB'],
      ['length_c', 'LengthC'],
      ['angle_alpha', 'AngleAlpha'],
      ['angle_beta', 'AngleBeta'],
      ['angle_gamma', 'AngleGamma'],
    ],
  ],
];
// //相似性
// const SUMMAPY_SYMMETRY = [
//   [
//     ['_symmetry.', 'Symmetry'],
//     [
//       ['entry_id', 'entry_id'],
//       ['Int_Tables_number', 'IntTablesNumber'],
//       ['space_group_name_Hall', 'SpaceGroupNameHall'],
//       ['space_group_name_H-M', 'SpaceGroupNameH-M'],
//     ],
//   ],
// ];

// 审计支持信息
const AUDIT_SUPPORT_CONFIG = [
  [
    ['_pdbx_audit_support.', 'AuditSupport'],
    [
      ['funding_organization', 'FundingOrganization'],
      ['grant_number', 'GrantNumber'],
      ['country', 'Country'],
      ['ordinal', 'Ordinal'],
    ]
  ]
]

const parseCommon = (
  cifJson,
  matchStr = 'ID',
  config: any,
  disposeFun = null,
) => {
  let rawResult: any = {};
  let halfResult: any = {};
  let result = [];
  let assignIndex: any;
  //------------------开始提取关键数据数组并转化KEY(通用)------------------//
  for (let [keyOrigin, convert] of config) {
    let table: any, objectNames: any, key: any;
    if (_.isArray(keyOrigin)) {
      table = keyOrigin[1];
      objectNames = keyOrigin[2];
      key = keyOrigin[0];
      assignIndex = keyOrigin[3];
    } else {
      key = keyOrigin;
    }
    if (cifJson[key]) {
      // 数组格式
      rawResult[key] = cifJson[key];
    } else {
      // 对象格式
      rawResult[key] = [].concat(
        _.pickBy(cifJson, (v, k) => {
          return k.indexOf(key) == 0;
        }),
      );
    }
    // 移除？数据
    rawResult[key] = rawResult[key].map((vo) => _.pickBy(vo, (v) => v != '?'));
    // 转换数据
    if (convert && table) {
      let inserts = rawResult[key].map((vo) => {
        //  取出提取字段
        let newVO: any = _.pick(
          vo,
          _.flatten(convert.map((v) => [].concat(v[0]).map((v2) => key + v2))),
        );
        // key值替换

        newVO = _.mapKeys(
          newVO,
          (v, k) =>
            _.find(convert, ([k1]) =>
              _.find([].concat(k1), (k2) => key + k2 == k),
            )[1],
        );

        // 增加后缀
        for (let [, k2, end] of convert) {
          if (end) {
            // 四舍五入保留两位小数
            if (Number(newVO[k2])) {
              newVO[k2] = Number(newVO[k2]).toFixed(2);
            }
            newVO[k2] += ' ' + end;
          }
        }
        return newVO;
      });
      halfResult[table] = inserts;
    }
  }
  //------------------提取关键数据数组并转化KEY结束(通用)------------------//
  //------------------开始拼凑结果列表(定制)------------------//
  const keys = _.keys(halfResult);
  halfResult[keys[0]].map((v) => {
    let node = {};
    const matchStrValue = v[matchStr];
    node = Object.assign({ ...v });

    for (let index = 1; index < keys.length; index++) {
      const key = keys[index];
      const obj = _.filter(halfResult[key], (v) => {
        return v[matchStr] == matchStrValue;
      });
      // 提取key 最后带有s的(表示数组)
      // console.log(33333,halfResult)

      // 没有传入分组字符串或者当前表不包含分组字符串KEY 则直接合并
      if (matchStr == null || !halfResult[key][0][matchStr])
        obj[0] = halfResult[key][0];

      const _keys = _.filter(_.keys(obj[0]), (key) => {
        return key.lastIndexOf('s') == key.length - 1;
      });

      let _obj = {};
      _keys.map((key) => {
        const arr = _.map(obj, key);
        let vo = {};
        vo[key] = arr;
        _obj = _.assign(vo, _obj);
      });
      // 合并匹配记录中的最后一个
      if (assignIndex != null) {
        node = _.assign(node, _.assign(obj[assignIndex], _obj));
      } else {
        node = _.assign(node, _.assign(obj[obj.length - 1], _obj));
      }
    }

    result.push(node);
  });

  //------------------拼凑结果列表结束(定制)------------------//
  if (disposeFun) {
    result = disposeFun(result);
  }
  return result;
};

const parseCIF = (content) => {
  let cifJson = cifParser(content);
  return {
    summary: {
      basis: parseCommon(cifJson, null, SUMMARY_BASIS_CONFIG, (arr) => {
        arr.map((vo) => {
          if (
            vo['Mutations'] &&
            (vo['Mutations'].indexOf('engineered mutation') != -1 ||
              vo['Mutations'].indexOf('ENGINEERED') != -1)
          ) {
            vo['Mutation'] = 'YES';
            console.log(111, vo['Mutation']);
          } else {
            vo['Mutation'] = 'NO';
          }
          vo['DOI'] = `10.2210/pdb${vo['ID']}/pdb`;

          if (vo['Organisms']) {
            vo['Organisms'] = _.uniqWith(
              vo['Organisms'].concat(vo['_Organisms']),
              _.isEqual,
            );
            vo['Organisms'] = _.compact(vo['Organisms']);
            delete vo['_Organisms'];
          }
          if (vo['Expression Systems']) {
            vo['Expression Systems'] = _.uniqWith(vo['Expression Systems']);
          }
          delete vo['Mutations'];
        });
        return arr;
      }),
      citation: parseCommon(cifJson, null, SUMMARY_CITATION_CONFIG),
      citationAuthor: parseCommon(
        cifJson,
        null,
        SUMMARY_CITATION_AUTHORS_CONFIG,
      ),
      'Experimental Data Snapshot': parseCommon(
        cifJson,
        'Method',
        TEST_CONFIG,
        (arr) => {
          arr.map((vo, index) => {
            for (const key in vo) {
              if (Object.prototype.hasOwnProperty.call(vo, key)) {
                const element = vo[key];
                if (
                  element.indexOf('undefined') == 0 ||
                  element.indexOf('. Å') == 0
                ) {
                  delete vo[key];
                }
                if (
                  key == 'ResolutionEM' &&
                  element.indexOf('undefined') == -1
                ) {
                  arr[index]['Resolution'] = vo[key];
                  delete vo['ResolutionEM'];
                }
                if (key == 'Method' && vo[key] == 'POWDER DIFFRACTION') {
                  arr = [];
                }
                if (Number(vo[key])) {
                  arr[index][key] = Number(vo[key]).toFixed(2);
                }
              }
            }
            const lonelyMethod = [
              'THEORETICAL MODEL',
              'SOLUTION SCATTERING',
              'POWDER DIFFRACTION',
              'EPR',
              'FLUORESCENCE TRANSFER',
              'INFRARED SPECTROSCOPY',
            ];
            if (lonelyMethod.indexOf(vo['Method']) != -1) {
              arr[index] = { Method: vo['Method'] };
            }

            if (
              vo['Method'] == 'X-RAY DIFFRACTION' ||
              vo['Method'] == 'NEUTRON DIFFRACTION' ||
              vo['Method'] == 'ELECTRON CRYSTALLOGRAPHY'
            ) {
              arr[index] = {
                Method: vo['Method'],
                Resolution: vo['Resolution'],
                'R-Value Free': vo['R-Value Free'],
                'R-Value Work': vo['R-Value Work'],
                'R-Value observed': vo['R-Value Observed'],
              };
            }
            if (
              vo['Method'] == 'SOLUTION NMR' ||
              vo['Method'] == 'SOLID-STATE NMR'
            ) {
              arr[index] = {
                Method: vo['Method'],
                'Conformers Calculated': vo['Conformers Calculated'],
                'Conformers Submitted': vo['Conformers Submitted'],
                'Selection Criteria': vo['Selection Criteria'],
              };
            }
            if (vo['Method'] == 'ELECTRON MICROSCOPY') {
              arr[index] = {
                Method: vo['Method'],
                'Aggregation State': vo['Aggregation State'],
                'Reconstruction Method': vo['Reconstruction Method'],
                Resolution: vo['Resolution'],
              };
            }
            if (vo['Method'] == 'FIBER DIFFRACTION') {
              arr[index] = {
                Method: vo['Method'],
                Resolution: vo['Resolution'],
                'R-Value Work': vo['R-Value Work'],
                'R-Value observed': vo['R-Value observed'],
              };
            }
            // 删除为空的属性
            for (const key in vo) {
              if (Object.prototype.hasOwnProperty.call(vo, key)) {
                const element = vo[key];
                if (!element) {
                  delete vo[key];
                }
              }
            }
          });
          return arr;
        },
      ),
      macromolecules: parseCommon(
        cifJson,
        'ID',
        PARSE_MACROMOLECULES_CONFIG,
        (arr) => {
          let result = _.filter(arr, (o) => {
            o['Organisms'] = _.uniqWith(o['Organisms']);
            return o['type'] == 'polymer';
          });
          return result;
        },
      ),
      SmallMolecules: parseCommon(
        cifJson,
        'ID',
        PARSE_SMALL_MOLECULES_CONFIG,
        (arr) => {
          // 过滤 水和重水
          let result = _.filter(arr, (o) => {
            return o['ID'] != 'HOH' && o['ID'] != 'DOD';
          });
          // 过滤重复
          result = _.uniqBy(result, 'ID');
          // 拼凑 Chains

          result.map((vo) => {
            const chains = [];
            vo['asymIDs'] &&
              vo['asymIDs'].map((asymID, index) => {
                chains.push(`${asymID} [auth ${vo['strandIDs'][index]}]`);
              });
            vo['Chains'] = chains;
            delete vo['asymIDs'];
            delete vo['strandIDs'];
          });

          return result;
        },
      ),
      structKeywords: parseCommon(
        cifJson,
        null,
        SUMMARY_STRUCT_KEYWORDS_CONFIG,
      ),
      auditAuthor: parseCommon(cifJson, null, SUMMARY_AUDIT_AUTHOR),
      databaseStatus: parseCommon(cifJson, null, SUMMARY_DATABASE_STATUS),
      databaseRelated: parseCommon(cifJson, null, SUMMARY_DATABASE_RELATED),
      structAssemblyAuthEvidence: parseCommon(
        cifJson,
        null,
        SUMMARY_STRUCT_ASSEMBLY_AUTH_EVIDENCE,
      ),
      refine: parseCommon(cifJson, null, SUMMARY_REFINE),
      reflns: parseCommon(cifJson, null, SUMMARY_REFLNS),
      diffrnDetector: parseCommon(cifJson, null, SUMMAPY_DIFFRN_DETECTOR),
      diffrnSource: parseCommon(cifJson, null, SUMMAPY_DIFFRN_SOURCE),
      diffrn: parseCommon(cifJson, null, SUMMAPY_DIFFRN),
      cell: parseCommon(cifJson, null, SUMMAPY_CELL),
      // symmetry: parseCommon(cifJson, null, SUMMAPY_SYMMETRY),
    },
    expirment: parseExpirment(cifJson),
    auditSupport: parseCommon(cifJson,null, AUDIT_SUPPORT_CONFIG),
  };
};
function retain(num, decimal) {
  num = num.toString();
  let index = num.indexOf('.');
  if (index !== -1) {
    num = num.substring(0, decimal + index + 1);
  } else {
    num = num.substring(0);
  }
  return parseFloat(num).toFixed(decimal);
}
export default parseCIF;
