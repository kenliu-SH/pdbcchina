export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">3D Viewers</h5>
        <h1>Jmol</h1>
        <div>
          <p>
            The Jmol 3D View option from the RCSB PDB structure summary page
            utilizes Jsmol (the JavaScript version of
            <a href="http://www.jmol.org/" target="_blank">
              Jmol
            </a>
            , an open-source Java viewer for 3D chemical structures) for display
            and analysis. Options are available to render structures in
            different styles and colors.
          </p>
          <a className="content-anchor" id="interactions"></a>
          <h4>
            Interactions
            <br />
          </h4>
          <a className="content-anchor" id="basic-commands-"></a>
          <h5>Basic Commands</h5>
          <table className="table table-bordered" border={1}>
            <tbody>
              <tr>
                <td> Rotate Around X, Y </td>
                <td> Left Click and Drag </td>
              </tr>
              <tr>
                <td>Move along X, Y (= translate) </td>
                <td>
                  Shift + Left Double-Click and Drag Middle Double-Click and
                  Drag Ctrl + Right Click and Drag * Works both when clicking on
                  the molecule or away from it.
                </td>
              </tr>
              <tr>
                <td>Reset and Center </td>
                <td>
                  Shift + Left Double-Click Middle Double-Click * Only works if
                  double-click is done away from the molecule.
                </td>
              </tr>
              <tr>
                <td> Rotate Around Z </td>
                <td>
                  Shift + Left Click and Drag Horizontally Middle Click and Drag
                  Horizontally Shift + Right Click and Drag Horizontally
                  (possibly fails on OS X)
                </td>
              </tr>
              <tr>
                <td> Zoom In / Out </td>
                <td>
                  Shift + Left Click and Drag Vertically Middle Click and Drag
                  Vertically Use Mouse Wheel
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: '50px' }}></div>
          <a className="content-anchor" id="jsmol-menu"></a>
          <h3>Jsmol Menu</h3>
          <p>
            To open the Jsmol menu, you should right click on the molecule view.
          </p>
          <div>
            <a
              href="https://cdn.rcsb.org/rcsb-pdb/content/60075352c5ab5836659ab2e3/menu.png"
              data-toggle="lightbox"
            >
              <img
                style={{ width: '70%' }}
                className="img-responsive"
                src="https://cdn.rcsb.org/rcsb-pdb/content/60075352c5ab5836659ab2e3/menu.png"
              />
            </a>
          </div>
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
        <div>Last updated: 2/1/2021</div>
      </div>
    </div>
  );
};
