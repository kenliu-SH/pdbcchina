import { EDelete, EGet, EPost, EPut, NOptions, RSetState } from '@/common/action';
import { NAV_TYPE } from '@/common/enum';
import { requestDelete, requestGet, requestPost, requestPut } from '@/utils/dva17';
import { message } from 'antd';
import { orderBy } from 'lodash';

export default {
  namespace: NOptions,
  state: {
    optionsNav: null,
    optionsMenu: null,
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
      const res: any = await requestGet('options', payload);
      if (payload.type === NAV_TYPE['menuBar']) {
        reducer(RSetState, { optionsMenu: orderBy(res, 'order', 'desc') });
      } else {
        reducer(RSetState, { optionsNav: orderBy(res, 'order', 'desc') });
      }
    },
    async [EPost]({ payload }: any) {
      await requestPost('options', payload);
      message.success('添加栏目成功');
    },
    async [EPut]({ payload }: any) {
      await requestPut(`options/${payload.id}`, payload);
      message.success('编辑栏目成功');
    },
    async [EDelete]({ payload }: any) {
      await requestDelete(`options/${payload.id}`);
      message.success('删除栏目成功');
    },
  },
};
