export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Grouping Structures</h5>
        <h1>Grouping Search Results</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#why-should-you-consider-grouping-search-results">
              Why should you consider grouping Search Results?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#options-for-grouping-search-results">
              Options for Grouping Search Results
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#grouping-structures">Grouping Structures</a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □
            <a href="#grouping-by-pdb-deposit-group-id">
              Grouping by PDB Deposit Group ID
            </a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □ <a href="#interface">Interface</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#grouping-polymer-entities">Grouping Polymer Entities</a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □
            <a href="#grouping-by-sequence-identity">
              Grouping by sequence identity
            </a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □
            <a href="#grouping-by-uniprot-accession">
              Grouping by UniProt Accession
            </a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □ <a href="#interface">Interface</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#options-for-displaying-grouped-results">
              Options for Displaying Grouped Results
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#grouped-search-results">Grouped Search Results</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#summary-">Summary </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#the-groups-view">The Groups view</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#the-representatives-view-">The Representatives view </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#example">Example</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#exploring-all-protein-targets-of-the-drug-imatinib">
              Exploring all protein targets of the drug, Imatinib:
            </a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <p>
            For many proteins, the PDB archive includes multiple structures,
            providing snapshots of the structure, interactions, and functions of
            these proteins under different conditions. This redundancy provides
            opportunities for exploration of biomolecular interactions and
            functions. In cases when the query results include many matches to
            the same or similar proteins, it may be helpful to be able to remove
            redundancy by grouping and organizing the search results in
            meaningful ways.
          </p>
          <a
            className="content-anchor"
            id="why-should-you-consider-grouping-search-results"
          ></a>
          <h3>Why should you consider grouping Search Results?</h3>
          <p>
            While redundancy in the PDB enables a deeper understanding of
            biology, it may present some challenges in bioinformatics analysis.
            Here are four main reasons for grouping search results:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Reducing the size of datasets (by examining distinct
              representatives of groups). This is particularly important as the
              size of the PDB continues to grow.
            </li>
            <li>
              Recognizing the relationship between various groups of the search
              results and exploring each group of results.
            </li>
            <li>
              Drawing attention to the full range of query matches - by hiding
              redundant matches from the results, less frequent but relevant
              results can become more prominent and included in exploration and
              analysis.
            </li>
            <li>
              Removing undesirable biases - which may be introduced if a result
              set has many similar and homologous proteins.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a
            className="content-anchor"
            id="options-for-grouping-search-results"
          ></a>
          <h3>Options for Grouping Search Results</h3>
          <p>
            Redundancy occurs at many levels - including at the level of
            sequence and/or structure similarity. A variety of different
            grouping methods can be applied to PDB data to provide a
            non-redundant view. Current options available allow grouping:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Structures</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>By PDB Deposit Group ID</li>
            </ul>
            <li>Polymer entities</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>By Sequence similarity clusters</li>
              <li>By UniProt Accession</li>
            </ul>
          </ul>
          <div></div>
          <p>
            The choice of grouping options depends on the selected Return
            option, e.g., <i>Structures</i>, <i>Polymer Entities</i>. Different
            grouping options produce groups that can be used to explore
            different types of information. Once the query with selected
            grouping is run, the search results are organized into distinct
            groups and descriptive summaries of the groups are presented to the
            user. Search matches assigned to the same group are similar to one
            another based on the grouping criteria, e.g., sharing the level of
            sequence identity, while search results assigned to different groups
            should be different from one another.
          </p>
          <a className="content-anchor" id="grouping-structures"></a>
          <h4>Grouping Structures</h4>
          <a
            className="content-anchor"
            id="grouping-by-pdb-deposit-group-id"
          ></a>
          <h5>Grouping by PDB Deposit Group ID</h5>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Although PDB structures are each identified by a PDB ID, some PDB
              structures that are deposited by authors in batches have a common
              PDB Deposit Group ID.
            </li>
            <li>
              Criteria for membership in these groups is determined by the
              authors at the time of structure submission.
            </li>
            <li>
              Frequently these structures have the same protein(s), but with
              different ligands bound to them. For example, structures resulting
              from the screening for fragments binding to a specific target.
            </li>
            <li>
              Only a small number of structures in the archive have PDB Deposit
              Group IDs (e.g. G_#######). So organizing search results using
              this option will only include those structures which have this PDB
              Deposit Group ID (e.g., G_1002057). Structures in the results that
              do not have any Group Deposition ID are not listed in the grouped
              results.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="interface"></a>
          <h5>Interface</h5>
          <p>
            If the Return is set to <i>Structure</i> and results are grouped
            using the Group Deposition ID option, the results will be organized
            by groups of structures that were deposited as a collection via RCSB
            PDB Group Deposition server. The results may be
            <a
              href="/docs/grouping-structures/grouping-search-results#options-for-displaying-grouped-results"
              target="_blank"
            >
              displayed as Groups or Representatives
            </a>
            (see Figure 1).
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b3269c3931864b07285b/gsr-fig1.png"
                      data-toggle="lightbox"
                      data-title="Figure 1: Grouping search results by PDB Deposit Group ID"
                    >
                      <img
                        style={{ width: '80%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b3269c3931864b07285b/gsr-fig1.png"
                        alt="Figure 1: Grouping search results by PDB Deposit Group ID"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 1: Grouping search results by PDB Deposit Group ID
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="grouping-polymer-entities"></a>
          <h4>Grouping Polymer Entities</h4>
          <p>
            A polymer entity (e.g., a protein) may appear in the PDB archive in
            many different entries - by itself under different experimental
            conditions, with minor modifications (e.g., mutations or sequence
            variations), or in complex with other molecules, representing
            different functional states. While the structures of the protein in
            each entry may be different the sequence and its mapping to UniProt
            remain the same. Search results of a query for polymer entities can
            be organized in the following ways.
          </p>
          <a className="content-anchor" id="grouping-by-sequence-identity"></a>
          <h5>Grouping by sequence identity</h5>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Polymer entities in the result list can be matched by using
              specific sequence identity criteria (from 100% to 30%).
            </li>
            <li>
              The sequence identity groups are based on sequence clustering done
              by RCSB PDB with weekly PDB archive release. Thus these groups are
              likely to change over time, as new structures are added to the
              archive. Learn
              <a
                href="/docs/grouping-structures/sequence-based-clustering"
                target="_blank"
              >
                more about sequence clusters
              </a>
              here.
            </li>
            <li>
              Sequence clusters are based on alignments that involve nearly an
              entire sequence - i.e., sequence coverage must be at least 90%. So
              sequences of different lengths of the same protein may end up in
              different groups even if identity level is sufficient. For
              example, if different lengths of the same protein were included in
              the same or different structures, they may end up in different
              groups because of differing lengths.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="grouping-by-uniprot-accession"></a>
          <h5>Grouping by UniProt Accession</h5>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Polymer chains in the result set are matched by the
              <a href="https://www.uniprot.org/" target="_blank">
                UniProt
              </a>
              Accession associated with the polymer sequence.
            </li>
            <li>
              Grouping results by this method will classify all search results
              that have a specific UniProt ID, regardless of whether the
              structure includes the entire protein, parts of the protein,
              mutations, or modifications.
            </li>
            <li>
              Proteins included in a group defined by its UniProt ID may include
              polymer sequences and structures that match different domains of
              the complete protein and its variants.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="interface"></a>
          <h5>Interface</h5>
          <p>
            When the Return option is set to <i>Polymer Entities</i>, the search
            results can be grouped using the UniProt Accession and various
            Sequence Identity options. Structures in the results that do not
            match both of the query and grouping criteria are not listed in the
            grouped results. The results may be
            <a
              href="/docs/grouping-structures/grouping-search-results#options-for-displaying-grouped-results"
              target="_blank"
            >
              displayed as Groups or Representatives
            </a>
            (see Figure 2).
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b3269c3931864b07285b/gsr-fig2.png"
                      data-toggle="lightbox"
                      data-title="Figure 2: Grouping search results by UniProt Accession and sequence identity"
                    >
                      <img
                        style={{ width: '80%', border: '1px solid #ccc' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b3269c3931864b07285b/gsr-fig2.png"
                        alt="Figure 2: Grouping search results by UniProt Accession and sequence identity"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 2: Grouping search results by UniProt Accession and
                    sequence identity
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a
            className="content-anchor"
            id="options-for-displaying-grouped-results"
          ></a>
          <h3>Options for Displaying Grouped Results</h3>
          <p>
            The query is run with suitable grouping and display options so that
            the grouped search results may be viewed as:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Groups - each of the groups shown in the grouped results page have
              a page summarizing properties of the group members that can be
              explored.
            </li>
            <li>
              Representatives - a list of representative members of each group.
              All other structures in the group are hidden. For the search and
              grouping criteria used, this is the set of non-redundant matches.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="grouped-search-results"></a>
          <h3>Grouped Search Results</h3>
          <a className="content-anchor" id="summary-"></a>
          <h4>Summary</h4>
          <p>
            Right below the Advanced Search Query Builder section of the webpage
            and quick search summary is presented, as shown in Figure 3. This
            indicates that the search yielded 8592 matches, of which 509 were
            organized into 27 groups, while 8083 matches could not be grouped
            because they did not match the grouping criteria (in this case it
            was the presence of PDB Deposit Group ID).
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b3269c3931864b07285b/gsr-fig3.png"
                      data-toggle="lightbox"
                      data-title="Figure 3: Search Summary showing result groups displayed as groups or Representatives."
                    >
                      <img
                        style={{ width: '80%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b3269c3931864b07285b/gsr-fig3.png"
                        alt="Figure 3: Search Summary showing result groups displayed as groups or Representatives."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 3: Search Summary showing result groups displayed as
                    groups or Representatives.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="the-groups-view"></a>
          <h4>The Groups view</h4>
          <p>
            This view displays a summary of each of the groups in the grouped
            search results.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Each group in the list displays a few features relevant to the
              group (Figure 4).
            </li>
            <li>
              The criteria for selecting the representative for this grouped
              result may be changed using the options available in the pulldown
              menu in the center of the page. These options include:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Resolution: Best - the best or highest resolution structure
                (lowest number in the experimental structure resolution) for the
                refined structural model. Structures with no resolution have
                lower ranking compared to structures having assigned resolution
                values.
              </li>
              <li>
                Entry All Residues: Most - the largest total count of residues
                (e.g., amino acids) for all polymer entity instances reported
                per deposited structure model.
              </li>
              <li>
                Entry Modeled Residues: Most - the largest total count of
                residues (e.g., amino acids) with reported coordinate data for
                all polymer entity instances reported per deposited structure
                model.
              </li>
              <li>
                Entry Chain Count: Most - the largest total count of polymer
                entity instances per deposited structure model.
              </li>
              <li>Score: Best - the most relevant for a given search query.</li>
            </ul>
            <li>
              The order of groups displayed here may be sorted by a number of
              criteria available from the pull down list on the right of the
              page.
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Group Score: is calculated as the average of the relevance
                scores of the group members matching the search query
              </li>
              <li>
                Matched count: is the number of group members matching the
                search query
              </li>
              <li>
                Group size: is based on the number of members included in the
                group. The groups may be ordered by the largest or smallest
                group size.
              </li>
            </ul>
          </ul>
          <div></div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b3269c3931864b07285b/gsr-fig4.png"
                      data-toggle="lightbox"
                      data-title="Figure 4: Options for selecting representatives for the Groups view and options for sorting groups of search results"
                    >
                      <img
                        style={{ width: '80%', border: '1px solid #ccc' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b3269c3931864b07285b/gsr-fig4.png"
                        alt="Figure 4: Options for selecting representatives for the Groups view and options for sorting groups of search results"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 4: Options for selecting representatives for the
                    Groups view and options for sorting groups of search results
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            Any one group listed on this page displays a few key pieces of
            information about the group member (see Figure 5).
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Group name </b>(shown as red boxes in Figure 5) is assigned the
              name of the most frequent polymer name in the group.
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                When grouping structures by sequence identity, the group names
                are inferred. The name for the most frequent protein is used as
                the group name. It is possible that this name doesn’t fully
                describe the group. This message “Accounts for % of matches“ and
                tooltip are in place to explain this. For example the name for
                the group shown in Figure 5 panel B is that of 98% of the
                members of that group.
              </li>
              <li>
                When grouping results by sequence clustering, the same proteins
                from different species may be grouped into different groups
                because of the level of their sequence identity. In this case,
                multiple groups of the search results may be assigned the same
                group name.
              </li>
            </ul>
            <li>
              <b>Group ID</b> is shown if the grouping criteria use either the
              PDB deposit Group ID (Panel A) or UniProt Accession (panel C). No
              group ID is shown for groups formed by sequence clusters because
              this identifier is subject to change over time.
            </li>
            <li>
              <b>Group size</b> is the number of entries in the group. The size
              is based on the archive content of the grouping option. For
              example, for grouping by UniProt Accession, the size of the group
              represents the total number of structures in the PDB archive that
              are mapped to that UniProt Accession. Note that any sequences that
              do not have UniProt assignment will not be a part of any groups
              based on UniProt Accession so may be left out of the grouping.
            </li>
            <li>
              Matched count refers to a subset of a whole group that matches
              your search query.
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                The total size and matched count can be the same if your search
                returns all the members of a given group. Otherwise, matched
                count will be smaller, indicating that some members from a whole
                group were filtered out by search.
              </li>
              <li>
                Clicking on the hyperlinked matched count allows exploration of
                the matched group members.
              </li>
            </ul>
            <li>
              An image next to the group summary depicts the structure of the
              best example. The stack icon in the upper left corner of the image
              helps to visually indicate a group.
            </li>
          </ul>
          <div></div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b3269c3931864b07285b/gsr-fig5.png"
                      data-toggle="lightbox"
                      data-title="Figure 5: Group views of a search result showing grouping by (A) PDB deposit Group ID; (B) sequence identity clusters; and (C) UniProt Accession. The Group name is shown in red outlined boxes, while the Group ID is shown in a blue outlined box."
                    >
                      <img
                        style={{ width: '80%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b3269c3931864b07285b/gsr-fig5.png"
                        alt="Figure 5: Group views of a search result showing grouping by (A) PDB deposit Group ID; (B) sequence identity clusters; and (C) UniProt Accession. The Group name is shown in red outlined boxes, while the Group ID is shown in a blue outlined box."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 5: Group views of a search result showing grouping by
                    (A) PDB deposit Group ID; (B) sequence identity clusters;
                    and (C) UniProt Accession. The Group name is shown in red
                    outlined boxes, while the Group ID is shown in a blue
                    outlined box.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            Hyperlinks from the group display can open
            <a
              href="/docs/grouping-structures/group-summary-pages"
              target="_blank"
            >
              Group Summary pages
            </a>
            to explore the sequences, structures, and other properties of group
            members.
          </p>
          <a className="content-anchor" id="the-representatives-view-"></a>
          <h4>The Representatives view</h4>
          <p>
            This view lists only representatives of the grouped search results.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The number of structures listed here is usually smaller than that
              of the complete search results.
            </li>
            <li>
              The criteria for selecting the representative for this grouped
              result may be changed using the options available in the pulldown
              menu in the center of the page. These options include:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Resolution: Best - the best or highest resolution structure
                (lowest number in the experimental structure resolution) for the
                refined structural model.
              </li>
              <li>
                Structures with no resolution have lower ranking compared to
                structures having assigned resolution values.
              </li>
              <li>
                Entry All Residues: Most - the largest total count of residues
                (e.g., amino acids) for all polymer entity instances reported
                per deposited structure model.
              </li>
              <li>
                Entry Modeled Residues: Most - the largest total count of
                residues (e.g., amino acids) with reported coordinate data for
                all polymer entity instances reported per deposited structure
                model.
              </li>
              <li>
                Entry Chain Count: Most - the largest total count of polymer
                entity instances per deposited structure model.
              </li>
              <li>Score: Best - the most relevant for a given search query.</li>
            </ul>
            <li>
              The entire list of representatives may be sorted by a number of
              criteria available from the pull down list on the right of the
              page. These include the same options available for sorting the
              full search results (see here).
            </li>
          </ul>
          <div></div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b3269c3931864b07285b/gsr-fig6.png"
                      data-toggle="lightbox"
                      data-title="Figure 6: Options for selecting representatives for the Representatives view and options for sorting groups of search results"
                    >
                      <img
                        style={{ width: '80%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b3269c3931864b07285b/gsr-fig6.png"
                        alt="Figure 6: Options for selecting representatives for the Representatives view and options for sorting groups of search results"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 6: Options for selecting representatives for the
                    Representatives view and options for sorting groups of
                    search results
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="example"></a>
          <h2>Example</h2>
          <a
            className="content-anchor"
            id="exploring-all-protein-targets-of-the-drug-imatinib"
          ></a>
          <h3>Exploring all protein targets of the drug, Imatinib:</h3>
          <p>
            The small molecule drug Imatinib or Gleevec (chemical component ID
            STI) is used for treating various types of cancer including chronic
            myeloid leukemia, acute lymphoblastic leukemia, aggressive systemic
            mastocytosis, and metastatic malignant gastrointestinal stromal
            tumors. Explore structures of STI-protein complexes in the PDB
            archive to explore its interactions with various target proteins.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Find all
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_nonpolymer_instance_feature_summary.comp_id%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22STI%22%7D%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_nonpolymer_instance_feature_summary.type%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22HAS_COVALENT_LINKAGE%22%7D%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_nonpolymer_instance_feature_summary.count%22%2C%22value%22%3A0%2C%22operator%22%3A%22equals%22%7D%7D%5D%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%220b1b58f5d67b7be763b0ba6ca4186d7e%22%7D%7D"
                target="_blank"
              >
                PDB structures that include STI
              </a>
              as a standalone ligand.
            </li>
            <li>
              Select Return type “Polymer Entities”, grouped by “Sequence
              Identity 95%” OR “Sequence Identity 30%” OR “UniProt Accession”,
              and displaying as “Groups” (Figure 7).
            </li>
          </ul>
          <div></div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b3269c3931864b07285b/gsr-fig7.png"
                      data-toggle="lightbox"
                      data-title="Figure 7: Options for grouping search results of the example query"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b3269c3931864b07285b/gsr-fig7.png"
                        alt="Figure 7: Options for grouping search results of the example query"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 7: Options for grouping search results of the example
                    query
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Sort the list of groups by the highest number of matches
              <a
                href="/docs/grouping-structures/group-summary-pages"
                target="_blank"
              ></a>
              and you will see that this drug binds to a variety of different
              kinases (see Figure 8). The Group Summary Pages for each of these
              groups may be opened to explore them further.
            </li>
          </ul>
          <div></div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b3269c3931864b07285b/gsr-fig8.png"
                      data-toggle="lightbox"
                      data-title="Figure 8: Groups of different kinases that bind to the drug Imatinib. "
                    >
                      <img
                        style={{ width: '80%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b3269c3931864b07285b/gsr-fig8.png"
                        alt="Figure 8: Groups of different kinases that bind to the drug Imatinib. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 8: Groups of different kinases that bind to the drug
                    Imatinib.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
