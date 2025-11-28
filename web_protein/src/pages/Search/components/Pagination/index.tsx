import { Pagination } from 'antd';
import styles from './styles.less';

export default ({ advancedList, onPagination }: any) => {
  const { currentPage = 1, pageSize = 10, total = 0 } = advancedList;
  return (
    <div className={styles.pagination}>
      <div>
        {(currentPage - 1) * pageSize + 1 || 1}&nbsp;to&nbsp;
        {Math.ceil(currentPage * pageSize)}
        &nbsp;of&nbsp;
        {total}
        &nbsp;Structures
      </div>
      <Pagination
        size="small"
        current={advancedList?.currentPage || 1}
        pageSize={advancedList?.pageSize || 25}
        total={advancedList?.total}
        showSizeChanger
        pageSizeOptions={[25, 50, 100]}
        onChange={(page: number, pageSize: number) => {
          onPagination(page, pageSize);
        }}
      />
      <div>
        {/* <span>Sort by</span>&nbsp;&nbsp;
        <Select size="small" style={{ width: '141px' }} options={[]} /> */}
      </div>
    </div>
  );
};
