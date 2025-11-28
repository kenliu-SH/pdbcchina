import { effect, useConnect, useLoading } from '@/utils/dva17';
import styles from './styles.less';
import { EBatchCollect, EGet, NCollect } from '@/common/action';
import { useEffect, useState } from 'react';
import { Spin, Pagination, Space, Radio, Button, Modal } from 'antd';
import PdbEntry from '@/components/PdbEntry';
import images from '@/assets/images';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { downPdbFile } from '@/utils/utils';

export default () => {
  const { collectList } = useConnect(NCollect);
  const loading = useLoading(NCollect, EGet).loading;
  const [downLoading, setDownLoading] = useState(false);
  const [radioType, setRadioType] = useState(0);
  const [selected, setSelected] = useState([]);
  const fetchList = (page: number, pageSize: number) => {
    effect(NCollect, EGet, { page, pageSize });
  };
  useEffect(() => {
    fetchList(1, 10);
  }, []);
  //下载
  const onDownload = async () => {
    const payload = {
      PIDBS: [],
      type: 'PDB',
    };
    if (radioType === 0) {
      payload.PIDBS = collectList?.rows?.map((vv: any) => {
        return vv.structureSummaryVO?.entityId;
      });
    } else {
      payload.PIDBS = selected;
    }
    try {
      setDownLoading(true);
      await downPdbFile(payload);
      setDownLoading(false);
    } catch (error: any) {
      setDownLoading(false);
    }
  };
  //取消收藏
  const onUnCollect = () => {
    let collects: any = [];
    if (radioType === 0) {
      collects = collectList?.rows?.map((vv: any) => {
        return { entryId: vv.structureSummaryVO?.entityId };
      });
    } else {
      collects = selected.map((vv: any) => {
        return { entryId: vv };
      });
    }
    Modal.confirm({
      title: 'Prompt',
      content:
        radioType === 0
          ? 'Are you sure to cancel the collection of all PDB entries?'
          : 'Are you sure to cancel the selected PDB entry from favorites?',
      onOk: async () => {
        effect(NCollect, EBatchCollect, { collects }).then(() => {
          const { page, pageSize } = collectList.pagination;
          fetchList(page, pageSize);
        });
      },
    });
  };
  return (
    <Spin spinning={loading}>
      {collectList && collectList.rows.length !== 0 ? (
        <>
          <div className={styles.collect_line}>
            <strong>My Collection</strong>
            <Space>
              <Radio.Group
                size="small"
                value={radioType}
                onChange={({ target: { value } }) => {
                  setRadioType(value);
                }}
              >
                <Radio value={0}>All</Radio>
                <Radio value={1}>Selected</Radio>
              </Radio.Group>
              <Button
                size="small"
                type="primary"
                icon={<CloudDownloadOutlined />}
                onClick={onDownload}
                loading={downLoading}
              >
                Download
              </Button>
              <Button onClick={onUnCollect} size="small">
                unstart
              </Button>
            </Space>
          </div>
          {collectList.rows.map((item: any) => {
            item.isCollect = true;
            return (
              <PdbEntry
                key={item.id}
                item={item}
                checkType={radioType}
                checkList={selected}
                setSelected={setSelected}
                fetch={() => {
                  const { page, pageSize } = collectList.pagination;
                  fetchList(page, pageSize);
                }}
              />
            );
          })}
          <div className={styles.pagination}>
            <Pagination
              showQuickJumper
              showSizeChanger
              size="small"
              total={collectList?.pagination?.count}
              current={collectList?.pagination?.page || 1}
              pageSize={collectList?.pagination?.pageSize || 10}
              onChange={(page, pageSize) => {
                fetchList(page, pageSize);
              }}
            />
          </div>
        </>
      ) : (
        <div className={'empty_content'}>
          <img src={images.iconEmpty} />
        </div>
      )}
    </Spin>
  );
};
