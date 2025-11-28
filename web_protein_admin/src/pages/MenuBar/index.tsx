import { PageContainer } from '@ant-design/pro-components';
import { Button, Tabs, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { NAV_TYPE } from '@/common/enum';
import Preview from './components/Preview';
import { effect, useConnect } from '@/utils/dva17';
import { EGet, NOptions } from '@/common/action';
import List from './List';
import Options from './Options';

export default () => {
  const { optionsMenu } = useConnect(NOptions);
  const [current, setCurrent]: any = useState(null);
  const [currentName, setCurrentName]: any = useState(null);
  const [preview, setPreview] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    effect(NOptions, EGet, { type: NAV_TYPE['menuBar'] });
  }, []);
  useEffect(() => {
    if (optionsMenu && optionsMenu.length !== 0) {
      setCurrent(optionsMenu[0].id);
      setCurrentName(optionsMenu[0].name);
    }
  }, [optionsMenu]);
  return (
    <PageContainer title={false}>
      <Tabs
        activeKey={current}
        onChange={(activeKey: string) => {
          setCurrent(activeKey);
        }}
        items={optionsMenu?.map((vo: any) => {
          return {
            label: vo.name + `(${vo.zhName})`,
            key: vo.id,
            children: <div />,
          };
        })}
        tabBarExtraContent={
          <Button
            type="primary"
            onClick={() => {
              setOpen(!open);
            }}
          >
            栏目管理
          </Button>
        }
      />
      <List
        optionId={current}
        setPreview={() => {
          setPreview(true);
        }}
      />
      <Preview
        open={preview}
        title="预览"
        current={current}
        currentName={currentName}
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
      <Modal
        open={open}
        title="栏目管理"
        width={1000}
        onCancel={() => {
          setOpen(false);
        }}
        footer={
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            关闭
          </Button>
        }
      >
        <Options />
      </Modal>
    </PageContainer>
  );
};
