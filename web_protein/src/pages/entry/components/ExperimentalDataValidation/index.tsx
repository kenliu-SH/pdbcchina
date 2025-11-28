import { Row, Col } from 'antd';
import Config from '@/common/config';
import {
  decimalFormatting,
  formatSubscriptsWithRemainder,
} from '@/utils/utils';

interface emSoftwares {
  softwarePackage: string;
  task: string;
  version: string;
}
interface softwares {
  softwareName: string;
  purpose: string;
}

export default (props: any) => {
  const { entityId, experimentalDataSnapshot, validation } = props;
  return (
    <div>
      <div className="global_entry_header">Experimental Data & Validation</div>
      <div className="global_entry_body">
        <Row gutter={[16, 24]}>
          <Col xxl={12} sm={12} xs={24}>
            <strong>Experimental Data</strong>
            {experimentalDataSnapshot &&
              experimentalDataSnapshot?.map((vo: any, index: number) => {
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
                        {decimalFormatting(vo.resolution)}&nbsp;Å
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
                    {vo.spaceGroup ? (
                      <li>
                        <strong>
                          Space Group:&nbsp;
                          <a
                            className="global_underline"
                            dangerouslySetInnerHTML={{
                              __html: formatSubscriptsWithRemainder(
                                vo.spaceGroup,
                                10,
                              ),
                            }}
                          />
                        </strong>
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
                    {index !== experimentalDataSnapshot.length - 1 && <hr />}
                  </ul>
                );
              })}
            <>
              {validation && validation?.unitCells?.length !== 0 && (
                <div>
                  <strong>Unit Cell:</strong>
                  <table border={1} cellPadding={4} cellSpacing={1}>
                    <thead>
                      <tr className="global_tr_bg">
                        <th>Length ( Å )</th>
                        <th>Angle ( ˚ )</th>
                      </tr>
                    </thead>
                    <tbody>
                      {validation?.unitCells?.map(
                        ({ length, angle }: any, key: number) => {
                          const L = ['a', 'b', 'c'];
                          const R = ['α', 'β', 'γ'];
                          return (
                            <tr key={key}>
                              <td>
                                {L[key]}&nbsp;=&nbsp;{length}
                              </td>
                              <td>
                                {R[key]}&nbsp;=&nbsp;{angle}
                              </td>
                            </tr>
                          );
                        },
                      )}
                    </tbody>
                  </table>
                </div>
              )}
              {validation && validation?.emSoftwares?.length !== 0 && (
                <>
                  <br />
                  <div>
                    <strong>EM Software</strong>
                    <table border={1} cellPadding={4} cellSpacing={1}>
                      <tbody>
                        <tr className="global_tr_bg">
                          <th>Task</th>
                          <th>Software Name</th>
                          <th>Version</th>
                        </tr>
                        {validation?.emSoftwares?.map(
                          (vo: emSoftwares, index: number) => (
                            <tr key={index}>
                              <td>{vo.task}</td>
                              <td>{vo.softwarePackage}</td>
                              <td>{vo.version}</td>
                            </tr>
                          ),
                        )}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
              {validation && validation?.softwares?.length !== 0 && (
                <>
                  <br />
                  <div>
                    <strong>Software Package:</strong>
                    <table border={1} cellPadding={4} cellSpacing={1}>
                      <tbody>
                        <tr className="global_tr_bg">
                          <th>Task</th>
                          <th>Software Name</th>
                        </tr>
                        {validation?.softwares?.map(
                          (vo: softwares, index: number) => (
                            <tr key={index}>
                              <td>{vo.softwareName}</td>
                              <td>{vo.purpose}</td>
                            </tr>
                          ),
                        )}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </>
          </Col>
          <Col xxl={12} sm={12} xs={24}>
            <strong>Structure Validation</strong>
            <p id="validationSection">
              View&nbsp;
              <a
                target="_blank"
                rel="noopener"
                href="//files.rcsb.org/pub/pdb/validation_reports/y2/6y2o/6y2o_full_validation.pdf"
              >
                Full Validation Report
              </a>
            </p>
            <img
              alt={`Currently ${entityId} does not have a validation slider image.`}
              src={Config.SERVER_HOME + `file/validation/png/${entityId}`}
              style={{
                width: '100%',
                objectFit: 'contain',
                border: '1px solid #ddd',
                padding: 8,
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};
