import { EPost, EPut, NMenuBar } from '@/common/action';
import { effect, useLoading } from '@/utils/dva17';
import {
  ProFormDigit,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Form, message, Modal, Radio, Space } from 'antd';
import { useEffect, useState } from 'react';
import UploadImage from '@/components/UploadImage';
import Iconfont from '@/assets/iconfont/iconfont.json';

export default (props: any) => {
  const [form] = Form.useForm();
  const { open, editItem, onOk, optionId } = props;
  const [isBuilding, setIsBuilding] = useState(false);
  const loading = useLoading(NMenuBar, editItem ? EPut : EPost).loading;
  const [iconType, setIconType] = useState('0');
  useEffect(() => {
    if (open) {
      setIsBuilding(editItem?.isBuilding || false);
      console.log('editItem: ', editItem);
      setIconType(editItem ? (editItem.imgUrl ? '0' : '1') : '0');
      form.setFieldsValue({
        name: editItem?.name,
        zhName: editItem?.zhName,
        order: editItem?.order,
        isShow: editItem?.isShow ? true : false,
        imgUrl:
          (editItem?.imgUrl && [
            { uid: 0, response: editItem.imgUrl, thumbUrl: editItem.imgUrl },
          ]) ||
          [],
        linkUrl: editItem?.linkUrl,
        isBuilding: editItem?.isBuilding || false,
        buildingLinkUrl: editItem?.buildingLinkUrl,
        describe: editItem?.describe,
        zhDescribe: editItem?.zhDescribe,
        icon: editItem?.icon,
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
      values.optionId = optionId;
      values.isShow = values.isShow ? 1 : 0;
      if (iconType === '0') {
        values.imgUrl = values.imgUrl[0] && values.imgUrl[0].response;
        values.icon = null;
      } else {
        values.imgUrl = null;
      }
      effect(NMenuBar, editItem ? EPut : EPost, values).then(() => {
        message.success(`${editItem ? '编辑' : '新建'}主项成功！`);
        onOk();
      });
    } catch (error) {
      console.error('error: ', error);
    }
  };
  return (
    <Modal {...props} destroyOnClose maskClosable={false} confirmLoading={loading} onOk={onSubmit}>
      <Form form={form} labelCol={{ span: 6 }}>
        <ProFormText label="主项名称(英文)" name="name" rules={[{ required: true }]} />
        <ProFormText label="主项名称(中文)" name="zhName" rules={[{ required: true }]} />
        <ProFormTextArea label="描述(英文)" name="describe" fieldProps={{ rows: 2 }} />
        <ProFormTextArea label="描述(中文)" name="zhDescribe" fieldProps={{ rows: 2 }} />
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
        <Form.Item label="图标类型">
          <Radio.Group
            buttonStyle="solid"
            value={iconType}
            onChange={(e) => {
              setIconType(e.target.value);
            }}
          >
            <Radio.Button value={'0'}>手动上传图片</Radio.Button>
            <Radio.Button value={'1'}>选择字体图标</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {iconType === '0' ? (
          <Form.Item
            label="缩略图"
            name="imgUrl"
            rules={[{ required: true }]}
            valuePropName="fileList"
            initialValue={[]}
            getValueFromEvent={normFile}
          >
            <UploadImage maxCount={1} aspect={198 / 198} />
          </Form.Item>
        ) : (
          <ProFormSelect
            label="图标"
            name="icon"
            rules={[{ required: true }]}
            options={Iconfont?.glyphs?.map((vv: any) => {
              return {
                label: (
                  <Space>
                    <i className={`iconfont icon-${vv.font_class}`} style={{ fontSize: '20px' }} />
                    <span>{vv.name}</span>
                  </Space>
                ),
                value: vv.font_class,
              };
            })}
          />
        )}
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
