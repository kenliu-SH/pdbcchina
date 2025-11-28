export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Grouping Structures</h5>
        <h1>Sequence-based Clustering</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#sequences-and-sequence-clusters">
              Sequences and Sequence Clusters
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#what-are-sequence-clusters">
              What are Sequence Clusters?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○<a href="#why-use-sequence-clusters">Why use Sequence Clusters?</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#how-are-protein-sequences-in-the-pdb-clustered">
              How are protein sequences in the PDB clustered?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#how-to-use-sequence-clusters-to-explore-the-3d-structures-in-rcsborg">
              How to use sequence clusters to explore the 3D structures in
              RCSB.org?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#references">References</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <p>
            The amino acid sequence of a protein directs its folding into shapes
            that enable specific functions. For most of the proteins in cells,
            protein folding is a rapid and in most cases repeatable process (
            <a
              href="https://doi.org/10.1126/science.181.4096.223"
              target="_blank"
            >
              Anfinsen, 1973
            </a>
            ) suggesting that protein sequences have the necessary information
            to fold into functional proteins and that each protein sequence
            forms a characteristic structure. While local regions of the protein
            may adopt slightly different conformations in different biological
            contexts, the overall structure remains the same. In a few
            exceptions a protein may adopt a completely different shape in the
            presence of a specific environment or binding partner(s). Research
            directed towards predicting protein structure from sequence has been
            ongoing for more than 50 years. Recently, our ability to compute the
            3D shapes of proteins using their amino acid sequence has made
            tremendous progress by applying machine learning techniques to the
            archived experimental structural data in the PDB (
            <a href="https://doi.org/10.1126/science.abj8754" target="_blank">
              Baek et al., 2021
            </a>
            ,
            <a
              href="https://doi.org/10.1038/s41586-021-03819-2"
              target="_blank"
            >
              Jumper et al., 2021
            </a>
            ). <br />
            <br />
            When exploring PDB structures, the level of similarity between the
            amino acid sequences of two or more proteins can be used to infer
            their structural and functional similarity (
            <a href="https://doi.org/10.1002/prot.340090107" target="_blank">
              Sander and Schneider, 1991
            </a>
            ). Protein sequences that are 100% identical to each other belong to
            the same protein, but high levels of sequence identity (e.g.,
            &gt;90%) is also indicative of the same protein, perhaps with a few
            mutations or variations due to different sources of the protein.
            Lower levels of sequence similarity between protein sequences may
            indicate some relationship between their structures and functions.
            The threshold of sequence similarity that indicates structural
            homology depends on the length of the alignment. As a rule of thumb
            for protein sequences that are longer than 100 amino acids, &gt;25%
            sequence identity indicates similar structure and function (
            <a href="https://doi.org/10.1002/prot.340090107" target="_blank">
              Sander and Schneider, 1991
            </a>
            ).
          </p>
          <a
            className="content-anchor"
            id="sequences-and-sequence-clusters"
          ></a>
          <h3>Sequences and Sequence Clusters</h3>
          <p>
            As the single worldwide repository for macromolecular structures,
            the Protein Data Bank holds many structures with the same or similar
            sequence and structures. This redundancy enables deep understanding
            of the biology of these proteins. However, some bioinformatics
            analyses may benefit from grouping these redundant sequences and
            structures. For example, all protein structures of the same protein
            have the exact same sequence. These may be grouped together. Protein
            sequences where 90% of the sequence is identical is said to have a
            90% sequence identity, while proteins whose sequences are only 30%
            identical have a 30% sequence identity. Grouping proteins into
            clusters by sequence identity is a way to reduce/remove redundancy
            in 3D structures (including experimental structures and Computed
            Structure Models or CSMs). The sequences in a particular cluster are
            expected to share structural and functional properties depending on
            the level of sequence identity.
          </p>
          <a className="content-anchor" id="what-are-sequence-clusters"></a>
          <h3>What are Sequence Clusters?</h3>
          <p>
            The amino acid sequences of all proteins, whose 3D structures are
            available from RCSB.org (including experimental structures and CSMs)
            are grouped at different levels of sequence identity (e.g., 100%,
            95%, 90%, 70%, 50% and 30%) to yield sequence clusters. These
            pre-computed sequence groups are available for exploring the PDB
            archive and
            <a
              href="/docs/grouping-structures/grouping-search-results"
              target="_blank"
            >
              grouping search results
            </a>
            .
          </p>
          <a className="content-anchor" id="why-use-sequence-clusters"></a>
          <h3>Why use Sequence Clusters?</h3>
          <p>
            Instead of using all sequences of the 3D structures available from
            RCSB.org for analysis, representative sequences from each of the
            sequence clusters can be used. Depending on the level of sequence
            similarity, properties and features of the representative proteins
            can be extended to other members in the cluster. Using sequence
            clusters has the following advantage:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              It reduces the size of the sequence data set of all 3D structures
              available and can help simplify, optimize, and make their analysis
              more efficient.
            </li>
            <li>
              Monitoring growth in the non-redundant sequence clusters enables
              monitoring the variety of structures being deposited to the PDB
            </li>
            <li>
              It can be used to organize sequences from both experimental
              structures and CSMs to explore evolutionary relationships between
              specific proteins.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a
            className="content-anchor"
            id="how-are-protein-sequences-in-the-pdb-clustered"
          ></a>
          <h3>How are protein sequences in the PDB clustered?</h3>
          <p>
            Sequence clusters are calculated using the MMseqs2 software (
            <a href="https://doi.org/10.1038/nbt.3988" target="_blank">
              Steinegger and Söding, 2017
            </a>
            ). Currently, only protein sequences are subject to clustering. The
            rationale for clustering considers the following points:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              All protein chains of at least 10 amino acids are included in the
              clusters.
            </li>
            <li>
              Sequence identity is defined as the percentage of identical
              residues between the two amino acid sequences in the alignment.
            </li>
            <li>
              The sequence clustering process begins with an all by all
              comparison of protein sequences in the PDB.
            </li>
            <li>
              Only alignments with sequence identity scores above the threshold
              (100%, 95%, 90%, 70%, 50% and 30%) and covering at least 90% (-c
              0.90) of both sequences are retained.
            </li>
            <li>
              The clustering is run with the following parameters of the mmseq2
              software:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                <b>Sensitivity is set to (-s 8)</b> for mmseqs2's highest
                alignment sensitivity for clustering
              </li>
              <li>
                <b>The clustering uses --cluster-mode 1</b>, which corresponds
                to the connected component algorithm.
              </li>
            </ul>
            <li>
              For more details on the procedure, please refer to
              <a
                href="https://github.com/soedinglab/mmseqs2/wiki"
                target="_blank"
              >
                the mmseqs2 user guide
              </a>
              .
            </li>
          </ul>
          <div></div>
          <p>
            Note: The sequence clusters are subject to change over time as new
            protein sequences continue to be added to the archive.
          </p>
          <a
            className="content-anchor"
            id="how-to-use-sequence-clusters-to-explore-the-3d-structures-in-rcsborg"
          ></a>
          <h3>
            How to use sequence clusters to explore the 3D structures in
            RCSB.org?
          </h3>
          <p>
            Each week, RCSB PDB computes sequence clusters for all protein
            sequences available from RCSB.org [including experimental (PDB)
            structures, and available CSMs]. You can use these pre-computed
            clusters the following ways:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Examine and explore growth of sequences in experimental (PDB)
              structures:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Learn about the number of unique protein sequences added to the
                PDB annually - review the
                <a href="/stats/nr/cluster-ids-95" target="_blank">
                  non-redundant protein sequences statistics
                </a>
                and
                <a
                  href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_accession_info.initial_release_date%22%2C%22operator%22%3A%22range%22%2C%22value%22%3A%7B%22from%22%3A%222022-01-01T00%3A00%3A00Z%22%2C%22to%22%3A%222022-12-31T23%3A59%3A59Z%22%2C%22include_lower%22%3Atrue%2C%22include_upper%22%3Atrue%7D%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22group_by_return_type%22%3A%22groups%22%2C%22group_by%22%3A%7B%22aggregation_method%22%3A%22sequence_identity%22%2C%22ranking_criteria_type%22%3A%7B%22sort_by%22%3A%22rcsb_entry_info.resolution_combined%22%2C%22direction%22%3A%22asc%22%7D%2C%22similarity_cutoff%22%3A95%7D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22results_content_type%22%3A%5B%22experimental%22%5D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%2C%7B%22sort_by%22%3A%22size%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22b4143ed29b9293e6aefe9753a6c6485f%22%7D%7D"
                  target="_blank"
                >
                  explore groups of structures with these sequences
                </a>
                for further analysis.
              </li>
              <li>
                Learn about the
                <a href="/stats/growth/nr/cluster-ids-95" target="_blank">
                  cumulative growth of unique protein sequences in the PDB
                </a>
                and
                <a
                  href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_accession_info.initial_release_date%22%2C%22operator%22%3A%22range%22%2C%22value%22%3A%7B%22from%22%3A%221976-01-01T00%3A00%3A00Z%22%2C%22to%22%3A%222022-12-31T23%3A59%3A59Z%22%2C%22include_lower%22%3Atrue%2C%22include_upper%22%3Atrue%7D%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22group_by_return_type%22%3A%22groups%22%2C%22group_by%22%3A%7B%22aggregation_method%22%3A%22sequence_identity%22%2C%22ranking_criteria_type%22%3A%7B%22sort_by%22%3A%22rcsb_entry_info.resolution_combined%22%2C%22direction%22%3A%22asc%22%7D%2C%22similarity_cutoff%22%3A95%7D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22results_content_type%22%3A%5B%22experimental%22%5D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%2C%7B%22sort_by%22%3A%22size%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22d539143568bccba474811f454038aa2c%22%7D%7D"
                  target="_blank"
                >
                  explore groups of structures with these sequences
                </a>
                for further analysis.
              </li>
            </ul>
            <li>
              Organize search results (including experimental structures and
              CSMs) based on sequence similarity:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                <a
                  href="/docs/grouping-structures/grouping-search-results"
                  target="_blank"
                >
                  Group search results by sequence identity
                </a>
                and either view representative members of the group or explore
                all members of these groups (using the
                <a href="/docs/grouping-structures/group-summary-pages">
                  Group Summary Pages
                </a>
                ).
              </li>
              <li>
                Explore the sequences, structural features, and ligand
                interactions of other sequences in the same protein sequence
                cluster to gather structural and functional insights and develop
                hypotheses.
              </li>
            </ul>
          </ul>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Learn about the number of unique protein sequences added to the
              PDB annually - review the
              <a href="/stats/nr/cluster-ids-95" target="_blank">
                non-redundant protein sequences statistics
              </a>
              and download these sequences.
            </li>
            <li>
              Learn about the
              <a href="/stats/growth/nr/cluster-ids-95" target="_blank">
                cumulative growth of unique protein sequences
              </a>
              in the PDB and download them.
            </li>
            <li>
              Organize
              <a
                href="/docs/grouping-structures/grouping-search-results"
                target="_blank"
              >
                search results by sequence identity
              </a>
              into meaningful/manageable groups and explore representatives or
              as groups (using the
              <a
                href="/docs/grouping-structures/group-summary-pages"
                target="_blank"
              >
                Group Summary Pages
              </a>
              ).
            </li>
            <li>
              Explore the pre-computed clusters that include a specific polymer
              entity in a PDB entry.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="references"></a>
          <h2>References</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Anfinsen, C. (1973), Science, 181, 223-230; doi:
              <a
                href="https://doi.org/10.1126/science.181.4096.223"
                target="_blank"
              >
                10.1126/science.181.4096.223
              </a>
            </li>
            <li>
              Baek, M., DiMaio, F., Anishchenko, I., Dauparas, J., Ovchinnikov,
              S., Lee, G. R., Wang, J., Cong, Q., Kinch, L. N., Schaeffer, R.
              D., Millán, C., Park, H., Adams, C., Glassman, C. R., DeGiovanni,
              A., Pereira, J. H., Rodrigues, A. V., van Dijk, A. A., Ebrecht, A.
              C., Opperman, D. J., Sagmeister, T., Buhlheller, C.,
              Pavkov-Keller, T., Rathinaswamy, M. K., Dalwadi, U., Yip, C. K.,
              Burke, J. E., Garcia K. C., Grishin, N. V., Adams, P. D., Read, R.
              J., Baker, D. (2021). Accurate prediction of protein structures
              and interactions using a three-track neural network. Science (New
              York, N.Y.), 373, 871–876; doi:
              <a href="https://doi.org/10.1126/science.abj8754" target="_blank">
                10.1126/science.abj8754
              </a>
            </li>
            <li>
              Jumper, J., Evans, R., Pritzel, A., Green, T., Figurnov, M.,
              Ronneberger, O., Tunyasuvunakool, K., Bates, R., Žídek, A.,
              Potapenko, A., Bridgland, A., Meyer, C., Kohl, S., Ballard, A. J.,
              Cowie, A., Romera-Paredes, B., Nikolov, S., Jain, R., Adler, J.,
              Back, T., Petersen, S., Reiman, D., Clancy, E.,, Zielinski, M.,
              Steinegger, M., Pacholska, M., Berghammer, T., Bodenstein, S.,
              Silver, D., Vinyals, O., Senior, A. W., Kavukcuoglu, K., Kohli,
              P., Hassabis, D. (2021). Highly accurate protein structure
              prediction with AlphaFold. Nature, 596, 583–589; doi:
              <a
                href="https://doi.org/10.1038/s41586-021-03819-2"
                target="_blank"
              >
                10.1038/s41586-021-03819-2
              </a>
            </li>
            <li>
              Sander, C., Schneider, R. (1991). Database of homology-derived
              protein structures and the structural meaning of sequence
              alignment. Proteins, 9, 56–68; doi:
              <a href="https://doi.org/10.1002/prot.340090107" target="_blank">
                10.1002/prot.340090107
              </a>
            </li>
            <li>
              Steinegger, M., Söding, J. (2017). MMseqs2 enables sensitive
              protein sequence searching for the analysis of massive data sets.
              Nat Biotechnol 35, 1026–1028.
              <a href="https://doi.org/10.1038/nbt.3988" target="_blank">
                https://doi.org/10.1038/nbt.3988
              </a>
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
        <div>Last updated: 9/8/2022</div>
      </div>
    </div>
  );
};
