import { requestGet } from './dva17';
import Chinese from 'chinese-s2t';

//处理请求返回json数据为antd pro需要的格式
export const req = async (url: string, body?: any | null, serverHomeIndex?: number) => {
  if (body) {
    body.page = body.current;
    delete body.current;
  }
  let data: any = await requestGet(url, body);
  const dataKeys: any = Object.keys(data);
  if (dataKeys.indexOf('pagination') != -1) {
    data = {
      data: data.rows,
      current: data['pagination'].page,
      total: data['pagination'].count,
      pageSize: data['pagination'].pageSize,
    };
  }
  return data;
};

//名称：中英文处理
export function getLocale(vo: any, locale: string) {
  switch (locale) {
    case 'zh-CN':
      return vo.zhName;
      break;
    case 'zh-TW':
      return Chinese.s2t(vo.zhName);
      break;
    case 'en-US':
      return vo.name;
      break;
  }
}
//名称：中英文处理
export function getDescLocale(vo: any, locale: string) {
  switch (locale) {
    case 'zh-CN':
      return vo.zhDescribe;
      break;
    case 'zh-TW':
      return Chinese.s2t(vo.zhDescribe);
      break;
    case 'en-US':
      return vo.describe || '-';
      break;
  }
}
