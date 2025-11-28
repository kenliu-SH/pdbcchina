import styles from '../../styles/StructureSummary.less';
import { Radio } from 'antd';
import { useEffect, useState } from 'react';
import Proteins from './Proteins';
import Nucleic from './Nucleic';

export default ({ macromolecules }: any) => {
  const { proteins, nucleicAcidsOrHybrids } = macromolecules || {};
  const [typeFlag, setTypeFlag] = useState(false);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (
      proteins &&
      proteins.length !== 0 &&
      nucleicAcidsOrHybrids &&
      nucleicAcidsOrHybrids.length !== 0
    ) {
      setTypeFlag(true);
    }
  }, [proteins, nucleicAcidsOrHybrids]);
  return (
    <div className={styles.macromolecules_content}>
      {typeFlag && (
        <div className={styles.macromolecules_type}>
          <Radio.Group
            buttonStyle="solid"
            value={current}
            onChange={({ target: { value } }) => {
              setCurrent(value);
            }}
          >
            <Radio.Button value={0}>
              Proteins&nbsp;
              <span
                className={styles.number_badge}
                style={current !== 0 ? { backgroundColor: '#777' } : {}}
              >
                {proteins?.length}
              </span>
            </Radio.Button>
            <Radio.Button value={1}>
              Nucleic Acids / Hybrid&nbsp;
              <span
                className={styles.number_badge}
                style={current !== 1 ? { backgroundColor: '#777' } : {}}
              >
                {nucleicAcidsOrHybrids?.length}
              </span>
            </Radio.Button>
          </Radio.Group>
        </div>
      )}
      {(current === 0 || (!typeFlag && proteins?.length !== 0)) && (
        <>
          {proteins?.map((item: any, index: number) => (
            <div key={index}>
              <Proteins item={item} id={`htmlElementId${index}`} />
              {index !== proteins.length - 1 && <br />}
            </div>
          ))}
        </>
      )}
      {(current === 1 ||
        (!typeFlag && nucleicAcidsOrHybrids?.length !== 0)) && (
        <>
          {nucleicAcidsOrHybrids?.map((item: any, index: number) => (
            <div key={index}>
              <Nucleic item={item} id={`nucleicAcidsOrHybrids${index}`} />
              {index !== nucleicAcidsOrHybrids.length - 1 && <br />}
            </div>
          ))}
        </>
      )}
    </div>
  );
};
