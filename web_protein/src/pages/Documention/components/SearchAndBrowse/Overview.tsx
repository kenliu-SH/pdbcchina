export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse</h5>
        <h1>Overview: Search and Browse</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#search-and-browse-options-infographic">
              Search and Browse Options (Infographic)
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#some-definitions">Some Definitions</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#search">Search</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#browse">Browse</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#query-results">Query Results</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#query-by-example-">Query by Example </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#mypdb">MyPDB</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <p>
            The RCSB.org website provides all users various options to freely
            search, view, analyze, and compare experimental structures (from the
            Protein Data Bank or PDB) and computer structure models (CSMs). In
            order to explore the shapes and interactions in these structures,
            the first order of business is to identify one or a group of
            structures related to a topic of interest. To include CSMs available
            from RCSB.org in all simple and composite searches, turn of the
            toggle switch so that it is cyan colored.
          </p>
          <a
            className="content-anchor"
            id="search-and-browse-options-infographic"
          ></a>
          <h3>Search and Browse Options (Infographic)</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <a href="https://cdn.rcsb.org/rcsb-pdb/search/SearchnBrowse2go.pdf#page=1">
                    <img
                      style={{ width: '100%', border: '1px solid #ccc' }}
                      className="img-responsive content-img-border"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/60006df7ae9f8477226a6c82/searchbrowse2-1.png"
                      alt="Click on the image to access the full infographic ..."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Click on the image to access the full infographic ...
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a className="content-anchor" id="some-definitions"></a>
          <h2>Some Definitions</h2>
          <a className="content-anchor" id="search"></a>
          <h3>Search</h3>
          <p>
            Specific information about the molecule(s) of interest can be used
            to query the 3D structure archive (including experimental structures
            and CSMs). Basic and advanced search options are available to search
            3D structures available from RCSB.org.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a href="/docs/search-and-browse/basic-search" target="_blank">
                Basic Search
              </a>
              can be run from any page on the RCSB PDB Website by simply typing
              a search term or a protein/DNA/RNA sequence into the Search Bar at
              the top of the page.
            </li>
            <li>
              <a
                href="/docs/search-and-browse/advanced-search/overview-advanced-search"
                target="_blank"
              >
                Advanced Search
              </a>
              can be run by clicking on the "Advanced Search" link below the
              Search Bar, or by using the "Advanced Search Query Builder" tool
              available on the top of the Search Results page.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="browse"></a>
          <h3>Browse</h3>
          <p>
            Currently groups of experimental structures are organized and
            classNameified in various ways so that users may explore them based
            on their specific classNameifications using the
            <a
              href="/docs/search-and-browse/browse-options/overview-browse"
              target="_blank"
            >
              Browse Annotations
            </a>
            feature. For example, you may navigate through the archive using any
            one of several classNameification hierarchies, such as SCOP or GO
            (Gene Ontology), EC (Enzyme classNameification) and more.
          </p>
          <a className="content-anchor" id="query-results"></a>
          <h3>Query Results</h3>
          <p>
            Once a search query has been executed using either Basic Search,
            Advanced Search Query Builder, or the Browse options, the search
            results can be listed, sorted, grouped and/or further refined using
            the 'Refinements' panel. The Advanced Search Query Builder displayed
            at the top of the search results page allows users to include
            additional search criteria to create composite queries. <br />
            <br />
            Once a single or a group of structures related to the topic of
            interest has been identified you can examine it carefully and/or
            download structure related files for exploration and analysis. Each
            structure in the Search Results page opens a Structure Summary page
            which provides detailed information about a specific experimental
            structure or CSM. Similarly each group of structures can be explored
            from its Group Summary Page to learn more about patterns, trends,
            and aggregated information about members of the group. <br />
            <br />
            Options for querying the archive and saving search parameters are
            available in
            <a
              href="/docs/search-and-browse/overview-search-and-browse#mypdb"
              target="_blank"
            >
              MyPDB
            </a>
            .
          </p>
          <a className="content-anchor" id="query-by-example-"></a>
          <h3>Query by Example</h3>
          <p>
            Many pages on the RCSB PDB site contain links to launch searches.
            For example, from the
            <a
              href="/docs/exploring-a-3d-structure/structure-summary-page"
              target="_blank"
            >
              Structure Summary page
            </a>
            , each listed author contains a link to the search page. Clicking
            that link will run a search for all structures for which that author
            is listed as the audit author.
          </p>
          <a className="content-anchor" id="mypdb"></a>
          <h3>MyPDB</h3>
          <p>
            Searches can be saved and run later using the MyPDB feature. MyPDB
            also allows you to schedule weekly email notifications of newly
            released structures that match a given search query. See the
            <a href="/search/mypdb/documentation" target="_blank">
              MyPDB documentation
            </a>
            for more details.
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
        <div>Last updated: 9/15/2022</div>
      </div>
    </div>
  );
};
