export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">General Help</h5>
        <h1>Membrane Protein Resources</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#what-are-membrane-proteins">
              What are membrane proteins?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#why-is-it-important-to-learn-about-membrane-proteins">
              Why is it important to learn about membrane proteins?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#how-are-membrane-protein-structures-identified-in-the-pdb-">
              How are membrane protein structures identified in the PDB?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#how-to-access-membrane-protein-information">
              How to access membrane protein information?
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#browsing-membrane-protein-trees">
              Browsing Membrane Protein trees
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#membrane-annotations-on-the-structure-summary-page">
              Membrane annotations on the Structure Summary Page
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#membrane-annotations-in-the-1d-sequence-view">
              Membrane annotations in the 1D Sequence View
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#predicting-and-visualizing-membrane-position-in-the-3d-view-in-mol*">
              Predicting and visualizing membrane position in the 3D view (in
              Mol*)
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#example">Example</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#references">References</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <a className="content-anchor" id="what-are-membrane-proteins"></a>
          <h3>What are membrane proteins?</h3>
          <p>
            Membranes define cellular and organellar boundaries and are composed
            of phospholipid bilayers. Membrane proteins are either embedded in
            or associated with the phospholipid bilayer. Membrane proteins are
            crucial for cell survival and communication across membranes,
            serving as
            <a href="https://pdb101.rcsb.org/motm/123" target="_blank">
              molecular transporters
            </a>
            ,
            <a href="https://pdb101.rcsb.org/motm/191" target="_blank">
              signal receptors
            </a>
            ,
            <a href="https://pdb101.rcsb.org/motm/250" target="_blank">
              ion channels
            </a>
            , and
            <a href="https://pdb101.rcsb.org/motm/140" target="_blank">
              enzymes
            </a>
            . Although membrane proteins are encoded by roughly one fifth of
            human genes, they account for half of all drug targets.
            <br />
            <br />
            Unlike soluble globular proteins, membrane proteins have hydrophobic
            amino acid side chains exposed on their surfaces so that they can
            associate with and embed in hydrophobic phospholipid bilayers.
            However, when these proteins are separated from lipids they often
            tend to aggregate and/or precipitate. As a result, experimentally
            determined structures of membrane proteins are underrepresented in
            the PDB archive. However, recent improvements in experimental design
            (<i>e.g.</i>, use of cryo-electron microscopy and inclusion of
            detergents, lipid molecules, vesicles, and nanodiscs) provide a
            wealth of new possibilities for membrane protein structure
            determination.
          </p>
          <a
            className="content-anchor"
            id="why-is-it-important-to-learn-about-membrane-proteins"
          ></a>
          <h3>Why is it important to learn about membrane proteins?</h3>
          <p>
            Since the membrane-associated and membrane-traversing regions of
            membrane proteins have distinct properties, recognizing these
            regions in the protein can help us understand the stability and
            functions of membrane proteins. For example, learning which parts of
            the protein face the cytosol and which parts are extracellular can
            help us recognize the ligand-binding and signaling domains of a
            membrane receptor. In general, membrane proteins can be
            classNameified based on their different spatiotemporal
            characteristics:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>
                classNameifications based on duration of membrane association:
              </b>
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                <b>Integral membrane proteins</b> are permanently attached to a
                lipid bilayer, either embedded in or anchored to the membrane.
              </li>
              <li>
                <b>Peripheral membrane proteins</b> form transient complexes
                with the membrane or with integral membrane proteins.
              </li>
            </ul>
            <li>
              <b>classNameifications based on mode of membrane association:</b>
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                <b>Transmembrane (or bitopic) proteins</b> traverse the membrane
                layer at least once.
              </li>
              <li>
                <b>Monotopic membrane proteins</b> are attached to a single side
                of the lipid bilayer. They can be covalently bound to lipid
                molecules or interact with the membrane via amphipathic alpha
                helices, hydrophobic loops, or electrostatic interactions.
              </li>
            </ul>
          </ul>
          <div></div>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a
            className="content-anchor"
            id="how-are-membrane-protein-structures-identified-in-the-pdb-"
          ></a>
          <h3>How are membrane protein structures identified in the PDB?</h3>
          <p>
            Although membrane proteins are composed of helices and sheets, they
            have some unique features and properties that distinguish them from
            any other soluble protein. PDB structures of these proteins often do
            not include a lipid bilayer, so the membrane-binding regions have to
            be manually and/or programmatically annotated by experts. Following
            membrane protein annotation, these proteins can be organized in
            various ways based on their membrane-associated regions. <br />
            <br />
            Four external resources are used to annotate entries in the PDB
            archive as membrane proteins:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a href="https://opm.phar.umich.edu/" target="_blank">
                OPM: Orientations of Proteins in Membranes database
              </a>
              (
              <a href="/docs/general-help/membrane-protein-resources#references">
                Lomize, 2012
              </a>
              ): This classNameification is derived from SCOP and the
              Transporter classNameification Database (TCDB). A custom transfer
              energy function is used to determine the position of the lipid
              bilayer.
            </li>
            <li>
              <a href="http://pdbtm.enzim.hu/" target="_blank">
                PDBTM: Protein Data Bank of Transmembrane Proteins
              </a>
              (
              <a href="/docs/general-help/membrane-protein-resources#references">
                Kozma, 2012
              </a>
              ): This resource is based on the
              <a href="http://tmdet.enzim.hu/" target="_blank">
                TMDET
              </a>
              algorithm (
              <a href="/docs/general-help/membrane-protein-resources#references">
                Tusnády, 2004
              </a>
              ) that detects membrane proteins by their 3D structure.
            </li>
            <li>
              <a href="http://memprotmd.bioch.ox.ac.uk/" target="_blank">
                MemProtMD: A database of membrane proteins embedded in lipid
                bilayers
              </a>
              (
              <a href="/docs/general-help/membrane-protein-resources#references">
                Newport, 2019
              </a>
              ): This automatic annotation pipeline identifies integral
              alpha-helical domains as well as beta barrels based on sequence
              features and then determines protein-lipid interactions using
              molecular dynamics simulations.
            </li>
            <li>
              <a href="https://blanco.biomol.uci.edu/mpstruc/" target="_blank">
                mpstruc: Membrane Proteins of Known Structures
              </a>
              (
              <a href="/docs/general-help/membrane-protein-resources#references">
                White, 2009
              </a>
              ): The structures in this browser are manually curated based on
              literature surveys.
            </li>
          </ul>
          <div></div>
          <p>
            Each of these resources uses a variety of measures and strategies
            for annotating membrane proteins (reviewed in
            <a href="/docs/general-help/membrane-protein-resources#references">
              Shimuzu, 2018
            </a>
            ). Some membrane protein structures are unanimously annotated by all
            four external resources. Depending on the annotation strategy used,
            some membrane protein structures are only annotated by a single
            resource. For example, OPM covers a substantially higher fraction of
            peripheral membrane proteins than are represented in other
            resources. By contrast, MemProtMD specifically considers integral
            membrane proteins.
            <br />
            <br />
            Different types of membrane protein information are derived from
            each of the four resources. All four external membrane
            classNameification resources provide PDB entry-level information.
            These data are mapped to individual entities in these entries
            through cross-referencing with relevant UniProt features or keywords
            (‘transmembrane region’, ‘intramembrane region’, ‘signal peptide’,
            ‘transit peptide’, ‘membrane’, and ‘cell membrane’). The OPM and
            mpstruc resources provide detailed classNameifications of membrane
            proteins, and OPM and PDBTM provide information about the specific
            sequence segments that are membrane-associated. Both the
            classNameifications and membrane protein segment annotations are
            integrated into rcsb.org and can be accessed there. In addition,
            OPM, PDBTM, and MemProtMD provide their own visualization of the
            membrane layer relative to the protein. <br />
            <br />
            Types of information provided by OPM, PDBTM, MemProtMD, and mpstruc
            are summarized in the table below.
          </p>
          <table className="table table-bordered" border={1}>
            <thead>
              <tr>
                <th>
                  <b>Information Provided</b>
                </th>
                <th>
                  <b>OPM</b>
                </th>
                <th>
                  <b>PDBTM</b>
                </th>
                <th>
                  <b>MemProtMD</b>
                </th>
                <th>
                  <b>mpstruc</b>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Detailed classNameification of Annotated Membrane Proteins
                </td>
                <td>Integrated into rcsb.org; presented as Browse Trees</td>
                <td></td>
                <td></td>
                <td>Integrated into rcsb.org; presented as Browse Trees</td>
              </tr>
              <tr>
                <td>Membrane-Associated Sequence Segments</td>
                <td>
                  Integrated into rcsb.org; presented as entity-level
                  information
                </td>
                <td>
                  Integrated into rcsb.org; presented as entity-level
                  information
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  3D Visualization of Membrane Layer in the Context of the
                  Protein
                </td>
                <td>Available in external resource</td>
                <td>Available in external resource</td>
                <td>Available in external resource</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a
            className="content-anchor"
            id="how-to-access-membrane-protein-information"
          ></a>
          <h3>How to access membrane protein information?</h3>
          <p>
            Various annotations and classNameifications from external resources
            can help one identify membrane proteins in the PDB, learn about the
            membrane-associated sequence segments, and visualize in 3D the
            position of the membrane with reference to the protein(s).
            <br />
            <br />
            Use the Advanced Search system, to search for OPM, PDBTM, MemProtMD,
            or mpstruc annotations to
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22or%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_polymer_entity_annotation.type%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22PDBTM%22%7D%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_polymer_entity_annotation.type%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22MemProtMD%22%7D%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_polymer_entity_annotation.type%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22OPM%22%7D%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_polymer_entity_annotation.type%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22mpstruc%22%7D%7D%5D%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%22ed3380522c8737dad0e29990bb919d31%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
              target="_blank"
            >
              display all entries annotated as membrane proteins
            </a>
            by one of these resources.
          </p>
          <a
            className="content-anchor"
            id="browsing-membrane-protein-trees"
          ></a>
          <h4>Browsing Membrane Protein trees</h4>
          <p>
            The ‘Browse Annotations’ feature allows the identification of
            membrane proteins in the PDB using annotations and
            classNameifications from the
            <a href="/search/browse/opm" target="_blank">
              OPM
            </a>
            and
            <a href="/search/browse/membrane" target="_blank">
              mpstruc
            </a>
            resources. Hierarchies from both of these resources are also
            presented on the Annotations pages of classNameified membrane
            proteins.
          </p>
          <a
            className="content-anchor"
            id="membrane-annotations-on-the-structure-summary-page"
          ></a>
          <h4>Membrane annotations on the Structure Summary Page</h4>
          <p>
            The structure summary page contains a special 'Membrane Protein'
            remark if an entry is a membrane protein. This link points to the
            Annotations page of the entry. For each membrane protein entity in
            the structure, a dedicated ‘Membrane Entity’ tag is featured in the
            macromolecules section of the page. External links to OPM, PDBTM,
            and MemProtMD are available via the annotations page and provide
            details on the corresponding membrane protein entries.
          </p>
          <a
            className="content-anchor"
            id="membrane-annotations-in-the-1d-sequence-view"
          ></a>
          <h4>Membrane annotations in the 1D Sequence View</h4>
          <p>
            OPM and PDBTM provide information on membrane-associated segments at
            the sequence level. This information is available in the
            <a
              href="/docs/sequence-viewers/protein-feature-view"
              target="_blank"
            >
              Protein Feature View
            </a>
            , together with annotations from UniProt on transmembrane and
            intramembrane regions.
            <br />
            <br />
            Annotations might be missing from the Protein Feature View if an
            external resource uses non-standard chain identifiers (as it is the
            case for OPM and PDB ID
            <a href="/structure/6K33" target="_blank">
              6k33
            </a>
            ). Minor differences between sequence positions reported by UniProt,
            OPM, and PDBTM are expected.
          </p>
          <a
            className="content-anchor"
            id="predicting-and-visualizing-membrane-position-in-the-3d-view-in-mol*"
          ></a>
          <h4>
            Predicting and visualizing membrane position in the 3D view (in
            Mol*)
          </h4>
          <p>
            The structure summary page for a membrane protein includes a link to
            a special Mol* visualization of its predicted membrane location and
            orientation as calculated from its 3D structure using the ANVIL
            (Assignment aNd VIsualization of the Lipid bilayer,
            <a href="/docs/general-help/membrane-protein-resources#references">
              Postic, 2016
            </a>
            ) algorithm. ANVIL is a simplified version of the TMDET algorithm (
            <a href="/docs/general-help/membrane-protein-resources#references">
              Tusnády, 2004
            </a>
            ), the algorithm used by PDBTM. Mol* incorporates an implementation
            of the ANVIL algorithm that simulates the membrane as the space
            between two translucent circular plane segments. It is important to
            note that this is a prediction which is not backed by experimental
            data.
            <br />
            <br />
            ANVIL classNameifies the 20 canonical amino acids based on their
            hydrophobicity, which determines their propensity to be embedded in
            a membrane. The algorithm focuses on 'exposed' residues that would
            interact with solvent or membrane, identified and filtered according
            to their solvent-accessible surface area. An optimal membrane
            location is assumed to be one that embeds the maximum number of
            exposed hydrophobic residues while excluding the maximum number of
            exposed hydrophilic residues. Based on this assumption, ANVIL
            iteratively optimizes its prediction of membrane location and
            thickness.
            <br />
            <br />
            One shortcoming of the algorithm is that it only considers polymer
            residues and ignores lipids modeled in the structure, leading to
            imperfect predictions such as that for PDB ID
            <a href="/3d-view/2XTV?preset=membrane" target="_blank">
              2xtv
            </a>
            . The prediction by ANVIL also tends to be flawed for proteins
            determined by NMR (<i>e.g.</i>, PDB ID
            <a href="/3d-view/5X29/0?preset=membrane" target="_blank">
              5x29
            </a>
            ), in such cases switching to different NMR models may provide
            better results. Another interesting case occurs for bacterial efflux
            pumps (<i>e.g.</i>,
            <a href="/3d-view/5V5S?preset=membrane" target="_blank">
              5v5s
            </a>
            ) that can traverse more than one membrane (see coloring of its
            <a href="http://pdbtm.enzim.hu/?_=/pdbtm/5v5s">PDBTM</a> entry).
            <br />
            <br />
            The OPM, PDBTM, and MemProtMD resources also provide their own
            membrane orientation data and visualizations. Users can visit those
            external resources for details.
          </p>
          <a className="content-anchor" id="example"></a>
          <h2>Example</h2>
          <p>
            The PDB entry
            <a href="/structure/3SN6" target="_blank">
              3sn6
            </a>
            features the human chimeric β<sub>2</sub>-adrenergic receptor in
            complex with G-proteins and a nanobody. The receptor itself is a
            chimeric molecule (meaning there is a bacterial protein fused to the
            human protein at the N-terminus to increase solubility and
            stability). However, the focus of the study (and discussion here) is
            the human receptor protein, which has transmembrane helices.
          </p>
          <div>
            <table style={{ width: '70%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6080bf66ec901916050494bd/ssp-header3.png"
                      data-toggle="lightbox"
                      data-title="Header of the Structure Summary page of PDB ID 3sn6. Additional links to the Annotations Page and external resources are provided. A dedicated 3D visualization is available"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6080bf66ec901916050494bd/ssp-header3.png"
                        alt="Header of the Structure Summary page of PDB ID 3sn6. Additional links to the Annotations Page and external resources are provided. A dedicated 3D visualization is available"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Header of the Structure Summary page of PDB ID 3sn6.
                    Additional links to the Annotations Page and external
                    resources are provided. A dedicated 3D visualization is
                    available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            On the Structure Summary page the receptor protein is Entity 4 and
            shows a dedicated 'Membrane Entity' property. This indicates that
            this entity is annotated as transmembrane or membrane-associated by
            OPM, PDBTM, MemProtMD, or mpstruc.
          </p>
          <div>
            <table style={{ width: '70%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6080bf66ec901916050494bd/entity.png"
                      data-toggle="lightbox"
                      data-title="Information for Entity 4 which indicates the presence of annotations from OPM, PDBTM, MemProtMD, or mpstruc and links to them"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6080bf66ec901916050494bd/entity.png"
                        alt="Information for Entity 4 which indicates the presence of annotations from OPM, PDBTM, MemProtMD, or mpstruc and links to them"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Information for Entity 4 which indicates the presence of
                    annotations from OPM, PDBTM, MemProtMD, or mpstruc and links
                    to them
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            Clicking the 'Membrane' link on the top of the Structure Summary
            page or an annotated entity points to the Annotations page. This
            view provides details on the present membrane protein annotations
            (as well as all other annotations).
          </p>
          <div>
            <table style={{ width: '70%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6080bf66ec901916050494bd/annotations.png"
                      data-toggle="lightbox"
                      data-title="Detailed information is available on the Annotations page. External links point to OPM, PDBTM, MemProtMD, or mpstruc. A detailed classNameification is available for OPM and mpstruc. Bold links launch a search for proteins with the same annotation"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6080bf66ec901916050494bd/annotations.png"
                        alt="Detailed information is available on the Annotations page. External links point to OPM, PDBTM, MemProtMD, or mpstruc. A detailed classNameification is available for OPM and mpstruc. Bold links launch a search for proteins with the same annotation"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Detailed information is available on the Annotations page.
                    External links point to OPM, PDBTM, MemProtMD, or mpstruc. A
                    detailed classNameification is available for OPM and
                    mpstruc. Bold links launch a search for proteins with the
                    same annotation
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            Clicking on the Sequence tab on the Structure Summary page and
            selecting Entity 4 allows viewing of the amino acid sequence of this
            entity with residue-level annotations derived from a variety of
            resources. Membrane segment annotations from OPM and PDBTM are
            included for classNameified proteins.
          </p>
          <div>
            <table style={{ width: '70%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6080bf66ec901916050494bd/pfv-memannot.png"
                      data-toggle="lightbox"
                      data-title="Membrane protein segment annotations on 1D Sequence View"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6080bf66ec901916050494bd/pfv-memannot.png"
                        alt="Membrane protein segment annotations on 1D Sequence View"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Membrane protein segment annotations on 1D Sequence View
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            Any entry annotated as a Membrane Protein includes a link to a
            special Mol* viewer that predicts and visualizes membrane location
            and orientation. The membrane location prediction can be visualized
            by clicking on the Predict Membrane option below the thumbnail image
            of the structure. Please note that the link will be specific to the
            displayed assembly. Use the arrows at the top to switch to another
            assembly (if applicable) or to the asymmetric unit.
          </p>
          <div>
            <table style={{ width: '40%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6080bf66ec901916050494bd/membrane-vis.png"
                      data-toggle="lightbox"
                      data-title="To visualize membrane position in a Membrane protein entity, click on the highlighted button on the Structure Summary page."
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6080bf66ec901916050494bd/membrane-vis.png"
                        alt="To visualize membrane position in a Membrane protein entity, click on the highlighted button on the Structure Summary page."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    To visualize membrane position in a Membrane protein entity,
                    click on the highlighted button on the Structure Summary
                    page.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            Clicking on the "Predict Membrane" button opens the Mol* view of the
            selected asymmetric unit or Biological Assembly and visualizes the
            membrane orientation predicted by the ANVIL algorithm as two
            translucent circular plane segments. The space between both membrane
            planes represents the location of the membrane. It as It is
            important to note that this is a prediction which is not backed by
            experimental data. No prediction is available for
            monotopic/peripheral proteins that do not traverse the membrane
            layer and tiny structures that contain fewer than 15 residues.
          </p>
          <div>
            <table style={{ width: '70%' }}>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/6080bf66ec901916050494bd/membrane-hover.png"
                      data-toggle="lightbox"
                      data-title="Predicted membrane position in the selected assembly of the PDB entry is shown by two transparent circular plane segments. The amino acids are colored by their hydrophobicity value. Hovering over individual residues reports the computed accessible surface area value in the bottom right corner. Click the ‘Membrane Orientation’ component to focus or hide the membrane visuals. Visual parameters can be changed. "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/6080bf66ec901916050494bd/membrane-hover.png"
                        alt="Predicted membrane position in the selected assembly of the PDB entry is shown by two transparent circular plane segments. The amino acids are colored by their hydrophobicity value. Hovering over individual residues reports the computed accessible surface area value in the bottom right corner. Click the ‘Membrane Orientation’ component to focus or hide the membrane visuals. Visual parameters can be changed. "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Predicted membrane position in the selected assembly of the
                    PDB entry is shown by two transparent circular plane
                    segments. The amino acids are colored by their
                    hydrophobicity value. Hovering over individual residues
                    reports the computed accessible surface area value in the
                    bottom right corner. Click the ‘Membrane Orientation’
                    component to focus or hide the membrane visuals. Visual
                    parameters can be changed.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a className="content-anchor" id="references"></a>
          <h2>References</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Bittrich, S., Rose, Y., Segura, J., Lowe, R., Westbrook, J. D.,
              Duarte, J. M., &amp; Burley, S. K. (2021). RCSB Protein Data Bank:
              improved annotation, search and visualization of membrane protein
              structures archived in the PDB. Bioinformatics, btab813, doi:
              <a
                href="https://doi.org/10.1093/bioinformatics/btab813"
                target="_blank"
              >
                10.1093/bioinformatics/btab813
              </a>
            </li>
            <li>
              White, S. H. (2009). Biophysical dissection of membrane proteins.
              Nature, 459.7245, 344-346, doi:
              <a href="https://doi.org/10.1038/nature08142" target="_blank">
                10.1038/nature08142
              </a>
              .
            </li>
            <li>
              Newport, T. D., Sansom, M. S. P., &amp; Stansfeld, P. J. (2019).
              The MemProtMD database: a resource for membrane-embedded protein
              structures and their lipid interactions. Nucleic acids research,
              47(D1), D390-D397, doi:
              <a href="https://doi.org/10.1093/nar/gky1047" target="_blank">
                10.1093/nar/gky1047
              </a>
              .
            </li>
            <li>
              Lomize, M. A., Pogozheva, I. D., Joo, H., Mosberg, H. I., &amp;
              Lomize, A. L. (2012). OPM database and PPM web server: resources
              for positioning of proteins in membranes. Nucleic acids research,
              40(D1), D370-D376, doi:
              <a href="https://doi.org/10.1093/nar/gkr703" target="_blank">
                10.1093/nar/gkr703
              </a>
              .
            </li>
            <li>
              Kozma, D., Simon, I., &amp; Tusnady, G. E. (2012). PDBTM: Protein
              Data Bank of transmembrane proteins after 8 years. Nucleic acids
              research, 41(D1), D524-D529, doi:
              <a href="https://doi.org/10.1093/nar/gks1169" target="_blank">
                10.1093/nar/gks1169
              </a>
              .
            </li>
            <li>
              Shimizu, K., Cao, W., Saad, G., Shoji, M., &amp; Terada, T.
              (2018). Comparative analysis of membrane protein structure
              databases. Biochimica et Biophysica Acta (BBA)-Biomembranes,
              1860(5), 1077-1091, doi:
              <a
                href="https://doi.org/10.1016/j.bbamem.2018.01.005"
                target="_blank"
              >
                10.1016/j.bbamem.2018.01.005
              </a>
              .
            </li>
            <li>
              Postic, G., Ghouzam, Y., Guiraud, V., &amp; Gelly, J. C. (2016).
              Membrane positioning for high-and low-resolution protein
              structures through a binary classNameification approach. Protein
              Engineering, Design and Selection, 29(3), 87-92, doi:
              <a href="https://doi.org/10.1093/protein/gzv063" target="_blank">
                10.1093/protein/gzv063
              </a>
              .
            </li>
            <li>
              Tusnády, G. E., Dosztányi, Z., &amp; Simon, I. (2004).
              Transmembrane proteins in the Protein Data Bank: identification
              and classNameification. Bioinformatics, 20(17), 2964-2972, doi:
              <a href="https://doi.org/10.1093/bioinformatics/bth340">
                10.1093/bioinformatics/bth340
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
