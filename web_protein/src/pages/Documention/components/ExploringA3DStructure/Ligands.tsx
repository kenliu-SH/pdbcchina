export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Exploring a 3D Structure</h5>
        <h1>Ligands</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#what-are-ligands">What are Ligands?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#why-learn-about-ligands">Why learn about ligands?</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#what-are-ligands-of-interest">
              What are ligands of interest?
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
            <a href="#exploring-other-structures">Exploring other structures</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <a className="content-anchor" id="what-are-ligands"></a>
          <h3>What are Ligands?</h3>
          <p>
            Small molecules such as ions, cofactors, inhibitors, drugs, etc. are
            called ligands in the PDB. They are often found interacting with
            biological polymers (like proteins and nucleic acids) and may have
            structurally stabilizing or functional roles in their interactions
            with macromolecules.
          </p>
          <a className="content-anchor" id="why-learn-about-ligands"></a>
          <h3>Why learn about ligands?</h3>
          <p>
            Ligands often bind to pockets, cavities, and surfaces to facilitate
            their structural or functional roles. Thus, exploring the location
            of ligand binding and understanding a ligand’s interactions can help
            you understand the mechanism of biomolecular functions. It can also
            help you design or customize these interactions for specific
            purposes - e.g., to regulate the protein or nucleic acid function to
            treat or prevent a disease.
          </p>
          <a className="content-anchor" id="what-are-ligands-of-interest"></a>
          <h3>What are ligands of interest?</h3>
          <p>
            While there may be many different ligands interacting with the
            biological macromolecules in a structure, only those having an
            impact on the function(s) of the molecules in the structure are
            examined closely and validated. Note that at this time only X-ray
            structures that have experimental data and complete validation
            information are validated to assess goodness of fit for ligands.
            Learn more about
            <a
              href="/docs/general-help/ligand-structure-quality-in-pdb-structures"
              target="_blank"
            >
              Ligand Validation
            </a>
            .
          </p>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a className="content-anchor" id="the-interface"></a>
          <h3>The Interface</h3>
          <p>
            The Ligands tab displays the following plots and table for all
            validated non-polymer ligands, and indicate whether they are the
            ligands of interest (LOI). LOI is a functional ligand in
            macromolecular complexes designated as focus of research in the
            experiment by structure authors or by RCSB PDB under the criteria
            of: (1) Formula Weight &gt; 150 Da, and (2) Not in an exclusion list
            of likely non-functional ligands, as described in
            <a
              href="/docs/general-help/ligand-structure-quality-in-pdb-structures"
              target="_blank"
            >
              Ligand Validation
            </a>
            .
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/6182731a04fb9835c6ae1898/ssp-ligands-fig1.png"
                    data-toggle="lightbox"
                    data-title="Figure 1: A 2D plot of the quality of the ligand HEM’s goodness of fit for the best instance in the structure (green diamond) for the PDB entry 7lad (as of October 2021)"
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/6182731a04fb9835c6ae1898/ssp-ligands-fig1.png"
                      alt="Figure 1: A 2D plot of the quality of the ligand HEM’s goodness of fit for the best instance in the structure (green diamond) for the PDB entry 7lad (as of October 2021)"
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 1: A 2D plot of the quality of the ligand HEM’s
                  goodness of fit for the best instance in the structure (green
                  diamond) for the PDB entry 7lad (as of October 2021)
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>In the Figure 1 (for the PDB ID 7lad) the</p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Top half of the page has 2D plots showing </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                quality of all instances of the ligand (HEM) in the entry (left
                plot).
              </li>
              <li>
                a comparison of the ligand quality in structures where the same
                ligand is bound to the same target (middle plot, yellow circles)
                or other targets (right plot, blue circles).
              </li>
            </ul>
            <li>
              Bottom half presents measures of ligand quality in instances of
              the ligand displayed in the 2D plots.
            </li>
            <li>
              Note for this structure there is no validation data available for
              the ligand XRD.
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="learning-about-the-structure"></a>
          <h3>Learning about the Structure</h3>
          <p>
            The experimental data fitting vs geometry 2D plot in the left
            presents ligand quality for all instances of the ligand in the
            structure. The best instance is shown as a green diamond, while all
            other instances are shown as green circles. All other data on the
            ligands tab compares the quality of the ligand in the entry of
            interest in other structures.
          </p>
          <a className="content-anchor" id="exploring-other-structures"></a>
          <h3>Exploring other structures</h3>
          <p>
            The experimental data fitting vs geometry 2D plot in the left
            presents ligand quality for all instances of the ligand in the
            structure. The best instance is shown as a green diamond, while all
            other instances are shown as green circles. All other data on the
            ligands tab compares the quality of the ligand in the entry of
            interest in other structures.
          </p>
          <p>
            Various measures of fit to electron density and geometry of the
            ligand in other entries are presented in 2D plots and tabular
            format. This analysis allows you to compare the ligand of interest
            in these structures to the same ligand in other structures (either
            bound to the same or different targets) and select the best
            instance(s) for visualization, analysis, and hypothesis development.
            Learn more about the
            <a
              href="/docs/general-help/ligand-structure-quality-in-pdb-structures"
              target="_blank"
            >
              ligand validation process and measures
            </a>
            . <br />
            <br />
            All instances of the ligand of interest in the archive can be found
            from the Ligand Definition and Summary page by clicking on the
            button on the top right corner of the page.
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
        <div>Last updated: 3/8/2022</div>
      </div>
    </div>
  );
};
