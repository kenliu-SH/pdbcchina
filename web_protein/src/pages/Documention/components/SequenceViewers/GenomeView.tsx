export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Sequence Viewers</h5>
        <h1>Genome View</h1>
        <div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#overview">Overview</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#genome-viewer-use">Genome Viewer Use</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#how-to">How-To</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#responsive-and-interactive-properties">
              Responsive and Interactive Properties
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#for-advanced-users">For Advanced Users</a>
          </div>
          <a className="content-anchor" id="overview"></a>
          <h4>Overview</h4>
          <p>
            The Genome View provides graphical summaries of the correspondences
            between PDB entity sequences and genomes. Protein and genome
            alignments are loaded from the RCSB PDB
            <a href="https://1d-coordinates.rcsb.org/#1d-coordinates-api">
              1D Coordinate Server
            </a>
            . This resource integrates alignments from multiple resources and
            databases including <a href="https://www.uniprot.org/">UniProtKB</a>
            , <a href="https://www.ncbi.nlm.nih.gov/refseq/">RefSeq</a> and
            <a href="https://www.ebi.ac.uk/pdbe/docs/sifts/index.html">SIFTS</a>
            . This view will display what regions of the different gene products
            are covered by the PDB entity and will allow to explore the
            relationships between residue indexes and their corresponding
            nucleotide coordinates at genome level.
          </p>
          <a className="content-anchor" id="genome-viewer-use"></a>
          <h4>Genome Viewer Use</h4>
          <p>The Genome Viewer can be used:</p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>To see the mapping between proteins and genes</b>: Blocks
              display the position of PDB Entities (Blue), NCBI proteins (Green)
              and UniProt proteins (purple)
            </li>
            <li>
              <b>To see the genome reading frame</b>: A white circle points to
              the reading frame direction. If the circle is located on the left
              side of the track, the protein is mapped onto the negative DNA
              strand (3') and the sequence is read right to left. If the circle
              is on the right side, the protein is mapped on the positive strand
              (5') and is read left to right
            </li>
            <li>
              <b>To see intron/exon boundaries</b>: Exons are represented as
              solid boxes while introns are displayed as dashed lines connecting
              boxes
            </li>
          </ul>
          <div></div>
          <a
            href="https://cdn.rcsb.org/rcsb-pdb/content/5fc7f2843fb4b83beb6a7a3d/image2.png"
            data-toggle="lightbox"
          >
            <img
              style={{ width: '100%' }}
              className="img-responsive"
              src="https://cdn.rcsb.org/rcsb-pdb/content/5fc7f2843fb4b83beb6a7a3d/image2.png"
            />
          </a>
          <div></div>
          <a className="content-anchor" id="documentation"></a>
          <h4>Documentation</h4>
          <p>
            This feature is available from the Genome View Tab on the Structure
            Summary Page. For example, clicking on the Genome Tab for a PDB
            entry (e.g. <a href="/genome/5IIT">5IIT</a>) the mapping of the
            protein sequence of the protein entities (
            <a href="https://www.uniprot.org/">UniProtKB</a> and
            <a href="https://www.ncbi.nlm.nih.gov/refseq/">NCBI RefSeq</a>) is
            displayed at genome level.
          </p>
          <p>For each mapping the following conventions are used:</p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The first pair of tracks display the DNA sequences 5' and 3',
              respectively, over which PDB entity and proteins are mapped
            </li>
            <li>
              Proteins are represented as boxes connected by dashed lines.
              Connected boxes correspond to the codifying regions of a gene
            </li>
            <li>
              The protein sequence of the selected PDB entity is shown in blue
              boxes connected by dashed lines
            </li>
            <li>
              The bottom two tracks list the protein sequence from
              <a href="https://www.ncbi.nlm.nih.gov/refseq/">NCBI RefSeq</a>
              (green flag tracks) and
              <a href="https://www.uniprot.org/">UniProtKB</a> (purple flag
              tracks)
            </li>
            <li>
              A white circle on the left or right of a protein track points to
              the reading frame direction of the gene. For instance, if the
              circle is on the left, the protein sequence is to be read
              right-to-left and corresponds to the negative (3') strand
            </li>
            <li>
              When the chromosome ideogram is available, a red triangle will
              indicate the position of the PDB entity at chromosome level
            </li>
          </ul>
          <div></div>
          <a
            href="https://cdn.rcsb.org/rcsb-pdb/content/5fc7f2843fb4b83beb6a7a3d/image1.png"
            data-toggle="lightbox"
          >
            <img
              style={{ width: '100%' }}
              className="img-responsive"
              src="https://cdn.rcsb.org/rcsb-pdb/content/5fc7f2843fb4b83beb6a7a3d/image1.png"
            />
          </a>
          <div></div>
          <a className="content-anchor" id="how-to"></a>
          <h4>How-To</h4>
          <p></p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              In order to explore the protein-genome mapping click on the Genome
              Tab of the Structure Summary Page (e.g.
              <a href="/genome/5IIT">5IIT</a>)
            </li>
            <li>
              In this page a drop down menu will allow selection of the entity
              to explore. Only those entities that could be mapped to a
              reference genome will be available
            </li>
            <li>
              A particular entity may be composed of different protein fragments
              and thus, it may map to multiple chromosomes, the second drop down
              menu will allow to explore the different chromosomes
            </li>
            <li>
              Commonly a chromosome ideogram will be displayed and the entity
              position will be indicated with a red triangle
            </li>
          </ul>
          <div></div>
          <a
            href="https://cdn.rcsb.org/rcsb-pdb/content/5fc7f2843fb4b83beb6a7a3d/image3.png"
            data-toggle="lightbox"
          >
            <img
              style={{ width: '100%' }}
              className="img-responsive"
              src="https://cdn.rcsb.org/rcsb-pdb/content/5fc7f2843fb4b83beb6a7a3d/image3.png"
            />
          </a>
          <div></div>
          <a
            className="content-anchor"
            id="responsive-and-interactive-properties"
          ></a>
          <h4>Responsive and Interactive Properties</h4>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Zoom using the mouse scroll (wheel) or the mousepad/touchpad to
              see more details and to show the sequence amino and nucleic acids
            </li>
            <li>
              To zoom using the mousepad/touchpad hover over the Protein Feature
              View, and move/drag 2 fingers in an up and down motion
            </li>
            <li>
              Once zoomed, left click and drag to move the panel left or right
              (using either a mouse or touchpad)
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="for-advanced-users"></a>
          <h4>For Advanced Users</h4>
          <p>
            Genome / Structure alignments API is available at
            <a href="https://1d-coordinates.rcsb.org/#1d-coordinates-api">
              1D Coordinate Server
            </a>
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
        <div>Last updated: 11/2/2021</div>
      </div>
    </div>
  );
};
