<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" width="60%">

    <div class="dialog-content">
      <el-form :model="form">
        <el-card shadow="never" style="margin-top: 10px">
          <div>
            <BaseTitle title="收貨人資訊" m-top="0" class="base-title" style="margin-top: 10px;" />
            <el-radio-group v-model="localShippingAddress" style="margin-top: 20px; margin-left: 10px;">
              <el-radio :label="oldAddress.buyerUserAddressId" class="address-radio" v-model="localShippingAddress">
                {{
                  `${oldAddress.receivingFullAddress}&nbsp;&nbsp;&nbsp;（${oldAddress.receivingName}&nbsp;收）&nbsp;&nbsp;&nbsp;${oldAddress.receivingPhone}（原下單人地址）`
                }}
              </el-radio>
              <el-radio v-for="address in userAddressList" :key="address.addressId" :label="address.addressId"
                class="address-radio" v-model="localShippingAddress">
                {{
                  `${address.fullAddress}&nbsp;&nbsp;&nbsp;（${address.receivingName}&nbsp;收）&nbsp;&nbsp;&nbsp;${address.receivingPhone}`
                }}
              </el-radio><br>
            </el-radio-group>
          </div>

          <div>
            <BaseTitle title="留言：" m-top="0" class="base-title" style="margin-top: 10px;" />
            <div style="margin-top: 10px; margin-left: 30px;">
              <el-form :inline="true">
                <el-row>
                  <el-col :span="24">
                    <el-input type="textarea" v-model="form.messageToSeller" style="width: 500px;"></el-input>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>

          <div style="margin-top: 10px">
            <svg-icon icon-class="marker" style="color: #606266"></svg-icon>
            <!-- <span class="font-small">商品資訊</span> -->
            <BaseTitle title="商品資訊" m-top="0" class="base-title" style="margin-bottom: 0px;"/>
          </div>
          <div style="float: right;margin-bottom:10px;margin-right: 5px;">
            合計：<span class="color-danger">NT$ {{ totalOriginalPrice.toFixed(2) }}</span>
          </div>
          <el-table ref="orderItemTable" :data="orderItemList" style="width: 100%;margin-top: 0px" border>
            <el-table-column label="商品圖片" width="120" align="center">
              <template slot-scope="scope">
                <img :src="scope.row.productSkuPicUrl" style="height: 80px">
              </template>
            </el-table-column>
            <el-table-column label="商品名稱/品牌名稱" align="center" min-width="150">
              <template slot-scope="scope">
                <p>{{ scope.row.productName }}</p>
                <!-- <p>品牌：{{scope.row.productBrandName}}</p> -->
              </template>
            </el-table-column>
            <el-table-column label="價格/貨號" width="250" align="center">
              <template slot-scope="scope">
                <p>價格：NT$ {{ scope.row.modelOriginalPrice }}</p>
                <p>貨號：{{ scope.row.productSkuId }}</p>
              </template>
            </el-table-column>
            <el-table-column label="屬性" width="120" align="center">
              <template slot-scope="scope">
                {{ scope.row.productSkuName }}
              </template>
            </el-table-column>
            <el-table-column label="數量" width="120" align="center">
              <template slot-scope="scope">
                {{ scope.row.modelQuantityPurchased }}
              </template>
            </el-table-column>
            <el-table-column label="小計" width="120" align="center">
              <template slot-scope="scope">
                <span style="color: red;">NT$ {{ (scope.row.modelOriginalPrice * scope.row.modelQuantityPurchased).toFixed(2) }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleCancel">取 消</el-button>
      <el-button type="primary" @click="handleConfirm">提交訂單</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    title: String,
    visible: Boolean,
    onConfirm: Function,
    onCancel: Function,
    id: String,
    orderProcedureId: String,
    orderItemList: Array,
    userAddressList: Array,
    oldAddress: Object,
    shippingAddress: String,
    oldMessageToSeller: String,
  },
  data() {
    return {
      localShippingAddress: this.shippingAddress,
      formLabelWidth: '300px',
      form: {
        messageToSeller: this.oldMessageToSeller,
      },
      order: {},
      orderItemListCopy: null,
    };
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
    totalOriginalPrice() {
      if (this.orderItemList && this.orderItemList.length > 0) {
        // 使用 reduce 計算總和
        return this.orderItemList.reduce((total, item) => total + item.modelOriginalPrice * item.modelQuantityPurchased, 0);
      } else {
        return 0;
      }
    },
  },
  methods: {
    handleConfirm() {
      const xtOrderForms = [];

      // 構建引數物件
      const formData = {
        orderId: this.id,
        orderProcedureId: this.orderProcedureId,
        buyerUserAddressId: this.localShippingAddress,
        messageToSeller: this.form.messageToSeller,
        xtOrderItemForms: this.orderItemList.map(item => {
          // 將xtOrderItemForms陣列中的每個項轉換為後端所需的格式
          return {
            id: item.id,
            orderId: item.orderId,
            productId: item.productId,
            modelDiscountedPrice: item.modelOriginalPrice,
            modelOriginalPrice: item.modelOriginalPrice,
            modelQuantityPurchased: item.modelQuantityPurchased,
            productName: item.productName,
            productSkuId: item.productSkuId,
            productSkuName: item.productSkuName,
            productSkuPicUrl: item.productSkuPicUrl,
          };
        })
      };
      xtOrderForms.push(formData);

      if (this.localShippingAddress === this.oldAddress.buyerUserAddressId) {
        this.$confirm('是否確認使用原下單人地址？', '提示', {
          confirmButtonText: '確定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          this.onConfirm(xtOrderForms);
          this.dialogVisible = false;
        });
      } else {
        this.onConfirm(xtOrderForms);
        this.dialogVisible = false;
      }
    },

    handleCancel() {
      this.onCancel();
      this.dialogVisible = false;
    },
  },
  created() {
    this.localShippingAddress = this.shippingAddress;
  },
  watch: {
    shippingAddress(newVal) {
      this.localShippingAddress = newVal;
    },
    oldMessageToSeller(newVal) {
      this.form.messageToSeller = newVal;
    },
  },
};
</script>

<style scoped>
.address-radio {
  display: block;
  margin-bottom: 10px;
  /* 調整換行之間的垂直間距 */
}

.custom-dialog-class {
  position: fixed !important;
}

.dialog-content {
  max-height: 520px;
  overflow-y: auto;
}
</style>
