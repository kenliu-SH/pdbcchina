export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Browse Options</h5>
        <h1>ATC</h1>
        <div>
          <a className="content-anchor" id="what-is-atc-classNameification"></a>
          <h4>What is ATC classNameification?</h4>
          <p>
            The
            <a
              href="http://www.whocc.no/atc/structure_and_principles/"
              target="_blank"
            >
              Anatomical Therapeutic Chemical (ATC)
            </a>
            classNameification system organizes therapeutically active
            substances (drugs) according to their anatomical/pharmacological
            use. The ATC classNameification is controlled by the
            <a href="http://www.whocc.no/" target="_blank">
              WHO Collaborating Centre
            </a>
            for Drug Statistics Methodology. The molecular definitions of small
            molecule drugs, as classNameified by the ATC are included in this
            browser tree. The mapping of ATC classNameification is based on
            information derived from
            <a href="https://go.drugbank.com/" target="_blank">
              DrugBank
            </a>
            . Note: the ATC drug names are listed in this classNameification
            only when corresponding molecular definitions are available in the
            chemical component and/or BIRD dictionaries.
          </p>
          <a
            className="content-anchor"
            id="why-browse-by-atc-classNameification"
          ></a>
          <h4>Why browse by ATC classNameification?</h4>
          <p>
            The ATC classNameification provides information about the organ or
            system on which active ingredients of a drug acts and their
            therapeutic, pharmacological, and chemical properties. Browsing
            through this tree can help find drugs that are related in structure
            and or function. Exploring the complexes structures of a drug of
            interest can help identify targets and off-target proteins for one
            specific or a className of drugs.
          </p>
          <a className="content-anchor" id="how-to-use-the-atc-browser"></a>
          <h4>How to use the ATC Browser?</h4>
          <p>
            Users can click on the browser tree branches to navigate to the drug
            or drug className of interest. Alternatively you can search for
            drugs by typing in the name or ATC ID in the search box on the page.
            After locating the drug/className in the browser, users can view the
            number of molecular definitions that match the query by clicking on
            the hyperlinked numbers listed next to the drug className name.
          </p>
          <a className="content-anchor" id="example"></a>
          <h4>Example</h4>
          <p>
            Structures containing Sitagliptin, a common drug used to treat
            diabetes, can be identified as follows:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Browse the tree for “Alimentary Tract and Metabolism Drugs
              &gt;&gt; Drugs Used in Diabetes &gt;&gt; Blood Glucose Lowering
              Drugs, Excl. Insulins &gt;&gt; Dipeptidyl peptidase 4 (DPP-4)
              inhibitors for blood glucose lowering’ OR
            </li>
            <li>
              Search by typing the drug name (Sitagliptin) or ATC
              classNameification (A10BH01) in the search box on the page and
              select from the options provided.
            </li>
          </ul>
          <div></div>
          <p>
            Once you see the results list, scroll up to the Advanced Query
            Builder options and select "Structures" from the Return options pull
            down menu and click on the green magnifying lens (search icon) at
            the bottom right corner of this section. This will provide a list of
            the structures in the archive with this drug (molecular definition).
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
        <div>Last updated: 1/19/2022</div>
      </div>
    </div>
  );
};
