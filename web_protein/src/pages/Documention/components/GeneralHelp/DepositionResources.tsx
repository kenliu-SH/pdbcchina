export default () => {
  return (
    <>
      <div className="col-lg-9 col-md-8 col-sm-12 content-item">
        <h5 className="menu-path">General Help</h5>
        <h1>Deposition Resources</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#deposit-options">Deposit Options</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#prepare-data">Prepare Data</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#deposition-preparation-tools">
              Deposition Preparation Tools
            </a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □ <a href="#data-extraction">Data Extraction</a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □ <a href="#data-format-conversion">Data Format Conversion</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#validate-data">Validate Data</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#validation-services">Validation Services</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#deposit-data">Deposit Data</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#pdb-dev">PDB-Dev</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#deposition-help">Deposition Help</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#questions-about-your-deposition">
              Questions about your deposition?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <a className="content-anchor" id="deposit-options"></a>
          <h2>Deposit Options</h2>
          <a className="content-anchor" id="prepare-data"></a>
          <h3>Prepare Data</h3>
          <a className="content-anchor" id="deposition-preparation-tools"></a>
          <h4>Deposition Preparation Tools</h4>
          <a className="content-anchor" id="data-extraction"></a>
          <h5>Data Extraction</h5>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a href="http://pdb-extract.wwpdb.org/">pdb_extract</a>: Extract
              and harvest data in PDBx/mmCIF format from structure determination
              programs
            </li>
            <li>
              <a href="http://sf-tool.wwpdb.org/"> SF-Tool</a>: Convert
              structure factor files among various formats
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="data-format-conversion"></a>
          <h5>Data Format Conversion</h5>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a href="http://sw-tools.rcsb.org/apps/PDBML2CIF/index.html">
                PDBML2CIF
              </a>
              : Convert PDBML-format data into PDBx/mmCIF-format
            </li>
            <li>
              <a href="http://chem.rutgers.edu/~lawson/pointsuite0.7/html/index.html">
                PointSuite
              </a>
              : Generate symmetry records for macromolecular assemblies with
              point and helical symmetries
            </li>
            <li>
              <a href="http://sw-tools.rcsb.org/apps/MAXIT/index.html">MAXIT</a>
              : Translate data between file formats and more
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="validate-data"></a>
          <h3>Validate Data</h3>
          <a className="content-anchor" id="validation-services"></a>
          <h4>Validation Services</h4>
          <p>
            Validation reports contain an assessment of the quality of a
            structure and highlight specific concerns by considering the
            coordinates of the model, the experimental data and the fit between
            the two. Easily interpretable summary information that compares the
            quality of a model with that of other models in the archive will
            help users of PDB data to critically assess archived entries and to
            select the most appropriate structural models for their needs. These
            reports are developed using the recommendations of the
            <a href="http://www.wwpdb.org/task/validation-task-forces.php">
              wwPDB Validation Task Forces
            </a>
            .
          </p>
          <img
            style={{ width: '70%' }}
            className="img-responsive"
            src="https://cdn.rcsb.org/rcsb-pdb/content/600756cec5ab5836659ab2e5/wwpdb-validationreports.png"
          />
          <div></div>
          <p>
            Reports for released entries are available from Structure Summary
            pages.
          </p>
          <p>
            Validation reports for manuscript reviewers are created during
            annotation of deposited structures.
          </p>
          <p>
            Information and&nbsp;
            <a href="http://www.wwpdb.org/validation/validation-reports.php">
              example Validation Reports (at wwpdb.org)
            </a>
            .
          </p>
          <p>
            <a href="https://validate-rcsb.wwpdb.org"> Check</a> your X - ray,
            NMR, or EM structures before depositing(standalone server).
          </p>
          <a className="content-anchor" id="deposit-data"></a>
          <h3>Deposit Data</h3>
          <div style={{ width: '30%' }}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a href="http://deposit.wwpdb.org/deposition/">
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/600756cec5ab5836659ab2e5/onedep-logo.png"
                        alt="Deposit 3D macromolecular structure data to the PDB"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td
                    className="content-img-caption"
                    style={{ width: '720px' }}
                  >
                    Deposit 3D macromolecular structure data to the PDB
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <hr />
          <a className="content-anchor" id="pdb-dev"></a>
          <h2>PDB-Dev</h2>
          <p>
            Have non-atomic coordinates, multi-scale structures obtained through
            integrative/hybrid (I/H) methods? Deposit at
            <a href="https://pdb-dev.wwpdb.org/" target="_blank" rel="noopener">
              PDB-Dev
            </a>
            which is a prototype deposition and archiving system for structural
            models obtained through integrative/hybrid (I/H) methods.
          </p>
          <hr />
          <a className="content-anchor" id="deposition-help"></a>
          <h2>Deposition Help</h2>
          <a
            className="content-anchor"
            id="questions-about-your-deposition"
          ></a>
          <h4>Questions about your deposition?</h4>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a href="http://www.wwpdb.org/dna_faq.html"> Deposit FAQ</a>
            </li>
            <li>
              <a href="http://www.wwpdb.org/dna_tutorials.html"> Tutorials</a>
            </li>
            <li>
              <a href="http://www.wwpdb.org/documentation/policy">
                wwPDB Annotation Policies
              </a>
            </li>
            <li>
              <a href="http://www.wwpdb.org/documentation/procedure">
                wwPDB Processing Procedures
              </a>
            </li>
          </ul>
          <h2>Documentation</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a href="http://mmcif.wwpdb.org/">
                PDBx/mmCIF Dictionary Resources
              </a>
            </li>
            <li>
              <a href="http://wwpdb.org/data/ccd">
                Chemical Component Dictionary
              </a>
            </li>
            <li>
              <a href="http://wwpdb.org/data/bird">
                Biologically Interesting Molecule Reference Dictionary (BIRD)
              </a>
            </li>
            <li>
              <a href="http://www.wwpdb.org/documentation/format33/v3.3.html">
                PDB Format Guide
              </a>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
      <br />
      <hr />
      <div className="item-info">
        <div>
          Please report any encountered broken links to
          <a href="mailto:info@rcsb.org">info@rcsb.org</a>
        </div>
        <div>Last updated: 3/13/2023</div>
      </div>
    </>
  );
};
