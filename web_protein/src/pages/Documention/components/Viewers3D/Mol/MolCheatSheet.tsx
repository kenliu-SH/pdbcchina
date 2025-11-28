export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">3D Viewers &gt; Mol*</h5>
        <h1>Mol* Cheat Sheet</h1>
        <div>
          <p>
            <a
              href="https://cdn.rcsb.org//rcsb-pdb/documentaion/Mol-Star-Cheat-Sheet-May-2022.pdf"
              target="_blank"
            >
              Download and save
            </a>
            Cheat Sheet.
          </p>
          <a className="content-anchor" id="navigate-the-3d-canvas"></a>
          <h2>Navigate the 3D Canvas</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <i>
                <b>Rotate</b>
              </i>
              - Press the left mouse button and move, or use the Shift button +
              left mouse button and drag.
            </li>
            <li>
              <i>
                <b>Translate</b>
              </i>
              - Press the right mouse button and move, or use the Control button
              + the left mouse button and move. On a touchscreen device, use a
              two-finger drag.
            </li>
            <li>
              <i>
                <b>Zoom</b>
              </i>
              - Use the mouse wheel. On a touchpad, use a two-finger drag. On a
              touchscreen device, pinch two fingers.
            </li>
            <li>
              <i>
                <b>Center and zoom</b>
              </i>
              - Use the right mouse button to click onto the part of the
              structure you wish to see.
            </li>
            <li>
              <i>
                <b>Change clipping planes</b>
              </i>
              - Use the Shift button + the mouse wheel. On a touchpad, use the
              Shift button + a two-finger drag.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="select"></a>
          <h2>Select</h2>
          <p>
            First open Selection Mode and change the Picking Level (if needed):
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Click on objects in the 3D canvas, OR</li>
            <li>Click on residues in the Sequence Panel, OR</li>
            <li>Use the Set Operations Menu in the Selection Mode toolbar</li>
          </ul>
          <div></div>
          <a className="content-anchor" id="see-or-hide"></a>
          <h2>See or Hide</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Create a component of the region you wish to see/hide →</li>
            <li>
              Go to the Components Panel and press the “eye” icon next to the
              component you created
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="color"></a>
          <h2>Color</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <i>
                <b>N-terminus to C-terminus (rainbow)</b>
              </i>
              - Components → Polymer → Set Coloring → Residue Property →
              Sequence Id
            </li>
            <li>
              <i>
                <b>Heteroatom</b>
              </i>
              - Components → Polymer → Set Coloring → Atom Property → Element
              Symbol
            </li>
            <li>
              <i>
                <b>Secondary structure</b>
              </i>
              - Components → Polymer → Set Coloring → Residue Property →
              Secondary Structure
            </li>
            <li>
              <i>
                <b>Hydrophobicity</b>
              </i>
              - Components → Polymer → Set Coloring → Residue Property →
              Hydrophobicity
            </li>
            <li>
              <i>
                <b>Domain</b>
              </i>
              - Select domain → Selections Menu → Apply Theme to Selection →
              Color → Apply Theme
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="compare-structures"></a>
          <h2>Compare Structures</h2>
          <p>
            First upload two or more structures at the stand-alone version of
            RCSB Mol* at
            <a href="/3d-view/" target="_blank">
              rcsb.org/3D-view
            </a>
            and superpose structures
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <i>
                <b>By chains</b>
              </i>
              - Select 2 or more polymer chains/residues → Superposition → By
              Chains → Superpose
            </li>
            <li>
              <i>
                <b>By atoms</b>
              </i>
              - Select 1 or more atoms → Superposition → By Atoms→ Superpose
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="measurements"></a>
          <h2>Measurements</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <i>
                <b>Distance</b>
              </i>
              - Select 2 or more atoms/residues → Measurements → Add → Distance
              (for first 2 selections)
            </li>
            <li>
              <i>
                <b>Angle</b>
              </i>
              - Select 3 or more atoms/residues → Measurements → Add → Angle
              (for first 3 selections)
            </li>
            <li>
              <i>
                <b>Dihedral</b>
              </i>
              - Select 4 or more atoms → Measurements → Add → Dihedral (for
              first 4 selections)
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
        <div>Last updated: 6/23/2022</div>
      </div>
    </div>
  );
};
