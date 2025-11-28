export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Browse Options</h5>
        <h1>SCOP2</h1>
        <div>
          <a className="content-anchor" id="what-is-scop2"></a>
          <h4>What is SCOP2?</h4>
          <p>
            The Structural classNameification of Proteins (
            <a href="http://scop.mrc-lmb.cam.ac.uk/legacy/" target="_blank">
              SCOP
            </a>
            ) database was created in the 1990s by mostly manual inspection and
            by ordering domains of known protein structures according to a
            hierarchy based on structural and evolutionary relationships (
            <a href="https://doi.org/10.1006/jmbi.1995.0159" target="_blank">
              Murzin et al., 1995
            </a>
            ). A successor of this classNameification (
            <a href="https://scop.mrc-lmb.cam.ac.uk/" target="_blank">
              SCOP2
            </a>
            ) was designed to provide a more advanced framework for protein
            structure annotation and classNameification (
            <a href="https://doi.org/10.1093/nar/gkt1242" target="_blank">
              Andreeva et al., 2014
            </a>
            and
            <a href="https://doi.org/10.1093/nar/gkz1064" target="_blank">
              Andreeva et al., 2020
            </a>
            ).
            <br />
            <br />
            The legacy SCOP structural classNameification was last released in
            2009 (version 1.75). This browser is based on the SCOP2
            classNameification that is updated at regular intervals. The main
            levels of organization in this classNameification include:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Family </b>groups closely related proteins with evidence for
              evolutionary origin detectable using sequence comparison methods,
              e.g. BLAST, PSI- BLAST, HMMER
            </li>
            <li>
              <b>Superfamily </b>brings together distantly related protein
              domains with a probable evolutionary ancestry. These domains may
              have common structural features, conserved architecture of active
              or binding sites, or similar modes of oligomerization.
            </li>
            <li>
              <b>Fold</b> groups superfamilies on the basis of global structural
              features, shared by the majority of their members - e.g.,
              composition of the secondary structures in the domain, their
              architecture, and topology. Although Fold is an attribute of a
              superfamily, some superfamilies have evolved distinct structural
              features and can belong to a different fold.
            </li>
            <li>
              <b>IUPR (Intrinsically Unstructured Protein Region)</b> organizes
              superfamilies of proteins or protein regions that do not adopt any
              specific globular folded structure. Some of these proteins exist
              in ensembles of different conformations or are unstructured till
              they are ordered by binding to other macromolecules.
            </li>
            <li>
              <b>classNamees</b> bring together folds and IUPRs with different
              secondary structural content. These include all-alpha and all-beta
              proteins, containing predominantly alpha-helices and beta-strands,
              respectively, and ‘mixed’ alpha and beta classNamees (a/b) and
              (a+b) with respectively alternating and segregated alpha-helices
              and beta-strands, and the fifth className of small proteins with
              little or no secondary structures.
            </li>
            <li>
              <b>Protein type</b> groups together folds and IUPRs into four
              groups: soluble, membrane, fibrous and intrinsically disordered.
              Each of these types correlate with characteristic sequence and
              structural features.
            </li>
          </ul>
          <div></div>
          <p>
            The SCOP database classNameifies non-redundant protein domains.
            Representative proteins are selected based on sequence (UniProtKB)
            and structure (PDB) for manual SCOP classNameification. The
            classNameification of the representative is then automatically
            extended to related entries using SIFTS.
          </p>
          <a className="content-anchor" id="why-use-the-scop2-browser"></a>
          <h4>Why use the SCOP2 Browser?</h4>
          <p>
            Nearly all proteins in the PDB have structural similarities with
            other proteins, some of which share common evolutionary origins. The
            classNameification of proteins in SCOP2 uses the knowledge acquired
            and the lessons learned from the SCOP. This browser organizes small
            proteins and non-globular, intrinsically unstructured parts of
            proteins, too. This provides you opportunities to discover
            functional and evolutionary relationships between proteins and
            identify starting models for phasing (in X-ray experiments), for
            modeling in EM volumes (in EM experiments), for simulations, for
            hypothesis generation, and/or for experimental design.
          </p>
          <a className="content-anchor" id="how-to-use-the-scop2-browser"></a>
          <h4>How to use the SCOP2 Browser?</h4>
          <p>
            There are two ways in which an entry is classNameified in SCOP2: (a)
            by structural className (top level classNameification assigned the
            IDs (1000000 to 1000004) or (b) by protein type (top level
            classNameification assigned the IDs 1-4). Regardless of the type of
            classNameification used for browsing (structure className or protein
            type), each node in the SCOP2 classNameification can be uniquely
            identified by a seven digit identifier - the SCOP node identifiers.
            <br />
            <br />
            The SCOP2 browser allows users to type in a protein name in the
            search box and select from the options in the autocomplete list.
            Alternatively, you can enter a SCOP2 unique identifier (SCOP ID) to
            find structure(s) of interest. Since there are two ways of
            classNameifying a protein - the protein name <br />
            <br />
            After locating the individual or protein className of interest in
            the browser, users can view the number of PDB structures in this
            group. Clicking on the numbers listed next to the process name will
            launch a search for the PDB structures that have the SCOPe domain of
            interest.
            <br />
            The SCOP domain boundaries assigned to PDB and UniProtKB entries can
            be found in the Sequence tab of the structure summary page of any
            structure of interest.
          </p>
          <a className="content-anchor" id="example"></a>
          <h4>Example</h4>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Navigate through the two trees (browsing entry points) and its
              branches for
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                “all alpha proteins” &gt;&gt; “Globin-like” &gt;&gt;
                “globin-like” and "Globins" OR
              </li>
              <li>
                “Globular proteins” &gt;&gt; “Globin-like” &gt;&gt;
                “Globin-like” and Globins”
              </li>
            </ul>
            <li>
              Type Globins in the search box on the top of the page and select
              from the options "globins 4000551", OR
            </li>
            <li>
              Type the SCOP2 ID (4000551) in the search box on the top of the
              page
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="references"></a>
          <h3>References:</h3>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Murzin, A. G., Brenner, S. E., Hubbard, T., Chothia, C. (1995).
              SCOP: a structural classNameification of proteins database for the
              investigation of sequences and structures. J. Mol. Biol. 247,
              536-540,
              <a href="https://doi.org/10.1006/jmbi.1995.0159" target="_blank">
                https://doi.org/10.1006/jmbi.1995.0159
              </a>
            </li>
            <li>
              Andreeva, A., Howorth, D., Chothia, C., Kulesha, E., Murzin, A. G.
              (2014) SCOP2 prototype: a new approach to protein structure
              mining. Nucleic Acids Res. 42: D310–D314,
              <a href="https://doi.org/10.1093/nar/gkt1242" target="_blank">
                https://doi.org/10.1093/nar/gkt1242
              </a>
            </li>
            <li>
              Andreeva, A. Kulesha, E., Gough, J., Murzin, A. G. (2020). The
              SCOP database in 2020: expanded classNameification of
              representative family and superfamily domains of known protein
              structures, Nucleic Acids Research, 48, D376–D382,
              <a href="https://doi.org/10.1093/nar/gkz1064" target="_blank">
                https://doi.org/10.1093/nar/gkz1064
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
        <div>Last updated: 8/31/2022</div>
      </div>
    </div>
  );
};
