export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Additional Resources</h5>
        <h1>Structure Validation and Quality</h1>
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
                  <a href="http://csgid.org/csgid/metal_sites/" target="_blank">
                    CheckMyMetal
                  </a>
                </td>
                <td>A service checks metal binding site and validation</td>
              </tr>
              <tr>
                <td>
                  <a href="http://molprobity.biochem.duke.edu/" target="_blank">
                    MolProbity
                  </a>
                </td>
                <td>
                  Structure validation on client-uploaded or PDB ID-specified
                  files, using all-atom contact analysis tools and updated
                  geometrical criteria for phi/psi, sidechain rotamer, and Cbeta
                  deviation
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://flipper.services.came.sbg.ac.at/cgi-bin/flipper.php"
                    target="_blank"
                  >
                    NQ-Flipper
                  </a>
                </td>
                <td>
                  NQ-Flipper recognizes unfavorable rotamers of Asn and Gln
                  residues in protein structures obtained from X-ray
                  crystallography, NMR or modelling studies.
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.ebi.ac.uk/thornton-srv/software/PROCHECK/"
                    target="_blank"
                  >
                    Procheck
                  </a>
                </td>
                <td>
                  A program that checks the stereochemical quality of a protein
                  structure
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://prosa.services.came.sbg.ac.at/prosa.php"
                    target="_blank"
                  >
                    Prosa-web
                  </a>
                </td>
                <td>
                  Quality scores of a protein are displayed in the context of
                  all known protein structures and problematic parts of a
                  structure are shown and highlighted in a 3D molecule viewer.
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.doe-mbi.ucla.edu/verify3d/ "
                    target="_blank"
                  >
                    Verify3D Structure Evaluation Server
                  </a>
                </td>
                <td>
                  Determines the compatibility of an atomic model (3D) with its
                  own amino acid sequence (1D) by assigning a structural class
                  based on its location and environment (alpha, beta, loop,
                  polar, nonpolar etc) and comparing the results to good
                  structures.
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://swift.cmbi.umcn.nl/whatif/" target="_blank">
                    WHAT IF
                  </a>
                </td>
                <td>
                  A protein structure analysis program that may be used for
                  mutant prediction, structure verification and molecular
                  graphics
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://swift.cmbi.umcn.nl/gv/whatcheck/"
                    target="_blank"
                  >
                    WHAT_CHECK
                  </a>
                </td>
                <td>
                  A system for protein structure validation derived from the
                  WHAT IF program
                </td>
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
