import Chinese from 'chinese-s2t';
import { getLocale } from 'umi';

export const chineseConversion = (text: any) => {
  const locale = getLocale();
  if (locale === 'zh-TW') return Chinese.s2t(text);
  return text;
};

export const chineseConvertRichText = (richText: any) => {
  const locale = getLocale();
  if (locale === 'zh-TW') {
    // 使用正则表达式匹配中文简体文字
    const regex = /[\u4e00-\u9fa5]/g; // 匹配中文字符的正则表达式
    const editedText = richText.replace(regex, function (match: any) {
      // 在此回调函数中可以对每个匹配到的中文字符进行处理
      // 这里我们将每个中文字符替换为繁体
      return Chinese.s2t(match);
    });
    return editedText;
  }
  return richText;
};
