export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Additional Resources</h5>
        <h1>SARS-CoV-2 and COVID-19</h1>
        <div>
          <p>
            <span>
              Access additional resources of interest, submitted by community
              members.
            </span>
          </p>
          <table className="table table-bordered" border={1}>
            <tbody>
              <tr>
                <td>
                  <a href="https://aquaria.ws/covid#info" target="_blank">
                    Aquaria-COVID Resource
                  </a>
                </td>
                <td>Structural Coverage Map</td>
              </tr>
              <tr>
                <td>
                  <a href="https://insidecorona.net/" target="_blank">
                    Coronavirus Structural Task Force
                  </a>
                </td>
                <td>
                  The Coronavirus Structural Task Force examines the structures
                  from SARS and SARS-CoV-2 which are released to evaluate the
                  quality and improve the structures where possible.
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://covid-19.bioreproducibility.org/"
                    target="_blank"
                  >
                    Covid-19.bioreproducibility.org
                  </a>
                </td>
                <td>
                  Validated models of CoV-2 proteins are available in a
                  dedicated, publicly accessible web service.
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
