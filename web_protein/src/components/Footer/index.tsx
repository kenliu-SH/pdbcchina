import styles from './styles.less';
import { Row, Col, Divider } from 'antd';
import { NHome, EFooter } from '@/common/action';
import { useEffect } from 'react';
import { effect, useConnect } from '@/utils/dva17';
import { getLocalName } from '@/utils/utils';
import images from '@/assets/images';
import { convertToAbsoluteUrl } from '@/utils/convertToAbsoluteUrl';

export default () => {
  const { footers } = useConnect(NHome);
  useEffect(() => {
    effect(NHome, EFooter, { type: 0 });
  }, []);
  return (
    <div className={styles.footer}>
      <div className={styles.footer_main}>
        <Row gutter={[24, 24]}>
          <Col
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={24}
            xs={24}
            className={styles.footer_main_left}
          >
            {footers?.map((vo: any) => {
              return (
                <div key={vo.id} className={styles.footer_main_left_line}>
                  <strong className={styles.line_title}>
                    {getLocalName(vo)}
                  </strong>
                  <div className={styles.line_items_contain}>
                    {vo.footerItems?.map((item: any, length: number) => (
                      <div key={item.id}>
                        <a
                          href={
                            item.isBuilding
                              ? `#/construction?url=${encodeURIComponent(
                                  item.buildingLinkUrl,
                                )}`
                              : convertToAbsoluteUrl(vo.linkUrl)
                          }
                          target="_blank"
                        >
                          {[1, 3].includes(item.status) && item.imgUrl && (
                            <img
                              src={item.imgUrl}
                              style={{
                                width: '83px',
                                height: '28px',
                                verticalAlign: 'middle',
                                marginRight: item.status === 1 ? '2px' : 0,
                              }}
                            />
                          )}
                          {[1, 2].includes(item.status) && (
                            <span
                              className={styles.line_item}
                              style={{ whiteSpace: 'pre' }}
                            >
                              {getLocalName(item)}
                            </span>
                          )}
                        </a>
                        {length !== vo.footerItems.length - 1 && (
                          <Divider
                            type="vertical"
                            className={styles.line_divider}
                          />
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
            <Row gutter={[24, 24]}>
              <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                <div>
                  <div className={styles.item_box_title}>
                    PDB China{' '}
                    <a
                      className={styles.title_links}
                      href="https://doi.org/10.1107/S2059798323006381"
                      target="_blank"
                    >
                      (citation)
                    </a>
                    <br />
                    is hosted by
                  </div>
                  <img
                    src={images.advanced_shanghai}
                    style={{ height: '41px', marginTop: 12, display: 'block' }}
                  />
                  <img
                    src={images.protein_shanghai}
                    style={{
                      height: '41px',
                      margin: '8px 0',
                      display: 'block',
                    }}
                  />
                  <img
                    src={images.university_shanghai}
                    style={{ height: '41px', display: 'block' }}
                  />
                </div>
              </Col>
              <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                <div>
                  <div className={styles.item_box_title}>
                    PDB China{' '}
                    <a
                      className={styles.title_links}
                      href="https://doi.org/10.1107/S2059798323006381"
                      target="_blank"
                    >
                      (citation)
                    </a>
                    <br />
                    is supported by
                  </div>
                  <img
                    src={images.huawei}
                    style={{
                      height: '28px',
                      margin: '12px 0',
                      display: 'block',
                    }}
                  />
                  <img
                    src={images.longtian}
                    style={{ height: '28px', display: 'block' }}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className={styles.copyRight}>
        CopyRight © 2013-2023 PDBC. All Rights Reserved.
      </div>
    </div>
  );
};
