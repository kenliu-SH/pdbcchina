import Config from '@/common/config';
import { Col } from 'antd';
import styles from '../../styles/StructureSummary.less';
interface biologicallyInterestingMolecules {
  auth: any;
  chains: any;
  class: string;
  entityID: string;
  id: string;
  name: string;
  type: string;
  showType: string;
}

export default (props: any) => {
  const { biologicallyInterestingMolecules } = props;
  if (
    !biologicallyInterestingMolecules ||
    (biologicallyInterestingMolecules &&
      biologicallyInterestingMolecules.length === 0)
  ) {
    return null;
  }
  return (
    <Col span={24}>
      <div className="global_entry_header">
        Biologically Interesting Molecules (External Reference)
      </div>
      <div className="global_entry_body">
        {biologicallyInterestingMolecules.map(
          (vo: biologicallyInterestingMolecules, index: number) => {
            return (
              <div key={index}>
                <table border={1} cellSpacing={1} cellPadding={4}>
                  <thead>
                    <tr>
                      <th colSpan={6} className={styles.entityID_header}>
                        <h5>Entity ID:&nbsp;{vo.entityID}</h5>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="global_tr_bg">
                      <th>ID</th>
                      <th>Chains</th>
                      <th>Name</th>
                      <th>Type/Class</th>
                      <th>2D Diagram</th>
                    </tr>
                    <tr>
                      <td style={{ width: '18%' }}>
                        <a href={`#/ligand/bird/${vo.id}`}>{vo.id}</a>
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
                                              'The value of _pdbx_reference_molecule.prd_id is the unique identifier\n for the reference molecule in this family.\n\n By convention this ID uniquely identifies the reference molecule in\n in the PDB reference dictionary.\n\n The ID has the template form PRD_dddddd (e.g. PRD_000001)',
                                            enum_len: 0,
                                            enum_annotated_len: 0,
                                            examples: [
                                              'PRD_000001',
                                              'PRD_0000010',
                                            ],
                                            examples_len: 2,
                                            has_desc: 'y',
                                            search_group_name:
                                              'Biologically Interesting Molecules (BIRD)',
                                            search_group_priority: 5,
                                            selector: true,
                                            type: 'string',
                                            display_name: 'BIRD ID(s)',
                                            is_iterable: true,
                                            operators: ['in', 'exists'],
                                            default_operator: 'in',
                                            useIn: true,
                                            ui: true,
                                          },
                                          parameters: {
                                            type: 'item',
                                            attribute:
                                              'pdbx_reference_molecule.prd_id',
                                            name: 'BIRD ID(s)',
                                            placeholder:
                                              'Ex: PRD_000001, PRD_0000010',
                                            header_index: 1,
                                            isSupport: true,
                                            index: '1-0',
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
                      <td>
                        {vo.chains?.map((v: any, index: number) => (
                          <div key={index}>
                            {v}&nbsp;
                            {vo.auth && `[auth ${vo.auth[index]}]`}
                          </div>
                        ))}
                      </td>
                      <td style={{ width: '40%' }}>{vo.name}</td>
                      <td>
                        {vo.showType}&nbsp;/&nbsp;{vo.class}
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
                    </tr>
                  </tbody>
                </table>
                {index !== biologicallyInterestingMolecules.length - 1 && (
                  <br />
                )}
              </div>
            );
          },
        )}
      </div>
    </Col>
  );
};
