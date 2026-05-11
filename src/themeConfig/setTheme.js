import { themeConfigMap } from './theme.js';

/** @type {{use():void, unuse():void}} */
let current;

export async function setTheme(themeType) {
  const themeItem = themeConfigMap[themeType];
  themeItem.asyncImport().then(style => {
    themeItem.variable = style.locals;
    if (current) {
      current.unuse(); // 刪除已有樣式
    }
    style.use && style.use(); // 使用現有樣式
    current = style;
  });
}
