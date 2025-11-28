import { EntryBasicInfo, NStructure, RSetState } from '@/common/action';
import { effect, useConnect, reducer } from '@/utils/dva17';
import { useEffect } from 'react';
import { useParams } from 'umi';
import { Row, Col } from 'antd';
import dayjs from 'dayjs';
import EntryStatusTag from '@/components/EntryStatusTag';

export default () => {
  const params: any = useParams();
  const { id } = params || {};
  const { details } = useConnect(NStructure);
  const { unreleasedData } = details || {};
  useEffect(() => {
    if (id) effect(NStructure, EntryBasicInfo, { id });
    return () => {
      reducer(NStructure, RSetState, { details: null });
    };
  }, [id]);
  return (
    <Row>
      <Col span={2} />
      <Col span={20}>
        <div>
          <h1 style={{ display: 'inline-block' }}>{id}</h1>
          <EntryStatusTag status="WDRN" />
        </div>
        <br />
        <h4>{details?.unreleasedData?.title}</h4>
        <br />
        <ul className="global_ul">
          <li>
            <strong>Status:&nbsp; </strong>
            {unreleasedData?.status_code}
          </li>
          <li>
            <strong>Deposited:&nbsp;</strong>
            {unreleasedData?.deposit_date &&
              dayjs(unreleasedData?.deposit_date).format('YYYY-MM-DD')}
          </li>
          {/* <li>
            <strong>Author Prerelease Sequence Status:&nbsp; </strong>
            {unreleasedData?.author_prerelease_sequence_status}
          </li> */}
          <br />
          <span>
            <a>Click here</a> to search unreleased entries.
          </span>
        </ul>
      </Col>
      <Col span={2} />
    </Row>
  );
};
