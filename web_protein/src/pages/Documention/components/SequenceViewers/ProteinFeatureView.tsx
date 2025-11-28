export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Sequence Viewers</h5>
        <h1>Protein Feature View </h1>
        <div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#responsive-and-interactive-properties">
              Responsive and Interactive Properties
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#conventions">Conventions</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#structure-summary-page--sequence-tab">
              Structure Summary Page - Sequence Tab
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#structure-summary-page--main-tab">
              Structure Summary Page - Main Tab
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#feature-tooltips">Feature Tooltips</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#for-developers">For Developers</a>
          </div>
          <p>
            The Protein Feature Viewer provides graphical summaries of PDB
            protein biological and structural features and their relationships
            with
            <a href="https://www.uniprot.org" target="_blank" rel="noopener">
              UniProtKB
            </a>
            entries. Protein alignments and features are loaded from RCSB PDB
            web services including the main data
            <a href="https://data.rcsb.org/" target="_blank" rel="noopener">
              API
            </a>
            and the
            <a
              href="https://1d-coordinates.rcsb.org/"
              target="_blank"
              rel="noopener"
            >
              1D Coordinate Server
            </a>
            . These resources integrate information from multiple resources and
            databases. Structural features such as secondary structure,
            angle/distance outliers, protein-ligand binding sites or disulfide
            bridges, are extracted from the PDB structural data. Additionally,
            structural domains are annotated from
            <a href="https://www.cathdb.info/" target="_blank" rel="noopener">
              CATH
            </a>
            and
            <a href="https://scop.berkeley.edu" target="_blank" rel="noopener">
              SCOPe
            </a>
            databases. Biochemical and biomedical features are collected from
            the
            <a href="https://www.uniprot.org" target="_blank" rel="noopener">
              UniProtKB
            </a>
            database and mapped onto PDB sequences.
          </p>
          <a
            className="content-anchor"
            id="responsive-and-interactive-properties"
          ></a>
          <h3>Responsive and Interactive Properties</h3>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Zoom using the mouse scroll (wheel) or the mousepad/touchpad to
              see more details and to show the sequence amino acids
            </li>
            <li>
              To zoom using the mousepad/touchpad hover over the Protein Feature
              View, and move/drag 2 fingers in an up and down motion
            </li>
            <li>
              Once zoomed, left click and drag to move the panel left or right
              (using either a mouse or touchpad)
            </li>
            <li>
              Left click on a feature to highlight the annotated region or right
              click to select and highlight a custom area
            </li>
            <li>
              Hovering over track features will display a legend at the top
              right corner of the viewer (see
              <a href="#feature-tooltips">Feature Tooltips</a>)
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="conventions"></a>
          <h3>Conventions</h3>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The first track defines the sequence reference over which features
              are mapped
            </li>
            <li>
              A white circle over the start (or end) of a block indicates that
              the feature in its original reference does not start (or end) in
              that position but before (or after)
            </li>
            <li>
              A dashed line between blocks indicates that in the original
              reference the feature is connected and therefore a sequence
              insertion has occurred
            </li>
            <li>
              Color flags (blue/orange) between track titles and track features
              indicates feature provenance (blue for RCSB PDB and orange for
              third party resources)
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="structure-summary-page--sequence-tab"
          ></a>
          <h3>Structure Summary Page - Sequence Tab</h3>
          <p>
            In the Sequence Tab (e.g.
            <a href="/sequence/4hhb" target="_blank" rel="noopener">
              4hhb
            </a>
            ) the Protein Feature Viewer will display the full range of
            available features (structural and biological annotations) and the
            alignments between Polymer Instances (chains) and
            <a href="https://www.uniprot.org" target="_blank" rel="noopener">
              UniProtKB
            </a>
            sequences. The select menu can be used to display the features for
            the different PDB Polymer Instances (chains) of the current Entry.
          </p>
          <a
            href="https://cdn.rcsb.org/rcsb-pdb/content/60103d1ab1afe64903398251/rcsb-saguaro-sequence.png"
            data-toggle="lightbox"
          >
            <img
              style={{ width: '100%' }}
              className="img-responsive"
              src="https://cdn.rcsb.org/rcsb-pdb/content/60103d1ab1afe64903398251/rcsb-saguaro-sequence.png"
            />
          </a>
          <div></div>
          <a
            className="content-anchor"
            id="structure-summary-page--main-tab"
          ></a>
          <h3>Structure Summary Page - Main Tab</h3>
          <p>
            The Protein Feature Viewer in the Structure Summary Pages (e.g.
            <a href="/structure/4hhb" target="_blank" rel="noopener">
              4hhb
            </a>
            ) displays the alignments between PDB Entity sequences and
            <a href="https://www.uniprot.org" target="_blank" rel="noopener">
              UniProtKB
            </a>
            . Additionally, it includes Entity features such as mutations and
            artifacts, and the different regions that has not been (or
            partially) observed at Instance level. The select menu can be used
            to change the reference (Entity/UniProtKB) over which features are
            mapped and displayed.
          </p>
          <p>
            <img
              style={{ width: '100%' }}
              src="https://cdn.rcsb.org/rcsb-pdb/help/rcsb-saguaro-help/rcsb_saguaro_summary.svg"
            />
          </p>
          <a className="content-anchor" id="feature-tooltips"></a>
          <h3>Feature Tooltips</h3>
          <p>
            Feature tooltips contain important information about feature
            positions in the current and original reference sequence. Tooltips
            are displayed when mouse hovering features on the top right corner
            of the Protein Feature Viewer
          </p>
          <img
            style={{ width: '80%' }}
            className="img-responsive"
            src="https://cdn.rcsb.org/rcsb-pdb/content/60103d1ab1afe64903398251/tooltip.png"
          />
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li> (i) Feature short name description </li>
            <li>
              (ii) Database source or software name used to obtain the feature.
              Color indicates its provenance (blue RCSB PDB and orange third
              party resources)
            </li>
            <li> (iii) Feature position in the current reference system </li>
            <li>
              (iv) PDB residue author Ids associated to the feature position
            </li>
            <li> (v) Feature source database/software name </li>
            <li> (vi) Feature original reference entry Id and positions </li>
            <li> (vii) Feature description </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="for-developers"></a>
          <h3>For Developers</h3>
          <p>
            The Protein Feature Viewer is an Open Source project written in
            TypeScript. It is available at
            <a
              href="https://github.com/rcsb/rcsb-saguaro"
              target="_blank"
              rel="noopener"
            >
              github.com
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
        <div>Last updated: 2/3/2021</div>
      </div>
    </div>
  );
};
