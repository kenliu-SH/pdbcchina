import styles from './index.less';
import images from '@/assets/images';
import {
  Form,
  Input,
  Button,
  Checkbox,
  Popover,
  message,
  ConfigProvider,
  Carousel,
} from 'antd';
import { useIntl, history, useModel } from 'umi';
import { useEffect, useRef, useState } from 'react';
import { THEME_COLOR_LIST, WechatScanLogStatus } from '@/common/enum';
import { bindJWTToken, effect, useLoading } from '@/utils/dva17';
import { ELogin, EWxLoginCode, EWxLoginStatus, NUser } from '@/common/action';
import QrCode from 'qrcode.react';
import Config from '@/common/config';
import PlatformPolicies from '@/components/PlatformPolicies';

export default () => {
  const intl = useIntl();
  const { initialState, setInitialState } = useModel('@@initialState');
  const [checked, setChecked] = useState(false);
  const [wxLogin, setWxLogin] = useState(false);
  const [wxParams, setWxParams]: any = useState(null);
  const loading = useLoading(NUser, ELogin).loading;
  const [open, setOpen]: any = useState(false);
  const timer: any = useRef();
  const timerStatus: any = useRef();
  const fetchWxCode = () => {
    effect(NUser, EWxLoginCode).then((res: any) => {
      setWxParams(res);
    });
  };
  // useEffect(() => {
  //   fetchWxCode();
  //   return () => {
  //     timer.current = null;
  //     clearInterval(timer.current);
  //   };
  // }, []);
  // useEffect(() => {
  //   if (wxLogin && wxParams) {
  //     timer.current = setInterval(() => {
  //       effect(NUser, EWxLoginStatus, { ticket: wxParams?.ticket }).then(
  //         (res) => {
  //           const { status, user, token } = res;
  //           timerStatus.current = status;
  //           if (status === WechatScanLogStatus.scanned) {
  //             clearInterval(timer.current);
  //             if (user && token) {
  //               setInitialState({
  //                 ...initialState,
  //                 currentUser: user,
  //               });
  //               bindJWTToken(token);
  //               localStorage.setItem(Config.TOKEN, token);
  //               history.replace('/');
  //             }
  //           }
  //           if (status === WechatScanLogStatus.expired) {
  //             clearInterval(timer.current);
  //             fetchWxCode();
  //           }
  //         },
  //       );
  //     }, 1000);
  //   } else {
  //     clearInterval(timer.current);
  //   }
  // }, [wxLogin, wxParams]);
  const onLogin = (values: any) => {
    effect(NUser, ELogin, values).then((currentUser: any) => {
      console.log('currentUser: ', currentUser);
      setInitialState({
        ...initialState,
        currentUser,
      });
      history.replace('/');
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
            {intl.formatMessage({ id: 'login.title' })}
          </div>
          {/* <div className={styles.desc}>
            {intl.formatMessage({ id: 'login.desc' })}
          </div> */}
          <Form
            layout="vertical"
            className={styles.loginCon}
            onFinish={onLogin}
            autoComplete="off"
          >
            <Form.Item
              label={intl.formatMessage({ id: 'login.Account' })}
              name="email"
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({ id: 'login.email.empty' }),
                },
              ]}
            >
              <Input
                placeholder={intl.formatMessage({ id: 'login.placeholder1' })}
              />
            </Form.Item>
            <Form.Item
              label={intl.formatMessage({ id: 'login.Password' })}
              name="password"
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({ id: 'login.Password.empty' }),
                },
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
                htmlType="submit"
                disabled={!checked}
                loading={loading}
              >
                {intl.formatMessage({ id: 'login.btnName' })}
              </Button>
              <div
                className={styles.registe_btn}
                onClick={() => {
                  history.push('/user/register');
                }}
              >
                {intl.formatMessage({ id: 'regsiter.title' })}
              </div>
            </Form.Item>
            {/* <div className={styles.other_login}>
              <div className={styles.other_login_tips}>
                <div className={styles.tips_line} />
                <div className={styles.tips}>or</div>
                <div className={styles.tips_line} />
              </div>
              <div className={styles.other_login_btn}>
                <img src={images.loginBtn1} className={styles.loginIcon} />
                <Popover
                  open={wxLogin}
                  content={
                    <div style={{ textAlign: 'center' }}>
                      <QrCode value={wxParams?.url} size={200} />
                      <div>
                        <small>打开手机微信“扫一扫”</small>
                      </div>
                    </div>
                  }
                >
                  <img
                    src={images.loginBtn2}
                    className={styles.loginIcon}
                    onClick={() => {
                      if (wxParams) {
                        setWxLogin(!wxLogin);
                      } else {
                        message.error(
                          'WeChat login QR code acquisition failed, please try again!',
                        );
                      }
                    }}
                  />
                </Popover>
              </div>
            </div> */}
          </Form>
        </div>
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
    </ConfigProvider>
  );
};
