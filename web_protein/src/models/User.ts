import {
  NUser,
  RSetState,
  ELogin,
  ERegister,
  EBindQrcode,
  EBindStatus,
  EPut,
  EWxLoginCode,
  EWxLoginStatus,
  EVerifyEmail,
  EVerifyAccessCode,
} from '@/common/action';
import {
  bindJWTToken,
  requestGet,
  requestPost,
  requestPut,
} from '@/utils/dva17';

export default {
  namespace: NUser,
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
    //登录
    async [ELogin]({ payload }: any) {
      const { token, user }: any = await requestPost('user/token', payload);
      bindJWTToken(token);
      localStorage.setItem('token', token);
      return user;
    },
    //注册
    async [ERegister]({ payload }: any) {
      const res = await requestPost('user/register', payload);
      return res;
    },
    //编辑用户信息
    async [EPut]({ payload }: any) {
      const res = await requestPut('user', payload);
      return res;
    },
    //获取绑定微信的二维码
    async [EBindQrcode]({ payload }: any) {
      const res = await requestGet('user/wechat/bind/qrcode', payload);
      return res;
    },
    //获取微信绑定状态
    async [EBindStatus]({ payload }: any) {
      const res = await requestGet('user/wechat/bind/status/' + payload.ticket);
      return res;
    },
    //获取微信登录的二维码
    async [EWxLoginCode]({ payload }: any) {
      const res = await requestGet('user/wechat/login/qrcode', payload);
      return res;
    },
    //获取微信登录的状态
    async [EWxLoginStatus]({ payload }: any) {
      const res = await requestGet(
        'user/wechat/login/status/' + payload.ticket,
      );
      return res;
    },
    //邮箱验证
    async [EVerifyEmail]({ payload }: any) {
      const res = await requestGet('user/verification/' + payload.authCode);
      return res;
    },
    //验证访问码
    async [EVerifyAccessCode]({ payload }: any) {
      const res = await requestGet(
        `home/verifyCode/${encodeURIComponent(payload.code)}`,
      );
      return res;
    },
  },
};
