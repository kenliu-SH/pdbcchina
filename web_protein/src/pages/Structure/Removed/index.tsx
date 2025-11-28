import { EntryBasicInfo, NStructure, RSetState } from '@/common/action';
import { useConnect, effect, reducer } from '@/utils/dva17';
import { useParams } from 'umi';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import DownloadBtn from '@/components/DownloadBtn';
import EntryStatusTag from '@/components/EntryStatusTag';
import { SwapRightOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

export default () => {
  const params: any = useParams();
  const { id } = params || {};
  const { details } = useConnect(NStructure);
  const { removedData } = details || {};
  useEffect(() => {
    if (id) effect(NStructure, EntryBasicInfo, { id });
    return () => {
      reducer(NStructure, RSetState, { details: null });
    };
  }, [id]);
  return (
    <Row gutter={[16, 24]}>
      <Col xxl={12} xs={24}>
        <div>
          <h1 style={{ display: 'inline-block' }}>
            <span>{id}</span>
          </h1>
          {removedData?.status_code && (
            <EntryStatusTag status={removedData?.status_code} />
          )}
          {removedData?.superseded_by &&
            removedData?.superseded_by.length !== 0 && (
              <>
                <SwapRightOutlined
                  style={{ fontSize: '24px', margin: '0 8px' }}
                />
                <h1
                  style={{
                    marginBottom: 0,
                    display: 'inline-block',
                  }}
                >
                  {removedData?.superseded_by?.map((v: any, key: number) => (
                    <a
                      key={key}
                      style={{
                        textDecoration: 'underline',
                        marginRight: '4px',
                        userSelect: 'none',
                      }}
                      href={`#/entry/structure/${v}`}
                    >
                      {v}
                    </a>
                  ))}
                </h1>
              </>
            )}
        </div>
      </Col>
      <Col xxl={12} xs={24}>
        <DownloadBtn id={id} />
      </Col>
      <Col span={24}>
        <h4>
          <span>{removedData?.title}</span>
          <span>{removedData?.remote_repository_title}</span>
        </h4>
        <ul className="global_ul">
          <li id="header_doi">
            <strong>DOI:&nbsp;</strong>
            <a href={`http://doi.org/10.2210/pdb${id}/pdb`} target="_blank">
              10.2210/pdb{id}/pdb
            </a>
          </li>
          <br />
          <li>
            <span>
              <strong>Deposited:&nbsp;</strong>
              {removedData?.deposit_date &&
                dayjs(removedData?.deposit_date).format('YYYY-MM-DD')}
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>
              <strong>Released:&nbsp;</strong>
              {removedData?.release_date &&
                dayjs(removedData?.release_date).format('YYYY-MM-DD')}
            </span>
          </li>
          <li>
            <strong>Deposition Author(s):&nbsp;</strong>
            {removedData?.deposition_authors?.join(', ')}
          </li>
        </ul>
        <br />
        <ul className="global_ul well well-sm">
          <li id="note_modelData">
            Entry&nbsp;<strong>{id}&nbsp;</strong>was removed from the
            distribution of released PDB entries in 2002&nbsp;
            <a>
              as part of the separation of theoretical model coordinate files
              from the main archive.
            </a>
            &nbsp;It can be accessed from the Model Archive DOI:&nbsp;
            <a href={`http://doi.org/10.2210/pdb${id}/pdb`} target="_blank">
              10.2210/pdb{id}/pdb
            </a>
            .
          </li>
        </ul>
      </Col>
    </Row>
  );
};
