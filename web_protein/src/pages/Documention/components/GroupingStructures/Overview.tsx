export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Grouping Structures</h5>
        <h1>Overview: Grouping Structures</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#what-is-grouping-structural-data">
              What is Grouping Structural Data?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#how-can-grouping-structures-help-you-">
              How can grouping structures help you?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#examples">Examples</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <p>
            Biological molecules change their shape and interactions in response
            to changes in their environment. As these molecules bind to partner
            proteins, nucleic acids, carbohydrates and various small molecule
            ligands (e.g., ions, cofactors, inhibitors, drugs) their molecular
            conformations and interactions change allowing them to perform their
            specific functions. Each experimental structure in the Protein Data
            Bank (PDB) or computed structure models (CSMs) that includes all or
            a specific part of the molecule, provides a glimpse of the molecule
            in a specific context. To learn about the range of the molecule’s
            conformations, interactions, and functions it is important to
            integrate relevant information about the molecule from multiple 3D
            structures and a variety of data resources to visualize, analyze,
            and compare the structures of the molecule in a variety of contexts.
            <br />
            <br />
            Grouping structures with similar amino acid sequences and examining
            their properties and 3D structural features of these sequence
            clusters may provide insights about conservation of 3D features to
            support the molecular mechanisms of specific biological functions.
            Learn
            <a
              href="/docs/grouping-structures/sequence-based-clustering"
              target="_blank"
            >
              more about sequence clusters and 3D structures
            </a>
            .
          </p>
          <a
            className="content-anchor"
            id="what-is-grouping-structural-data"
          ></a>
          <h3>What is Grouping Structural Data?</h3>
          <p>
            Grouping structural data helps gather information about and explore
            multiple structures at a level higher than an individual structure.
            <br />
            <br />
            Each 3D structure available from RCSB.org is presented with
            information and annotations gathered from a variety of public
            bioinformatics data resources. Learn
            <a href="/docs/exploring-a-3d-structure/overview" target="_blank">
              more about the integrated data and annotations
            </a>
            . <br />
            <br />
            Grouping data in RCSB.org helps gather multiple structures related
            by a specific property (e.g., sequence) or investigational theme.
            Examining these groups of structures can help identify and explore
            conservation and/or trends in the properties, features, and
            functions of molecules in the group. <br />
            <br />
            The grouping data approach described here can help gather 3D
            structures (experimental structures and CSMs) and organize them by
            specific molecular properties or investigational themes. Currently
            the RCSB.org provides options for exploring
          </p>
          <ul>
            <li>predetermined groups of 3D structures </li>
            <ul>
              <li>
                based on structure depositor defined criteria - e.g.,
                <a
                  href="/docs/grouping-structures/grouping-search-results#grouping-by-pdb-deposit-group-id"
                  target="_blank"
                >
                  PDB Deposit Group IDs
                </a>
              </li>
              <li>
                based on molecular properties - e.g.,
                <a
                  href="/docs/grouping-structures/grouping-search-results#grouping-by-sequence-identity"
                  target="_blank"
                >
                  sequence identity
                </a>
                ,
                <a
                  href="/docs/grouping-structures/grouping-search-results#grouping-by-uniprot-accession"
                  target="_blank"
                >
                  UniProt identifiers
                </a>
              </li>
            </ul>
            <li>custom groups of 3D structures </li>
            <ul>
              <li>
                to organize search results of a query by sequence similarity,
                UniProt identifiers
              </li>
            </ul>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="how-can-grouping-structures-help-you-"
          ></a>
          <h3>How can grouping structures help you?</h3>
          <p>
            Grouping structures can provide a broader understanding of the
            molecule’s structure, function, and evolutionary relationships.
          </p>
          <a className="content-anchor" id="examples"></a>
          <h2>Examples</h2>
          <p>Explore Grouped data to learn about</p>
          <ul>
            <li>
              3D structures of myoglobin
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_uniprot_protein.name.value%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22Myoglobin%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22group_by_return_type%22%3A%22groups%22%2C%22group_by%22%3A%7B%22aggregation_method%22%3A%22sequence_identity%22%2C%22ranking_criteria_type%22%3A%7B%22sort_by%22%3A%22rcsb_entry_info.resolution_combined%22%2C%22direction%22%3A%22asc%22%7D%2C%22similarity_cutoff%22%3A30%7D%2C%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%2C%7B%22sort_by%22%3A%22size%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%227b0ddd8d2333fa082bf11b60816012cb%22%7D%7D"
                target="_blank"
              >
                grouped by 30% sequence identity and displayed as groups
              </a>
              .
            </li>
            <li>
              Different protein targets of the drug imatinib -
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_nonpolymer_instance_feature_summary.comp_id%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22STI%22%7D%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_nonpolymer_instance_feature_summary.type%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22HAS_COVALENT_LINKAGE%22%7D%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_nonpolymer_instance_feature_summary.count%22%2C%22value%22%3A0%2C%22operator%22%3A%22equals%22%7D%7D%5D%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22group_by_return_type%22%3A%22groups%22%2C%22group_by%22%3A%7B%22aggregation_method%22%3A%22sequence_identity%22%2C%22ranking_criteria_type%22%3A%7B%22sort_by%22%3A%22rcsb_entry_info.resolution_combined%22%2C%22direction%22%3A%22asc%22%7D%2C%22similarity_cutoff%22%3A30%7D%2C%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%2C%7B%22sort_by%22%3A%22size%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22e133e07aba3ddb93760a725c2787db33%22%7D%7D"
                target="_blank"
              >
                grouped by 30% sequence identity and displayed as groups
              </a>
              .
            </li>
            <li>
              Representative structures of proteins in the viral polyprotein
              with UniProtKB Accession P0DTD1 -
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession%22%2C%22operator%22%3A%22in%22%2C%22value%22%3A%5B%22P0DTD1%22%5D%7D%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_name%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22UniProt%22%2C%22negation%22%3Afalse%7D%7D%5D%2C%22label%22%3A%22nested-attribute%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22group_by_return_type%22%3A%22representatives%22%2C%22group_by%22%3A%7B%22aggregation_method%22%3A%22sequence_identity%22%2C%22ranking_criteria_type%22%3A%7B%22sort_by%22%3A%22rcsb_entry_info.resolution_combined%22%2C%22direction%22%3A%22asc%22%7D%2C%22similarity_cutoff%22%3A30%7D%2C%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22ec5850ee24fcfb2e10fe8e0b163da3d3%22%7D%7D"
                target="_blank"
              >
                grouped by 30% sequence identity and displayed as
                representatives
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
        <div>Last updated: 8/30/2022</div>
      </div>
    </div>
  );
};
