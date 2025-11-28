export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse</h5>
        <h1>Basic Search</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#overview">Overview</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#what-is-basic-search">What is Basic Search?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#why-use-basic-search">Why use Basic Search?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#basic-search-options-infographic">
              Basic Search Options (Infographic)
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#interface-description">Interface Description</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#search-results">Search results</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#relevancy-scoring">Relevancy Scoring</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#examples">Examples</a>
          </div>
          <hr />
          <p>
            Video:
            <a href="https://youtu.be/q-zGYdRG_z4" target="_blank">
              Simple Searches for Experimental Structures and Computed Structure
              Models (CSMs)
            </a>
          </p>
          <hr />
          <a className="content-anchor" id="overview"></a>
          <h2>Overview</h2>
          <a className="content-anchor" id="what-is-basic-search"></a>
          <h3>What is Basic Search?</h3>
          <p>
            Located in the top bar of the website, this search option has two
            modes of operation. In the "3D Structure" mode it can be used to
            searches for molecular structures (both experimental structures and
            computed structure models or CSMs), while in the "Documentation"
            mode it can be used to search the website for textual description of
            terms, instructions for using specific features and functions
            available from the website, educational materials or news
            announcements.
          </p>
          <a className="content-anchor" id="why-use-basic-search"></a>
          <h3>Why use Basic Search?</h3>
          <p>
            Use the default “3D Structures” mode to quickly launch a text-based
            search for a biomolecular structure, ligand, or assembly or a
            sequence based search and find matches in either PDB entries and/or
            CSMs. Basic search may be run on both experimental structures and
            CSMs (when the “Include CSM” toggle switch is turned on). Searches
            may be launched with
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              name of the protein, gene, author, ligands, keywords etc. that are
              present in the structure.
            </li>
            <li>
              specific identifiers related to the structure of interest (e.g.,
              PDB IDs), gene/protein sequences (i.e., GenBank and UniProt IDs)
              and ligands (e.g., chemical component or BIRD molecule IDs). Note:
              When the “Include CSM” toggle switch is 'on' CSM identifiers
              (e.g., AlphaFold IDs, Model Archive IDs) available from the
              literature or other public data resources may also be used here.
            </li>
            <li>
              a polymer sequence that has &gt;25 building blocks (e.g., amino
              acids, nucleotides) and is submitted in FASTA format
            </li>
          </ul>
          <div></div>
          <p>
            When the “Documentation” mode is selected from the pull-down menu
            options on the left of the text box before typing in the query, you
            can search for a term/phrase throughout all the website related
            pages including educational materials, tutorials and more.
          </p>
          <a
            className="content-anchor"
            id="basic-search-options-infographic"
          ></a>
          <h3>Basic Search Options (Infographic)</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <a href="https://cdn.rcsb.org/rcsb-pdb/search/SearchnBrowse2go.pdf#page=2">
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive content-img-border"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/5ffde6ee3a38a923c3516cf2/searchbrowse2-2.png"
                      alt="Click on the image to access the full infographic ..."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Click on the image to access the full infographic ...
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a className="content-anchor" id="interface-description"></a>
          <h3>Interface Description</h3>
          <p>
            From any page on the site, a Basic Search can be run by entering a
            search term or sequence in the search box in the Top Bar. First
            select the type of search you wish to perform from the pulldown menu
            (Figure 1). Use the:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>3D Structure mode to search for structures and related data</li>
            <li>
              Documentation mode to search for website related pages with this
              word/phrase.
            </li>
          </ul>
          <div></div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/5ffde6ee3a38a923c3516cf2/bs-f1-revised-20220922.png"
                      data-toggle="lightbox"
                      data-title="Figure 1: Basic Search showing the scope selection dropdown and toggle switch options"
                    >
                      <img
                        style={{ width: '80%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/5ffde6ee3a38a923c3516cf2/bs-f1-revised-20220922.png"
                        alt="Figure 1: Basic Search showing the scope selection dropdown and toggle switch options"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 1: Basic Search showing the scope selection dropdown
                    and toggle switch options
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            The toggle switch within the textbox can be used to include or
            exclude CSMs. By default this toggle switch is turned off. To
            include CSMs, turn the toggle switch ‘on’—i.e., slide the white
            circle in the switch towards the right so that it is cyan colored.
            To exclude CSMs, turn the switch ‘off’—i.e., slide the switch
            towards the left so that it is colored gray.
            <br />
            <br />
            Click on the magnifying lens icon on the right end of the text box
            to launch the search. <br />
            <br />
            In both the “3D Structure” and “Documentation” modes, as you enter a
            term or phrase, you will see suggestions listed in a box that
            appears below the search box.
            <br />
            <br />
            Here are some tips for executing a Basic search in the PDB Archive
            mode:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Full-text search:</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                You can type a word or phrase in the top bar search box and
                click the Search icon, or hit the 'Enter' key. This will perform
                a 'full-text' search against multiple fields in the database to
                find matches for the entered word or phrase.
              </li>
              <li>
                The Basic Search is meant to be broad and inclusive. It uses
                text-based information present in various fields of archival
                PDBx/mmCIF data and data from external resources mapped to PDB
                structures.
              </li>
              <li>
                The search examines all of the words across multiple fields and
                term(s) may match more than one field. This can cause distantly
                related matches to appear in the search results. For example, a
                search for <i>citrate</i> can find enzymes with this word as
                part of its name (e.g., citrate synthase, citrate lyase) and
                also structures with the small molecule citrate bound to it.
              </li>
              <li>
                Basic search Full-text search query language supports the
                following syntax to express Boolean operators, such as AND, OR
                or NOT:
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  By default, searching multiple keywords is executed using a
                  Boolean OR - i.e., a search for Word1 Word2 will find matches
                  in the PDB archive with either Word1 or Word2. You can also
                  use a | (or pipe) sign to join search words with OR. For
                  example, a search for <i>Citrate Synthase</i>, which may also
                  be written as <i>Citrate | Synthase</i>, will find matches in
                  the PDB archive for entries with either Citrate or Synthase in
                  one or more fields. Note that including the word OR in the top
                  bar search box is interpreted as a search term and not as a
                  Boolean operator.
                </li>
                <li>
                  A + (or plus) sign can be used to execute a Boolean AND
                  operation - i.e., a search for Word1 + Word2 will find matches
                  in the PDB archive with both Word1 and Word2. For example, a
                  search for <i>Citrate + Synthase</i> will find PDB entries
                  with both Citrate and Synthase. The matched words may be
                  separated by other words in the text, appear in a different
                  order in the sentence, or may even be matched in different
                  fields. Note that including the word AND in the top bar search
                  box is interpreted as a search term and not as a Boolean
                  operator.
                </li>
                <li>
                  “ “ (or quotation) marks around a number of words signifies a
                  phrase for searching - i.e., searching for “Word1 Word2” will
                  find matches in the PDB archive that include Word1 AND Word2
                  next to each other in a phrase with no other words between
                  them. For example, <i>“Citrate Synthase”</i> will find PDB
                  entries with the phrase in one or more fields.
                </li>
                <li>
                  A - (or minus) sign placed in front of a Word1 is executed as
                  a Boolean NOT - i.e., the search will find matches in the PDB
                  archive which do not contain Word1. Note that including the
                  word NOT in the top bar search box is interpreted as a search
                  term rather than a Boolean operator. Also note that placing
                  quotes around the -Word1 will search for the phrase containing
                  a dash i.e. it will find matches for the search term “-
                  Word1”.
                </li>
                <li>
                  () (or parenthesis) around a word and/or a sign in the query
                  can specify the order in which search terms should be
                  executed. Two examples are listed below
                </li>
                <ul style={{ paddingLeft: '40px' }}>
                  <li>
                    Search for -(Word1 + Word2) will find matches in the PDB
                    archive that do not include either of the words Word1
                    orWord2, so for example <i>-(Citrate + Synthase)</i> will
                    find matches in the PDB that do not include either of the
                    words citrate or synthase in one or more fields. Search
                    results may include matches with only citrate or only
                    synthase in one or more fields.
                  </li>
                  <li>
                    Search for -(Word1 | Word2) will find matches in the PDB
                    archive that include neither Word1 nor Word2, so for example
                    <i>-(Citrate|Synthase) </i>will return entries that do not
                    contain Citrate, Synthase, or any combination of these words
                    in any field.
                  </li>
                </ul>
              </ul>
            </ul>
            <li>Auto-suggestion lists:</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                As you type query word(s) or phrases in the top bar search box,
                a list of suggestions appear in a box below, grouped by
                attribute or field name, indicating a specific field in which
                the search term was found.
              </li>
              <li>
                Click on any term from the auto-suggest list to execute a search
                where the selected term matches the specified attribute.
              </li>
              <li>
                In the Basic search a long list of auto-suggestions may be
                possible. The lists in each group of the auto-suggestions are
                organized alphabetically and only a few top matches are listed.
                Completing the word(s) in the query can help refine or shorten
                the lists and show more relevant matches. See also
                <a
                  href="/docs/search-and-browse/advanced-search/overview-advanced-search#options-for-grouping-results-"
                  target="_blank"
                >
                  Advanced search options
                </a>
                to refine the query results.
              </li>
            </ul>
            <li>Advanced Query Builder options:</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Once the initial search is run additional conditions may be
                added to the query using the
                <a
                  href="/docs/search-and-browse/advanced-search/overview-advanced-search#options-for-grouping-results-"
                  target="_blank"
                >
                  “Advanced Query Search Builder” options
                </a>
                .
              </li>
            </ul>
          </ul>
          <div></div>
          <p>
            A tabular summary of the symbols that can be used to combine basic
            search terms with Boolean operators is included here<i></i>
          </p>
          <table className="table table-bordered" border={1}>
            <thead>
              <tr>
                <th>Action</th>
                <th>Operator</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OR</td>
                <td>Multiple keywords, |</td>
                <td>Will find entries containing either Word1 or Word2</td>
                <td>
                  <i>Citrate Synthase Citrate | Synthase</i>
                </td>
              </tr>
              <tr>
                <td>AND</td>
                <td>+ or plus sign</td>
                <td>
                  Will find entries containing both Word1 and Word2 anywhere in
                  the entry.
                </td>
                <td>
                  <i>Citrate + Synthase </i>
                </td>
              </tr>
              <tr>
                <td>NOT</td>
                <td>- or minus sign</td>
                <td>
                  Will find entries where Word1 is not found anywhere in the
                  entry.
                </td>
                <td>
                  <i>-Citrate</i>
                  (Note searching for “-Citrate” with quotes will return entries
                  containing the phrase -Citrate)
                </td>
              </tr>
              <tr>
                <td>Indicate order of search terms</td>
                <td>( ) or parenthesis</td>
                <td>
                  Placing parentheses around search terms will indicate the
                  order of the search.
                </td>
                <td>
                  <i>-(Citrate+Synthase)</i>
                  <i>-(Citrate | Synthase)</i>
                </td>
              </tr>
              <tr>
                <td>Search for a phrase</td>
                <td>" " or quotations</td>
                <td>
                  Using quotes around a search term will find entries containing
                  that exact phrase.
                </td>
                <td>
                  <i>“Citrate Synthase”</i>
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            Here are some tips for executing a Basic search in the Documentation
            mode:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              This search employs an implied “contains words” or “contains
              phrase” strategy. This means that if the user enters a word or
              list of words and clicks the Search Icon, the search is processed
              as “contains words”, and will return results containing any of the
              words in the webpage, file, or metadata associated with it.
            </li>
            <li>
              If a phrase is selected from the autosuggest list, or entered
              within quotes (e.g., "set of words") the search is processed as
              “contains phrase”.
            </li>
            <li>
              Note that if there are no documents/pages that match the query
              phrase, the query is automatically changed into a "contains word"
              search.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="search-results"></a>
          <h3>Search results</h3>
          <p>
            The "3D Structure" mode search results are listed as structures,
            entities, assemblies, or molecular definitions that match the query.
            By default the search results are ordered by a relevance score for
            the query options defined.
          </p>
          <a className="content-anchor" id="relevancy-scoring"></a>
          <h4>Relevancy Scoring</h4>
          <p>
            The text-search functionality is powered by
            <a href="http://www.elastic.co/" target="_blank">
              Elasticsearch
            </a>
            , an open-source software that enables the construction and
            execution of highly-customizable and complex queries to retrieve
            specific results relevant to the research question. By default, the
            results of searches are sorted by "relevancy score," which
            Elasticsearch calculates. This takes into account the frequency of
            the given search term(s) in different fields of each result (e.g.,
            does the query word/phrase appear in the title, description,
            organism) along with how closely the search term(s) match the terms
            in those fields. The final output from this scoring process is a
            ranked set of results, in which those with higher calculated
            relevancy scores are listed first, followed by those with lower
            relevancy scores. More details about how this search algorithm works
            may be found in
            <a
              href="https://www.elastic.co/blog/how-to-improve-elasticsearch-search-relevance-with-boolean-queries"
              target="_blank"
            >
              this Elastic blog post
            </a>
            (specifically, see the section titled, "How documents are ranked in
            Elasticsearch"). <br />
            In addition to relevancy scoring, several other options to reorder
            the results are available - e.g., based on release date, structure
            quality, priority showing experimental structures first or last,
            etc.. Note that depending on the sorting option selected, some
            search results may be ordered such that the CSMs are listed at the
            top of the results page. Scroll through all the results and/or
            adjust your query and sorting criteria in order to identify the
            structures that meet your needs.
            <br />
            <br />
            The "Documentation" mode search results are separated into tabs:
            “RCSB PDB”, “News/Announcements”, “PDB101”, and “All” (representing
            all results).
          </p>
          <a className="content-anchor" id="examples"></a>
          <h2>Examples</h2>
          <ol style={{ paddingLeft: '40px' }}>
            <li>
              Basic search for
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22full_text%22%2C%22parameters%22%3A%7B%22value%22%3A%22%5C%22allosteric%20regulator%5C%22%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22full_text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%228d18fcb39c354e52473e9b82ff77b595%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                “allosteric regulator” in the 3D Structure mode (PDB structures
                alone)
              </a>
              .
            </li>
            <li>
              Basic search for
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22full_text%22%2C%22parameters%22%3A%7B%22value%22%3A%22allosteric%20regulator%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22full_text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%2255963dd919369940d6300d9b3a889230%22%7D%7D"
                target="_blank"
              >
                “allosteric regulator” in the 3D Structure mode (PDB structures
                and CSMs)
              </a>
              .
            </li>
            <li>
              Basic search for
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22full_text%22%2C%22parameters%22%3A%7B%22value%22%3A%22%5C%22insulin%20receptor%5C%22%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22full_text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22rows%22%3A100%2C%22start%22%3A0%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22903d0b5241aa5284cf8e06b86518f9c7%22%7D%7D"
                target="_blank"
              >
                “insulin receptor” in the 3D Structure
              </a>
              mode (PDB structures and CSMs).
            </li>
            <li>
              Basic search for
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22sequence%22%2C%22parameters%22%3A%7B%22evalue_cutoff%22%3A0.1%2C%22identity_cutoff%22%3A0%2C%22sequence_type%22%3A%22protein%22%2C%22value%22%3A%22FVNQHLCGSHLVEALYLVCGERGFFYTPKT%22%7D%7D%5D%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22results_content_type%22%3A%5B%22experimental%22%2C%22computational%22%5D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%223dd8a7f2ed7902f69b1a5b0b614a51be%22%7D%7D"
                target="_blank"
              >
                a protein sequence in the 3D Structure mode
              </a>
              (PDB structures and CSMs).
            </li>
            <li>
              Basic search for
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22sequence%22%2C%22parameters%22%3A%7B%22evalue_cutoff%22%3A0.1%2C%22identity_cutoff%22%3A0%2C%22sequence_type%22%3A%22dna%22%2C%22value%22%3A%22ATCGAGAATCCCGGTGCCGAGGCCGCTCAATTGGTCGTAGACAGCTCTAGCACCGCTTAAACGCACGTACGCGCTGTCCCCCGCGTTTTAACCGCCAAGGGGATTACTCCCTAGTCTCCAGGCACGTGTCAGATATATACATCCGAT%22%7D%7D%5D%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22results_content_type%22%3A%5B%22experimental%22%2C%22computational%22%5D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22ae8adea2a1951e41029b599752cc16df%22%7D%7D"
                target="_blank"
              >
                a nucleic acid sequence in the 3D Structure
              </a>
              mode (PDB structures and CSMs).
            </li>
            <li>
              Basic search for
              <a href="/document-search/allosteric%20regulator" target="_blank">
                allosteric regulator in the Documentation
              </a>
              mode.
            </li>
          </ol>
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
        <div>Last updated: 11/9/2022</div>
      </div>
    </div>
  );
};
