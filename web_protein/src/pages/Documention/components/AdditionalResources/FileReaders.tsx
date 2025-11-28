export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Additional Resources</h5>
        <h1>File Readers</h1>
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
                  <a
                    href="https://github.com/Pranavkhade/PACKMAN"
                    target="_blank"
                  >
                    PACKMAN-Molecule
                  </a>
                </td>
                <td>
                  File reader to read, write, and manipulate molecular
                  structures.
                </td>
              </tr>
              <tr>
                <td>
                  <a href="http://www.biojava.org" target="_blank">
                    BioJava
                  </a>
                </td>
                <td>
                  Open source library that provides a PDB and PDBx/mmCIF file
                  parser.
                </td>
              </tr>
              <tr>
                <td>
                  <a href="http://www.biopython.org" target="_blank">
                    BioPython
                  </a>
                </td>
                <td>
                  Open source library that provides a PDB and PDBx/mmCIF file
                  parser.
                </td>
              </tr>
              <tr>
                <td>
                  <a href="http://mmcif.rcsb.org/" target="_blank">
                    PDBx/mmCIF
                  </a>
                </td>
                <td>List of PDBx/mmCIF file format related resources.</td>
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
        <div>Last updated: 2/23/2023</div>
      </div>
    </div>
  );
};
