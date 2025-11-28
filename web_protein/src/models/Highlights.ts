import {
  NHighlights,
  RSetState,
  EGetOne,
  EGet,
  EYearOpt,
  EIds,
} from '@/common/action';
import { requestGet } from '@/utils/dva17';
import { getLocale } from 'umi';

export default {
  namespace: NHighlights,
  state: {
    highlightsList: null,
    highlightsDetails: null,
    yearOpt: [],
    allIds: [],
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
    async [EGet]({ payload, state }: any, { reducer }: any) {
      const locale = getLocale();
      payload.isChinese = locale === 'en-US' ? 1 : 0;
      let { highlightsList } = state;
      const res: any = await requestGet('highlights', payload);
      if (payload.page === 1) {
        highlightsList = res;
      } else {
        highlightsList = {
          ...res,
          rows: highlightsList.rows.concat(res.rows),
        };
      }
      reducer(RSetState, { highlightsList });
    },
    async [EGetOne]({ payload }: any, { reducer }: any) {
      const res = await requestGet(`highlights/${payload.id}`, payload);
      reducer(RSetState, { highlightsDetails: res });
    },
    async [EYearOpt]({ payload }: any, { reducer }: any) {
      const res = await requestGet('highlights/find/year', payload);
      reducer(RSetState, {
        yearOpt: res,
      });
    },
    async [EIds]({ payload }: any, { reducer }: any) {
      const res: any = await requestGet('highlights/find/id', payload);
      reducer(RSetState, { allIds: res });
    },
  },
};
