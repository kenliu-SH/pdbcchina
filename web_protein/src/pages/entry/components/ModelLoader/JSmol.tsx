import { Row, Col } from 'antd';
import styles from '../../styles/View.less';
import { useEffect, useRef } from 'react';
import Config from '@/common/config';

export default ({ id }: any) => {
  const jsMolRef = useRef(null);
  useEffect(() => {
    if (id) {
      setTimeout(() => {
        console.log('====>', window.Jmol.getApplet, jsMolRef.current, id);
        window.Jmol.getApplet(jsMolRef.current, {
          width: '100%',
          height: '100%',
          color: '0xFFFFFF',
          j2sPath: 'https://chemapps.stolaf.edu/jmol/jsmol/j2s',
          script:
            'load' + Config.SERVER_HOME + `file/mmCIF/down/` + id + `.cif`,
        });
      }, 3000);
    }
  }, []);
  return (
    <Row>
      <Col span={24}>
        <div ref={jsMolRef} style={{ height: '500px' }} />
      </Col>
    </Row>
  );
};

// export default ({ id }: any) => {
//   return (
//     <Row>
//       <Col span={18}>
//         <div className={styles.jsMol_contain}>
//           <div className={styles.jsModl_viewer}>
//             <iframe src={`./JSMol/JSmol.html?id=${id}`}></iframe>
//           </div>
//         </div>
//       </Col>
//       <Col span={6}></Col>
//     </Row>
//   );
// };
