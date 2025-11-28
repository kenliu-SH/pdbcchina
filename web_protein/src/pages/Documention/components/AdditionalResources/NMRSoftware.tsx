export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Additional Resources</h5>
        <h1>NMR Software</h1>
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
                  <a href="http://cns-online.org/v1.21/" target="_blank">
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
                    href="http://bose.utmb.edu/fantom/fm_home.html"
                    target="_blank"
                  >
                    Fantom
                  </a>
                </td>
                <td>
                  A program for structure calculation and refinement using
                  torsion angle minimization with NMR data
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://nmrbox.org/software/nightshift"
                    target="_blank"
                  >
                    nightshift
                  </a>
                </td>
                <td>
                  Python command line utility and library for plotting simulated
                  2D and 3D NMR spectra from assigned chemical shifts in the
                  BMRB
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="http://spin.niddk.nih.gov/bax/software/NMRPipe/NMRPipe.html"
                    target="_blank"
                  >
                    NMRPipe
                  </a>
                </td>
                <td>
                  a multidimensional spectral processing system based on UNIX
                  pipes
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
        <div>Last updated: 2/16/2023</div>
      </div>
    </div>
  );
};
