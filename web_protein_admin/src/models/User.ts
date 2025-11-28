import { NUser, ELogin, RSetState } from '@/common/action';
import { requestPost, bindJWTToken } from '@/utils/dva17';
import { message } from 'antd';
import { find } from 'lodash';
import { history } from 'umi';

export default {
  namespace: NUser,
  state: {
    currentUser: null,
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
    async [ELogin]({ payload }: any, { reducer }: any) {
      const { token, user }: any = await requestPost('user/token', payload);
      const { role } = user || {};
      const { power } = role || {};
      const url = find(power, (vv: any) => {
        return vv.indexOf(':') < 0;
      });
      bindJWTToken(token);
      localStorage.setItem('token', token);
      reducer(RSetState, { currentUser: user });
      history.push(url ? url : '/');
      message.success('登录成功');
    },
  },
};
