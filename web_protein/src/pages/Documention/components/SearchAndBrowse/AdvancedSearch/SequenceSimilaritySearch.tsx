export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Advanced Search</h5>
        <h1>Sequence Similarity Search</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#what-is-sequence-similarity-search">
              What is Sequence Similarity Search?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#why-run-a-sequence-similarity-search">
              Why run a Sequence Similarity Search?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#query-options">Query Options</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#query-using-the-top-bar-search-box">
              Query using the Top Bar Search box
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#query-using-the-advanced-search-panel">
              Query using the 'Advanced Search' panel
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#query-from-the-structure-summary-page">
              Query from the Structure Summary page
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#search-options">Search Options</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#results">Results</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#limitations-of-sequence-similarity-search">
              Limitations of Sequence Similarity Search
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#examples">Examples</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#references">References</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <p>
            The order of amino acids in a protein or the protein sequence is
            thought to hold the key for protein folding, i.e., each protein
            sequence folds into a unique shape to perform its function(s). While
            this relationship between sequence and structure holds true in most
            of the cases, some folded proteins may adopt multiple conformations
            corresponding to different functional states and a few protein
            sequences can fold into entirely different shapes (e.g., prion
            proteins). Sequence comparison is the most commonly used strategy
            for identifying homology between proteins and/or protein domains.
          </p>
          <a
            className="content-anchor"
            id="what-is-sequence-similarity-search"
          ></a>
          <h3>What is Sequence Similarity Search?</h3>
          <p>
            The Sequence Similarity Search option allows you to query the PDB
            archive using the amino acid sequence of a protein. Although the
            most common method for sequence similarity searches is Basic Local
            Alignment Search Tool (BLAST,
            <a
              href="https://doi.org/10.1016/S0022-2836(05)80360-2"
              target="_blank"
            >
              Altschul et al., 1990
            </a>
            ), the Sequence Similarity Search option available from RCSB.org
            uses the MMseqs2 software (
            <a href="https://doi.org/10.1038/nbt.3988" target="_blank">
              Steinegger and Söding, 2017
            </a>
            ) to find similar protein and nucleic acid sequences. The
            <a href="https://github.com/soedinglab/MMseqs2" target="_blank">
              MMseqs2
            </a>
            tool is similar to BLAST, but achieves better performance at
            comparable levels of sensitivity. The search is dependent on a
            user-defined "sequence identity cutoff". During the search, each
            structure in the archive is aligned with the target structure, and
            the number of identical amino acids is tallied. If this number is
            greater than the cutoff, the structure is returned by the search.
          </p>
          <a
            className="content-anchor"
            id="why-run-a-sequence-similarity-search"
          ></a>
          <h3>Why run a Sequence Similarity Search?</h3>
          <p>
            Sequence similarity searches are widely used to find similar
            proteins in the archive and identify conserved domains in them.
            <br />
            <br />
            Aligning a query sequence with other sequences in a database or
            aligning a group of similar sequences and statistically assessing
            how well they match can help identify homology between proteins.
            This can be used to transfer information and develop hypotheses
            about the protein’s interactions and functions. <br />
            <br />
            For example, a search of sequences similar to that of whale
            myoglobin using a high cutoff value for sequence identity (~90%)
            will return a list of additional structure determinations of the
            particular protein (i.e., the whale myoglobin). Using a lower cutoff
            value (~30%) for the same search will return a longer list that
            includes myoglobin structures from other organisms and other
            proteins with similar structure, e.g., cytoglobin.
          </p>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <p>
            There are a few different options that can be combined to run a
            Sequence Similarity Search. These options are being listed here
            under 3 different sections:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Query - this will describe the options you have to inputting your
              query
            </li>
            <li>
              Search - this will describe the search parameters and filters that
              can be applied.
            </li>
            <li>
              Results - this will describe options available for what you wish
              to see in the results page.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="query-options"></a>
          <h3>Query Options</h3>
          <p>
            A Sequence Similarity Search query must be at least 20 residues long
            and be submitted in FASTA format (amino acid one letter code). For
            shorter sequences try the Sequence Motif Search. The sequence
            similarity search query can be submitted in two ways - either using
            the Advanced Search interface or from the Structure Summary Page.
          </p>
          <a
            className="content-anchor"
            id="query-using-the-top-bar-search-box"
          ></a>
          <h4>Query using the Top Bar Search box</h4>
          <p>
            Pasting the one-letter code of a protein, DNA, or RNA sequence in
            the top bar search box is recognized as a sequence similarity search
            request (Figure 1A). This sequence is automatically transferred to
            the Advanced Search Query Builder’s Sequence Similarity search and a
            search is performed for experimental structures and Computed
            Structure Models (CSMs) with the same or similar sequence (Figure
            1B).
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffde9d03a38a923c3516cf5/ss-redo-f1.png"
                      data-toggle="lightbox"
                      data-title="Figure 1: Options for sequence similarity search from the Top bar search box - A. paste FASTA sequence; B. the query sequence is transfered to the Sequence Similarity search options in the Advanced Search Query Builder to run the search. Note: Turn on the toggle switch to Include CSMs."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffde9d03a38a923c3516cf5/ss-redo-f1.png"
                        alt="Figure 1: Options for sequence similarity search from the Top bar search box - A. paste FASTA sequence; B. the query sequence is transfered to the Sequence Similarity search options in the Advanced Search Query Builder to run the search. Note: Turn on the toggle switch to Include CSMs."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 1: Options for sequence similarity search from the
                    Top bar search box - A. paste FASTA sequence; B. the query
                    sequence is transfered to the Sequence Similarity search
                    options in the Advanced Search Query Builder to run the
                    search. Note: Turn on the toggle switch to Include CSMs.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a
            className="content-anchor"
            id="query-using-the-advanced-search-panel"
          ></a>
          <h4>Query using the 'Advanced Search' panel</h4>
          <p>
            The sequence similarity search options available from the “Advanced
            Search” panel are as follows:
            <br />
            <br />
            The query can be submitted using the PDB ID. This is useful to find
            all sequences that are similar to the sequence from a specified
            chain.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Type in a structure ID (e.g., PDB ID or RCSB.org assigned CSM ID)
              into the appropriate box. Once you enter a valid structure ID the
              tool presents a list of macromolecular sequences with chain IDs in
              a pop-up box. Note that the sequences of all unique polymer
              entities are presented here (Figure 2A).
            </li>
            <li>
              Select a Chain ID and sequence of interest from the pull-down
              menu. This selected sequence will be pasted into the Sequence box
              above the PDB ID box (Figure 2B)
            </li>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffde9d03a38a923c3516cf5/ss-f2.png"
                      data-toggle="lightbox"
                      data-title="Figure 2: Options for sequence similarity search from the Advanced Search Query Builder - A. input structure ID and select polymer chain of interest; B. the selected polymer chain sequence is populated in the Sequence similarity search box. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffde9d03a38a923c3516cf5/ss-f2.png"
                        alt="Figure 2: Options for sequence similarity search from the Advanced Search Query Builder - A. input structure ID and select polymer chain of interest; B. the selected polymer chain sequence is populated in the Sequence similarity search box. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 2: Options for sequence similarity search from the
                    Advanced Search Query Builder - A. input structure ID and
                    select polymer chain of interest; B. the selected polymer
                    chain sequence is populated in the Sequence similarity
                    search box.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            The query can also be submitted as a sequence. This is useful when
            you have a FASTA format sequence on hand (either from a publication
            or a bioinformatics resource) to pasted inthe box provided (Figure
            2B).
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Paste the sequence in one-letter code format in the Sequence text
              box (See Panel B in figure above). Be sure to remove any other
              information that might be at the top of the pasted sequence (e.g.,
              FASTA headers).
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="query-from-the-structure-summary-page"
          ></a>
          <h4>Query from the Structure Summary page</h4>
          <p>
            Each structure in the PDB has a dedicated Structure Summary page
            that displays information about the entities in that entry. To
            search for polymer entities with sequences similar to that of a
            specific polymer entity click on the “Sequence” link above the
            details listed for the macromolecular entity and choose the desired
            sequence identity level from the drop-down (Figure 3). The search is
            run with the default E-value cutoff (0.1). This and other search
            options are explained further in the following section.
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffde9d03a38a923c3516cf5/seq-sim-fig3-20230309.png"
                      data-toggle="lightbox"
                      data-title="Figure 3: Options for launching a sequence similarity search from the structure summary page of a specific 3D structure. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffde9d03a38a923c3516cf5/seq-sim-fig3-20230309.png"
                        alt="Figure 3: Options for launching a sequence similarity search from the structure summary page of a specific 3D structure. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 3: Options for launching a sequence similarity search
                    from the structure summary page of a specific 3D structure.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="search-options"></a>
          <h3>Search Options</h3>
          <p>
            Once the Query sequence has been provided, the following parameters
            can be specified to launch the search (Figure 4). If they are not
            specified, reasonable defaults will be used.
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffde9d03a38a923c3516cf5/ss-redo-f4.png"
                      data-toggle="lightbox"
                      data-title="Figure 4: Sequence Similarity Search parameters."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffde9d03a38a923c3516cf5/ss-redo-f4.png"
                        alt="Figure 4: Sequence Similarity Search parameters."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 4: Sequence Similarity Search parameters.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Search Target</b>: There are three possible target databases
              for the sequence similarity search present in the PDB and in CSMs
              available from RCSB.org - (1) all current protein sequences, (2)
              all current DNA sequences and (3) all current RNA sequences.
            </li>
            <li>
              <b>E-value Cutoff</b>: The E-value or Expect value is a parameter
              that describes the probability that the sequences matched by
              chance. The lower the E-value, or the closer it is to zero, the
              more "significant" the match is. Sequences that have an E-value
              higher than the set cutoff are filtered out of the results. The
              default E-value for Sequence Similarity Search is set at 0.1 and
              is usually indicated in scientific notation, (e.g., 1e-10). You
              can change this to a smaller or larger number to meet the needs of
              your search. Since the scoring takes chain length into
              consideration shorter sequences can have identical matches with
              high E-Value.
            </li>
            <li>
              <b>Identity Cutoff</b> defines the extent of match between two
              sequences. The cutoff value is measured as a percentage, with a
              value between 0 and 100%. The default value is set to zero so all
              matched sequences are listed in the results. Select a level of
              identity for the sequence similarity search as needed. Matched
              sequences that have sequence identity lower than this cutoff are
              filtered out of the results.
            </li>
          </ul>
          <div></div>
          <p>
            Since the query for this search is a sequence, the results are
            expected to be sequences of polymer entities. Select the “Polymer
            Entities” option for the Display Results as pull-down list, use the
            default option to exclude CSMs or turn on the toggle switch to
            include CSMs, and then launch the search by clicking on the Search
            button.
          </p>
          <a className="content-anchor" id="results"></a>
          <h3>Results</h3>
          <p>
            At the top of the search results page, several options are available
            for displaying, reporting, sorting, and downloading all or selected
            entities, entries, and assemblies that match the query.
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffde9d03a38a923c3516cf5/ss-f5.png"
                      data-toggle="lightbox"
                      data-title="Figure 5: Options to display, report, sort, and download search results. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffde9d03a38a923c3516cf5/ss-f5.png"
                        alt="Figure 5: Options to display, report, sort, and download search results. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 5: Options to display, report, sort, and download
                    search results.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            The default option for displaying the results is the Summary view.
            This includes a snapshot of the matched polymer entity, entry, or
            assembly, and lists the structure title, authors, brief information
            about the contents (polymer name, ligands), source organism and a
            few other details. Options are available to display the results in a
            Compact view, or as an image Gallery of the matched polymers,
            entries, or assemblies.
            <br />
            <br />
            The Tabular Report options allow you to create detailed reports
            about the matched entries, entities, or assemblies. Using the
            sorting options, you can order the results by score, date of
            release, etc., while the download options allow users to download
            all or selected entries, entities, and assemblies. <br />
            <br />
            The “Alignment Reference” options are unique to the sequence
            similarity search results. These options allow you to change the
            interactive graphical summaries of the sequence alignment. Learn
            more about these options and the color scheme used for alignment
            <a href="/docs/sequence-viewers/protein-sequence-alignment-view">
              here
            </a>
            . <br />
            <br />
            Polymer entities that match the query and search parameters are
            listed on the Results page using the default “Alignment Reference”
            option (Figure 6).
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffde9d03a38a923c3516cf5/ss-f6.png"
                      data-toggle="lightbox"
                      data-title="Figure 6: Part of a sequence similarity search results page showing an experimental structure and a CSM that matched the query. The inset shows a zoomed in view of the sequence alignment including an insertion and several mismatches. Sequence similarity measures are highlighted with red arrows. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffde9d03a38a923c3516cf5/ss-f6.png"
                        alt="Figure 6: Part of a sequence similarity search results page showing an experimental structure and a CSM that matched the query. The inset shows a zoomed in view of the sequence alignment including an insertion and several mismatches. Sequence similarity measures are highlighted with red arrows. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 6: Part of a sequence similarity search results page
                    showing an experimental structure and a CSM that matched the
                    query. The inset shows a zoomed in view of the sequence
                    alignment including an insertion and several mismatches.
                    Sequence similarity measures are highlighted with red
                    arrows.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            The following values are presented to qualify the extent of the
            match:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Sequence Identity is the ratio of the number of identical amino
              acids between the 2 aligned sequences over the aligned length,
              expressed as a percentage.
            </li>
            <li>
              E-Value provides a measure for whether the observed sequence
              identity was a chance match or if it has any evolutionary
              significance. This is reported as a number close to zero. The
              lower the E-Value, or the closer it is to zero, the more
              "significant" the match is. An E-Value of a significant match is
              often expressed in scientific notation, where the higher the
              exponent’s power the more significant the match (i.e., 1e-80 is a
              more significant match than 1e-30). Note that short query
              sequences may be seen in many other protein sequences by chance so
              these matches may have a high E-Value.
            </li>
            <li>
              Region specifies the amino acid residue numbers of the part of the
              protein that was considered in the sequence comparison.
            </li>
          </ul>
          <div></div>
          <p>
            You can explore the sequence match using the interactive alignment
            displayed. Zoom into the sequence and move the sequence left or
            right to examine sequence identities, mismatches, insertions,
            deletions or missing residues etc.
            <br />
            <br />
            You can also download and view the matched files and/or the
            alignments.
          </p>
          <a
            className="content-anchor"
            id="limitations-of-sequence-similarity-search"
          ></a>
          <h3>Limitations of Sequence Similarity Search</h3>
          <p>
            Sequence similarity searches with short query sequences can match
            many sequences and provide false evolutionary relationships. This
            should be carefully examined and considered when making any
            conclusions about the matched sequences. For short sequences, the
            <a
              href="/docs/search-and-browse/advanced-search/sequence-motif-search"
              target="_blank"
            >
              Sequence motif search
            </a>
            may be more suitable.
          </p>
          <a className="content-anchor" id="examples"></a>
          <h2>Examples</h2>
          <p>
            1. Search for sequences that are 90% similar to the beta-lactamase
            in the PDB entry 1blc using the Advanced Search interface.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Launch this search from the Advanced Search interface for PDB ID
              1blc, Chain ID A.
            </li>
            <li>
              Provide the Identity Cutoff as 90 and select the Display results
              options from the pulldown menu to be Polymer Entities, and launch
              the search
            </li>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffde9d03a38a923c3516cf5/ss-redo-f7.png"
                      data-toggle="lightbox"
                      data-title="Figure 7: Setting up the sequence similarity search for the sequence in Chain A of PDB entry 1blc, at 90% sequence identity. Turn on the toggle switch to include CSMs. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffde9d03a38a923c3516cf5/ss-redo-f7.png"
                        alt="Figure 7: Setting up the sequence similarity search for the sequence in Chain A of PDB entry 1blc, at 90% sequence identity. Turn on the toggle switch to include CSMs. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 7: Setting up the sequence similarity search for the
                    sequence in Chain A of PDB entry 1blc, at 90% sequence
                    identity. Turn on the toggle switch to include CSMs.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22sequence%22%2C%22parameters%22%3A%7B%22evalue_cutoff%22%3A0.1%2C%22identity_cutoff%22%3A0.9%2C%22target%22%3A%22pdb_protein_sequence%22%2C%22value%22%3A%22KELNDLEKKYNAHIGVYALDTKSGKEVKFNSDKRFAYASTSKAINSAILLEQVPYNKLNKKVHINKDDIVAYSPILEKYVGKDITLKALIEASMTYSDNTANNKIIKEIGGIKKVKQRLKELGDKVTNPVRYEIELNYYSPKSKKDTSTPAAFGKTLNKLIANGKLSKENKKFLLDLMLNNKSGDTLIKDGVPKDYKVADKSGQAITYASRNDVAFVYPKGQSEPIVLVIFTNKDNKSDKPNDKLISETAKSVMKEF%22%7D%7D%5D%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_info%22%3A%7B%22query_id%22%3A%2232cd5caa10fc611d7f6eda24f96725c1%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                search results
              </a>
              include several other beta lactamase entities but all from the
              same organism, Staphylococcus aureus.
            </li>
          </ul>
          <div></div>
          <p>
            2. Search for sequences that are 30% similar to the beta-lactamase
            in the PDB entry 1blc from the Structure Summary page (of PDB entry
            1blc)
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Launch this search from the Structure Summary page for the PDB
              entry 1blc, Macromolecule Entity 1 (BETA-LACTAMASE).
            </li>
            <li>
              Click on the Sequence button and select the 30% option in the
              pulldown menu.
            </li>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffde9d03a38a923c3516cf5/seq-sim-fig7-20230309.png"
                      data-toggle="lightbox"
                      data-title="Figure 8: Launching a sequence similarity search from the Structure Summary Page for PDB entry 1blc."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffde9d03a38a923c3516cf5/seq-sim-fig7-20230309.png"
                        alt="Figure 8: Launching a sequence similarity search from the Structure Summary Page for PDB entry 1blc."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 8: Launching a sequence similarity search from the
                    Structure Summary Page for PDB entry 1blc.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22sequence%22%2C%22parameters%22%3A%7B%22value%22%3A%22KELNDLEKKYNAHIGVYALDTKSGKEVKFNSDKRFAYASTSKAINSAILLEQVPYNKLNKKVHINKDDIVAYSPILEKYVGKDITLKALIEASMTYSDNTANNKIIKEIGGIKKVKQRLKELGDKVTNPVRYEIELNYYSPKSKKDTSTPAAFGKTLNKLIANGKLSKENKKFLLDLMLNNKSGDTLIKDGVPKDYKVADKSGQAITYASRNDVAFVYPKGQSEPIVLVIFTNKDNKSDKPNDKLISETAKSVMKEF%22%2C%22identity_cutoff%22%3A0.3%2C%22sequence_type%22%3A%22protein%22%2C%22evalue_cutoff%22%3A0.1%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%220f273f3205dd598222fbcb168207e529%22%7D%7D"
                target="_blank"
              >
                search results
              </a>
              include many other beta-lactamase structures from different
              organisms and specificities.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="references"></a>
          <h2>References</h2>
          <p>
            Altschul, S. F., Gish, W., Miller, W., Myers, E. W., &amp; Lipman,
            D. J. (1990). Basic local alignment search tool. Journal of
            molecular biology, 215(3), 403–410.
            <a
              href="https://doi.org/10.1016/S0022-2836(05)80360-2"
              target="_blank"
            >
              https://doi.org/10.1016/S0022-2836(05)80360-2 <br />
            </a>
            <br />
            Steinegger, M., Söding, J. (2017). MMseqs2 enables sensitive protein
            sequence similarity searching for the analysis of massive data sets.
            Nat Biotechnol 35, 1026–1028.
            <a href="https://doi.org/10.1038/nbt.3988" target="_blank">
              https://doi.org/10.1038/nbt.3988
            </a>
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
        <div>Last updated: 3/9/2023</div>
      </div>
    </div>
  );
};
