import { EPut, EPost, NHighLight, NTags } from '@/common/action';
import { effect, useConnect, useLoading } from '@/utils/dva17';
import {
  ProFormText,
  ProFormTextArea,
  ProFormSwitch,
  ProFormSelect,
  ProFormDatePicker,
} from '@ant-design/pro-form';
import { Modal, Form, message } from 'antd';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import type { RangePickerProps } from 'antd/es/date-picker';

import UploadImage from '@/components/UploadImage'; //图片上传（裁切）
import RichText from '@/components/RichText'; //富文本

const disabledDate: RangePickerProps['disabledDate'] = (current: any) => {
  // Can not select days before today and today
  return current && current > dayjs().endOf('day');
};

export default (props: any) => {
  const [form] = Form.useForm();
  const { open, editItem, onOk } = props;
  const { tagList } = useConnect(NTags);
  const confirmLoading = useLoading(NHighLight, editItem ? EPut : EPost).loading;
  useEffect(() => {
    if (open) {
      form.setFieldsValue({
        ...editItem,
        title: editItem?.title || '',
        abstract: editItem?.abstract || '',
        content: editItem?.content || '',
        weight: editItem?.weight || '',
        isTop: editItem?.isTop ? true : false,
        isShow: editItem?.isShow ? true : false,
        isHomePage: editItem?.isHomePage ? true : false,
        releaseTime: editItem?.releaseTime && dayjs(editItem?.releaseTime),
        miniImage:
          (editItem?.miniImage && [
            { uid: 0, response: editItem.miniImage, thumbUrl: editItem.miniImage },
          ]) ||
          [],
        tagsIds: editItem?.tags?.map((v: any) => v.id),
      });
    }
  }, [open]);
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onFinish = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      if (editItem) values.id = editItem.id;
      values.isShow = values.isShow ? 1 : 0;
      values.isTop = values.isTop ? 1 : 0;
      values.isHomePage = values.isHomePage ? 1 : 0;
      values.miniImage = values.miniImage[0] && values.miniImage[0].response;
      values.releaseTime = dayjs(values.releaseTime).format('YYYY-MM-DD');
      effect(NHighLight, editItem ? EPut : EPost, values).then(() => {
        message.success(`${editItem ? '编辑' : '新建'}亮点成果成功`);
        onOk();
      });
    } catch (err) {
      console.error('error', err);
    }
  };
  return (
    <Modal
      {...props}
      confirmLoading={confirmLoading}
      maskClosable={false}
      destroyOnClose={true}
      forceRender
      onOk={onFinish}
    >
      <Form form={form} labelCol={{ span: 4 }}>
        <ProFormText
          label={'标题（英）'}
          name="zhTitle"
          rules={[{ required: true }]}
          wrapperCol={{ span: 12 }}
        />
        <ProFormText
          label={'标题'}
          name="title"
          rules={[{ required: true }]}
          wrapperCol={{ span: 12 }}
        />
        <ProFormDatePicker
          name="releaseTime"
          label="发布时间"
          rules={[{ required: true }]}
          wrapperCol={{ span: 12 }}
          fieldProps={{ disabledDate, style: { width: '100%' } }}
        />
        <ProFormTextArea
          label={'简介（英）'}
          name="zhAbstract"
          rules={[{ required: true }]}
          wrapperCol={{ span: 12 }}
        />
        <ProFormTextArea
          label={'简介'}
          name="abstract"
          rules={[{ required: true }]}
          wrapperCol={{ span: 12 }}
        />
        <Form.Item
          name="miniImage"
          label="封面图"
          valuePropName="fileList"
          initialValue={[]}
          getValueFromEvent={normFile}
          rules={[{ required: true }]}
          extra={<small>建议尺寸：105*105</small>}
        >
          <UploadImage maxCount={1} aspect={310 / 310} />
        </Form.Item>
        <ProFormSelect
          label="标签"
          name="tagsIds"
          mode="multiple"
          wrapperCol={{ span: 12 }}
          options={tagList.map((v: any) => {
            return { label: v.name, value: v.id };
          })}
        />
        <ProFormSwitch name="isTop" label="是否置顶" checkedChildren="是" unCheckedChildren="否" />
        <ProFormSwitch
          name="isHomePage"
          label="是否首页显示"
          checkedChildren="是"
          unCheckedChildren="否"
        />
        <ProFormSwitch name="isShow" label="是否显示" checkedChildren="是" unCheckedChildren="否" />
        <Form.Item name="zhContent" label={'文章详情（英）'} rules={[{ required: true }]}>
          <RichText />
        </Form.Item>
        <Form.Item name="content" label={'文章详情'} rules={[{ required: true }]}>
          <RichText />
        </Form.Item>
      </Form>
    </Modal>
  );
};
