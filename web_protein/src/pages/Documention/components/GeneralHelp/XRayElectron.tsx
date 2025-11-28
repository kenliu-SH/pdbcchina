export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">General Help</h5>
        <h1>X-ray Electron Density Maps</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ●
            <a href="#what-are-electron-density-maps">
              What are electron density maps?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#what-is-a-2fo-fc-map-and-how-is-it-different-from-an-fo-fc-map">
              What is a 2Fo-Fc map and how is it different from an Fo-Fc map?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#about-maps">About Maps:</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#how-are-the-maps-calculated">
              How are the maps calculated?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#for-which-pdb-entries-are-the-maps-available">
              For which PDB entries are the maps available?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#in-what-format-are-the-maps-available">
              In what format are the maps available?
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#why-were-the-dsn6-and-mtz-formats-chosen">
              Why were the DSN6 and MTZ formats chosen?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#from-where-can-maps-be-downloaded">
              From where can maps be downloaded?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#can-maps-for-electron-microscopy-entries-be-downloaded">
              Can maps for electron microscopy entries be downloaded?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#reference">Reference</a>
          </div>
          <a className="content-anchor" id="what-are-electron-density-maps"></a>
          <h2>What are electron density maps?</h2>
          <p>
            Electron density maps are the end results of an
            <a
              href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/structure-factors-and-electron-density"
              target="_blank"
            >
              X-ray structure determination
            </a>
            . The maps combine the structural model and the experimentally
            collected data to represent how well the model fits the data.
          </p>
          <a
            className="content-anchor"
            id="what-is-a-2fo-fc-map-and-how-is-it-different-from-an-fo-fc-map"
          ></a>
          <h3>
            What is a 2Fo-Fc map and how is it different from an Fo-Fc map?
          </h3>
          <p>
            There are two common types of electron density maps used by
            researchers, the 2Fo-Fc map and Fo-Fc map. The Fo-Fc map, known also
            as a difference or omit map, is used to show what has been overfit
            or not accounted for by the model, while the 2Fo-Fc map will include
            the Fo-Fc map and electron density around the model.
            <br />
            <br />
            These two maps are then used to correct the model when possible.
            Even in the best quality structures, there are areas of poor
            electron density, which may represent sections of the model that
            exist in multiple conformations. This can be seen in long side
            chains or surface loops of the model.
          </p>
          <a className="content-anchor" id="about-maps"></a>
          <h2>About Maps:</h2>
          <a className="content-anchor" id="how-are-the-maps-calculated"></a>
          <h3>How are the maps calculated?</h3>
          <p>
            The program DCC
            <sup>
              <a href="#yang2016">[Yang2016]</a>
            </sup>
            uses REFMAC to calculate phases and produce electron density maps.
          </p>
          <a
            className="content-anchor"
            id="for-which-pdb-entries-are-the-maps-available"
          ></a>
          <h3>For which PDB entries are the maps available?</h3>
          <p>
            Electron density maps are available for most entries for which a
            <a
              href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/structure-factors-and-electron-density"
              target="_blank"
            >
              structure factor
            </a>
            file is available. There is no consideration made of how well the
            model fits the data.
          </p>
          <a
            className="content-anchor"
            id="in-what-format-are-the-maps-available"
          ></a>
          <h3>In what format are the maps available?</h3>
          <p>
            Maps are provided in both DSN6 format and as separate map
            coefficients (MTZ) files.
          </p>
          <a
            className="content-anchor"
            id="why-were-the-dsn6-and-mtz-formats-chosen"
          ></a>
          <h4>Why were the DSN6 and MTZ formats chosen?</h4>
          <p>
            DSN6 files are smaller in size than CCP4 maps, and compress well for
            web delivery. The DSN6 maps have two different versions available.
            In the first the grid spacing of the maps is fixed at 1/3 of the
            highest resolution of the map. In the other, used for highter
            resolution structures, the spacing varies from 1/3 to 1/2 of the
            highest resolution limit. This provides for a smaller size without
            compromising quality. DSN6 maps can be read by Jmol, UCSF Chimera,
            and PyMOL.
          </p>
          <p>
            MTZ files contain map phasing information. COOT can use this
            information to produce an electron density map.
          </p>
          <a
            className="content-anchor"
            id="from-where-can-maps-be-downloaded"
          ></a>
          <h3>From where can maps be downloaded?</h3>
          <p>
            Maps (in DSN6 format) and map coefficients (MTZ format) files can be
            downloaded from the "Download Files" menu of the Structure Summary
            Page.
          </p>
          <p>
            These files are also available from edmaps.rcsb.org. The DSN6 map
            files are in the "dsn6" folder (with fixed grid spacing at "high
            resolution/3") and in the "ngl" folder (with variable grid spacing
            from "high resolution/3" to "high resolution/2"). Entries are
            grouped by the middle two characters of the 4-character PDB
            identifier. For example, the DSN6 files for PDB entry 3PQR can be
            found in edmaps.rcsb.org/dsn6/pq/3pqr/. Coefficient files can be
            downloaded with URLs of the type
            edmaps.rcsb.org/coefficients/1o08.mtz.
          </p>
          <a
            className="content-anchor"
            id="can-maps-for-electron-microscopy-entries-be-downloaded"
          ></a>
          <h3>Can maps for electron microscopy entries be downloaded?</h3>
          <p>
            Maps from electron microscopy experiments can be downloaded from the
            Structure Summary Page 'Download Files" option and from the FTP
            directory at
            <a href="ftp://ftp.wwpdb.org/pub/emdb/structures/" target="_blank">
              ftp://ftp.wwpdb.org/pub/emdb/structures/
            </a>
            . (Note: ftp links work in Firefox and Safari)
          </p>
          <a className="content-anchor" id="reference"></a>
          <h2>Reference</h2>
          <p>
            <a id="yang2016" className="content-anchor"></a>
            <b>[Yang2016]</b> H Yang, E Peisach, JD Westbrook, J Young, HM
            Berman and SK Burley. DCC: a Swiss army knife for structure factor
            analysis and validation (2016) Journal of Applied Crystallography
            49, 1081-1084
            <a
              href="http://scripts.iucr.org/cgi-bin/paper?S1600576716004428"
              target="_blank"
            >
              doi:10.1107/S1600576716004428
            </a>
            .
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
        <div>Last updated: 8/31/2022</div>
      </div>
    </div>
  );
};
