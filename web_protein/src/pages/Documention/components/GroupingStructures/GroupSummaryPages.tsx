export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Grouping Structures</h5>
        <h1>Group Summary Pages</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#what-is-a-group-summary-page">
              What is a Group Summary Page?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#why-use-the-group-summary-page">
              Why use the Group Summary Page?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#types-of-group-summary-pages">
              Types of Group Summary Pages
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#accessing-group-summary-pages">
              Accessing Group Summary Pages
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#exploring-group-summary-pages">
              Exploring Group Summary Pages
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#structure-groups">Structure Groups</a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □
            <a href="#summary-page-grouped-by-pdb-deposit-group-id-">
              Summary page grouped by PDB Deposit Group ID
            </a>
          </div>
          <div style={{ paddingLeft: '100px' }}>
            ◆ <a href="#what-is-on-the-page">What is on the page?</a>
          </div>
          <div style={{ paddingLeft: '100px' }}>
            ◆ <a href="#navigating-the-page">Navigating the page</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#polymer-entity-groups">Polymer Entity Groups</a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □
            <a href="#summary-page-grouped-by-uniprot-accession">
              Summary page grouped by UniProt Accession
            </a>
          </div>
          <div style={{ paddingLeft: '100px' }}>
            ◆
            <a href="#what-is-on-the-group-summary-tab">
              What is on the Group Summary Tab?
            </a>
          </div>
          <div style={{ paddingLeft: '100px' }}>
            ◆ <a href="#navigating-the-page">Navigating the page</a>
          </div>
          <div style={{ paddingLeft: '100px' }}>
            ◆
            <a href="#what-is-on-the-group-sequence-tab">
              What is on the Group Sequence Tab?
            </a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □
            <a href="#summary-page-grouped-by-sequence-identity-clusters">
              Summary page grouped by Sequence Identity Clusters
            </a>
          </div>
          <div style={{ paddingLeft: '100px' }}>
            ◆
            <a href="#what-is-on-the-sequence-cluster-group-summary-page">
              What is on the Sequence Cluster Group Summary Page?
            </a>
          </div>
          <div style={{ paddingLeft: '100px' }}>
            ◆ <a href="#navigating-the-page">Navigating the page</a>
          </div>
          <div style={{ paddingLeft: '100px' }}>
            ◆
            <a href="#what-is-on-the-group-sequence-tab">
              What is on the Group Sequence Tab?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#example-to-explore">Example to explore</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#references">References</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <p>
            In the Protein Data Bank (PDB), a large number of proteins have many
            structural entries in the archive. This redundancy of biomolecular
            structures in the archive provides opportunities to explore the
            range of biological properties, interactions, and functions of these
            proteins. In most cases these structures provide snap-shots of the
            protein in a variety of contexts - e.g., in different pH,
            temperature, or other environments and in the presence of one or
            more ions, ligands, cofactors, substrates, and/or other biomolecules
            (proteins, peptides, nucleic acids, carbohydrates, lipids). Grouping
            structures in different ways can allow users to appreciate the range
            of interactions and functions of a specific biological
            macromolecule. Several approaches have been used to organize and
            group polymer sequences, structures, and assemblies in the PDB
            archive to simplify and/or expedite analysis, and examine ranges,
            patterns, and trends in structure-function relationships.
          </p>
          <a className="content-anchor" id="what-is-a-group-summary-page"></a>
          <h3>What is a Group Summary Page?</h3>
          <p>
            The Group Summary Pages (GSPs) provide overviews of key features,
            properties, sequence alignments, and annotations of any
            predetermined or custom group of structures. This is in contrast to
            the
            <a
              href="/docs/exploring-a-3d-structure/structure-summary-page"
              target="_blank"
            >
              Structure Summary Pages
            </a>
            (SSPs) that provide a quick overview of key details of a single
            structure in the PDB. Each group summary page also provides access
            to amino acid sequence information of all members of the group,
            ranges of amino acid sequences that are included in each member of
            the group, as well as structural and functional annotations of the
            sequence drawn from a variety of experimental and bioinformatics
            data resources.
          </p>
          <a className="content-anchor" id="why-use-the-group-summary-page"></a>
          <h3>Why use the Group Summary Page?</h3>
          <p>
            The Group Summary Pages provides easy access to groups of structures
            in the archive (organized by specific attributes and features) to
            explore patterns, trends, and ranges of conformational flexibility
            of all or parts of the proteins and relationships that may not be
            obvious in structures coming from individual experiments. This page
            also provides the opportunity to further refine group membership
            based on a variety of criteria including experimental features,
            source organism, protein domain classification, and protein
            function.
          </p>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a className="content-anchor" id="types-of-group-summary-pages"></a>
          <h3>Types of Group Summary Pages</h3>
          <p>
            Group summary pages are available for predetermined groups, and may
            be created for custom groups of structures and/or sequences in the
            PDB archive.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Predetermined groups in the PDB archive include groups of
              structures that share a specific identifier or property. For
              example:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                PDB Deposit Group ID based groups of structure (e.g.,
                G_1002057). Membership in these groups is determined by the
                authors submitting these structures and frequently represents a
                single protein target bound to a series of ligands, drugs,
                and/or drug candidates. Other criteria may also be used for
                deciding on group membership.
              </li>
              <li>
                UniProt based groups including all polymer sequences in the PDB
                archive with the same UniProt Accession (e.g., P07550)
              </li>
              <li>
                Sequence cluster based groups including all polymer sequences in
                the PDB archive that belong to a specific sequence cluster.
                These groups are computed following each weekly update of the
                archive and may change from week to week. Learn more about
                sequence clusters in the PDB.
              </li>
            </ul>
            <li>
              Custom groups can be formed by combining specific search/browse
              criteria with relevant predetermined groups. For example:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Grouping search results of any simple or complex query or browse
                exploration of the archive may be grouped by structures (using
                PDB Deposit Group IDs) or sequences (using UniProt Accession or
                sequence clusters).
              </li>
            </ul>
          </ul>
          <div></div>
          <a className="content-anchor" id="accessing-group-summary-pages"></a>
          <h3>Accessing Group Summary Pages</h3>
          <p>
            The group summary pages can be accessed in a few different ways:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>By grouping Search/Browse Results </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                The results returned from a simple or composite search or browse
                explorations may either be listed completely or grouped by
                specific criteria and either only representatives are shown or
                lists of groups are shown with links to Custom Group Summary
                pages. Learn
                <a
                  href="/docs/grouping-structures/grouping-search-results"
                  target="_blank"
                >
                  more about options for viewing and grouping search results
                </a>
                .
              </li>
            </ul>
            <li>From Structure Summary pages </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                You can explore the group members of a whole group using links
                placed on the Structure Summary page. Links to predetermined
                groups that are displayed on the page and marked by a box
                including an icon with a stack of papers (indicating a group of
                structures). Clicking on these icons (see Figures 1 and 2) will
                open the corresponding Group Summary pages
              </li>
            </ul>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig1.png"
                      data-toggle="lightbox"
                      data-title="Figure 1: Click to view group of structures with a specific PDB Deposit Group ID, as marked in the header section of the Structure Summary page."
                    >
                      <img
                        style={{ width: '100%', border: '1px solid #ccc' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig1.png"
                        alt="Figure 1: Click to view group of structures with a specific PDB Deposit Group ID, as marked in the header section of the Structure Summary page."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 1: Click to view group of structures with a specific
                    PDB Deposit Group ID, as marked in the header section of the
                    Structure Summary page.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig2.png"
                      data-toggle="lightbox"
                      data-title="Figure 2: In the Macromolecules section of the Structure Summary page (e.g., PDB ID 5qif), click to view groups with a specific UniProt Accessions for protein macromolecule entities, and links to pre-computed sequence clusters (e.g., at 30%, 50%, 70%, 90%, 95%, and 100%) that include the specific PDB entry. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig2.png"
                        alt="Figure 2: In the Macromolecules section of the Structure Summary page (e.g., PDB ID 5qif), click to view groups with a specific UniProt Accessions for protein macromolecule entities, and links to pre-computed sequence clusters (e.g., at 30%, 50%, 70%, 90%, 95%, and 100%) that include the specific PDB entry. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 2: In the Macromolecules section of the Structure
                    Summary page (e.g., PDB ID 5qif), click to view groups with
                    a specific UniProt Accessions for protein macromolecule
                    entities, and links to pre-computed sequence clusters (e.g.,
                    at 30%, 50%, 70%, 90%, 95%, and 100%) that include the
                    specific PDB entry.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>From Non-redundant Protein Sequence Statistics tables </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Search capabilities are available from the tabular view for
                statistics that summarize
                <a href="/stats/nr/cluster-ids-30" target="_blank">
                  unique protein clusters in the PDB archive
                </a>
                and
                <a href="/stats/growth/nr/cluster-ids-30" target="_blank">
                  growth in these clusters
                </a>
                .
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  Select the sequence identity cluster of interest and option to
                  view annual or cumulative growth in the corresponding level of
                  sequence identity.
                </li>
                <li>
                  Click on the statistics table at the bottom of the page to
                  view the corresponding grouped polymer entities.
                </li>
              </ul>
              <li>
                New statistics are added to summarize
                <a href="/stats/nr/matching-uniprot" target="_blank">
                  unique UniProtKB entries with known 3D structure
                </a>
                from the PDB archive and
                <a href="/stats/growth/nr/matching-uniprot" target="_blank">
                  growth in UniProtKB entries
                </a>
                .
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  Select the year of interest to view annual or cumulative
                  growth of structures of polymer entities that map to a known
                  UniProt Accession.
                </li>
                <li>
                  Click on the statistics table at the bottom of the page to
                  view the corresponding grouped polymer entities.
                </li>
              </ul>
            </ul>
          </ul>
          <div></div>
          <a className="content-anchor" id="exploring-group-summary-pages"></a>
          <h3>Exploring Group Summary Pages</h3>
          <p>
            Currently available Group Summary Pages are of the following type:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Structure Groups</b>, which presents summaries of the contents
              and properties of the structures along with a few functional
              annotations mapped to these structures.
            </li>
            <li>
              <b>Polymer entity Groups</b>, which present summaries of the
              contents and properties of the structure, a few functional
              annotations mapped to these polymers, and a variety of views of
              multiple sequence alignments of polymer sequences in the groups.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="structure-groups"></a>
          <h4>Structure Groups</h4>
          <a
            className="content-anchor"
            id="summary-page-grouped-by-pdb-deposit-group-id-"
          ></a>
          <h5>Summary page grouped by PDB Deposit Group ID</h5>
          <p>
            This type of Group Summary Page summarizes information about
            structures entering the PDB archive via the GroupDep system and are
            assigned PDB Deposit Group Dep IDs. Typically members of these
            groups are the same protein, with different bound ligands. <br />
            <br />
            The contents and navigation of the Structure Group Summary page is
            explained with an example - a large-scale fragment screening against
            the SARS-CoV-2 main protease, one of the proteases essential for
            viral replication - PDB Deposit Group ID
            <a href="/groups/summary/entry/G_1002151" target="_blank">
              G_1002151
            </a>
            .
          </p>
          <a className="content-anchor" id="what-is-on-the-page"></a>
          <h6>What is on the page?</h6>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The top of the page (Figure 3) displays information about the
              group, a description of what is included in the group (provided by
              the authors), a place to browse through the images of structures
              in the group (on the left), and links to explore members in the
              group.
            </li>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig3.png"
                      data-toggle="lightbox"
                      data-title="Figure 3: Top portion of the Group Summary page based on a PDB Deposition Group ID showing grouping criteria, description of what is included in the group, and links to explore group members. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig3.png"
                        alt="Figure 3: Top portion of the Group Summary page based on a PDB Deposition Group ID showing grouping criteria, description of what is included in the group, and links to explore group members. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 3: Top portion of the Group Summary page based on a
                    PDB Deposition Group ID showing grouping criteria,
                    description of what is included in the group, and links to
                    explore group members.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Scroll down on the page to see a variety of other information,
              including:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Experimental features of structures in this group are summarized
                by a histogram showing method of structure determination and
                where appropriate, resolution of structures in the group.
              </li>
              <li>
                Properties and annotations about the structures in this group
                are summarized in a series of histograms showing the
                distribution of source organism, key domains, and functional
                annotations for members of the group.
              </li>
              <li>
                Small molecules associated with members of the group are listed
                as two histograms (see Figure 4) - one showing all the small
                molecules in these structures (including solvent molecules,
                buffer components, crystallization agents etc.) and another
                showing only ligands of interest. Learn
                <a
                  href="/docs/general-help/ligand-structure-quality-in-pdb-structures"
                  target="_blank"
                >
                  more about Ligands of Interest
                </a>
                here.
              </li>
            </ul>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig4.png"
                      data-toggle="lightbox"
                      data-title="Figure 4: Group Summary page bottom showing histograms of number of entries with various small molecules (including Ligands of Interest). "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig4.png"
                        alt="Figure 4: Group Summary page bottom showing histograms of number of entries with various small molecules (including Ligands of Interest). "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 4: Group Summary page bottom showing histograms of
                    number of entries with various small molecules (including
                    Ligands of Interest).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="navigating-the-page"></a>
          <h6>Navigating the page</h6>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              By default, upto 10 rows of functional annotations and 20 rows of
              ligands are shown on the Group summary page. Additional
              annotations/ligands are listed below the histogram. Clicking on
              the + sign can add rows to the histogram and the - sign can be
              used to show fewer rows till the default limits are reached (see
              Figure 4).
            </li>
            <li>
              The histograms displayed on the Group Summary page are interactive
              and can be used to refine membership of the group.
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Clicking on a single blue bar in the histogram will refine the
                Group Summary Page. Members that do not match the criteria
                specified by this bar will be filtered out from this and all
                other histograms on the page, and shown in gray.
              </li>
              <li>
                For example, clicking on the ligand of interest with chemical
                component ID 6SU in the above small molecule histogram limits
                the group to include only (Figure 5).
              </li>
              <li>
                Clicking on a blue bar while holding the “shift” key will invoke
                search, showing all group members in the PDB archive that match
                the current condition. So clicking on the 6SU blue bar will
                yield the search result shown in Figure 6.
              </li>
            </ul>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig5.png"
                      data-toggle="lightbox"
                      data-title="Figure 5: Updated histograms on Group Summary Page. Click on a blue bar to launch a search."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig5.png"
                        alt="Figure 5: Updated histograms on Group Summary Page. Click on a blue bar to launch a search."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 5: Updated histograms on Group Summary Page. Click on
                    a blue bar to launch a search.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig6.png"
                      data-toggle="lightbox"
                      data-title="Figure 6: Results of Search launched by clicking on a blue bar shown in Figure 5."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig6.png"
                        alt="Figure 6: Results of Search launched by clicking on a blue bar shown in Figure 5."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 6: Results of Search launched by clicking on a blue
                    bar shown in Figure 5.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="polymer-entity-groups"></a>
          <h4>Polymer Entity Groups</h4>
          <p>
            This type of Group Summary Page summarizes information about polymer
            entities in the group and also presents a <i>Group Sequence</i> view
            for exploration of sequence alignments, positional features of the
            group members, and locations of ligand interactions, where
            appropriate.
          </p>
          <a
            className="content-anchor"
            id="summary-page-grouped-by-uniprot-accession"
          ></a>
          <h5>Summary page grouped by UniProt Accession</h5>
          <p>
            A majority of PDB structures contain proteins whose sequences and
            annotations are archived in UniProtKB/SwissProt. Often, PDB
            structures include partial sequences, stably folded domains, and may
            include modifications such as engineered mutations or sequence
            artifacts to facilitate expression or crystallization. The UniProt
            Group Summary Page provides a comprehensive overview on the
            relationship between the parts of protein sequence included in the
            PDB and UniProt data. This can be useful in assessing the
            availability and extent of 3D structural coverage of the protein of
            interest and identifying modifications in the sequence.
            <br />
            <br />
            The contents and navigation of the UniProt Group Summary page is
            explained with an example - all
            <a href="/groups/summary/polymer_entity/P0DTD1" target="_blank">
              polymer entities that map to UniProtKB accession P0DTD1
            </a>
            - the Replicase polyprotein 1ab.
          </p>
          <a
            className="content-anchor"
            id="what-is-on-the-group-summary-tab"
          ></a>
          <h6>What is on the Group Summary Tab?</h6>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The top of the page (Figure 7) displays information about the
              Group - the UniProt Accession, protein name and description,
              options to browse through the images of structures in the group
              (on the left), and links to explore members in the group in one of
              the following ways:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                View the sequence and structure alignment of group members
                (1D-3D Alignments). Learn more about this feature.
              </li>
              <li>View the structure summary page for a selected structure</li>
              <li>View the 3D structure of the selected structure in Mol*.</li>
            </ul>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/fig7-group-summary.png"
                      data-toggle="lightbox"
                      data-title="Figure 7: Top portion of the Group Summary page based on UniProt Accession showing grouping criteria, description of what is included in the group, and links to explore group members individually and also align and compare group members.
"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/fig7-group-summary.png"
                        alt="Figure 7: Top portion of the Group Summary page based on UniProt Accession showing grouping criteria, description of what is included in the group, and links to explore group members individually and also align and compare group members.
"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 7: Top portion of the Group Summary page based on
                    UniProt Accession showing grouping criteria, description of
                    what is included in the group, and links to explore group
                    members individually and also align and compare group
                    members.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Scroll down on the page to see a variety of other information,
              including:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                A histogram showing the release dates of structures with member
                polymer entities.
              </li>
              <li>
                Experimental features of structures in this group are summarized
                by a histogram showing method of structure determination and
                where appropriate, resolution of structures in the group.
              </li>
              <li>
                Properties and annotations about the structures in this group
                are summarized in a series of histograms showing the
                distribution of source organism, key domains, and functional
                annotations for members of the group.
              </li>
            </ul>
          </ul>
          <div></div>
          <a className="content-anchor" id="navigating-the-page"></a>
          <h6>Navigating the page</h6>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The histograms displayed on the Group Summary page are interactive
              and can be used to refine membership of the group
            </li>
            <li>
              Polymer entities with specific features can be selected by
              clicking on the corresponding histogram. All other members of the
              group are filtered out and shown in gray.
            </li>
            <li>
              The 1D-3D Alignment link (below the structure image panel on the
              page) shows sequence and structure alignment of members belonging
              to the UniProt group. Learn
              <a
                href="/docs/grouping-structures/groups-1d-3d-alignment"
                target="_blank"
              >
                more about the 1D-3D alignment
              </a>
              .
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="what-is-on-the-group-sequence-tab"
          ></a>
          <h6>What is on the Group Sequence Tab?</h6>
          <p>
            The Group Sequence page shows a summary of the contents of the group
            and type of grouping. If the grouping was done by UniProt
            identifiers, an additional link to view the 1D-3D alignment of the
            group members is listed here. Learn
            <a
              href="/docs/grouping-structures/groups-1d-3d-alignment"
              target="_blank"
            >
              more about the 1D-3D alignment
            </a>
            .
          </p>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/fig8-group-summary.png"
                      data-toggle="lightbox"
                      data-title="Figure 8: Summary of Grouping at the top of the Sequence Tab of the Group summary page for a case where the polymer entity grouping was done by A. sequence identity, and B. UniProt accession."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/fig8-group-summary.png"
                        alt="Figure 8: Summary of Grouping at the top of the Sequence Tab of the Group summary page for a case where the polymer entity grouping was done by A. sequence identity, and B. UniProt accession."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 8: Summary of Grouping at the top of the Sequence Tab
                    of the Group summary page for a case where the polymer
                    entity grouping was done by A. sequence identity, and B.
                    UniProt accession.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            Following the summary, there are 3 tabs with multiple sequence
            alignment of all members of the group, mapping of structural
            features from various resources on the UniProt sequence, and a
            mapping of the binding sites on the UniProt sequence.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/fig9-group-summary.png"
                    data-toggle="lightbox"
                    data-title="Figure 9: Tabs to explore the group members in the Sequence Tab of the Group Summary page."
                  >
                    <img
                      style={{ width: '100%', border: '1px solid #ccc' }}
                      className="img-responsive content-img-border"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/fig9-group-summary.png"
                      alt="Figure 9: Tabs to explore the group members in the Sequence Tab of the Group Summary page."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 9: Tabs to explore the group members in the Sequence
                  Tab of the Group Summary page.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The <i>Alignments</i> tab
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                This tab depicts the sequence information from the UniProtKB and
                3D structures from the PDB (Figure 10).
              </li>
              <li>
                Tracks grouped by the orange vertical bar describe regions or
                sites of interest in the sequence annotated by UniProt.
              </li>
              <li>
                PDB entity tracks, color-coded by the blue vertical bar, show
                structurally determined regions of PDB sequences and how these
                regions map to the UniProt sequence. Note that polymer entities
                present in different PDB structures map to different regions of
                the UniProt polyprotein sequence.
              </li>
            </ul>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig8.png"
                      data-toggle="lightbox"
                      data-title="Figure 10: Sequence Alignment of polymer entities in specific PDB entries, mapped to a specific UniProt sequence, and showing functional regions and annotations.  "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig8.png"
                        alt="Figure 10: Sequence Alignment of polymer entities in specific PDB entries, mapped to a specific UniProt sequence, and showing functional regions and annotations.  "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 10: Sequence Alignment of polymer entities in
                    specific PDB entries, mapped to a specific UniProt sequence,
                    and showing functional regions and annotations.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The <i>Structural Features</i> Tab
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                This tab summarizes positional annotations for structural
                features such as structural domains from CATH, SCOP and PFAM
                (Figure 11).
              </li>
              <li>
                Tracks grouped by the blue vertical bar present secondary
                structural features derived from the PDB entries, while those
                grouped by an orange vertical bar represent annotations from
                non-PDB data resources.
              </li>
            </ul>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig9.png"
                      data-toggle="lightbox"
                      data-title="Figure 11: Annotations of the UniProt sequence based on PDB and other data resources. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig9.png"
                        alt="Figure 11: Annotations of the UniProt sequence based on PDB and other data resources. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 11: Annotations of the UniProt sequence based on PDB
                    and other data resources.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The <i>Binding Sites </i>tab
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                This tab summarizes the location specific ligand binding to the
                protein sequence (Figure 12).
              </li>
              <li>
                The Global Bindings track displays the aggregation of all
                protein-ligand binding sites for all group members.
              </li>
            </ul>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig10.png"
                      data-toggle="lightbox"
                      data-title="Figure 12: Individual and Global ligands binding sites mapped to the UniProt sequence. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig10.png"
                        alt="Figure 12: Individual and Global ligands binding sites mapped to the UniProt sequence. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 12: Individual and Global ligands binding sites
                    mapped to the UniProt sequence.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a
            className="content-anchor"
            id="summary-page-grouped-by-sequence-identity-clusters"
          ></a>
          <h5>Summary page grouped by Sequence Identity Clusters</h5>
          <p>
            The redundancy in PDB can help with ex
            <a
              href="/docs/grouping-structures/sequence-based-clustering"
              target="_blank"
            ></a>
            ploring the functions of a protein in different contexts. Each week
            all protein sequences in the PDB archive are grouped at different
            levels of sequence identity (e.g., 100%, 95%, 90%, 70%, 50% and 30%)
            to yield sequence clusters. Learn more about Sequence Clusters here.
            The <i>Sequence Cluster Group Summary Page</i> provides an overview
            of closely related sequences in the PDB. Exploring these groups of
            structures can inform users about the structure-functional range of
            proteins in these groups. <br />
            <br />
            The contents and navigation of the Sequence Cluster Group Summary
            page is explained with an example of Ephrin type-A receptor 2 (PDB
            ID
            <a href="/structure/1MQB" target="_blank">
              1mqb
            </a>
            ) and selecting the 50% sequence cluster.
          </p>
          <a
            className="content-anchor"
            id="what-is-on-the-sequence-cluster-group-summary-page"
          ></a>
          <h6>What is on the Sequence Cluster Group Summary Page?</h6>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The top of the page (Figure 13) displays information about the
              group criteria, list of group members, options to browse through
              the images of structures in the group (on the left), and links to
              explore members in the group.
            </li>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig11.png"
                      data-toggle="lightbox"
                      data-title="Figure 13: Top portion of the Group Summary page based on sequence clusters showing grouping criteria, list of group members, and links to explore them."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig11.png"
                        alt="Figure 13: Top portion of the Group Summary page based on sequence clusters showing grouping criteria, list of group members, and links to explore them."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 13: Top portion of the Group Summary page based on
                    sequence clusters showing grouping criteria, list of group
                    members, and links to explore them.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Scroll down on the page to see a variety of other information,
              including:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                A histogram showing the release dates of structures with member
                polymer entities.
              </li>
              <li>
                Experimental features of structures in this group are summarized
                by a histogram showing method of structure determination and
                where appropriate, resolution of structures in the group.
              </li>
              <li>
                Properties and annotations about the structures in this group
                are summarized in a series of histograms showing the
                distribution of source organism, key domains, and functional
                annotations for members of the group.
              </li>
            </ul>
          </ul>
          <div></div>
          <a className="content-anchor" id="navigating-the-page"></a>
          <h6>Navigating the page</h6>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The histograms displayed on the Group Summary page are interactive
              and can be used to refine membership of the group
            </li>
            <li>
              Polymer entities with specific features can be selected by
              clicking on the corresponding histogram. All other members of the
              group are filtered out and shown in gray.
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="what-is-on-the-group-sequence-tab"
          ></a>
          <h6>What is on the Group Sequence Tab?</h6>
          <p>
            The Group Sequence page shows 3 tabs with multiple sequence
            alignment of all members of the group, mapping of structural
            features from various resources on the UniProt sequence, and a
            mapping of the binding sites on the UniProt sequence.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The <i>Alignments</i> tab
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                This tab depicts sequence identity groups (Figure 14) and
                displays sequence alignment for group members using the
                interactive Protein Feature View tool.
              </li>
            </ul>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig12.png"
                      data-toggle="lightbox"
                      data-title="Figure 14: Multiple Sequence Alignment of polymer entities mapped to the consensus sequence of the sequence cluster. A. denotes the consensus sequence; B. presents the conservation of amino acid sequence at any given position; and C. shows the occurrences of all amino acids in the aligned position and their relative frequencies. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig12.png"
                        alt="Figure 14: Multiple Sequence Alignment of polymer entities mapped to the consensus sequence of the sequence cluster. A. denotes the consensus sequence; B. presents the conservation of amino acid sequence at any given position; and C. shows the occurrences of all amino acids in the aligned position and their relative frequencies. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 14: Multiple Sequence Alignment of polymer entities
                    mapped to the consensus sequence of the sequence cluster. A.
                    denotes the consensus sequence; B. presents the conservation
                    of amino acid sequence at any given position; and C. shows
                    the occurrences of all amino acids in the aligned position
                    and their relative frequencies.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The multiple sequence alignment is generated using Clustal Omega,
              a general purpose multiple sequence alignment program (
              <a href="https://doi.org/10.1002/pro.3290" target="_blank">
                Seivers and Higgings 2017
              </a>
              ). The alignment view initially captures the full length of the
              protein sequence. When you sufficiently zoom in, you see the
              polymer composition of aligned regions. A dash (-) symbol
              represents a gap in the alignment.
            </li>
            <li>
              The Consensus Sequence is shown in the first row of the alignment
              and shows the most frequent residues found at each position in the
              sequence alignment. It serves as a simplified representation for a
              set of sequences.
            </li>
            <li>
              The Conservation row highlights highly conserved and less
              conserved amino acid positions based on the relative frequency of
              occurring residues. In protein families highly conserved residues
              are more likely to have a functional role. This track has a
              frequency-based coloring scheme going from dark to light blue,
              with darker blue color representing higher conservation.
            </li>
            <li>
              Even in very close homologous, sequence substitutions can occur at
              any given alignment position. Point the mouse cursor to any
              position on the Consensus Sequence track. A tooltip will show the
              occurrences of all amino acids in the aligned position and their
              relative frequencies.
            </li>
            <li>
              Note: Multiple sequence alignments are precomputed for full
              groups. When a group subset is displayed, the original full group
              alignment is filtered and only the subset sequences are included.
              If a gap was present in the original alignment it will remain
              present in the subgroup.
            </li>
          </ul>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The <i>Structural Features</i> tab
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                This tab summarizes positional annotations for structural
                features on the consensus sequence (Figure 15), such as
                structural domains or secondary structure assignments.
              </li>
              <li>
                Color gradient indicates the frequency with which a given
                feature occurs at a given position. More intense colors indicate
                a higher frequency. Hover over any track at any position to see
                how often this feature occurs.
              </li>
            </ul>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fiig13.png"
                      data-toggle="lightbox"
                      data-title="Figure 15: Annotations derived from various sources on the consensus sequence of the cluster."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fiig13.png"
                        alt="Figure 15: Annotations derived from various sources on the consensus sequence of the cluster."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 15: Annotations derived from various sources on the
                    consensus sequence of the cluster.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The <i>Binding Sites</i> tab
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                This tab collects positional features for residues that interact
                with ligands.
              </li>
              <li>
                The <b>Global Bindings track </b>displays the aggregation of all
                protein-ligand binding sites for all group members. Each
                position in the alignment displays the number of times an
                aligned residue has been observed to interact with a ligand
                (Figure 16). The remaining tracks show the protein-ligand
                binding site frequencies for specific compounds. Thus, each
                position displays the fraction between the observed
                residue-ligand interactions and the total number of interactions
                between the ligand and group members.
              </li>
            </ul>
          </ul>
          <div></div>
          <div>
            <table style={{ width: '80%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig14.png"
                      data-toggle="lightbox"
                      data-title="Figure 16: Individual and Global ligands binding sites mapped to the cluster consensus sequence. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6256b35e9c3931864b07285c/gs-fig14.png"
                        alt="Figure 16: Individual and Global ligands binding sites mapped to the cluster consensus sequence. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 16: Individual and Global ligands binding sites
                    mapped to the cluster consensus sequence.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="example-to-explore"></a>
          <h2>Example to explore</h2>
          <p>
            Query the PDB archive for all
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_accession%22%2C%22operator%22%3A%22in%22%2C%22value%22%3A%5B%22P0DTD1%22%5D%7D%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_polymer_entity_container_identifiers.reference_sequence_identifiers.database_name%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22UniProt%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22nested-attribute%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%2287c745a7f5150f31adce73c4ae62545d%22%7D%7D"
              target="_blank"
            >
              polymer entities that map to UniProtKB Accession P0DTD1
            </a>
            (Replicase polyprotein 1ab polyprotein in SARS-CoV-2). Change the
            Return type to Polymer Entities, group the results at 30% sequence
            identity cluster and examine the resulting groups.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>What do these groups represent? </li>
            <li>What can you learn about these groups of polymer entities?</li>
          </ul>
          <div></div>
          <a className="content-anchor" id="references"></a>
          <h2>References</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Sievers F, Higgins DG. Clustal Omega for making accurate
              alignments of many protein sequences. Protein Sci.
              2018;27(1):135-145. doi:
              <a href="https://doi.org/10.1002/pro.3290" target="_blank">
                10.1002/pro.3290
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
        <div>Last updated: 11/3/2022</div>
      </div>
    </div>
  );
};
