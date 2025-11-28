import { PageContainer } from '@ant-design/pro-components';
import { Tabs, Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { effect, useConnect } from '@/utils/dva17';
import { EGet, NOptions } from '@/common/action';
import { NAV_TYPE } from '@/common/enum';
import List from './List';
import Navbar from '@/components/Navbar';
import Options from './Options';

export default () => {
  const { optionsNav } = useConnect(NOptions);
  const [current, setCurrent]: any = useState(null);
  const [preview, setPreview] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    effect(NOptions, EGet, { type: NAV_TYPE['navBar'] });
  }, []);
  useEffect(() => {
    if (optionsNav && optionsNav.length !== 0) {
      setCurrent(optionsNav[0].id);
    }
  }, [optionsNav]);
  return (
    <PageContainer title={false}>
      <Tabs
        activeKey={current}
        onChange={(activeKey: string) => {
          setCurrent(activeKey);
        }}
        items={optionsNav?.map((vo: any) => {
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
      <Navbar
        open={preview}
        title="顶部导航栏"
        current={current}
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
