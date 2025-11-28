import {
  EGetExperiment,
  EntryBasicInfo,
  EOptions,
  NDownload,
  NStructure,
  RSetState,
} from '@/common/action';
import { effect, reducer, useLoading } from '@/utils/dva17';
import { Spin, Tabs } from 'antd';
import { useEffect } from 'react';
import { history, useParams } from 'umi';
import styles from './styles/StructureSummary.less';

import Experiment from './Experiment';
import Structure from './Structure';
import Versions from './Versions';
import View from './View';

export default () => {
  const { current, id }: any = useParams();
  const loading = useLoading(NStructure, EntryBasicInfo).loading;
  useEffect(() => {
    if (id) {
      window.scrollTo(0, 0);
      effect(NDownload, EOptions, { id });
      effect(NStructure, EntryBasicInfo, { id });
      effect(NStructure, EGetExperiment, { id });
    }
    return () => {
      reducer(NStructure, RSetState, { details: null });
    };
  }, [id]);
  return (
    <div className={styles.entry_contain}>
      <Spin spinning={loading}>
        <Tabs
          activeKey={current}
          type="card"
          onChange={(activeKey: string) => {
            history.push(`/entry/${activeKey}/${id}`);
          }}
          items={[
            {
              label: 'Structure Summary',
              key: 'structure',
              children: <Structure id={id} />,
            },
            {
              label: '3D View',
              key: '3d-view',
              children: <View id={id} />,
            },
            {
              label: 'Experiment',
              key: 'experimental',
              children: <Experiment id={id} />,
            },
            {
              label: 'Versions',
              key: 'versions',
              children: <Versions id={id} />,
            },
          ]}
        />
      </Spin>
    </div>
  );
};
