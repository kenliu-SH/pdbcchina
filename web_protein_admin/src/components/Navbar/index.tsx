import { useConnect } from '@/utils/dva17';
import styles from './index.less';
import { Popover, Row, Col, Modal, Radio } from 'antd';
import { useState, useEffect } from 'react';
import { getLocale } from '@/utils/utils';
import { effect } from '@/utils/dva17';
import { EGet, NNavigation } from '@/common/action';

export default (props: any) => {
  const { open, current } = props;
  const { navBar } = useConnect(NNavigation);
  const [locale, setLocale] = useState('en-US');
  const [openStatus, setOpenStatus]: any = useState(false);
  useEffect(() => {
    effect(NNavigation, EGet);
    setOpenStatus(current);
  }, [open]);
  const navChildren = (list: any, type: any) => {
    if (type === 'Deposit') {
      return (
        <div className={styles.children_desposit}>
          <Row gutter={[16, 16]}>
            {list.map((vo: any, index: number) => {
              const { navBarItems } = vo;
              return (
                <Col span={6} key={index}>
                  <strong className={styles.children_title}>{getLocale(vo, locale)}</strong>
                  {navBarItems && navBarItems.length !== 0 && (
                    <div>{navChildren(vo.navBarItems, null)}</div>
                  )}
                </Col>
              );
            })}
          </Row>
        </div>
      );
    }
    return list.map((vo: any, index: number) => {
      const { navBarItems } = vo;
      return (
        <div key={index}>
          {vo.state === 0 ? (
            <a
              key={vo.id}
              className={styles.nav_children_item}
              style={{ fontWeight: vo.type === 0 ? 500 : 'normal' }}
              href={vo.linkUrl}
            >
              {getLocale(vo, locale)}
            </a>
          ) : (
            <a key={vo.id} className={styles.nav_children_item} href={vo.linkUrl}>
              <img src={vo.imgUrl} className={styles.children_item_img} />
            </a>
          )}
          {navBarItems && navBarItems.length !== 0 && (
            <div className={styles.nav_children_empty}>{navChildren(navBarItems, null)}</div>
          )}
        </div>
      );
    });
  };
  return (
    <Modal {...props} width={1100}>
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
      <div className={styles.preview_contain}>
        <div className={[styles.navbar_contain].join(' ')}>
          {navBar?.map((item: any, index: number) => {
            const { navBarItems } = item;
            return (
              <Popover
                getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
                overlayClassName={styles.nav_popover}
                key={index}
                trigger={['click', 'hover']}
                placement="bottomLeft"
                content={navChildren(navBarItems, item.name)}
                open={openStatus && openStatus === item.id}
                onOpenChange={() => {
                  setOpenStatus(openStatus === item.id ? false : item.id);
                }}
              >
                <div
                  className={[
                    styles.nav_item,
                    openStatus && openStatus === item.id ? styles.nav_item_active : '',
                  ].join(' ')}
                >
                  <span>{getLocale(item, locale)}</span>
                  <i
                    className={['icon iconfont icon-mianxingxiajiantou', styles.iconArrow].join(
                      ' ',
                    )}
                  />
                </div>
              </Popover>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};
