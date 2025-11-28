export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Browse Options</h5>
        <h1>ECOD</h1>
        <div>
          <a className="content-anchor" id="what-is-ecod"></a>
          <h4>What is ECOD?</h4>
          <p>
            <a href="http://prodata.swmed.edu/ecod/" target="_blank">
              ECOD
            </a>
            (Evolutionary classNameification of protein Domains;
            <a
              href="https://doi.org/10.1371/journal.pcbi.1003926"
              target="_blank"
            >
              Cheng et al., 2014
            </a>
            ) is a hierarchical classNameification of protein domains organized
            according to their evolutionary relationships. This resource groups
            PDB structures by homology of its protein domains. It is distinct
            from structure based classNameifications such as SCOP and CATH
            because it focuses on remote homology of protein domains and is kept
            current by classNameifying newly released structures in the PDB
            archive. <br />
            Protein domains are grouped into five levels as described below:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              (A) architecture: groups protein domains with similar secondary
              structure compositions and geometric shapes
            </li>
            <li>
              (X) possible homology: groups protein domains where there is some
              evidence to demonstrate homology (but further verification is
              needed)
            </li>
            <li>
              (H) homology: groups proteins domains with common ancestry - as
              suggested by high sequence-structure scores, functional
              similarity, and shared unusual features
            </li>
            <li>
              (T) topology: groups protein domains with similar topological
              connections
            </li>
            <li>
              (F): family: groups protein domains with significant sequence
              similarity (according to Pfam and HHsearch-based clustering)
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="why-use-the-ecod-browser"></a>
          <h4>Why use the ECOD Browser?</h4>
          <p>
            Using this browser you can identify structures with homologous
            protein domains to reveal distant evolutionary relationships,
            especially ones that may not be evident from sequence and/or
            structure homology analyses. Such explorations may provide insights
            about the structures and functions of related proteins,.
          </p>
          <a className="content-anchor" id="how-to-use-the-ecod-browser"></a>
          <h4>How to use the ECOD Browser?</h4>
          <p>
            If you know something about the homology or domain of the protein of
            interest, use the ECOD browser to identify proteins of a specific
            architecture, homology, or family of interest. Alternatively, if you
            have a protein/domain name, you can type the name in the search box
            at the top of the page and select from the options in the
            autocomplete list. <br />
            <br />
            After locating the individual or protein group of interest in the
            browser, users can view the number of PDB structures in this group.
            Clicking on the numbers listed next to the process name will launch
            a search for the PDB structures that have the ECOD domain of
            interest.
          </p>
          <a className="content-anchor" id="examples"></a>
          <h4>Examples</h4>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Navigate through the tree and its branches for “A: alpha arrays”
              &gt;&gt; “X: Globin-like (From Topology)” &gt;&gt; “H: Globin-like
              (From Topology)” &gt;&gt; "T: Globin-like" and "F: Globin" OR
            </li>
            <li>
              Type a family name e.g., globin or GFP in the search box on the
              top of the page. Select from the autocomplete suggestions
              presented
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="references"></a>
          <h4>References:</h4>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              H. Cheng, R. D. Schaeffer, Y. Liao, L. N. Kinch, J. Pei, S. Shi,
              B. H. Kim, N. V. Grishin. (2014) ECOD: An evolutionary
              classNameification of protein domains. PLoS Comput Biol 10(12):
              e1003926 doi:
              <a
                href="https://doi.org/10.1371/journal.pcbi.1003926"
                target="_blank"
              >
                10.1371/journal.pcbi.1003926
              </a>
            </li>
            <li>
              H. Cheng, Y. Liao, R. D. Schaeffer, N. V. Grishin. (2015) Manual
              classNameification strategies in the ECOD database. Proteins
              83(7): 1238-1251 doi:
              <a href="https://doi.org/10.1002/prot.24818" target="_blank">
                10.1002/prot.24818
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
        <div>Last updated: 12/16/2021</div>
      </div>
    </div>
  );
};
