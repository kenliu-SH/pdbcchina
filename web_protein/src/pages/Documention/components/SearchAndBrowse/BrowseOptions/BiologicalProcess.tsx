export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Browse Options</h5>
        <h1>Biological Process</h1>
        <div>
          <a
            className="content-anchor"
            id="what-biological-process-are-included-here"
          ></a>
          <h4>What Biological Process are included here?</h4>
          <p>
            Vocabulary terms describing biological processes, developed by the
            <a href="http://www.geneontology.org/" target="_blank">
              Gene Ontology Consortium (GO)
            </a>
            , are used to organize PDB structures in this browser. Biological
            processes are mapped to PDB entities based on their
            <a href="https://www.uniprot.org/" target="_blank">
              UniProt
            </a>
            sequences and using the
            <a href="https://www.ebi.ac.uk/pdbe/docs/sifts/" target="_blank">
              Structure integration with function, taxonomy and sequence (SIFTS)
            </a>
            project. These processes are listed in this browse tree only if they
            have a protein in a PDB structure mapped to it.
          </p>
          <a
            className="content-anchor"
            id="why-browse-by-biological-process"
          ></a>
          <h4>Why browse by Biological Process?</h4>
          <p>
            Browsing through this tree can help identify protein entities that
            are involved in the same or related biological processes. You can
            examine the structures grouped together by the processes they
            participate in to see if there are any common features or other
            trends in these proteins.
          </p>
          <a
            className="content-anchor"
            id="how-to-use-the-biological-process-browser"
          ></a>
          <h4>How to use the Biological Process browser?</h4>
          <p>
            The Biological Process browser allows users to type in a process
            name in the search box, select a GO term, or enter a 7-digit GO ID
            to find polymers of interest. <br />
            <br />
            After locating the biological process of interest in the browser,
            users can view the number of polymers in this group. Clicking on the
            numbers listed next to the process name will launch a search for all
            polymer entities in the PDB that are associated with that biological
            process.
          </p>
          <a className="content-anchor" id="example"></a>
          <h4>Example</h4>
          <p>
            Browse entities related to insulin signaling, intracellular
            signaling mediated by an enzyme linked hormone receptor protein
            signaling as follows:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Navigate through the tree and its branches for “signal
              transduction” &gt;&gt; “cell surface receptor signaling pathway”
              &gt;&gt; “enzyme linked receptor protein signaling pathway” and
              “insulin receptor signaling pathway” OR
            </li>
            <li>
              Type insulin in the search box on the top of the page and select
              from the options “insulin receptor signaling pathway”. OR
            </li>
            <li>
              Type in the 7-digit GO ID: 0008286. If you begin typing the ID
              8286, in the search box on the top of the page, autocomplete
              suggestions will appear, from which you can select the appropriate
              options to search through the browser tree.
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
        <div>Last updated: 8/11/2021</div>
      </div>
    </div>
  );
};
