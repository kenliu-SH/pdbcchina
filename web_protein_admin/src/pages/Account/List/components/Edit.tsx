import { ProFormSelect, ProFormSwitch, ProFormText } from '@ant-design/pro-components';
import { Modal, Form } from 'antd';
import { effect, useConnect, useLoading } from '@/utils/dva17';
import { EPost, EPut, NAccount, NRole } from '@/common/action';
import { useEffect, useState } from 'react';

export default (props: any) => {
  const [form] = Form.useForm();
  const { open, editItem, onOk } = props;
  const { roleList } = useConnect(NRole);
  const [editPassword, setEditPassword] = useState(false);
  const loading = useLoading(NAccount, editItem ? EPut : EPost).loading;
  useEffect(() => {
    if (open) {
      form.setFieldsValue({
        accountName: editItem?.accountName,
        roleID: editItem?.roleID,
        isSwitch: editItem?.isSwitch ? true : false,
        password: null,
      });
    }
    return () => {
      setEditPassword(false);
    };
  }, [open]);
  const onSubmit = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      if (editItem) values.id = editItem.id;
      effect(NAccount, editItem ? EPut : EPost, values).then(() => {
        onOk();
      });
    } catch (error) {
      console.error('error: ', error);
    }
  };
  return (
    <Modal {...props} destroyOnClose maskClosable={false} confirmLoading={loading} onOk={onSubmit}>
      <Form form={form} labelCol={{ span: 4 }} autoComplete="off">
        <ProFormText label="账号名称" name="accountName" rules={[{ required: true }]} />
        <ProFormSelect
          label="账号角色"
          name="roleID"
          rules={[{ required: true }]}
          options={roleList?.rows?.map((vo: any) => {
            return { label: vo.name, value: vo.id };
          })}
        />
        <ProFormSwitch
          label="是否禁用"
          name="isSwitch"
          initialValue={0}
          checkedChildren="是"
          unCheckedChildren="否"
        />
        {editItem && (
          <ProFormSwitch
            label="修改密码"
            initialValue={false}
            unCheckedChildren="否"
            checkedChildren="是"
            fieldProps={{
              onChange: (checked: boolean) => {
                setEditPassword(checked);
              },
            }}
          />
        )}
        {(!editItem || (editItem && editPassword)) && (
          <ProFormText.Password
            label="登录密码"
            name="password"
            placeholder={'请输入登录密码'}
            extra={'必须大于8位并同时包含数字、大小写字母和特殊字符'}
            rules={[
              { required: true },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{8,}$/,
                message: '密码格式有误',
              },
            ]}
          />
        )}
      </Form>
    </Modal>
  );
};
