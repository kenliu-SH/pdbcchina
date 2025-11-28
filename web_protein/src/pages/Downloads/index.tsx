import styles from './index.less';
import { Input, Button, Row, Col, Checkbox, Space } from 'antd';

export default () => {
  return (
    <div className={styles.download_contain}>
      <h1>Download Multiple Files from the PDB Archive</h1>
      <p>
        For downloading large amounts of data files, users are encouraged to use
        <a>this shell script for batch download</a>. Individual data files,
        including 3DEM maps and NMR NEF files, can also be downloaded from
        Structure Summary pages.
      </p>
      <Row gutter={[0, 32]}>
        <Col span={19} className={styles.meet_box}>
          <Input.TextArea
            className={styles.input}
            rows={6}
            placeholder="Enter PDB IDs separated by comma or white space, such as 4hhb, 108d"
          />
          <div className={styles.meet_box_action}>
            <small>
              Downloaded PDB format files will have the extension .ent
            </small>
            <Button size="small">Clear</Button>
          </div>
        </Col>
        <Col span={19}>
          <Row gutter={16}>
            <Col span={8}>
              <strong className={styles.file_title}>Data File Format:</strong>
              <div>
                <Checkbox.Group>
                  <Row gutter={[0, 4]}>
                    <Col span={24}>
                      <Checkbox value="PDB">PDB</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="PDBML/XML">PDBx/mmCIF</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="PDBML/XML">PDBML/XML</Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="PDBML/XML(Header only)">
                        PDBML/XML(Header only)
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="Biological Assemblies In PDB">
                        Biological Assemblies In PDB
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value="Biological Assemblies In PDBx/mmCIF">
                        Biological Assemblies In PDBx/mmCIF
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>
            </Col>
            <Col span={8}>
              <strong className={styles.file_title}>Experimental Data:</strong>
              <div>
                <Checkbox.Group>
                  <Row gutter={[0, 4]}>
                    <Col span={24}>
                      <Checkbox value="Structure Factors">
                        Structure Factors
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={'NMR Restraints'}>
                        NMR Restraints
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={'Chemical Shifts'}>
                        Chemical Shifts
                      </Checkbox>
                    </Col>
                    <Col span={24}>
                      <Checkbox value={'NMR Restraints v2'}>
                        NMR Restraints v2
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </div>
            </Col>
            <Col span={8}>
              <Checkbox>Select All</Checkbox>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Space>
            <Button type="primary" disabled>
              Generate File Batches for Download
            </Button>
            <Button type="primary" disabled>
              Reset All
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};
