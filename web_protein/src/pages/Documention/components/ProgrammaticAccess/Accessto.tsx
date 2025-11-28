export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Programmatic Access</h5>
        <h1>Access to Legacy Theoretical Models</h1>
        <div>
          <p>
            As previously
            <a className="static" href="/pages/news/news_2002#models_removal2">
              announced
            </a>
            , the PDB separated theoretical model coordinate files from the main
            archive beginning July 1, 2002. After that date, the main archive
            has consisted of structures determined using experimental methods
            only. Theoretical models are only available for download from the
            <a
              className="static"
              href="//ftp.wwpdb.org/pub/pdb/data/structures/models"
              target="_blank"
              rel="noopener"
            >
              PDB FTP
            </a>
            site as follows:
            <br />
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              All theoretical models (current and obsolete) are kept in a
              separate location in the FTP archive
              (pub/pdb/data/structures/models/current,
              pub/pdb/data/structures/models/obsolete)
            </li>
            <li>
              Theoretical models have been removed from the PDB Contents Growth
              and PDB Holdings
              {/* <a
                className="static"
                href="/stats"
                target="_blank"
                rel="noopener"
              >
                statistics
              </a> */}
              statistics
              {/* 暂时屏蔽跳转逻辑 */}
              .<br />
            </li>
          </ul>
          <div></div>
          <p>
            As of October 15, 2006, PDB depositions have been restricted to
            atomic coordinates that are substantially determined by experimental
            measurements on specimens containing biological macromolecules.
            Thus, theoretical model depositions (such as models determined
            purely in silico using, for example, homology or ab initio methods)
            will no longer be accepted. For more information, please see the
            <a
              href="http://www.wwpdb.org/news/news?year=2006#5764490799cccf749a90cd7b"
              className="static"
              target="_blank"
              rel="noopener"
            >
              wwPDB announcement
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
        <div>Last updated: 2/6/2021</div>
      </div>
    </div>
  );
};
