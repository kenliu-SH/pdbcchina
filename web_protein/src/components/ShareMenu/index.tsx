import images from '@/assets/images';
import styles from './index.less';
import { Popover, Modal } from 'antd';
import QRCode from 'qrcode.react';
import copy from 'copy-to-clipboard';

export default ({ linkUrl }: any) => {
  const onShareLink = () => {
    Modal.confirm({
      title: 'Prompt',
      content: 'Are you sure to copy the sharing link to your clipboard?',
      okText: 'Copy sharing link',
      onOk: () => {
        copy(linkUrl);
      },
    });
  };
  return (
    <div className={styles.share_menu}>
      <div className={styles.share_menu_item} onClick={onShareLink}>
        <img className={styles.menu_item_icon} src={images.iconLink} />
      </div>
      <wb-share-button>
        <div className={styles.share_menu_item}>
          <img className={styles.menu_item_icon} src={images.iconWeibo} />
        </div>
      </wb-share-button>
      <Popover
        placement="right"
        content={<QRCode value={linkUrl} size={200} />}
      >
        <div className={styles.share_menu_item}>
          <img className={styles.menu_item_icon} src={images.iconWechat} />
        </div>
      </Popover>
    </div>
  );
};
