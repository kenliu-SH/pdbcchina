import { EDelete, EDeleteSubItem, EPut, EPutSubItem, NMenuBar } from '@/common/action';
import { MENU_TYPE } from '@/common/enum';
import { effect } from '@/utils/dva17';
import { req } from '@/utils/utils';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Modal, Switch, Button, Table, Divider, Image, message, Space } from 'antd';
import { orderBy } from 'lodash';
import { useRef, useState } from 'react';
import { useAccess } from 'umi';
import EditItems from './components/EditItems';
import EditSubItems from './components/EditSubItems';

export default ({ optionId, setPreview }: any) => {
  const actionRef: any = useRef<ActionType>();
  const access = useAccess();
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [subOpen, setSubOpen] = useState(false);
  const [subItem, setSubItem] = useState(null);
  const onCreate = (record: any) => {
    setOpen(true);
    setEditItem(record);
  };
  const onDelete = (id: number) => {
    Modal.confirm({
      title: '确认删除此主项吗？',
      onOk: async () => {
        await effect(NMenuBar, EDelete, { id });
        message.success('删除主项成功！');
        actionRef.current.reload();
      },
    });
  };
  const onCreateSub = (record: any) => {
    setSubOpen(true);
    setSubItem(record);
  };
  const onDeleteSub = (id: number) => {
    Modal.confirm({
      title: '确认删除此子项吗？',
      onOk: async () => {
        await effect(NMenuBar, EDeleteSubItem, { id });
        message.success('删除子项成功！');
        actionRef.current.reload();
      },
    });
  };
  const columns: ProColumns<any>[] = [
    {
      title: '主项名称',
      dataIndex: 'name',
      hideInTable: true,
    },
    {
      title: '主项名称(英文)',
      dataIndex: 'name',
      search: false,
    },
    {
      title: '主项名称(中文)',
      dataIndex: 'zhName',
      search: false,
    },
    { title: '描述(英文)', dataIndex: 'describe', search: false, width: 245 },
    { title: '描述(中文)', dataIndex: 'zhDescribe', search: false, width: 245 },
    {
      title: '缩略图',
      dataIndex: 'imgUrl',
      search: false,
      render: (text: any, record: any) =>
        record.imgUrl ? (
          <Image src={text} style={{ width: '66px', height: '66px' }} />
        ) : record.icon ? (
          <i className={`iconfont icon-${record.icon}`} style={{ fontSize: '46px' }} />
        ) : (
          '-'
        ),
    },
    {
      title: '子项标题',
      dataIndex: 'nameItem',
      hideInTable: true,
    },
    {
      title: '排序值',
      dataIndex: 'order',
      search: false,
    },
    {
      title: '是否显示',
      dataIndex: 'isShow',
      search: false,
      render: (text: any, record: any) => {
        if (!access['/system-settings/menu-bar:edit']) {
          return text ? '是' : '否';
        }
        return (
          <Switch
            unCheckedChildren="否"
            checkedChildren="是"
            checked={text}
            onChange={() => {
              Modal.confirm({
                title: `确认${text ? '不显示' : '显示'}此主项？`,
                onOk: async () => {
                  await effect(NMenuBar, EPut, {
                    id: record.id,
                    option: MENU_TYPE['desposit'],
                    isShow: text ? 0 : 1,
                  });
                  actionRef.current.reload();
                },
              });
            }}
          />
        );
      },
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      search: false,
      render: (record: any) => (
        <>
          {access['/system-settings/menu-bar:addSub'] && (
            <a
              onClick={() => {
                setEditItem(record);
                onCreateSub(null);
              }}
            >
              新建子项
            </a>
          )}
          {access['/system-settings/menu-bar:edit'] && (
            <>
              <Divider type="vertical" />
              <a
                onClick={() => {
                  onCreate(record);
                }}
              >
                编辑
              </a>
            </>
          )}
          {access['/system-settings/menu-bar:remove'] && (
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
  const expandedRowRender = (rowData: any) => {
    const exColumns: any = [
      {
        title: '子项标题(英文)',
        dataIndex: 'name',
        render: (text: any) => (text ? text : '-'),
      },
      {
        title: '子项标题(中文)',
        dataIndex: 'zhName',
        render: (text: any) => (text ? text : '-'),
      },
      {
        title: '描述(英文)',
        dataIndex: 'describe',
        render: (text: any) => (text ? text : '-'),
      },
      {
        title: '描述(中文)',
        dataIndex: 'zhDescribe',
        render: (text: any) => (text ? text : '-'),
      },
      {
        title: '跳转链接',
        dataIndex: 'linkUrl',
        render: (text: any, record: any) =>
          (record.linkUrl && (
            <a href={text} target="_blank" rel="noreferrer">
              {text}
            </a>
          )) ||
          '-',
      },
      {
        title: '排序值',
        dataIndex: 'order',
      },
      {
        title: '是否显示',
        dataIndex: 'isShow',
        render: (text: any, record: any) => {
          if (!access['/system-settings/menu-bar:editSub']) {
            return text ? '是' : '否';
          }
          return (
            <Switch
              unCheckedChildren="否"
              checkedChildren="是"
              checked={text}
              onChange={() => {
                Modal.confirm({
                  title: `确认${text ? '不显示' : '显示'}此子项？`,
                  onOk: async () => {
                    await effect(NMenuBar, EPutSubItem, { id: record.id, isShow: text ? 0 : 1 });
                    actionRef.current.reload();
                  },
                });
              }}
            />
          );
        },
      },
      {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        render: (record: any) => (
          <>
            {access['/system-settings/menu-bar:editSub'] && (
              <a
                onClick={() => {
                  setEditItem(null);
                  onCreateSub(record);
                }}
              >
                编辑
              </a>
            )}
            {access['/system-settings/menu-bar:removeSub'] && (
              <>
                <Divider type="vertical" />
                <a
                  style={{ color: '#ff0000' }}
                  onClick={() => {
                    onDeleteSub(record.id);
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
      <Table
        bordered
        dataSource={orderBy(rowData?.menuBarItems || [], 'order', 'desc')}
        columns={exColumns}
        pagination={false}
        rowKey="id"
        size="middle"
        scroll={{ x: 'max-content' }}
      />
    );
  };
  return (
    optionId && (
      <>
        <ProTable<any, any>
          actionRef={actionRef}
          rowKey="id"
          bordered
          columns={columns}
          scroll={{ x: 'max-content' }}
          search={{
            labelWidth: 100,
          }}
          params={{
            optionId,
          }}
          request={async (params) => {
            const res: any = await req('menuBar', params);
            return {
              data: res,
            };
          }}
          pagination={false}
          headerTitle={
            <Space>
              {access['/system-settings/menu-bar:add'] && (
                <Button
                  type="primary"
                  onClick={() => {
                    onCreate(null);
                  }}
                >
                  新建主项
                </Button>
              )}
              <Button
                type="primary"
                onClick={() => {
                  setPreview(true);
                }}
              >
                效果预览
              </Button>
            </Space>
          }
          expandable={{
            expandedRowRender,
            rowExpandable: (record: any) => record.menuBarItems.length !== 0,
          }}
        />
        <EditItems
          open={open}
          optionId={optionId}
          title={`${editItem ? '编辑' : '新建'}主项`}
          editItem={editItem}
          onCancel={() => {
            setOpen(false);
          }}
          onOk={() => {
            setOpen(false);
            actionRef.current.reload();
          }}
        />
        <EditSubItems
          open={subOpen}
          title={`${subItem ? '编辑' : '新建'}子项`}
          editItem={editItem}
          subItem={subItem}
          onCancel={() => {
            setSubOpen(false);
          }}
          onOk={() => {
            setSubOpen(false);
            actionRef.current.reload();
          }}
        />
      </>
    )
  );
};
