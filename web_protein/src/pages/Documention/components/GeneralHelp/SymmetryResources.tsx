export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">General Help</h5>
        <h1>Symmetry Resources in the PDB</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#symmetry-in-protein-assemblies">
              Symmetry in Protein Assemblies
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#symmetry-operations">Symmetry Operations</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#levels-of-symmetry">Levels of Symmetry</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#why-explore-protein-symmetry">
              Why explore protein symmetry?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ●
            <a href="#documentation-accessing-protein-symmetry-information">
              Documentation: Accessing Protein Symmetry Information
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#protein-symmetry-browser">Protein Symmetry Browser</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#protein-symmetry-annotations">
              Protein Symmetry Annotations
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#visualizing-protein-symmetry-in-3d-using-mol*-">
              Visualizing Protein Symmetry in 3D (using Mol*)
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#examples">Examples</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#a-case-with-global-symmetry">
              A Case with Global Symmetry
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#a-case-with-pseudo-symmetry">
              A Case with Pseudo Symmetry
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#references">References</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <p>
            In nature and in structures deposited in the PDB, a majority of
            proteins interact with each other to form assemblies. These
            assemblies play many structural and/or functional roles in biology:
          </p>
          <ol style={{ paddingLeft: '40px' }}>
            <li>
              <i>
                <b>Cooperativity</b>
              </i>
              : This phenomenon is seen in oligomers where the binding of a
              ligand, cofactor, or other molecule causes a change not only at
              the site of interaction but also in neighboring molecules. For
              example, the hemoglobin heterotetramer shows cooperativity in
              binding oxygen. After one of the four hemoglobin subunits binds
              oxygen, it becomes progressively easier for each of the other
              subunits in the protein to bind to oxygen. You can read a review (
              <a href="https://doi.org/10.1038/nrm3695" target="_blank">
                Changeux 2013
              </a>
              ) for more details about cooperativity.
            </li>
            <li>
              <i>
                <b>Multivalent interactions</b>
              </i>
              : Assemblies with multiple binding sites allow multivalent binding
              to a target. For example, antibodies contain two or more identical
              binding sites for an antigen, each created by different copies of
              the proteins in the assembly. These binding sites can strengthen
              the interaction of an antibody with its target, such as a virus,
              by binding to several neighboring sites on the target’s surface.
            </li>
            <li>
              <i>
                <b>Building functional shape</b>
              </i>
              s: Assemblies are widely used in biology for building large
              assemblies with specific functional shapes. For example,
              icosahedral viral capsids are built from many copies of one or a
              few proteins, and channels through membranes are often built from
              multiple copies of proteins forming a tube-like shape.
            </li>
          </ol>
          <div></div>
          <a className="content-anchor" id="symmetry-in-protein-assemblies"></a>
          <h3>Symmetry in Protein Assemblies</h3>
          <p>
            Most often, protein assemblies are symmetrical: they are built of
            many identical subunits that each interact with their neighbors in
            identical ways. Symmetrical assemblies have a major advantage over
            asymmetric assemblies: they are economical to encode in the genome,
            so many copies of a small protein may be used to build a large
            assembly. For example, viral capsids are built from many identical
            proteins (or subunits) arranged with icosahedral symmetry. <br />
            <br />
            Symmetry has fascinated scientists, mathematicians, and artists for
            centuries, and there is a comprehensive formalism for defining
            symmetry in an object. In general, symmetrical objects are defined
            by “symmetry operations.” The simplest symmetry operation is a
            rotation. For a demonstration, take a piece of blank paper and put
            it on a table. Then, rotate it by 180 degrees around its center. It
            will look the same as when you started, so we say that the piece of
            paper has rotational symmetry. Similarly, other symmetry operations
            - translation, reflection, reversal, and inversion - describe other
            ways in which objects can have self-similarity. In biology, since
            most biomolecules have an intrinsic handedness, only two types of
            symmetry operators are relevant: rotation and translation. However,
            combinations of rotation and translation operations still lead to a
            wide variety of different types of symmetrical biomolecular
            assemblies.
          </p>
          <a className="content-anchor" id="symmetry-operations"></a>
          <h3>Symmetry Operations</h3>
          <p>
            Oligomeric assemblies in PDB have either point group symmetry or
            helical symmetry (
            <a
              href="https://doi.org/10.1146/annurev.biophys.29.1.105"
              target="_blank"
            >
              Goodsell and Olson, 2000
            </a>
            ). Point group symmetries are defined by one or more axes of
            rotation that form defined, self-consistent assemblies, while
            helical symmetries combine rotation and translation to form long,
            helical fibers. Several types of these symmetries are commonly found
            in biomolecules:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Cyclic (Cn) symmetry involves the symmetrical placement of
              <i>n</i> identical molecules or groups of molecules around a
              single axis of rotation. For example, in C3 symmetry there are 3
              molecules that are positioned at 360/n (120) degree intervals
              around the axis of rotation (Figure 1a).
            </li>
            <li>
              Dihedral (Dn) symmetry combines an n-fold cyclic axis of symmetry
              with <i>n</i> perpendicular 2-fold rotation axes. For example,
              objects with D3 symmetry have a central 3-fold axis and three
              perpendicular 2-fold axes, together creating an assembly with 6
              identical subunits (Figure 1b).
            </li>
            <li>
              Cubic symmetries contain 3-fold rotational axes combined with
              other, non-perpendicular rotational axes. Three Cubic symmetries
              are commonly seen in protein assemblies:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Tetrahedral (T) symmetry has 2-fold axes intersecting the 3-fold
                axes (Figure 1c)
              </li>
              <li>
                Octahedral (O) symmetry has 4-fold axes intersecting the 3-fold
                axes (Figure 1d)
              </li>
              <li>
                Icosahedral (I) symmetry has 5-fold and 2-fold axes intersecting
                the 3-fold axes (Figure 1e)
              </li>
            </ul>
            <li>
              Helical (H) symmetries combine rotational symmetry with
              translation along the rotation axis (Figure 1f).
            </li>
          </ul>
          <div></div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6140b307ef055f03d1f222d2/ps-fig1.png"
                      data-toggle="lightbox"
                      data-title="Figure 1. Types of symmetry operations in PDB assemblies. a. Cyclic (C3) - native human PCNA (PDB ID 3ja9); b. Dihedral (D3) - P. falciparum purine nucleoside phosphorylase (PDB ID 1nw4); c. Tetrahedral (T) - H. salinarum dodecin (PDB ID 1mog); d. Octahedral (O) - phosphopantetheine adenylyltransferase (PDB ID 6chl); e. Icosahedral (I) - satellite tobacco necrosis virus (PDB ID 1stm); f. Helical (H) - Rad51 Filament (PDB ID 6djo)"
                    >
                      <img
                        style={{ width: '70%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6140b307ef055f03d1f222d2/ps-fig1.png"
                        alt="Figure 1. Types of symmetry operations in PDB assemblies. a. Cyclic (C3) - native human PCNA (PDB ID 3ja9); b. Dihedral (D3) - P. falciparum purine nucleoside phosphorylase (PDB ID 1nw4); c. Tetrahedral (T) - H. salinarum dodecin (PDB ID 1mog); d. Octahedral (O) - phosphopantetheine adenylyltransferase (PDB ID 6chl); e. Icosahedral (I) - satellite tobacco necrosis virus (PDB ID 1stm); f. Helical (H) - Rad51 Filament (PDB ID 6djo)"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 1. Types of symmetry operations in PDB assemblies. a.
                    Cyclic (C3) - native human PCNA (PDB ID 3ja9); b. Dihedral
                    (D3) - P. falciparum purine nucleoside phosphorylase (PDB ID
                    1nw4); c. Tetrahedral (T) - H. salinarum dodecin (PDB ID
                    1mog); d. Octahedral (O) - phosphopantetheine
                    adenylyltransferase (PDB ID 6chl); e. Icosahedral (I) -
                    satellite tobacco necrosis virus (PDB ID 1stm); f. Helical
                    (H) - Rad51 Filament (PDB ID 6djo)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            Note that in protein crystals, the symmetry of the assembly (point
            group symmetry or helical symmetry) is combined with additional
            translational symmetries based on the crystal lattice. Therefore in
            some of these structures (determined by X-ray crystallography), this
            can impact the way that coordinates are represented in the PDB
            archive - see "
            <a
              href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/biological-assemblies"
              target="_blank"
            >
              Introduction to Biological Assemblies
            </a>
            " for more information.
          </p>
          <a className="content-anchor" id="levels-of-symmetry"></a>
          <h3>Levels of Symmetry</h3>
          <p>
            The relationships between molecules in an assembly may either be
            global (involving the entire structure, Figure 2a), local (involving
            part of the structure, Figure 2b), or pseudo symmetric (involving
            apparent but not exact symmetry, Figure 2c). See examples below:
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6140b307ef055f03d1f222d2/ps-fig2.png"
                      data-toggle="lightbox"
                      data-title="Figure 2: Levels of Symmetry in PDB assemblies. a. Global Symmetry, Cyclic C5, Homo-5-mer (a homopentamer): BEST1 open state W287F mutant, calcium-bound (the 5 green protein chains are related by 5-fold symmetry, PDB ID 6n25); b. Local Symmetry, Cyclic C5, Homo-5-mer: Stx2a, (the orange protein chains display local symmetry, but the green protein chain is not part of this symmetry and interacts with the pentameric assembly asymmetrically, PDB ID 7d6q); c. Pseudo Symmetry, Cyclic C5, Homo-5-mer: human Alpha4Beta2 nicotinic receptor (although this appears to be a pentameric assembly it is actually composed of two different types of protein chains - three copies of the green chain and two copies of the orange chain, PDB ID 5kxi)."
                    >
                      <img
                        style={{ width: '80%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6140b307ef055f03d1f222d2/ps-fig2.png"
                        alt="Figure 2: Levels of Symmetry in PDB assemblies. a. Global Symmetry, Cyclic C5, Homo-5-mer (a homopentamer): BEST1 open state W287F mutant, calcium-bound (the 5 green protein chains are related by 5-fold symmetry, PDB ID 6n25); b. Local Symmetry, Cyclic C5, Homo-5-mer: Stx2a, (the orange protein chains display local symmetry, but the green protein chain is not part of this symmetry and interacts with the pentameric assembly asymmetrically, PDB ID 7d6q); c. Pseudo Symmetry, Cyclic C5, Homo-5-mer: human Alpha4Beta2 nicotinic receptor (although this appears to be a pentameric assembly it is actually composed of two different types of protein chains - three copies of the green chain and two copies of the orange chain, PDB ID 5kxi)."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 2: Levels of Symmetry in PDB assemblies. a. Global
                    Symmetry, Cyclic C5, Homo-5-mer (a homopentamer): BEST1 open
                    state W287F mutant, calcium-bound (the 5 green protein
                    chains are related by 5-fold symmetry, PDB ID 6n25); b.
                    Local Symmetry, Cyclic C5, Homo-5-mer: Stx2a, (the orange
                    protein chains display local symmetry, but the green protein
                    chain is not part of this symmetry and interacts with the
                    pentameric assembly asymmetrically, PDB ID 7d6q); c. Pseudo
                    Symmetry, Cyclic C5, Homo-5-mer: human Alpha4Beta2 nicotinic
                    receptor (although this appears to be a pentameric assembly
                    it is actually composed of two different types of protein
                    chains - three copies of the green chain and two copies of
                    the orange chain, PDB ID 5kxi).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="why-explore-protein-symmetry"></a>
          <h3>Why explore protein symmetry?</h3>
          <p>
            Protein symmetry may influence how the molecules in an assembly
            facilitate its function. Since symmetric assemblies are stabilized
            by repeating sets of specific intermolecular interactions, exploring
            these interactions can provide insights into how an assembly is
            formed and how its formation may be altered, in turn, allowing
            regulation of the molecule’s biological function(s).
          </p>
          <a
            className="content-anchor"
            id="documentation-accessing-protein-symmetry-information"
          ></a>
          <h2>Documentation: Accessing Protein Symmetry Information</h2>
          <p>
            There are several options for exploring protein symmetry in PDB
            assemblies. Three of them are listed below:
          </p>
          <a className="content-anchor" id="protein-symmetry-browser"></a>
          <h3>Protein Symmetry Browser</h3>
          <p>
            Using the
            <a href="/search/browse/symmetry" target="_blank">
              Protein Symmetry Browser
            </a>
            , one can view and select from the various symmetry operations and
            level of symmetry. For details on how to use this browser
            <a
              href="/docs/search-and-browse/browse-options/protein-symmetry"
              target="_blank"
            >
              click here
            </a>
            .
          </p>
          <a className="content-anchor" id="protein-symmetry-annotations"></a>
          <h3>Protein Symmetry Annotations</h3>
          <p>
            On the Structure Summary Page for every PDB entry, symmetry
            information for each assembly of the PDB structure is displayed
            below the image of the assembly. The few types of symmetry
            annotations for PDB structures are listed below:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              If there is no symmetry in the structure, it is labeled as “Global
              Symmetry: Asymmetric - C1”.
            </li>
            <li>
              “Stoichiometry” indicates the number of proteins participating in
              the assembly, and whether the assembly comprises multiple copies
              of the same protein (homomer) or two or more different proteins
              (heteromer).
            </li>
            <li>
              If there is global symmetry, local symmetry, or pseudosymmetry, it
              is listed here along with a link to a visualization of the
              symmetry axis or axes.
            </li>
            <li>
              The “Find Similar Assemblies” link launches a structure similarity
              search for the assembly using a strict shape match. The search
              will identify other structures in the PDB that may have the same
              or similar symmetry and assembly structure.
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="visualizing-protein-symmetry-in-3d-using-mol*-"
          ></a>
          <h3>Visualizing Protein Symmetry in 3D (using Mol*)</h3>
          <p>
            On the Mol* page or (3D View tab of the Structure Summary page) for
            any structure in the PDB, there is an “Assembly Symmetry” button in
            the Control (right hand) panel. Clicking on the “Enable” button that
            appears when the Control panel is selected colors the symmetrically
            arranged proteins in the same color and displays the symmetry
            operators for the assembly on the 3D canvas. To visualize the
            locations of each of the symmetrically positioned proteins and how
            they interact with each other, the polymers in the assembly may be
            colored in different colors (e.g., color by chain property &gt;&gt;
            Chain instance or Entity ID). These coloring options have been used
            for Figures 1 and 2.
          </p>
          <a className="content-anchor" id="examples"></a>
          <h2>Examples</h2>
          <a className="content-anchor" id="a-case-with-global-symmetry"></a>
          <h3>A Case with Global Symmetry</h3>
          <p>
            PDB entry
            <a href="/structure/1BL8" target="_blank">
              1bl8
            </a>
            is the structure of the tetrameric potassium channel. The symmetry
            information displayed on the Structure Summary Page is shown here:
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6140b307ef055f03d1f222d2/ps-fig3.png"
                      data-toggle="lightbox"
                      data-title="Figure 3: Protein Symmetry annotations on the Structure Summary Page."
                    >
                      <img
                        style={{ width: '40%', border: '1px solid #ccc' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6140b307ef055f03d1f222d2/ps-fig3.png"
                        alt="Figure 3: Protein Symmetry annotations on the Structure Summary Page."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 3: Protein Symmetry annotations on the Structure
                    Summary Page.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            Note that the structure in this entry is a homotetramer with Cyclic
            - C4 symmetry. <br />
            <br />
            Clicking on the (3D View) link next to the “Global Symmetry: Cyclic
            - C4” label opens a 3D visualization of the structure in Mol*
            (Figure 4a). You can rotate the molecule to view down the 4-fold
            rotation axis (Figure 4b) and color the proteins by chain instance
            (Figure 4c) to see how the four copies of the proteins are assembled
            to form the channel.
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6140b307ef055f03d1f222d2/ps-fig4.png"
                      data-toggle="lightbox"
                      data-title="Figure 4: 3D visualization of Protein Symmetry in Mol*. a. Display Protein Symmetry by clicking on the “Assembly Symmetry” options in the control panel; b. Looking down the 4-fold global symmetric axis in the structure; c. Same view as in b. but with the protein chains colored by chain instances.
"
                    >
                      <img
                        style={{ width: '85%', border: '1px solid #ccc' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6140b307ef055f03d1f222d2/ps-fig4.png"
                        alt="Figure 4: 3D visualization of Protein Symmetry in Mol*. a. Display Protein Symmetry by clicking on the “Assembly Symmetry” options in the control panel; b. Looking down the 4-fold global symmetric axis in the structure; c. Same view as in b. but with the protein chains colored by chain instances.
"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 4: 3D visualization of Protein Symmetry in Mol*. a.
                    Display Protein Symmetry by clicking on the “Assembly
                    Symmetry” options in the control panel; b. Looking down the
                    4-fold global symmetric axis in the structure; c. Same view
                    as in b. but with the protein chains colored by chain
                    instances.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            Clicking on “Find Similar Assemblies” on the Structure Summary Page
            (Figure 3) launches a strict-match assembly search to find similar
            assemblies in the PDB (Figure 5).
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6140b307ef055f03d1f222d2/ps-fig5.png"
                      data-toggle="lightbox"
                      data-title="Figure 5: Search results for similar assemblies in the PDB. "
                    >
                      <img
                        style={{ width: '85%', border: '1px solid #ccc' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6140b307ef055f03d1f222d2/ps-fig5.png"
                        alt="Figure 5: Search results for similar assemblies in the PDB. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 5: Search results for similar assemblies in the PDB.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="a-case-with-pseudo-symmetry"></a>
          <h3>A Case with Pseudo Symmetry</h3>
          <p>
            PDB entry
            <a href="/structure/5KXI" target="_blank">
              5kxi
            </a>
            is the X-ray crystal structure of the human Alpha4Beta2 nicotinic
            receptor. The symmetry information displayed on the Structure
            Summary Sage is shown in Figure 6.
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6140b307ef055f03d1f222d2/ps-fig6.png"
                      data-toggle="lightbox"
                      data-title="Figure 6: Protein Symmetry annotations on the Structure Summary Page.  "
                    >
                      <img
                        style={{ width: '40%', border: '1px solid #ccc' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6140b307ef055f03d1f222d2/ps-fig6.png"
                        alt="Figure 6: Protein Symmetry annotations on the Structure Summary Page.  "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 6: Protein Symmetry annotations on the Structure
                    Summary Page.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            Note that the structure in this entry is composed of a
            heteropentamer. While this is classNameified as a global asymmetric
            structure, it has pseudo C5 symmetry. <br />
            <br />
            Clicking on the (3D View) link next to the “Pseudo Symmetry: Cyclic
            - C5” opens the structure in Mol* (Figure 7a). You can rotate the
            molecule to view down the 5-fold pseudosymmetry axis (Figure 7b) and
            color the proteins by entity type (Figure 7c). Note this assembly
            has a pseudo pentameric symmetry - composed of two alpha-4 (green
            colored) and three beta-2 (orange colored) chains.
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6140b307ef055f03d1f222d2/ps-fig7.png"
                      data-toggle="lightbox"
                      data-title="Figure 7: 3D visualization of Protein Symmetry in Mol*. a. Display Protein Symmetry by clicking on the “Assembly Symmetry” options in the control panel; b. Looking down the 5-fold pseudo symmetric axis in the structure; c. Same view as in b. but with the protein chains colored by entity type."
                    >
                      <img
                        style={{ width: '85%', border: '1px solid #ccc' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6140b307ef055f03d1f222d2/ps-fig7.png"
                        alt="Figure 7: 3D visualization of Protein Symmetry in Mol*. a. Display Protein Symmetry by clicking on the “Assembly Symmetry” options in the control panel; b. Looking down the 5-fold pseudo symmetric axis in the structure; c. Same view as in b. but with the protein chains colored by entity type."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 7: 3D visualization of Protein Symmetry in Mol*. a.
                    Display Protein Symmetry by clicking on the “Assembly
                    Symmetry” options in the control panel; b. Looking down the
                    5-fold pseudo symmetric axis in the structure; c. Same view
                    as in b. but with the protein chains colored by entity type.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            Clicking on the “Find Similar Assemblies” on the Structure Summary
            Page (Figure 6) launches a strict-match assembly search to find
            similar assemblies in the PDB (Figure 8).
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6140b307ef055f03d1f222d2/ps-fig8.png"
                      data-toggle="lightbox"
                      data-title="Figure 8: Search results for similar assemblies in the PDB. "
                    >
                      <img
                        style={{ width: '85%', border: '1px solid #ccc' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6140b307ef055f03d1f222d2/ps-fig8.png"
                        alt="Figure 8: Search results for similar assemblies in the PDB. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 8: Search results for similar assemblies in the PDB.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="references"></a>
          <h2>References</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Changeux, JP. (2013) 50 years of allosteric interactions: the
              twists and turns of the models. Nat Rev Mol Cell Biol 14, 819–829.
              <a href="https://doi.org/10.1038/nrm3695" target="_blank">
                https://doi.org/10.1038/nrm3695
              </a>
            </li>
            <li>
              Goodsell, D. S., &amp; Olson, A. J. (2000). Structural symmetry
              and protein function. Annual review of biophysics and biomolecular
              structure, 29, 105–153.
              <a
                href="https://doi.org/10.1146/annurev.biophys.29.1.105"
                target="_blank"
              >
                https://doi.org/10.1146/annurev.biophys.29.1.105
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
        <div>Last updated: 8/31/2022</div>
      </div>
    </div>
  );
};
