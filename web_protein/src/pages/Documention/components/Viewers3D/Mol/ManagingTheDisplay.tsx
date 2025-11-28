export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">3D Viewers &gt; Mol*</h5>
        <h1>Managing the Display</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#structure-panel">Structure Panel</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#measurements-panel">Measurements Panel</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#add-labels">Add Labels</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#measure-distances">Measure Distances</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#measure-angles">Measure Angles</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#measure-dihedral-angles">Measure Dihedral angles</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#structure-motif-search-panel">
              Structure Motif Search Panel
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#components-panel">Components Panel</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#density-panel">Density Panel</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#quality-assessment-panel">Quality Assessment Panel</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#assembly-symmetry-panel">Assembly Symmetry Panel</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#export-models">Export Models</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#export-animation">Export Animation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#export-geometry">Export Geometry</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#import-panel">Import Panel</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#session-panel">Session Panel</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#superposition-panel">Superposition Panel</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#references">References:</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <p>
            The <b>Controls panel</b> is located on the right hand side of the
            Mol* display and contains options for modification and manipulation
            of the structure display. Each section of this panel (Structure,
            Measurements etc.) has several subsections (Figure 1) and is
            separately discussed here.
          </p>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md1.png"
                      data-toggle="lightbox"
                      data-title="Figure 1: Options in the Controls Panel - red box mark the options seen in all RCSB Mol*, while the ones outside the box are only seen in the stand-alone version of Mol* (rcsb.org/3D-view) "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md1.png"
                        alt="Figure 1: Options in the Controls Panel - red box mark the options seen in all RCSB Mol*, while the ones outside the box are only seen in the stand-alone version of Mol* (rcsb.org/3D-view) "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 1: Options in the Controls Panel - red box mark the
                    options seen in all RCSB Mol*, while the ones outside the
                    box are only seen in the stand-alone version of Mol*
                    (rcsb.org/3D-view)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a className="content-anchor" id="structure-panel"></a>
          <h3>Structure Panel</h3>
          <p>
            The Structure Panel allows the user to view the structure in
            different forms to meet the needs of the exploration. All structures
            available from RCSB.org [experimental structures and Computed
            Structure Models (CSMs)] may be viewed as:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Model</b> or coordinates of the structure determined - for
              experimental structures this represents the deposited structure or
              ensemble, while for CSMs this is coordinates of the predicted
              structure. Note: the deposited coordinates for experimental
              structures may or may not represent the structurally stable or
              biologically relevant assembly of polymer(s) and ligands in the
              structure.
            </li>
            <li>
              <b>Assembly</b> - The assembly coordinates usually represent a
              form of the structure that has some structural or functional
              significance. This is the form of the structure loaded to Mol*
              from the structure summary pages. The assembly coordinates for
              structures determined using X-ray crystallography or 3DEM may be
              generated, either by applying specific symmetry operations
              (crystallographic or non-crystallographic) or by selecting
              specific subsets of polymers and ligands from the deposited
              coordinates. NMR structures are commonly deposited as ensembles of
              structures. The best representative model is made available as the
              “Assembly” coordinates. The assembly for all CSMs is the same as
              its corresponding Model (predicted structure).
            </li>
          </ul>
          <div></div>
          <p>
            <b>Note</b>: Even though the assembly form of the structure may not
            provide any additional understanding about NMR structures and CSMs,
            they are included to enable structure based query and analysis
            (e.g., find similar assembly, Structure search, Structure motif
            search).
            <br />
            <br />
            <b>Examples</b>: Model and Assembly forms in the Structure panel of
            a few different structures are included here:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              An experimental structure determined by X-ray crystallography (PDB
              ID 4hhb) shows options to view the model and various assemblies
              (Figure 1A). The preset views generated by these options are shown
              in Figure 2.
            </li>
            <li>
              An experimental structure determined by NMR (PDB ID 2n3q) shows
              options to view the representative model (using the default
              option), all models in the ensemble, and each model individually
              by selecting specific one using the slider as in Figure 1B.
            </li>
            <li>
              A CSM (from Model Archive MA_MABAKCEPC0002) shows options to view
              model and assembly both of which are identical to each other (see
              Figure 1C).
            </li>
            <li>
              When more than one structure is loaded into Mol* (e.g., using the
              <a href="/3d-view" target="_blank">
                standalone version of Mol*
              </a>
              ), all the structures are listed in the Structure panel (Figure
              1D). The Structures menu is useful for selecting a structure to
              have its components listed in the Components Panel. You can click
              on the Assembly name for one entry to turn it off so the
              components of the other are expanded and displayed (Figure 1E).
              Learn
              <a
                href="/docs/3d-viewers/mol*/faqs-scenarios#if-i-have-multiple-structures-uploaded-how-can-i-toggle-between-the-display-of-the-structures"
                target="_blank"
              >
                more about toggling on and off structures here
              </a>
              .
            </li>
          </ul>
          <div></div>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md2-revised.png"
                    data-toggle="lightbox"
                    data-title="Figure 2: Examples of Structure Panel options for experimental structures, CSMs, and when multiple structures are loaded into Mol*. Structure panel showing A. an X-ray structure (PDB ID 4hhb) loaded; B. an NMR structure (PDB ID 2n3q) loaded; C. a CSM from Model Archive (MA_MABAKCEPC0002) loaded; D. two structures (PDB IDs 1mbo and 2dn2) loaded. 
"
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md2-revised.png"
                      alt="Figure 2: Examples of Structure Panel options for experimental structures, CSMs, and when multiple structures are loaded into Mol*. Structure panel showing A. an X-ray structure (PDB ID 4hhb) loaded; B. an NMR structure (PDB ID 2n3q) loaded; C. a CSM from Model Archive (MA_MABAKCEPC0002) loaded; D. two structures (PDB IDs 1mbo and 2dn2) loaded. 
