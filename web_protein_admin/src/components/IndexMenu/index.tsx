import styles from './index.less';
import { Row, Col, Radio } from 'antd';
import { useEffect, useState } from 'react';
import { effect, useConnect } from '@/utils/dva17';
import { EGet, NMenuBar, NOptions } from '@/common/action';
import { getLocale, getDescLocale } from '@/utils/utils';

export default ({ currentStep, stepName }: any) => {
  const { dataSource } = useConnect(NMenuBar);
  const { optionsMenu } = useConnect(NOptions);
  const [current, setCurrent] = useState(currentStep);
  const [currentName, setCurrentName] = useState(stepName);
  const [locale, setLocale] = useState('en-US');
  useEffect(() => {
    effect(NMenuBar, EGet, { optionId: current });
  }, [current]);
  return (
    <>
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
      <div className={styles.indexMenu}>
        <Row>
          <Col span={5} className={styles.left_category}>
            {optionsMenu?.map((vo: any, index: number) => {
              return (
                <div
                  key={index}
                  className={[
                    styles.category_item,
                    current === vo.id ? styles.carousel_item_active : '',
                  ].join(' ')}
                  onClick={() => {
                    setCurrent(vo.id);
                    setCurrentName(vo.name);
                  }}
                >
                  {vo.icon && (
                    <i
                      className={[
                        `iconfont icon-${vo.icon}`,
                        styles.category_icon,
                        current === vo.id ? styles.category_icon_active : '',
                      ].join(' ')}
                    />
                  )}
                  <div className={styles.category_name}>{getLocale(vo, locale)}</div>
                </div>
              );
            })}
          </Col>
          <Col span={19} className={styles.right_children_list}>
            {current && currentName !== 'Deposit' ? (
              <Row gutter={[24, 24]} className={styles.children_list_inline}>
                {dataSource?.map((vo: any, index: number) => {
                  return (
                    <Col key={index} span={12} className={styles.list_inline_item}>
                      {vo.imgUrl ? (
                        <img className={styles.inline_item_icon} src={vo.imgUrl} />
                      ) : (
                        <i
                          className={[`iconfont icon-${vo.icon}`, styles.itemIconFont].join(' ')}
                        />
                      )}
                      <div>
                        <div className={styles.children_item_title}>{getLocale(vo, locale)}</div>
                        <div className={styles.children_item_desc}>
                          <a href={vo.linkUrl} target="_blank" rel="noreferrer">
                            {getDescLocale(vo, locale)}
                          </a>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            ) : (
              <Row gutter={24}>
                {dataSource.map((vo: any, index: number) => {
                  return (
                    <Col span={6} key={index}>
                      <div className={styles.listItem_header}>
                        {vo.imgUrl ? (
                          <img className={styles.header_icon} src={vo.imgUrl} />
                        ) : (
                          <i
                            className={[`iconfont icon-${vo.icon}`, styles.itemIconFont].join(' ')}
                          />
                        )}
                        <div>{getLocale(vo, locale)}</div>
                      </div>
                      <div className={styles.listItem_children}>
                        {vo.menuBarItems?.map((vv: any, vi: number) => {
                          return (
                            <div
                              key={vi}
                              className={styles.children_item}
                              style={!vv.name ? { marginBottom: 8 } : {}}
                            >
                              {vv.name && (
                                <div className={styles.children_item_title}>
                                  {getLocale(vv, locale)}
                                </div>
                              )}
                              <a
                                className={styles.children_item_desc}
                                href={vv.linkUrl}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {getDescLocale(vv, locale)}
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
    </>
  );
};
