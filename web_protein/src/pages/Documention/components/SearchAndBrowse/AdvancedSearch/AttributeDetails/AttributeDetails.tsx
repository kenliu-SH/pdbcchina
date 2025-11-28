import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import styles from './AttributeDetails.less';
import { StructureOptions, ChemicalOptions } from './option';

export default () => {
  const menuRender = (list: any) => {
    return (
      <Collapse
        className={styles.collapse_contain}
        bordered={false}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      >
        {list.map((vo: any, index: number) => {
          const { title, children, data } = vo;
          return (
            <Collapse.Panel
              header={title}
              key={index}
              style={{ backgroundColor: '#f8f8f8' }}
            >
              {children ? menuRender(children) : null}
              {data ? (
                <table border={1} cellSpacing={1} cellPadding={2}>
                  <tbody>
                    {data.map(({ key, value }: any, i: number) => (
                      <tr key={i}>
                        <td>{key}</td>
                        {Array.isArray(value) ? (
                          <td>
                            {value?.map((v, k) => (
                              <tr key={k}>
                                <td>{v}</td>
                              </tr>
                            ))}
                          </td>
                        ) : (
                          <td>{value}</td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : null}
            </Collapse.Panel>
          );
        })}
      </Collapse>
    );
  };
  return (
    <div>
      <h1>Attribute Details</h1>
      <h3>Structure Attributes</h3>
      {menuRender(StructureOptions)}
      <br />
      <h3>Chemical Attributes</h3>
      {menuRender(ChemicalOptions)}
    </div>
  );
};
