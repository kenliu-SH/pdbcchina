export default () => {
  return (
    <>
      <div className="col-lg-9 col-md-8 col-sm-12 content-item">
        <div data-elastic-include="">
          <h5 className="menu-path">Search and Browse &gt; Advanced Search</h5>
          <h1>Chemical Sketch Tool</h1>
          <div>
            <div style={{ paddingLeft: '20px' }}>
              ● <a href="#introduction">Introduction</a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ○
              <a href="#what-does-the-chemical-sketch-tool-do">
                What does the Chemical Sketch Tool do?
              </a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ○
              <a href="#why-is-the-chemical-sketch-tool-useful">
                Why is the Chemical Sketch Tool useful?
              </a>
            </div>
            <div style={{ paddingLeft: '20px' }}>
              ● <a href="#documentation">Documentation</a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ○ <a href="#tool-interface">Tool Interface</a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ○
              <a href="#how-to-use-the-chemical-sketch-tool">
                How to use the Chemical Sketch Tool?
              </a>
            </div>
            <div style={{ paddingLeft: '80px' }}>
              ■
              <a href="#draw-the-2d-chemical-structure">
                Draw the 2D chemical structure
              </a>
            </div>
            <div style={{ paddingLeft: '80px' }}>
              ■
              <a href="#edit-the-2d-chemical-drawing">
                Edit the 2D Chemical Drawing
              </a>
            </div>
            <div style={{ paddingLeft: '80px' }}>
              ■ <a href="#chemical-search">Chemical Search</a>
            </div>
            <div style={{ paddingLeft: '20px' }}>
              ● <a href="#examples">Examples</a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ○
              <a href="#1-search-for-a-molecular-definition-that-exactly-matches-an-inchi">
                1. Search for a molecular definition that exactly matches an
                InChI
              </a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ○
              <a href="#2-search-for-molecular-definitions-that-are-similar-to-the-ccd-id-ttt-">
                2. Search for molecular definitions that are similar to the CCD
                ID TTT
              </a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ○
              <a href="#3-search-for-molecular-definitions-that-are-substructures-of-a-modified-version-of-ccd-id-fmn">
                3. Search for molecular definitions that are substructures of a
                modified version of CCD ID FMN
              </a>
            </div>
            <a className="content-anchor" id="introduction"></a>
            <h2>Introduction</h2>
            <a
              className="content-anchor"
              id="what-does-the-chemical-sketch-tool-do"
            ></a>
            <h3>What does the Chemical Sketch Tool do?</h3>
            <p>
              The Chemical Sketch Tool uses Marvin JS, a web-based chemical
              sketcher developed by ChemAxon, to quickly and conveniently draw
              2D chemical structures from scratch, chemical descriptors (SMILES
              or InChI), or ligand codes in the wwPDB Chemical Component
              Dictionary (
              <a href="https://www.wwpdb.org/data/ccd" target="_blank">
                CCD
              </a>
              ). The tool allows users to edit the 2D chemical drawing as needed
              to automatically generate new chemical descriptors. The user can
              then use the descriptor to query the PDB archive for the specific
              ligand molecule or similar ones.
            </p>
            <a
              className="content-anchor"
              id="why-is-the-chemical-sketch-tool-useful"
            ></a>
            <h3>Why is the Chemical Sketch Tool useful?</h3>
            <p>
              You can search the PDB archive for a specific ligand or similar
              ligands based on the 2D chemical drawing of a molecule. In doing
              so you can use the graphical interface to draw a molecule of
              interest or load either the SMILES or InChI descriptors. Both
              chemical descriptors (SMILES and InChI) of the molecule drawn will
              be automatically generated and will be available to use as a
              query. You can also edit a molecule that is drawn or loaded into
              the tool to add or remove atoms or groups of atoms and then use
              the new molecule to query the PDB archive.
            </p>
            <a className="content-anchor" id="documentation"></a>
            <h2>Documentation</h2>
            <a className="content-anchor" id="tool-interface"></a>
            <h3>Tool Interface</h3>
            <p>The Chemical Sketch Tool can be accessed in two ways:</p>
            <p>
              1. By clicking on the "Open Chemical Sketch Tool" button in the
              <a href="/search/advanced/chemical">Chemical Search</a> options in
              the Advanced Search.
            </p>
            <div>
              <table style={{ width: '90%' }}>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/602c2b653fed9e549afd7917/screen-shot-2021-09-29-at-2.15.44-pm.png"
                        data-toggle="lightbox"
                        data-title="Access to the Chemical Sketch tool from the Advanced Search Options - click on the button labelled 'Open Chemical Sketch Tool'"
                      >
                        <img
                          style={{ width: '100%' }}
                          className="
                                 img-responsive"
                          src="https://cdn.rcsb.org/rcsb-pdb/content/602c2b653fed9e549afd7917/screen-shot-2021-09-29-at-2.15.44-pm.png"
                          alt="Access to the Chemical Sketch tool from the Advanced Search Options - click on the button labelled "
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="content-img-caption">
                      Access to the Chemical Sketch tool from the Advanced
                      Search Options - click on the button labelled "Open
                      Chemical Sketch Tool"
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
            <p>
              2. By directly clicking the Chemical Sketch Tool link
              <a href="/chemical-sketch" target="_blank">
                here
              </a>
            </p>
            <div>
              <a
                href="https://cdn.rcsb.org/rcsb-pdb/content/602c2b653fed9e549afd7917/screen-shot-2021-09-29-at-2.26.15-pm.png"
                data-toggle="lightbox"
                data-title="The Chemical Sketch Tool interface"
              >
                <img
                  style={{ width: '90%' }}
                  className="img-responsive"
                  src="https://cdn.rcsb.org/rcsb-pdb/content/602c2b653fed9e549afd7917/screen-shot-2021-09-29-at-2.26.15-pm.png"
                  alt="The Chemical Sketch Tool interface"
                />
              </a>
            </div>
            <div></div>
            <a
              className="content-anchor"
              id="how-to-use-the-chemical-sketch-tool"
            ></a>
            <h3>How to use the Chemical Sketch Tool?</h3>
            <a
              className="content-anchor"
              id="draw-the-2d-chemical-structure"
            ></a>
            <h4>Draw the 2D chemical structure</h4>
            <p>
              There are several ways to make a 2D chemical drawing of a
              molecule:
            </p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Draw the molecule of interest using the options available in the
                Marvin JS tool
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  A built-in menu of chemical groups, chains, and rings, along
                  with several keyboard shortcuts provide quick access to the
                  most common editing features for drawing even large and
                  complex molecules.
                </li>
                <li>
                  This option is useful for novel ligands that are not present
                  in the CCD.
                </li>
                <li>
                  Detailed help documentation for using the Marvin JS graphic
                  editor is available can be found here:
                </li>
                <ul style={{ paddingLeft: '40px' }}>
                  <li>
                    <a
                      href="https://docs.chemaxon.com/display/docs/marvin-js-user-s-guide.md"
                      target="_blank"
                    >
                      Marvin JSUser Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.chemaxon.com/display/docs/marvin-js-video-tutorials.md"
                      target="_blank"
                    >
                      Marvin JS Video Tutorials
                    </a>
                  </li>
                </ul>
              </ul>
              <li>
                Load the molecule of interest (or a closely related one) using
                chemical descriptors (e.g., InChI or SMILES) or the Chemical
                Component ID (e.g., ATP, TTT)
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  This is useful when you have access to chemical descriptors of
                  similar ligands or their substructure elements
                </li>
              </ul>
            </ul>
            <div></div>
            <a className="content-anchor" id="edit-the-2d-chemical-drawing"></a>
            <h4>Edit the 2D Chemical Drawing</h4>
            <p>
              Once the 2D structure of the molecule is drawn or loaded, you can
              add/remove atoms or groups of atoms using the Marvin JS graphic
              editor. <br />
              <br />
              As you edit the molecule, its chemical descriptors (InChI and
              SMILES) are automatically updated and a "Search" panel appears at
              the bottom of the page.
            </p>
            <a className="content-anchor" id="chemical-search"></a>
            <h4>Chemical Search</h4>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Select the relevant search type from the “Search the PDB”
                pulldown options. Learn more about the Match types - "Similar
                Ligands (Stereospecific)", "Substructure (Stereospecific)",
                "Exact match", etc. in the documentation for
                <a
                  href="https://documentation.rcsb.org/docs/search-and-browse/advanced-search/chemical-search"
                  target="_blank"
                >
                  Chemical Search
                </a>
                .
              </li>
              <li>
                Select InChI or SMILES radio buttons so that the selected
                descriptor is passed to the Advanced Search as an input along
                with the selected Match Type parameter.
              </li>
              <li>
                The search results pages show all CCD and BIRD molecules that
                match the query parameters.
              </li>
              <li>
                If you want to refine your search (i.e., edit your chemical
                drawing or select other match type options), scroll up to the
                Advanced Search query details sections and click on the “Open
                Chemical Sketch Tool” button. This will return you to the
                Chemical Sketch Tool. You can now make further edits to the 2D
                chemical drawing, select a different match type, and/or select a
                different chemical descriptor to re-run your search.
              </li>
              <li>
                Note: For some molecules the chemical search results returned
                from the standard InChI may provide greater specificity compared
                to a search initiated using a SMILES chemical descriptor.
                Depending on whether you wish to see fewer or more matches in
                your results you can use the appropriate descriptor for the
                search.
              </li>
            </ul>
            <div></div>
            <a className="content-anchor" id="examples"></a>
            <h2>Examples</h2>
            <a
              className="content-anchor"
              id="1-search-for-a-molecular-definition-that-exactly-matches-an-inchi"
            ></a>
            <h3>
              1. Search for a molecular definition that exactly matches an InChI
            </h3>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Say you found a chemical descriptor, such as
                InChI=1S/C9H8O4/c1-6(10)13-8-5-3-2-4-7(8)9(11)12/h2-5H,1H3,(H,11,12),
                in a textbook, scientific literature, or a cheminformatics
                resource. Copy the entire descriptor and paste it in the "Load
                Molecule" panel of the Chemical Sketch Tool. Click Load
              </li>
              <li>
                A 2D drawing of the molecule is displayed by the sketch tool.
                Now you know what the molecule looks like.
              </li>
              <li>
                To find if this molecule is present in the wwPDB CCD, scroll
                down and in the Search panel select the search options
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>for match type choose "Exact Match" </li>
                <li>for chemical descriptor choose InChI</li>
              </ul>
            </ul>
            <div></div>
            <p>
              Click on the Search button to get
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22type%22%3A%22descriptor%22%2C%22value%22%3A%22InChI%3D1S%2FC9H8O4%2Fc1-6(10)13-8-5-3-2-4-7(8)9(11)12%2Fh2-5H%2C1H3%2C(H%2C11%2C12)%22%2C%22descriptor_type%22%3A%22InChI%22%2C%22match_type%22%3A%22graph-exact%22%7D%2C%22type%22%3A%22terminal%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%225ac269dbc32f9e1b096c53648bb0a712%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                target="_blank"
              >
                Search Results
              </a>
            </p>
            <div>
              <table style={{ width: '70%' }}>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/602c2b653fed9e549afd7917/screen-shot-2021-09-30-at-3.57.12-pm.png"
                        data-toggle="lightbox"
                        data-title="The Chemical Sketch Tool interface showing the order of steps to perform a search - (1) Load and (2) render the chemical drawing of InChI=1S/C9H8O4/c1-6(10)13-8-5-3-2-4-7(8)9(11)12/h2-5H,1H3,(H,11,12) and (3) run a chemical search"
                      >
                        <img
                          style={{ width: '100%' }}
                          className="img-responsive"
                          src="https://cdn.rcsb.org/rcsb-pdb/content/602c2b653fed9e549afd7917/screen-shot-2021-09-30-at-3.57.12-pm.png"
                          alt="The Chemical Sketch Tool interface showing the order of steps to perform a search - (1) Load and (2) render the chemical drawing of InChI=1S/C9H8O4/c1-6(10)13-8-5-3-2-4-7(8)9(11)12/h2-5H,1H3,(H,11,12) and (3) run a chemical search"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="content-img-caption">
                      The Chemical Sketch Tool interface showing the order of
                      steps to perform a search - (1) Load and (2) render the
                      chemical drawing of
                      InChI=1S/C9H8O4/c1-6(10)13-8-5-3-2-4-7(8)9(11)12/h2-5H,1H3,(H,11,12)
                      and (3) run a chemical search
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
            <a
              className="content-anchor"
              id="2-search-for-molecular-definitions-that-are-similar-to-the-ccd-id-ttt-"
            ></a>
            <h3>
              2. Search for molecular definitions that are similar to the CCD ID
              TTT
            </h3>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Open the Chemical Sketch Tool and in the "Load Molecule" panel,
                select "Chemical Component ID" and enter "TTT", then click on
                the "Load" button.
              </li>
              <li>
                Scroll down to the bottom of the page and select the search
                options
              </li>
              <ul style={{ paddingLeft: '40px' }}>
                <li>for match type choose Similar Ligands (Stereospecific) </li>
                <li>for chemical descriptor choose InChI</li>
              </ul>
              <li>
                Click on Search and get the
                <a
                  href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22type%22%3A%22descriptor%22%2C%22value%22%3A%22InChI%3D1S%2FC20H20N2O%2Fc1-13-10-11-16(21)12-19(13)20(23)22-14(2)17-9-5-7-15-6-3-4-8-18(15)17%2Fh3-12%2C14H%2C21H2%2C1-2H3%2C(H%2C22%2C23)%2Ft14-%2Fm1%2Fs1%22%2C%22descriptor_type%22%3A%22InChI%22%2C%22match_type%22%3A%22graph-relaxed-stereo%22%7D%2C%22type%22%3A%22terminal%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%22a91b55eed6606eb45d614ceb4fbdab28%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                  target="_blank"
                >
                  Search Results
                </a>
              </li>
            </ul>
            <div></div>
            <div>
              <table style={{ width: '70%' }}>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/602c2b653fed9e549afd7917/screen-shot-2021-09-29-at-7.06.13-pm.png"
                        data-toggle="lightbox"
                        data-title="The Chemical Sketch Tool interface showing the order of steps to perform a search - (1) Load and (2) render the chemical drawing of TTT, then (3) select the match type in the Search panel for running a chemical search"
                      >
                        <img
                          style={{ width: '100%' }}
                          className="img-responsive"
                          src="https://cdn.rcsb.org/rcsb-pdb/content/602c2b653fed9e549afd7917/screen-shot-2021-09-29-at-7.06.13-pm.png"
                          alt="The Chemical Sketch Tool interface showing the order of steps to perform a search - (1) Load and (2) render the chemical drawing of TTT, then (3) select the match type in the Search panel for running a chemical search"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="content-img-caption">
                      The Chemical Sketch Tool interface showing the order of
                      steps to perform a search - (1) Load and (2) render the
                      chemical drawing of TTT, then (3) select the match type in
                      the Search panel for running a chemical search
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
            <a
              className="content-anchor"
              id="3-search-for-molecular-definitions-that-are-substructures-of-a-modified-version-of-ccd-id-fmn"
            ></a>
            <h3>
              3. Search for molecular definitions that are substructures of a
              modified version of CCD ID FMN
            </h3>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Open the Chemical Sketch Tool and in the "Load Molecule" panel,
                select "Chemical Component ID" and enter "FMN", then click on
                the "Load" button.
              </li>
              <li>
                Edit and remove the entire phosphate group for the search. Note
                that Chemical Descriptors are updated.
              </li>
              <li>
                After selecting "Substructure (including Stereoisomers)" click
                on the Search button to run a search for the modified molecule
                and get
                <a
                  href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22type%22%3A%22descriptor%22%2C%22value%22%3A%22InChI%3D1S%2FC17H20N4O6%2Fc1-7-3-9-10(4-8(7)2)21(5-11(23)14(25)12(24)6-22)15-13(18-9)16(26)20-17(27)19-15%2Fh3-4%2C11-12%2C14%2C22-25H%2C5-6H2%2C1-2H3%2C(H%2C20%2C26%2C27)%2Ft11-%2C12%2B%2C14-%2Fm0%2Fs1%22%2C%22descriptor_type%22%3A%22InChI%22%2C%22match_type%22%3A%22sub-struct-graph-relaxed%22%7D%2C%22type%22%3A%22terminal%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22mol_definition%22%2C%22request_info%22%3A%7B%22query_id%22%3A%22ed89f04af20978ec7b01466f86f99336%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
                  target="_blank"
                >
                  Search Results
                </a>
              </li>
            </ul>
            <div></div>
            <div>
              <table style={{ width: '70%' }}>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/602c2b653fed9e549afd7917/screen-shot-2021-09-29-at-8.08.33-pm.png"
                        data-toggle="lightbox"
                        data-title="The Chemical Sketch Tool interface showing the order of steps to perform a search - (1) Load and (2a) render the chemical drawing of FMN, (2b) edit the molecule to remove the phosphate group and (3) select the match type and run the chemical search"
                      >
                        <img
                          style={{ width: '100%' }}
                          className="img-responsive"
                          src="https://cdn.rcsb.org/rcsb-pdb/content/602c2b653fed9e549afd7917/screen-shot-2021-09-29-at-8.08.33-pm.png"
                          alt="The Chemical Sketch Tool interface showing the order of steps to perform a search - (1) Load and (2a) render the chemical drawing of FMN, (2b) edit the molecule to remove the phosphate group and (3) select the match type and run the chemical search"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="content-img-caption">
                      The Chemical Sketch Tool interface showing the order of
                      steps to perform a search - (1) Load and (2a) render the
                      chemical drawing of FMN, (2b) edit the molecule to remove
                      the phosphate group and (3) select the match type and run
                      the chemical search
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
          <div>Last updated: 10/12/2021</div>
        </div>
      </div>
    </>
  );
};
