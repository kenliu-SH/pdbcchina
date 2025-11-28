import { EDelete, EGetOne, EPost, EPut, NHighLight, RSetState } from '@/common/action';
import { requestPost, requestPut, requestGet, requestDelete } from '@/utils/dva17';
import { message } from 'antd';

export default {
  namespace: NHighLight,
  state: {
    highlightItem: null,
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
    async [EPost]({ payload }: any) {
      await requestPost(`highlight`, payload);
    },
    async [EPut]({ payload }: any) {
      await requestPut(`highlight/${payload.id}`, payload);
    },
    async [EGetOne]({ payload }: any, { reducer }: any) {
      const res = await requestGet(`highlight/${payload.id}`, payload);
      reducer(RSetState, { highlightItem: res });
    },
    async [EDelete]({ payload }: any) {
      await requestDelete(`highlight/${payload.id}`);
      message.success('删除亮点成果成功');
    },
  },
};
