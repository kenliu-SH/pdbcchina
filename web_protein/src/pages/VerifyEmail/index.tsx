import { useEffect, useState } from 'react';
import styles from './styles.less';
import { ConfigProvider, Spin } from 'antd';
import { history, useModel } from 'umi';
import { effect } from '@/utils/dva17';
import { EVerifyEmail, NUser } from '@/common/action';
import { THEME_COLOR_LIST } from '@/common/enum';

export default () => {
  const {
    query: { authCode },
  }: any = history.location;
  const { initialState } = useModel('@@initialState');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (authCode) {
      effect(NUser, EVerifyEmail, { authCode }).then((res: any) => {
        setLoading(false);
        history.replace('/user/login');
      });
    }
  }, []);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: THEME_COLOR_LIST[initialState?.theme],
        },
      }}
    >
      <Spin spinning={loading}>
        <div className={styles.verify_email}>
          {true
            ? 'Email verification in progress, please wait...'
            : 'Email verification successful!'}
        </div>
      </Spin>
    </ConfigProvider>
  );
};
