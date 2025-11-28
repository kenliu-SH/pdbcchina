export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">General Help</h5>
        <h1>Organization of 3D Structures in the Protein Data Bank</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#overview">Overview</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#definitions">Definitions</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#relevance-in-exploring-the-pdb">
              Relevance in Exploring the PDB
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#example">Example</a>
          </div>
          <hr></hr>
          <p>
            Video:
            <a href="https://youtu.be/jSk0KgcQWl8" target="_blank">
              Entry, Entity, Assembly, and Instance
            </a>
          </p>
          <hr></hr>
          <a className="content-anchor" id="overview"></a>
          <h2>Overview</h2>
          <p>
            Biomolecules are hierarchical structures. For example, proteins are
            composed of linear chains of amino acids that (often) fold into
            compact subunits which then can associate into higher level
            assemblies with other proteins, small molecule ligands, and water or
            other solvent molecules. Biomolecules in the Protein Data Bank (PDB)
            archive are organized and represented using this hierarchy to
            simplify searching and exploration.
          </p>
          <a className="content-anchor" id="definitions"></a>
          <h3>Definitions</h3>
          <p>
            Four levels of hierarchy are commonly used: Entry, Entity, Instance,
            and Assembly:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '40px' }}>
            <li>
              An ENTRY is all data pertaining to a particular structure
              deposited in the PDB and is designated with a 4-character
              alphanumeric identifier called the PDB identifier or PDB ID (e.g.,
              2hbs).
            </li>
            <li>
              An ENTITY is a chemically unique molecule that may be polymeric,
              such as a protein chain or a DNA strand, or non-polymeric, such as
              a soluble ligand. Some entries may even have branched polymeric
              entities, such as oligosaccharides.
            </li>
            <li>
              An INSTANCE is a particular occurrence of an ENTITY. An ENTRY may
              contain multiple INSTANCES of an ENTITY, for example, many copies
              of a protein chain in a homooligomeric protein.
            </li>
            <li>
              An ASSEMBLY is a biologically relevant group of one or more
              INSTANCES of one or more ENTITIES that are associated with each
              other to form a stable complex and/or perform a function.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="relevance-in-exploring-the-pdb"></a>
          <h3>Relevance in Exploring the PDB</h3>
          <p>
            Understanding the hierarchy in these terms can help with exploring
            the PDB, searching for and identifying relevant structures, and
            visualizing/analyzing them meaningfully.
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '40px' }}>
            <li>
              Every ENTRY in the PDB contains at least one polymer ENTITY or one
              branched ENTITY (either a linear or branched oligosaccharide). The
              ENTRY is identified by a PDB ID.
            </li>
            <li>
              Since there can be multiple INSTANCES of a given ENTITY in the
              ENTRY, each INSTANCE of polymer or branched ENTITY is given a
              unique chain identifier or chain ID (of one or more alphanumeric
              characters; e.g., A, AA, ...). Chain IDs provide an easy way to
              refer to, select, and display every specific INSTANCE of each
              polymer and branched ENTITY. However, there is no specific
              rationale for assignment of chain IDs. Therefore, chain IDs
              assigned to an ENTITY in two different ENTRIES of the same protein
              may be different. Learn more about the identifiers
              <a href="/docs/general-help/identifiers-in-pdb">here</a>.
            </li>
            <li>
              Each INSTANCE of a non-polymer ENTITY is identified by the chain
              ID of the closest neighboring INSTANCE of a polymer ENTITY and is
              additionally distinguished with unique numbering (e.g., two heme
              groups associated with the same protein chain with ID = A may be
              identified as A101 and A102).
            </li>
            <li>
              The various groupings of ENTITY INSTANCES forming ASSEMBLIES are
              assigned assembly IDs (e.g., 1, 2, ...).
            </li>
          </ul>
          <div></div>
          <p>
            In summary, a deposited ENTRY contains one or more INSTANCES of at
            least one polymer or branched ENTITY arranged in one or more
            ASSEMBLIES.
          </p>
          <a className="content-anchor" id="example"></a>
          <h2>Example</h2>
          <a
            href="https://cdn.rcsb.org/rcsb-pdb/content/5fc537b03fb4b83beba83b23/Organization.jpg"
            data-toggle="lightbox"
          >
            <img
              style={{ width: '100%' }}
              className="img-responsive"
              src="https://cdn.rcsb.org/rcsb-pdb/content/5fc537b03fb4b83beba83b23/Organization.jpg"
            />
          </a>
          <div></div>
          <ol style={{ paddingLeft: '40px' }}>
            <li>
              PDB ENTRY 2hbs includes two complete sickle cell hemoglobin
              tetramers, which contain heme cofactors and are surrounded by many
              water molecules.
            </li>
            <li>
              Each tetramer is an ASSEMBLY (with distinct Biological Assembly
              IDs) and is made up of two polymer ENTITIES: two INSTANCES of the
              alpha chain (shown in orange and yellow) and two INSTANCES of the
              beta chain (shown in shades of blue). The tetramer also includes
              four INSTANCES of heme (associated with the four INSTANCES of the
              protein chains) and many INSTANCES of water. The two tetramer
              ASSEMBLIES of hemoglobin are nearly identical. In cells, this
              tetramer is the functional unit that binds to and delivers oxygen
              in the blood.
            </li>
            <li>
              In addition to the polymeric ENTITIES, the ENTRY includes two
              non-polymeric ENTITIES: heme (with residue name HEM, shown here in
              red) and water (residue name HOH, shown in green). There are eight
              INSTANCES of heme, each bound to either an alpha or beta chain,
              and several hundred INSTANCES of water in the ENTRY.
            </li>
            <li>
              This ENTRY includes two polymeric ENTITIES, the alpha chain and
              the beta chain.
            </li>
            <li>
              Here, all four INSTANCES of the alpha chain ENTITY are colored
              (waters not shown for clarity).
            </li>
            <li>
              Here, one INSTANCE of the alpha chain ENTITY is colored (waters
              not shown for clarity).
            </li>
          </ol>
          <div></div>
        </div>
      </div>
      <br></br>
      <hr></hr>
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
