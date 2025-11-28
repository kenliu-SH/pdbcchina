import {
  EDelete,
  EPost,
  EPut,
  NFooter,
  RSetState,
  EPostSubItem,
  EPutSubItem,
  EDeleteSubItem,
} from '@/common/action';
import { requestPost, requestPut, requestDelete } from '@/utils/dva17';
import { message } from 'antd';

export default {
  namespace: NFooter,
  state: {},
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
      await requestPost(`footer`, payload);
      message.success('新建主项成功');
    },
    async [EPut]({ payload }: any) {
      await requestPut(`footer/${payload.id}`, payload);
      message.success('编辑主项成功');
    },
    async [EDelete]({ payload }: any) {
      await requestDelete(`footer/${payload.id}`);
      message.success('删除主项成功');
    },
    async [EPostSubItem]({ payload }: any) {
      await requestPost(`footer/${payload.id}`, payload);
      message.success('新建子项成功');
    },
    async [EPutSubItem]({ payload }: any) {
      await requestPut(`footer/item/${payload.id}`, payload);
      message.success('编辑子项成功');
    },
    async [EDeleteSubItem]({ payload }: any) {
      await requestDelete(`footer/item/${payload.id}`);
      message.success('删除子项成功');
    },
  },
};
