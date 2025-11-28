import './index.less';
import { Row, Col } from 'antd';

export default () => {
  return (
    <>
      <div>
        <h1>PDB Statistics</h1>
        <p>
          These statistics are generated using&nbsp;
          <a href="#">Web Services</a>&nbsp;and represent the current holdings
          of the archive.
        </p>
        <p>
          wwPDB hosts statistics on PDB&nbsp;
          <a href="#">Data Deposited</a>&nbsp;and&nbsp;
          <a href="#">Data Downloaded</a>
        </p>
        <div className="row">
          <Row gutter={20}>
            <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={25}>
              <div className="left">
                <h4>PDB Data Distribution</h4>
                <table className="listTable" border={2}>
                  <tbody>
                    <tr>
                      <td className="nav">
                        <a href="#">
                          by Experimental Method and Molecular Type
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Natural Source Organism</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Engineered Source Organism</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Expression System Organism</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Resolution</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Software</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by R-free</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Space Group</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Journal</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Molecular Weight (Structure)</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Molecular Weight (Entity)</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Atom Count</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Residue Count</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Structural Genomics Centers</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="left">
                <h4>PDB Data Distribution Pie Charts</h4>
                <table className="listTable" border={2}>
                  <tbody>
                    <tr>
                      <td className="nav">
                        <a href="#">scientific Name of Source Organism</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">Taxonomy</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">Polymer Entity Type</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">Refinement Resolution (A)</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">Release Date</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">Enzyme Classification Name</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">symmetry Type</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">SCOP Classification</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={25}>
              <div className="centerItem">
                <h4>Growth of Released Structures Per Year</h4>
                <table className="listTable" border={2}>
                  <tbody>
                    <tr>
                      <td className="nav">
                        <a href="#">overall</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by X-ray</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by NMR</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Electron Microscopy</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Multi-method</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Protein-only</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Protein-Nucleic Acid Complexes</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by DNA-only</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by RNA-only</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">by Assembly Symmetry</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="centerItem">
                <h4>Released PDB Structures per Year</h4>
                <table className="listTable" border={2}>
                  <tbody>
                    <tr>
                      <td className="nav">
                        <a href="#">by Methods</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={25}>
              <div className="right">
                <h4>Non-redundant Protein Sequences Statistics</h4>
                <table className="listTable" border={2}>
                  <tbody>
                    <tr>
                      <td className="nav">
                        <a href="#">
                          Number of Unique Protein Sequences withinReleased PDB
                          Structures (Annual)
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">
                          Growth in Number of Unique Protein Sequences
                          inReleased PDB Structures (Cumulative)
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">
                          UniProtKB Entries with Known 3D Structure (Annual)
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">
                          Growth in Number of UniProtKB Entries with Known3D
                          Structure (Cumulative)
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="right">
                <h4>Domain Statistics</h4>
                <table className="listTable" border={2}>
                  <tbody>
                    <tr>
                      <td className="nav">
                        <a href="#">
                          Number of Domains within Released PDB
                          Structures(Annual)
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">
                          Growth in Number of Domains in Released PDBStructures
                          (Cumulative)
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="right">
                <h4>Small Molecule Statistics</h4>
                <table className="listTable" border={2}>
                  <tbody>
                    <tr>
                      <td className="nav">
                        <a href="#">Molecular Wweight Distribution</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">
                          Growth of Released Small Molecules per Year
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="right">
                <h4>Other</h4>
                <table className="listTable" border={2}>
                  <tbody>
                    <tr>
                      <td className="nav">
                        <a href="#">Data Storage Growth</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="nav">
                        <a href="#">Citation MeSH Network Explorer</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
