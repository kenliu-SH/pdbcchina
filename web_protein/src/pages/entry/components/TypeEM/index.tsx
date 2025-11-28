import { Row, Col } from 'antd';
import dayjs from 'dayjs';

interface dataAcquisition {
  detectorType: string;
  electronDose: string;
}
interface imagingExperiment {
  accelerationVoltage: number;
  calibratedMagnification: null | string;
  dateOfExperiment: null | string;
  imagingDetails: string;
  imagingExperiment: string;
  imagingMode: string;
  maximumDefocus: number;
  maximumTiltAngle: null | number;
  microscopeModel: string;
  minimumDefocus: number;
  minimumTiltAngle: null | string;
  nominalCS: number;
  nominalMagnification: number;
  source: string;
  specimenHolderModel: string;
  temperatureKelvin: null | string;
}
interface emSoftware {
  softwarePackage: string;
  task: string;
  version: string;
}

export default ({ data }: any) => {
  const {
    sample,
    specimenPreparation,
    reconstruction,
    mapModelFittingAndRefinement,
    dataAcquisition,
    imagingExperiment,
    emSoftware,
    imageProcessing,
  } = data;
  return (
    <Row gutter={16}>
      <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
        {sample && (
          <div className="rows_table_item">
            <table border={1} cellPadding={4} cellSpacing={1}>
              <tbody>
                <tr className="global_tr_bg">
                  <th>Sample</th>
                </tr>
                <tr>
                  <td>{sample}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {specimenPreparation && (
          <>
            <br />
            <div className="rows_table_item">
              <table border={1} cellPadding={4} cellSpacing={1}>
                <tbody>
                  <tr className="global_tr_bg">
                    <th colSpan={2}>Specimen Preparation</th>
                  </tr>
                  <tr>
                    <th>Sample Aggregation State</th>
                    <td>{specimenPreparation?.sampleAggregationState}</td>
                  </tr>
                  <tr>
                    <th>Vitrification Instrument</th>
                    <td>{specimenPreparation?.vitrificationInstrument}</td>
                  </tr>
                  <tr>
                    <th>Cryogen Name</th>
                    <td>{specimenPreparation?.cryogenName}</td>
                  </tr>
                  <tr>
                    <th>Sample Vitrification Details</th>
                    <td>{specimenPreparation?.sampleVitrificationDetails}</td>
                  </tr>
                  <tr>
                    <th>Embedding Material</th>
                    <td>{specimenPreparation?.embeddingMaterial}</td>
                  </tr>
                  <tr>
                    <th>Embedding Details</th>
                    <td>{specimenPreparation?.embeddingDetails}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
        {reconstruction && (
          <>
            <br />
            <div className="rows_table_item">
              <table border={1} cellPadding={4} cellSpacing={1}>
                <tbody>
                  <tr className="global_tr_bg">
                    <th colSpan={2}>3D Reconstruction</th>
                  </tr>
                  <tr>
                    <th style={{ width: '30%' }}>Reconstruction Method</th>
                    <td>{reconstruction.reconstructionMethod}</td>
                  </tr>
                  <tr>
                    <th>Number of Particles</th>
                    <td>{reconstruction.numberofParticles}</td>
                  </tr>
                  <tr>
                    <th>Reported Resolution (Å)</th>
                    <td>{reconstruction.reportedResolution}</td>
                  </tr>
                  <tr>
                    <th>Resolution Method</th>
                    <td>{reconstruction.resolutionMethod}</td>
                  </tr>
                  <tr>
                    <th>Other Details</th>
                    <td>{reconstruction.otherDetails}</td>
                  </tr>
                  <tr>
                    <th>Refinement Type</th>
                    <td>{reconstruction.refinementType}</td>
                  </tr>
                  <tr>
                    <th>Symmetry Type</th>
                    <td>{reconstruction.symmetryType}</td>
                  </tr>
                  {reconstruction.hasOwnProperty('axialSymmetry') && (
                    <tr>
                      <th>Axial Symmetry</th>
                      <td>{reconstruction.axialSymmetry}</td>
                    </tr>
                  )}
                  {reconstruction.hasOwnProperty('axialRise') && (
                    <tr>
                      <th>Axial Rise</th>
                      <td>{reconstruction.axialRise}</td>
                    </tr>
                  )}
                  {reconstruction.hasOwnProperty('angularRotation') && (
                    <tr>
                      <th>Angular Rotation</th>
                      <td>{reconstruction.angularRotation}</td>
                    </tr>
                  )}
                  {reconstruction.hasOwnProperty('pointSymmetry') && (
                    <tr>
                      <th>Point Symmetry</th>
                      <td>{reconstruction.pointSymmetry}</td>
                    </tr>
                  )}
                  {reconstruction.hasOwnProperty('spaceGroupName') && (
                    <tr>
                      <th>Space Group Name</th>
                      <td>{reconstruction.spaceGroupName}</td>
                    </tr>
                  )}
                  {reconstruction.hasOwnProperty('lengthA') && (
                    <tr>
                      <th>Length a</th>
                      <td>{reconstruction.lengthA}</td>
                    </tr>
                  )}
                  {reconstruction.hasOwnProperty('lengthB') && (
                    <tr>
                      <th>Length b</th>
                      <td>{reconstruction.lengthB}</td>
                    </tr>
                  )}
                  {reconstruction.hasOwnProperty('lengthC') && (
                    <tr>
                      <th>Length c</th>
                      <td>{reconstruction.lengthC}</td>
                    </tr>
                  )}
                  {reconstruction.hasOwnProperty('angleAlpha') && (
                    <tr>
                      <th>Angle Alpha</th>
                      <td>{reconstruction.angleAlpha}</td>
                    </tr>
                  )}
                  {reconstruction.hasOwnProperty('angleBeta') && (
                    <tr>
                      <th>Angle Beta</th>
                      <td>{reconstruction.angleBeta}</td>
                    </tr>
                  )}
                  {reconstruction.hasOwnProperty('angleGamma') && (
                    <tr>
                      <th>Angle Gamma</th>
                      <td>{reconstruction.angleGamma}</td>
                    </tr>
                  )}
                  {/* 
          'lengthA',
					'lengthB',
					'lengthC',
					'angleAlpha',
					'angleBeta',
					'angleGamma',
          pointSymmetry,
          spaceGroupName,
          'axialSymmetry',
					'axialRise',
					'angularRotation',
*/}
                </tbody>
              </table>
            </div>
          </>
        )}
        {mapModelFittingAndRefinement && (
          <>
            <br />
            <div className="rows_table_item">
              <table border={1} cellPadding={4} cellSpacing={1}>
                <tbody>
                  <tr className="global_tr_bg">
                    <th colSpan={6}>Map-Model Fitting and Refinement</th>
                  </tr>
                  <tr>
                    <th>Id</th>
                    <td>{mapModelFittingAndRefinement?.id}</td>
                  </tr>
                  <tr>
                    <th>Refinement Space</th>
                    <td>{mapModelFittingAndRefinement?.refinementSpace}</td>
                  </tr>
                  <tr>
                    <th>Refinement Protocol</th>
                    <td>{mapModelFittingAndRefinement?.refinementProtocol}</td>
                  </tr>
                  <tr>
                    <th>Refinement Target</th>
                    <td>{mapModelFittingAndRefinement?.refinementTarget}</td>
                  </tr>
                  <tr>
                    <th>Overall B Value</th>
                    <td>{mapModelFittingAndRefinement?.overallBValue}</td>
                  </tr>
                  <tr>
                    <th>Model fitting software</th>
                    <td>
                      {mapModelFittingAndRefinement?.modelFittingSoftware}
                    </td>
                  </tr>
                  <tr>
                    <th>Model refinement software</th>
                    <td>
                      {mapModelFittingAndRefinement?.modelRefinementSoftware}
                    </td>
                  </tr>
                  <tr>
                    <th>Details</th>
                    <td style={{ width: '70%' }}>
                      {mapModelFittingAndRefinement?.details}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </Col>
      <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
        {dataAcquisition && dataAcquisition.length !== 0 && (
          <>
            <div className="rows_table_item">
              <table border={1} cellPadding={4} cellSpacing={1}>
                <tbody>
                  <tr className="global_tr_bg">
                    <th colSpan={10}>Data Acquisition</th>
                  </tr>
                  <tr>
                    <th>Detector Type</th>
                    {dataAcquisition?.map(
                      (vo: dataAcquisition, index: number) => (
                        <td key={index}>{vo.detectorType}</td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>
                      Electron Dose (electrons/Å<sup>2</sup>)
                    </th>
                    {dataAcquisition?.map(
                      (vo: dataAcquisition, index: number) => (
                        <td key={index}>{vo.electronDose}</td>
                      ),
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
          </>
        )}
        {imagingExperiment && imagingExperiment.length !== 0 && (
          <>
            <div className="rows_table_item">
              <table border={1} cellPadding={4} cellSpacing={1}>
                <tbody>
                  <tr className="global_tr_bg">
                    <th style={{ width: '40%' }}>Imaging Experiment</th>
                    {imagingExperiment?.map(
                      (vo: imagingExperiment, index: number) => (
                        <th key={index}>{vo?.imagingExperiment}</th>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Date of Experiment</th>
                    {imagingExperiment?.map(
                      (vo: imagingExperiment, index: number) => (
                        <td key={index}>
                          {vo?.dateOfExperiment &&
                            dayjs(vo?.dateOfExperiment).format('YYYY-MM-DD')}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Temperature (Kelvin)</th>
                    {imagingExperiment?.map(
                      (vo: imagingExperiment, index: number) => (
                        <td key={index}>{vo?.temperatureKelvin}</td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Microscope Model</th>
                    {imagingExperiment?.map(
                      (vo: imagingExperiment, index: number) => (
                        <td key={index}>{vo?.microscopeModel}</td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Minimum Defocus (nm)</th>
                    {imagingExperiment?.map(
                      (vo: imagingExperiment, index: number) => (
                        <td key={index}>{vo?.minimumDefocus}</td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Maximum Defocus (nm)</th>
                    {imagingExperiment?.map(
                      (vo: imagingExperiment, index: number) => (
                        <td key={index}>{vo?.maximumDefocus}</td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Minimum Tilt Angle (degrees)</th>
                    {imagingExperiment?.map(
                      (vo: imagingExperiment, index: number) => (
                        <td key={index}>{vo?.minimumTiltAngle}</td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Maximum Tilt Angle (degrees)</th>
                    {imagingExperiment?.map(
                      (vo: imagingExperiment, index: number) => (
                        <td key={index}>{vo?.maximumTiltAngle}</td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Nominal CS</th>
                    {imagingExperiment?.map(
                      (vo: imagingExperiment, index: number) => (
                        <td key={index}>{vo?.nominalCS}</td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Imaging Mode</th>
                    {imagingExperiment?.map(
                      (vo: imagingExperiment, index: number) => (
                        <td key={index}>{vo?.imagingMode}</td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Specimen Holder Model</th>
                    {imagingExperiment?.map(
                      (vo: imagingExperiment, index: number) => (
                        <td key={index}>{vo?.specimenHolderModel}</td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Nominal Magnification</th>
                    {imagingExperiment?.map(
                      (vo: imagingExperiment, index: number) => (
                        <td key={index}>{vo?.nominalMagnification}</td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Calibrated Magnification</th>
                    {imagingExperiment?.map(
                      (vo: imagingExperiment, index: number) => (
                        <td key={index}>{vo?.calibratedMagnification}</td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Source</th>
                    {imagingExperiment?.map(
                      (vo: imagingExperiment, index: number) => (
                        <td key={index}>{vo?.source}</td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Acceleration Voltage (kV)</th>
                    {imagingExperiment?.map(
                      (vo: imagingExperiment, index: number) => (
                        <td key={index}>{vo?.accelerationVoltage}</td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Imaging Details</th>
                    {imagingExperiment?.map(
                      (vo: imagingExperiment, index: number) => (
                        <td key={index}>{vo?.imagingDetails}</td>
                      ),
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
          </>
        )}
        {emSoftware && emSoftware.length !== 0 && (
          <>
            <div className="rows_table_item">
              <table border={1} cellPadding={4} cellSpacing={1}>
                <thead>
                  <tr className="global_tr_bg">
                    <th colSpan={3}>EM Software</th>
                  </tr>
                  <tr>
                    <th>Task</th>
                    <th>Software Package</th>
                    <th>Version</th>
                  </tr>
                </thead>
                <tbody>
                  {emSoftware?.map((vo: emSoftware, index: number) => (
                    <tr key={index}>
                      <td>{vo.task}</td>
                      <td>{vo.softwarePackage}</td>
                      <td>{vo.version}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <br />
          </>
        )}
        {imageProcessing && (
          <>
            <div className="rows_table_item">
              <table border={1} cellPadding={4} cellSpacing={1}>
                <tbody>
                  <tr className="global_tr_bg">
                    <th colSpan={5}>Image Processing</th>
                  </tr>
                  <tr>
                    <th>CTF Correction Type</th>
                    <th>CTF Correction Details</th>
                    <th>Number of Particles Selected</th>
                    <th>Particle Selection Details</th>
                  </tr>
                  <tr>
                    <td>{imageProcessing?.ctfCorrectionType}</td>
                    <td>{imageProcessing?.ctfCorrectionDetails}</td>
                    <td>{imageProcessing?.numberOfParticlesSelected}</td>
                    <td>{imageProcessing?.particleSelectionDetails}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
          </>
        )}
      </Col>
    </Row>
  );
};
