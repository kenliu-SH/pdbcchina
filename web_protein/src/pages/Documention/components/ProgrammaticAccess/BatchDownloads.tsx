export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Programmatic Access</h5>
        <h1>Batch Downloads with Shell Script</h1>
        <div>
          <p>
            Multiple files can be downloaded in a Unix-like Operating System
            (e.g. MacOS or Linux) by using
            <a
              href="https://en.wikipedia.org/wiki/Wget"
              target="_blank"
              rel="noopener"
            >
              wget
            </a>
            or
            <a
              href="https://en.wikipedia.org/wiki/CURL"
              target="_blank"
              rel="noopener"
            >
              curl
            </a>
            tools.
          </p>
          <p>
            To facilitate this, we provide a script that can download multiple
            PDB archive files by providing a file containing a comma-separated
            list of PDB ids. It requires that the
            <a
              href="https://en.wikipedia.org/wiki/CURL"
              target="_blank"
              rel="noopener"
            >
              curl
            </a>
            tool is installed in your computer.
          </p>
          <p>
            Such a list of PDB ids can be obtained by selecting "PDB IDs" in the
            "Tabular Report" drop-down available in any search results page. The
            "Download IDs" button will download a file containing a
            comma-separated list of PDB ids. Lists of PDB ids matching certain
            criteria can also be obtained programmatically with our
            <a href="https://search.rcsb.org">Search API</a>.
          </p>
          <p>
            Please also see the
            <a href="/docs/programmatic-access/file-download-services">
              file download services page
            </a>
            for full PDB archive downloads and periodic synchronization of data.
          </p>
          <p>
            <a
              type="button"
              className="btn btn-primary btn-md left"
              role="button"
              href="/scripts/batch_download.sh"
            >
              Obtain the batch-download script
            </a>
          </p>
          <a className="content-anchor" id="usage"></a>
          <h2>Usage</h2>
          <p>The ouput directory must exist prior to beginning the download.</p>
          <p>
            Once downloaded, make sure the script has execution permission:
            <code>chmod +x batch_download.sh</code>
          </p>
          <p>
            Obtain full help on the batch download shell script at the command
            line with: <code>./batch_download.sh -h</code>
          </p>
          <p>
            <a href="/docs/general-help/structures-without-legacy-pdb-format-files">
              Structures Without Legacy PDB Format Files
            </a>
            will not be included when the -p option is used.
          </p>
          <p></p>
          <div className="well">
            <p>
              <b>Some examples</b>
            </p>
            <p>
              In the examples below it is assumed that the file
              <code>list_file.txt</code> is a plain text file that contains a
              comma separated list of PDB ids.
            </p>
            <ul className="list-group" style={{ paddingLeft: '40px' }}>
              <li className="list-group-item">
                Download pdb.gz files:
                <br />
                <code>./batch_download.sh -f list_file.txt -p</code>
                <br />
                <a href="/docs/general-help/structures-without-legacy-pdb-format-files">
                  Structures Without Legacy PDB Format Files
                </a>
                will not be downloaded
                <br />
              </li>
              <li className="list-group-item">
                Download cif.gz files:
                <br />
                <code>./batch_download.sh -f list_file.txt -c</code>
                <br />
              </li>
              <li className="list-group-item">
                Download pdb.gz, cif.gz and sf.cif.gz files:
                <br />
                <code>./batch_download.sh -f list_file.txt -c -p -s</code>
                <br />
              </li>
            </ul>
          </div>
          <p></p>
        </div>
      </div>
      <br />
      <hr />
      <div className="item-info">
        <div>
          Please report any encountered broken links to
          <a href="mailto:info@rcsb.org">info@rcsb.org</a>
        </div>
        <div>Last updated: 12/1/2022</div>
      </div>
    </div>
  );
};
