export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">3D Viewers &gt; Mol*</h5>
        <h1>Navigating by Sequence</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#sequence-panel">Sequence Panel</a>
          </div>
          <a className="content-anchor" id="sequence-panel"></a>
          <h2>Sequence Panel</h2>
          <p>
            The Sequence Panel displays the polymer sequences of macromolecules
            (proteins and nucleic acids) present in the uploaded PDB
            structure(s). In addition, it provides quick access to any small
            molecular ligands or entities present in the structure. It enables
            several operations to be performed such as selecting residues and
            focusing on ligands. The Sequence Panel is located above the 3D
            canvas and contains three drop-down menus that allow the user to
            choose which sequence to display.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b> First drop-down menu: </b> allows the user to decide which
              structure the sequence should be from. If multiple structures are
              uploaded into Mol*, this drop-down menu will list the PDB IDs of
              each structure along with a short summary of each one. The user
              should click the structure from which they want to view the
              sequence. If one structure is uploaded into Mol*, there will be
              only one option in this drop-down menu.
            </li>
          </ul>
          <div></div>
          <a
            href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1046625aa7b208a9fe3a0/sequencepanel1.png"
            data-toggle="lightbox"
          >
            <img
              style={{ width: '100%' }}
              className="img-responsive"
              src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1046625aa7b208a9fe3a0/sequencepanel1.png"
            />
          </a>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b> Second drop-down menu: </b> allows the user to decide which
              entity’s sequence should be displayed.
            </li>
          </ul>
          <div></div>
          <a
            href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1046625aa7b208a9fe3a0/sequencepanel2.png"
            data-toggle="lightbox"
          >
            <img
              style={{ width: '100%' }}
              className="img-responsive"
              src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1046625aa7b208a9fe3a0/sequencepanel2.png"
            />
          </a>
          <div></div>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b> Third drop-down menu: </b> allows the user to decide which
              part of an entity the sequence should be from. If there are
              multiple copies of the entity in the structure, this drop-down
              menu will list them based on their chain IDs.
            </li>
          </ul>
          <div></div>
          <a
            href="https://cdn.rcsb.org/rcsb-pdb/content/5ee1046625aa7b208a9fe3a0/sequencepanel3.png"
            data-toggle="lightbox"
          >
            <img
              style={{ width: '100%' }}
              className="img-responsive"
              src="https://cdn.rcsb.org/rcsb-pdb/content/5ee1046625aa7b208a9fe3a0/sequencepanel3.png"
            />
          </a>
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
        <div>Last updated: 1/19/2021</div>
      </div>
    </div>
  );
};