"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 2: Examples of Structure Panel options for experimental
                  structures, CSMs, and when multiple structures are loaded into
                  Mol*. Structure panel showing A. an X-ray structure (PDB ID
                  4hhb) loaded; B. an NMR structure (PDB ID 2n3q) loaded; C. a
                  CSM from Model Archive (MA_MABAKCEPC0002) loaded; D. two
                  structures (PDB IDs 1mbo and 2dn2) loaded.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            The Structure panel provides options to select and display the
            relevant form of the structure for exploration. A sample of
            different views for the structure in PDB entry 4hhb that can be
            viewed by clicking on the presets button next to the structure name
            (see red box marked in Figure 2A) provides a drop-down menu of
            alternate views of the structure shown in Figure 3 A-D.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md4.png"
                    data-toggle="lightbox"
                    data-title="Figure 3: Preset views of a crystal structure (PDB entry 4hhb). Explanations of the different forms of the structure shown in sections A-D are included below. "
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md4.png"
                      alt="Figure 3: Preset views of a crystal structure (PDB entry 4hhb). Explanations of the different forms of the structure shown in sections A-D are included below. "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 3: Preset views of a crystal structure (PDB entry
                  4hhb). Explanations of the different forms of the structure
                  shown in sections A-D are included below.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <ol style={{ paddingLeft: '40px' }}>
            <li>
              Default (Assembly): Creates a structure for assemblies in the
              file/entry.
            </li>
            <li>
              Unit Cell: Creates a structure that fills the crystallographic
              unit cell. Only available for X-ray entries.
            </li>
            <li>
              Super Cell: Creates a structure that fills the crystallographic
              unit cell and all neighbouring unit cells. Only available for
              X-ray entries.
            </li>
            <li>
              All Models: Creates a structure for each model in the file/entry.
              Only available for multi-model files/entries.
            </li>
          </ol>
          <div></div>
          <p>
            Under the structure name, you can select the type of view [Model,
            Assembly, Symmetry Mates, Symmetry (indices), Symmetry (assembly)].
          </p>
          <a className="content-anchor" id="measurements-panel"></a>
          <h3>Measurements Panel</h3>
          <p>
            The Measurements Panel allows the user to make desired measurements
            in a structure (
            <a
              href="/docs/3d-viewers/mol*/managing-the-display#add-labels"
              target="_blank"
            >
              add labels
            </a>
            ,
            <a
              href="/docs/3d-viewers/mol*/managing-the-display#measure-distances"
              target="_blank"
            >
              measure distances
            </a>
            ,
            <a
              href="/docs/3d-viewers/mol*/managing-the-display#measure-angles"
              target="_blank"
            >
              measure angles
            </a>
            ,
            <a
              href="/docs/3d-viewers/mol*/managing-the-display#measure-dihedral-angles"
              target="_blank"
            >
              measure dihedral angles
            </a>
            ) <br />
            <br />
            To make measurements, use the following steps:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Click on the Add button and a drop-down menu will show up. </li>
            <li>
              Activate the
              <a
                href="/docs/3d-viewers/mol*/making-selections#selection-mode"
                target="_blank"
              >
                Selection mode
              </a>
              and select the appropriate number of atoms in the 3D canvas.
              Without the appropriate number of selections, the measurement
              options will not be available for use. Select
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>one atom to label it,</li>
              <li>two atoms to measure distance, </li>
              <li>three atoms to measure angles, and </li>
              <li>four atoms to measure dihedral angles. </li>
            </ul>
            <li>
              Select and click on the desired measurement operations (Figure 4).
            </li>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md4-revised.png"
                      data-toggle="lightbox"
                      data-title="Figure 4: Measurement panel options - A. Click on the + Add to view options (shown in B.); Click on the options icon next to the + Add button to specify text color etc."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md4-revised.png"
                        alt="Figure 4: Measurement panel options - A. Click on the + Add to view options (shown in B.); Click on the options icon next to the + Add button to specify text color etc."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 4: Measurement panel options - A. Click on the + Add
                    to view options (shown in B.); Click on the options icon
                    next to the + Add button to specify text color etc.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            Within the Measurements Panel, the selections can be toggled up and
            down using arrows that show up next to them. This allows the user to
            make all of their selections first and then specifying which of the
            selections should be used for the measurements (toggling them up to
            the top of the selections listing). Additionally, the options button
            next to the Add button gives the option to change the units in which
            distance is measured, as well as color options for the text display
            on the 3D canvas.
            <br />
            <br />
            Note: The measurement will be made based on which
            <a
              href="/docs/3d-viewers/mol*/making-selections#picking-level"
              target="_blank"
            >
              Picking Level
            </a>
            is used for the selections. When the selections are atoms, the
            measurements will be made from the center of the atoms. If another
            Picking Level, such as residues or chains, is used, the measurements
            will be made using points from the center of the space that the
            selection occupies. This means that if three residues are selected
            for an angle measurement, the angle will not be taken from the alpha
            carbon, but from a point from the center of the space the residue
            takes up.
          </p>
          <a className="content-anchor" id="add-labels"></a>
          <h4>Add Labels</h4>
          <p>
            In order to label a part of the structure, one selection needs to be
            made. In this example, one atom from the structure <b>4HHB</b> was
            selected. Once this is done, the Labels option is available. Click
            on it and a label will show up on the 3D canvas, as well as a new
            Labels menu under the Controls (Figure 5).
          </p>
          <div>
            <table style={{ width: '85%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md7.png"
                      data-toggle="lightbox"
                      data-title="Figure 5: Example showing steps for adding a label"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md7.png"
                        alt="Figure 5: Example showing steps for adding a label"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 5: Example showing steps for adding a label
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>In the Labels menu:</p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              You can choose to hide the label on the 3D canvas by clicking on
              the eye icon, and clicking on it again will show the label
            </li>
            <li>You can delete the label by clicking on the trash icon.</li>
            <li>
              You can click on the rightmost icon (three dots) to reveal a
              drop-down menu with Options and Advanced Options, which can be
              used to adjust the display of the label on the 3D canvas.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="measure-distances"></a>
          <h4>Measure Distances</h4>
          <p>
            In order to measure distance, two selections must be made. In this
            example, two atoms from the structure 4HHB were selected. Once this
            is done, click on the Add button under the Measurements Panel. Under
            this, the measurement options will be shown, as well as any
            selections made. The Distance option is now available. Click on it
            and the distance will be measured and displayed both in the 3D
            canvas, as well as under a new Distance menu under the controls
            (Figure 6).
          </p>
          <div>
            <table style={{ width: '85%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md8.png"
                      data-toggle="lightbox"
                      data-title="Figure 6: Example showing steps for measuring distances"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md8.png"
                        alt="Figure 6: Example showing steps for measuring distances"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 6: Example showing steps for measuring distances
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            The icons in the Distances menu perform the same functions as those
            in the Labels menu. See
            <a
              href="/docs/3d-viewers/mol*/managing-the-display#add-labels"
              target="_blank"
            >
              Add labels
            </a>
            for more information.
          </p>
          <a className="content-anchor" id="measure-angles"></a>
          <h4>Measure Angles</h4>
          <p>
            In order to make angle measurements, three selections need to be
            made. In this example, three atoms from the structure <b>4HHB</b>
            were selected. The order in which the selections are made will
            affect the angle that is measured. The second selection will be the
            vertex of the angle, so make selections accordingly. Once three
            selections are made, the Angle option is available. Click on it, and
            an angle measurement will show up on the 3D canvas, as well as a new
            Angles menu under the Controls (Figure 7).
          </p>
          <div>
            <table style={{ width: '85%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md9.png"
                      data-toggle="lightbox"
                      data-title="Figure 7: Example showing steps for measuring angles"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md9.png"
                        alt="Figure 7: Example showing steps for measuring angles"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 7: Example showing steps for measuring angles
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            The icons in the Angles menu perform the same functions as those in
            the Labels menu. See
            <a
              href="/docs/3d-viewers/mol*/managing-the-display#add-labels"
              target="_blank"
            >
              Add labels
            </a>
            for more information.
          </p>
          <a className="content-anchor" id="measure-dihedral-angles"></a>
          <h4>Measure Dihedral angles</h4>
          <p>
            In order to make a dihedral angle measurement, four selections need
            to be made. In this example, four atoms from the structure
            <b>4HHB</b> were selected. The order in which the atoms are selected
            will affect the angle that is measured. The second and third
            selections represent the line along which the angle between the
            first and fourth selections is measured. Once the selections are
            made, the Dihedral option will be available. Click on the Dihedral
            option, and a dihedral angle measurement will show up on the 3D
            canvas, as well as a Dihedrals menu under Controls (Figure 8).
          </p>
          <div>
            <table style={{ width: '85%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md10.png"
                      data-toggle="lightbox"
                      data-title="Figure 8: Example showing steps for measuring dihedrals"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md10.png"
                        alt="Figure 8: Example showing steps for measuring dihedrals"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 8: Example showing steps for measuring dihedrals
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            The icons in the Dihedrals menu perform the same functions as those
            in the Labels menu. See
            <a
              href="/docs/3d-viewers/mol*/managing-the-display#add-labels"
              target="_blank"
            >
              Add labels
            </a>
            for more information.
          </p>
          <a className="content-anchor" id="structure-motif-search-panel"></a>
          <h3>Structure Motif Search Panel</h3>
          <p>
            This section provides options to select residues in a structure to
            launch a structure motif search. This type of search may be applied
            to both experimental structures and CSMs. Learn more about
            <a
              href="/docs/search-and-browse/advanced-search/structure-motif-search#defining-queries-using-mol*"
              target="_blank"
            >
              Defining queries using Mol*
            </a>
            .
          </p>
          <a className="content-anchor" id="components-panel"></a>
          <h3>Components Panel</h3>
          <p>
            The Components Panel shows options for the manipulation and display
            of the contents of the structure(s) being viewed. Components are
            representations of certain parts of the structure being visualized.
            For more information, see
            <a
              href="/docs/3d-viewers/mol*/maneuvering-in-mol*#components-logic"
              target="_blank"
            >
              Components Logic
            </a>
            . <br />
            <br />
            By default, the preset that shows up when a structure is Polymer
            &amp; Ligand, in which the polymers, ligands and water components
            are shown. Additional components can be added by selecting groups of
            atoms, residues, or chains.
            <br />
            <br />
            The components shown and their representations depend on the
            structure, what preset is chosen, and what components are created.
            See an example of various components and their representations in a
            specific structure (Figure 9).
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md11-2.png"
                    data-toggle="lightbox"
                    data-title="Figure 9: Preset views available for PDB entry 2dn2. The section labels A, B, C1-5, D, E1-4 are described below."
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md11-2.png"
                      alt="Figure 9: Preset views available for PDB entry 2dn2. The section labels A, B, C1-5, D, E1-4 are described below."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 9: Preset views available for PDB entry 2dn2. The
                  section labels A, B, C1-5, D, E1-4 are described below.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <ol style={{ paddingLeft: '40px' }}>
            <li>
              Empty: Removes all representations to give you a blank slate to
              work with.
            </li>
            <li>
              Automatic: Chooses a Basic preset based on the size (residue
              count, number of symmetric chains) of a structure. Smaller
              structures are shown with more detail than larger ones, ranging
              from atomistic display to coarse surfaces.
            </li>
            <li>Basic: Various preset display options include</li>
            <ol style={{ paddingLeft: '40px' }}>
              <li>
                Atomic Detail: Shows everything in atomic detail with Ball &amp;
                Stick representation.
              </li>
              <li>
                Polymer Cartoon: Shows polymers in Cartoon representation.
              </li>
              <li>
                Polymer &amp; Ligand: Shows polymers as Cartoon, ligands as Ball
                &amp; Stick, carbohydrates as 3D-SNFG (Symbol Nomenclature For
                Glycans) and water molecules semi-transparent.
              </li>
              <li>
                Protein &amp; Nucleic: Shows proteins as Cartoon and RNA/DNA as
                Gaussian Surface.
              </li>
              <li>
                Coarse Surface: Shows polymers as coarse Gaussian Surface.
              </li>
            </ol>
            <li>
              Miscellaneous: The Illustrative view shows the molecule as a
              stylized spacefill representation where the carbon atoms in the
              polymers and ligands have a lighter hue compared to the heavier
              nitrogen and oxygen atoms. This representation was inspired by the
              style used in the
              <a
                href="https://pdb101.rcsb.org/motm/motm-by-date"
                target="_blank"
              >
                Molecule of the Month
              </a>
              features.
            </li>
            <li>
              Annotation: These features are colored based on specific analysis
              of the structure.
            </li>
            <ol style={{ paddingLeft: '40px' }}>
              <li>
                Assembly Symmetry: Same as ‘Automatic’ preset but colored by
                Assembly Symmetry Cluster membership and showing Assembly
                Symmetry axes and polyhedron cage.
              </li>
              <li>
                Validation Report (Geometry Quality): Same as ‘Automatic’ preset
                but colored by Geometry Quality and displaying geometry clashes
                as pink disks.
              </li>
              <li>
                Validation Report (Density Fit): Same as ‘Automatic’ preset but
                colored by Density Fit. Only shown/available for X-ray entries.
              </li>
              <li>
                Validation Report (Random Coil Index): Same as Automatic preset
                but colored by Random Coil Index. Only shown/available for NMR
                entries.
              </li>
            </ol>
          </ol>
          <div></div>
          <p>Components that can be viewed in the panel by default are</p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Polymers (including proteins and nucleic acids)</li>
            <li>Waters </li>
            <li>Ions (such as Na, Zn, SO4)</li>
            <li>Ligands (small molecules such as inhibitors, cofactors)</li>
            <li>Carbohydrates (saccharides such as glucose, galactose)</li>
            <li>
              Added components created by the used (including a selected set of
              atoms, residues, polymers)
            </li>
            <li>
              Additionally, if a selection is made while in default mode, then
              the focused region will include two targets as well: [Focus]
              Target, [Focus] Surroundings (5 Å).
            </li>
          </ul>
          <div></div>
          <p>
            A component can be added by making a
            <a href="/docs/3d-viewers/mol*/making-selections#selection-mode">
              selection
            </a>
            and either using the Components icon in the Selection Mode toolbar
            or using the Add button in the Components Panel under Controls
            (Figure 10).
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md13-2.png"
                      data-toggle="lightbox"
                      data-title="Figure 10: Options for selecting and adding Components "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md13-2.png"
                        alt="Figure 10: Options for selecting and adding Components "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 10: Options for selecting and adding Components
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            The icons next to each component perform similar functions as seen
            in the
            <a
              href="/docs/3d-viewers/mol*/managing-the-display#measurements-panel"
              target="_blank"
            >
              Measurements Panel
            </a>
            .<br />
            <br />
            When the options icon for a component is selected, various options
            are available (Figure 11).
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Add Representation: Can choose the representation of that
              component (cartoon, ball-and-stick, Gaussian, etc.)
            </li>
            <li>Set Coloring: Choose the coloring of the component</li>
            <li>
              Modify by Selection: Gives selection options given in the
              Selection Mode toolbar
            </li>
          </ul>
          <div></div>
          <p>
            A visual representation of the unit cell is also available, and can
            be enabled by clicking the eye icon next to the Unit Cell option.
          </p>
          <div>
            <table style={{ width: '50%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/componentspolymeroptions.png"
                      data-toggle="lightbox"
                      data-title="Figure 11: Options for changing representation, coloring, and modifying selections of a component (e.g., Polymer)"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/componentspolymeroptions.png"
                        alt="Figure 11: Options for changing representation, coloring, and modifying selections of a component (e.g., Polymer)"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 11: Options for changing representation, coloring,
                    and modifying selections of a component (e.g., Polymer)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            The following representation options are available for the
            components:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Cartoon</li>
            <li>Backbone</li>
            <li>Ball &amp; Stick </li>
            <li>Carbohydrate</li>
            <li>Gaussian Surface</li>
            <li>Gaussian Volume</li>
            <li>Label </li>
            <li>Line</li>
            <li>Molecular surface</li>
            <li>Orientation </li>
            <li>Point</li>
            <li>Putty</li>
            <li>Spacefill</li>
            <li>Non-covalent interactions</li>
            <li>Validation Clashes </li>
          </ul>
          <div></div>
          <p>
            To modify a selection within a component, first make a selection,
            and choose Modify by Selection for the component of choice within
            the Components Panel, and choose one of these options:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Include - This will include the selection in the component</li>
            <li>
              Subtract - This will remove the selection from the component
            </li>
            <li>
              Intersect - This will change the component to be the intersection
              between the original component and the selection
            </li>
          </ul>
          <div></div>
          <p>
            Additionally, the Options button next to the Add button under the
            components panel allows for adjustments for the representation of
            non-covalent interactions (Figure 12). Display of hydrogen atoms in
            the visual can be toggled on and off. Additionally, clicking
            Non-covalent interactions yields a drop down menu with various types
            of non-covalent interactions. These can be toggled on and off for
            display in the non-covalent interactions representation.
            Additionally, clicking on the options button (three dots) next to
            any of the interactions yields a drop down menu for various
            parameters for that interaction. This menu can be used to tweak the
            parameters for calculation for any of the interactions.
          </p>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/componentsoptions.png"
                      data-toggle="lightbox"
                      data-title="Figure 12: Options for displaying or hiding non-covalent interactions"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/componentsoptions.png"
                        alt="Figure 12: Options for displaying or hiding non-covalent interactions"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 12: Options for displaying or hiding non-covalent
                    interactions
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="density-panel"></a>
          <h3>Density Panel</h3>
          <p>
            The Density Panel gives options to display the electron density maps
            used to determine the structure in the 3D canvas. This option is
            only available for structures solved by X-ray crystallography or
            cryogenic electron microscopy. When enabled, the display of each of
            the maps can be adjusted using the sliding bars available (Figure
            13).
            <br />
            <br />
            Visualization of the maps can be adjusted by clicking the + icon
            next to each map, which will give a drop-down menu of options. They
            can be shown by a wireframe, which can be turned on by clicking next
            to the Wireframe option. The color of each map can be changed in
            this map, as well as the opacity of the map.
            <br />
            <br />
            View of the maps can be adjusted by clicking on the drop-down menu
            next to the View button, which gives options to view the maps in
            different settings. In this menu, the density maps can be turned
            off, as well as adjusted to be shown around a focus, for the whole
            structure, or for a bounded box. For the bounded box, the user can
            select the coordinates of the bottom left and top right corners of
            the box within which the density maps will be displayed.
            <br />
            <br />
            In order to view any changes made within this panel, click Update at
            the bottom of the panel.
          </p>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/densitypanel.png"
                      data-toggle="lightbox"
                      data-title="Figure 13: Options to view, render, and navigate the experimental data (electron density/volume)"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/densitypanel.png"
                        alt="Figure 13: Options to view, render, and navigate the experimental data (electron density/volume)"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 13: Options to view, render, and navigate the
                    experimental data (electron density/volume)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="quality-assessment-panel"></a>
          <h3>Quality Assessment Panel</h3>
          <hr />
          <p>
            Videos:
            <a href="https://youtu.be/W3DZnv1szNk" target="_blank">
              Quality of Computed Structure Model
            </a>
            and
            <a href="https://youtu.be/YJaEmtAv8mY" target="_blank">
              Visualizing Structure Quality
            </a>
          </p>
          <hr />
          <p>
            This panel provides options to color the structure with polymer
            building block or residue (e.g., amino acid, nucleotide) level
            quality indicators. Visualizing parts of the structure that have
            geometry violations, disagreement with experimental data, or
            limited/missing data can warn PDB data users that any structural and
            functional details or evolutionary implications about these parts
            should be considered with caution. <br />
            <br />
            At present, the following types of quality measures (see Figure 14)
            are available:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Experimentally determined structures may be colored based on:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                <b>Validation Report</b>
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  Based on the
                  <a
                    href="https://www.wwpdb.org/validation/validation-reports"
                    target="_blank"
                  >
                    wwPDB validation report
                  </a>
                  , this coloring scheme indicates the number of geometry
                  related problems for a specific residue (e.g., geometry
                  outliers, and clashes) as follows:
                </li>
                <ul style={{ paddingLeft: '40px' }}>
                  <li>Blue = 0 problems </li>
                  <li>Yellow = 1 problem</li>
                  <li>Orange = 2 problems</li>
                  <li>Red = 3 or more problems. </li>
                </ul>
                <li>
                  Mousing over any residue in the structure displays the
                  specific type of problems identified for that residue in the
                  bottom-right corner of the 3D-Canvas. Details about electron
                  density fit for the specific residue are also listed here.
                  Learn more about the
                  <a href="/news/feature/2016" target="_blank">
                    RCSB PDB Validation report coloring scheme
                  </a>
                  .
                </li>
              </ul>
              <li>
                <b>Experimental Support Confidence</b>
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  To assess how well the atomic coordinates for an individual
                  residue are supported by the X-ray crystallographic
                  experimental data, a quality assessment measure was developed,
                  based on individual residue Real Space Correlation Coefficient
                  (RSCC) values (
                  <a
                    href="https://doi.org/10.1016/j.str.2022.08.004"
                    target="_blank"
                  >
                    Shao et al., 2022
                  </a>
                  ).
                </li>
                <li>
                  Individual RSCC values vary with both residue chemical
                  structure and structure resolution. Therefore, the RSCC values
                  for each type of amino acid (e.g., Gly, Ala, Val), present in
                  a very large number of PDB structures determined by X-ray
                  Crystallography, and in different resolutions bins (e.g.,
                  1-1.1 Å, 1.1-1.2 Å) were ranked from lowest to highest,
                  indicating worse to better experimental data support for
                  residue atomic coordinates.
                </li>
                <li>
                  Amino acid residues in any PDB structure can be colored by
                  their RSCC value ordinal ranking as follows:
                </li>
                <ul style={{ paddingLeft: '40px' }}>
                  <li>
                    Blue = 25% - 100% - very well resolved residues, very high
                    confidence
                  </li>
                  <li>
                    Cyan = 5% - 25% - well resolved residues, high confidence
                  </li>
                  <li>Yellow = 1% - 5% - outlier residues,low confidence</li>
                  <li>
                    Orange = &lt;1% -, extreme outlier residues, very low
                    confidence
                  </li>
                </ul>
              </ul>
            </ul>
          </ul>
          <div></div>
          <p>
            Only the 20 standard amino acids and seleno methionine within a
            polymer entity that have computed RSCC values are colored by this
            quality assessment measure. The complete RSCC value distribution
            lookup table for each amino acid type, by resolution is
            <a
              href="https://cdn.rcsb.org/rcsb-pdb/img/summary_for_help.tsv"
              target="_blank"
            >
              available here
            </a>
            . <br />
            <br />
            Note the following exceptions:
            <br />
            1. Structures determined by experimental methods other than X-ray
            crystallography (e.g., NMR, and EM) do not have options for coloring
            by Experimental Support Confidence.
            <a href="/3d-view/7LDF" target="_blank">
              See example
            </a>
            . <br />
            2. Structures determined using X-ray crystallography for which RSCC
            are not available (i.e., cannot be calculated because structure
            factor data are not available) display an error message “Failed to
            obtain RSCC values”.
            <a href="/3d-view/4hhb/" target="_blank">
              See example
            </a>
            . <br />
            3. Non-standard amino acids (e.g., phosphotyrosine), nucleic acids,
            carbohydrates, ligands, and water molecules are all marked gray.
            <a href="/3d-view/7W7X" target="_blank">
              See example
            </a>
            .
          </p>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md14-2.png"
                      data-toggle="lightbox"
                      data-title="Figure 14: Quality Assessment options for experimental structures"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md14-2.png"
                        alt="Figure 14: Quality Assessment options for experimental structures"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 14: Quality Assessment options for experimental
                    structures
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Computed structure models (CSMs) loaded into Mol* may be colored
              based on:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                <b>
                  pLDDT (predicted local distance difference test) confidence
                  score
                </b>
                (see Figure 15)
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  This coloring scheme is based on an individual amino acid
                  residue-level confidence score developed by DeepMind for the
                  AlphaFold2 project (
                  <a
                    href="https://doi.org/10.1038/s41586-021-03819-2"
                    target="_blank"
                  >
                    Jumper et al., 2021
                  </a>
                  ). It ranges between 0 and 100, and is described in detail in
                  <a
                    href="https://doi.org/10.1038/s41586-021-03828-1"
                    target="_blank"
                  >
                    Tunyasuvanakool et al., 2021
                  </a>
                  . According to this color scheme
                </li>
                <ul style={{ paddingLeft: '40px' }}>
                  <li>Blue = Very high confidence (&gt; 90)</li>
                  <li>Cyan = Confident (between 90 and 70) </li>
                  <li>Yellow = Low confidence (between 70 and 50)</li>
                  <li>Orange = Very low confidence (&lt; 50)</li>
                </ul>
              </ul>
            </ul>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md15-revised.png"
                      data-toggle="lightbox"
                      data-title="Figure 15: Quality Assessment options for CSMs"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md15-revised.png"
                        alt="Figure 15: Quality Assessment options for CSMs"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 15: Quality Assessment options for CSMs
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            Note: Regions of a CSM with pLDDT scores below 50 are likely be
            disordered (
            <a href="https://doi.org/10.1016/j.jmb.2021.167208" target="_blank">
              Ruff and Pappu, 2021
            </a>
            ), assuming the protein is not interacting with another
            macromolecule and/or a ligand(s).
          </p>
          <a className="content-anchor" id="assembly-symmetry-panel"></a>
          <h3>Assembly Symmetry Panel</h3>
          <p>
            The Assembly Symmetry Panel demonstrates any symmetries within the
            molecule when displayed in Assembly mode. Once enabled, any
            symmetries that are in the molecule will be available as a drop-down
            menu to display and visualize on the 3D canvas (Figure 16).
            Additionally, the
            <a href="/docs/3d-viewers/mol*/common-actions#color">coloring</a> of
            the symmetry can be adjusted.
          </p>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/assemblysymmetrypanel.png"
                      data-toggle="lightbox"
                      data-title="Figure 16: Options to view Assembly Symmetry"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/assemblysymmetrypanel.png"
                        alt="Figure 16: Options to view Assembly Symmetry"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 16: Options to view Assembly Symmetry
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="export-models"></a>
          <h3>Export Models</h3>
          <p>
            The Export Models panel (Figure 17) allows users to download the 3D
            structural data loaded into the viewer as .CIF files. The export
            panel is made available when at least 1 structure is loaded. The
            structure files can be saved locally in the default download
            location in either
            <a
              href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/beginner%E2%80%99s-guide-to-pdb-structures-and-the-pdbx-mmcif-format"
              target="_blank"
            >
              mmCIF
            </a>
            or Binary mmCIF format (
            <a
              href="https://doi.org/10.1371/journal.pcbi.1008247"
              target="_blank"
            >
              Sehnal et al., 2020
            </a>
            ).
          </p>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md15-2.png"
                      data-toggle="lightbox"
                      data-title="Figure 17: Options to expert model coordinates"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md15-2.png"
                        alt="Figure 17: Options to expert model coordinates"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 17: Options to expert model coordinates
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="export-animation"></a>
          <h3>Export Animation</h3>
          <p>
            The Export Animation panel (Figure 18) allows users to easily create
            and export molecular animations as videos.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>The available options include:</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                <b>Animate Trajectory</b>: can be used to animate multiple
                models (e.g., NMR data:
                <a href="/3d-view/1nmr" target="_blank">
                  /3d-view/1nmr
                </a>
                ). The animation renders one model after another and combines
                them into a .mp4 video.
              </li>
              <li>
                <b>Camera Spin</b>: gives a molecule 360 spin around the
                vertical axis. The rotation can be performed clockwise or
                counterclockwise.
              </li>
              <li>
                <b>Unwind Assembly</b>: animates a process of transforming chain
                copies from an asymmetric unit to an assembly by sequentially
                applying transformations to all chains.
              </li>
            </ul>
            <li>
              Control the output file size select the following video output
              options:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Click on the screenshot icon in the Toggle menu </li>
              <li>
                Expand the viewport options to select a lower resolution to
                yield a smaller file size.
              </li>
            </ul>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md16.png"
                      data-toggle="lightbox"
                      data-title="Figure 18: Options to select resolution and adjust saved file size."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md16.png"
                        alt="Figure 18: Options to select resolution and adjust saved file size."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 18: Options to select resolution and adjust saved
                    file size.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Control the position of the molecular rotation axis ((Figure 19)
              as follows:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>The default rotation axis is along the vertical axis. </li>
              <li>
                Change the orientation of the molecule to see a desired view.
              </li>
              <li>
                Using camera orientation axes (triangular element located in the
                left lower corner) can help quickly reorient the molecule.
              </li>
            </ul>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md17-2.png"
                      data-toggle="lightbox"
                      data-title="Figure 19: Options to control molecular rotation axis"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md17-2.png"
                        alt="Figure 19: Options to control molecular rotation axis"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 19: Options to control molecular rotation axis
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="export-geometry"></a>
          <h3>Export Geometry</h3>
          <p>
            This panel allows users to save 3D objects in the binary .glb
            format. These files can be used to save 3D scenes, models, lighting,
            materials, node hierarchy and animations for transfer to other tools
            and platforms.
          </p>
          <a className="content-anchor" id="import-panel"></a>
          <h3>Import Panel</h3>
          <p>
            <i>
              (Only available at <a href="/3D-view">rcsb.org/3D-view</a>)
            </i>
            <br />
            <br />
            The Import Panel (Figure 20) enables users to upload multiple
            molecular structures into Mol* to compare them or perform
            superpositions. The Import Panel can only be accessed at
            <a href="/3D-view">rcsb.org/3D-view</a> and is located at the top of
            the Controls Panel.
            <br />
            <br />
            There are two ways to import files into Mol*:
            <br />
            <br />
            <b>Open Files:</b> The Open Files menu is used to upload structures
            from computer files. The acceptable formats for these files may be
            seen by clicking on the words Volume, Coordinates, Trajectory
            etc.(Figure 20B). The menu also provides structure display options.
            To automatically view the structure in the 3D canvas, set Visuals to
            “On.” After a file is selected and the desired options are chosen,
            click “Apply” to upload the structure.
            <br />
            <br />
            <b>Download Structure:</b> The Download Structure menu is used to
            access or download structures directly from various archives such as
            the PDB, PDB-Dev, SWISS-MODEL, AlphaFold DB, Model Archive, or
            PubChem by inputting IDs/accession codes (Figure 20B). The
            identifiers of multiple structures can be listed at once by
            separating them with commas (Figure 20C). After the identifiers have
            been inputted, click “Apply” to upload the structures.
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md20.png"
                      data-toggle="lightbox"
                      data-title="Figure 20: Options to import data into Mol* - A. Default options to open or download structures; B. Additional file formats to upload and data resources to call in data from; C. options to call (download) multiple structures into Mol* (use comma separated list)."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md20.png"
                        alt="Figure 20: Options to import data into Mol* - A. Default options to open or download structures; B. Additional file formats to upload and data resources to call in data from; C. options to call (download) multiple structures into Mol* (use comma separated list)."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 20: Options to import data into Mol* - A. Default
                    options to open or download structures; B. Additional file
                    formats to upload and data resources to call in data from;
                    C. options to call (download) multiple structures into Mol*
                    (use comma separated list).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="session-panel"></a>
          <h3>Session Panel</h3>
          <p>
            <i>
              (Only available at <a href="/3D-view">rcsb.org/3D-view</a>)
            </i>
            <br />
            <br />
            The Session Panel enables users to save sessions and views. Sessions
            are downloaded as computer files which can be opened in Mol* at any
            time. In addition, users can share session files with others to
            collaborate. Within a Mol* session, users are able to create “views”
            which contain all the information in the 3D canvas at the time the
            views were saved. Multiple views can be saved in a single session.
            The Session Panel can only be accessed at
            <a href="rcsb.org/3D-view">rcsb.org/3D-view</a> and is located in
            the Controls Panel.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Saving Views:</b> The Views menu is used to save views in Mol*.
              Users can name views and write a description for each one. After
              clicking “+ Add,” the view will be saved in the Views menu for the
              entirety of the session (Figure 21A).
            </li>
            <li>
              <b>Deleting/Replacing Views</b>: The Views menu contains a list of
              all saved views. Next to each view is a trash can icon (Figure
              21B). Clicking that icon allows the view to be deleted from the
              Mol* session. To replace a view, click on the horizontal parallel
              arrows icon. This will replace the view with the current view in
              the 3D canvas. Deleting and replacing views are actions that
              cannot be undone.
            </li>
            <li>
              <b>Opening Saved Views</b>: There are two ways to open saved views
              in Mol*.
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                All saved views will be listed in the Views menu (Figure 21 C).
                Click on a view to open it.
              </li>
              <li>
                If multiple views are saved, they can be accessed using a
                drop-down menu at the top of the 3D canvas. Clicking on a view
                will open it. The order in which the views are listed depends on
                the time they were saved. To reorder the views, use the up and
                down arrows next to each view in the Views menu. In default
                mode, use the arrows pointing left and right to switch between
                saved views.
              </li>
            </ul>
            <li>
              <b>Cycle Through Saved Views</b>: In default mode, click the
              “play” button in the toolbar at the top of the 3D canvas to cycle
              between all saved views. Click the “stop” button to stop cycling
              between them.
            </li>
            <li>
              <b>Download/Open Menu</b>: The Download/Open menu allows users to
              save sessions and states. It also allows them to be reopened at
              any time.
            </li>
          </ul>
          <div></div>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md21.png"
                    data-toggle="lightbox"
                    data-title="Figure 21: Options to A. create, B. delete and C. view sessions. "
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md21.png"
                      alt="Figure 21: Options to A. create, B. delete and C. view sessions. "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 21: Options to A. create, B. delete and C. view
                  sessions.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a className="content-anchor" id="superposition-panel"></a>
          <h3>Superposition Panel</h3>
          <p>
            <i>
              (Only available at <a href="/3D-view">rcsb.org/3D-view</a>)
            </i>
            <br />
            <br />
            The Superposition Panel rotates and translates molecular structures
            to make them match other structures. Mol* performs superpositions by
            matching selected chains or atoms. The root-mean-square deviation
            (RMSD) of the superposed structures will be listed in the Log Panel
            at the bottom of the application window. To access the Superposition
            Panel, two or more structures must be uploaded at
            <a href="/3D-view">rcsb.org/3D-view</a>. The Superposition Panel
            will appear in the Controls Panel next to the 3D canvas.
            <br />
            <br />
            To access the Superposition Panel, two or more structures must be
            <a
              href="/docs/3d-viewers/mol*/managing-the-display#import-panel"
              target="_blank"
            >
              imported
            </a>
            at
            <a href="/3D-view" target="_blank">
              rcsb.org/3D-view
            </a>
            . These may be experimental structures or CSMs, that are uploaded
            from saved files or downloaded (called) from various public data
            resources. The Superposition Panel (Figure 22) will appear in the
            Controls Panel next to the 3D canvas.
          </p>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/superpositionpanel.png"
                      data-toggle="lightbox"
                      data-title="Figure 22: Options for Structure Superposition in Mol*"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/superpositionpanel.png"
                        alt="Figure 22: Options for Structure Superposition in Mol*"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 22: Options for Structure Superposition in Mol*
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            <b>Superposing by Chains:</b> In order to superpose structures by
            chains (Figure 23), two or more selections from separate structures
            are required. Regions of a chain can also be selected for
            superposition. For each PDB entry,
            <a href="/docs/3d-viewers/mol*/making-selections#selection-mode">
              selections
            </a>
            must be limited to single polymer
            <a href="/docs/3d-viewers/mol*/making-selections#picking-level">
              chains
            </a>
            per structure. If using a region of a chain, only one region per
            chain can be used for each structure. After making two or more
            selections, click “Superpose” to superpose the structures in the 3D
            canvas. While the superposition is per chain, the resulting 3D
            transformation is always applied to the whole structure. When
            superposing more than two structures, note that the alignment is
            done to the first structure. The RMSD will be listed in the Log
            Panel.
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md23.png"
                      data-toggle="lightbox"
                      data-title="Figure 23: A. Select option for Superposition by Chain; B. Select polymer chains for superposition and then click on Superpose."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md23.png"
                        alt="Figure 23: A. Select option for Superposition by Chain; B. Select polymer chains for superposition and then click on Superpose."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 23: A. Select option for Superposition by Chain; B.
                    Select polymer chains for superposition and then click on
                    Superpose.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            <b>Superposing by Atoms:</b> In order to superpose structures by
            atoms (Figure 24), one or more atoms from separate structures must
            be selected.
            <a href="/docs/3d-viewers/mol*/making-selections#selection-mode">
              Select
            </a>
            one or more
            <a href="/docs/3d-viewers/mol*/making-selections#picking-level">
              atoms
            </a>
            and click “Superpose” to superpose the structures in the 3D canvas.
            The superposition is done on all given pairs of atoms in the order
            they appear in the panel. To reorder the atoms, use the up and down
            arrows in the panel. The RMSD will be listed in the Log Panel.
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md24.png"
                      data-toggle="lightbox"
                      data-title="Figure 24: A. Select Superposition by Atoms; B. Select atoms for Superposition and then click on Superpose."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1192f25aa7b208a9fe3a3/md24.png"
                        alt="Figure 24: A. Select Superposition by Atoms; B. Select atoms for Superposition and then click on Superpose."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 24: A. Select Superposition by Atoms; B. Select atoms
                    for Superposition and then click on Superpose.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            <b>Note</b>: Explore the
            <a href="/alignment" target="_blank">
              Pairwise Structure Alignment
            </a>
            tool for another option for superposing 3D structures.
          </p>
          <a className="content-anchor" id="references"></a>
          <h2>References:</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Jumper, J., Evans, R., Pritzel, A. et al. (2021) Highly accurate
              protein structure prediction with AlphaFold. Nature 596, 583–589.
              <a
                href="https://doi.org/10.1038/s41586-021-03819-2"
                target="_blank"
              >
                https://doi.org/10.1038/s41586-021-03819-2
              </a>
            </li>
            <li>
              Ruff, K.M. and Pappu, R.V. (2021), AlphaFold and Implications for
              Intrinsically Disordered Proteins, Journal of Molecular Biology,
              433, 167208,
              <a
                href="https://doi.org/10.1016/j.jmb.2021.167208"
                target="_blank"
              >
                https://doi.org/10.1016/j.jmb.2021.167208
              </a>
              .
            </li>
            <li>
              Sehnal D, Bittrich S, Velankar S, Koča J, Svobodová R, et al.
              (2020) BinaryCIF and CIFTools—Lightweight, efficient and
              extensible macromolecular data management. PLOS Computational
              Biology 16(10): e1008247.
              <a
                href="https://doi.org/10.1371/journal.pcbi.1008247"
                target="_blank"
              >
                https://doi.org/10.1371/journal.pcbi.1008247
              </a>
            </li>
            <li>
              Shao, C., Bittrich, S., Wang, S., and Burley, S.K., (2022)
              “Assessing PDB Macromolecular Crystal Structure Confidence at the
              Individual Amino Acid Residue Level”, Structure,
              30(10):1385-1394.e3.
              <a
                href="https://doi.org/10.1016/j.str.2022.08.004"
                target="_blank"
              >
                https://doi.org/10.1016/j.str.2022.08.004
              </a>
              .
            </li>
            <li>
              Tunyasuvunakool, K., Adler, J., Wu, Z. et al. Highly accurate
              protein structure prediction for the human proteome. Nature 596,
              590–596 (2021).
              <a
                href="https://doi.org/10.1038/s41586-021-03828-1"
                target="_blank"
              >
                https://doi.org/10.1038/s41586-021-03828-1
              </a>
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
        <div>Last updated: 11/9/2022</div>
      </div>
    </div>
  );
};
