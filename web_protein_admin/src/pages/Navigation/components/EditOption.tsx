import { EPost, EPut, NOptions } from '@/common/action';
import { NAV_TYPE } from '@/common/enum';
import { effect } from '@/utils/dva17';
import { ProFormDigit, ProFormText } from '@ant-design/pro-components';
import { Form, Modal } from 'antd';
import { useEffect } from 'react';

export default (props: any) => {
  const [form] = Form.useForm();
  const { open, editItem, onOk } = props;
  useEffect(() => {
    if (open) {
      form.setFieldsValue({
        name: editItem?.name,
        zhName: editItem?.zhName,
        order: editItem?.order,
      });
    }
  }, [open]);
  const onSubmit = async () => {
    await form.validateFields();
    const values = form.getFieldsValue();
    if (editItem) values.id = editItem.id;
    values.type = NAV_TYPE['navBar'];
    effect(NOptions, editItem ? EPut : EPost, values).then(() => {
      onOk();
    });
  };
  return (
    <Modal {...props} destroyOnClose maskClosable={false} onOk={onSubmit}>
      <Form form={form} labelCol={{ span: 5 }}>
        <ProFormText label="名称(英文)" name="name" rules={[{ required: true }]} />
        <ProFormText label="名称(中文)" name="zhName" />
        <ProFormDigit label="排序值" name="order" extra="数值越大显示越靠前" />
      </Form>
    </Modal>
  );
};
