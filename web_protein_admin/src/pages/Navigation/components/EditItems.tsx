import { EPost, EPut, NNavigation } from '@/common/action';
import UploadImage from '@/components/UploadImage';
import { effect, useLoading } from '@/utils/dva17';
import { ProFormDigit, ProFormRadio, ProFormSwitch, ProFormText } from '@ant-design/pro-form';
import { Form, Modal } from 'antd';
import { useEffect, useState } from 'react';

export default (props: any) => {
  const [mainForm] = Form.useForm();
  const { open, mainItem, optionId, onOk } = props;
  const [type, setType] = useState(0);
  const [state, setState] = useState(0);
  const [isBuilding, setIsBuilding] = useState(false);
  const loading = useLoading(NNavigation, mainItem ? EPut : EPost).loading;
  useEffect(() => {
    if (open) {
      setType(Number(mainItem?.type || 0));
      setState(mainItem?.state || 0);
      setIsBuilding(mainItem?.isBuilding || false);
      mainForm.setFieldsValue({
        type: Number(mainItem?.type || 0),
        state: mainItem?.state || 0,
        name: mainItem?.name,
        zhName: mainItem?.zhName,
        linkUrl: mainItem?.linkUrl,
        order: mainItem?.order,
        isShow: mainItem ? (mainItem.isShow ? true : false) : true,
        imgUrl:
          (mainItem?.imgUrl && [
            { uid: 0, response: mainItem.imgUrl, thumbUrl: mainItem.imgUrl },
          ]) ||
          [],
        isBuilding: mainItem?.isBuilding || false,
        buildingLinkUrl: mainItem?.buildingLinkUrl,
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
      await mainForm.validateFields();
      const values = mainForm.getFieldsValue();
      if (mainItem) values.id = mainItem.id;
      if (values.state === 1) values.name = null;
      if (values.state === 0) values.imgUrl = null;
      values.optionId = optionId;
      values.imgUrl = values.imgUrl && values.imgUrl[0] && values.imgUrl[0].response;
      values.isShow = values.isShow ? 1 : 0;
      effect(NNavigation, mainItem ? EPut : EPost, values).then(() => {
        onOk();
      });
    } catch (error) {
      console.error('error', error);
    }
  };
  return (
    <Modal {...props} destroyOnClose maskClosable={false} confirmLoading={loading} onOk={onSubmit}>
      <Form form={mainForm} labelCol={{ span: 5 }}>
        <ProFormRadio.Group
          label="类型"
          name="type"
          initialValue={0}
          rules={[{ required: true }]}
          options={[
            {
              label: '有子项',
              value: 0,
            },
            {
              label: '无子项',
              value: 1,
            },
          ]}
          fieldProps={{
            onChange: ({ target: { value } }: any) => {
              setType(value);
            },
          }}
        />
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
        <ProFormText label="链接地址" name="linkUrl" />
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
