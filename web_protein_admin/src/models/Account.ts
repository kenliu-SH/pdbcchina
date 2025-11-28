import { EDelete, EPost, EPut, NAccount, RSetState } from '@/common/action';
import { requestDelete, requestPost, requestPut } from '@/utils/dva17';
import { message } from 'antd';

export default {
  namespace: NAccount,
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
      await requestPost(`user/account`, payload);
      message.success('新建账号成功');
    },
    async [EPut]({ payload }: any) {
      await requestPut(`user/${payload.id}`, payload);
      message.success('编辑账号成功');
    },
    async [EDelete]({ payload }: any) {
      await requestDelete(`user/${payload.id}`);
      message.success('删除账号成功');
    },
  },
};
