import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Upload,
  message,
  Modal,
  Popover,
} from 'antd';
import styles from './styles.less';
import { useIntl, useModel } from 'umi';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useEffect, useRef, useState } from 'react';
import images from '@/assets/images';
import { effect, requestGet } from '@/utils/dva17';
import { EBindQrcode, EBindStatus, EPut, NUser } from '@/common/action';
import QrCode from 'qrcode.react';
import { WechatScanLogStatus } from '@/common/enum';
import config from '@/common/config';

export default () => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const { initialState, setInitialState } = useModel('@@initialState');
  const [wxBind, setWxBind] = useState(false);
  const [wxParams, setWxParams]: any = useState('');
  const [bindOpen, setBindOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl]: any = useState([]);
  const timer: any = useRef();
  const timerStatus = useRef();
  const fetchCurrentUser = async () => {
    const { user }: any = await requestGet('user');
    if (user.openId) {
      setWxBind(false);
      clearInterval(timer.current);
    }
    setInitialState({ ...initialState, currentUser: user });
  };
  const fetchWxCode = async () => {
    try {
      await effect(NUser, EBindQrcode).then((res: any) => {
        setWxParams(res);
        timer.current = setInterval(() => {
          effect(NUser, EBindStatus, { ticket: res.ticket }).then(
            (res: any) => {
              const { status } = res;
              timerStatus.current = status;
              if (status === WechatScanLogStatus.scanned) {
                setBindOpen(false);
                fetchCurrentUser();
                clearInterval(timer.current);
              }
              if (status === WechatScanLogStatus.expired) {
                fetchWxCode();
              }
            },
          );
        }, 1000);
      });
    } catch (error) {
      setWxBind(false);
    }
  };
  useEffect(() => {
    if (initialState?.currentUser) {
      const { currentUser } = initialState;
      if (!currentUser.openId) setWxBind(true);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);
  useEffect(() => {
    if (initialState?.currentUser) {
      const { currentUser } = initialState;
      setImageUrl(
        currentUser.photoLink
          ? [
              {
                uid: 0,
                response: currentUser.photoLink,
                thumbUrl: currentUser.photoLink,
              },
            ]
          : [],
      );
      form.setFieldsValue({
        ...currentUser,
      });
    }
  }, [initialState?.currentUser]);
  useEffect(() => {
    if (bindOpen) {
      fetchWxCode();
    }
    if (!bindOpen && timer.current) {
      clearInterval(timer.current);
    }
  }, [bindOpen]);
  const updateCurrentUser = (payload: any) => {
    effect(NUser, EPut, payload).then(({ user }) => {
      message.success('User information has been updated!');
      setInitialState({ ...initialState, currentUser: user });
    });
  };
  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };
  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>,
  ) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setLoading(false);
      setImageUrl(info.fileList.concat());
      updateCurrentUser({
        ...initialState?.currentUser,
        photoLink: info.file.response,
      });
    }
  };
  const WxCode = wxParams && (
    <div style={{ textAlign: 'center', display: 'inline-block' }}>
      <QrCode value={wxParams?.url} size={200} />
      <div>
        <small>打开手机微信“扫一扫”</small>
      </div>
    </div>
  );
  return (
    <Row className={styles.personal_info} justify={'space-around'}>
      <Col xxl={12} xl={12} md={24} className={styles.left_upload}>
        <img
          src={
            initialState?.currentUser?.photoLink
              ? initialState?.currentUser?.photoLink
              : images.iconUpload
          }
          className={styles.user_header}
        />
        <Upload
          showUploadList={false}
          accept="image/*"
          action={config.SERVER_HOME + 'user/file'}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          <Button loading={loading}>Upload profile photo</Button>
        </Upload>
      </Col>
      <Col xxl={12} xl={12} md={24} className={styles.right_form}>
        <Form
          layout="vertical"
          form={form}
          onFinish={(values) => {
            Modal.confirm({
              title: 'prompt',
              content: 'Are you sure to update your user information?',
              onOk: () => {
                updateCurrentUser({ ...initialState?.currentUser, ...values });
              },
            });
          }}
        >
          <Form.Item
            label={intl.formatMessage({ id: 'register.form.label1' })}
            required
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  noStyle
                  label={intl.formatMessage({
                    id: 'login.placeholder3',
                  })}
                  name="nickname"
                  rules={[{ required: true }]}
                >
                  <Input
                    placeholder={intl.formatMessage({
                      id: 'login.placeholder3',
                    })}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  noStyle
                  label={intl.formatMessage({
                    id: 'login.placeholder4',
                  })}
                  name="surname"
                  rules={[{ required: true }]}
                >
                  <Input
                    placeholder={intl.formatMessage({
                      id: 'login.placeholder4',
                    })}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item
            label={intl.formatMessage({ id: 'register.form.label2' })}
            required
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  noStyle
                  label={intl.formatMessage({
                    id: 'login.placeholder3',
                  })}
                  name="firstname"
                  rules={[{ required: true }]}
                >
                  <Input
                    placeholder={intl.formatMessage({
                      id: 'login.placeholder3',
                    })}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  noStyle
                  label={intl.formatMessage({
                    id: 'login.placeholder4',
                  })}
                  name="lastname"
                  rules={[{ required: true }]}
                >
                  <Input
                    placeholder={intl.formatMessage({
                      id: 'login.placeholder4',
                    })}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label={'Email'} name="email" rules={[{ required: true }]}>
            <Input placeholder="please enter" />
          </Form.Item>
          <Form.Item label={'Associated orcid'}>
            <Input placeholder="please enter" />
          </Form.Item>
          <Form.Item label={'Associated WeChat'}>
            <Popover open={bindOpen} content={WxCode}>
              {initialState?.currentUser?.openId}&nbsp;&nbsp;
              <a
                onClick={() => {
                  setBindOpen(!bindOpen);
                }}
              >
                {initialState?.currentUser?.openId ? '重新绑定' : '绑定微信'}
              </a>
            </Popover>
          </Form.Item>
          <Form.Item label={<span />} colon={false}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
