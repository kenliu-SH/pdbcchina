import { Row, Col } from 'antd';
import Config from '@/common/config';
import styles from '../../entry/styles/StructureSummary.less';
import { useParams } from 'umi';
import { useRef, useEffect, useState } from 'react';
import DownloadBtn from '@/components/DownloadBtn';
import { requestGet } from '@/utils/dva17';
import { formarSubscripts } from '@/utils/utils';
import { orderBy } from 'lodash';

export default () => {
  const params: any = useParams();
  const { id } = params || {};
  const containerRef: any = useRef(null);
  const rotateRef: any = useRef(null);
  const hydrogensRef: any = useRef(null);
  const labelRef: any = useRef(null);
  const [bird, setBird]: any = useState(null);
  console.log('bird: ', bird);
  async function init() {
    const res = await requestGet('entry/bird/' + id);
    if (res) {
      setBird(res);
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
  return (
    <Row gutter={[32, 32]}>
      <Col xxl={8} sm={8} xs={24}>
        <div className={styles.imageBox}>
          <img src={Config.SERVER_HOME + `file/v2/pdb/chemImage/${id}.svg`} />
        </div>
      </Col>
      <Col xxl={8} sm={8} xs={24}>
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
      <Col xxl={8} sm={8} xs={24}>
        <DownloadBtn id={id} />
        <h1 style={{ marginBottom: 0, marginTop: 24 }}>{bird?.prdId}</h1>
        <h4>{bird?.name}</h4>
        {/* <p>
          PRD_900003 is described in the&nbsp;
          <a href="http://wwpdb.org/data/bird">
            Biologically Interesting Molecule Reference Dictionary (BIRD)
          </a>
          .
        </p>
        <p>
          The representative PDB ID is&nbsp;<a href="/structure/3TAN">3TAN.</a>
        </p>
        <p>
          <a href="/search?q=pdbx_reference_molecule.prd_id:PRD_900003">
            Find entries where PRD_900003 is present
          </a>
        </p> */}
      </Col>
      <Col xxl={16} sm={16} xs={24}>
        <table border={1} cellPadding={4} cellSpacing={1}>
          <tbody>
            <tr className="global_tr_bg">
              <th colSpan={2}>
                <h4 style={{ marginBottom: 0 }}>Chemical Component Summary</h4>
              </th>
            </tr>
            <tr>
              <th style={{ width: '28%' }}>Name</th>
              <td>{bird?.chemicalComponentSummary?.name}</td>
            </tr>
            <tr>
              <th>Identifiers</th>
              <td>{bird?.chemicalComponentSummary?.identifiers}</td>
            </tr>
            <tr>
              <th>Formula</th>
              <td
                dangerouslySetInnerHTML={{
                  __html:
                    bird?.chemicalComponentSummary?.formula &&
                    formarSubscripts(bird?.chemicalComponentSummary?.formula),
                }}
              ></td>
            </tr>
            <tr>
              <th>Molecular Weight</th>
              <td>{bird?.chemicalComponentSummary?.molecularWeight}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{bird?.chemicalComponentSummary?.type}</td>
            </tr>
            <tr>
              <th>Isomeric SMILES</th>
              <td>{bird?.chemicalComponentSummary?.isomericSMILES}</td>
            </tr>
            <tr>
              <th>InChI</th>
              <td>{bird?.chemicalComponentSummary?.inChI}</td>
            </tr>
            <tr>
              <th>InChIKey</th>
              <td>{bird?.chemicalComponentSummary?.inChIKey}</td>
            </tr>
            <tr>
              <th>Composition</th>
              <td>
                <div className={styles.composition_box}>
                  {orderBy(
                    bird?.chemicalComponentSummary?.composition,
                    (vo: any) => {
                      return Number(vo.id);
                    },
                  )?.map((vo: any, i: number) => {
                    return (
                      <div key={i} className={styles.box}>
                        <div className={styles.box_item}>{vo}</div>
                        {i <
                          bird?.chemicalComponentSummary.composition.length -
                            1 && <div className={styles.box_item_line} />}
                      </div>
                    );
                  })}
                </div>
              </td>
            </tr>
            <tr>
              <th>BIRD class</th>
              <td>{bird?.chemicalComponentSummary?.BIRDclass}</td>
            </tr>
            <tr>
              <th>Represented As</th>
              <td>{bird?.chemicalComponentSummary?.representedAs}</td>
            </tr>
            <tr>
              <th>Compound Details</th>
              <td>{bird?.chemicalComponentSummary?.compoundDetails}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{bird?.chemicalComponentSummary?.description}</td>
            </tr>
          </tbody>
        </table>
      </Col>
      <Col xxl={8} sm={8} xs={24}>
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
                {bird?.chemicalDetails?.formalCharge}
              </td>
            </tr>
            <tr>
              <th>Atom Count</th>
              <td>{bird?.chemicalDetails?.atomCount}</td>
            </tr>
            <tr>
              <th>NonHydrogen Atom Count</th>
              <td>{bird?.chemicalDetails?.NonHydrogenAtomCount}</td>
            </tr>
            <tr>
              <th>Chiral Atom Count</th>
              <td>{bird?.chemicalDetails?.chiralAtomCount}</td>
            </tr>
            <tr>
              <th>Bond Count</th>
              <td>{bird?.chemicalDetails?.bondCount}</td>
            </tr>
            <tr>
              <th>Aromatic Bond Count</th>
              <td>{bird?.chemicalDetails?.aromaticBondCount}</td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  );
};
