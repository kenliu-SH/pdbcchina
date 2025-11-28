import {
  EBatchCollect,
  ECollect,
  EGet,
  NCollect,
  RSetState,
} from '@/common/action';
import { requestGet, requestPost } from '@/utils/dva17';

export default {
  namespace: NCollect,
  state: {
    collectList: null,
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
    async [EGet]({ payload }: any, { reducer }: any) {
      const res = await requestGet('collect/pagination', payload);
      reducer(RSetState, { collectList: res });
    },
    //收藏
    async [ECollect]({ payload }: any) {
      await requestPost('collect', payload);
    },
    //批量收藏
    async [EBatchCollect]({ payload }: any) {
      await requestPost('collect/many', payload);
    },
  },
};
