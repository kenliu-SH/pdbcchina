import { cloneDeep, filter } from 'lodash';
import axios from 'axios';
import config from '@/common/config';
import { message } from 'antd';
import { getLocale } from 'umi';
import { chineseConversion } from './trans';

export const queryFormat = (params: any) => {
  const query: any = {
    type: 'group',
    logical_operator: 'and',
    nodes: cloneDeep(params)
      ?.map(({ queryJson }: any) => {
        queryJson.nodes = queryJson.nodes
          ?.map((vo: any) => {
            vo.nodes = filter(vo.nodes, (vv: any) => {
              if (vv.parameters) return vv;
            });
            if (vo.nodes.length !== 0) return vo;
          })
          .filter((vv: any) => {
            if (vv) return vv;
          });
        if (queryJson.nodes.length !== 0) return queryJson;
      })
      .filter((vv: any) => {
        if (vv) return vv;
      }),
  };
  return query;
};

// 下载文件，buffer二进制流
export const downFile = (buffer: any, fienName = 'fienName.xlsx') => {
  const blob = new Blob([buffer], {
    type: 'application/application/octet-stream',
  });
  const fileName = fienName;
  if ('download' in document.createElement('a')) {
    // 非IE下载
    const elink = document.createElement('a');
    elink.download = fileName;
    elink.style.display = 'none';
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
  } else {
    // IE10+下载
    navigator.msSaveBlob(blob, fileName);
  }
};

//下载PDB条目文件
export const downPdbFile = (payload: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(config.SERVER_HOME + `file/pack/down`, payload, {
        responseType: 'blob',
      })
      .then((res) => {
        const blob = res.data;
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = (e: any) => {
          const a = document.createElement('a');
          a.download = `package.zip`;
          // 后端设置的文件名称在res.headers的 "content-disposition": "form-data; name=\"attachment\"; filename=\"20181211191944.zip\"",
          a.href = e.target.result;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          resolve('success');
        };
      })
      .catch((error) => {
        message.error('Download failed, please refresh and try again!');
        reject('error');
        throw error;
      });
  });
};

//根据语言环境获取指定的名称字段
export const getLocalName = (payload: any) => {
  const locale = getLocale();
  switch (locale) {
    case 'en-US':
      return payload.name;
      break;
    default:
      return chineseConversion(payload.zhName);
  }
};

//根据语言环境获取指定的名称字段
export const getLocalDesc = (payload: any) => {
  const locale = getLocale();
  switch (locale) {
    case 'en-US':
      return payload.describe;
      break;
    default:
      return chineseConversion(payload.zhDescribe);
  }
};

/*
    将字符串中的数字显示为下标。
*/
export function formarSubscripts(text: any) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[0-9]/)) {
      result += '<sub>' + char + '</sub>';
    } else {
      result += char;
    }
  }
  return result;
}

/*
    将字符串中大于10的数字对10取余的结果显示为下标。
    */
export function formatSubscriptsWithRemainder(text: any, n: any) {
  let result = [];
  let words = text.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.match(/[0-9]/)) {
      let number = parseInt(word);
      if (number > 10) {
        let remainder = number % 10;
        let subscript = '<sub>' + remainder + '</sub>';
        result.push(word.replace(/.$/, subscript));
      } else {
        result.push(word);
      }
    } else {
      result.push(word);
    }
  }
  return result.join(' ');
}

export function decimalFormatting(value: any) {
  return value && typeof value === 'number'
    ? Math.round(value * 1000) / 1000
    : value;
}

/**
 * 变更根节点的样式类
 */
export function changeRootClassName(themeClass: any) {
  localStorage.setItem('theme', themeClass);
  const rootContainer: any = document.querySelector('#root');
  rootContainer.className = rootContainer.className.replace(
    rootContainer.className,
    themeClass,
  );
}
