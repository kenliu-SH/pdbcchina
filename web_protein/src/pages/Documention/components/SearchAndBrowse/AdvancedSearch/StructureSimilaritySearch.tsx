export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Advanced Search</h5>
        <h1>Structure Similarity Search</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#what-is-structure-search">What is Structure Search?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#why-run-a-structure-search">
              Why run a Structure Search?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#query-options">Query Options</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#query-using-the-advanced-search-panel">
              Query using the 'Advanced Search' panel
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#query-from-the-structure-summary-page">
              Query from the Structure Summary page
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#search-options">Search Options</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#results">Results</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#limitations-of-structure-search">
              Limitations of Structure Search
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#examples">Examples</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#1-search-for-entities-similar-to-myoglobin">
              1. Search for entities similar to Myoglobin
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#2-search-for-entities-that-are-conformationally-similar-to-the-open-form-of-hexokinase-">
              2. Search for entities that are conformationally similar to the
              open form of hexokinase
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#3-search-for-assemblies-similar-to-the-sars-cov-2-spike-protein-trimer">
              3. Search for assemblies similar to the SARS-CoV-2 Spike protein
              trimer
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#4-search-for-assemblies-similar-to-insulin-hexamers">
              4. Search for assemblies similar to Insulin hexamers
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#references">References</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <p>
            The functions of biological molecules follow their form (or shape).
            This in turn means that molecules that have similar shapes or
            structures have similar functions. The number of structures, their
            size, and complexity of experimental structures in the Protein Data
            Bank (PDB) continues to grow each year. Many of the experimental
            structures are assemblies of multiple proteins or multiple copies of
            a protein. The assembly coordinates may either be specific subsets
            of the model or deposited coordinates or may be derived by applying
            specific types of symmetry operations. Querying both deposited and
            assembly coordinates make finding structurally similar proteins and
            assemblies challenging.
            <br />
            <br />
            RCSB.org also offers access to more than a million computed
            structure models (CSMs). The coordinates of these models do not
            include any symmetry related information so the model and assembly
            coordinates are identical and included by default in structure based
            searches.
          </p>
          <a className="content-anchor" id="what-is-structure-search"></a>
          <h3>What is Structure Search?</h3>
          <p>
            The Structure Search option allows you to query the PDB archive
            using the 3D shape of a protein structure. This RCSB PDB developed
            method (
            <a
              href="https://doi.org/10.1371/journal.pcbi.1007970"
              target="_blank"
            >
              Guzenko et al., 2020
            </a>
            ) looks at proteins as volumes of space filled by atoms (i.e.,
            density distribution), instead of a collection of atomic coordinates
            and chain connectivities. The protein volumes are broken down using
            a mathematical tool known as 3D Zernike polynomials, and are
            described as vectors of Zernike moments. This approach helps
            describe volumes with compact descriptors that are invariant to
            rotation and translation (
            <a href="https://doi.org/10.1016/j.cad.2004.01.005" target="_blank">
              Novotni and Klein, 2004
            </a>
            ). The search assesses global 3D-shape similarity using BioZernike
            descriptors to capture the global volumetric shape of the protein
            and works really fast for both individual protein chains and
            assemblies.
          </p>
          <a className="content-anchor" id="why-run-a-structure-search"></a>
          <h3>Why run a Structure Search?</h3>
          <p>
            Finding and classifying structures in the PDB is fundamental to
            understanding functional and evolutionary relationships. While
            sequence based searches can reveal conserved domains in proteins,
            there are many examples in biology where the protein shapes (and
            functions) are similar, despite sequence variations. Also, sometimes
            the same protein may adopt more than one conformation, such as open
            and closed forms of an enzyme. These structures can not be
            identified using sequence based searches and require structure
            search options. <br />
            <br />
            Moreover, some proteins are stabilized and/or function as part of an
            assembly - where it interacts with one or more copies of itself or
            with other proteins. The structure search option allows you to
            identify similar assemblies - enabling exploration of shape and
            interactions of the protein (or its complex).
          </p>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <p>
            There are a few different options that can be combined to run a
            Structure Search. These options are being listed here under 3
            different sections:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Query - this will describe the option you have to input your query
            </li>
            <li>
              Search - this will describe the types of searches that can be run
              (e.g., strict and relaxed).
            </li>
            <li>
              Results - this will describe options available for what you wish
              to see in the results page.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="query-options"></a>
          <h3>Query Options</h3>
          <p>There are two types of structure searches possible:</p>
          <ol style={{ paddingLeft: '40px' }}>
            <li>search for similar polymeric chains to a given chain</li>
            <li>search for similar assemblies to a given assembly</li>
          </ol>
          <div></div>
          <p>
            Both these types of structure searches can be launched from two
            different locations on the website as described here.
          </p>
          <a
            className="content-anchor"
            id="query-using-the-advanced-search-panel"
          ></a>
          <h4>Query using the 'Advanced Search' panel</h4>
          <p>
            The structure search options are available from the “Advanced
            Search” panel and can be accessed by typing in a PDB ID or RCSB.org
            assigned CSM ID in the box listed under Structure Similarity (Figure
            1).
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/strs-f1.png"
                      data-toggle="lightbox"
                      data-title="Figure 1: Options for launching a Structure Similarity search from the Advanced Search Query builder. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/strs-f1.png"
                        alt="Figure 1: Options for launching a Structure Similarity search from the Advanced Search Query builder. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 1: Options for launching a Structure Similarity
                    search from the Advanced Search Query builder.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            Once a 3D structure ID (PDB ID for experimental structures or
            RCSB.org assigned CSM ID) is typed in the box, some additional
            options become available. Select the type of search to launch -
            Assembly ID or Chain ID.
            <br />
            <br />
            For the assembly structure search, select the Assembly ID from the
            pull-down menus, select “Assemblies” in the results "Return"
            options, decide on whether to include or exclude CSMs, and click on
            the blue Search button with a green magnifying lens icon to launch
            the search (Figure 2A). If a CSM ID is used for this search,
            remember to turn on the Include CSM toggle switch (see Figures 2B).
            Note that for CSMs the assembly coordinates are the same as the
            model coordinates, so the assembly is denoted as the deposited
            assembly.
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/strs-f2.png"
                      data-toggle="lightbox"
                      data-title="Figure 2: Options to specify a Structure Similarity Search - A. using a PDB ID and assembly ID and deciding whether to include or exclude CSMs; B. using an RCSB.org assigned CSM ID, turn on Include CSM toggle switch. In both cases specify the results Return type to be Assemblies, before launching the search.  "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/strs-f2.png"
                        alt="Figure 2: Options to specify a Structure Similarity Search - A. using a PDB ID and assembly ID and deciding whether to include or exclude CSMs; B. using an RCSB.org assigned CSM ID, turn on Include CSM toggle switch. In both cases specify the results Return type to be Assemblies, before launching the search.  "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 2: Options to specify a Structure Similarity Search -
                    A. using a PDB ID and assembly ID and deciding whether to
                    include or exclude CSMs; B. using an RCSB.org assigned CSM
                    ID, turn on Include CSM toggle switch. In both cases specify
                    the results Return type to be Assemblies, before launching
                    the search.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            For the protein chain based structure search, select the chain ID of
            the protein of interest in the query structure, select “Polymer
            entities” in the results Return options, decide on whether to
            include or exclude CSMs, and click on the blue Search button with a
            green magnifying lens icon to launch the search (Figure 3A). If a
            CSM ID is used for this search, remember to turn on the Include CSM
            toggle switch (see Figures 3B).
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/strs-f3.png"
                      data-toggle="lightbox"
                      data-title="Figure 3: Options to specify a Structure Similarity Search - A. using a PDB ID and chain ID and deciding whether to include or exclude CSMs; B. using an RCSB.org assigned CSM ID, turn on Include CSM toggle switch. In both cases specify the results Return type to be Polymer Entities, before launching the search.   "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/strs-f3.png"
                        alt="Figure 3: Options to specify a Structure Similarity Search - A. using a PDB ID and chain ID and deciding whether to include or exclude CSMs; B. using an RCSB.org assigned CSM ID, turn on Include CSM toggle switch. In both cases specify the results Return type to be Polymer Entities, before launching the search.   "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 3: Options to specify a Structure Similarity Search -
                    A. using a PDB ID and chain ID and deciding whether to
                    include or exclude CSMs; B. using an RCSB.org assigned CSM
                    ID, turn on Include CSM toggle switch. In both cases specify
                    the results Return type to be Polymer Entities, before
                    launching the search.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            To find structures that are similar to a 3D structure not included
            in RCSB.org, include the query structure using a URL. This allows
            custom searching for non-RCSB.org structures, e.g., from AlphaFold,
            RoseTTAFold, or ESMFold predictions.
            <br />
            <br />
            To use this feature switch the input mode from “Entry ID” to “Web
            Link” (Figure 4). Make sure to specify the URL as an “http” or
            “https” protocol. Specify the file format, which defaults to mmCIF,
            but BinaryCIF and PDB files are also supported. Select “Polymer
            entities” or "Structures" in the results Return options, as
            appropriate. Decide on whether to include or exclude CSMs, and click
            on the blue Search button with a green magnifying lens icon to
            launch the search. <br />
            <br />
            The search will be based on the deposited coordinates, also referred
            to as “asymmetric unit”. Note: this is different from the 3D
            experimental or CSM entry-ID-based query, which allows you to select
            a specific assembly or chain identifier for the search. <br />
            <br />
            In CSM structures with local low confidence regions, i.e., for CIF
            files from AlphaFold, RoseTTAFold, ESMFold, where the
            `ma_qa_metric_local` cif category is present and the local pLDDT
            scores are less than 70, a pre-filtering step is applied to remove
            these regions from the query. Excluding such unstructured or highly
            flexible regions of CSMs can reduce the number of false positives
            and negatives in the query results.
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/str-search-fig4-20221202.png"
                      data-toggle="lightbox"
                      data-title="Figure 4: Structure Similarity Search options using a web Link to specify a non-RCSB.org 3D structure as a Query. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/str-search-fig4-20221202.png"
                        alt="Figure 4: Structure Similarity Search options using a web Link to specify a non-RCSB.org 3D structure as a Query. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 4: Structure Similarity Search options using a web
                    Link to specify a non-RCSB.org 3D structure as a Query.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a
            className="content-anchor"
            id="query-from-the-structure-summary-page"
          ></a>
          <h4>Query from the Structure Summary page</h4>
          <p>
            All 3D structures available from the RCSB.org (experimental
            structures and CSMs) have a dedicated Structure Summary page that
            displays information about the entities and assemblies of that
            entry.
            <br />
            To search for structures similar to any one polymer entity in the
            structure click on the “Structure” link above the details listed for
            the macromolecule (Figure 5).
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/ss4.png"
                      data-toggle="lightbox"
                      data-title="Figure 5: Options to launch a structure based search from the structure summary page (highlighted in a red oval)."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/ss4.png"
                        alt="Figure 5: Options to launch a structure based search from the structure summary page (highlighted in a red oval)."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 5: Options to launch a structure based search from
                    the structure summary page (highlighted in a red oval).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            To search for assemblies similar to a specific assembly of the
            structure click on the “Find Similar Assemblies” link written below
            the snapshot of the assembly on the page (Figure 6).
          </p>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/ss5.png"
                      data-toggle="lightbox"
                      data-title="Figure 6: Options to launch a search for an assembly from the structure summary page. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/ss5.png"
                        alt="Figure 6: Options to launch a search for an assembly from the structure summary page. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 6: Options to launch a search for an assembly from
                    the structure summary page.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="search-options"></a>
          <h3>Search Options</h3>
          <p>
            For any structure search it is possible to choose between two modes
            of matching by selecting the corresponding radio button:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Strict: use this if you want to be sure your matches are all
              relevant, at the risk of not finding some more distant matches
            </li>
            <li>
              Relaxed: use this if you want to be sure your matches include all
              similar structures, at the risk of bringing in some False
              Positives
            </li>
          </ul>
          <div></div>
          <p>
            Note that while the strict or relaxed options may be selected for
            the structure searches launched from the Advanced Search panel, the
            searches launched from the Structure Summary Page automatically
            select the strict search option.
          </p>
          <a className="content-anchor" id="results"></a>
          <h3>Results</h3>
          <p>
            Depending on the options selected, structure search results list
            similar entities or assemblies.
            <br />
            <br />
            For entity based searches, each matched entity can be superposed on
            the query entity and viewed in 3D using the pairwise alignment tool
            by clicking on the View button next to “Structure Match” (Figure 7)
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/sts-f6.png"
                      data-toggle="lightbox"
                      data-title="Figure 7: Part of the query results page showing options to view the structure match (panels on the right) and some measures describing the extent of the match (red outlined boxes at the top and bottom of the figure. "
                    >
                      <img
                        style={{ width: '100%', border: '1px solid #ccc' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/sts-f6.png"
                        alt="Figure 7: Part of the query results page showing options to view the structure match (panels on the right) and some measures describing the extent of the match (red outlined boxes at the top and bottom of the figure. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 7: Part of the query results page showing options to
                    view the structure match (panels on the right) and some
                    measures describing the extent of the match (red outlined
                    boxes at the top and bottom of the figure.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            For assembly based searches, each matched assembly is assigned a
            structure match score, expressed as a percentage of the probability
            that it matches the query structure. So a score of 100 indicates a
            perfect match while lower numbers indicate lesser degrees of
            similarity in the assemblies (Figure 8).
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/sts-f7.png"
                      data-toggle="lightbox"
                      data-title="Figure 8: Part of the results list of assembly based match showing the structure match score"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/sts-f7.png"
                        alt="Figure 8: Part of the results list of assembly based match showing the structure match score"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 8: Part of the results list of assembly based match
                    showing the structure match score
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a
            className="content-anchor"
            id="limitations-of-structure-search"
          ></a>
          <h3>Limitations of Structure Search</h3>
          <p>The structure search system has some limitations:</p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The method can not report an RMSD since it only produces a global
              optimal superposition of the volumes but knows nothing about
              residues that are paired in the alignment. Instead the method
              outputs a score that indicates the likelihood that the match is
              relevant.
            </li>
            <li>
              Highly symmetric assemblies often produce false positives (with
              lower scores), e.g. searching for a D3 point-group symmetric
              assembly will likely match a few unrelated D3 assemblies with
              lower scores.
            </li>
            <li>
              Highly symmetric assemblies often produce false positives (with
              lower scores), e.g. searching for a D3 point-group symmetric
              assembly will likely match a few unrelated D3 assemblies with
              lower scores.
            </li>
            <li>
              Flexible NMR structures will often be unmatched due to the long
              flexible tails
            </li>
            <li>
              Long protruding tails will result in failure to match otherwise
              globally similar shapes.
            </li>
            <li>
              The matching is global, thus local similarities are not found. For
              example:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                when searching for chains: 2 chains that are similar only in
                some common domain will usually not match,
              </li>
              <li>
                when searching for assemblies: 2 assemblies that are similar in
                some subset of chains but not globally will usually not match.
              </li>
            </ul>
          </ul>
          <div></div>
          <a className="content-anchor" id="examples"></a>
          <h2>Examples</h2>
          <a
            className="content-anchor"
            id="1-search-for-entities-similar-to-myoglobin"
          ></a>
          <h3>1. Search for entities similar to Myoglobin</h3>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Launch this search from the Advanced Search interface for PDB ID
              1mbn, Chain ID A
            </li>
            <li>
              Select the strict search radio button, Display results as Polymer
              Entities, include CSMs, and launch the search (Figure 9)
            </li>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/sts-f8.png"
                      data-toggle="lightbox"
                      data-title="Figure 9: Options to run a structure based search for chain ID A in PDB entry 1mbn, to return polymer entities. The search includes CSMs. "
                    >
                      <img
                        style={{ width: '100%', border: '1px solid #ccc' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/sts-f8.png"
                        alt="Figure 9: Options to run a structure based search for chain ID A in PDB entry 1mbn, to return polymer entities. The search includes CSMs. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 9: Options to run a structure based search for chain
                    ID A in PDB entry 1mbn, to return polymer entities. The
                    search includes CSMs.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22structure%22%2C%22parameters%22%3A%7B%22operator%22%3A%22strict_shape_match%22%2C%22value%22%3A%7B%22entry_id%22%3A%221MBN%22%2C%22asym_id%22%3A%22A%22%7D%7D%7D%5D%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22b848670288a51e40216162cdac76e47b%22%7D%7D"
                target="_blank"
              >
                search results
              </a>
              show many myoglobin entities, some hemoglobin entities, a few
              neuroglobin and some others entities.
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="2-search-for-entities-that-are-conformationally-similar-to-the-open-form-of-hexokinase-"
          ></a>
          <h3>
            2. Search for entities that are conformationally similar to the open
            form of hexokinase
          </h3>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Use a structure of the enzyme hexokinase in an “open” conformation
              as a query. Launch this search from the Advanced Search interface
              for PDB ID 2yhx, Chain ID A (Figure 10)
            </li>
            <li>
              Select the strict search radio button, Display results as Polymer
              Entities, include CSMs, and launch the search.
            </li>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/sts-f9.png"
                      data-toggle="lightbox"
                      data-title="Figure 10: Options for searching structures that are conformationally similar to the open form of hexokinase"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/sts-f9.png"
                        alt="Figure 10: Options for searching structures that are conformationally similar to the open form of hexokinase"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 10: Options for searching structures that are
                    conformationally similar to the open form of hexokinase
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22structure%22%2C%22parameters%22%3A%7B%22operator%22%3A%22strict_shape_match%22%2C%22value%22%3A%7B%22entry_id%22%3A%222YHX%22%2C%22asym_id%22%3A%22A%22%7D%7D%7D%5D%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%2200a02d24b6488dbfea0835baaaa0f8a2%22%7D%7D"
                target="_blank"
              >
                search results
              </a>
              show other hexokinase and related proteins. Note that the better
              matches are hexokinase entities with an open conformation while
              the matches listed towards the end of the result list include the
              same or related enzyme entities in the closed conformation.
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="3-search-for-assemblies-similar-to-the-sars-cov-2-spike-protein-trimer"
          ></a>
          <h3>
            3. Search for assemblies similar to the SARS-CoV-2 Spike protein
            trimer
          </h3>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The SARS-CoV-2 spike protein is composed of three polymer chains,
              each of which has a receptor-binding domain that can be in an open
              (or up) conformation for interacting with cellular receptors or a
              closed (or down) conformation. The Structure Search functionality
              can be used to identify spike structures that have a similar
              arrangement of these domains.
            </li>
            <li>
              To find spike structures where all three receptor-binding domains
              are closed, launch the structure search from the Structure Summary
              page for the PDB ID 6vxx, Biological Assembly 1 (Figure 11).
            </li>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/ss9-6vxx.png"
                      data-toggle="lightbox"
                      data-title="Figure 11: Options to search for structures with the same assembly from the structure summary page of PDB ID 6vxx."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/ss9-6vxx.png"
                        alt="Figure 11: Options to search for structures with the same assembly from the structure summary page of PDB ID 6vxx."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 11: Options to search for structures with the same
                    assembly from the structure summary page of PDB ID 6vxx.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22structure%22%2C%22parameters%22%3A%7B%22value%22%3A%7B%22entry_id%22%3A%226VXX%22%2C%22assembly_id%22%3A%221%22%7D%2C%22operator%22%3A%22strict_shape_match%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22assembly%22%2C%22request_options%22%3A%7B%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22947b9b1a2e6b6281c33f33223e1c746a%22%7D%7D"
                target="_blank"
              >
                search results
              </a>
              show similar spike protein assemblies with closed conformations.
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="4-search-for-assemblies-similar-to-insulin-hexamers"
          ></a>
          <h3>4. Search for assemblies similar to Insulin hexamers</h3>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Launch this search from the Structure Summary page for the PDB
              entry 1trz, Biological Assembly 3 (Figure 12)
            </li>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/sts-f10.png"
                      data-toggle="lightbox"
                      data-title="Figure 12: Options to launch a structure (assembly) based search from the structure summary page of PDB ID 1trz. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffe9c743a38a923c3516cfb/sts-f10.png"
                        alt="Figure 12: Options to launch a structure (assembly) based search from the structure summary page of PDB ID 1trz. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 12: Options to launch a structure (assembly) based
                    search from the structure summary page of PDB ID 1trz.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            The
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22structure%22%2C%22parameters%22%3A%7B%22value%22%3A%7B%22entry_id%22%3A%221TRZ%22%2C%22assembly_id%22%3A%223%22%7D%2C%22operator%22%3A%22strict_shape_match%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22assembly%22%2C%22request_options%22%3A%7B%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22c4ca8300a439a2eaaebb9dda83478b8a%22%7D%7D"
              target="_blank"
            >
              search results
            </a>
            show many other similar insulin assemblies, and some unrelated
            structures at ~12% Structure Match Scores.
          </p>
          <a className="content-anchor" id="references"></a>
          <h2>References</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Novotni, M., &amp; Klein, R. (2004). Shape retrieval using 3D
              Zernike descriptors. Comput. Aided Des., 36, 1047-1062,
              <a
                href="https://doi.org/10.1371/journal.pcbi.1007970"
                target="_blank"
              >
                https://doi.org/10.1016/j.cad.2004.01.005
              </a>
            </li>
            <li>
              Guzenko, D., Burley, S. K., Duarte, J. M. (2020) Details of the
              method can be found in the corresponding publication: Real time
              structural search of the Protein Data Bank". PLoS Computational
              Biology,
              <a
                href="https://doi.org/10.1371/journal.pcbi.1007970"
                target="_blank"
              >
                https://doi.org/10.1371/journal.pcbi.1007970
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
        <div>Last updated: 12/2/2022</div>
      </div>
    </div>
  );
};
