import {
  NSearch,
  RSetState,
  ESuggest,
  EAdvanced,
  EQueryParams,
  EAdvancedCount,
  ERefinements,
  ESubscribe,
  EntryIDs,
} from '@/common/action';
import { requestGet, requestPost } from '@/utils/dva17';
import { splitArrayIntoChunks } from '@/utils/splitArrayIntoChunks';
import { groupBy } from 'lodash';

export default {
  namespace: NSearch,
  state: {
    suggest: [],
    suggestFormat: [],
    queryParams: null,
    advancedList: null,
    statisticsList: null,
    entryIDsList: null,
  },
  reducers: {
    [RSetState](state: any, payload: any) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    //自动完成建议
    async [ESuggest]({ payload }: any, { reducer }: any) {
      const res: any = await requestGet('search/suggest', payload);
      const arr = [];
      const obj = groupBy(res, 'status');
      for (const index in obj) {
        arr.push({
          label: index,
          children: obj[index].map((vo: any) => {
            return { label: vo.id, value: vo.id, status: vo.status };
          }),
        });
      }
      reducer(RSetState, { suggestFormat: arr, suggest: res || [] });
    },
    //获取筛选数据
    async [EQueryParams]({ payload }: any, { reducer }: any) {
      const res = await requestGet('search/select/data', payload);
      reducer(RSetState, { queryParams: res });
    },
    //高级检索
    async [EAdvanced]({ payload }: any, { reducer }: any) {
      console.log('检索参数是：', payload);
      const res = await requestPost('search/advanced', payload);
      reducer(RSetState, { advancedList: res });
    },
    //高级检索计数
    async [EAdvancedCount]({ payload }: any, { reducer }: any) {},
    //获取细化统计信息
    async [ERefinements]({ payload }: any, { reducer }: any) {
      const arr: any = [];
      const res: any = await requestPost(
        'search/refinements/statistics',
        payload,
      );
      for (const index in res) {
        arr.push({
          name: res[index].title,
          children: res[index].rows,
        });
      }
      reducer(RSetState, { statisticsList: arr });
    },
    //订阅
    async [ESubscribe]({ payload }: any) {
      const res = await requestPost('subscribe', payload);
      return res;
    },
    //
    async [EntryIDs]({ payload }: any, { reducer }: any) {
      const res = await requestPost('search/advanced/pdbid', payload);
      reducer(RSetState, { entryIDsList: splitArrayIntoChunks(res) });
    },
  },
};
