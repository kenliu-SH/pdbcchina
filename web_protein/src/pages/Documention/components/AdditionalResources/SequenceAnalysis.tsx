export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Additional Resources</h5>
        <h1>Sequence Analysis</h1>
        <div>
          <p>
            <span>
              Access additional resources of interest, submitted by community
              members.
            </span>
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>BLAST</b>
              <br />
              Basic Local Alignment Tool with interfaces at:
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  <a
                    href="https://www.ddbj.nig.ac.jp/services/blast-e.html"
                    target="_blank"
                  >
                    DDBJ (Japan)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ebi.ac.uk/Tools/sss/ncbiblast/"
                    target="_blank"
                  >
                    EBI BLAST
                  </a>
                </li>
                <li>
                  <a href="http://blast.genome.jp/" target="_blank">
                    GenomeNet (Japan)
                  </a>
                </li>
                <li>
                  <a href="http://www.ncbi.nlm.nih.gov/BLAST/" target="_blank">
                    NCBI (USA)
                  </a>
                </li>
                <li>
                  <a
                    href="http://mobyle.pasteur.fr/cgi-bin/portal.py?form=blast2"
                    target="_blank"
                  >
                    Pasteur Institute (France)
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <b>FASTA</b>
              <br />
              Implementations of FASTA (Pearson and Lipman) sequence alignment
              method at:
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  <a
                    className="static"
                    href="http://www.ddbj.nig.ac.jp/"
                    target="_blank"
                  >
                    DDBJ (Japan)
                  </a>
                </li>
                <li>
                  <a
                    className="static"
                    href="https://www.ebi.ac.uk/Tools/sss/fasta/"
                    target="_blank"
                  >
                    EBI (UK)
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="https://meme-suite.org/meme/">The MEME Suite</a> <br />
              Motif-based sequence analysis tools.
            </li>
            <li>
              <a href="http://ca.expasy.org/prosite">PROSITE</a>
              <br />
              Detection of sequence patterns with interfaces at ExPASy
              (Switzerland).
            </li>
            <li>
              <b>Smith-Waterman</b>
              <br />
              Implementations of Smith-Waterman sequence alignment at:
              <ul style={{ paddingLeft: '40px' }}>
                <li>
                  <a
                    className="static"
                    href="http://jaligner.sourceforge.net/"
                    target="_blank"
                  >
                    JAligner (sourceforge.net)
                  </a>
                </li>
                <li>
                  <a
                    className="static"
                    href="https://www.ebi.ac.uk/Tools/psa/emboss_water"
                    target="_blank"
                  >
                    EMBOSS Water
                  </a>
                </li>
                <li>
                  <a
                    className="static"
                    href="http://insilico.ehu.es/align/"
                    target="_blank"
                  >
                    University of the Basque Country
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a
                className="static"
                href="http://espript.ibcp.fr/ESPript/ENDscript/index.php"
                target="_blank"
              >
                ENDscript
              </a>
              <br />A Web server for searching homologous sequences and giving
              information on secondary structure elements, accessibility,
              hydropathy and protein-protein contacts
            </li>
            <li>
              <a
                className="static"
                href="https://espript.ibcp.fr/ESPript/ESPript/"
                target="_blank"
              >
                ESPript
                <br />
              </a>
              Easy Sequencing in Postscript
              <br />
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
        <div>Last updated: 2/16/2023</div>
      </div>
    </div>
  );
};
