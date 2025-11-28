import { Tooltip } from 'antd';
import styles from '../../styles/StructureSummary.less';
import FeatureView from './FeatureView';

export default ({ item, id }: any) => {
  const { proteinFeatureView } = item || {};
  return (
    <div className={styles.body_content_item}>
      <table border={1} cellSpacing={1} cellPadding={4}>
        <thead>
          <tr>
            <th colSpan={6} className={styles.entityID_header}>
              <strong>Entity ID:&nbsp;{item.id}</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Molecule</th>
            <th>
              Chains&nbsp;
              <Tooltip title="If the two PDB chain IDs (label_asym_id; assigned by the PDB) and auth_asym_id (selected by the author) do not coincide, the chain ID is displayed as “label_asym_id [auth auth_asym_id]”">
                <i className="icon iconfont icon-tishi" />
              </Tooltip>
            </th>
            <th>Sequence Length</th>
            <th>Organism</th>
          </tr>
          <tr>
            <td>{item.molecule}</td>
            <td style={{ width: '15%' }}>
              {item.chains?.map((v: string, i: number) => (
                <div key={i}>
                  {v}
                  {item.auth && item.auth[i] && ` [auth ${item.auth[i]}]`}
                </div>
              ))}
            </td>
            <td>{item.Length}</td>
            <td>
              {item.organism?.map((vo: any, index: number) => {
                return (
                  <span key={index}>
                    <a
                      className="global_underline"
                      href={`#/search?query=${encodeURIComponent(
                        JSON.stringify({
                          type: 'group',
                          logical_operator: 'and',
                          nodes: [
                            {
                              type: 'group',
                              logical_operator: 'and',
                              nodes: [
                                {
                                  type: 'group',
                                  nodes: [
                                    {
                                      type: 'terminal',
                                      service: 'text',
                                      uiAttrMap: {
                                        context: [
                                          'exact-match',
                                          'full-text',
                                          'suggest',
                                        ],
                                        description:
                                          'Memebers of the NCBI Taxonomy lineage as parent taxonomy names.',
                                        enum_len: 0,
                                        enum_annotated_len: 0,
                                        examples: [
                                          'Homo sapiens',
                                          'Mus musculus',
                                        ],
                                        examples_len: 2,
                                        has_desc: 'y',
                                        search_group_name:
                                          'Polymer Molecular Features',
                                        search_group_priority: 45,
                                        selector: true,
                                        type: 'string',
                                        display_name:
                                          'Source Organism Taxonomy Name (Full Lineage)',
                                        is_iterable: false,
                                        operators: [
                                          'exact_match',
                                          'contains_words',
                                          'contains_phrase',
                                          'exists',
                                        ],
                                        default_operator: 'contains_phrase',
                                        useIn: true,
                                        ui: true,
                                      },
                                      parameters: {
                                        type: 'item',
                                        attribute:
                                          'pdbc_entry.sourceOrganismTaxonomyName',
                                        name: 'Source Organism Taxonomy Name (Full Lineage)',
                                        placeholder:
                                          'Ex: Homo sapiens, Mus musculus',
                                        header_index: 4,
                                        isSupport: true,
                                        index: '4-8',
                                        disabled: false,
                                        negation: false,
                                        operator: 'contains_phrase',
                                        value: vo,
                                      },
                                    },
                                  ],
                                  logical_operator: 'and',
                                },
                              ],
                              label: 'text',
                            },
                          ],
                        }),
                      )}`}
                    >
                      {vo}
                    </a>
                    {index > item?.organism?.length && <>,&nbsp;</>}
                  </span>
                );
              })}
            </td>
          </tr>
          <tr>
            <th colSpan={6} style={{ backgroundColor: '#f5f5f5' }}>
              <div className={'global_row_space'}>
                <strong>Protein Feature View</strong>
                {/* <h5
                  style={{
                    fontWeight: 'bold',
                    fontSize: '15px',
                    display: 'inline-block',
                    float: 'right',
                  }}
                >
                  <a>Expand</a>
                </h5> */}
              </div>
            </th>
          </tr>
          <tr>
            <td colSpan={6}>
              <FeatureView id={id} proteinFeatureView={proteinFeatureView} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
