import {
  NNews,
  RSetState,
  EGetOne,
  EGet,
  EYearOpt,
  EIds,
} from '@/common/action';
import { requestGet } from '@/utils/dva17';
import { getLocale } from 'umi';

export default {
  namespace: NNews,
  state: { newsList: null, newsDetails: null, yearOpt: [], allIds: [] },
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
      let { newsList } = state;
      const res: any = await requestGet('news', payload);
      if (payload.page === 1) {
        newsList = res;
      } else {
        newsList = {
          ...res,
          rows: newsList.rows.concat(res.rows),
        };
      }
      reducer(RSetState, { newsList });
    },
    async [EGetOne]({ payload }: any, { reducer }: any) {
      const res = await requestGet(`news/${payload.id}`, payload);
      reducer(RSetState, { newsDetails: res });
    },
    async [EYearOpt]({ payload }: any, { reducer }: any) {
      const res = await requestGet('news/find/year', payload);
      reducer(RSetState, {
        yearOpt: res,
      });
    },
    async [EIds]({ payload }: any, { reducer }: any) {
      const res: any = await requestGet('news/find/id', payload);
      reducer(RSetState, { allIds: res });
    },
  },
};
