import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { useState } from 'react';
import styles from './styles.less';

export default (props: any) => {
  const { literature } = props;
  const [visible, setVisible] = useState(true);
  if (!literature || JSON.stringify(literature) === '{}') return null;
  return (
    <div className={styles.literature}>
      <div className={'global_row_space global_entry_header'}>
        <span>Literature</span>
      </div>
      <div className={'global_entry_body'}>
        <strong style={{ fontSize: 18 }}>{literature?.title}</strong>
        <div>
          {literature?.authors?.map((vo: string, index: number) => (
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
                                    'Names of the authors of the citation; relevant for journal\n articles, books and book chapters.  Names are separated by vertical bars.\n\n The family name(s), followed by a comma and including any\n dynastic components, precedes the first name(s) or initial(s).',
                                  enum_len: 0,
                                  enum_annotated_len: 0,
                                  examples: ['Bleary, Percival R.'],
                                  examples_len: 1,
                                  has_desc: 'y',
                                  search_group_name: 'Publications All',
                                  search_group_priority: 5,
                                  selector: true,
                                  type: 'string',
                                  display_name: 'Citation Author',
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
                                  attribute: 'citation_author.name',
                                  name: 'Citation Author',
                                  placeholder: 'Ex: Bleary, Percival R.',
                                  header_index: 18,
                                  isSupport: true,
                                  index: '18-0',
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
              {index !== literature?.authors?.length - 1 && (
                <span>,&nbsp;</span>
              )}
            </span>
          ))}
        </div>
        <div>{literature?.citation}</div>
        <br />
        <ul className="global_ul">
          {literature?.uid && (
            <li>
              <strong>PubMed</strong>:&nbsp;
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
                                  context: ['default-match'],
                                  description:
                                    'UID assigned to each PubMed record.',
                                  enum_len: 0,
                                  enum_annotated_len: 0,
                                  examples: [15937111],
                                  examples_len: 1,
                                  has_desc: 'y',
                                  search_group_name: 'ID(s) and Keywords',
                                  search_group_priority: 18,
                                  selector: true,
                                  type: 'integer',
                                  display_name: 'PubMed ID',
                                  min: 5,
                                  max: 36878926,
                                  is_iterable: true,
                                  operators: ['in', 'exists'],
                                  default_operator: 'in',
                                  useIn: true,
                                  validate: 'posInteger',
                                  ui: true,
                                },
                                parameters: {
                                  type: 'item',
                                  attribute: 'citation.pdbx_database_id_PubMed',
                                  name: 'PubMed ID',
                                  placeholder:
                                    'Enter an integer between 5 and 36878926',
                                  header_index: 0,
                                  isSupport: true,
                                  index: '0-3',
                                  disabled: false,
                                  negation: false,
                                  operator: 'in',
                                  value: [literature?.uid],
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
                {literature?.uid}
              </a>
              &nbsp;
              <Tag className={styles.PubMed_tag}>
                <a
                  href={`http://www.ncbi.nlm.nih.gov/pubmed/?term=${literature?.uid}`}
                  target="_blank"
                  rel="noopener"
                >
                  Search on PubMed
                </a>
              </Tag>
            </li>
          )}
          {literature?.doi && (
            <li>
              <strong>DOI</strong>:&nbsp;
              <a href={literature?.doi} target="_blank">
                {literature?.doi}
              </a>
            </li>
          )}
          {literature?.similar && literature?.similar.length !== 0 && (
            <li>
              <strong>Primary Citation of Related Structures:</strong>&nbsp;
              <br />
              {literature?.similar?.map((vo: string, index: number) => (
                <span key={index}>
                  <a
                    className="global_hover_underline"
                    href={`#/entry/structure/${vo}`}
                  >
                    {vo}
                  </a>
                  {index !== literature?.similar?.length - 1 && (
                    <span>,&nbsp;</span>
                  )}
                </span>
              ))}
            </li>
          )}
          {literature?.abstract && (
            <>
              <br />
              <li>
                <strong>PubMed Abstract:&nbsp;</strong>
                <div
                  className={styles.abstract_info}
                  style={!visible ? { display: 'block' } : {}}
                >
                  {literature?.abstract}
                </div>
                {literature?.abstract?.length < 337 ? null : (
                  <>
                    {visible ? (
                      <PlusCircleOutlined
                        style={{ marginLeft: 2, cursor: 'pointer' }}
                        onClick={() => {
                          setVisible(!visible);
                        }}
                      />
                    ) : (
                      <MinusCircleOutlined
                        style={{ marginLeft: 2, cursor: 'pointer' }}
                        onClick={() => {
                          setVisible(!visible);
                        }}
                      />
                    )}
                  </>
                )}
              </li>
            </>
          )}
          {literature?.relatedCitations &&
            literature?.relatedCitations.length !== 0 && (
              <>
                <hr />
                <li>
                  <strong>Related Citations:&nbsp;</strong>
                  <ul style={{ marginLeft: 48 }}>
                    {literature?.relatedCitations?.map(
                      (vo: any, index: number) => {
                        return (
                          <li key={index}>
                            <strong>{vo.title}</strong>
                            <br />
                            <span>{vo.authors?.join(`, `)}</span>
                            <br />
                            <span>{vo.citation}</span>
                          </li>
                        );
                      },
                    )}
                  </ul>
                </li>
              </>
            )}
          {literature?.affiliation && (
            <>
              <hr />
              <li>
                <strong>Organizational Affiliation:&nbsp;</strong>
                <div>{literature?.affiliation}</div>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
