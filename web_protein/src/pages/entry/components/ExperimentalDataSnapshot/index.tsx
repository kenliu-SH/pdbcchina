import { Row, Col, Tooltip } from 'antd';
import styles from './styles.less';
import Config from '@/common/config';
import { decimalFormatting } from '@/utils/utils';

export default (props: any) => {
  const { entityId, experimentalDataSnapshot } = props;
  console.log('experimentalDataSnapshot: ', experimentalDataSnapshot);
  return (
    <Row gutter={[15, 15]}>
      <Col xl={12} md={24}>
        <p>
          <strong>Experimental Data Snapshot</strong>
        </p>
        {experimentalDataSnapshot?.map((vo: any, index: number) => {
          return (
            <ul className={'global_ul'} key={index}>
              {vo.method ? (
                <li>
                  <strong>Method</strong>:&nbsp;
                  {vo.method}
                </li>
              ) : null}
              {vo.resolution ? (
                <li>
                  <strong>Resolution</strong>:&nbsp;
                  {decimalFormatting(vo.resolution)}
                  &nbsp;Å
                </li>
              ) : null}
              {vo.aggregationState ? (
                <li>
                  <strong>Aggregation State</strong>:&nbsp;
                  {decimalFormatting(vo.aggregationState)}
                </li>
              ) : null}
              {vo.reconstructionMethod ? (
                <li>
                  <strong>Reconstruction Method</strong>:&nbsp;
                  {decimalFormatting(vo.reconstructionMethod)}
                </li>
              ) : null}
              {vo.rValueFree ? (
                <li>
                  <strong>R-Value Free</strong>:&nbsp;
                  {decimalFormatting(vo.rValueFree)}
                </li>
              ) : null}
              {vo.rValueWork ? (
                <li>
                  <strong>R-Value Work</strong>:&nbsp;
                  {decimalFormatting(vo.rValueWork)}
                </li>
              ) : null}
              {vo.rValueObserved ? (
                <li>
                  <strong>R-Value Observed</strong>:&nbsp;
                  {decimalFormatting(vo.rValueObserved)}
                </li>
              ) : null}
              {vo.numberOfParticles ? (
                <li>
                  <strong>Number of Particles</strong>:&nbsp;
                  {decimalFormatting(vo.numberOfParticles)}
                </li>
              ) : null}
              {vo.conformersCalculated ? (
                <li>
                  <strong>Conformers Calculated</strong>:&nbsp;
                  {decimalFormatting(vo.conformersCalculated)}
                </li>
              ) : null}
              {vo.conformersSubmitted ? (
                <li>
                  <strong>Conformers Submitted</strong>:&nbsp;
                  {decimalFormatting(vo.conformersSubmitted)}
                </li>
              ) : null}
              {vo.selectionCriteria ? (
                <li>
                  <strong>Selection Criteria</strong>:&nbsp;
                  {decimalFormatting(vo.selectionCriteria)}
                </li>
              ) : null}
              {vo.synchrotronSite ? (
                <li>
                  <strong>Synchrotron Site</strong>:&nbsp;
                  {vo.synchrotronSite}
                </li>
              ) : null}
              {vo.beamline ? (
                <li>
                  <strong>Beamline</strong>:&nbsp;
                  {vo.beamline}
                </li>
              ) : null}
              {index !== experimentalDataSnapshot.length - 1 && <hr />}
            </ul>
          );
        })}
      </Col>
      <Col xl={12} md={24}>
        <div className="global_row_space" style={{ marginBottom: 10 }}>
          <span>
            <strong>wwPDB Validation</strong>&nbsp;
            <Tooltip title='For each metric, two values are noted, one for the percentile rank of the entry compared to the entire PDB archive and one compared with entries determined with the same experimental method. The blue side of the scale is considered "better" than those on the "worse" red side.'>
              <i className="icon iconfont icon-tishi" />
            </Tooltip>
          </span>
          <div className="global_row_start">
            {/* <div className={styles.btnRadio}>
              <span className="icon iconfont icon-Dditu" />
              &nbsp;3D Report
            </div> */}
            <a
              className={styles.btnRadio}
              style={{ marginLeft: 6, color: '#333' }}
              href={Config.SERVER_HOME + `file/validation/full/${entityId}`}
              target="_blank"
            >
              Full Report
            </a>
          </div>
        </div>
        <img
          alt={`Currently ${entityId} does not have a validation slider image.`}
          src={Config.SERVER_HOME + `file/validation/png/${entityId}`}
          style={{
            width: '100%',
            objectFit: 'contain',
            padding: '8px',
            border: '1px solid rgb(221, 221, 221)',
          }}
        />
      </Col>
    </Row>
  );
};
