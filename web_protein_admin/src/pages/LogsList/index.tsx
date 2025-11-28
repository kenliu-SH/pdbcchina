import { req } from '@/utils/utils';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import ReactJson from 'react-json-view';
import { Button, Modal } from 'antd';

export default () => {
  const actionRef: any = useRef<ActionType>();
  const [open, setOpen] = useState(false);
  const [responseBody, setResponseBody] = useState({});
  const columns: ProColumns<any>[] = [
    {
      title: '请求账号',
      dataIndex: ['user', 'accountName'],
      search: false,
    },
    {
      title: 'ip地址',
      dataIndex: 'ip',
      search: false,
    },
    {
      title: '请求地址',
      dataIndex: 'path',
      search: false,
    },
    {
      title: '请求方法',
      dataIndex: 'method',
      search: false,
    },
    {
      title: '状态码',
      dataIndex: 'statusCode',
    },
    {
      title: '请求参数',
      dataIndex: 'params',
      width: 300,
      search: false,
      render: (text: any) => {
        if (text === '-' || JSON.stringify(text) === '{}') return '-';
        return (
          <ReactJson
            name="params"
            src={text}
            theme="monokai" // 主题可根据需要选择
            iconStyle="triangle"
            indentWidth={2}
            collapsed={true} // 设置为true以默认折叠所有对象
          />
        );
      },
    },
    {
      title: '响应内容',
      dataIndex: 'responseBody',
      search: false,
      render: (text: any) => {
        if (text === '-' || JSON.stringify(text) === '{}') return '-';
        return (
          <a
            onClick={() => {
              setOpen(true);
              setResponseBody(text);
            }}
          >
            查看
          </a>
        );
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      search: false,
      render: (text: any) => dayjs(text).format('YYYY-MM-DD HH:mm:ss'),
    },
  ];
  return (
    <PageContainer>
      <ProTable<any, any>
        actionRef={actionRef}
        rowKey="id"
        bordered
        scroll={{ x: 'max-content' }}
        columns={columns}
        request={async (params: any) => {
          const res: any = await req('businessAPILog/findPagination', { ...params, isAdmin: 1 });
          return res;
        }}
        pagination={{
          defaultPageSize: 10,
        }}
      />
      <Modal
        open={open}
        title="响应内容"
        onCancel={() => {
          setOpen(false);
        }}
        footer={
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            关闭
          </Button>
        }
        width={800}
      >
        <div style={{ maxHeight: 500, overflow: 'auto' }}>
          <ReactJson
            name="params"
            src={responseBody}
            theme="monokai" // 主题可根据需要选择
            iconStyle="triangle"
            indentWidth={2}
            collapsed={false} // 设置为true以默认折叠所有对象
          />
        </div>
      </Modal>
    </PageContainer>
  );
};
