import { ERefinements, NSearch } from '@/common/action';
import { effect, useConnect } from '@/utils/dva17';
import { useEffect } from 'react';
import styles from './styles.less';
import Items from './Items';

export default ({ query, exptlMethod, setExptlMethod }: any) => {
  const params = query && JSON.parse(query);
  const { statisticsList } = useConnect(NSearch);
  useEffect(() => {
    effect(NSearch, ERefinements, { ...params });
  }, []);
  return (
    <div className={styles.gird_left}>
      {statisticsList?.map((item: any, index: number) => (
        <div key={index}>
          <h5 style={{ marginBottom: 8 }}>{item?.name}</h5>
          <Items
            list={item.children}
            totalLength={statisticsList.length - 1}
            parentKey={index}
            exptlMethod={exptlMethod}
            setExptlMethod={setExptlMethod}
          />
        </div>
      ))}
    </div>
  );
};
