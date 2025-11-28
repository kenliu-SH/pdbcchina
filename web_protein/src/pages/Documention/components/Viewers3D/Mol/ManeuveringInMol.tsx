export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">3D Viewers &gt; Mol*</h5>
        <h1>Maneuvering in Mol*</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ●
            <a href="#deciding-what-to-visualize-">
              Deciding what to visualize
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ●
            <a href="#interacting-with-the-molecules">
              Interacting with the Molecule(s)
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#focus">Focus</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#selections-logic">Selections Logic</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#components-logic">Components Logic</a>
          </div>
          <p>
            Depending on what you wish to view in Mol* and how you wish to
            interact with the molecule(s) visualized in the 3D canvas, Mol*
            offers a few different modes and specific logic to perform the
            desired actions. This section is aimed at explaining the
            fundamentals of how Mol* works and how to effectively perform
            actions within it.
          </p>
          <a className="content-anchor" id="deciding-what-to-visualize-"></a>
          <h2>Deciding what to visualize</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              For any structure of interest, the Mol* tool can be used to view
              the entire molecule (or model), specifically selected subsets of
              it, or supersets (assemblies) of the structure.
            </li>
            <li>
              The choice for what to visualize in the 3D canvas can be made
              using the Structure Panel options in the Controls panel. Learn
              about the Preset options available.
            </li>
            <li>
              It is important to select and view the deposited coordinates,
              biological assembly, single model, ensemble etc. in order to meet
              the needs of the planned exploration.
            </li>
          </ul>
          <div></div>
          <p>
            <b>Examples</b>: A few examples illustrate options in the Structure
            panel to customize the molecular display in the 3D canvas. Different
            assemblies of the X-ray structure of insulin are shown in Figure 1.
            Note that each polymer chain is colored in a different color. The
            representative model and ensemble of the NMR structure of proinsulin
            is shown in Figure 2. Various assemblies of proteins making up the
            X-ray structure of satellite tobacco mosaic virus, an icosahedral
            virus, are shown in Figure 3. The model and assembly coordinates are
            identical for CSMs - in the default view, CSMs with a single polymer
            chain are colored by residue-level pLDDT scores in the 3D canvas.
            The same structure in the assembly view and CSMs with more than one
            polymer are displayed with different colors for each polymer chain
            (Figure 4).
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/5ee107b225aa7b208a9fe3a1/mman1.png"
                    data-toggle="lightbox"
                    data-title="Figure 1: A sampling of molecular views displayed on the 3D canvas for a single structure (PDB entry 1trz). A. view of the entire set of coordinates included in the PDB entry; B. a subset of the structure corresponding to a biological assembly; C. display of the contents of the Unit cell for the specific structure; D. A superset of the coordinates in the PDB entry, representing an alternate biological assembly. The additional coordinates were computed based on crystallography symmetry information. "
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5ee107b225aa7b208a9fe3a1/mman1.png"
                      alt="Figure 1: A sampling of molecular views displayed on the 3D canvas for a single structure (PDB entry 1trz). A. view of the entire set of coordinates included in the PDB entry; B. a subset of the structure corresponding to a biological assembly; C. display of the contents of the Unit cell for the specific structure; D. A superset of the coordinates in the PDB entry, representing an alternate biological assembly. The additional coordinates were computed based on crystallography symmetry information. "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 1: A sampling of molecular views displayed on the 3D
                  canvas for a single structure (PDB entry 1trz). A. view of the
                  entire set of coordinates included in the PDB entry; B. a
                  subset of the structure corresponding to a biological
                  assembly; C. display of the contents of the Unit cell for the
                  specific structure; D. A superset of the coordinates in the
                  PDB entry, representing an alternate biological assembly. The
                  additional coordinates were computed based on crystallography
                  symmetry information.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <div>
            <table style={{ width: '60%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee107b225aa7b208a9fe3a1/mman2.png"
                      data-toggle="lightbox"
                      data-title="Figure 2: Different molecular views of a single structure determined by NMR (PDB ID 2kqp). A. a single model (from the deposited coordinates); B. The full ensemble of NMR structures. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee107b225aa7b208a9fe3a1/mman2.png"
                        alt="Figure 2: Different molecular views of a single structure determined by NMR (PDB ID 2kqp). A. a single model (from the deposited coordinates); B. The full ensemble of NMR structures. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 2: Different molecular views of a single structure
                    determined by NMR (PDB ID 2kqp). A. a single model (from the
                    deposited coordinates); B. The full ensemble of NMR
                    structures.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/5ee107b225aa7b208a9fe3a1/mman3.png"
                    data-toggle="lightbox"
                    data-title="Figure 3: A sampling of molecular views displayed on the 3D canvas for an icosahedral virus  structure (PDB entry 1a34). A. the complete icosahedral assembly showing the full virus structure; B. view of the entire set of coordinates included in the PDB entry representing one icosahedral unit of the complete virus (1/60th of the structure); C. a subset of the icosahedral virus, forming a pentamer; D. a subset of the icosahedral virus, forming a trimer. The additional coordinates were computed based on icosahedral symmetry information."
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5ee107b225aa7b208a9fe3a1/mman3.png"
                      alt="Figure 3: A sampling of molecular views displayed on the 3D canvas for an icosahedral virus  structure (PDB entry 1a34). A. the complete icosahedral assembly showing the full virus structure; B. view of the entire set of coordinates included in the PDB entry representing one icosahedral unit of the complete virus (1/60th of the structure); C. a subset of the icosahedral virus, forming a pentamer; D. a subset of the icosahedral virus, forming a trimer. The additional coordinates were computed based on icosahedral symmetry information."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 3: A sampling of molecular views displayed on the 3D
                  canvas for an icosahedral virus structure (PDB entry 1a34). A.
                  the complete icosahedral assembly showing the full virus
                  structure; B. view of the entire set of coordinates included
                  in the PDB entry representing one icosahedral unit of the
                  complete virus (1/60th of the structure); C. a subset of the
                  icosahedral virus, forming a pentamer; D. a subset of the
                  icosahedral virus, forming a trimer. The additional
                  coordinates were computed based on icosahedral symmetry
                  information.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/5ee107b225aa7b208a9fe3a1/mman4.png"
                    data-toggle="lightbox"
                    data-title="Figure 4: Viewing CSMs in Mol* - A. default view of the AlphaFold model AF_AFA0A023FBW7F1 showing residue level pLDDT (model confidence) scores; B. Assembly view of the AlphaFold model AF_AFA0A023FBW7F1 ; and C. Model Archive model MA_MABAKCEPC0003."
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5ee107b225aa7b208a9fe3a1/mman4.png"
                      alt="Figure 4: Viewing CSMs in Mol* - A. default view of the AlphaFold model AF_AFA0A023FBW7F1 showing residue level pLDDT (model confidence) scores; B. Assembly view of the AlphaFold model AF_AFA0A023FBW7F1 ; and C. Model Archive model MA_MABAKCEPC0003."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 4: Viewing CSMs in Mol* - A. default view of the
                  AlphaFold model AF_AFA0A023FBW7F1 showing residue level pLDDT
                  (model confidence) scores; B. Assembly view of the AlphaFold
                  model AF_AFA0A023FBW7F1 ; and C. Model Archive model
                  MA_MABAKCEPC0003.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a className="content-anchor" id="interacting-with-the-molecules"></a>
          <h2>Interacting with the Molecule(s)</h2>
          <p>
            Once the desired molecule(s)/assembly(ies) are displayed on the 3D
            canvas you can interact with the molecule to examine it closely,
            select parts of the molecule to color, change representations, hide,
            label, measure etc.; and save selections in the form of components
            to view and analyze independent of the rest of the structure.
          </p>
          <a className="content-anchor" id="focus"></a>
          <h3>Focus</h3>
          <p>
            Focusing adjusts the view of the camera and the center of rotation
            on specific atoms, residues, or parts of structures. Once the camera
            is focused on a selection, other items in the structure may appear
            hidden from the camera because they fall outside the region being
            viewed or are clipped. <br />
            <br />
            There are three ways to change the focus of the camera:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Click on a residue</b> in the 3D canvas or in the Sequence
              Panel - In default mode, click on a residue to automatically
              center on it, zoom-in, and display it in ball and stick
              representation along with its surrounding residues. A temporary
              component called “[Focus] Target” is created for the residue being
              examined. Another temporary component called “[Focus] Surroundings
              (5 Å)” is created for all the surrounding residues and appears
              below existing components in the Components panel. All local
              non-covalent interactions between these residues are also shown.
              (see Figure 5A)
            </li>
            <li>
              <b>Click on an existing component</b> - If a component is already
              listed in the
              <a
                href="/docs/3d-viewers/mol*/managing-the-display#components-panel"
                target="_blank"
              >
                Components Panel
              </a>
              , it can be clicked on which will make it the focus of the camera.
              (See Figure 5B)
            </li>
            <li>
              <b>Click on selected objects</b> - If an object is currently
              selected, it will be listed in the
              <a
                href="/docs/3d-viewers/mol*/managing-the-display#structure-panel"
                target="_blank"
              >
                Structure Panel
              </a>
              . For example, if four residues are selected, the Structure Panel
              will read “4 Residues Selected.” If this text is clicked on, the
              four residues will become the focus. (See Figure 5C).
            </li>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee107b225aa7b208a9fe3a1/mman5.png"
                      data-toggle="lightbox"
                      data-title="Figure 5: Different ways of focusing on A. a specific residue; B. existing component; C. selected residues.  "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee107b225aa7b208a9fe3a1/mman5.png"
                        alt="Figure 5: Different ways of focusing on A. a specific residue; B. existing component; C. selected residues.  "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 5: Different ways of focusing on A. a specific
                    residue; B. existing component; C. selected residues.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="selections-logic"></a>
          <h3>Selections Logic</h3>
          <p>
            Making selections is often the first step to performing a range of
            operations. Selections are made using
            <a href="/docs/3d-viewers/mol*/making-selections#selection-mode">
              Selection Mode
            </a>
            which is activated using the cursor or arrow head icon in the Toggle
            Menu. The
            <a href="/docs/3d-viewers/mol*/making-selections#picking-level">
              Picking Level
            </a>
            determines the specificity of the selection. For example, keeping
            the Picking Level on “residue” enables individual or groups of amino
            acid residues to be selected, while changing the Picking Level to
            “chain” allows whole chains to be selected. After the desired
            Picking Level is chosen, selections can be made by:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Clicking on parts of the structure in the 3D canvas</li>
            <li>Clicking on residues in the Sequence Panel</li>
            <li>Using the Set Operations Menus in Selection Mode toolbar</li>
          </ul>
          <div></div>
          <p>
            After selections are made, several tasks can be directly performed
            using the current selection. These include:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a href="/docs/3d-viewers/mol*/managing-the-display#create-component">
                Creating a component
              </a>
              of the current selection
            </li>
            <li>
              <a href="/docs/3d-viewers/mol*/common-actions#color">Coloring</a>
              the current selection
            </li>
            <li>
              Changing the
              <a href="/docs/3d-viewers/mol*/common-actions#transparency">
                transparency
              </a>
              of the current selection
            </li>
            <li>
              Changing the representation of the current selection (e.g., ball
              &amp; stick, molecular surface)
            </li>
            <li>Removing the current selection from the 3D canvas</li>
            <li>Focusing on the current selection</li>
            <li>
              Creating labels and
              <a href="/docs/3d-viewers/mol*/managing-the-display#measurements-panel">
                measurements
              </a>
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="components-logic"></a>
          <h3>Components Logic</h3>
          <p>
            After making a selection, a component can be made from it. Creating
            components allows the user to make groupings of certain parts of a
            structure which can later be manipulated. It is not always necessary
            to create components, but it can be helpful in certain
            circumstances. For example, if you have selected a number of
            residues in a protein that you may be returning to multiple times to
            perform different actions, it may be helpful to create a component
            for quick reference.
            <br />
            <br />
            The following are actions that can be performed with components:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Showing/hiding using the eye icon</li>
            <li>Changing the representation</li>
            <li>Coloring by various requirements</li>
            <li>
              Modifying the component to add, subtract, or intersect pieces of
              the structure in the selection
            </li>
            <li>
              Deleting the component - this will remove the grouping of selected
              parts of the structure but the structure will remain intact
            </li>
          </ul>
          <div></div>
          <p>
            Once again, it is not always required to make components, but can be
            useful for easy reference. Clicking on a component in the
            <a href="/docs/3d-viewers/mol*/managing-the-display#components-panel">
              Components Panel
            </a>
            will quickly focus on that component in the 3D canvas. Additionally,
            the component can be easily selected from the Components Panel.
            <br />
            <br />
            Using a component can be helpful for certain tasks:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Briefly hiding a group to view another part of the structure
            </li>
            <li>Coloring a selection with specific settings</li>
            <li>
              Changing the representation after hiding certain parts of the
              structure
            </li>
            <li>
              Grouping certain parts of different components into other
              components by modifying selection
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
        <div>Last updated: 8/29/2022</div>
      </div>
    </div>
  );
};
