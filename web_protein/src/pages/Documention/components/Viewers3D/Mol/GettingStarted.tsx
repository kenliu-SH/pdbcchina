export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">3D Viewers &gt; Mol*</h5>
        <h1>Getting Started</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#general-interface">General Interface</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#mouse-controls">Mouse Controls</a>
          </div>
          <hr />
          <p>
            Video -
            <a href="https://youtu.be/ptYUuephclA" target="_blank">
              Mol*: Exploring Overall Shape and Local Environments
            </a>
          </p>
          <hr />
          <a className="content-anchor" id="general-interface"></a>
          <h2>General Interface</h2>
          <p>The user interface is structured with the following components.</p>
          <img
            style={{ width: '100%' }}
            className="img-responsive"
            src="https://cdn.rcsb.org/rcsb-pdb/content/5ee0fc4d25aa7b208a9fe39e/screen-shot-2022-05-13-at-11.31.51-am.png"
          />
          <div></div>
          <p>
            <b>3D Canvas</b>: This is the space where a PDB structure is
            displayed for manipulation in three dimensions (3D). It is located
            on the left side of the screen.
          </p>
          <p>
            <b>Toggle Menu</b>: This menu provides users quick access to some
            commonly used operations for the 3D canvas. It is located towards
            the right side of the 3D canvas and has the following functions.
          </p>
          <table className="table table-bordered" border={5}>
            <thead>
              <tr>
                <th>Function</th>
                <th>Description</th>
                <th>Icon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i>Reset Camera</i>
                </td>
                <td>
                  Centers and resets the view of the structure on the 3D canvas
                </td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cdn.rcsb.org/rcsb-pdb/content/5ee0fc4d25aa7b208a9fe39e/resetcameraicon.png"
                    alt="Reset Camera"
                    height="50"
                    width="50"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <i>Screenshot/State Snapshot</i>
                </td>
                <td>
                  Takes an image of the structure as shown and gives options for
                  resolution and download
                </td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cdn.rcsb.org/rcsb-pdb/content/5ee0fc4d25aa7b208a9fe39e/screenshoticon.png"
                    alt="Screenshot/State Snapshot"
                    height="50"
                    width="50"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <i>Controls Panel</i>
                </td>
                <td>Hides/shows the Controls Panel to the right</td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cdn.rcsb.org/rcsb-pdb/content/5ee0fc4d25aa7b208a9fe39e/expandedviewporticon.png"
                    alt="Controls Panel"
                    height="50"
                    width="50"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <i>Expanded Viewport</i>
                </td>
                <td>
                  Expands 3D canvas and Controls Panel to the full browser
                  screen
                </td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cdn.rcsb.org/rcsb-pdb/content/5ee0fc4d25aa7b208a9fe39e/expandedviewporticon.png"
                    alt="Expanded Viewport"
                    height="50"
                    width="50"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <i>Settings/Control Info</i>
                </td>
                <td>
                  Provides settings for viewing of 3D canvas, as well as
                  information about moving in 3D and mouse controls
                </td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cdn.rcsb.org/rcsb-pdb/content/5ee0fc4d25aa7b208a9fe39e/settingsicon.png"
                    alt=""
                    height="50"
                    width="50"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <i>Selection Mode</i>
                </td>
                <td>
                  Switches from <a href="#default-mode">Default Mode</a> to
                  <a href="/docs/3d-viewers/mol*/making-selections#selection-mode">
                    Selection Mode
                  </a>
                </td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cdn.rcsb.org/rcsb-pdb/content/5ee0fc4d25aa7b208a9fe39e/selectionmodeicon.png"
                    alt=""
                    height="50"
                    width="50"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            <a href="/docs/3d-viewers/mol*/navigating-by-sequence#sequence-panel">
              <b>Sequence Panel</b>
            </a>
            : This menu displays the polymer sequences of macromolecules
            (proteins and nucleic acids) present in the uploaded PDB structures.
            In addition, it provides quick access to any small molecular ligands
            or entities present in the structure(s). It is located at the top of
            the screen above the 3D Canvas.
          </p>
          <p>
            <a href="/docs/3d-viewers/mol*/managing-the-display#controls-panel">
              <b>Controls Panel</b>
            </a>
            : This menu has the following panels for structure manipulation. It
            is located at the right side of the screen.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a href="/docs/3d-viewers/mol*/managing-the-display#structure-panel">
                Structure
              </a>
            </li>
            <li>
              <a href="/docs/3d-viewers/mol*/managing-the-display#measurements-panel">
                Measurements
              </a>
            </li>
            <li>
              <a href="/docs/3d-viewers/mol*/managing-the-display#components-panel">
                Components
              </a>
            </li>
            <li>
              <a href="/docs/3d-viewers/mol*/managing-the-display#density-panel">
                Density
              </a>
            </li>
            <li>
              <a href="/docs/3d-viewers/mol*/managing-the-display#assembly-symmetry-panel">
                Assembly Symmetry
              </a>
            </li>
            <li>
              <a href="/docs/3d-viewers/mol*/managing-the-display#import-panel">
                Import
              </a>
            </li>
            <li>
              <a href="/docs/3d-viewers/mol*/managing-the-display#session-panel">
                Session
              </a>
            </li>
            <li>
              <a href="/docs/3d-viewers/mol*/managing-the-display#superposition-panel">
                Superposition
              </a>
            </li>
          </ul>
          <div></div>
          <p>
            <b>Log Panel</b>: This panel shows various logs containing
            information about actions taken while viewing the structure. This is
            located at the bottom of the screen below the 3D Canvas.
          </p>
          <a className="content-anchor" id="mouse-controls"></a>
          <h2>Mouse Controls</h2>
          <p>
            All the interactions with the molecule(s) uploaded in Mol* require
            using mouse controls (in the 3D canvas). These controls allow the
            user to manipulate the view of structures via a variety of functions
            such as rotating, translating, zooming, and clipping the structures.
            When not specified, a “click” refers to pressing the left mouse
            button or tapping a single finger on a touchscreen. If an action is
            available for the right mouse button, it can also be completed by
            using the Control button + left mouse button. The general mouse
            controls are listed below:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Rotate</b>: click the left mouse button and move.
              Alternatively, use the Shift button + left mouse button and drag
              to rotate the canvas.
            </li>
            <li>
              <b>Translate</b>: click the right mouse button and move.
              Alternatively, use the Control button + the left mouse button and
              move. On a touchscreen device, use a two-finger drag.
            </li>
            <li>
              <b>Zoom</b>: use the mouse wheel. On a touchpad, use a two-finger
              drag. On a touchscreen device, pinch two fingers.
            </li>
            <li>
              <b>Center and zoom</b>: use the right mouse button to click onto
              the part of the structure you wish to focus on.
            </li>
            <li>
              <b>Clip</b>: use the Shift button + the mouse wheel to change the
              clipping planes. On a touchpad, use the Shift button + a
              two-finger drag.
            </li>
          </ul>
          <div></div>
          <p>
            Moving the mouse over (or hovering over) any part of the 3D
            structure displayed in the 3D canvas, without clicking on it, will
            highlight it (by coloring it in magenta) according to the
            <a href="/docs/3d-viewers/mol*/making-selections#picking-level">
              Picking Level
            </a>
            currently selected. Additionally, in the lower right corner of the
            3D canvas, information about the PDB ID, model number, instance,
            chain ID, residue number, and chain name is listed for the
            highlighted part of the structure.
          </p>
          <p>
            As you interact with the structure using the mouse, Mol* contains
            two modes for which the behavior of a click is different. As a
            result, each mode enables unique operations to be performed. To
            switch between the two modes, use the Selection Mode icon (shaped
            like a cursor) that appears in the Toggle Menu. The list below
            summarizes Default Mode and Selection Mode.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a className="content-anchor" id="default-mode"></a>
              <b>Default Mode</b>: A click on a residue (or any object in 3D)
              will focus on it. The focused residue and its surroundings
              (residues and ligands) will be displayed in a ball &amp; stick
              representation. All local non-covalent interactions will be shown.
              To hide the surroundings, click on the target residue again.
            </li>
            <li>
              <b>
                <a href="/docs/3d-viewers/mol*/making-selections#selection-mode">
                  Selection Mode
                </a>
              </b>
              : A click on a residue (or any object in 3D) will select it. What
              exactly will be selected depends on the value of the
              <a href="/docs/3d-viewers/mol*/making-selections#picking-level">
                Picking Level
              </a>
              . Selected parts of the structure will appear with a bright green
              tint in the 3D canvas and in the
              <a href="/docs/3d-viewers/mol*/navigating-by-sequence#sequence-panel">
                Sequence Panel
              </a>
              . When selecting polymers with the Picking Level set to “residue,”
              holding the Shift key while clicking will extend the selection
              along the polymer from the last clicked residue on. Clicking on
              any point in the 3D canvas that has no atom will clear the
              selection.
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
        <div>Last updated: 5/13/2022</div>
      </div>
    </div>
  );
};
