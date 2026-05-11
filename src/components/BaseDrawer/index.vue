<template>
  <el-drawer
    ref="drawer"
    class="base-drawer"
    :style="{
      '--minSize': $pxToRem(minSize)
    }"
    :append-to-body="appendToBody"
    :size="$pxToRem(size)"
    :close-on-press-escape="closeOnPressEscape"
    :wrapper-closable="wrapperClosable"
    :before-close="handleBeforeClose"
    v-bind="$attrs"
    v-on="$listeners"
    @open="onOpen"
    @closed="onClosed"
  >
    <div
      class="base-drawer-container"
      :style="{
        padding: noBodyPadding ? '0' : null
      }"
    >
      <!-- default slot -->
      <slot />
    </div>
    <!-- footer -->
    <div
      v-if="(footerVNodeList || []).length"
      class="base-drawer-footer"
    >
      <v-render :render="() => footerVNodeList" />
    </div>
    <!-- footer -->
    <div
      v-else-if="showFooter"
      class="base-drawer-footer"
    >
      <!-- footerLeft slot -->
      <slot name="footerLeft" />
      <!-- footer slot -->
      <slot name="footer">
        <el-button
          v-if="showCancel"
          type="text"
          :loading="cancelButtonLoading || buttonLoading"
          @click="handleCancel"
          >{{ cancelText }}</el-button
        >
        <slot name="footerCenter" />
        <el-button
          v-if="showConfirm"
          type="primary"
          :loading="confirmButtonLoading || buttonLoading"
          @click="handleConfirm"
          >{{ confirmText }}</el-button
        >
      </slot>
      <!-- footerRight slot -->
      <slot name="footerRight" />
    </div>
    <div
      v-if="loading || drawerLoading"
      v-loading="loading || drawerLoading"
      class="base-drawer-loading"
    />
  </el-drawer>
</template>

<script>
export default {
  name: 'BaseDrawer',
  provide() {
    return {
      updateDrawerLoading: bool => {
        this.setLoading(bool);
      },
      updateBaseDrawerFooter: this.updateBaseDrawerFooter
    };
  },
  props: {
    // 所有prop引數以及事件和elementUI中保持一致
    // 常用屬性
    // title
    // visible.sync
    size: {
      type: String,
      default: '803px'
    },
    minSize: {
      type: String,
      default: ''
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false
    },
    wrapperClosable: {
      type: Boolean,
      default: false
    },

    // 自定義屬性
    showFooter: {
      type: Boolean,
      default: true
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '確定'
    },
    cancelButtonLoading: Boolean,
    confirmButtonLoading: Boolean,
    buttonLoading: Boolean,
    loading: Boolean, // 整個彈窗 loading
    beforeClose: {
      type: Function,
      default: null
    },
    showCloseConfirm: {
      // 關閉時是否顯示確認彈窗
      type: Boolean,
      default: false
    },
    noBodyPadding: Boolean // 內容盒子不要padding
  },
  data() {
    return {
      drawerLoading: false,
      footerVNodeList: []
    };
  },
  created() {
    this.$emit('closedChange', !this.$attrs.visible);
  },
  methods: {
    setLoading(bool) {
      this.drawerLoading = !!bool;
    },
    updateBaseDrawerFooter(VNodeList) {
      // console.log(VNodeList);
      this.footerVNodeList = VNodeList;
    },
    close() {
      return this.$refs.drawer.closeDrawer();
    },
    handleCancel() {
      this.close();
      this.$emit('cancel');
    },
    handleConfirm() {
      this.$emit('confirm');
    },
    onOpen() {
      // 用途：通知父元件,判斷drawer是否已經完全關閉（因為有關閉動畫）
      this.$emit('closedChange', false);
      this.$nextTick(() => {
        this.$refs.drawer.$el.title = '';
      });
    },
    onClosed() {
      this.footerVNodeList = [];
      this.drawerLoading = false;
      this.$emit('closedChange', true);
    },
    // before-close
    handleBeforeClose(done) {
      if (typeof this.beforeClose === 'function') {
        // 如果傳入了 beforeClose
        this.beforeClose(done);
      } else {
        // 顯示關閉提示
        if (this.showCloseConfirm) {
          this.$confirm('確認關閉？', '提示')
            .then(() => {
              done();
            })
            .catch(() => null);
        } else {
          // 不顯示關閉提示
          done();
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import './baseDrawer.scss';

.base-drawer {
  display: flex;
  flex-direction: column;

  &::v-deep {
    & > .el-drawer__open > .el-drawer {
      &.rtl,
      &.ltr {
        min-width: var(--minSize);
      }
      &.ttb,
      &.btt {
        min-height: var(--minSize);
      }
    }
    .el-drawer__body {
      flex: 1;
      display: flex;
      flex-direction: column;
      font-size: 14px;
    }
  }
}
.base-drawer-container {
  padding: 24px 24px 16px;
  flex: 1;
  overflow: auto;
  z-index: 1;
}
// ----------

.base-drawer-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  ::v-deep {
    .el-loading-mask {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
