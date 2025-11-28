import { useRef, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Divider, Image, Modal, Switch, Table, Space } from 'antd';
import { req } from '@/utils/utils';
import { effect } from '@/utils/dva17';
import { EDelete, EDeleteSubItem, EPut, EPutSubItem, NFooter } from '@/common/action';
import { orderBy } from 'lodash';
import { useAccess } from 'umi';
import { STATUS_KEY } from '@/common/enum';
import EditItems from './components/EditItems';
import EditSubItems from './components/EditSubItems';
import FooterPreview from '@/components/FooterPreview';

export default () => {
  const actionRef: any = useRef<ActionType>();
  const access = useAccess();
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [subOpen, setSubOpen] = useState(false);
  const [subItem, setSubItem] = useState(null);
  const [preview, setPreview] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const onCreate = (record: any) => {
    setOpen(true);
    setEditItem(record);
  };
  const onDelete = (id: number) => {
    Modal.confirm({
      title: '确认删除此主项吗？',
      onOk: async () => {
        await effect(NFooter, EDelete, { id });
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
        await effect(NFooter, EDeleteSubItem, { id });
        actionRef.current.reload();
      },
    });
  };
  const columns: ProColumns<any>[] = [
    // {
    //   title: '类型',
    //   dataIndex: 'type',
    //   render: (text: any) => (text === 0 ? '左侧菜单项' : '右侧合作伙伴'),
    // },
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
    {
      title: '图标',
      dataIndex: 'imgUrl',
      search: false,
      render: (text: any, record: any) => {
        return record.imgUrl ? (
          <Image
            src={text}
            style={{
              width: '40px',
              height: '40px',
              objectFit: 'contain',
              backgroundColor: 'rgba(0,0,0,0.65)',
            }}
          />
        ) : (
          '-'
        );
      },
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
        if (!access['/system-settings/footer:edit']) {
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
                  await effect(NFooter, EPut, { id: record.id, isShow: text ? 0 : 1 });
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
          {access['/system-settings/footer:addSub'] && (
            <a
              onClick={() => {
                setEditItem(record);
                onCreateSub(null);
              }}
            >
              新建子项
            </a>
          )}
          {access['/system-settings/footer:edit'] && (
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
          {access['/system-settings/footer:remove'] && (
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
    {
      title: '主项名称',
      dataIndex: 'name',
      hideInTable: true,
    },
    {
      title: '子项名称',
      dataIndex: 'nameItem',
      hideInTable: true,
    },
  ];
  const expandedRowRender = (rowData: any) => {
    const exColumns: any = [
      {
        title: '子项名称(英文)',
        dataIndex: 'name',
        render: (text: any) => (text ? text : '-'),
      },
      {
        title: '子项名称(中文)',
        dataIndex: 'zhName',
        render: (text: any) => (text ? text : '-'),
      },
      {
        title: '图片',
        key: 'imgUrl',
        render: (record: any) =>
          record.imgUrl ? (
            <Image
              src={record.imgUrl}
              style={{
                width: '83px',
                height: '28px',
                objectFit: 'contain',
                backgroundColor: 'rgba(0,0,0,0.65)',
              }}
            />
          ) : (
            '-'
          ),
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
        title: '显示规则',
        dataIndex: 'status',
        render: (text: any) => STATUS_KEY[text],
      },
      {
        title: '是否显示',
        dataIndex: 'isShow',
        render: (text: any, record: any) => {
          if (!access['/system-settings/footer:editSub']) {
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
                    await effect(NFooter, EPutSubItem, { id: record.id, isShow: text ? 0 : 1 });
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
            {access['/system-settings/footer:editSub'] && (
              <a
                onClick={() => {
                  setEditItem(null);
                  onCreateSub(record);
                }}
              >
                编辑
              </a>
            )}
            {access['/system-settings/footer:removeSub'] && (
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
        dataSource={orderBy(rowData?.footerItems || [], 'order', 'desc')}
        columns={exColumns}
        pagination={false}
        rowKey="id"
        size="middle"
        scroll={{ x: 'max-content' }}
      />
    );
  };
  return (
    <PageContainer title={false}>
      <ProTable<any, any>
        actionRef={actionRef}
        rowKey="id"
        bordered
        columns={columns}
        scroll={{ x: 'max-content' }}
        search={{
          labelWidth: 100,
        }}
        request={async (params) => {
          const res: any = await req('footer', params);
          setDataSource(res.concat());
          return { data: res };
        }}
        pagination={{
          defaultPageSize: 20,
          showQuickJumper: true,
          showSizeChanger: true,
        }}
        headerTitle={
          <Space>
            {access['/system-settings/footer:add'] && (
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
          rowExpandable: (record: any) => record.footerItems.length !== 0,
        }}
      />
      <EditItems
        open={open}
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
      <FooterPreview
        open={preview}
        title="预览"
        dataSource={dataSource}
        onCancel={() => {
          setPreview(false);
        }}
        footer={
          <Button
            onClick={() => {
              setPreview(false);
            }}
          >
            关闭
          </Button>
        }
      />
    </PageContainer>
  );
};
