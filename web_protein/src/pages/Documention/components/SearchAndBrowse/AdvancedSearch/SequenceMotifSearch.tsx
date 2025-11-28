export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Advanced Search</h5>
        <h1>Sequence Motif Search</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#what-is-a-sequence-motif">What is a sequence motif?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#what-is-a-sequence-motif-search">
              What is a Sequence Motif Search?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#why-run-a-sequence-motif-search">
              Why run a Sequence Motif Search?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#query-options">Query options</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#result-options">Result options</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#examples">Examples</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <a className="content-anchor" id="what-is-a-sequence-motif"></a>
          <h3>What is a sequence motif?</h3>
          <p>
            Sequence motifs are short segments of conserved protein or nucleic
            acid sequences, that are present in many proteins or genes
            (respectively, and believed to have specific functional
            significance. In some cases the entire set of amino acids or nucleic
            acids in the sequence is conserved and required to perform the
            specific function, while in other cases only amino acids or nucleic
            acids at specific locations in the sequence motif may be conserved
            and significant for the function.
          </p>
          <a
            className="content-anchor"
            id="what-is-a-sequence-motif-search"
          ></a>
          <h3>What is a Sequence Motif Search?</h3>
          <p>
            The sequence motif search option allows you to query for amino acid
            or nucleotide sequence fragments in an FASTA sequence that appear
            frequently in polymers present in 3D structures.
          </p>
          <a
            className="content-anchor"
            id="why-run-a-sequence-motif-search"
          ></a>
          <h3>Why run a Sequence Motif Search?</h3>
          <p>
            Finding a specific sequence motif in a protein or nucleic acid
            suggests that it may have the function associated with the motif -
            i.e., it can be used to predict function(s). <br />
            <br />
            Another reason to run sequence motif searches is that it is indeed
            different from a regular sequence based search in two ways:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The sequence defining the sequence motif is short (so the sequence
              based searches will not work effectively)
            </li>
            <li>
              Parts of the sequence motif may have alternate sequences or may
              not be conserved at all (so specific conditions have to be
              included in the query for defining the non-contiguous conserved
              amino acids/nucleotides in the sequence motif)
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <p>
            The sequence motif search options are available from the Advanced
            Search Query builder (Figure 1).
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffdeaf53a38a923c3516cf6/sqms-f1.png"
                      data-toggle="lightbox"
                      data-title="Figure 1: Interface to specify a sequence motif search for Protein, DNA, or RNA sequences in different formats and find polymer entities that match the query. If appropriate, turn on toggle switch to include CSMs in the search. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffdeaf53a38a923c3516cf6/sqms-f1.png"
                        alt="Figure 1: Interface to specify a sequence motif search for Protein, DNA, or RNA sequences in different formats and find polymer entities that match the query. If appropriate, turn on toggle switch to include CSMs in the search. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 1: Interface to specify a sequence motif search for
                    Protein, DNA, or RNA sequences in different formats and find
                    polymer entities that match the query. If appropriate, turn
                    on toggle switch to include CSMs in the search.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="query-options"></a>
          <h3>Query options</h3>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Sequence motif searches can be run for protein, DNA, or RNA
              sequences. Select the type of query sequence using the Sequence
              Type options.
            </li>
            <li>
              The actual sequence motif can be specified using three types of
              syntax:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                <b>Simple</b>: Search for sequence fragments using IUPAC
                one-letter codes for amino acids like <code>MQTIF</code>. Use
                the symbol X to allow any amino acid at a position. E.g., a
                query for SH3 domains using the sequence -X-P-P-X-P (where X is
                a variable residue and P is Proline) can be expressed as:
                <code>XPPXP</code>.
              </li>
              <li>
                <b>PROSITE</b>: Complex queries can be expressed using PROSITE
                patterns. For details,
                <a
                  href="https://prosite.expasy.org/prosuser.html#conv_pa"
                  target="_blank"
                >
                  see the definitions
                </a>
              </li>
              <li>
                RegEx:
                <a
                  href="https://en.wikipedia.org/wiki/Regular_expression"
                  target="_blank"
                >
                  Regular expressions
                </a>
                are supported as an alternative representation of complex
                queries. For instance:
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  Ranges of variable residues are specified by the <code></code>
                  notation, where n is the number of variable residues. To query
                  a motif with seven variables between residues W and G and
                  twenty variable residues between G and L use the following
                  notation:
                  <code>
                    W.{7}G.{20}L
                  </code>
                </li>
                <li>
                  Variable ranges are expressed by the <code></code> notation,
                  where n is the minimum and m the maximum number of
                  repetitions. For example the zinc finger motif that binds Zn
                  in a DNA-binding domain can be expressed as:
                  <code>
                    C.{4}C.{12}H.{5}H
                  </code>
                </li>
                <li>
                  The '^' operator searches for sequence motifs at the beginning
                  of a protein sequence. The following two queries find
                  sequences with N-terminal Histidine tags <code>^HHHHHH</code>
                  or <code>^H{6}</code>
                </li>
                <li>
                  Square brackets specify alternative residues at a particular
                  position. The Walker (P loop) motif that binds ATP or GTP can
                  be expressed as: <code>[AG]....GK[ST]</code> (A or G are
                  followed by 4 variable residues, then G and K, and finally S
                  or T)
                </li>
              </ul>
            </ul>
            <li>Before running the search remember to do the following:</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>change the result return option to Polymer entities </li>
              <li>
                decide whether to include CSMs (default option) or exclude them
                (by turning off the toggle switch next to the Search button.
              </li>
            </ul>
          </ul>
          <div></div>
          <a className="content-anchor" id="result-options"></a>
          <h3>Result options</h3>
          <p>
            The search results display the numbering for the sequence match
            region (corresponding to PDBx/mmCIF file numbering) (Figure 2).
            Click on the 3D View button included for each matched result to view
            the structure interactively in 3D. The matched region specified in
            the results can be examined closely.
          </p>
          <div>
            <table style={{ width: '90%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffdeaf53a38a923c3516cf6/sms-f2.png"
                      data-toggle="lightbox"
                      data-title="Figure 2: Part of the query results page for a sequence motif search showing the regions of the polymer entity that matches the query sequence motif in a red box. Clicking on the 3D view marked with red arrows opens the structure in Mol*."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffdeaf53a38a923c3516cf6/sms-f2.png"
                        alt="Figure 2: Part of the query results page for a sequence motif search showing the regions of the polymer entity that matches the query sequence motif in a red box. Clicking on the 3D view marked with red arrows opens the structure in Mol*."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 2: Part of the query results page for a sequence
                    motif search showing the regions of the polymer entity that
                    matches the query sequence motif in a red box. Clicking on
                    the 3D view marked with red arrows opens the structure in
                    Mol*.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="examples"></a>
          <h2>Examples</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22seqmotif%22%2C%22parameters%22%3A%7B%22value%22%3A%22XPPXP%22%2C%22pattern_type%22%3A%22simple%22%2C%22sequence_type%22%3A%22protein%22%7D%7D%5D%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%226d60b84fc5f6365e4043749da1f3c896%22%7D%7D"
                target="_blank"
              >
                Query for SH3 domains
              </a>
              - use the Simple format sequence “XPPXP” (where X is a variable
              residue and P is Proline)
            </li>
            <li>
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22seqmotif%22%2C%22parameters%22%3A%7B%22value%22%3A%22AC%5D-X-V-X(4)-%7BED%7D%22%2C%22pattern_type%22%3A%22prosite%22%2C%22sequence_type%22%3A%22protein%22%7D%7D%5D%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22d06f38ffa1ec797e8e3cb23620471617%22%7D%7D"
                target="_blank"
              >
                Query for a specific pattern of sequence
              </a>
              - use the Prosite format sequence motif query “” which translates
              to Ala or Cys-any-Val-any-any-any-any-.
            </li>
            <li>
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22seqmotif%22%2C%22parameters%22%3A%7B%22value%22%3A%22%5BAG%5D....GK%5BST%5D%22%2C%22pattern_type%22%3A%22regex%22%2C%22sequence_type%22%3A%22protein%22%7D%7D%5D%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22430a663b3ab67f04b578656d962bf7e1%22%7D%7D"
                target="_blank"
              >
                Query for the Walker (P loop) motif
              </a>
              that binds ATP or GTP - use the RegEx format sequence motif query
              “ [AG]....GK[ST]” (where A or G is followed by 4 variable
              residues, then G and K, and finally S or T)
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
        <div>Last updated: 9/21/2022</div>
      </div>
    </div>
  );
};
