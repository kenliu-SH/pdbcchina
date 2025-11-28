import { EPost, NTags, RSetState, EPut, EDelete, EGet, ESort } from '@/common/action';
import { requestDelete, requestGet, requestPost, requestPut } from '@/utils/dva17';
import { message } from 'antd';

export default {
  namespace: NTags,
  state: {
    tagList: [],
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
      const res: any = await requestGet('tag', payload);
      reducer(RSetState, { tagList: res });
    },
    async [EPost]({ payload }: any) {
      await requestPost('tag', payload);
      message.success('添加标签成功');
    },
    async [EPut]({ payload }: any) {
      await requestPut(`tag/${payload.id}`, payload);
      message.success('修改标签成功');
    },
    async [EDelete]({ payload }: any) {
      await requestDelete(`tag/${payload.id}`);
      message.success('删除标签成功');
    },
    async [ESort]({ payload }: any) {
      await requestPut(`tag/${payload.id}/order`, payload);
      message.success('标签排序成功');
    },
  },
};
