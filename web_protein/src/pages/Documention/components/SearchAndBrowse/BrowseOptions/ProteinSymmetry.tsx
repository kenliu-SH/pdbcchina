export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Search and Browse &gt; Browse Options</h5>
        <h1>Protein Symmetry</h1>
        <div>
          <a className="content-anchor" id="what-is-protein-symmetry"></a>
          <h4>What is Protein Symmetry?</h4>
          <p>
            Many proteins interact with each other to form symmetrical
            assemblies. Participating proteins or subunits in such assemblies
            are related by symmetry operations. <br />
            <br />
            The advantage of symmetrical assemblies is that they bring together
            multiple functional sites into close proximity for biological
            function; build large, functional shapes from many copies of a
            smaller protein subunit (they are economical to encode in the
            genome); and provide mechanisms for regulation of protein functions.
            The majority of symmetrical assemblies have perfect symmetry - i.e.,
            all subunits have identical interactions with their neighbors.
            However, in some cases the subunits are related by apparent but not
            exact symmetry (called pseudosymmetry). The approximate symmetries
            may play a key role in their function - for example, similar (but
            not identical) subunits may form an assembly that interacts with a
            small molecule ligand and/or another protein. To learn more about
            types of symmetry present in PDB assemblies, see the
            <a
              href="/docs/general-help/symmetry-resources-in-the-pdb"
              target="_blank"
            >
              Symmetry Resources in the PDB
            </a>
            page.
            <br />
            <br />
            Since symmetry is an essential feature of biomolecules, the RCSB
            provides information on the symmetries found within all complexes in
            the archive. This information is calculated and updated weekly. The
            RCSB also provides methods for finding structures and/or assemblies
            based on their symmetry.
          </p>
          <a
            className="content-anchor"
            id="why-use-the-protein-symmetry-browser"
          ></a>
          <h4>Why use the Protein Symmetry Browser?</h4>
          <p>
            Oligomeric assemblies are stabilized by specific interactions.
            Exploring these interactions can provide insights into how an
            assembly is formed. In some cases, changes in the environment or
            inclusion of a small molecule or protein regulator can change the
            local and/or global assembly symmetries. Using this browser provides
            opportunities to examine protein assemblies that have similar
            symmetrical arrangements and explore interactions that lead to
            biological functions, cooperativity, and/or regulation.
          </p>
          <a
            className="content-anchor"
            id="how-to-use-the-protein-symmetry-browser"
          ></a>
          <h4>How to use the Protein Symmetry Browser?</h4>
          <p>
            The
            <a href="/search/browse/symmetry" target="_blank">
              Protein Symmetry Browser
            </a>
            combines two different ways of organizing assemblies in the PDB -
            level of symmetry and type of symmetry operation.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              You can search for a specific type of point symmetry by its
              Schoenflies symbol (e.g., Cn, Dn, T, O, or I) or by helical
              symmetry H. Learn
              <a
                href="https://onlinelibrary.wiley.com/iucr/itc/Ac/ch3o3v0001/sec3o3o1.pdf"
                target="_blank"
              >
                more about Schoenflies symbols
              </a>
              .
            </li>
            <li>
              If you are looking for a specific level of symmetry - i.e., global
              symmetry, local symmetry, or pseudo symmetry, you can first search
              for the level of symmetry and then the symmetry operation of
              interest.
            </li>
          </ul>
          <div></div>
          <p>
            Once you have identified a level of symmetry and type of symmetry
            operation, you can view the associated polymer entities in the PDB
            and select the ones you wish to explore.
          </p>
          <a className="content-anchor" id="examples"></a>
          <h4>Examples</h4>
          <p>
            1. Browse through structures with <b>global Cyclic symmetry</b>
            (C5).
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Open the browse tree as follows: Global Symmetry &gt;&gt; Cyclic
              &gt;&gt; C5 &gt;&gt; Homo-5-mer
            </li>
            <li>
              The number listed next to the symmetry class (Homo-5-mer)
              indicates the number of assemblies that match the selected
              symmetry. Clicking on it will launch a search for all assemblies
              in the PDB that are associated with the level and type of
              symmetry.
            </li>
          </ul>
          <div></div>
          <p>
            2. Browse through structures with <b>local Cyclic symmetry</b> (C5).
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Open the browse tree as follows: Local Symmetry &gt;&gt; Cyclic
              &gt;&gt; C5 &gt;&gt; Homo-5-mer
            </li>
            <li>
              The number listed next to the symmetry class (Homo-5-mer)
              indicates the number of assemblies that match the selected
              symmetry. Clicking on it will launch a search for all assemblies
              in the PDB that are associated with the level and type of
              symmetry.
            </li>
          </ul>
          <div></div>
          <p>
            3. Browse through structures with <b>pseudo Cyclic symmetry</b>
            (C5).
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Open the browse tree as follows: Local Symmetry &gt;&gt; Cyclic
              &gt;&gt; C5 &gt;&gt; Homo-5-mer
            </li>
            <li>
              The number listed next to the symmetry class (Homo-5-mer)
              indicates the number of assemblies that match the selected
              symmetry. Clicking on it will launch a search for all assemblies
              in the PDB that are associated with the level and type of
              symmetry.
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
        <div>Last updated: 1/20/2022</div>
      </div>
    </div>
  );
};
