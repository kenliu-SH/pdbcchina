import { requestGet } from '@/utils/dva17';
import { formarSubscripts } from '@/utils/utils';
import { Row, Col, Checkbox, Image } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'umi';
import dayjs from 'dayjs';
import styles from '../../entry/styles/StructureSummary.less';
import Config from '@/common/config';

export default () => {
  const params: any = useParams();
  const { id } = params || {};
  const containerRef: any = useRef(null);
  const rotateRef: any = useRef(null);
  const hydrogensRef: any = useRef(null);
  const labelRef: any = useRef(null);
  const [ligand, setLigand]: any = useState(null);
  async function init() {
    const res = await requestGet('entry/ccd/' + id);
    if (res) {
      setLigand(res);
    }
  }
  useEffect(() => {
    if (id) {
      init();
    }
  }, [id]);
  useEffect(() => {
    const stage = new NGL.Stage(containerRef.current, {
      backgroundColor: 'white',
      clipDist: 1,
    });
    function e() {
      return d ? 'not _h and ' + r : r;
    }
    function t(e: any, t: any) {
      var n = !1;
      return (
        e.getView(new NGL.Selection(t)).eachAtom(function (e) {
          (isNaN(e.x) || isNaN(e.y) || isNaN(e.z)) && (n = !0);
        }),
        n
      );
    }
    function n() {
      f ? stage.setSpin(null) : stage.setSpin([0, 1, 0], 0.01), (f = !f);
    }
    function i() {
      l.setVisibility(!s), (s = !s);
    }
    function o() {
      c.setSelection(e()), (d = !d);
    }
    var l,
      a,
      c,
      d = !0,
      s = !0,
      r = '/1';
    stage
      .loadFile(Config.SERVER_HOME + `file/v2/pdb/chemFile/` + id + '.cif')
      .then(function (n: any) {
        (r = t(n.structure, '/1') ? '/0' : '/1'),
          (c = n),
          c.setSelection(e()),
          (a = n.addRepresentation('ball+stick', {
            multipleBond: 'symmetric',
          })),
          (l = n.addRepresentation('label', {
            labelType: 'atomname',
            color: 'black',
            fontWeight: 'bold ',
            xOffset: 0.1,
            yOffset: 0.1,
            radius: 1.4,
          })),
          i(),
          o(),
          stage.autoView(1);
      });
    var f = !1;
    n();
    rotateRef.current.addEventListener('click', n);
    hydrogensRef.current.addEventListener('click', o);
    labelRef.current.addEventListener('click', i);
    return () => {
      rotateRef?.current?.removeEventListener('click', n);
      hydrogensRef?.current?.removeEventListener('click', o);
      labelRef?.current?.removeEventListener('click', i);
    };
  }, []);
  const CheckStyle = {
    marginLeft: 0,
  };
  return (
    <Row gutter={[32, 32]}>
      <Col xxl={8} xs={24}>
        <h1 style={{ marginBottom: '0' }}>{ligand?.compId || id}</h1>
        <h4>{ligand?.name}</h4>
        <div>
          {/* <span>Find entries where: {ligand?.compId || id}</span> */}
          {/* <br />
          <Checkbox.Group>
            <Checkbox style={CheckStyle} value={0}>
              is present as a standalone ligand in <a>20 entries</a>
            </Checkbox>
            <Checkbox style={CheckStyle} value={0}>
              is present in a polymer sequence <a>231 entries</a>
            </Checkbox>
          </Checkbox.Group> */}
          {/* <br />
          <br />
          <span>Find related ligands:</span>
          <br />
          <div>
            <a href="/search?query=%7B%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22value%22%3A%22C1%5BC%40%40H%5D(%5BC%40H%5D(O%5BC%40H%5D1N2C3%3DC(C(%3DO)NC(%3DN3)N)NC2%3DO)COP(%3DO)(O)O)O%22%2C%22match_type%22%3A%22graph-relaxed-stereo%22%7D%2C%22label%22%3A%22chemical%22%7D&amp;return_type=mol_definition">
              Similar Ligands (Stereospecific)
            </a>
          </div>
          <div>
            <a href="/search?query=%7B%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22value%22%3A%22C1%5BC%40%40H%5D(%5BC%40H%5D(O%5BC%40H%5D1N2C3%3DC(C(%3DO)NC(%3DN3)N)NC2%3DO)COP(%3DO)(O)O)O%22%2C%22match_type%22%3A%22graph-relaxed%22%7D%2C%22label%22%3A%22chemical%22%7D&amp;return_type=mol_definition">
              Similar Ligands (including Stereoisomers)
            </a>
          </div>
          <div>
            <a href="/search?query=%7B%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22value%22%3A%22C1%5BC%40%40H%5D(%5BC%40H%5D(O%5BC%40H%5D1N2C3%3DC(C(%3DO)NC(%3DN3)N)NC2%3DO)COP(%3DO)(O)O)O%22%2C%22match_type%22%3A%22fingerprint-similarity%22%7D%2C%22label%22%3A%22chemical%22%7D&amp;return_type=mol_definition">
              Similar Ligands (Quick Screen)
            </a>
          </div>
          <div>
            <a href="/search?query=%7B%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22value%22%3A%22C1%5BC%40%40H%5D(%5BC%40H%5D(O%5BC%40H%5D1N2C3%3DC(C(%3DO)NC(%3DN3)N)NC2%3DO)COP(%3DO)(O)O)O%22%2C%22match_type%22%3A%22sub-struct-graph-relaxed-stereo%22%7D%2C%22label%22%3A%22chemical%22%7D&amp;return_type=mol_definition">
              Similar Ligands (Substructure Stereospecific)
            </a>
          </div>
          <div>
            <a href="/search?query=%7B%22service%22%3A%22chemical%22%2C%22parameters%22%3A%7B%22type%22%3A%22descriptor%22%2C%22descriptor_type%22%3A%22SMILES%22%2C%22value%22%3A%22C1%5BC%40%40H%5D(%5BC%40H%5D(O%5BC%40H%5D1N2C3%3DC(C(%3DO)NC(%3DN3)N)NC2%3DO)COP(%3DO)(O)O)O%22%2C%22match_type%22%3A%22sub-struct-graph-relaxed%22%7D%2C%22label%22%3A%22chemical%22%7D&amp;return_type=mol_definition">
              Similar Ligands (Substructure including Stereoisomers)
            </a>
          </div> */}
        </div>
      </Col>
      <Col xxl={8} sm={12} xs={24}>
        <div className={styles.imageBox}>
          <Image
            className={styles.box_cover}
            src={Config.SERVER_HOME + `file/v2/pdb/chemImage/${id}.svg`}
            preview={{
              imageRender: () => (
                <img
                  style={{ width: 400, height: 400 }}
                  src={Config.SERVER_HOME + `file/v2/pdb/chemImage/${id}.svg`}
                />
              ),
            }}
          />
        </div>
      </Col>
      <Col xxl={8} sm={12} xs={24}>
        <div
          className={styles.imageBox}
          style={{ height: '270px' }}
          id="ngl_contain"
          ref={containerRef}
        />
        <div className={styles.ngl_action_btn}>
          <div className={styles.action_btn_item} ref={rotateRef}>
            Rotate
          </div>
          <div className={styles.action_btn_item} ref={hydrogensRef}>
            Hydrogens
          </div>
          <div className={styles.action_btn_item} ref={labelRef}>
            Labels
          </div>
        </div>
      </Col>
      <Col xxl={16} xs={24}>
        <table border={1} cellPadding={4} cellSpacing={1}>
          <tbody>
            <tr className="global_tr_bg">
              <th colSpan={2}>
                <h4 style={{ marginBottom: 0 }}>Chemical Component Summary</h4>
              </th>
            </tr>
            <tr>
              <th style={{ width: '30%' }}>Name</th>
              <td>{ligand?.chemicalComponentSummary?.name}</td>
            </tr>
            <tr>
              <th>Synonyms</th>
              <td>{ligand?.chemicalComponentSummary?.synonyms}</td>
            </tr>
            <tr>
              <th>Formula</th>
              <td>
                {ligand?.chemicalComponentSummary?.formula && (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: formarSubscripts(
                        ligand?.chemicalComponentSummary?.formula,
                      ),
                    }}
                  />
                )}
              </td>
            </tr>
            <tr>
              <th>Molecular Weight</th>
              <td>{ligand?.chemicalComponentSummary?.molecularWeight}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{ligand?.chemicalComponentSummary?.type}</td>
            </tr>
            <tr>
              <th>Create Date</th>
              <td>
                {ligand?.chemicalComponentSummary?.createDate &&
                  dayjs(ligand?.chemicalComponentSummary?.createDate).format(
                    'YYYY-MM-DD',
                  )}
              </td>
            </tr>
            <tr>
              <th>Release Date</th>
              <td>
                {ligand?.chemicalComponentSummary?.releaseDate &&
                  dayjs(ligand?.chemicalComponentSummary?.releaseDate).format(
                    'YYYY-MM-DD',
                  )}
              </td>
            </tr>
            <tr>
              <th>Isomeric SMILES</th>
              <td>{ligand?.chemicalComponentSummary?.isomericSMILES}</td>
            </tr>
            <tr>
              <th>InChI</th>
              <td>{ligand?.chemicalComponentSummary?.inChI}</td>
            </tr>
            <tr>
              <th>InChIKey</th>
              <td>{ligand?.chemicalComponentSummary?.inChIKey}</td>
            </tr>
          </tbody>
        </table>
      </Col>
      <Col xxl={8} xs={24}>
        <table border={1} cellPadding={4} cellSpacing={1}>
          <tbody>
            <tr className="global_tr_bg">
              <th colSpan={2}>
                <h4 style={{ marginBottom: 0 }}>Chemical Details</h4>
              </th>
            </tr>
            <tr>
              <th>Formal Charge</th>
              <td style={{ width: '35%' }}>
                {ligand?.chemicalDetails?.formalCharge}
              </td>
            </tr>
            <tr>
              <th>Atom Count</th>
              <td>{ligand?.chemicalDetails?.atomCount}</td>
            </tr>
            <tr>
              <th>NonHydrogen Atom Count</th>
              <td>{ligand?.chemicalDetails?.NonHydrogenAtomCount}</td>
            </tr>
            <tr>
              <th>Chiral Atom Count</th>
              <td>{ligand?.chemicalDetails?.chiralAtomCount}</td>
            </tr>
            <tr>
              <th>Bond Count</th>
              <td>{ligand?.chemicalDetails?.bondCount}</td>
            </tr>
            <tr>
              <th>Aromatic Bond Count</th>
              <td>{ligand?.chemicalDetails?.aromaticBondCount}</td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  );
};
