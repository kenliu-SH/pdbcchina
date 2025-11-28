import { NHome } from '@/common/action';
import { useConnect } from '@/utils/dva17';
import styles from './styles.less';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { getLocalName } from '@/utils/utils';
import { convertToAbsoluteUrl } from '@/utils/convertToAbsoluteUrl';

export default () => {
  const { navBar } = useConnect(NHome);
  const [openKey, setOpenKey]: any = useState(null);
  const navChildren = (list: any) => {
    return list?.map((vo: any, key: number) => (
      <div key={key}>
        <a
          className={styles.navbar_children_item}
          href={
            vo.isBuilding
              ? `/construction?url=${encodeURIComponent(vo.buildingLinkUrl)}`
              : convertToAbsoluteUrl(vo.linkUrl)
          }
        >
          {vo.state === 0 ? getLocalName(vo) : <img src={vo.imgUrl} />}
        </a>
        {vo.navBarItems && vo.navBarItems.length !== 0 && (
          <div className={styles.nav_children_empty}>
            {navChildren(vo.navBarItems)}
          </div>
        )}
      </div>
    ));
  };
  return (
    <div className={styles.navbar_mobile_contain}>
      {navBar?.map((item: any, index: number) => {
        return (
          <div key={index} className={styles.navbar_item}>
            <div
              className={styles.navbar_item_title}
              onClick={() => {
                setOpenKey(openKey === index ? null : index);
              }}
            >
              <span className={styles.title}>{getLocalName(item)}</span>
              <DownOutlined
                className={[
                  styles.name_icon,
                  openKey === index ? styles.name_icon_active : '',
                ].join(' ')}
              />
            </div>
            {openKey === index && (
              <>
                {index === 0 ? (
                  <div className={styles.navbar_children}>
                    {item.navBarItems?.map((vo: any, key: number) => (
                      <div key={key}>
                        <strong className={styles.desposit_title}>
                          {getLocalName(vo)}
                        </strong>
                        {vo.navBarItems?.map((vv: any, i: number) => (
                          <a
                            key={i}
                            className={styles.desposit_item}
                            href={
                              vv.isBuilding
                                ? `/construction?url=${encodeURIComponent(
                                    vv.buildingLinkUrl,
                                  )}`
                                : convertToAbsoluteUrl(vo.linkUrl)
                            }
                          >
                            {getLocalName(vv)}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.navbar_children}>
                    {navChildren(item.navBarItems || [])}
                  </div>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
