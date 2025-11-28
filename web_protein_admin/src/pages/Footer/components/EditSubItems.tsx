import { EPostSubItem, EPutSubItem, NFooter } from '@/common/action';
import { effect, useLoading } from '@/utils/dva17';
import { ProFormDigit, ProFormText, ProFormSwitch, ProFormRadio } from '@ant-design/pro-components';
import { Form, Modal, Upload } from 'antd';
import { useEffect, useState } from 'react';
import Config from '@/common/config';
import { PlusOutlined } from '@ant-design/icons';
import { STATUS_KEY } from '@/common/enum';

export default (props: any) => {
  const [subForm] = Form.useForm();
  const { open, editItem, subItem, onOk } = props;
  const [ruleType, setRuleType] = useState(2);
  const [isBuilding, setIsBuilding] = useState(false);
  const loading = useLoading(NFooter, editItem ? EPutSubItem : EPostSubItem).loading;
  useEffect(() => {
    if (open) {
      setRuleType(editItem && editItem.type === 1 ? STATUS_KEY['仅图片'] : subItem?.status || 2);
      setIsBuilding(subItem?.isBuilding || false);
      subForm.setFieldsValue({
        status: editItem && editItem.type === 1 ? STATUS_KEY['仅图片'] : subItem?.status || 2,
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
  const onSubmit = async () => {
    try {
      await subForm.validateFields();
      const values = subForm.getFieldsValue();
      if (editItem) values.id = editItem.id;
      if (subItem) values.id = subItem.id;
      values.isShow = values.isShow ? 1 : 0;
      if ([1, 3].includes(ruleType)) {
        values.nameItem = null;
        values.imgUrl = values.imgUrl[0] && values.imgUrl[0].response;
      } else {
        values.imgUrl = null;
      }
      effect(NFooter, editItem ? EPostSubItem : EPutSubItem, values).then(() => {
        onOk();
      });
    } catch (error) {
      console.error('error: ', error);
    }
  };
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <Modal {...props} destroyOnClose maskClosable={false} confirmLoading={loading} onOk={onSubmit}>
      <Form form={subForm} labelCol={{ span: 7 }} className="footer_form_mainItem">
        <ProFormRadio.Group
          disabled={editItem && editItem.type === 1}
          label="显示规则"
          name="status"
          rules={[{ required: true }]}
          fieldProps={{
            value: ruleType,
            onChange: ({ target: { value } }: any) => {
              setRuleType(value);
            },
          }}
          options={[
            {
              label: STATUS_KEY[2],
              value: STATUS_KEY['仅标题'],
            },
            {
              label: STATUS_KEY[3],
              value: STATUS_KEY['仅图片'],
            },
            {
              label: STATUS_KEY[1],
              value: STATUS_KEY['全部'],
            },
          ]}
        />
        {[1, 2].includes(ruleType) && (
          <>
            <ProFormText label="子项名称(英文)" name="name" rules={[{ required: true }]} />
            <ProFormText label="子项名称(中文)" name="zhName" />
          </>
        )}
        {[1, 3].includes(ruleType) && (
          <Form.Item
            label="图片"
            name="imgUrl"
            rules={[{ required: true }]}
            valuePropName="fileList"
            initialValue={[]}
            getValueFromEvent={normFile}
          >
            <Upload action={Config.SERVER_HOME + 'user/file'} listType="picture-card" maxCount={1}>
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上传图片</div>
              </div>
            </Upload>
          </Form.Item>
        )}
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
