import { EPost, EPut, NTags } from '@/common/action';
import { effect, useLoading } from '@/utils/dva17';
import { ProFormDigit, ProFormText } from '@ant-design/pro-components';
import { Form, Modal } from 'antd';
import { useEffect } from 'react';

export default (props: any) => {
  const [form] = Form.useForm();
  const { open, editItem, onOk } = props;
  const submitLoading = useLoading(NTags, editItem ? EPut : EPost).loading;
  useEffect(() => {
    if (open) {
      form.setFieldsValue({
        name: editItem?.name,
        order: editItem?.order,
      });
    }
  }, [open]);
  const onSubmit = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      if (editItem) values.id = editItem.id;
      effect(NTags, editItem ? EPut : EPost, values).then(() => {
        onOk();
      });
    } catch (err) {
      console.error('error', err);
    }
  };
  return (
    <Modal
      {...props}
      destroyOnClose
      maskClosable={false}
      confirmLoading={submitLoading}
      onOk={onSubmit}
    >
      <Form form={form} labelCol={{ span: 4 }}>
        <ProFormText label="标签名称" name="name" rules={[{ required: true }]} />
        <ProFormDigit label="排序值" name="order" min={0} extra="数值越大，显示顺序越靠前" />
      </Form>
    </Modal>
  );
};
