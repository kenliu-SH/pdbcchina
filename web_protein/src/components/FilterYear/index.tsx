import styles from './index.less';
import images from '@/assets/images';

export default ({ intl, yearOpt, currentYear, setCurrentYear }: any) => {
  return (
    <div className={styles.filter_year}>
      <div className={styles.filter_title}>
        {intl.formatMessage({ id: 'pages.news.filter.title' })}
      </div>
      <div className={styles.yearList}>
        <img
          src={images.iconPrevYear}
          className={[styles.filterIcon, styles.icon_prev].join(' ')}
        />
        <div className={styles.scroll}>
          {yearOpt?.map((vo: any, index: number) => {
            return (
              <div
                key={index}
                className={[
                  styles.year_item,
                  currentYear === vo.date ? styles.year_item_active : '',
                ].join(' ')}
                onClick={() => {
                  setCurrentYear(vo.date);
                }}
              >
                {vo.date}
              </div>
            );
          })}
        </div>
        <img
          src={images.iconNextYear}
          className={[styles.filterIcon, styles.icon_next].join(' ')}
        />
      </div>
    </div>
  );
};
