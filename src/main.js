import Vue from 'vue'

import Cookies from 'js-cookie'

import Element from 'element-ui'
import './assets/styles/element-variables.scss'

import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
import App from './App'
import store from './store'
import router from './router'
import directive from './directive' // directive
import plugins from './plugins' // plugins
import { download } from '@/utils/request'

import './assets/icons' // icon
import './permission' // permission control
import { getDicts } from "@/api/system/dict/data";
import { getConfigKey } from "@/api/system/config";
import { parseTime, resetForm, addDateRange, selectDictLabel, selectDictLabels, handleTree } from "@/utils/ruoyi";
import { pxToRem } from '@/utils';
import { getThemeColor, getThemeType, setThemeType } from '@/themeConfig/index.js'; // "主題切換"相關方法
import { logEvent } from '@/utils/eventLog'; // 引入事件日誌方法
// import VueI18n from 'vue-i18n';
// import zhTW from './locales/zh-TW.json';


//引入vxe-table
import 'xe-utils'
import VXETable from 'vxe-table'
import './assets/styles/my-vxe.scss'
//vxe-table-plugin-element
import VXETablePluginElement from 'vxe-table-plugin-element'
import 'vxe-table-plugin-element/dist/style.css'

import "./assets/backend/css/style.css";
import "./assets/backend/css/font-awesome.min.css";
import "./assets/backend/css/simdahs.css";
import "./assets/backend/css/themify-icons.css";

Vue.use(VXETable)

VXETable.use(VXETablePluginElement)
// 引入 ECharts
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
// 手動引入 ECharts 各模組來減小打包體積

import {
    CanvasRenderer
} from 'echarts/renderers'
import {
    BarChart
} from 'echarts/charts'
import {
    GridComponent,
    TooltipComponent
} from 'echarts/components'
use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent
]);
//全域性註冊元件（也可以使用區域性註冊）
Vue.component('v-chart', ECharts)

// Vue.use(VueI18n)
//
// const i18n = new VueI18n({
//   locale: 'zh-TW',
//   messages: {
//     'zh-TW': zhTW
//   }
// })

// 分頁元件
import Pagination from "@/components/Pagination";
// 自定義表格工具元件
import RightToolbar from "@/components/RightToolbar"
// 富文字元件
import Editor from "@/components/Editor"
// 檔案上傳元件
import FileUpload from "@/components/FileUpload"
// 圖片上傳元件
import ImageUpload from "@/components/ImageUpload"
// 圖片預覽元件
import ImagePreview from "@/components/ImagePreview"
// 字典標籤元件
import DictTag from '@/components/DictTag'
// 頭部標籤元件
import VueMeta from 'vue-meta'
// 字典資料元件
import DictData from '@/components/DictData'


// 全域性方法掛載
Vue.prototype.getDicts = getDicts
Vue.prototype.getConfigKey = getConfigKey
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.selectDictLabel = selectDictLabel
Vue.prototype.selectDictLabels = selectDictLabels
Vue.prototype.download = download
Vue.prototype.handleTree = handleTree
Vue.prototype.$pxToRem = pxToRem;
Vue.prototype.$logEvent = logEvent;

// 全域性元件掛載
import BaseTitle from '@c/BaseTitle';


// /* Layout */
// import Layout from '@/layout'
// // 前臺的Layout
// import { Front } from '@/layout/front.vue'

// Vue.component('Layout', Layout);
// Vue.component('Front', Front);

Vue.component('BaseTitle', BaseTitle);
Vue.component('DictTag', DictTag)
Vue.component('Pagination', Pagination)
Vue.component('RightToolbar', RightToolbar)
Vue.component('Editor', Editor)
Vue.component('FileUpload', FileUpload)
Vue.component('ImageUpload', ImageUpload)
Vue.component('ImagePreview', ImagePreview)

Vue.use(directive)
Vue.use(plugins)
Vue.use(VueMeta)
DictData.install()

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  // i18n,
  render: h => h(App)
})
