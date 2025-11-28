import { PlusCircleOutlined } from '@ant-design/icons';
import { Col, Row, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import styles from '../../styles/StructureSummary.less';
import FeatureView from './FeatureView';

export default ({ item, id }: any) => {
  const { proteinFeatureView } = item || {};
  let [openData, setOpenData]: any = useState([]);
  useEffect(() => {
    if (item) {
      setOpenData(item.chains.slice(0, 5));
    }
  }, []);
  /**
   * 逐步递增chains的显示
   * 每次增加五条数据
   */
  const onAddChains = () => {
    const sliceArr = item.chains.slice(openData.length, openData.length + 5);
    openData = openData.concat(sliceArr);
    setOpenData(openData.concat());
  };
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
            <th>Molecular Weight(KDa)</th>
            <th>Organism</th>
            <th>Details</th>
          </tr>
          <tr>
            <td>{item.molecule}</td>
            <td style={{ width: '15%' }}>
              {openData?.map((v: string, i: number) => (
                <div key={i}>
                  {v}
                  {item.auth && item.auth[i] && ` [auth ${item.auth[i]}]`}
                </div>
              ))}
              {openData?.length !== item.chains?.length && (
                <PlusCircleOutlined
                  onClick={() => {
                    onAddChains();
                  }}
                />
              )}
            </td>
            <td>{item.sequenceLength}</td>
            <td>{item.molecularWeight}</td>
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
            <td style={{ width: '24%' }}>
              <span>
                <strong>Mutation(s)</strong>:&nbsp;{item.details?.mutation}
                &nbsp;
                <Tooltip title="The number of mutations in this polymer sequence that are engineered from the reference sequence.">
                  <i className="icon iconfont icon-tishi" />
                </Tooltip>
              </span>
              {item.details?.geneNames?.length !== 0 && (
                <>
                  <br />
                  <span>
                    <strong style={{ whiteSpace: 'nowrap' }}>Gene Names</strong>
                    :&nbsp;
                    {item.details?.geneNames?.map((vv: any, i: number) => (
                      <span key={i}>
                        <a>{vv}</a>
                        {i !== item.details?.geneNames?.length - 1 && (
                          <span>,&nbsp;</span>
                        )}
                      </span>
                    ))}
                  </span>
                </>
              )}
              {item.details?.ec && (
                <>
                  <br />
                  <span>
                    <strong>EC</strong>:&nbsp;{item.details?.ec}
                  </span>
                </>
              )}
            </td>
          </tr>
          {item.uniprotOrganism && (
            <tr>
              <th colSpan={6} style={{ backgroundColor: '#f5f5f5' }}>
                <strong>UniProt</strong>
              </th>
            </tr>
          )}
          {item.uniprotOrganism && (
            <tr>
              <td colSpan={6}>
                <Row>
                  <Col span={9}>
                    Find proteins for&nbsp;
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
                                        context: ['exact-match', 'suggest'],
                                        description:
                                          'Reference database accession code',
                                        enum_len: 0,
                                        enum_annotated_len: 0,
                                        examples_len: 0,
                                        has_desc: 'y',
                                        search_group_name: 'ID(s) and Keywords',
                                        search_group_priority: 30,
                                        selector: true,
                                        type: 'string',
                                        display_name: 'Accession Code(s)',
                                        is_iterable: true,
                                        operators: ['in', 'exists'],
                                        default_operator: 'in',
                                        useIn: true,
                                        nestedAttribute: {
                                          attribute:
                                            'rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_name',
                                          category_name:
                                            'reference_sequence_identifiers',
                                          description:
                                            'Reference database name',
                                          display_name: 'Database Name',
                                          contexts: {
                                            UniProt: {
                                              examples: ['P01308', 'P0CX43'],
                                              detail: 'UniProt',
                                              name: 'UniProt',
                                            },
                                            GenBank: {
                                              examples: [12057205, 1329886537],
                                              detail: 'GenBank',
                                              name: 'GenBank',
                                            },
                                            NORINE: {
                                              examples: [
                                                'NOR00033',
                                                'NOR00972',
                                              ],
                                              detail: 'NORINE',
                                              name: 'NORINE',
                                            },
                                          },
                                        },
                                        ui: true,
                                      },
                                      parameters: {
                                        type: 'item-nested',
                                        attribute: 'pdbc_polymer_entry.uniProt',
                                        name: 'Accession Code(s) - UniProt',
                                        nested_attribute:
                                          'rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession',
                                        nested_attribute_value: 'UniProt',
                                        placeholder: 'Ex: P01308, P0CX43',
                                        header_index: 0,
                                        isSupport: true,
                                        index: '0-6',
                                        disabled: false,
                                        negation: false,
                                        operator: 'in',
                                        value: [item.uniprot],
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
                      {item.uniprot}
                    </a>
                    &nbsp;{item.uniprotOrganism && `(${item.uniprotOrganism})`}
                  </Col>
                  <Col span={6}></Col>
                  <Col
                    span={9}
                    style={{ textAlign: 'right', paddingRight: '18px' }}
                  >
                    Go to UniProtKB:&nbsp;
                    <a
                      className={styles.uniProt_label_full}
                      style={{ marginRight: 2 }}
                      href={`https://www.uniprot.org/uniprotkb/${item.uniprot}/entry`}
                      target="_blank"
                    >
                      {item.uniprot}
                    </a>
                    &nbsp;
                    <Tooltip title="Explore entries with the same UniProt reference sequence.">
                      <i className="icon iconfont icon-tishi" />
                    </Tooltip>
                  </Col>
                </Row>
              </td>
            </tr>
          )}
          <tr>
            <th colSpan={6} className="global_tr_bg">
              <div className={'global_row_space'}>
                <h5 style={{ marginBottom: 0 }}>Protein Feature View</h5>
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
