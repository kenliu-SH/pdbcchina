import styles from './index.less';
import type { MenuProps } from 'antd';
import { useMemo, useState } from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
import { history } from 'umi';
import { items } from './items';

type MenuItem = Required<MenuProps>['items'][number];

export default (props: any) => {
  const {
    children,
    location: { pathname },
  } = props;
  const [openKeys, setOpenKeys]: any = useState([]);
  useMemo(() => {
    if (pathname) {
      const keys = [];
      const nameArr = pathname.split('/');
      for (let index = 0; index < nameArr.length; index++) {
        keys.push(nameArr.slice(0, index).join('/'));
      }
      setOpenKeys(keys.concat());
    }
  }, [pathname]);
  const onOpen = (key: string) => {
    const index = openKeys.indexOf(key);
    if (index >= 0) {
      openKeys.splice(index, 1);
    } else {
      openKeys.push(key);
    }
    setOpenKeys(openKeys.concat());
  };
  const DocsMenu = (list: MenuItem[], length: any = null) => {
    return list.map((item: any) => {
      if (!item.children) {
        return (
          <div
            key={item.key}
            className={['global_row_start', styles.children_item].join(' ')}
            style={{ paddingLeft: length && length >= 4 ? '36px' : '' }}
            onClick={() => {
              history.push(item.key);
            }}
          >
            <div className={styles.label}>
              <a>{item.label}</a>
            </div>
            {pathname === item.key && (
              <a>
                <i
                  className="icon iconfont icon-jiantou3"
                  style={{ fontSize: '12px', fontWeight: 'bolder' }}
                />
              </a>
            )}
          </div>
        );
      }
      const keyObj: any = item.key.split('/');
      return (
        <div className={styles.menu_item} key={item.key}>
          <div
            className={['global_row_space', styles.item_name].join(' ')}
            style={{ paddingLeft: keyObj?.length >= 4 ? '18px' : '' }}
            onClick={() => {
              onOpen(item.key);
            }}
          >
            <span>{item.label}</span>
            <CaretDownOutlined
              className={
                openKeys.includes(item.key) ? styles.icon_open_active : ''
              }
            />
          </div>
          {openKeys.includes(item.key) && (
            <div className={styles.children_list}>
              {item.children ? DocsMenu(item.children, keyObj.length) : null}
            </div>
          )}
        </div>
      );
    });
  };
  return (
    <div className={styles.doc_contain}>
      <div className={styles.doc_menu}>
        <div className={styles.menu_title}>Documentation</div>
        {DocsMenu(items)}
      </div>
      <div className={styles.doc_info}>{children}</div>
    </div>
  );
};
