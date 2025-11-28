import {
  EBuildConfig,
  EGet,
  ELogoConfig,
  EPut,
  EditBuildConfig,
  EditLogoConfig,
  NSystem,
} from '@/common/action';
import { effect, useLoading } from '@/utils/dva17';
import { PlusOutlined } from '@ant-design/icons';
import type { ProFormInstance } from '@ant-design/pro-components';
import { PageContainer, ProForm, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { Card, Button, message, Form, Modal, Upload, Col, Row, Image } from 'antd';
import { useEffect, useRef } from 'react';
import Config from '@/common/config';
import images from '@/assets/images';

export default () => {
  const formRef = useRef<ProFormInstance>();
  const formRef1 = useRef<ProFormInstance>();
  const formRef2 = useRef<ProFormInstance>();
  const tips_spining = useLoading(NSystem, EGet).loading;
  const tips_loading = useLoading(NSystem, EPut).loading;
  const logo_spining = useLoading(NSystem, ELogoConfig).loading;
  const logo_loading = useLoading(NSystem, EditLogoConfig).loading;
  const building_spining = useLoading(NSystem, EBuildConfig).loading;
  const building_loading = useLoading(NSystem, EditBuildConfig).loading;
  const initValues = () => {
    effect(NSystem, EGet).then(({ proteinCount, proteinCountZh }: any) => {
      if (proteinCount) formRef.current?.setFieldsValue({ proteinCount, proteinCountZh });
    });
  };
  const initLogoVal = () => {
    effect(NSystem, ELogoConfig).then((res: any) => {
      const { proteinLogo, proteinText, proteinTextZh } = res || {};
      formRef1.current?.setFieldsValue({
        logo: (proteinLogo && [{ uid: 0, response: proteinLogo, thumbUrl: proteinLogo }]) || [],
        text: proteinText,
        textZh: proteinTextZh,
      });
    });
  };
  const initBuildingVal = () => {
    effect(NSystem, EBuildConfig).then((res: any) => {
      const { desc, descZh, text, textZh, building } = res || {};
      formRef2.current?.setFieldsValue({
        desc,
        descZh,
        text,
        textZh,
        buildingImg: (building && [{ uid: 0, response: building, thumbUrl: building }]) || [],
      });
    });
  };
  useEffect(() => {
    initValues();
    initLogoVal();
    initBuildingVal();
  }, []);
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const onTipsFinish = async () => {
    await formRef.current?.validateFields();
    Modal.confirm({
      title: '确认修改统计文案？',
      onOk: () => {
        const values = formRef.current?.getFieldsValue();
        effect(NSystem, EPut, values).then(() => {
          message.success('统计文案修改成功');
          initValues();
        });
      },
    });
  };
  const onLogoFinish = async () => {
    await formRef1.current?.validateFields();
    Modal.confirm({
      title: '确认修改首页Logo图文？',
      onOk: () => {
        const values = formRef1.current?.getFieldsValue();
        values.logo = values.logo[0] && values.logo[0].response;
        effect(NSystem, EditLogoConfig, values).then(() => {
          message.success('首页Logo图文修改成功');
          initLogoVal();
        });
      },
    });
  };
  const onBuildingFinish = async () => {
    await formRef2.current?.validateFields();
    Modal.confirm({
      title: '确认修改建设中页面？',
      onOk: () => {
        const values = formRef2.current?.getFieldsValue();
        values.buildingImg = values.buildingImg[0] && values.buildingImg[0].response;
        effect(NSystem, EditBuildConfig, values).then(() => {
          message.success('建设中页面修改成功');
          initBuildingVal();
        });
      },
    });
  };
  return (
    <PageContainer title={false}>
      <Card bordered={false} title="统计文案" loading={tips_spining}>
        <ProForm
          formRef={formRef}
          wrapperCol={{ span: 7 }}
          submitter={{
            render: () => (
              <Button type="primary" loading={tips_loading} onClick={onTipsFinish}>
                提交
              </Button>
            ),
          }}
        >
          <ProFormTextArea
            label="统计文案（英文）"
            name="proteinCount"
            rules={[{ required: true }]}
            extra="最大可输入150个字"
            fieldProps={{
              maxLength: 150,
            }}
          />
          <ProFormTextArea
            label="统计文案（中文）"
            name="proteinCountZh"
            rules={[{ required: true }]}
            extra="最大可输入150个字"
            fieldProps={{
              maxLength: 150,
            }}
          />
        </ProForm>
      </Card>
      <Card
        bordered={false}
        title="首页Logo图文"
        style={{ margin: '24px 0' }}
        loading={logo_spining}
      >
        <ProForm
          formRef={formRef1}
          wrapperCol={{ span: 7 }}
          submitter={{
            render: () => (
              <Button type="primary" loading={logo_loading} onClick={onLogoFinish}>
                提交
              </Button>
            ),
          }}
        >
          <Form.Item
            name="logo"
            label="Logo"
            valuePropName="fileList"
            initialValue={[]}
            getValueFromEvent={normFile}
            rules={[{ required: true }]}
            extra="建议尺寸：651*237"
          >
            <Upload action={Config.SERVER_HOME + 'user/file'} listType="picture-card" maxCount={1}>
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上传图片</div>
              </div>
            </Upload>
          </Form.Item>
          <ProFormText label="标题（英文）" name="text" rules={[{ required: true }]} />
          <ProFormText label="标题（中文）" name="textZh" rules={[{ required: true }]} />
        </ProForm>
      </Card>
      <Card
        bordered={false}
        title="建设中页面"
        style={{ margin: '24px 0' }}
        loading={building_spining}
      >
        <Row>
          <Col span={12}>
            <ProForm
              formRef={formRef2}
              wrapperCol={{ span: 14 }}
              submitter={{
                render: () => (
                  <Button type="primary" loading={building_loading} onClick={onBuildingFinish}>
                    提交
                  </Button>
                ),
              }}
            >
              <Form.Item
                name="buildingImg"
                label="图标"
                valuePropName="fileList"
                initialValue={[]}
                getValueFromEvent={normFile}
                rules={[{ required: true }]}
                extra="建议尺寸：651*237"
              >
                <Upload
                  action={Config.SERVER_HOME + 'user/file'}
                  listType="picture-card"
                  maxCount={1}
                >
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>上传图片</div>
                  </div>
                </Upload>
              </Form.Item>
              <ProFormTextArea label="提示词（英文）" name="text" rules={[{ required: true }]} />
              <ProFormTextArea label="提示词（中文）" name="textZh" rules={[{ required: true }]} />
              <ProFormTextArea label="描述（英文）" name="desc" rules={[{ required: true }]} />
              <ProFormTextArea label="描述（中文）" name="descZh" rules={[{ required: true }]} />
            </ProForm>
          </Col>
          <Col span={12}>
            <small>查看页面示例:</small>
            <br />
            <Image src={images.buildingPage} style={{ width: '100%', height: 'auto' }} />
          </Col>
        </Row>
      </Card>
    </PageContainer>
  );
};
