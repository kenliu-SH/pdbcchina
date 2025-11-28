import { Dropdown } from 'antd';
import styles from './index.less';
import type { MenuProps } from 'antd';
import { getLocale, setLocale, useIntl } from 'umi';
import { chineseConversion } from '@/utils/trans';

const LOCALE_NAME: any = {
  'zh-CN': '中文（简）',
  'zh-TW': '中文（繁）',
  'en-US': 'English',
};

export default ({ type }: any) => {
  const locale: any = getLocale();
  const intl = useIntl();
  const items: MenuProps['items'] = [
    {
      key: 'zh-CN',
      label: (
        <span style={{ whiteSpace: 'nowrap', fontSize: 14 }}>中文（简）</span>
      ),
    },
    {
      key: 'zh-TW',
      label: (
        <span style={{ whiteSpace: 'nowrap', fontSize: 14 }}>
          {chineseConversion('中文（繁）')}
        </span>
      ),
    },
    {
      key: 'en-US',
      label: (
        <span style={{ whiteSpace: 'nowrap', fontSize: 14 }}>English</span>
      ),
    },
  ];
  return (
    <Dropdown
      placement="bottom"
      menu={{
        items,
        selectedKeys: [locale],
        onClick: ({ key }) => {
          setLocale(key, true);
        },
      }}
    >
      {type ? (
        <a className={styles.language_swtich}>
          <span style={{ color: 'var(--primary-color)', fontSize: 14 }}>
            {LOCALE_NAME[locale]}
          </span>
          &nbsp;
          <i
            style={{ color: 'var(--primary-color)' }}
            className={[
              'icon iconfont icon-mianxingxiajiantou',
              styles.icon_arrow,
            ].join(' ')}
          />
        </a>
      ) : (
        <a className={styles.language_swtich}>
          {LOCALE_NAME[locale]}
          &nbsp;
          <i
            className={[
              'icon iconfont icon-mianxingxiajiantou',
              styles.icon_arrow,
            ].join(' ')}
          />
        </a>
      )}
    </Dropdown>
  );
};
