export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Browse Options</h5>
        <h1>Membrane Protein (OPM)</h1>
        <div>
          <a className="content-anchor" id="what-is-opm"></a>
          <h4>What is OPM?</h4>
          <p>
            The
            <a href="https://opm.phar.umich.edu/" target="_blank">
              Orientations of Proteins in Membranes (OPM)
            </a>
            database classNameifies membrane proteins, whose structures are
            deposited to the PDB, based on the structure of their main
            transmembrane or membrane-associated domain. It provides a hierarchy
            with 4 levels: ‘Type’, ‘className’, ‘Superfamily’, and ‘Family’.
            Learn more about this classNameification
            <a
              href="https://opm.phar.umich.edu/about#classNameification"
              target="_blank"
            >
              here
            </a>
            . <br />
            <br />
            See also the
            <a
              href="/docs/general-help/membrane-protein-resources"
              target="_blank"
            >
              membrane protein page
            </a>
            for general information and a comparison to the
            <a
              href="/docs/search/browse-options/membrane-protein-mpstruc"
              target="_blank"
            >
              mpstruc tree
            </a>
            that also describes membrane proteins.
          </p>
          <a
            className="content-anchor"
            id="why-browse-by-opm-classNameification"
          ></a>
          <h4>Why browse by OPM classNameification?</h4>
          <p>
            Proteins with similar membrane-related characteristics (like
            integral or peripheral proteins) have similar sequence, structural,
            and/or functional features. Browsing through the OPM browser tree
            can help users find polymer entities in the PDB that are membrane
            proteins and explain how their structural and functional
            relationships.
          </p>
          <a className="content-anchor" id="how-to-use-the-opm-browser"></a>
          <h4>How to use the OPM Browser?</h4>
          <p>
            Users can click on the browser tree branches to navigate to a group
            of membrane proteins, or search for polymer entities with a
            particular classNameification by typing in the group name in the
            search box on the page.
            <br />
            <br />
            After locating the group in the browser, users can view the
            corresponding number of PDB polymer entities. Clicking on the
            numbers listed next to the group name will launch a search for all
            structures in the PDB that share this classNameification.
          </p>
          <a className="content-anchor" id="example"></a>
          <h4>Example</h4>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              A search for structures of a photosystem can be realized by 2
              ways:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Browse the tree for “Transmembrane” &gt; “Alpha-helical
                polytopic” &gt; “Photosystems” (additional subcategories are
                provided)
              </li>
              <li>
                Search by typing the “photosystem” in the search box on the page
                and select from the options provided
              </li>
            </ul>
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
        <div>Last updated: 6/10/2021</div>
      </div>
    </div>
  );
};
