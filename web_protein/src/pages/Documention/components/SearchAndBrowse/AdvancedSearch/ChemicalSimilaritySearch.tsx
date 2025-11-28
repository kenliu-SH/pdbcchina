export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Advanced Search</h5>
        <h1>Chemical Similarity Search</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#what-is-chemical-similarity-search-">
              What is Chemical Similarity Search?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#why-run-a-chemical-similarity-search">
              Why run a Chemical Similarity Search?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#query-options">Query Options</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#chemical-formula">Chemical Formula</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#descriptors">Descriptors</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#chemical-drawing">Chemical Drawing</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#search-options">Search Options</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#using-chemical-formulae">Using Chemical Formulae</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#using-chemical-descriptors">Using Chemical Descriptors</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#result-options">Result Options</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#examples">Examples</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#1-using-chemical-formula">1. Using Chemical Formula</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#2-using-chemical-descriptors">
              2. Using Chemical Descriptors
            </a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <a
            className="content-anchor"
            id="what-is-chemical-similarity-search-"
          ></a>
          <h3>What is Chemical Similarity Search?</h3>
          <p>
            The Chemical Similarity Search option allows you to query the PDB
            archive using information about small molecules defined in the
            <a href="http://www.wwpdb.org/data/ccd" target="_blank">
              Chemical Component
            </a>
            and
            <a href="https://www.wwpdb.org/data/bird" target="_blank">
              BIRD
            </a>
            chemical reference dictionaries, such as their molecular formula or
            chemical descriptors. The search results can be reported either as
            chemical components that match the query parameters or PDB
            structures that contain a molecule matching the query criteria
            (default).
          </p>
          <a
            className="content-anchor"
            id="why-run-a-chemical-similarity-search"
          ></a>
          <h3>Why run a Chemical Similarity Search?</h3>
          <p>
            When you have unique chemical information (e.g., a chemical formula
            or descriptor) you can use this information to find chemical
            components (e.g., drugs, inhibitors, modified residues, or building
            blocks such as amino acids, nucleotides, or sugars), so that it:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              is similar to the formula or descriptor used in the query (perhaps
              one or two atoms/groups are different)
            </li>
            <li>
              is part of a larger molecule (i.e., the specified
              formula/descriptor is a substructure)
            </li>
            <li>
              exactly or very closely matches the formula or descriptor used in
              the query
            </li>
          </ul>
          <div></div>
          <p>
            The search can also be used to identify PDB structures that include
            the chemical component(s) which match or are similar to the query.
            These structures can then be examined to learn about the
            interactions of the component within the structure.
          </p>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <p>
            There are a number of different options that can be combined to run
            a Chemical Similarity Search. These options are being listed here
            under 3 different sections:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Query - this will describe the option you have to input your query
            </li>
            <li>
              Search - this will describe the types of searches that can be run
              - from exact match to query, all the way to substructure matches.
            </li>
            <li>
              Results - this will describe options available for what you wish
              to see in the results page.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="query-options"></a>
          <h3>Query Options</h3>
          <p>
            The main ways for initiating a Chemical Similarity Search is either
            using a Chemical Formula, a descriptor for the molecule, or a 2D
            chemical drawing.
          </p>
          <a className="content-anchor" id="chemical-formula"></a>
          <h4>Chemical Formula</h4>
          <p>
            A chemical formula presents the chemical symbols of elements and
            numbers representing their proportions in the molecule. The order of
            element symbols in the formula is not important. For example, the
            input "O1 C12 N4 H28" will match a chemical component with formula
            "C12 H28 N4 O". Other symbols such as parenthesis, charge indicators
            may also be included in chemical formulae. Note that a Chemical
            Formula Search is case-sensitive, so including an uppercase I in the
            formula "NIC4" will indicate (Nitrogen, Iodine, Carbon4) while a
            lowercase I indicates "NiC4" (Nickel, Carbon4).
          </p>
          <a className="content-anchor" id="descriptors"></a>
          <h4>Descriptors</h4>
          <p>
            Two main Chemical Descriptors can be used for a chemical component
            (ligand):
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a href="https://doi.org/10.1021/ci00057a005" target="_blank">
                SMILES
              </a>
              (Simplified Molecular Input Line Entry Specification) are chemical
              notations that allow representation of chemical structures in a
              way that can be used by the computer. Beyond chemical element
              symbols, SMILES include a linear notation of molecular structure,
              including information about bond orders, ring structures, and
              stereochemistry. Note that SMILES generated by different software
              may be slightly different. Chemical similarity searches attempt to
              include most of these representations so SMILES based searches may
              return more matches than those initiated using InChI descriptors.
            </li>
            <li>
              <a
                href="https://iupac.org/who-we-are/divisions/division-details/inchi/"
                target="_blank"
              >
                InChI
              </a>
              (International Chemical Identifier) - is a standard textual
              identifier, developed by
              <a href="https://iupac.org/" target="_blank">
                IUPAC
              </a>
              (International Union of Pure and Applied Chemistry) and
              <a href="https://www.nist.gov/chemistry" target="_blank">
                NIST
              </a>
              (National Institute of Standards and Technology), to represent the
              chemical structure of molecules. This descriptor stores layers of
              information about the molecules atoms, bond connectivity,
              stereochemistry, charge etc.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="chemical-drawing"></a>
          <h4>Chemical Drawing</h4>
          <p>
            Chemical drawings displays atoms in a ligand, along with their
            connectivity, bond order, and chirality (as appropriate). You can
            use the
            <a href="/chemical-sketch" target="_blank">
              Chemical Sketch tool
            </a>
            to draw and edit the 2D structure of a ligand. The tool can
            automatically convert a chemical drawing into chemical descriptors
            (SMILES and InChI), and use them to find an exact match or similar
            molecule in the PDB.
            <a
              href="/docs/search-and-browse/advanced-search/chemical-sketch-tool"
              target="_blank"
            >
              Click here
            </a>
            to learn more about this tool.
          </p>
          <p>
            Note: In comparing Chemical Similarity Search results returned from
            SMILES and InChI descriptor queries, the standard InChI may provide
            greater specificity. Depending on whether you wish to see fewer or
            more matches in your results you can use the appropriate descriptor
            for the search.
          </p>
          <a className="content-anchor" id="search-options"></a>
          <h3>Search Options</h3>
          <a className="content-anchor" id="using-chemical-formulae"></a>
          <h4>Using Chemical Formulae</h4>
          <p>Begin by setting the Query Type to Formula (Figure 1)</p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Type the query formula in the text box for Chemical Similarity
              Search.
            </li>
            <li>Select the Match Subset options box as appropriate. </li>
          </ul>
          <div></div>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9da13a38a923c3516cfc/chem-sim-search-fig1-20230309.png"
                    data-toggle="lightbox"
                    data-title="Figure 1: Chemical Similarity Search using Chemical Formula"
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive content-img-border"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9da13a38a923c3516cfc/chem-sim-search-fig1-20230309.png"
                      alt="Figure 1: Chemical Similarity Search using Chemical Formula"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 1: Chemical Similarity Search using Chemical Formula
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            By default the search will find chemical components whose formula
            exactly match the query. However, if the Match Subset option is
            selected, you can select a chemical formula subset which will match
            any portion of a chemical formula. This option is particularly
            useful in cases when you are searching for chemical components that
            include a specific set of elements in a particular ratio. (See
            example).
          </p>
          <a className="content-anchor" id="using-chemical-descriptors"></a>
          <h4>Using Chemical Descriptors</h4>
          <p>Begin by setting the Query Type to Descriptor (Figure 2)</p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Type/paste the chemical descriptor in the text box for Chemical
              Search.
            </li>
            <li>Select the appropriate Descriptor Type (SMILES or InChI).</li>
          </ul>
          <div></div>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9da13a38a923c3516cfc/chem-sim-search-fig2-20230309.png"
                    data-toggle="lightbox"
                    data-title="Figure 2: Chemical Similarity Search using Descriptors "
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive content-img-border"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9da13a38a923c3516cfc/chem-sim-search-fig2-20230309.png"
                      alt="Figure 2: Chemical Similarity Search using Descriptors "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 2: Chemical Similarity Search using Descriptors
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            Note: The chemical similarity search
            <b>descriptor is converted into</b> one of the following a 2D
            representation for search:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>fingerprints</b> are ordered sets of binary digits (bits) that
              encode specific physicochemical and/or structural properties of
              the molecule, such as the presence of common functional groups or
              ring systems.
            </li>
            <li>
              <b>a graph</b> where atoms and bonds in a molecule are mapped onto
              nodes and edges respectively. Information about atom connectivity,
              bond order etc. are also coded and used to compare/match different
              chemical structures.
            </li>
          </ul>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Select the <b>Match Type</b> from the options available (see
              Figure 3):
            </li>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9da13a38a923c3516cfc/match-types.png"
                      data-toggle="lightbox"
                      data-title="Figure 3: Available ligand search matching types"
                    >
                      <img
                        style={{ width: '100%', border: '1px solid #ccc' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9da13a38a923c3516cfc/match-types.png"
                        alt="Figure 3: Available ligand search matching types"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 3: Available ligand search matching types
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Similar Ligands (Quick Screen) </b>- This option uses quick
              fingerprint matching. The Tanimoto coefficient is used to compute
              the degree of similarity between a pair of fingerprints. The
              Tanimoto coefficient has a range from 0 to 1 where higher values
              indicate greater similarity in structures. Results of Similar
              Ligands search include molecules with scores exceeding 0.6 for
              TREE type fingerprints or 0.9 for MACCS type fingerprints. Note
              that a Tanimoto coefficient of 1 does not indicate a perfect
              match.
            </li>
            <li>
              <b>Similar Ligands (Stereospecific) </b>- in this option the atom
              type, formal charge, bond order, as well as atom and bond
              chirality are used as matching criteria. Graph matching is
              performed on the subset of molecules that satisfy a fingerprint
              prefilter or screening search. Results will include isomorphic and
              substructure matches within this screened subset.
            </li>
            <li>
              <b>Similar Ligands (including Stereoisomers)</b> in this option
              the atom type, formal charge, and bond order are used as matching
              criteria. Graph matching is performed on the subset of molecules
              that satisfy a fingerprint prefilter or screening search. Results
              will include isomorphic and substructure matches within this
              screened subset.
            </li>
            <li>
              <b>Substructure (Stereospecific)</b> - in this option graph
              matching searches perform an exhaustive substructure search where
              atom type, formal charge, bond order, aromaticity, and atom/bond
              stereochemistry are used as matching criteria for the search type.
              Results may include ligands much larger than the query including
              BIRD molecules where the query molecule is part of the structure.
            </li>
            <li>
              <b>Substructure (including Stereoisomers) </b>- in this option
              graph matching searches perform an exhaustive substructure search
              where atom type, formal charge, bond order, and aromaticity are
              used as matching criteria for this search type. Results may
              include ligands much larger than the query including BIRD
              molecules where the query molecule is part of the structure.
            </li>
            <li>
              <b>Exact match </b>- in this option the atom type, formal charge,
              aromaticity, bond order, atom/bond stereochemistry, degree, ring
              membership, and hydrogen count are used as matching criteria for
              this search type. Results will include chemical components where
              the query and target graphs match exactly or are very similar. In
              some cases (especially with SMILES based searches) stereoisomers
              may also be included in the results.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="result-options"></a>
          <h3>Result Options</h3>
          <p>
            Display Results options before clicking on the query (green
            magnifying glass) icon.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Selecting the <b>Structures</b> option will list PDB entries that
              include the chemical components (ligands or monomers) that match
              the query
            </li>
            <li>
              Selecting the <b>Polymer Entity</b> option will list polymer
              entities that that have matching monomers in the deposited
              sequences
            </li>
            <li>
              Selecting the <b>Non-polymer Entity</b> option will list
              non-polymeric small molecules matching the query
            </li>
            <li>
              Selecting the <b>Molecular Definitions</b> option will list the
              chemical components/ligands that match the query
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="examples"></a>
          <h2>Examples</h2>
          <a className="content-anchor" id="1-using-chemical-formula"></a>
          <h3>1. Using Chemical Formula</h3>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>C12 H17 N4 O S</b> : will match
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22C12%20H17%20N4%20O%20S%22%2C%22type%22%3A%22formula%22%2C%22match_subset%22%3Afalse%7D%7D%5D%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%2296c7fb015d97751b434e69618df223e9%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                chemical components with formula "C12 H17 N4 O S"
              </a>
              and
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22C12%20H17%20N4%20O%20S%22%2C%22type%22%3A%22formula%22%2C%22match_subset%22%3Afalse%7D%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%2237521b91f0d744a116bfa4804422a76f%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                structures that have those components
              </a>
              .
            </li>
            <li>
              <b>Ru2 </b>with the Match Subset option selected will match
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22Ru2%22%2C%22type%22%3A%22formula%22%2C%22match_subset%22%3Atrue%7D%7D%5D%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%2224a3da36f79e88caa638229bbce79129%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                chemical components with a formula containing two rutheniums
              </a>
              and
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22Ru2%22%2C%22type%22%3A%22formula%22%2C%22match_subset%22%3Atrue%7D%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%22fecaecd2064fb4db6ca249f9973a1458%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                structures that have those components
              </a>
              .
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="2-using-chemical-descriptors"></a>
          <h3>2. Using Chemical Descriptors</h3>
          <p>
            a. Find ligands similar to and with the substructure of the chemical
            component VIB.
          </p>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a href="/ligand/VIB">
                      <img
                        style={{ width: '100%', border: '1px solid #ccc' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9da13a38a923c3516cfc/vib.png"
                        alt="Chemical component VIB"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Chemical component VIB
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            The SMILES search with <b>Cc1c(sc[n+]1Cc2cnc(nc2N)C)CCO</b> and
            Match Type
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Similar Ligands (Quick screen)</b> will match
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22Cc1c(sc%5Bn%2B%5D1Cc2cnc(nc2N)C)CCO%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22match_type%22%3A%22fingerprint-similarity%22%7D%7D%5D%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%22692d3f4b250269429c43a8d15d334925%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these chemical components
              </a>
              and
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22Cc1c(sc%5Bn%2B%5D1Cc2cnc(nc2N)C)CCO%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22match_type%22%3A%22fingerprint-similarity%22%7D%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%22c79a79671035dc5745d930c5bb0fd4f1%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these structures
              </a>
              with those components.
            </li>
            <li>
              <b>Similar Ligands (Stereospecific)</b> will match
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22Cc1c(sc%5Bn%2B%5D1Cc2cnc(nc2N)C)CCO%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22match_type%22%3A%22graph-relaxed-stereo%22%7D%7D%5D%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%22abf6559ae69e17529e8bdbf8dcde12eb%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these chemical components
              </a>
              and
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22Cc1c(sc%5Bn%2B%5D1Cc2cnc(nc2N)C)CCO%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22match_type%22%3A%22graph-relaxed-stereo%22%7D%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%221bd8c0bd042983945c8535335669673a%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these structures
              </a>
              with those components.
            </li>
            <li>
              <b>Similar Ligands (including Stereoisomers)</b> will match
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22Cc1c(sc%5Bn%2B%5D1Cc2cnc(nc2N)C)CCO%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22match_type%22%3A%22graph-relaxed%22%7D%7D%5D%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%225b154eb0aaf8e6f0962088867a1dd5ba%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these chemical components
              </a>
              and
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22Cc1c(sc%5Bn%2B%5D1Cc2cnc(nc2N)C)CCO%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22match_type%22%3A%22graph-relaxed%22%7D%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%22ce342b3ed60a79843ab8b0f98443f749%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these structures
              </a>
              with those components.
            </li>
            <li>
              <b>Substructure (Stereospecific)</b> will match
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22Cc1c(sc%5Bn%2B%5D1Cc2cnc(nc2N)C)CCO%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22match_type%22%3A%22sub-struct-graph-relaxed-stereo%22%7D%7D%5D%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%22fe84dd1f8fb53daeb7a4c882017b42a7%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these chemical components
              </a>
              and
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22Cc1c(sc%5Bn%2B%5D1Cc2cnc(nc2N)C)CCO%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22match_type%22%3A%22sub-struct-graph-relaxed-stereo%22%7D%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%22a6c32d551b0906092abe7709ba110e18%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these structures
              </a>
              with those components.
            </li>
            <li>
              <b>Substructure (including Stereoisomers)</b> will match
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22Cc1c(sc%5Bn%2B%5D1Cc2cnc(nc2N)C)CCO%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22match_type%22%3A%22sub-struct-graph-relaxed%22%7D%7D%5D%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%222dd2c81092e96986c5e55d8ffb6fa273%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these chemical components
              </a>
              and
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22Cc1c(sc%5Bn%2B%5D1Cc2cnc(nc2N)C)CCO%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22match_type%22%3A%22sub-struct-graph-relaxed%22%7D%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%224a6859d6df9dc35b841055e5b23cebab%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these structures
              </a>
              with those components.
            </li>
            <li>
              <b>Exact match</b> will match
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22Cc1c(sc%5Bn%2B%5D1Cc2cnc(nc2N)C)CCO%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22match_type%22%3A%22graph-exact%22%7D%7D%5D%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%227750ae32c129d78191fd4b5bf7db47bb%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these chemical components
              </a>
              and
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22Cc1c(sc%5Bn%2B%5D1Cc2cnc(nc2N)C)CCO%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22match_type%22%3A%22graph-exact%22%7D%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%2284c78a67b9808bcd1c646f842eba6901%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these structures
              </a>
              with those components.
            </li>
          </ul>
          <div></div>
          <p>
            Note that the query descriptor has no chiral atom so there is no
            difference in the results with the Match Types that are
            stereospecific and those that include stereoisomers.
          </p>
          <p>
            b. Find ligands similar to and with the substructure of the chemical
            component EF2.
          </p>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a href="/ligand/EF2">
                      <img
                        style={{ width: '100%', border: '1px solid #ccc' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9da13a38a923c3516cfc/ef2.png"
                        alt="Chemical component EF2"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Chemical component EF2
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            The InChI search with
            <b>
              InChI=1S/C13H10N2O4/c16-10-6-5-9(11(17)14-10)15-12(18)7-3-1-2-4-8(7)13(15)19/h1-4,9H,5-6H2,(H,14,16,17)/t9-/m0/s1
            </b>
            and Match Type
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Similar Ligands (Quick screen)</b> will match
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22InChI%3D1S%2FC13H10N2O4%2Fc16-10-6-5-9(11(17)14-10)15-12(18)7-3-1-2-4-8(7)13(15)19%2Fh1-4%2C9H%2C5-6H2%2C(H%2C14%2C16%2C17)%2Ft9-%2Fm0%2Fs1%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22InChI%22%2C%22match_type%22%3A%22fingerprint-similarity%22%7D%7D%5D%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%223a0ac0d648e26561cb0a50e271e0d849%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these chemical components
              </a>
              and
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22InChI%3D1S%2FC13H10N2O4%2Fc16-10-6-5-9(11(17)14-10)15-12(18)7-3-1-2-4-8(7)13(15)19%2Fh1-4%2C9H%2C5-6H2%2C(H%2C14%2C16%2C17)%2Ft9-%2Fm0%2Fs1%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22InChI%22%2C%22match_type%22%3A%22fingerprint-similarity%22%7D%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%224177f3355b7e530fd63c081c6e540aee%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these structures
              </a>
              with those components.
            </li>
            <li>
              <b>Similar Ligands (Stereospecific)</b> will match
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22InChI%3D1S%2FC13H10N2O4%2Fc16-10-6-5-9(11(17)14-10)15-12(18)7-3-1-2-4-8(7)13(15)19%2Fh1-4%2C9H%2C5-6H2%2C(H%2C14%2C16%2C17)%2Ft9-%2Fm0%2Fs1%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22InChI%22%2C%22match_type%22%3A%22graph-relaxed-stereo%22%7D%7D%5D%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%2221ef6fba433c9ca8b7c95e669fe3384a%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these chemical components
              </a>
              and
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22InChI%3D1S%2FC13H10N2O4%2Fc16-10-6-5-9(11(17)14-10)15-12(18)7-3-1-2-4-8(7)13(15)19%2Fh1-4%2C9H%2C5-6H2%2C(H%2C14%2C16%2C17)%2Ft9-%2Fm0%2Fs1%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22InChI%22%2C%22match_type%22%3A%22fingerprint-similarity%22%7D%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%224177f3355b7e530fd63c081c6e540aee%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these structures
              </a>
              with those components.
            </li>
            <li>
              <b>Similar Ligands (including Stereoisomers) </b> will match
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22InChI%3D1S%2FC13H10N2O4%2Fc16-10-6-5-9(11(17)14-10)15-12(18)7-3-1-2-4-8(7)13(15)19%2Fh1-4%2C9H%2C5-6H2%2C(H%2C14%2C16%2C17)%2Ft9-%2Fm0%2Fs1%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22InChI%22%2C%22match_type%22%3A%22graph-relaxed%22%7D%7D%5D%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%224916aec1b726dcb9d4d2886e5b527307%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these chemical components
              </a>
              and
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22InChI%3D1S%2FC13H10N2O4%2Fc16-10-6-5-9(11(17)14-10)15-12(18)7-3-1-2-4-8(7)13(15)19%2Fh1-4%2C9H%2C5-6H2%2C(H%2C14%2C16%2C17)%2Ft9-%2Fm0%2Fs1%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22InChI%22%2C%22match_type%22%3A%22graph-relaxed%22%7D%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%22a48e867c40359b7b2e73c6330287e11d%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these structures
              </a>
              with those components.
            </li>
            <li>
              <b>Substructure (Stereospecific)</b> will match
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22InChI%3D1S%2FC13H10N2O4%2Fc16-10-6-5-9(11(17)14-10)15-12(18)7-3-1-2-4-8(7)13(15)19%2Fh1-4%2C9H%2C5-6H2%2C(H%2C14%2C16%2C17)%2Ft9-%2Fm0%2Fs1%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22InChI%22%2C%22match_type%22%3A%22sub-struct-graph-relaxed-stereo%22%7D%7D%5D%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%2238bfb3e58fe18e029a635a2d78fa6e53%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these chemical components
              </a>
              and
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22InChI%3D1S%2FC13H10N2O4%2Fc16-10-6-5-9(11(17)14-10)15-12(18)7-3-1-2-4-8(7)13(15)19%2Fh1-4%2C9H%2C5-6H2%2C(H%2C14%2C16%2C17)%2Ft9-%2Fm0%2Fs1%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22InChI%22%2C%22match_type%22%3A%22sub-struct-graph-relaxed-stereo%22%7D%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%22e6c81eba14c13c455ccd4c74677357d0%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these structures
              </a>
              with those components.
            </li>
            <li>
              <b>Substructure (including Stereoisomers)</b> will match
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22InChI%3D1S%2FC13H10N2O4%2Fc16-10-6-5-9(11(17)14-10)15-12(18)7-3-1-2-4-8(7)13(15)19%2Fh1-4%2C9H%2C5-6H2%2C(H%2C14%2C16%2C17)%2Ft9-%2Fm0%2Fs1%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22InChI%22%2C%22match_type%22%3A%22sub-struct-graph-relaxed%22%7D%7D%5D%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%2210ec224687ed222a628ec85d77d344d2%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these chemical components
              </a>
              and
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22InChI%3D1S%2FC13H10N2O4%2Fc16-10-6-5-9(11(17)14-10)15-12(18)7-3-1-2-4-8(7)13(15)19%2Fh1-4%2C9H%2C5-6H2%2C(H%2C14%2C16%2C17)%2Ft9-%2Fm0%2Fs1%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22InChI%22%2C%22match_type%22%3A%22sub-struct-graph-relaxed%22%7D%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%22e35962e4b1559b217b6bdb51e8de0834%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these structures
              </a>
              with those components.
            </li>
            <li>
              <b>Exact match</b> will match
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22InChI%3D1S%2FC13H10N2O4%2Fc16-10-6-5-9(11(17)14-10)15-12(18)7-3-1-2-4-8(7)13(15)19%2Fh1-4%2C9H%2C5-6H2%2C(H%2C14%2C16%2C17)%2Ft9-%2Fm0%2Fs1%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22InChI%22%2C%22match_type%22%3A%22graph-exact%22%7D%7D%5D%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%221d7bd9bb46ff3d06b95b49072675cba3%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these chemical components
              </a>
              and
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22value%22%3A%22InChI%3D1S%2FC13H10N2O4%2Fc16-10-6-5-9(11(17)14-10)15-12(18)7-3-1-2-4-8(7)13(15)19%2Fh1-4%2C9H%2C5-6H2%2C(H%2C14%2C16%2C17)%2Ft9-%2Fm0%2Fs1%22%2C%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22InChI%22%2C%22match_type%22%3A%22graph-exact%22%7D%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%22e59a1c550687d6ffea868c6dabb448d9%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                these structures
              </a>
              with those components.
            </li>
          </ul>
          <div></div>
          <p>
            Note that the query descriptor has one chiral atom so the results of
            the Match Types including and excluding stereoisomers yield
            different results.
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
        <div>Last updated: 3/9/2023</div>
      </div>
    </div>
  );
};
