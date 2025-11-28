import { NHome } from '@/common/action';
import { useConnect } from '@/utils/dva17';
import styles from './index.less';
import { Popover, Row, Col } from 'antd';
import { getLocalName } from '@/utils/utils';
import { convertToAbsoluteUrl } from '@/utils/convertToAbsoluteUrl';

export default () => {
  const { navBar } = useConnect(NHome);
  const navChildren = (list: any, type: any) => {
    if (type === 'Deposit') {
      return (
        <div className={styles.children_desposit}>
          <Row gutter={[16, 16]}>
            {list.map((vo: any, index: number) => {
              const { navBarItems } = vo;
              return (
                <Col span={6} key={index}>
                  <strong className={styles.children_title}>
                    <a>{getLocalName(vo)}</a>
                  </strong>
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
          <a
            key={vo.id}
            className={styles.nav_children_item}
            style={{ fontWeight: vo.type === 0 ? 500 : 'normal' }}
            href={
              vo.isBuilding
                ? `#/construction?url=${encodeURIComponent(vo.buildingLinkUrl)}`
                : convertToAbsoluteUrl(vo.linkUrl)
            }
          >
            {vo.state === 0 ? (
              getLocalName(vo)
            ) : (
              <img src={vo.imgUrl} className={styles.children_item_img} />
            )}
          </a>
          {navBarItems && navBarItems.length !== 0 && (
            <div className={styles.nav_children_empty}>
              {navChildren(navBarItems, null)}
            </div>
          )}
        </div>
      );
    });
  };
  return (
    <div className={[styles.navbar_contain].join(' ')}>
      {navBar?.map((item: any, index: number) => {
        const { navBarItems } = item;
        return (
          <Popover
            overlayClassName={styles.nav_popover}
            key={index}
            content={navChildren(navBarItems, item?.name)}
          >
            <div className={styles.nav_item}>
              <span>{getLocalName(item)}</span>
              <i
                className={[
                  'icon iconfont icon-mianxingxiajiantou',
                  styles.iconArrow,
                ].join(' ')}
              />
            </div>
          </Popover>
        );
      })}
    </div>
  );
};
