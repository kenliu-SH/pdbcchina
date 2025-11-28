import styles from './index.less';
import { Spin } from 'antd';
import { effect, useLoading } from '@/utils/dva17';
import { ELogin, NUser } from '@/common/action';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';

const env = process.env.UMI_SERVER || 'dev';

export default () => {
  const loginLoading = useLoading(NUser, ELogin).loading;
  const onFinish = async (values: any) => {
    effect(NUser, ELogin, values);
  };
  return (
    <Spin spinning={loginLoading}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.loginCon}>
            <LoginForm
              logo="./logo.png"
              title="国家蛋白质科学中心|上海"
              subTitle="后台管理系统"
              onFinish={onFinish}
              initialValues={{
                accountName: env === 'dev' ? 'admin' : null,
                password: env === 'dev' ? 'admin21' : null,
              }}
            >
              <ProFormText
                name="accountName"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                placeholder={'请输入登录账号'}
                rules={[
                  {
                    required: true,
                    message: '请输入登录账号！',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
              />
            </LoginForm>
          </div>
        </div>
      </div>
    </Spin>
  );
};
