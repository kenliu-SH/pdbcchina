import { PageContainer, ProTable } from '@ant-design/pro-components';
import { useRef } from 'react';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { req } from '@/utils/utils';
import dayjs from 'dayjs';

export default () => {
  const actionRef: any = useRef<ActionType>();
  const columns: ProColumns<any>[] = [
    {
      title: '用户名称',
      key: 'userInfo',
      render: (record: any) => (
        <div>
          <div>
            <small>中文姓名：</small>
            {record.surname}
            {record.nickname}
          </div>
          <div>
            <small>英文姓名：</small>
            {record.lastname}&nbsp;
            {record.firstname}
          </div>
        </div>
      ),
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '注册时间',
      dataIndex: 'createdAt',
      render: (text: any, record: any) =>
        (record.createdAt && dayjs(text).format('YYYY-MM-DD HH:mm:ss')) || '-',
    },
  ];
  return (
    <PageContainer>
      <ProTable<any, any>
        actionRef={actionRef}
        rowKey="id"
        bordered
        scroll={{ x: 'max-content' }}
        pagination={{
          defaultPageSize: 10,
        }}
        search={false}
        columns={columns}
        request={async (params: any) => {
          const res: any = await req('user/find/account', { ...params, isAdmin: 0 });
          return res;
        }}
      />
    </PageContainer>
  );
};
