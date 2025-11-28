import { PageContainer, ProTable } from '@ant-design/pro-components';
import { useRef } from 'react';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { Switch, Image, Modal, Radio } from 'antd';
import { req } from '@/utils/utils';
import { requestPut } from '@/utils/dva17';
import { THEME_NAME, THEME_BG } from '@/common/enum';

export default () => {
  const actionRef: any = useRef<ActionType>();
  const columns: ProColumns<any>[] = [
    { title: '主题名称', key: 'name', render: (record: any) => record.type },
    {
      title: '效果图',
      key: 'type',
      render: (record: any) => {
        const { id, isDefault, isLock, type, status } = record;
        if (type === '黑白') {
          return <Image src={THEME_BG[type]} style={{ width: '100px', height: '100px' }} />;
        }
        return (
          <Radio.Group
            value={isDefault ? status : null}
            onChange={async ({ target: { value } }) => {
              await requestPut(`theme/${id}`, { isDefault: 1, status: value, isLock });
              actionRef.current.reload();
            }}
          >
            <Radio value={1}>
              <Image
                src={THEME_BG[type][1]}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            </Radio>
            <Radio value={2}>
              <Image
                src={THEME_BG[type][2]}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            </Radio>
            <Radio value={3}>
              <Image
                src={THEME_BG[type][3]}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            </Radio>
          </Radio.Group>
        );
      },
    },
    {
      title: '默认主题',
      dataIndex: 'isDefault',
      render: (text: any, record: any) => (
        <Switch
          unCheckedChildren="否"
          checkedChildren="是"
          checked={text}
          disabled={text ? true : false}
          onChange={() => {
            Modal.confirm({
              title: '确认将此主题置为默认主题？',
              onOk: async () => {
                const payload: any = { isDefault: text ? 0 : 1 };
                if (record.type === THEME_NAME['黑白']) payload.isLock = 1;
                await requestPut(`theme/${record.id}`, payload);
                actionRef.current.reload();
              },
            });
          }}
        />
      ),
    },
    {
      title: '是否锁定',
      dataIndex: 'isLock',
      render: (text: any, record: any) => (
        <Switch
          unCheckedChildren="否"
          checkedChildren="是"
          checked={text}
          disabled={record.isDefault === 0 || record.type === THEME_NAME['黑白'] ? true : false}
          onChange={() => {
            Modal.confirm({
              title: '确认锁定此主题置？',
              content: '锁定后用户不可切换主题样式',
              onOk: async () => {
                await requestPut(`theme/${record.id}`, { isLock: text ? 0 : 1 });
                actionRef.current.reload();
              },
            });
          }}
        />
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
        search={false}
        pagination={false}
        columns={columns}
        request={async (params: any) => {
          const res = await req('theme', params);
          return {
            data: res,
          };
        }}
      />
    </PageContainer>
  );
};
