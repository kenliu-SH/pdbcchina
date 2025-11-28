import { history, useIntl, useModel } from 'umi';
import styles from './styles.less';
import { Form, Input, Button, ConfigProvider } from 'antd';
import { effect, useLoading } from '@/utils/dva17';
import { NUser, EVerifyAccessCode } from '@/common/action';
import images from '@/assets/images';
import LanguageSwitch from '@/components/LanguageSwitch';
import { THEME_COLOR_LIST } from '@/common/enum';
import { useState, useEffect } from 'react';

const getWindowSize = () => ({
  innerHeight: window.innerHeight,
  innerWidth: window.innerWidth,
});

export default () => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const { initialState }: any = useModel('@@initialState');
  const loading = useLoading(NUser, EVerifyAccessCode).loading;
  const [windowSize, setWindowSize] = useState(getWindowSize());
  function handleResize() {
    setWindowSize(getWindowSize());
  }
  //监听浏览器窗口的变化
  useEffect(() => {
    // 监听
    window.addEventListener('resize', handleResize);
    // 销毁
    return () => window.removeEventListener('resize', handleResize);
  });
  const getThemeBg = () => {
    if (initialState?.theme?.indexOf('red') >= 0) {
      return windowSize.innerWidth <= 750
        ? images.themeRedBgMobile
        : images.themeRedBg;
    } else if (initialState?.theme?.indexOf('blue') >= 0) {
      return windowSize.innerWidth <= 750
        ? images.themeBlueBgMobile
        : images.themeBlueBg;
    } else if (initialState?.theme?.indexOf('green') >= 0) {
      return windowSize.innerWidth <= 750
        ? images.themeGreenBgMobile
        : images.themeGreenBg;
    } else {
      return windowSize.innerWidth <= 750
        ? images.themeYellowBgMobile
        : images.themeYellowBg;
    }
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: THEME_COLOR_LIST[initialState?.theme],
        },
      }}
    >
      <div className={styles.access_contain}>
        <div className={styles.access_head}>
          <img src={getThemeBg()} className={styles.headerImg} />
          <img src={images.logo} className={styles.logo} />
          <div className={styles.switch}>
            <LanguageSwitch type="disabled" />
          </div>
        </div>
        <div className={styles.theme_line} />
        <div className={styles.access_box}>
          <div className={styles.access_card}>
            <div className={styles.tips}>
              {intl.formatMessage({ id: 'pages.access.welcome' })}
              <br />
              {intl.formatMessage({ id: 'pages.access.desc1' })}
              <strong>
                {intl.formatMessage({ id: 'pages.access.desc2' })}
              </strong>
              {intl.formatMessage({ id: 'pages.access.desc3' })}
            </div>
            <Form
              layout="vertical"
              onFinish={(values) => {
                values.code = values.code.trim();
                effect(NUser, EVerifyAccessCode, values)
                  .then((res: any) => {
                    localStorage.setItem('allowAccess', res);
                    history.replace('/');
                  })
                  .catch(() => {
                    form.resetFields();
                  });
              }}
            >
              <Form.Item
                name="code"
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage({
                      id: 'pages.access.codePlaceholder',
                    }),
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder={intl.formatMessage({
                    id: 'pages.access.codePlaceholder',
                  })}
                  style={{ textAlign: 'center' }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  block
                  size="large"
                >
                  {intl.formatMessage({ id: 'regsiter.confirm' })}
                </Button>
              </Form.Item>
            </Form>
            <div className={styles.code_box}>
              <img className={styles.code} src={images.accessCode} />
              <div>
                {intl.formatMessage({ id: 'pages.access.linkDescStart' })}&nbsp;
                <a
                  href="https://nfpsuserservices.mikecrm.com/dWp2uyX"
                  target="_blank"
                >
                  {intl.formatMessage({ id: 'pages.access.linkText' })}
                </a>
                &nbsp;
                {intl.formatMessage({ id: 'pages.access.linkDescEnd' })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};
