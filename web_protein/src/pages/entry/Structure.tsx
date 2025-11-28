import { NStructure } from '@/common/action';
import { useConnect } from '@/utils/dva17';
import { Col, Row } from 'antd';
import styles from './styles/StructureSummary.less';

import DownloadBtn from '../../components/DownloadBtn';
import BiologicallyInteresting from './components/BiologicallyInteresting';
import EntryBasic from './components/EntryBasic';
import EntryCarousel from './components/EntryCarousel';
import EntryHistory from './components/EntryHistory';
import ExperimentalDataSnapshot from './components/ExperimentalDataSnapshot';
import ExperimentalDataValidation from './components/ExperimentalDataValidation';
import Literature from './components/Literature';
import MacromoleculeContent from './components/MacromoleculeContent';
import Macromolecules from './components/Macromolecules';
import Oligosaccharides from './components/Oligosaccharides';
import SmallMolecules from './components/SmallMolecules';
import Version from './components/Version';

export default ({ id }: any) => {
  const { details } = useConnect(NStructure);
  return (
    details && (
      <div className={styles.summary_contain}>
        <Row gutter={[24, 15]}>
          <Col xl={8} md={24}>
            <EntryCarousel {...details} />
            <MacromoleculeContent {...details} />
          </Col>
          <Col xl={16} md={24} className={styles.summary_info_right}>
            <Row gutter={[0, 15]}>
              <Col span={24}>
                <DownloadBtn id={id} />
              </Col>
              <Col span={24}>
                <EntryBasic {...details} />
              </Col>
              <Col span={24}>
                <ExperimentalDataSnapshot {...details} />
              </Col>
              <Col span={24}>
                <Version {...details} />
              </Col>
              <Col span={24}>
                <Literature {...details} />
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[0, 24]}>
              <Col span={24}>
                <div>
                  <div className={'global_entry_header'}>Macromolecules</div>
                  <div className={'global_entry_body'}>
                    <Macromolecules macromolecules={details?.macromolecules} />
                  </div>
                </div>
              </Col>
              <Oligosaccharides {...details} />
              <SmallMolecules {...details} />
              <BiologicallyInteresting {...details} />
              <Col span={24}>
                <ExperimentalDataValidation {...details} />
              </Col>
              <Col span={24}>
                <EntryHistory {...details} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  );
};
