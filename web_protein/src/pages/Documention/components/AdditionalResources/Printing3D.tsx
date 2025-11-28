export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Additional Resources</h5>
        <h1>3D Printing</h1>
        <div>
          <p>
            <span>
              Access additional resources of interest, submitted by community
              members.
            </span>
          </p>
          <table className="content-resources" border={1}>
            <tbody>
              <tr>
                <td>
                  <a href="http://www.cgl.ucsf.edu/chimera/" target="_blank">
                    Chimera
                  </a>
                </td>
                <td>
                  UCSF Chimera is a highly extensible program for interactive
                  visualization and analysis of molecular structures and related
                  data that can produce .STL files.
                </td>
              </tr>
              <tr>
                <td>
                  <a href="http://www.molecmodels.co.uk/" target="_blank">
                    Molecular Models
                  </a>
                </td>
                <td>
                  Molecular Models offers a complete solution to UK Universities
                  for printing biological macromolecules.
                </td>
              </tr>
              <tr>
                <td>
                  <a href="http://3dprint.nih.gov/create" target="_blank">
                    NIH 3D Print Exchange
                  </a>
                </td>
                <td>
                  The NIH 3D Print Exchange hosts web-based tools that
                  automatically generate 3D model files from 3D molecular and
                  medical imaging data.
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="http://pdb101.rcsb.org/learn/3d-printing/pdb-structures-and-3d-printing"
                    target="_blank"
                  >
                    PDB-101 Overview for 3D Printing
                  </a>
                </td>
                <td>Printing guide and curated 3D model files.</td>
              </tr>
            </tbody>
          </table>
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
        <div>Last updated: 2/15/2023</div>
      </div>
    </div>
  );
};
