import images from '@/assets/images';

export enum THEME {
  '中国红' = 'red_theme',
  '常磐' = 'green_theme',
  '瑠璃' = 'blue_theme',
  '酪黄' = 'yellow_theme',
  '黑白' = 'black_theme',
  'red_theme' = '中国红',
  'green_theme' = '常磐',
  'blue_theme' = '瑠璃',
  'yellow_theme' = '酪黄',
  'black_theme' = '黑白',
}

export enum THEME_NAME {
  中国红 = '中国红',
  常磐 = '常磐（绿）',
  瑠璃 = '瑠璃（蓝）',
  酪黄 = '酪黄',
  黑白 = '黑白',
}

export const THEME_BG = {
  红: {
    1: images.red_deep_theme,
    2: images.red_middle_theme,
    3: images.red_shallow_theme,
  },
  绿: {
    1: images.green_deep_theme,
    2: images.green_middle_theme,
    3: images.green_shallow_theme,
  },
  蓝: {
    1: images.blue_deep_theme,
    2: images.blue_middle_theme,
    3: images.blue_shallow_theme,
  },
  黄: {
    1: images.yellow_deep_theme,
    2: images.yellow_middle_theme,
    3: images.yellow_shallow_theme,
  },
  黑白: images.theme_black,
};

export enum MENU_TYPE {
  'desposit' = 'desposit',
  'search' = 'search',
  'visualize' = 'visualize',
  'download' = 'download',
  'documentation' = 'documentation',
}

export enum STATUS_KEY {
  '仅标题' = 2,
  '仅图片' = 3,
  '全部' = 1,
}

export enum NAV_TYPE {
  'navBar' = 'navBar',
  'menuBar' = 'menuBar',
}
