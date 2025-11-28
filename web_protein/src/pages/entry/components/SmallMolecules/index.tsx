import Config from '@/common/config';
import { formarSubscripts } from '@/utils/utils';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Col, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
interface modifiedResidues {
  chains: any;
  formula: string;
  id: string;
  auth: any;
  parent: any;
  tag?: any;
  type?: any;
}
interface ligands {
  auth: any;
  chains: any;
  formula: string;
  id: string;
  name: string;
  inchiKey: string;
  tag?: any;
}

export default (props: any) => {
  const { smallMolecules } = props;
  const { ligands, modifiedResidues } = smallMolecules || {};
  const [openData, setOpenData]: any = useState([]);
  const [modified, setModified]: any = useState([]);
  useEffect(() => {
    if (ligands) {
      const arr: any = [];
      ligands.map((vo: any) => {
        arr.push(vo.chains.slice(0, 5));
      });
      setOpenData(arr.concat());
    }
    if (modifiedResidues) {
      const arr: any = [];
      modifiedResidues.map((vo: any) => {
        arr.push(vo.chains.slice(0, 5));
      });
      setModified(arr.concat());
    }
  }, []);
  /**
   * Ligands
   * 逐步递增chains的显示
   * 每次增加五条数据
   */
  const onAddChains = (index: any) => {
    const sliceArr = ligands[index].chains.slice(
      openData[index].length,
      openData[index].length + 5,
    );
    openData[index] = openData[index].concat(sliceArr);
    setOpenData(openData.concat());
  };
  /**
   * modified
   * 逐步递增chains的显示
   * 每次增加五条数据
   */
  const onAddModified = (index: any) => {
    const sliceArr = modifiedResidues[index].chains.slice(
      modified[index].length,
      modified[index].length + 5,
    );
    modified[index] = modified[index].concat(sliceArr);
    setModified(modified.concat());
  };
  if (
    (!ligands || (ligands && ligands.length === 0)) &&
    (!modifiedResidues || (modifiedResidues && modifiedResidues.length === 0))
  ) {
    return null;
  }
  return (
    <Col span={24}>
      <div className="global_entry_header">Small Molecules</div>
      <div className="global_entry_body">
        {ligands?.length !== 0 && (
          <>
            <table border={1} cellSpacing={1} cellPadding={4}>
              <tbody>
                <tr className="global_tr_bg">
                  <th colSpan={6}>Ligands</th>
                </tr>
                <tr>
                  <th>ID</th>
                  <th>
                    Chains&nbsp;
                    <Tooltip title="If the two PDB chain IDs (label_asym_id; assigned by the PDB) and auth_asym_id (selected by the author) do not coincide, the chain ID is displayed as “label_asym_id [auth auth_asym_id]”">
                      <i className="icon iconfont icon-tishi" />
                    </Tooltip>
                  </th>
                  <th>Name / Formula / InChI Key</th>
                  <th>2D Diagram</th>
                </tr>
                {ligands.map((vo: ligands, index: number) => {
                  return (
                    <tr key={index}>
                      <td style={{ width: '20%' }}>
                        <a href={`#/ligand/${vo.id}`} target="_ligand">
                          {vo.id}
                        </a>
                        {vo.tag && <span>&nbsp;({vo.tag})</span>}
                        <br />
                        <a
                          className="global_underline"
                          style={{ fontWeight: 'bold' }}
                          href={`#/search?query=${encodeURIComponent(
                            JSON.stringify({
                              type: 'group',
                              logical_operator: 'and',
                              nodes: [
                                {
                                  type: 'group',
                                  logical_operator: 'and',
                                  nodes: [
                                    {
                                      type: 'group',
                                      nodes: [
                                        {
                                          type: 'terminal',
                                          service: 'text_chem',
                                          uiAttrMap: {
                                            context: ['exact-match', 'suggest'],
                                            description:
                                              'The chemical component identifier.',
                                            enum_len: 0,
                                            enum_annotated_len: 0,
                                            examples: ['ATP', 'STI'],
                                            examples_len: 2,
                                            has_desc: 'y',
                                            search_group_name:
                                              'Chemical Components',
                                            search_group_priority: 5,
                                            selector: true,
                                            type: 'string',
                                            display_name: 'Chemical ID(s)',
                                            is_iterable: true,
                                            operators: ['in', 'exists'],
                                            default_operator: 'in',
                                            useIn: true,
                                            ui: true,
                                          },
                                          parameters: {
                                            type: 'item',
                                            attribute: 'chem_comp.id',
                                            name: 'Chemical ID(s)',
                                            placeholder: 'Ex: ATP, STI',
                                            header_index: 0,
                                            isSupport: true,
                                            index: '0-0',
                                            disabled: false,
                                            negation: false,
                                            operator: 'in',
                                            value: [vo.id],
                                          },
                                        },
                                      ],
                                      logical_operator: 'and',
                                    },
                                  ],
                                  label: 'text_chem',
                                },
                              ],
                            }),
                          )}`}
                        >
                          Query on {vo.id}
                        </a>
                      </td>
                      <td style={{ width: '25%' }}>
                        {openData[index]?.map(
                          (chainItem: any, i: number) =>
                            chainItem && (
                              <div key={i}>
                                {chainItem}
                                {vo.auth[i] && ` [auth ${vo.auth[i]}]`}
                              </div>
                            ),
                        )}
                        {openData[index]?.length !== vo.chains?.length && (
                          <PlusCircleOutlined
                            onClick={() => {
                              onAddChains(index);
                            }}
                          />
                        )}
                      </td>
                      <td>
                        <strong>{vo.name}</strong>
                        <br />
                        <span
                          dangerouslySetInnerHTML={{
                            __html: vo.formula && formarSubscripts(vo.formula),
                          }}
                        />
                        <br />
                        {vo.inchiKey}
                      </td>
                      <td style={{ width: '20%' }}>
                        <img
                          style={{
                            width: '116px',
                            display: 'block',
                            margin: '0 auto',
                          }}
                          src={
                            Config.SERVER_HOME +
                            `file/v2/pdb/chemImage/${vo.id}.svg`
                          }
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <br />
          </>
        )}
        {modifiedResidues?.length !== 0 && (
          <table border={1} cellSpacing={1} cellPadding={4}>
            <tbody>
              <tr className="global_tr_bg">
                <th colSpan={6}>
                  Modified Residues/Nucleosides&nbsp;
                  <Tooltip title="All standard residues as included in the mmCIF dictionary following the IUPAC definition.">
                    <i className="icon iconfont icon-tishi" />
                  </Tooltip>
                </th>
              </tr>
              <tr>
                <th>ID</th>
                <th>
                  Chains&nbsp;
                  <Tooltip title="If the two PDB chain IDs (label_asym_id; assigned by the PDB) and auth_asym_id (selected by the author) do not coincide, the chain ID is displayed as “label_asym_id [auth auth_asym_id]”">
                    <i className="icon iconfont icon-tishi" />
                  </Tooltip>
                </th>
                <th>Type</th>
                <th>Formula</th>
                <th>2D Diagram</th>
                <th>Parent</th>
              </tr>
            </tbody>
            <tbody>
              {modifiedResidues?.map((vo: modifiedResidues, index: number) => (
                <tr key={index}>
                  <td style={{ width: '20%' }}>
                    <a href={`#/ligand/${vo.id}`}>
                      {vo.id}
                      {vo.tag && <span>&nbsp;({vo.tag})</span>}
                    </a>
                  </td>
                  <td style={{ width: '25%' }}>
                    {modified[index]?.map(
                      (chainItem: any, i: number) =>
                        chainItem && (
                          <div key={i}>
                            {chainItem}
                            {vo.auth[i] && ` [auth ${vo.auth[i]}]`}
                          </div>
                        ),
                    )}
                    {modified[index]?.length !== vo.chains?.length && (
                      <PlusCircleOutlined
                        onClick={() => {
                          onAddModified(index);
                        }}
                      />
                    )}
                  </td>
                  <td>{vo.type}</td>
                  <td>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: vo.formula && formarSubscripts(vo.formula),
                      }}
                    />
                  </td>
                  <td>
                    <img
                      style={{
                        width: '116px',
                        display: 'block',
                        margin: '0 auto',
                      }}
                      src={
                        Config.SERVER_HOME +
                        `file/v2/pdb/chemImage/${vo.id}.svg`
                      }
                    />
                  </td>
                  <td>{vo.parent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Col>
  );
};
