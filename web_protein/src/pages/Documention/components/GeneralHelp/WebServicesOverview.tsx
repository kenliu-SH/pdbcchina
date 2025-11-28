export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">General Help</h5>
        <h1>Web Services Overview</h1>
        <div>
          <a className="content-anchor" id="data-api"></a>
          <h3>Data API</h3>
          <p>
            All static data that is exposed in rcsb.org is available in the Data
            API. The schema follows the
            <a href="https://mmcif.wwpdb.org/" target="_blank">
              mmCIF dictionary
            </a>
            , extended with annotations coming from external resources. The core
            PDB data is split up into core objects, one per level of the
            structural data hierarchy, with entity subdivided into polymeric and
            non-polymeric subschemas (differing from the mmCIF dictionary).
            These are some of the core objects:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>core_entry</b>: data that relates to a PDB entry. Identified by
              a 4 letter pdb_id.
            </li>
            <li>
              <b>core_polymer_entity</b>: data for each polymeric molecular
              entity in a PDB entry. Identified by a _
            </li>
            <li>
              <b>core_nonpolymer_entity</b>: data for each non-polymeric
              molecular entity in a PDB entry. Identified by a
            </li>
            <li>
              <b>core_assembly</b>: data for each biological assembly in a PDB
              entry. Identified by a
            </li>
            <li>
              <b>core_polymer_entity_instance</b>: an instance of a certain
              polymeric molecular entity, also known as chain. Identified by a
            </li>
            <li>
              <b>core_chem_comp</b>: a chemical component. Identified by a
              3-letter chem_comp_id
            </li>
          </ul>
          <div></div>
          <p>
            Both internal additions to the mmCIF dictionary and external
            resources annotations are prefixed with <code> rcsb_</code>. In each
            core object, the
            <code> rcsb_&lt;core_object&gt;_container_identifiers</code> field
            holds the cardinal identifiers for the objects and any parent/child.
            Additionally every core object contains a single string identifier
            in field <code> rcsb_id</code>.
          </p>
          <p>The data is available via 2 different interfaces:</p>
          <a className="content-anchor" id="rest-api-full-reference"></a>
          <h4>
            <a
              href="//data.rcsb.org/redoc/index.html"
              target="_blank"
              rel="noopener"
            >
              REST API Full Reference
            </a>
          </h4>
          <p>
            The REST API permits the retrieval of all data for one core object
            at a time.
          </p>
          <a className="content-anchor" id="graphql-api-graphiql-interface"></a>
          <h4>
            <a
              href="//data.rcsb.org/graphql/index.html"
              target="_blank"
              rel="noopener"
            >
              GraphQL API (Graph<em>i</em>QL interface)
            </a>
          </h4>
          <p>
            The
            <a href="https://graphql.org/" target="_blank" rel="noopener">
              GraphQL
            </a>
            interface offers more flexible data retrieval, essentially making it
            possible to grab any piece of data from any level of the hierarchy
            in a single query. To use it programmatically POST your GraphQL
            queries under the <code>data.rcsb.org/graphql</code> endpoint.
          </p>
          <p>
            All output from both REST and GraphQL interfaces is offered in JSON
            format.
          </p>
          <a className="content-anchor" id="data-api-tutorial"></a>
          <h4>
            <a href="//data.rcsb.org/index.html" target="_blank" rel="noopener">
              Data API Tutorial
            </a>
          </h4>
          <a className="content-anchor" id="search-api"></a>
          <h3>Search API</h3>
          <p>
            The search API programmatically exposes all search functionality
            available at rcsb.org. It is possible to perform queries with
            arbitrary Boolean logic across all data available in the RCSB PDB
            data API via a convenient JSON-format query language. At the root
            level it is also possiblen to combine
            <strong>text-based searches</strong> (any text/numerical field in
            the RCSB PDB data API) with
            <strong>protein/nucleotide sequence search</strong> (
            <a
              href="https://github.com/soedinglab/MMseqs2"
              target="_blank"
              rel="noopener"
            >
              mmseqs2 software
            </a>
            ) and <strong>Structure similarity searches</strong> (BioZernike
            software, described in
            <a
              href="https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1007970"
              target="_blank"
              rel="noopener"
            >
              Guzenko et al 2020
            </a>
            ). All output from the Search API is offered in JSON format.
          </p>
          <a className="content-anchor" id="search-api-tutorial"></a>
          <h4>
            <a
              href="//search.rcsb.org/index.html"
              target="_blank"
              rel="noopener"
            >
              Search API Tutorial
            </a>
          </h4>
          <a className="content-anchor" id="search-api-full-reference"></a>
          <h4>
            <a
              href="//search.rcsb.org/redoc/index.html"
              target="_blank"
              rel="noopener"
            >
              Search API Full Reference
            </a>
          </h4>
          <a className="content-anchor" id="modelserver-api"></a>
          <h3>ModelServer API</h3>
          <p>
            The ModelServer is a service for accessing subsets of macromolecular
            model data. It delivers atomic coordinates together with annotations
            in the primary data files in a compressed BinaryCIF encoding (BCIF).
            Structure data can be served at different levels of granularity (
            <em>e.g.</em>, assembly, polymer chain, ligand), and ligand data may
            also be delivered in popular chemical informatics formats (
            <em>e.g.</em>, SDF, MOL, MOL2).
          </p>
          <a className="content-anchor" id="modelserver-api-specification"></a>
          <h4>
            <a href="//models.rcsb.org/" target="_blank" rel="noopener">
              ModelServer API Specification
            </a>
          </h4>
          <p>
            The specification of the BinaryCIF format can be found at:
            <a
              href="https://github.com/molstar/BinaryCIF"
              target="_blank"
              rel="noopener"
            >
              https://github.com/molstar/BinaryCIF
            </a>
            .
          </p>
          <a className="content-anchor" id="volumeserver-api"></a>
          <h3>VolumeServer API</h3>
          <p>
            The VolumeServer is a service for accessing subsets of volumetric
            data. It automatically downsamples the data depending on the volume
            of the requested region to reduce the bandwidth requirements and
            provide near-instant access to even the largest data sets.
          </p>
          <a className="content-anchor" id="volumeserver-api-specification"></a>
          <h4>
            <a href="//maps.rcsb.org/" target="_blank" rel="noopener">
              VolumeServer API Specification
            </a>
          </h4>
          <p>
            Both ModelServer and VolumeServer are part of Mol* (D. Sehnal, A.S.
            Rose, J. Kovca, S.K. Burley, S. Velankar (2018) Mol*: Towards a
            common library and tools for web molecular graphics MolVA/EuroVis
            Proceedings.
            <a
              href="http://dl.acm.org/citation.cfm?id=3293509"
              target="_blank"
              rel="noopener"
            >
              doi:10.2312/molva.20181103
            </a>
            ).
          </p>
          <a className="content-anchor" id="1d-coordinate-server"></a>
          <h3>1D Coordinate Server</h3>
          <p>
            The RCSB PDB 1D Coordinate Server compiles alignments between
            structural and sequence databases and integrates protein positional
            features from multiple resources. Alignment data is available for
            NCBI
            <a href="https://www.ncbi.nlm.nih.gov/refseq/" target="_blank">
              RefSeq
            </a>
            (including protein and genomic sequences),
            <a href="https://www.uniprot.org" target="_blank">
              UniProt
            </a>
            and
            <a href="/" target="_blank">
              PDB
            </a>
            sequences. Protein positional features are integrated from
            <a href="https://www.uniprot.org" target="_blank">
              UniProt
            </a>
            , <a href="https://www.cathdb.info/">CATH</a>,
            <a href="https://scop.berkeley.edu" target="_blank">
              SCOPe
            </a>
            and
            <a href="/" target="_blank">
              RCSB PDB
            </a>
            and collected from the
            <a href="https://data.rcsb.org" target="_blank">
              RCSB PDB Data Warehouse
            </a>
            .
          </p>
          <a
            className="content-anchor"
            id="1d-coordinate-server-api-tutorial"
          ></a>
          <h4>
            <a href="//1d-coordinates.rcsb.org/" target="_blank">
              1D Coordinate Server API Tutorial
            </a>
          </h4>
          <a className="content-anchor" id="license"></a>
          <h3>
            <span id="license">License</span>
          </h3>
          <p>
            RCSB PDB Web Services usage is available under the same terms and
            condition as RCSB PDB Web Portal (see
            <a href="/pages/policies">usage policies</a>)<br />
            <br />
          </p>
          <p>
            <a href="/pages/contactus">Contact RCSB PDB</a> with questions or
            suggestions for specific services.
          </p>
        </div>
      </div>
      <br />
      <hr />
      <div className="item-info">
        <div>
          Please report any encountered broken links to
          <a href="mailto:info@rcsb.org">info@rcsb.org</a>
        </div>
        <div>Last updated: 8/31/2022</div>
      </div>
    </div>
  );
};
