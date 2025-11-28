import { EGet, NSubscribe, RSetState } from '@/common/action';
import { requestGet } from '@/utils/dva17';

export default {
  namespace: NSubscribe,
  state: {
    subscribeList: null,
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
      const res = await requestGet('subscribe', payload);
      reducer(RSetState, { subscribeList: res });
    },
  },
};
