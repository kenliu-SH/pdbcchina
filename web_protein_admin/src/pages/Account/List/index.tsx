import { PageContainer, ProFormSelect, ProTable } from '@ant-design/pro-components';
import { useEffect, useRef, useState } from 'react';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Divider, Button, Modal, Switch } from 'antd';
import { req } from '@/utils/utils';
import dayjs from 'dayjs';
import { effect, useConnect } from '@/utils/dva17';
import { EDelete, EGet, EPut, NAccount, NRole } from '@/common/action';
import { useAccess } from 'umi';

import Edit from './components/Edit';

export default () => {
  const actionRef: any = useRef<ActionType>();
  const access = useAccess();
  const { roleList } = useConnect(NRole);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  useEffect(() => {
    effect(NRole, EGet, { page: 1, pageSize: 100 });
  }, []);
  const onCreate = (record: any) => {
    setOpen(true);
    setEditItem(record);
  };
  const onDelete = (id: number) => {
    Modal.confirm({
      title: '确认删除此账号吗？',
      onOk: async () => {
        await effect(NAccount, EDelete, { id });
        actionRef.current.reload();
      },
    });
  };
  const onSwitch = (record: any) => {
    const { id, isSwitch } = record;
    Modal.confirm({
      title: `确认${isSwitch ? '启用' : '禁用'}此账号？`,
      onOk: async () => {
        await effect(NAccount, EPut, { isSwitch: isSwitch ? 0 : 1, id });
        actionRef.current.reload();
      },
    });
  };
  const columns: ProColumns<any>[] = [
    {
      title: '账号名称',
      dataIndex: 'accountName',
    },
    {
      title: '账号角色',
      key: 'roleID',
      render: (record: any) => record.role?.name || '-',
      renderFormItem: () => (
        <ProFormSelect
          options={roleList?.rows?.map((vo: any) => {
            return { label: vo.name, value: vo.id };
          })}
        />
      ),
    },
    {
      title: '是否禁用',
      key: 'isSwitch',
      render: (record: any) => {
        if (access['/account/list:edit']) {
          return record.isSwitch ? '是' : '否';
        }
        return (
          <Switch
            checkedChildren="是"
            unCheckedChildren="否"
            checked={record.isSwitch}
            onChange={() => {
              onSwitch(record);
            }}
          />
        );
      },
      renderFormItem: () => (
        <ProFormSelect
          options={[
            { label: '是', value: 0 },
            { label: '否', value: 1 },
          ]}
        />
      ),
    },
    {
      title: '创建人',
      search: false,
      dataIndex: ['creator', 'accountName'],
    },
    {
      title: '最后更新时间',
      search: false,
      dataIndex: 'updatedAt',
      render: (text: any, record: any) =>
        (record.updatedAt && dayjs(text).format('YYYY/MM/DD HH:mm:ss')) || '-',
    },
    {
      title: '操作',
      key: 'operation',
      search: false,
      fixed: 'right',
      render: (record: any) => (
        <>
          {access['/account/list:edit'] && (
            <a
              onClick={() => {
                onCreate(record);
              }}
            >
              编辑
            </a>
          )}
          {access['/account/list:remove'] && (
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
          const res: any = await req('user/find/account', { ...params, isAdmin: 1 });
          return res;
        }}
        pagination={{
          defaultPageSize: 10,
        }}
        headerTitle={
          access['/account/list:add'] && (
            <Button
              type="primary"
              onClick={() => {
                onCreate(null);
              }}
            >
              新建账号
            </Button>
          )
        }
      />
      <Edit
        open={open}
        title={`${editItem ? '编辑' : '新建'}账号`}
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
