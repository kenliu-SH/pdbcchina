export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Browse Options</h5>
        <h1>Membrane Protein (mpstruc)</h1>
        <div>
          <a className="content-anchor" id="what-is-mpstruc"></a>
          <h4>What is mpstruc?</h4>
          <p>
            <a href="https://blanco.biomol.uci.edu/mpstruc/" target="_blank">
              mpstruc
            </a>
            is a manually curated database of membrane proteins, whose
            structures are deposited in the PDB. In this classification,
            membrane associated protein entities are organized into three
            levels:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Group</b> - focuses on the way in which the protein interacts
              with membranes - e.g., associated on only one side of the bilayer
              membrane (monotopic) or transmembrane regions which are either
              alpha-helical or beta barrels
            </li>
            <li>
              <b>Subgroup</b> - focuses on organizing proteins by their
              functions and taxonomy
            </li>
            <li>
              <b>Protein</b> - are defined at the level of individual PDB
              structures, within the subgroup
            </li>
          </ul>
          <div></div>
          <p>
            Note that the classification includes structures of the same protein
            derived from different source organisms (e.g., human, bacterial,
            yeast). Mutants of the protein are not included in the resource.
          </p>
          <p>
            See also the
            <a
              href="/docs/general-help/membrane-protein-resources"
              target="_blank"
            >
              membrane protein resources page
            </a>
            for general information and a comparison to the
            <a
              href="/docs/search/browse-options/membrane-protein-opm"
              target="_blank"
            >
              OPM tree
            </a>
            that also provides annotations of membrane proteins.
          </p>
          <a
            className="content-anchor"
            id="why-browse-by-mpstruc-classification"
          ></a>
          <h4>Why browse by mpstruc classification?</h4>
          <p>
            Proteins with similar membrane-related characteristics (like
            integral or peripheral proteins) have similar sequence, structural,
            and/or functional features. Browsing through the mpstruc browser
            tree can help users find polymer entities in the PDB that are
            membrane proteins, and explain their structural and functional
            relationships.
          </p>
          <a className="content-anchor" id="how-to-use-the-mpstruc-browser"></a>
          <h4>How to use the mpstruc Browser?</h4>
          <p>
            Users can click on the browser tree branches to navigate to a group
            of membrane proteins, or search for polymer entities with a
            particular classification by typing in the
            ‘Group’/’Subgroup’/’Protein’ names in the search box on the page.
            Users can view the corresponding number of PDB polymer entities that
            match the search term by clicking on the numbers listed next to the
            ‘Group’, ‘Subgroup’, or ‘Protein’ name will launch a search for all
            structures in the PDB that share this classification.
          </p>
          <a className="content-anchor" id="examples"></a>
          <h4>Examples</h4>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Structures of photosystems can be identified in 2 ways:</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Browse the tree for “TRANSMEMBRANE PROTEINS: ALPHA-HELICAL” &gt;
                “Photosystems” (additional subcategories are provided)
              </li>
              <li>
                Search by typing “photosystem” in the search box on the page and
                select from the options provided
              </li>
            </ul>
            <li>
              Structures of GLP-1 receptor can be identified by typing in
              “GLP-1” in the search box on the page and selecting from options
              provided
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
