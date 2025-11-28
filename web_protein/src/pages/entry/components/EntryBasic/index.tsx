import { THEME_COLOR_LIST } from '@/common/enum';
import EntryStatusTag from '@/components/EntryStatusTag';
import { Popover, Space, Tooltip } from 'antd';
import dayjs from 'dayjs';
import { useModel } from 'umi';
import styles from './styles.less';

const COLOROBJ: any = {
  'Genetically Engineered': 'rgba(31, 78, 121, 1)',
  Natural: 'rgba(56, 87, 35, 1)',
  Synthetic: 'rgba(102, 0, 102, 1)',
};

export default (props: any) => {
  const { initialState }: any = useModel('@@initialState');
  const {
    entityId,
    title,
    doi,
    emdb,
    classification,
    organisms,
    expressionSystem,
    mutations,
    deposited,
    released,
    depositionAuthors,
    fundingOrganizations,
    groupId,
  } = props;
  const content = (
    <div style={{ color: '#fff' }}>
      <table>
        <tbody>
          <tr>
            <th>Symbol</th>
            <th>Organism Type</th>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>
              <span>
                G<sup>S</sup>
              </span>
            </td>
            <td>Genetically Engineered Source</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>
              <span>
                G<sup>E</sup>
              </span>
            </td>
            <td>Genetically Engineered Expression System</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>N</td>
            <td>Natural</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>S</td>
            <td>Synthetic</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return (
    <>
      <div>
        <strong
          style={{ marginBottom: 0, display: 'inline-block', fontSize: 36 }}
        >
          {entityId}
        </strong>
        <EntryStatusTag status="REL" />
      </div>
      <strong style={{ fontSize: 18, marginBottom: 12 }}>{title}</strong>
      <ul className={'global_ul'}>
        <li>
          <span>
            <strong>PDB DOI: </strong>
            <a href={doi} target="_blank">
              {doi}
            </a>
          </span>
          {groupId && (
            <span style={{ marginLeft: 8 }}>
              <strong>Deposition Group:</strong>
              <a>{groupId}</a>
            </span>
          )}
          {emdb && (
            <span style={{ marginLeft: 8 }}>
              <strong>EM Map {emdb}: </strong>
              <a
                href={`https://www.ebi.ac.uk/emdb/${emdb}`}
                target="_blank"
                rel="noopener"
              >
                EMDB
              </a>
              &nbsp;&nbsp;
              <a
                href={`https://www.emdataresource.org/${emdb}`}
                target="_blank"
                rel="noopener"
              >
                EMDataResource
              </a>
            </span>
          )}
        </li>
        <br />
        <li>
          <strong>Classification: </strong>
          <a
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
                              context: ['full-text', 'suggest'],
                              description:
                                'Terms characterizing the macromolecular structure.',
                              enum_len: 0,
                              enum_annotated_len: 0,
                              examples: [
                                'DNA',
                                'RNA',
                                'T-RNA',
                                'DNA/RNA',
                                'RIBOZYME',
                                'PROTEIN/DNA',
                                'PROTEIN/RNA',
                                'PEPTIDE NUCLEIC ACID',
                                'PEPTIDE NUCLEIC ACID/DNA',
                                'DNA-BINDING PROTEIN',
                                'RNA-BINDING PROTEIN',
                              ],
                              examples_len: 11,
                              has_desc: 'y',
                              search_group_name: 'ID(s) and Keywords',
                              search_group_priority: 35,
                              selector: true,
                              type: 'string',
                              display_name: 'Structure Keywords',
                              is_iterable: false,
                              operators: [
                                'contains_words',
                                'contains_phrase',
                                'exists',
                              ],
                              default_operator: 'contains_phrase',
                              useIn: false,
                              ui: true,
                            },
                            parameters: {
                              type: 'item',
                              attribute: 'struct_keywords.pdbx_keywords',
                              name: 'Structure Keywords',
                              placeholder: 'Ex: DNA, RNA, T-RNA, DNA/RNA',
                              header_index: 0,
                              isSupport: true,
                              index: '0-9',
                              disabled: false,
                              negation: false,
                              operator: 'contains_phrase',
                              value: classification,
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
            {classification}
          </a>
        </li>
        {organisms && organisms.length !== 0 && (
          <li style={{ display: 'flex' }}>
            <strong style={{ whiteSpace: 'nowrap' }}>Organism(s):&nbsp;</strong>
            <Space direction="vertical">
              {organisms?.map((vo: any, index: number) => {
                if (vo.tag === 'Genetically Engineered') {
                  return (
                    <div key={index}>
                      <div
                        className={styles.tag_line}
                        style={{ marginBottom: 8 }}
                      >
                        <Popover
                          content={content}
                          color={THEME_COLOR_LIST[initialState.theme]}
                        >
                          <span
                            className={styles.tag_item}
                            style={{
                              border: `1px solid ${COLOROBJ[vo?.tag]}`,
                            }}
                          >
                            {vo?.tag?.charAt(0)}
                            <sup>S</sup>
                          </span>
                        </Popover>
                        {vo?.organism?.map((vo: any, key: number) => {
                          return (
                            <span key={key}>
                              <a
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
                                                  default_operator:
                                                    'contains_phrase',
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
                              {key > vo?.organism?.length && <>,&nbsp;</>}
                            </span>
                          );
                        })}
                      </div>
                      <div className={styles.tag_line}>
                        <Popover
                          content={content}
                          color={THEME_COLOR_LIST[initialState.theme]}
                        >
                          <span
                            className={styles.tag_item}
                            style={{
                              border: `1px solid ${COLOROBJ[vo?.tag]}`,
                            }}
                          >
                            G<sup>E</sup>
                          </span>
                        </Popover>
                        {vo?.expressionSystem?.map((vo: any, key: number) => {
                          return (
                            <span key={key}>
                              <a
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
                                                  default_operator:
                                                    'contains_phrase',
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
                              {key > vo?.expressionSystem?.length && (
                                <>,&nbsp;</>
                              )}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={index} className={styles.tag_line}>
                    <Popover
                      content={content}
                      color={THEME_COLOR_LIST[initialState.theme]}
                    >
                      <span
                        className={styles.tag_item}
                        style={{
                          border: `1px solid ${COLOROBJ[vo?.tag]}`,
                        }}
                      >
                        {vo?.tag.charAt(0)}
                      </span>
                    </Popover>
                    {vo?.organism?.map((vo: any, key: number) => {
                      return (
                        <span key={key}>
                          <a
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
                                              default_operator:
                                                'contains_phrase',
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
                          {key > vo?.organism?.length && <>,&nbsp;</>}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </Space>
          </li>
        )}
        <li>
          <strong>Mutation(s): </strong>
          <span>
            {mutations}&nbsp;
            <Tooltip title="Indicates sequence mutations.">
              <i className="icon iconfont icon-tishi" />
            </Tooltip>
          </span>
        </li>
        <br />
        <li>
          <strong>Deposited: </strong>
          <span>{deposited && dayjs(deposited).format('YYYY-MM-DD')}</span>
          <strong style={{ marginLeft: 8 }}>Released: </strong>
          <span>{released && dayjs(released).format('YYYY-MM-DD')}</span>
        </li>
        <li>
          <strong>Deposition Author(s): </strong>
          {depositionAuthors?.map((vv: any, index: number) => (
            <span key={index}>
              <a
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
                                    'The name of an author of this data block. If there are multiple\n authors, _audit_author.name is looped with _audit_author.address.\n The family name(s), followed by a comma and including any\n dynastic components, precedes the first name(s) or initial(s).',
                                  enum_len: 0,
                                  enum_annotated_len: 0,
                                  examples: [
                                    'Jones, T.J.',
                                    'Bleary, Percival R.',
                                    "O'Neil, F.K.",
                                    'Van den Bossche, G.',
                                    'Yang, D.-L.',
                                    'Simonov, Yu.A',
                                  ],
                                  examples_len: 6,
                                  has_desc: 'y',
                                  search_group_name: 'Structure Details',
                                  search_group_priority: 10,
                                  selector: true,
                                  type: 'string',
                                  display_name: 'Structure Author',
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
                                  attribute: 'audit_author.name',
                                  name: 'Structure Author',
                                  placeholder: "Ex: Jones, T.J., O'Neil, F.K.",
                                  header_index: 1,
                                  isSupport: true,
                                  index: '1-1',
                                  disabled: false,
                                  negation: false,
                                  operator: 'contains_phrase',
                                  value: vv,
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
                {vv}
              </a>
              {index === depositionAuthors.length - 1 ? '' : ', '}
            </span>
          ))}
        </li>
        {fundingOrganizations && fundingOrganizations.length !== 0 && (
          <li>
            <strong>Funding Organization(s): </strong>
            {fundingOrganizations?.map((vo: any, index: number) => (
              <span key={index}>
                {vo}
                {index === fundingOrganizations.length - 1 ? '' : <>,&nbsp;</>}
              </span>
            ))}
          </li>
        )}
      </ul>
      <hr />
    </>
  );
};
