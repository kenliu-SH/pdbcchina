import { ProFormSwitch, ProFormText } from '@ant-design/pro-form';
import { Modal, Form, message } from 'antd';
import { effect, useLoading } from '@/utils/dva17';
import { EPost, EPut, NBanner } from '@/common/action';
import { useEffect } from 'react';

import UploadImage from '@/components/UploadImage'; //图片上传（裁切）

export default (props: any) => {
  const [form] = Form.useForm();
  const { open, editItem, onOk } = props;
  const confirmLoading = useLoading(NBanner, editItem ? EPut : EPost).loading;
  useEffect(() => {
    if (open) {
      form.setFieldsValue({
        image:
          (editItem?.image && [{ uid: 0, response: editItem.image, thumbUrl: editItem.image }]) ||
          [],
        describe: editItem?.describe,
        link: editItem?.link,
        isShow: editItem?.isShow ? true : false,
      });
    }
  }, [open]);
  const onFinish = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      if (editItem) values.id = editItem.id;
      values.isShow = values.isShow ? 1 : 0;
      values.image = values.image[0] && values.image[0].response;
      effect(NBanner, editItem ? EPut : EPost, values).then(() => {
        message.success(`${editItem ? '编辑' : '新建'}Banner成功`);
        onOk();
      });
    } catch (err) {
      console.error('error', err);
    }
  };
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <Modal
      {...props}
      confirmLoading={confirmLoading}
      destroyOnClose
      maskClosable={false}
      onOk={onFinish}
    >
      <Form form={form} labelCol={{ span: 4 }}>
        <Form.Item
          name="image"
          label="Banner"
          valuePropName="fileList"
          initialValue={[]}
          getValueFromEvent={normFile}
          rules={[{ required: true }]}
        >
          <UploadImage maxCount={1} aspect={1162 / 348} />
        </Form.Item>
        <ProFormText label="描述内容" name="describe" />
        <ProFormText
          label="链接地址"
          name="link"
          rules={[
            {
              pattern:
                /(^((https|ftp|http|file):\/\/)|www\.)*([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/gm,
              message: 'URL格式错误，请检查',
            },
          ]}
        />
        <ProFormSwitch label="是否显示" name="isShow" unCheckedChildren="否" checkedChildren="是" />
      </Form>
    </Modal>
  );
};
