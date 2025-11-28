import { req } from '@/utils/utils';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useRef, useState } from 'react';
import { Button, Divider, Image, Table, Modal, Switch, Space } from 'antd';
import { orderBy } from 'lodash';
import { effect } from '@/utils/dva17';
import { EDelete, EDeleteSubItem, EPut, EPutSubItem, NNavigation } from '@/common/action';
import EditItems from './components/EditItems';
import EditSubItem from './components/EditSubItem';
import { useAccess } from 'umi';

export default ({ optionId, setPreview }: any) => {
  const actionRef: any = useRef<ActionType>();
  const access = useAccess();
  const [open, setOpen] = useState(false);
  const [mainItem, setMainItem] = useState(null);
  const [subOpen, setSubOpen] = useState(false);
  const [subItem, setSubItem] = useState(null);
  const onCreate = (record: any) => {
    setOpen(true);
    setMainItem(record);
  };
  const onDelete = (id: number) => {
    Modal.confirm({
      title: '确认删除此主项？',
      onOk: async () => {
        await effect(NNavigation, EDelete, { id });
        actionRef.current.reload();
      },
    });
  };
  const onCreateSub = (rowData: any, record: any) => {
    setMainItem(rowData);
    setSubOpen(true);
    setSubItem(record);
  };
  const onDeleteSub = (id: number) => {
    Modal.confirm({
      title: '确认删除此子项？',
      onOk: async () => {
        await effect(NNavigation, EDeleteSubItem, { id });
        actionRef.current.reload();
      },
    });
  };
  const columns: ProColumns<any>[] = [
    { title: '主项名称', dataIndex: 'name', hideInTable: true },
    {
      title: '子项标题',
      dataIndex: 'nameItem',
      hideInTable: true,
    },
    { title: '主项名称(英文)', dataIndex: 'name', search: false },
    { title: '主项名称(中文)', dataIndex: 'zhName', search: false },
    {
      title: '图片',
      dataIndex: 'imgUrl',
      search: false,
      render: (text: any, record: any) =>
        record.imgUrl ? (
          <Image src={text} style={{ width: '100px', height: '25px', objectFit: 'cover' }} />
        ) : (
          '-'
        ),
    },
    {
      title: '链接地址',
      dataIndex: 'linkUrl',
      search: false,
      render: (text: any, record: any) =>
        record.linkUrl ? (
          <a href={text} target="_blank" rel="noreferrer">
            {text}
          </a>
        ) : (
          '-'
        ),
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
        if (!access['/system-settings/navigation-bar:edit']) {
          return text ? '是' : '否';
        }
        return (
          <Switch
            checkedChildren="是"
            unCheckedChildren="否"
            checked={text}
            onChange={() => {
              Modal.confirm({
                title: `确认${text ? '不显示' : '显示'}此项？`,
                onOk: async () => {
                  await effect(NNavigation, EPut, {
                    id: record.id,
                    option: record.option,
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
          {record.type === 0 && access['/system-settings/navigation-bar:addSub'] && (
            <>
              <a
                onClick={() => {
                  onCreateSub(record, null);
                }}
              >
                新建子项
              </a>
              <Divider type="vertical" />
            </>
          )}
          {access['/system-settings/navigation-bar:edit'] && (
            <a
              onClick={() => {
                onCreate(record);
              }}
            >
              编辑
            </a>
          )}
          {access['/system-settings/navigation-bar:remove'] && (
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
        title: '图片',
        dataIndex: 'imgUrl',
        render: (text: any, record: any) =>
          record.imgUrl ? (
            <Image src={text} style={{ width: '100px', height: '25px', objectFit: 'cover' }} />
          ) : (
            '-'
          ),
      },
      {
        title: '链接地址',
        dataIndex: 'linkUrl',
        search: false,
        render: (text: any, record: any) =>
          record.linkUrl ? (
            <a href={text} target="_blank" rel="noreferrer">
              {text}
            </a>
          ) : (
            '-'
          ),
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
          if (!access['/system-settings/navigation-bar:editSub']) {
            return text ? '是' : '否';
          }
          return (
            <Switch
              checkedChildren="是"
              unCheckedChildren="否"
              checked={text}
              onChange={() => {
                Modal.confirm({
                  title: `确认${text ? '不显示' : '显示'}此项？`,
                  onOk: async () => {
                    await effect(NNavigation, EPutSubItem, {
                      id: record.id,
                      option: record.option,
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
        render: (record: any) => (
          <>
            {access['/system-settings/navigation-bar:editSub'] && (
              <a
                onClick={() => {
                  onCreateSub(null, record);
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
        dataSource={orderBy(rowData.navBarItems, 'order', 'desc')}
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
            const res: any = await req('navBar', params);
            return {
              data: res,
            };
          }}
          pagination={false}
          headerTitle={
            <Space>
              {access['/system-settings/navigation-bar:add'] && (
                <Button
                  type="primary"
                  key="add"
                  onClick={() => {
                    onCreate(null);
                  }}
                >
                  新建主项
                </Button>
              )}
              <Button key="preview" type="primary" onClick={setPreview}>
                效果预览
              </Button>
            </Space>
          }
          expandable={{
            expandedRowRender,
            rowExpandable: (record: any) => record.navBarItems.length !== 0,
          }}
        />
        <EditItems
          title={`${mainItem ? '编辑' : '新建'}主项`}
          open={open}
          mainItem={mainItem}
          optionId={optionId}
          onCancel={() => {
            setOpen(false);
          }}
          onOk={() => {
            setOpen(false);
            actionRef.current.reload();
          }}
        />
        <EditSubItem
          title={`${subItem ? '编辑' : '新建'}子项`}
          open={subOpen}
          mainItem={mainItem}
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
