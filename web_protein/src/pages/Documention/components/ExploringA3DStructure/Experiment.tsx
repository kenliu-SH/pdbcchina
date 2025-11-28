export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Exploring a 3D Structure</h5>
        <h1>Experiment</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#what-is-the-experiment">What is the Experiment?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#why-learn-about-the-experiment">
              Why learn about the Experiment?
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
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <p>
            The PDB is an archive of experimentally determined structures of
            biological macromolecules and their complexes with each other or
            with small molecule ligands (e.g., ions, cofactors, inhibitors, and
            drugs). All structures in the archive began with a physical sample
            of the molecules being studied experimentally. Data collected from
            the experiment(s) were then used to compute a 3D model of the
            molecule(s). Note: the archive also includes a small number of
            computationally modeled structures that were submitted to PDB prior
            to October 2006. Read more about this
            <a href="https://doi.org/10.1093/nar/gkl971" target="_blank">
              community decision
            </a>
            . <br />
            <br />
            The Experiment tab presents details about the experimental
            procedures and constraints used in solving the structure you are
            exploring.
          </p>
          <a className="content-anchor" id="what-is-the-experiment"></a>
          <h3>What is the Experiment?</h3>
          <p>
            The majority of structures in the PDB were determined using X-ray
            crystallography, Nuclear Magnetic Resonance (NMR), or Electron
            Microscopy (3DEM). Structures determined using other methods such as
            neutron diffraction, electron crystallography, solution scattering,
            and those determined using multiple methods are also archived in the
            PDB. Learn more about the
            <a
              href="https://www.wwpdb.org/documentation/policy"
              target="_blank"
            >
              types of experimentally determined structures in the PDB
            </a>
            .
          </p>
          <a className="content-anchor" id="why-learn-about-the-experiment"></a>
          <h3>Why learn about the Experiment?</h3>
          <p>
            Learning about the experiment tells you the conditions, constraints,
            and assumptions made during sample preparation, data collection, and
            data analysis. Knowing this can inform you about the reliability of
            the results reported.
          </p>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a className="content-anchor" id="the-interface"></a>
          <h3>The Interface</h3>
          <p>
            Although a quick overview of the experimental methods is presented
            on the Structure Summary page, more detailed information is provided
            here. Depending on the experimental method used, specific types of
            information are presented on the Experiments page. Examples for the
            three most common types experiments are listed below:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>For X-ray structures </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Crystal (unit cell dimensions) and crystallization details
              </li>
              <li>Data collection site and details</li>
              <li>Refinement methods, software used, and structure quality </li>
              <li>
                See
                <a href="/experimental/7LAD" target="_blank">
                  an example
                </a>
                here.
              </li>
            </ul>
            <li>For NMR structures</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Types of NMR experiments done and solution conditions used
              </li>
              <li>Spectrometer(s) used for data collection</li>
              <li>Refinement methods, software used and model details</li>
              <li>
                See
                <a href="/experimental/7L2G" target="_blank">
                  an example
                </a>
                here.
              </li>
            </ul>
            <li>For 3DEM structures</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Sample preparation details</li>
              <li>Data collection instrument(s), methods, and details</li>
              <li>Data analysis, 3D reconstructions software and details</li>
              <li>Model-fitting and refinement details</li>
              <li>
                See
                <a href="/experimental/7RPI" target="_blank">
                  an example
                </a>
                here.
              </li>
            </ul>
          </ul>
          <div></div>
          <a className="content-anchor" id="learning-about-the-structure"></a>
          <h3>Learning about the Structure</h3>
          <p>
            The experimental details provide a context for how the sample or
            samples were prepared, how data were collected, and how the data
            were analyzed for the purpose of computing the model coordinates.
            Understanding this information can help you decide how useful the
            structural data will be for answering your specific questions. It
            can also provide details to help you either duplicate the experiment
            and/or plan the structure determination of a related sample.
            <br />
            <br />A few examples of what more you can learn about a structure
            include:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              In the case of an X-ray structure, information about the starting
              model (if the structure was solved by molecular replacement),
              resolution limits, R-factor, etc. can help you examine model
              quality, model bias, and other details.
            </li>
            <li>
              In the case of an NMR structure, knowing which experiments were
              performed to gather data can provide insights about which
              experiments may be relevant for you to learn more about the
              samples you are preparing and molecules and systems you are
              studying.
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
        <div>Last updated: 11/19/2021</div>
      </div>
    </div>
  );
};
