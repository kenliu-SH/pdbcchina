import { Carousel } from 'antd';
import styles from './styles.less';
import { useRef } from 'react';
import Config from '@/common/config';
import { find } from 'lodash';

interface biological {
  assemblyId: string;
  biologicalAssemblyEvidence: string;
  details: string;
  title: string;
  url?: any;
}

export default (props: any) => {
  const courselRef: any = useRef();
  const { biological, experimentalDataSnapshot } = props;
  const { biologicals, image } = biological || {};
  const isNMR = find(experimentalDataSnapshot || [], (vo: any) => {
    return ['SOLID-STATE NMR', 'SOLUTION NMR'].includes(vo.method);
  });
  return (
    <div className={styles.summary_info_left}>
      <i
        className={[
          'icon iconfont icon-jiantou',
          styles.icon,
          styles.prev_icon,
        ].join(' ')}
        onClick={() => {
          courselRef.current?.prev();
        }}
      />
      <i
        className={[
          'icon iconfont icon-jiantou3',
          styles.icon,
          styles.next_icon,
        ].join(' ')}
        onClick={() => {
          courselRef.current?.next();
        }}
      />
      <Carousel dots={false} ref={courselRef}>
        {image?.assemblys?.map((vo: biological, index: number) => {
          return (
            <div key={index} className={styles.carousel_card}>
              <div className={styles.carousel_head}>
                {biologicals[index]?.title
                  ? biologicals[index]?.title
                  : 'Biological Assembly'}
                &nbsp;
                {biologicals[index]?.assemblyId}
              </div>
              <div className={styles.carousel_main}>
                <div className={styles.carousel_img}>
                  <img src={Config.SERVER_HOME + `file/v2/pdb/3dImage/${vo}`} />
                </div>
                {(biologicals[index]?.details ||
                  biologicals[index]?.biologicalAssemblyEvidence) && (
                  <div className={styles.img_desc}>
                    {biologicals[index]?.details && (
                      <p>{biologicals[index]?.details}</p>
                    )}
                    {biologicals[index]?.biologicalAssemblyEvidence && (
                      <>
                        <hr />
                        <span>
                          <strong>Biological Assembly Evidence:</strong>&nbsp;
                          {biologicals[index]?.biologicalAssemblyEvidence}
                        </span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className={styles.carousel_card}>
          <div className={styles.carousel_head}>
            {isNMR ? 'NMR Ensemble' : 'Asymmetric Unit'}
          </div>
          <div className={styles.carousel_main}>
            <div className={styles.carousel_img}>
              <img
                src={Config.SERVER_HOME + `file/v2/pdb/3dImage/${image?.unit}`}
              />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
