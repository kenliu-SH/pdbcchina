export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Browse Options</h5>
        <h1>MeSH</h1>
        <div>
          <a className="content-anchor" id="what-is-the-mesh-browser"></a>
          <h4>What is the MeSH Browser?</h4>
          <p>
            Medical Subject Headings (
            <a
              href="https://www.nlm.nih.gov/mesh/meshhome.html"
              target="_blank"
            >
              MeSH
            </a>
            ) is a comprehensive list of controlled vocabulary used to
            classNameify and index publications (journal articles and text
            books) in the National Library of Medicine (NLM) and to facilitate
            searching. They include descriptor hierarchies, descriptions,
            sub-headings, and supplementary concept records. Every article,
            textbook, included in MEDLINE/PubMed is indexed with about 10–15
            MeSH terms, and some of these terms are marked with an asterisk to
            indicate the article's main topics. <br />
            <br />
            The majority of PDB structures have a primary citation associated to
            it and is listed on the Structure Summary page. The citation usually
            includes an abstract and related keywords (or MeSH terms). The MeSH
            terms for the primary citation, specified in PubMed, are
            automatically mapped to PDB entries and are available for searching
            the PDB archive.
            <br />
            <br />
            Note that only PDB structures that are connected to PubMed article
            and have associated MeSH terms for mapping are included in this
            browser tree.
          </p>
          <a className="content-anchor" id="why-use-the-mesh-browser"></a>
          <h4>Why use the MeSH Browser?</h4>
          <p>
            Browsing through the MeSH browser can help identify structures that
            include the specific MeSH term(s) of interest as a keyword. Using
            these controlled vocabulary you can identify protein structures (PDB
            entries) that are related to the a medical subject but may not
            include the same or related polymers and/or small molecule ligands.
          </p>
          <a className="content-anchor" id="how-to-use-the-mesh-browser"></a>
          <h4>How to use the MeSH Browser?</h4>
          <p>
            Users can browse the tree, or type in an a specific MeSH descriptor
            in the search box at the top of the page and then selecting the MeSH
            term of interest from the available autocomplete suggestions. Every
            descriptor also carries a unique alphanumerical ID. A given
            descriptor may appear at several locations in the hierarchical tree.
            The tree locations carry systematic labels known as tree numbers,
            and consequently one descriptor can carry several tree numbers. If
            specific MeSH IDs are available, they may also typed in the search
            box.
            <br />
            <br />
            After locating the MeSH term/descriptor/subgroup of interest in the
            browser tree, view the number of PDB structures listed in this group
            (listed in square brackets). Clicking on the numbers listed next to
            the MeSH term will launch a search for all structures in the PDB
            that are associated with that term.
          </p>
          <a className="content-anchor" id="example"></a>
          <h4>Example</h4>
          <p>
            A search for structures related to "Diabetes Mellitus" in the PDB
            can be done as follows:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Browse the tree for “Diseases” &gt;&gt; “Endocrine System
              Diseases” &gt;&gt; “Diabetes Mellitus” OR
            </li>
            <li>
              Type the MeSH term "Diabetes Mellitus" in the top search box and
              from the options provided select either
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                "Diabetes Mellitus (C18.452.394.750)" - to view structures
                classNameified in the sub-group of "Nutritional and Metabolic
                Disease" or
              </li>
              <li>
                "Diabetes Mellitus (C19.246) - to view structures classNameified
                as a subgroup of Endocrine System Diseases
              </li>
            </ul>
            <li>
              Type the MeSH IDs of interest (e.g., C19.246). The corresponding
              MeSH descriptor and sub-groups (if any) of the MeSH ID listed will
              show up in the autocomplete suggestions. Select the MeSH term of
              interest from the listed options.
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
        <div>Last updated: 8/20/2021</div>
      </div>
    </div>
  );
};
