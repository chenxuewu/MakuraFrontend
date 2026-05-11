import Vue from 'vue';
import { listConfig } from '@/api/system/config.js';
import { setTheme } from '@/themeConfig/setTheme.js';
import { DEFAULT_THEME_TYPE, themeConfigMap, themes } from '@/themeConfig/theme.js';
import { getToken } from '@/utils/auth.js';

const vm = new Vue();

// 獲取主題型別
export function getThemeType() {
  return vm.$store.state.settings.themeType;
}

// 設定主題型別
export function setThemeType(themeType) {
  if (!themeConfigMap[themeType]) {
    themeType = DEFAULT_THEME_TYPE;
  }
  handleThemeTypeChange(themeType);
  vm.$store.commit('settings/_setThemeType', themeType);
}

// 根據當前主題，獲取對應主題的顏色預設值
export function getThemeColor() {
  return themeConfigMap[getThemeType()]?.variable || {};
}

// 從介面獲取主題配置，設定主題型別
export function initThemeType() {
  if (!getToken()) {
    setThemeType();
    return;
  }
  listConfig({
    pageNum: 1,
    pageSize: 10
  })
    .then(response => {
      const configList = response.rows || [];
      const configValue = configList.find(t => t.configKey === 'sys.index.skinName')?.configValue?.trim?.();
      setThemeType(configValue);
    })
    .catch(() => {
      setThemeType();
    });
}

// 監聽主題型別，改變後切換主題scss檔案，切換body主題類名
function handleThemeTypeChange(themeType) {
  // 給body繫結主題樣式;
  document.body.classList.remove(...themes.map(item => item.type));
  document.body.classList.add(themeType);
  // 切換主題檔案
  setTheme(themeType);
}
