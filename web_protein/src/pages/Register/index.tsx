import styles from './index.less';
import images from '@/assets/images';
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Modal,
  ConfigProvider,
  Carousel,
} from 'antd';
import { useIntl, history, useModel } from 'umi';
import { useState } from 'react';
import { effect, useLoading } from '@/utils/dva17';
import { ERegister, NUser } from '@/common/action';
import { THEME_COLOR_LIST } from '@/common/enum';
import PlatformPolicies from '@/components/PlatformPolicies';

export default () => {
  const intl = useIntl();
  const [checked, setChecked] = useState(false);
  const [open, setOpen]: any = useState(false);
  const { initialState } = useModel('@@initialState');
  const loading = useLoading(NUser, ERegister).loading;
  const onRegister = (values: any) => {
    effect(NUser, ERegister, values).then(() => {
      Modal.info({
        title: intl.formatMessage({ id: 'register.success.title' }),
        content: intl.formatMessage({ id: 'register.success.desc' }),
        onOk: () => {
          history.replace('/user/login');
        },
      });
    });
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: THEME_COLOR_LIST[initialState?.theme],
        },
      }}
    >
      <div className={[styles.login_contain].join(' ')}>
        {/* <img src={images.loginBg} className={styles.loginBg} /> */}
        <Carousel
          className={styles.login_carousel}
          autoplay
          dots={false}
          waitForAnimate={true}
        >
          <div className={styles.login_carousel_item}>
            <img src={images.loginBg} className={styles.loginBg} />
          </div>
          <div className={styles.login_carousel_item}>
            <img src={images.loginBg1} className={styles.loginBg} />
          </div>
          <div className={styles.login_carousel_item}>
            <img src={images.loginBg2} className={styles.loginBg} />
          </div>
          <div className={styles.login_carousel_item}>
            <img src={images.loginBg3} className={styles.loginBg} />
          </div>
        </Carousel>
        <div className={styles.login_form}>
          <div className={styles.title}>
            {intl.formatMessage({ id: 'regsiter.title' })}
          </div>
          <Form
            layout="vertical"
            className={styles.loginCon}
            onFinish={onRegister}
          >
            <Form.Item
              label={intl.formatMessage({ id: 'register.form.label1' })}
              // extra={intl.formatMessage({ id: 'register.form.tips' })}
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
              // extra={intl.formatMessage({ id: 'register.form.tips' })}
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
            <Form.Item
              label={intl.formatMessage({ id: 'register.form.label3' })}
              name="email"
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({ id: 'login.email.empty' }),
                },
                {
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: intl.formatMessage({ id: 'login.email.error' }),
                },
              ]}
            >
              <Input
                placeholder={intl.formatMessage({ id: 'login.placeholder1' })}
              />
            </Form.Item>
            <Form.Item
              label={intl.formatMessage({ id: 'register.form.label4' })}
              name="password"
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({ id: 'login.Password.empty' }),
                },
                {
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{8,}$/,
                  message: intl.formatMessage({
                    id: 'login.Password.rules.message1',
                  }),
                },
              ]}
              extra={intl.formatMessage({ id: 'login.Password.extra' })}
            >
              <Input.Password
                placeholder={intl.formatMessage({ id: 'login.placeholder2' })}
              />
            </Form.Item>
            <Form.Item
              label={intl.formatMessage({ id: 'register.form.label5' })}
              name="confirmPassword"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({ id: 'login.Password.empty' }),
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        intl.formatMessage({ id: 'register.confirm.password' }),
                      ),
                    );
                  },
                }),
              ]}
              extra={
                <div className={styles.agree_check}>
                  <Checkbox
                    checked={checked}
                    onChange={({ target: { checked } }) => {
                      setChecked(checked);
                    }}
                  />
                  <span className={styles.agree_info}>
                    {intl.formatMessage({ id: 'login.agree' })}&nbsp;
                    <a
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpen('1');
                      }}
                    >
                      {intl.formatMessage({ id: 'login.documentName1' })}
                    </a>
                    <span>
                      &nbsp;
                      {intl.formatMessage({ id: 'login.documentName.and' })}
                      &nbsp;
                    </span>
                    <a
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpen('2');
                      }}
                    >
                      {intl.formatMessage({ id: 'login.documentName2' })}
                    </a>
                  </span>
                </div>
              }
            >
              <Input.Password
                placeholder={intl.formatMessage({ id: 'login.placeholder2' })}
              />
            </Form.Item>
            <Form.Item className={styles.btn_item}>
              <Button
                block
                type="primary"
                size="large"
                disabled={!checked}
                loading={loading}
                htmlType="submit"
              >
                {intl.formatMessage({ id: 'regsiter.confirm' })}
              </Button>
              <div
                className={styles.registe_btn}
                onClick={() => {
                  history.push('/user/login');
                }}
              >
                {intl.formatMessage({ id: 'login.title' })}
              </div>
            </Form.Item>
          </Form>
        </div>
        <PlatformPolicies
          open={open === '1' || open === '2'}
          activeKey={open}
          width={807}
          footer={null}
          theme={initialState?.theme}
          onCancel={() => {
            setOpen(null);
          }}
          onOk={() => {
            setChecked(true);
            setOpen(null);
          }}
        />
      </div>
    </ConfigProvider>
  );
};
