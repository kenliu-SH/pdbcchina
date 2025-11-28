import {
  EBuildConfig,
  EGet,
  ELogoConfig,
  EPut,
  EditBuildConfig,
  EditLogoConfig,
  NSystem,
  RSetState,
} from '@/common/action';
import { requestGet, requestPut } from '@/utils/dva17';

export default {
  namespace: NSystem,
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
    async [EGet]({ payload }: any) {
      const res: any = await requestGet('systemConfig/protein', payload);
      return res?.value;
    },
    async [EPut]({ payload }: any) {
      await requestPut('systemConfig/protein', payload);
    },
    async [ELogoConfig]({ payload }: any) {
      const res: any = await requestGet('systemConfig/logo', payload);
      return res?.value;
    },
    async [EditLogoConfig]({ payload }: any) {
      await requestPut('systemConfig/logo', payload);
    },
    async [EBuildConfig]({ payload }: any) {
      console.log('payload: ', payload);
      const res: any = await requestGet('systemConfig/building', payload);
      return res?.value;
    },
    async [EditBuildConfig]({ payload }: any) {
      await requestPut('systemConfig/building', payload);
    },
  },
};
