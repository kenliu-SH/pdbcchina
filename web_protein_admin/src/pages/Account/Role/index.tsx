import { PageContainer, ProTable } from '@ant-design/pro-components';
import { useRef, useState } from 'react';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Divider, Button, Modal } from 'antd';
import { req } from '@/utils/utils';
import dayjs from 'dayjs';
import { useAccess } from 'umi';
import { effect } from '@/utils/dva17';
import { EDelete, NRole } from '@/common/action';

import Edit from './components/Edit';

export default () => {
  const actionRef: any = useRef<ActionType>();
  const access = useAccess();
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const onCreate = (record: any) => {
    setOpen(true);
    setEditItem(record);
  };
  const onDelete = (id: number) => {
    Modal.confirm({
      title: '确认删除此角色吗？',
      onOk: async () => {
        await effect(NRole, EDelete, { id });
        actionRef.current.reload();
      },
    });
  };
  const columns: ProColumns<any>[] = [
    {
      title: '角色名称',
      dataIndex: 'name',
    },
    {
      title: '角色说明',
      dataIndex: 'describe',
      search: false,
    },
    {
      title: '最后更新时间',
      search: false,
      dataIndex: 'updatedAt',
      render: (text: any) => dayjs(text).format('YYYY/MM/DD HH:mm:ss'),
    },
    {
      title: '操作',
      key: 'operation',
      search: false,
      fixed: 'right',
      render: (record: any) => (
        <>
          {access['/account/role:edit'] && (
            <a
              onClick={() => {
                onCreate(record);
              }}
            >
              编辑
            </a>
          )}
          {access['/account/role:remove'] && (
            <>
              <Divider type="vertical" />
              <a
                style={{ color: '#ff0000' }}
                onClick={() => {
                  onDelete(record.id);
                }}
              >
                删除
              </a>
            </>
          )}
        </>
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
        request={async (params: any) => {
          const res: any = await req('role', params);
          return res;
        }}
        pagination={{
          defaultPageSize: 10,
        }}
        headerTitle={
          access['/account/role:add'] && (
            <Button
              type="primary"
              onClick={() => {
                onCreate(null);
              }}
            >
              新建角色
            </Button>
          )
        }
      />
      <Edit
        open={open}
        title={`${editItem ? '编辑' : '新建'}角色`}
        editItem={editItem}
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
