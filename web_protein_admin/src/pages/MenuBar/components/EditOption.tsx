import { EPost, EPut, NOptions } from '@/common/action';
import { NAV_TYPE } from '@/common/enum';
import { effect } from '@/utils/dva17';
import { ProFormDigit, ProFormText, ProFormSelect } from '@ant-design/pro-components';
import { Form, Modal, Space } from 'antd';
import { useEffect } from 'react';
import Iconfont from '@/assets/iconfont/iconfont.json';

export default (props: any) => {
  const [form] = Form.useForm();
  const { open, editItem, onOk } = props;
  useEffect(() => {
    if (open) {
      form.setFieldsValue({
        name: editItem?.name,
        zhName: editItem?.zhName,
        order: editItem?.order,
        icon: editItem?.icon,
      });
    }
  }, [open]);
  const onSubmit = async () => {
    await form.validateFields();
    const values = form.getFieldsValue();
    if (editItem) values.id = editItem.id;
    values.type = NAV_TYPE['menuBar'];
    effect(NOptions, editItem ? EPut : EPost, values).then(() => {
      onOk();
    });
  };
  return (
    <Modal {...props} destroyOnClose maskClosable={false} onOk={onSubmit}>
      <Form form={form} labelCol={{ span: 5 }}>
        <ProFormText label="名称(英文)" name="name" rules={[{ required: true }]} />
        <ProFormText label="名称(中文)" name="zhName" />
        <ProFormSelect
          label="图标"
          name="icon"
          options={Iconfont?.glyphs?.map((vv: any) => {
            return {
              label: (
                <Space>
                  <i
                    className={`icon iconfont icon-${vv.font_class}`}
                    style={{ fontSize: '20px' }}
                  />
                  <span>{vv.name}</span>
                </Space>
              ),
              value: vv.font_class,
            };
          })}
        />
        <ProFormDigit label="排序值" name="order" extra="数值越大显示越靠前" />
      </Form>
    </Modal>
  );
};
