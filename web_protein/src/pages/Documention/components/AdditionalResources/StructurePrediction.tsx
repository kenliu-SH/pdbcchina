export default () => {
  return (
    <div className="col-lg-9 col-md-8 col-sm-12 content-item">
      <div data-elastic-include="">
        <h5 className="menu-path">Additional Resources</h5>
        <h1>Structure Prediction</h1>
        <div>
          <div style={{ paddingLeft: '40px' }}>
            ○
            <a href="#software-for-structure-prediction">
              Software for structure prediction
            </a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#software">Software</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■ <a href="#web-servers">Web servers</a>
          </div>
          <div style={{ paddingLeft: '60px' }}>
            ■
            <a href="#databases-of-pre-computed-models">
              Databases of pre-computed models
            </a>
          </div>
          <a
            className="content-anchor"
            id="software-for-structure-prediction"
          ></a>
          <h3>Software for structure prediction</h3>
          <a className="content-anchor" id="software"></a>
          <h4>Software</h4>
          <table className="table table-bordered" border={1}>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://github.com/deepmind/alphafold"
                    target="_blank"
                  >
                    AlphaFold2
                  </a>
                </td>
                <td> Open source code for AlphaFold</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.ipd.uw.edu/2021/07/rosettafold-accurate-protein-structure-prediction-accessible-to-all/"
                    target="_blank"
                  >
                    RoseTTAFold
                  </a>
                </td>
                <td>
                  A software tool that uses deep learning to quickly and
                  accurately predict protein structures based on limited
                  information.
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://github.com/aqlaboratory/openfold"
                    target="_blank"
                  >
                    OpenFold
                  </a>
                </td>
                <td>
                  Trainable, memory-efficient, and GPU-friendly PyTorch
                  reproduction of AlphaFold 2
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://github.com/HeliXonProtein/OmegaFold"
                    target="_blank"
                  >
                    OmegaFold
                  </a>
                </td>
                <td> OmegaFold Release Code </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://github.com/PaddlePaddle/PaddleHelix/tree/dev/apps/protein_folding/helixfold"
                    target="_blank"
                  >
                    HelixFold
                  </a>
                </td>
                <td>
                  An Efficient and Improved Implementation of AlphaFold 2 using
                  PaddlePaddle
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://github.com/PaddlePaddle/PaddleHelix/tree/dev/apps/protein_folding/helixfold-single"
                    target="_blank"
                  >
                    HelixFold-single
                  </a>
                </td>
                <td>
                  A single sequence language-model-based prediction network
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://github.com/facebookresearch/esm"
                    target="_blank"
                  >
                    ESMFold
                  </a>
                </td>
                <td>
                  Evolutionary Scale Modeling (esm): Pretrained language models
                  for proteins
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a className="content-anchor" id="web-servers"></a>
          <h4>Web servers</h4>
          <table className="table table-bordered" border={1}>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://colab.research.google.com/github/sokrypton/ColabFold/blob/main/AlphaFold2.ipynb"
                    target="_blank"
                  >
                    ColabFold
                  </a>
                </td>
                <td>AlphaFold2 using MMseqs2</td>
              </tr>
              <tr>
                <td>
                  <a href="https://zhanggroup.org/I-TASSER/" target="_blank">
                    I-TASSER
                  </a>
                </td>
                <td>
                  (Iterative Threading ASSEmbly Refinement) is a hierarchical
                  approach to protein structure prediction and structure-based
                  function annotation
                </td>
              </tr>
            </tbody>
          </table>
          <div></div>
          <a
            className="content-anchor"
            id="databases-of-pre-computed-models"
          ></a>
          <h4>Databases of pre-computed models</h4>
          <table className="table table-bordered" border={1}>
            <tbody>
              <tr>
                <td>
                  <a href="https://alphafold.ebi.ac.uk/" target="_blank">
                    AlphaFold Protein Structure Database
                  </a>
                </td>
                <td>
                  AlphaFold is an AI system developed by
                  <a href="https://www.deepmind.com/" target="_blank">
                    DeepMind
                  </a>
                  that predicts a protein’s 3D structure from its amino acid
                  sequence
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.modelarchive.org/" target="_blank">
                    ModelArchive
                  </a>
                </td>
                <td>
                  Repository for theoretical models of macromolecular structures
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://modbase.compbio.ucsf.edu/" target="_blank">
                    ModBase
                  </a>
                </td>
                <td>A database of comparative protein structure models</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://swissmodel.expasy.org/repository/"
                    target="_blank"
                  >
                    SWISS-MODEL Repository
                  </a>
                </td>
                <td>
                  A database of annotated protein structure homology models
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
        <div>Last updated: 9/8/2022</div>
      </div>
    </div>
  );
};
