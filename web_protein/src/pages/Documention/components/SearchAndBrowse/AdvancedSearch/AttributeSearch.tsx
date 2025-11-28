export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Advanced Search</h5>
        <h1>Attribute Search</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#overview">Overview</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#what-are-attributes">What are Attributes?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○<a href="#why-use-attribute-search-">Why use Attribute Search? </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#interface-description">Interface Description</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#types-of-structure-attributes">
              Types of Structure Attributes
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#identifiers-and-keywords-">Identifiers and Keywords </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#entry-related-attributes">Entry-related Attributes</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#computed-structure-model-attributes">
              Computed Structure Model Attributes
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#entity-related-attributes">Entity-related Attributes</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#instance-related-attributes">
              Instance-related Attributes
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#assembly-related-attributes">
              Assembly-related Attributes
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#sample-experiment-and-method-related-attributes">
              Sample, Experiment, and Method-related Attributes
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#types-of-chemical-attributes">
              Types of Chemical Attributes
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#small-molecule-and-bird-molecule-reference-data">
              Small Molecule and BIRD Molecule Reference Data
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#types-of-operators-and-how-to-use-them">
              Types of Operators and how to use them
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#numerical-and-date-attributes-operators">
              Numerical and date attributes operators
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#exact-match-text-attributes-operators">
              Exact match text attributes operators
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#free-text-attributes-operators">
              Free text attributes operators
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#examples">Examples</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#some-simple-search-examples-">
              Some Simple Search Examples:
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#s1-find-all-experimental-structures-that-include-a-chlorophyll-molecule">
              S1. Find all experimental structures that include a chlorophyll
              molecule
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#s2-find-myoglobin-structures">
              S2. Find myoglobin structures
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#s3-find-structures-related-to-uniprot-entry-p02185-sperm-whale-myoglobin">
              S3. Find structures related to UniProt entry P02185 (sperm whale
              myoglobin)
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#s4-find-structures-deposited-by-john-kendrew">
              S4. Find structures deposited by John Kendrew
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■<a href="#s5-find-latest-structures">S5. Find latest structures</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#some-composite-query-examples-">
              Some Composite Query examples:
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#c1-find-structures-that-include-chlorophyll-and-were-determined-using-electron-microscopy">
              C1. Find structures that include chlorophyll and were determined
              using electron microscopy
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#c2-find-entries-with-four-or-more-protein-chains-and-at-least-one-disulfide-linkage">
              C2. Find entries with four or more protein chains and at least one
              disulfide linkage
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#c3-find-entries-from-2020-that-don’t-include-dna">
              C3. Find entries from 2020 that don’t include DNA
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#c4-find-entries-from-sars-cov-2-that-include-glycosylation">
              C4. Find entries from SARS-CoV-2 that include glycosylation
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#c5-find-entries-of-human-or-mouse-hydrolases-that-are-in-complexes-with-nucleic-acids-were-determined-using-electron-microscopy-and-have-a-resolution-better-than-5å">
              C5. Find entries of human or mouse hydrolases, that are in
              complexes with Nucleic Acids, were determined using Electron
              Microscopy, and have a resolution better than 5Å
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#for-advanced-users">For Advanced Users</a>
          </div>
          <a className="content-anchor" id="overview"></a>
          <h2>Overview</h2>
          <a className="content-anchor" id="what-are-attributes"></a>
          <h3>What are Attributes?</h3>
          <p>
            Attributes are properties of a 3D structure that have specific text
            or numerical values, that can be used to identify one structure or a
            group of structures for exploration and analysis. The attributes
            available for searching include:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              information about the entry, e.g., who solved the structure, when,
              and by what method; where the structure was published, the names
              and types of molecules present in the structure, experimental
              details, and annotations
            </li>
            <li>
              properties of small molecules, ligands, drugs, and polymer
              building blocks (or residues) such as amino acids, and nucleotides
            </li>
            <li>information about the experiment performed</li>
          </ul>
          <div></div>
          <a className="content-anchor" id="why-use-attribute-search-"></a>
          <h3>Why use Attribute Search?</h3>
          <p>
            The Attribute Search on RCSB.org allows searching in specific
            attributes such as <i>Structure Title</i>, <i>Release Date</i>,
            <i>Source Organism Taxonomy Name</i>, etc. Limiting your search to
            specific attributes can yield more precise results. For instance, if
            you are looking for structures from a particular author, it is more
            efficient to limit your search to the <i>Structure Author</i>
            attribute. If your attribute search retrieves too many matches, you
            can construct complex queries to retrieve more manageable results.
            Complex queries can be constructed by using several attributes
            together, combining them with Boolean operators “AND”, “OR”, and
            “NOT”.
          </p>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a className="content-anchor" id="interface-description"></a>
          <h3>Interface Description</h3>
          <p>
            Advanced Search Query Builder provides two options to perform
            Attribute Search (Figure 1):
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/5fbecb613fb4b83bebb5e353/qb-attribute-search-interface.png"
                    data-toggle="lightbox"
                    data-title="Figure 1: Types of Attribute Search from the Advanced Search Query Builder"
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive content-img-border"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5fbecb613fb4b83bebb5e353/qb-attribute-search-interface.png"
                      alt="Figure 1: Types of Attribute Search from the Advanced Search Query Builder"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 1: Types of Attribute Search from the Advanced Search
                  Query Builder
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Structure Attribute</b> option allows searching through
              annotations that describe biological macromolecules defined in the
              PDB Exchange Dictionary (PDBx/mmCIF).
            </li>
            <li>
              <b>Chemical Attribute</b> option allows searching through chemical
              reference data that describe small molecules defined in the
              Chemical Component Dictionary (CCD) and peptide-like molecules
              provided by the Biologically Interesting Molecule Reference
              Dictionary (BIRD).
            </li>
          </ul>
          <div></div>
          <p>
            By default, Advanced Search Query Builder opens
            <b>Structure Attribute</b> option and shows other options collapsed
            (Figure 2):
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/5fbecb613fb4b83bebb5e353/qb-attribute-search-default.png"
                    data-toggle="lightbox"
                    data-title="Figure 2: Default view of Attribute search options from the Advanced Search Query Builder."
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive content-img-border"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5fbecb613fb4b83bebb5e353/qb-attribute-search-default.png"
                      alt="Figure 2: Default view of Attribute search options from the Advanced Search Query Builder."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 2: Default view of Attribute search options from the
                  Advanced Search Query Builder.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            You can select an attribute from the pull-down menu and fill in
            suitable keywords, values, ranges, etc. for that field. Learn more
            about
            <a href="/docs/search-and-browse/advanced-search/attribute-search#types-of-structure-attributes">
              Types of Attributes
            </a>
            that are available in search menus.
            <br />
            <br />
            See an example of the attribute search for the small molecule/ligand
            named "chlorophyll" (Figure 3). See also other
            <a href="/docs/search-and-browse/advanced-search/attribute-search#examples">
              Examples
            </a>
            .
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/5fbecb613fb4b83bebb5e353/qb-attribute-search-ui-elements.png"
                    data-toggle="lightbox"
                    data-title="Figure 3: Shown here is the interface after the attribute “Chemical Name” is chosen from the pull-down menu and “chlorophyll” typed as a search value.
