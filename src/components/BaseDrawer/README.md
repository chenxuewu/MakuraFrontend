##对el-drawer进行简单二次封装，增加一些参数，主要加了底部

##props
####和el-drawer保持一致，不一样的都是自定义的屬性
| prop                  | 型別      | 说明                          |
|:----------------------|:--------|:----------------------------|
| showFooter            | boolean | 是否顯示 footer                 |
| showCancel            | boolean | 是否顯示底部“取消”按钮                |
| showConfirm           | boolean | 是否顯示底部“确认”按钮                |
| cancelText            | string  | 底部“取消”按钮的文字                 |
| confirmText           | string  | 底部“确认”按钮的文字                 |
| cancelButtonLoading   | boolean | 底部“取消”按钮是否loading           |
| confirmButtonLoading  | boolean | 底部“确认”按钮是否loading           |
| buttonLoading         | boolean | 底部“取消”“确认”按钮是否loading（同时控制） |
| loading               | boolean | 整个弹窗是否loading               |
| showCloseConfirm      | boolean | 是否在关闭时顯示确认弹窗，确认后才会关闭drawer  |

##provide

####updateDrawerLoading --> 打开/关闭 loading
####
```javascript
// 说明
型別: function(Boolean)
参数1: 布尔值

// 使用
inject: {
  updateDrawerLoading: {
    default: () => {}
  }
}
methods: {
  close() {
    this.updateDrawerLoading(false)
  }
}
```

##methods
```javascript
无
```

##slot
```html
default       主体内容

footer        底部中间内容，預設有两个按钮，居右

footerLeft    footer左边内容，預設空

footerRight   footer右边内容，預設空
```

### 例子：
```vue
<template>
  <base-drawer
    title="xxxxx"
    :visible.sync="drawerVisible"
    size="804px"
    @confirm="handleDrawerConfirm"
  >
    xxxxx
  </base-drawer>
</template>
```
