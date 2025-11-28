export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Advanced Search</h5>
        <h1>Search Examples</h1>
        <div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#full-text-and-attribute-search">
              Full-Text and Attribute Search
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#macromolecules">Macromolecules</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#macromolecular-composition-search">
              Macromolecular Composition Search
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#macromolecule-type-search">Macromolecule Type Search</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#modified-residues-search">Modified Residues Search</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#chimeric-macromolecular-entities-search">
              Chimeric Macromolecular Entities Search
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#sequence-similarity-and-alignments">
              Sequence Similarity and Alignments
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#sequence-motif-search">Sequence Motif Search</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#structure-motif-search">Structure Motif Search</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#assemblies">Assemblies</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#assembly-composition">Assembly Composition</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#ligands">Ligands</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■<a href="#free-vs-polymeric-ligands">Free vs. Polymeric Ligands</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#structure-ligand-complexes">Structure-Ligand Complexes</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#ligand-of-interest-loi">Ligand Of Interest (LOI)</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#binding-affinity">Binding Affinity</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#chemical-components">Chemical Components</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#drug-search">Drug Search</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#publications">Publications</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#computed-structure-models-csms">
              Computed Structure Models (CSMs)
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#no-experimental-structures-available">
              No Experimental Structures available:
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#predicted-structure-confidence">
              Predicted structure confidence
            </a>
          </div>
          <p>
            The
            <a
              href="/search/help/advanced-search"
              target="_blank"
              rel="noopener"
            >
              Advanced Search Query Builder
            </a>
            provides a powerful search interface to build complex scientific
            queries with multiple search conditions, that combine different
            attributes, inputs, operators, and groupings. Several sample queries
            are provided below.
          </p>
          <a className="content-anchor" id="full-text-and-attribute-search"></a>
          <h3>Full-Text and Attribute Search</h3>
          <p>
            You can use the "Full-Text" option to search for words or phrases in
            all attributes available on the Advanced Search menu. The
            "Full-Text" search allows you to quickly find results related to a
            particular topic, regardless of the context. However, the more
            general your search is, the more results it is likely to return and
            the more likely the results will be loosely related to your search
            criteria. Note, that the Advanced Search attributes include terms
            coming from the mmCIF files as well as data integrated from
            third-party bio-resources.
          </p>
          <p>
            This
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22greater_or_equal%22%2C%22negation%22%3Afalse%2C%22value%22%3A%222020-08-11T00%3A00%3A00Z%22%2C%22attribute%22%3A%22rcsb_accession_info.initial_release_date%22%7D%2C%22node_id%22%3A1%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22contains_phrase%22%2C%22negation%22%3Atrue%2C%22value%22%3A%22luciferase%22%2C%22attribute%22%3A%22rcsb_pubmed_abstract_text%22%7D%2C%22node_id%22%3A2%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%2C%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22full_text%22%2C%22parameters%22%3A%7B%22value%22%3A%22luciferase%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22label%22%3A%22full_text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%221a3575a81c3a74a33bc5ef63f363c5de%22%7D%7D"
              target="_blank"
              rel="noopener"
            >
              search example
            </a>
            queries structures having the "luciferase" term in any attribute and
            excludes PubMed abstracts from the search to avoid unwanted matches.
          </p>
          <p>
            If possible, it is best to specify particular search attributes
            explicitly rather than using the "Full-Text" search. Use the
            examples below to see how the Attribute Search options can be used
            to perform specific searches.
          </p>
          <a className="content-anchor" id="macromolecules"></a>
          <h3>Macromolecules</h3>
          <p>
            The polymers in PDB structures can be proteins, DNA, RNA, and
            DNA/RNA hybrids. Polymer Instances (a.k.a chains) are the individual
            copies of distinct macromolecules. A structure may contain multiple
            copies of identical macromolecules.
          </p>
          <a
            className="content-anchor"
            id="macromolecular-composition-search"
          ></a>
          <h4>Macromolecular Composition Search</h4>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              This
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22equals%22%2C%22negation%22%3Afalse%2C%22value%22%3A1%2C%22attribute%22%3A%22rcsb_entry_info.deposited_polymer_entity_instance_count%22%7D%2C%22node_id%22%3A0%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22Protein%20(only)%22%2C%22attribute%22%3A%22rcsb_entry_info.selected_polymer_entity_types%22%7D%2C%22node_id%22%3A1%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22range%22%2C%22negation%22%3Afalse%2C%22value%22%3A%7B%22from%22%3A350%2C%22to%22%3A400%2C%22include_lower%22%3Atrue%2C%22include_upper%22%3Atrue%7D%2C%22attribute%22%3A%22rcsb_entry_info.deposited_polymer_monomer_count%22%7D%2C%22node_id%22%3A2%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%226c76e129e09995d95f4d275862bf0c74%22%7D%7D"
                target="_blank"
                rel="noopener"
              >
                search example
              </a>
              queries structures with a single protein chain (and no others) of
              length between 350-400 residues;
            </li>
            <li>
              This
              <a
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22greater%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_entry_info.polymer_entity_count_RNA%22%7D%2C%22node_id%22%3A0%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%229d86fd0df8d6003d2eb2735ca616caa6%22%7D%7D"
                target="_blank"
                rel="noopener"
              >
                search example
              </a>
              queries structures that contain an RNA polymer, regardless of what
              other polymer types the structures may or may not contain.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="macromolecule-type-search"></a>
          <h4>Macromolecule Type Search</h4>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              This
              <a href="https://tinyurl.com/4msbw7rw" target="_blank">
                search example
              </a>
              queries for all <b>membrane protein</b> structures in the PDB (as
              annotated by the resources PDBTM, MemProtMD, OPM, or mpstruc).
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="modified-residues-search"></a>
          <h4>Modified Residues Search</h4>
          <p>
            Modified residues are non-standard polymeric components (i.e.
            non-standard amino acids in protein sequences or non-standard
            nucleotides in nucleic acid sequences).
          </p>
          <p>
            This
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_polymer_entity_feature_summary.count%22%2C%22negation%22%3Afalse%2C%22operator%22%3A%22greater%22%2C%22value%22%3A0%7D%2C%22node_id%22%3A0%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_polymer_entity_feature_summary.type%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22modified_monomer%22%7D%2C%22node_id%22%3A1%7D%5D%2C%22label%22%3A%22nested-attribute%22%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%224a38931360804a9003e9032bdd707450%22%7D%7D"
              target="_blank"
              rel="noopener"
            >
              example
            </a>
            shows how to find structures with modified residues.
          </p>
          <a
            className="content-anchor"
            id="chimeric-macromolecular-entities-search"
          ></a>
          <h4>Chimeric Macromolecular Entities Search</h4>
          <p>
            Polymeric sequences in the PDB are some times engineered by fusing
            sequence fragments from different organisms. These are known as
            chimeric entities.
            <a href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22greater%22%2C%22negation%22%3Afalse%2C%22value%22%3A1%2C%22attribute%22%3A%22rcsb_polymer_entity.rcsb_source_taxonomy_count%22%7D%2C%22node_id%22%3A0%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%224ca8bfa8724bac843b2283e77d188242%22%7D%7D">
              This search
            </a>
            will find any PDB entry containing chimeric entities.
          </p>
          <a
            className="content-anchor"
            id="sequence-similarity-and-alignments"
          ></a>
          <h4>Sequence Similarity and Alignments</h4>
          <p>
            The
            <a
              target="_blank"
              rel="noopener"
              href="/search/help/sequence-search"
            >
              Sequence Search
            </a>
            can be used to find similar protein and nucleic acid sequences from
            the PDB archive. When using the Sequence Search, select
            <b>Polymer Entities</b> from the <b>Display Results as</b> menu to
            include a graphical display of pairwise sequence alignment and its
            statistics to the search results page.
          </p>
          <p>
            E-Value and Sequence Identity Cutoff (%) filters help removing
            irrelevant or distantly related sequences. By default, the search
            allows to match the widest range of sequences. For example, the
            default E-Value = 1 indicates that results may contain sequences
            with similar score simply by chance. The default Identity Cutoff (%)
            = 0 indicates that results may contain sequences with low sequence
            similarity.
          </p>
          <p>
            This
            <a
              target="_blank"
              rel="noopener"
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22sequence%22%2C%22parameters%22%3A%7B%22evalue_cutoff%22%3A1%2C%22identity_cutoff%22%3A0%2C%22target%22%3A%22pdb_protein_sequence%22%2C%22value%22%3A%22MDAESIEWKLTANLRNGPTFFQPLADSIEPLQFKLIGSDTVATAFPVFDTKYIPDSLINYLFKLFNLEIESGKTYPQLHSLTKQGFLNYWFHSFAVVVLQTDEKFIQDNQDWNSVLLGTFYIKPNYAPRCSHNCNAGFLVNGAHRGQKVGYRLAQVYLNWAPLLGYKYSIFNLVFVTNQASWKIWDKLNFQRIGLVPHAGILNGFSEPVDAIIYGKDLTKIEPEFLSME%22%7D%2C%22label%22%3A%22sequence%22%2C%22node_id%22%3A0%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22sequence%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%22d90fa2a404c722826f43c067ccf71959%22%7D%7D"
            >
              search query
            </a>
            finds sequences similar to the "N-acetyltransferase MPR1" protein
            from the Baker's yeast. The result includes "Gcn5-related
            N-acetyltransferase" protein that is related but exhibits poor
            sequence homology to the query sequence.
          </p>
          <p>
            Refer to the
            <a
              target="_blank"
              rel="noopener"
              href="/docs/sequence-viewers/protein-sequence-alignment-view"
            >
              Protein Sequence Alignment View
            </a>
            page for a complete documentation of the sequence alignment display.
          </p>
          <a className="content-anchor" id="sequence-motif-search"></a>
          <h4>Sequence Motif Search</h4>
          <p>
            The
            <a
              target="_blank"
              rel="noopener"
              href="/search/help/sequence-motif-search"
            >
              Sequence Motif Search
            </a>
            searches protein and nucleic acid sequences that match a sequence
            motif. A Sequence Motif can be an exact sequence or a sequence
            pattern expressed by regular expression syntax.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The sequence motif search allows searching for arbitrarily short
              sequence fragments, for example:
              <br />
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22seqmotif%22%2C%22parameters%22%3A%7B%22pattern_type%22%3A%22simple%22%2C%22target%22%3A%22pdb_protein_sequence%22%2C%22value%22%3A%22NPPTP%22%7D%2C%22label%22%3A%22seqmotif%22%2C%22node_id%22%3A0%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%22a1de3bb73ceb295fdc0915aa058929a9%22%7D%7D"
              >
                NPPTP
              </a>
            </li>
            <li>
              The motif search supports wildcard queries by placing an 'X' at
              the variable residue position. A query for SH3 domains using the
              consequence sequence -X-P-P-X-P (where X is a variable residue and
              P is Proline) can be expressed as:
              <br />
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22seqmotif%22%2C%22parameters%22%3A%7B%22pattern_type%22%3A%22simple%22%2C%22target%22%3A%22pdb_protein_sequence%22%2C%22value%22%3A%22XPPXP%22%7D%2C%22label%22%3A%22seqmotif%22%2C%22node_id%22%3A0%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%22a9d9b8d0ce9d0f701a8d35a49bff976d%22%7D%7D"
              >
                XPPXP
              </a>
            </li>
            <li>
              Ranges of variable residues are specified by the notation, where n
              is the number of variable residues. To query a motif with seven
              variables between residues W and G and twenty variable residues
              between G and L use the following notation:
              <br />
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22seqmotif%22%2C%22parameters%22%3A%7B%22pattern_type%22%3A%22simple%22%2C%22target%22%3A%22pdb_protein_sequence%22%2C%22value%22%3A%22WX%7B7%7DGX%7B20%7DL%22%7D%2C%22label%22%3A%22seqmotif%22%2C%22node_id%22%3A0%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%2295a5f05e071328c775d01abf10ca31c3%22%7D%7D"
              >
                WX{7}GX{20}L
              </a>
            </li>
            <li>
              Variable ranges are expressed by the notation, where n is the
              minimum and m the maximum number of repetitions. For example the
              zinc finger motif that binds Zn in a DNA-binding domain can be
              expressed as:
              <br />
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22seqmotif%22%2C%22parameters%22%3A%7B%22pattern_type%22%3A%22simple%22%2C%22target%22%3A%22pdb_protein_sequence%22%2C%22value%22%3A%22CX%7B2%2C4%7DCX%7B12%7DHX%7B3%2C5%7DH%22%7D%2C%22label%22%3A%22seqmotif%22%2C%22node_id%22%3A0%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%226e461d09ed61dec40a322b456642b4b2%22%7D%7D"
              ></a>
            </li>
            <li>
              The '^' operator searches for sequence motifs at the beginning of
              a protein sequence. The following two queries find sequences with
              N-terminal Histidine tags:
              <br />
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22seqmotif%22%2C%22parameters%22%3A%7B%22pattern_type%22%3A%22regex%22%2C%22target%22%3A%22pdb_protein_sequence%22%2C%22value%22%3A%22%5EHHHHHH%22%7D%2C%22label%22%3A%22seqmotif%22%2C%22node_id%22%3A0%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%2242d068af89bd6c67614bef276913a313%22%7D%7D"
              >
                ^HHHHHH
              </a>
              or
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22seqmotif%22%2C%22parameters%22%3A%7B%22pattern_type%22%3A%22regex%22%2C%22target%22%3A%22pdb_protein_sequence%22%2C%22value%22%3A%22%5EH%7B6%7D%22%7D%2C%22label%22%3A%22seqmotif%22%2C%22node_id%22%3A0%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%228efb53f42411d3007b00b378e36c17d5%22%7D%7D"
              >
                ^H{6}
              </a>
            </li>
            <li>
              Square brackets specify alternative residues at a particular
              position. The Walker (P loop) motif that binds ATP or GTP can be
              expressed as:
              <br />
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22seqmotif%22%2C%22parameters%22%3A%7B%22pattern_type%22%3A%22regex%22%2C%22target%22%3A%22pdb_protein_sequence%22%2C%22value%22%3A%22%5BAG%5D....GK%5BST%5D%22%7D%2C%22label%22%3A%22seqmotif%22%2C%22node_id%22%3A0%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%221678da973e91f7753cd839f37e5e41d8%22%7D%7D"
              >
                [AG]....GK[ST]
              </a>
              <br /> A or G are followed by 4 variable residues, then G and K,
              and finally S or T.
            </li>
          </ul>
          <div></div>
          <p>
            When using the Sequence Motif Search, select <b>Polymer Entities</b>
            from the <b>Display Results as</b> menu to include sequence
            positions where motif is found in the matched sequences.
          </p>
          <a className="content-anchor" id="structure-motif-search"></a>
          <h4>Structure Motif Search</h4>
          <p>
            This
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22strucmotif%22%2C%22parameters%22%3A%7B%22value%22%3A%7B%22entry_id%22%3A%221A0J%22%2C%22residue_ids%22%3A%5B%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A40%7D%2C%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A84%7D%2C%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A177%7D%5D%7D%2C%22rmsd_cutoff%22%3A2%2C%22atom_pairing_scheme%22%3A%22ALL%22%2C%22exchanges%22%3A%5B%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A40%7D%2C%22allowed%22%3A%5B%22HIS%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A84%7D%2C%22allowed%22%3A%5B%22ASP%22%5D%7D%2C%7B%22residue_id%22%3A%7B%22label_asym_id%22%3A%22A%22%2C%22struct_oper_id%22%3A%221%22%2C%22label_seq_id%22%3A177%7D%2C%22allowed%22%3A%5B%22SER%22%5D%7D%5D%7D%7D%2C%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_comp_model_provenance.source_db%22%2C%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22AlphaFoldDB%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22assembly%22%2C%22request_options%22%3A%7B%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22a966e00759495935e9bbb4bc171679b3%22%7D%7D"
              target="_blank"
            >
              search example
            </a>
            queries for CSMs from AlphaFold that contain the Serine protease
            catalytic triad motif (as seen in PDB entry 1a0j). <br />
            The steps for running this query are listed here:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Begin by going to the
              <a href="/structure/1a0j" target="_blank">
                structure summary page of the PDB entry 1a0j
              </a>
              .
            </li>
            <li>
              Open the
              <a href="/3d-sequence/1A0J?assemblyId=1" target="_blank">
                1D-3D view
              </a>
              for this structure by clicking on the link available below the
              image on this page.
            </li>
            <li>
              Based on the annotations presented, find and click on the active
              site residues in the 1D (sequence) section while holding the shift
              button. This should allow selection of all 3 active site residues
              simultaneously, and these residues should be highlighted in the 3D
              panel.
            </li>
            <li>
              Click on the Toggle Expanded Viewport button in the Toggle menu
              (on the right on the 3D canvas) to gain access to all Mol*
              functionalities.
            </li>
            <li>
              Click on the Submit Search options under structure motif search in
              the Controls panel (on the right of the page).
            </li>
            <li>
              This search will run on all experimental structures and CSMs.
              Refine the search results returned by selecting AlphaFold under
              CSM Source Database in the left hand Refinements menu.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="assemblies"></a>
          <h3>Assemblies</h3>
          <p>
            The biological assembly is the arrangement of macromolecules in the
            structure that is believed to be the biologically meaningful
            molecular assembly.
          </p>
          <a className="content-anchor" id="assembly-composition"></a>
          <h4>Assembly Composition</h4>
          <p>
            Below are examples of searches that query biological assemblies with
            different compositional features:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              This
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22equals%22%2C%22negation%22%3Afalse%2C%22value%22%3A12%2C%22attribute%22%3A%22rcsb_assembly_info.polymer_entity_instance_count%22%7D%2C%22node_id%22%3A0%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22assembly%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%229eaeff0aefd9bf6039e40218fb4e9eba%22%7D%7D"
              >
                search example
              </a>
              queries the total number of polymers in the biological assembly,
              regardless of whether that includes multiple identical molecules
              or different molecules.
            </li>
            <li>
              This
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22equals%22%2C%22negation%22%3Afalse%2C%22value%22%3A1%2C%22attribute%22%3A%22rcsb_assembly_info.polymer_entity_instance_count%22%7D%2C%22node_id%22%3A0%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22equals%22%2C%22negation%22%3Afalse%2C%22value%22%3A1%2C%22attribute%22%3A%22rcsb_assembly_info.polymer_entity_instance_count_protein%22%7D%2C%22node_id%22%3A1%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22range%22%2C%22negation%22%3Afalse%2C%22value%22%3A%7B%22from%22%3A350%2C%22to%22%3A400%2C%22include_lower%22%3Atrue%2C%22include_upper%22%3Atrue%7D%2C%22attribute%22%3A%22rcsb_assembly_info.polymer_monomer_count%22%7D%2C%22node_id%22%3A2%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22assembly%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%2248d2ec5aeb15469748ed43306d37deee%22%7D%7D"
              >
                search example
              </a>
              queries biological assemblies with a single protein chain (and no
              others) of length between 350-400 residues.
            </li>
            <li>
              This
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22Homo%2024-mer%22%2C%22attribute%22%3A%22rcsb_struct_symmetry.oligomeric_state%22%7D%2C%22node_id%22%3A0%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22assembly%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%2271d804cff3ccebf27af73c96207f5404%22%7D%7D"
              >
                search example
              </a>
              queries biological assemblies that contain exactly 24 identical
              chains. For example, the biological assembly of the ferritin
              <a target="_blank" rel="noopener" href="/structure/1AEW">
                1aew
              </a>
              is comprised of 24 copies of a single polymer chain.
            </li>
            <li>
              This
              <a href="https://tinyurl.com/5n77wrxx" target="_blank">
                search example
              </a>
              queries for immunoglobulin Fab fragments bound to a dimeric
              antigen (i.e., the assembly should have 2 Fab heavy chains, 2 Fab
              light chains, 2 antigen chains) using a stoichiometry based search
              (A2B2C2) AND a structure based search for a Fab light chain (e.g.,
              using the PDB structure
              <a href="/structure/1BJ1" target="_blank">
                1bj1,
              </a>
              chain A).
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="ligands"></a>
          <h3>Ligands</h3>
          <p>
            Ligands are chemical substances that form a complex with larger
            biomolecule(s).
          </p>
          <a className="content-anchor" id="free-vs-polymeric-ligands"></a>
          <h4>Free vs. Polymeric Ligands</h4>
          <p>
            Most ligands are considered “standalone ligands” that interact
            non-covalently with macromolecules. Less frequently, ligands can be
            covalently linked to macromolecules or other heterogen groups.
          </p>
          <p>
            Find structures with adenosine triphosphate (
            <a target="_blank" rel="noopener" href="/ligand/ATP">
              ATP
            </a>
            ) where:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              ATP is present as a
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22ATP%22%2C%22attribute%22%3A%22rcsb_nonpolymer_instance_feature_summary.comp_id%22%7D%2C%22node_id%22%3A0%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22HAS_COVALENT_LINKAGE%22%2C%22attribute%22%3A%22rcsb_nonpolymer_instance_feature_summary.type%22%7D%2C%22node_id%22%3A1%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22equals%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_nonpolymer_instance_feature_summary.count%22%7D%2C%22node_id%22%3A2%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%22070af295f5be8596d541af749bfff6c7%22%7D%7D"
              >
                standalone ligand
              </a>
            </li>
            <li>
              ATP is present as a
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22ATP%22%2C%22attribute%22%3A%22rcsb_nonpolymer_instance_feature_summary.comp_id%22%7D%2C%22node_id%22%3A0%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22HAS_COVALENT_LINKAGE%22%2C%22attribute%22%3A%22rcsb_nonpolymer_instance_feature_summary.type%22%7D%2C%22node_id%22%3A1%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22greater%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_nonpolymer_instance_feature_summary.count%22%7D%2C%22node_id%22%3A2%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%223cb5e7dcfd7bb44cbabab54feae88c87%22%7D%7D"
              >
                covalently linked ligand
              </a>
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="structure-ligand-complexes"></a>
          <h4>Structure-Ligand Complexes</h4>
          <p>
            This
            <a
              target="_blank"
              rel="noopener"
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22greater%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_entry_info.nonpolymer_entity_count%22%7D%2C%22node_id%22%3A0%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%2276834a1f3c0a30b2a7818967de44d43a%22%7D%7D"
            >
              search example
            </a>
            queries complexes with ligands of any type.
          </p>
          <p>
            You can also narrow down this search to include only complexes with
            specific features. For example:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              This
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22greater%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_entry_info.polymer_entity_count_protein%22%7D%2C%22node_id%22%3A0%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22greater%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_entry_info.nonpolymer_entity_count%22%7D%2C%22node_id%22%3A1%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22equals%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_entry_info.polymer_entity_count_RNA%22%7D%2C%22node_id%22%3A2%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22equals%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_entry_info.polymer_entity_count_DNA%22%7D%2C%22node_id%22%3A3%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22equals%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_entry_info.polymer_entity_count_nucleic_acid_hybrid%22%7D%2C%22node_id%22%3A4%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22X-RAY%20DIFFRACTION%22%2C%22attribute%22%3A%22exptl.method%22%7D%2C%22node_id%22%3A5%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%220b0fa6641f47d01dcf44541c3f5e5dca%22%7D%7D"
              >
                search example
              </a>
              queries the protein-ligand complexes solved using X-ray
              diffraction experimental technique;
            </li>
            <li>
              This
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22equals%22%2C%22negation%22%3Afalse%2C%22value%22%3A1%2C%22attribute%22%3A%22rcsb_entry_info.polymer_entity_count_protein%22%7D%2C%22node_id%22%3A0%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22greater%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_entry_info.nonpolymer_entity_count%22%7D%2C%22node_id%22%3A1%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22equals%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_entry_info.polymer_entity_count_RNA%22%7D%2C%22node_id%22%3A2%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22equals%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_entry_info.polymer_entity_count_DNA%22%7D%2C%22node_id%22%3A3%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22equals%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_entry_info.polymer_entity_count_nucleic_acid_hybrid%22%7D%2C%22node_id%22%3A4%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22Staphylococcus%20aureus%20(strain%20N315)%22%2C%22attribute%22%3A%22rcsb_entity_source_organism.taxonomy_lineage.name%22%7D%2C%22node_id%22%3A5%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%223e035a3a4efc7136223de69767c5b7dd%22%7D%7D"
              >
                search example
              </a>
              queries the complexes of proteins from Staphylococcus aureus
              (strain N315) with ligands.
            </li>
            <li>
              This
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22equals%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_entry_info.polymer_entity_count_protein%22%7D%2C%22node_id%22%3A0%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22greater%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_entry_info.nonpolymer_entity_count%22%7D%2C%22node_id%22%3A1%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22equals%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_entry_info.polymer_entity_count_RNA%22%7D%2C%22node_id%22%3A2%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22greater%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_entry_info.polymer_entity_count_DNA%22%7D%2C%22node_id%22%3A3%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22equals%22%2C%22negation%22%3Afalse%2C%22value%22%3A0%2C%22attribute%22%3A%22rcsb_entry_info.polymer_entity_count_nucleic_acid_hybrid%22%7D%2C%22node_id%22%3A4%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22X-RAY%20DIFFRACTION%22%2C%22attribute%22%3A%22exptl.method%22%7D%2C%22node_id%22%3A5%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22Y%22%2C%22attribute%22%3A%22rcsb_accession_info.has_released_experimental_data%22%7D%2C%22node_id%22%3A6%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22less_or_equal%22%2C%22negation%22%3Afalse%2C%22value%22%3A0.2%2C%22attribute%22%3A%22refine.ls_R_factor_R_work%22%7D%2C%22node_id%22%3A7%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22less_or_equal%22%2C%22negation%22%3Afalse%2C%22value%22%3A0.214%2C%22attribute%22%3A%22refine.ls_R_factor_R_free%22%7D%2C%22node_id%22%3A8%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22operator%22%3A%22less_or_equal%22%2C%22negation%22%3Afalse%2C%22value%22%3A2%2C%22attribute%22%3A%22rcsb_entry_info.resolution_combined%22%7D%2C%22node_id%22%3A9%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%22f409b26ddb484e4e964539bf9548e78c%22%7D%7D"
              >
                search example
              </a>
              queries the DNA-ligand complexes from structures with following
              experimental details:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Experimental method: X-Ray diffraction</li>
              <li>Refinement X-Ray Resolution: 0-2</li>
              <li>Refinement R-Factors (R Work): 0-0.2</li>
              <li>Refinement R-Factors (R Free): 0-0.214</li>
              <li>Has Experimental data: Yes</li>
            </ul>
          </ul>
          <div></div>
          <a className="content-anchor" id="ligand-of-interest-loi"></a>
          <h4>Ligand Of Interest (LOI)</h4>
          <p>
            Structures may include small molecules annotated as "ligands of
            interest", meaning that a small molecule is a subject of the
            author’s research.
          </p>
          <p>
            This
            <a
              target="_blank"
              rel="noopener"
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_nonpolymer_entity_annotation.comp_id%22%2C%22negation%22%3Afalse%2C%22operator%22%3A%22exists%22%7D%2C%22node_id%22%3A0%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_nonpolymer_entity_annotation.type%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22SUBJECT_OF_INVESTIGATION%22%7D%2C%22node_id%22%3A1%7D%5D%2C%22label%22%3A%22nested-attribute%22%7D%5D%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%2263b1ef534105a7719f0ec1ea781afbd8%22%7D%7D"
            >
              search example
            </a>
            queries structures that contain "ligand(s) of interest".
          </p>
          <a className="content-anchor" id="binding-affinity"></a>
          <h4>Binding Affinity</h4>
          <p>
            You can search for structure-ligand complexes with associated
            binding affinity data coming from
            <a target="_blank" rel="noopener" href="http://www.bindingdb.org">
              BindingDB
            </a>
            ,
            <a
              target="_blank"
              rel="noopener"
              href="http://www.bindingmoad.org/"
            >
              BindingMOAD
            </a>
            , and
            <a target="_blank" rel="noopener" href="http://www.pdbbind-cn.org">
              PDBbind-CN
            </a>
            resources.
          </p>
          <p>Binding affinity measurement are of one of the following types:</p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>IC50:</b> the concentration of ligand that reduces enzyme
              activity by 50%;
            </li>
            <li>
              <b>EC50</b>: the concentration of compound that generates a
              half-maximal response;
            </li>
            <li>
              <b>Kd</b>: dissociation constant;
            </li>
            <li>
              <b>Ka</b>: association constant;
            </li>
            <li>
              <b>Ki</b>: enzyme inhibition constant;
            </li>
            <li>
              <b>ΔG</b>: Gibbs free energy of binding (for association
              reaction);
            </li>
            <li>
              <b>ΔH</b>: change in enthalpy associated with a chemical reaction;
            </li>
            <li>
              <b>-TΔS</b>: change in entropy associated with a chemical
              reaction.
            </li>
          </ul>
          <div></div>
          <p>
            The concentration constants (IC50, EC50) and binding constants (Ki,
            Kd) are given in <b>nM</b>; The thermodynamic parameters (ΔG, ΔH,
            -TΔS) are given in <b>kJ/mol</b>; Association binding constant (Ka)
            is given in
            <b>
              M<sup>-1</sup>
            </b>
            .
          </p>
          <p>
            For example,
            <a
              target="_blank"
              rel="noopener"
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_binding_affinity.value%22%2C%22negation%22%3Afalse%2C%22operator%22%3A%22equals%22%2C%22value%22%3A2%7D%2C%22node_id%22%3A0%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_binding_affinity.type%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22EC50%22%7D%2C%22node_id%22%3A1%7D%5D%2C%22label%22%3A%22nested-attribute%22%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22label%22%3A%22query-builder%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A100%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22src%22%3A%22ui%22%2C%22query_id%22%3A%22bcce569e1ddbb49f566ed07d7df497a4%22%7D%7D"
            >
              this search
            </a>
            returns structure-ligand complexes with an EC50 = 2 nM, e.g. the
            Thyroid Hormone Receptor from
            <a target="_blank" rel="noopener" href="/structure/3GWS">
              3GWS
            </a>
            structure has an EC50 of 2 nM for 3,5,3'TRIIODOTHYRONINE (
            <a target="_blank" rel="noopener" href="/ligand/T3">
              T3
            </a>
            ).
          </p>
          <a className="content-anchor" id="chemical-components"></a>
          <h3>Chemical Components</h3>
          <p>
            Chemical Components include all residues (present in protein or
            nucleic acid sequences), small molecules (ligands) as well as
            peptide-like antibiotic and inhibitor molecules found in the PDB
            archive.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              This
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text_chem%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_chem_comp_container_identifiers.comp_id%22%2C%22operator%22%3A%22in%22%2C%22negation%22%3Afalse%2C%22value%22%3A%5B%22ATP%22%5D%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22label%22%3A%22text_chem%22%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22c484cd2647ad413998cdb16fc8b98b17%22%7D%7D"
              >
                search example
              </a>
              queries structures containing a particular chemical component
              (e.g. adenosine triphosphate) using the chemical component ID
              found in the
              <a
                target="_blank"
                rel="noopener"
                href="http://www.wwpdb.org/data/ccd"
              >
                Chemical Component Dictionary
              </a>
              . Examples:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                <b>ATP</b> - for adenosine triphosphate
              </li>
              <li>
                <b>HEM</b> - for heme group
              </li>
              <li>
                <b>MSE</b> - for Selenomethionine when it is not part of the
                protein polymers
              </li>
              <li>
                <b>ZN</b> - for zink ion
              </li>
              <li>
                <b>F</b> - for fluoride ion
              </li>
            </ul>
            <li>
              This
              <a
                target="_blank"
                rel="noopener"
                href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text_chem%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22chem_comp.name%22%2C%22operator%22%3A%22contains_words%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22biotin%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22label%22%3A%22text_chem%22%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%2290dbda2b8b1c87dec1bfedf379a9feee%22%7D%7D"
              >
                search example
              </a>
              queries structures containing a particular molecule (e.g. biotin),
              using the molecule name.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="drug-search"></a>
          <h3>Drug Search</h3>
          <p>
            Search by drug name as annotated by DrugBank is possible by using
            the Synonyms field under the Chemical Components section.
          </p>
          <p>
            This
            <a
              target="_blank"
              rel="noopener"
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text_chem%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_chem_comp_synonyms.name%22%2C%22operator%22%3A%22contains_words%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22aciclovir%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22label%22%3A%22text_chem%22%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%220b2d907a69d3b977bcd683e44bd7725e%22%7D%7D"
            >
              search example
            </a>
            queries structures containing drug aciclovir, which maps to chemical
            component
            <a href="/ligand/AC2" rel="noopener">
              AC2
            </a>
            .
          </p>
          <a className="content-anchor" id="publications"></a>
          <h3>Publications</h3>
          <p>
            Search for PDB structures that do not have a publication associated
            with it. <br />
            This
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_primary_citation.rcsb_journal_abbrev%22%2C%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22To%20be%20published%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22label%22%3A%22text%22%7D%5D%7D%2C%22return_type%22%3A%22entry%22%2C%22request_info%22%3A%7B%22query_id%22%3A%22c7b6f77828296e1443fea2ba72e791d6%22%7D%2C%22request_options%22%3A%7B%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22scoring_strategy%22%3A%22combined%22%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%7D%7D"
              target="_blank"
            >
              search example
            </a>
            queries for structures in the PDB that have the primary publication
            journal listed as "To be published".
          </p>
          <a className="content-anchor" id="computed-structure-models-csms"></a>
          <h3>Computed Structure Models (CSMs)</h3>
          <p>
            As of August 2022, CSMs predicted by AlphaFold2 (Jumper et al.,
            2021) and RoseTTAFold (Baek et al., 2021)] are available from
            RCSB.org for query, visualization, and analysis.
          </p>
          <a
            className="content-anchor"
            id="no-experimental-structures-available"
          ></a>
          <h4>No Experimental Structures available:</h4>
          <p>
            To search for
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_entity_source_organism.taxonomy_lineage.name%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22Mus%20musculus%22%2C%22negation%22%3Afalse%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22logical_operator%22%3A%22and%22%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22polymer_entity%22%2C%22request_options%22%3A%7B%22group_by_return_type%22%3A%22groups%22%2C%22group_by%22%3A%7B%22aggregation_method%22%3A%22matching_uniprot_accession%22%2C%22ranking_criteria_type%22%3A%7B%22sort_by%22%3A%22rcsb_entry_info.resolution_combined%22%2C%22direction%22%3A%22asc%22%7D%7D%2C%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22size%22%2C%22direction%22%3A%22asc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22b46e7e2ed424f2238f716618bd3eae79%22%7D%7D"
              target="_blank"
            >
              mouse proteins that have CSMs but do not have a corresponding
              experimental structure
            </a>
            .<br />
            Approach the problem as follows to see examples:
            <br />
            1. Search for all mouse sequences
            <br />
            2. Group by UniProt ID
            <br />
            3. Order results by group size (starting from smallest)
            <br />
            The groups of size 1 that are listed first mostly contain only
            models with no experimental data.
          </p>
          <a className="content-anchor" id="predicted-structure-confidence"></a>
          <h4>Predicted structure confidence</h4>
          <p>
            Query for
            <a
              href="/search?request=%7B%22query%22%3A%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_entity_source_organism.taxonomy_lineage.name%22%2C%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22Homo%20sapiens%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_entry_info.structure_determination_methodology%22%2C%22operator%22%3A%22exact_match%22%2C%22negation%22%3Afalse%2C%22value%22%3A%22computational%22%7D%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%7B%22type%22%3A%22group%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22group%22%2C%22logical_operator%22%3A%22and%22%2C%22nodes%22%3A%5B%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_ma_qa_metric_global.ma_qa_metric_global.value%22%2C%22operator%22%3A%22greater%22%2C%22negation%22%3Afalse%2C%22value%22%3A90%7D%7D%2C%7B%22type%22%3A%22terminal%22%2C%22service%22%3A%22text%22%2C%22parameters%22%3A%7B%22attribute%22%3A%22rcsb_ma_qa_metric_global.ma_qa_metric_global.type%22%2C%22operator%22%3A%22exact_match%22%2C%22value%22%3A%22pLDDT%22%2C%22negation%22%3Afalse%7D%7D%5D%2C%22label%22%3A%22nested-attribute%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%5D%2C%22label%22%3A%22text%22%7D%5D%2C%22logical_operator%22%3A%22and%22%7D%2C%22return_type%22%3A%22entry%22%2C%22request_options%22%3A%7B%22results_content_type%22%3A%5B%22computational%22%2C%22experimental%22%5D%2C%22paginate%22%3A%7B%22start%22%3A0%2C%22rows%22%3A25%7D%2C%22sort%22%3A%5B%7B%22sort_by%22%3A%22score%22%2C%22direction%22%3A%22desc%22%7D%5D%2C%22scoring_strategy%22%3A%22combined%22%7D%2C%22request_info%22%3A%7B%22query_id%22%3A%22026f761b6afd4bc6800767695c1465eb%22%7D%7D"
              target="_blank"
            >
              high-quality (pLDDT &gt; 90) computed structure models of human
              proteins
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
        <div>Last updated: 11/4/2022</div>
      </div>
    </div>
  );
};
