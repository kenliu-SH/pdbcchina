import { EPost, EPut, NNews, NTags } from '@/common/action';
import { effect, useConnect, useLoading } from '@/utils/dva17';
import {
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
  ProFormSelect,
  ProFormDatePicker,
} from '@ant-design/pro-form';
import { Form, message, Modal } from 'antd';
import { useEffect } from 'react';
import type { RangePickerProps } from 'antd/es/date-picker';

import UploadImage from '@/components/UploadImage'; //图片上传（裁切）
import RichText from '@/components/RichText'; //富文本
import dayjs from 'dayjs';

const disabledDate: RangePickerProps['disabledDate'] = (current: any) => {
  // Can not select days before today and today
  return current && current > dayjs().endOf('day');
};

export default (props: any) => {
  const [form] = Form.useForm();
  const { open, editItem, onOk } = props;
  const { tagList } = useConnect(NTags);
  const confirmLoading = useLoading(NNews, editItem ? EPut : EPost).loading;
  useEffect(() => {
    if (open) {
      if (editItem) {
        form.setFieldsValue({
          ...editItem,
          releaseTime: editItem?.releaseTime && dayjs(editItem?.releaseTime),
          isShow: editItem?.isShow || false,
          summaryPicture:
            (editItem && [
              { uid: 0, response: editItem.summaryPicture, thumbUrl: editItem.summaryPicture },
            ]) ||
            [],
          tagsIds: editItem?.tags?.map((v: any) => v.id),
        });
      } else {
        form.resetFields();
      }
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
      values.releaseTime = dayjs(values.releaseTime).format('YYYY-MM-DD');
      values.isShow = values.isShow ? 1 : 0;
      values.summaryPicture = values.summaryPicture[0] && values.summaryPicture[0].response;
      effect(NNews, editItem ? EPut : EPost, values).then(() => {
        message.success(`${editItem ? '编辑' : '新建'}新闻成功`);
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
      <Form form={form} labelCol={{ span: 3 }}>
        <ProFormText
          name="zhTitle"
          label={'标题（英）'}
          rules={[{ required: true }]}
          wrapperCol={{ span: 12 }}
        />
        <ProFormText
          name="title"
          label={'标题'}
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
          name="zhSummary"
          label={'摘要（英）'}
          rules={[{ required: true }]}
          wrapperCol={{ span: 12 }}
        />
        <ProFormTextArea
          name="summary"
          label={'摘要'}
          rules={[{ required: true }]}
          wrapperCol={{ span: 12 }}
        />
        <Form.Item
          name="summaryPicture"
          label="摘要图片"
          valuePropName="fileList"
          initialValue={[]}
          getValueFromEvent={normFile}
          rules={[{ required: true }]}
          extra={<small>建议尺寸：349*135</small>}
        >
          <UploadImage maxCount={1} aspect={349 / 135} />
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
