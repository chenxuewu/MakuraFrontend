import { addEventLog } from '@/api/monitor/eventlog'

/**
 * 記錄前端埋點日誌
 * @param {String} eventType 事件型別，例如：click、view、submit、cancel、other
 * @param {String} buttonType 按鈕型別，例如：submit、cancel、confirm、close、save
 * @param {String} buttonSource 按鈕來源
 * @param {String} pageUrl 頁面URL
 * @param {Object} extraData 額外資料
 */
export function logEvent(eventType, buttonType, buttonSource, pageUrl, extraData = {}) {
  try {
    // 獲取瀏覽器和作業系統資訊
    const userAgent = navigator.userAgent;
    const browser = getBrowserInfo(userAgent);
    const os = getOSInfo(userAgent);

    const logData = {
      eventType,
      buttonType,
      buttonSource,
      pageUrl: pageUrl || window.location.href,
      os,
      browser,
      extraData: JSON.stringify(extraData)
    };

    // 使用 setTimeout 將 API 呼叫放入下一個事件迴圈，避免阻塞當前操作
    setTimeout(() => {
      addEventLog(logData).catch(error => {
        console.error('事件日誌記錄失敗:', error);
      });
    }, 0);
    
    // 直接返回成功，不等待 API 響應
    return Promise.resolve();
  } catch (error) {
    console.error('事件日誌處理異常:', error);
    return Promise.resolve(); // 返回一個已解決的Promise，不讓錯誤向上傳播
  }
}

/**
 * 獲取瀏覽器資訊
 * @param {String} userAgent 使用者代理字串
 * @returns {String} 瀏覽器資訊
 */
function getBrowserInfo(userAgent) {
  const browsers = {
    edge: /Edge\/([\d.]+)/,
    ie: /MSIE\s([\d.]+)/ || /Trident\/[\d](?=[^\?]).*rv:([0-9.].)/,
    firefox: /Firefox\/([\d.]+)/,
    chrome: /Chrome\/([\d.]+)/,
    opera: /Opera\/([\d.]+)/,
    safari: /Version\/([\d.]+).*Safari/
  };

  for (const key in browsers) {
    const match = userAgent.match(browsers[key]);
    if (match) return `${key} ${match[1]}`;
  }
  return '';
}

/**
 * 獲取作業系統資訊
 * @param {String} userAgent 使用者代理字串
 * @returns {String} 作業系統資訊
 */
function getOSInfo(userAgent) {
  const os = {
    windows: /Windows NT\s([\d.]+)/,
    mac: /Mac OS X\s([\d_.]+)/,
    ios: /iPhone OS\s([\d_]+)/,
    android: /Android\s([\d.]+)/,
    linux: /Linux/
  };

  for (const key in os) {
    const match = userAgent.match(os[key]);
    if (match) {
      if (key === 'mac') return `MacOS ${match[1].replace(/_/g, '.')}`;
      if (key === 'ios') return `iOS ${match[1].replace(/_/g, '.')}`;
      return `${key} ${match[1] || ''}`.trim();
    }
  }
  return '';
} 