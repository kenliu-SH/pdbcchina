import styles from './styles.less';
import Config from '@/common/config';
import dayjs from 'dayjs';
import images from '@/assets/images';
import { effect } from '@/utils/dva17';
import { ECollect, NCollect } from '@/common/action';
import { Checkbox, Spin } from 'antd';
import { useState } from 'react';
import { downPdbFile } from '@/utils/utils';
import { LIST_VIEW_TYPE } from '@/common/enum';

export default ({
  item,
  fetch,
  viewType = LIST_VIEW_TYPE['list-outlined'],
  checkType,
  checkList,
  setSelected,
}: any) => {
  const { structureSummaryVO } = item;
  const [downLoading, setDownLoading] = useState(false);
  //勾选
  const onSelect = ({ target: { checked } }: any) => {
    const flag = checkList.includes(structureSummaryVO.entityId);
    if (checked) {
      if (!flag) checkList.push(structureSummaryVO.entityId);
    } else {
      if (flag) {
        const index = checkList.indexOf(structureSummaryVO.entityId);
        if (index >= 0) checkList.splice(index, 1);
      }
    }
    setSelected(checkList.concat());
  };
  //收藏或取消
  const onCollect = (e: any) => {
    e.stopPropagation();
    effect(NCollect, ECollect, {
      entryId: structureSummaryVO.entityId,
    }).then(() => {
      fetch();
    });
  };
  //下载
  const onDownload = async (e: any) => {
    e.stopPropagation();
    try {
      setDownLoading(true);
      await downPdbFile({
        PIDBS: [structureSummaryVO.entityId],
        type: 'PDB',
      });
      setDownLoading(false);
    } catch (error: any) {
      setDownLoading(false);
    }
  };
  if (!structureSummaryVO) return <></>;
  return (
    <div
      className={[
        styles.list_outlined_item,
        viewType === LIST_VIEW_TYPE['grid']
          ? styles.grid_list_item
          : styles.list_item,
      ].join(' ')}
    >
      {viewType === LIST_VIEW_TYPE['grid'] && (
        <a className={styles.grid_title}>{structureSummaryVO.entityId}</a>
      )}
      {[LIST_VIEW_TYPE['list-outlined'], LIST_VIEW_TYPE['grid']].includes(
        viewType,
      ) && (
        <a href={`#/entry/structure/${structureSummaryVO.entityId}`}>
          <img
            className={styles.list_item_img}
            src={
              Config.SERVER_HOME +
              `file/v2/pdb/3dImage/${structureSummaryVO.entityId.toLowerCase()}-assembly1.png`
            }
          />
        </a>
      )}
      {viewType === LIST_VIEW_TYPE['list-outlined'] && (
        <div className={styles.list_item_info}>
          <a
            className={styles.entityId}
            href={`#/entry/structure/${structureSummaryVO.entityId}`}
          >
            {structureSummaryVO.entityId}
          </a>
          <a
            style={{ fontSize: '16px', margin: '8px 0', display: 'block' }}
            href={`#/entry/structure/${structureSummaryVO.entityId}`}
          >
            {structureSummaryVO?.title}
          </a>
          <p>
            {structureSummaryVO?.depositionAuthors?.map((v: any, i: number) => (
              <span key={i}>
                <a>{v}</a>
                {structureSummaryVO?.depositionAuthors?.length !== i - 1 &&
                  ', '}
              </span>
            ))}
          </p>
          <p>{structureSummaryVO?.literature?.citation}</p>
          <ul className={styles.ul_list}>
            <li>
              <strong className={styles.ul_item}>Released</strong>
              {structureSummaryVO?.released &&
                dayjs(structureSummaryVO?.released).format('YYYY-MM-DD')}
            </li>
            <li style={{ display: 'flex' }}>
              <strong className={styles.ul_item}>Method</strong>
              {structureSummaryVO?.experimentalDataSnapshot?.map(
                (vo: any, index: number) => (
                  <div key={index}>
                    {vo.method}&nbsp;{vo.resolution && `${vo.resolution} Å`}
                  </div>
                ),
              )}
            </li>
            <li>
              <strong className={styles.ul_item}>Macromolecule</strong>
              {structureSummaryVO?.macromolecules?.proteins
                ?.map((vv: any) => vv.molecule)
                .join(', ')}
            </li>
            <li>
              <strong className={styles.ul_item}>Unique Ligands</strong>
              {structureSummaryVO?.uniqueLigands?.map((vv: any, i: number) => (
                <span key={i}>
                  <a>{vv}</a>
                  {i + 1 !== structureSummaryVO?.uniqueLigands.length
                    ? ', '
                    : ''}
                </span>
              ))}
            </li>
          </ul>
          <div className={styles.action_btn}>
            {/* <div className={styles.action_btn_item} onClick={onCollect}>
              <img
                src={item.isCollect ? images.iconCollect : images.iconUnCollect}
                className={styles.action_icon}
              />
            </div> */}
            <Spin spinning={downLoading}>
              <div className={styles.action_btn_item} onClick={onDownload}>
                <img src={images.iconDownload} className={styles.action_icon} />
              </div>
            </Spin>
          </div>
        </div>
      )}
      {viewType === LIST_VIEW_TYPE['list'] && (
        <div className={styles.list_line}>
          <div className={styles.list_line_item}>
            <a href={`#/entry/structure/${structureSummaryVO.entityId}`}>
              {structureSummaryVO?.entityId}
            </a>
          </div>
          <div className={styles.list_line_item}>
            <small>{structureSummaryVO?.title}</small>
          </div>
          <div className={styles.list_line_item}>
            <small>
              {structureSummaryVO?.released &&
                dayjs(structureSummaryVO?.released).format('YYYY-MM-DD')}
            </small>
          </div>
        </div>
      )}
      {checkType === 1 && (
        <div
          className={styles.checkbox}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Checkbox
            checked={checkList.includes(structureSummaryVO.entityId)}
            onChange={onSelect}
          />
        </div>
      )}
    </div>
  );
};
