export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Exploring a 3D Structure</h5>
        <h1>3D View</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#what-is-the-3d-view">What is the 3D View?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#why-use-the-3d-view">Why use the 3D View?</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#the-interface">The interface</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#learning-about-the-structure">
              Learning about the Structure
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#exploring-other-structures">Exploring other structures</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <p>
            There are many visualization tools available for the exploration and
            analysis of PDB coordinates. The default tool used by the RCSB PDB
            is Mol*, a web-based tool that can be used without downloading or
            installing any software or apps.
          </p>
          <a className="content-anchor" id="what-is-the-3d-view"></a>
          <h3>What is the 3D View?</h3>
          <p>
            The real value of PDB data is the opportunity to visualize molecular
            structures and analyze them in three-dimensions (3D). Each PDB entry
            has a 3D View tab that can be used to upload the coordinate file(s)
            of the structure and display them for interactive analysis using
            Mol*. Detailed information about using the visualization tool is
            available in the Mol* Documentation. Here we introduce the tool in
            the context of exploring a specific structure.
          </p>
          <a className="content-anchor" id="why-use-the-3d-view"></a>
          <h3>Why use the 3D View?</h3>
          <p>
            The interactive visualization tool Mol* enables you to display all
            or selectively display parts of a structure, change molecular
            representations, and color them in meaningful ways to examine,
            explore, measure, and compare molecular structures. The tool also
            allows you to analyze interactions throughout the structure or in
            the neighborhood of a single residue or ligand and to explore
            sequence and structural motifs and features in 3D. The Mol* images
            of all or parts of the structure can be captured for publication,
            communication, and discussions.
          </p>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a className="content-anchor" id="the-interface"></a>
          <h3>The interface</h3>
          <p>
            The Mol* tool, used in the 3D View tab, simultaneously displays the
            molecules in the structure in 3D and the sequences of polymers
            present in the structure, as well as any ligands, ions, water
            molecules etc. For any PDB entry the Mol* interface opens as in
            Figure 1:
          </p>
          <div>
            <table style={{ width: '85%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6182729704fb9835c6ae1893/ssp-3dview-fig1.png"
                      data-toggle="lightbox"
                      data-title="Figure 1: The 3D interactive view of T4 Lysozyme, PDB ID 102l, showing the 3D Canvas, Sequence, and Controls panels."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6182729704fb9835c6ae1893/ssp-3dview-fig1.png"
                        alt="Figure 1: The 3D interactive view of T4 Lysozyme, PDB ID 102l, showing the 3D Canvas, Sequence, and Controls panels."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 1: The 3D interactive view of T4 Lysozyme, PDB ID
                    102l, showing the 3D Canvas, Sequence, and Controls panels.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The 3D canvas is where the molecule is displayed. Moving your
              mouse in this region of the screen allows you to move (rotate,
              translate, and zoom into) the structure.
            </li>
            <li>
              The sequence panel is marked with a horizontal box with a red
              outline. This can be used to click on any one or a group of amino
              acids to center on them and zoom in to see the non-covalent
              interactions around it or them.
            </li>
            <li>
              The Controls panel provides options for you to display, hide,
              change representations, and color the polymer chains and ligands
              displayed.
            </li>
            <li>
              Learn more about the interface and how to use the tool from the
              <a href="/docs/3d-viewers/mol*/getting-started" target="_blank">
                Mol* Documentation
              </a>
              .
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="learning-about-the-structure"></a>
          <h3>Learning about the Structure</h3>
          <p>
            Here are a few things that you can learn about the structure from
            visualizing a bio-molecular structure in Mol*.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Polymer chains: The T4 lysozyme structure shown in Figure 1 has a
              single protein chain (colored green). The first polymer chain in
              an entry is usually colored green. Other polymers in the entry are
              colored in different colors for easy identification and analysis.
            </li>
            <li>
              Ligands: The ligand BME, water molecules, and ions are displayed
              in the ball-and-stick representation and colored according to the
              CPK color scheme. Only the carbon atoms in the ligands are colored
              to match the chain ID with which the ligand is associated.
            </li>
            <li>
              Location and interactions between polymer and non-polymer
              entities: The pulldown menu on top of the sequence panel allows
              you to view any of these polymeric or non-polymeric entities in
              the sequence panel and select the instance from the list of chain
              and asym IDs. The components displayed in the Control panel also
              allow selection and changes in representation of all or specific
              parts of the structure.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="exploring-other-structures"></a>
          <h3>Exploring other structures</h3>
          <p>
            The 3D View tab opens a specific PDB entry in Mol*. However, more
            than one structure may be displayed in the tool in the following
            ways:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The stand-alone Mol* tool allows you to upload multiple
              structures, either by specifying their PDB IDs or by uploading
              files by providing the complete paths for them. Learn
              <a
                href="/docs/3d-viewers/mol*/faqs-scenarios#how-do-i-compare-superpose-multiple-structures"
                target="_blank"
              >
                more about how to compare and superpose structures
              </a>
              .
            </li>
            <li>
              Structures aligned using the pairwise alignment tool can be
              displayed in Mol*. Learn
              <a
                href="/docs/tools/pairwise-structure-alignment"
                target="_blank"
              >
                more about the pairwise structure alignment tool
              </a>
              .
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
        <div>Last updated: 11/19/2021</div>
      </div>
    </div>
  );
};
