export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Exploring a 3D Structure</h5>
        <h1>Annotations</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#what-are-annotations">What are Annotations?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#why-look-at-annotations">Why look at Annotations?</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#gene-product-annotation">Gene Product Annotation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#protein-sequence-annotations-">
              Protein Sequence Annotations
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#protein-family-annotation">Protein Family Annotation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#protein-structural-domain-annotations">
              Protein Structural Domain Annotations
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#scop-scope">SCOP/SCOPe</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#cath">CATH</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#ecod">ECOD</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#scop2">SCOP2</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#membrane-protein-annotations">
              Membrane Protein Annotations
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#opm">OPM</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#pdbtm">PDBTM</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#memprotmd">MemProtMD</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#mpstruc">mpstruc</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#sequence-structure-and-function-annotations">
              Sequence, Structure and Function Annotations
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#antibody-annotations">Antibody Annotations</a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □ <a href="#imgt">IMGT</a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □ <a href="#sabdab">SAbDab</a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □ <a href="#thera-sabdab">Thera-SAbDab</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <p>
            The Annotations tab aggregates information from various
            bioinformatics data resources pertaining to all or parts of a
            structure. While these data and analyses are not directly part of
            the PDB entries, the information that they present can be useful in
            learning more about the protein(s) of interest.
          </p>
          <a className="content-anchor" id="what-are-annotations"></a>
          <h3>What are Annotations?</h3>
          <p>
            Annotations are notes, comments, and classifications based on
            analyses that present different perspectives and information about
            the subject (in this case the biological molecules in the PDB
            entry). Some of these annotations are based on identifying and
            organizing conserved regions in polymer sequences, structural
            domains, locations of proteins in cells or in membranes, and protein
            functions.
          </p>
          <a className="content-anchor" id="why-look-at-annotations"></a>
          <h3>Why look at Annotations?</h3>
          <p>
            Information from annotations can help us develop new hypotheses
            about the function and interactions of the molecule(s) of interest.
            They can provide a foundation for creating new knowledge about the
            molecule(s) being studied.
          </p>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <p>
            There are several types of annotations that are presented in PDB
            entries. Some of these annotations are based on analyses and
            classifications performed using PDB data. A variety of annotations
            are also integrated from a variety of other data sources.
            <br />
            <br />
            The annotations documented here can be grouped into the following
            types based on:
          </p>
          <ol style={{ paddingLeft: '40px' }}>
            <li>Gene product annotations (Gene Ontology or GO)</li>
            <li>Protein sequence - Protein Family annotations (Pfam)</li>
            <li>Protein structural domains - SCOPe, CATH, ECOD, SCOP2</li>
            <li>
              Membrane protein annotations - OPM, PDBTM, MemProtMD, mpstruc
            </li>
            <li>
              Sequence, Structure and Function annotations (for specific
              molecular classes) - e.g., Antibody,
            </li>
          </ol>
          <div></div>
          <p>
            All annotations listed here are listed at the level of either the
            PDB entry, polymer entity, or instance. For each of the annotations
            the Chain IDs of the polymers link back to the
            <a href="/docs/exploring-a-3d-structure/sequence" target="_blank">
              Sequence View tab
            </a>
            where the residue ranges for the annotations are marked (where
            available).
          </p>
          <a className="content-anchor" id="gene-product-annotation"></a>
          <h3>Gene Product Annotation</h3>
          <p>
            The Gene Ontology resource provides a compilation of controlled
            vocabularies (ontologies) about the functions of gene products from
            a variety of organisms, ranging from bacteria to humans. Various
            research groups have used this ontology to annotate the functions of
            gene products in the PDB to describe the Molecular Function,
            Cellular Component, and Biological Process. Learn
            <a
              href="http://geneontology.org/docs/introduction-to-go-resource/"
              target="_blank"
            >
              more about the Gene Ontology project and Annotations
            </a>
            .
          </p>
          <p>
            <b>The Interface</b>
            <br />
            <br />
            The Gene Product (protein and/or RNA) or GO annotations groups all
            three types of annotation into one table where each row is dedicated
            to a specific polymer entity (and all its instances within the
            structure) (Figure A1).
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-ann-a1.png"
                    data-toggle="lightbox"
                    data-title="Figure A1: Tabular representation of the Gene Product Annotations of T4 Lysozyme for PDB ID 102l. "
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-ann-a1.png"
                      alt="Figure A1: Tabular representation of the Gene Product Annotations of T4 Lysozyme for PDB ID 102l. "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure A1: Tabular representation of the Gene Product
                  Annotations of T4 Lysozyme for PDB ID 102l.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            <b>Learning about the Structure</b>
            <br />
            Examining the table in Figure A1 allows you to learn the following:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The orange banner (color of the header row in the table shown)
              indicates that the information presented here was integrated from
              an external resource (GO Annotations).
            </li>
            <li>
              A direct link to the Gene Ontology Resource is available in the
              top right corner (above the table).
            </li>
            <li>
              The Molecular Functions column lists all the functions of the
              polymer entity (i.e., protein chain, Figure A1) such as catalytic
              and hydrolase activity.
            </li>
            <li>
              The Biological processes assigned to the protein are catabolic
              process, cell wall organization, etc.
            </li>
            <li>
              The Cellular Component lists the location(s) of the protein within
              the cell, such as intracellular, cytoplasmic, etc.
            </li>
          </ul>
          <div></div>
          <p>
            <b>Exploring other structures</b>
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Each of the hyperlinked words displayed in the Gene Product
              Annotation table can be used to launch a search for other
              structures in the archive that have the same GO annotation.
            </li>
            <li>
              The same set of PDB structures can also be identified using three
              different browse options:
              <a
                href="/docs/search-and-browse/browse-options/biological-process"
                target="_blank"
              >
                Biological Process
              </a>
              ,
              <a
                href="/docs/search-and-browse/browse-options/cellular-component"
                target="_blank"
              >
                Cellular Component
              </a>
              , and
              <a
                href="/docs/search-and-browse/browse-options/molecular-function"
                target="_blank"
              >
                Molecular Function
              </a>
              . Learn more about these browse options by following the links
              included here.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="protein-sequence-annotations-"></a>
          <h3>Protein Sequence Annotations</h3>
          <p>
            Comparing protein sequences is the most common way to group and
            organize protein structures into families. Protein sequences also
            represent a convenient way to integrate information about sequence
            conservations, sites of modification, etc.
          </p>
          <a className="content-anchor" id="protein-family-annotation"></a>
          <h4>Protein Family Annotation</h4>
          <p>
            Protein Family (Pfam) classifies proteins using multiple sequence
            alignments and presents annotations for these families. The
            annotations may be of the following six types:
            <br />
            Pfam entries are classified in one of six types of conservations:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Family - a protein region</li>
            <li>Domain - a stable structural unit</li>
            <li>
              Repeat - a short unit which may be unstable in isolation but forms
              a stable structure when multiple copies are present
            </li>
            <li>Motifs - a short unit outside globular domains </li>
            <li>Coiled-Coil - predominantly contain coiled-coil motifs</li>
            <li>
              Disordered - do not have a specific shape, may be intrinsically
              disordered
            </li>
          </ul>
          <div></div>
          <p>
            Learn
            <a
              href="https://pfam-docs.readthedocs.io/en/latest/"
              target="_blank"
            >
              more about Pfam
            </a>
            here. <br />
            <br />
            <b>The Interface</b>
            <br />
            <br />
            Annotations from Pfam for protein entities in the PDB are presented
            as in Figure B1.
          </p>
          <a
            href="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-ann-b1.png"
            data-toggle="lightbox"
            data-title="Figure B1: Tabular representation of the Pfam annotations for PDB ID 6pa1. "
          >
            <img
              style={{ width: '100%' }}
              className="img-responsive"
              src="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-ann-b1.png"
              alt="Figure B1: Tabular representation of the Pfam annotations for PDB ID 6pa1. "
            />
          </a>
          <div></div>
          <p>
            <b>Learning about the Structure</b>
            <br />
            <br />
            Examining the table in Figure B1 allows you to learn the following:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The orange banner (color of the header row in the table shown)
              indicates that the information presented here was integrated from
              an external resource (Pfam).
            </li>
            <li>
              A direct link to Pfam is available in the top right corner (above
              the table)
            </li>
            <li>
              Chains: The Chain IDs in this column indicate the polymers that
              were annotated with information from Pfam. Clicking on a
              hyperlinked chain ID will open a
              <a href="/docs/exploring-a-3d-structure/sequence" target="_blank">
                Sequence tab
              </a>
              showing the polymer entity. The residue ranges for the Pfam domain
              annotations can be seen there.
            </li>
            <li>
              Domain annotations for several chains are displayed in the table
              with descriptions and comments.
            </li>
          </ul>
          <div></div>
          <p>
            <b>Exploring other structures</b>
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Each of the hyperlinked words displayed in the Accession and
              Identifier columns of the annotation table can be used to launch a
              search for other structures in the archive that have the same Pfam
              classification.
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="protein-structural-domain-annotations"
          ></a>
          <h3>Protein Structural Domain Annotations</h3>
          <p>
            Domains are structurally and functionally stable regions of the
            protein that can fold and function independently from the rest of
            the protein. While some proteins are composed of a single domain,
            there are many proteins that have multiple domains, each with
            specific shapes, interactions, and functions.
            <br />
            <br />
            Both shapes and functions of protein domains are conserved in nature
            and suggest evolutionary relationships. Several algorithms were
            developed to identify structural domains in the PDB and organize
            them into databases such as SCOP/SCOPe, CATH, and ECOD. Annotations
            from these databases are integrated to allow PDB users to learn
            about a protein’s structure, functions, and evolution.
          </p>
          <a className="content-anchor" id="scop-scope"></a>
          <h4>SCOP/SCOPe</h4>
          <p>
            The Structural Classification of Proteins — extended (SCOPe) uses a
            combination of manual curation and rigorously validated automated
            methods to classify PDB structures based on structural features and
            similarities as well as homology and evolution. Learn
            <a
              href="https://scop.berkeley.edu/help/ver=2.08#overview"
              target="_blank"
            >
              more about SCOPe classification
            </a>
            . <br />
            <br />
            <b>The Interface</b>
            <br />
            <br />
            Classification information from SCOPe is mapped to PDB structural
            domains (Figure C1).
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-ann-c1.png"
                    data-toggle="lightbox"
                    data-title="Figure C1: Tabular representation of the SCOP/SCOPe classification of hemoglobin alpha and beta chains for PDB ID 4hhb. "
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-ann-c1.png"
                      alt="Figure C1: Tabular representation of the SCOP/SCOPe classification of hemoglobin alpha and beta chains for PDB ID 4hhb. "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure C1: Tabular representation of the SCOP/SCOPe
                  classification of hemoglobin alpha and beta chains for PDB ID
                  4hhb.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The orange banner (color of the header row in the table shown)
              indicates that the information presented here was integrated from
              an external resource (SCOPe).
            </li>
            <li>
              A direct link to SCOP/SCOPe is available in the top right corner
              (above the table).
            </li>
            <li>
              The Chains column lists the protein chains for the classified
              domains.
            </li>
            <li>
              The SCOPe classification for each of the protein chains is listed
              in the Class, Fold, Superfamily, Family, Domain, and Species
              columns.
            </li>
            <li>
              The classification presented here was based on SCOPe version 2.08.
            </li>
          </ul>
          <div></div>
          <p>
            <b>Learning About the Structure</b>
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The structure-based classification of the hemoglobin alpha and
              beta chains indicates that the proteins have domains that are all
              alpha helical and contain a globin-like fold.
            </li>
            <li>
              The species- and evolution-based classifications indicate that
              these proteins belong to the globin family and are of human
              origin.
            </li>
            <li>
              To learn about the sequence ranges for the SCOPe domain see the
              SCOPe track (one of the 2 SCOP tracks) in the Sequence tab of the
              Structure Summary page.
            </li>
          </ul>
          <div></div>
          <p>
            <b>Exploring other structures </b>
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Each of the hyperlinked words displayed in the SCOPe annotation
              table can be used to launch a search for other structures in the
              archive that have the same SCOPe classification.
            </li>
            <li>
              The same set of PDB structures can also be identified using the
              SCOPe Browse options. Learn
              <a
                href="/docs/search-and-browse/browse-options/scop"
                target="_blank"
              >
                more about SCOPe browsing options
              </a>
              .
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="cath"></a>
          <h4>CATH</h4>
          <p>
            The CATH database classifies protein domains based on evolutionary
            relationships using a combination of automated and manual
            procedures. The classification groups protein domains at four levels
            - Class, Architecture, Topology (fold family), and Homologous
            superfamily. Learn
            <a href="http://www.cathdb.info/wiki/doku/?id=faq" target="_blank">
              more about the CATH classification
            </a>
            .<br />
            <br />
            <b>The Interface</b>
            <br />
            <br />
            Classification information from CATH is mapped to the PDB structural
            domains (Figure C2).
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-ann-c2.png"
                    data-toggle="lightbox"
                    data-title="Figure C2: Tabular representation of the CATH classification of hemoglobin alpha and beta chains for PDB ID 4hhb."
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-ann-c2.png"
                      alt="Figure C2: Tabular representation of the CATH classification of hemoglobin alpha and beta chains for PDB ID 4hhb."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure C2: Tabular representation of the CATH classification
                  of hemoglobin alpha and beta chains for PDB ID 4hhb.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            <b>Learning About the Structure</b>
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The orange banner (color of the header row in the table shown)
              indicates that the information presented here was integrated from
              an external resource (CATH).
            </li>
            <li>
              A direct link to the CATH database is available in the top right
              corner (above the table).
            </li>
            <li>
              The Chains column lists the protein chains for the classified
              domains. Clicking on the hyperlinked chain IDs will open the
              Sequence tab showing the polymer entity. The residue ranges for
              the CATH domain annotations can be seen there.
            </li>
            <li>
              The CATH classification for each of the protein chains is listed
              in the Class, Architecture, Topology, Homology columns.
            </li>
            <li>
              The classification presented here is based on CATH version
              (4.2.0).
            </li>
          </ul>
          <div></div>
          <p>
            <b>Exploring other structures</b>
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Each of the hyperlinked words displayed in the CATH annotation
              table can be used to launch a search for other structures in the
              archive that have the same CATH classification.
            </li>
            <li>
              The same set of PDB structures can also be identified using the
              CATH Browse options. Learn
              <a
                href="/docs/search-and-browse/browse-options/cath"
                target="_blank"
              >
                more about CATH browsing
              </a>
              options.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="ecod"></a>
          <h4>ECOD</h4>
          <p>
            Evolutionary Classification of protein Domains (ECOD) is a
            hierarchical classification of protein domains organized according
            to their evolutionary relationships. The domains are organized into
            the following five levels:
          </p>
          <ol style={{ paddingLeft: '40px' }}>
            <li>(A) architecture</li>
            <li>(X) possible homology</li>
            <li>(H) homology</li>
            <li>(T) topology</li>
            <li>(F) family</li>
          </ol>
          <div></div>
          <p>
            Learn
            <a href="http://prodata.swmed.edu/ecod/" target="_blank">
              more about ECOD classifications
            </a>
            .<br />
            <br />
            <b>The Interface</b>
            <br />
            <br />
            Annotations from ECOD mapped to PDB are presented as in Figure C3.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-annot-figc3.png"
                    data-toggle="lightbox"
                    data-title="Figure C3: Tabular representation of the ECOD annotations for PDB ID 6xzl. "
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-annot-figc3.png"
                      alt="Figure C3: Tabular representation of the ECOD annotations for PDB ID 6xzl. "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure C3: Tabular representation of the ECOD annotations for
                  PDB ID 6xzl.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            <b>Learning About the Structure</b>
            <br />
            <br />
            Examining the table in Figure C3 allows you to learn the following:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The orange banner (color of the header row in the table shown)
              indicates that the information presented here was integrated from
              an external resource (ECOD).
            </li>
            <li>
              A direct link to ECOD is available in the top right corner (above
              the table).
            </li>
            <li>
              Chains: The Chain IDs in this column indicate that the polymers
              were annotated with information from ECOD. Clicking on a
              hyperlinked chain ID will open a Sequence tab showing the polymer
              entity. The residue ranges for the ECOD domain annotations can be
              seen there.
            </li>
            <li>
              The Domain Identifier column provides a link to the page in ECOD
              with additional information and a graphic to view the domain
              within the context of the full protein.
            </li>
            <li>
              Annotations of the protein domain include family, topology,
              homology, possible homology, and architecture.
            </li>
          </ul>
          <div></div>
          <p>
            <b>Exploring other structures </b>
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Explore other structures in the archive that have the same ECOD
              classification using the ECOD Browse options. Learn
              <a
                href="/docs/search-and-browse/browse-options/ecod"
                target="_blank"
              >
                more about ECOD browsing
              </a>
              options.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="scop2"></a>
          <h4>SCOP2</h4>
          <p>
            The SCOP2 database classifies representative structures with unique
            protein domains and extends the classification to related entries
            using SIFTS. Learn
            <a href="http://scop.mrc-lmb.cam.ac.uk/about" target="_blank">
              more about SCOP2 classification
            </a>
            . <br />
            <br />
            <b>The Interface</b>
            <br />
            <br />
            Classification information from SCOP2 is mapped to PDB structural
            domains (Figure C4)
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-annot-figc4.png"
                    data-toggle="lightbox"
                    data-title="Figure C4: Tabular representation of the SCOP2 classification of hemoglobin alpha and beta chains for PDB ID 4hhb."
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-annot-figc4.png"
                      alt="Figure C4: Tabular representation of the SCOP2 classification of hemoglobin alpha and beta chains for PDB ID 4hhb."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure C4: Tabular representation of the SCOP2 classification
                  of hemoglobin alpha and beta chains for PDB ID 4hhb.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The orange banner (color of the header row in the table shown)
              indicates that the information presented here was integrated from
              an external resource (SCOP2).
            </li>
            <li>
              A direct link to SCOP2 is available in the top right corner (above
              the table).
            </li>
            <li>
              The Chains column lists the protein chains for the classified
              domains.
            </li>
            <li>
              The SCOP2 classification for each of the protein chains is listed
              in the Family name, while identifiers for the Domain and Family
              are linked to the corresponding pages in the SCOP2 database.
            </li>
            <li>
              The classification presented here was based on SCOP2B (dated
              2022-02-25).
            </li>
          </ul>
          <div></div>
          <p>
            <b>Learning About the Structure</b>
            <br />
            <br />
            Examining the table in Figure C4 allows you to learn the following:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The structure-based classification of the hemoglobin alpha and
              beta chains indicates that the proteins have domains that contain
              a globin-like fold.
            </li>
          </ul>
          <div></div>
          <p>
            <b>Exploring other structures</b>
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The same set of PDB structures can also be identified using the
              SCOP2 Browse options. Learn
              <a
                href="/docs/search-and-browse/browse-options/scop2"
                target="_blank"
              >
                more about SCOP2 browsing options
              </a>
              .
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="membrane-protein-annotations"></a>
          <h3>Membrane Protein Annotations</h3>
          <p>
            Membrane proteins are different from soluble proteins because parts
            of their structure either exist within the interior of a membrane or
            are associated with its surface. Several approaches have been used
            to organize these proteins into groups to study their membrane
            association as well as their overall structure and functions.
            Information from a few of these classifications have been mapped to
            PDB structures, and these annotations are described here. Learn more
            about
            <a
              href="/docs/general-help/membrane-protein-resources"
              target="_blank"
            >
              Membrane Proteins Resources in the PDB
            </a>
            .
          </p>
          <a className="content-anchor" id="opm"></a>
          <h4>OPM</h4>
          <p>
            The Orientations of Proteins in Membranes (OPM) database classifies
            membrane proteins based on their transmembrane or
            membrane-associated domain. Learn
            <a href="https://opm.phar.umich.edu/about" target="_blank">
              more about OPM
            </a>
            .<br />
            <br />
            <b>The Interface</b>
            <br />
            <br />
            The OPM classification was built using
            <a href="http://scop.mrc-lmb.cam.ac.uk/scop/" target="_blank">
              SCOP
            </a>
            and
            <a href="http://www.tcdb.org/" target="_blank">
              TCDB
            </a>
            but has some unique features. It has four levels of hierarchy
            (Figure D1):
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Type </b>classifies a protein as transmembrane,
              monotopic/peripheral, or membrane-active.
            </li>
            <li>
              <b>Class</b> groups the proteins by secondary structure, either
              all-α, all-β, α+β, α/β, or nonregular.
            </li>
            <li>
              <b>Superfamily</b> groups evolutionarily related proteins with
              superimposable 3D structures.
            </li>
            <li>
              <b>Family</b> includes proteins with detectable sequence homology.
            </li>
          </ul>
          <div></div>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-ann-d1.png"
                    data-toggle="lightbox"
                    data-title="Figure D1: Tabular representation of OPM Annotations of Klebsiella pneumoniae OmpK36 for PDB ID 5o79. "
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-ann-d1.png"
                      alt="Figure D1: Tabular representation of OPM Annotations of Klebsiella pneumoniae OmpK36 for PDB ID 5o79. "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure D1: Tabular representation of OPM Annotations of
                  Klebsiella pneumoniae OmpK36 for PDB ID 5o79.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            <b>Learning About the Structure</b>
            <br />
            <br />
            Examining the table in Figure D1 allows you to learn the following
            about OmpK36:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The orange banner (color of the header row in the table shown)
              indicates that the information presented here was integrated from
              an external resource (OPM).
            </li>
            <li>
              A direct link to the OPM database is available in the top right
              corner (above the table).
            </li>
            <li>
              Chains A, B, and C are all instances of the OmpK36 protein in this
              structure. Clicking on a hyperlinked chain ID will open a Sequence
              tab showing the polymer entity. The residue ranges for the OPM
              domain annotations can be seen there.
            </li>
            <li>
              An external link provides access to a page in the OPM resource
              where you can learn more about this protein and see a graphical
              representation of the membrane position relative to the protein
              structure.
            </li>
            <li>
              The protein is a transmembrane, beta-barrel protein that is
              trimeric and has a general bacterial porin structure.
            </li>
          </ul>
          <div></div>
          <p>
            <b>Exploring other structures </b>
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Each of the hyperlinked words displayed in the OMP annotation
              table can be used to launch a search for other structures in the
              archive that have the same OPM classification.
            </li>
            <li>
              The same set of PDB structures can also be identified using the
              OPM Browse options. Learn
              <a
                href="/docs/search-and-browse/browse-options/membrane-protein-opm"
                target="_blank"
              >
                more about OPM browsing
              </a>
              options.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="pdbtm"></a>
          <h4>PDBTM</h4>
          <p>
            The Protein Data Bank of Transmembrane Proteins (PDBTM) classifies
            transmembrane proteins using the TMDET algorithm. Learn
            <a href="http://pdbtm.enzim.hu/?_=/docs/manual" target="_blank">
              more about PBDTM
            </a>
            . <br />
            <br />
            <b>The Interface</b>
            <br />
            <br />
            Information from PDBTM is used to identify this as a membrane
            protein (Figure D2).
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-ann-d2.png"
                    data-toggle="lightbox"
                    data-title="Figure D2: Tabular representation of PDBTM Annotations of Klebsiella pneumoniae OmpK36 for PDB ID 5o79. "
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-ann-d2.png"
                      alt="Figure D2: Tabular representation of PDBTM Annotations of Klebsiella pneumoniae OmpK36 for PDB ID 5o79. "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure D2: Tabular representation of PDBTM Annotations of
                  Klebsiella pneumoniae OmpK36 for PDB ID 5o79.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            <b>Learning About the Structure</b>
            <br />
            <br />
            Examining the table in Figure D2 allows you to learn the following
            about OmpK36:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The orange banner (color of the header row in the table shown)
              indicates that the information presented here was integrated from
              an external resource (PDBTM).
            </li>
            <li>
              A direct link to the PDBTM database is available in the top right
              corner (above the table).
            </li>
            <li>
              The Chains A, B, and C are all instances of the OmpK36 protein in
              this structure. Clicking on a hyperlinked chain ID will open a
              <a href="/docs/exploring-a-3d-structure/sequence" target="_blank">
                Sequence tab
              </a>
              showing the polymer entity. The residue ranges for the PDBTM
              domain annotations can be seen there.
            </li>
            <li>
              An external link provides access to a page in PDBTM and a
              graphical representation of the membrane position relative to the
              protein structure.
            </li>
          </ul>
          <div></div>
          <p>
            <b>Exploring other structures</b>
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The hyperlink “Annotated as Membrane Protein by PDBTM” displayed
              in the PDBTM annotation table can be used to launch a search for
              other structures in the archive that have the same annotation.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="memprotmd"></a>
          <h4>MemProtMD</h4>
          <p>
            This is a database of intrinsic membrane protein structures
            identified in the Protein Data Bank and studied using molecular
            dynamics after insertion into simulated lipid bilayers. A
            coarse-grain self-assembly approach is used for the molecular
            dynamics simulations. Learn
            <a href="http://memprotmd.bioch.ox.ac.uk/about/" target="_blank">
              more about MemProtMD
            </a>
            . <br />
            <br />
            <b>The Interface</b>
            <br />
            <br />
            Information from MemProtMD is used to identify this as a membrane
            protein (Figure D3).
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-ann-d3.png"
                    data-toggle="lightbox"
                    data-title="Figure D3: Tabular representation of MemProtMD Annotations of Klebsiella pneumoniae OmpK36 for PDB ID 5o79."
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-ann-d3.png"
                      alt="Figure D3: Tabular representation of MemProtMD Annotations of Klebsiella pneumoniae OmpK36 for PDB ID 5o79."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure D3: Tabular representation of MemProtMD Annotations of
                  Klebsiella pneumoniae OmpK36 for PDB ID 5o79.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            <b>Learning About the Structure</b>
            <br />
            <br />
            Examining the table in Figure D3 allows you to learn the following
            about OmpK36:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The orange banner (color of the header row in the table shown)
              indicates that the information presented here was integrated from
              an external resource (MemProtMD).
            </li>
            <li>
              A direct link to the MemProtMD database is available in the top
              right corner (above the table).
            </li>
            <li>
              The Chains A, B, and C are all instances of the OmpK36 protein in
              this structure. Clicking on a hyperlinked chain ID will open a
              Sequence tab showing the polymer entity.
            </li>
            <li>
              An external link provides access to a page in MemProtMD and a
              graphical representation of the membrane position around the
              protein structure. Simulations in the lipid membrane are also
              available.
            </li>
          </ul>
          <div></div>
          <p>Exploring other structures</p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The hyperlink “Annotated as Membrane Protein by MemProtMD”
              displayed in the MemProtMD annotation table can be used to launch
              a search for other structures in the archive that have the same
              annotation.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="mpstruc"></a>
          <h4>mpstruc</h4>
          <p>
            The <b>m</b>embrane <b>p</b>roteins of known 3D <b>struc</b>ture
            (mpstruc) is a manually curated database that organizes membrane
            proteins by secondary structure and interactions with the membrane
            (transmembrane or monotopic). Learn more about mpstruc. <br />
            <br />
            <b>The Interface</b>
            <br />
            <br />
            Information from mpstruc is used to identify this as a membrane
            protein (Figure D4).
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-ann-d4.png"
                    data-toggle="lightbox"
                    data-title="Figure D4: Tabular representation of mpstruc annotations of Klebsiella pneumoniae OmpK36 for PDB ID 5o79."
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-ann-d4.png"
                      alt="Figure D4: Tabular representation of mpstruc annotations of Klebsiella pneumoniae OmpK36 for PDB ID 5o79."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure D4: Tabular representation of mpstruc annotations of
                  Klebsiella pneumoniae OmpK36 for PDB ID 5o79.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>The three main groups in the mpstruc classification are:</p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Monotopic Membrane Proteins</li>
            <li>Transmembrane Proteins: Beta-Barrel</li>
            <li>Transmembrane Proteins: Alpha-helical</li>
          </ul>
          <div></div>
          <p>
            <b>Learning About the Structure</b>
            <br />
            <br />
            Examining the table in Figure D4 allows you to learn the following
            about OmpK36:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The orange banner (color of the header row in the table shown)
              indicates that the information presented here was integrated from
              an external resource (mpstruc).
            </li>
            <li>
              A direct link to the mpstruc database is available in the top
              right corner (above the table).
            </li>
            <li>
              The Chains A, B, and C are all instances of the OmpK36 protein in
              this structure.
            </li>
            <li>
              An external link provides access to the home page for mpstruc. You
              can expand the groups shown on that page by clicking on the “+++”
              signs to open up the entire classification. As an exercise, you
              can do a search for a PDB ID of interest on the mpstruc page to
              see its classification.
            </li>
            <li>
              The mpstruc classification of the OmpK36 protein places it in the
              “Transmembrane Proteins: Beta-Barrel” group and the “Beta-Barrel
              Membrane Proteins: Porins and Relatives” subgroup.
            </li>
          </ul>
          <div></div>
          <p>
            <b>Exploring other structures</b>
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Each of the hyperlinks displayed in the mpstruc annotation table
              can be used to launch a search for other structures in the archive
              that have the same mpstruc classification.
            </li>
            <li>
              The same set of PDB structures can also be identified using the
              mpstruc Browse options. Learn
              <a
                href="/docs/search-and-browse/browse-options/membrane-protein-mpstruc"
                target="_blank"
              >
                more about the mpstruc
              </a>
              browsing options.
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="sequence-structure-and-function-annotations"
          ></a>
          <h3>Sequence, Structure and Function Annotations</h3>
          <p>
            There are several classes of molecules in the PDB that have specific
            structural compositions and functional roles in biology. Their
            sequences and structures may show too wide a range of variations to
            be meaningfully classified and studied by sequence or structure, so
            several projects have grouped these molecules by their functions.
            Examples of these classifications are included here.
          </p>
          <a className="content-anchor" id="antibody-annotations"></a>
          <h4>Antibody Annotations</h4>
          <p>
            Although antibodies are products of the adaptive immune system,
            understanding of their structures and functions has enabled
            scientists to design molecules that represent the functionally
            important regions of antibodies and produce them for diagnostics,
            therapeutics, and research. Information from two antibody databases
            were mapped to PDB data and antibody annotations from the above
            resources are presented in a tabular format with provenance and
            version information.
          </p>
          <a className="content-anchor" id="imgt"></a>
          <h5>IMGT</h5>
          <p>
            The international ImMunoGeneTics information system (IMGT) is a
            resource that provides access to sequence, genome, and structure
            Immunogenetics data, and web-based interactive tools to explore
            them. Learn
            <a href="http://www.imgt.org/mAb-DB/doc" target="_blank">
              more about IMGT
            </a>
            annotations. <br />
            <br />
            <b>The Interface</b>
            <br />
            <br />
            Antibody information integrated from IMGT is mapped on polymer
            entities in the structure (Figure E1).
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-annot-fige1-rev-022122.png"
                    data-toggle="lightbox"
                    data-title="Figure E1: Tabular representation of the Antibody Annotations of cetuximab from IMGT for PDB ID 6ayn."
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-annot-fige1-rev-022122.png"
                      alt="Figure E1: Tabular representation of the Antibody Annotations of cetuximab from IMGT for PDB ID 6ayn."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure E1: Tabular representation of the Antibody Annotations
                  of cetuximab from IMGT for PDB ID 6ayn.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            <b>Learning About the Structure</b>
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The orange banner (color of the header row in the table shown)
              indicates that information presented here was integrated from the
              IMGT resources.
            </li>
            <li>
              A direct link to the IMGT databases is available in the top right
              corner (above the table).
            </li>
            <li>
              Chains: This column lists the protein chains that were used to run
              the sequence matches against IMGT data. Clicking on a hyperlinked
              chain ID will open a Sequence tab showing the polymer entity.
              Residue ranges for the Immunoglobulin domain annotations can be
              seen there.
            </li>
            <li>
              Various features such as protein name, source organism, domain
              names and descriptions listed in this table show that this
              structure has two copies of a Fab fragment. Each Fab fragment of
              the chimeric therapeutic antibody cetuximab has a heavy and a
              light chain.
            </li>
            <li>
              The Description column provides a link to the page in IMGT with
              additional information about this chain in the context of the full
              protein.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="sabdab"></a>
          <h5>SAbDab</h5>
          <p>
            The Structural Antibody Database (SAbDab) annotates all antibody
            structures in the PDB, including experimental details, antibody
            nomenclature (e.g. heavy-light chain pairings), curated affinity
            data, and sequence annotations. <br />
            <br />
            <b>The Interface</b>
            <br />
            <br />
            Antibody information integrated from SAbDab is mapped on to polymer
            entities in the structure (Figure E2).
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-annot-e2-sabdab.png"
                    data-toggle="lightbox"
                    data-title="Figure E2: Tabular representation of the Antibody Annotations from SAbDab for the antibody present in PDB ID 4jn2."
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-annot-e2-sabdab.png"
                      alt="Figure E2: Tabular representation of the Antibody Annotations from SAbDab for the antibody present in PDB ID 4jn2."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure E2: Tabular representation of the Antibody Annotations
                  from SAbDab for the antibody present in PDB ID 4jn2.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            <b>Learning About the Structure</b>
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The orange banner (color of the header row in the table shown)
              indicates that information presented here was integrated from the
              SAbDab resource.
            </li>
            <li>
              A direct link to the SAbDab database is available in the top right
              corner (above the table).
            </li>
            <li>
              Chains: This column lists the protein chains that were used to run
              the sequence matches. Clicking on a hyperlinked chain ID will open
              a Sequence tab showing the polymer entity and various annotations.
            </li>
            <li>
              Chain Subclass: This column lists the names of the polymer chain
              entities forming the antibody. Clicking on the hyperlinked names
              will open the entry specific page in the SAbDab database.
            </li>
            <li>
              Chain Type: Where available, this column lists the name of the
              heavy or light chain type present in the antibody.
            </li>
            <li>
              Antigen Name: This column lists the name of the antigen that this
              antibody binds.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="thera-sabdab"></a>
          <h5>Thera-SAbDab</h5>
          <p>
            The Therapeutic Structural Antibody Database (Thera-SAbDab) is a
            database of immunotherapeutic variable domain sequences and their
            representatives in
            <a
              href="http://opig.stats.ox.ac.uk/webapps/newsabdab/sabdab/about/"
              target="_blank"
            >
              SAbDab
            </a>
            . It includes close sequence matches, too (e.g., 95-98% seqID, and
            99% seqID). Learn
            <a
              href="http://opig.stats.ox.ac.uk/webapps/newsabdab/therasabdab/about/"
              target="_blank"
            >
              more about Thera-SAbDab
            </a>
            annotations. <br />
            <br />
            <b>The Interface</b>
            <br />
            <br />
            Antibody information integrated from Thera-SAbDab is mapped on to
            polymer entities in the structure (Figure E3).
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-annot-e3-thera-sabdab.png"
                    data-toggle="lightbox"
                    data-title="Figure E3: Tabular representation of the Antibody Annotations of Idarucizumab from Thera-SAbDab for PDB ID 4jn2."
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/618272c004fb9835c6ae1894/ssp-annot-e3-thera-sabdab.png"
                      alt="Figure E3: Tabular representation of the Antibody Annotations of Idarucizumab from Thera-SAbDab for PDB ID 4jn2."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure E3: Tabular representation of the Antibody Annotations
                  of Idarucizumab from Thera-SAbDab for PDB ID 4jn2.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            <b>Learning About the Structure</b>
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The orange banner (color of the header row in the table shown)
              indicates that information presented here was integrated from the
              Thera-SAbDab resource.
            </li>
            <li>
              A direct link to the Thera-SAbDab database (search interface) is
              available in the top right corner (above the table).
            </li>
            <li>
              Name: This structure has two copies of a Fab fragment of the
              therapeutic antibody Idarucizumab. Clicking on the hyperlinked
              name opens the therapeutic antibody specific page in Thera-SAbDab.
            </li>
            <li>Target: This antibody targets the molecule Dabigatran. </li>
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
        <div>Last updated: 12/15/2022</div>
      </div>
    </div>
  );
};
