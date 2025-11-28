import {
  EDelete,
  EDeleteSubItem,
  EPost,
  EPostSubItem,
  EPut,
  NMenuBar,
  RSetState,
  EPutSubItem,
  EPostItem,
  EPutItem,
  EGet,
} from '@/common/action';
import { requestDelete, requestGet, requestPost, requestPut } from '@/utils/dva17';

export default {
  namespace: NMenuBar,
  state: {
    dataSource: [],
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
      const res = await requestGet('menuBar', payload);
      reducer(RSetState, { dataSource: res });
    },
    async [EPost]({ payload }: any) {
      await requestPost('menuBar/deposit', payload);
    },
    async [EPut]({ payload }: any) {
      await requestPut(`menuBar/deposit/${payload.id}`, payload);
    },
    async [EPostSubItem]({ payload }: any) {
      await requestPost(`menuBar/deposit/${payload.id}`, payload);
    },
    async [EPutSubItem]({ payload }: any) {
      await requestPut(`menuBar/deposit/item/${payload.id}`, payload);
    },
    async [EDeleteSubItem]({ payload }: any) {
      await requestDelete(`menuBar/deposit/item/${payload.id}`);
    },
    async [EPostItem]({ payload }: any) {
      await requestPost('menuBar', payload);
    },
    async [EPutItem]({ payload }: any) {
      await requestPut(`menuBar/${payload.id}`, payload);
    },
    async [EDelete]({ payload }: any) {
      await requestDelete(`menuBar/${payload.id}`);
    },
  },
};
