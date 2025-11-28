import {
  EAdvanced,
  EntryIDs,
  NHome,
  NSearch,
  RSetState,
} from '@/common/action';
import { LIST_VIEW_TYPE } from '@/common/enum';
import {
  effect,
  reducer,
  requestPost,
  useConnect,
  useLoading,
} from '@/utils/dva17';
import { downPdbFile } from '@/utils/utils';
import { Button, Radio, Select, Space, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'umi';
import styles from './index.less';

import PdbEntry from '@/components/PdbEntry'; //条目详情
import AdvancedSearch from './components/AdvancedSearch'; //高级检索
import Pagination from './components/Pagination'; //分页组件
import dayjs from 'dayjs';
import { flatten } from 'lodash';
import CountMenu from './components/CountMenu';

export default () => {
  const location = useLocation();
  const history = useHistory();
  const currentQueryParams: any = new URLSearchParams(location.search);
  const newFlag = currentQueryParams?.get('newFlag');
  const searchParams = currentQueryParams.get('query');
  const { baseInfo } = useConnect(NHome);
  const { advancedList, entryIDsList } = useConnect(NSearch);
  const spinning: any = useLoading(NSearch, EAdvanced).loading;
  const idsLoading = useLoading(NSearch, EntryIDs).loading;
  const [viewType, setViewType] = useState(LIST_VIEW_TYPE['list-outlined']);
  const [downLoading, setDownLoading] = useState(false);
  const [radioType, setRadioType] = useState(0);
  const [selected, setSelected] = useState([]);
  const [pageOpt, setPageOpt] = useState({ page: 1, pageSize: 10 });
  const [exptlMethod, setExptlMethod] = useState([]);
  const [mode, setMode] = useState(null);
  useEffect(() => {
    if (mode) {
      effect(NSearch, EntryIDs, {
        query: searchParams && JSON.parse(searchParams),
      });
    }
  }, [mode]);
  useEffect(() => {
    if (newFlag === '1' && baseInfo) {
      history.replace({
        pathname: location.pathname,
        search: `?query=${encodeURIComponent(
          JSON.stringify({
            type: 'group',
            logical_operator: 'and',
            nodes: [
              {
                type: 'group',
                nodes: [
                  {
                    type: 'group',
                    nodes: [
                      {
                        type: 'terminal',
                        service: 'text',
                        parameters: {
                          type: 'item',
                          attribute: 'pdbc_entry.releasedDate',
                          name: 'Release Date',
                          placeholder:
                            'Enter a date between 5/18/1976 and 3/14/2023',
                          header_index: 1,
                          isSupport: true,
                          index: '1-4',
                          disabled: false,
                          negation: false,
                          operator: 'equals',
                          value:
                            baseInfo?.lastUpdate &&
                            dayjs(baseInfo.lastUpdate).format('YYYY-MM-DD'),
                        },
                        uiAttrMap: {
                          context: ['default-match'],
                          description: 'The entry initial release date.',
                          enum_len: 0,
                          enum_annotated_len: 0,
                          examples: ['2020-01-10', '2018-01-23'],
                          examples_len: 2,
                          format: 'date',
                          has_desc: 'y',
                          search_group_name: 'Structure Details',
                          search_group_priority: 25,
                          selector: true,
                          type: 'string',
                          display_name: 'Release Date',
                          min: '5/18/1976',
                          max: '3/14/2023',
                          is_iterable: false,
                          operators: [
                            'equals',
                            'greater',
                            'greater_or_equal',
                            'less',
                            'less_or_equal',
                            'range_upper_excl',
                            'range_upper_incl',
                            'last_seven_days_range',
                            'last_thirty_days_range',
                            'exists',
                          ],
                          default_operator: 'greater',
                          useIn: false,
                          ui: true,
                        },
                      },
                    ],
                    logical_operator: 'and',
                  },
                ],
                logical_operator: 'and',
                label: 'text',
              },
            ],
          }),
        )}`,
      });
    }
  }, [newFlag, baseInfo]);
  //分页
  const onPagination = (page: number, pageSize: any) => {
    setPageOpt(Object.assign({}, { page, pageSize }));
  };
  //下载
  const onDownload = async () => {
    const payload = {
      PIDBS: [],
      type: 'PDB',
    };
    if (radioType === 0) {
      payload.PIDBS = advancedList?.rows?.map((vv: any) => {
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
  //选择以Id的形式展示检索列表
  const onMode = (values: any) => {
    setMode(values);
  };
  //ids保存至本地
  const onDownloadIDs = () => {
    const textToSave = entryIDsList.join(',');
    // 创建一个Blob对象
    const blob = new Blob([textToSave], { type: 'text/plain' });
    // 创建一个a标签
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    // 指定文件名
    a.download =
      'pdb_ids_' +
      dayjs().format('YYYYMMDD') +
      flatten(entryIDsList).length +
      '.txt';
    // 将a标签添加到文档中
    document.body.appendChild(a);
    // 模拟点击a标签以触发下载
    a.click();
    // 将a标签从文档中移除
    document.body.removeChild(a);
  };
  return (
    <div className={styles.search_contain}>
      <AdvancedSearch pageOpt={pageOpt} searchParams={searchParams} />
      {((searchParams && JSON.stringify(searchParams) !== '{}') ||
        advancedList) && (
        <>
          <div className={styles.search_summary}>
            <a>
              <strong>Search Summary&nbsp;|&nbsp;</strong>
            </a>
            This query matches &nbsp;
            <a>{advancedList?.total || 0}</a>&nbsp;Structures
          </div>
          <div className={styles.grid_contain}>
            {/* <CountMenu
              query={searchParams}
              exptlMethod={exptlMethod}
              setExptlMethod={setExptlMethod}
            /> */}
            <div className={styles.gird_right}>
              <Spin spinning={spinning || idsLoading}>
                <div className={styles.header_action}>
                  <Radio.Group
                    size="small"
                    value={viewType}
                    onChange={({ target: { value } }) => {
                      setViewType(value);
                    }}
                  >
                    <Radio.Button value={LIST_VIEW_TYPE['list-outlined']}>
                      <i className="icon iconfont icon-List-outlined" />
                    </Radio.Button>
                    <Radio.Button value={LIST_VIEW_TYPE['grid']}>
                      <i className="icon iconfont icon-more-grid-big" />
                    </Radio.Button>
                    <Radio.Button value={LIST_VIEW_TYPE['list']}>
                      <i className="icon iconfont icon-3list" />
                    </Radio.Button>
                  </Radio.Group>
                  <Select
                    size="small"
                    className={styles.selectItem}
                    value={mode}
                    placeholder="Tabular Report"
                    style={{ width: '175px' }}
                    options={[{ label: 'Entry IDs', value: 'Entry IDs' }]}
                    allowClear
                    onSelect={onMode}
                    onClear={() => {
                      setMode(null);
                    }}
                  />
                  <div>
                    {mode && (
                      <Space>
                        <Button size="small" onClick={onDownloadIDs}>
                          Download IDs
                        </Button>
                        <Button
                          size="small"
                          onClick={() => {
                            setMode(null);
                            reducer(NSearch, RSetState, {
                              entryIDsList: null,
                            });
                          }}
                        >
                          Return to Search Results
                        </Button>
                      </Space>
                    )}
                  </div>
                  {/*<div className="global_row_start">
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
                    &nbsp;&nbsp;
                    <Button
                      size="small"
                      type="primary"
                      icon={<CloudDownloadOutlined />}
                      onClick={onDownload}
                      loading={downLoading}
                    >
                      Download
                    </Button>
                  </div> */}
                </div>
                {!mode ? (
                  <>
                    {advancedList && advancedList.rows?.length !== 0 && (
                      <Pagination
                        advancedList={advancedList}
                        onPagination={onPagination}
                      />
                    )}
                    <div
                      className={
                        viewType === LIST_VIEW_TYPE['grid']
                          ? styles.grid_list
                          : ''
                      }
                    >
                      {advancedList?.rows?.map((item: any) => {
                        return (
                          <PdbEntry
                            key={item.id}
                            item={item}
                            viewType={viewType}
                            checkType={radioType}
                            checkList={selected}
                            setSelected={setSelected}
                          />
                        );
                      })}
                    </div>
                    {advancedList && advancedList.rows?.length !== 0 && (
                      <Pagination
                        advancedList={advancedList}
                        onPagination={onPagination}
                      />
                    )}
                  </>
                ) : (
                  <>
                    {/* {entryIDsList?.map((vo: any, i: number) => (
                      <span key={i} style={{ margin: '0 6px 6px 0' }}>
                        {vo}
                      </span>
                    ))} */}
                    <div style={{ marginTop: 12 }}>
                      {entryIDsList?.map((arr: any, index: number) => {
                        return (
                          <div
                            key={index}
                            style={{
                              border: '1px solid rgba(0, 0, 0, 0.08)',
                              padding: '5px',
                              marginBottom: 6,
                              fontSize: 12,
                              color: '#333',
                            }}
                          >
                            {arr?.map((vo: any) => vo).join(', ')}
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </Spin>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
