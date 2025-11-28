import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useRef, useState } from 'react';
import { Button, Switch, Image, Divider, Modal } from 'antd';
import { req } from '@/utils/utils';
import moment from 'moment';
import { effect } from '@/utils/dva17';
import { EDelete, EPut, NBanner } from '@/common/action';
import { useAccess } from 'umi';

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
      title: '确认删除此Banner？',
      onOk: async () => {
        await effect(NBanner, EDelete, { id });
        actionRef.current.reload();
      },
    });
  };
  const onShow = ({ id, isShow }: any) => {
    Modal.confirm({
      title: `确认${isShow ? '隐藏' : '展示'}此Banner？`,
      onOk: async () => {
        await effect(NBanner, EPut, { id, isShow: isShow ? 0 : 1 });
        actionRef.current.reload();
      },
    });
  };
  const columns: ProColumns<any>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      search: false,
    },
    {
      title: 'Banner',
      dataIndex: 'image',
      search: false,
      render: (text: any) => {
        return <Image style={{ width: 200, maxHeight: 80 }} src={text} />;
      },
    },
    {
      title: '描述内容',
      dataIndex: 'describe',
    },
    {
      title: '链接地址',
      dataIndex: 'link',
      render: (text: any, record: any) => {
        return record.link ? (
          <a href={text} target="_blank" rel="noreferrer">
            {text}
          </a>
        ) : (
          '-'
        );
      },
    },
    {
      title: '是否显示',
      dataIndex: 'isShow',
      render: (text: any, record: any) => {
        if (!access['/banner:edit']) {
          return text ? '是' : '否';
        }
        return (
          <Switch
            checked={text}
            unCheckedChildren="否"
            checkedChildren="是"
            onChange={() => {
              onShow(record);
            }}
          />
        );
      },
    },
    {
      title: '最后更新时间',
      dataIndex: 'updatedAt',
      search: false,
      render: (text: any) => {
        return moment(text).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: '操作',
      key: 'operation',
      search: false,
      fixed: 'right',
      width: 120,
      align: 'center',
      render: (record: any) => (
        <div>
          {access['/banner:edit'] && (
            <a
              onClick={() => {
                onCreate(record);
              }}
            >
              编辑
            </a>
          )}
          {access['/banner:remove'] && (
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
        </div>
      ),
    },
  ];
  return (
    <PageContainer>
      <ProTable<any, any>
        actionRef={actionRef}
        rowKey="id"
        bordered
        columns={columns}
        scroll={{ x: 'max-content' }}
        search={false}
        request={async (params) => {
          const res: any = await req('banner/findPagination', params);
          return res;
        }}
        pagination={{
          defaultPageSize: 10,
          showQuickJumper: true,
          showSizeChanger: true,
        }}
        headerTitle={
          access['/banner:add'] && (
            <Button
              type="primary"
              key="add"
              onClick={() => {
                onCreate(null);
              }}
            >
              新建Banner
            </Button>
          )
        }
      />
      <Edit
        open={open}
        title={`${editItem ? '编辑' : '新建'}Banner`}
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
