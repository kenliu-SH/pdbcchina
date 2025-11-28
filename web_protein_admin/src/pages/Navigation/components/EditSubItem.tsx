import { Form, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { ProFormDigit, ProFormRadio, ProFormSwitch, ProFormText } from '@ant-design/pro-components';
import UploadImage from '@/components/UploadImage';
import { effect, useLoading } from '@/utils/dva17';
import { EPostSubItem, EPutSubItem, NNavigation } from '@/common/action';

export default (props: any) => {
  const [subForm] = Form.useForm();
  const { open, mainItem, subItem, onOk } = props;
  const [state, setState] = useState(0);
  const [isBuilding, setIsBuilding] = useState(false);
  const loading = useLoading(NNavigation, mainItem ? EPostSubItem : EPutSubItem).loading;
  useEffect(() => {
    if (open) {
      setState(subItem?.state || 0);
      setIsBuilding(subItem?.isBuilding || false);
      subForm.setFieldsValue({
        state: subItem?.state,
        name: subItem?.name,
        zhName: subItem?.zhName,
        linkUrl: subItem?.linkUrl,
        order: subItem?.order,
        isShow: subItem ? (subItem.isShow ? true : false) : true,
        imgUrl:
          (subItem?.imgUrl && [{ uid: 0, response: subItem.imgUrl, thumbUrl: subItem.imgUrl }]) ||
          [],
        isBuilding: subItem?.isBuilding || false,
        buildingLinkUrl: subItem?.buildingLinkUrl,
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
      await subForm.validateFields();
      const values = subForm.getFieldsValue();
      if (subItem) values.id = subItem.id;
      if (mainItem) values.id = mainItem.id;
      values.imgUrl = values.imgUrl && values.imgUrl[0] && values.imgUrl[0].response;
      values.isShow = values.isShow ? 1 : 0;
      effect(NNavigation, mainItem ? EPostSubItem : EPutSubItem, values).then(() => {
        onOk();
      });
    } catch (error) {
      console.error('error', error);
    }
  };
  return (
    <Modal {...props} destroyOnClose maskClosable={false} confirmLoading={loading} onOk={onSubmit}>
      <Form form={subForm} labelCol={{ span: 5 }}>
        <ProFormRadio.Group
          label="显示"
          name="state"
          rules={[{ required: true }]}
          initialValue={0}
          options={[
            {
              label: '仅标题',
              value: 0,
            },
            {
              label: '仅图片',
              value: 1,
            },
          ]}
          fieldProps={{
            onChange: ({ target: { value } }: any) => {
              setState(value);
            },
          }}
        />
        {state === 0 && (
          <>
            <ProFormText label="标题(英文)" name="name" rules={[{ required: true }]} />
            <ProFormText label="标题(中文)" name="zhName" />
          </>
        )}
        {state === 1 && (
          <Form.Item
            label="上传图片"
            name="imgUrl"
            rules={[{ required: true, message: '请上传图片' }]}
            valuePropName="fileList"
            initialValue={[]}
            getValueFromEvent={normFile}
          >
            <UploadImage maxCount={1} aspect={300 / 74} />
          </Form.Item>
        )}
        <ProFormText label="链接地址" name="linkUrl" rules={[{ required: true }]} />
        <ProFormDigit label="排序值" name="order" min={0} />
        <ProFormSwitch
          label="是否显示"
          name="isShow"
          unCheckedChildren="否"
          checkedChildren="是"
          initialValue={true}
        />
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
