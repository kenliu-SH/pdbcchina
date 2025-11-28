import { formatSubscriptsWithRemainder } from '@/utils/utils';
import { Row, Col } from 'antd';
import dayjs from 'dayjs';

interface crystalizationExperiments {
  details: string;
  id: string;
  method: string;
  pH: string;
  temperature: string;
}
interface crystalProperties {
  matthewsCoefficient: number;
  solventContent: number;
}
interface diffractionExperiment {
  collectionDate: string;
  crystalID: string;
  dataCollectionTemperature: number;
  details: string;
  detector: string;
  detectorType: string;
  id: string;
  monochromator: string;
  protocol: string;
  scatteringType: string;
}
interface radiationSource {
  id: string;
  beamline: string;
  source: string;
  synchrotronSite: string;
  type: string;
  wavelengthList: string;
}
interface overall {
  BIsoFromWilsonPlot: number;
  CcHalf: number;
  RMergeIObs: number;
  id: string;
  netIOverSigmaI: number;
  numberReflectionsAll: number;
  numberReflectionsObs: number;
  observedCriterionSigmaF: number;
  observedCriterionSigmaI: number;
  percentPossibleObs: number;
  redundancy: number;
  resolutionHigh: number;
  resolutionLow: number;
  rpimIAll: number;
  rrimIAll: number;
  RSymIObs: number;
}
interface highestResolutionShell {
  CcHalf: number;
  RMergeIObs: number;
  id: string;
  meanIOverSigmaObs: number;
  numberUniqueReflectionsAll: number;
  percentPossibleAll: number;
  percentPossibleObs: number;
  redundancy: number;
  resolutionHigh: number;
  resolutionLow: number;
  rpimIAll: number;
  rrimIAll: number;
  RSymIObs: number;
}
interface statistics {
  RFactorObs: number;
  RFree: number;
  RWork: number;
  crossValidationmethod: string;
  cutOffSigmaF: number;
  diffractionID: string;
  meanIsotropicB: number;
  numberReflectionsObs: number;
  numberReflectionsRFree: number;
  percentReflectionsObs: number;
  resolutionHigh: number;
  resolutionLow: number;
  startingModel: string;
  structureSolutionMethod: string;
  RFreeSelectionDetails: string;
}
interface rmsDeviations {
  key: string;
  refinementRestraintDeviation: number;
}
interface software {
  softwareName: string;
  purpose: string;
}
interface solutionScatteringDataAcquistion {
  'P(R)ProteinLength': string;
  'R(XS-1)MeanCrossSectionalRadii': number;
  'R(XS-1)SigmaMeanCrossSectionalRadii': number;
  'R(XS-2)MeanCrossSectionalRadii': any;
  'R(XS-2)SigmaMeanCrossSectionalRadii': any;
  beamlineType: any;
  dataReductionSoftware: string;
  detectorManufacturerDetails: any;
  detectorType: string;
  guinerMeanRadiusOfGyration: number;
  id: string;
  numerOfTimeFramesUsed: number;
  pH: any;
  proteinConcentrationRange: string;
  radiationNeutronSource: string;
  sampleBuffer: string;
  scatteringType: string;
  sigmaMeanRadiusOfGyration: number;
  synchrotron: string;
  temperature: number;
}
interface solutionScatteringDataAnalysisAndModelFitting {
  bestRepresentativeConformer: any;
  conformersNumberCalculated: any;
  conformersNumberSubmitted: number;
  conformersSelectionCriteria: any;
  method: string;
  otherDetails: string;
  software: string;
  softwareAuthors: string;
  startingModel: string;
}

