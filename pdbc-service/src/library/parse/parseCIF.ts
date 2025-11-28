const { cifParser } = require('cif-to-json')
const axios = require('axios')
const fs = require('fs')
const _ = require('lodash')

const PARSE_CONFIG: any = [
  //   ['_exptl.', [['method', 'Method']]],

  //   ['_pdbx_nmr_ensemble.'],
  //   ['_em_experiment.'],
  //   ['_em_3d_reconstruction.'],
  //   // Search
  [
    ['_entity_src_gen.', 'EntitySrcGen', 'EntitySrcGen'],
    [
      ['id', 'ID'],
      ['pdbx_gene_src_scientific_name', 'Organisms'],
      ['pdbx_host_org_scientific_name', 'ExpressionSystem'],
      ['pdbx_gene_src_scientific_name', 'EntityOrganism'],
    ],
  ],

  [
    ['_pdbx_nmr_ensemble.', 'NMR', 'Ensemble'],
    [
      ['entry_id', 'ID'],
      ['conformers_calculated_total_number', 'ConformersCalculated'],
      ['conformers_submitted_total_number', 'ConformersSubmitted'],
      ['conformer_selection_criteria', 'SelectionCriteria'],
    ],
  ],

  [
    ['_em_experiment.', 'EM', 'Experiment'],
    [
      ['entry_id', 'ID'],
      ['aggregation_state', 'AggregationState'],
      ['reconstruction_method', 'ReconstructionMethod'],
    ],
  ],

  [
    ['_em_3d_reconstruction.', 'EM3D', 'Reconstruction'],
    [
      ['entry_id', 'ID'],
      ['resolution', 'Resolution'],
    ],
  ],

  [
    ['_entity.', 'Entity', 'Entity'],
    [
      ['id', 'ID'],
      ['pdbx_description', 'Molecule'],
      ['pdbx_fragment', 'Fragment'],
    ],
  ],

  [
    ['_struct_ref_seq.', 'StructRef', 'Seq'],
    [
      ['align_id', 'ID'],
      ['seq_align_end', 'SequenceLength'],
    ],
  ],

  //   [
  //     '_refine.',
  //     [
  //       ['ls_d_res_high', 'Resolution', 'Å'],
  //       ['ls_R_factor_R_free', 'R-Value Free'],
  //       ['ls_R_factor_R_work', 'R-Value Work'],
  //       ['ls_R_factor_obs', 'R-Value Observed'],
  //     ],
  //   ],

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
    ['_cell.', 'Crystal Data', 'Unit Cell', [2, ['Length ( Å )', 'Angle ( ˚ )']]],
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
  [['_symmetry.', 'Crystal Data', 'Symmetry'], [['space_group_name_H-M', 'Space Group']]],

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
      ['entry_id', 'ID'],
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
    ['_refine_hist.', 'Refinement', 'Non-Hydrogen Atoms Used in Refinement', [1, ['Non-Hydrogen Atoms', 'Number']]],
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
]
export const parseCIF = (content) => {
  let cifJson = cifParser(content)
  let rawResult = {}
  let result = {}

  //   解析原始数据
  for (let [key, convert] of PARSE_CONFIG) {
    let category, table, objectNames

    if (_.isArray(key)) {
      category = key[1]
      table = key[2]
      objectNames = key[3]
      key = key[0]
    }

    if (cifJson[key]) {
      // 数组格式 or 字符串格式
      if (_.isString(convert)) {
        result[convert] = cifJson[key]
      } else {
        rawResult[key] = cifJson[key]
      }
    } else {
      // 对象格式
      rawResult[key] = [].concat(
        _.pickBy(cifJson, (v, k) => {
          return k.indexOf(key) == 0
        })
      )
    }

    // console.log('rawResult', rawResult['_entity_src_gen.'])

    // 转换数据
    if (convert && table) {
      // 填入的数据
      let inserts = rawResult[key].map((vo) => {
        //  取出提取字段
        let newVO = _.pick(vo, _.flatten(convert.map((v) => [].concat(v[0]).map((v2) => key + v2))))
        // key值替换
        newVO = _.mapKeys(newVO, (v, k) => _.find(convert, ([k1]) => _.find([].concat(k1), (k2) => key + k2 == k))[1])
        // 增加后缀
        for (let [, k2, end] of convert) {
          if (end) {
            newVO[k2] += ' ' + end
          }
        }
        return newVO
      })

      // 特殊格式转换
      if (objectNames && _.keys(inserts[0]).length > 0) {
        let [way, values] = objectNames
        switch (way) {
          case 1:
            {
              inserts = _.keys(inserts[0]).map((key) => ({
                [values[0]]: key,
                [values[1]]: inserts[0][key],
              }))
            }
            break
          case 2:
            {
              console.log(55, _.keys(inserts[0]))
              let keys = _.keys(inserts[0])
              let [fKeys, eKeys] = _.chunk(keys, keys.length / 2)
              inserts = fKeys.map((key, i) => ({
                [values[0]]: `${key} = ${inserts[0][key]}`,
                [values[1]]: `${eKeys[i]} = ${inserts[0][eKeys[i]]}`,
              }))
            }
            break
        }
      }
      // 填入
      if (_.has(result, [category, table])) {
        // 已经存在则补全 _diffrn等存在多表合一
        _.get(result, [category, table]).forEach((vo, i) => {
          _.assign(vo, inserts[i])
        })
      } else {
        _.set(result, [category, table], inserts)
      }
    }
  }

  return result
}

// const main = async () => {
//   //   let {data} = await axios.get('https://files.rcsb.org/header/4NY6.cif')
//   let NAME = ['6GUA', '4NY6', '7S0Y','1FL5'][3]
//   //   let res = await fs.readFileSync('./test/4NY6.cif')
//   //   let res = await fs.readFileSync('./test/7S0Y.cif')
//   let res = await fs.readFileSync(`./${NAME}.cif`)
//   let content = res.toString()

//   let result = parseCIF(content)

//   console.log(NAME)
//   console.log(JSON.stringify(result, null, 2))
// }
// //
// main()
