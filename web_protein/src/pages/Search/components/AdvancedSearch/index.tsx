import { EAdvanced, EQueryParams, NSearch } from '@/common/action';
import { effect, useLoading } from '@/utils/dva17';
import { Button, Collapse, Space } from 'antd';
import { filter, find } from 'lodash';
import { useEffect, useState } from 'react';
import { useHistory, useIntl, useLocation } from 'umi';
import Chemical from './Chemical';
import FullText from './FullText';
import Structure from './Structure';
import './styles.less';

export default ({ pageOpt, searchParams }: any) => {
  const intl = useIntl();
  const location = useLocation();
  const history = useHistory();
  const [openKeys, setOpenKey]: any = useState('2');
  const searchLoading = useLoading(NSearch, EAdvanced).loading;
  const [fullText, setFullText]: any = useState({
    type: 'group',
    nodes: [
      {
        type: 'terminal',
        service: 'full_text',
      },
    ],
    logical_operator: 'and',
  });
  const [structure, setStructure] = useState({
    type: 'group',
    logical_operator: 'and',
    nodes: [
      {
        type: 'group',
        nodes: [
          {
            type: 'terminal',
            service: 'text',
          },
        ],
        logical_operator: 'and',
      },
    ],
    label: 'text',
  });
  const [chemical, setChemical] = useState({
    type: 'group',
    logical_operator: 'and',
    nodes: [
      {
        type: 'group',
        nodes: [
          {
            type: 'terminal',
            service: 'text_chem',
          },
        ],
        logical_operator: 'and',
      },
    ],
    label: 'text_chem',
  });
  function onClear() {
    setSearchParams(null);
    setFullText({
      type: 'group',
      nodes: [
        {
          type: 'terminal',
          service: 'full_text',
        },
      ],
      logical_operator: 'and',
    });
    setStructure({
      type: 'group',
      logical_operator: 'and',
      nodes: [
        {
          type: 'group',
          nodes: [
            {
              type: 'terminal',
              service: 'text',
            },
          ],
          logical_operator: 'and',
        },
      ],
      label: 'text',
    });
    setChemical({
      type: 'group',
      logical_operator: 'and',
      nodes: [
        {
          type: 'group',
          nodes: [
            {
              type: 'terminal',
              service: 'text_chem',
            },
          ],
          logical_operator: 'and',
        },
      ],
      label: 'text_chem',
    });
    history.push({
      pathname: location.pathname,
      search: '',
    });
  }
  function onSearch() {
    const query = {
      type: 'group',
      logical_operator: 'and',
      nodes: filter(
        [fullText, structure, chemical].map((item: any) => {
          return {
            ...item,
            nodes: filter(item.nodes, (vo: any) => {
              if (!item.label) {
                if (vo.parameters) return vo.parameters;
              } else {
                if (vo.nodes[0].parameters) return vo;
              }
            }),
          };
        }),
        (vo: any) => {
          if (vo.nodes.length !== 0) return vo;
        },
      ),
    };
    history.push({
      pathname: location.pathname,
      search: `?query=${encodeURIComponent(JSON.stringify(query))}`,
    });
  }
  useEffect(() => {
    if (searchParams) {
      const urlSolve = JSON.parse(searchParams);
      const item1 = find(urlSolve?.nodes, { label: 'text' });
      const item2 = find(urlSolve?.nodes, { label: 'text_chem' });
      const item3 = find(urlSolve?.nodes, (vo: any) => {
        if (!vo.label) return vo;
      });
      if (item1) {
        setOpenKey([...openKeys, '2']);
        setStructure(Object.assign({}, item1));
      }
      if (item2) {
        setOpenKey([...openKeys, '3']);
        setChemical(Object.assign({}, item2));
      }
      if (item3) {
        setOpenKey([...openKeys, '1']);
        setFullText(Object.assign({}, item3));
      }
      effect(NSearch, EAdvanced, {
        page: pageOpt?.page || 1,
        pageSize: pageOpt?.pageSize || 10,
        isExcludeStructureSummaryVO: false,
        query: searchParams && JSON.parse(searchParams),
      });
    }
  }, [searchParams, pageOpt]);
  useEffect(() => {
    effect(NSearch, EQueryParams);
  }, []);
  useEffect(() => {
    const handleKeyPress = (e: any) => {
      if (e.key === 'Enter') {
        // 回车键被按下
        onSearch();
      }
    };
    // 在组件挂载时添加事件监听器
    document.addEventListener('keypress', handleKeyPress);
    // 在组件卸载时移除事件监听器
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);
  return (
    <div className="advanced_search_contain">
      <Collapse
        bordered={false}
        defaultActiveKey={'1'}
        size="small"
        items={[
          {
            key: '1',
            label: 'Advanced Search Query Builder',
            children: (
              <>
                <Collapse
                  size="small"
                  activeKey={openKeys}
                  items={[
                    {
                      key: '1',
                      label: 'Full Text',
                      children: (
                        <FullText
                          fullText={fullText}
                          setFullText={setFullText}
                        />
                      ),
                    },
                    {
                      key: '2',
                      label: 'Structure Attributes',
                      children: (
                        <Structure
                          structure={structure}
                          setStructure={setStructure}
                        />
                      ),
                    },
                    {
                      key: '3',
                      label: 'Chemical Attributes',
                      children: (
                        <Chemical
                          chemical={chemical}
                          setChemical={setChemical}
                        />
                      ),
                    },
                  ]}
                  onChange={(key: any) => {
                    setOpenKey(key);
                  }}
                />
                <div className="search_action">
                  <Space>
                    <Button size="small" onClick={onClear}>
                      {intl.formatMessage({ id: 'pages.search.clear' })}
                    </Button>
                    <Button
                      type="primary"
                      size="small"
                      onClick={onSearch}
                      loading={searchLoading}
                    >
                      {intl.formatMessage({ id: 'pages.search.button' })}
                    </Button>
                  </Space>
                </div>
              </>
            ),
          },
        ]}
      />
    </div>
  );
};
