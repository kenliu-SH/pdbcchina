import {
  EDelete,
  EDeleteSubItem,
  EGet,
  EPost,
  EPostSubItem,
  EPut,
  EPutSubItem,
  NNavigation,
  RSetState,
} from '@/common/action';
import { requestDelete, requestGet, requestPost, requestPut } from '@/utils/dva17';
import { message } from 'antd';
import { groupBy } from 'lodash';

export default {
  namespace: NNavigation,
  state: {
    navBar: null,
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
      const res: any = await requestGet('navBar/preview', payload);
      const arr = [];
      const navBar = groupBy(res, 'optionId');
      for (const index in navBar) {
        arr.push({
          id: navBar[index][0].option?.id,
          name: navBar[index][0].option?.name,
          zhName: navBar[index][0].option?.zhName,
          navBarItems: navBar[index],
        });
      }
      reducer(RSetState, { navBar: arr });
    },
    async [EPost]({ payload }: any) {
      await requestPost('navBar', payload);
      message.success('新建主项成功！');
    },
    async [EPut]({ payload }: any) {
      await requestPut(`navBar/${payload.id}`, payload);
      message.success('编辑主项成功！');
    },
    async [EDelete]({ payload }: any) {
      await requestDelete(`navBar/${payload.id}`);
      message.success('删除主项成功！');
    },
    async [EPostSubItem]({ payload }: any) {
      await requestPost(`navBar/${payload.id}`, payload);
      message.success('新建子项成功！');
    },
    async [EPutSubItem]({ payload }: any) {
      await requestPut(`navBar/item/${payload.id}`, payload);
      message.success('编辑子项成功！');
    },
    async [EDeleteSubItem]({ payload }: any) {
      await requestDelete(`navBar/item/${payload.id}`);
      message.success('删除子项成功！');
    },
  },
};
