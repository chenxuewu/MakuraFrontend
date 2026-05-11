## 开发

```bash
# 克隆项目
git clone https://gitee.com/y_project/RuoYi-Vue

# 进入项目目录
cd ruoyi-ui

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通過如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npmmirror.com

# 啟動服務
npm run dev
```
 
瀏覽器訪問 http://localhost:80

## 发布 

```bash
# 构建测试环境
npm run build:stage
 
# 构建生产环境
npm run build:prod
```

# 前端埋點事件日誌使用說明

## 全局事件日誌方法

系統提供了全局方法 `$logEvent` 用於記錄前端埋點日誌，可在任何 Vue 組件中使用。

### 方法簽名

```javascript
/**
 * 記錄前端埋點日誌
 * @param {String} eventType 事件類型，例如：click、view、submit、cancel、other
 * @param {String} buttonType 按鈕類型，例如：submit、cancel、confirm、close、save
 * @param {String} buttonSource 按鈕來源
 * @param {String} pageUrl 頁面URL
 * @param {Object} extraData 額外數據
 */
this.$logEvent(eventType, buttonType, buttonSource, pageUrl, extraData = {})
```

### 使用示例

```javascript
// 記錄點擊事件
this.$logEvent('click', 'submit', '商品詳情頁', '/product/detail/123', { productId: 123 });

// 記錄頁面瀏覽事件
this.$logEvent('view', null, '商品列表頁', '/product/list', { category: 'food' });

// 記錄表單提交事件
this.$logEvent('submit', 'save', '訂單確認頁', '/order/confirm', { orderId: 456 });
```

### 事件類型說明

- `click`: 點擊事件
- `view`: 頁面瀏覽事件
- `submit`: 表單提交事件
- `cancel`: 取消操作事件
- `other`: 其他類型事件

### 按鈕類型說明

- `submit`: 提交按鈕
- `cancel`: 取消按鈕
- `confirm`: 確認按鈕
- `close`: 關閉按鈕
- `save`: 保存按鈕