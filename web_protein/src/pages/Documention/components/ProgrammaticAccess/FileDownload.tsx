export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Programmatic Access</h5>
        <h1>File Download Services</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#the-pdb-archive">The PDB archive</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#automated-download-of-data">Automated download of data</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#major-directories-in-the-pdb-archive">
              Major directories in the PDB archive
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ●
            <a href="#other-downloads-offered-by-rcsb-pdb">
              Other downloads offered by RCSB PDB
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#pdb-entry-files">PDB entry files</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#small-molecule-files">Small molecule files</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#experimental-data-files-and-3dem-maps">
              Experimental data files and 3DEM maps
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#sequence-data">Sequence data</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#sequence-clusters-data">Sequence clusters data</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○ <a href="#holdings-data">Holdings data</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#chemical-component-dictionary-ccd-data">
              Chemical Component Dictionary (CCD) Data
            </a>
          </div>
          <a className="content-anchor" id="the-pdb-archive"></a>
          <h2>The PDB archive</h2>
          <p>
            Searches and reports performed on this RCSB PDB website utilize data
            from the PDB archive. The PDB archive is maintained by the
            <a href="https://www.wwpdb.org/" target="_blank" rel="noopener">
              wwPDB
            </a>
            at the main archive, files.wwpdb.org (
            <a
              href="https://www.wwpdb.org/ftp/pdb-ftp-sites"
              target="_blank"
              rel="noopener"
            >
              data download details
            </a>
            ) and the versioned archive, files-versioned.wwpdb.org (
            <a
              target="_blank"
              rel="noopener"
              href="https://www.wwpdb.org/ftp/pdb-versioned-ftp-site"
            >
              versioning details
            </a>
            ).
          </p>
          <p>
            All data are available via the
            <a href="https://files.wwpdb.org/" target="_blank">
              HTTPS
            </a>
            protocol. Additionally the <a href="ftp://ftp.wwpdb.org">FTP</a>
            protocol is still supported while it is being phased out. Note that
            FTP users should switch to binary mode before downloading data
            files. Note also that most web browsers (e.g., Chrome) have dropped
            support for FTP. You will need a separate FTP client for downloading
            via FTP protocol.
          </p>
          <p>
            Please note that
            <b>the FTP protocol will be phased out on November 1st 2024</b>. See
            the <a href="/news/636151b266d6046810db7f0f">announcement</a>.
          </p>
          <p>
            RCSB PDB additionally hosts the archive as part of the Registry of
            Open Data on Amazon Web Services (AWS) at
            <a href="https://s3.rcsb.org/" target="_blank">
              https://s3.rcsb.org
            </a>
            following the same directory structure.
          </p>
          <a className="content-anchor" id="automated-download-of-data"></a>
          <h3>Automated download of data</h3>
          <p>
            The URLs in this document are useful for scripted downloads using
            utilities such as
            <a
              href="https://en.wikipedia.org/wiki/Wget"
              target="_blank"
              rel="noopener"
            >
              wget
            </a>
            . For instance you can consider using the
            <a href="/docs/programmatic-access/batch-downloads-with-shell-script">
              batch downloads shell script
            </a>
            .
          </p>
          <p>
            The RCSB PDB also provides
            <a target="_blank" rel="noopener" href="https://rsync.samba.org/">
              rsync
            </a>
            capabilities, useful when maintaining full copies of the archive.
            These are 2 example scripts to assist in the automated download of
            data with rsync:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <a href="ftp://snapshots.rcsb.org/rsyncSnapshots.sh">
                ftp://snapshots.rcsb.org/rsyncSnapshots.sh
              </a>
              To make a local copy of an annual snapshot or sections of the
              snapshot. This script is annotated to assist in downloading only
              sections of the archive.
            </li>
            <li>
              <a href="https://files.wwpdb.org/pub/pdb/software/rsyncPDB.sh">
                https://files.wwpdb.org/pub/pdb/software/rsyncPDB.sh
              </a>
              To copy the current contents of the entire archive
            </li>
          </ul>
          <div></div>
          <p>
            Additional information on obtaining and maintaining copies of the
            entire PDB archive or certain portions of it is available at
            <a
              href="https://www.wwpdb.org/downloads.html"
              target="_blank"
              rel="noopener"
            >
              https://www.wwpdb.org/downloads.html
            </a>
            .
          </p>
          <a
            className="content-anchor"
            id="major-directories-in-the-pdb-archive"
          ></a>
          <h3>Major directories in the PDB archive</h3>
          <p>
            The directory
            <a
              href="https://files.wwpdb.org/pub/pdb"
              target="_blank"
              rel="noopener"
            >
              pub/pdb
            </a>
            is the entry directory for the ftp site.
          </p>
          <p>Some general notes:</p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Entry files are date-stamped to show the date they were released
            </li>
            <li>
              Entries are grouped by the middle two characters of the
              4-character PDB identifier. For example, entry file pdb100d.ent
              can be found in
              <a
                href="https://files.wwpdb.org/pub/pdb/data/structures/divided/pdb/00/pdb100d.ent.gz"
                target="_blank"
                rel="noopener"
              >
                pub/pdb/data/structures/divided/pdb/00/pdb100d.ent.gz
              </a>
            </li>
            <li>
              The two letter naming convention for structure holdings is
              retained for the directories within
              <b>/pub/pdb/data/structures/divided</b> and
              <b>/pub/pdb/data/structures/divided/obsolete</b> but not for the
              directories within <b>/pub/pdb/data/structures/all</b>, which
              contain the structure holdings in undivided layout.
            </li>
            <li>
              PDB entries are available in PDB, mmCIF, and PDBML/XML format.
            </li>
            <li>
              Only UNIX <b>compressed files</b> are supported for coordinates,
              structure factors, and restraints.
            </li>
          </ul>
          <div></div>
          <p>
            For information about large structures that cannot be represented in
            the legacy PDB file format see
            <a
              href="/docs/general-help/structures-without-legacy-pdb-format-files"
              target="_blank"
            >
              here
            </a>
            .
          </p>
          <table className="content-resources" border={1}>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://files.wwpdb.org/pub/pdb/data/assemblies/mmCIF/"
                    target="_blank"
                  >
                    /pub/pdb/data/assemblies/mmCIF
                  </a>
                </td>
                <td>Biological assembly coordinate files in mmCIF format</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://files.wwpdb.org/pub/pdb/data/biounit/PDB"
                    target="_blank"
                  >
                    /pub/pdb/data/biounit/PDB
                  </a>
                </td>
                <td>Biological assembly coordinate files in PDB format</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://files.wwpdb.org/pub/pdb/data/monomers"
                    target="_blank"
                  >
                    /pub/pdb/data/monomers
                  </a>
                </td>
                <td>
                  PDB Chemical Component Dictionary and other info on monomers
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://files.wwpdb.org/pub/pdb/data/status"
                    target="_blank"
                  >
                    /pub/pdb/data/status
                  </a>
                </td>
                <td>Details of entries on hold and in processing</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://files.wwpdb.org/pub/pdb/data/structures/all"
                    target="_blank"
                  >
                    /pub/pdb/data/structures/all
                  </a>
                </td>
                <td>
                  Analogous to the divided directory, containing pdb, mmCIF,
                  nmr_restraint, and structure_factors directories, with
                  symbolic links to files in the divided subdirectories. In the
                  ./all directory, files are not divided into two-letter
                  directories, however.
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://files.wwpdb.org/pub/pdb/data/structures/divided"
                    target="_blank"
                  >
                    /pub/pdb/data/structures/divided
                  </a>
                </td>
                <td>
                  This is the entry point for a user finding a structure. This
                  directory contains the current PDB, in pdb, mmCIF, XML,
                  nmr_restraint, and structure_factors directories, with the
                  files divided according to a two letter organization. Entries
                  are grouped by the middle two characters of the ident code.
                  For example, entry file pdb1abc.ent can be found in
                  pub/pdb/data/structures/divided/pdb/ab
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://files.wwpdb.org/pub/pdb/data/structures/models"
                    target="_blank"
                  >
                    /pub/pdb/data/structures/models
                  </a>
                </td>
                <td>
                  Theoretical model files that are maintained separately from
                  the main archive
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://files.wwpdb.org/pub/pdb/data/structures/obsolete"
                    target="_blank"
                  >
                    /pub/pdb/data/structures/obsolete
                  </a>
                </td>
                <td>
                  Structures and associated data files no longer part of the
                  archive
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://files.wwpdb.org/pub/pdb/derived_data"
                    target="_blank"
                  >
                    /pub/pdb/derived_data
                  </a>
                </td>
                <td>
                  Plain text files that list information derived from all PDB
                  entries, such as all PDB sequences in FASTA format.
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://files.wwpdb.org/pub/pdb/doc" target="_blank">
                    /pub/pdb/doc
                  </a>
                </td>
                <td>
                  Documentation, including file format descriptions and RCSB PDB
                  Newsletters
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a
            className="content-anchor"
            id="other-downloads-offered-by-rcsb-pdb"
          ></a>
          <h2>Other downloads offered by RCSB PDB</h2>
          <p>
            Some of the http links above are also available in a short style
            (e.g.
            <a href="https://files.rcsb.org/download/4hhb.cif.gz">
              /download/4hhb.cif.gz
            </a>
            ). Additionally, for the short style links 2 URLs are available:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>view</b>: The HTTP/HTTPS response headers to the client are set
              with: Content-Type: text/plain
            </li>
            <li>
              <b>download</b>: The HTTP/HTTPS response headers to the client are
              set with: Content-Type: application/octet-stream and
              Content-Transfer-Encoding: binary
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="pdb-entry-files"></a>
          <h3>PDB entry files</h3>
          <p>
            PDB entry files are available in several file formats (PDB,
            PDBx/mmCIF, XML, BinaryCIF), compressed or uncompressed, and with an
            option to download a file containing only "header" information
            (summary data, no coordinates).
          </p>
          <table className="table table-bordered" border={1}>
            <thead>
              <tr>
                <th>File Format</th>
                <th>Action</th>
                <th>Storage Compression</th>
                <th>Example URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Biological Assembly File in PDB</td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/download/1hh3.pdb1"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/download/1hh3.pdb1
                  </a>
                </td>
              </tr>
              <tr>
                <td>Biological Assembly File in PDB</td>
                <td>Download</td>
                <td>Compressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/download/1hh3.pdb1.gz"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/download/1hh3.pdb1.gz
                  </a>
                </td>
              </tr>
              <tr>
                <td>Biological Assembly File in PDBx/mmCIF</td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/download/5a9z-assembly1.cif"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/download/5a9z-assembly1.cif
                  </a>
                </td>
              </tr>
              <tr>
                <td>Biological Assembly File in PDBx/mmCIF</td>
                <td>Download</td>
                <td>Compressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/download/5a9z-assembly1.cif.gz"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/download/5a9z-assembly1.cif.gz
                  </a>
                </td>
              </tr>
              <tr>
                <td>PDB</td>
                <td>Download</td>
                <td>Compressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/download/4hhb.pdb.gz"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/download/4hhb.pdb.gz
                  </a>
                </td>
              </tr>
              <tr>
                <td>PDB</td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/download/4hhb.pdb"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/download/4hhb.pdb
                  </a>
                </td>
              </tr>
              <tr>
                <td>PDBx/BinaryCIF</td>
                <td>Download</td>
                <td>Compressed</td>
                <td>
                  <a
                    href="https://models.rcsb.org/4hhb.bcif.gz"
                    target="_blank"
                    rel="noopener"
                  >
                    https://models.rcsb.org/4hhb.bcif.gz
                  </a>
                </td>
              </tr>
              <tr>
                <td>PDBx/BinaryCIF</td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a
                    href="https://models.rcsb.org/4hhb.bcif"
                    target="_blank"
                    rel="noopener"
                  >
                    https://models.rcsb.org/4hhb.bcif
                  </a>
                </td>
              </tr>
              <tr>
                <td>PDBx/mmCIF</td>
                <td>Download</td>
                <td>Compressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/download/4hhb.cif.gz"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/download/4hhb.cif.gz
                  </a>
                </td>
              </tr>
              <tr>
                <td>PDBx/mmCIF</td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/download/4hhb.cif"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/download/4hhb.cif
                  </a>
                </td>
              </tr>
              <tr>
                <td>XML</td>
                <td>Download</td>
                <td>Compressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/download/4hhb.xml.gz"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/download/4hhb.xml.gz
                  </a>
                </td>
              </tr>
              <tr>
                <td>XML</td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/download/4hhb.xml"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/download/4hhb.xml
                  </a>
                </td>
              </tr>
              <tr>
                <td>XML (header only)</td>
                <td>Download</td>
                <td>Compressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/download/4hhb-noatom.xml.gz"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/download/4hhb-noatom.xml.gz
                  </a>
                </td>
              </tr>
              <tr>
                <td>XML (header only)</td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/download/4hhb-noatom.xml"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/download/4hhb-noatom.xml
                  </a>
                </td>
              </tr>
              <tr>
                <td>Biological Assembly File in PDB</td>
                <td>View</td>
                <td>Uncompressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/view/1hh3.pdb1"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/view/1hh3.pdb1
                  </a>
                </td>
              </tr>
              <tr>
                <td>Biological Assembly File in PDBx/mmCIF</td>
                <td>View</td>
                <td>Uncompressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/view/5a9z-assembly1.cif"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/view/5a9z-assembly1.cif
                  </a>
                </td>
              </tr>
              <tr>
                <td>PDB</td>
                <td>View</td>
                <td>Uncompressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/view/4hhb.pdb"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/view/4hhb.pdb
                  </a>
                </td>
              </tr>
              <tr>
                <td>PDB (header only)</td>
                <td>View</td>
                <td>Uncompressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/header/4hhb.pdb"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/header/4hhb.pdb
                  </a>
                </td>
              </tr>
              <tr>
                <td>PDBx/mmCIF</td>
                <td>View</td>
                <td>Uncompressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/view/4hhb.cif"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/view/4hhb.cif
                  </a>
                </td>
              </tr>
              <tr>
                <td>PDBx/mmCIF (header only)</td>
                <td>View</td>
                <td>Uncompressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/header/4hhb.cif"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/header/4hhb.cif
                  </a>
                </td>
              </tr>
              <tr>
                <td>XML (header only)</td>
                <td>View</td>
                <td>Uncompressed</td>
                <td>
                  <a
                    href="https://files.rcsb.org/view/4hhb-noatom.xml"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/view/4hhb-noatom.xml
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a className="content-anchor" id="small-molecule-files"></a>
          <h3>Small molecule files</h3>
          <p>
            Small molecule files, including the ligands/chemical components
            maintained in the Chemical Component Dictionary and the Biologically
            Interesting Molecule Reference Dictionary (BIRD) are available in
            multiple formats.
          </p>
          <table className="table table-bordered" border={1}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Format</th>
                <th>Action</th>
                <th>Example URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BIRD atom representation</td>
                <td>CIF</td>
                <td>Download</td>
                <td>
                  <a
                    href="https://files.rcsb.org/birds/download/PRDCC_000001.cif"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/birds/download/PRDCC_000001.cif
                  </a>
                </td>
              </tr>
              <tr>
                <td>BIRD definition</td>
                <td>CIF</td>
                <td>Download</td>
                <td>
                  <a
                    href="https://files.rcsb.org/birds/download/PRD_000001.cif"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/birds/download/PRD_000001.cif
                  </a>
                </td>
              </tr>
              <tr>
                <td>Definition</td>
                <td>CIF</td>
                <td>Download</td>
                <td>
                  <a
                    href="https://files.rcsb.org/ligands/download/HEM.cif"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/ligands/download/HEM.cif
                  </a>
                </td>
              </tr>
              <tr>
                <td>Ideal coordinates</td>
                <td>MOL2</td>
                <td>Download</td>
                <td>
                  <a
                    href="https://files.rcsb.org/ligands/download/HEM_ideal.mol2"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/ligands/download/HEM_ideal.mol2
                  </a>
                </td>
              </tr>
              <tr>
                <td>Ideal coordinates</td>
                <td>SDF</td>
                <td>Download</td>
                <td>
                  <a
                    href="https://files.rcsb.org/ligands/download/HEM_ideal.sdf"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/ligands/download/HEM_ideal.sdf
                  </a>
                </td>
              </tr>
              <tr>
                <td>Model coordinates</td>
                <td>MOL2</td>
                <td>Download</td>
                <td>
                  <a
                    href="https://files.rcsb.org/ligands/download/HEM_model.mol2"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/ligands/download/HEM_model.mol2
                  </a>
                </td>
              </tr>
              <tr>
                <td>Model coordinates</td>
                <td>SDF</td>
                <td>Download</td>
                <td>
                  <a
                    href="https://files.rcsb.org/ligands/download/HEM_model.sdf"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/ligands/download/HEM_model.sdf
                  </a>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>BIRD atom representation</td>
                <td>CIF</td>
                <td>View</td>
                <td>
                  <a
                    href="https://files.rcsb.org/birds/view/PRDCC_000001.cif"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/birds/view/PRDCC_000001.cif
                  </a>
                </td>
              </tr>
              <tr>
                <td>BIRD definition</td>
                <td>CIF</td>
                <td>View</td>
                <td>
                  <a
                    href="https://files.rcsb.org/birds/view/PRD_000001.cif"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/birds/view/PRD_000001.cif
                  </a>
                </td>
              </tr>
              <tr>
                <td>Chemical Component Instance</td>
                <td>SDF</td>
                <td>View</td>
                <td>
                  <a
                    href="https://models.rcsb.org/v1/4hhb/ligand?auth_asym_id=A&amp;auth_seq_id=142&amp;encoding=sdf"
                    target="_blank"
                    rel="noopener"
                  >
                    https://models.rcsb.org/v1/4hhb/ligand?auth_asym_id=A&amp;auth_seq_id=142&amp;encoding=sdf
                  </a>
                </td>
              </tr>
              <tr>
                <td>Chemical Component Instance</td>
                <td>MOL</td>
                <td>View</td>
                <td>
                  <a
                    href="https://models.rcsb.org/v1/4hhb/ligand?auth_asym_id=A&amp;auth_seq_id=142&amp;encoding=mol"
                    target="_blank"
                    rel="noopener"
                  >
                    https://models.rcsb.org/v1/4hhb/ligand?auth_asym_id=A&amp;auth_seq_id=142&amp;encoding=mol
                  </a>
                </td>
              </tr>
              <tr>
                <td>Chemical Component Instance</td>
                <td>MOL2</td>
                <td>View</td>
                <td>
                  <a
                    href="https://models.rcsb.org/v1/4hhb/ligand?auth_asym_id=A&amp;auth_seq_id=142&amp;encoding=mol2"
                    target="_blank"
                    rel="noopener"
                  >
                    https://models.rcsb.org/v1/4hhb/ligand?auth_asym_id=A&amp;auth_seq_id=142&amp;encoding=mol2
                  </a>
                </td>
              </tr>
              <tr>
                <td>Definition</td>
                <td>CIF</td>
                <td>View</td>
                <td>
                  <a
                    href="https://files.rcsb.org/ligands/view/HEM.cif"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/ligands/view/HEM.cif
                  </a>
                </td>
              </tr>
              <tr>
                <td>Ideal coordinates</td>
                <td>MOL2</td>
                <td>View</td>
                <td>
                  <a
                    href="https://files.rcsb.org/ligands/view/HEM_ideal.mol2"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/ligands/view/HEM_ideal.mol2
                  </a>
                </td>
              </tr>
              <tr>
                <td>Ideal coordinates</td>
                <td>SDF</td>
                <td>View</td>
                <td>
                  <a
                    href="https://files.rcsb.org/ligands/view/HEM_ideal.sdf"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/ligands/view/HEM_ideal.sdf
                  </a>
                </td>
              </tr>
              <tr>
                <td>Model coordinates</td>
                <td>MOL2</td>
                <td>View</td>
                <td>
                  <a
                    href="https://files.rcsb.org/ligands/view/HEM_model.mol2"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/ligands/view/HEM_model.mol2
                  </a>
                </td>
              </tr>
              <tr>
                <td>Model coordinates</td>
                <td>SDF</td>
                <td>View</td>
                <td>
                  <a
                    href="https://files.rcsb.org/ligands/view/HEM_model.sdf"
                    target="_blank"
                    rel="noopener"
                  >
                    https://files.rcsb.org/ligands/view/HEM_model.sdf
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a
            className="content-anchor"
            id="experimental-data-files-and-3dem-maps"
          ></a>
          <h3>Experimental data files and 3DEM maps</h3>
          <p>
            This table includes structure factors, NMR constraints, chemical
            shifts, electron density maps and map coefficient files.
          </p>
          <table className="table table-bordered" border={1}>
            <thead>
              <tr>
                <th>File Format</th>
                <th>Action</th>
                <th>Storage Compression</th>
                <th>Example URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chemical Shifts</td>
                <td>Download</td>
                <td>Compressed</td>
                <td>
                  <a href="https://files.rcsb.org/download/2n2z_cs.str.gz">
                    https://files.rcsb.org/download/2n2z_cs.str.gz
                  </a>
                </td>
              </tr>
              <tr>
                <td>Chemical Shifts</td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a href="https://files.rcsb.org/download/2n2z_cs.str">
                    https://files.rcsb.org/download/2n2z_cs.str
                  </a>
                </td>
              </tr>
              <tr>
                <td>NMR Restraints</td>
                <td>Download</td>
                <td>Compressed</td>
                <td>
                  <a href="https://files.rcsb.org/download/108d.mr.gz">
                    https://files.rcsb.org/download/108d.mr.gz
                  </a>
                </td>
              </tr>
              <tr>
                <td>NMR Restraints</td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a href="https://files.rcsb.org/download/108d.mr">
                    https://files.rcsb.org/download/108d.mr
                  </a>
                </td>
              </tr>
              <tr>
                <td>NMR Restraints v2</td>
                <td>Download</td>
                <td>Compressed</td>
                <td>
                  <a href="https://files.rcsb.org/download/108d_mr.str.gz">
                    https://files.rcsb.org/download/108d_mr.str.gz
                  </a>
                </td>
              </tr>
              <tr>
                <td>NMR Restraints v2</td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a href="https://files.rcsb.org/download/108d_mr.str">
                    https://files.rcsb.org/download/108d_mr.str
                  </a>
                </td>
              </tr>
              <tr>
                <td>Chemical Shifts</td>
                <td>View</td>
                <td>Uncompressed</td>
                <td>
                  <a href="https://files.rcsb.org/view/2n2z_cs.str">
                    https://files.rcsb.org/view/2n2z_cs.str
                  </a>
                </td>
              </tr>
              <tr>
                <td>NMR Restraints</td>
                <td>View</td>
                <td>Uncompressed</td>
                <td>
                  <a href="https://files.rcsb.org/view/108d.mr">
                    https://files.rcsb.org/view/108d.mr
                  </a>
                </td>
              </tr>
              <tr>
                <td>NMR Restraints v2</td>
                <td>View</td>
                <td>Uncompressed</td>
                <td>
                  <a href="https://files.rcsb.org/view/108d_mr.str">
                    https://files.rcsb.org/view/108d_mr.str
                  </a>
                </td>
              </tr>
              <tr>
                <td>Structure Factors</td>
                <td>Download</td>
                <td>Compressed</td>
                <td>
                  <a href="https://files.rcsb.org/download/1btn-sf.cif.gz">
                    https://files.rcsb.org/download/1btn-sf.cif.gz
                  </a>
                </td>
              </tr>
              <tr>
                <td>Structure Factors</td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a href="https://files.rcsb.org/download/1btn-sf.cif">
                    https://files.rcsb.org/download/1btn-sf.cif
                  </a>
                </td>
              </tr>
              <tr>
                <td>Structure Factors</td>
                <td>View</td>
                <td>Uncompressed</td>
                <td>
                  <a href="https://files.rcsb.org/view/1btn-sf.cif">
                    https://files.rcsb.org/view/1btn-sf.cif
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  Electron Density 2Fo-Fc Map (with fixed grid spacing at "high
                  resolution/3") - DSN6 format
                </td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a href="https://edmaps.rcsb.org/maps/6dil_2fofc.dsn6">
                    https://edmaps.rcsb.org/maps/6dil_2fofc.dsn6
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  Electron Density Fo-Fc Map (with variable grid spacing from
                  "high resolution/3" to "high resolution/2") - DSN6 format
                </td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a href="https://edmaps.rcsb.org/maps/6dil_fofc.dsn6">
                    https://edmaps.rcsb.org/maps/6dil_fofc.dsn6
                  </a>
                </td>
              </tr>
              <tr>
                <td>Electron Density Map Coefficients (MTZ format)</td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a href="https://edmaps.rcsb.org/coefficients/6dil.mtz">
                    https://edmaps.rcsb.org/coefficients/6dil.mtz
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  Electron Density 2Fo-Fc &amp; Fo-Fc Map (might be downsampled)
                  - BinaryCIF format
                </td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a href="https://maps.rcsb.org/x-ray/6dil/cell/">
                    https://maps.rcsb.org/x-ray/6dil/cell/
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a className="content-anchor" id="sequence-data"></a>
          <h3>Sequence data</h3>
          <p>
            Sequence data in FASTA format (full deposited sequence as in SEQRES
            records).
          </p>
          <p>
            Please note that the FASTA download service at URL
            <code>
              /pdb/download/downloadFastaFiles.do?structureIdList=4hhb&amp;compressionType=uncompressed
            </code>
            has been discontinued. Users will need to migrate to the new
            endpoints below. Note that the output of the new endpoints are per
            entity (with chain identifiers provided in header) instead of per
            chain.
          </p>
          <table className="table table-bordered" border={1}>
            <tbody>
              <tr>
                <td>FASTA sequences per PDB entry</td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a href="/fasta/entry/4HHB/download">
                    /fasta/entry/4HHB/download
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  FASTA sequence per polymer entity (identified by
                  <code>&lt;pdb_id&gt;_&lt;entity_id&gt;</code>)
                </td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a href="/fasta/entity/4HHB_1/download">
                    /fasta/entity/4HHB_1/download
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  FASTA sequence per polymer entity instance (chain) (identified
                  by <code>&lt;pdb_id&gt;.&lt;asym_id&gt;</code>, please note
                  this is the label_asym_id and not the author chain id)
                </td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a href="/fasta/chain/4HHB.A/download">
                    /fasta/chain/4HHB.A/download
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  Sequences in FASTA format for all entries in the PDB archive
                </td>
                <td>Download</td>
                <td>Compressed</td>
                <td>
                  <a href="https://ftp.wwpdb.org/pub/pdb/derived_data/pdb_seqres.txt.gz">
                    https://ftp.wwpdb.org/pub/pdb/derived_data/pdb_seqres.txt.gz
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a className="content-anchor" id="sequence-clusters-data"></a>
          <h3>Sequence clusters data</h3>
          <p>
            Results of the weekly clustering of protein sequences in the PDB by
            <a
              href="https://github.com/soedinglab/MMseqs2"
              target="_blank"
              rel="noopener"
            >
              MMseqs2
            </a>
            at 30%, 40%, 50%, 70%, 90%, 95%, and 100% sequence identity. Note
            that these files use polymer entity identifiers, instead of chain
            identifiers to avoid redundancy. The files are plain text with one
            cluster per line, sorted from largest cluster to smallest.
          </p>
          <table className="table table-bordered" border={1}>
            <thead>
              <tr>
                <th>File</th>
                <th>Type</th>
                <th>Storage Compression</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Sequence clusters at &lt;identity&gt; % sequence identity
                  clustering
                </td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  https://cdn.rcsb.org/resources/sequence/clusters/clusters-by-entity-&lt;identity&gt;.txt
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a className="content-anchor" id="holdings-data"></a>
          <h3>Holdings data</h3>
          <p>
            PDB id holdings data in json format. For more information, see the
            <a href="https://data.rcsb.org/redoc/index.html">
              data API documentation
            </a>
            .
          </p>
          <table className="table table-bordered" border={1}>
            <thead>
              <tr>
                <th>File</th>
                <th>Type</th>
                <th>Storage Compression</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>All current PDB ids</td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a href="https://data.rcsb.org/rest/v1/holdings/current/entry_ids">
                    https://data.rcsb.org/rest/v1/holdings/current/entry_ids
                  </a>
                </td>
              </tr>
              <tr>
                <td>All unreleased PDB ids</td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a href="https://data.rcsb.org/rest/v1/holdings/unreleased/entry_ids">
                    https://data.rcsb.org/rest/v1/holdings/unreleased/entry_ids
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  All removed PDB ids (obsoleted entries or theoretical models)
                </td>
                <td>Download</td>
                <td>Uncompressed</td>
                <td>
                  <a href="https://data.rcsb.org/rest/v1/holdings/removed/entry_ids">
                    https://data.rcsb.org/rest/v1/holdings/removed/entry_ids
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a
            className="content-anchor"
            id="chemical-component-dictionary-ccd-data"
          ></a>
          <h3>Chemical Component Dictionary (CCD) Data</h3>
          <p>
            A subset of properties is provided for all components from the
            <a href="https://www.wwpdb.org/data/ccd" target="_blank">
              Chemical Component Dictionary (CCD)
            </a>
            which describes chemical properties of all molecules in the PDB
            archive. The atom file (cca.bcif) provides the following CIF
            columns: <code>atom_id</code>, <code>comp_id</code>,
            <code>charge</code>, and <code>pdbx_stereo_config</code>. The bond
            file (ccb.bcif) provides the following CIF columns:
            <code>atom_id_1</code>, <code>atom_id_2</code>, <code>comp_id</code>
            , <code>molstar_protonation_variant</code>,
            <code>pdbx_aromatic_flag</code>, <code>pdbx_stereo_config</code>,
            and <code>value_order</code>.<br />
            <br />
            This data can be used by the
            <a href="https://molstar.org/docs/data-access-tools/model-server/">
              Mol* ModelServer
            </a>
            .
          </p>
          <table className="table table-bordered" border={1}>
            <thead>
              <tr>
                <th>File</th>
                <th>Format</th>
                <th>Action</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chemical Component Atom Data</td>
                <td>BinaryCIF</td>
                <td>Download</td>
                <td>
                  <a href="https://models.rcsb.org/cca.bcif" target="_blank">
                    https://models.rcsb.org/cca.bcif
                  </a>
                </td>
              </tr>
              <tr>
                <td>Chemical Component Bond Data</td>
                <td>BinaryCIF</td>
                <td>Download</td>
                <td>
                  <a href="https://models.rcsb.org/ccb.bcif" target="_blank">
                    https://models.rcsb.org/ccb.bcif
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
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
