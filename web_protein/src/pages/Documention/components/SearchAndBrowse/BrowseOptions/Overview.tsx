export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Browse Options</h5>
        <h1>Overview: Browse</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#what-are-browse-annotations">
              What are Browse Annotations?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○<a href="#why-browse-by-annotations">Why Browse by Annotations?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#options-for-browsing-experimental-structure">
              Options for Browsing Experimental Structure
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ●
            <a href="#types-of-browsing-options-available">
              Types of Browsing Options Available
            </a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <p>
            In addition to the 3D structures, a variety of information is
            integrated from public bioinformatics data resources and made
            available from RCSB.org. Some of these data can help organize these
            structures so that we can learn more about the structure, function,
            and evolutionary relationships of these structures. Currently
            (August 2022) these annotations and browsing options are only
            available for experimentally determined 3D-structures (included in
            the Protein Data Bank, PDB).
          </p>
          <a className="content-anchor" id="what-are-browse-annotations"></a>
          <h3>What are Browse Annotations?</h3>
          <p>
            Experimental structures (i.e., contents of the PDB archive) can be
            organized by a variety of community established classNameifications
            and ontologies - such as by the source organism from which it is
            derived, its biological function, cellular location, drug
            classNameification, structural similarity, etc. Organization of PDB
            entries by these criteria allow users to explore the archive based
            on specific annotations and identify entities (specific proteins
            drugs etc.), structures (either PDB entries or domains in these
            structures), and/or assemblies (groups of entity instances) of
            interest. <br />
            <br />
            Note: When the browse annotations are based on data from an external
            resource, the browser page is identified with an orange banner on
            the top of the page, while browse annotations using data from the
            RCSB PDB are marked with a blue banner.
          </p>
          <a className="content-anchor" id="why-browse-by-annotations"></a>
          <h3>Why Browse by Annotations?</h3>
          <p>
            Identifying proteins and/or structures in the PDB archive that have
            specific properties or are associated with specific functions may
            require extensive research. The browse by annotation options allow
            users to navigate through the archive and rapidly identify
            structures that are related to their topic of interest. This is
            particularly useful if you only have a limited amount of information
            about these molecule(s). Entities, structures, and/or assemblies
            grouped together can provide insights about structural, functional,
            and evolutionary relationships.
          </p>
          <a
            className="content-anchor"
            id="options-for-browsing-experimental-structure"
          ></a>
          <h3>Options for Browsing Experimental Structure</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <a href="https://cdn.rcsb.org/rcsb-pdb/search/SearchnBrowse2go.pdf#page=4">
                    <img
                      style={{ width: '100%', border: '1px solid #ccc' }}
                      className="img-responsive content-img-border"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/602c53f43fed9e549afd7918/searchbrowse-4.png"
                      alt="Click on the image for more information ..."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Click on the image for more information ...
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a
            className="content-anchor"
            id="types-of-browsing-options-available"
          ></a>
          <h2>Types of Browsing Options Available</h2>
          <p>
            Browse Annotation allow users to navigate the archive by properties
            of polymer entities (primarily proteins), PDB entries, and
            assemblies. The current options available for browsing are listed
            below with links to the specific Browsing pages.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Browse polymers (primarily protein entities) by</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                classNameification of organisms from which the protein of
                interest is originally derived - browse
                <a href="/search/browse/taxonomy" target="_blank">
                  Source Organism
                </a>
              </li>
              <li>
                Location in the source organism genome where the gene for the
                protein of interest is located -
                <a href="/search/browse/genome_location" target="_blank">
                  Genome Location
                </a>
              </li>
              <li>Protein expression location </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  Cellular location where the protein is found - browse by
                  <a href="/search/browse/cellular_component" target="_blank">
                    Cellular Component
                  </a>
                </li>
                <li>
                  Membrane association - use 2 different browsing trees for
                  membrane proteins -
                  <a href="link" target="_blank">
                    mpstruc
                  </a>
                  , and
                  <a href="link" target="_blank">
                    OPM
                  </a>
                </li>
              </ul>
              <li>Function of the protein of interest - such as by,</li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  Function(s) of the protein of interest - browse by
                  <a href="/search/browse/molecular_function" target="_blank">
                    Molecular Function
                  </a>
                </li>
                <li>
                  classNameification of enzymes, including the type of reaction
                  catalyzed, catalytic residues, co-factor involvement etc. -
                  browse
                  <a href="/search/browse/ec" target="_blank">
                    Enzyme classNameification
                  </a>
                </li>
                <li>
                  Biological process in which the protein of interest plays a
                  role - browse
                  <a href="/search/browse/biological_process" target="_blank">
                    Biological Process
                  </a>
                </li>
              </ul>
            </ul>
            <li>
              Browse protein structures (PDB entries and/or protein domains) by
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Structure classNameifications - browse by
                <a href="/search/browse/scop" target="_blank">
                  SCOP
                </a>
                and
                <a href="/search/browse/cath" target="_blank">
                  CATH
                </a>
              </li>
              <li>
                Medical Subject Headings - as classNameified by the National
                Library of Medicine, browse by
                <a href="/search/browse/mesh" target="_blank">
                  MeSH
                </a>
              </li>
            </ul>
            <li>Browse PDB Assemblies by</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Symmetry at local and global levels, including pseudosymmetry -
                browse
                <a href="/search/browse/symmetry" target="_blank">
                  Protein Symmetry
                </a>
              </li>
            </ul>
            <li>Browse small molecular drugs (Molecular Definitions) by </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                classNameification of drugs according to the Anatomical
                Therapeutic Chemical - Browse by
                <a href="/search/browse/atc" target="_blank">
                  ATC
                </a>
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
        <div>Last updated: 8/30/2022</div>
      </div>
    </div>
  );
};
