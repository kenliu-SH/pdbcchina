import { EDelete, EGet, NOptions } from '@/common/action';
import { effect, useConnect, useLoading } from '@/utils/dva17';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useRef, useState } from 'react';
import dayjs from 'dayjs';
import { Button, Divider, Popconfirm, Space } from 'antd';
import EditOption from './components/EditOption';
import { NAV_TYPE } from '@/common/enum';

export default () => {
  const actionRef: any = useRef<ActionType>();
  const { optionsMenu } = useConnect(NOptions);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const loading = useLoading(NOptions, EGet).loading;
  const onCreate = (record: any) => {
    setEditItem(record);
    setOpen(true);
  };
  const columns: ProColumns<any>[] = [
    { title: '名称(英文)', dataIndex: 'name' },
    { title: '名称(中文)', dataIndex: 'zhName' },
    {
      title: '图标',
      dataIndex: 'icon',
      render: (text: any) => {
        return <i className={`iconfont icon-${text}`} style={{ fontSize: '24px' }} />;
      },
    },
    { title: '排序值', dataIndex: 'order' },
    {
      title: '最后更新时间',
      dataIndex: 'updatedAt',
      render: (text: any) => dayjs(text).format('YYYY/MM/DD HH:mm:ss'),
    },
    {
      title: '操作',
      key: 'operation',
      render: (record: any) => (
        <Space split={<Divider type="vertical" />}>
          <a
            onClick={() => {
              onCreate(record);
            }}
          >
            编辑
          </a>
          <Popconfirm
            title="确认删除此栏目吗？"
            onConfirm={async () => {
              effect(NOptions, EDelete, { id: record.id }).then(() => {
                effect(NOptions, EGet, { type: NAV_TYPE['menuBar'] });
              });
            }}
          >
            <a style={{ color: '#ff0000' }}>删除</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      <ProTable<any, any>
        loading={loading}
        actionRef={actionRef}
        rowKey="id"
        bordered
        columns={columns}
        search={false}
        options={false}
        scroll={{ x: 'max-content' }}
        dataSource={optionsMenu || []}
        pagination={false}
        headerTitle={
          <Button
            type="primary"
            onClick={() => {
              onCreate(null);
            }}
          >
            新建栏目
          </Button>
        }
      />
      <EditOption
        open={open}
        title={`${editItem ? '编辑' : '新增'}栏目`}
        editItem={editItem}
        onCancel={() => {
          setOpen(false);
        }}
        onOk={() => {
          setOpen(false);
          effect(NOptions, EGet, { type: NAV_TYPE['menuBar'] });
        }}
      />
    </>
  );
};
