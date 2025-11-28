import { Col, Row } from 'antd';
import dayjs from 'dayjs';

interface fundingOrganizationList {
  fundingOrganization: string;
  grantNumber: string;
  location: string;
}
interface revisionHistorys {
  category: string;
  changes: string;
  revisionDate: string;
  type: string;
  version: string;
}

export default (props: any) => {
  const {
    depositionAuthors,
    released,
    fundingOrganizationList,
    revisionHistorys,
  } = props;
  return (
    <div>
      <div className="global_entry_header">Entry History</div>
      <div className="global_entry_body">
        <Row gutter={24}>
          <Col xxl={12} sm={12} xs={24}>
            <strong>Deposition Data</strong>
            <ul className="global_ul">
              <li>
                <strong>Released Date:&nbsp;</strong>
                {released && dayjs(released).format('YYYY-MM-DD')}
              </li>
              <li>
                <strong>Deposition Author(s):&nbsp;</strong>
                {depositionAuthors?.map((vo: string, index: number) => (
                  <span key={index}>
                    <a
                      className="global_hover_underline"
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
                                        placeholder:
                                          "Ex: Jones, T.J., O'Neil, F.K.",
                                        header_index: 1,
                                        isSupport: true,
                                        index: '1-1',
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
                    {index !== depositionAuthors?.length - 1 && (
                      <span>,&nbsp;</span>
                    )}
                  </span>
                ))}
              </li>
              {/* <li>
                <strong>This entry supersedes:&nbsp;</strong>
              </li> */}
            </ul>
            {fundingOrganizationList?.length !== 0 && (
              <>
                <hr />
                <table border={1} cellSpacing={1} cellPadding={4}>
                  <thead>
                    <tr className="global_tr_bg">
                      <th>Funding Organization</th>
                      <th>Location</th>
                      <th>Grant Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fundingOrganizationList?.map(
                      (vo: fundingOrganizationList, index: number) => (
                        <tr key={index}>
                          <td style={{ width: '55%' }}>
                            {vo.fundingOrganization}
                          </td>
                          <td>{vo.location}</td>
                          <td>{vo.grantNumber}</td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </>
            )}
          </Col>
          <Col xxl={12} sm={12} xs={24}>
            <strong>
              Revision History &nbsp;
              <small>
                <a>(Full details and data files)</a>
              </small>
            </strong>
            <table border={1} cellSpacing={1} cellPadding={4}>
              <thead>
                <tr
                  style={{
                    backgroundColor: '#f5f5f5',
                    border: '1px solid #ddd',
                    color: '#000',
                  }}
                >
                  <th align="left">Version Number</th>
                  <th align="left">Version Date</th>
                  <th align="left">Version Type/ Change</th>
                </tr>
              </thead>
              <tbody>
                {revisionHistorys?.map(
                  (vo: revisionHistorys, index: number) => (
                    <tr key={index}>
                      <td style={{ width: '17%' }}>{vo.version}</td>
                      <td style={{ width: '25%' }}>
                        {vo.revisionDate &&
                          dayjs(vo.revisionDate).format('YYYY-MM-DD')}
                      </td>
                      <td>
                        {vo.type}
                        <br />
                        {vo.changes}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
    </div>
  );
};
