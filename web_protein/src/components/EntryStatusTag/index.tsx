import { Popover } from 'antd';
import styles from './index.less';
import { useState } from 'react';
import { THEME_COLOR_LIST } from '@/common/enum';
import { useModel } from 'umi';

export default ({ status }: any) => {
  const { initialState }: any = useModel('@@initialState');
  const [statusData, setStatusData] = useState([
    {
      value: 'REL',
      details: 'Released',
      remark: 'REL正常发布状态',
      tag: 'REL',
    },
    {
      value: 'HOLD',
      details: 'On hold until yyyy-mm-dd',
      remark: 'Unreleased状态',
      tag: 'HOLD',
    },
    {
      value: 'HPUB',
      details: 'On hold until publication',
      remark: 'Unreleased状态',
      tag: 'HPUB',
    },
    {
      value: 'AUCO',
      details: 'Author corrections pending review',
      remark: 'Unreleased状态',
      tag: 'AUCO',
    },
    {
      value: 'AUTH',
      details: 'Processed, waiting for author review and approval',
      remark: 'Unreleased状态',
      tag: 'AUTH',
    },
    {
      value: 'POLC',
      details: 'Processing, waiting for a policy decision',
      remark: 'Unreleased状态',
      tag: 'POLC',
    },
    {
      value: 'PROC',
      details: 'To be processed',
      remark: 'Unreleased状态',
      tag: 'PROC',
    },
    {
      value: 'REFI',
      details: 'Re-refined entry',
      remark: 'Unreleased状态',
      tag: 'REFI',
    },
    {
      value: 'REPL',
      details: 'Author sent new coordinates to be incorporated',
      remark: 'Unreleased状态',
      tag: 'REPL',
    },
    {
      value: 'WAIT',
      details:
        'Processing started, waiting for author input to continue processing',
      remark: 'Unreleased状态',
      tag: 'WAIT',
    },
    {
      value: 'WDRN',
      details: 'Deposition has been withdrawn',
      remark: 'Unreleased状态',
      tag: 'WDRN',
    },
    {
      value: 'OBS',
      details: 'Entry has been obsoleted and replaced by another entry',
      remark: 'Removed删除状态',
      tag: 'OBS',
    },
    {
      value: 'TRSF',
      details: 'Entry transferred to another data repository',
      remark: 'Removed删除状态',
      tag: 'TRSF',
    },
  ]);
  const content = (
    <div className={styles.status_table}>
      <table>
        <tbody>
          <tr>
            <th>Status Codes</th>
            <th>Details</th>
          </tr>
          {statusData?.map((vo: any, index: number) => (
            <tr key={index}>
              <td>{vo.value}</td>
              <td>{vo.details}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={2} style={{ maxWidth: '275px' }}>
              The PDB archive is updated with new entries and status information
              each Wednesday. Send release requests or citation updates via
              the&nbsp;
              <a
                href="https://deposit-1.wwpdb.org/"
                target="_blank"
                style={{
                  color: 'rgba(255,255,255,1)',
                  textDecoration: 'underline',
                }}
              >
                OneDep
              </a>
              &nbsp; communication page if you are a depositor of the inquired
              entry or to&nbsp;
              <a
                href="deposit-help@mail.wwpdb.org"
                style={{
                  color: 'rgba(255,255,255,1)',
                  textDecoration: 'underline',
                }}
              >
                deposit-help@mail.wwpdb.org
              </a>
              &nbsp; if you are a user.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return (
    <Popover
      content={content}
      placement="rightTop"
      overlayClassName={styles.status_overlay}
      color={THEME_COLOR_LIST[initialState.theme]}
    >
      <sup className={styles.entry_status_tag}>
        <strong>{status}</strong>
      </sup>
    </Popover>
  );
};
