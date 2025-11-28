export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Exploring a 3D Structure</h5>
        <h1>Genome</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#what-is-a-genome">What is a Genome?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#why-explore-genomes">Why explore Genomes?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#how-is-genome-information-mapped">
              How is Genome information mapped?
            </a>
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
            <a href="#exploring-other-structures">Exploring other Structures</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <a className="content-anchor" id="what-is-a-genome"></a>
          <h3>What is a Genome?</h3>
          <p>
            A genome is the complete set of genes and/or genetic material of a
            cell or organism. It is the blueprint that cells use to make
            proteins and RNA. In some organisms the entire genome is present as
            one large DNA molecule while in other organisms it is organized into
            several chromosomes. Often the genes of proteins that participate in
            a biological process or pathway are located close to each other so
            that they can be expressed and/or regulated together.
          </p>
          <a className="content-anchor" id="why-explore-genomes"></a>
          <h3>Why explore Genomes?</h3>
          <p>
            Knowing where the gene for the protein/RNA of interest is located in
            the genome can provide insights into its expression, functions, and
            regulation. Also, this knowledge can help you understand the impact
            of any mutations, deletions, or insertions into the introns and
            intergenic DNA regions on the functions of the protein/RNA of
            interest.
          </p>
          <a
            className="content-anchor"
            id="how-is-genome-information-mapped"
          ></a>
          <h3>How is Genome information mapped?</h3>
          <p>
            For protein entities in 3D structures [experimental structures or
            computed structure models (CSMs)] the Protein Information Resource (
            <a href="https://proteininformationresource.org/" target="_blank">
              PIR
            </a>
            ) provides a mapping between its UniProt identifier (protein
            sequence) and RefSeq records (collection of genomic DNA, transcript,
            protein sequences, and various annotations). If this mapping is
            available, relevant information is included in the Genome tab for
            that polymer entity. Learn
            <a href="/docs/sequence-viewers/genome-view" target="_blank">
              more about Genome view
            </a>
            .
          </p>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a className="content-anchor" id="the-interface"></a>
          <h3>The Interface</h3>
          <p>
            This tab presents information about the gene(s) that code for the
            protein(s) in the structure.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/6182730904fb9835c6ae1897/ssp-genome-fig1.png"
                    data-toggle="lightbox"
                    data-title="Figure 1: Genome View of the Cytochrome P450 protein for the PDB entry 7lad. The inset shows a zoomed in view of part of an exon and amino acids sequence (from two protein sequence data resources)."
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/6182730904fb9835c6ae1897/ssp-genome-fig1.png"
                      alt="Figure 1: Genome View of the Cytochrome P450 protein for the PDB entry 7lad. The inset shows a zoomed in view of part of an exon and amino acids sequence (from two protein sequence data resources)."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 1: Genome View of the Cytochrome P450 protein for the
                  PDB entry 7lad. The inset shows a zoomed in view of part of an
                  exon and amino acids sequence (from two protein sequence data
                  resources).
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The top part of the page displays the chromosome and the red arrow
              marks the location of the gene.
            </li>
            <li>
              The gene’s 5’ and 3’ sequences are displayed along with the amino
              acid sequences of the protein coded by the gene.
            </li>
          </ul>
          <div></div>
          <p>
            Learn
            <a href="/docs/sequence-viewers/genome-view" target="_blank">
              more about the conventions used
            </a>
            in this display and how to use information presented in this view.
          </p>
          <a className="content-anchor" id="learning-about-the-structure"></a>
          <h3>Learning about the Structure</h3>
          <p>
            Some of the things that can be learned from the genome view include:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Translations of gene and protein sequences for the gene of
              interest
            </li>
            <li>Presence and location of introns in the gene(s) of interest</li>
            <li>
              Opportunity to map mutations, insertions, or deletions to the
              gene’s introns and exons based on information from the literature
              and/or bioinformatics data resources that have single nucleotide
              polymorphisms (SNPs) data and other genetic information (e.g.,
              OMIM)
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="exploring-other-structures"></a>
          <h3>Exploring other Structures</h3>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Knowledge about the location of the gene of interest on the
              chromosome may help you look up other genes that are located in
              its neighborhood and understand how their expression and functions
              might impact the gene or protein of interest.
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
