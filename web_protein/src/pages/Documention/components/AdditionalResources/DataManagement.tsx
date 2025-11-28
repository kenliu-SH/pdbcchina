export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Additional Resources</h5>
        <h1>Data Management Standards and Best Practices</h1>
        <div>
          <table className="content-resources" border={1}>
            <tbody>
              <tr>
                <td>
                  <a href="https://www.coretrustseal.org/" target="_blank">
                    CoreTrustSeal
                  </a>
                </td>
                <td>
                  Offers to any interested data repository a core level
                  certification based on the
                  <a
                    href="https://www.coretrustseal.org/requirements/"
                    target="_blank"
                  >
                    Core Trustworthy Data Repositories Requirements
                  </a>
                  .
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://fairsharing.org/" target="_blank">
                    FAIRsharing
                  </a>
                </td>
                <td>
                  A curated, informative and educational resource on data and
                  metadata standards, inter-related to databases and data
                  policies
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://globalbiodata.org/" target="_blank">
                    Global Biodata Coalition
                  </a>
                </td>
                <td>
                  Forum for research funders to better coordinate and share
                  approaches for the efficient management and growth of biodata
                  resources worldwide.
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.re3data.org" target="_blank">
                    re3data
                  </a>
                </td>
                <td>
                  <b>Re</b>gistry of <b>Re</b>search data <b>Re</b>positories
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.rd-alliance.org/" target="_blank">
                    Research Data Alliance (RDA)
                  </a>
                </td>
                <td>
                  Builds the social and technical bridges to enable open sharing
                  and re-use of data
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
        <div>Last updated: 2/2/2023</div>
      </div>
    </div>
  );
};
