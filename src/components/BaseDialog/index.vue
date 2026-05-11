<template>
  <el-dialog
    ref="dialog"
    class="base-dialog"
    :class="{
      'is-center-y': centerY
    }"
    append-to-body
    :width="myWidth"
    :close-on-click-modal="closeOnClickModal"
    :before-close="handleBeforeClose"
    v-bind="$attrs"
    v-on="$listeners"
    @open="onOpen"
    @closed="onClosed"
  >
    <template #title>
      <slot name="title" />
    </template>
    <div
      class="base-dialog-container"
      :style="{
        padding: noBodyPadding ? '0' : null
      }"
    >
      <!-- default slot -->
      <slot />
    </div>
    <template
      v-if="showFooter"
      #footer
    >
      <div class="base-dialog-footer">
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
    </template>
    <div
      v-if="loading || dialogLoading"
      v-loading="loading || dialogLoading"
      class="base-dialog-loading"
    />
  </el-dialog>
</template>

<script>
export default {
  name: 'BaseDialog',
  provide() {
    return {
      updateDialogLoading: bool => {
        this.setLoading(bool);
      }
    };
  },
  props: {
    // 所有prop引數以及事件和elementUI中保持一致
    // 常用屬性
    // title
    // visible.sync
    width: {
      type: String,
      default: null
    },
    size: {
      type: String, // small: 560 | medium: 720 | large: 960
      default: null
    },
    closeOnClickModal: {
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
    centerY: {
      type: Boolean,
      default: true
    },
    noBodyPadding: Boolean // 內容盒子不要padding
  },
  data() {
    return {
      dialogLoading: false
    };
  },
  computed: {
    myWidth() {
      if (this.width) {
        return this.$pxToRem(this.width);
      }
      const sizePx = {
        small: '560px',
        medium: '720px',
        large: '960px'
      };
      return this.$pxToRem(sizePx[this.size] || sizePx.medium);
    }
  },
  created() {
    this.$emit('closedChange', !this.$attrs.visible);
  },
  methods: {
    setLoading(bool) {
      this.dialogLoading = !!bool;
    },
    // close() {
    //   return this.$refs.dialog.close();
    // },
    handleCancel() {
      // this.close();
      this.$emit('cancel');
    },
    handleConfirm() {
      this.$emit('confirm');
    },
    onOpen() {
      // 用途：通知父元件,判斷dialog是否已經完全關閉（因為有關閉動畫）
      this.$emit('closedChange', false);
      this.$nextTick(() => {
        this.$refs.dialog.$el.title = '';
      });
    },
    onClosed() {
      this.dialogLoading = false;
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
$loadingZIndex: 10;
.base-dialog {
  &::v-deep {
    .el-dialog__header {
      display: flex;
      align-items: center;
      position: relative;
      z-index: $loadingZIndex + 1;
      &::before {
        content: '';
        display: block;
        width: 4px;
        height: 16px;
        background-color: var(--colorPrimary);
        margin-right: 8px;
      }
    }
    .el-dialog__title {
      font-size: 16px;
      font-weight: bold;
      color: #2d2d33;
      border-left: 0px;
      padding: 0;
    }
    .el-dialog__body {
      padding: 0 !important;
      color: #2d2d33;
      .fontBold {
        font-weight: bold;
      }
    }
  }

  &.is-center-y {
    display: flex;
    align-items: center;
    justify-content: center;

    ::v-deep {
      .el-dialog {
        display: flex;
        flex-direction: column;
        max-height: calc(100vh - 24px - 24px);
        margin-top: 0 !important;
        margin-bottom: 0 !important;
      }
      .el-dialog__body {
        flex: 1;
        height: 0;
        overflow-y: auto;
      }
    }
  }
}
.base-dialog-container {
  padding: 16px 24px;
  ::v-deep {
    .require-right {
      .el-form-item__label::before {
        content: '' !important;
        display: none;
      }
      .el-form-item__label::after {
        content: '*';
        color: #ff4949;
        margin-left: 2px;
      }
    }
    .label_bold {
      .el-form-item__label {
        font-weight: bold;
        color: #2d2d33;
        line-height: 19px;
        padding: 16px 0px;
      }
    }
  }
  // padding: 0 24px 12px;
}
// base-dialog-footer 內部樣式
// DeepBaseDialogFooter 提供給子級元件內部使用，使用時需要處理滾動的情況，不然會跟隨滾動，導致不會貼底
.base-dialog-footer ::v-deep,
::v-deep .DeepBaseDialogFooter {
  flex: none;
  display: flex;
  justify-content: flex-end;

  .el-button {
    min-width: 72px;
  }
  .el-button--text {
    padding-left: 10px;
    padding-right: 10px;

    &:hover {
      background-color: #e6f2ff;
    }
  }
}
::v-deep {
  .DeepBaseDialogFooter {
    margin: 0 -24px -12px;
  }
}

.base-dialog-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: $loadingZIndex;
  ::v-deep {
    .el-loading-mask {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
