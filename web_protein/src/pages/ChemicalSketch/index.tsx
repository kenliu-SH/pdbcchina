import { Row, Col, Select, Input, Button } from 'antd';
import { useState } from 'react';

import MoleculeStructure from './components/MoleculeStructure';

const INTPLACEHOLDER: any = {
  inchi: 'e.g., InChI=1S/C10H16N...',
  smiles: 'e.g., c1nc(c2c(n1)n(cn...',
  ccdid: 'e.g., AMP',
};
export default () => {
  const [type, setType] = useState('smiles');
  const [values, setValues] = useState('');
  const [structure, setStructure] = useState('');
  return (
    <Row>
      <Col span={3}></Col>
      <Col span={18}>
        <h1>Chemical Draw Tool</h1>
        <p>
          Use the Chemical Draw Tool to draw a molecule using SMILES format.
        </p>
        <div
          style={{
            width: '100%',
            height: '500px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* CN1C=NC2=C1C(=O)N(C(=O)N2C) */}
          <MoleculeStructure
            id="structure-example-svg-caffeine"
            structure={structure}
            width={600}
            height={600}
            svgMode
          />
        </div>
        <div className="panel">
          <div className="panel-heading">Load Molecule</div>
          <div className="panel-body">
            <table className="controls">
              <tbody>
                <tr>
                  <td style={{ width: '80px' }}>Descriptor</td>
                  <td>
                    <Select
                      style={{ width: '300px' }}
                      value={type}
                      onSelect={setType}
                      options={[
                        // { label: 'InChI', value: 'inchi' },
                        { label: 'SMILES', value: 'smiles' },
                        // { label: 'Chemical Component ID', value: 'ccdid' },
                      ]}
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td className="control-descriptor">
                    <Input
                      placeholder={INTPLACEHOLDER[type]}
                      onChange={(e) => {
                        setValues(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <Button
                      onClick={() => {
                        setStructure(values);
                      }}
                    >
                      Load
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Col>
      <Col span={3}></Col>
    </Row>
  );
};
