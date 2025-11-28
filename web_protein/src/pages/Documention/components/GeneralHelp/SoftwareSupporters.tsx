export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">General Help</h5>
        <h1>Software Supporters</h1>
        <div>
          <p>
            RCSB PDB gratefully acknowledges access and support for software
            tools from:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a href="https://www.acdlabs.com/" target="_blank">
                ACDLabs
              </a>
              :
              <a
                href="https://www.acdlabs.com/products/draw_nom/nom/name/"
                target="_blank"
              >
                ACD/Name
              </a>
              is a tool that generates chemical names from structure according
              to IUPAC rules.
              <a
                href="https://www.acdlabs.com/products/draw_nom/nom/name/"
                target="_blank"
              >
                ACD/Name
              </a>
              can also convert chemical names to structures.
              <a
                href="https://www.acdlabs.com/products/draw_nom/nom/name/"
                target="_blank"
              >
                ACD/Name
              </a>
              handles challenging areas of nomenclature including biochemical,
              inorganic, and organometallic structures and polymers. RCSB PDB
              uses
              <a
                href="https://www.acdlabs.com/products/draw_nom/nom/name/"
                target="_blank"
              >
                ACD/Name
              </a>
              to generate chemical names for each of the molecules in the
              Chemical Component Dictionary.
            </li>
            <li>
              <a href="https://chemaxon.com/" target="_blank">
                ChemAxon
              </a>
              : RCSB PDB uses the web-based chemical drawing tool
              <a href="https://chemaxon.com/products/marvin-js" target="_blank">
                Marvin JS
              </a>
              to compose chemical sketches for chemical similar and substructure
              searches.
            </li>
            <li>
              <a href="https://www.eyesopen.com/" target="_blank">
                OpenEye Scientific
              </a>
              : The OpenEye cheminformatics suite of toolkits including: OEChem
              TK, core chemistry handling and representation; OEDepict TK, 2D
              Molecule rendering and depiction; MolProp TK, molecular property
              calculation and filtering; and Quacpac TK, tautomer enumeration
              and charge assignment. RCSB PDB uses OpenEye toolkits for
              processing and searching small molecule constituents in PDB
              entries.
            </li>
          </ul>
          <div></div>
          <p>
            RCSB PDB would also like to acknowledge the many open source tools
            that are used in the production and delivery of the website. Some of
            the major open-source tools used include:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a href="https://github.com/molstar" target="_blank">
                Mol*
              </a>
            </li>
            <li>
              <a href="https://github.com/soedinglab/MMseqs2" target="_blank">
                Mmseqs2
              </a>
            </li>
            <li>
              <a
                href="https://zhanglab.ccmb.med.umich.edu/TM-align/"
                target="_blank"
              >
                TM-align
              </a>
            </li>
            <li>
              <a href="https://github.com/nglviewer/ngl" target="_blank">
                NGL
              </a>
            </li>
            <li>
              <a href="http://jmol.sourceforge.net/" target="_blank">
                Jmol
              </a>
            </li>
          </ul>
          <div></div>
          <p>
            RCSB PDB integrates
            <a
              href="/docs/general-help/data-from-external-resources-integrated-into-rcsb-pdb"
              target="_blank"
            >
              Data From External Resources
            </a>
            for searching and analysis.
          </p>
          <p>
            <a
              href="http://www.wwpdb.org/validation/2017/XrayValidationReportHelp#references"
              target="_blank"
            >
              A list of software programs used by the wwPDB during OneDep
              deposition and validation is available
            </a>
            .
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
        <div>Last updated: 8/31/2022</div>
      </div>
    </div>
  );
};
