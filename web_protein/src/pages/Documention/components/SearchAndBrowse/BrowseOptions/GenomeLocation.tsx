export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Browse Options</h5>
        <h1>Enzyme classNameification</h1>
        <div>
          <a
            className="content-anchor"
            id="what-is-enzyme-classNameification"
          ></a>
          <h4>What is Enzyme classNameification?</h4>
          <p>
            <a href="http://www.expasy.ch/enzyme/" target="_blank">
              Enzyme classNameification (EC)
            </a>
            is based on the recommendations of the Nomenclature Committee of the
            <a href="https://www.qmul.ac.uk/sbcs/iubmb/enzyme/" target="_blank">
              International Union of Biochemistry and Molecular Biology (IUBMB)
            </a>
            . The PDB assigns EC (Enzyme Commission) numbers to protein chains
            in structures according to the type of chemical reaction catalyzed,
            specific donors and receptors of chemical groups participating in
            the reactions etc., all based on information from UniProtKB,
            GenBank, KEGG or are author specifications. Note: The browser
            includes enzymes for which an EC number has been assigned.
          </p>
          <a
            className="content-anchor"
            id="why-browse-by-ec-classNameification"
          ></a>
          <h4>Why browse by EC classNameification?</h4>
          <p>
            The EC classNameification groups enzymes that perform the same or
            related enzymatic functions. You can use the EC browser to explore
            enzymes that have similar functions, shape of enzyme and/or
            arrangements of amino acids performing the enzyme reaction. It can
            also be used to identify and explore structures of enzymes that have
            similar functions but different shapes and/or mechanism of enzyme
            reaction.
          </p>
          <a className="content-anchor" id="how-to-use-the-ec-browser"></a>
          <h4>How to use the EC browser?</h4>
          <p>
            Users can browse by an EC className name, by typing in a specific
            enzyme name, or EC number (partial or full) in the search box at the
            top of the page. <br />
            <br />
            After locating the enzyme of interest in the EC browser tree view
            the number of polymer entities (proteins) included in this group.
            Clicking on the numbers listed next to the process name will launch
            a search for all polymer entities in the PDB that are associated
            with that EC className.
          </p>
          <a className="content-anchor" id="example"></a>
          <h4>Example</h4>
          <p>
            Search for structures of DNA polymerase, an enzyme responsible for
            copying genetic material to make new copies of DNA, can be done as
            follows:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              browse the tree for “Transferases” &gt;&gt; “Transferring
              phosphorus-containing groups” &gt;&gt; “Nucleotidyltransferases”
              and “DNA-directed DNA polymerase” OR
            </li>
            <li>
              search by typing DNA polymerase in the search box on the page and
              select from the options “DNA-directed DNA polymerase” or typing in
              the EC number (type 2.7.7.7)
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
        <div>Last updated: 8/12/2021</div>
      </div>
    </div>
  );
};
