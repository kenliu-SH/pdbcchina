import { EPost, EPut, NFooter } from '@/common/action';
import { effect, useLoading } from '@/utils/dva17';
import { PlusOutlined } from '@ant-design/icons';
import { ProFormDigit, ProFormRadio, ProFormSwitch, ProFormText } from '@ant-design/pro-components';
import { Form, Modal, Upload } from 'antd';
import { useEffect, useState } from 'react';
import Config from '@/common/config';

export default (props: any) => {
  const [form] = Form.useForm();
  const { open, editItem, onOk } = props;
  const [type, setType] = useState(0);
  const loading = useLoading(NFooter, editItem ? EPut : EPost).loading;
  useEffect(() => {
    if (open) {
      setType(editItem?.type || 0);
      form.setFieldsValue({
        name: editItem?.name,
        zhName: editItem?.zhName,
        order: editItem?.order,
        isShow: editItem ? (editItem.isShow ? true : false) : true,
        type: editItem?.type || 0,
        imgUrl:
          (editItem &&
            editItem.imgUrl && [
              { uid: 0, response: editItem.imgUrl, thumbUrl: editItem.imgUrl },
            ]) ||
          [],
      });
    }
  }, [open]);
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onSubmit = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      if (editItem) values.id = editItem.id;
      values.isShow = values.isShow ? 1 : 0;
      values.imgUrl = values.imgUrl && values.imgUrl[0] && values.imgUrl[0].response;
      effect(NFooter, editItem ? EPut : EPost, values).then(() => {
        onOk();
      });
    } catch (error) {
      console.error('error: ', error);
    }
  };
  return (
    <Modal {...props} destroyOnClose maskClosable={false} confirmLoading={loading} onOk={onSubmit}>
      <Form form={form} labelCol={{ span: 7 }} className={'footer_form_mainItem'}>
        {/* <ProFormRadio.Group
          label="类型"
          name="type"
          initialValue={0}
          options={[
            {
              label: '左侧菜单项',
              value: 0,
            },
            {
              label: '右侧合作伙伴',
              value: 1,
            },
          ]}
          fieldProps={{
            onChange: ({ target: { value } }) => {
              setType(value);
            },
          }}
        /> */}
        {type === 0 ? (
          <>
            <ProFormText label="主项名称(英文)" name="name" rules={[{ required: true }]} />
            <ProFormText label="主项名称(中文)" name="zhName" />
          </>
        ) : (
          <>
            <Form.Item
              name="imgUrl"
              label="图标"
              valuePropName="fileList"
              initialValue={[]}
              getValueFromEvent={normFile}
              rules={[{ required: true }]}
              extra="透明底，建议尺寸：270*30"
            >
              <Upload
                action={Config.SERVER_HOME + 'user/file'}
                listType="picture-card"
                maxCount={1}
                style={{ backgroundColor: '#000' }}
              >
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>上传图片</div>
                </div>
              </Upload>
            </Form.Item>
          </>
        )}
        <ProFormDigit label="排序值" name="order" min={0} extra="数值越大，显示顺序越靠前" />
        <ProFormSwitch label="是否显示" name="isShow" unCheckedChildren="否" checkedChildren="是" />
      </Form>
    </Modal>
  );
};
