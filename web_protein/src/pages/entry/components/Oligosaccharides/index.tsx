import { Col } from 'antd';
import globalStyle from '../../styles/StructureSummary.less';
import styles from './styles.less';
import { orderBy } from 'lodash';

interface oligosaccharides {
  chainLength: number;
  chains: any;
  glycosylation: string;
  id: string;
  molecule: string;
  composition: any;
}
export default ({ oligosaccharides }: any) => {
  if (
    !oligosaccharides ||
    (oligosaccharides && oligosaccharides.length === 0)
  ) {
    return null;
  }
  return (
    <Col span={24}>
      <div className="global_entry_header">Oligosaccharides</div>
      <div className="global_entry_body">
        {orderBy(oligosaccharides, (vo: any) => {
          return Number(vo.id);
        })?.map((vo: oligosaccharides, index: number) => (
          <div key={index}>
            <table border={1} cellSpacing={1} cellPadding={4}>
              <thead>
                <tr>
                  <th colSpan={6} className={globalStyle.entityID_header}>
                    <h5>Entity ID:&nbsp;{vo.id}</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Molecule</th>
                  <th>Chains</th>
                  <th>Chain Length</th>
                  {/* <th>2D Diagram</th> */}
                  <th>Glycosylation</th>
                  {/* <th>3D Interactions</th> */}
                </tr>
                <tr>
                  <td>{vo.molecule}</td>
                  <td>{vo.chains?.join(' ')}</td>
                  <td>{vo.chainLength}</td>
                  {/* <td></td> */}
                  <td>{vo.glycosylation}</td>
                  {/* <td></td> */}
                </tr>
                <tr className="global_tr_bg">
                  <th colSpan={6}>
                    <h5>Composition</h5>
                  </th>
                </tr>
                {vo.composition && vo.composition.length !== 0 && (
                  <tr>
                    <td colSpan={6}>
                      <div className={styles.composition_box}>
                        {orderBy(vo.composition, (vo: any) => {
                          return Number(vo.id);
                        })?.map(({ id, monId }: any, i: number) => {
                          return (
                            <div key={i} className={styles.box}>
                              <div className={styles.box_item}>
                                {monId}
                                <span>{id}</span>
                              </div>
                              {i < vo.composition.length - 1 && (
                                <div className={styles.box_item_line} />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <br />
          </div>
        ))}
      </div>
    </Col>
  );
};
