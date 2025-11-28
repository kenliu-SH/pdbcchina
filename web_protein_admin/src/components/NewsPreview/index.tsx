import { Modal } from 'antd';
import styles from './styles.less';
import dayjs from 'dayjs';

export default (props: any) => {
  const { data, isChinese } = props;
  return (
    <Modal {...props}>
      <div className={styles.rich_container}>
        <div className={styles.title}>{isChinese ? data?.zhTitle : data?.title}</div>
        <div className={styles.time}>
          {data?.releaseTime && dayjs(data?.releaseTime).format('YYYY/MM/DD')}
        </div>
        <div
          className={[styles.content, 'ql-editor'].join(' ')}
          dangerouslySetInnerHTML={{ __html: isChinese ? data?.zhContent : data?.content }}
        />
      </div>
    </Modal>
  );
};
