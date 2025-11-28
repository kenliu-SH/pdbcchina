export default () => {
  return (
    <>
      <div className="col-lg-9 col-md-8 col-sm-12 content-item">
        <div data-elastic-include="">
          <h5 className="menu-path">General Help</h5>
          <h1>Identifiers in PDB</h1>
          <div>
            <div style={{ paddingLeft: '20px' }}>
              ● <a href="#overview">Overview</a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○
              <a href="#relevance-of-identifiers-in-pdb-exploration">
                Relevance of Identifiers in PDB Exploration
              </a>
            </div>
            <div style={{ paddingLeft: '20px' }}>
              ●
              <a href="#identifiers-conventions-and-examples">
                Identifiers, Conventions, and Examples
              </a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○ <a href="#entry-level-identifiers-">Entry level Identifiers </a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○
              <a href="#entity-level-identifiers-">Entity level Identifiers:</a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○
              <a href="#instance-level-identifiers">
                Instance level Identifiers:
              </a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■
              <a href="#macromolecular-instance-id">
                Macromolecular Instance ID
              </a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■
              <a href="#small-molecule-instance-id">
                Small Molecule Instance ID
              </a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■
              <a href="#oligosaccharide-instance-id">
                Oligosaccharide Instance ID
              </a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○
              <a href="#assembly-level-identifiers">
                Assembly level Identifiers
              </a>
            </div>
            <a className="content-anchor" id="overview"></a>
            <h2>Overview</h2>
            <p>
              Identifiers or IDs are commonly used in data resources to point to
              specific data contents. They may also be used to connect different
              data resources and indicate their relationships.
            </p>
            <p>
              In the PDB, identifiers are used at all levels of the structural
              hierarchy in the entry. This includes:
            </p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>4-character PDB ID for the entry</li>
              <li>Numeric ID for the assemblies in the entry</li>
              <li>1- or 2-character chain ID for instances of entities</li>
              <li>3-character IDs for residues and small molecules</li>
              <li>
                “ATOM” or “HETATM” ID, and 4-character atom names for individual
                atoms
              </li>
            </ul>
            <div></div>
            <p>
              These identifiers are used to specifically select, visualize,
              locate a specific instance of a ligand, amino acid in a protein
              chain in a particular PDB entry. Hence learning about them can
              help specifically locate, visualize, and analyze all or specific
              parts of PDB structures.
            </p>
            <a
              className="content-anchor"
              id="relevance-of-identifiers-in-pdb-exploration"
            ></a>
            <h3>Relevance of Identifiers in PDB Exploration</h3>
            <p>
              The PDB archives the location (three-dimensional coordinates) of
              each atom in a structure. In order to explore the structure and
              analyze molecular interactions in atomic detail, the locations of
              each atom in the PDB must be uniquely assigned. Various
              identifiers are used to specifically indicate one atom or groups
              of atoms. These identifiers enable users to visually or
              programmatically select one or more atoms of interest in order to
              visualize the selected atoms, specifically represent them as
              ribbons, ball and stick, or spacefill, and/or analyze them (such
              as measuring distances, angles, and torsions).
            </p>
            <p>
              In addition, some IDs are also drawn from other data resources and
              are included either in the data files or in the RCSB archive for
              ease in connecting PDB data to related information (such as
              protein or nucleic acid sequences and EM maps). As a result, these
              IDs can be used for rapidly searching an archive for specific
              structures related to a topic of interest.
            </p>
            <a
              className="content-anchor"
              id="identifiers-conventions-and-examples"
            ></a>
            <h2>Identifiers, Conventions, and Examples</h2>
            <p>
              Various types of identifiers used at different levels of
              organization in the PDB are used for query and browsing. Some of
              the key identifiers used for searching, cross-referencing with
              other data resources, and pin-pointing data fields at various
              organizational levels are described here with examples. Learn more
              about
              <a href="/docs/general-help/organization-of-3d-structures-in-the-protein-data-bank">
                Organization of 3D Structures in the Protein Data Bank
              </a>
              .
            </p>
            <a className="content-anchor" id="entry-level-identifiers-"></a>
            <h3>Entry level Identifiers</h3>
            <p>
              Experimental Structures <br />
              Every experimental structure in the PDB is assigned a 4-character
              alphanumeric identifier called the PDB identifier or <b>PDB ID</b>
              (<i>e.g., 2hbs</i>). In some cases, large groups of structures
              (e.g., a protein bound to a series of different inhibitors/drugs)
              are submitted to the PDB. In addition to PDB IDs these structures
              have an additional identifier, called the <b>Group ID</b> (
              <i>e.g., G_1002018</i>). The structure(s) may be described in the
              scientific literature, so associated <b>PubMed IDs</b> (
              <i>e.g., 28436492</i>) may be used to search the archive for these
              structures. Structures determined by Electron Microscopy must have
              associated
              <b>
                <b>EMDB ID</b>
              </b>
              s (<i>e.g., EMD-21578</i>) that connect the structure to EM maps
              that were used to solve the structure or to maps of related
              structures.
              <br />
              <br />
              Computed Structure Models (CSMs) <br />
              Currently, there is no community-wide standard to enforce naming
              conventions for CSMs. Custom identifiers were introduced to
              normalize and sanitize entry identifiers during loading and make
              them an integral aspect of RCSB.org infrastructure. These
              identifiers are namespaced and indicate the source repository (
              <i>e.g., AF-A0A452S449-F1</i> from AlphaFold DB and
              <i>ma-bak-cepc-0001</i> from ModelArchive). This aligns with
              <b>extended PDB ID codes</b> (<i>e.g., PDB_00001ABC</i>,
              <a href="/news/607760112786e73a79c76f9d" target="_blank">
                rcsb.org/news/607760112786e73a79c76f9d
              </a>
              ), which will become necessary when the pool of 4-character PDB
              identifiers has been exhausted. The original identifiers are
              retained to ensure interoperability with external resources and
              for searching using the original identifiers.
            </p>
            <a className="content-anchor" id="entity-level-identifiers-"></a>
            <h3>Entity level Identifiers:</h3>
            <p>Entities in the structure may be</p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                macromolecules or polymers (e.g., proteins or nucleic acids)
              </li>
              <li>
                oligosaccharides or branched polymers (e.g., hyaluronic acid)
              </li>
              <li>
                small molecules or non-polymers (e.g., ligands, inhibitors, and
                individual residues)
              </li>
              <li>
                complex small molecules with macromolecule-like composition
                (e.g., peptide-like inhibitors and antibiotics also called
                Biologically Interesting or BIRD molecules)
              </li>
            </ul>
            <div></div>
            <p>
              A Protein or peptide (short fragment of protein) whose sequence
              has been mapped to UniProt includes a<b>UniProt Accession Code</b>
              (<i>e.g., P01019</i>) for that entity. Similarly gene sequences
              mapped to
              <b>GenBank have associated GenBank Accession Codes</b> (
              <i>e.g., 55771382</i>).
            </p>
            <p>
              A small molecule, ligand, or individual residue has a
              <b>Chemical ID</b> assigned in the Chemical Component reference
              Dictionary (<i>e.g., ATP</i>), while a complex small molecule such
              as a peptide-like inhibitor, antibiotic, or well-known di- or
              trisaccharide has a Biologically Interesting molecule Reference
              Dictionary identifier or <b>BIRD ID</b> (<i>e.g., PRD_000006</i>).
            </p>
            <p>
              Within a PDB entry all entities are assigned unique IDs (
              <i>e.g., entity 1</i>). The <b>Entity ID</b> is specific to the
              particular structure (
              <i>e.g., 4HHB_1 refers to entity 1 in PDB entry 4HHB</i>) and is
              used to track its properties throughout the file - such as name,
              sequence, source, and links to IDs from other databases or
              dictionaries (<i>e.g., UniProt, GenBank, Chemical, BIRD</i>)
            </p>
            <a className="content-anchor" id="instance-level-identifiers"></a>
            <h3>Instance level Identifiers:</h3>
            <p>
              An instance is a distinct copy of an entity or molecule. Instance
              level IDs are assigned according to the type of entity.
            </p>
            <a className="content-anchor" id="macromolecular-instance-id"></a>
            <h4>Macromolecular Instance ID</h4>
            <p>
              Macromolecules are polymeric chains made of covalently linked
              building blocks, such as amino acids and nucleotides. For each
              instance of protein or nucleic acid in the entry <b>Chain IDs</b>(
              <i>e.g., A, A1, AA</i> ) are assigned. Two sets of chain IDs are
              found in each PDB entry - one assigned by the PDB (
              <code>label_asym_id</code>), usually beginning with the alphabet
              A, and the other selected by the author (<code>auth_asym_id</code>
              ) at the time of deposition. Most commonly both these chain IDs
              are the same but in some instances they may differ - e.g., in PDB
              ID
              <a href="/structure/2OR1" target="_blank">
                2or1
              </a>
              , the author assigned chain IDs for the protein chains in the
              entry are L and R, while the PDB assigned ones are C and D
              respectively.
            </p>
            <p>
              The polymer sequences are included in the PDB file, both in FASTA
              format (one-character codes) and as a list of Chemical IDs (or
              three-character codes) of amino acids from the N- to C-terminal
              end. Any residue in a polymer chain is specified by specifying its
              <b>chemical ID</b> (<i>e.g., SER</i> for the amino acid Serine)
              and <b>residue number</b>, or position in the polymer chain. Two
              residue numbering schemes are included for each residue (amino
              acid or nucleotide) in the file - a PDB assigned sequential
              numbering (<code>label_seq_id</code>) that starts from 1, and an
              author-specified numbering (<code>auth_seq_id</code>) that may
              match the numbering of related structures reported in the
              literature and/or the numbering of associated sequence database (
              <i>e.g., UniProt</i>) entries.
            </p>
            <p>
              For example, in PDB ID
              <a href="/structure/6KR6" target="_blank">
                6kr6,
              </a>
              the amino acids in protein Piwi have a PDB assigned sequential
              numbering from 1-810, while the author defined residue numbers are
              from 34-843 to match the UniProt numbering. While some
              visualization tools may display both residue numbers, as included
              in the cif format file, others tools may use only the one listed
              in the PDB format file, i.e., the residue numbers from the
              author.” Learn more about
              <a
                href="http://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/beginner%E2%80%99s-guide-to-pdb-structures-and-the-pdbx-mmcif-format"
                target="_blank"
              >
                PDB and PDBx/mmCIF format files
              </a>
              .
            </p>
            <p>
              In some cases selected residues or parts of residues may have
              alternate locations as determined by the experiment. Each
              alternate location of a particular atom is differentiated with a
              unique <b>Alt ID</b>. For example, the residue number Ser 9 in
              Chain D in PDB entry 1trz has two atoms, each with alternate IDs A
              and B. When all the atoms of a structure have multiple locations,
              they are presented as multiple models and assigned unique
              <b>Model IDs</b>, often seen in NMR structures (
              <i>
                e.g., PDB ID
                <a href="/structure/2kpq" target="_blank">
                  2kpq
                </a>
              </i>
              ).
            </p>
            <p>
              Each atom in each residue is assigned a specific <b>atom name</b>
              in accordance with the
              <a href="https://www.wwpdb.org/data/ccd" target="_blank">
                Chemical Component Dictionary
              </a>
              maintained by the PDB (
              <i>
                e.g., N, CA, C, O, CB, OG are names of all the non-hydrogen
                atoms in Serine
              </i>
              ). All instances of serine in a structure will use the same atom
              names but will be assigned a unique combination of entity, and
              instance (or chain) ID, and residue number. If appropriate Alt IDs
              will also be specified. For example, in the PDB ID
              <a href="/structure/1TRZ" target="_blank">
                1trz
              </a>
              , chain ID D, Ser 9, two of its atoms (CB and OG) have Alt IDs A
              and B.
            </p>
            <a className="content-anchor" id="small-molecule-instance-id"></a>
            <h4>Small Molecule Instance ID</h4>
            <p>
              Small molecules such as ligands, ions, drugs, inhibitors, and
              individual residues (amino acids, nucleotides etc.) are found in
              PDB structures interacting with macromolecules such as proteins,
              and nucleic acids. They are assigned the chain ID of the
              (spatially) closest macromolecule. For example, all ligands, water
              molecules, etc. nearest protein chain A will also be assigned to
              chain A, though each of these small molecules will have unique
              residue numbers. So all ligands, waters etc. near a protein with
              chain ID A will be assigned the same chain ID. However, each of
              these small molecules and ligands can be specifically located by
              using unique residue numbers.
              <br />
            </p>
            <p>
              Atom names for all atoms in a small molecule are assigned
              according to the
              <a href="https://www.wwpdb.org/data/ccd" target="_blank">
                Chemical Component Dictionary
              </a>
              .
            </p>
            <a className="content-anchor" id="oligosaccharide-instance-id"></a>
            <h4>Oligosaccharide Instance ID</h4>
            <p>
              Oligosaccharides are polymers of sugars that are covalently linked
              to form linear or branched chains. Like proteins or nucleic acids
              all instances of oligosaccharides are assigned unique chain IDs.
            </p>
            <p>
              Oligosaccharides are often found covalently linked to protein
              (e.g., glycoproteins). If a single sugar molecule is covalently
              linked to a protein it is treated like a small molecule and
              assigned the chain ID of the protein it is linked to. If 2 or more
              sugars covalently linked to each other via glycosidic bonds they
              are assigned a unique chain ID.
            </p>
            <p>
              Atoms in each sugar molecule are assigned atom names according to
              the
              <a href="https://www.wwpdb.org/data/ccd" target="_blank">
                Chemical Component Dictionary
              </a>
              .
            </p>
            <a className="content-anchor" id="assembly-level-identifiers"></a>
            <h3>Assembly level Identifiers</h3>
            <p>
              Experimentally determined structures submitted to the PDB contain
              coordinates of macromolecules and small molecules that may
              represent a complete biologically relevant assembly, a portion of
              an assembly, or multiple copies of an assembly. Numerical
              <b>Assembly IDs </b>are assigned to each biologically relevant
              assembly. These IDs are entry-specific, can be used to visualize
              or download and provide instructions for defining specific
              biological assemblies. For example, when multiple assemblies are
              present in the entry (or structure), the assembly ID is used to
              group specific instances of entities that form each assembly (
              <i>
                e.g., see PDB ID
                <a href="/structure/2HBS" target="_blank">
                  2hbs
                </a>
              </i>
              ). The Assembly ID may also be used for providing instructions to
              apply symmetry operations (denoted by Asymmetric Unit IDs for
              <b>Asym IDs</b>) to generate the biologically relevant assembly (
              <i>
                e.g., see PDB ID
                <a href="/structure/1out" target="_blank">
                  1ou
                </a>
                t
              </i>
              ).
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
          <div>Last updated: 11/9/2022</div>
        </div>
      </div>
    </>
  );
};
