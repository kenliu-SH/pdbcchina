import { PageContainer, ProTable } from '@ant-design/pro-components';
import { useRef, useState } from 'react';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Button, Popconfirm, Space, Tag, message } from 'antd';
import { requestDelete, requestGet } from '@/utils/dva17';
import dayjs from 'dayjs';
import Edit from './components/Edit';
import { CopyOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default () => {
  const actionRef: any = useRef<ActionType>();
  const [open, setOpen] = useState(false);
  const columns: ProColumns<any>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '访问码',
      dataIndex: 'accessCode',
      render: (text: any) => (
        <Space>
          <span>{text}</span>
          <CopyToClipboard
            text={text}
            onCopy={() => {
              message.success('访问码复制成功');
            }}
          >
            <a>
              <CopyOutlined />
            </a>
          </CopyToClipboard>
        </Space>
      ),
    },
    {
      title: '到期时间',
      dataIndex: 'expiresAt',
      render: (text: any, record: any) =>
        !record.isExpires ? (
          <span>{dayjs(text).format('YYYY/MM/DD HH:mm:ss')}</span>
        ) : (
          <Space style={{ color: '#999' }}>
            {dayjs(text).format('YYYY/MM/DD HH:mm:ss')}
            <Tag>已过期</Tag>
          </Space>
        ),
    },
    {
      title: '备注',
      dataIndex: 'remark',
    },
    {
      title: '操作',
      key: 'operation',
      align: 'center',
      render: (record: any) => (
        <Popconfirm
          title="确认删除该访问码？"
          onConfirm={async () => {
            await requestDelete('visitor/' + record.id);
            message.success('访问码删除成功！');
            actionRef.current.reload();
          }}
        >
          <a style={{ color: '#ff0000' }}>删除</a>
        </Popconfirm>
      ),
    },
  ];
  return (
    <PageContainer title={false}>
      <ProTable<any, any>
        actionRef={actionRef}
        rowKey="id"
        bordered
        scroll={{ x: 'max-content' }}
        columns={columns}
        search={false}
        request={async (params: any) => {
          const res: any = await requestGet('visitor/list', params);
          return {
            data: res,
          };
        }}
        pagination={{
          defaultPageSize: 10,
        }}
        headerTitle={
          <Button
            type="primary"
            onClick={() => {
              setOpen(true);
            }}
          >
            新建访问码
          </Button>
        }
      />
      <Edit
        open={open}
        title="新建访问码"
        onCancel={() => {
          setOpen(false);
        }}
        onOk={() => {
          setOpen(false);
          actionRef.current.reload();
        }}
      />
    </PageContainer>
  );
};
