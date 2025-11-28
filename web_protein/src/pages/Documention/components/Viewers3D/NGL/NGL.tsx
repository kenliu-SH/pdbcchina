import './index.less';
export default () => {
  return (
    <>
      <div className="ngl">
        <div data-elastic-include="">
          <h5 className="menu-path">3D Viewers</h5>
          <h1>NGL</h1>
          <div>
            <div style={{ paddingLeft: '40px' }}>
              ○ <a href="#general-display-options">General Display Options</a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■ <a href="#mouse-controls">Mouse Controls</a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○ <a href="#structure-view">Structure View</a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■ <a href="#color-schemes">Color schemes</a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■ <a href="#structure-view-symmetry">Structure View: Symmetry</a>
            </div>
            <div style={{ paddingLeft: '80px' }}>
              □ <a href="#protein-symmetry">Protein Symmetry</a>
            </div>
            <div style={{ paddingLeft: '80px' }}>
              □ <a href="#protein-pseudosymmetry">Protein Pseudosymmetry</a>
            </div>
            <div style={{ paddingLeft: '80px' }}>
              □ <a href="#global-symmetry">Global Symmetry</a>
            </div>
            <div style={{ paddingLeft: '80px' }}>
              □ <a href="#local-symmetry">Local Symmetry</a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■
              <a href="#structure-view-color-by-density-fit-and-by-geometry-quality-and-clashes-option">
                Structure View: Color (By Density Fit and By Geometry Quality)
                and Clashes option
              </a>
            </div>
            <div style={{ paddingLeft: '80px' }}>
              □ <a href="#color-by-density-fit">Color By Density Fit</a>
            </div>
            <div style={{ paddingLeft: '80px' }}>
              □
              <a href="#color-by-geometry-quality">Color By Geometry Quality</a>
            </div>
            <div style={{ paddingLeft: '80px' }}>
              □ <a href="#clashes-option">Clashes option</a>
            </div>
            <div style={{ paddingLeft: '80px' }}>
              □
              <a href="#color-by-nmr-random-coil-index">
                Color By NMR Random Coil Index
              </a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○
              <a href="#ligand-viewer-options">
                <span id="ligand-view">Ligand Viewer Options</span>
              </a>
            </div>
            <div style={{ paddingLeft: '60px' }}>
              ■
              <a href="#interaction-types-definition-and-calculation-parameters">
                Interaction Types Definition and Calculation Parameters
              </a>
            </div>
            <div style={{ paddingLeft: '80px' }}>
              □ <a href="#hydrogen-bonds">Hydrogen Bonds</a>
            </div>
            <div style={{ paddingLeft: '80px' }}>
              □ <a href="#halogen-bonds">Halogen Bonds</a>
            </div>
            <div style={{ paddingLeft: '80px' }}>
              □ <a href="#hydrophobic-contacts">Hydrophobic Contacts</a>
            </div>
            <div style={{ paddingLeft: '80px' }}>
              □ <a href="#metal-interactions">Metal Interactions</a>
            </div>
            <div style={{ paddingLeft: '100px' }}>
              ◆
              <a href="#potential-metal-binding-partners">
                Potential metal binding partners
              </a>
            </div>
            <div style={{ paddingLeft: '100px' }}>
              ◆ <a href="#metals-classes">Metals classes</a>
            </div>
            <div style={{ paddingLeft: '80px' }}>
              □ <a href="#pi-interactions">Pi Interactions</a>
            </div>
            <div style={{ paddingLeft: '100px' }}>
              ◆ <a href="#cation-pi">Cation-Pi</a>
            </div>
            <div style={{ paddingLeft: '100px' }}>
              ◆ <a href="#pi-stacking">Pi-stacking</a>
            </div>
            <div style={{ paddingLeft: '100px' }}>
              ◆ <a href="#charge-centers">Charge centers</a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○ <a href="#electron-density-maps">Electron Density Maps</a>
            </div>
            <div style={{ paddingLeft: '40px' }}>
              ○ <a href="#references">References</a>
            </div>
            <p>
              The NGL 3D View option from the RCSB PDB structure summary page
              utilizes the WebGL-based NGL Viewer
              <sup>
                <a href="#Rose2015">[Rose2015]</a>,
                <a href="#Rose2016">[Rose2016]</a>
              </sup>
              , to display PDB structures in three-dimensions.
            </p>
            <p>
              Various general display options are available from the main window
              and three types of views are available:
            </p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                <a href="#structure-view">Structure View</a>
              </li>
              <li>
                <a href="#ligand-viewer-options">Ligand Viewer</a>
              </li>
              <li>
                <a href="#electron-density-maps">Electron Density Maps</a>
              </li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <a className="content-anchor" id="general-display-options"></a>
            <h3>General Display Options</h3>
            <p>
              Various display options are available from the main section of the
              3D view page:
            </p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Spin: Start or stop spinning the structure along the y-axis
              </li>
              <li>Fullscreen: Activate or disable fullscreen mode</li>
              <li>Center: Reset molecule position</li>
              <li>
                Screenshot: Download screenshot at twice the displayed
                resolution. When creating screenshots, set the 'Quality' option
                (in the "Structure View" tab to 'high' for the best results.
              </li>
              <li>Background: Choose white or black background color.</li>
              <li>
                Focus: Move clipping planes closer to or away from the center of
                rotation
              </li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <a className="content-anchor" id="mouse-controls"></a>
            <h4>Mouse Controls</h4>
            <p>Rotate the view around the center of the canvas</p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Left-mouse drag</li>
              <li>One-finger drag</li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <p>Translate the view and move the center of rotation</p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Right-mouse drag</li>
              <li>Two-finger drag</li>
              <li>Ctrl left-mouse drag</li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <p>Zoom the view in and out</p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Scroll-wheel</li>
              <li>Two-finger pinch</li>
              <li>Shift left-mouse drag</li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <p>
              Show information (tooltips) about the object close to the mouse
              cursor or finger tap such as atoms or bonds
            </p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Mouse hover</li>
              <li>Finger tap</li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <p>Move the clipping/focus planes in and out</p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Shift scroll-wheel</li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <p>
              Increase/decrease the isolevel value of the selected electron
              density map
            </p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Ctrl scroll-wheel</li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <p>
              Combination "Move the clipping/focus planes in and out" and "Zoom
              the view in and out"
            </p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Middle-mouse drag</li>
              <li>Shift-ctrl scroll-wheel</li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <p>
              Distance, angle, dihedral measurements: To begin a measurement,
              use the right-mouse button (or the left-mouse button and the
              Control key/Control key and mouse click) to select 1, 2, 3 or 4
              atoms. Complete the measurement by selecting the final atom twice.
              Depending on how many atoms are selected, the distance (2 atoms),
              the angle (3 atoms) or the dihedral angle (4 atoms) is measured
              and displayed. Deselect all atoms with a right-click in empty
              space. To remove a measurement, re-select all involved atoms and
              then the last atom twice in a row.
            </p>
            <a className="content-anchor" id="structure-view"></a>
            <h3>Structure View</h3>
            <p>
              Various display options are available from the Structure View tab
              of the 3D view page:
            </p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Assembly: View structure as asymmetric unit, biological
                assembly, unit cell, or supercell (stacked unit cells)
              </li>
              <li>Model: View specific model for multi-model structure</li>
              <li>
                Symmetry: View intrinsic molecular symmetry. This option is
                described in additional detail below.
              </li>
              <li>
                Style: View the structure in different representation styles
                (Backbone, Surface, Cartoon, Spacefill/CPK, Licorice, Line, and
                Ball &amp; Stick)
              </li>
              <li>
                Color: Color the structure using different color schemes. See
                below for a list and additional information.
              </li>
              <li>
                Ligand: Change the ligand representation style -- ligands can be
                displayed as ball-and-stick, space fill or turned off.
              </li>
              <li>
                Quality: Adjust the rendering quality. When creating
                screenshots, set this option to 'high' for the best results
              </li>
              <li>
                Water: Show or hide water molecules present in the structure
              </li>
              <li>Ions: Show or hide ions present in the structure</li>
              <li>
                Hydrogens: Show or hide hydrogen atoms included in the structure
              </li>
              <li>
                Clashes: Show or hide clashes between atoms (indicated by pink
                disks) as given in the Validation Report. See
                <a href="#validation-report">below</a> for additional
                information.
              </li>
              <li>
                Default Structure View: Return the viewer to the default
                settings.
              </li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <a className="content-anchor" id="color-schemes"></a>
            <h4>Color schemes</h4>
            <p></p>
            <div
              style={{
                width: '300px',
                height: '45px',
                background:
                  'linear-gradient(to right, #313695 0%, #4575b4 10%, #74add1 20%, #abd9e9 30%, #e0f3f8 40%, #ffffbf 50%, #fee090 60%, #fdae61 70%, #f46d43 80%, #d73027 90%, #a50026 100%)',
              }}
            >
              <div
                style={{
                  padding: '10px',
                  fontSize: '20px',
                  fontFamily: 'sans-serif',
                }}
              >
                <span style={{ float: 'left' }}>N-terminus</span>
                <span style={{ float: 'right' }}>C-terminus</span>
              </div>
            </div>
            <br />
            <small>
              Rainbow - blue is the N-terminus and red is the C-terminus
            </small>
            <p></p>
            <p></p>
            <div
              style={{
                width: '300px',
                height: '45px',
                background:
                  'linear-gradient(to left#313695 0%, #4575b4 10%, #74add1 20%, #abd9e9 30%, #e0f3f8 40%, #ffffbf 50%, #fee090 60%, #fdae61 70%, #f46d43 80%, #d73027 90%, #a50026 100%)',
              }}
            >
              <div
                style={{
                  padding: '10px',
                  fontSize: '20px',
                  fontFamily: 'sans-serif',
                }}
              >
                <span style={{ float: 'left' }}>First chain</span>
                <span style={{ float: 'right' }}>Last chain</span>
              </div>
            </div>
            <br />
            <small>
              By Chain - colored by chain as found in the asymmetric unit
            </small>
            <p></p>
            <p></p>
            <div
              style={{
                width: '300px',
                height: '45px',
                background:
                  'linear-gradient(to left, #fff7ec 0%, #fee8c8 12.5%, #fdd49e 25%, #fdbb84 37.5%, #fc8d59 50%, #ef6548 62.5%, #d7301f 75%, #b30000 87.5%, #7f0000 100%)',
              }}
            >
              <div
                style={{
                  padding: '10px',
                  fontSize: '20px',
                  fontFamily: 'sans-serif',
                }}
              >
                <span style={{ float: 'left' }}>High B-factor</span>
                <span style={{ float: 'right' }}>Low B-factor</span>
              </div>
            </div>
            <br />
            <small>
              By B-factor - colored from red (highest B-factors in the
              structure) to tan (lowest B-factor in the structure)
            </small>
            <p></p>
            <p></p>
            <div
              style={{
                width: '300px',
                height: '45px',
                background:
                  'linear-gradient(to right, #a50026 0%, #d73027 10%, #f46d43 20%, #fdae61 30%, #fee08b 40%, #ffffbf 50%, #d9ef8b 60%, #a6d96a 70%, #66bd63 80%, #1a9850 90%, #006837 100%)',
              }}
            >
              <div
                style={{
                  padding: '10px',
                  fontSize: '20px',
                  fontFamily: 'sans-serif',
                }}
              >
                <span style={{ float: 'left' }}>Hydrophilic</span>
                <span style={{ float: 'right' }}>Hydrophobic</span>
              </div>
            </div>
            <br />
            <small>
              By Hydrophobicity -- colored from red (hydrophilic) to green
              (hydrophobic). It uses the experimentally determined
              hydrophobicity scale based on whole residue free energies of
              transfer ΔG (kcal/mol) from water to POPC interface as reported by
              <a href="#Wimley1996">Wimley and White</a>.
            </small>
            <p></p>
            <p></p>
            <div id="color-element">
              <div style={{ backgroundColor: '#FFFFFF' }}>
                <span>H</span>
              </div>
              <div style={{ backgroundColor: '#909090' }}>
                <span>C</span>
              </div>
              <div style={{ backgroundColor: '#3050F8' }}>
                <span>N</span>
              </div>
              <div style={{ backgroundColor: '#FF0D0D' }}>
                <span>O</span>
              </div>
              <div style={{ backgroundColor: '#90E050' }}>
                <span>F</span>
              </div>
              <div style={{ backgroundColor: '#FF8000' }}>
                <span>P</span>
              </div>
              <div style={{ backgroundColor: '#FFFF30' }}>
                <span>S</span>
              </div>
            </div>
            <br />
            <small>By Element/CPK</small>
            <p></p>
            <p></p>
            <div id="color-residue-aa">
              <div style={{ backgroundColor: '#8CFF8C' }}>
                <span>Ala</span>
              </div>
              <div style={{ backgroundColor: '#00007C' }}>
                <span>Arg</span>
              </div>
              <div style={{ backgroundColor: '#FF7C70' }}>
                <span>Asn</span>
              </div>
              <div style={{ backgroundColor: '#A00042' }}>
                <span>Asp</span>
              </div>
              <div style={{ backgroundColor: '#FFFF70' }}>
                <span>Cys</span>
              </div>
              <div style={{ backgroundColor: '#FF4C4C' }}>
                <span>Gln</span>
              </div>
              <div style={{ backgroundColor: '#660000' }}>
                <span>Glu</span>
              </div>
              <div style={{ backgroundColor: '#FFFFFF' }}>
                <span>Gly</span>
              </div>
              <div style={{ backgroundColor: '#7070FF' }}>
                <span>His</span>
              </div>
              <div style={{ backgroundColor: '#004C00' }}>
                <span>Ile</span>
              </div>
              <div style={{ backgroundColor: '#455E45' }}>
                <span>Leu</span>
              </div>
              <div style={{ backgroundColor: '#4747B8' }}>
                <span>Lys</span>
              </div>
              <div style={{ backgroundColor: '#B8A042' }}>
                <span>Met</span>
              </div>
              <div style={{ backgroundColor: '#534C52' }}>
                <span>Phe</span>
              </div>
              <div style={{ backgroundColor: '#525252' }}>
                <span>Pro</span>
              </div>
              <div style={{ backgroundColor: '#FF7042' }}>
                <span>Ser</span>
              </div>
              <div style={{ backgroundColor: '#B84C00' }}>
                <span>Thr</span>
              </div>
              <div style={{ backgroundColor: '#4F4600' }}>
                <span>Trp</span>
              </div>
              <div style={{ backgroundColor: '#8C704C' }}>
                <span>Tyr</span>
              </div>
              <div style={{ backgroundColor: '#FF8CFF' }}>
                <span>Val</span>
              </div>
            </div>
            <br />
            <small>By Residue - Amino acids</small>
            <p></p>
            <p></p>
            <div id="color-residue-nt">
              <div style={{ backgroundColor: '#DC143C' }}>
                <span>A/DA</span>
              </div>
              <div style={{ backgroundColor: '#32CD32' }}>
                <span>G/DG</span>
              </div>
              <div style={{ backgroundColor: '#9ACD32' }}>
                <span>I/DI</span>
              </div>
              <div style={{ backgroundColor: '#7CFC00' }}>
                <span>X/DX</span>
              </div>
              <div style={{ backgroundColor: '#FFD700' }}>
                <span>C/DC</span>
              </div>
              <div style={{ backgroundColor: '#4169E1' }}>
                <span>T/DT</span>
              </div>
              <div style={{ backgroundColor: '#40E0D0' }}>
                <span>U/DU</span>
              </div>
              <div style={{ backgroundColor: '#008B8B' }}>
                <span>D/DD</span>
              </div>
            </div>
            <br />
            <small>By Residue - Nucleotides</small>
            <p></p>
            <p></p>
            <div id="color-sstruc">
              <div style={{ backgroundColor: '#FF0080' }}>
                <span>alpha-helix</span>
              </div>
              <div style={{ backgroundColor: '#A00080' }}>
                <span>3/10 helix</span>
              </div>
              <div style={{ backgroundColor: '#600080' }}>
                <span>pi helix</span>
              </div>
              <div style={{ backgroundColor: '#FFC800' }}>
                <span>beta strand</span>
              </div>
              <div style={{ backgroundColor: '#6080FF' }}>
                <span>beta turn</span>
              </div>
              <div style={{ backgroundColor: '#FFFFFF' }}>
                <span>coil</span>
              </div>
              <div style={{ backgroundColor: '#AE00FE' }}>
                <span>DNA</span>
              </div>
              <div style={{ backgroundColor: '#FD0162' }}>
                <span>RNA</span>
              </div>
              <div style={{ backgroundColor: '#A6A6FA' }}>
                <span>carbohydrate</span>
              </div>
            </div>
            <br />
            <small>
              By Secondary Structure (as determined by DSSP) plus DNA, RNA and
              carbohydrate
            </small>
            <p></p>
            <p>
              <small>
                For <i>By Density Fit</i>, <i>By Geometry Quality</i> and
                <i>By Random Coil Index</i>. See
                <a href="#validation-report">Validation Report section</a> for
                details.
              </small>
            </p>
            <a className="content-anchor" id="structure-view-symmetry"></a>
            <h4>Structure View: Symmetry</h4>
            <a className="content-anchor" id="protein-symmetry"></a>
            <h5>Protein Symmetry</h5>
            <p>
              Protein symmetry refers to point group or helical symmetry of
              identical subunits (&gt;= 95% sequence identity over 90% of the
              length of two proteins). While a single protein chain with L-amino
              acids cannot be symmetric (point group C1), protein complexes with
              quaternary structure can have rotational and helical symmetry.
            </p>
            <p>
              Complexes are considered symmetric if identical subunits superpose
              with their symmetry related copies within &lt;= 7 Å Cα RMSD.
              Protein subunits are considered identical if their pairwise
              sequence identity is &gt;= 95% over 90% of the length of both
              sequences, to account for minor sequence variations such as point
              mutations and truncated or disordered N- and C-terminal segments.
              Protein chains with less than 20 residues are excluded, unless at
              least half of the chains are shorter than 20 residues. Nucleic
              acids and carbohydrate chains, as well as ligands are excluded.
              Split entries (entries divided between multiple coordinate files
              due to the limitations of the PDB file format) are currently
              excluded from the protein stoichiometry and protein symmetry
              features.
            </p>
            <a className="content-anchor" id="protein-pseudosymmetry"></a>
            <h5>Protein Pseudosymmetry</h5>
            <p>
              Pseudosymmetry refers to symmetry of homologous protein subunits.
              Protein complexes with pseudostoichiometry may have a higher
              structural symmetry than the symmetry calculated based on sequence
              identity. If we consider hemoglobin again, at a 95% sequence
              identity threshold the alpha and beta subunits are considered
              different, which correspond to an A2B2 stoichiometry and a C2
              point group. At the structural similarity level, all four chains
              are considered homologous (~45% sequence identity) with an A4
              pseudostoichiometry and D2 pseudosymmetry.
            </p>
            <a className="content-anchor" id="global-symmetry"></a>
            <h5>Global Symmetry</h5>
            <p>
              Global symmetry refers to the symmetry of the entire complex.
              Protein complexes may be symmetric, pseudosymmetric, or
              asymmetric.
            </p>
            <a className="content-anchor" id="local-symmetry"></a>
            <h5>Local Symmetry</h5>
            <p>
              Asymmetric protein complexes may have local symmetry. Similar to
              global symmetry, we distinguish local symmetry of identical
              subunits and local pseudosymmetry of homologous subunits.
            </p>
            <a
              className="content-anchor"
              id="structure-view-color-by-density-fit-and-by-geometry-quality-and-clashes-option"
            ></a>
            <h4>
              Structure View: Color (By Density Fit and By Geometry Quality) and
              Clashes option
            </h4>
            <p>
              wwPDB Validation Reports are available for every entry in the
              archive to provide an assessment of the quality of a structure and
              highlight specific concerns by considering the model coordinates,
              experimental data, and fit between the two. RCSB PDB Structure
              Summary pages contain the "slider" graphic that provides a visual
              summary, and link to the full report (PDF).
            </p>
            <p>
              The Color 'By Density Fit' and 'By Geometry Quality' options map
              wwPDB Validation Report information onto the 3D structure. Clashes
              can be displayed as pink disks using the "Clashes" toggle.
            </p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/6009b233c5ab5836659ab2e8/gui-validation-display.png"
                      alt="3D Validation report options "
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    className="content-img-caption"
                    style={{ width: '309px' }}
                  >
                    3D Validation report options
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{ height: '20px' }}></div>
            <a className="content-anchor" id="color-by-density-fit"></a>
            <h5>Color By Density Fit</h5>
            <p>
              For structures determined using X-ray crystallography for which
              structure factors have been deposited, the "Density Fit" scheme
              colors a structure according to the quality of agreement between
              the model and the experimental electron density. Blue indicates a
              good fit for a residue and red a bad fit. Residue coloring is
              determined using normalized Real Space R (RSRZ) for polymer
              residues and real space correlation coefficient (RSCC) for
              ligands. Colors range from red (RSRZ = -2 or RSCC = 0.678) -
              through white - to blue (RSRZ = 0 or RSCC = 1.0):
            </p>
            <p></p>
            <div id="color-density-fit">
              <div
                style={{
                  padding: '10px',
                  fontSize: '20px',
                  fontFamily: 'sans-serif',
                }}
              >
                <span style={{ float: 'left' }}>Better</span>
                <span style={{ float: 'right' }}>Poor</span>
              </div>
            </div>
            <br />
            <small>Key: Color by Density Fit</small>
            <p></p>
            <p>
              The images below have been colored using the "Density Fit" scheme.
              On the left is a structure of Endoglucanase A (PDB ID 3WY6) with a
              generally good fit; on the right a structure of Ribonuclease P
              protein component 3 (PDB ID 3WYZ), which has areas of more
              problematic fit. For details regarding RSRZ and RSCC, please
              consult the
              <a
                href="https://www.wwpdb.org/validation/2016/XrayValidationReportHelp"
                target="_blank"
                rel="noopener"
              >
                Validation Report User Guide for X-ray structures
              </a>
              .
            </p>
            <div style={{ width: '50%' }}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/6009b233c5ab5836659ab2e8/fit-blue.png"
                        data-toggle="lightbox"
                        data-title="Hydrolases colored using the Density Fit scheme.   "
                      >
                        <img
                          className="img-responsive"
                          src="https://cdn.rcsb.org/rcsb-pdb/content/6009b233c5ab5836659ab2e8/fit-blue.png"
                          alt="Hydrolases colored using the Density Fit scheme.   "
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="content-img-caption"
                      style={{ width: '776px' }}
                    >
                      Hydrolases colored using the Density Fit scheme.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ height: '20px' }}></div>
            <a className="content-anchor" id="color-by-geometry-quality"></a>
            <h5>Color By Geometry Quality</h5>
            <p>
              The "Geometry Quality" coloring scheme colors each polymer residue
              and ligand molecule according to the number of geometric issues
              (blue for 0, yellow for 1, orange for 2, and red for 3 or more):
            </p>
            <p></p>
            <div id="color-geometric-quality">
              <div style={{ backgroundColor: '#2166ac' }}>
                <span>0</span>
              </div>
              <div style={{ backgroundColor: '#fee08b' }}>
                <span>1</span>
              </div>
              <div style={{ backgroundColor: '#f46d43' }}>
                <span>2</span>
              </div>
              <div style={{ backgroundColor: '#a50026' }}>
                <span>≥3</span>
              </div>
            </div>
            <br />
            <small>
              Key: Color by Geometry Quality, # of geometry problems
            </small>
            <p></p>
            <p>
              Protein residues and nucleotides are colored per residue whereas
              ligand molecules are colored per atom. Possible geometric issues
              include steric clashes, Ramachandran or RNA backbone outliers, and
              sidechain conformation outliers.
            </p>
            <p>
              The image below shows PDB entry 1FCC, a 3.2 Angstrom resolution
              structure with worse overall quality relative to all X-ray
              structures colored by Geometry Quality.
            </p>
            <div style={{ width: '50%' }}>
              <a
                href="https://cdn.rcsb.org/rcsb-pdb/content/6009b233c5ab5836659ab2e8/geo-1fcc.png"
                data-toggle="lightbox"
              >
                <img
                  className="img-responsive"
                  src="https://cdn.rcsb.org/rcsb-pdb/content/6009b233c5ab5836659ab2e8/geo-1fcc.png"
                />
              </a>
            </div>
            <div style={{ height: '20px' }}></div>
            <p>
              <small>
                PDB entry
                <a
                  href="/3d-view/1FCC?preset=validationReport"
                  target="_blank"
                  rel="noopener"
                >
                  1FCC
                </a>
                , a 3.2 Angstrom resolution structure with worse overall quality
                relative to all X-ray structures colored by Geometry Quality.
              </small>
            </p>
            <a className="content-anchor" id="clashes-option"></a>
            <h5>Clashes option</h5>
            <p>
              With this option, clashes between pairs of atoms are displayed as
              pink discs, with the size of each disc reflecting the degree of
              van der Waals (vdW) overlap between the two atoms. Clash display
              is currently not available for structures comprising more than
              10,000 residues. Information on how these geometry quality
              criteria are calculated is available at wwPDB.org.
            </p>
            <p>
              In the image below a clash between two atoms in entry 1D66 is
              indicated by a pink disc, showing how much the atoms' vdW spheres
              overlap. In this example, the structure has been colored using the
              "Geometry Quality" scheme, which indicates that this clash is the
              only geometric issue for these two residues.
            </p>
            <img
              className="img-responsive"
              src="https://cdn.rcsb.org/rcsb-pdb/content/6009b233c5ab5836659ab2e8/clash-1d66.png"
            />
            <div style={{ height: '20px' }}></div>
            <p>
              <small>
                A clash between two atoms in
                <a
                  href="/3d-view/1D66?preset=validationReport"
                  target="_blank"
                  rel="noopener"
                >
                  PDB ID 1D66
                </a>
                is indicated by a pink disc, showing how much the atoms' vdW
                spheres overlap. In this example, the structure has been colored
                using the "Geometry Quality" scheme, which indicates that this
                clash is the only geometric issue for these two residues.
              </small>
            </p>
            <a
              className="content-anchor"
              id="color-by-nmr-random-coil-index"
            ></a>
            <h5>Color By NMR Random Coil Index</h5>
            <p>
              For NMR structures for which chemical shift data have been
              deposited, the "NMR Random Coil Index" (RCI) scheme colors a
              structure according to the probability that the given residue is
              disordered ("random coil-like"). The color of each residue
              indicates whether the residue is classified as rigid (blue, RCI =
              0.0) or flexible (red, RCI = 0.6). Residue coloring is based on
              the measured chemical shifts and on the primary sequence of the
              protein chain
              <sup>
                <a href="#Berjanskii2005">[Berjanskii2005]</a>,
                <a href="#Berjanskii2008">[Berjanskii2008]</a>
              </sup>
              . Residues without chemical shift data in the chemical shift file
              are displayed in gray.
            </p>
            <p></p>
            <div id="color-random-coil-index">
              <div
                style={{
                  padding: '10px',
                  fontSize: '20px',
                  fontFamily: 'sans-serif',
                }}
              >
                <span style={{ float: 'left' }}>Low</span>
                <span style={{ float: 'right' }}>High</span>
              </div>
            </div>
            <br />
            <small>Key: Color by Random Coil Index</small>
            <p></p>
            <a className="content-anchor" id="ligand-viewer-options"></a>
            <h3>
              <span id="ligand-view">Ligand Viewer Options</span>
            </h3>
            <p>
              For entries containing ligands, the Ligand View offers various
              ligand-related display options:
            </p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Ligand: Select the ligand to display</li>
              <li>Opacity: Change the opacity of the ligand binding pocket</li>
              <li>
                Near Clipping: Adjust the clipping plane for the ligand binding
                pocket
              </li>
              <li>
                Radius Clipping: Change the radius of the clipping sphere around
                the ligand binding pocket
              </li>
              <li>
                Color: Color the pocket surface using different schemes
                (element/CPK, hydrophobicity, and B-factor - see above for
                descriptions of the coloring)
              </li>
              <li>
                Interactions: Show or hide various interactions (Hydrophobic
                Contacts, Hydrogen Bonds, Halogen Bonds, Metal Interactions, Pi
                Interactions) that are colored according to the scheme below
              </li>
              <li>
                Label: Display or hide labels for the ligand and neighboring
                residues.
              </li>
              <li>Polymer Display: Show or hide the current polymer display</li>
              <li>
                Default ligand view: Return the viewer to the default settings.
              </li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <p></p>
            <table id="color-interaction">
              <tbody>
                <tr>
                  <td>
                    <hr style={{ borderColor: '#2B83BA' }} />
                  </td>
                  <td>hydrogen bonds</td>
                </tr>
                <tr>
                  <td>
                    <hr style={{ borderColor: '#808080' }} />
                  </td>
                  <td>hydrophobic contacts</td>
                </tr>
                <tr>
                  <td>
                    <hr style={{ borderColor: '#40FFBF' }} />
                  </td>
                  <td>halogen bonds</td>
                </tr>
                <tr>
                  <td>
                    <hr style={{ borderColor: '#8C4099' }} />
                  </td>
                  <td>metal interactions</td>
                </tr>
                <tr>
                  <td>
                    <hr style={{ borderColor: '#FF8000' }} />
                  </td>
                  <td>cation-pi interactions</td>
                </tr>
                <tr>
                  <td>
                    <hr style={{ borderColor: '#8CB366' }} />
                  </td>
                  <td>pi-stacking interactions</td>
                </tr>
              </tbody>
            </table>
            <p></p>
            <p>
              Note that there might be no binding pocket surface because the
              ligand is not interacting/not close enough with/to the
              macromolecule. The binding pocket surface is a surface of the
              macro molecule, that is, it ignores ligands, water, ions, ...
            </p>
            <a
              className="content-anchor"
              id="interaction-types-definition-and-calculation-parameters"
            ></a>
            <h4>Interaction Types Definition and Calculation Parameters</h4>
            <a className="content-anchor" id="hydrogen-bonds"></a>
            <h5>Hydrogen Bonds</h5>
            <p>
              Hydrogen bonds
              <sup>
                <a href="#Stickle1992">[Stickle1992]</a>,
                <a href="#Zhou2008">[Zhou2008]</a>
              </sup>
              are calculated according to the following parameters between donor
              and acceptor atoms.
            </p>
            <p>
              Note that hydrogens are not required for the generation of
              hydrogen bonds, and indeed are ignored if present. While the aim
              is to find all potential hydrogen bonds a comprehensive global
              analysis to find the optimal hydrogen bonding network is not
              performed as this would require a global analysis of protonation
              states.
            </p>
            <p>
              Donor atoms: In general all nitrogen, oxygen, and sulfur atoms
              that have a hydrogen count greater 1 according to our valence
              model can be considered donors (for carbon as a donor see the
              heading Weak Hydrogen Bonds). Any nitrogen in a His ring may also
              be a donor.
            </p>
            <p>
              Acceptor atoms: All oxygen atoms are considered to be acceptors.
              Nitrogen atoms are considered to be acceptors when the charge is
              less than 1 and at least one lone pair is not conjugated according
              to our valence model. Aminoacids (table-based, in addition to the
              general rule). Any nitrogen atom in a ring in His (to work around
              the ambiguity of where the charge is). Sulfur atoms are considered
              to be acceptors if the formal charge is -1 or if they are present
              in Cys or Met.
            </p>
            <p>
              The maximum donor to acceptor distance is generally 3.5 Å and 4.1
              Å for bonding with sulfur atoms. Angles are checked according to
              the following guidelines:
            </p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Maximum 45 degree deviation from optimal (90 degree) acceptor
                angle (AA-A-D)
              </li>
              <li>
                Maximum 45 degree deviation from optimal (90 for sp2, 60 for
                sp3) donor angle (DA-D-A)
              </li>
              <li>
                Maximum 90 degree deviation from optimal (0 degree) acceptor
                plane angle (A-D to A-AA-AA’ or AAA instead of AA’)
              </li>
              <li>
                Maximum 30 degree deviation from optimal (0 degree) donor plane
                angle (D-A to D-DA-DA’ or DAA instead of DA’)
              </li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <div style={{ width: '40%' }}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://cdn.rcsb.org/rcsb-pdb/content/6009b233c5ab5836659ab2e8/hbond-graph.png"
                        data-toggle="lightbox"
                        data-title="Legend: Donor (D), Hydrogen (H), Donor-Antecedent (DA), Donor-Antecedent-Antecedent (DAA), Acceptor (A), Acceptor-Antecedent (AA), Acceptor-Antecedent-Antecedent (AAA). "
                      >
                        <img
                          className="img-responsive"
                          src="https://cdn.rcsb.org/rcsb-pdb/content/6009b233c5ab5836659ab2e8/hbond-graph.png"
                          alt="Legend: Donor (D), Hydrogen (H), Donor-Antecedent (DA), Donor-Antecedent-Antecedent (DAA), Acceptor (A), Acceptor-Antecedent (AA), Acceptor-Antecedent-Antecedent (AAA). "
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="content-img-caption"
                      style={{ width: '385px' }}
                    >
                      Legend: Donor (D), Hydrogen (H), Donor-Antecedent (DA),
                      Donor-Antecedent-Antecedent (DAA), Acceptor (A),
                      Acceptor-Antecedent (AA), Acceptor-Antecedent-Antecedent
                      (AAA).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ height: '20px' }}></div>
            <a className="content-anchor" id="halogen-bonds"></a>
            <h5>Halogen Bonds</h5>
            <p>
              Halogen bonds
              <sup>
                <a href="#Auffinger2004">[Auffinger2004]</a>
              </sup>
              are calculated according to the following parameters: Donors can
              be X-C, where X is Cl, Br, I or At but not F (no sigma-hole).
              Acceptors can be Y- where Y is C, P, N, or S. The maximum Halogen
              bond distance is 3.5 Å. The maximum angle deviation is 30 degrees
              optimal in which the C-X···O angle ≈180° (consistent with a strong
              directional polarization of the halogen) and the X···O-Y angle
              ≈120°.
            </p>
            <a className="content-anchor" id="hydrophobic-contacts"></a>
            <h5>Hydrophobic Contacts</h5>
            <p>
              Hydrophobic contacts
              <sup>
                <a href="#Freitas2017">[Freitas2017]</a>
              </sup>
              are calculated according to the following parameters: Contacts are
              made between carbons that are connected only to carbon or
              hydrogen, the default maximum hydrophobic distance is 4.0 Å, for
              atoms that interact with several atoms in the same residue, only
              the one with the closest distance is kept, and hydrophobic
              contacts between pi-stacked aromatic rings are removed.
            </p>
            <a className="content-anchor" id="metal-interactions"></a>
            <h5>Metal Interactions</h5>
            <p>
              Metal Interaction types are defined as dative bonds and
              ionic/ionic-type interactions between metal classes and potential
              metal binding partners.
            </p>
            <a
              className="content-anchor"
              id="potential-metal-binding-partners"
            ></a>
            <h6>Potential metal binding partners</h6>
            <p>Nucleobases</p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Sugar oxygens (atom names O2’, O3’, O4’): dative, ionic</li>
              <li>Selected base nitrogens (N3, N4, N7): dative</li>
              <li>Selected base oxygens (O2, O4, O6): dative, ionic</li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <p>Aminoacids</p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Oxygen in backbone: dative, ionic</li>
              <li>
                Oxygen in Asp, Glu, Ser, Thr, Tyr, Asn, Gln sidechain: dative,
                ionic
              </li>
              <li>Sulfur in Cys sidechain: dative, ionic</li>
              <li>Nitrogen in His sidechain: dative</li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <p>Halogens</p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>Dative, ionic</li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <p>Functional groups from ligands</p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>O, N, S, Halogens: dative</li>
              <li>O, S, Halogens: ionic</li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <a className="content-anchor" id="metals-classes"></a>
            <h6>Metals classes</h6>
            <p>
              Alkali &amp; Alkaline earth Li, Na, K, Rb, Cs, Mg, Ca, Sr, Ba and
              other Al,Ga,In,Tl, Sc, Sn, Pb, Bi, Sb, Hg
            </p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>ionic-type</li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <p>Transition metals</p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>dative, ionic</li>
              <li>metal-metal</li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <a className="content-anchor" id="pi-interactions"></a>
            <h5>Pi Interactions</h5>
            <a className="content-anchor" id="cation-pi"></a>
            <h6>Cation-Pi</h6>
            <p>
              Cation-Pi interactions
              <sup>
                <a href="#Gallivan1999">[Gallivan1999]</a>
              </sup>
              are defined as a contact between a positive charge center (see
              heading "Charge centers" below) and aromatic ring (see heading
              "Pi-Stacking" below) in wihch the maximum distance between ring
              and charge center is 6 Å and the maximum offset of ring and charge
              center is 1.5 Å.
            </p>
            <a className="content-anchor" id="pi-stacking"></a>
            <h6>Pi-stacking</h6>
            <p>
              Pi-stacking interactions
              <sup>
                <a href="#McGaughey1998">[McGaughey1998]</a>
              </sup>
              are the parallel or T-shaped stacking of aromatic rings. The
              aromaticity of a ring is deduced from flags of its member atoms
              (when available) or by checking if the ring is planar and contains
              only B, C, N, O, Si, P, S, Ge, As, Sn, Sb, Bi atoms. These
              interactions are included when the maximum distance between ring
              centers is 5.5 Å. The maximum offset of ring centers is 2.0 Å
              (about the radius of benzene plus 0.5 Å), the maximum deviation
              from optimal angle (0 for parallel, 90 for t-shaped) is 30 degree.
            </p>
            <a className="content-anchor" id="charge-centers"></a>
            <h6>Charge centers</h6>
            <p>
              Positive charge centers can be: nitrogen sidechain atoms in Arg,
              His, Lys; atoms in Guanidine, Acetamidine groups; atoms with a
              positive charge according to our valence model. Negative charge
              centers can be: oxygen sidechain atoms in Glu, Asp; atoms in
              Sulfonic Acid, Phosphate (including DNA/RNA), Sulfate or
              Carboxylate; atoms with a negative charge according to our
              valence. Hydrogen bonds between atoms in the charge groups are not
              shown.
            </p>
            <a className="content-anchor" id="electron-density-maps"></a>
            <h3>Electron Density Maps</h3>
            <p>
              Electron density maps combine the structural model (coordinates)
              and the experimentally-collected data from an X-ray structure
              determination and serve to represent the fit of the model to the
              data. There are two types of electron density maps commonly used
              by researchers: the 2fo-fc map and the fo-fc map. The fo-fc (also
              called a difference or omit map) map shows what has been
              overrepresented or not accounted for by the model, while the
              2fo-fc map includes the fo-fc map and electron density around the
              model.
            </p>
            <p>
              These two maps are then used to correct the model when possible.
              Even in the best quality structures, there are areas of poor
              electron density, which may represent sections of the model that
              exist in multiple conformations. This can be seen in long side
              chains or surface loops of the model.
            </p>
            <p>
              For additional background, please see
              <a
                href="http://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/structure-factors-and-electron-density"
                target="_blank"
                rel="noopener"
              >
                Structure Factors and Electron Density
              </a>
              at PDB-101 and for additional information on the generation and
              downloading of maps at the RCSB, please see the
              <a href="/docs/general-help/x-ray-electron-density-maps">
                X-ray Electron Density Maps FAQ
              </a>
              .
            </p>
            <p>The Electron Density Maps tab offers various display options:</p>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                Map: Turn on or off the 2fo-fc map display (colored blue) and/or
                the fo-fc (negative density is colored red and positive peaks
                are colored green).
              </li>
              <li>
                Scroll: Select the map whose isolevel value will be changed with
                the mouse via "Ctrl scroll-wheel". See also: the Level option.
              </li>
              <li>
                Level: The value at which the isosurface of the map is shown (in
                sigma values). This value can be adjusted using the sliders for
                each map type or using the mouse via "Ctrl scroll-wheel".
              </li>
              <li>
                Map Style: Select the map display style (mesh, smooth, or flat).
              </li>
              <li>
                Map Size: For efficiency, only a portion of the map is
                displayed. The map size option adjusts the size (in Å along each
                of the three crystallographic axes) of this portion.
              </li>
              <li>Ligand: Recenter the view around the selected ligand.</li>
              <li>
                Default maps view: Adjusts the view settings to be optimized for
                electron density map display.
              </li>
            </ul>
            <div style={{ height: '20px' }}></div>
            <a className="content-anchor" id="references"></a>
            <h3>References</h3>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                <span id="Auffinger2004">
                  <b>[Auffinger2004]</b> P Auffinger, FA Hays, E Westhof, and PS
                  Ho. Halogen bonds in biological molecules. PNAS, 2004.
                  <a
                    href="http://dx.doi.org/10.1073/pnas.0407607101"
                    target="_blank"
                    rel="noopener"
                  >
                    doi:10.1073/pnas.0407607101
                  </a>
                </span>
              </li>
              <li>
                <span id="Berjanskii2005">
                  <b>[Berjanskii2005]</b>MV Berjanskii and DS Wishart. A Simple
                  Method To Predict Protein Flexibility Using Secondary Chemical
                  Shifts. J. Am. Chem. Soc., 2005.
                  <a
                    href="http://dx.doi.org/10.1021/ja054842f"
                    target="_blank"
                    rel="noopener"
                  >
                    doi:10.1021/ja054842f
                  </a>
                </span>
              </li>
              <li>
                <span id="Berjanskii2008">
                  <b>[Berjanskii2008]</b>MV Berjanskii and DS Wishart.
                  Application of the random coil index to studying protein
                  flexibility. J Biomol NMR. 2008.
                  <a
                    href="http://dx.doi.org/10.1007/s10858-007-9208-0"
                    target="_blank"
                    rel="noopener"
                  >
                    doi:10.1007/s10858-007-9208-0
                  </a>
                </span>
              </li>
              <li>
                <span id="Freitas2017">
                  <b>[Freitas2017]</b> RF de Freitas and M Schapira. A
                  systematic analysis of atomic protein–ligand interactions in
                  the PDB. Med Chem Commun, 2017.
                  <a
                    href="https://doi.org/10.1039/C7MD00381A"
                    target="_blank"
                    rel="noopener"
                  >
                    doi:10.1039/C7MD00381A
                  </a>
                </span>
              </li>
              <li>
                <span id="Gallivan1999">
                  <b>[Gallivan1999]</b> JP Gallivan and DA Dougherty. Cation-π
                  interactions in structural biology. PNAS, 1999.
                  <a
                    href="http://dx.doi.org/10.1073/pnas.96.17.9459"
                    target="_blank"
                    rel="noopener"
                  >
                    doi:10.1073/pnas.96.17.9459
                  </a>
                </span>
              </li>
              <li>
                <span id="McGaughey1998">
                  <b>[McGaughey1998]</b> GB McGaughey, M Gagné and AK Rappé.
                  π-Stacking Interactions - ALIVE AND WELL IN PROTEINS. JBC,
                  1998.
                  <a
                    href="http://dx.doi.org/10.1074/jbc.273.25.15458"
                    target="_blank"
                    rel="noopener"
                  >
                    doi:10.1074/jbc.273.25.15458
                  </a>
                </span>
              </li>
              <li></li>
              <li id="Rose2015">
                <b>[Rose2015]</b> AS Rose and PW Hildebrand. NGL Viewer: a web
                application for molecular visualization. Nucl Acids Res, 2015.
                <a
                  href="https://doi.org/10.1093/nar/gkv402"
                  target="_blank"
                  rel="noopener"
                >
                  doi:10.1093/nar/gkv402
                </a>
              </li>
              <li>
                <span id="Rose2016">
                  <b>[Rose2016]</b> AS Rose, AR Bradley, Y Valasatava, JM
                  Duarte, A Prlić and PW Rose. Web-based molecular graphics for
                  large complexes. ACM Proceedings of the 21st International
                  Conference on Web3D Technology, 2016.
                  <a
                    href="http://dx.doi.org/10.1145/2945292.2945324"
                    target="_blank"
                    rel="noopener"
                  >
                    doi:10.1145/2945292.2945324
                  </a>
                </span>
              </li>
              <li>
                <span id="Stickle1992">
                  <b>[Stickle1992]</b> DF Stickle, LG Presta, KA Dill, GD Rose.
                  Hydrogen bonding in globular proteins. JMB, 1992.
                  <a
                    href="http://dx.doi.org/10.1016/0022-2836(92)91058-W"
                    target="_blank"
                    rel="noopener"
                  >
                    doi:10.1016/0022-2836(92)91058-W
                  </a>
                </span>
              </li>
              <li>
                <span id="Wimley1996">
                  <b>[Wimley1996]</b> W Wimley and SH White. Experimentally
                  determined hydrophobicity scale for proteins at membrane
                  interfaces. Nature Structural Biology, 1996.
                  <a
                    href="http://dx.doi.org/10.1038/nsb1096-842"
                    target="_blank"
                    rel="noopener"
                  >
                    doi:10.1038/nsb1096-842
                  </a>
                </span>
              </li>
              <li>
                <span id="Zhou2008">
                  <b>[Zhou2008]</b> P Zhou, F Tian, F Lv, Z Shang. Geometric
                  characteristics of hydrogen bonds involving sulfur atoms in
                  proteins. Proteins, 2008.
                  <a
                    href="http://dx.doi.org/10.1002/prot.22327"
                    target="_blank"
                    rel="noopener"
                  >
                    doi:10.1002/prot.22327
                  </a>
                </span>
              </li>
              <li>
                <span id="Rose2018">
                  <b>[Rose2018]</b> AS Rose, AR Bradley, Y Valasatava, JM
                  Duarte, A Prlić and PW Rose. NGL viewer: web-based molecular
                  graphics for large complexes. Bioinformatics, 2018.
                  <a
                    href="http://dx.doi.org/10.1093/bioinformatics/bty419"
                    target="_blank"
                    rel="noopener"
                  >
                    doi:10.1093/bioinformatics/bty419
                  </a>
                </span>
              </li>
            </ul>
            <div style={{ height: '20px' }}></div>
          </div>
        </div>
        <br />
        <hr />
        <div className="item-info">
          <div>
            Please report any encountered broken links to
            <a href="mailto:info@rcsb.org">info@rcsb.org</a>
          </div>
          <div>Last updated: 8/21/2022</div>
        </div>
      </div>
    </>
  );
};
