export default () => {
  return (
    <>
      <div className="col-lg-9 col-md-8 col-sm-12 content-item">
        <div data-elastic-include="">
          <h5 className="menu-path">Search and Browse &gt; Advanced Search</h5>
          <h1>Structure Motif Search</h1>
          <div>
            <div style={{ paddingLeft: '20px' }}>
              ● <a href="#introduction">Introduction</a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○
              <a href="#what-is-a-structure-motif">
                What is a structure motif?
              </a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○
              <a href="#when-is-this-search-useful">
                When is this search useful?
              </a>
            </div>
            <div style={{ paddingLeft: '20px' }}>
              ● <a href="#documentation">Documentation</a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○
              <a href="#defining-queries-using-mol*">
                Defining queries using Mol*
              </a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○
              <a href="#defining-queries-using-the-advanced-search-panel">
                Defining queries using the 'Advanced Search' panel
              </a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○
              <a href="#how-to-interpret-the-result-score">
                How to interpret the result score?
              </a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○
              <a href="#limitations-of-structure-motif-search">
                Limitations of Structure Motif Search
              </a>
            </div>
            <div style={{ paddingLeft: '20px' }}>
              ● <a href="#examples">Examples</a>
            </div>
            <div style={{ paddingLeft: '20px' }}>
              ● <a href="#for-advanced-users">For advanced users</a>
            </div>
            <div style={{ paddingLeft: '20px' }}>
              ● <a href="#references">References</a>
            </div>
            <a className="content-anchor" id="introduction"></a>
            <h2>Introduction</h2>
            <a className="content-anchor" id="what-is-a-structure-motif"></a>
            <h3>What is a structure motif?</h3>
            <p>
              Structure motifs are the spatial or 3D arrangement of a small
              number of amino acids (at least 2) that have significance -
              <i>e.g.,</i> form a catalytic or binding site. The amino acid
              residues making up the motif may be remote from one another in the
              1D sequence or even be located in different polymer chains as long
              they are close to each other in 3D space (within 15 Å of each
              other). The structure motif search service (
              <a
                href="https://doi.org/10.1371/journal.pcbi.1008502"
                target="_blank"
              >
                Bittrich et al., 2020
              </a>
              ) retrieves all occurrences of specific structure motifs in 3D
              structures available from RCSB.org.
              <br />
              <br />
              The active site of the enolase superfamily is used as an example
              here (
              <a href="https://doi.org/10.1002/prot.20099" target="_blank">
                Meng et al., 2004
              </a>
              ). The enolase superfamily is a group of proteins diverse in
              sequence, yet largely similar in 3D structure that all catalyze
              removal of a proton from a carboxylic acid (
              <a href="https://doi.org/10.1021/bi9616413" target="_blank">
                Babbitt et al., 1996
              </a>
              ).
            </p>
            <div>
              <table style={{ width: '40%' }}>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/motifs-kdeeh-210809.png"
                        data-toggle="lightbox"
                        data-title="Five residues representing the enolase superfamily are shown here. Note multiple amino acids are seen at three of these positions. The amino acids are identified by their amino acid name 3 letter abbreviation, chain ID (label_asym_id) and residue number (label_seq_id)."
                      >
                        <img
                          style={{ width: '100%' }}
                          className="img-responsive"
                          src="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/motifs-kdeeh-210809.png"
                          alt="Five residues representing the enolase superfamily are shown here. Note multiple amino acids are seen at three of these positions. The amino acids are identified by their amino acid name 3 letter abbreviation, chain ID (label_asym_id) and residue number (label_seq_id)."
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="content-img-caption">
                      Five residues representing the enolase superfamily are
                      shown here. Note multiple amino acids are seen at three of
                      these positions. The amino acids are identified by their
                      amino acid name 3 letter abbreviation, chain ID
                      (label_asym_id) and residue number (label_seq_id).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
            <a className="content-anchor" id="when-is-this-search-useful"></a>
            <h3>When is this search useful?</h3>
            <p>
              The structure motif search service is particularly useful when you
              are interested in exploring the local structural properties of
              protein structures. This search service complements the structure
              search service and finds local, structural similarities between
              proteins. Search results only depend on the residues specified in
              the query, so it can identify local structural similarities even
              when the proteins have limited sequence or overall structural
              similarity. So, for example, this search can find similar ligand
              binding sites in unrelated proteins, regardless of whether the
              structures have a ligand bound in that neighborhood. <br />
              <br />
              Detection of such structure motifs can provide valuable insights
              into the function(s) of previously uncharacterized proteins,
              especially ones that do not resemble other proteins at either the
              sequence or global structure level.
            </p>
            <a className="content-anchor" id="documentation"></a>
            <h2>Documentation</h2>
            <p>
              The structure motif search service is accessible via the Mol*
              interface, where query residues (amino acids and nucleotides) can
              be specified in a visualized molecular structure, and the
              <a href="https://rcsb.org/search/advanced" target="_blank">
                ‘Advanced Search’ panel
              </a>
              , where the query residue details can be specified by typing them
              into the interface.
            </p>
            <a className="content-anchor" id="defining-queries-using-mol*"></a>
            <h3>Defining queries using Mol*</h3>
            <p>
              The RCSB Mol* plugin provides a convenient way to visualize a
              structure and define structure motif queries. The general Mol*
              documentation can be found
              <a href="/docs/3d-viewers/mol*/getting-started" target="_blank">
                here
              </a>
              . Steps for specifying the structure motif query as described
              here.
            </p>
            <div>
              <table style={{ width: '90%' }}>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/mol-1.png"
                        data-toggle="lightbox"
                        data-title="Mol* UI with Structure Motif Search panel extended."
                      >
                        <img
                          style={{ width: '100%' }}
                          className="img-responsive"
                          src="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/mol-1.png"
                          alt="Mol* UI with Structure Motif Search panel extended."
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="content-img-caption">
                      Mol* UI with Structure Motif Search panel extended.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
            <p>
              To define a structure motif query for the enolase superfamily
              based on mandelate racemase (PDB ID
              <a href="https://rcsb.org/3d-view/2mnr/1" target="_blank">
                2mnr
              </a>
              ) and using the template described in (
              <a href="https://doi.org/10.1002/prot.20099" target="_blank">
                Meng, 2004
              </a>
              ) use the following steps.
              <br />
              In the Mol* interface, click and expand the ‘Structure Motif
              Search’ menu in the control panel on the right. Activate the
              selection mode of Mol* by clicking the mouse pointer icon and set
              the selection level to Residue (default). This allows you to
              select individual residues that will define the query.
            </p>
            <div>
              <table style={{ width: '90%' }}>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/mol-2.png"
                        data-toggle="lightbox"
                        data-title="Mol* UI with motif selected."
                      >
                        <img
                          style={{ width: '100%' }}
                          className="img-responsive"
                          src="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/mol-2.png"
                          alt="Mol* UI with motif selected."
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="content-img-caption">
                      Mol* UI with motif selected.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
            <p>
              The 5 residues that constitute the template described in
              literature are used here to define the query motif.
              <br />
              <br />
              Select individual residues by clicking on them either in the 3D
              canvas or in the sequence panel. The selected residues will be
              populated in the Structure Motif Search list in the control panel.
              Up to 10 residues may be included in this list. Add to the
              selection by clicking on additional residues, or remove residues
              by clicking on the trash icon in the residue list. The ‘Structure
              Motif Search’ element of Mol* behaves like the
              <a
                href="/docs/3d-viewers/mol*/managing-the-display#measurements-panel"
                target="_blank"
              >
                ‘Measurements’ panel
              </a>
              .<br />
              <br />
              Hover over the residue of interest to verify
              <code>label_asym_id</code> and
              <code>label_seq_id</code>. The information will appear in the
              tooltip in the bottom right corner of the Mol* panel. Author
              defined chain IDs and residue numbers will appear in square
              brackets if label and author identifiers are different. The
              sequence view at the top is particularly helpful when selecting
              residues by author numbering. Discrepancies between
              <code>label_seq_id</code> and
              <code>auth_seq_id</code> will be shown by Mol* in square brackets.
              Learn more about
              <a href="http://documentation.rcsb.org/docs/general-help/identifiers-in-pdb">
                Identifiers in the PDB
              </a>
              .
            </p>
            <div>
              <table style={{ width: '90%' }}>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/mol-3.png"
                        data-toggle="lightbox"
                        data-title="Mol* UI with exchange panel extended."
                      >
                        <img
                          style={{ width: '100%' }}
                          className="img-responsive"
                          src="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/mol-3.png"
                          alt="Mol* UI with exchange panel extended."
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="content-img-caption">
                      Mol* UI with exchange panel extended.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
            <p>
              In cases where a range of amino acids (or nucleotides) may realize
              the same biological function or bind the same ligand, it is
              possible to define position-specific exchanges in the query to
              accommodate possible variations in specific locations of the query
              structure motif. <br />
              For each entry of the residue list, exchanges can be specified
              individually by clicking on the options icon (three horizontal
              bars with short vertical lines intersecting them). This will open
              a panel with 20 amino acid and 8 nucleotide names. Click on all
              three-letter codes that should be considered as valid exchanges at
              the corresponding position. Only the original residue type is
              valid if no exchanges are defined. Make sure to include the
              original residue type when additional exchanges are defined.
              <br />
              The number of exchanges per position is limited to 4.
              <br />
              <br />
              Click the ‘Submit Search’ button. This will open a new browser tab
              and your query will be shown in the
              <a href="/search/advanced" target="_blank">
                ‘Advanced Search’ panel
              </a>
              .
            </p>
            <a
              className="content-anchor"
              id="defining-queries-using-the-advanced-search-panel"
            ></a>
            <h3>Defining queries using the 'Advanced Search' panel</h3>
            <p>
              In the second option the query motif can be specified in the
              <a href="/search/advanced" target="_blank">
                ‘Advanced Search’ panel
              </a>
              . List a structure ID (PDB ID or RCSB.org assigned CSM ID) and all
              the residues that make up the motif. <br />
              <br />
              Once the 3D structure ID (PDB ID or RCSB.org assigned CSM ID) is
              entered in the "Entry ID" box, a new button appears next to it
              called "Open in Mol*". Clicking on this button opens the structure
              in Mol* allowing you to select the query residues (as described
              above). Use options to select residues and the Mol* wizard to
              autofill the Structure Motif Search panel. The panel also gives
              you opportunities to verify, refine, or extend your search
              manually.
              <br />
              <br />
              Clicking on the "Open in Mol*" button again (i.e., after the
              residue selections have been specified) opens the structure in
              Mol* and displays only the residues listed in the Structure Motif
              Search panel. Note: The To refine the selection of residues, turn
              on the selection more and select all the amino acids shown. Now
              display the polymer using options in the Controls panel and select
              additional (or fewer) residues to revise/refine the query and
              click on the Structure Motif Search &gt;&gt; Submit Search
              buttons. Note: if the Advanced search panel was manually extended
              to include alternate residues at a specific location, the "Open in
              Mol*" button will only display residues that are present in the
              structure. Possible alternatives listed in the panel will not be
              shown since those coordinates do not exist in the structure being
              visualized. <br />
              <br />
              Decide on whether to include or exclude CSMs, and click on the
              blue Search button with a green magnifying lens icon to launch the
              search.
            </p>
            <div>
              <table style={{ width: '90%' }}>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/str-mot-search-panel.png"
                        data-toggle="lightbox"
                        data-title="Advanced Search panel showing the Structure Motif search panel. A. After typing in an Entry ID the 'Open in Mol*"
                      >
                        <img
                          style={{ width: '100%' }}
                          className="img-responsive"
                          src="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/str-mot-search-panel.png"
                          alt="Advanced Search panel showing the Structure Motif search panel. A. After typing in an Entry ID the "
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="content-img-caption">
                      Advanced Search panel showing the Structure Motif search
                      panel. A. After typing in an Entry ID the "Open in Mol*"
                      button appears (marked with red arrows). B. Structure
                      motif search panel autofilled by Mol* and extended
                      manually.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
            <ol>
              <li>
                Insert the PDB ID or RCSB.org assigned CSM ID that contains the
                query 3D structure motif.
              </li>
              <li>
                Specify 2 to 10 residues that make up the group of residues you
                want to find in other structures in the archive.
              </li>
              <ol>
                <li>
                  The first box is for the polymer Chain ID (
                  <code>label_asym_id</code>) of the residues. Note that a motif
                  may include amino acids from multiple polymer chains.
                </li>
                <li>
                  The Operator box is for optionally specifying the
                  transformation operation that was used to generate a
                  bioassembly (see PDB ID
                  <a href="/3d-view/2mnr" target="_blank">
                    2mnr
                  </a>
                  as example). Identify operations by their
                  <code>struct_oper_id</code>. Combinations of operators are
                  annotated like 1x61 or Px61. Set the value to '1' if you are
                  referencing original coordinates.
                </li>
                <li>
                  The residue numbers included in the query are identified by
                  their <code>label_seq_id</code>. Note that in publications,
                  residues are likely referenced by their
                  <code>auth_seq_id</code>, an identifier assigned by the
                  authors. However, to define queries and report results the
                  RCSB PDB website uses <code>label_seq_id</code>.
                </li>
                <li>
                  Exchanges - Optionally, define position-specific exchanges or
                  substitutions. Note, by default, only the residue type
                  observed in the reference structure will be considered as
                  valid. A set of comma-separated three-letter codes allows
                  searching for different amino acids (or nucleotides) at the
                  specified positions. Must include the original residue type to
                  consider it at a particular position.
                </li>
                <li>
                  Use the ‘Add Residue’ button to extend your selection to
                  include additional amino acid residues in the structure motif,
                  or use the ‘x’ button on the right to delete individual
                  residues.
                </li>
              </ol>
              <li>
                The 'RMSD cutoff' parameter can be used to filter high RMSD hits
                that are unlikely to be biologically relevant.
              </li>
              <li>
                The 'Atom Pairing' parameter gives fine-grained control over the
                atom set that is considered for the alignment. By default all
                atoms are evaluated. Alternatively, only backbone, only
                side-chain, or only C<sub>α</sub>/C4′ and C<sub>β</sub>/C1′
                atoms can be selected for the RMSD calculation.
              </li>
              <li>
                Make sure to set the result type to ‘Assemblies’ to get detailed
                information on the result page that includes matched residue
                identifiers and reports the score of this hit. Note: A single
                entry may have more than one occurrence of the query structure
                motif. Since the motif may span more than one polymer chain,
                each occurrence is an assembly. If this option is not selected
                only PDB entries that contain the query motif are listed in the
                results.
              </li>
            </ol>
            <div></div>
            <a
              className="content-anchor"
              id="how-to-interpret-the-result-score"
            ></a>
            <h3>How to interpret the result score?</h3>
            <p>
              The results are displayed as ‘Assemblies’.
              <br />
              <br />
              All assemblies in the PDB archive that contain groups of residues
              that resemble the query motif are returned and sets of residues
              that match the query are identified by their
              <code>label_asym_id</code> and <code>label_seq_id</code>.
              Discrepancies between
              <code>label_seq_id</code> and <code>auth_seq_id</code> will be
              reported in square brackets. The
              <code>label_comp_id</code> of each residue is reported. The RMSD
              score of the match is provided as well.
            </p>
            <div>
              <table style={{ width: '90%' }}>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/stm-fx2.png"
                        data-toggle="lightbox"
                        data-title="Structure Motif Search results with match context."
                      >
                        <img
                          style={{ width: '100%' }}
                          className="img-responsive"
                          src="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/stm-fx2.png"
                          alt="Structure Motif Search results with match context."
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="content-img-caption">
                      Structure Motif Search results with match context.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
            <p>
              All potential matches are reported with a root-mean-square
              deviation (RMSD) score, which is computed by aligning each
              identified match to the query motif and measuring the displacement
              of each matched atom. Values of 0.0 Å indicate optimal alignment,
              higher values occur for dissimilar groups of residues.
              <br />
              <br />
              The 'Align' button at the beginning of each line launches a Mol*
              view that shows the superposition of query motif and selected
              match.
            </p>
            <a
              className="content-anchor"
              id="limitations-of-structure-motif-search"
            ></a>
            <h3>Limitations of Structure Motif Search</h3>
            <p>
              The structure motif search service is a heuristic search with a
              false negative rate &lt;2%. This means that 1 in 50 relevant hits
              will get missed when compared to a much slower exhaustive search
              strategy. The service uses 3 features to describe the geometric
              properties of all residue pairs present in the query motif:
              backbone distance (d<sub>b</sub>), side-chain distance (d
              <sub>s</sub>), and the angle θ between the C<sub>α</sub>C
              <sub>β</sub> vector of both amino acids. Hits will get missed if
              one of these properties differs too much. Tolerance values are 1 Å
              for distances and 20° for the angle property.
              <br />
              The false positive rate for hits with low RMSD values &lt;0.5 Å
              tends to be 0, but the false positive rate increases for hits with
              higher RMSD values. This also means that no hits will be found in
              structures that contain only a C<sub>α</sub> trace.
            </p>
            <div>
              <table style={{ width: '40%' }}>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/strucmotif-descriptor-0810.png"
                        data-toggle="lightbox"
                        data-title="3 geometric properties are used to describe residue pairs: backbone distance between Cα atoms, side-chain distance between Cβ atoms, and angle between the corresponding vectors."
                      >
                        <img
                          style={{ width: '100%' }}
                          className="img-responsive"
                          src="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/strucmotif-descriptor-0810.png"
                          alt="3 geometric properties are used to describe residue pairs: backbone distance between Cα atoms, side-chain distance between Cβ atoms, and angle between the corresponding vectors."
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="content-img-caption">
                      3 geometric properties are used to describe residue pairs:
                      backbone distance between C<sub>α</sub> atoms, side-chain
                      distance between C<sub>β</sub>
                      atoms, and angle between the corresponding vectors.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
            <p>
              Details about the search algorithm and scoring are discussed in
              <a
                href="https://doi.org/10.1371/journal.pcbi.1008502"
                target="_blank"
              >
                Bittrich et al., 2020
              </a>
              . In particular, see Figure 3 and the accompanying discussion of
              observed false negatives. The 'For advanced users' section
              provides information on how to run structure motif queries with
              increased tolerance values that lower false negative rates at the
              expense of higher runtimes.
            </p>
            <a className="content-anchor" id="examples"></a>
            <h2>Examples</h2>
            <p>
              The structure motif search service finds resemblances of 2 to 10
              residues that are in spatial proximity. Interesting motifs are
              defined in literature and available in resources such as the
              <a
                href="https://www.ebi.ac.uk/thornton-srv/m-csa/"
                target="_blank"
              >
                Catalytic Site Atlas (CSA)
              </a>
              . It is applicable for a number of example queries. All given
              identifiers are <code>label_asym_id</code> and
              <code>label_seq_id</code>.
            </p>
            <table className="table table-bordered" border={1}>
              <tbody>
                <tr>
                  <td>
                    <img
                      style={{ width: '100%' }}
                      src="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/kdeeh-example.png"
                      className="img-responsive"
                    />
                  </td>
                  <td>
                    <b>Template of the enolase superfamily</b>
                    <br />(
                    <a
                      href="https://rcsb.org/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22strucmotif%22%2C%22node_id%22%3A0%2C%22parameters%22%3A%7B%22value%22%3A%7B%22entry_id%22%3A%222MNR%22%2C%22residue_ids%22%3A%5B%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A162%7D%2C%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A193%7D%2C%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A219%7D%2C%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A245%7D%2C%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A295%7D%5D%7D%2C%22rmsd_cutoff%22%3A2%2C%22atom_pairing_scheme%22%3A%22ALL%22%2C%22exchanges%22%3A%5B%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A162%7D%2C%22allowed%22%3A%5B%22LYS%22%2C%22HIS%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A193%7D%2C%22allowed%22%3A%5B%22ASP%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A219%7D%2C%22allowed%22%3A%5B%22GLU%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A245%7D%2C%22allowed%22%3A%5B%22GLU%22%2C%22ASP%22%2C%22ASN%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A295%7D%2C%22allowed%22%3A%5B%22HIS%22%2C%22LYS%22%5D%7D%5D%7D%7D%5D%7D%2C%22return_type%22%3A%22assembly%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22c7dd812c23b5287b25bffa3b68f75037%22%7D%7D"
                      target="_blank"
                    >
                      execute query
                    </a>
                    )
                    <br />
                    <br />
                    The enolase superfamily is a group of proteins diverse in
                    sequence, yet largely similar in 3D structure that all
                    catalyze removal of a proton from a carboxylic acid (
                    <a href="https://doi.org/10.1021/bi9616413" target="_blank">
                      Babbitt, 1996
                    </a>
                    ). The structure motif supporting this catalytic function (
                    <a
                      href="https://doi.org/10.1002/prot.20099"
                      target="_blank"
                    >
                      Meng, 2004
                    </a>
                    ) is represented in PDB ID
                    <a href="/structure/2mnr" target="_blank">
                      2mnr
                    </a>
                    .
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      style={{ width: '100%' }}
                      src="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/hds.png"
                      className="img-responsive"
                    />
                  </td>
                  <td>
                    <b>Catalytic triad of serine proteases</b>
                    <br />(
                    <a
                      href="https://rcsb.org/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22strucmotif%22%2C%22parameters%22%3A%7B%22value%22%3A%7B%22entry_id%22%3A%224CHA%22%2C%22residue_ids%22%3A%5B%7B%22label_asym_id%22%3A%22B%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A42%7D%2C%7B%22label_asym_id%22%3A%22B%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A87%7D%2C%7B%22label_asym_id%22%3A%22C%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A47%7D%5D%7D%2C%22rmsd_cutoff%22%3A2%2C%22atom_pairing_scheme%22%3A%22ALL%22%2C%22exchanges%22%3A%5B%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22B%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A42%7D%2C%22allowed%22%3A%5B%22HIS%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22B%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A87%7D%2C%22allowed%22%3A%5B%22ASP%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22C%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A47%7D%2C%22allowed%22%3A%5B%22SER%22%5D%7D%5D%7D%2C%22node_id%22%3A0%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22assembly%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%2294392fddc4cac2e83939ea7b4a842f52%22%7D%7D"
                      target="_blank"
                    >
                      execute query
                    </a>
                    )
                    <br />
                    <br />
                    Many hydrolases use a serine nucleophile during catalysis.
                    Canonical serine protease catalytic triads are composed of
                    His, Asp, and Ser residues (PDB ID
                    <a href="/structure/4cha" target="_blank">
                      4cha
                    </a>
                    ). Typically these residues occur within two polypeptide
                    chains, because many of these proteases are initially made
                    as zymogens that require activation by proteolytic
                    processing (
                    <a href="https://doi.org/10.1021/cr000033x" target="_blank">
                      Hedstrom, 2002
                    </a>
                    ) to prevent uncontrolled digestion of proteins within the
                    cell.
                    <br />
                    You can also combine your
                    <a
                      href="https://rcsb.org/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22contains_words%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22Elastase%22%2C%22attribute%22%3A%22rcsb_uniprot_protein.name.value%22%7D%2C%22node_id%22%3A0%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22strucmotif%22%2C%22parameters%22%3A%7B%22value%22%3A%7B%22entry_id%22%3A%224CHA%22%2C%22residue_ids%22%3A%5B%7B%22label_asym_id%22%3A%22B%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A42%7D%2C%7B%22label_asym_id%22%3A%22B%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A87%7D%2C%7B%22label_asym_id%22%3A%22C%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A47%7D%5D%7D%2C%22rmsd_cutoff%22%3A2%2C%22atom_pairing_scheme%22%3A%22ALL%22%2C%22exchanges%22%3A%5B%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22B%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A42%7D%2C%22allowed%22%3A%5B%22HIS%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22B%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A87%7D%2C%22allowed%22%3A%5B%22ASP%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22C%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A47%7D%2C%22allowed%22%3A%5B%22SER%22%5D%7D%5D%7D%2C%22node_id%22%3A1%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22assembly%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%22d5f43595643dd529ac409334470e14dc%22%7D%7D"
                      target="_blank"
                    >
                      query with keywords
                    </a>
                    to narrow the result set and find more interesting
                    occurrences of the query motif.
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      style={{ width: '100%' }}
                      src="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/kddde.png"
                      className="img-responsive"
                    />
                  </td>
                  <td>
                    <b>Aminopeptidase</b>
                    <br />(
                    <a
                      href="https://rcsb.org/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22strucmotif%22%2C%22parameters%22%3A%7B%22value%22%3A%7B%22entry_id%22%3A%221LAP%22%2C%22residue_ids%22%3A%5B%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A250%7D%2C%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A255%7D%2C%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A273%7D%2C%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A332%7D%2C%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A334%7D%5D%7D%2C%22rmsd_cutoff%22%3A2%2C%22atom_pairing_scheme%22%3A%22ALL%22%2C%22exchanges%22%3A%5B%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A250%7D%2C%22allowed%22%3A%5B%22LYS%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A255%7D%2C%22allowed%22%3A%5B%22ASP%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A273%7D%2C%22allowed%22%3A%5B%22ASP%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A332%7D%2C%22allowed%22%3A%5B%22ASP%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A334%7D%2C%22allowed%22%3A%5B%22GLU%22%5D%7D%5D%7D%2C%22node_id%22%3A0%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22assembly%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%22f9ac5032bafa82602773f5b9c7809852%22%7D%7D"
                      target="_blank"
                    >
                      execute query
                    </a>
                    )
                    <br />
                    <br />
                    Aminopeptidases play important roles in protein degradation
                    by removing residues from the N- or amino terminus of
                    polypeptide chains (
                    <a
                      href="https://www.pnas.org/content/87/17/6878"
                      target="_blank"
                    >
                      Burley, 1990
                    </a>
                    ). Bovine leucine aminopeptidase (BLLAP) is a homohexameric
                    enzyme with 3<sub>2</sub> quaternary symmetry. The active
                    site of BLLAP contains two adjacent zinc ions separated by
                    ∼2.9 Å and coordinated by the sidechains of five conserved
                    residues Lys, Asp, Asp, Asp, and Glu (PDB ID
                    <a href="/structure/1lap" target="_blank">
                      1lap
                    </a>
                    ).
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      style={{ width: '100%' }}
                      src="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/cchh.png"
                      className="img-responsive"
                    />
                  </td>
                  <td>
                    <b>Zinc Finger</b>
                    <br />(
                    <a
                      href="https://rcsb.org/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22strucmotif%22%2C%22parameters%22%3A%7B%22value%22%3A%7B%22entry_id%22%3A%221G2F%22%2C%22residue_ids%22%3A%5B%7B%22label_asym_id%22%3A%22F%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A7%7D%2C%7B%22label_asym_id%22%3A%22F%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A25%7D%2C%7B%22label_asym_id%22%3A%22F%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A29%7D%5D%7D%2C%22rmsd_cutoff%22%3A2%2C%22atom_pairing_scheme%22%3A%22ALL%22%2C%22exchanges%22%3A%5B%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22F%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A7%7D%2C%22allowed%22%3A%5B%22CYS%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22F%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A25%7D%2C%22allowed%22%3A%5B%22HIS%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22F%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A29%7D%2C%22allowed%22%3A%5B%22HIS%22%5D%7D%5D%7D%2C%22node_id%22%3A0%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22assembly%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%22a58d3ce5f6337c8a6bf6045ec903aba8%22%7D%7D"
                      target="_blank"
                    >
                      execute query
                    </a>
                    )
                    <br />
                    <br />
                    Eukaryotic transcription factors often contain His
                    <sub>2</sub>/Cys<sub>2</sub> Zinc Finger domains (PDB ID
                    <a href="/structure/1g2f" target="_blank">
                      1g2f
                    </a>
                    ) that bind DNA. These motifs are composed of two cysteine
                    and two histidine residues, which stabilize a small ββα
                    domain structure that envelopes and coordinates a single
                    zinc ion (
                    <a
                      href="https://doi.org/10.1146/annurev.biochem.70.1.313"
                      target="_blank"
                    >
                      Pabo, 2001
                    </a>
                    ). In the absence of the zinc ion, these domains do not
                    adopt compact, folded structures and are incapable of
                    binding DNA.
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      style={{ width: '100%' }}
                      src="https://cdn.rcsb.org/rcsb-pdb/content/600b3277c5ab5836659ab2ea/gggg.png"
                      className="img-responsive"
                    />
                  </td>
                  <td>
                    <b>RNA G-tetrad</b>
                    <br />(
                    <a
                      href="https://rcsb.org/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22strucmotif%22%2C%22parameters%22%3A%7B%22value%22%3A%7B%22entry_id%22%3A%223IBK%22%2C%22residue_ids%22%3A%5B%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A4%7D%2C%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A10%7D%2C%7B%22label_asym_id%22%3A%22B%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A4%7D%2C%7B%22label_asym_id%22%3A%22B%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A10%7D%5D%7D%2C%22rmsd_cutoff%22%3A2%2C%22atom_pairing_scheme%22%3A%22ALL%22%2C%22exchanges%22%3A%5B%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A4%7D%2C%22allowed%22%3A%5B%22G%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A10%7D%2C%22allowed%22%3A%5B%22G%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22B%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A4%7D%2C%22allowed%22%3A%5B%22G%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22B%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A10%7D%2C%22allowed%22%3A%5B%22G%22%5D%7D%5D%7D%2C%22node_id%22%3A0%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22assembly%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%22491241b8c37e9f6f50b3140cd555c1bf%22%7D%7D"
                      target="_blank"
                    >
                      execute query
                    </a>
                    )
                    <br />
                    <br />
                    G-tetrads are a common nucleic acid association motif (PDB
                    ID
                    <a href="/structure/3mij" target="_blank">
                      3mij
                    </a>
                    ). They are composed of guanines and stabilized by Hoogsteen
                    base pairings. The four O6 oxygen atoms coordinate
                    monovalent ions, such as K<sup>+</sup>, and individual
                    tetrads tend to be stacked one atop the other (
                    <a
                      href="https://doi.org/10.1093/nar/gkl655"
                      target="_blank"
                    >
                      Burge, 2006
                    </a>
                    ).
                  </td>
                </tr>
              </tbody>
            </table>
            <div></div>
            <a className="content-anchor" id="for-advanced-users"></a>
            <h2>For advanced users</h2>
            <p>
              All Java source-code is publicly available on GitHub (
              <a
                href="https://github.com/rcsb/strucmotif-search"
                target="_blank"
              >
                github.com/rcsb/strucmotif-search
              </a>
              ), and the project is distributed as a Maven artifact.
              <br />
              We encourage interested users to set up a local installation of
              the structure motif search service. This allows you to configure
              the tool for your exact requirements and gives fine-grained
              control over all parameters, some of which are not exposed on
              <a href="https://rcsb.org/" target="_blank">
                rcsb.org
              </a>
              . Additional features include:
            </p>
            <ul>
              <li>
                Increased tolerance values that allow one to retrieve more
                dissimilar hits
              </li>
              <li>
                Definition of query motifs using custom structures that are not
                part of the PDB archive (such as AlphaFold structures)
              </li>
              <li>
                Screening for occurrences of known motifs in a structure of
                unknown function
              </li>
            </ul>
            <div></div>
            <a className="content-anchor" id="references"></a>
            <h2>References</h2>
            <ul>
              <li>
                Bittrich S, Burley SK, Rose AS (2020) Real-time structural motif
                searching in proteins using an inverted index strategy. PLoS
                computational biology. 16(12): e1008502, doi:
                <a
                  href="https://doi.org/10.1371/journal.pcbi.1008502"
                  target="_blank"
                >
                  10.1371/journal.pcbi.1008502
                </a>
              </li>
              <li>
                Meng EC, Polacco BJ, Babbitt PC (2004) Superfamily active site
                templates. PROTEINS: Structure, Function, and Bioinformatics.
                55(4): 962–976, doi:
                <a href="https://doi.org/10.1002/prot.20099" target="_blank">
                  10.1002/prot.20099
                </a>
                .
              </li>
              <li>
                Babbitt PC, Hasson MS, Wedekind JE, Palmer DR, Barrett WC, Reed
                GH, et al. (1996) The enolase superfamily: a general strategy
                for enzyme-catalyzed abstraction of the α-protons of carboxylic
                acids. Biochemistry. 35(51): 16489–16501, doi:
                <a href="https://doi.org/10.1021/bi9616413" target="_blank">
                  10.1021/bi9616413
                </a>
                .
              </li>
              <li>
                Hedstrom L. (2002) Serine protease mechanism and specificity.
                Chemical reviews. 102(12): 4501–4524, doi:
                <a href="https://doi.org/10.1021/cr000033x" target="_blank">
                  10.1021/cr000033x
                </a>
                .
              </li>
              <li>
                Burley SK, David PR, Taylor A, Lipscomb WN (1990) Molecular
                structure of leucine aminopeptidase at 2.7-A resolution.
                Proceedings of the National Academy of Sciences.
                <a
                  href="https://www.pnas.org/content/87/17/6878"
                  target="_blank"
                >
                  87(17): 6878–6882
                </a>
                .
              </li>
              <li>
                Pabo CO, Peisach E, Grant RA (2001) Design and selection of
                novel Cys2His2 zinc finger proteins. Annual review of
                biochemistry. 70(1):313–340, doi:
                <a
                  href="https://doi.org/10.1146/annurev.biochem.70.1.313"
                  target="_blank"
                >
                  10.1146/annurev.biochem.70.1.313
                </a>
                .
              </li>
              <li>
                Burge S, Parkinson GN, Hazel P, Todd AK, Neidle S (2006)
                Quadruplex DNA: sequence, topology and structure. Nucleic acids
                research. 34(19): 5402–5415, doi:
                <a href="https://doi.org/10.1093/nar/gkl655" target="_blank">
                  10.1093/nar/gkl655
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
          <div>Last updated: 12/6/2022</div>
        </div>
      </div>
    </>
  );
};
