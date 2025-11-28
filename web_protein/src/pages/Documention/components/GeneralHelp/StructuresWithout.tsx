export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">General Help</h5>
        <h1>Structures Without Legacy PDB Format Files</h1>
        <div>
          <a className="content-anchor" id="pdb-file-formats"></a>
          <h2>PDB File Formats</h2>
          <p>
            The primary data format for PDB data is the <b>PDBx/mmCIF format</b>
            . See a
            <a href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/beginner%E2%80%99s-guide-to-pdb-structures-and-the-pdbx-mmcif-format">
              guide to the format
            </a>
            and a complete reference of the
            <a href="https://mmcif.wwpdb.org/">mmCIF dictionary</a> for more
            information. The data is also offered in XML format (PDBML)
            following the same mmCIF dictionary. Additionally, in some cases the
            data is offered in the legacy
            <a href="http://www.wwpdb.org/documentation/file-format-content/format33/v3.3.html">
              PDB format
            </a>
            .
          </p>
          <a
            className="content-anchor"
            id="pdb-entries-without-pdb-format-files"
          ></a>
          <h2>PDB entries without PDB-format files</h2>
          <p>
            Several type of PDB entries are not offered in the legacy PDB format
            anymore:
          </p>
          <ol style={{ paddingLeft: '40px' }}>
            <li>Entries containing multiple character chain ids</li>
            <li>Entries containing &gt; 62 chains</li>
            <li>Entries containing &gt; 99999 ATOM coordinates</li>
            <li>
              Entries that have complex beta sheet topology, see
              <a href="https://www.wwpdb.org/news/news?year=2021#60abe1a3301dc46fd700221d">
                more details
              </a>
            </li>
          </ol>
          <div></div>
          <p>
            Note that these entries can be found using
            <a href="/search/advanced" target="_blank">
              Advanced Search
            </a>
            (under Deposition &gt; Compatible with PDB Format &gt; equals &gt;
            N)
          </p>
          <a className="content-anchor" id="pdb-bundles"></a>
          <h2>PDB bundles</h2>
          <p>
            TAR files containing a collection of best effort/minimal files in
            the PDB format are available for some of the entries that do not
            have legacy PDB-format files (exceptions are: entries containing
            &gt; 99999 ATOM coordinates in a single chain and entries that have
            complex beta sheet topology). The entire structure is divided into
            several minimal files. The TAR files are available for download from
            each Structure Summary page and in a separate directory in the PDB
            FTP archive (
            <a href="https://files.wwpdb.org/pub/pdb/compatible/pdb_bundle/">
              https://files.wwpdb.org/pub/pdb/compatible/pdb_bundle/
            </a>
            ) grouped by the middle two characters of the 4-character PDB ID.
          </p>
          <p>
            Best effort/minimal PDB format files contain only authorship,
            citation details and coordinate data under HEADER, AUTHOR, JRNL,
            CRYST1, SCALEn, ATOM, HETATM records.
            <br />
            The following PDB records are not included in the best
            effort/minimal files: OBSLTE, TITLE, CAVEAT, COMPND, SOURCE, KEYWDS,
            EXPDTA, REVDAT, SPRSDE, REMARKS, DBREF, SEQADV, SEQRES, MODRES, HET,
            HETNAM, HETSYN, FORMUL, HELIX, SHEET, SSBOND, LINK, CISPEP, SITE,
            ORIGXn, MTRIXn, CONECT.
          </p>
          <p>Example: Truncated best effort/minimal file for the entry 4u50</p>
          <p></p>
          <pre
            style={{
              backgroundColor: '#f5f5f5',
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '9.5px',
            }}
          >
            <br />
            HEADER RIBOSOME 2014-07-24 XXXX
            <br />
            AUTHOR N.GARREAU DE LOUBRESSE, I.PROKHOROVA, G.YUSUPOVA, M.YUSUPOV
            <br />
            JRNL AUTH N.Garreau de Loubresse, I.Prokhorova, W.Holtkamp,
            <br />
            JRNL AUTH 2 M.V.Rodnina, G.Yusupova, M.Yusupov
            <br />
            JRNL TITL Structural basis for the inhibition of the eukaryotic
            <br />
            JRNL TITL 2 ribosome.
            <br />
            JRNL REF Nature V. 513 517 2014
            <br />
            JRNL REFN NATUAS UK 1476-4687
            <br />
            JRNL PMID 25209664
            <br />
            JRNL DOI 10.1038/nature13737
            <br />
            CRYST1 434.390 285.580 303.060 90.00 98.99 90.00 P 1 21 1 4<br />
            SCALE1 0.002302 0.000000 0.000364 0.00000
            <br />
            SCALE2 0.000000 0.003502 0.000000 0.00000
            <br />
            SCALE3 0.000000 0.000000 0.003341 0.00000
            <br />
            ATOM 1 P U A 1 -88.608 31.952 64.746 1.00 81.64 P<br />
            ANISOU 1 P U A 1 5964 13260 11795 1046 -383 -1793 P<br />
            ATOM 2 OP1 U A 1 -88.681 32.341 63.314 1.00 82.66 O<br />
            ANISOU 2 OP1 U A 1 6111 13412 11886 1075 -507 -1778 O<br />
            ...
            <br />
          </pre>
          <p></p>
          <p>
            The TAR file also contains an index file with the mapping between
            the chains present in the large entry and the chains present in the
            minimal PDB format files.
          </p>
          <p>Example: Truncated index file for the entry 4u50</p>
          <p></p>
          <pre
            style={{
              backgroundColor: '#f5f5f5',
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '9.5px',
            }}
          >
            <br />
            New chain ID Original chain ID
            <br />
            <br />
            4u50-pdb-bundle1.pdb:
            <br /> A 2<br /> B S0
            <br /> C S1
            <br /> D S2
            <br />
            ...
            <br />
            <br />
          </pre>
          <p></p>
          <p>
            An index of all structure entries that do not have a standard PDB
            format file is updated regularly on the PDB FTP site at
            <a
              href="https://files.wwpdb.org/pub/pdb/compatible/pdb_bundle/pdb_bundle_index.txt"
              target="_blank"
            >
              https://files.wwpdb.org/pub/pdb/compatible/pdb_bundle/pdb_bundle_index.txt
            </a>
            . This list will continue to grow as new large structures are
            deposited and released.
          </p>
          <p>
            Historically, large files containing &gt;62 chains and/or 99999 ATOM
            lines were "split" across multiple PDB format files. These files
            were combined into single entries at the end of 2014 (
            <a
              href="http://www.wwpdb.org/news/news?year=2014#10-December-2014"
              target="_blank"
            >
              wwPDB Announcement
            </a>
            ). An index file mapping large structures to corresponding obsoleted
            split entries is available at
            <a
              href=" https://files.wwpdb.org/pub/pdb/compatible/pdb_bundle/large_split_mapping.tsv"
              target="_blank"
            >
              https://files.wwpdb.org/pub/pdb/compatible/pdb_bundle/large_split_mapping.tsv
            </a>
            . This file does not list large structures that were never deposited
            as split entries.
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
        <div>Last updated: 1/18/2023</div>
      </div>
    </div>
  );
};
