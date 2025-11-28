export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Browse Options</h5>
        <h1>Source Organism</h1>
        <div>
          <a className="content-anchor" id="what-are-source-organisms"></a>
          <h4>What are Source Organisms?</h4>
          <p>
            A majority of biopolymers whose structures are deposited in the PDB
            are human, bacterial, yeast, or plant specific (e.g., spinach)
            proteins, nucleic acids, or carbohydrates. The organism from which
            the protein or nucleotide etc. is originally derived is called the
            source organism. <br />
            <br />
            In some cases these proteins and nucleic acids are purified directly
            from the cells/tissues of the source organisms. However, frequently
            the genes of the proteins being studied are cloned and expressed in
            another organism, - e.g., the gene of a human protein is cloned,
            introduced into bacteria, and expressed there. The protein still
            remains a human protein that is expressed in a bacterial host or
            expression system. This approach allows researchers to produce
            sufficient quantities of the protein of interest for the experiment
            and also enables them to make small changes in the protein/nucleic
            acid to examine its impact on structure and function of the
            biopolymer. <br />
            <br />
            Note: Some proteins/nucleic acids in the PDB may be designed
            molecules and not have a specific source organism.
          </p>
          <a
            className="content-anchor"
            id="what-is-the-source-organism-browser"
          ></a>
          <h4>What is the Source Organism Browser?</h4>
          <p>
            The Source Organism browser is a hierarchical representation of all
            organisms in the
            <a href="https://www.ncbi.nlm.nih.gov/taxonomy" target="_blank">
              NCBI Taxonomy database (Taxonomy)
            </a>
            . For polymer entities in the PDB source organism assignment is
            based on author provided information, and UniProtKB, or NCBI GenBank
            specified mapping of the source organism. All PDB structures that
            have a source organism are included in this browser tree.
          </p>
          <a className="content-anchor" id="why-browse-by-source-organism"></a>
          <h4>Why Browse by Source Organism?</h4>
          <p>
            Browsing through this tree can help view the number of polymer
            entities in the PDB that have proteins or nucleic acids derived from
            that source. So when searching for a protein or nucleic acid
            (DNA/RNA) from a specific organism you can begin from this browser
            tree.
          </p>
          <a
            className="content-anchor"
            id="how-to-use-the-source-organism-browsers"
          ></a>
          <h4>How to use the Source Organism browsers?</h4>
          <p>
            Users can browse the taxonomy tree, by typing in an organism
            scientific name in the search box at the top of the page. In
            addition, the common name, scientific name, or taxonomy ID of an
            organism can be used to search in the browser. <br />
            <br />
            After locating the organism of interest in the browser tree, view
            the number of polymer entities (proteins/nucleic acids etc.)
            included in this group. Clicking on the numbers listed next to the
            organism name will launch a search for all polymer entities in the
            PDB that are associated with that source organism.
          </p>
          <a className="content-anchor" id="example"></a>
          <h4>Example</h4>
          <p>
            Search for the structures of all rabbit proteins and nucleic acids
            can be done as follows:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Type in the common name of the organism in the search box on the
              page and select from the options “rabbit” &gt;&gt; “Oryctolagus
              cuniculus (domestic rabbit) (9986)”.
            </li>
            <li>
              If the complete scientific name and/or taxonomy ID of the organism
              is known, type that into the search box. e.g., “Oryctolagus
              cuniculus” or “9986” and select from options provided.
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
        <div>Last updated: 8/13/2021</div>
      </div>
    </div>
  );
};
