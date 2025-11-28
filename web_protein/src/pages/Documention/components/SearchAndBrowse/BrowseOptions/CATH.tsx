export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Browse Options</h5>
        <h1>CATH</h1>
        <div>
          <a className="content-anchor" id="what-is-cath"></a>
          <h4>What is CATH?</h4>
          <p>
            <a href="http://www.cathdb.info/" target="_blank">
              CATH
            </a>
            is a free, publicly available, hierarchical classNameification of
            protein domain structures, which clusters proteins at four major
            levels, className(C), Architecture(A), Topology(T) and Homologous
            superfamily (H). It was created in 1990s and provides information on
            the evolutionary relationships of protein domains. <br />
            <br />
            In this classNameification scheme experimentally determined protein
            structures from the PDB are classNameified into CATH groups by a
            mixture of manual and automated methods. For example, className is
            derived from secondary structure content, and assigned automatically
            for more than 90% of protein structures. Architecture, that
            describes the gross orientation of secondary structures, independent
            of connectivity, is currently assigned manually. The Topology level
            clusters structures according to their topological connections and
            numbers of secondary structures. The Homologous superfamilies
            cluster proteins with highly similar structures and functions. The
            assignments of structures to topology families and homologous
            superfamilies are made by sequence and structure comparisons.
          </p>
          <a
            className="content-anchor"
            id="why-browse-by-cath-classNameification"
          ></a>
          <h4>Why Browse by CATH classNameification?</h4>
          <p>
            The CATH classNameification groups protein structures by
            structurally similar domains, that may have functional and
            evolutionary relationships. You can use the CATH browser to explore
            proteins that have similar shapes and functions. It can be used to
            identify and explore highly conserved regions that may have amino
            acids that are functionally significant. Such structures may also be
            useful as starting models for phasing (in X-ray experiments), for
            modeling in EM volumes (in EM experiments), for simulations and/or
            for hypothesis generation and experimental design.
          </p>
          <a className="content-anchor" id="how-to-use-the-cath-browser"></a>
          <h4>How to use the CATH Browser?</h4>
          <p>
            The CATH browser allows users to type in a protein name in the
            search box, and select from the options in the autocomplete list.
            Alternatively, you can enter a CATH ID to find structures of
            interest. CATH IDs are 4 numbers separated by dots to represent the
            CATH classNameification group. <br />
            <br />
            After locating the individual or protein className of interest in
            the browser, users can view the number of PDB structures in this
            group. Clicking on the numbers listed next to the process name will
            launch a search for the PDB structures that have the CATH domain of
            interest.
          </p>
          <a className="content-anchor" id="example"></a>
          <h4>Example</h4>
          <p>
            Browse the PDB for structures that have a globin fold as follows:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Navigate through the tree and its branches for “mainly alpha”
              &gt;&gt; “orthogonal bundles” &gt;&gt; “globin-like” and "Globins"
              OR
            </li>
            <li>
              Type Globin in the search box on the top of the page and select
              from the options "globin-like", OR
            </li>
            <li>
              Type the 4 number CATH ID: 1.10.490.10 in the search box on the
              top of the page
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
        <div>Last updated: 9/1/2021</div>
      </div>
    </div>
  );
};
