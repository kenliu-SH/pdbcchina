export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Browse Options</h5>
        <h1>Cellular Component</h1>
        <div>
          <a
            className="content-anchor"
            id="what-cellular-components-are-included-here"
          ></a>
          <h4>What Cellular Components are included here?</h4>
          <p>
            Vocabulary terms describing cellular component locations, developed
            by the
            <a href="http://www.geneontology.org/" target="_blank">
              Gene Ontology Consortium (GO)
            </a>
            , are used to organize PDB structures in this browser. Cellular
            Components are mapped to PDB entities based on their
            <a href="https://www.uniprot.org/" target="_blank">
              UniProt
            </a>
            sequences and using the Structure integration with function,
            taxonomy and sequence (
            <a href="http://www.ebi.ac.uk/pdbe/docs/sifts/" target="_blank">
              SIFTS
            </a>
            ) project. Cellular components are listed in this browse tree only
            if they have a protein in a PDB structure mapped to it.
          </p>
          <a
            className="content-anchor"
            id="why-browse-by-cellular-component"
          ></a>
          <h4>Why browse by Cellular Component?</h4>
          <p>
            Browsing through this tree can help identify protein entities that
            are localized in a specific cellular location/compartment. You can
            examine the structures of protein entities grouped together to see
            if there are any common features or trends in these proteins.
          </p>
          <a
            className="content-anchor"
            id="how-to-use-the-cellular-component-browser"
          ></a>
          <h4>How to use the Cellular Component browser?</h4>
          <p>
            The Cellular Component browser allows users to type in a cell
            component name, select a GO term, or enter a 7 digit GO ID in the
            search box to identify the corresponding PDB entities.
            <br />
            <br />
            After locating the cellular component of interest in the browser,
            users can view the number of polymers in this group. Clicking on the
            numbers listed next to the component name will launch a search for
            all polymer entities in the PDB that are associated with it.
          </p>
          <a className="content-anchor" id="example"></a>
          <h4>Example</h4>
          <p>
            Browse the PDB archive for entities that are located in the lysosome
            as follows:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Type the name of a cellular component of interest in the search
              box on the page e.g., "lysosome" and select from the options"
              lysosome (GO ID:5764)" OR
            </li>
            <li>
              Type the 7 digit GO ID:0005764. If you begin typing the ID 5764,
              in the search box on the top of the page, autocomplete suggestions
              will appear, from which you can select the appropriate options to
              search through the browser tree.
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
