import { useEffect } from 'react';
import Config from '@/common/config';
import { Row, Col } from 'antd';
import styles from '../../styles/View.less';

export default ({ id }: any) => {
  useEffect(() => {
    const stage = new NGL.Stage('ngl_viewer', {
      backgroundColor: 'white',
      hoverTimeout: 150,
    });
    stage
      .loadFile(Config.SERVER_HOME + `file/mmCIF/down/` + id + `.cif`, {
        defaultRepresentation: true,
      })
      .then(function (o: any) {
        o.addRepresentation('cartoon');
        o.autoView();
      });
  }, []);
  return (
    <Row>
      <Col span={18}>
        <div className={styles.ngl_contain}>
          <div className={styles.ngl_header}>
            Note: Use your mouse to drag, rotate, and zoom in and out of the
            structure. Mouse-over to identify atoms and bonds.
            <a>Mouse controls documentation</a>
          </div>
          <div className={styles.ngl_model} id="ngl_viewer" />
          {/* <div className={styles.ngl_footer}>
            <Space>
              <Button size="small">Spin</Button>
              <Button size="small">Center</Button>
              <Button size="small">Fullscreen</Button>
              <Button size="small">Screenshot</Button>
              <Button size="small">
                Perspective Camera&nbsp;
                <DownOutlined />
              </Button>
              <Button size="small">
                White background&nbsp;
                <DownOutlined />
              </Button>
            </Space>
          </div> */}
        </div>
      </Col>
      <Col span={6}></Col>
    </Row>
  );
};
