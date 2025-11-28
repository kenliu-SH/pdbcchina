import { useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import styles from './styles.less';
import { useIntl } from 'umi';

export default ({
  list,
  totalLength,
  parentKey,
  exptlMethod,
  setExptlMethod,
}: any) => {
  const intl = useIntl();
  const [dataSource, setDataSource] = useState([]);
  const [num, setNum]: any = useState(1);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (list) {
      const length: any = list.length / 10;
      setNum(length < 1 ? parseInt(length) + 1 : length);
    }
  }, [list]);
  useEffect(() => {
    if (list) {
      const arr = list.slice(dataSource.length, page * 10);
      setDataSource(dataSource.concat(arr));
    }
  }, [page, list]);
  return (
    <div>
      {dataSource?.map((vv: any, i: number) => (
        <div key={i}>
          <Checkbox
            checked={exptlMethod?.includes(vv.name)}
            onChange={() => {
              if (exptlMethod?.includes(vv.name)) {
                exptlMethod.splice(exptlMethod.indexOf(vv.name), 1);
              } else {
                exptlMethod.push(vv.name);
              }
              setExptlMethod(exptlMethod.concat());
            }}
          >
            <small>
              {vv?.name}
              {vv.count && `(${vv.count})`}
            </small>
          </Checkbox>
        </div>
      ))}
      {num > page ? (
        <a
          className={styles.count_more_btn}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          {intl.formatMessage({ id: 'pages.search.count.menu.more' })}
        </a>
      ) : null}
      {parentKey !== totalLength ? <hr /> : null}
    </div>
  );
};
