import { EPost, EPut, NRole } from '@/common/action';
import { effect, useLoading } from '@/utils/dva17';
import { ProFormText, ProFormTextArea, ProFormTreeSelect } from '@ant-design/pro-components';
import { Form, Modal } from 'antd';
import { useEffect, useState } from 'react';
import routes from '../../../../../config/routes';

//路由格式化
function formatRoutes(list: any) {
  return list
    .map((item: any) => {
      if (item.path && !item.hideInRole) {
        return {
          ...item,
          children: item.routes
            ? formatRoutes(item.routes)
            : item.children
            ? formatRoutes(item.children)
            : [],
        };
      }
    })
    .filter((vo: any) => {
      return vo && vo;
    });
}

export default (props: any) => {
  const [form] = Form.useForm();
  const { open, editItem, onOk } = props;
  const [routeFormat, setRouteFormat] = useState([]);
  const loading = useLoading(NRole, editItem ? EPut : EPost).loading;
  useEffect(() => {
    const routesArr: any = routes.filter((vo: any) => {
      if (vo.path && !['/user', '/'].includes(vo.path)) {
        return vo;
      }
    });
    setRouteFormat(formatRoutes(routesArr));
  }, []);
  useEffect(() => {
    if (open) {
      form.setFieldsValue({
        name: editItem?.name,
        describe: editItem?.name,
        power: editItem?.power || [],
      });
    }
  }, [open]);
  const onSubmit = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      if (editItem) values.id = editItem.id;
      effect(NRole, editItem ? EPut : EPost, values).then(() => {
        onOk();
      });
    } catch (error) {
      console.log('error: ', error);
    }
  };
  return (
    <Modal {...props} destroyOnClose maskClosable={false} confirmLoading={loading} onOk={onSubmit}>
      <Form form={form} labelCol={{ span: 4 }}>
        <ProFormText label="角色名称" name="name" rules={[{ required: true }]} />
        <ProFormTextArea label="角色描述" name="describe" />
        <ProFormTreeSelect
          label="权限配置"
          name="power"
          rules={[{ required: true }]}
          fieldProps={{
            treeData: routeFormat,
            treeCheckable: true,
            listHeight: 356,
            fieldNames: { label: 'name', children: 'children', value: 'path' },
          }}
        />
      </Form>
    </Modal>
  );
};
