<template>
  <el-dialog :visible.sync="computedVisible" :width="width" :title="dialogTitle" @close="handleClose">

    <el-form>
      <el-form-item v-if="tooltipVisible" label="提示" label-width="80px">
        <el-input v-html="tooltip"></el-input>
      </el-form-item>
      <el-form-item v-if="reasonVisible" label="理由" label-width="80px">
        <el-input v-model="reason" :placeholder="inputPlaceholder"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取消</el-button>
      <el-button type="primary" :style="confirmButtonStyle" @click="handleConfirm">確定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    dialogTitle: String,
    inputPlaceholder: String,
    confirmButtonStyle: Object,
    reasonVisible: {
      type: Boolean,
      required: false,
      default: false,
    },
    tooltipVisible: {
      type: Boolean,
      required: false,
      default: false,
    },
    tooltip: {
      type: String,
      required: false,
      default: "",
    },
    width: {
      type: String,
      required: false,
      default: "30%",
    }
  },
  data() {
    return {
      reason: "",
    };
  },
  methods: {
    handleClose() {
      // this.computedVisible = false;
      // 觸發關閉事件通知父元件
      this.$emit("update:visible", false);
    },
    handleCancel() {
      // 觸發取消事件通知父元件
      this.$emit("cancel");
      // this.computedVisible = false;
      // this.$emit("update:visible", false);
    },
    handleConfirm() {
      // 觸發確認事件通知父元件，並傳遞理由引數
      this.$emit("confirm", this.reason);
    },
  },
  computed: {
    computedVisible: {
      get() {
        return this.visible;
      },
      set(newValue) {
        this.$emit("update:visible", newValue);
      },
    },
  },
};
</script>