export default ({ data }: any) => {
  const {
    crystalizationExperiments,
    crystalProperties,
    unitCell,
    spaceGroup,
    diffractionExperiment,
    radiationSource,
    overall,
    highestResolutionShell,
    statistics,
    temperatureFactorModeling,
    rmsDeviations,
    nonHydrogenAtomsRefinement,
    software,
    solutionScatteringDataAcquistion,
    solutionScatteringDataAnalysisAndModelFitting,
  } = data;
  return (
    <Row gutter={[0, 16]}>
      {((crystalizationExperiments &&
        crystalizationExperiments?.length !== 0) ||
        (crystalProperties && crystalProperties?.length !== 0)) && (
        <Col span={24}>
          <h3>Crystallization</h3>
          {crystalizationExperiments &&
            crystalizationExperiments?.length !== 0 && (
              <>
                <div className="rows_table_item">
                  <table border={1} cellPadding={4} cellSpacing={1}>
                    <tbody>
                      <tr className="global_tr_bg">
                        <th colSpan={5}>Crystalization Experiments</th>
                      </tr>
                      <tr>
                        <th>ID</th>
                        <th>Method</th>
                        <th>pH</th>
                        <th>Temperature</th>
                        <th>Details</th>
                      </tr>
                      {crystalizationExperiments?.map(
                        (vo: crystalizationExperiments, index: any) => (
                          <tr key={index}>
                            <td>{vo.id}</td>
                            <td>{vo.method}</td>
                            <td>{vo.pH}</td>
                            <td>{vo.temperature}</td>
                            <td style={{ width: '65%' }}>{vo.details}</td>
                          </tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>
                <br />
              </>
            )}
          {crystalProperties && crystalProperties?.length !== 0 && (
            <div className="rows_table_item">
              <table border={1} cellPadding={4} cellSpacing={1}>
                <tbody>
                  <tr className="global_tr_bg">
                    <th colSpan={2}>Crystal Properties</th>
                  </tr>
                  <tr>
                    <th>Matthews coefficient</th>
                    <th>Solvent content</th>
                  </tr>
                  {crystalProperties?.map(
                    (vo: crystalProperties, index: number) => (
                      <tr key={index}>
                        <td>{vo.matthewsCoefficient}</td>
                        <td>{vo.solventContent}</td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          )}
        </Col>
      )}
      {((unitCell && unitCell?.length !== 0) || spaceGroup) && (
        <Col span={24}>
          <h3>Crystal Data</h3>
          <Row gutter={16}>
            {unitCell && unitCell?.length !== 0 && (
              <Col span={12}>
                <div className="rows_table_item">
                  <table border={1} cellPadding={4} cellSpacing={1}>
                    <thead>
                      <tr className="global_tr_bg">
                        <th colSpan={2}>Unit Cell</th>
                      </tr>
                      <tr>
                        <th>Length ( Å )</th>
                        <th>Angle ( ˚ )</th>
                      </tr>
                    </thead>
                    <tbody>
                      {unitCell?.map(({ length, angle }: any, key: number) => {
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
                      })}
                    </tbody>
                  </table>
                </div>
              </Col>
            )}
            {spaceGroup && (
              <Col span={12}>
                <div className="rows_table_item">
                  <table border={1} cellPadding={4} cellSpacing={1}>
                    <tbody>
                      <tr className="global_tr_bg">
                        <th colSpan={2}>Symmetry</th>
                      </tr>
                      <tr>
                        <th>Space Group</th>
                        <td>
                          {spaceGroup && (
                            <span
                              dangerouslySetInnerHTML={{
                                __html: formatSubscriptsWithRemainder(
                                  spaceGroup,
                                  10,
                                ),
                              }}
                            />
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            )}
          </Row>
        </Col>
      )}
      {((diffractionExperiment && diffractionExperiment?.length !== 0) ||
        (radiationSource && radiationSource?.length !== 0)) && (
        <Col span={24}>
          <h3>Diffraction</h3>
          {diffractionExperiment && diffractionExperiment?.length !== 0 && (
            <>
              <div className="rows_table_item">
                <table border={1} cellPadding={4} cellSpacing={1}>
                  <thead>
                    <tr className="global_tr_bg">
                      <th colSpan={15}>Diffraction Experiment</th>
                    </tr>
                    <tr>
                      <th>ID #</th>
                      <th>Crystal ID</th>
                      <th>Scattering Type</th>
                      <th>Data Collection Temperature</th>
                      <th>Detector</th>
                      <th>Detector Type</th>
                      <th>Details</th>
                      <th>Collection Date</th>
                      <th>Monochromator</th>
                      <th>Protocol</th>
                    </tr>
                  </thead>
                  <tbody>
                    {diffractionExperiment?.map(
                      (vo: diffractionExperiment, index: number) => (
                        <tr key={index}>
                          <td>{vo.id}</td>
                          <td>{vo.crystalID}</td>
                          <td>{vo.scatteringType}</td>
                          <td>{vo.dataCollectionTemperature}</td>
                          <td>{vo.detector}</td>
                          <td>{vo.detectorType}</td>
                          <td>{vo.details}</td>
                          <td>
                            {vo.collectionDate &&
                              dayjs(vo.collectionDate).format('YYYY-MM-DD')}
                          </td>
                          <td>{vo.monochromator}</td>
                          <td>{vo.protocol}</td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
              <br />
            </>
          )}
          {radiationSource && radiationSource?.length !== 0 && (
            <div className="rows_table_item">
              <table border={1} cellPadding={4} cellSpacing={1}>
                <thead>
                  <tr className="global_tr_bg">
                    <th colSpan={6}>Radiation Source</th>
                  </tr>
                  <tr>
                    <th>ID #</th>
                    <th>Source</th>
                    <th>Type</th>
                    <th>Wavelength List</th>
                    <th>Synchrotron Site</th>
                    <th>Beamline</th>
                  </tr>
                </thead>
                <tbody>
                  {radiationSource?.map(
                    (vo: radiationSource, index: number) => (
                      <tr key={index}>
                        <td>{vo.id}</td>
                        <td>{vo.source}</td>
                        <td>{vo.type}</td>
                        <td>{vo.wavelengthList}</td>
                        <td>{vo.synchrotronSite}</td>
                        <td>{vo.beamline}</td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          )}
        </Col>
      )}
      {((overall && overall?.length !== 0) ||
        (highestResolutionShell && highestResolutionShell?.length !== 0)) && (
        <Col span={24}>
          <h3>Data Collection</h3>
          {overall && overall?.length !== 0 && (
            <>
              <div className="rows_table_item">
                <table border={1} cellPadding={4} cellSpacing={1}>
                  <thead>
                    <tr className="global_tr_bg">
                      <th colSpan={20}>Overall</th>
                    </tr>
                    <tr>
                      <th>ID #</th>
                      <th>Resolution (High)</th>
                      <th>Resolution (Low)</th>
                      <th>Percent Possible (Observed)</th>
                      <th>R Merge I (Observed)</th>
                      <th>R Sym I (Observed)</th>
                      <th>Rrim I (All)</th>
                      <th>Rpim I (All)</th>
                      <th>Net I Over Average Sigma (I)</th>
                      <th>Redundancy</th>
                      <th>Number Reflections (All)</th>
                      <th>Number Reflections (Observed)</th>
                      <th>Observed Criterion Sigma (F)</th>
                      <th>Observed Criterion Sigma (I)</th>
                      <th>B (Isotropic) From Wilson Plot</th>
                    </tr>
                  </thead>
                  <tbody>
                    {overall?.map((vo: overall, index: number) => (
                      <tr key={index}>
                        <td>{vo.id}</td>
                        <td>{vo.resolutionHigh}</td>
                        <td>{vo.resolutionLow}</td>
                        <td>{vo.percentPossibleObs}</td>
                        <td>{vo.RMergeIObs}</td>
                        <td>{vo.RSymIObs}</td>
                        <td>{vo.rrimIAll}</td>
                        <td>{vo.rpimIAll}</td>
                        <td>{vo.netIOverSigmaI}</td>
                        <td>{vo.redundancy}</td>
                        <td>{vo.numberReflectionsAll}</td>
                        <td>{vo.numberReflectionsObs}</td>
                        <td>{vo.observedCriterionSigmaF}</td>
                        <td>{vo.observedCriterionSigmaI}</td>
                        <td>{vo.BIsoFromWilsonPlot}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <br />
            </>
          )}
          {highestResolutionShell && highestResolutionShell?.length !== 0 && (
            <div className="rows_table_item">
              <table border={1} cellPadding={4} cellSpacing={1}>
                <thead>
                  <tr className="global_tr_bg">
                    <th colSpan={20}>Highest Resolution Shell</th>
                  </tr>
                  <tr>
                    <th>ID #</th>
                    <th>Resolution (High)</th>
                    <th>Resolution (Low)</th>
                    <th>Percent Possible (All)</th>
                    <th>Percent Possible (Observed)</th>
                    <th>R Merge I (Observed)</th>
                    <th>R-Sym I (Observed)</th>
                    <th>Rrim I (All)</th>
                    <th>Rpim I (All)</th>
                    <th>CC (Half)</th>
                    <th>Mean I Over Sigma (Observed)</th>
                    <th>Redundancy</th>
                    <th>Number Unique Reflections (All)</th>
                  </tr>
                </thead>
                <tbody>
                  {highestResolutionShell?.map(
                    (vo: highestResolutionShell, index: number) => (
                      <tr key={index}>
                        <td>{vo.id}</td>
                        <td>{vo.resolutionHigh}</td>
                        <td>{vo.resolutionLow}</td>
                        <td>{vo.percentPossibleAll}</td>
                        <td>{vo.percentPossibleObs}</td>
                        <td>{vo.RMergeIObs}</td>
                        <td>{vo.RSymIObs}</td>
                        <td>{vo.rrimIAll}</td>
                        <td>{vo.rpimIAll}</td>
                        <td>{vo.CcHalf}</td>
                        <td>{vo.meanIOverSigmaObs}</td>
                        <td>{vo.redundancy}</td>
                        <td>{vo.numberUniqueReflectionsAll}</td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          )}
        </Col>
      )}
      {((statistics && statistics?.length !== 0) ||
        (rmsDeviations && rmsDeviations?.length !== 0) ||
        nonHydrogenAtomsRefinement ||
        temperatureFactorModeling) && (
        <Col span={24}>
          <h3>Refinement</h3>
          <Row gutter={[16, 16]}>
            {statistics && statistics?.length !== 0 && (
              <Col span={24}>
                <div className="rows_table_item">
                  <table border={1} cellPadding={4} cellSpacing={1}>
                    <thead>
                      <tr className="global_tr_bg">
                        <th colSpan={20}>Statistics</th>
                      </tr>
                      <tr>
                        <th>Diffraction ID</th>
                        <th>Structure Solution Method</th>
                        <th>Cross Validation method</th>
                        <th>Starting model</th>
                        <th>Resolution (High)</th>
                        <th>Resolution (Low)</th>
                        <th>Number Reflections (Observed)</th>
                        <th>Number Reflections (R-Free)</th>
                        <th>Percent Reflections (Observed)</th>
                        <th>R-Factor (Observed)</th>
                        <th>R-Work</th>
                        <th>R-Free</th>
                        <th>R-Free Selection Details</th>
                        <th>Mean Isotropic B</th>
                      </tr>
                    </thead>
                    <tbody>
                      {statistics?.map((vo: statistics, index: number) => (
                        <tr key={index}>
                          <td>{vo.diffractionID}</td>
                          <td>{vo.structureSolutionMethod}</td>
                          <td>{vo.crossValidationmethod}</td>
                          <td>{vo.startingModel}</td>
                          <td>{vo.resolutionHigh}</td>
                          <td>{vo.resolutionLow}</td>
                          <td>{vo.numberReflectionsObs}</td>
                          <td>{vo.numberReflectionsRFree}</td>
                          <td>{vo.percentReflectionsObs}</td>
                          <td>{vo.RFactorObs}</td>
                          <td>{vo.RWork}</td>
                          <td>{vo.RFree}</td>
                          <td>{vo.RFreeSelectionDetails}</td>
                          <td>{vo.meanIsotropicB}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Col>
            )}
            {!temperatureFactorModeling?.anisotropicB11 &&
            !temperatureFactorModeling?.anisotropicB12 &&
            !temperatureFactorModeling?.anisotropicB13 &&
            !temperatureFactorModeling?.anisotropicB22 &&
            !temperatureFactorModeling?.anisotropicB23 &&
            !temperatureFactorModeling?.anisotropicB33 ? null : (
              <Col span={24}>
                <div className="rows_table_item">
                  <table border={1} cellPadding={4} cellSpacing={1}>
                    <thead>
                      <tr className="global_tr_bg">
                        <th colSpan={7}>Temperature Factor Modeling</th>
                      </tr>
                      <tr>
                        {temperatureFactorModeling?.anisotropicB11 ? (
                          <th>Anisotropic B[1][1]</th>
                        ) : null}
                        {temperatureFactorModeling?.anisotropicB12 ? (
                          <th>Anisotropic B[1][2]</th>
                        ) : null}
                        {temperatureFactorModeling?.anisotropicB13 ? (
                          <th>Anisotropic B[1][3]</th>
                        ) : null}
                        {temperatureFactorModeling?.anisotropicB22 ? (
                          <th>Anisotropic B[2][2]</th>
                        ) : null}
                        {temperatureFactorModeling?.anisotropicB23 ? (
                          <th>Anisotropic B[2][3]</th>
                        ) : null}
                        {temperatureFactorModeling?.anisotropicB33 ? (
                          <th>Anisotropic B[3][3]</th>
                        ) : null}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {temperatureFactorModeling?.anisotropicB11 ? (
                          <td>{temperatureFactorModeling?.anisotropicB11}</td>
                        ) : null}
                        {temperatureFactorModeling?.anisotropicB12 ? (
                          <td>{temperatureFactorModeling?.anisotropicB12}</td>
                        ) : null}
                        {temperatureFactorModeling?.anisotropicB13 ? (
                          <td>{temperatureFactorModeling?.anisotropicB13}</td>
                        ) : null}
                        {temperatureFactorModeling?.anisotropicB22 ? (
                          <td>{temperatureFactorModeling?.anisotropicB22}</td>
                        ) : null}
                        {temperatureFactorModeling?.anisotropicB23 ? (
                          <td>{temperatureFactorModeling?.anisotropicB23}</td>
                        ) : null}
                        {temperatureFactorModeling?.anisotropicB33 ? (
                          <td>{temperatureFactorModeling?.anisotropicB33}</td>
                        ) : null}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            )}
            {rmsDeviations && rmsDeviations?.length !== 0 && (
              <Col xxl={8} sm={12}>
                <div className="rows_table_item">
                  <table border={1} cellPadding={4} cellSpacing={1}>
                    <tbody>
                      <tr className="global_tr_bg">
                        <th colSpan={2}>RMS Deviations</th>
                      </tr>
                      <tr>
                        <th>Key</th>
                        <th>Refinement Restraint Deviation</th>
                      </tr>
                      {rmsDeviations?.map(
                        (vo: rmsDeviations, index: number) => (
                          <tr key={index}>
                            <td>{vo.key}</td>
                            <td>{vo.refinementRestraintDeviation}</td>
                          </tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>
              </Col>
            )}
            {nonHydrogenAtomsRefinement && (
              <Col xxl={8} sm={12}>
                <div className="rows_table_item">
                  <table border={1} cellPadding={4} cellSpacing={1}>
                    <tbody>
                      <tr className="global_tr_bg">
                        <th colSpan={2}>
                          Non-Hydrogen Atoms Used in Refinement
                        </th>
                      </tr>
                      <tr>
                        <th>Non-Hydrogen Atoms</th>
                        <th>Number</th>
                      </tr>
                      <tr>
                        <td>Protein Atoms</td>
                        <td>{nonHydrogenAtomsRefinement?.proteinAtoms}</td>
                      </tr>
                      <tr>
                        <td>Nucleic Acid Atoms</td>
                        <td>{nonHydrogenAtomsRefinement?.nucleicAcidAtoms}</td>
                      </tr>
                      <tr>
                        <td>Solvent Atoms</td>
                        <td>{nonHydrogenAtomsRefinement?.solventAtoms}</td>
                      </tr>
                      <tr>
                        <td>Heterogen Atoms</td>
                        <td>{nonHydrogenAtomsRefinement?.heterogenAtoms}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            )}
          </Row>
        </Col>
      )}
      {software && software.length !== 0 && (
        <Col span={24}>
          <h3>Software</h3>
          <Row>
            <Col xxl={12} sm={24}>
              <div className="rows_table_item">
                <table border={1} cellPadding={4} cellSpacing={1}>
                  <tbody>
                    <tr className="global_tr_bg">
                      <th colSpan={2}>Software</th>
                    </tr>
                    <tr>
                      <th>Software Name</th>
                      <th>Purpose</th>
                    </tr>
                    {software?.map((vo: software, index: number) => (
                      <tr key={index}>
                        <td>{vo.softwareName}</td>
                        <td>{vo.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <br />
            </Col>
          </Row>
        </Col>
      )}
      {solutionScatteringDataAcquistion &&
        solutionScatteringDataAcquistion.length !== 0 && (
          <Col span={24}>
            <div className="rows_table_item">
              <table border={1} cellPadding={4} cellSpacing={1}>
                <thead>
                  <tr className="global_tr_bg">
                    <th>Solution Scattering Data Acquistion</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <th key={index}>{vo.id}</th>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Scattering Type</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo.scatteringType}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Radiation/Neutron Source</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['radiationNeutronSource']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Synchrotron</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['synchrotron']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Beamline Type</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['beamlineType']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Detector Type</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['detectorType']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Detector Manufacturer Details</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['detectorManufacturerDetails']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Temperature (K)</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['temperature']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>pH</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['pH']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Numer of Time Frames Used</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['numerOfTimeFramesUsed']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Protein Concentration Range (mg/mL)</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['proteinConcentrationRange']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Sample Buffer</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['sampleBuffer']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Data Reduction Software</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['dataReductionSoftware']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Guiner Mean Radius Of Gyration (nm)</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['guinerMeanRadiusOfGyration']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>Sigma Mean Radius Of Gyration</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['sigmaMeanRadiusOfGyration']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>R(XS-1) Mean Cross Sectional Radii (nm)</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['R(XS-1)MeanCrossSectionalRadii']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>R(XS-1) Sigma Mean Cross Sectional Radii</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['R(XS-1)SigmaMeanCrossSectionalRadii']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>R(XS-2) Mean Cross Sectional Radii (nm)</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['R(XS-2)MeanCrossSectionalRadii']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>R(XS-2) Sigma Mean Cross Sectional Radii</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['R(XS-2)SigmaMeanCrossSectionalRadii']}
                        </td>
                      ),
                    )}
                  </tr>
                  <tr>
                    <th>P(R) Protein Length (nm)</th>
                    {solutionScatteringDataAcquistion?.map(
                      (vo: solutionScatteringDataAcquistion, index: number) => (
                        <td key={index} style={{ width: '25%' }}>
                          {vo['P(R)ProteinLength']}
                        </td>
                      ),
                    )}
                  </tr>
                </thead>
              </table>
            </div>
          </Col>
        )}
      {solutionScatteringDataAnalysisAndModelFitting &&
        solutionScatteringDataAnalysisAndModelFitting.length !== 0 && (
          <Col span={24}>
            <div className="rows_table_item">
              <table border={1} cellPadding={4} cellSpacing={1}>
                <thead>
                  <tr className="global_tr_bg">
                    <th colSpan={20}>
                      Solution Scattering Data Analysis and Model Fitting
                    </th>
                  </tr>
                  <tr>
                    <th>Method</th>
                    <th>Software</th>
                    <th>Software Authors</th>
                    <th>Starting Model</th>
                    <th>Conformers, Number Calculated</th>
                    <th>Conformers, Number Submitted</th>
                    <th>Conformers, Selection Criteria</th>
                    <th>Best Representative Conformer</th>
                    <th>Other Details</th>
                  </tr>
                </thead>
                <tbody>
                  {solutionScatteringDataAnalysisAndModelFitting?.map(
                    (
                      vo: solutionScatteringDataAnalysisAndModelFitting,
                      index: number,
                    ) => (
                      <tr key={index}>
                        <td>{vo.method}</td>
                        <td>{vo.software}</td>
                        <td>{vo.softwareAuthors}</td>
                        <td>{vo.startingModel}</td>
                        <td>{vo.conformersNumberCalculated}</td>
                        <td>{vo.conformersNumberSubmitted}</td>
                        <td>{vo.conformersSelectionCriteria}</td>
                        <td>{vo.bestRepresentativeConformer}</td>
                        <td style={{ width: '28%' }}>{vo.otherDetails}</td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </Col>
        )}
    </Row>
  );
};
