<template>
  <el-dialog :title="title" :visible.sync="dialogVisible" width="60%">

    <div class="dialog-content">
      <el-form :model="form">
        <el-card shadow="never" style="margin-top: 10px">
          <div>
            <BaseTitle title="收貨人資訊" m-top="0" class="base-title" style="margin-top: 10px;" />
            <div style="margin-left: 30px;">
              <el-switch v-model="ifDf" active-color="#ff6a00" inactive-text="是否代發">
              </el-switch>
            </div>

            <div v-if="ifDf && type === 1" style="margin-left: 40px;margin-top: 8px;color: #ff6a00;">
              {{
                `${oldAddress.receivingFullAddress}&nbsp;&nbsp;&nbsp;（${oldAddress.receivingName}&nbsp;收）&nbsp;&nbsp;&nbsp;${oldAddress.receivingPhone}（原下單人地址）`
              }}
            </div>

            <div v-if="ifDf && type === 0" style="margin-left: 40px;margin-top: 8px;color: #ff6a00;">
              {{
                `原下單人地址`
              }}
            </div>
            <el-radio-group v-model="localShippingAddress" :key="localShippingAddress"
              style="margin-left: 40px;margin-top: 5px;" v-if="!ifDf">
              <el-radio v-for="address in userAddressList" :key="address.addressId" :label="address.addressId"
                class="address-radio" v-model="localShippingAddress">
                {{
                  `${address.fullAddress}&nbsp;&nbsp;&nbsp;（${address.receivingName}&nbsp;收）&nbsp;&nbsp;&nbsp;${address.receivingPhone}`
                }}<span v-if="address.defaultAddress === 1">（預設地址）</span>
              </el-radio><br>
            </el-radio-group>
          </div>

          <div>
            <BaseTitle title="留言：" m-top="0" class="base-title" style="margin-top: 10px;" />
            <div style="margin-left: 30px;">
              <el-form :inline="true">
                <el-row>
                  <el-col :span="24">
                    <el-input type="textarea" v-model="form.messageToSeller" style="width: 500px;"></el-input>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>

          <div>
            <svg-icon icon-class="marker" style="color: #606266"></svg-icon>
            <!-- <span class="font-small">商品資訊</span> -->
            <BaseTitle title="訂單資訊" m-top="0" class="base-title" style="margin-bottom: 0px;" />
          </div>

          <div v-for="(orderItem, index) in batchFindSkuPriceParams" :key="index">
            <div v-for="(orderShopItem, orderShopItemIndex) in orderItem.orderShopItemList" :key="orderShopItemIndex">
              <div
                style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; margin-top: 15px;">
                <div style="margin-left: 5px;">
                  <span>訂單號：{{ orderItem.orderProcedureSn }}</span>
                  <span style="margin-left: 20px;">店鋪：{{ orderShopItem.shopName }}</span>
                </div>
                <div style="margin-right: 5px;">
                  合計：<span class="color-danger">NT$ {{
                    calculateTotalAmount(orderShopItem.xtOrderItemVoList).toFixed(2) }}</span>
                </div>
              </div>

              <el-table ref="orderItemTable" :data="orderShopItem.xtOrderItemVoList" style="width: 100%;margin-top: 0px"
                border>
                <el-table-column label="商品圖片" width="120" align="center">
                  <template slot-scope="scope">
                    <img :src="scope.row.productSkuPicUrl" style="height: 80px">
                  </template>
                </el-table-column>
                <el-table-column label="商品名稱/品牌名稱" align="center" min-width="150">
                  <template slot-scope="scope">
                    <p>商品名稱：{{ scope.row.productName }}</p>
                  </template>
                </el-table-column>
                <el-table-column label="價格/貨號" width="200" align="center">
                  <template slot-scope="scope">
                    <p>價格：NT$ {{ scope.row.modelOriginalPrice }}</p>
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
                    <span style="color: red;">NT$ {{ (scope.row.modelOriginalPrice *
                      scope.row.modelQuantityPurchased).toFixed(2) }}</span>
                  </template>
                </el-table-column>
              </el-table>
              <br />
            </div>
          </div>
        </el-card>
      </el-form>
    </div>
    <div slot="footer" class="dialog-footer">
      <div style="float: left;">
        合計：<span class="color-danger">NT$ {{ totalOriginalPrice.toFixed(2) }}</span>
      </div>
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
    batchFindSkuPriceParams: Array,
    userAddressList: Array,
    shippingAddress: Number,
    oldAddress: Object,
    type: Number,
    oldMessageToSeller: String,
  },

  data() {
    return {
      localShippingAddress: "",
      formLabelWidth: '300px',
      form: {
        messageToSeller: this.oldMessageToSeller,
      },
      order: {},
      orderItemListCopy: null,
      activeName: 'first',
      ifDf: false,
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
      if (this.batchFindSkuPriceParams && this.batchFindSkuPriceParams.length > 0) {
        // 使用 reduce 計算總和
        return this.batchFindSkuPriceParams.reduce((total, item) => {
          // 獲取到orderShopItemList，然後再獲取到xtOrderItemVoList
          return total + item.orderShopItemList.reduce((total, item) => {
            return total + item.xtOrderItemVoList.reduce((total, item) => {
              return total + item.modelOriginalPrice * item.modelQuantityPurchased;
            }, 0);
          }, 0)
        }, 0);
      } else {
        return 0;
      }
    },

  },

  methods: {
    handleConfirm() {
      if (this.ifDf) {
        this.localShippingAddress = 11111;
      }

      const xtOrderForms = this.batchFindSkuPriceParams.map(orderItem => {
        return {
          buyerUserAddressId: this.localShippingAddress.toString(),
          messageToSeller: this.form.messageToSeller,
          orderId: orderItem.orderId,
          orderProcedureId: orderItem.orderProcedureId,
          xtOrderShopForms: orderItem.orderShopItemList.map(item => ({
            shopId: item.shopId,
            shopName: item.shopName,
            xtOrderItemForms: item.xtOrderItemVoList.map(item => ({
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
            })),
          })),
        };
      });

      if (this.ifDf || this.localShippingAddress === this.shippingAddress) {
        this.$confirm('是否確認代發該訂單？', '提示', {
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

    calculateTotalAmount(orderItemList) {
      return orderItemList.reduce((total, item) => {
        return total + item.modelOriginalPrice * item.modelQuantityPurchased;
      }, 0);
    },

  },

  watch: {
    shippingAddress(newVal) {
      this.localShippingAddress = newVal;
    },
    oldMessageToSeller(newVal) {
      this.form.messageToSeller = newVal;
    },

    oldAddress(newVal){
      this.oldAddress = newVal;
    },

    // 監視 userAddressList 的變化
    userAddressList: {
      // 監聽函式，當 userAddressList 發生變化時執行
      handler(newVal) {
        // 檢查新值是否存在且不為空
        if (newVal && newVal.length > 0) {
          // 遍歷新值的每一項
          newVal.forEach(item => {
            // 檢查是否為預設地址
            if (item.defaultAddress === 1) {
              // 將預設地址的 addressId 賦值給 localShippingAddress
              this.localShippingAddress = item.addressId;
            }
          });
        }
      },
      // immediate 選項設為 true 表示立即執行一次 handler，以處理初始值
      immediate: true,
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

::v-deep {
  .el-radio__inner {
    border-radius: 0 !important;
  }
}
</style>
