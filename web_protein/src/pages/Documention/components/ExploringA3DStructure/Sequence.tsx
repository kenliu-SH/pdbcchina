export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Exploring a 3D Structure</h5>
        <h1>Sequence</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#what-are-sequences">What are sequences?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#which-sequences-are-displayed-here">
              Which sequences are displayed here?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#why-explore-sequences">Why explore sequences?</a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#the-interface">The Interface</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#learning-about-the-structure">
              Learning about the Structure
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#exploring-other-structures">Exploring other structures</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <a className="content-anchor" id="what-are-sequences"></a>
          <h3>What are sequences?</h3>
          <p>
            The specific order of amino acids or DNA or RNA nucleotides in a
            polymer is referred to as its sequence. In the PDB archive, an amino
            acid or nucleotide is usually represented by its one letter code
            using the FASTA format.
          </p>
          <a
            className="content-anchor"
            id="which-sequences-are-displayed-here"
          ></a>
          <h3>Which sequences are displayed here?</h3>
          <p>
            The protein and nucleic acid sequences of all entities are presented
            in the Sequence tab. A reference sequence from an external sequence
            database is displayed along with the polymer entity sequence where
            available. In addition, a variety of structural and functional
            annotations integrated from various sources (PDB, UniProt, and
            various bioinformatics resources) are also marked in this graphical
            display.
          </p>
          <a className="content-anchor" id="why-explore-sequences"></a>
          <h3>Why explore sequences?</h3>
          <p>
            Viewing the sequence display can provide a quick way to assess how
            the polymer sequence of the PDB entry relates to the reference
            sequence (e.g., UniProt sequence). This display can be used to
            answer many questions, such as
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Is the polymer in the PDB entry the complete protein, just one or
              two domains, or merely a short peptide taken from the protein?
            </li>
            <li>Does the polymer in the PDB have any mutations? </li>
            <li>
              Is the mutation at an important functional site (e.g., catalytic
              residue in an enzyme or a metal binding site)?
            </li>
            <li>
              Are there parts of the structure that are poorly modeled or are
              missing from the coordinates?
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a className="content-anchor" id="the-interface"></a>
          <h3>The Interface</h3>
          <p>
            The Sequence tab displays the PDB polymer and reference sequences
            along with a variety of annotations:
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/618272fb04fb9835c6ae1896/ssp-sequence-fig1.png"
                    data-toggle="lightbox"
                    data-title="Figure 1: Sequence View of the Cytochrome P450 protein for the PDB entry 7lad. Position of the metal binding amino acid is shown in red and blue circles. The hyperlink highlighted by the red oval opens a 3D view of the amino acid or sequence feature selected. "
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/618272fb04fb9835c6ae1896/ssp-sequence-fig1.png"
                      alt="Figure 1: Sequence View of the Cytochrome P450 protein for the PDB entry 7lad. Position of the metal binding amino acid is shown in red and blue circles. The hyperlink highlighted by the red oval opens a 3D view of the amino acid or sequence feature selected. "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 1: Sequence View of the Cytochrome P450 protein for the
                  PDB entry 7lad. Position of the metal binding amino acid is
                  shown in red and blue circles. The hyperlink highlighted by
                  the red oval opens a 3D view of the amino acid or sequence
                  feature selected.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The first row in the display lists the sequence of the protein
              from the PDB entry.
            </li>
            <li>
              The second row shows the reference sequence in a purple rectangle
              - e.g., UniProt.
            </li>
            <li>
              The data directly derived from the PDB or computed based on data
              from the PDB are marked with a blue line on the left of the
              display.
            </li>
            <li>
              Annotations integrated from various bioinformatics resources are
              marked with an orange line on the left of the display.
            </li>
            <li>
              The display is interactive so you can zoom in and out to examine
              the sequence(s).
            </li>
            <li>
              Clicking on any residue or sequence feature highlights it in
              yellow for ease of analysis.
            </li>
            <li>
              The selected residue/feature can also be displayed in 3D by
              clicking on the “View Feature in 3D” hyperlink (marked with a red
              oval).
            </li>
            <li>
              Learn
              <a
                href="/docs/sequence-viewers/protein-feature-view"
                target="_blank"
              >
                more about the conventions used
              </a>
              for displaying the sequences and annotations.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="learning-about-the-structure"></a>
          <h3>Learning about the Structure</h3>
          <p>
            The interactive sequence display provides a quick summary of the
            protein and nucleic acid polymers present in the structure. They
            help integrate information from a variety of resources and map them
            on the structure in an easily accessible format. Exploring this page
            can inform you about the structure and functions of the polymer -
            where the active site, binding site, etc. are located; where the
            hydrophilic and hydrophobic regions are located; where the mutations
            (if any) are present; and much more. <br />
            <br />
            Depending on the polymer being displayed and the amount of
            information available about it, the sequence view pages can be very
            long and complex. See
            <a href="/sequence/6M17" target="_blank">
              an example
            </a>
            here.
          </p>
          <a className="content-anchor" id="exploring-other-structures"></a>
          <h3>Exploring other structures</h3>
          <p>
            The Sequence Summary page is mostly used to integrate information
            about various aspects of the polymer being studied from various data
            resources. However, in the row displaying the UniProt sequence, the
            UniProt ID for the sequence is included with a hyperlink. Clicking
            on that (see blue arrow) can open a page to display instances of
            polymer chains in the PDB that map to all or part of the UniProt
            sequence.
            <br />
            <br />
            See also the
            <a
              href="/docs/exploring-a-3d-structure/structure-summary-page#macromolecules"
              target="_blank"
            >
              Structure Summary page
            </a>
            (UniProt mapped Resources) for another way to access this
            information.
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
        <div>Last updated: 8/25/2022</div>
      </div>
    </div>
  );
};
