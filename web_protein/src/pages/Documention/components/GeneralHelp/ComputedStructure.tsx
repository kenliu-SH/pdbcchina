export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">General Help</h5>
        <h1>Computed Structure Models and RCSB.org</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#protein-data-bank-and-rcsborg">
              Protein Data Bank and RCSB.org
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#expanding-the-limits-of-pdb">
              Expanding the limits of PDB
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#experimental-structures-and-csm-at-rcsborg">
              Experimental Structures and CSM at RCSB.org
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#what-csms-are-available">What CSMs are available?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#how-can-you-access-the-csms">
              How can you access the CSMs?
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#identifying-type-of-3d-structure">
              Identifying Type of 3D Structure
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#querying-for-structures-in-rcsborg-">
              Querying for Structures in RCSB.org
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#what-can-you-do-with-the-csms-at-rcsborg">
              What can you do with the CSMs at RCSB.org?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#models-and-assembly">Models and Assembly</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#examples">Examples</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#references">References</a>
          </div>
          <hr />
          <p>
            Video:
            <a href="https://youtu.be/JvnHKKdFBuU" target="_blank">
              What is in a Computed Structure Model?
            </a>
          </p>
          <hr />
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <a className="content-anchor" id="protein-data-bank-and-rcsborg"></a>
          <h3>Protein Data Bank and RCSB.org</h3>
          <p>
            The Protein Data Bank (PDB) archives experimentally determined three
            dimensional (3D) structural data of biological macromolecules. In
            addition to providing access to 3D structural data, all members of
            the worldwide PDB (
            <a href="http://wwpdb.org/" target="_blank">
              wwPDB
            </a>
            ) offer tools to query the archive, and then organize, visualize,
            and analyze groups of structures to learn about any topic of
            interest. The Research Collaboratory for Structural Bioinformatics
            Protein Data Bank (RCSB PDB), website (RCSB.org) integrates
            information about properties and functions of proteins from a
            variety of publicly available bioinformatics data resources - e.g.,
            information about gene sequences, mutations, disease correlations,
            small molecule (drug) binding affinities. Mapping information
            integrated from these resources to 3D structural data can provide
            insights beyond what is available from the molecular structures
            alone. Users can access the structural and integrated information
            from the RCSB.org website for new perspectives about the topic of
            interest and ask new questions.
          </p>
          <a className="content-anchor" id="expanding-the-limits-of-pdb"></a>
          <h3>Expanding the limits of PDB</h3>
          <p>
            Although the PDB archive continues to rapidly grow in size and
            complexity, there are many millions of proteins whose structures
            have not yet been solved. For the past few decades researchers have
            been developing a variety of approaches for reliably predicting
            <a
              href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/computed-structure-models"
              target="_blank"
            >
              computed structure models
            </a>
            of proteins. In 2020, two different projects [AlphaFold2 (
            <a
              href="https://doi.org/10.1038/s41586-021-03819-2"
              target="_blank"
            >
              Jumper, J. et al., 2021
            </a>
            ,
            <a href="https://doi.org/10.1093/nar/gkab1061" target="_blank">
              Varadi M. et al., 2022
            </a>
            ) and RoseTTAFold (
            <a href="https://doi.org/10.1126/science.abj8754" target="_blank">
              Baek et al., 2021
            </a>
            )] used artificial intelligence (AI) and machine learning (ML) to
            successfully predict protein structures from their sequences. The
            approaches utilize knowledge of protein structures from the PDB, and
            vast amounts of protein sequencing data to compute these models.
            <br />
            <br />
            Access to reliable computed structure models (CSMs) has created new
            opportunities for molecular explorations and analysis. When
            experimental structures of the protein or complexes being studied
            are not available, CSMs can provide a great alternative and/or an
            initial model for data analysis, and hypothesis development. To make
            it easier for users to query, organize, visualize, analyze and
            compare experimental and predicted structures alongside each other,
            RCSB PDB has integrated CSMs from a few specific resources.
          </p>
          <a
            className="content-anchor"
            id="experimental-structures-and-csm-at-rcsborg"
          ></a>
          <h3>Experimental Structures and CSM at RCSB.org</h3>
          <p>
            Access to both experimental structure and CSMs on a topic of
            interest offers users insights and choice. When exploring
            structure-function relationships, experimental structures of a
            protein or parts of it are likely to be more accurate and have a
            higher level of confidence compared to CSMs. Yet CSMs can provide
            great starting models for the millions of proteins and their
            complexes whose structures have not been experimentally determined.
            It should be noted that the quality of CSMs may not be uniform -
            parts of the CSM that are computed based on existing PDB structures
            and various other experimental data are likely to be more accurate
            and predicted with a higher level of confidence. Learn
            <a
              href="/docs/general-help/assessing-the-quality-of-3d-structures"
              target="_blank"
            >
              more about the quality and confidence of experimental structures
              and CSMs
            </a>
            . As with experimental structures in the PDB, when using CSMs the
            accuracy and confidence of the 3D models should be considered in
            structure analysis and hypothesis development.
          </p>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a className="content-anchor" id="what-csms-are-available"></a>
          <h3>What CSMs are available?</h3>
          <p>
            The computed structure models from the following providers are
            integrated with RCSB.org:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a href="https://alphafold.ebi.ac.uk/" target="_blank">
                AlphaFold Protein Structure Database
              </a>
              . These models are state-of-the-art protein structure predictions
              based on amino-acid sequences, using an AI system called
              AlphaFold2 (
              <a
                href="https://doi.org/10.1038/s41586-021-03819-2"
                target="_blank"
              >
                Jumper et al., 2021
              </a>
              ,
              <a href="https://doi.org/10.1093/nar/gkab1061" target="_blank">
                Varadi M. et al., 2022
              </a>
              ). Here, we have included ~1,000,000 of these models at RCSB.org,
              using the pre-packaged collections of models made publicly
              available on
              <a
                href="https://ftp.ebi.ac.uk/pub/databases/alphafold/"
                target="_blank"
              >
                https://ftp.ebi.ac.uk/pub/databases/alphafold/
              </a>
              , which encompass four main groups of models (as listed on
              <a href="https://alphafold.ebi.ac.uk/download" target="_blank">
                https://alphafold.ebi.ac.uk/download
              </a>
              ):
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Model organism proteomes: Protein structure models from &gt;40
                different model organisms e.g., Arabidopsis, <i>E. coli</i>,
                fruit fly, human, soybean, and zebrafish.
              </li>
              <li>
                Global health proteomes: Protein structure models from various
                disease-causing organisms, e.g., <i>H. pylori</i>,
                <i>K. pneumoniae</i>, <i>M. tuberculosis</i>, and
                <i>P. falciparum</i>.
              </li>
              <li>
                Swiss-Prot sequences (the manually curated set of UniProt
                sequences).
              </li>
              <li>
                MANE (Matched Annotation from NCBI and EMBL-EBI) select
                sequences.
              </li>
            </ul>
            <li>
              <a href="https://modelarchive.org/" target="_blank">
                ModelArchive
              </a>
              : This database hosts user-submitted predictions of protein
              structures generated using a variety of approaches, e.g., homology
              modeling, ab initio, and deep learning techniques. The following
              CSM datasets from the ModelArchive have been integrated with
              RCSB.org:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                <a
                  href="https://modelarchive.org/doi/10.5452/ma-bak-cepc"
                  target="_blank"
                >
                  ma-bak-cepc
                </a>
                : Core eukaryotic protein complexes produced by the Baker lab
                using a combination of RoseTTAFold (
                <a
                  href="https://doi.org/10.1126/science.abj8754"
                  target="_blank"
                >
                  Baek et al., 2021
                </a>
                ) and AlphaFold2 (
                <a
                  href="https://doi.org/10.1126/science.abm4805"
                  target="_blank"
                >
                  Humphreys et al., 2021
                </a>
                )
              </li>
              <li>
                <a
                  href="https://modelarchive.org/doi/10.5452/ma-coffe-slac"
                  target="_blank"
                >
                  ma-coffe-slac
                </a>
                : Freshwater sponge proteins (modeled with ColabFold)
              </li>
              <li>
                <a
                  href="https://modelarchive.org/doi/10.5452/ma-asfv-asfvg"
                  target="_blank"
                >
                  ma-asfv-asfvg
                </a>
                : African swine fever virus proteins (modeled with AlphaFold)
              </li>
              <li>
                <a
                  href="https://modelarchive.org/doi/10.5452/ma-ornl-sphdiv"
                  target="_blank"
                >
                  ma-ornl-sphdiv
                </a>
                : Structural models of the Sphagnum divinum proteome modeled
                using AlphaFold2 (
                <a
                  href="https://ieeexplore.ieee.org/document/9835405"
                  target="_blank"
                >
                  https://ieeexplore.ieee.org/document/9835405
                </a>
                ).
              </li>
              <li>
                <a
                  href="https://www.modelarchive.org/doi/10.5452/ma-t3vr3"
                  target="_blank"
                >
                  ma-t3vr3
                </a>
                : Hetero-dimer set of proteins from cancer interactome modeled
                using AlphaFold (
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/36261849/"
                  target="_blank"
                >
                  https://pubmed.ncbi.nlm.nih.gov/36261849/
                </a>
                ).
              </li>
            </ul>
          </ul>
          <div></div>
          <a className="content-anchor" id="how-can-you-access-the-csms"></a>
          <h3>How can you access the CSMs?</h3>
          <p>
            The following approaches are available to identify experimental
            structures and CSMs in RCSB.org and query for them.
          </p>
          <a
            className="content-anchor"
            id="identifying-type-of-3d-structure"
          ></a>
          <h4>Identifying Type of 3D Structure</h4>
          <p>
            Specific icons (dark blue flask icon for experimental structures and
            cyan colored computer icon for CSMs) are now used throughout the
            website to quickly and easily identify the source of 3D models
            selected for visualization and/or analysis.
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/62d9b56b35ec5bb4ddb19a42/csm-t1.png"
                      data-toggle="lightbox"
                      data-title="Table 1: Icons used in RCSB.org to identify experimental structures and CSMs"
                    >
                      <img
                        style={{ width: '80%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/62d9b56b35ec5bb4ddb19a42/csm-t1.png"
                        alt="Table 1: Icons used in RCSB.org to identify experimental structures and CSMs"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Table 1: Icons used in RCSB.org to identify experimental
                    structures and CSMs
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a
            className="content-anchor"
            id="querying-for-structures-in-rcsborg-"
          ></a>
          <h4>Querying for Structures in RCSB.org</h4>
          <p>
            1. Options are available for structure queries to include CSMs
            alongside experimental structures (from the PDB) in the search
            results. When the toggle switch in the top search box is turned 'on'
            (i.e., is cyan-colored, as shown in Figure 1), CSMs are included in
            the search. Learn
            <a
              href="/docs/search-and-browse/basic-search#interface-description"
              target="_blank"
            >
              more about including/excluding CSMs in basic search
            </a>
            . The Advanced Search Query builder also has a similar toggle switch
            to include CSMs (Figure 2).
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/62d9b56b35ec5bb4ddb19a42/csm-f1-rev.png"
                      data-toggle="lightbox"
                      data-title="Figure 1: Top bar search options available from the RCSB.org home page"
                    >
                      <img
                        style={{ width: '85%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/62d9b56b35ec5bb4ddb19a42/csm-f1-rev.png"
                        alt="Figure 1: Top bar search options available from the RCSB.org home page"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 1: Top bar search options available from the RCSB.org
                    home page
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/62d9b56b35ec5bb4ddb19a42/csm-f2-rev.png"
                    data-toggle="lightbox"
                    data-title="Figure 2: Advanced Search Query Builder options available form the RCSB.org home page"
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/62d9b56b35ec5bb4ddb19a42/csm-f2-rev.png"
                      alt="Figure 2: Advanced Search Query Builder options available form the RCSB.org home page"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 2: Advanced Search Query Builder options available form
                  the RCSB.org home page
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            2. New structure attributes for CSMs have been added to search
            options so that specific queries based on source database and
            confidence level can be made (Figure 3). Learn
            <a
              href="/docs/search-and-browse/advanced-search/attribute-search#computed-structure-model-attributes"
              target="_blank"
            >
              more about the Computed Structure Model Attributes
            </a>
            .
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/62d9b56b35ec5bb4ddb19a42/csm-f3-rev.png"
                    data-toggle="lightbox"
                    data-title="Figure 3: Structure Attributes (properties) available to search for CSMs using the Advanced Search Query Builder.  "
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/62d9b56b35ec5bb4ddb19a42/csm-f3-rev.png"
                      alt="Figure 3: Structure Attributes (properties) available to search for CSMs using the Advanced Search Query Builder.  "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 3: Structure Attributes (properties) available to
                  search for CSMs using the Advanced Search Query Builder.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            3. Query results include icons to indicate whether matched
            structure(s) are experimental models or CSMs (Figure 4).
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/62d9b56b35ec5bb4ddb19a42/cs-f4.png"
                      data-toggle="lightbox"
                      data-title="Figure 4: Part of the Search Results page showing an experimental structure and a CSM, each marked with their respective icons (highlighted with a red outlined box). "
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive content-img-border"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/62d9b56b35ec5bb4ddb19a42/cs-f4.png"
                        alt="Figure 4: Part of the Search Results page showing an experimental structure and a CSM, each marked with their respective icons (highlighted with a red outlined box). "
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 4: Part of the Search Results page showing an
                    experimental structure and a CSM, each marked with their
                    respective icons (highlighted with a red outlined box).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            <b>Note</b>: Each CSM is assigned a specific ID in its source
            database and a prefix indicates the source of the model (“AF” for
            <a href="https://alphafold.ebi.ac.uk/" target="_blank">
              AlphaFold DB
            </a>
            , "MA" for
            <a href="https://www.modelarchive.org/" target="_blank">
              ModelArchive
            </a>
            ). AlphaFold DB identifiers are then followed by the UniProt
            accession number for the protein and by the fragment number (usually
            “F1”). However, in order to enable compatibility of the IDs with
            many of our services, including all of our APIs and visualization
            tools, we identify CSMs on RCSB.org using a modified version of the
            ID. This ID is used on the structure summary page, in searching for
            structures, in the search results page, and in various tools for 3D
            structure visualization and analysis. For example, for the AlphaFold
            structure AF-B3EWR1-F1, the RCSB.org assigned CSM ID is
            AF_AFB3EWR1F1 and is used in the query results page as shown in
            Figure 4. <br />
            <br />
            4. The default order of the search results is based on a relevancy
            score for the query criteria. The Refinements menu on the left of
            the query results page offers options to view only experimental
            structures or only CSMs in the search results (see Figure 5A). Learn
            <a
              href="/docs/search-and-browse/advanced-search/overview-advanced-search#the-results-page"
              target="_blank"
            >
              more about the query results page and refinements
            </a>
            . The order of the search results may also be changed according to a
            few options - e.g., view CSMs in the results first or last; order
            the CSMs by pLDDT scores (see Figure 5B).
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/62d9b56b35ec5bb4ddb19a42/csm-5.png"
                      data-toggle="lightbox"
                      data-title="Figure 5: Options to refine search results. A. Check boxes to selectively exclude experimental structures or CSMs; B. Options to order the search results to prioritize experimental structures or CSMs."
                    >
                      <img
                        style={{ width: '80%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/62d9b56b35ec5bb4ddb19a42/csm-5.png"
                        alt="Figure 5: Options to refine search results. A. Check boxes to selectively exclude experimental structures or CSMs; B. Options to order the search results to prioritize experimental structures or CSMs."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 5: Options to refine search results. A. Check boxes
                    to selectively exclude experimental structures or CSMs; B.
                    Options to order the search results to prioritize
                    experimental structures or CSMs.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <a
            className="content-anchor"
            id="what-can-you-do-with-the-csms-at-rcsborg"
          ></a>
          <h3>What can you do with the CSMs at RCSB.org?</h3>
          <p>
            You can search for, explore, visualize, analyze, and compare
            experimental structures and CSMs at RCSB.org.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Search for 3D structures</b> (experimental structures and CSMs)
              using a variety of search services, including searches based on
              attributes, sequences, sequence motifs, structures, and structure
              motifs.
            </li>
            <li>
              View individual <b>CSM structure summary pages</b> that provide a
              quick overview of quality based on confidence levels defined by
              pLDDT scores.
              <a
                href="/docs/exploring-a-3d-structure/structure-summary-page#header-"
                target="_blank"
              >
                Learn more here
              </a>
              .
            </li>
            <li>
              Each CSM structure summary page has options to
              <b>visualize and analyze its 3D structure</b> in a manner
              identical to that provided for experimental structures in the PDB.
            </li>
            <li>
              <b>Download the 3D coordinates</b> of any specific CSM structure
              from either the query results page or structure summary page. Note
              that requests to download batches of multiple CSM structures
              should be directed to the relevant model source database.
            </li>
            <li>
              <b>Group CSM structures together with experimental structures</b>
              to generate group views for comparison and analysis.
            </li>
            <li>
              <b>Perform comparative analyses</b> of protein 3D structures to
              find similarities within a set of CSMs or between CSM and PDB
              structures using the
              <a href="/alignment" target="_blank">
                pairwise structure alignment tool
              </a>
              .
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="models-and-assembly"></a>
          <h3>Models and Assembly</h3>
          <p>
            The CSMs available from the RCSB.org make no claims about predicting
            higher order oligomeric assemblies. However, to include CSMs in
            structure based query and analysis (e.g., Find similar assembly,
            Structure search, Structure motif search), the model coordinates of
            CSMs are also included as Assemblies - i.e., for CSMs the Model and
            Assembly coordinates are identical.
          </p>
          <a className="content-anchor" id="examples"></a>
          <h2>Examples</h2>
          <ol style={{ paddingLeft: '40px' }}>
            <li>
              Query for
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_entity_source_organism.taxonomy_lineage.name%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22Mytilus%20galloprovincialis%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%2220ef239e464d86b0dbb9f9845b4a2965%22%7D%7D"
                target="_blank"
              >
                proteins (including CSMs) from the Mediterranean mussel
              </a>
              (Mytilus galloprovincialis).
            </li>
            <li>
              Structure summary page for the
              <a href="/structure/AF_AFQ6WV90F1" target="_blank">
                Histone-4 protein of Mytilus galloprovincialis
              </a>
              (from AlphaFoldDB).
            </li>
            <li>
              Query for
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_entity_source_organism.taxonomy_lineage.name%22%2C%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22Homo%20sapiens%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_entry_info.structure_determination_methodology%22%2C%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22computational%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_ma_qa_metric_global.ma_qa_metric_global.value%22%2C%22operator%22%3A%22greater%22%2C%22negation%22%3Afalse%2C%22value%22%3A90%7D%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_ma_qa_metric_global.ma_qa_metric_global.type%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22pLDDT%22%2C%22negation%22%3Afalse%7D%7D%5D%2C%22label%22%3A%22nested-attribute%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22026f761b6afd4bc6800767695c1465eb%22%7D%7D"
                target="_blank"
              >
                high-quality (pLDDT &gt; 90) computed structure models of human
                proteins
              </a>
              .
            </li>
            <li>
              Query for
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_uniprot_protein.name.value%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22Myoglobin%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22group_by_return_type%22%3A%22groups%22%2C%22group_by%22%3A%7B%22aggregation_method%22%3A%22sequence_identity%22%2C%22ranking_criteria_type%22%3A%7B%22sort_by%22%3A%22rcsb_entry_info.resolution_combined%22%2C%22direction%22%3A%22asc%22%7D%2C%22similarity_cutoff%22%3A30%7D%2C%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%2C%7B%22sort_by%22%3A%22size%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%227b0ddd8d2333fa082bf11b60816012cb%22%7D%7D"
                target="_blank"
              >
                3D structures of myoglobin grouped by 30% sequence identity and
                displayed as groups
              </a>
              .
            </li>
            <li>
              Query for
              <a
                href="/docs/search-and-browse/advanced-search/search-examples#no-experimental-structures-available"
                target="_blank"
              >
                mouse CSMs that do not have a corresponding experimental
                structure
              </a>
              .
            </li>
          </ol>
          <div></div>
          <a className="content-anchor" id="references"></a>
          <h2>References</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Baek, M., DiMaio, F., Anishchenko, I., Dauparas, J., Ovchinnikov,
              S., Lee, G. R., Wang, J., Cong, Q., Kinch, L. N., Schaeffer, R.
              D., Millán, C., Park, H., Adams, C., Glassman, C. R., DeGiovanni,
              A., Pereira, J. H., Rodrigues, A. V., van Dijk, A. A., Ebrecht, A.
              C., Opperman, D. J., … Baker, D. (2021). Accurate prediction of
              protein structures and interactions using a three-track neural
              network. Science, 373, 871–876.
              <a href="https://doi.org/10.1126/science.abj8754" target="_blank">
                https://doi.org/10.1126/science.abj8754
              </a>
            </li>
            <li>
              Jumper, J., Evans, R., Pritzel, A. et al. (2021) Highly accurate
              protein structure prediction with AlphaFold. Nature 596, 583–589 .
              <a
                href="https://doi.org/10.1038/s41586-021-03819-2"
                target="_blank"
              >
                https://doi.org/10.1038/s41586-021-03819-2
              </a>
            </li>
            <li>
              Humphreys, I. R., Pei, J., Baek, M., Krishnakumar, A.,
              Anishchenko, I., Ovchinnikov, S., Zhang, J., Ness, T. J., Banjade,
              S., Bagde, S. R., Stancheva, V. G., Li, X. H., Liu, K., Zheng, Z.,
              Barrero, D. J., Roy, U., Kuper, J., Fernández, I. S., Szakal, B.,
              Branzei, D., … Baker, D. (2021). Computed structures of core
              eukaryotic protein complexes. Science, 374(6573), eabm4805.
              <a href="https://doi.org/10.1126/science.abm4805" target="_blank">
                https://doi.org/10.1126/science.abm4805
              </a>
            </li>
            <li>
              Varadi, M., Anyango, S., Deshpande, M., Nair, S., Natassia, C.,
              Yordanova, G., Yuan, D., Stroe, O., Wood, G., Laydon, A., Žídek,
              A., Green, T., Tunyasuvunakool, K., Petersen, S., Jumper, J.,
              Clancy, E., Green, R., Vora, A., Lutfi, M., Figurnov, M., Cowie,
              A., Hobbs, N., Kohli, P., Kleywegt, G., Birney, E., Hassabis, D.,
              Velankar, S. (2022). AlphaFold Protein Structure Database:
              massively expanding the structural coverage of protein-sequence
              space with high-accuracy models, Nucleic Acids Research, 50,
              D439–D444,
              <a href="https://doi.org/10.1093/nar/gkab1061" target="_blank">
                https://doi.org/10.1093/nar/gkab1061
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
        <div>Last updated: 2/1/2023</div>
      </div>
    </div>
  );
};
