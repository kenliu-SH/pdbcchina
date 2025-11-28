import React from 'react';
import { Provider } from 'react-redux';
import models from '@/models';
import {
  bindJWTToken,
  initRequest,
  initModels,
  requestGet,
} from '@/utils/dva17';
import Config from '@/common/config';
import { notification } from 'antd';
import './global.less';
import { THEME, THEME_COLOR_LIST } from '@/common/enum';
import { getLocale, history, setLocale } from 'umi';
import './assets/iconfont/iconfont.css';
import { changeRootClassName } from './utils/utils';
import 'react-quill/dist/quill.snow.css';

const env = process.env.UMI_SERVER || 'test';

initRequest(
  Config.SERVER_HOME,
  (status: any, data: any) => {
    if (401 == status) {
      localStorage.removeItem(Config.TOKEN);
    } else {
      const { message } = data;
      notification.error({ message, duration: 2 });
    }
  },
  false, //是否打印request记录
);
bindJWTToken(localStorage.getItem(Config.TOKEN));

export async function getInitialState(): Promise<{
  theme?: any;
  isLock?: any;
  currentUser?: any;
  fetchTheme?: any;
  fetchUserInfo?: any;
}> {
  const fetchTheme = async () => {
    try {
      const localTheme: any = localStorage.getItem('theme');
      let themeClass =
        (localTheme && THEME_COLOR_LIST[localTheme] && localTheme) ||
        'red_deep_theme';
      const themeList: any = await requestGet('home/theme');
      const defaultTheme: any = themeList[0] || {};
      const { isLock } = defaultTheme;
      if (defaultTheme.type === '黑白') {
        themeClass = 'yellow_deep_theme gray_page';
      } else {
        if (
          defaultTheme.isLock === 1 ||
          (defaultTheme &&
            (!localTheme || localTheme === 'yellow_deep_theme gray_page'))
        ) {
          themeClass =
            defaultTheme.type === '黑白'
              ? THEME['黑白']
              : THEME[defaultTheme.type][defaultTheme.status];
        }
      }
      changeRootClassName(themeClass);
      return {
        theme: themeClass,
        isLock,
      };
    } catch (error) {
      return {
        isLock: false,
        theme: 'red_deep_theme',
      };
    }
  };
  const fetchUserInfo = async () => {
    try {
      const { user }: any = await requestGet('user');
      return user;
    } catch (error) {}
  };
  const { theme, isLock }: any = await fetchTheme();
  const currentUser: any = await fetchUserInfo();
  return {
    theme,
    isLock,
    currentUser,
    fetchTheme,
    fetchUserInfo,
  };
}

// 修改交给 react-dom 渲染时的根组件
export function rootContainer(container: any) {
  const umiLocale = getLocale();
  const locale = navigator.language;
  if (!umiLocale && locale) setLocale(locale);
  const ThemeProvider = ({ children }: any) => (
    <Provider store={initModels(models, false)}>{children}</Provider>
  );
  return React.createElement(ThemeProvider, null, container);
}

export function onRouteChange({ matchedRoutes }: any) {
  const {
    location: { pathname },
  } = history;
  const locale = getLocale();
  const Title_Local: any = {
    'zh-CN': '国家蛋白质科学中心|上海',
    'zh-TW': '國家蛋白質科學中心|上海',
    'en-US': 'NATIONAL CENTER FOR PROTEIN SCIENCE | SHANGHAI',
  };
  if (
    ['prod', 'test'].includes(env) &&
    !localStorage.getItem('allowAccess') &&
    pathname !== '/access'
  ) {
    history.push('/access');
  }
  if (matchedRoutes.length) {
    const { title } = matchedRoutes[matchedRoutes.length - 1].route;
    document.title = (title && title + '-' + Title_Local[locale]) || '';
  }
}
