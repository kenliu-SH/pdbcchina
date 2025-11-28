export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Browse Options</h5>
        <h1>SCOP</h1>
        <div>
          <a className="content-anchor" id="what-is-scop-and-scope"></a>
          <h4>What is SCOP and SCOPe?</h4>
          <p>
            The Structural Classification of Proteins (
            <a href="http://scop.mrc-lmb.cam.ac.uk/legacy/" target="_blank">
              SCOP
            </a>
            ) database was created in the 1990s by mostly manual inspection and
            by ordering domains of known protein structures according to a
            hierarchy based on structural and evolutionary relationships (
            <a href="https://doi.org/10.1006/jmbi.1995.0159" target="_blank">
              Murzin et al., 1995
            </a>
            ). A successor of this classification (
            <a href="https://scop.mrc-lmb.cam.ac.uk/" target="_blank">
              SCOP2)
            </a>
            was designed to provide a more advanced framework for protein
            structure annotation and classification (
            <a href="https://doi.org/10.1093/nar/gkt1242" target="_blank">
              Andreeva et al., 2014
            </a>
            ).
            <br />
            <br />
            The Structural Classification of Proteins — extended (
            <a href="https://scop.berkeley.edu/" target="_blank">
              SCOPe
            </a>
            ) uses a combination of manual curation and rigorously validated
            automated methods to classify PDB structures, especially the newer
            structures (
            <a href="https://doi.org/10.1093/nar/gkt1240" target="_blank">
              Fox et al., 2014
            </a>
            ). The goal was to implement automation, so that protein structures
            can be classified in the SCOP hierarchy, while keeping reliability
            developed through years of careful manual curation. The SCOPe
            classification addresses some inconsistencies in SCOP, but mostly
            aims to be backward compatible with SCOP, and provides access to
            data found in all releases of the SCOP and Astral databases that
            feature stable identifiers. <br />
            <br />
            The legacy SCOP structural classification was last released in 2009
            (version 1.75). This browser is based on the SCOPe classification
            and is updated regularly.
          </p>
          <a className="content-anchor" id="why-use-the-scop-browser"></a>
          <h4>Why use the SCOP Browser?</h4>
          <p>
            Nearly all proteins in the PDB have structural similarities with
            other proteins, some of which share common evolutionary origins. The
            SCOP and SCOPe database provides a broad survey of all known protein
            folds, detailed information about close relatives of the protein of
            interest, and a framework for research and classification. Using the
            SCOP browser you can identify proteins that have domains that are
            related by structure and may share evolutionary origins. Such
            structures may be useful as starting models for phasing (in X-ray
            experiments), for modeling in EM volumes (in EM experiments), for
            simulations, for hypothesis generation, and/or for experimental
            design.
          </p>
          <a className="content-anchor" id="how-to-use-the-scop-browser"></a>
          <h4>How to use the SCOP Browser?</h4>
          <p>
            The SCOPe browser allows users to type in a protein name in the
            search box and select from the options in the autocomplete list.
            Alternatively, you can enter a SCOPe unique identifier (sunid) to
            find structure(s) of interest.
            <br />
            <br />
            After locating the individual or protein class of interest in the
            browser, users can view the number of PDB structures in this group.
            Clicking on the numbers listed next to the process name will launch
            a search for the PDB structures that have the SCOPe domain of
            interest.
          </p>
          <a className="content-anchor" id="example"></a>
          <h4>Example</h4>
          <p>
            Browse the PDB for structures that have a globin fold as follows:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Navigate through the tree and its branches for “all alpha
              proteins” &gt;&gt; “Globin-like” &gt;&gt; “globin-like” and
              "Globins" OR
            </li>
            <li>
              Type Globin in the search box on the top of the page and select
              from the options "globin-like", OR
            </li>
            <li>
              Type the SCOPe sunid (43463) in the search box on the top of the
              page
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="references"></a>
          <h4>References</h4>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Murzin, A. G., Brenner, S. E., Hubbard, T., Chothia, C. (1995).
              SCOP: a structural classification of proteins database for the
              investigation of sequences and structures. J. Mol. Biol. 247,
              536-540 DOI:
              <a href="https://doi.org/10.1006/jmbi.1995.0159" target="_blank">
                10.1006/jmbi.1995.0159
              </a>
              ,
            </li>
            <li>
              Andreeva, A., Howorth, D., Chothia, C., Kulesha, E., Murzin, A. G.
              (2014) SCOP2 prototype: a new approach to protein structure
              mining. Nucleic Acids Res. 42: D310–D314 DOI:
              <a href="https://doi.org/10.1093/nar/gkt1242" target="_blank">
                10.1093/nar/gkt1242
              </a>
            </li>
            <li>
              Fox, N. K., Brenner, S. E., Chandonia, J. M. 2014. SCOPe:
              Structural Classification of Proteins—extended, integrating SCOP
              and ASTRAL data and classification of new structures. Nucleic
              Acids Research 42: D304-309. doi:
              <a href="https://doi.org/10.1093/nar/gkt1240" target="_blank">
                10.1093/nar/gkt1240
              </a>
              .
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
        <div>Last updated: 8/31/2022</div>
      </div>
    </div>
  );
};
