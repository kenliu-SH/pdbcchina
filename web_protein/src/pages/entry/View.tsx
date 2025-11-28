import styles from './styles/View.less';
import { useConnect } from '@/utils/dva17';
import { NStructure } from '@/common/action';
import { Row, Col, Select } from 'antd';
import DownloadBtn from '../../components/DownloadBtn';
import { history } from 'umi';
import Mol from './components/ModelLoader/Mol';
import NGL from './components/ModelLoader/NGL';
import JSmol from './components/ModelLoader/JSmol';
import EntryStatusTag from '@/components/EntryStatusTag';

export default ({ id }: any) => {
  const {
    location: { query },
  } = history;
  const { details } = useConnect(NStructure);
  return (
    <div className={styles.view_contain}>
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <DownloadBtn id={id} />
        </Col>
        <Col span={24}>
          <div>
            <strong style={{ display: 'inline-block', fontSize: 36 }}>
              {id}
            </strong>
            <EntryStatusTag status="REL" />
          </div>
        </Col>
        <Col span={24}>
          <strong style={{ fontSize: 18 }}>{details?.title}</strong>
        </Col>
        <Col span={24} style={{ margin: '16px 0' }}>
          {query?.model === 'NGL' ? (
            <NGL id={id} />
          ) : query?.model === 'JSmol' ? (
            <JSmol id={id} />
          ) : (
            <Mol id={id} />
          )}
        </Col>
        <Col span={24}>
          <div className={styles.view_switch}>
            <small>Select a different viewer</small>&nbsp;&nbsp;&nbsp;&nbsp;
            <Select
              style={{ width: '175px' }}
              size="small"
              options={[
                { label: 'Mol* (WebGL)', value: 'Mol' },
                { label: 'NGL (WebGL)', value: 'NGL' },
                // { label: 'JSmol (JavaScript)', value: 'JSmol' },
              ]}
              value={query?.model || 'Mol'}
              onSelect={(model: string) => {
                history.push({ query: { ...query, model } });
              }}
            />
          </div>
        </Col>
        <Col span={24}>
          <h5>Citation</h5>
          <small>
            Images created using Mol* should cite the PDB ID, the corresponding
            structure publication, Mol* (D. Sehnal, S. Bittrich, M. Deshpande,
            R. Svobodová, K. Berka, V. Bazgier, S. Velankar, S.K. Burley, J.
            Koča, A.S. Rose (2021) Mol* Viewer: modern web app for 3D
            visualization and analysis of large biomolecular structures. Nucleic
            Acids Research. doi:
            <a
              href="https://doi.org/10.1093/nar/gkab314"
              target="_blank"
              rel="noopener"
            >
              10.1093/nar/gkab314
            </a>
            ), and RCSB PDB.
          </small>
        </Col>
      </Row>
    </div>
  );
};
