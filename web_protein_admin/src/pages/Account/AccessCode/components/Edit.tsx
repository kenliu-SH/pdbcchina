import { requestPost } from '@/utils/dva17';
import { ProFormDatePicker, ProFormDigit, ProFormTextArea } from '@ant-design/pro-components';
import { Form, Modal, message } from 'antd';
import dayjs from 'dayjs';
import { useEffect } from 'react';

export default (props: any) => {
  const { open, onOk } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    if (open) form.resetFields();
  }, [open]);
  const onSubmit = async () => {
    await form.validateFields();
    const values = form.getFieldsValue();
    values.expiresAt = dayjs(values.expiresAt).format('YYYY-MM-DD');
    await requestPost('visitor/batchGenerate', values);
    message.success('访问码批量生成成功！');
    onOk();
  };
  return (
    <Modal {...props} destroyOnClose maskClosable={false} onOk={onSubmit}>
      <Form form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 18 }}>
        <ProFormDigit label="生成数量" name="count" rules={[{ required: true }]} />
        <ProFormDatePicker
          label="到期时间"
          name="expiresAt"
          rules={[{ required: true, message: '请选择时间' }]}
          fieldProps={{
            style: { width: '100%' },
          }}
        />
        <ProFormTextArea label="备注" name="remark" />
      </Form>
    </Modal>
  );
};
