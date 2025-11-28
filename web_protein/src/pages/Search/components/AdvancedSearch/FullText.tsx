import { Input } from 'antd';

export default ({ fullText, setFullText }: any) => {
  const onAdd = () => {
    fullText.nodes.push({
      type: 'group',
      nodes: [
        {
          type: 'terminal',
          service: 'full_text',
        },
      ],
      logical_operator: 'and',
    });
    setFullText(Object.assign({}, fullText));
  };
  const onRemove = (index: number) => {
    fullText.nodes.splice(index, 1);
    setFullText(Object.assign({}, fullText));
  };
  const onOperator = () => {
    const { logical_operator } = fullText;
    fullText.logical_operator = logical_operator === 'and' ? 'or' : 'and';
    setFullText(Object.assign({}, fullText));
  };
  const onInput = (value: any, index: number) => {
    fullText.nodes[index].parameters = { value };
    setFullText(Object.assign({}, fullText));
  };
  return (
    <>
      {fullText?.nodes?.map((vo: any, index: number) => {
        const { parameters } = vo;
        return (
          <div key={index} className="subquery_box">
            <div className="operator">
              {index > 0 && fullText?.logical_operator?.toLocaleUpperCase()}
            </div>
            <div className="subquery">
              <Input
                size="small"
                placeholder="Enter one or more search terms."
                value={parameters?.value}
                onChange={({ target: { value } }: any) => {
                  onInput(value, index);
                }}
              />
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
        {fullText?.nodes?.length > 1 && (
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
