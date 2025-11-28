import styles from './styles/Experiment.less';
import DownloadBtn from '../../components/DownloadBtn';
import { useConnect } from '@/utils/dva17';
import { NStructure } from '@/common/action';
import { METHODS } from '@/common/enum';
import { Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import { filter, flattenDeep } from 'lodash';

import TypeEM from './components/TypeEM';
import TypeNMR from './components/TypeNMR';
import TypeXRAY from './components/TypeXRAY';
import EntryStatusTag from '@/components/EntryStatusTag';

export default ({ id }: any) => {
  const { experimentInfo } = useConnect(NStructure);
  const [methodField, setMethodField] = useState([]);
  const [fieldList, setFieldList] = useState([]);
  /**
   * 获取到当前PDB对应的method之后，将其格式化
   * 存入各 method 对应的字段
   * 每次存入的时候都需要做判断，与数组中上一项重复的字段值不再存入当前项的fields数组中
   */
  useEffect(() => {
    if (experimentInfo && experimentInfo.method) {
      const arr: any = [];
      const { method } = experimentInfo;
      method.map((vo: any, index: number) => {
        if (index === 0) {
          arr.push({
            type: vo,
            fields: METHODS[vo],
          });
        } else {
          const beforeArr = arr.slice(0, index);
          const lastFields = flattenDeep(
            beforeArr.map((vo: any) => {
              return vo.fields;
            }),
          );
          arr.push({
            type: vo,
            fields: filter(
              METHODS[vo].map((field: any) => {
                if (!lastFields.includes(field)) return field;
              }),
              (vo: any) => vo && vo,
            ),
          });
        }
      });
      setMethodField(arr.concat());
    }
  }, [experimentInfo]);
  /**
   * 各 method 对应的字段格式话完成之后，需再次格式化
   * 遍历methodField判断fields是否有值
   * 空数组则表示为该分类下需要显示的字段已经存在，{field}需二次显示，将其type字段拼接至上一数据项中
   */
  useEffect(() => {
    if (methodField.length !== 0) {
      const fieldArr: any = [];
      for (let index = 0; index < methodField.length; index++) {
        const { type, fields }: any = methodField[index];
        if (fields.length === 0 && fieldArr.length !== 0) {
          fieldArr[index - 1].type =
            fieldArr[fieldArr.length - 1].type + ' - ' + type;
        } else {
          fieldArr.push(methodField[index]);
        }
      }
      setFieldList(fieldArr.concat());
    }
  }, [methodField]);
  return (
    experimentInfo && (
      <div className={styles.experiment}>
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <DownloadBtn id={id} />
          </Col>
          <Col span={24}>
            <div>
              <strong style={{ display: 'inline-block', fontSize: 36 }}>
                {id}
              </strong>
              <EntryStatusTag status="REL" />
            </div>
          </Col>
          <Col span={24}>
            <strong style={{ fontSize: 18 }}>{experimentInfo?.title}</strong>
          </Col>
        </Row>
        <Row>
          {fieldList.map(({ type, fields }: any, key: number) => {
            const data: any = {};
            for (const field of fields) {
              data[field] = experimentInfo[field];
            }
            return (
              <Col span={24} key={key}>
                <br />
                <strong className={styles.ele}>{type}</strong>
                <hr />
                <div className={styles.experiement_table_container}>
                  <TypeEM data={data} />
                  <TypeNMR data={data} />
                  <TypeXRAY data={data} />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    )
  );
};
