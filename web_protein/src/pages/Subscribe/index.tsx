import { effect, useConnect, useLoading } from '@/utils/dva17';
import styles from './styles.less';
import { EGet, ESubscribe, NSearch, NSubscribe } from '@/common/action';
import { useEffect } from 'react';
import { Spin, Dropdown, Button, Pagination, Modal, message } from 'antd';
import { SUBSCRIBE_CHANNEL_NAME, SUBSCRIBE_CHANNEL } from '@/common/enum';
import { CaretDownOutlined } from '@ant-design/icons';
import images from '@/assets/images';
import { filter } from 'lodash';
import { useModel, history } from 'umi';
import config from '@/common/config';
import copy from 'copy-to-clipboard';
import { CopyOutlined } from '@ant-design/icons';

export default () => {
  const { initialState } = useModel('@@initialState');
  const { subscribeList } = useConnect(NSubscribe);
  const loading = useLoading(NSubscribe, EGet).loading;
  const fetch = (page: number, pageSize: number) => {
    effect(NSubscribe, EGet, { page, pageSize });
  };
  useEffect(() => {
    fetch(1, 10);
  }, []);
  //展示rss订阅地址
  const onShowRssAddress = async (code: string) => {
    const rssURL = config.SERVER_HOME + 'subscribe/rss/' + code;
    Modal.info({
      title: 'Subscription successful',
      content: (
        <div>
          <h6>Your RSS subscription address is:</h6>
          <a
            onClick={() => {
              copy(rssURL);
              message.success('The RSS subscription address has been copied!');
            }}
          >
            {rssURL}&nbsp;
            <CopyOutlined />
          </a>
        </div>
      ),
    });
  };
  //订阅
  const onSubscribe = (channel: any, item: any) => {
    const { rule } = item;
    if (
      channel === SUBSCRIBE_CHANNEL['微信'] &&
      !initialState?.currentUser?.openId
    ) {
      Modal.info({
        title: 'Prompt',
        content:
          'Your account has not been linked to WeChat yet. Please click to link!',
        okText: 'Go to Bind',
        onOk: () => {
          history.push('/personal-info');
        },
      });
      return;
    }
    if (
      channel === SUBSCRIBE_CHANNEL['邮件'] &&
      !initialState?.currentUser?.email
    ) {
      Modal.info({
        title: 'Prompt',
        content:
          'Your account has not been bound to an email yet. Please click to go and bind!',
        okText: 'Go to Bind',
        onOk: () => {
          history.push('/personal-info');
        },
      });
      return;
    }
    if (channel) {
      effect(NSearch, ESubscribe, {
        conditionType: 'query',
        rule,
        channels: {
          channel,
          config:
            channel === SUBSCRIBE_CHANNEL['邮件']
              ? { mailAddress: initialState?.currentUser?.email }
              : channel === SUBSCRIBE_CHANNEL['微信']
              ? { openId: initialState?.currentUser?.openId }
              : {},
        },
      }).then((res: any) => {
        if (channel === SUBSCRIBE_CHANNEL['rss']) {
          const { code } = res;
          onShowRssAddress(code);
        } else {
          message.success(SUBSCRIBE_CHANNEL_NAME[channel] + '订阅成功');
        }
        fetch(
          subscribeList?.pagination?.page || 1,
          subscribeList?.pagination?.pageSize || 10,
        );
      });
    }
  };
  return (
    <Spin spinning={loading}>
      {subscribeList && subscribeList?.rows?.length !== 0 ? (
        <>
          <div className={styles.subscribe_container}>
            {subscribeList.rows.map((item: any) => {
              const { channel }: any = item.channels;
              return (
                <div key={item.id} className={styles.subscribe_item}>
                  <div className={styles.left_search_json}>{item.title}</div>
                  <div className={styles.right_action}>
                    <a className={styles.query_btn}>
                      <i
                        className="icon iconfont icon-chaxun"
                        style={{ verticalAlign: 'middle' }}
                      />
                      &nbsp;check the details
                    </a>
                    <Dropdown
                      menu={{
                        items: filter(
                          [
                            {
                              label: '微信订阅',
                              key: SUBSCRIBE_CHANNEL['微信'],
                            },
                            {
                              label: '邮件订阅',
                              key: SUBSCRIBE_CHANNEL['邮件'],
                            },
                            { label: 'rss订阅', key: SUBSCRIBE_CHANNEL['rss'] },
                          ],
                          ({ key }: any) => {
                            return key !== channel;
                          },
                        ),
                        onClick: ({ key }) => {
                          onSubscribe(key, item);
                        },
                      }}
                    >
                      <Button
                        size="small"
                        type="primary"
                        className={styles.subscribe_btn}
                      >
                        {SUBSCRIBE_CHANNEL_NAME[channel]}
                        <CaretDownOutlined />
                      </Button>
                    </Dropdown>
                  </div>
                </div>
              );
            })}
            <div className={styles.pagination}>
              <Pagination
                showQuickJumper
                showSizeChanger
                size="small"
                total={subscribeList?.pagination?.count}
                current={subscribeList?.pagination?.page || 1}
                pageSize={subscribeList?.pagination?.pageSize || 10}
                onChange={(page, pageSize) => {
                  effect(NSubscribe, EGet, { page, pageSize });
                }}
              />
            </div>
          </div>
        </>
      ) : (
        <div className={'empty_content'}>
          <img src={images.iconEmpty} />
        </div>
      )}
    </Spin>
  );
};
