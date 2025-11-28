export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Advanced Search</h5>
        <h1>Overview: Advanced Search</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#what-is-advanced-search">What is Advanced Search?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#why-use-advanced-search">Why use Advanced Search?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#advanced-search-query-builder-options-infographic">
              Advanced Search Query Builder Options Infographic
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#advanced-search-query-builder-interface">
              Advanced Search Query Builder Interface
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#queries-using-the-advanced-search-options-">
              Queries: Using the Advanced Search Options
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#criteria-for-searching">Criteria for Searching</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#combining-searches">Combining Searches</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#search-result-return-options">
              Search Result Return Options
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#the-results-page">The Results Page</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#options-for-grouping-results-">
              Options for Grouping Results
            </a>
          </div>
          <hr />
          <p>
            Video:
            <a href="https://youtu.be/1WsuwnPCbIo" target="_blank">
              Advanced Search and Grouping
            </a>
          </p>
          <hr />
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <a className="content-anchor" id="what-is-advanced-search"></a>
          <h3>What is Advanced Search?</h3>
          <p>
            Besides the 3D coordinates of atoms in the structure, all
            experimental structures (PDB entries) and computed structure models
            (CSMs) include a variety of meta-data about the experiment, polymer
            sequences, and ligands present in the structure. Information and
            annotations from other data resources are also connected to each PDB
            entry.
          </p>
          <a className="content-anchor" id="why-use-advanced-search"></a>
          <h3>Why use Advanced Search?</h3>
          <p>
            RCSB PDB Advanced Search options allow you to query all data in the
            coordinate files and their associated annotations to rapidly find
            structures, polymers, and ligands relevant to the topic of interest.
          </p>
          <a
            className="content-anchor"
            id="advanced-search-query-builder-options-infographic"
          ></a>
          <h3>Advanced Search Query Builder Options Infographic</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <a href="https://cdn.rcsb.org/rcsb-pdb/search/SearchnBrowse2go.pdf#page=3">
                    <img
                      style={{ width: '100%', border: '1px solid #ccc' }}
                      className="img-responsive content-img-border"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5ffde93f3a38a923c3516cf3/searchbrowse-3.png"
                      alt="Click on the image for more information ..."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Click on the image for more information ...
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a
            className="content-anchor"
            id="advanced-search-query-builder-interface"
          ></a>
          <h3>Advanced Search Query Builder Interface</h3>
          <p>
            The Advanced Search Query Builder interface features powerful
            options for constructing complex searches and managing results.
            Attribute queries can be seamlessly combined with sequence and
            structure similarity searches.
            <br />
            <br />
            The interface also allows users to exclude or include CSMs in the
            search by using the default options or checking on the toggle switch
            next to the Count, Clear, and Search buttons (Figure 1).
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffde93f3a38a923c3516cf3/csm-f2-rev.png"
                      data-toggle="lightbox"
                      data-title="Figure 1: Advanced Search Query Builder options. Toggle switch on to include CSMs is shown in a red outlined box. "
                    >
                      <img
                        style={{ width: '100%', border: '1px solid #ccc' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffde93f3a38a923c3516cf3/csm-f2-rev.png"
                        alt="Figure 1: Advanced Search Query Builder options. Toggle switch on to include CSMs is shown in a red outlined box. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 1: Advanced Search Query Builder options. Toggle
                    switch on to include CSMs is shown in a red outlined box.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a
            className="content-anchor"
            id="queries-using-the-advanced-search-options-"
          ></a>
          <h3>Queries: Using the Advanced Search Options</h3>
          <p>
            The Advanced Search options allow you to construct complex composite
            queries to quickly find structures and/or information related to the
            topic of interest by
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              defining the query either as specifically or as broadly as is
              appropriate for the search being performed.
            </li>
            <li>including or excluding CSMs in the search, and </li>
            <li>
              organizing search results in a manner that facilitates rapid
              identification of the individual structure matches or groups of
              search results of interest.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="criteria-for-searching"></a>
          <h3>Criteria for Searching</h3>
          <p>
            The Advanced Search options allow you to query the archive in four
            distinct ways (Figure 2). For all searches, there is an option to
            include CSMs (by turning on the toggle switch, cyan colored) or
            exclude them (by turning off the toggle switch, gray colored).
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffde93f3a38a923c3516cf3/as-f2-revise.png"
                      data-toggle="lightbox"
                      data-title="Figure 2: Types of Advanced Search options available from the Query builder. The option to include or exclude CSMs is also available via the cyan colored toggle switch."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffde93f3a38a923c3516cf3/as-f2-revise.png"
                        alt="Figure 2: Types of Advanced Search options available from the Query builder. The option to include or exclude CSMs is also available via the cyan colored toggle switch."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 2: Types of Advanced Search options available from
                    the Query builder. The option to include or exclude CSMs is
                    also available via the cyan colored toggle switch.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>
                <a
                  href="/docs/search-and-browse/advanced-search/attribute-search"
                  target="_blank"
                >
                  Attribute Search
                </a>
              </b>
              : This option allows for three types of searches based on specific
              text-based or numerical properties of entries, assemblies, or
              ligands.
            </li>
            <ol style={{ paddingLeft: '40px' }}>
              <li>
                <i>Full Text </i> searches of PDB entries and their associated
                annotations
              </li>
              <li>
                <i>Structural Attributes</i> searches of textual and numerical
                properties of PDB structure(s), their associated experimental
                details that relate to polymer molecules (e.g., name,
                identifiers)
              </li>
              <li>
                <i>Chemical Attributes</i> searches of the names and
                classNameifications of small molecules (ligands), inhibitors,
                drugs, etc. that are present in PDB structures
              </li>
            </ol>
            <li>
              <b>Sequence Based Search</b>: This option allows for searches
              based on the polymer sequences present in PDB structures.
            </li>
            <ol style={{ paddingLeft: '40px' }}>
              <li>
                <i>
                  <a
                    href="/docs/search-and-browse/advanced-search/sequence-search"
                    target="_blank"
                  >
                    Sequence search
                  </a>
                </i>
                uses the polymer sequences of all or a significant portion of
                the proteins and nucleic acids present in a structure.
              </li>
              <li>
                <i>
                  <a
                    href="/docs/search-and-browse/advanced-search/sequence-motif-search"
                    target="_blank"
                  >
                    Sequence Motif search
                  </a>
                </i>
                uses a short polymer query sequence.
              </li>
            </ol>
            <li>
              <b>Structure Based Search</b>: This option enables searches based
              on 3D structural alignments.
            </li>
            <ol style={{ paddingLeft: '40px' }}>
              <li>
                <i>
                  <a
                    href="/docs/search-and-browse/advanced-search/structure-search"
                    target="_blank"
                  >
                    Structure search
                  </a>
                </i>
                is based on 3D shape.
              </li>
              <li>
                <i>
                  <a
                    href="/docs/search-and-browse/advanced-search/structure-motif-search"
                    target="_blank"
                  >
                    Structure Motif search
                  </a>
                </i>
                is based on the local arrangement of a selected set of
                structural building blocks in a given PDB structure.
              </li>
            </ol>
            <li>
              <b>
                <a
                  href="/docs/search-and-browse/advanced-search/chemical-search"
                  target="_blank"
                >
                  Chemical Search
                </a>
              </b>
              : This option allows for searches based on chemical information
              (e.g., chemical formula and descriptors like SMILES, InChI).
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="combining-searches"></a>
          <h4>Combining Searches</h4>
          <p>
            Composite and complex Boolean queries can be constructed using the
            'AND', 'OR', and 'NOT' options available on the Advanced Search
            interface. These operators can be applied to specific attributes or
            groups of attributes and used as follows:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              AND: identify structures, polymers, ligands, or assemblies that
              meet all the specified criteria.
            </li>
            <li>
              OR: identify structures, polymers, ligands, or assemblies that
              meet any one of the specified criteria.
            </li>
            <li>
              NOT: exclude structures, polymers, ligands, or assemblies that
              meet the specified criteria.
            </li>
          </ul>
          <div></div>
          <p>
            Different search types (i.e., attribute-based, sequence-based,
            structure-based, and chemical information-based searches) may be
            combined to construct complex composite queries. As you assemble a
            composite query, you have the option of running subqueries to assess
            how many structures, polymers, etc. match those selected portions of
            the overall query.
          </p>
          <a className="content-anchor" id="search-result-return-options"></a>
          <h3>Search Result Return Options</h3>
          <p>
            Before you launch a search there are two decisions that should be
            made - (a) what type of results do you wish to see; and (b) how
            should the results be presented (as a list of as groups)
            <br />
            3D structure searches can return two kinds of results:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Structural data: PDB entry, entity, and/or assembly information
              pertaining to one or more structures in the archive.
            </li>
            <li>
              Molecular definitions: chemical component dictionary and BIRD
              molecule matches to specific search criteria.
            </li>
          </ul>
          <div></div>
          <p>
            Select options from the Return menu in the lower left corner of the
            Advanced Search Query Builder (Figure 3) about whether you wish to
            find 3D structures or entries (default), polymer entities (e.g.,
            sequence matches), assembly of biological macromolecules, or small
            molecule ligands.
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffde93f3a38a923c3516cf3/as-f3-revise.png"
                      data-toggle="lightbox"
                      data-title="Figure 3: Return options for Advanced Search queries. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffde93f3a38a923c3516cf3/as-f3-revise.png"
                        alt="Figure 3: Return options for Advanced Search queries. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 3: Return options for Advanced Search queries.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            Several options for the types of search results are available in the
            pulldown, with the default option being “Structures”.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Structures</b> - PDB entries, designated with a 4-character
              alphanumeric identifier, e.g. 1Q2W. See grouping options for
              Structures.
            </li>
            <li>
              <b>Polymer Entities </b>- distinct (chemically unique) polymeric
              molecules present in PDB entries, specifically proteins
              (polypeptides), DNA (polydeoxyribonucleotide), and RNA
              (polyribonucleotide). See grouping options for Structures.
            </li>
            <li>
              <b>Non-polymer Entities</b> - small chemicals (enzyme cofactors,
              ligands, ions, etc) defined as non-polymers in the coordinate
              file. A non-polymer Entity ID is a combination of a PDB ID and
              entity ID, e.g., 4HHB_3. This option can be useful when searching
              for small chemicals within their macromolecular context, for
              instance covalently bound ligands such as ATP in 2CCH (entity
              2CCH_4).
            </li>
            <li>
              <b>Assemblies</b> - the macromolecular quaternary structure
              believed to be the functional form of the molecule (also referred
              to as the “biological unit”)
            </li>
            <li>
              <b>Molecular Definitions</b> - includes standard and modified
              amino acids (e.g., ALA) and nucleotides (e.g., A), small molecule
              ligands (e.g., ATP, or HEM) as they are defined in the wwPDB
              Chemical Component Dictionary (CCD), and peptide-like molecules as
              they are defined in the Biologically Interesting molecule
              Reference Dictionary (BIRD), (e.g., PRD_000010).
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="the-results-page"></a>
          <h3>The Results Page</h3>
          <p>
            Depending on the Return options selected, the search results page
            displays lists of 3D structures, polymer entities, ligands,
            assemblies etc. In all cases the results page has a Refinements menu
            on the left and options to view, download and create reports on the
            top of the page (see Figure 4).
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffde93f3a38a923c3516cf3/as-f4.png"
                      data-toggle="lightbox"
                      data-title="Figure 4: Part of the Search Results page showing a list of structures with icons indicating if they are experimental structures or CSMs."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffde93f3a38a923c3516cf3/as-f4.png"
                        alt="Figure 4: Part of the Search Results page showing a list of structures with icons indicating if they are experimental structures or CSMs."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 4: Part of the Search Results page showing a list of
                    structures with icons indicating if they are experimental
                    structures or CSMs.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>View</b> - the search results can be viewed in a variety of
              formats. In each of these views the experimental structures are
              marked with a dark blue colored icon showing a flask, while CSMs
              are marked with a cyan colored icon showing a computer. Structure
              identifiers of search hits shown in these views link to the
              respective
              <a
                href="/docs/exploring-a-3d-structure/structure-summary-page"
                target="_blank"
              >
                structure summary pages
              </a>
              . The search results may be viewed in the following formats -
            </li>
            <ol style={{ paddingLeft: '40px' }}>
              <li>
                <b>Summary</b> - every search hit is displayed with an image and
                summary information.
              </li>
              <li>
                <b>Gallery </b>- every search hit is displayed with an image
                only.
              </li>
              <li>
                <b>Compact</b> - every search hit is displayed with summary
                information only.
              </li>
            </ol>
            <li>
              <b>Tabular Report</b> options organize results in a multi-column,
              multi-row format, with each row corresponding to a search hit. A
              set of preconfigured tabular reports is available along with
              options to build custom tabular reports.
            </li>
            <li>
              The <b>Download Files</b> button in the top right corner of the
              Search Results page allows export of the associated files for
              either all or a manually selected subset of search hits.
              Structures and experimental data can be exported in legacy PDB and
              mmCIF formats. Molecular definitions can be exported in .sdf and
              .mol2 file formats.
            </li>
            <li>
              The <b>Sort by</b> options allow you to organize the order of the
              returned results on the page. By default, results are sorted by
              <a
                href="/docs/search-and-browse/basic-search#relevancy-scoring"
                target="_blank"
              >
                relevancy scoring
              </a>
              but can be sorted by other criteria, e.g., by release date, using
              the pull-down menu above the search results list. Other types of
              searches enabled at
              <a href="http://rcsb.org/" target="_blank">
                RCSB PDB
              </a>
              —i.e., sequence similarity, sequence motif, structure motif,
              structure similarity, and chemical similarity—are powered and
              scored by separate strategies specific to each case. Additionally,
              when multiple types of searches are combined into a single search
              (e.g., a text + sequence similarity search), either a "combined"
              sorting strategy may be used (default) or users may select one of
              the search types to prioritize (e.g., either text or sequence
              similarity).
              <a
                href="https://search.rcsb.org/index.html#scoring-strategy"
                target="_blank"
              >
                More information about Sorting Strategies
              </a>
              is available along with suggestions for how to use them to meet
              your needs. Besides these scoring options, search results can also
              be sorted by other criteria, e.g., by release date, using the
              pull-down menu above the search results list.
            </li>
            <li>
              When a large number of results are returned, the highest-ranking
              25 search hits are displayed on the first page by default. To
              change the number of results per page click the "Page # of #" menu
              above the search results list to select a different number.
            </li>
            <li>
              The <b>Refinements</b> panel on the left side of the page features
              categories relevant to the selected "Return" as option. Checking
              on boxes next to relevant options and clicking on the green arrow
              next to the column header can For instance, if the return type is
              "Structure", the refinements include categories relevant to
              macromolecular data, e.g., taxonomy, resolution, experimental
              method, etc. When the "Molecular Definitions" option is selected,
              the refinements include categories relevant to chemical reference
              data, e.g., molecular weight, atom count, component type, etc.
            </li>
            <li>
              The Results returned are context specific and are based on the
              user query and the selected "Return" options. The provenance of
              the structure is marked with specific icons indicating if it is an
              experimental structure (marked with a dark blue flask icon) or a
              CSM (marked with a cyan colored computer terminal). Queries that
              return structures are listed as in Figure 4, while results of a
              sequence based queries displays "Polymer Entities", and the search
              results are enriched with pairwise sequence alignments between the
              sequence used in the query and the sequences of every entity
              returned by the search and details about the alignment (sequence
              identity, E value etc., see Figure 5). Learn
              <a
                href="/docs/search-and-browse/advanced-search/sequence-search"
                target="_blank"
              >
                more about sequence searches
              </a>
              .
            </li>
          </ul>
          <div></div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffde93f3a38a923c3516cf3/as-f5.png"
                      data-toggle="lightbox"
                      data-title="Figure 5: Search result when the polymer return type is selected, showing sequence alignment and related details. "
                    >
                      <img
                        style={{ width: '100%', border: '1px solid #ccc' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffde93f3a38a923c3516cf3/as-f5.png"
                        alt="Figure 5: Search result when the polymer return type is selected, showing sequence alignment and related details. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 5: Search result when the polymer return type is
                    selected, showing sequence alignment and related details.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="options-for-grouping-results-"></a>
          <h3>Options for Grouping Results</h3>
          <p>
            Redundancy occurs at many levels (such as the level of sequence or
            structure similarity), and a variety of different grouping methods
            can be applied to PDB data in order to provide a non-redundant view.
            Available grouping options can be selected from the “grouped by”
            dropdown at the bottom of the Advanced Search Query Builder. Learn
            <a
              href="/docs/grouping-structures/grouping-search-results"
              target="_blank"
            >
              more about grouping search results
            </a>
            here.
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
        <div>Last updated: 11/9/2022</div>
      </div>
    </div>
  );
};
