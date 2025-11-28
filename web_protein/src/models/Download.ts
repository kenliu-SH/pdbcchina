import { EOptions, NDownload, RSetState } from '@/common/action';
import { requestGet } from '@/utils/dva17';
import { filter } from 'lodash';

export default {
  namespace: NDownload,
  state: {
    displayOpt: [],
    downOpt: [],
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
    async [EOptions]({ payload }: any, { reducer }: any) {
      const arr = [];
      const res: any = await requestGet('file/v2/options/' + payload.id);
      for (const key in res) {
        arr.push(res[key]);
      }
      reducer(RSetState, {
        displayOpt: filter(arr, { isDisplay: true }),
        downOpt: filter(arr, { isDownload: true }),
      });
    },
  },
};
