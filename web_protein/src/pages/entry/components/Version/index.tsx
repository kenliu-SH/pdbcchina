import styles from './styles.less';
import { history } from 'umi';

export default (props: any) => {
  const { entityId, revisionHistorys } = props;
  return (
    <div className={styles.well_history}>
      This is version&nbsp;
      {revisionHistorys &&
        revisionHistorys[revisionHistorys?.length - 1]?.version}
      &nbsp;of the entry.&nbsp;See complete&nbsp;
      <a
        onClick={() => {
          history.push(`/entry/versions/${entityId}`);
        }}
      >
        history
      </a>
    </div>
  );
};
