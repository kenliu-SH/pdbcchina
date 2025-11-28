import { useRef, useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Divider, Image, Modal, Radio, Select, Space, Switch, Tag } from 'antd';
import { req } from '@/utils/utils';
import moment from 'moment';
import { effect, useConnect } from '@/utils/dva17';
import { EDelete, EPut, NNews, NTags, EGet } from '@/common/action';
import { useAccess } from 'umi';
import dayjs from 'dayjs';

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
      title: '确认删除此条新闻吗？',
      okType: 'danger',
      onOk: async () => {
        await effect(NNews, EDelete, { id });
        actionRef.current.reload();
      },
    });
  };
  const onShow = ({ id, isShow }: any) => {
    Modal.confirm({
      title: `确认${isShow ? '隐藏' : '展示'}此条新闻？`,
      onOk: async () => {
        await effect(NNews, EPut, { id, isShow: isShow ? 0 : 1 });
        actionRef.current.reload();
      },
    });
  };
  const onTop = ({ id, isTop }: any) => {
    Modal.confirm({
      title: `确认${isTop ? '取消置顶' : '置顶'}此条新闻？`,
      onOk: async () => {
        await effect(NNews, EPut, { id, isTop: !isTop });
        actionRef.current.reload();
      },
    });
  };
  const onHome = ({ id, isHomePage }: any) => {
    Modal.confirm({
      title: `确认${isHomePage ? '首页显示' : '首页不显示'}此条新闻？`,
      onOk: async () => {
        await effect(NNews, EPut, { id, isHomePage: !isHomePage });
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
      title: '标题',
      dataIndex: type === 1 ? 'zhTitle' : 'title',
      width: 250,
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
      title: '摘要',
      dataIndex: type === 1 ? 'zhSummary' : 'summary',
      width: 350,
      search: false,
    },
    {
      title: '摘要图片',
      dataIndex: 'summaryPicture',
      search: false,
      render: (text: any) => {
        return (
          <Image src={text} style={{ width: '174.5px', height: '67.5px', objectFit: 'cover' }} />
        );
      },
    },
    {
      title: '上传人',
      dataIndex: ['user', 'nickname'],
      search: false,
    },
    {
      title: '浏览数',
      dataIndex: 'visitCount',
      search: false,
    },
    {
      title: '点赞数',
      dataIndex: 'likeCount',
      search: false,
    },
    {
      title: '是否显示',
      dataIndex: 'isShow',
      search: false,
      render: (text: any, record: any) => {
        if (!access['/news:edit']) {
          return text ? '是' : '否';
        }
        return (
          <Switch
            unCheckedChildren="否"
            checkedChildren="是"
            checked={text}
            disabled={!access['/news:edit']}
            onChange={() => {
              onShow(record);
            }}
          />
        );
      },
    },
    {
      title: '是否置顶',
      dataIndex: 'isTop',
      search: false,
      render: (text: any, record: any) => {
        if (!access['/news:edit']) {
          return text ? '是' : '否';
        }
        return (
          <Switch
            unCheckedChildren="否"
            checkedChildren="是"
            checked={text}
            disabled={!record.isShow || !access['/news:edit']}
            onChange={() => {
              onTop(record);
            }}
          />
        );
      },
    },
    {
      title: '是否首页显示',
      dataIndex: 'isHomePage',
      search: false,
      render: (text: any, record: any) => {
        if (!access['/news:edit']) {
          return text ? '是' : '否';
        }
        return (
          <Switch
            unCheckedChildren="否"
            checkedChildren="是"
            checked={text}
            disabled={!record.isShow || !access['/news:edit']}
            onChange={() => {
              onHome(record);
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
        return text && moment(text).format('YYYY/MM/DD HH:mm:ss');
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
          {access['/news:edit'] && (
            <a
              onClick={() => {
                onCreate(record);
              }}
            >
              编辑
            </a>
          )}
          {access['/news:remove'] && (
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
        beforeSearchSubmit={(params: any) => {
          if (params['tagsIds'] && params['tagsIds'].length !== 0) {
            params['tagsIds'] = params['tagsIds'].join(',');
          }
          return params;
        }}
        request={async (params) => {
          const res: any = await req('news', params);
          return res;
        }}
        pagination={{
          defaultPageSize: 10,
          showQuickJumper: true,
          showSizeChanger: true,
        }}
        headerTitle={
          access['/news:add'] && (
            <Button
              type="primary"
              key="add"
              onClick={() => {
                onCreate(null);
              }}
            >
              新建新闻
            </Button>
          )
        }
        toolBarRender={() => [
          <Radio.Group
            key="type"
            buttonStyle="solid"
            value={type}
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
        title={`${editItem ? '编辑' : '新建'}新闻`}
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
