import { EDelete, EGetOne, EPost, EPut, NBanner, RSetState } from '@/common/action';
import { requestDelete, requestGet, requestPost, requestPut } from '@/utils/dva17';
import { message } from 'antd';

export default {
  namespace: NBanner,
  state: {
    bannerDetails: null,
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
      await requestPost(`banner`, payload);
    },
    async [EPut]({ payload }: any) {
      await requestPut(`banner/${payload.id}`, payload);
    },
    async [EGetOne]({ payload }: any, { reducer }: any) {
      const res = await requestGet(`banner/${payload.id}`, payload);
      reducer(RSetState, { bannerDetails: res });
    },
    async [EDelete]({ payload }: any) {
      await requestDelete(`banner/${payload.id}`);
      message.success('删除Banner成功');
    },
  },
};
