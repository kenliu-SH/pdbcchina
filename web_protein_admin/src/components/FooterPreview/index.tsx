import styles from './index.less';
import { Modal, Row, Col, Divider, Radio } from 'antd';
import { useState } from 'react';
import { filter } from 'lodash';
import Chinese from 'chinese-s2t';

export default (props: any) => {
  const { dataSource } = props;
  const [locale, setLocale] = useState('en-US');
  function getLocale(vo: any) {
    switch (locale) {
      case 'zh-CN':
        return vo.zhName;
        break;
      case 'zh-TW':
        return Chinese.s2t(vo.zhName);
        break;
      case 'en-US':
        return vo.name;
        break;
    }
  }
  return (
    <Modal {...props} width={1200} destroyOnClose>
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <Radio.Group
          buttonStyle="solid"
          value={locale}
          onChange={({ target: { value } }) => {
            setLocale(value);
          }}
        >
          <Radio.Button value={'en-US'}>英文</Radio.Button>
          <Radio.Button value={'zh-CN'}>中文简体</Radio.Button>
          <Radio.Button value={'zh-TW'}>中文繁体</Radio.Button>
        </Radio.Group>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_main}>
          <Row gutter={[24, 0]}>
            <Col
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={24}
              xs={24}
              className={styles.footer_main_left}
            >
              {filter(dataSource, { type: 0 })?.map((vo: any) => {
                return (
                  <div key={vo.id} className={styles.footer_main_left_line}>
                    <strong className={styles.line_title}>{getLocale(vo)}</strong>
                    <div className={styles.line_items_contain}>
                      {vo.footerItems?.map((item: any, length: number) => (
                        <div key={item.id}>
                          <a href={item.linkUrl} target="_blank" rel="noreferrer">
                            {[1, 3].includes(item.status) && item.imgUrl && (
                              <img
                                src={item.imgUrl}
                                style={{
                                  width: '83px',
                                  height: '28px',
                                  marginRight: item.status === 1 ? '2px' : 0,
                                }}
                              />
                            )}
                            {[1, 2].includes(item.status) && (
                              <span className={styles.line_item} style={{ whiteSpace: 'pre' }}>
                                {getLocale(item)}
                              </span>
                            )}
                          </a>
                          {length !== vo.footerItems.length - 1 && (
                            <Divider type="vertical" className={styles.line_divider} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </Col>
            <Col
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={24}
              xs={24}
              className={styles.footer_main_right}
            >
              {filter(dataSource, { type: 1 })?.map((record: any, index: number) => {
                return (
                  <div className={styles.item_box} key={index}>
                    <img className={styles.footer_title_icon} src={record.imgUrl} />
                    {record.footerItems?.map((vo: any, key: number) => (
                      <img key={key} className={styles.children_icon} src={vo.imgUrl} />
                    ))}
                  </div>
                );
              })}
            </Col>
          </Row>
        </div>
        <div className={styles.copyRight}>CopyRight © 2013-2021 PDBC. All Rights Reserved.</div>
      </div>
    </Modal>
  );
};
