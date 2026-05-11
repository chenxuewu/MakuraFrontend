<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" width="30%">
    <div>
      <p>申請理由： {{ applicationReason }}</p>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取消</el-button>
      <el-button @click="handleReject" type="danger">拒絕</el-button>
      <el-button @click="handleConfirm" type="warning">同意</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { } from "@/api/order/order";
export default {
  props: {
    title: String,
    visible: Boolean,
    onConfirm: Function,
    onCancel: Function,
    applicationReason: String
  },
  data() {
    return {
      xtOrderForm: {
        orderId: null,
        orderProcedureId: null,
        buyerUserAddressId: null,
        messageToSeller: null,
        xtOrderItemForms: []
      }
    }
  },
  computed: {
    dialogVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        if (val !== this.visible) {
          this.$emit('update:visible', val);
        }
      },
    },
  },
  methods: {
    handleConfirm() {
      this.onConfirm(1);
      this.dialogVisible = false;
    },
    handleReject() {
      this.onConfirm(0);
      this.dialogVisible = false;
    },
    handleCancel() {
      this.$emit('cancel');
      this.dialogVisible = false;
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>