"
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive content-img-border"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5fbecb613fb4b83bebb5e353/qb-attribute-search-ui-elements.png"
                      alt="Figure 3: Shown here is the interface after the attribute “Chemical Name” is chosen from the pull-down menu and “chlorophyll” typed as a search value.
"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 3: Shown here is the interface after the attribute
                  “Chemical Name” is chosen from the pull-down menu and
                  “chlorophyll” typed as a search value.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <ol style={{ paddingLeft: '40px' }}>
            <li>X - this will clear the attribute box</li>
            <li>
              Down arrow - gives an abbreviated menu of attribute categories,
              and full lists of attributes are opened using the down arrow in
              the list
            </li>
            <li>
              Double down arrow - gives an expanded menu of attributes with no
              need to open categories
            </li>
            <li>
              Qualifier window - drop down menus give choices for qualifiers,
              such as “contains phrase”
            </li>
            <li>
              Attribute text box - values for the attribute are input here. In
              some cases, a drop-down menu of choices is available
            </li>
            <li>+ NOT - changes the attribute to a Boolean NOT</li>
            <li>
              Count - gives a preview of the number of 3D structures
              corresponding to that attribute
            </li>
            <li>X - this will remove the entire attribute</li>
            <li>
              Buttons at the bottom of the Attribute search allow construction
              of complex composite queries, with new attributes and subgroups
              related by AND or OR Boolean operators
            </li>
          </ol>
          <div></div>
          <p>
            A query can be made more specific by including additional attributes
            and combining them with Boolean Operators. <br />
            <br />
            “Groups” can be used to define complex logical expressions with
            AND/OR conditions. The query can include one or more “Group” of
            attributes, which is similar to writing a search expression “in
            parentheses”, such that they are evaluated first while determining
            the query outcome. <br /> <br />
            You can execute partial queries for each attribute by clicking on
            the "Count" button next to the search expression.
          </p>
          <p>
            To run the search, click on the magnifying glass icon in the bottom
            right corner of the Advanced Search Query Builder (Figure 4).
          </p>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5fbecb613fb4b83bebb5e353/ats4.png"
                      data-toggle="lightbox"
                      data-title="Figure 4: Buttons to run query count, clear it, and run the full query. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5fbecb613fb4b83bebb5e353/ats4.png"
                        alt="Figure 4: Buttons to run query count, clear it, and run the full query. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 4: Buttons to run query count, clear it, and run the
                    full query.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="types-of-structure-attributes"></a>
          <h3>Types of Structure Attributes</h3>
          <p>
            Attributes or properties available for searching the archive are
            grouped according to entry, entity, instance, assembly, experimental
            details, and annotations. These are briefly summarized here and
            described in detail below. See
            <a href="/docs/search-and-browse/advanced-search/attribute-details">
              Attribute Details
            </a>
            section for all available attributes.
          </p>
          <a className="content-anchor" id="identifiers-and-keywords-"></a>
          <h4>Identifiers and Keywords</h4>
          <p>
            These attributes include identifiers assigned to the PDB structures
            or CSMs (entry), experimental maps (EMDB), macromolecules included
            in the structure (entities such as proteins or nucleic acids), and
            related keywords.
          </p>
          <a className="content-anchor" id="entry-related-attributes"></a>
          <h4>Entry-related Attributes</h4>
          <p>
            These attributes focus on properties of the entry (experimental
            structure) and include
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              summary information about entry deposition (such as titles,
              authors, affiliations, and dates)
            </li>
            <li>
              entry composition (types and numbers of protein, DNA, and RNA
              macromolecules, molecular weights, and number of non-polymer
              entities in the entry)
            </li>
            <li>
              primary citations describing the entry, including citation
              information, abstract, and common identifiers, e.g., DOI
            </li>
            <li>
              attributes related to all citations that reference the entry
            </li>
          </ul>
          <div></div>
          <p>
            The Structure Determination Methodology attribute allows users to
            query experimental structures only, CSMs only, or both.
          </p>
          <a
            className="content-anchor"
            id="computed-structure-model-attributes"
          ></a>
          <h4>Computed Structure Model Attributes</h4>
          <p>
            These attributes pertain to computed structure model structures
            alone and include
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>CSM entry identifier</li>
            <li>Source Database for CSMs</li>
            <li>The global quality score (pLDDT)</li>
          </ul>
          <div></div>
          <a className="content-anchor" id="entity-related-attributes"></a>
          <h4>Entity-related Attributes</h4>
          <p>
            These attributes focus on properties of polymeric and non-polymeric
            molecules present in the entry. They include details about
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              macromolecules (proteins or nucleic acids) including names, types,
              and length of polymers, mutations and modifications, organism
              taxonomies and enzyme
            </li>
            <li>
              classNameifications, and information on membrane association
            </li>
            <li>
              non-polymer small molecules including component ID for molecule of
              interest and binding properties
            </li>
            <li>
              oligosaccharide (or branched polymer) details including structural
              features and components
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="instance-related-attributes"></a>
          <h4>Instance-related Attributes</h4>
          <p>
            These attributes focus on annotations of each instance of polymeric
            entities, e.g., SCOP and CATH classNameifications.
          </p>
          <a className="content-anchor" id="assembly-related-attributes"></a>
          <h4>Assembly-related Attributes</h4>
          <p>
            These attributes are related to biological assemblies, including
            size and composition of the assembly, experimental support for
            assembly assignment, and assembly symmetry. <br />
            <br />
            <i>Note</i>: If you are expecting to see all assemblies that match
            your query, remember to change the
            <a
              href="/docs/search-and-browse/advanced-search/overview-advanced-search#search-result-return-options"
              target="_blank"
            >
              Return option
            </a>
            to "Assemblies".
          </p>
          <a
            className="content-anchor"
            id="sample-experiment-and-method-related-attributes"
          ></a>
          <h4>Sample, Experiment, and Method-related Attributes</h4>
          <p>
            These attributes can be used to design queries based on the
            structure determination and include details about
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              experimental method types, including overall resolution, and
              software employed
            </li>
            <li>
              properties of crystals used for structure determination, including
              unit cell dimensions, space group, crystallization method(s)
            </li>
            <li>experiment-specific details for:</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                X-ray crystallography, including attributes related to
                refinement, B-values, and R-values
              </li>
              <li>NMR data collection and refinement</li>
              <li>EM data collection and refinement</li>
            </ul>
          </ul>
          <div></div>
          <a className="content-anchor" id="types-of-chemical-attributes"></a>
          <h3>Types of Chemical Attributes</h3>
          <a
            className="content-anchor"
            id="small-molecule-and-bird-molecule-reference-data"
          ></a>
          <h4>Small Molecule and BIRD Molecule Reference Data</h4>
          <p>
            These attributes enable queries based on the presence of specific
            chemical components and/or larger Biologically Interesting Molecules
            (or BIRD Molecules such as peptide-like inhibitors and antibiotic
            molecules) in the PDB. The attributes include chemical names and
            identifiers, atom counts, and molecular weights. These are useful
            for searching components that are parts of polymers and
            oligosaccharides (amino acids, nucleotides, saccharides etc.) as
            well as non-covalently bound ligands, inhibitors, and drugs.
          </p>
          <a
            className="content-anchor"
            id="types-of-operators-and-how-to-use-them"
          ></a>
          <h3>Types of Operators and how to use them</h3>
          <p>
            Queries can be constructed by assigning values or ranges for
            selected attributes and combining them with suitable Boolean
            operators. Depending on the type of attribute, one can use different
            operators to create search conditions. Below are all the possible
            Operators for the different types.
          </p>
          <a
            className="content-anchor"
            id="numerical-and-date-attributes-operators"
          ></a>
          <h4>Numerical and date attributes operators</h4>
          <p>
            Numerical values of these attributes can be used to identify 3D
            structures with values equal to (=), less/more than () a specified
            number. For some attributes ranges of values can be assigned, or the
            query can be used to identify structures with any value assigned to
            that attribute. These operators can be selected from the following
            list:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>=</b>,<b> &gt;</b>,<b> &gt;=</b>,<b> &lt;</b>,<b> &lt;=</b> :
              standard mathematical operators
            </li>
            <li>
              <b>range (upper excl.)</b>: range of numerical values for an
              attribute (from a lower bound to an upper bound), excluding the
              upper bound
            </li>
            <li>
              <b>range (upper incl.)</b>: range of numerical values for an
              attribute (from a lower bound to an upper bound), including the
              upper bound
            </li>
            <li>
              <b>is not empty</b>: match for all entries that have any numerical
              data for the corresponding attribute. Entries with no data for the
              attribute are not matched. Note: this operator does not take any
              input value
            </li>
            <li>
              <b>last 7 days</b>: a relative date search for the last
              <b>1 week</b> (from the date of the query). It allows you to
              create searches that can be run periodically without needing to
              alter the query. Note: this operator does not take any input value
            </li>
            <li>
              <b>last 30 days</b>: a relative date search for the last
              <b>1 month</b> (from the date of the query). It allows you to
              create searches that can be run periodically without needing to
              alter the query. Note: this operator does not take any input value
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="exact-match-text-attributes-operators"
          ></a>
          <h4>Exact match text attributes operators</h4>
          <p>
            Text-based attributes may be of two types - ones that exactly match
            a given vocabulary list and those that are free form. Attributes of
            the former type can be included in queries as a specific
            word/phrase, a list of words/phrases, or simply based on whether or
            not the entry includes something in that attribute. The operators
            can be selected from the following list:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>is</b>: the attribute must match the given text value exactly.
            </li>
            <li>
              <b>is any of</b>: the attribute must match any of the given values
              in a comma-separated list. The list can also be a single value.
            </li>
            <li>
              <b>is not empty</b>: this operator does not take an argument. It
              matches entries that have any text data for the corresponding
              attribute.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="free-text-attributes-operators"></a>
          <h4>Free text attributes operators</h4>
          <p>
            Some text-based attributes are free-format, i.e., they do not use a
            specific vocabulary but may include specific words or phrases.
            Queries may also be designed to identify structures with any content
            in these attributes:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>has exact phrase</b>: the attribute's text must contain the
              given phrase
            </li>
            <li>
              <b>has any of words</b>: the attribute's text must contain all the
              given words, in any order
            </li>
            <li>
              <b>is not empty</b>: this operator does not take an argument. It
              matches entries that have any text data for the corresponding
              attribute
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="examples"></a>
          <h2>Examples</h2>
          <p>
            With the attribute search, users can do simple searches on many
            aspects of entries in the archive. For example, properties of the
            molecules, as well as information about who, where, and how the
            structures were determined can be used for searches. Users can also
            create composite queries by combining several types of search
            attributes to refine or focus on entries that fit their current
            needs. Here are a few examples.
          </p>
          <a className="content-anchor" id="some-simple-search-examples-"></a>
          <h3>Some Simple Search Examples:</h3>
          <a
            className="content-anchor"
            id="s1-find-all-experimental-structures-that-include-a-chlorophyll-molecule"
          ></a>
          <h4>
            S1. Find all experimental structures that include a chlorophyll
            molecule
          </h4>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/5fbecb613fb4b83bebb5e353/as-redo-f5.png"
                    data-toggle="lightbox"
                    data-title="Figure 5: Advanced Search Query Builder options to search for structures with chlorophyll molecules. "
                  >
                    <img
                      style={{ width: '100%', border: '1px solid #ccc' }}
                      className="img-responsive content-img-border"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5fbecb613fb4b83bebb5e353/as-redo-f5.png"
                      alt="Figure 5: Advanced Search Query Builder options to search for structures with chlorophyll molecules. "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 5: Advanced Search Query Builder options to search for
                  structures with chlorophyll molecules.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <ol style={{ paddingLeft: '40px' }}>
            <li>
              In the Chemical Attributes section of the Query builder, choose
              “Chemical Components: Chemical Name” and type "chlorophyll" in the
              box
            </li>
            <li>
              Click on the magnifying glass to get several hundred proteins that
              include types of chlorophyll molecules (See Figure 5).
            </li>
          </ol>
          <div></div>
          <p>
            Note: As of August 2022, CSMs avialable from the RCSB.org do not
            include any ligands so this search is run with the default option of
            excluding CSMs.
          </p>
          <a className="content-anchor" id="s2-find-myoglobin-structures"></a>
          <h4>S2. Find myoglobin structures</h4>
          <p>
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_polymer_entity.rcsb_macromolecular_names_combined.name%22%2C%22operator%22%3A%22contains_phrase%22%2C%22value%22%3A%22myoglobin%22%2C%22negation%22%3Afalse%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22results_content_type%22%3A%5B%22experimental%22%5D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22fd6194c7f2a3659ccf59081b94e802de%22%7D%7D"
              target="_blank"
            >
              Run query (experimental structures only)
            </a>
            . This uses the attribute “Polymer Molecular Features: Macromolecule
            Name” to search in experimental structures only
            <br />
            <br />
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_polymer_entity.rcsb_macromolecular_names_combined.name%22%2C%22operator%22%3A%22contains_phrase%22%2C%22value%22%3A%22myoglobin%22%2C%22negation%22%3Afalse%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%2270732e56ef28624a80dac4020d4b38e0%22%7D%7D"
              target="_blank"
            >
              Run query (experimental structures and CSMs)
            </a>
            . This uses the attribute “Polymer Molecular Features: Macromolecule
            Name” to search in experimental structures and CSMs.
          </p>
          <a
            className="content-anchor"
            id="s3-find-structures-related-to-uniprot-entry-p02185-sperm-whale-myoglobin"
          ></a>
          <h4>
            S3. Find structures related to UniProt entry P02185 (sperm whale
            myoglobin)
          </h4>
          <p>
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession%22%2C%22negation%22%3Afalse%2C%22operator%22%3A%22in%22%2C%22value%22%3A%5B%22P02185%22%5D%7D%2C%22node_id%22%3A0%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_name%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22UniProt%22%7D%2C%22node_id%22%3A1%7D%5D%2C%22label%22%3A%22nested-attribute%22%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%224c9cea784091d55f54c536cd19cf92b0%22%7D%7D"
              target="_blank"
            >
              Run query (experimental structures only)
            </a>
            . This uses the attribute “IDs and Keywords: Accession Code(s) -
            UniProt”
            <br />
            <br />
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession%22%2C%22operator%22%3A%22in%22%2C%22negation%22%3Afalse%2C%22value%22%3A%5B%22P02185%22%5D%7D%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_name%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22UniProt%22%2C%22negation%22%3Afalse%7D%7D%5D%2C%22label%22%3A%22nested-attribute%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22d28f31b98f31ae19831fb139507bacdf%22%7D%7D"
              target="_blank"
            >
              Run query (experimental structures and CSMs)
            </a>
            . This uses the attribute “IDs and Keywords: Accession Code(s) -
            UniProt”
          </p>
          <a
            className="content-anchor"
            id="s4-find-structures-deposited-by-john-kendrew"
          ></a>
          <h4>S4. Find structures deposited by John Kendrew</h4>
          <p>
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22Kendrew%2C%20J.C.%22%2C%22attribute%22%3A%22audit_author.name%22%7D%2C%22node_id%22%3A0%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%223da5653cdc1cabd4217408c8437a3683%22%7D%7D"
              target="_blank"
            >
              Run query.
            </a>
            This uses the attribute “Deposition: Structure Author”
          </p>
          <a className="content-anchor" id="s5-find-latest-structures"></a>
          <h4>S5. Find latest structures</h4>
          <p>
            PDB structures are updated each week on Wednesday 00:00 UTC
            (Coordinated Universal Time).
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%20%22terminal%22%2C%22label%22%3A%20%22text%22%2C%22service%22%3A%20%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%20%22rcsb_accession_info.initial_release_date%22%2C%22operator%22%3A%22range%22%2C%22negation%22%3Afalse%2C%22value%22%3A%7B%22from%22%3A%20%22now-1w%22%2C%22to%22%3A%20%22now%22%7D%7D%7D%2C%22return_type%22%3A%20%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22results_content_type%22%3A%5B%22experimental%22%5D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%20%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%7D"
              target="_blank"
            >
              Run query.
            </a>
            This query uses the attribute "Release Date" to find latest
            structures
          </p>
          <a className="content-anchor" id="some-composite-query-examples-"></a>
          <h3>Some Composite Query examples:</h3>
          <a
            className="content-anchor"
            id="c1-find-structures-that-include-chlorophyll-and-were-determined-using-electron-microscopy"
          ></a>
          <h4>
            C1. Find structures that include chlorophyll and were determined
            using electron microscopy
          </h4>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/5fbecb613fb4b83bebb5e353/as-redo-f6.png"
                    data-toggle="lightbox"
                    data-title="Figure 6: Advanced Search Query Builder options to search for electron microscopy structures with chlorophyll molecules. "
                  >
                    <img
                      style={{ width: '100%', border: '1px solid #ccc' }}
                      className="img-responsive content-img-border"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5fbecb613fb4b83bebb5e353/as-redo-f6.png"
                      alt="Figure 6: Advanced Search Query Builder options to search for electron microscopy structures with chlorophyll molecules. "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 6: Advanced Search Query Builder options to search for
                  electron microscopy structures with chlorophyll molecules.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <ol style={{ paddingLeft: '40px' }}>
            <li>
              Choose from Structure Attribute: “Methods" -&gt; "Experimental
              Methods”. Click on the little arrow next to the box, and select
              “ELECTRON MICROSCOPY”.
            </li>
            <li>
              Choose from Chemical Attribute: “Chemical Components" -&gt;
              "Chemical Name”, with “chlorophyll”
            </li>
            <li>
              Click on the magnifying glass to get several dozen structures of
              proteins determined using electron microscopy that include
              chlorophyll molecules
            </li>
          </ol>
          <div></div>
          <p>
            Note: Since one of the query parameters specifies the experimental
            method as electron microscopy, use the default option and exclude
            CSMs from the search.
          </p>
          <a
            className="content-anchor"
            id="c2-find-entries-with-four-or-more-protein-chains-and-at-least-one-disulfide-linkage"
          ></a>
          <h4>
            C2. Find entries with four or more protein chains and at least one
            disulfide linkage
          </h4>
          <p>
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22greater_or_equal%22%2C%22negation%22%3Afalse%2C%22value%22%3A4%2C%22attribute%22%3A%22rcsb_assembly_info.polymer_entity_instance_count_protein%22%7D%2C%22node_id%22%3A0%7D%5D%7D%2C%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22greater_or_equal%22%2C%22negation%22%3Afalse%2C%22value%22%3A1%2C%22attribute%22%3A%22rcsb_entry_info.disulfide_bond_count%22%7D%2C%22node_id%22%3A1%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%225fd1fdf197c0b3c10f086116c26df385%22%7D%7D"
              target="_blank"
            >
              Run query.
            </a>
            Uses attributes: “Assembly Features: Number of Protein Instances
            (Chains) per Assembly” AND “Deposited Entry Features: Disulfide Bond
            Count per Deposited Model”
          </p>
          <a
            className="content-anchor"
            id="c3-find-entries-from-2020-that-don’t-include-dna"
          ></a>
          <h4>C3. Find entries from 2020 that don’t include DNA</h4>
          <p>
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22range%22%2C%22negation%22%3Afalse%2C%22value%22%3A%7B%22from%22%3A%222020-01-01%22%2C%22to%22%3A%222020-12-31%22%2C%22include_lower%22%3Atrue%2C%22include_upper%22%3Atrue%7D%2C%22attribute%22%3A%22rcsb_accession_info.deposit_date%22%7D%2C%22node_id%22%3A0%7D%5D%7D%2C%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22exact_match%22%2C%22negation%22%3Atrue%2C%22value%22%3A%22DNA%22%2C%22attribute%22%3A%22entity_poly.rcsb_entity_polymer_type%22%7D%2C%22node_id%22%3A1%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%2260e6e9d0f04bb96b5ff21a71cbc7d4b5%22%7D%7D"
              target="_blank"
            >
              Run query.
            </a>
            Uses attributes: “Deposition: Deposit Date” AND “Polymer Molecular
            Features: Polymer Entity Type”, with the NOT selected
          </p>
          <a
            className="content-anchor"
            id="c4-find-entries-from-sars-cov-2-that-include-glycosylation"
          ></a>
          <h4>C4. Find entries from SARS-CoV-2 that include glycosylation</h4>
          <p>
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22Severe%20acute%20respiratory%20syndrome%20coronavirus%202%22%2C%22attribute%22%3A%22rcsb_entity_source_organism.taxonomy_lineage.name%22%7D%2C%22node_id%22%3A0%7D%5D%7D%2C%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22greater_or_equal%22%2C%22negation%22%3Afalse%2C%22value%22%3A2%2C%22attribute%22%3A%22pdbx_entity_branch.rcsb_branched_component_count%22%7D%2C%22node_id%22%3A1%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%22a986aa5741115b658af22c733a503903%22%7D%7D"
              target="_blank"
            >
              Run query.
            </a>
            Uses attributes: “Polymer Molecular Features: Source Organism
            Taxonomy Name” AND “Oligosaccharide/Branched Molecular Features:
            Oligosaccharide Component Count”
          </p>
          <a
            className="content-anchor"
            id="c5-find-entries-of-human-or-mouse-hydrolases-that-are-in-complexes-with-nucleic-acids-were-determined-using-electron-microscopy-and-have-a-resolution-better-than-5å"
          ></a>
          <h4>
            C5. Find entries of human or mouse hydrolases, that are in complexes
            with Nucleic Acids, were determined using Electron Microscopy, and
            have a resolution better than 5Å
          </h4>
          <p>
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%223%22%2C%22attribute%22%3A%22rcsb_polymer_entity.rcsb_ec_lineage.id%22%7D%2C%22node_id%22%3A0%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22Protein%2FNA%22%2C%22attribute%22%3A%22rcsb_entry_info.selected_polymer_entity_types%22%7D%2C%22node_id%22%3A1%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22ELECTRON%20MICROSCOPY%22%2C%22attribute%22%3A%22exptl.method%22%7D%2C%22node_id%22%3A2%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22less%22%2C%22negation%22%3Afalse%2C%22value%22%3A5%2C%22attribute%22%3A%22em_3d_reconstruction.resolution%22%7D%2C%22node_id%22%3A3%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_entity_source_organism.taxonomy_lineage.name%22%2C%22operator%22%3A%22in%22%2C%22negation%22%3Afalse%2C%22value%22%3A%5B%22Homo%20sapiens%22%2C%22Mus%20musculus%22%5D%7D%2C%22label%22%3A%22input-group%22%2C%22node_id%22%3A4%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%2247157d6fde1f8152a491eb3fb541abae%22%7D%7D"
              target="_blank"
            >
              Run query.
            </a>
            Uses attributes Enzyme classNameification Number, Source Organism
            Taxonomy Name, Polymer Types and more. The query can also be written
            as follows:
          </p>
          <p>
            <b>QUERY:</b> Enzyme classNameification Number <b>=</b> "3"
            <b>AND</b> Entry Polymer Types <b>=</b> "Protein/NA" <b>AND</b>
            Experimental Method <b>=</b> "ELECTRON MICROSCOPY" <b>AND</b>
            Reconstruction Resolution <b>&lt;</b> 5 <b>AND</b> Source Organism
            Taxonomy Name <b>IN</b> (Homo sapiens, Mus musculus)
          </p>
          <a className="content-anchor" id="for-advanced-users"></a>
          <h2>For Advanced Users</h2>
          <p>
            Advanced users who wish to use web-services to run searches can
            learn more about the data structure (
            <a href="https://data.rcsb.org/#examples" target="_blank">
              https://data.rcsb.org/#examples
            </a>
            ) and get search instructions and examples (
            <a href="https://search.rcsb.org/#examples" target="_blank">
              https://search.rcsb.org/#examples
            </a>
            ). Further details on Web Services and APIs are available at
            <a href="/docs/general-help/web-services-overview" target="_blank">
              Web Services Overview
            </a>
            .
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
