let content = `pdbx_ordinal	ID #
dresolution_high	Resolution (High)
dresolution_low	Resolution (Low)
percent_possible_obs	Percent Possible (Observed)
pdbx_rmerge_iobs	R Merge I (Observed)
pdbx_rrim_iall	Rrim I (All)
pdbx_rpim_iall	Rpim I (All)
pdbx_cchalf	CC (Half)
pdbx_net_iover_sigma_i	Net I Over Average Sigma (I)
pdbx_redundancy	Redundancy
number_all	Number Reflections (All)
number_obs	Number Reflections (Observed)
observed_criterion_sigma_f	Observed Criterion Sigma (F)
observed_criterion_sigma_i	Observed Criterion Sigma (I)
biso_wilson_estimate	B (Isotropic) From Wilson Plot`
let ret = []
for (let line of content.split('\n')) {
  let [key, value] = line.split('\t')
  ret.push([key, value])
  // console.log('key, value: ', line.indexOf('\t'), key, value)
}
console.log(JSON.stringify(ret))
