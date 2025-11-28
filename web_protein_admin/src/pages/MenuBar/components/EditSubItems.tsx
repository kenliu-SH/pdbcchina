import { EPostSubItem, EPutSubItem, NMenuBar } from '@/common/action';
import { effect, useLoading } from '@/utils/dva17';
import { ProFormDigit, ProFormText, ProFormSwitch, ProFormRadio } from '@ant-design/pro-components';
import { Form, Modal, message } from 'antd';
import { useEffect, useState } from 'react';

export default (props: any) => {
  const [subForm] = Form.useForm();
  const { open, editItem, subItem, onOk } = props;
  const [ruleType, setRuleType] = useState(1);
  const [isBuilding, setIsBuilding] = useState(false);
  const loading = useLoading(NMenuBar, editItem ? EPostSubItem : EPutSubItem).loading;
  useEffect(() => {
    if (open) {
      setRuleType(subItem?.name && subItem?.describe ? 1 : 2);
      setIsBuilding(subItem?.isBuilding || false);
      subForm.setFieldsValue({
        name: subItem?.name,
        zhName: subItem?.zhName,
        describe: subItem?.describe,
        zhDescribe: subItem?.zhDescribe,
        linkUrl: subItem?.linkUrl,
        order: subItem?.order,
        isShow: subItem?.isShow ? true : false,
        isBuilding: subItem?.isBuilding || false,
        buildingLinkUrl: subItem?.buildingLinkUrl,
      });
    }
  }, [open]);
  const onSubmit = async () => {
    try {
      await subForm.validateFields();
      const values = subForm.getFieldsValue();
      if (editItem) values.id = editItem.id;
      if (subItem) values.id = subItem.id;
      if (ruleType === 2) values.name = null;
      values.isShow = values.isShow ? 1 : 0;
      effect(NMenuBar, editItem ? EPostSubItem : EPutSubItem, values).then(() => {
        message.success(`${editItem ? '编辑' : '新建'}子项成功！`);
        onOk();
      });
    } catch (error) {
      console.error('error: ', error);
    }
  };
  return (
    <Modal {...props} destroyOnClose maskClosable={false} confirmLoading={loading} onOk={onSubmit}>
      <Form form={subForm} labelCol={{ span: 5 }}>
        <ProFormRadio.Group
          label="类型"
          fieldProps={{
            value: ruleType,
            onChange: ({ target: { value } }: any) => {
              setRuleType(value);
            },
          }}
          options={[
            {
              label: '全部显示',
              value: 1,
            },
            {
              label: '仅描述',
              value: 2,
            },
          ]}
        />
        {ruleType !== 2 && (
          <>
            <ProFormText label="标题(英文)" name="name" rules={[{ required: ruleType === 1 }]} />
            <ProFormText label="标题(中文)" name="zhName" />
          </>
        )}
        <ProFormText label="描述(英文)" name="describe" rules={[{ required: true }]} />
        <ProFormText label="描述(中文)" name="zhDescribe" />
        <ProFormText
          label="跳转链接"
          name="linkUrl"
          rules={[
            {
              pattern:
                /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
              message: '链接地址格式有误',
            },
          ]}
        />
        <ProFormDigit label="排序值" name="order" min={0} extra="数值越大，显示顺序越靠前" />
        <ProFormSwitch label="是否显示" name="isShow" unCheckedChildren="否" checkedChildren="是" />
        <ProFormSwitch
          label="是否建设中"
          name="isBuilding"
          unCheckedChildren="否"
          checkedChildren="是"
          fieldProps={{
            onChange: setIsBuilding,
          }}
        />
        {isBuilding && (
          <ProFormText label="问卷地址" name="buildingLinkUrl" rules={[{ required: true }]} />
        )}
      </Form>
    </Modal>
  );
};
