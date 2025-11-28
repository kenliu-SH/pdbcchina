import { NSearch } from '@/common/action';
import { OPERATOR } from '@/common/enum';
import { useConnect } from '@/utils/dva17';
import { DatePicker, Input, Select, TreeSelect } from 'antd';
import dayjs from 'dayjs';
import { filter } from 'lodash';

export default ({ chemical, setChemical }: any) => {
  const { queryParams } = useConnect(NSearch);
  const { selectorItems } = queryParams?.chemical || [];
  const options: any = filter(selectorItems, { type: 'header' });
  const treeData = options?.map((vo: any) => {
    return {
      ...vo,
      selectable: false,
      children: filter(selectorItems, {
        header_index: vo.index,
      })?.map((vv: any, i: number) => {
        return {
          ...vv,
          index: vo.index + '-' + i,
          disabled: !vv.isSupport,
        };
      }),
    };
  });
  //添加
  const onAdd = () => {
    chemical.nodes.push({
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
    setChemical(Object.assign({}, chemical));
  };
  //删除
  const onRemove = (index: number) => {
    chemical.nodes.splice(index, 1);
    setChemical(Object.assign({}, chemical));
  };
  //AND 或 OR
  const onOperator = () => {
    const { logical_operator } = chemical;
    chemical.logical_operator = logical_operator === 'and' ? 'or' : 'and';
    setChemical(Object.assign({}, chemical));
  };
  //选择检索项
  const onSelect = (node: any, index: number) => {
    const { uiAttrMap } = queryParams['chemical'] || {};
    if (node && uiAttrMap) {
      const { nested_attribute, attribute } = node;
      const vo: any =
        uiAttrMap[nested_attribute ? nested_attribute : attribute];
      chemical.nodes[index].nodes[0].uiAttrMap = vo;
      chemical.nodes[index].nodes[0].parameters = {
        ...node,
        negation: false,
        operator: vo?.default_operator,
      };
      setChemical(Object.assign({}, chemical));
    }
  };
  //保存检索参数
  const onSave = (value: any, index: number, fieldKey: any) => {
    chemical.nodes[index].nodes[0].parameters[fieldKey] = value;
    setChemical(Object.assign({}, chemical));
  };
  return (
    <>
      {chemical.nodes?.map((item: any, index: number) => {
        const { nodes } = item;
        const { parameters, uiAttrMap } = nodes[0];
        const { operator, negation, placeholder, value } = parameters || {};
        const { enumeration, format } = uiAttrMap || {};
        return (
          <div key={index} className="subquery_box">
            <div className="operator">
              {index > 0 && chemical?.logical_operator?.toLocaleUpperCase()}
            </div>
            <div className="subquery">
              <div style={{ display: 'flex' }}>
                <TreeSelect
                  allowClear
                  size="small"
                  treeExpandAction="click"
                  style={{ width: '30%' }}
                  placeholder="-- Type to filter and/or select an attribute --"
                  treeData={treeData}
                  fieldNames={{
                    label: 'name',
                    value: 'index',
                  }}
                  value={parameters?.name}
                  onSelect={(value: string, node: any) => {
                    onSelect(node, index);
                  }}
                />
                {negation && (
                  <div
                    style={{
                      width: '38px',
                      textAlign: 'center',
                    }}
                  >
                    <strong>NOT</strong>
                  </div>
                )}
                {parameters && (
                  <Select
                    style={{
                      width: '12%',
                    }}
                    size="small"
                    placeholder="enter operator"
                    value={operator}
                    onSelect={(value: string) => {
                      onSave(value, index, 'operator');
                    }}
                    options={uiAttrMap?.operators?.map((v: string) => {
                      return {
                        label: OPERATOR[v],
                        value: v,
                      };
                    })}
                  />
                )}
                {parameters &&
                  operator !== 'exists' &&
                  (enumeration && enumeration.length !== 0 ? (
                    <Select
                      size="small"
                      placeholder={placeholder}
                      style={{ width: '380px' }}
                      value={value}
                      options={enumeration?.map((vo: any) => {
                        return {
                          label: vo,
                          value: vo,
                        };
                      })}
                      onSelect={(value: string) => {
                        onSave(
                          operator === 'in' ? [value] : value,
                          index,
                          'value',
                        );
                      }}
                    />
                  ) : format === 'date' ? (
                    <DatePicker
                      size="small"
                      style={{ width: '380px' }}
                      placeholder={placeholder}
                      value={
                        value
                          ? Array.isArray(value)
                            ? dayjs(value[0])
                            : dayjs(value)
                          : null
                      }
                      onChange={(date: any) => {
                        const time = date && dayjs(date).format('YYYY-MM-DD');
                        onSave(
                          date && operator === 'in' ? [time] : time || '',
                          index,
                          'value',
                        );
                      }}
                    />
                  ) : (
                    <Input
                      size="small"
                      style={{ width: '380px' }}
                      placeholder={placeholder}
                      value={
                        value
                          ? Array.isArray(value)
                            ? value.join(',')
                            : value
                          : ''
                      }
                      onChange={({ target: { value } }: any) => {
                        onSave(
                          operator === 'in' ? [value] : value,
                          index,
                          'value',
                        );
                      }}
                    />
                  ))}
                {parameters && (
                  <div
                    className="negation_btn"
                    onClick={() => {
                      onSave(!negation, index, 'negation');
                    }}
                  >
                    {negation ? '-' : '+'}
                    &nbsp;NOT
                  </div>
                )}
              </div>
              <div className="subquery_action">
                <div
                  className="action_button"
                  onClick={() => {
                    onRemove(index);
                  }}
                >
                  Remove Subquery
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="divider_action">
        {chemical?.nodes?.length > 1 && (
          <div className="action_button" onClick={onOperator}>
            AND / OR
          </div>
        )}
        <div className="action_button" onClick={onAdd}>
          Add Subquery
        </div>
      </div>
    </>
  );
};
