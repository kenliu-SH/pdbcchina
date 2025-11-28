import { EMenus, NHome, RSetState } from '@/common/action';
import { convertToAbsoluteUrl } from '@/utils/convertToAbsoluteUrl';
import { effect, reducer, useConnect } from '@/utils/dva17';
import { getLocalDesc, getLocalName } from '@/utils/utils';
import { Col, Row } from 'antd';
import { find } from 'lodash';
import { useEffect, useState } from 'react';
import styles from './index.less';

export default () => {
  const { menuBar, current } = useConnect(NHome);
  const [items, setItems]: any = useState([]);
  const [currentName, setCurrentName] = useState(null);
  useEffect(() => {
    effect(NHome, EMenus);
  }, []);
  useEffect(() => {
    if (menuBar && menuBar.length !== 0 && !current) {
      setCurrentName(menuBar[0]?.option?.name);
      reducer(NHome, RSetState, { current: menuBar[0].optionId });
    }
  }, [menuBar]);
  useEffect(() => {
    if (current && menuBar) {
      const item = find(menuBar, { optionId: Number(current) });
      setCurrentName(item?.name);
      setItems(item?.navBarItems.concat());
    }
  }, [current, menuBar]);
  return (
    <div className={styles.indexMenu}>
      <Row>
        <Col
          xxl={5}
          xl={5}
          lg={5}
          md={24}
          sm={24}
          xs={24}
          className={styles.left_category}
        >
          {menuBar?.map((vo: any, index: number) => {
            return (
              <div
                key={index}
                className={[
                  styles.category_item,
                  current == vo.optionId ? styles.carousel_item_active : '',
                ].join(' ')}
                onClick={() => {
                  reducer(NHome, RSetState, { current: vo.optionId });
                }}
              >
                {vo.icon && (
                  <i
                    className={[
                      `icon iconfont icon-${vo.icon}`,
                      styles.category_icon,
                      current == vo.optionId ? styles.category_icon_active : '',
                    ].join(' ')}
                  />
                )}
                {/* {vo.icon && (
                  <svg
                    className={[
                      `icon`,
                      styles.category_icon,
                      current == vo.optionId ? styles.category_icon_active : '',
                    ].join(' ')}
                    aria-hidden="true"
                  >
                    <use xlinkHref={`#icon-${vo.icon}`}></use>
                  </svg>
                )} */}
                <div className={styles.category_name}>{getLocalName(vo)}</div>
              </div>
            );
          })}
        </Col>
        <Col
          xxl={19}
          xl={19}
          lg={19}
          md={24}
          sm={24}
          xs={24}
          className={styles.right_children_list}
        >
          {current && currentName !== 'Deposit' ? (
            <Row gutter={[24, 24]} className={styles.children_list_inline}>
              {items?.map((vo: any, index: number) => {
                return (
                  <Col
                    key={index}
                    xxl={12}
                    xl={12}
                    lg={12}
                    md={12}
                    sm={24}
                    xs={24}
                    className={styles.list_inline_item}
                  >
                    {vo.imgUrl ? (
                      <img
                        src={vo.imgUrl}
                        className={styles.inline_item_icon}
                      />
                    ) : (
                      <i
                        className={[
                          `icon iconfont icon-${vo.icon}`,
                          styles.itemIconFont,
                        ].join(' ')}
                      />
                    )}
                    <div>
                      <div className={styles.children_item_title}>
                        {getLocalName(vo)}
                      </div>
                      <div className={styles.children_item_desc}>
                        <a
                          href={
                            vo.isBuilding
                              ? `#/construction?url=${encodeURIComponent(
                                  vo.buildingLinkUrl,
                                )}`
                              : convertToAbsoluteUrl(vo.linkUrl)
                          }
                          target="_blank"
                          referrerPolicy="no-referrer"
                        >
                          {getLocalDesc(vo)}
                        </a>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          ) : (
            <Row gutter={24}>
              {items.map((vo: any, index: number) => {
                return (
                  <Col
                    xxl={6}
                    xl={6}
                    lg={12}
                    md={12}
                    sm={24}
                    xs={24}
                    key={index}
                  >
                    <div className={styles.listItem_header}>
                      {vo.imgUrl ? (
                        <img className={styles.header_icon} src={vo.imgUrl} />
                      ) : (
                        <i
                          className={[
                            `icon iconfont icon-${vo.icon}`,
                            styles.itemIconFont,
                          ].join(' ')}
                        />
                      )}
                      <div>{getLocalName(vo)}</div>
                    </div>
                    <div className={styles.listItem_children}>
                      {vo.menuBarItems?.map((vv: any, vi: number) => {
                        return (
                          <div
                            key={vi}
                            className={styles.children_item}
                            style={!vv?.name ? { marginBottom: 8 } : {}}
                          >
                            {vv?.name && (
                              <div className={styles.children_item_title}>
                                {getLocalName(vv)}
                              </div>
                            )}
                            <a
                              className={styles.children_item_desc}
                              href={
                                vv.isBuilding
                                  ? `#/construction?url=${encodeURIComponent(
                                      vv.buildingLinkUrl,
                                    )}`
                                  : convertToAbsoluteUrl(vv.linkUrl)
                              }
                              target="_blank"
                              referrerPolicy="no-referrer"
                            >
                              {getLocalDesc(vv)}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                );
              })}
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
};
