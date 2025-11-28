export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Tools</h5>
        <h1>Pairwise Structure Alignment</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#what-is-structure-alignment">
              What is Structure Alignment?
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#rigid-body-alignment">Rigid Body Alignment</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#flexible-alignment">Flexible Alignment</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#topology-independent-alignments">
              Topology-Independent Alignments
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#when-is-structure-alignment-useful">
              When is Structure Alignment useful?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#structure-alignment-interface">
              Structure Alignment Interface
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#alignment-methods">Alignment Methods</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#alignment-results">Alignment Results</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#view-and-download-options">View and Download Options</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#share-alignment-results">Share Alignment Results</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ●
            <a href="#align-multiple-structures-to-a-given-reference">
              Align Multiple Structures to a Given Reference
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#examples">Examples:</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#1-rigid-body-structure-alignment">
              1. Rigid Body Structure Alignment
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#2-rigid-body-vs-flexible-structure-alignment">
              2. Rigid Body vs Flexible Structure Alignment
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#3-sequential-vs-circular-permutation-structure-alignment">
              3. Sequential vs Circular Permutation Structure Alignment
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#references">References</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <a className="content-anchor" id="what-is-structure-alignment"></a>
          <h3>What is Structure Alignment?</h3>
          <p>
            Structure alignment attempts to establish residue-residue
            correspondence between two or more macromolecular structures based
            on the optimal superposition of their shape and three-dimensional
            conformation. Structure alignment requires no prior knowledge of
            equivalent pairs of residues, does not rely on the sequence
            alignment, and the type of residues is ignored when the
            correspondence is established.
            <br />
            <br />
            This tool presents options for pairwise structure alignment of
            proteins. In the case of pairwise alignment, structures are always
            compared in pairs. In contrast to multiple structure alignment
            (reviewed in
            <a
              href="https://doi.org/10.1016/B978-0-12-800168-4.00005-6"
              target="_blank"
            >
              Ma and Wang, 2014
            </a>
            ) that provides a global solution for three or more structures.
            <br />
            <br />
            Different types of structural alignments and their rationales are
            described below.
          </p>
          <a className="content-anchor" id="rigid-body-alignment"></a>
          <h4>Rigid Body Alignment</h4>
          <p>
            In a rigid body alignment, the relative orientations and positions
            of atoms within each structure remain fixed during the alignment
            process. In the resulting superposition, only the overall shapes of
            the structures are aligned. Rigid body alignments are well-suited
            for identification of structural equivalences between proteins that
            are closely evolutionarily related and thus have similar shapes.
          </p>
          <a className="content-anchor" id="flexible-alignment"></a>
          <h4>Flexible Alignment</h4>
          <p>
            In a flexible structure alignment relative mobility between domains
            or subdomains in each structure is accommodated. When superposition
            by rigid alignment alone does not yield meaningful results,
            introducing flexibility to structural alignment becomes useful for
            two main reasons:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              It helps compare two protein chains that have adopted different
              conformational states, e.g., due to post-translational
              modifications such as phosphorylation or interaction with other
              proteins/ligands.
            </li>
            <li>
              It also helps identify conserved regions in proteins that may have
              distant evolutionary relationship. For example one of these
              proteins may contain extra loops or truncations that alter
              relative orientation of different domains in the structures.
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="topology-independent-alignments"
          ></a>
          <h4>Topology-Independent Alignments</h4>
          <p>
            Most structure alignment algorithms assume that the structural units
            of two similar proteins appear in the same order (in the N-terminal
            to C-terminal direction) within their sequences. However, this
            assumption may not always be true. There are many examples of
            natural and designed proteins where the spatial arrangement of
            secondary structural elements or protein domains is maintained but
            the protein backbone connections between these structural elements
            are different - i.e., the proteins have different topologies. <br />
            <br />
            One such example is circular permutation, where the relative
            locations of structural elements (and the N- and C-termini) within
            two proteins are different, but their overall shape and structure
            (e.g., secondary structural elements and their relative
            orientations) are conserved.
          </p>
          <a
            className="content-anchor"
            id="when-is-structure-alignment-useful"
          ></a>
          <h3>When is Structure Alignment useful?</h3>
          <p>
            Structure alignment is a valuable tool for the comparison of
            proteins with low sequence similarity, where evolutionary
            relationships between proteins cannot be easily detected by standard
            sequence alignment techniques. Pairwise protein structure comparison
            can be used for analysis of conformational changes on ligand
            binding, analysis of structural variation between proteins within an
            evolutionary family, and identification of common structural
            domains.
          </p>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a className="content-anchor" id="structure-alignment-interface"></a>
          <h3>Structure Alignment Interface</h3>
          <p>
            The structure alignment tool provides a simple-to-use,
            web-accessible interface for performing a wide range of structural
            superpositions. The tool can be accessed from the “Analyze” section
            of the menu bar. The interface allows you to align one or more
            structures to a given reference structure. You can select up to 10
            structures for comparison. First structure will be used as a
            reference, and all other structures will be aligned to it in a
            pairwise manner.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a href="/alignment">
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/01-alignmnet-ui-input.png"
                      alt="The user interface allows selecting protein structures for structure alignment"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  The user interface allows selecting protein structures for
                  structure alignment
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            You can chose one of the following options to specify structures:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>A</b> - use <i>Entry ID</i> to select an existing database
              entry (e.g. 1AOB)
            </li>
            <li>
              <b>B</b> - use <i>Web Link</i> to specify the location of the
              structure file on the web
            </li>
            <li>
              <b>C</b> - use <i>File Upload</i> to upload your own structure
              file with coordinates. Accepted file formats include PDBx/mmCIF -
              must have <b>.cif</b> or <b>.bcif</b> extension, and PDB - must
              have <b>.pdb</b> or <b>.ent</b> extension.
            </li>
          </ul>
          <div></div>
          <p>
            The <i>Chain ID</i> input field must be populated. Selected chains
            must be at least 10 residues long and the structure must contain the
            coordinates of at least the C-alpha backbone atoms.
            <br />
            <br />
            When a valid Entry ID is provided, the selection of chain IDs will
            be available listing the proteins with sequences longer than 10
            residues. For other options, chain ID must be typed in. Note that
            the chain IDs are case-sensitive.
            <br />
            <br />
            When the structure is provided as a file in
            <a
              href="https://mmcif.wwpdb.org/dictionaries/mmcif_pdbx_v50.dic/Index/"
              target="_blank"
            >
              PDBx/mmCIF
            </a>
            format, the chain ID should correspond to the
            <code>_label_asym_id</code> assigned for each chain during the
            deposition. See
            <a href="/docs/general-help/identifiers-in-pdb#instance-level-identifiers">
              this documentation article
            </a>
            for more information on PDB identifiers for macromolecular chains.
            <br />
            <br />
            If only a part of the polymeric chain should be compared, the
            segments of polymer chains can be chosen by specifying residue
            ranges using the PDB residue numbers (sequential numbers from 1 to N
            using <code>_label_seq_id</code>). Note if you are matching residues
            based on the author specified residue numbers (e.g., reported in the
            manuscripts) you may have to first convert it to the
            <code>_label_seq_id</code>. If no range is specified all residues of
            the chain are included in the alignment by default.
          </p>
          <p>
            When at least 2 chains are selected, the <b>Compare</b> button
            becomes available to launch the structure alignment.
          </p>
          <a className="content-anchor" id="alignment-methods"></a>
          <h3>Alignment Methods</h3>
          <p>
            A number of algorithms are provided to perform pairwise structural
            alignments. Brief descriptions of these algorithms are included
            below:
          </p>
          <table className="table table-bordered" border={1}>
            <thead>
              <tr>
                <th>Algorithm</th>
                <th>Brief summary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>jFATCAT-rigid</td>
                <td>
                  The structure alignment algorithm Flexible structure AlignmenT
                  by Chaining Aligned fragment pairs allowing Twists (FATCAT)
                  allows for flexible protein structure comparison (
                  <a
                    href="https://doi.org/10.1093/bioinformatics/btg1086"
                    target="_blank"
                  >
                    Ye and Godzik, 2003
                  </a>
                  ,
                  <a
                    href="https://academic.oup.com/nar/article/48/W1/W60/5848494"
                    target="_blank"
                  >
                    Li et al., 2020
                  </a>
                  ). This tool offers use of the Java port of the
                  <a href="https://fatcat.godziklab.org/" target="_blank">
                    original FATCAT
                  </a>
                  . The rigid flavor of the algorithm is used to run a
                  rigid-body superposition that only considers alignments with
                  matching sequence order. For most structures the performance
                  of this structure alignment is similar to that of CE.
                </td>
              </tr>
              <tr>
                <td>jFATCAT-flexible</td>
                <td>
                  The flexible flavor of FATCAT introduces twists (hinges)
                  between different parts of the superposed proteins so that
                  these parts are aligned independently. This makes it possible
                  to effectively compare protein structures that undergo
                  conformational changes in specific parts of the molecule such
                  that global (rigid body) superposition cannot capture the
                  underlying similarity between domains. For example, when the
                  two polymers being compared are in different functional forms
                  (e.g., bound to partner proteins/ligands), were crystallized
                  under different conditions, or have mutations. The downside of
                  this approach is that it can lead to false positive matches in
                  unrelated structures, requiring that results be carefully
                  reviewed
                </td>
              </tr>
              <tr>
                <td>jCE</td>
                <td>
                  The original Combinatorial Extension (CE) algorithm (
                  <a
                    href="https://doi.org/10.1093/protein/11.9.739"
                    target="_blank"
                  >
                    Shindyalov and Bourne, 1998
                  </a>
                  ) works by identifying segments of the two structures with
                  similar local structure, and then combining those regions to
                  align the maximum number of residues in order to keep the root
                  mean squared deviations (rmsd) between the pair of structures
                  low. This Java port of the original CE uses a rigid-body
                  alignment algorithm. Relative orientations of atoms in the
                  structures being compared are kept fixed during superposition.
                  It assumes that aligned residues occur in the same order in
                  both proteins (i.e., the alignment is sequence-order
                  dependent).
                </td>
              </tr>
              <tr>
                <td>jCE-CP</td>
                <td>
                  Some protein pairs are related by a circular permutation,
                  i.e., the N-terminal part of one protein is related to the
                  C-terminal part of the other or vice versa, or the topology of
                  loops connecting secondary structural elements in a domain are
                  different. Combinatorial Extension with Circular Permutations
                  (CE-CP,
                  <a
                    href="https://doi.org/10.1093/bioinformatics/btu823"
                    target="_blank"
                  >
                    Bilven et al., 2015
                  </a>
                  ) allows the structural comparison of such circularly permuted
                  proteins.
                </td>
              </tr>
              <tr>
                <td>TM-align</td>
                <td>
                  Sequence-independent protein structure comparison
                  <a
                    href="https://zhanglab.ccmb.med.umich.edu/TM-align/"
                    target="_blank"
                  >
                    <b>TM-align</b>
                  </a>
                  is sensitive to global topology (
                  <a href="https://doi.org/10.1093/nar/gki524" target="_blank">
                    Zhang and Skolnick, 2005
                  </a>
                  ). It uses dynamic programming iterations to generate
                  sequence-independent residue-to-residue alignments between
                  template and model structures.
                </td>
              </tr>
              <tr>
                <td>Smith-Waterman 3D</td>
                <td>
                  <a
                    href="https://doi.org/10.1016/0022-2836(81)90087-5"
                    target="_blank"
                  >
                    Smith and Waterman's 1981 algorithm
                  </a>
                  aligns similar sequence segments using Blosum65 scoring
                  matrix. The Smith-Waterman 3D is based on this algorithm and
                  aligns two structures based on the sequence alignment. Note
                  that this method works well for structures with significant
                  sequence similarity and is faster than the structure-based
                  methods. However, any errors in locating gaps, or a small
                  number of badly aligned residues can lead to high RMSD in the
                  resulting superposition.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a className="content-anchor" id="alignment-results"></a>
          <h3>Alignment Results</h3>
          <p>
            Below you see the pairwise structure alignment of hemoglobin subunit
            alpha (PDB ID
            <a href="/structure/4HHB" target="_blank">
              4HHB
            </a>
            , chain A) and neuroglobin (PDB ID
            <a href="/structure/1OJ6" target="_blank">
              1OJ6
            </a>
            , chain A). The following information is reported about the
            superimposed molecules:
          </p>
          <a
            href="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/02-alignment-ui-members.png"
            data-toggle="lightbox"
          >
            <img
              style={{ width: '100%' }}
              className="img-responsive"
              src="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/02-alignment-ui-members.png"
            />
          </a>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Description</b> lists the name of the molecule
            </li>
            <li>
              <b>Organism</b> lists scientific names of organisms associated
              with taxonomy codes aggregated by the NCBI Taxonomy Database
            </li>
            <li>
              <b>Sequence Length</b> is the total number of polymeric residues
              in the deposited sequence for a given chain
            </li>
            <li>
              <b>Modeled Residues</b> is the number of residues with coordinates
              that were used for structure alignment
            </li>
          </ul>
          <div></div>
          <p>
            Superposed structures are shown in 3D using the interactive
            <a href="/docs/3d-viewers/mol*/getting-started">
              molecular visualization tool, Mol*
            </a>
            . The sequence alignment that results from structure alignment is
            shown above the Mol* viewer. Pairs of residues that are structurally
            equivalent are colored orange (the first structure) or blue (the
            second structure).
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/04-alignment-ui-results.png"
                    data-toggle="lightbox"
                    data-title="The structure alignment results display: sequence alignment and superposed 3D structures"
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/04-alignment-ui-results.png"
                      alt="The structure alignment results display: sequence alignment and superposed 3D structures"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  The structure alignment results display: sequence alignment
                  and superposed 3D structures
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            The structure alignment methods report different scores to assess
            the quality of the alignment. Each score has its particular
            properties that may be of interest in specific cases:
          </p>
          <a
            href="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/04-alignmnet-ui-scores.png"
            data-toggle="lightbox"
          >
            <img
              style={{ width: '100%' }}
              className="img-responsive"
              src="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/04-alignmnet-ui-scores.png"
            />
          </a>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>RMSD</b> (root mean square deviation) is computed between
              aligned pairs of the backbone C-alpha atoms in superposed
              structures. The lower the RMSD, the better the structure alignment
              between the pair of structures. This is the most commonly reported
              metric when comparing two structures, but it is sensitive to the
              local structure deviation. If a few residues in a loop are not
              aligned, the RMSD value is large, even though the rest of the
              structure is well aligned
            </li>
            <li>
              <b>TM-score</b> (template modeling score) is a measure of
              topological similarity between the template and model structures
              (Xu and Zhang, 2010). The TM-score ranges between 0 and 1, where 1
              indicates a perfect match and 0 is no match between the two
              structures. Scores &lt; 0.2 usually indicate that the proteins are
              unrelated while those &gt;0.5 generally have the same protein fold
              (e.g., classified by SCOP/CATH)
            </li>
            <li>
              <b>Sequence Identity</b> (sequence identity percentage) is the
              percent of paired residues in the alignment that are identical in
              sequence
            </li>
            <li>
              <b>Equivalent Residues</b> is the number of residue pairs that are
              structurally equivalent in the alignment
            </li>
            <li>
              <b>Reference/Target Coverage</b> is the fraction of residues
              matched by the superposition (related by spacial proximity)
              relative to the total number of modeled residues being aligned
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="view-and-download-options"></a>
          <h3>View and Download Options</h3>
          <p>
            Options in the pull-down menu "Selecting a View" can be used to
            change what is currently displayed in the interactive Mol* viewer.
            The options are shown in the figure and listed below:
          </p>
          <div>
            <table style={{ width: '60%' }}>
              <tbody>
                <tr>
                  <td>
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/05-alignmnet-ui-select.png"
                      alt="Select View options and the 3 different views of the aligned structures to see only the aligned residues, the protein chains, or the entire models as 3D representation of the alignment results "
                    />
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Select View options and the 3 different views of the aligned
                    structures to see only the aligned residues, the protein
                    chains, or the entire models as 3D representation of the
                    alignment results
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Aligned Residues</b>: these are residues within a distance
              cutoff, defined for the alignment method. Note that the aligned
              regions of the two structures are shown in orange and blue
            </li>
            <li>
              <b>Polymer Chains</b>: show the full protein chains, including any
              parts of the polymer chain that are not aligned. Regions of the
              polymer chain that are not aligned are colored in lighter shades
              of orange and blue
            </li>
            <li>
              <b>Full Structures</b>: shows the full content of the deposited
              entry for the two structures being compared - including polymers,
              carbohydrates, ligands and water molecules. Regions of the polymer
              chain and other polymer entities that are not aligned are colored
              in lighter shades of orange and blue
            </li>
          </ul>
          <div></div>
          <p>
            The 3D View can be expanded to the fullscreen to provide
            fine-grained control over the view. Mol* will create designated
            components for a given selection that can be toggled or removed.
            Built-in Mol* functionality is available to change coloring and
            representations. Using the <b>Set Coloring</b> menu option for any
            given component shown in the Mol* full screen, the coloring can be
            changed as desired or the original (structure alignment) coloring
            can be restored with <b>Superpose</b> coloring option.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/molstar-fs3.png"
                    data-toggle="lightbox"
                    data-title="Full screen view of the Selected View of the structure alignment  in Mol*. The aligned residues are shown in orange and blue, while the parts that are not aligned are shown in lighter shades of the same colors."
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/molstar-fs3.png"
                      alt="Full screen view of the Selected View of the structure alignment  in Mol*. The aligned residues are shown in orange and blue, while the parts that are not aligned are shown in lighter shades of the same colors."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Full screen view of the Selected View of the structure
                  alignment in Mol*. The aligned residues are shown in orange
                  and blue, while the parts that are not aligned are shown in
                  lighter shades of the same colors.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            Options in the "Export" pull-down menu can be used to download
            coordinates, sequences, and matrices used for the alignment. The
            options are shown in the figure and listed below:
          </p>
          <div>
            <table style={{ width: '60%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/06-alignmnet-ui-export.png"
                      data-toggle="lightbox"
                      data-title="Download File options following structure alignment"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/06-alignmnet-ui-export.png"
                        alt="Download File options following structure alignment"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Download File options following structure alignment
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Superposed Structures - allows downloading the transformed atomic
              coordinates in mmCIF format for both structures after
              superposition
            </li>
            <li>
              Sequence Alignment - allows downloading the aligned sequences in
              FASTA format from the selected structure alignment
            </li>
            <li>
              Transformation Matrices - allows downloading JSON file with 4x4
              transformation matrix in a column major (j * 4 + i indexing)
              format, used to superimpose the structures
            </li>
          </ul>
          <div></div>
          <p>
            Note that downloading the superposed structures will include only
            the coordinates of the structure that is currently loaded into the
            viewer (e.g. residues, chains or full structures). The superposed
            structures can also be downloaded from the Mol* user interface,
            under the Export panel.
            <br />
            <br />
            In any structure alignment, the first structure (query) is assumed
            to be rigid. The second structure (target) is superposed on the
            query structure. The <b>Transformation Matrices</b> are the
            operations necessary to move the coordinates of the target structure
            to match the query structure. In rigid-body alignment the
            transformation matrices of the single block is saved, while in
            flexible (and circular permutation) alignments transformation
            matrices for each flexible region (blocks) are reported in the
            downloaded file. The transformation matrices can be downloaded.
          </p>
          <a className="content-anchor" id="share-alignment-results"></a>
          <h3>Share Alignment Results</h3>
          <p>
            <b>Copy Link</b> option is available when both structures are
            selected by providing Entry IDs as an input. After clicking on
            <b>Copy Link</b> button, the alignment results URL will be copied
            into your clipboard and can be pasted into e-mail, document,
            spreadsheet, notepad, or any other file or web page.
          </p>
          <a
            className="content-anchor"
            id="align-multiple-structures-to-a-given-reference"
          ></a>
          <h2>Align Multiple Structures to a Given Reference</h2>
          <p>
            You can overlay one or more proteins onto a common reference
            structure by structurally aligning them. Up to 10 structures can be
            selected. This can be useful to produce superpositions of different
            domains on a full protein. This
            <a href="/alignment/?request-body=%7B%22query%22%3A%7B%22context%22%3A%7B%22mode%22%3A%22pairwise%22%2C%22method%22%3A%7B%22name%22%3A%22fatcat-rigid%22%7D%2C%22structures%22%3A%5B%7B%22url%22%3A%22https%3A%2F%2Falphafold.ebi.ac.uk%2Ffiles%2FAF-P41235-F1-model_v2.cif%22%2C%22format%22%3A%20%22mmcif%22%2C%22selection%22%3A%7B%22asym_id%22%3A%22A%22%7D%7D%2C%7B%22entry_id%22%3A%223CBB%22%2C%22selection%22%3A%7B%22asym_id%22%3A%22C%22%7D%7D%2C%7B%22entry_id%22%3A%221PZL%22%2C%22selection%22%3A%7B%22asym_id%22%3A%20%22A%22%7D%7D%5D%7D%7D%7D">
              example
            </a>
            combines AlphaFold model of human Hepatocyte nuclear factor 4-alpha
            (AF-P41235-F1, in orange) and 2 PDB structures: crystal structure of
            human HNF4α DNA binding domain in complex with DNA target (3CBB
            C[auth A], in blue) and a complex of HNF-4α bound to fatty acid
            ligand and SRC-1 coactivator peptide (1PZL A, in green).
            <br />
            <br />
            With availability of Computed Structure Models (CSMs) from RCSB.org,
            <a
              href="/alignment/?response-body=eJztlllv2zgQgP%2BLnmWDp0jljdVlQZRWEgUV3qAwVFtxDfhobbm7QZH%2FviM5aZ2mcbPd9mmbAEE4nEvkDL%2F5ZK22Nzvr6pN1PK4W1pVFXbZgci5GC8RvRgwROWqoXIzY2zljNwQTt8GWbR26pjseQN%2F7I811UAXWnW1t2q7pXTXr1XK7abfdbLNbtKD0vlnt%2F1odWjA822u7d7s%2B5E3TzZtutF8tIQNws28Px3UHzq8%2FQZz9cd4dQTQswW5%2FOxsSVeFMhTnDhPJwyKhdt%2FNutdsOGRxuN%2Fdq1t2d%2FciQeq9ePa%2Fvgf4b%2B0vc2eeEhwT27RJM%2BmSuH0exrbftcnZoPwwCLk%2Fr1XbR%2Fm1dIdtat9tl9866Eg64v34c8bEtvmQKqXX7Znu42e03TfeQCrbR%2Fe83%2F4OAaOw41KXERQi7mBBB7RHIGEauQxB3GWFEgMmYSuZy4lKQISQREuCg1wQl4giG5fCH9TIsOeLCcYXrcMKoJGAuQJE6UhLXdQlzT8YMC4oQ45hiF1FBRS8UjEnMXMY5CDgmvYwT5EhKKEMIvDJwaJMxgXiYYEylwxwmbCzG2JVMUojNJWUC3HEy7pcOk1IgzCiDj%2B5v8bjZNPvb%2FoYP891DEX1s1keoSshLwGnevu8rtEyNb%2FWFcr9JMBvDeTxsH1ab1brZr7rb0eDI6mtkC7WxnYHX1eLYzvoaPwyXNNRP%2B%2BHYbudfl8%2BDGFympTZJpWs%2F9VPlT41S2s%2FVtKp0EAZZXdS6SqPMr0xugqjKdKbyzOioNkp7KvYiv1RVlEymkTLG8yMvicKwLE1dJtkknRqvDE1ZeHXtJ35SZoVXTr1SJ4kXlipKkyRQdZEFpV%2FGpgIzMw18Y3Ru4kxpXaig1mAeQ%2FTaRHEW%2BXGpkiRWJlZ%2B7QUmTYJC61rXwWuVTONchV6gc%2B37RQ32pZqoKJhorSNVJaVJ6zDx636Z%2BdO4zsuJlwdaBakpaxOXsfYD8JWHRaCL2PezYKqmOlFxHIZ%2B7qsk0sbPoyROSl2aAs7G6AAcZX5ZTH1TRmUYBbr%2FyStdmLh6XaRxUMRFGCc6jFKVxH4GXxWkkEEEB%2BqrfKImk1xP8olOi2CSwgnXca2yKs2riTZZVKRe8Dov8zIqlKryoMqL3OQ5mEcmyKcJxIpUraq4TnJtVAzbVVwlRVDHln32TPz4K9FX41m9%2FNxrfzbHf%2FUa3X2vx8466P5LRqsFNAM00nm3QSu6z7biN3x8acfHXrDzWbdKHzr1pzR1v9HDbN0uHjb7D2WC2cI59ftgCKdzUu8X893Hdt8sIdY1ZIYRejOw6BcwDed%2F6sv6%2F51pmDnP1QLBfT4XTAE356ZEnNmiJ0R80ic%2FGpeSy2F%2FlKaAKgTXySkVqOcVoQIuGKSEUjgmyTnvQcfpQDVXECpd7kghOACXn6DIJQZWOcBF5rrAwoGJ0gUoSuYAfx0MYIOSdjlFomcy44w4WJ6sJaYEA2ExkoRLBKAdc0cIR%2FboBGNQHhBNhAA0M0iTSCTIQFQH2IsxEz2nOUfSdsfAawA8A8a7AHjHlnwMvKUUwiAhwP33cepQOeb8QnOdN6rkX7X7c50Hk8pvnv7m6ct4eumFovQJUftL0up%2FckkvH0p%2B1WNrW8vm%2FSn6uRr%2BovaSieLR1P4tyOMxfnaUgLfYfdlE8uKh47vP3oWX7cJQAbtfTxVQwk%2FGCsDGaax4c%2FcPG5vAYw%3D%3D&amp;encoded=true"
              target="_blank"
            >
              this example can also be run
            </a>
            using the RCSB.org assigned CSM ID for the AlphaFold structure
            (AF_AFP41235F1) instead of providing a web-link to access it
            (https://alphafold.ebi.ac.uk/files/AF-P41235-F1-model_v2.cif). Learn
            <a
              href="/docs/general-help/computed-structure-models-and-rcsborg"
              target="_blank"
            >
              more about CSMs and the RCSB.org
            </a>
            .
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/09-alignmnet-ui-multi-structures.png"
                    data-toggle="lightbox"
                    data-title="AlphaFold model of human Hepatocyte nuclear factor 4-alpha (AF-Q8W3K0-F1, in orange); Crystal structure of human HNF4α DNA binding domain in complex with DNA target (3CBB C[auth A], in blue); Complex of HNF-4α bound to fatty acid ligand and SRC-1 coactivator peptide (1PZL A, in green)"
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/09-alignmnet-ui-multi-structures.png"
                      alt="AlphaFold model of human Hepatocyte nuclear factor 4-alpha (AF-Q8W3K0-F1, in orange); Crystal structure of human HNF4α DNA binding domain in complex with DNA target (3CBB C[auth A], in blue); Complex of HNF-4α bound to fatty acid ligand and SRC-1 coactivator peptide (1PZL A, in green)"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  AlphaFold model of human Hepatocyte nuclear factor 4-alpha
                  (AF-Q8W3K0-F1, in orange); Crystal structure of human HNF4α
                  DNA binding domain in complex with DNA target (3CBB C[auth A],
                  in blue); Complex of HNF-4α bound to fatty acid ligand and
                  SRC-1 coactivator peptide (1PZL A, in green)
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a className="content-anchor" id="examples"></a>
          <h2>Examples:</h2>
          <a
            className="content-anchor"
            id="1-rigid-body-structure-alignment"
          ></a>
          <h3>1. Rigid Body Structure Alignment</h3>
          <p>
            Alignment of the mammalian tubulin (
            <a href="/structure/1TUB#entity-1" target="_blank">
              1TUB.A
            </a>
            ) with a close structural homolog within prokaryotes, the bacterial
            cell division protein FtsZ (
            <a href="/structure/1FSZ#entity-1" target="_blank">
              1FSZ.A
            </a>
            ), shows that these proteins are structurally similar (with reported
            RMSD 3.02) despite low sequence identity (13.5%).
          </p>
          <div>
            <table style={{ width: '60%' }}>
              <tbody>
                <tr>
                  <td>
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/07-fatcat-rigid-example.png"
                      alt="Structural alignment of the mammalian tubulin (1TUB.A, in orange) and the bacterial cell division protein FtsZ (1FSZ.A, in blue)"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Structural alignment of the mammalian tubulin (1TUB.A, in
                    orange) and the bacterial cell division protein FtsZ
                    (1FSZ.A, in blue)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a
            className="content-anchor"
            id="2-rigid-body-vs-flexible-structure-alignment"
          ></a>
          <h3>2. Rigid Body vs Flexible Structure Alignment</h3>
          <p>
            The structures of calmodulin with and without calcium bound can be
            much better aligned using a flexible rather than a rigid-body
            alignment algorithm. Below is an example of two calmodulin
            structures: calcium-free (
            <a href="/structure/1CLL#entity-1" target="_blank">
              1CLL.A
            </a>
            ) and calcium-loaded (
            <a href="/structure/1QX5#entity-1" target="_blank">
              1QX5.A
            </a>
            ) aligned with jFATCAT-flexible (left) and jFATCAT-rigid (right)
            algorithms.
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/08-fatcat-calmodulin-comparison.png"
                      data-toggle="lightbox"
                      data-title="Structure alignment of calmodulin proteins in different conformation: calcium-free (1CLL.A, in orange) and calcium-loaded (1QX5.A, in blue). Structures are aligned with jFATCAT-flexible (left) and jFATCAT-rigid (right) algorithms

Brightly colored regions (blue and orange) show alignment, while the lighter shades of the same color are not aligned.  "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/08-fatcat-calmodulin-comparison.png"
                        alt="Structure alignment of calmodulin proteins in different conformation: calcium-free (1CLL.A, in orange) and calcium-loaded (1QX5.A, in blue). Structures are aligned with jFATCAT-flexible (left) and jFATCAT-rigid (right) algorithms

Brightly colored regions (blue and orange) show alignment, while the lighter shades of the same color are not aligned.  "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Structure alignment of calmodulin proteins in different
                    conformation: calcium-free (1CLL.A, in orange) and
                    calcium-loaded (1QX5.A, in blue). Structures are aligned
                    with jFATCAT-flexible (left) and jFATCAT-rigid (right)
                    algorithms Brightly colored regions (blue and orange) show
                    alignment, while the lighter shades of the same color are
                    not aligned.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a
            className="content-anchor"
            id="3-sequential-vs-circular-permutation-structure-alignment"
          ></a>
          <h3>3. Sequential vs Circular Permutation Structure Alignment</h3>
          <p>
            The proteins in this example, Concanavalin A ( PDB ID 3cna, chain A
            or
            <a href="/structure/3CNA#entity-1" target="_blank">
              3CNA.A
            </a>
            ) and peanut lectin (PDB ID 2pel chain A or
            <a href="/structure/2PEL#entity-1" target="_blank">
              2PEL.A
            </a>
            ), are related by a circular permutation. The 3D folds of the two
            proteins are highly similar but the N- and C- termini are located at
            different positions. While sequence-order dependent jCP algorithm
            can only find part of the alignment, the jCE-CP algorithm can
            discover a full alignment.
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/08-alignmnet-example-cp.png"
                      data-toggle="lightbox"
                      data-title="Structure alignment of Concanavalin A (3CNA.A, in orange) and peanut lectin (2PEL.A, in blue) proteins using jCE-CP (left) and jCP (right)

Brightly colored regions (blue and orange) show alignment, while the lighter shades of the same color are not aligned.  "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/60132e6a610d04019e01d4c2/08-alignmnet-example-cp.png"
                        alt="Structure alignment of Concanavalin A (3CNA.A, in orange) and peanut lectin (2PEL.A, in blue) proteins using jCE-CP (left) and jCP (right)

Brightly colored regions (blue and orange) show alignment, while the lighter shades of the same color are not aligned.  "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Structure alignment of Concanavalin A (3CNA.A, in orange)
                    and peanut lectin (2PEL.A, in blue) proteins using jCE-CP
                    (left) and jCP (right) Brightly colored regions (blue and
                    orange) show alignment, while the lighter shades of the same
                    color are not aligned.
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
              Bliven, S E, Bourne, P E, Prlić, A, (2015) Detection of circular
              permutations within protein structures using CE-CP.
              Bioinformatics, 31(8): 1316–1318. doi:
              <a
                href="https://doi.org/10.1093/bioinformatics/btu823"
                target="_blank"
              >
                10.1093/bioinformatics/btu823
              </a>
              (CE-CP)
            </li>
            <li>
              Li, Z, Lukasz Jaroszewski, L, Iyer, M, Sedova, M, Godzik, A.
              (2020) FATCAT 2.0: towards a better understanding of the
              structural diversity of proteins Nucleic Acids Research, 48 (W1)
              W60–W64. doi:
              <a href="https://doi.org/10.1093/nar/gkaa443" target="_blank">
                10.1093/nar/gkaa443
              </a>
              (FATCAT 2.0)
            </li>
            <li>
              Ma, J, and Wang, S (2014). Algorithms, Applications, and
              Challenges of Protein Structure Alignment. Advances In Protein
              Chemistry And Structural Biology 121-175. doi:
              <a
                href="https://doi.org/10.1016/B978-0-12-800168-4.00005-6"
                target="_blank"
              >
                10.1016/B978-0-12-800168-4.00005-6
              </a>
            </li>
            <li>
              Shindyalov, I N, Bourne, P E (1998) Protein structure alignment by
              incremental combinatorial extension (CE) of the optimal path.
              Protein Engineering, Design and Selection, 11(9): 739–747. doi:
              <a
                href="https://doi.org/10.1093/protein/11.9.739"
                target="_blank"
              >
                10.1093/protein/11.9.739
              </a>
              (CE)
            </li>
            <li>
              Smith, T F, Waterman, M S, (1981) Identification of common
              molecular subsequences, Journal of Molecular Biology. 147(1):
              195-197, doi:
              <a
                href="https://doi.org/10.1016/0022-2836(81)90087-5"
                target="_blank"
              >
                10.1016/0022-2836(81)90087-5
              </a>
              (for Smith-Waterman 3D)
            </li>
            <li>
              Ye Y, Godzik A (2003) Flexible structure alignment by chaining
              aligned fragment pairs allowing twists. Bioinformatics, 19 Suppl
              2:ii246-55. doi:
              <a
                href="https://doi.org/10.1093/bioinformatics/btg1086"
                target="_blank"
              >
                10.1093/bioinformatics/btg1086
              </a>
              . (FATCAT)
            </li>
            <li>
              Zhang, Y, Skolnick, J (2005) TM-align: A protein structure
              alignment algorithm based on TM-score. Nucleic Acids Research, 33:
              2302-2309. doi:
              <a href="https://doi.org/10.1093/nar/gki524" target="_blank">
                10.1093/nar/gki524
              </a>
              (TM-align)
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
        <div>Last updated: 11/4/2022</div>
      </div>
    </div>
  );
};
