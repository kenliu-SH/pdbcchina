import {
  EBaseInfo,
  NHome,
  RSetState,
  EHighlight,
  ENews,
  EFooter,
  EMenus,
  ENavBar,
  ELayoutInfo,
  EUnder,
  EGet,
} from '@/common/action';
import { requestGet } from '@/utils/dva17';
import { filter, groupBy, orderBy } from 'lodash';
import { getLocale } from 'umi';

export default {
  namespace: NHome,
  state: {
    current: null,
    baseInfo: null,
    highlights: null,
    footers: null,
    footersLinks: null,
    navBar: null,
    menuBar: null,
    layoutInfo: null,
    underInfo: null,
    statInfo: null,
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
      const res: any = await requestGet('home/protein', payload);
      reducer(RSetState, { statInfo: res?.value });
    },
    async [EBaseInfo]({ payload }: any, { reducer }: any) {
      const res = await requestGet('home/base', payload);
      reducer(RSetState, { baseInfo: res });
    },
    async [EHighlight]({ payload }: any, { reducer }: any) {
      const locale = getLocale();
      payload.isChinese = locale === 'en-US' ? 1 : 0;
      const res = await requestGet('highlights', payload);
      reducer(RSetState, { highlights: res });
    },
    async [ENews]({ payload }: any, { reducer }: any) {
      const locale = getLocale();
      payload.isChinese = locale === 'en-US' ? 1 : 0;
      const res = await requestGet('news', payload);
      reducer(RSetState, { newsList: res });
    },
    async [EFooter]({ payload = {} }: any, { reducer }: any) {
      const res: any = await requestGet('home/footers', payload);
      reducer(RSetState, {
        footers: res,
      });
    },
    async [EMenus]({ payload }: any, { reducer }: any) {
      const res: any = await requestGet('home/menuBar', payload);
      const arr = [];
      const menuBar = groupBy(res, 'optionId');
      for (const index in menuBar) {
        arr.push({
          icon: menuBar[index][0]?.option?.icon,
          optionId: menuBar[index][0]?.optionId,
          name: menuBar[index][0]?.option?.name,
          order: menuBar[index][0]?.option?.order,
          zhName: menuBar[index][0]?.option?.zhName,
          navBarItems: menuBar[index],
        });
      }
      reducer(RSetState, { menuBar: orderBy(arr, 'order', 'desc') });
    },
    async [ENavBar]({ payload }: any, { reducer }: any) {
      const res: any = await requestGet('home/navBar', payload);
      const arr = [];
      const navBar = groupBy(res, 'optionId');
      for (const index in navBar) {
        arr.push({
          name: navBar[index][0]?.option?.name,
          zhName: navBar[index][0]?.option?.zhName,
          order: navBar[index][0]?.option?.order,
          navBarItems: navBar[index],
        });
      }
      reducer(RSetState, { navBar: orderBy(arr, 'order', 'desc') });
    },
    async [ELayoutInfo]({ payload }: any, { reducer }: any) {
      const { value }: any = await requestGet('home/logo', payload);
      reducer(RSetState, { layoutInfo: value });
    },
    async [EUnder]({ payload }: any, { reducer }: any) {
      const res: any = await requestGet('home/building');
      reducer(RSetState, { underInfo: res?.value });
    },
  },
};
