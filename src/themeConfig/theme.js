/*
 * 系統主題配置
 */

import { arrayToObject } from '@/utils/index.js';

export const DEFAULT_THEME_TYPE = 'skin-blue';

export const themes = [
  // 藍色預設
  {
    text: '預設',
    colorName: '藍',
    type: 'skin-blue',
    asyncImport: () => import('@a/styles/theme/blue.lazy.scss'),
    variable: ''
  },
  // 紅色國慶
  {
    text: '國慶',
    colorName: '紅',
    type: 'skin-red',
    asyncImport: () => import('@a/styles/theme/red.lazy.scss'),
    variable: ''
  },
  // 綠色農業
  {
    text: '農業',
    colorName: '綠',
    type: 'skin-green',
    asyncImport: () => import('@a/styles/theme/green.lazy.scss'),
    variable: ''
  },
  // 灰色公祭日
  {
    text: '公祭日',
    colorName: '灰',
    type: 'skin-grey',
    asyncImport: () => import('@a/styles/theme/blue.lazy.scss'),
    variable: ''
  }
];

export const themeConfigMap = arrayToObject(themes, 'type');
