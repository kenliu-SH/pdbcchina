import { PageContainer } from '@ant-design/pro-components';
import { useEffect, useRef, useState } from 'react';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, useRefFunction } from '@ant-design/pro-components';
import { Button, Divider, Modal } from 'antd';
import dayjs from 'dayjs';
import { effect, useConnect, useLoading } from '@/utils/dva17';
import { EDelete, EGet, ESort, NTags } from '@/common/action';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import { useAccess } from 'umi';

import Edit from './components/Edit';

const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />);

export default () => {
  const actionRef: any = useRef<ActionType>();
  const access = useAccess();
  const { tagList } = useConnect(NTags);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const loading = useLoading(NTags, EGet).loading;
  const SortableItem: any = SortableElement((props: any) => <tr {...props} />);
  const SortContainer: any = SortableContainer((props: any) => <tbody {...props} />);
  useEffect(() => {
    effect(NTags, EGet);
  }, []);
  const onCreate = (record: any = null) => {
    setOpen(true);
    setEditItem(record);
  };
  const onDelete = (id: number) => {
    Modal.confirm({
      title: '确认删除此标签？',
      onOk: async () => {
        await effect(NTags, EDelete, { id });
        effect(NTags, EGet);
      },
    });
  };
  // 拖拽
  const onSortEnd = useRefFunction(
    ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
      if (oldIndex !== newIndex) {
        effect(NTags, ESort, { id: tagList[oldIndex].id, swopId: tagList[newIndex].id }).then(
          () => {
            effect(NTags, EGet);
          },
        );
      }
    },
  );
  const DraggableContainer = (props: any) => {
    return (
      <SortContainer
        useDragHandle
        disableAutoscroll
        helperClass="row-dragging sortableHelper"
        onSortEnd={onSortEnd}
        {...props}
      />
    );
  };
  const DraggableBodyRow = (props: any) => {
    const { className, style, ...restProps } = props;
    const index = tagList.findIndex((x: any) => x.id === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };
  const columns: ProColumns<any>[] = [
    {
      title: '排序',
      key: 'sort',
      width: 60,
      className: 'drag-visible',
      render: () => {
        return access['/tags:edit'] && <DragHandle />;
      },
    },
    { title: '标签名称', dataIndex: 'name' },
    {
      title: '排序值',
      dataIndex: 'order',
    },
    {
      title: '最后更新时间',
      dataIndex: 'updatedAt',
      render: (text: any) => {
        return dayjs(text).format('YYYY/MM/DD HH:mm:ss');
      },
    },
    {
      title: '操作',
      key: 'operation',
      render: (record: any) => {
        return (
          <>
            {access['/tags:edit'] && (
              <a
                onClick={() => {
                  onCreate(record);
                }}
              >
                编辑
              </a>
            )}
            {access['/tags:remove'] && (
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
        );
      },
    },
  ];
  return (
    <PageContainer>
      <ProTable<any, any>
        actionRef={actionRef}
        rowKey="id"
        bordered
        columns={columns}
        loading={loading}
        scroll={{ x: 'max-content' }}
        search={false}
        dataSource={tagList || []}
        pagination={false}
        headerTitle={
          access['/tags:add'] && (
            <Button
              type="primary"
              key="add"
              onClick={() => {
                onCreate();
              }}
            >
              新建标签
            </Button>
          )
        }
        components={{
          body: {
            wrapper: DraggableContainer,
            row: DraggableBodyRow,
          },
        }}
      />
      <Edit
        open={open}
        title={`${editItem ? '编辑' : '新建'}标签`}
        editItem={editItem}
        onCancel={() => {
          setOpen(false);
        }}
        onOk={() => {
          setOpen(false);
          effect(NTags, EGet);
        }}
      />
    </PageContainer>
  );
};
