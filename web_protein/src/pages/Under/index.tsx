import { useEffect } from 'react';
import styles from './styles.less';
import { effect, useConnect } from '@/utils/dva17';
import { EUnder, NHome } from '@/common/action';
import images from '@/assets/images';
import { getLocale, history } from 'umi';
import QRCode from 'qrcode.react';

export default () => {
  const local = getLocale();
  const {
    location: { query },
  }: any = history;
  const { underInfo } = useConnect(NHome);
  useEffect(() => {
    effect(NHome, EUnder);
  }, []);
  const getTxt = () => {
    switch (local) {
      case 'zh-CN':
      case 'zh-TW':
        return underInfo?.textZh;
        break;
      default:
        return underInfo?.text;
        break;
    }
  };
  const getDesc = () => {
    switch (local) {
      case 'zh-CN':
      case 'zh-TW':
        return underInfo?.descZh;
        break;
      default:
        return underInfo?.desc;
        break;
    }
  };
  return (
    <div className={styles.under_page}>
      <img
        src={underInfo?.building || images.underIcon}
        className={styles.icon}
      />
      <div className={styles.text}>{getTxt()}</div>
      <div className={styles.qrCode_box}>
        <a href={query?.url} target="_blank">
          <QRCode className={styles.code} value={query?.url} size={80} />
        </a>
        <div className={styles.desc}>{getDesc()}</div>
      </div>
    </div>
  );
};
