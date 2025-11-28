export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Exploring a 3D Structure</h5>
        <h1>Overview</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ●
            <a href="#what-are-the-structure-summary-and-related-pages">
              What are the Structure Summary and related pages?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ●
            <a href="#how-to-access-the-structure-summary-and-related-pages">
              How to access the Structure Summary and related pages?
            </a>
          </div>
          <a
            className="content-anchor"
            id="what-are-the-structure-summary-and-related-pages"
          ></a>
          <h2>What are the Structure Summary and related pages?</h2>
          <p>
            Each 3D structure accessible from RCSB.org [including experimental
            or Protein Data Bank (PDB) structures and Computed Structure Models
            (CSMs)] has a variety of data associated with it.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Primary data include information about the specific 3D structure -
              e.g., structural coordinates, sequences of biological
              macromolecules, information about any small molecules/ligands
              present in the structure, details about structure determination
              method(s), authors and publication information.
            </li>
            <li>Secondary data include</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Information related to one or more components integrated from
                other data resources, mapped onto the 3D structure(s), and made
                available at RCSB.org - e.g., functional and mutational
                information about macromolecule(s) from UniProt.
              </li>
              <li>
                Organization and classification of one or more components
                included in the PDB entry - e.g., sequence and structural
                domains from Pfam, SCOP, CATH, and ECOD; molecular functions,
                cellular location, biological functions from Gene Product
                Annotations; and membrane annotations.
              </li>
            </ul>
          </ul>
          <div></div>
          <p>
            For each experimental structure, the primary and secondary data are
            presented in a manner that can be easily accessed, visualized,
            downloaded, and analyzed. This presentation also allows you to use
            pieces of information to visualize it, integrate information from
            other bioinformatics resources, and/or query the entire archive for
            other examples like it.
            <br />
            <br />
            For each CSM, the primary and a limited amount of secondary data are
            presented for easy access, visualization and analysis. <br />
            <br />
            This document describes how different types of information about an
            entry are presented on the Structure Summary and related pages. It
            also describes how you can use this information to learn more about
            the properties, interactions, and functions of the specific
            molecule(s) being studied.
          </p>
          <a
            className="content-anchor"
            id="how-to-access-the-structure-summary-and-related-pages"
          ></a>
          <h2>How to access the Structure Summary and related pages?</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              If you know the specific identifier for the 3D structure you wish
              to explore (e.g., PDB ID for experimental structures and AlphaFold
              or Model Archive IDs for CSMs), you can access the Structure
              Summary and related pages for the entry by typing the identifier
              into the top search bar on the
              <a href="/" target="_blank">
                RCSB.org home page
              </a>
              .
            </li>
            <li>
              If you do not have a specific 3D structure of interest, you can
              <a
                href="/docs/search-and-browse/overview-search-and-browse"
                target="_blank"
              >
                Search or Browse
              </a>
              the archive based on various parameters to identify one or more
              structures that you may wish to explore. Click on the ID of any 3D
              structure of interest listed in the search results to open the
              Structure Summary and related pages including
              <a
                href="/docs/exploring-a-3d-structure/structure-summary-page"
                target="_blank"
              >
                Structure Summary
              </a>
              ,
              <a href="/docs/exploring-a-3d-structure/3d-view" target="_blank">
                3D View
              </a>
              ,
              <a
                href="/docs/exploring-a-3d-structure/annotations"
                target="_blank"
              >
                Annotations
              </a>
              ,
              <a
                href="/docs/exploring-a-3d-structure/experiment"
                target="_blank"
              >
                Experiment
              </a>
              ,
              <a href="/docs/exploring-a-3d-structure/sequence" target="_blank">
                Sequence
              </a>
              ,
              <a href="/docs/exploring-a-3d-structure/genome" target="_blank">
                Genome
              </a>
              ,
              <a href="/docs/exploring-a-3d-structure/ligands" target="_blank">
                Ligands
              </a>
              , and
              <a href="/docs/exploring-a-3d-structure/versions" target="_blank">
                Versions
              </a>
              .
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
        <div>Last updated: 8/24/2022</div>
      </div>
    </div>
  );
};
