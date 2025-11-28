import {
  NStructure,
  RSetState,
  EntryBasicInfo,
  EGetExperiment,
  EGet,
} from '@/common/action';
import { requestGet } from '@/utils/dva17';

export default {
  namespace: NStructure,
  state: {
    details: null,
    literature: null,
    experimentInfo: null,
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
    async [EntryBasicInfo]({ payload }: any, { reducer }: any) {
      const res = await requestGet(`entry/structureSummary/v2/${payload.id}`);
      reducer(RSetState, { details: res });
    },
    async [EGet]({ payload }: any, { reducer }: any) {
      const res = await requestGet('entry/citation/subjoin/' + payload.id);
      reducer(RSetState, { literature: res });
    },
    async [EGetExperiment]({ payload }: any, { reducer }: any) {
      const res = await requestGet('entry/experiment/' + payload.id);
      reducer(RSetState, { experimentInfo: res });
    },
  },
};
