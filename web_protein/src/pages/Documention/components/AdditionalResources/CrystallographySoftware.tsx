export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Additional Resources</h5>
        <h1>Crystallography Software</h1>
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
                  <a href="http://www.embl-hamburg.de/ARP/" target="_blank">
                    ARP/wARP
                  </a>
                </td>
                <td>
                  A system for the refinement of protein structures via
                  automatic updating and re-building of the model and solvent
                  structure
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="http://www.globalphasing.com/buster/"
                    target="_blank"
                  >
                    BUSTER
                  </a>
                </td>
                <td>
                  A software system containing crystallographic structure
                  refinement using Bayesian statistical methods (BUSTER), ligand
                  fitting (rhofit) and a fully automated pipeline (Pipedream) to
                  drive a structure based fragment/ligand screening pathway.
                </td>
              </tr>
              <tr>
                <td>
                  <a href="http://www.ccp4.ac.uk/" target="_blank">
                    CCP4
                  </a>
                </td>
                <td>
                  A suite of programs covering all aspects of crystallographic
                  structure determination, refinement and analysis
                </td>
              </tr>
              <tr>
                <td>
                  <a href="http://cns-online.org/v1.3/" target="_blank">
                    CNS
                  </a>
                </td>
                <td>
                  A system for structure determination from crystallographic or
                  NMR data
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www2.mrc-lmb.cam.ac.uk/personal/pemsley/coot/"
                    target="_blank"
                  >
                    COOT
                  </a>
                </td>
                <td>
                  Coot is for macromolecular model building, model completion
                  and validation, particularly suitable for protein modelling
                  using X-ray data.
                </td>
              </tr>
              <tr>
                <td>
                  <a href="http://www-bmb.ijs.si/doc/" target="_blank">
                    MAIN
                  </a>
                </td>
                <td>
                  An interactively driven suite of programs for molecular
                  modeling, density modification, model refinement and structure
                  analysis
                </td>
              </tr>
              <tr>
                <td>
                  <a href="http://www.phenix-online.org/" target="_blank">
                    PHENIX
                  </a>
                </td>
                <td>
                  Software suite for automated determination using X-ray
                  crystallography and other methods
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.ccp4.ac.uk/html/refmac5.html"
                    target="_blank"
                  >
                    REFMAC
                  </a>
                </td>
                <td>Macromolecular refinement program</td>
              </tr>
              <tr>
                <td>
                  <a href="http://www.globalphasing.com/sharp/" target="_blank">
                    SHARP
                  </a>
                </td>
                <td>
                  An automated structure solution pipeline built around the
                  heavy-atom refinement and phasing program SHARP, the
                  substructure determination program SHELXD, the density
                  modification program SOLOMON and the model building programs
                  BUCCANEER and ARP/wARP. It allows fully automated structure
                  solution by experimental phasing, from merged reflection data
                  to an initial model, without any user intervention.
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://shelx.uni-goettingen.de/" target="_blank">
                    SHELX
                  </a>
                </td>
                <td>
                  A set of programs for direct structure solution and refinement
                  with high resolution diffraction data
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://solve.lanl.gov/" target="_blank">
                    SOLVE
                  </a>
                </td>
                <td>
                  An automated system for phase determination from MIR and MAD
                  data
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
        <div>Last updated: 2/15/2023</div>
      </div>
    </div>
  );
};
