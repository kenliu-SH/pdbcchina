export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">General Help</h5>
        <h1>Assessing the Quality of 3D Structures</h1>
        <div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#introduction">Introduction</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#what-are-biomolecular-structures-used-for-">
              What are biomolecular structures used for?
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#why-is-it-important-to-learn-about-biomolecular-structure-quality">
              Why is it important to learn about biomolecular structure quality?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#documentation">Documentation</a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#what-biomolecular-structure-quality-measures-are-available">
              What biomolecular structure quality measures are available?
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#agreement-with-structure-determination-data">
              Agreement with Structure Determination Data
            </a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □
            <a href="#x-ray-crystallography-structures">
              X-ray Crystallography Structures
            </a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □
            <a href="#nuclear-magnetic-resonance-nmr-structures">
              Nuclear Magnetic Resonance (NMR) Structures
            </a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □
            <a href="#3d-electron-microscopy-3dem-structures">
              3D Electron Microscopy (3DEM) Structures
            </a>
          </div>
          <div style={{ paddingLeft: '80px' }}>
            □
            <a href="#computed-structure-models-available-from-rcsborg">
              Computed Structure Models available from RCSB.org
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#agreement-with-known-stereochemistry">
              Agreement with known Stereochemistry
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#accessing-and-interpreting-biomolecular-structure-quality-measures">
              Accessing and interpreting biomolecular structure quality measures
            </a>
          </div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#how-to-use-biomolecular-structure-quality-measures">
              How to use biomolecular structure quality measures?
            </a>
          </div>
          <div style={{ paddingLeft: '20px' }}>
            ● <a href="#references">References</a>
          </div>
          <a className="content-anchor" id="introduction"></a>
          <h2>Introduction</h2>
          <p>
            Both experimentally determined (PDB) structures and computed
            structure models (CSMs) are available from RCSB.org. While high
            quality experimentally-determined structures are more reliable than
            computed structure models, both experimental structures and CSMs are
            created based on assumptions, have limitations, and are imperfect.
            To make the best use of any model it is important to be aware of its
            quality. Available quality assessment measures are discussed herein,
            together with how to interpret and use these measures for
            identifying suitable models to meet specific visualization and
            analysis needs.
          </p>
          <a
            className="content-anchor"
            id="what-are-biomolecular-structures-used-for-"
          ></a>
          <h3>What are biomolecular structures used for?</h3>
          <p>
            The 3D structures available from RCSB.org are used to visualize and
            analyze the shapes of these molecules to provide:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              insights into intra- and inter-molecular interactions, function,
              and evolution
            </li>
            <li>
              a foundation for developing hypotheses to explain observations and
              data
            </li>
            <li>
              a visual framework for designing new properties and functions by
              building on an understanding of structure-function relationships
              (e.g., understanding diseased states and designing new therapeutic
              approaches).
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="why-is-it-important-to-learn-about-biomolecular-structure-quality"
          ></a>
          <h3>
            Why is it important to learn about biomolecular structure quality?
          </h3>
          <p>
            The quality assessment of a structure should be factored into any
            visualization and/or analysis. Before embarking on detailed
            analyses, predictions, and/or molecular design work, it is important
            to know which parts of the 3D structure are determined with a high
            level of confidence and which parts should not be relied upon. There
            are various possible reasons why all or part of a 3D model might
            have limited reliability.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>Limitations of experimental structures may include</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                mismatches between the model and the experimental data due to
                errors made in construction of the model
              </li>
              <li>
                lack of experimental data in specific regions of the model due
                to disorder or movement in those regions
              </li>
              <li>
                distortions in atomic geometry, e.g., deviations in bond
                lengths, bond angles, or dihedral angles or clashes between
                atoms due to errors in model building and/or refinement
              </li>
            </ul>
            <li>Limitations of CSMs may include</li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                regions of low confidence in the model due to limitations of the
                data that support predictions in that part of the molecule
              </li>
              <li>
                regions where there is a conflict between the CSM and one or
                more experimental structures archived in the PDB
              </li>
            </ul>
          </ul>
          <div></div>
          <p>
            Whenever an experimental structure of a molecule of interest is
            available, it should be used for visualization and analysis. It is
            also recommended that the accuracy of all 3D models is reviewed,
            both at the level of the overall structure and especially for the
            parts that are relevant to the specific structural and/or functional
            detail(s) being studied.
          </p>
          <a className="content-anchor" id="documentation"></a>
          <h2>Documentation</h2>
          <a
            className="content-anchor"
            id="what-biomolecular-structure-quality-measures-are-available"
          ></a>
          <h3>What biomolecular structure quality measures are available?</h3>
          <p>
            All experimental structures available from RCSB.org are validated
            based on recommendations from the expert Validation Task Forces
            (VTF) for
            <a href="https://www.wwpdb.org/task/xray" target="_blank">
              X-ray
            </a>
            (
            <a
              href="http://www.cell.com/structure/abstract/S0969-2126%2811%2900285-1"
              target="_blank"
            >
              Read et al., 2011
            </a>
            ),
            <a href="https://www.wwpdb.org/task/nmr" target="_blank">
              NMR
            </a>
            (
            <a
              href="http://dx.doi.org/10.1016/j.str.2013.07.021"
              target="_blank"
            >
              Montellione et al., 2013
            </a>
            ), and
            <a href="https://www.wwpdb.org/task/em" target="_blank">
              EM
            </a>
            (
            <a
              href="http://dx.doi.org/10.1016/j.str.2011.12.014"
              target="_blank"
            >
              Hendersen et al., 2012
            </a>
            ). <br />
            <br />
            CSMs available from RCSB.org are presented with a commonly used
            model confidence measure - called the predicted Local Distance
            Difference Test (pLDDT) - to indicate how well the predicted
            structure is supported by sequence and reference structure data.
            Learn
            <a
              href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/computed-structure-models#generating-computed-structure-models"
              target="_blank"
            >
              more about CSMs and pLDDT scores
            </a>
            . <br />
            <br />
            Quality assessment measures for all 3D structures may be broadly
            grouped into two categories:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>agreement with structure determination data</li>
            <li>agreement with known stereochemistry</li>
          </ul>
          <div></div>
          <p>
            While experimental structures are determined using data collected
            during X-ray crystallography, NMR, or 3DEM experiments, CSMs are
            computed based on sequence data and knowledge of protein structures.
            Specific measures in each of these categories that can be examined
            to assess structure quality are discussed here.
          </p>
          <a
            className="content-anchor"
            id="agreement-with-structure-determination-data"
          ></a>
          <h4>Agreement with Structure Determination Data</h4>
          <a
            className="content-anchor"
            id="x-ray-crystallography-structures"
          ></a>
          <h5>X-ray Crystallography Structures</h5>
          <p>
            The vast majority of experimental structures (~87% of the PDB
            archive as of August 2022) were determined using X-ray
            crystallography. For all structures deposited since 2008 (and a
            majority of structures deposited before that), the experimental data
            used for structure determination (structure factor files) are
            available in the archive for download and can be used for structure
            quality assessment. Some of the key measures commonly used to assess
            the quality of structures determined by this method include
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Resolution</b> - This is a measure of overall structure quality
              and indicates how well two adjacent atoms in the structure can be
              distinguished. Lower values represent better resolution, e.g., a
              1.8 Å structure has a better resolution than a 3 Å structure. This
              measure does not highlight regions of local disorder or limited
              structure quality. Learn
              <a
                href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/resolution"
                target="_blank"
              >
                more about structure resolution
              </a>
              .
            </li>
            <li>
              <b>R-factor</b> - This is another measure of overall structure
              quality that describes the agreement between the experimental
              diffraction data and simulated experimental data calculated based
              on the 3D model of the biomolecule. Perfect agreement between the
              two (a theoretical scenario, never true in practice) would yield a
              zero R-factor, so lower numbers (e.g., 0.2 or 20%) indicate better
              agreement. To avoid over-interpretation of the experimental data
              in model building, an unbiased R-factor called R-free was
              introduced (
              <a href="https://doi.org/10.1038/355472a0" target="_blank">
                Brunger 1992
              </a>
              ) to measure how well the 3D model agrees with a “test set” of the
              experimental data that was not used during structure
              determination. Commonly the R-free value is just a little (~0.05,
              or ~5%) higher than the R-factor. So when the R-factor is 0.2, the
              R-free is likely to be 0.25. A large difference between R-factor
              and R-free may indicate errors in the model. Learn
              <a
                href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/r-value-and-r-free"
                target="_blank"
              >
                more about R-value and R-free
              </a>
              .
            </li>
            <li>
              <b>Real Space R (RSR) value</b> - This is a measure of how well
              each residue in the 3D atomic model matches the experimental data
              locally in real space (
              <a
                href="https://doi.org/10.1107/S0108767390010224"
                target="_blank"
              >
                Jones et al., 1991
              </a>
              ). A lower value indicates better local fitting. A related measure
              called the <b>RSR Z-score (or RSRZ)</b> (
              <a
                href="https://doi.org/10.1107/S0907444904013253"
                target="_blank"
              >
                Kleywegt et al., 2004
              </a>
              ) is included in the X-ray validation reports. Learn
              <a
                href="https://www.wwpdb.org/validation/2017/XrayValidationReportHelp"
                target="_blank"
              >
                more about X-ray validation reports
              </a>
              .
            </li>
          </ul>
          <div></div>
          <p>
            Another measure, <b>Real-Space-Correlation-Coefficient (RSCC)</b>,
            reflects agreement between 3D atomic coordinates and experimental
            electron density of over 100 million individual amino acid residues
            in PDB structures (
            <a href="https://doi.org/10.1016/j.str.2022.08.004" target="_blank">
              Shao et al., 2022
            </a>
            ). Higher values indicate better agreement and lower values worse
            agreement. RSCC distributions for each type of standard amino acid
            were analyzed as a function of resolution limit and ranked from
            lowest to highest values, indicating worse to better experimental
            data support for the atomic coordinates of each residue. Atomic
            coordinates of poorly-resolved residues with RSCC in the lowest 1%
            should not be trusted, while the residues with RSCC between the
            lowest 1% and 5% should be considered with caution. RSCC-based
            outlier identification is statistically sound and cross-examined,
            and therefore is the preferred method to review local structural
            confidence in terms of experiment support.
          </p>
          <a
            className="content-anchor"
            id="nuclear-magnetic-resonance-nmr-structures"
          ></a>
          <h5>Nuclear Magnetic Resonance (NMR) Structures</h5>
          <p>
            NMR structures represent ~7% of the total experimental structures
            archived in the PDB (as of August 2022). For NMR structures in the
            PDB archive, experimental data such as chemical shifts (available
            since 2010) and restraints (available since 2008), are available for
            download separately and/or as a single file either in NMR-STAR or in
            NMR exchange format (NEF). Learn
            <a href="https://github.com/NMRExchangeFormat/NEF/" target="_blank">
              more about the NEF forma
            </a>
            t. Quality measures assessing agreement of NMR structures with
            experimental data focus on
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Chemical Shift Validation</b> - Chemical shifts are resonant
              frequencies of atomic nuclei in a magnetic field relative to a
              standard and are dependent upon the chemical environment of the
              nucleus. Chemical shift analysis helps the referencing of specific
              nuclei, e.g., Cα, Cβ, C' and N, in the structure and in assessment
              of resonance assignment completeness. Any statistically unusual
              chemical shifts should be carefully assessed to determine if they
              represent truly strained conformations in the molecule or
              resonance assignment errors.
            </li>
            <li>
              <b>Random Coil Index (RCI)</b> is a measure calculated for each
              protein residue based on its measured chemical shifts and the
              primary sequence of the protein chain (
              <a href="https://doi.org/10.1021/ja054842f" target="_blank">
                Berjanskii and Wishart, 2005
              </a>
              ). Higher values indicate higher probability that the given
              residue is “random coil-like” or disordered. Learn
              <a
                href="https://www.wwpdb.org/validation/2017/NMRValidationReportHelp#chemical_shifts"
                target="_blank"
              >
                more about NMR Chemical Shifts validation
              </a>
              .
            </li>
            <li>
              <b>Restraints Violations</b> are computed for all conformationally
              restricting restraints and validated against each model in the NMR
              ensemble. Geometric and conformational restraints derived from NMR
              data are critical for structure determination. Distance restraints
              such as <b>NOEs</b>, <b>hydrogen bond restraints</b>,
              <b>disulfide bond restraints</b>, <b>conformational restraints</b>
              derived from <b>chemical shifts</b> and<b> J-couplings</b>, and
              <b>dihedral angle restraints</b> are examined. If the measured
              distance in a model is significantly different from a restraint,
              the absolute difference between the two is reported as the
              violation value. Learn
              <a
                href="https://www.wwpdb.org/validation/2017/NMRValidationReportHelp#restraints_analysis"
                target="_blank"
              >
                more about NMR validation reports
              </a>
              .
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="3d-electron-microscopy-3dem-structures"
          ></a>
          <h5>3D Electron Microscopy (3DEM) Structures</h5>
          <p>
            Structures determined using 3DEM represent only ~6% of experimental
            structures in the PDB (as of August 2022). However, 3DEM is rapidly
            gaining popularity for being able to study shapes and interactions
            of molecules within very large complexes and assemblies. The primary
            experimental data (EM density maps) are archived at
            <a href="https://www.ebi.ac.uk/emdb/" target="_blank">
              EMDB
            </a>
            and also made available from the
            <a href="https://www.emdataresource.org/index.html" target="_blank">
              EMDataResource
            </a>
            . Not all EM maps have had models built into them, and some models
            may represent only portions of an EM map. Currently, validation
            reports are available for the
            <a
              href="https://www.wwpdb.org/validation/2017/EMValidationReportHelp"
              target="_blank"
            >
              EM model
            </a>
            ,
            <a
              href="https://www.wwpdb.org/validation/2017/EMMapValidationReportHelp"
              target="_blank"
            >
              EM map only
            </a>
            , and
            <a
              href="https://www.wwpdb.org/validation/2017/EMTomogramValidationReportHelp"
              target="_blank"
            >
              EM tomogram
            </a>
            .The quality of the EM models may be assessed using the following
            measures:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Resolution</b>: A
              <b>
                <i>Fourier-Shell Correlation (FSC)</i>
              </b>
              method is used to estimate the resolution for single particle and
              subtomogram averaged structures (
              <a
                href="https://doi.org/10.1017/s0033583500003644"
                target="_blank"
              >
                van Heel et al., 2000
              </a>
              ).
            </li>
            <li>
              <b>Map-Model Fit</b>: The following measures are included in EM
              validation reports to assess the match between the EM map and
              model coordinates:
            </li>
            <ul style={{ paddingLeft: '40px' }}>
              <li>
                <b>Visual overlays</b> of EM maps and associated 3D models can
                be used to identify regions of mismatch.
              </li>
              <li>
                <b>Atom inclusion</b> is a measure of the fraction of atoms in
                the model that are inside the EM volume - both overall and
                per-residue atom inclusion fractions are reported in validation
                reports. For a given contour level, atom inclusion graphs
                display the fraction of backbone atoms and all atoms are inside
                the volume defined by the EM maps.
              </li>
              <li>
                <b>Q-score</b>: This score uses a real-space correlation
                approach to assess how well atoms in the structure can be
                resolved. Q-scores (
                <a
                  href="https://doi.org/10.1038/s41592-020-0731-1"
                  target="_blank"
                >
                  Pintilie et al., 2022
                </a>
                ) can be calculated for protein and nucleic acid atoms, waters,
                ions etc. using models fitted to or derived from cryo-EM maps.
                Average Q-scores over several atoms may be computed for larger
                features, e.g., amino acid residues and nucleotides or the
                complete model. Learn more about
                <a
                  href="/news/feature/62de9e5235ec5bb4ddb19a43"
                  target="_blank"
                >
                  inclusion of Q-scores in EM validation
                </a>
                .
              </li>
            </ul>
          </ul>
          <div></div>
          <p>
            Learn
            <a
              href="https://www.wwpdb.org/validation/2017/EMValidationReportHelp"
              target="_blank"
            >
              more about EM validation reports
            </a>
            .
          </p>
          <a
            className="content-anchor"
            id="computed-structure-models-available-from-rcsborg"
          ></a>
          <h5>Computed Structure Models available from RCSB.org</h5>
          <p>
            The ~1 million CSMs (as of August 2022) integrated into RCSB.org
            were either computed by AlphaFold2 (
            <a
              href="https://doi.org/10.1038/s41586-021-03819-2"
              target="_blank"
            >
              Jumper et al., 2021
            </a>
            ) or a combination of RoseTTAFold and AlphaFold2 (
            <a href="https://doi.org/10.1126/science.abm4805" target="_blank">
              Humphreys et al., 2021
            </a>
            ). While there is no direct experimental data for these predicted
            structures, they are based on extensive sequence alignment and 3D
            reference model data. Convergence of the 3D model and supporting
            data provides a confidence measure in these models.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Predicted Local Distance Difference Test (pLDDT)</b>:
              AlphaFold2 provides both a global and residue-level measure that
              estimates how well the computationally predicted structure agrees
              with multiple sequence alignment data and PDB structure
              information used to compute the model. The pLDDT score (
              <a
                href="https://doi.org/10.1038/s41586-021-03828-1"
                target="_blank"
              >
                Tunyasuvunakool, et al., 2021
              </a>
              ) ranges between 0 and 100. While regions with high pLDDT values
              (≥70) indicate regions that are predicted with confidence, regions
              with low pLDDT scores generally indicate low confidence. Sometimes
              low pLDDT scores can predict regions of protein disorder (
              <a
                href="https://doi.org/10.1016/j.jmb.2021.167208"
                target="_blank"
              >
                Ruff and Pappu, 2021
              </a>
              ) and/or intrinsically-disordered regions (IDRs) of proteins (
              <a
                href="https://doi.org/10.1038/s41592-021-01117-3"
                target="_blank"
              >
                Necci et al., 2021
              </a>
              ). Learn
              <a
                href="https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/computed-structure-models#using-computed-structure-models"
                target="_blank"
              >
                more about CSMs and pLDDT scores
              </a>
              .
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="agreement-with-known-stereochemistry"
          ></a>
          <h4>Agreement with known Stereochemistry</h4>
          <p>
            Regardless of the method of structure determination, shapes and
            interactions of biomolecules are defined by (a) chemical properties
            of atoms in the molecule and (b) how these atoms are positioned in
            3D. 3D model geometry is used to determine the nature of covalent
            and non-covalent interactions between atoms. Any distortions in the
            following are worth noting since they may indicate limitations in
            the model.
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              <b>Bond lengths</b>: when bonds between atoms are either too short
              or too long they should be examined carefully, especially if the
              distortion is not supported by experimental or other data.
            </li>
            <li>
              <b>Bond angles</b>: distortions in bond angles between atoms in a
              biomolecule may also indicate errors in model building and/or
              refinement.
            </li>
            <li>
              <b>Torsion angles</b>: deviations in torsion angles indicate
              conformational changes in biopolymer structures, such as those
              defining the polymer (protein or nucleic acid) backbone, amino
              acid side chains, sugars, bases, and their various modifications.
              Ramachandran and other torsion angle plots specify torsion angle
              values that are commonly seen in structures. Outliers in these
              plots should be examined carefully.
            </li>
          </ul>
          <div></div>
          <a
            className="content-anchor"
            id="accessing-and-interpreting-biomolecular-structure-quality-measures"
          ></a>
          <h3>
            Accessing and interpreting biomolecular structure quality measures
          </h3>
          <p>
            The RCSB PDB provides information about structure quality in a
            variety of formats. Depending on the type of structure and the
            specific questions being asked about it, several of these reports
            and quality measures should be examined. The crystal structure of a
            beta-glucuronidase from Acidobacterium capsulatum (PDB ID 7psj) is
            used here to illustrate various structure quality assessment
            measures, where to find them, and how to interpret them. <br />
            <br />
            Note that the models of older structures or structures determined at
            low resolution may not be as highly optimized and may show issues
            with some measures. The quality measures allow users to identify
            potential problems and assess their impact when used.
            <br />
            <br />
            A. Measures such as <b>resolution, R-value, R-free</b>, etc. can be
            found from the Structure summary page -
            <a
              href="/docs/exploring-a-3d-structure/structure-summary-page#header-"
              target="_blank"
            >
              see header
            </a>
            . <br />
            For example, the resolution of
            <a href="/structure/7S98" target="_blank">
              PDB entry 7s98
            </a>
            is 1.9 Å, R-value is 0.186, and the R-free value is 0.216 (see
            Figure 1). Based on these measures, the overall quality of this
            structure is high.
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img
                      style={{ width: '60%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/63002035b05c2fccc1804d67/aq1.png"
                      alt="Figure 1: Experimental Data Snapshot of PDB ID 7s98, displaying overall structure quality measures."
                    />
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 1: Experimental Data Snapshot of PDB ID 7s98,
                    displaying overall structure quality measures.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            B. <b>Validation slider</b>: All experimental structures in RCSB.org
            display their overall quality at a glance in the form of a
            validation slider, available from the Structure Summary page (Figure
            2). Different structure quality assessment criteria (e.g., Rfree,
            Clashscore, Ramachandran Outliers) are presented in different rows
            of the slider. The specific value of quality measure for the
            structure is shown as a vertical bar in the slider. The quality is
            assessed based on whether the vertical bar is closer to the red
            (worse) or blue (better) end of the slider. Structures with values
            in the blue range conform better to expected values for
            conformational parameters and fit of model to experimental data,
            whereas structures in the red range may have issues such as regions
            with weak experimental support or a less optimized model. Learn
            <a
              href="/docs/exploring-a-3d-structure/structure-summary-page#header-"
              target="_blank"
            >
              more about the validation slider
            </a>
            .<br />
            <br />
            The validation slider for the
            <a href="/structure/7S98" target="_blank">
              PDB entry 7s98
            </a>
            is shown here (Figure 2). Bars representing the R-free, clashscore,
            Ramachandran outliers, Sidechain outliers, and RSRZ outliers for the
            structure shown in this example (PDB entry 7s98) are mostly towards
            the blue or better end of the slider. This suggests that the
            structure is well determined and reliable.
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/63002035b05c2fccc1804d67/aq2.png"
                      data-toggle="lightbox"
                      data-title="Figure 2: Validation slider  for the PDB entry 7s98, with links to access the full validation report (red box) and a colored display of key geometric issues in 3D (blue box)."
                    >
                      <img
                        style={{ width: '90%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/63002035b05c2fccc1804d67/aq2.png"
                        alt="Figure 2: Validation slider  for the PDB entry 7s98, with links to access the full validation report (red box) and a colored display of key geometric issues in 3D (blue box)."
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 2: Validation slider for the PDB entry 7s98, with
                    links to access the full validation report (red box) and a
                    colored display of key geometric issues in 3D (blue box).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            In contrast, the validation slider for the same protein without any
            ligand bound (
            <a href="/structure/7S8Z" target="_blank">
              PDB entry 7s8z
            </a>
            ) has higher overall resolution but worse quality based on the
            validation slider. <br />
            <br />
            C. <b>Validation report</b>: Detailed reports describing overall
            structure quality and residue level listings of geometry distortions
            and mismatches with experimental data are available in various
            formats from the structure summary pages of each structure. Learn
            more about
            <a
              href="https://www.wwpdb.org/validation/validation-reports"
              target="_blank"
            >
              wwPDB validation reports
            </a>
            for all types of experimental structures. <br />
            <br />
            In the example here, a sample of residue level linear map of
            geometry and electron density mismatch issues listed in the
            <a
              href="https://files.rcsb.org/pub/pdb/validation_reports/s9/7s98/7s98_full_validation.pdf"
              target="_blank"
            >
              validation report for PDB entry 7s98
            </a>
            is shown (see Figure 3). Note that there are no major geometry
            issues with any of the amino acid residues in this structure, but
            there are a number of amino acids in the sequence that were not
            modeled (perhaps due to limited quality of the electron density maps
            in that region).
          </p>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a
                      href="https://cdn.rcsb.org/rcsb-pdb/content/63002035b05c2fccc1804d67/aq3.png"
                      data-toggle="lightbox"
                      data-title="Figure 3: Residue level mapping of geometry and electron density issues in one of the protein chains (Chain A) in the PDB entry 7s98"
                    >
                      <img
                        style={{ width: '100%' }}
                        className="img-responsive"
                        src="https://cdn.rcsb.org/rcsb-pdb/content/63002035b05c2fccc1804d67/aq3.png"
                        alt="Figure 3: Residue level mapping of geometry and electron density issues in one of the protein chains (Chain A) in the PDB entry 7s98"
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="content-img-caption">
                    Figure 3: Residue level mapping of geometry and electron
                    density issues in one of the protein chains (Chain A) in the
                    PDB entry 7s98
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
          <p>
            D. <b>3D View of Quality Assessment</b>: The 3D structure of the
            molecule is colored by the number of geometry errors for each
            residue as listed in the validation report. This coloring scheme for
            geometry issues is available for all types of experimental
            structures. An additional coloring scheme is available for X-ray
            structures to examine the Experimental Support Confidence for each
            residue. Learn
            <a
              href="/docs/3d-viewers/mol*/managing-the-display#quality-assessment-panel"
              target="_blank"
            >
              more about these quality assessment coloring schemes
            </a>
            . <br />
            <br />
            In the example shown here (PDB entry 7s98), residues with a few
            geometry errors are colored yellow (Figure 4A). The Experimental
            Support Confidence coloring scheme shows a few residues in yellow or
            orange color indicating limited experimental support (Figure 4B).
            Note that a few residues are colored blue in Figure 4A but
            yellow/orange in Figure 4B (see red arrow and explanation of errors
            in the residue are shown in Figure 4C). It may be worth viewing the
            electron density map around these amino acid residues to get a
            better understanding of the structure quality (see Electron Density
            Map section of this article below).
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/63002035b05c2fccc1804d67/aq4.png"
                    data-toggle="lightbox"
                    data-title="Figure 4: Coloring experimental structure (PDB ID 7s98) by quality assessment criteria - A. by Validation Report, and B. by Experimental Support Confidence. C. Mousing over any residue in the structure (see red arrow in panel B) shows various validation details for the residue in the bottom right corner of the 3D Canvas (blue box)."
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/63002035b05c2fccc1804d67/aq4.png"
                      alt="Figure 4: Coloring experimental structure (PDB ID 7s98) by quality assessment criteria - A. by Validation Report, and B. by Experimental Support Confidence. C. Mousing over any residue in the structure (see red arrow in panel B) shows various validation details for the residue in the bottom right corner of the 3D Canvas (blue box)."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 4: Coloring experimental structure (PDB ID 7s98) by
                  quality assessment criteria - A. by Validation Report, and B.
                  by Experimental Support Confidence. C. Mousing over any
                  residue in the structure (see red arrow in panel B) shows
                  various validation details for the residue in the bottom right
                  corner of the 3D Canvas (blue box).
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            E. Electron Density Map: The best way to assess how well the model
            coordinates match the experimental data for X-ray structures is to
            display the electron density map and the model together. Learn
            <a
              href="/docs/3d-viewers/mol*/managing-the-display#density-panel"
              target="_blank"
            >
              more about displaying Density for X-ray crystallography and EM
              structures
            </a>
            . <br />
            <br />
            In the example shown (PDB entry 7s98), the electron density map is
            displayed as a blue mesh around the model (see Figure 5). Note that
            zooming into a region in the structure colored yellow by
            Experimental Support Confidence (red box) shows limited to missing
            electron density. Since this part of the model is not supported by
            experimental data (missing electron density map), information from
            this region of the model should be used with caution. Another region
            colored blue by Experimental Support Confidence (blue box) clearly
            shows the electron density map surrounding the model atoms
            suggesting that information from this part of the structure is
            supported by experimental data.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/63002035b05c2fccc1804d67/aq5.png"
                    data-toggle="lightbox"
                    data-title="Figure 5: Structure of PDB entry 7s98, colored by the RSCC coloring scheme as seen in Figure 4B. Blue boxed region in the structure shows a good match with the electron density map, while the red box indicates regions with missing/low quality electron density map. "
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/63002035b05c2fccc1804d67/aq5.png"
                      alt="Figure 5: Structure of PDB entry 7s98, colored by the RSCC coloring scheme as seen in Figure 4B. Blue boxed region in the structure shows a good match with the electron density map, while the red box indicates regions with missing/low quality electron density map. "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 5: Structure of PDB entry 7s98, colored by the RSCC
                  coloring scheme as seen in Figure 4B. Blue boxed region in the
                  structure shows a good match with the electron density map,
                  while the red box indicates regions with missing/low quality
                  electron density map.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            F. Small molecule ligands present in experimental structures
            (specifically in X-ray structures) also have specific quality
            assessment measures. Learn
            <a
              href="/docs/general-help/ligand-structure-quality-in-pdb-structures"
              target="_blank"
            >
              more about ligand structure quality
            </a>
            . <br />
            <br />
            In the example shown, ligand structure quality in this entry (PDB ID
            7s98) can be assessed by clicking on the Ligand Structure Quality
            Assessment slider on the structure summary page (Figure 6A). Note
            that the bar indicating the quality of the ligand is towards the
            blue (better) end. Clicking on this bar opens a structure quality
            analysis page showing 2D plots of the quality of the specific ligand
            instance in comparison to other instances in the same or other
            structures in the archive (Figure 6B). Clicking on the ligand in the
            plot can show its 3D structure and the electron density around the
            ligand (Figure 6C). In this case the electron density map and model
            coordinates match suggesting that the ligand coordinates are
            supported by experimental data.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/63002035b05c2fccc1804d67/aq6.png"
                    data-toggle="lightbox"
                    data-title="Figure 6: Quality assessment of the ligand N6M in the PDB entry 7s98. A. Ligand structure quality assessment slider (available on the structure summary page); B. Ligand quality analysis (available in the Ligands tab for the structure); and C. 3D structure of the ligand model and related electron density in a blue mesh, displayed in the visualization software Mol*. "
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/63002035b05c2fccc1804d67/aq6.png"
                      alt="Figure 6: Quality assessment of the ligand N6M in the PDB entry 7s98. A. Ligand structure quality assessment slider (available on the structure summary page); B. Ligand quality analysis (available in the Ligands tab for the structure); and C. 3D structure of the ligand model and related electron density in a blue mesh, displayed in the visualization software Mol*. "
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 6: Quality assessment of the ligand N6M in the PDB
                  entry 7s98. A. Ligand structure quality assessment slider
                  (available on the structure summary page); B. Ligand quality
                  analysis (available in the Ligands tab for the structure); and
                  C. 3D structure of the ligand model and related electron
                  density in a blue mesh, displayed in the visualization
                  software Mol*.
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <p>
            G. The quality of CSMs available from RCSB.org can be displayed in
            3D by mapping the residue level measure pLDDT, which ranges from 0
            to 100 (
            <a
              href="https://doi.org/10.1038/s41586-021-03828-1"
              target="_blank"
            >
              Tunyasuvunakool, K., et al., 2021
            </a>
            ). Parts of the structure with high pLDDT scores are more
            confidently predicted than regions with lower pLDDT. Regions with
            very high and high levels of confidence (&gt;70%) are colored dark
            blue and cyan, respectively, while regions with lower scores are
            colored yellow or orange. Learn
            <a
              href="/docs/3d-viewers/mol*/managing-the-display#quality-assessment-panel"
              target="_blank"
            >
              more about these quality assessment coloring schemes
            </a>
            . <br />
            <br />
            In the example CSM shown in Figure 7, AlphaFold structure
            AF-Q9UNW9-F1, the globular domains are supported by sequence, model,
            and other data, and so are colored in shades of blue indicating high
            pLDDT scores and a high level of confidence. The coil-like and
            extended connectors are predicted with less reliability, and so are
            colored yellow and orange.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://cdn.rcsb.org/rcsb-pdb/content/63002035b05c2fccc1804d67/aq7.png"
                    data-toggle="lightbox"
                    data-title="Figure 7: Coloring CSMs by quality assessment criteria pLDDT scores for CSM AF_AFQ9UNW9F1 (RCSB.org assigned CSM ID)."
                  >
                    <img
                      style={{ width: '100%' }}
                      className="img-responsive"
                      src="https://cdn.rcsb.org/rcsb-pdb/content/63002035b05c2fccc1804d67/aq7.png"
                      alt="Figure 7: Coloring CSMs by quality assessment criteria pLDDT scores for CSM AF_AFQ9UNW9F1 (RCSB.org assigned CSM ID)."
                    />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="content-img-caption">
                  Figure 7: Coloring CSMs by quality assessment criteria pLDDT
                  scores for CSM AF_AFQ9UNW9F1 (RCSB.org assigned CSM ID).
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a
            className="content-anchor"
            id="how-to-use-biomolecular-structure-quality-measures"
          ></a>
          <h3>How to use biomolecular structure quality measures?</h3>
          <p>
            In general, when a well-resolved experimental structure is available
            it is preferable to use that over a corresponding CSM. However,
            whether a model is an experimental structure or a CSM, a review of a
            combination of quality assessment measures should be done before
            utilizing it for visualization, analysis, interpreting experimental
            results, or generating hypotheses.
            <br />
            <br />
            Here are some ways to review the quality measures of experimental
            structures:
          </p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The <b>resolution</b> of X-ray and EM structures should be
              considered - higher resolution typically results in higher
              confidence in the atomic positions.
            </li>
            <li>
              Structures in the blue region of the <b>validation sliders</b>
              conform better to expected values of conformational geometry and
              fit of model to experiment. Structures in the red regions may have
              some problems that should be examined when used.
            </li>
            <li>
              Validation measures identify mismatches between the model and
              experimental data - these structures should be used with caution,
              especially if the mismatches are in the region of interest (e.g.,
              active site, binding surface) as listed in the
              <b>validation reports</b>.
            </li>
            <li>
              Structures with major geometry errors or
              <b>stereochemical violations</b> (distortions in bond lengths,
              bond angles, clashes, torsion angles) may be identified in the
              <b>color coded quality measures</b> seen in Mol*, and may require
              additional optimization when used.
            </li>
          </ul>
          <div></div>
          <p>When using CSMs, also review the relevant quality measures:</p>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              The pLDDT (global) score is listed on the structure summary page.
              Additionally, a histogram showing the distribution of
              residue-level pLDDT scores of the model is also available here.
              The pLDDT score for each amino acid in the model is mapped on the
              3D structure and may be viewed in Mol* (in the Quality Assessments
              panel).
            </li>
            <li>
              To have high confidence in a CSM, not only should the pLDDT
              (global) score be high, the residue-level pLDDT scores should also
              be high or very high.
            </li>
          </ul>
          <div></div>
          <p>
            Whenever possible experimental structures and CSMs should be
            superposed to assess how they match. The
            <a href="/alignment" target="_blank">
              pairwise structure alignment tool
            </a>
            can be used for this.
            <br />
            <br />
            When viewing the superposed 3D structures, they may be colored by
            <a
              href="/docs/3d-viewers/mol*/managing-the-display#quality-assessment-panel"
              target="_blank"
            >
              quality assessment measures
            </a>
            , e.g., experimental support confidence coloring for X-ray
            structures, geometry distortions for all experimental structures,
            and pLDDT scores for CSMs.
          </p>
          <a className="content-anchor" id="references"></a>
          <h2>References</h2>
          <ul style={{ paddingLeft: '40px' }}>
            <li>
              Berjanskii, M. V., and Wishart, D. S. (2005). A simple method to
              predict protein flexibility using secondary chemical shifts.
              Journal of the American Chemical Society, 127(43), 14970–14971.
              <a href="https://doi.org/10.1021/ja054842f" target="_blank">
                https://doi.org/10.1021/ja054842f
              </a>
            </li>
            <li>
              Brünger, A. (1992) Free R value: a novel statistical quantity for
              assessing the accuracy of crystal structures. Nature 355, 472–475.
              <a href="https://doi.org/10.1038/355472a0" target="_blank">
                https://doi.org/10.1038/355472a0
              </a>
            </li>
            <li>
              Henderson, R., Sali, A., Baker, M. L., Carragher, B., Devkota, B.,
              Downing, K. H., Egelman, E. H., Feng, Z., Frank, J., Grigorieff,
              N., Jiang, W., Ludtke, S. J., Medalia, O., Penczek, P. A.,
              Rosenthal, P. B., Rossmann, M. G., Schmid, M. F., Schröder, G. F.,
              Steven, A. C., Stokes, D. L., … Lawson, C. L. (2012). Outcome of
              the first electron microscopy validation task force meeting.
              Structure (London, England : 1993), 20(2), 205–214.
              <a
                href="https://doi.org/10.1016/j.str.2011.12.014"
                target="_blank"
              >
                https://doi.org/10.1016/j.str.2011.12.014
              </a>
            </li>
            <li>
              Humphreys, I. R., Pei, J., Baek, M., Krishnakumar, A.,
              Anishchenko, I., Ovchinnikov, S., Zhang, J., Ness, T. J., Banjade,
              S., Bagde, S. R., Stancheva, V. G., Li, X. H., Liu, K., Zheng, Z.,
              Barrero, D. J., Roy, U., Kuper, J., Fernández, I. S., Szakal, B.,
              Branzei, D., … Baker, D. (2021). Computed structures of core
              eukaryotic protein complexes. Science (New York, N.Y.), 374(6573),
              eabm4805.
              <a href="https://doi.org/10.1126/science.abm4805" target="_blank">
                https://doi.org/10.1126/science.abm4805
              </a>
            </li>
            <li>
              Jones, T. A., Zou, J. Y., Cowan, S. W., and Kjeldgaard, M. (1991).
              Improved methods for building protein models in electron density
              maps and the location of errors in these models. Acta
              crystallographica. Section A, Foundations of crystallography, 47 (
              Pt 2), 110–119.
              <a
                href="https://doi.org/10.1107/S0108767390010224"
                target="_blank"
              >
                https://doi.org/10.1107/s0108767390010224
              </a>
            </li>
            <li>
              Jumper, J., Evans, R., Pritzel, A. et al. (2021). Highly accurate
              protein structure prediction with AlphaFold. Nature 596, 583–589.
              <a
                href="https://doi.org/10.1038/s41586-021-03819-2"
                target="_blank"
              >
                https://doi.org/10.1038/s41586-021-03819-2
              </a>
            </li>
            <li>
              Kleywegt, G. J., Harris, M. R., Zou, J. Y., Taylor, T. C., Wählby,
              A., &amp; Jones, T. A. (2004). The Uppsala Electron-Density
              Server. Acta crystallographica. Section D, Biological
              crystallography, 60(Pt 12 Pt 1), 2240–2249.
              <a
                href="https://doi.org/10.1107/S0907444904013253"
                target="_blank"
              >
                https://doi.org/10.1107/S0907444904013253
              </a>
            </li>
            <li>
              Montelione, G. T., Nilges, M., Bax, A., Güntert, P., Herrmann, T.,
              Richardson, J. S., Schwieters, C. D., Vranken, W. F., Vuister, G.
              W., Wishart, D. S., Berman, H. M., Kleywegt, G. J., and Markley,
              J. L. (2013). Recommendations of the wwPDB NMR Validation Task
              Force. Structure (London, England : 1993), 21(9), 1563–1570.
              <a
                href="https://doi.org/10.1016/j.str.2013.07.021"
                target="_blank"
              >
                https://doi.org/10.1016/j.str.2013.07.021
              </a>
            </li>
            <li>
              Necci, M., Piovesan, D., (2021). CAID Predictors. et al. Critical
              assessment of protein intrinsic disorder prediction. Nat Methods
              18, 472–481
              <a
                href="https://doi.org/10.1038/s41592-021-01117-3"
                target="_blank"
              >
                https://doi.org/10.1038/s41592-021-01117-3
              </a>
            </li>
            <li>
              Pintilie, G., Zhang, K., Su, Z., Li, S., Schmid, M. F., and Chiu,
              W. (2020). Measurement of atom resolvability in cryo-EM maps with
              Q-scores. Nature methods, 17(3), 328–334.
              <a
                href="https://doi.org/10.1038/s41592-020-0731-1"
                target="_blank"
              >
                https://doi.org/10.1038/s41592-020-0731-1
              </a>
            </li>
            <li>
              Read, R. J., Adams, P. D., Arendall, W. B., 3rd, Brunger, A. T.,
              Emsley, P., Joosten, R. P., Kleywegt, G. J., Krissinel, E. B.,
              Lütteke, T., Otwinowski, Z., Perrakis, A., Richardson, J. S.,
              Sheffler, W. H., Smith, J. L., Tickle, I. J., Vriend, G., and
              Zwart, P. H. (2011). A new generation of crystallographic
              validation tools for the protein data bank. Structure (London,
              England : 1993), 19(10), 1395–1412.
              <a
                href="https://doi.org/10.1016/j.str.2011.08.006"
                target="_blank"
              >
                https://doi.org/10.1016/j.str.2011.08.006
              </a>
            </li>
            <li>
              Ruff, K. M., &amp; Pappu, R. V. (2021). AlphaFold and Implications
              for Intrinsically Disordered Proteins. Journal of molecular
              biology, 433(20), 167208.
              <a
                href="https://doi.org/10.1016/j.jmb.2021.167208"
                target="_blank"
              >
                https://doi.org/10.1016/j.jmb.2021.167208
              </a>
            </li>
            <li>
              Shao, C., Bittrich, S., Wang, S., and Burley, S.K., (2022)
              “Assessing PDB Macromolecular Crystal Structure Confidence at the
              Individual Amino Acid Residue Level”, Structure,
              30(10):1385-1394.e3.
              <a
                href="https://doi.org/10.1016/j.str.2022.08.004"
                target="_blank"
              >
                https://doi.org/10.1016/j.str.2022.08.004
              </a>
            </li>
            <li>
              Tunyasuvunakool, K., Adler, J., Wu, Z. et al. (2021). Highly
              accurate protein structure prediction for the human proteome.
              Nature 596, 590–596.
              <a
                href="https://doi.org/10.1038/s41586-021-03828-1"
                target="_blank"
              >
                https://doi.org/10.1038/s41586-021-03828-1
              </a>
            </li>
            <li>
              van Heel, M., Gowen, B., Matadeen, R., Orlova, E. V., Finn, R.,
              Pape, T., Cohen, D., Stark, H., Schmidt, R., Schatz, M., and
              Patwardhan, A. (2000). Single-particle electron cryo-microscopy:
              towards atomic resolution. Quarterly reviews of biophysics, 33(4),
              307–369.
              <a
                href="https://doi.org/10.1017/s0033583500003644"
                target="_blank"
              >
                https://doi.org/10.1017/s0033583500003644
              </a>
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
        <div>Last updated: 10/20/2022</div>
      </div>
    </div>
  );
};
