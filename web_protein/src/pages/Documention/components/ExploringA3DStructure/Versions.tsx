export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Exploring a 3D Structure</h5>
        <h1>Versions</h1>
        <div>
          <div>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div>
            ○ <a href="#what-are-versions">What are Versions?</a>
          </div>
          <div>
            ○ <a href="#why-have-versions">Why have Versions?</a>
          </div>
          <div>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div>
            ○ <a href="#the-interface">The Interface</a>
          </div>
          <div>
            ○
            <a href="#learning-about-the-structure">
              Learning about the Structure
            </a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <a className="content-anchor" id="what-are-versions"></a>
          <h3>What are Versions?</h3>
          <p>
            The PDB archives experimental data and coordinates of all polymeric
            and small molecules included in the structure. The structures
            represent a specific chemical and structural state of the biological
            molecule(s) included in the experiment. The structural coordinates
            and related chemical information deposited by the authors are the
            primary data, while metadata such as the protein name, who solved
            the structure, experimental details, literature information, etc.
            are secondary data. <br />
            <br />
            The first release of a PDB entry with a specific PDB identifier is
            called version 1 of the structure. Any set of changes to the
            metadata is considered a minor revision and the updated version of
            the file is assigned a number with an increment of 0.1 to the last
            version of the entry. Any change that impacts the chemistry and or
            coordinates of all or parts of the structure is considered a major
            revision and the version number is incremented by +1. Learn more
            about
            <a
              href="https://www.wwpdb.org/ftp/pdb-versioned-ftp-site"
              target="_blank"
            >
              versions of PDB entries
            </a>
            .
          </p>
          <a className="content-anchor" id="why-have-versions"></a>
          <h3>Why have Versions?</h3>
          <p>
            PDB entries (experimental data, coordinates, and metadata) are
            downloaded by many data resources and research facilities for
            purposes of analysis, visualization, and more. PDB ID and links to
            PDB the entries are listed in the literature, educational materials,
            and other data resources. Changing the PDB ID every time any change
            or correction is made to the PDB entry would be confusing for users.
            For that reason, a corrected entry is instead updated with the same
            PDB identifier and a new version number. <br />
            <br />
            In order to inform all users that changes have been made to an entry
            since it was last released, the updated entry with a new version
            number is re-released during the next weekly update. This alerts
            automated scripts and pipelines that download entry files from the
            PDB to save the updated version of the file for use. The older
            version of the entry is also made available for download, both for
            reference and for use in education, etc. The numbered versioning
            allows users to track which changes were included in the latest
            version and why those changes were made. This knowledge can help
            users make informed decisions about use of the entry in research and
            education.
          </p>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <p>
            The Structure Summary page provides a short summary of the versions
            of a PDB entry and the reasons for the changes. On the Versions page
            the complete history is recorded with options to download all
            versions of the entry that follow Major revisions.
          </p>
          <a className="content-anchor" id="the-interface"></a>
          <h3>The Interface</h3>
          <p>
            The version history is presented in a tabular format as shown in
            Figure 1. It includes the version number, versioning date, type and
            reason for re-releasing (versioning) the entry, changes made and the
            mmCIF categories affected by the changes. <br />
            <br />
            The latest version of each entry file is available for download from
            the Structure Summary and related pages. Older versions of the files
            can be downloaded from the table on the Versions Tab.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/6182732a04fb9835c6ae1899/ssp-versions-fig1.png"
                    data-toggle="lightbox"
                    data-title="Figure 1. Tabular representation of the version history of the PDB entry 6m17 (as of October 2021)."
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/6182732a04fb9835c6ae1899/ssp-versions-fig1.png"
                      alt="Figure 1. Tabular representation of the version history of the PDB entry 6m17 (as of October 2021)."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 1. Tabular representation of the version history of the
                  PDB entry 6m17 (as of October 2021).
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a className="content-anchor" id="learning-about-the-structure"></a>
          <h3>Learning about the Structure</h3>
          <p>
            The following things can be learned about the PDB ID 6m17 structure
            from the versions history (see Figure 1):
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              In versions 1.1 through 1.5 of the structure, minor changes were
              made in specifying the biological assembly, database references,
              source of protein, etc. These changes do not impact the chemical
              and structural information of any part of the structure.
            </li>
            <li>
              Version 2.0 involved changes to the coordinates of the structure.
              These changes were related to the carbohydrate remediation of the
              archive. Since the proteins in this entry are glycosylated,
              representation of sugars in the entry was updated to match the
              current standards.
            </li>
            <li>
              Version 3.0 of the entry was released with an author-provided
              coordinate replacement to improve and correct the structure.
              Following this, the protein name(s) were updated in version 3.1
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
