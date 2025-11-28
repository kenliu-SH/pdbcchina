import { useEffect, useRef, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Switch, Image, Modal, Divider, Select, Tag, Space, Radio } from 'antd';
import { req } from '@/utils/utils';
import { effect, useConnect } from '@/utils/dva17';
import { EDelete, NHighLight, EPut, NTags, EGet } from '@/common/action';
import dayjs from 'dayjs';
import { useAccess } from 'umi';

import NewsPreview from '@/components/NewsPreview';
import Edit from './components/Edit';

export default () => {
  const actionRef: any = useRef<ActionType>();
  const access = useAccess();
  const { tagList } = useConnect(NTags);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [preview, setPreview] = useState(false);
  const [type, setType]: any = useState(0);
  useEffect(() => {
    effect(NTags, EGet);
  }, []);
  const onCreate = (record: any) => {
    setOpen(true);
    setEditItem(record);
  };
  const onDelete = (id: number) => {
    Modal.confirm({
      title: '确认删除此条亮点成果吗？',
      okType: 'danger',
      onOk: async () => {
        await effect(NHighLight, EDelete, { id });
        actionRef.current.reload();
      },
    });
  };
  const onShow = ({ id, isShow }: any) => {
    Modal.confirm({
      title: `确认${isShow ? '隐藏' : '展示'}此条亮点成果？`,
      onOk: async () => {
        await effect(NHighLight, EPut, { id, isShow: isShow ? 0 : 1 });
        actionRef.current.reload();
      },
    });
  };
  const onTop = ({ id, isTop }: any) => {
    Modal.confirm({
      title: `确认${isTop ? '取消置顶' : '置顶'}此条亮点成果？`,
      onOk: async () => {
        await effect(NHighLight, EPut, { id, isTop: !isTop });
        actionRef.current.reload();
      },
    });
  };
  const onHome = ({ id, isHomePage }: any) => {
    Modal.confirm({
      title: `确认${isHomePage ? '首页显示' : '首页不显示'}此条亮点成果？`,
      onOk: async () => {
        await effect(NHighLight, EPut, { id, isHomePage: !isHomePage });
        actionRef.current.reload();
      },
    });
  };
  const columns: ProColumns<any>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      search: false,
    },
    {
      title: '标题',
      dataIndex: type === 1 ? 'zhTitle' : 'title',
      key: 'title',
      width: 200,
    },
    {
      title: '发布时间',
      dataIndex: 'releaseTime',
      search: false,
      render: (text: any, record: any) =>
        (record.releaseTime && dayjs(text).format('YYYY-MM-DD')) || '-',
    },
    {
      title: '标签',
      key: 'tagsIds',
      render: (record: any) => {
        return record.tags && record.tags.length !== 0 ? (
          <>
            {record.tags.map((vo: any, i: number) => (
              <Tag key={i} color="success">
                {vo.name}
              </Tag>
            ))}
          </>
        ) : (
          '-'
        );
      },
      renderFormItem: () => (
        <Select
          allowClear
          mode="multiple"
          options={tagList?.map((vv: any) => {
            return { label: vv.name, value: vv.id };
          })}
          placeholder="请选择"
        />
      ),
    },
    {
      title: '简介',
      dataIndex: type === 1 ? 'zhAbstract' : 'abstract',
      width: 350,
      search: false,
    },
    {
      title: '封面图',
      dataIndex: 'miniImage',
      search: false,
      render: (text: any) => {
        return <Image src={text} style={{ width: 105, height: 105, objectFit: 'contain' }} />;
      },
    },

    {
      title: '是否显示',
      dataIndex: 'isShow',
      search: false,
      render: (text: any, record: any) => {
        if (!access['/highLight:edit']) {
          return text ? '是' : '否';
        }
        return (
          <Switch
            unCheckedChildren="否"
            checkedChildren="是"
            checked={text}
            onChange={() => {
              onShow(record);
            }}
          />
        );
      },
      renderFormItem: () => (
        <Select
          placeholder="请选择"
          allowClear
          options={[
            { label: '是', value: 1 },
            { label: '否', value: 0 },
          ]}
        />
      ),
    },
    {
      title: '是否置顶',
      dataIndex: 'isTop',
      search: false,
      render: (text: any, record: any) => {
        return (
          <Switch
            unCheckedChildren="否"
            checkedChildren="是"
            checked={text}
            disabled={!record.isShow}
            onChange={() => {
              onTop(record);
            }}
          />
        );
      },
      renderFormItem: () => (
        <Select
          placeholder="请选择"
          allowClear
          options={[
            { label: '是', value: 1 },
            { label: '否', value: 0 },
          ]}
        />
      ),
    },
    {
      title: '是否首页显示',
      dataIndex: 'isHomePage',
      search: false,
      render: (text: any, record: any) => {
        return (
          <Switch
            unCheckedChildren="否"
            checkedChildren="是"
            checked={text}
            disabled={!record.isShow}
            onChange={() => {
              onHome(record);
            }}
          />
        );
      },
      renderFormItem: () => (
        <Select
          placeholder="请选择"
          allowClear
          options={[
            { label: '是', value: 1 },
            { label: '否', value: 0 },
          ]}
        />
      ),
    },
    {
      title: '上传人',
      dataIndex: ['user', 'nickname'],
      search: false,
    },
    {
      title: '最后更新时间',
      dataIndex: 'updatedAt',
      search: false,
      render: (text: any) => {
        return dayjs(text).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: '操作',
      key: 'operation',
      width: 180,
      fixed: 'right',
      align: 'center',
      search: false,
      render: (record: any) => (
        <Space split={<Divider type="vertical" />}>
          <a
            onClick={() => {
              setPreview(true);
              setEditItem(record);
            }}
          >
            预览
          </a>
          {access['/highLight:edit'] && (
            <a
              onClick={() => {
                onCreate(record);
              }}
            >
              编辑
            </a>
          )}
          {access['/highLight:remove'] && (
            <a
              style={{ color: '#ff0000' }}
              onClick={() => {
                onDelete(record.id);
              }}
            >
              删除
            </a>
          )}
        </Space>
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
        search={{
          labelWidth: 100,
        }}
        beforeSearchSubmit={(params: any) => {
          if (params['tagsIds'] && params['tagsIds'].length !== 0) {
            params['tagsIds'] = params['tagsIds'].join(',');
          }
          return params;
        }}
        request={async (params) => {
          const res: any = await req('highlight/findPagination', params);
          return res;
        }}
        pagination={{
          defaultPageSize: 10,
          showQuickJumper: true,
          showSizeChanger: true,
        }}
        headerTitle={
          access['/highLight:add'] && (
            <Button
              type="primary"
              key="add"
              onClick={() => {
                onCreate(null);
              }}
            >
              新建亮点成果
            </Button>
          )
        }
        toolBarRender={() => [
          <Radio.Group
            key="type"
            value={type}
            buttonStyle="solid"
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <Radio.Button value={0}>中</Radio.Button>
            <Radio.Button value={1}>英</Radio.Button>
          </Radio.Group>,
        ]}
      />
      <Edit
        open={open}
        title={`${editItem ? '编辑' : '新建'}亮点成果`}
        width={980}
        editItem={editItem}
        onCancel={() => {
          setOpen(false);
        }}
        onOk={() => {
          setOpen(false);
          actionRef.current.reload();
        }}
      />
      <NewsPreview
        open={preview}
        title="效果预览"
        width={900}
        data={editItem}
        isChinese={type}
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
