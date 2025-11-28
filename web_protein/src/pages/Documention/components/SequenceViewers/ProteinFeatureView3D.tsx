export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Sequence Viewers</h5>
        <h1>3D Protein Feature View</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#what-is-the-3d-protein-feature-view">
              What is the 3D Protein Feature View?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○<a href="#when-is-the-3d-pfv-useful">When is the 3D PFV Useful?</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#resource-interface">Resource Interface</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#how-to-navigate-through-the-resource">
              How-To Navigate through the Resource
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#3d-structure-mapping-of-1d-sequence-features">
              3D structure mapping of 1D sequence features
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#1d-sequence-projection-of-3d-structural-feature-selections">
              1D sequence projection of 3D structural feature selections
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#examples">Examples</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#3d-mapping-of-1d-annotation">
              3D mapping of 1D annotation
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#focus-on-a-zinc-finger-domain">
              Focus on a zinc finger domain
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#interactions-of-a-specific-residue-">
              Interactions of a specific residue
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#adding-residues-to-a-selection-">
              Adding residues to a selection
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#1d-projection-of-3d-selection">
              1D projection of 3D selection
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#environment-of-an-ion-ligand">
              Environment of an ion/ligand
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#for-developers">For Developers</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <a
            className="content-anchor"
            id="what-is-the-3d-protein-feature-view"
          ></a>
          <h3>What is the 3D Protein Feature View?</h3>
          <p>
            The 3D Protein Feature View (PFV) maps protein sequence features (
            <i>i.e.,</i> 1D protein positions of interest) onto the 3D structure
            of protein assemblies for visualization and analysis. This resource
            integrates structural information from the
            <a href="https://data.rcsb.org/#data-api">RCSB PDB</a> and protein
            positional features (such as sites of mutation, catalytic residues,
            and secondary structural regions) from external resources including
            <a href="https://www.uniprot.org/">UniProt</a>,
            <a href="https://www.cathdb.info/">CATH</a> and
            <a href="https://scop.berkeley.edu/">SCOPe</a>. The integrated
            information is displayed in two dynamically connected panels: the
            <a href="https://molstar.org/">Mol*</a> plugin displays the 3D
            structures of protein assemblies and the RCSB PDB
            <a href="https://rcsb.github.io/rcsb-saguaro/">PFV</a> shows the
            protein sequence positional features.
          </p>
          <a className="content-anchor" id="when-is-the-3d-pfv-useful"></a>
          <h3>When is the 3D PFV Useful?</h3>
          <p>
            This resource integrates 3D structural information of protein
            assemblies and 1D positional features of protein sequences and
            presents it in two dynamically connected panels. Users can use this
            resource to:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>
                Map protein positional features from 1D sequences onto 3D
                structures
              </b>
              . The 3D PFV allows users to visualize protein positional features
              annotations from
              <a href="https://data.rcsb.org/#data-api">RCSB PDB</a>,
              <a href="https://www.uniprot.org/">UniProt</a>,
              <a href="https://www.cathdb.info/">CATH</a> and
              <a href="https://scop.berkeley.edu/">SCOPe</a> in 3D and explore
              neighboring structural features.
            </li>
            <li>
              <b>
                Project 3D protein residues into 1D graphical summaries of
                protein features
              </b>
              . This operation allows users to highlight protein residues of
              interest in 3D structures to explore their local 1D sequence
              annotations, integrated from various resources.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a className="content-anchor" id="resource-interface"></a>
          <h3>Resource Interface</h3>
          <p>
            This feature is available from the <b>Sequence View Tab</b> of the
            Structure Summary page of any PDB entry by clicking on the
            <b>3D PFV</b> link (e.g <a href="/sequence/6Z6P">6z6p</a>). Two
            dynamically connected panels display the integrated data - the
            <a href="https://molstar.org/">Mol*</a> plugin displays the
            structural information of protein assemblies and the RCSB PDB
            <a href="https://rcsb.github.io/rcsb-saguaro/">PFV</a> shows the
            positional features of proteins.
          </p>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/60342ff52087e87def0d0b09/screen-shot-2021-03-30-at-4.42.30-pm.svg"
                      data-toggle="lightbox"
                      data-title="Two dynamically connected panels showing the 3D structure and 1D annotations for the PDB entry 1trz. Options for selecting instances of protein chains to see positional annotations shown in inset."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/60342ff52087e87def0d0b09/screen-shot-2021-03-30-at-4.42.30-pm.svg"
                        alt="Two dynamically connected panels showing the 3D structure and 1D annotations for the PDB entry 1trz. Options for selecting instances of protein chains to see positional annotations shown in inset."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Two dynamically connected panels showing the 3D structure
                    and 1D annotations for the PDB entry 1trz. Options for
                    selecting instances of protein chains to see positional
                    annotations shown in inset.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            The following conventions are used for the two dynamically connected
            panels
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>The 1D sequence display panel:</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Displays positional features for a single protein.</li>
              <li>
                The drop down menu in the top left corner of the panel allows
                users to change the entity and explore its first instance in the
                current assembly
              </li>
              <li>
                RCSB PDB PFV documentation applies (
                <a href="/docs/sequence-viewers/protein-feature-view">link</a>)
              </li>
            </ul>
            <li>The 3D structure display: </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Displays the 3D structure of first assembly in the PDB entry in
                Mol*.
              </li>
              <li>
                Mol* UI can be used to explore the different assemblies that are
                available in the current PDB
              </li>
              <li>
                Mol* documentation applies (
                <a href="/docs/3d-viewers/mol*/getting-started#general-interface">
                  link
                </a>
                )
              </li>
            </ul>
            <li>
              Both panels are dynamically connected so selecting/deselecting a
              region or residue in one of them will trigger the same
              selection/deselection in the other.
            </li>
            <li>
              When any positional feature is selected the sequence display
              panel, the residue or sequence range is highlighted in yellow
              rectangles and the same residues/features are selected in the 3D
              display panel and highlighted in green.
            </li>
            <li>
              To close the 3D structure display click on "Back" on the top right
              corner of the "1D Positional Features" panel. This will take you
              back to the original view of the Sequence View tab for that
              structure
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="how-to-navigate-through-the-resource"
          ></a>
          <h3>How-To Navigate through the Resource</h3>
          <a
            className="content-anchor"
            id="3d-structure-mapping-of-1d-sequence-features"
          ></a>
          <h4>3D structure mapping of 1D sequence features</h4>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Hovering over a positional feature in the PFV will highlight (in
              pink color) its 3D location in the Mol* viewer
            </li>
            <li>
              To visualize a single amino acid of interest in the 3D structure
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Left click on a PFV positional feature in the 1D annotation
                panel to select and highlight the corresponding 3D region in the
                Mol* viewer.
              </li>
              <li>
                If a single residue positional feature is selected in the PFV
                the Mol* plugin will display the residue atomic contacts in its
                environment
              </li>
            </ul>
            <li>
              To visualize more than one residue of interest in the 3D structure
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                For selecting the first residue, left click on a PFV positional
                feature to select and highlight its 3D region in the Mol*
                viewer. Now hold the Shift key and left click on a positional
                feature in the PFV to add the 3D region to the Mol* selection OR
              </li>
              <li>
                Right click on the PFV to select a single residue in the protein
                sequence. The residue will be highlighted and selected in the
                Mol* plugin. Now hold Ctrl and right click on additional
                residues to add to the current selection.
              </li>
            </ul>
            <li>
              To visualize a particular region in the 1D protein sequence (
              <i>e.g.,</i> an alpha helix, beta strand, or SCOP/CATH domain)
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Right click and drag within the PFV to select the particular 1D
                region in the protein sequence. This region will be highlighted
                and selected in the Mol* plugin. The selected positional feature
                is highlighted in yellow in the sequence panel while the
                corresponding 3D region selected in Mol* is zoomed in and
                highlighted in green.
              </li>
              <li>
                The regions may be alpha helices or beta strands, SCOP, PFam
                annotations of a domain <i>etc.</i>
              </li>
            </ul>
            <li>To clear selections</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                In the 1D annotations panel, double left click in the PFV to
                clear all the selected region in the current PFV chain. Note
                that this action will not clear any selections made in other
                chains
              </li>
              <li>
                In the 3D visualization panel, left click on an empty area in
                the Mol* 3D canvas will clear all the selected residues
              </li>
            </ul>
            <li>
              To change the PDB instances for which protein positional features
              are displayed
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                The dropdown menu under "Instance" can be used to select the
                protein entity to explore in the PFV
              </li>
              <li>
                The check boxes next to the chain IDs in the dropdown menu allow
                the user to hide or show the 3D chains in the Mol* plugin
              </li>
            </ul>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="1d-sequence-projection-of-3d-structural-feature-selections"
          ></a>
          <h4>1D sequence projection of 3D structural feature selections</h4>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Hovering over a residue in the Mol* plugin will highlight its 1D
              location in the PFV <b>only</b> if the residue chain ID is the
              current selection in the dropdown menu
            </li>
            <li>
              To examine the sequence position of a residue selected in the 3D
              structure
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Left click on a protein residue in the Mol* plugin and examine
                the residue highlighted in the 1D positional annotation panel
              </li>
            </ul>
            <li>
              To examine the neighborhood of a ligand or ion displayed in the
              Mol* plugin
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Left click on the ligand or ion of interest. This will select
                all residues that are within 5Å of that position. The sequence
                positions of the selected residues are simultaneously
                highlighted in the 1D positional annotation panel.
              </li>
            </ul>
          </ul>
          <div></div>
          <a className="content-anchor" id="examples"></a>
          <h2>Examples</h2>
          <a className="content-anchor" id="3d-mapping-of-1d-annotation"></a>
          <h3>3D mapping of 1D annotation</h3>
          <a className="content-anchor" id="focus-on-a-zinc-finger-domain"></a>
          <h4>Focus on a zinc finger domain</h4>
          <p>
            This example examines the second zinc finger domain of the PDB entry
            4r2d. <br />
            In the sequence panel examine the annotations for the sequence of
            the first PDB entity (chain A) and select the 2nd zinc finger domain
            by clicking on the 2nd green rectangle at the bottom of the panel.
            This region corresponds to residues 39-61 (or 368-390 as per the
            author numbering) and is highlighted with a yellow rectangle
            spanning this sequence region. With selection of the sequence
            feature, the corresponding residues range is highlighted in green in
            the 3D structure, and Mol* zooms in, focusing and centering on this
            region.
          </p>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/60342ff52087e87def0d0b09/screen-shot-2021-03-30-at-4.27.01-pm.png"
                      data-toggle="lightbox"
                      data-title="Focusing on the second zinc finger domain (a positional feature) in PDB ID 4r2d, selected  from the 1D sequence panel"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/60342ff52087e87def0d0b09/screen-shot-2021-03-30-at-4.27.01-pm.png"
                        alt="Focusing on the second zinc finger domain (a positional feature) in PDB ID 4r2d, selected  from the 1D sequence panel"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Focusing on the second zinc finger domain (a positional
                    feature) in PDB ID 4r2d, selected from the 1D sequence panel
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a
            className="content-anchor"
            id="interactions-of-a-specific-residue-"
          ></a>
          <h4>Interactions of a specific residue</h4>
          <p>
            This example examines the 3D structural location of a single residue
            selected in the PDB entry 4r2d. <br />
            In the sequence panel examine the annotations and click on a residue
            marked as a zinc binding site in the second zinc finger domain
            (chain A, residue 41 or residue 370 by author numbering). The
            residue is highlighted with yellow rectangle in the sequence panel
            and the corresponding residue is highlighted in green in the 3D
            structure. In addition to focusing in on this residue in the Mol*
            panel it displays the non-covalent interactions within 5Å of the
            selected residue with dashed lines between interacting atoms.
          </p>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/60342ff52087e87def0d0b09/screen-shot-2021-03-30-at-4.28.18-pm.png"
                      data-toggle="lightbox"
                      data-title="Selecting a single zinc binding amino acid in the second zinc finger domain of PDB ID 4r2d from the 1D sequence panel and exploring its 3D environment."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/60342ff52087e87def0d0b09/screen-shot-2021-03-30-at-4.28.18-pm.png"
                        alt="Selecting a single zinc binding amino acid in the second zinc finger domain of PDB ID 4r2d from the 1D sequence panel and exploring its 3D environment."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Selecting a single zinc binding amino acid in the second
                    zinc finger domain of PDB ID 4r2d from the 1D sequence panel
                    and exploring its 3D environment.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a
            className="content-anchor"
            id="adding-residues-to-a-selection-"
          ></a>
          <h4>Adding residues to a selection</h4>
          <p>
            This example examines the 3D structural location of a group of
            residues selected in the PDB entry 4r2d. <br />
            Begin by selecting the first alpha helix (the one that is part of
            the first zinc finger domain) from the annotations in the 1D
            sequence panel. In chain A this spans residues 22-35 (or residues
            351-364 by the author numbering). To add one of the zinc binding
            residues in this zinc finger domain to the selection hold the shift
            key and click on the positional feature (<i>e.g.,</i> residue 16 (or
            345 by the author numbering)). This additional residue (or feature)
            is selected and highlighted in green in the 3D structure along with
            the first helix. If single residues are added to the selection, the
            Mol* will zoom into the last residue selected and display the
            non-covalent interactions in its environment. However, if additional
            regions are added to the selection they will just be selected and
            highlighted in green. Mol* functions may be used to display and
            analyze these regions.
          </p>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/60342ff52087e87def0d0b09/screen-shot-2021-03-30-at-4.30.35-pm.png"
                      data-toggle="lightbox"
                      data-title="Selecting a specific positional features of PDB ID 4r2d from the 1D sequence panel - 1 helix and a zinc binding amino acid."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/60342ff52087e87def0d0b09/screen-shot-2021-03-30-at-4.30.35-pm.png"
                        alt="Selecting a specific positional features of PDB ID 4r2d from the 1D sequence panel - 1 helix and a zinc binding amino acid."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Selecting a specific positional features of PDB ID 4r2d from
                    the 1D sequence panel - 1 helix and a zinc binding amino
                    acid.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="1d-projection-of-3d-selection"></a>
          <h3>1D projection of 3D selection</h3>
          <a className="content-anchor" id="environment-of-an-ion-ligand"></a>
          <h4>Environment of an ion/ligand</h4>
          <p>
            This example examines the 1D sequence annotations of residues in the
            environment of a specific zinc ion in the PDB entry 4r2d. <br />
            In the 3D structure panel click on a zinc ion numbered 502 (author
            chain ID A) and all residues in 5Å of this zinc ion are selected in
            both the 3D structure and 1D sequence panel. <br />
            You can now expand Mol* to a fullscreen view to provide fine-grained
            control over the view and activate all the Mol* functions. Using
            these options you can display the side chains of these residues in
            ball-and-stick representation.
          </p>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/60342ff52087e87def0d0b09/screen-shot-2021-03-30-at-4.32.58-pm.svg"
                      data-toggle="lightbox"
                      data-title="Projecting the residues in the environment of a zinc ion in PDB ID 4r2d from the 3D structure to examine its 1D sequence annotations. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/60342ff52087e87def0d0b09/screen-shot-2021-03-30-at-4.32.58-pm.svg"
                        alt="Projecting the residues in the environment of a zinc ion in PDB ID 4r2d from the 3D structure to examine its 1D sequence annotations. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Projecting the residues in the environment of a zinc ion in
                    PDB ID 4r2d from the 3D structure to examine its 1D sequence
                    annotations.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="for-developers"></a>
          <h2>For Developers</h2>
          <p>
            The Protein Feature Viewer is an Open Source project written in
            TypeScript. It is available at
            <a href="https://github.com/rcsb/rcsb-saguaro-3d">github.com</a>
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
        <div>Last updated: 11/2/2021</div>
      </div>
    </div>
  );
};
