export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">3D Viewers &gt; Mol*</h5>
        <h1>Making Selections</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#selection-mode">Selection Mode</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#picking-level">Picking Level</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#making-selections">Making Selections</a>
          </div>
          <a className="content-anchor" id="selection-mode"></a>
          <h2>Selection Mode</h2>
          <p>
            Making selections is often the first step to performing a range of
            operations. See
            <a href="/docs/3d-viewers/mol*/maneuvering-in-mol*#selections-logic">
              Selections Logic
            </a>
            for more information about how and when to use Selection Mode.
          </p>
          <p>
            Selection Mode allows parts of 3D structures to be selected by
            clicking on them. It also allows residues to be selected through Set
            Operations Menus. Selection Mode is enabled by clicking on the
            cursor icon in the Toggle Menu. Activating Selection Mode opens a
            toolbar that appears at the top of the 3D canvas. The following
            provides an illustration of the toolbar and a description of each of
            the buttons:
          </p>
          <div>
            <a
              href="https://cdn.rcsb.org/rcsb-pdb/content/5ee10ad725aa7b208a9fe3a2/selectionmode1.png"
              data-toggle="lightbox"
            >
              <img
                style={{ width: '70%' }}
                className="img-responsive"
                src="https://cdn.rcsb.org/rcsb-pdb/content/5ee10ad725aa7b208a9fe3a2/selectionmode1.png"
              />
            </a>
          </div>
          <div></div>
          <table className="table table-bordered">
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
                  <i>Picking Level for Selecting and Highlighting</i>
                </td>
                <td>
                  Controls to what level a selection or highlight interaction is
                  applied (i.e., atom, residue, chain, etc.)
                </td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cms.rcsb.org/file-uploads/content/5ee10ad725aa7b208a9fe3a2/table1.png"
                    className="image"
                    height="50"
                    width="100"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <i>Add/Union Selection</i>
                </td>
                <td>
                  The new selection will be the union of the current and the
                  other selection
                </td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cms.rcsb.org/file-uploads/content/5ee10ad725aa7b208a9fe3a2/table2.png"
                    className="image"
                    height="50"
                    width="50"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <i>Remove/Subtract Selection</i>
                </td>
                <td>
                  The new selection will be the current selection with parts
                  that are in the other selection removed
                </td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cms.rcsb.org/file-uploads/content/5ee10ad725aa7b208a9fe3a2/table3.png"
                    className="image"
                    height="50"
                    width="50"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <i>Intersect Selection</i>
                </td>
                <td>
                  The new selection will be the intersection of the current
                  selection and the other selection
                </td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cms.rcsb.org/file-uploads/content/5ee10ad725aa7b208a9fe3a2/table4.png"
                    className="image"
                    height="50"
                    width="50"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <i>Set Selection</i>
                </td>
                <td>The new selection will be the other selection</td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cms.rcsb.org/file-uploads/content/5ee10ad725aa7b208a9fe3a2/table5.png"
                    className="image"
                    height="50"
                    width="50"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <i>Apply Theme to Selection</i>
                </td>
                <td>
                  Enables changes of
                  <a href="/docs/3d-viewers/mol*/common-actions#color">color</a>
                  ,
                  <a href="/docs/3d-viewers/mol*/common-actions#transparency">
                    transparency
                  </a>
                  , and
                  <a href="/docs/3d-viewers/mol*/common-actions#clipping">
                    clipping
                  </a>
                  to be applied to the current selection
                </td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cms.rcsb.org/file-uploads/content/5ee10ad725aa7b208a9fe3a2/table6.png"
                    className="image"
                    height="50"
                    width="50"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <i>Create Component of Selection with Representation</i>
                </td>
                <td>
                  Enables components to be created and its representations to be
                  changed independent of other components
                </td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cms.rcsb.org/file-uploads/content/5ee10ad725aa7b208a9fe3a2/table7.png"
                    className="image"
                    height="50"
                    width="50"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <i>Remove/Subtract Selection from All Components</i>
                </td>
                <td>
                  Removes the current selection from being displayed in the 3D
                  canvas
                </td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cms.rcsb.org/file-uploads/content/5ee10ad725aa7b208a9fe3a2/table8.png"
                    className="image"
                    height="50"
                    width="50"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <i>Undo Modify Selection</i>
                </td>
                <td>
                  Allows certain actions (changes of color, hiding of
                  components, etc.) to be reverted while remaining in the
                  selection mode
                </td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cms.rcsb.org/file-uploads/content/5ee10ad725aa7b208a9fe3a2/table9.png"
                    className="image"
                    height="50"
                    width="50"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <i>Show/Hide Help</i>
                </td>
                <td>
                  Offers a summary of selection operations, representation
                  operations, and mouse controls
                </td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cms.rcsb.org/file-uploads/content/5ee10ad725aa7b208a9fe3a2/table10.png"
                    className="image"
                    height="50"
                    width="50"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <i>Turn Selection Mode Off</i>
                </td>
                <td>Switches from Selection Mode to Default Mode</td>
                <td>
                  <img
                    style={{ width: '100%' }}
                    src="https://cms.rcsb.org/file-uploads/content/5ee10ad725aa7b208a9fe3a2/table11.png"
                    className="image"
                    height="50"
                    width="50"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a className="content-anchor" id="picking-level"></a>
          <h2>Picking Level</h2>
          <p>
            The Picking Level in Mol* controls to what level a selection or
            highlight interaction is applied. Specifically, a
            selection/interaction can be extended from a single atom to a
            residue, chain, entity, model, or structure. The default level is
            residue. For the case of structures with symmetry instances, the
            interaction can also be extended to include all atom, residue, and
            chain instances of the clicked atom. In addition, the Picking Level
            determines the specificity of a selection in the
            <a href="/docs/3d-viewers/mol*/navigating-by-sequence#sequence-panel">
              Sequence Panel
            </a>
            , or the specificity of the focus in
            <a href="/docs/3d-viewers/mol*/getting-started#default-mode">
              Default Mode
            </a>
            . The Picking Level menu can be changed via a menu in the Selection
            Mode toolbar located at the top of the 3D canvas.
          </p>
          <img
            style={{ width: '100%' }}
            className="img-responsive"
            src="https://cdn.rcsb.org/rcsb-pdb/content/5ee10ad725aa7b208a9fe3a2/pickinglevel1.png"
          />
          <div></div>
          <a className="content-anchor" id="making-selections"></a>
          <h2>Making Selections</h2>
          <p>
            Making selections in Mol* allows for many operations to be
            performed. Although there are several ways to make selections, the
            first step is to enable
            <a href="/docs/3d-viewers/mol*/making-selections#selection-mode">
              Selection Mode
            </a>
            using the cursor icon in the Toggle Menu.
          </p>
          <p>
            After activating Selection Mode, the easiest way to select is to
            click on objects in the 3D canvas or the
            <a href="/docs/3d-viewers/mol*/navigating-by-sequence#sequence-panel">
              Sequence Panel
            </a>
            . Changing the
            <a href="/docs/3d-viewers/mol*/making-selections#picking-level">
              Picking Level
            </a>
            makes selections more fine (e.g., selecting atoms) or more coarse
            (e.g., selecting whole chains).
          </p>
          <p>
            The second way to select is with the Set Operations Menus that
            appear when Selection Mode is active. There are four set operations,
            each represented by two overlapping circles. They all open the same
            menu with a list of possible options for selections. If nothing is
            selected, the selection is empty. If an object is currently selected
            (i.e., the current selection is not empty), that selection can be
            modified with another selection using the operations. In the icons,
            the current selection is represented by the left circle and the
            other selection is represented by the right circle. After the set
            operation, the resulting selection (and new current selection) is
            represented by the filled part of the circles.
          </p>
          <div>
            <a
              href="https://cdn.rcsb.org/rcsb-pdb/content/5ee10ad725aa7b208a9fe3a2/makingselections1.png"
              data-toggle="lightbox"
            >
              <img
                style={{ width: '70%' }}
                className="img-responsive"
                src="https://cdn.rcsb.org/rcsb-pdb/content/5ee10ad725aa7b208a9fe3a2/makingselections1.png"
              />
            </a>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Add/Union:</b> The new selection will be union of the current
              and the other selection.
            </li>
            <li>
              <b>Subtract/Remove:</b> The new selection will be the current
              selection with parts that are in the other selection removed.
            </li>
            <li>
              <b>Intersect:</b> The new selection will be the intersection of
              the current selection and the other selection.
            </li>
            <li>
              <b>Set:</b> The new selection will be the other selection.
            </li>
          </ul>
          <div></div>
          <p>
            Another way to make selections is to use the
            <a href="/docs/3d-viewers/mol*/managing-the-display#components-panel">
              Components Panel
            </a>
            . If a component of part of a structure is already created, it can
            be selected via the drop-down menu in the Components Panel. Click on
            the option that reads “Select This” to select that component.
          </p>
        </div>
      </div>
      <br />
      <hr />
      <div className="item-info">
        <div>
          Please report any encountered broken links to
          <a href="mailto:info@rcsb.org">info@rcsb.org</a>
        </div>
        <div>Last updated: 9/2/2022</div>
      </div>
    </div>
  );
};
