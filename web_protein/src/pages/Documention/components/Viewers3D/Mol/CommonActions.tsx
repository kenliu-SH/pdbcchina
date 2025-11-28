export default () => {
  return (
    <>
      <div className="col-lg-9 col-md-8 col-sm-12 content-item">
        <div data-elastic-include="">
          <h5 className="menu-path">3D Viewers &gt; Mol*</h5>
          <h1>Common Actions</h1>
          <div>
            <div style={{ paddingLeft: '20px' }}>
              ●
              <a href="#what-do-you-do-when-you-visualize-a-structure-">
                What do you do when you visualize a structure?
              </a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○
              <a href="#view-overall-shape-and-composition">
                View overall shape and composition
              </a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○ <a href="#change-representations-">Change representations </a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○ <a href="#examine-the-neighborhood">Examine the neighborhood</a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○
              <a href="#select-all-or-parts-of-the-molecule-to-measure-color-label-etc">
                Select all or parts of the molecule to measure, color, label
                etc.
              </a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■ <a href="#show-or-hide">Show or Hide</a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■ <a href="#color">Color</a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■ <a href="#label-measure">Label, Measure</a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○ <a href="#customize-and-save-views">Customize and Save views</a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■ <a href="#background-">Background </a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■ <a href="#focus-">Focus </a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■ <a href="#transparency">Transparency</a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■ <a href="#clip-planes">Clip Planes</a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■
              <a href="#light-and-shade-object-ambient-occlusion-effect-">
                Light and Shade object Ambient Occlusion Effect
              </a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■ <a href="#screenshots">Screenshots</a>
            </div>
            <a
              className="content-anchor"
              id="what-do-you-do-when-you-visualize-a-structure-"
            ></a>
            <h2>What do you do when you visualize a structure?</h2>
            <p>
              When visualizing any biomolecular structure [experimental
              structures or Computed Structure Models (CSMs)] the following five
              actions are commonly performed:
              <br />
              1. View overall shape and composition (use default mode of Mol*)
              <br />
              2. Change representations of all or parts of the molecule (use
              default mode of Mol*)
              <br />
              3. Examine the neighborhood of one or more residue or ligand (use
              default mode of Mol*)
              <br />
              4. Select all or parts of the molecule to measure, color, label
              etc. (use selection mode of Mol*)
              <br />
              5. Customize and Save views (use options from vertical toggle menu
              in 3D canvas)
              <br />
              <br />
              Each of these actions and their various options are described
              here.
            </p>
            <a
              className="content-anchor"
              id="view-overall-shape-and-composition"
            ></a>
            <h3>View overall shape and composition</h3>
            <p>
              When a biomolecular 3D structure is loaded into Mol* the following
              can help view what the structure looks like and how many proteins,
              nucleic acids, ligands etc. are included in it.
            </p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                In the
                <a
                  href="/docs/3d-viewers/mol*/getting-started#general-interface"
                  target="_blank"
                >
                  3D canvas
                </a>
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  The
                  <a
                    href="/docs/3d-viewers/mol*/getting-started#mouse-controls"
                    target="_blank"
                  >
                    mouse controls
                  </a>
                  can be used to rotate, zoom in, and view the overall shape in
                  the 3D canvas
                </li>
                <li>
                  Polymers (proteins and nucleic acids) are shown in the cartoon
                  representation, while small molecule ligands, cofactors,
                  modified residues etc. are displayed in the ball and stick
                  representation.
                </li>
                <li>
                  Each polymer chain in the structure (with a unique chain
                  identifier) is colored in a different color - indicating the
                  composition of the structure (see
                  <a href="/3d-view/4hhb" target="_blank">
                    example PDB ID 4hhb
                  </a>
                  ). Note, in some cases multiple chains in an assembly may be
                  computed based on crystallography symmetry, in this case the
                  symmetry related chains may have the same color (see
                  <a href="/3d-view/9dna" target="_blank">
                    example PDB ID 9dna
                  </a>
                  ). The symmetry related polymer chains can be colored in
                  different colors by coloring them by instance (instead of by
                  Chain ID).
                </li>
              </ul>
              <li>
                In the
                <a
                  href="/docs/3d-viewers/mol*/getting-started#general-interface"
                  target="_blank"
                >
                  Sequence panel
                </a>
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  All the contents of the structure can be identified here -
                  including polymers, non-polymers, waters, ions, and more
                </li>
              </ul>
              <li>
                In the
                <a
                  href="/docs/3d-viewers/mol*/managing-the-display#components-panel"
                  target="_blank"
                >
                  Component panel
                </a>
                section of the Controls panel
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  Select from a variety of preset and default views of different
                  components in the structure. Use these to learn more about the
                  shape and composition of the structure being viewed
                </li>
                <li>
                  In large complex structures, temporarily hiding one or a few
                  components by clicking on the eye icon next to it may help see
                  different components clearly.
                </li>
              </ul>
            </ul>
            <div></div>
            <a className="content-anchor" id="change-representations-"></a>
            <h3>Change representations</h3>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                In the
                <a
                  href="/docs/3d-viewers/mol*/managing-the-display#components-panel"
                  target="_blank"
                >
                  Component
                </a>
                panel section of the Controls panel
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  For an already existing component of interest or a new one
                  being created, click on the “Add Representations” options to
                  change representations to cartoon, ball and stick, spacefill
                  etc..
                </li>
              </ul>
              <li>
                Use the
                <a
                  href="/docs/3d-viewers/mol*/making-selections#selection-mode"
                  target="_blank"
                >
                  Selections options
                </a>
                (turned on by clicking on the arrow in the Toggle menu) to
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  Select the atom, residue, ligand, polymer chain of interest
                  and create a component with the desired representation.
                </li>
              </ul>
            </ul>
            <div></div>
            <a className="content-anchor" id="examine-the-neighborhood"></a>
            <h3>Examine the neighborhood</h3>
            <p>
              To analyze the location, orientation, and interactions of a
              specific residue or ligand requires (a) selecting it; (b)
              displaying it along with its neighboring residues/ligands and (c)
              displaying the covalent and non-covalent interactions in its
              neighborhood.
            </p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                <b>For a specific residue</b> (amino acid/nucleotide) or
                <b>ligand</b> - Click on the residue/ligand in the 3D canvas or
                Sequence Panel (while in the Mol* default mode) to zoom in and
                view the residues and interactions in its neighborhood. Learn
                <a
                  href="/docs/3d-viewers/mol*/maneuvering-in-mol*#focus"
                  target="_blank"
                >
                  more about this options to focus on a residue/ligand
                </a>
                .
              </li>
              <li>
                <b>For a specific ligand of interest</b> - From the structure
                summary page of a structure, click on the Ligand Interactions
                tab in the
                <a
                  href="/docs/exploring-a-3d-structure/structure-summary-page#small-molecules"
                  target="_blank"
                >
                  Small Molecules
                </a>
                section of the page to view the ligand and its neighborhood in
                the structure.
              </li>
              <li>
                <b>For a set of residues or ligands</b> - Select the
                residues/ligands of interest using appropriate
                <a
                  href="/docs/3d-viewers/mol*/maneuvering-in-mol*#selections-logic"
                  target="_blank"
                >
                  Selection logic
                </a>
                . To display the residues/ligands in the neighborhood of the
                selection, activate the
                <a
                  href="/docs/3d-viewers/mol*/making-selections#selection-mode"
                  target="_blank"
                >
                  selection mode
                </a>
                and click on the <b>Add/Union Selections options</b>. From the
                options available in the pulldown menu that opens up select
                <b>Manipulate Selections</b>, and then
                <b>Surrounding Residues (5 Å) of Selections</b> or other options
                available here. With this selection 2 components should be
                created - one to display the selected residues/ligands in ball
                and stick representation and the other to display the
                Non-covalent interactions in this selection. Learn
                <a
                  href="/docs/3d-viewers/mol*/maneuvering-in-mol*#components-logic"
                  target="_blank"
                >
                  more about the components logic
                </a>
                .
              </li>
            </ul>
            <div></div>
            <div>
              <table style={{ width: '40%' }}>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca1.png"
                        data-toggle="lightbox"
                        data-title="Figure 1: Options to select residues, atoms, ligands etc. in the neighborhood of a selection. "
                      >
                        <img
                          style={{ width: '100%' }}
                          className="img-responsive"
                          src="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca1.png"
                          alt="Figure 1: Options to select residues, atoms, ligands etc. in the neighborhood of a selection. "
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="content-img-caption">
                      Figure 1: Options to select residues, atoms, ligands etc.
                      in the neighborhood of a selection.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
            <a
              className="content-anchor"
              id="select-all-or-parts-of-the-molecule-to-measure-color-label-etc"
            ></a>
            <h3>
              Select all or parts of the molecule to measure, color, label etc.
            </h3>
            <p>
              Viewing, hiding, and changing of representation of one or more
              components can provide a better understanding of the shape and
              interactions of the molecule(s) being studied.
            </p>
            <p>
              Selecting all or parts of the molecule(s) being visualized is the
              first step in a variety of functions. This will require activation
              of the
              <a
                href="/docs/3d-viewers/mol*/making-selections#selection-mode"
                target="_blank"
              >
                Selection Mode
              </a>
              of Mol*. Learn
              <a
                href="/docs/3d-viewers/mol*/maneuvering-in-mol*#selections-logic"
                target="_blank"
              >
                more about the Selections Logic
              </a>
              . <br />
              <br />
              Using these options you can select an atom, residue or ligand,
              polymer chain, all instances of a specific entity, etc. Various
              actions may be applied to the selection and are described here.
            </p>
            <a className="content-anchor" id="show-or-hide"></a>
            <h4>Show or Hide</h4>
            <p>
              Once the atoms, residues, chains are selected, two options are
              available - provide specific instructions while the selection is
              still active or create a component for it to provide instructions
              later.
            </p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                While the selection is displayed with a green halo in the 3D
                canvas and sequence panel, clicking on the minus sign in the
                <a
                  href="/docs/3d-viewers/mol*/making-selections#selection-mode"
                  target="_blank"
                >
                  Selection Mode menu
                </a>
                to hide it from display on the 3D canvas.
              </li>
              <li>
                If a
                <a
                  href="/docs/3d-viewers/mol*/maneuvering-in-mol*#components-logic"
                  target="_blank"
                >
                  component is created
                </a>
                it can be viewed or hidden by clicking on the eye icon next to
                it in the Components panel. Specific representations of the
                component can be created to meet the needs of the exploration -
                e.g., see the molecular surface, cartoon, ball and stick or
                other representations.
              </li>
            </ul>
            <div></div>
            <a className="content-anchor" id="color"></a>
            <h4>Color</h4>
            <p>
              There are three ways to color structures using Mol*.
              <br />
              <br />
              <b>Using Selection Mode</b>: this method is best when seeking to
              apply a custom color to a structure.
            </p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Select the parts of the structure to be colored in Selection
                Mode, and while the selection is still active (highlighted in
                green) click on the (paint brush icon) located in the Selection
                Mode toolbar to activate the coloring options.
              </li>
              <li>
                Choose a desired color using the preset colors or create a new
                color using the RGB tool or the Lighten/Darken button to select
                the desired color.
              </li>
              <li>
                Click on the Representations options to select the level of
                selection to which the coloring will be applied.
              </li>
              <li>Click on the Apply Theme button to color the selection. </li>
            </ul>
            <div></div>
            <p>
              Note: This tool can also be used to reset the color of the
              selection by selecting Reset Color in the Action options.
            </p>
            <div>
              <table style={{ width: '80%' }}>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca2.png"
                        data-toggle="lightbox"
                        data-title="Figure 2: Coloring options available from the Selections Model menu. While color options are shown on the left, options to select the part of the structure to be colored is shown on the right. "
                      >
                        <img
                          style={{ width: '100%' }}
                          className="img-responsive"
                          src="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca2.png"
                          alt="Figure 2: Coloring options available from the Selections Model menu. While color options are shown on the left, options to select the part of the structure to be colored is shown on the right. "
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="content-img-caption">
                      Figure 2: Coloring options available from the Selections
                      Model menu. While color options are shown on the left,
                      options to select the part of the structure to be colored
                      is shown on the right.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
            <p>
              <b>Using the Components Panel</b>: this method is best when
              seeking to apply a color based on structural properties of a
              component that has already been created. Click on the button
              containing three dots in the
              <a
                href="/docs/3d-viewers/mol*/managing-the-display#components-panel"
                target="_blank"
              >
                Components Panel
              </a>
              , and then click on the Set Coloring option. There are several
              submenus which allow the component to be colored according to its
              structural properties. For example, it can be colored based on
              chain ID (rainbow from N-terminus to C-terminus), hydrophobicity,
              secondary structure, etc.
            </p>
            <div>
              <table style={{ width: '80%' }}>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca3.png"
                        data-toggle="lightbox"
                        data-title="Figure 3: Options to color a component in Mol* - by atom, chain, and residue properties; Symmetry; Validation; and a few Miscellaneous options.  "
                      >
                        <img
                          style={{ width: '100%' }}
                          className="img-responsive"
                          src="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca3.png"
                          alt="Figure 3: Options to color a component in Mol* - by atom, chain, and residue properties; Symmetry; Validation; and a few Miscellaneous options.  "
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="content-img-caption">
                      Figure 3: Options to color a component in Mol* - by atom,
                      chain, and residue properties; Symmetry; Validation; and a
                      few Miscellaneous options.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
            <p>
              <b>Using the Quality Assessment panel</b>: click on the
              <a
                href="/docs/3d-viewers/mol*/managing-the-display#quality-assessment-panel"
                target="_blank"
              >
                Quality Assessment panel
              </a>
              in the controls pane to access ways for coloring the structure
              based on quality assessment measures for the structure.
            </p>
            <a className="content-anchor" id="label-measure"></a>
            <h4>Label, Measure</h4>
            <p>
              A critical part of 3D structure analysis is to be able to identify
              and label atoms, residues and polymer chains; and measure
              distances, angles, and dihedrals. These functions are all enabled
              from the Measurements panel in the controls panel. Learn
              <a
                href="/docs/3d-viewers/mol*/managing-the-display#measurements-panel"
                target="_blank"
              >
                more about labeling and measurements
              </a>
              .
            </p>
            <a className="content-anchor" id="customize-and-save-views"></a>
            <h3>Customize and Save views</h3>
            <p>
              When visualizing, analyzing, and creating figures for publication
              a few additional aspects of visualization need to be considered. A
              few such considerations are described here.
            </p>
            <a className="content-anchor" id="background-"></a>
            <h4>Background</h4>
            <p>
              There is one way to color backgrounds in Mol*. Click on the
              Settings/Controls Information button in the Toggle Menu. Next to
              the Background option, choose a desired color using the preset
              colors, or create a new color using the RGB tool or the
              Lighten/Darken buttons. If the three dots next to the Background
              option are clicked, an option is provided to make the background
              transparent.
            </p>
            <p>
              The color of the background may be changed for specific purposes.
              To change the background color in Mol*:
            </p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Click on the Settings/Controls Info button in the Toggle Menu.
              </li>
              <li>
                Next to the Background option, choose a desired color using the
                preset colors, or create a new color using the RGB tool or the
                Lighten/Darken buttons.
              </li>
              <li>
                If the three dots next to the Background option are clicked, an
                option is provided to make the background transparent.
              </li>
            </ul>
            <div></div>
            <div>
              <table style={{ width: '80%' }}>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca4.png"
                        data-toggle="lightbox"
                        data-title="Figure 4: Options to change the background color in Mol*. 1. Click on the 'Options"
                      />
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca4.png"
                        alt="Figure 4: Options to change the background color in Mol*. 1. Click on the "
                      />
                    </td>
                  </tr>
                </tbody>
                <tr>
                  <td className="content-img-caption">
                    Figure 4: Options to change the background color in Mol*. 1.
                    Click on the "Options" icon to open the Settings/ Controls
                    Info options; 2. Click on the 3 dots next to Background to
                    view additional options (shown on the right of the image).
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div></div>
          <a className="content-anchor" id="focus-"></a>
          <h4>Focus</h4>
          <p>
            To zoom in and center on the structural feature being examined use
            the Focus options. Learn
            <a
              href="/docs/3d-viewers/mol*/maneuvering-in-mol*#focus"
              target="_blank"
            >
              more about Focus options
            </a>
            .
          </p>
          <a className="content-anchor" id="transparency"></a>
          <h4>Transparency</h4>
          <p>
            Sometimes it may be helpful to see through to examine structural
            features that are behind a specific residue, ligand, or other
            structural feature. To change the transparency of a representation
            and surface:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Select all or part of the structure using options from the
              <a href="/docs/3d-viewers/mol*/making-selections" target="_blank">
                Selection Mode
              </a>
              .
            </li>
            <li>
              Click on the arrow icon in the Toggle menu to view the Selection
              Mode toolbar.
            </li>
            <li>
              Click on the paint brush icon and in the space next to “Action”.
              From the options displayed, select “Transparency”. Then use the
              Value slide to set the transparency of the selected structure. A
              value of 0 is completely opaque, and a value of 1 is completely
              transparent. Select the desired value of transparency and click on
              Apply Theme.
            </li>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca5.png"
                      data-toggle="lightbox"
                      data-title="Figure 5: Options to change a component's transparency."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca5.png"
                        alt="Figure 5: Options to change a component's transparency."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 5: Options to change a component's transparency.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            A variety of submenus allow customization of molecular surfaces
            including their transparency. For example, to create a
            semi-transparent representation of the molecule:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Select all or part of the structure to display its molecular
              surface.
            </li>
            <li>Expand the options for the Molecular surface </li>
            <li>
              You can change the Opacity settings slider to see through the
              surface.
            </li>
            <li>
              You can also click on the Advanced options &gt;&gt; Shading
              options &gt;&gt; and Xray shaded mode. In this mode the
              translucency applies to the molecule such that the rim of surfaces
              is more opaque so you see the inside of the representation but the
              silhouette or shape is better emphasized.
            </li>
          </ul>
          <div></div>
          <p>
            Although every representation has these options, it is particularly
            useful for molecular surface representation. Descriptions of the
            options will appear in tooltips in the future versions of Mol*
            library.
          </p>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca6-revised.png"
                      data-toggle="lightbox"
                      data-title="Figure 6: Steps to display a transparent molecular surface - 1. expand the molecular surface options; 2. open the Advanced Options menu; 3. expand the shading options; 4. turn on the X-ray Shaded option. The above steps were applied to the structure of myoglobin (PDB entry 1mbo) and the resulting view is shown on the left of the figure. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca6-revised.png"
                        alt="Figure 6: Steps to display a transparent molecular surface - 1. expand the molecular surface options; 2. open the Advanced Options menu; 3. expand the shading options; 4. turn on the X-ray Shaded option. The above steps were applied to the structure of myoglobin (PDB entry 1mbo) and the resulting view is shown on the left of the figure. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 6: Steps to display a transparent molecular surface -
                    1. expand the molecular surface options; 2. open the
                    Advanced Options menu; 3. expand the shading options; 4.
                    turn on the X-ray Shaded option. The above steps were
                    applied to the structure of myoglobin (PDB entry 1mbo) and
                    the resulting view is shown on the left of the figure.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="clip-planes"></a>
          <h4>Clip Planes</h4>
          <p>
            Clipping cuts or slices away parts of structures, surfaces, and
            objects from view. There are two ways to manually change the
            clipping planes using Mol*.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Use Shift + Mouse Wheel to move the front and back clipping
              planes. On a touchpad, use Shift + two-finger drag.
            </li>
            <li>Use the settings button and the clipping slider</li>
          </ul>
          <div></div>
          <p>
            Note that
            <a href="/docs/3d-viewers/mol*/maneuvering-in-mol*#focus">
              focusing
            </a>
            on an object will automatically change the clipping planes to
            display the object of interest.
          </p>
          <div>
            <table style={{ width: '50%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca7.png"
                      data-toggle="lightbox"
                      data-title="Figure 7: Options to adjust thickness of the section being viewed by changing clipping planes. Options appear after clicking on the options icon (red box with solid lines)."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca7.png"
                        alt="Figure 7: Options to adjust thickness of the section being viewed by changing clipping planes. Options appear after clicking on the options icon (red box with solid lines)."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 7: Options to adjust thickness of the section being
                    viewed by changing clipping planes. Options appear after
                    clicking on the options icon (red box with solid lines).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a
            className="content-anchor"
            id="light-and-shade-object-ambient-occlusion-effect-"
          ></a>
          <h4>Light and Shade object Ambient Occlusion Effect</h4>
          <p>
            In order to appreciate surface details it may be helpful to adjust
            the light and shading settings.
            <br />
            <br />
            For example, ambient occlusion is a shading and rendering method
            used to determine appearance based on how easy light can reach the
            surface. Areas that are occluded from light (e.g., crevices) are
            darkened to add realism and perception of volume to the molecule
            representation. To apply this approach
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Click on the Settings/Controls Info button in the Toggle Menu.
            </li>
            <li>Next to the Occlusion option, select On. </li>
            <li>
              Click on the three dots to open additional options and select as
              appropriate.
            </li>
            <li>
              An examples where this function makes an impact is seen in
              Viruses, e.g.,
              <a href="/3d-view/1rb8" target="_blank">
                PDB ID 1rb8
              </a>
            </li>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '50%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca8.png"
                      data-toggle="lightbox"
                      data-title="Figure 8: Options to adjust light and shade on the object shown in Mol*. 1. Click on the 'Options"
                    />
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca8.png"
                      alt="Figure 8: Options to adjust light and shade on the object shown in Mol*. 1. Click on the "
                    />
                  </td>
                </tr>
              </tbody>
              <tr>
                <td className="content-img-caption">
                  Figure 8: Options to adjust light and shade on the object
                  shown in Mol*. 1. Click on the "Options" icon to open the
                  Settings/ Controls Info options; 2. Click on the 3 dots next
                  to Occlusion and change settings as needed.
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div></div>
        <a className="content-anchor" id="screenshots"></a>
        <h4>Screenshots</h4>
        <p>
          Whether it is for record keeping and analysis or for inclusion in
          publications, posters etc. it is valuable to have easy options to save
          visual images of the molecule(s) under study. Save images from Mol* as
          follows:
        </p>
        <ul style={{ paddingLeft: '40px' }}>
          <li>
            Click on the Camera Shutter icon or the Screenshot/State Snapshot
            button in the Toggle Menu.
          </li>
          <li>
            An auto-crop function is available to define the region of the 3D
            Canvas to include in the screenshot. This is defined by the
            red/orange box around the molecule(s) in the screenshot preview. The
            size of this box can be changed as needed.
          </li>
          <li>
            You can either Download the image directly to your local directory
            or copy the image to clipboard. In the latter case the user will be
            instructed to right click on the image and choose to copy image from
            the context menu
          </li>
        </ul>
        <div></div>
        <div>
          <table style={{ width: '80%' }}>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca9.png"
                    data-toggle="lightbox"
                    data-title="Figure 9: Options to save an image from Mol* and download or copy it to the clipboard. "
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5ee13ac17f50f44e6aa4fb1f/ca9.png"
                      alt="Figure 9: Options to save an image from Mol* and download or copy it to the clipboard. "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 9: Options to save an image from Mol* and download or
                  copy it to the clipboard.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div></div>
        <p>
          The State option at the bottom of the Screenshot/State menu allows
          users to save sessions or state of the molecular visualization. The
          difference between state and session is as follows:
        </p>
        <ul style={{ paddingLeft: '40px' }}>
          <li>
            State files only contain the description of what to do with the data
            (e.g., like jmol script, or vmd files)
          </li>
          <li>
            Sessions files include data files too (e.g., like pymol files)
          </li>
        </ul>
        <div></div>
        <p>
          Learn
          <a
            href="/docs/3d-viewers/mol*/faqs-scenarios#how-can-i-save-a-mol*-session-or-state-and-return-to-it-at-a-later-time"
            target="_blank"
          >
            more about saving and using state and session files
          </a>
          .
        </p>
      </div>
      <div className="item-info">
        <div>
          Please report any encountered broken links to
          <a href="mailto:info@rcsb.org">info@rcsb.org</a>
        </div>
        <div>Last updated: 11/1/2022</div>
      </div>
    </>
  );
};
