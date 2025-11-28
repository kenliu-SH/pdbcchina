import { orderBy } from 'lodash';

interface nmrSoftware {
  author: string;
  classification: string;
  ordinal: number;
  softwareName: string;
  version: string;
}
interface nmrExperiment {
  experiment: string;
  ionicStrength: any;
  pH: string;
  pressure: any;
  sampleContents: string;
  spectrometer: any;
  temperature: string;
  type: string;
  solvent: string;
}
interface nmrSpectrometerInformation {
  fieldStrength: number;
  manufacturer: string;
  model: string;
  spectrometer: string;
}

export default ({ data }: any) => {
  const {
    nmrExperiment,
    nmrSpectrometerInformation,
    nmrRefinement,
    nmrEnsembleInformation,
    additionalNMRExperimentalInformation,
    nmrSoftware,
  } = data;
  return (
    <div>
      {nmrExperiment && nmrExperiment.length !== 0 && (
        <>
          <div className="rows_table_item">
            <table border={1} cellPadding={4} cellSpacing={1}>
              <tbody>
                <tr className="global_tr_bg">
                  <th colSpan={9}>NMR Experiment</th>
                </tr>
                <tr>
                  <th>Experiment</th>
                  <th>Type</th>
                  <th>Sample Contents</th>
                  <th>Solvent</th>
                  <th>Ionic Strength</th>
                  <th>pH</th>
                  <th>Pressure</th>
                  <th>Temperature (K)</th>
                  <th>Spectrometer</th>
                </tr>
                {orderBy(nmrExperiment, (vo: any) => {
                  return Number(vo.experiment);
                })?.map((vo: nmrExperiment, index: number) => (
                  <tr key={index}>
                    <td>{vo.experiment}</td>
                    <td>{vo.type}</td>
                    <td style={{ width: '28%' }}>{vo.sampleContents}</td>
                    <td>{vo.solvent}</td>
                    <td>{vo.ionicStrength}</td>
                    <td style={{ width: '70px' }}>{vo.pH}</td>
                    <td>{vo.pressure}</td>
                    <td>{vo.temperature}</td>
                    <td>{vo.spectrometer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
        </>
      )}
      {nmrSpectrometerInformation &&
        nmrSpectrometerInformation.length !== 0 && (
          <>
            <div className="rows_table_item">
              <table border={1} cellPadding={4} cellSpacing={1}>
                <tbody>
                  <tr className="global_tr_bg">
                    <th colSpan={4}>NMR Spectrometer Information</th>
                  </tr>
                  <tr>
                    <th>Spectrometer</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                    <th>Field Strength</th>
                  </tr>
                  {nmrSpectrometerInformation?.map(
                    (vo: nmrSpectrometerInformation, index: number) => (
                      <tr key={index}>
                        <td>{vo.spectrometer}</td>
                        <td>{vo.manufacturer}</td>
                        <td>{vo.model}</td>
                        <td>{vo.fieldStrength}</td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
            <br />
          </>
        )}
      {nmrRefinement && JSON.stringify(nmrRefinement) !== '{}' && (
        <>
          <div className="rows_table_item">
            <table border={1} cellPadding={4} cellSpacing={1}>
              <tbody>
                <tr className="global_tr_bg">
                  <th colSpan={3}>NMR Refinement</th>
                </tr>
                <tr>
                  <th>Method</th>
                  <th>Details</th>
                  <th>Software</th>
                </tr>
                <tr>
                  <td>{nmrRefinement?.method}</td>
                  <td style={{ width: '65%' }}>{nmrRefinement?.details}</td>
                  <td>{nmrRefinement?.software}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
        </>
      )}
      {nmrEnsembleInformation && (
        <>
          <div className="rows_table_item">
            <table border={1} cellPadding={4} cellSpacing={1}>
              <tbody>
                <tr className="global_tr_bg">
                  <th colSpan={2}>NMR Ensemble Information</th>
                </tr>
                <tr>
                  <th>Conformer Selection Criteria</th>
                  <td>{nmrEnsembleInformation?.conformerSelectionCriteria}</td>
                </tr>
                <tr>
                  <th>Conformers Calculated Total Number</th>
                  <td>
                    {nmrEnsembleInformation?.conformersCalculatedTotalNumber}
                  </td>
                </tr>
                <tr>
                  <th>Conformers Submitted Total Number</th>
                  <td>
                    {nmrEnsembleInformation?.conformersSubmittedTotalNumber}
                  </td>
                </tr>
                <tr>
                  <th>Representative Model</th>
                  <td>{nmrEnsembleInformation?.representativeModel}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
        </>
      )}
      {additionalNMRExperimentalInformation &&
        JSON.stringify(additionalNMRExperimentalInformation) !== '{}' && (
          <>
            <div className="rows_table_item">
              <table border={1} cellPadding={4} cellSpacing={1}>
                <tbody>
                  <tr className="global_tr_bg">
                    <th colSpan={2}>Additional NMR Experimental Information</th>
                  </tr>
                  <tr>
                    <th style={{ width: '10%' }}>Details</th>
                    <td>{additionalNMRExperimentalInformation?.details}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
          </>
        )}
      {nmrSoftware && nmrSoftware.length !== 0 && (
        <>
          <div className="rows_table_item">
            <table border={1} cellPadding={4} cellSpacing={1}>
              <tbody>
                <tr className="global_tr_bg">
                  <th colSpan={5}>Computation: NMR Software</th>
                </tr>
                <tr>
                  <th>#</th>
                  <th>Classification</th>
                  <th>Version</th>
                  <th>Software Name</th>
                  <th>Author</th>
                </tr>
                {nmrSoftware?.map((vo: nmrSoftware, index: number) => (
                  <tr key={index}>
                    <td>{vo.ordinal}</td>
                    <td>{vo.classification}</td>
                    <td>{vo.version}</td>
                    <td>{vo.softwareName}</td>
                    <td>{vo.author}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
        </>
      )}
    </div>
  );
};
