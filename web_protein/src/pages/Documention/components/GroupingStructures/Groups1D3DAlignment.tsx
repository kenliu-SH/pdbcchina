export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Grouping Structures</h5>
        <h1>Groups 1D-3D Alignment</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#what-is-the-groups-1d-3d-alignment-viewer">
              What is the Groups 1D-3D Alignment Viewer?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#why-use-groups-1d-3d-alignment-viewer">
              Why use Groups 1D-3D Alignment Viewer?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#access">Access</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#interface">Interface</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#how-to-use-the-1d-3d-alignment-viewer">
              How to use the 1D-3D Alignment Viewer
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#examples">Examples</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <a
            className="content-anchor"
            id="what-is-the-groups-1d-3d-alignment-viewer"
          ></a>
          <h3>What is the Groups 1D-3D Alignment Viewer?</h3>
          <p>
            The 1D-3D Alignment tool displays multiple alignments of protein at
            1D sequence and 3D structure levels. Multiple Sequence Alignments
            (MSAs) are computed for groups of proteins
            <a
              href="/docs/grouping-structures/grouping-search-results#grouping-by-sequence-identity"
              target="_blank"
            >
              based on sequence identity
            </a>
            or
            <a
              href="/docs/grouping-structures/grouping-search-results#grouping-by-uniprot-accession"
              target="_blank"
            >
              by UniProt accession
            </a>
            .
          </p>
          <a
            className="content-anchor"
            id="why-use-groups-1d-3d-alignment-viewer"
          ></a>
          <h3>Why use Groups 1D-3D Alignment Viewer?</h3>
          <p>This tool allows users to quickly and easily view:</p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Alignment of multiple PDB structures and Computed Structure Model
              (where available) based on specific sequence identity or mapping
              to a specific UniProt entry.
            </li>
            <li>
              Positional variations of specific amino acids of interest in
              different instances of polymer entities in PDB structures as
              identified in the sequence (1D panel). The conformational
              variations may be due to mutations or due to presence of ligands
              or partner biomolecules.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a className="content-anchor" id="access"></a>
          <h3>Access</h3>
          <p>
            The tool or app is available for Sequence Identity Groups or UniProt
            based Groups from Group Summary Pages Carousel (1D-3D Alignments
            link, Figure 1A) and Group Sequence Pages (View 1D-3D Alignments
            link, Figure 1B).
          </p>
          <div>
            <table style={{ width: '70%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6364336066d6046810db7f11/fig1-1d-3d.png"
                      data-toggle="lightbox"
                      data-title="Figure 1. Ways to access the 1D-3D Alignments view from the Group Summary page marked with red outline boxes - A. in Group Summary tab, and B. in Group Sequence tab "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6364336066d6046810db7f11/fig1-1d-3d.png"
                        alt="Figure 1. Ways to access the 1D-3D Alignments view from the Group Summary page marked with red outline boxes - A. in Group Summary tab, and B. in Group Sequence tab "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 1. Ways to access the 1D-3D Alignments view from the
                    Group Summary page marked with red outline boxes - A. in
                    Group Summary tab, and B. in Group Sequence tab
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="interface"></a>
          <h3>Interface</h3>
          <p>
            The interface layout for the 1D-3D view of members in the group is
            described here.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Page layout</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                The 1D Protein Feature Viewer (PFV) displays the multiple
                sequence alignment on the left hand side of the web page, while
                3D structures of protein entities selected to be active from the
                MSA can be viewed in the panel on the right. An example of a
                1D-3D Alignment for Sequence Identity group is shown in Figure
                2, while an example of a 1D-3D Alignment for grouping based on
                UniProt accession is shown in Figure 3.
              </li>
              <li>
                Note this UniProt Accession based group page maps annotations
                from UniProt on the 1D multiple sequence alignment (Figure 3).
              </li>
              <li>
                When more than 50 polymer sequences are present in the group,
                the results are paginated (see button included in the back
                outlined box in Figure 2).
              </li>
            </ul>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6364336066d6046810db7f11/fig2-new-1d3d.png"
                      data-toggle="lightbox"
                      data-title="Figure 2: Interface  of a sequence identity based group’s 1D-3D Alignment View showing the 1D sequence alignment (red outline box) and active or selected 3D structures from the alignment (blue outline box). Buttons to display 1D multiple sequence alignment of group members in pages (black outline box). "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6364336066d6046810db7f11/fig2-new-1d3d.png"
                        alt="Figure 2: Interface  of a sequence identity based group’s 1D-3D Alignment View showing the 1D sequence alignment (red outline box) and active or selected 3D structures from the alignment (blue outline box). Buttons to display 1D multiple sequence alignment of group members in pages (black outline box). "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 2: Interface of a sequence identity based group’s
                    1D-3D Alignment View showing the 1D sequence alignment (red
                    outline box) and active or selected 3D structures from the
                    alignment (blue outline box). Buttons to display 1D multiple
                    sequence alignment of group members in pages (black outline
                    box).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6364336066d6046810db7f11/fig3-new-1d3d.png"
                      data-toggle="lightbox"
                      data-title="Figure 3: Interface of a UniProt Accession based group’s 1D-3D Alignment View showing the 1D sequence alignment (red outline box) and active or selected 3D structures from the alignment (blue outline box). Mapping of annotations from UniProt on the 1D sequence alignment (black outline box).  "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6364336066d6046810db7f11/fig3-new-1d3d.png"
                        alt="Figure 3: Interface of a UniProt Accession based group’s 1D-3D Alignment View showing the 1D sequence alignment (red outline box) and active or selected 3D structures from the alignment (blue outline box). Mapping of annotations from UniProt on the 1D sequence alignment (black outline box).  "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 3: Interface of a UniProt Accession based group’s
                    1D-3D Alignment View showing the 1D sequence alignment (red
                    outline box) and active or selected 3D structures from the
                    alignment (blue outline box). Mapping of annotations from
                    UniProt on the 1D sequence alignment (black outline box).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Color scheme</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                The 1D sequence alignment is displayed using specific color
                schemes (see Figures 2 and 3). Learn
                <a
                  href="/docs/sequence-viewers/protein-feature-view#conventions"
                  target="_blank"
                >
                  more about the color schemes
                </a>
                .
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  The sequences of PDB experimental protein positions are
                  represented as binary colors blue and gray, indicating if
                  residue’s 3D coordinates are available in the structure or
                  not, respectively.
                </li>
                <li>
                  Aligned sequences of Computed structure Models (CSMs) are
                  colored based on their local pLDDT scores. Learn
                  <a
                    href="/docs/3d-viewers/mol*/managing-the-display#quality-assessment-panel"
                    target="_blank"
                  >
                    more about the pLDDT color scheme
                  </a>
                  .
                </li>
              </ul>
              <li>
                The 3D structure is displayed so that each polymer chain is
                displayed in a different color.
              </li>
            </ul>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="how-to-use-the-1d-3d-alignment-viewer"
          ></a>
          <h3>How to use the 1D-3D Alignment Viewer</h3>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The Group 1D-3D Viewer page opens the 3D structure of only one
              structure (for simplicity, see Figures 2 and 3)
            </li>
            <li>
              Add new proteins to the 3D view by clicking on the structure
              identifier in the 1D multiple sequence alignment, to activate and
              display it (Figure 4B). The newly displayed structure is shown
              superposed on the first structure displayed (Figure 4A).
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                By clicking on a loaded structure identifier such structure will
                be removed from the 3D viewer and deselected from the alignment
              </li>
              <li>
                The first loaded structure is the reference for the structural
                alignment. To change this reference, empty all the active
                structures and select a new one as the reference.
              </li>
            </ul>
            <li>
              Once a structure in the 1D-multiple sequence alignments is
              activated additional boxes appear next to the structure ID (Figure
              4B).
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                The first box (on the left) can Hide/Display aligned instance
              </li>
              <li>
                The second box (in the middle) can Hide/Display all polymer
                instances excluding the aligned one
              </li>
              <li>
                The third box (on the right) can Hide/Display all non-polymer
                instance
              </li>
              <li>
                When the respective boxes are colored deep blue the
                polymer(s)/non-polymers are displayed (display mode of the box),
                while gray boxes with a blue outline represent the hide mode.
              </li>
              <li>
                If no additional polymers or non-polymers are present in an
                active structure the corresponding boxes are not shown (see
                Figure 4B and C).
              </li>
            </ul>
            <li>
              Groups with more than 50 members are listed as pages to reduce
              page loading time. Explore these pages by clicking on the button
              “1-50 &gt;” and activate group members in different pages as
              needed.
            </li>
            <li>
              Click on the “Pin Active” button to display the 1D sequence of all
              structures loaded in the 3D view on the top of the 1D multiple
              sequence alignment (Figure 4C).
            </li>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6364336066d6046810db7f11/fig4-new1d3d.png"
                      data-toggle="lightbox"
                      data-title="Figure 4: Options to use the Group 1D-3D Viewer: A. The 1D-3D view of a group based on sequence identity; B. Zoomed in view of the options to select structures in the multiple sequence alignment to make active, display aligned polymer, other polymers and non-polymers in the structure; C. Buttons to view group members in pages and a button to show all active proteins on top. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6364336066d6046810db7f11/fig4-new1d3d.png"
                        alt="Figure 4: Options to use the Group 1D-3D Viewer: A. The 1D-3D view of a group based on sequence identity; B. Zoomed in view of the options to select structures in the multiple sequence alignment to make active, display aligned polymer, other polymers and non-polymers in the structure; C. Buttons to view group members in pages and a button to show all active proteins on top. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 4: Options to use the Group 1D-3D Viewer: A. The
                    1D-3D view of a group based on sequence identity; B. Zoomed
                    in view of the options to select structures in the multiple
                    sequence alignment to make active, display aligned polymer,
                    other polymers and non-polymers in the structure; C. Buttons
                    to view group members in pages and a button to show all
                    active proteins on top.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Selection of specific residues on the 1D panel (by clicking on it
              or using Control+Click) will select the corresponding
              residues/region(s) in the 3D view being displayed. Similarly,
              selection in 3D structure will select the selected position in the
              1D panel (see red outlined box regions in Figure 5)
            </li>
            <li>
              Shift+Click on the entity Id allows you to navigate to the entity
              on the Structure Summary Page for the structure to learn more
              about that structure
            </li>
          </ul>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              New proteins can be added to the 3D view by clicking on the
              polymer entity listed in the MSA in the 1D panel (red box in
              Figure 2). The 3D structure of the selected entity is aligned with
              the currently visible displayed structures and the superposition
              is displayed.
            </li>
            <li>
              Multiple proteins can be simultaneously superimposed and displayed
              by clicking on entity Id row title to load the entity/entry
            </li>
          </ul>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Blue boxes next to the entity ID row titles allow users to
              show/hide different parts of the 3D structure (Figure 3)
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                The first box (on the left) can Hide/Display aligned instance
              </li>
              <li>
                The second box (in the middle) can Hide/Display all polymer
                instances excluding the aligned one
              </li>
              <li>
                The third box (on the right) can Hide/Display all non-polymer
                instance
              </li>
            </ul>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6364336066d6046810db7f11/fig4-1d-3d.png"
                      data-toggle="lightbox"
                      data-title="Figure 5: Selecting residues in the 1D panel (red outlined box) selects the corresponding region in the 3D structure for all displayed entities. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6364336066d6046810db7f11/fig4-1d-3d.png"
                        alt="Figure 5: Selecting residues in the 1D panel (red outlined box) selects the corresponding region in the 3D structure for all displayed entities. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 5: Selecting residues in the 1D panel (red outlined
                    box) selects the corresponding region in the 3D structure
                    for all displayed entities.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="examples"></a>
          <h2>Examples</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a
                href="/groups/3d-sequence/polymer_entity/P01112"
                target="_blank"
              >
                1D-3D Multiple Sequence Alignment View: P01112
              </a>
              (GTPase HRas)
            </li>
            <li>
              <a
                href="/groups/3d-sequence/polymer_entity/P69905"
                target="_blank"
              >
                1D-3D Multiple Sequence Alignment View: P69905
              </a>
              (Hemoglobin subunit alpha)
            </li>
            <li>
              One example of a
              <a
                href="/groups/3d-sequence/polymer_entity/241_30"
                target="_blank"
              >
                1D-3D Multiple Sequence Alignment View (with 30% sequence
                identity)
              </a>
            </li>
            <li>
              Another example of a
              <a href="/groups/3d-sequence/polymer_entity/3_30" target="_blank">
                1D-3D Multiple Sequence Alignment View (with 30% sequence
                identity)
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
        <div>Last updated: 12/15/2022</div>
      </div>
    </div>
  );
};
