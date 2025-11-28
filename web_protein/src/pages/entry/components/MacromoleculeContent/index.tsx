import styles from './styles.less';
import { Tooltip } from 'antd';

export default (props: any) => {
  const { macromoleculeContent } = props;
  const {
    totalStructureWeight,
    atomCount,
    modelledResidueCount,
    depositedResidueCount,
    uniqueProteinChains,
    uniqueNucleicAcidChains,
  } = macromoleculeContent || {};
  if (!macromoleculeContent || JSON.stringify(macromoleculeContent) === '{}') {
    return null;
  }
  return (
    <div className={styles.card_info}>
      <p>
        <strong>Macromolecule Content</strong>
      </p>
      <ul className={styles.card_info_ul}>
        {totalStructureWeight ? (
          <li>
            Total Structure Weight:&nbsp;
            {totalStructureWeight?.toFixed(2)}&nbsp;kDa
            <Tooltip title="Molecular weight (in kDa) of all non-water atoms in the deposited model, based on the full deposited sample sequence. Hydrogen atoms are included for the charged state in ARG, HIS & LYS residues.">
              <i className="icon iconfont icon-tishi" />
            </Tooltip>
          </li>
        ) : null}
        {atomCount ? (
          <li>
            Non-hydrogen Atom Count:&nbsp;
            {atomCount}&nbsp;
            <Tooltip title="Number of modeled non-hydrogen atoms in the deposited model.">
              <i className="icon iconfont icon-tishi" />
            </Tooltip>
          </li>
        ) : null}
        {modelledResidueCount ? (
          <li>
            Modelled Residue Count:&nbsp;
            {modelledResidueCount}&nbsp;
            <Tooltip title="Number of modeled polymer monomers in the deposited model.">
              <i className="icon iconfont icon-tishi" />
            </Tooltip>
          </li>
        ) : null}
        {depositedResidueCount ? (
          <li>
            Deposited Residue Count:&nbsp;
            {depositedResidueCount}&nbsp;
            <Tooltip title="Number of all (modeled or unmodeled) polymer monomers in the deposited model.">
              <i className="icon iconfont icon-tishi" />
            </Tooltip>
          </li>
        ) : null}
        {uniqueProteinChains ? (
          <li>
            Unique Protein Chains:&nbsp;
            {uniqueProteinChains}
          </li>
        ) : null}
        {uniqueNucleicAcidChains ? (
          <li>
            Unique Nucleic Acid Chains:&nbsp;
            {uniqueNucleicAcidChains}
          </li>
        ) : null}
      </ul>
    </div>
  );
};
