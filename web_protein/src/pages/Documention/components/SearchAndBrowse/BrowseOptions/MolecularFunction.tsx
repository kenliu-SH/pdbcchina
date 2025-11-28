export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Browse Options</h5>
        <h1>Molecular Function</h1>
        <div>
          <a
            className="content-anchor"
            id="what-molecular-functions-are-included-here"
          ></a>
          <h4>What Molecular Functions are included here?</h4>
          <p>
            Vocabulary terms describing molecular functions, developed by the
            <a href="http://www.geneontology.org/" target="_blank">
              Gene Ontology Consortium (GO)
            </a>
            , are used to organize PDB structures in this browser. Molecular
            Functions are mapped to PDB entities based on their
            <a href="https://www.uniprot.org/" target="_blank">
              UniProt
            </a>
            sequences and using the Structure integration with function,
            taxonomy and sequence (
            <a href="http://www.ebi.ac.uk/pdbe/docs/sifts/" target="_blank">
              SIFTS
            </a>
            ) project. These functions are listed in this browse tree only if
            they have a protein in a PDB structure mapped to it.
          </p>
          <a
            className="content-anchor"
            id="why-browse-by-molecular-functions"
          ></a>
          <h4>Why browse by Molecular Functions?</h4>
          <p>
            Browsing through this tree can help identify protein entities that
            are involved in the same or related molecular functions. You can
            examine the structures grouped together by function to see if there
            are any common features or trends in these proteins.
          </p>
          <a
            className="content-anchor"
            id="how-to-use-the-molecular-function-browser"
          ></a>
          <h4>How to use the Molecular Function browser?</h4>
          <p>
            The Molecular Function browser allows users to type in the name of a
            molecular function in the search box, select a GO term, or enter a 7
            digit GO ID to find polymers of interest.
            <br />
            <br />
            After locating the molecular function of interest in the browser,
            users can view the number of polymers in this group. Clicking on the
            numbers listed next to the function name will launch a search for
            all polymer entities in the PDB that are associated with that
            molecular function.
          </p>
          <a className="content-anchor" id="example"></a>
          <h4>Example</h4>
          <p>
            Browse the tree to identify entities related to aromatic amino acid
            transport across membranes as follows:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Type the name of a molecular function of interest in the search
              box on the page (e.g., aromatic amino acid transmembrane ...), and
              select from the options, aromatic amino acid transmembrane
              transporter activity (GO ID:15173) OR
            </li>
            <li>
              Type the 7 digit GO ID: 0015173 in the search box on the top of
              the page. If you begin typing the ID 15173, in the search box on
              the top of the page, autocomplete suggestions will appear, from
              which you can select the appropriate options to search through the
              browser tree.
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
