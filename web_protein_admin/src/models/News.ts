import { EDelete, EGetOne, EPost, EPut, NNews, RSetState } from '@/common/action';
import { requestDelete, requestGet, requestPost, requestPut } from '@/utils/dva17';
import { message } from 'antd';

export default {
  namespace: NNews,
  state: {
    newsItem: null,
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
      await requestPost(`news`, payload);
    },
    async [EPut]({ payload }: any) {
      await requestPut(`news/${payload.id}`, payload);
    },
    async [EGetOne]({ payload }: any, { reducer }: any) {
      const res = await requestGet(`news/${payload.id}`, payload);
      reducer(RSetState, { newsItem: res });
    },
    async [EDelete]({ payload }: any) {
      await requestDelete(`news/${payload.id}`);
      message.success('删除新闻成功');
    },
  },
};
