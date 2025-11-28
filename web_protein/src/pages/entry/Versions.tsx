import { NStructure } from '@/common/action';
import { useConnect } from '@/utils/dva17';
import dayjs from 'dayjs';
import styles from './styles/Versions.less';
import DownloadBtn from '../../components/DownloadBtn';
import EntryStatusTag from '@/components/EntryStatusTag';
import { Col, Row } from 'antd';
import config from '@/common/config';

export default ({ id }: any) => {
  const { details } = useConnect(NStructure);
  const onDownload = async (version: any) => {
    window.open(
      config.SERVER_HOME +
        `file/v2/down/versions?pdbid=${id}&version=${version}`,
    );
  };
  return (
    details && (
      <>
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <DownloadBtn id={id} />
          </Col>
          <Col span={24}>
            <div>
              <h1 style={{ display: 'inline-block' }}>{id}</h1>
              <EntryStatusTag status="REL" />
            </div>
          </Col>
          <Col span={24}>
            <h4>{details?.title}</h4>
          </Col>
        </Row>
        <br />
        <p>
          Changes made to a PDB entry after its initial release are considered
          to be either “major” or “minor”. The latest minor version of each
          major version is available as a file download.
          <a
            href="https://www.wwpdb.org/ftp/pdb-versioned-ftp-site"
            target="_blank"
            rel="noopener"
          >
            More information about the PDB versioning is available.
          </a>
        </p>
        <div className="rows_table_item">
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
                <th align="left">Revised CIF Category</th>
                <th align="left"></th>
              </tr>
            </thead>
            <tbody>
              {details?.revisionHistorys?.map((vo: any, index: number) => (
                <tr key={index}>
                  <td style={{ width: '90px' }}>
                    {index === details?.revisionHistorys?.length - 1 ? (
                      <span style={{ fontSize: 14 }}>{vo.version}</span>
                    ) : (
                      <span>{vo.version}</span>
                    )}
                  </td>
                  <td style={{ width: '15%' }}>
                    {vo.revisionDate &&
                      dayjs(vo.revisionDate).format('YYYY-MM-DD')}
                  </td>
                  <td>
                    {vo.type}
                    <br />
                    {vo.changes}
                  </td>
                  <td>{vo.category}</td>
                  <td style={{ width: '120px' }}>
                    {index === details?.revisionHistorys?.length - 1 && (
                      <a
                        className={styles.download_btn}
                        style={{
                          fontSize:
                            index === details?.revisionHistorys?.length - 1
                              ? 14
                              : 12,
                        }}
                        onClick={() => {
                          onDownload(vo.version);
                        }}
                      >
                        <i className="icon iconfont icon-download" />
                        &nbsp;
                        <span
                          style={{
                            verticalAlign: 'text-bottom',
                          }}
                        >
                          Download
                        </span>
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )
  );
};
