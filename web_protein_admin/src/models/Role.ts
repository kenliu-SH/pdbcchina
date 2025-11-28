import { EDelete, EGet, EPost, EPut, NRole, RSetState } from '@/common/action';
import { requestPost, requestPut, requestDelete, requestGet } from '@/utils/dva17';
import { message } from 'antd';

export default {
  namespace: NRole,
  state: {
    roleList: null,
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
      const res = await requestGet('role', payload);
      reducer(RSetState, { roleList: res });
    },
    async [EPost]({ payload }: any) {
      await requestPost(`role`, payload);
      message.success('新建角色成功');
    },
    async [EPut]({ payload }: any) {
      await requestPut(`role/${payload.id}`, payload);
      message.success('编辑角色成功');
    },
    async [EDelete]({ payload }: any) {
      await requestDelete(`role/${payload.id}`);
      message.success('删除角色成功');
    },
  },
};
