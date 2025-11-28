import { EAdvanced, EQueryParams, NSearch } from '@/common/action';
import config from '@/common/config';
import { OPERATOR, SUBSCRIBE_CHANNEL } from '@/common/enum';
import { effect, useConnect, useLoading } from '@/utils/dva17';
import {
  CaretDownOutlined,
  CloseOutlined,
  CopyOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Input,
  message,
  Modal,
  Select,
  Tooltip,
  TreeSelect,
} from 'antd';
import copy from 'copy-to-clipboard';
import dayjs from 'dayjs';
import { filter, find } from 'lodash';
import { useEffect, useState } from 'react';
import { history, useIntl, useModel } from 'umi';
import styles from './styles.less';

export default ({ pageOpt, exptlMethod }: any) => {
  const intl = useIntl();
  const { location }: any = history;
  const { initialState } = useModel('@@initialState');
  const { currentUser }: any = initialState || {};
  const { queryParams } = useConnect(NSearch);
  const queryLoading = useLoading(NSearch, EAdvanced).loading;
  const [bodyOpen, setBodyOpen] = useState(true);
  const [optOpen, setOptOpen]: [any, Function] = useState([1]);
  const [queryOpt, setQueryOpt]: any = useState([
    {
      name: 'Full Text',
      descript: (
        <div>
          <p>
            Use Full Text Search to search across all available text attributes.
          </p>
          <br />
          <p>
            The interface allows for the creation of composite boolean queries
            by combining and grouping attributes using boolean "AND", "OR",
            and"NOT" operators.
          </p>
        </div>
      ),
      queryJson: {
        label: 'full_text',
        type: 'group',
        logical_operator: 'and',
        nodes: [
          {
            type: 'group',
            logical_operator: 'and',
            nodes: [
              {
                type: 'terminal',
                service: 'full_text',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'Structure Attributes',
      value: 'structure',
      descript: (
        <div>
          <p>
            Use Structure Attribute Search to search attributes specific to
            biological macromolecular structures.
          </p>
          <br />
          <p>
            The interface allows for the creation of composite boolean queries
            by combining and grouping attributes using boolean "AND", "OR", and
            "NOT" operators.
          </p>
        </div>
      ),
      queryJson: {
        label: 'text',
        type: 'group',
        logical_operator: 'and',
        nodes: [
          {
            type: 'group',
            logical_operator: 'and',
            nodes: [
              {
                type: 'terminal',
                service: 'text',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'Chemical Attributes',
      value: 'chemical',
      descript: (
        <div>
          <p>
            Use Chemical Search to search attributes specific to chemical
            components and biologically interesting peptide-like antibiotic and
            inhibitor molecules.
          </p>
          <br />
          <p>
            The interface allows for the creation of composite boolean queries
            by combining and grouping attributes using boolean "AND", "OR", and
            "NOT" operators.
          </p>
        </div>
      ),
      queryJson: {
        type: 'group',
        logical_operator: 'and',
        nodes: [
          {
            type: 'terminal',
            service: 'text',
            logical_operator: 'and',
            nodes: [
              {
                type: 'terminal',
                service: 'text',
              },
            ],
          },
        ],
      },
    },
    // {
    //   name: 'Sequence Similarity',
    //   queryJson: {
    //     type: 'group',
    //     logical_operator: 'and',
    //     nodes: [
    //       {
    //         type: 'terminal',
    //         service: 'text',
    //         logical_operator: 'and',
    //         nodes: [
    //           {
    //             type: 'terminal',
    //             service: 'text',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
    // {
    //   name: 'Sequence Motif',
    //   queryJson: {
    //     type: 'group',
    //     logical_operator: 'and',
    //     nodes: [
    //       {
    //         type: 'terminal',
    //         service: 'text',
    //         logical_operator: 'and',
    //         nodes: [
    //           {
    //             type: 'terminal',
    //             service: 'text',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
    // {
    //   name: 'Structure Similarity',
    //   queryJson: {
    //     type: 'group',
    //     logical_operator: 'and',
    //     nodes: [
    //       {
    //         type: 'terminal',
    //         service: 'text',
    //         logical_operator: 'and',
    //         nodes: [
    //           {
    //             type: 'terminal',
    //             service: 'text',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
    // {
    //   name: 'Structure Motif',
    //   queryJson: {
    //     type: 'group',
    //     logical_operator: 'and',
    //     nodes: [
    //       {
    //         type: 'terminal',
    //         service: 'text',
    //         logical_operator: 'and',
    //         nodes: [
    //           {
    //             type: 'terminal',
    //             service: 'text',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
    // {
    //   name: 'Chemical Similarity',
    //   queryJson: {
    //     type: 'group',
    //     logical_operator: 'and',
    //     nodes: [
    //       {
    //         type: 'terminal',
    //         service: 'text',
    //         logical_operator: 'and',
    //         nodes: [
    //           {
    //             type: 'terminal',
    //             service: 'text',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  ]);
  const [channel, setChannel] = useState(null);
  /**
   * 高级检索请求
   */
  const fetch = async (
    page = 1,
    pageSize = 10,
    query: any,
    exptlMethod: any,
  ) => {
    await effect(NSearch, EAdvanced, {
      page,
      pageSize,
      query,
      exptlMethod: exptlMethod.join(','),
    });
  };
  /**
   * 地址栏query参数解析
   * 发送指定数据格式的请求
   */
  useEffect(() => {
    if (location) {
      const { request } = location.query;
      const { query } =
        (request && JSON.parse(decodeURIComponent(request))) || {};
      console.log('query: ', query);
      const { nodes } = query || {};
      if (nodes) {
        nodes.map((node: any) => {
          const item = find(queryOpt, (vo: any) => {
            return vo.queryJson.label === node.label;
          });
          if (item) item.queryJson = node;
        });
        setQueryOpt(queryOpt.concat());
        fetch(pageOpt.page, pageOpt.pageSize, query, exptlMethod);
      }
    }
  }, [location, pageOpt, exptlMethod]);
  /**
   * 请求检索字段
   */
  useEffect(() => {
    effect(NSearch, EQueryParams);
  }, []);
  /**
   * 开启或关闭高级筛选框
   */
  const onOpenAdvanced = () => {
    setBodyOpen(!bodyOpen);
  };
  /**
   * 开启或关闭某个筛选栏目
   */
  const onOpenOption = (index: number) => {
    if (optOpen.includes(index)) {
      optOpen.splice(optOpen.indexOf(index), 1);
    } else {
      optOpen.push(index);
    }
    setOptOpen(optOpen.concat());
  };
  /**
   * 检索字段选择
   */
  const onSelectField = (
    objKey: any,
    node: any,
    index: number,
    num: number,
    i: number,
  ) => {
    const { uiAttrMap } = queryParams[objKey] || {};
    if (node && uiAttrMap) {
      const attribute: any =
        uiAttrMap[
          node.nested_attribute ? node.nested_attribute : node.attribute
        ];
      queryOpt[index].queryJson.nodes[num].nodes[i].parameters = {
        ...node,
        negation: false,
        operator: attribute?.default_operator,
      };
      queryOpt[index].queryJson.nodes[num].nodes[i].uiAttrMap = attribute;
    } else {
      delete queryOpt[index].queryJson.nodes[num].nodes[i].parameters;
    }
    setQueryOpt(queryOpt.concat());
  };
  /**
   * 检索参数存储
   */
  const onSaveField = (
    value: any,
    index: number,
    num: number,
    i: number,
    fieldKey: string,
  ) => {
    queryOpt[index].queryJson.nodes[num].nodes[i].parameters[fieldKey] = value;
    setQueryOpt(queryOpt.concat());
  };
  /**
   * 展示rss订阅地址
   */
  const onShowRssAddress = async (code: string) => {
    const rssURL = config.SERVER_HOME + 'subscribe/rss/' + code;
    Modal.info({
      title: 'Subscription successful',
      content: (
        <div>
          <h6>Your RSS subscription address is:</h6>
          <a
            onClick={() => {
              copy(rssURL);
              message.success('The RSS subscription address has been copied!');
            }}
          >
            {rssURL}&nbsp;
            <CopyOutlined />
          </a>
        </div>
      ),
    });
  };
  /**
   * 高级检索提交
   */
  const onSearch = async () => {
    const nodeQuery = {
      type: 'group',
      logical_operator: 'and',
      nodes: queryOpt.map((vo: any) => {
        return vo.queryJson;
      }),
    };
    console.log('nodeQuery: ', nodeQuery);
    history.push({
      pathname: '/search',
      query: {
        request: encodeURIComponent(JSON.stringify({ query: nodeQuery })),
      },
    });
    // const { exptlMethod } = query;
    // console.log('======>1223', queryFormat(queryOpt));
    // history.push({
    //   query: { exptlMethod, page, pageSize, query: queryFormat(queryOpt) },
    // });
    // await effect(NSearch, EAdvanced, {
    //   exptlMethod,
    //   page: 1,
    //   pageSize: 10,
    //   query: queryFormat(queryOpt),
    // });
    // if (
    //   channel === SUBSCRIBE_CHANNEL['微信'] &&
    //   !initialState?.currentUser?.openId
    // ) {
    //   Modal.info({
    //     title: 'Prompt',
    //     content:
    //       'Your account has not been linked to WeChat yet. Please click to link!',
    //     okText: 'Go to Bind',
    //     onOk: () => {
    //       history.push('/personal-info');
    //     },
    //   });
    //   return;
    // }
    // if (
    //   channel === SUBSCRIBE_CHANNEL['邮件'] &&
    //   !initialState?.currentUser?.email
    // ) {
    //   Modal.info({
    //     title: 'Prompt',
    //     content:
    //       'Your account has not been bound to an email yet. Please click to go and bind!',
    //     okText: 'Go to Bind',
    //     onOk: () => {
    //       history.push('/personal-info');
    //     },
    //   });
    //   return;
    // }
    // if (channel) {
    //   effect(NSearch, ESubscribe, {
    //     conditionType: 'query',
    //     rule: queryFormat(queryOpt),
    //     channels: {
    //       channel,
    //       config:
    //         channel === SUBSCRIBE_CHANNEL['邮件']
    //           ? { mailAddress: initialState?.currentUser?.email }
    //           : channel === SUBSCRIBE_CHANNEL['微信']
    //           ? { openId: initialState?.currentUser?.openId }
    //           : {},
    //     },
    //   }).then((res: any) => {
    //     if (channel === SUBSCRIBE_CHANNEL['rss']) {
    //       const { code } = res;
    //       onShowRssAddress(code);
    //     } else {
    //       message.success(SUBSCRIBE_CHANNEL_NAME[channel] + '订阅成功');
    //     }
    //   });
    // }
  };
  return (
    <div className={styles.advanced_search_contain}>
      <div className={styles.search_header}>
        <div className={styles.search_header_left} onClick={onOpenAdvanced}>
          <CaretDownOutlined
            className={[
              styles.icon_arrow,
              bodyOpen ? styles.icon_arrow_active : '',
            ].join(' ')}
          />
          &nbsp;
          <span className={styles.header_left_tit}>
            Advanced Search Query Builder
          </span>
          &nbsp;
          <Tooltip
            title={() => (
              <div>
                <p>
                  Use the Query Builder tool to build a new query or to modify
                  an existing query.
                </p>
                <p>
                  Click the &nbsp;
                  <SearchOutlined />
                  &nbsp; button to run the query.
                </p>
                <p>
                  When the &nbsp;
                  <SearchOutlined />
                  &nbsp; icon is green, it indicates that the query may also be
                  run by pressing the "Enter" key.
                </p>
              </div>
            )}
          >
            <i
              className="icon iconfont icon-tishi"
              style={{ verticalAlign: 'bottom' }}
            />
          </Tooltip>
        </div>
        <div className={styles.search_header_right}>
          <a>Help</a>
        </div>
      </div>
      {bodyOpen && (
        <div className={styles.search_body}>
          {queryOpt?.map((item: any, index: number) => {
            const isOpen = optOpen.includes(index);
            const { queryJson } = queryOpt[index];
            const { selectorItems } =
              (item.value && queryParams && queryParams[item.value]) || [];
            const opt: any = filter(selectorItems, { type: 'header' });
            const selectOPT = opt?.map((vo: any) => {
              return {
                ...vo,
                selectable: false,
                children: filter(selectorItems, {
                  header_index: vo.index,
                })?.map((vv: any) => {
                  return {
                    ...vv,
                    disabled: !vv.isSupport,
                  };
                }),
              };
            });
            return (
              <div
                key={index}
                className={[
                  styles.search_body_option,
                  isOpen ? styles.search_body_option_open : '',
                ].join(' ')}
              >
                <div
                  className={[
                    styles.option_name,
                    isOpen ? styles.option_name_active : '',
                  ].join(' ')}
                  onClick={() => {
                    onOpenOption(index);
                  }}
                >
                  <CaretDownOutlined
                    className={[
                      styles.icon_arrow,
                      isOpen ? styles.icon_arrow_active : '',
                    ].join(' ')}
                  />
                  &nbsp;{item?.name}&nbsp;&nbsp;
                  <Tooltip title={() => item.descript} trigger={['hover']}>
                    <i className="icon iconfont icon-tishi" />
                  </Tooltip>
                </div>
                {isOpen && queryJson && (
                  <div className={styles.query_form_content}>
                    {queryJson?.nodes?.map((record: any, num: number) => {
                      return (
                        <table key={num}>
                          <tbody>
                            <tr>
                              <td>
                                <div className={styles.table_place}>
                                  {num > 0 && (
                                    <strong>
                                      {queryJson?.logical_operator?.toUpperCase()}
                                    </strong>
                                  )}
                                </div>
                              </td>
                              <td className={styles.query_form_td}>
                                <div className={styles.query_form}>
                                  {index === 0
                                    ? record.nodes?.map(
                                        (vv: any, i: number) => {
                                          const { parameters } = vv;
                                          return (
                                            <table border={1} key={i}>
                                              <tbody>
                                                <tr>
                                                  <td
                                                    className={
                                                      styles.table_place
                                                    }
                                                  >
                                                    {record.nodes.length > 1 &&
                                                      i !== 0 && (
                                                        <strong>
                                                          {record.logical_operator?.toUpperCase()}
                                                        </strong>
                                                      )}
                                                  </td>
                                                  <td>
                                                    <Input
                                                      size="small"
                                                      placeholder="Enter one or more search terms."
                                                      value={parameters?.value}
                                                      onChange={({
                                                        target: { value },
                                                      }: any) => {
                                                        queryOpt[
                                                          index
                                                        ].queryJson.nodes[
                                                          num
                                                        ].nodes[i].parameters =
                                                          { value };
                                                        setQueryOpt(
                                                          queryOpt.concat(),
                                                        );
                                                      }}
                                                    />
                                                  </td>
                                                  {/* <td
                                                    className={styles.line_btn}
                                                  >
                                                    Count
                                                  </td> */}
                                                  {record.nodes.length > 1 && (
                                                    <td
                                                      className={
                                                        styles.line_btn
                                                      }
                                                      onClick={() => {
                                                        queryOpt[
                                                          index
                                                        ].queryJson.nodes[
                                                          num
                                                        ].nodes.splice(1, 1);
                                                        setQueryOpt(
                                                          queryOpt.concat(),
                                                        );
                                                      }}
                                                    >
                                                      <CloseOutlined />
                                                    </td>
                                                  )}
                                                </tr>
                                              </tbody>
                                            </table>
                                          );
                                        },
                                      )
                                    : record.nodes?.map(
                                        (vv: any, i: number) => {
                                          const { parameters, uiAttrMap } = vv;
                                          return (
                                            <table border={1} key={i}>
                                              <tbody>
                                                <tr>
                                                  <td
                                                    className={
                                                      styles.table_place
                                                    }
                                                  >
                                                    {record.nodes.length > 1 &&
                                                      i !== 0 && (
                                                        <strong>
                                                          {record.logical_operator?.toUpperCase()}
                                                        </strong>
                                                      )}
                                                  </td>
                                                  <td style={{ width: '20vw' }}>
                                                    <TreeSelect
                                                      allowClear
                                                      size="small"
                                                      treeExpandAction="click"
                                                      style={{ width: '20vw' }}
                                                      placeholder="-- Type to filter and/or select an attribute --"
                                                      treeData={selectOPT || []}
                                                      value={parameters?.name}
                                                      fieldNames={{
                                                        label: 'name',
                                                        value: 'name',
                                                      }}
                                                      onSelect={(
                                                        value: string,
                                                        node: any,
                                                      ) => {
                                                        onSelectField(
                                                          item.value,
                                                          node,
                                                          index,
                                                          num,
                                                          i,
                                                        );
                                                      }}
                                                      onClear={() => {
                                                        onSelectField(
                                                          null,
                                                          null,
                                                          index,
                                                          num,
                                                          i,
                                                        );
                                                      }}
                                                    />
                                                  </td>
                                                  {parameters?.negation && (
                                                    <td
                                                      style={{
                                                        width: '38px',
                                                        textAlign: 'center',
                                                      }}
                                                    >
                                                      <strong>NOT</strong>
                                                    </td>
                                                  )}
                                                  <td style={{ width: '8vw' }}>
                                                    {parameters && (
                                                      <Select
                                                        style={{
                                                          width: '8vw',
                                                        }}
                                                        size="small"
                                                        placeholder="enter operator"
                                                        value={
                                                          parameters?.operator
                                                        }
                                                        onSelect={(
                                                          value: string,
                                                        ) => {
                                                          onSaveField(
                                                            value,
                                                            index,
                                                            num,
                                                            i,
                                                            'operator',
                                                          );
                                                        }}
                                                        options={uiAttrMap?.operators?.map(
                                                          (v: string) => {
                                                            return {
                                                              label:
                                                                OPERATOR[v],
                                                              value: v,
                                                            };
                                                          },
                                                        )}
                                                      />
                                                    )}
                                                  </td>
                                                  <td>
                                                    {parameters &&
                                                      parameters.operator !==
                                                        'exists' &&
                                                      (uiAttrMap?.enumeration &&
                                                      uiAttrMap?.enumeration
                                                        .length !== 0 ? (
                                                        <Select
                                                          size="small"
                                                          placeholder={
                                                            parameters?.placeholder
                                                          }
                                                          options={uiAttrMap?.enumeration?.map(
                                                            (vo: any) => {
                                                              return {
                                                                label: vo,
                                                                value: vo,
                                                              };
                                                            },
                                                          )}
                                                          onSelect={(
                                                            value: any,
                                                          ) => {
                                                            onSaveField(
                                                              parameters?.operator ===
                                                                'in'
                                                                ? [value]
                                                                : value,
                                                              index,
                                                              num,
                                                              i,
                                                              'value',
                                                            );
                                                          }}
                                                        />
                                                      ) : uiAttrMap?.format ===
                                                        'date' ? (
                                                        <DatePicker
                                                          size="small"
                                                          style={{
                                                            width: '100%',
                                                          }}
                                                          placeholder={
                                                            parameters?.placeholder
                                                          }
                                                          onChange={(
                                                            date: any,
                                                          ) => {
                                                            const value =
                                                              dayjs(
                                                                date,
                                                              ).format(
                                                                'YYYY-MM-DD',
                                                              );
                                                            onSaveField(
                                                              parameters?.operator ===
                                                                'in'
                                                                ? [value]
                                                                : value,
                                                              index,
                                                              num,
                                                              i,
                                                              'value',
                                                            );
                                                          }}
                                                        />
                                                      ) : (
                                                        <Input
                                                          size="small"
                                                          placeholder={
                                                            parameters?.placeholder
                                                          }
                                                          value={parameters?.value?.join(
                                                            ',',
                                                          )}
                                                          onChange={({
                                                            target: { value },
                                                          }: any) => {
                                                            onSaveField(
                                                              parameters?.operator ===
                                                                'in'
                                                                ? value.split(
                                                                    ',',
                                                                  )
                                                                : [value],
                                                              index,
                                                              num,
                                                              i,
                                                              'value',
                                                            );
                                                          }}
                                                        />
                                                      ))}
                                                  </td>
                                                  <td
                                                    className={styles.line_btn}
                                                  >
                                                    <div
                                                      onClick={() => {
                                                        const value =
                                                          parameters &&
                                                          !parameters.negation;
                                                        onSaveField(
                                                          value,
                                                          index,
                                                          num,
                                                          i,
                                                          'negation',
                                                        );
                                                      }}
                                                    >
                                                      {parameters?.negation
                                                        ? '-'
                                                        : '+'}
                                                      &nbsp;NOT
                                                    </div>
                                                  </td>
                                                  {/* <td
                                                    className={styles.line_btn}
                                                  >
                                                    Count
                                                  </td> */}
                                                  {record.nodes.length > 1 && (
                                                    <td
                                                      className={
                                                        styles.line_btn
                                                      }
                                                      onClick={() => {
                                                        queryOpt[
                                                          index
                                                        ].queryJson.nodes[
                                                          num
                                                        ].nodes.splice(1, 1);
                                                        setQueryOpt(
                                                          queryOpt.concat(),
                                                        );
                                                      }}
                                                    >
                                                      <CloseOutlined />
                                                    </td>
                                                  )}
                                                </tr>
                                              </tbody>
                                            </table>
                                          );
                                        },
                                      )}
                                  <div
                                    className="global_row_space"
                                    style={{
                                      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                                    }}
                                  >
                                    <div className={styles.query_action_btn}>
                                      {record.nodes?.length > 1 && (
                                        <div
                                          className={styles.btn}
                                          onClick={() => {
                                            const operator =
                                              queryOpt[index].queryJson.nodes[
                                                num
                                              ].logical_operator;
                                            queryOpt[index].queryJson.nodes[
                                              num
                                            ].logical_operator =
                                              operator === 'and' ? 'or' : 'and';
                                            setQueryOpt(queryOpt.concat());
                                          }}
                                        >
                                          AND&nbsp;/&nbsp;OR
                                        </div>
                                      )}
                                      <div
                                        className={styles.btn}
                                        onClick={() => {
                                          queryOpt[index].queryJson.nodes[
                                            num
                                          ].nodes.push({
                                            type: 'terminal',
                                            service:
                                              index === 0
                                                ? 'full_text'
                                                : 'text',
                                          });
                                          setQueryOpt(queryOpt.concat());
                                        }}
                                      >
                                        Add Term
                                      </div>
                                    </div>
                                    <div
                                      className={styles.btn}
                                      style={{ borderRight: 'none' }}
                                      onClick={() => {
                                        queryOpt[index].queryJson?.nodes.splice(
                                          num,
                                          1,
                                        );
                                        setQueryOpt(queryOpt.concat());
                                      }}
                                    >
                                      Remove Subquery
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      );
                    })}
                    <div className={styles.query_action_btn}>
                      {queryJson.nodes.length > 1 && (
                        <div
                          className={styles.btn}
                          onClick={() => {
                            console.log(
                              '🚀 ~ file: index.tsx:959 ~ {queryOpt?.map ~ queryOpt[index].queryJson.logical_operator:',
                              queryOpt[index].queryJson,
                            );
                            queryOpt[index].queryJson.logical_operator =
                              queryOpt[index].queryJson.logical_operator ===
                              'and'
                                ? 'or'
                                : 'and';
                            setQueryOpt(queryOpt.concat());
                          }}
                        >
                          AND&nbsp;/&nbsp;OR
                        </div>
                      )}
                      <div
                        className={styles.btn}
                        onClick={() => {
                          queryOpt[index].queryJson?.nodes.push({
                            type: 'group',
                            logical_operator: 'and',
                            nodes: [
                              {
                                type: 'terminal',
                                service: index === 0 ? 'full_text' : 'text',
                              },
                            ],
                          });
                          setQueryOpt(queryOpt.concat());
                        }}
                      >
                        Add Subquery
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div
            className={['global_row_space', styles.search_body_footer].join(
              ' ',
            )}
          >
            <div>
              {/* <span>Return</span>&nbsp;
              <Select size="small" style={{ width: '135px' }} />
              &nbsp;
              <i className="icon iconfont icon-tishi" />
              &nbsp;
              <span>grouped by</span>&nbsp;
              <Select size="small" style={{ width: '135px' }} />
              &nbsp;
              <i className="icon iconfont icon-tishi" />
              &nbsp; */}
            </div>
            <div>
              {/* <span>Include Computed Structure Models (CSM)</span>&nbsp;
              <i className="icon iconfont icon-tishi" />
              &nbsp;
              <Switch size="small" />
              &nbsp; */}
              {/* <Radio.Group size="small">
                <Radio.Button value={0}>Count</Radio.Button>
                <Radio.Button value={1}>Clear</Radio.Button>
              </Radio.Group> */}
              &nbsp;
              {currentUser && (
                <>
                  <Select
                    style={{ width: '185px' }}
                    size="small"
                    allowClear
                    placeholder={intl.formatMessage({
                      id: 'pages.search.subscribe.placeholder',
                    })}
                    options={[
                      { label: '微信订阅', value: SUBSCRIBE_CHANNEL['微信'] },
                      { label: '邮件订阅', value: SUBSCRIBE_CHANNEL['邮件'] },
                      { label: 'rss订阅', value: SUBSCRIBE_CHANNEL['rss'] },
                    ]}
                    onSelect={(value: any) => {
                      setChannel(value);
                    }}
                    onClear={() => {
                      setChannel(null);
                    }}
                  />
                  &nbsp;
                </>
              )}
              <Button
                size="small"
                type="primary"
                loading={queryLoading}
                icon={<SearchOutlined />}
                onClick={onSearch}
              >
                {intl.formatMessage({ id: 'pages.search.button' })}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
