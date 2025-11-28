export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Sequence Viewers</h5>
        <h1>Protein Sequence Alignment View</h1>
        <div>
          <p>
            The Protein Sequence Alignment View provides graphical summaries of
            the aligned regions when a sequence search is performed. Aligned
            regions are represented using color code blocks that display the
            sequence identity through a gradient color code.
          </p>
          <a className="content-anchor" id="alignment-conventions"></a>
          <h4>Alignment Conventions</h4>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              By default the full <b>Query</b> sequence is displayed excluding
              potential gaps. <b>Query</b> sequence is used as a reference to
              display the aligned regions. The alignment reference can be
              changed using the dropdown menu (See
              <a href="#alignmentReference">Alignment Reference</a>)
            </li>
            <li>
              Aligned regions are displayed using blocks. When zoomed amino acid
              mismatches are displayed within red circles
            </li>
            <li>
              Blocks color correlates with the alignment sequence identity, from
              light blue (100%) to dark grey (25%) (See
              <a href="#sequenceIdentity">Sequence Identity</a>)
            </li>
            <li>
              White circles over start (or end) of blocks indicates that the
              aligned sequence continues in that direction but it is not part of
              the alignment
            </li>
            <li>
              White circles in the middle of blocks indicates a deletion in the
              aligned sequence
            </li>
            <li>
              Dashed line between blocks indicates that the aligned sequence is
              connected
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="responsive-and-interactive-properties"
          ></a>
          <h4>Responsive and Interactive Properties</h4>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Zoom using the mouse scroll (wheel) or the mousepad/touchpad to
              show the sequence amino acids an mismatches
            </li>
            <li>
              To zoom using the mousepad/touchpad hover over the Protein Feature
              View, and move/drag 2 fingers in an up and down motion
            </li>
            <li>
              Once zoomed, left click and drag to move the panel left or right
              (using either a mouse or touchpad)
            </li>
          </ul>
          <div></div>
          <a className="content-anchor" id="sequence-identity"></a>
          <h4>
            <span id="sequenceIdentity">Sequence Identity</span>
          </h4>
          <p>
            Block color indicates the full alignment sequence identity using a
            gradient color from <b>Blue</b> to <b>Dark Grey</b>
            <br />
            representing alignment identity from 100% to 25%.
          </p>
          <p>
            <img
              style={{ width: '100%' }}
              src="https://cdn.rcsb.org/rcsb-pdb/help/rcsb-saguaro-help/seq_id.svg"
              alt=""
            />
          </p>
          <a className="content-anchor" id="alignment-reference"></a>
          <h4>
            <span id="alignmentReference">Alignment Reference</span>
          </h4>
          <p>
            The <b>Alignment Reference</b> drop down menu selects the reference
            that is used to display the aligned regions. By default the
            <b>Query</b> option is selected to use the <b>Query</b> sequence as
            reference. This means that the full <b>Query</b> sequence is
            displayed excluding any potential gap that could be found in the
            different alignments. The <b>Query</b> sequence is displayed in the
            first track of the Protein Sequence Alignment View. The bottom track
            displays the aligned regions of the <b>Entity</b> sequence including
            <b>Entity</b> sequence gaps (or <b>Query</b> sequence insertions) as
            dashed lines or <b>Entity</b> sequence deletions as white circles in
            the middle of blocks.
            <br />
            <br />
          </p>
          <p>
            <img
              style={{ width: '100%' }}
              src="https://cdn.rcsb.org/rcsb-pdb/help/rcsb-saguaro-help/query_ref.svg"
              alt=""
            />
          </p>
          <p>
            The <b>Alignment Reference</b> can be changed to <b>Subject</b>. In
            this case <b>Entity</b> sequences will be used as references. The
            first track of the Protein Sequence Alignment View will display the
            particular <b>Entity</b> sequence excluding any potential gap
            resulting from the alignment. The <b>Query</b> sequence is displayed
            in the second track including <b>Query</b> sequence gaps (or
            <b>Entity</b> sequence insertions) as dashed lines or <b>Query</b>
            sequence deletions as white circles in the middle of blocks.
            <br />
            <br />
          </p>
          <p>
            <img
              style={{ width: '100%' }}
              src="https://cdn.rcsb.org/rcsb-pdb/help/rcsb-saguaro-help/subject_ref.svg"
              alt=""
            />
          </p>
          <p>
            The third <b>Alignment Reference</b> option is <b>Pairwise</b>. When
            <b>Pairwise</b> is selected the Protein Sequence Alignment View will
            focus on the whole aligned section between <b>Query</b> and
            <b>Entity</b> sequences displaying all details of the alignment
            including gaps in both sequences. <br />
            <br />
          </p>
          <p>
            <img
              style={{ width: '100%' }}
              src="https://cdn.rcsb.org/rcsb-pdb/help/rcsb-saguaro-help/pwa_ref.svg"
              alt=""
            />
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
        <div>Last updated: 2/3/2021</div>
      </div>
    </div>
  );
};
