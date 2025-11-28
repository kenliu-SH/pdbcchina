import { Dropdown, Spin } from 'antd';
import styles from './index.less';
import { CaretDownOutlined } from '@ant-design/icons';
import { useConnect, useLoading, effect } from '@/utils/dva17';
import { EOptions, NDownload } from '@/common/action';
import config from '@/common/config';
import { useEffect } from 'react';

export default ({ id }: any) => {
  const { displayOpt, downOpt } = useConnect(NDownload);
  const loading = useLoading(NDownload, EOptions).loading;
  useEffect(() => {
    if (id && (displayOpt.length === 0 || downOpt.length === 0)) {
      effect(NDownload, EOptions, { id });
    }
  }, [id, displayOpt, downOpt]);
  const onShow = (key: string) => {
    window.open(config.SERVER_HOME + `file/v2/show/${id}/${key}`);
  };
  const onDownload = ({ keyPath }: any) => {
    console.log('keyPath: ', keyPath);
    if (keyPath.length === 1) {
      window.open(config.SERVER_HOME + `file/v2/down/${id}/${keyPath[0]}`);
    } else {
      window.open(
        config.SERVER_HOME +
          `file/v2/down/${id}/${keyPath[1]}?filePath=${keyPath[0]}`,
      );
    }
  };
  return (
    <div className={styles.download_dropdown}>
      <Spin spinning={loading}>
        <div className={styles.download_dropdown_button}>
          <Dropdown
            menu={{
              items: displayOpt?.map((vo: any) => {
                return {
                  label: vo.name,
                  key: vo.name,
                  disabled: !vo.isClick,
                };
              }),
              onClick: async ({ key }: any) => {
                onShow(key);
              },
            }}
          >
            <a className={[styles.btn, styles.display].join(' ')}>
              <i className="icon iconfont icon-24gf-fileEmpty" />
              Display Files
              <CaretDownOutlined />
            </a>
          </Dropdown>
          <Dropdown
            menu={{
              items: downOpt?.map((vo: any) => {
                const item: any = {
                  label: vo.name,
                  key: vo.name,
                  disabled: !vo.isClick,
                };
                if (
                  vo.files &&
                  vo.files.length > 0 &&
                  vo.name.indexOf('EM') >= 0
                ) {
                  item.children = vo.files.map((vo: any) => {
                    return {
                      label: vo,
                      key: vo,
                    };
                  });
                }
                return item;
              }),
              onClick: async (item: any) => {
                console.log('item: ', item);
                onDownload(item);
              },
            }}
          >
            <a className={[styles.btn, styles.download].join(' ')}>
              <i className="icon iconfont icon-download" />
              Download Files
              <CaretDownOutlined />
            </a>
          </Dropdown>
        </div>
      </Spin>
    </div>
  );
};
