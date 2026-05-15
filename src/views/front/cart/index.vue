<template>
  <div>
    <Header />
    <section class="dashboard-area ptb-54">
      <div class="container">
        <el-row id="big">

          <el-col :span="24" id="bigRight">

            <el-row class="myOrder" :span="24">
              <el-col :span="24">
                <div class="myOrder">
                  <span id="J_CartSwitch" class="switch-cart">購物車（全部{{ cartItemCount }}）</span>
                </div>
                <div class="cart-sum">
                  <span class="pay-text">已選商品（不含運費）</span>
                  <strong class="price">
                    <span style="font-family: Arial, Verdana;
                        font-weight: 550;
                        font-size: 14px;
                        color: #FF5000;text-align: right;" class="fnt">NT$ {{ selectedTotalPrice }}
                    </span>
                  </strong>
                  <button @click="toTrade()" type="button" style=" width: 96px;
                      height: 40px;
                      background: #FF5000;
                      color: white;
                      border: none;
                      outline: none;
                      font-size: 16px;
                      margin-top: 10px;">去結算
                  </button>
                </div>
              </el-col>
            </el-row>

            <el-row :span="24">
              <div class="allBigCart">
                <el-row
                  style="background-color: #f2f2f2;margin-top: -10px;display: flex; align-items: center; height: 40px;">
                  <el-col :span="2" style="line-height: 36px; text-align: center;">
                    <el-checkbox v-model="selectAll" @change="handleSelectAll"
                      style="margin-bottom: 0px;color: #9c9c9c;font-weight: normal;">全選
                    </el-checkbox>
                  </el-col>
                  <el-col :span="12" style="text-align: center;">
                    <span>商品詳情</span>
                  </el-col>
                  <el-col :span="2" style="text-align: center;">
                    <span>單價</span>
                  </el-col>
                  <el-col :span="3" style="text-align: center;">
                    <span>數量</span>
                  </el-col>
                  <el-col :span="3" style="text-align: center;">
                    <span>總額</span>
                  </el-col>
                  <el-col :span="2" style="text-align: center;">
                    <span>操作</span>
                  </el-col>
                </el-row>


                <el-row v-for="(cart, cartIndex) in cartList" :key="cartIndex">
                  <div v-for="(cartShop, shopIndex) in cart.xtCartShopVoList" :key="shopIndex" class="shop-product">
                    <el-row style="background:#F7F7F7;text-align: left;" class="shop-name">
                      <span>店鋪：{{ cartShop.shopName }}
                      </span>
                      <i class="table_i5 isShow"></i>
                    </el-row>

                    <el-row class="product-container" v-for="(item, itemIndex) in cartShop.cartItemVoList"
                      :key="itemIndex" :class="{ 'lose-efficacy': item.isInvalid }">
                      <el-col :span="1" class="item-center">
                        <el-checkbox v-model="selectedItems[item.id]" v-if="!item.isInvalid"
                          @change="handleCheckboxChange(item.id)" style="margin-bottom: 0px !important;">
                        </el-checkbox>
                        <p v-else>失效</p>
                      </el-col>
                      <el-col :span="10">
                        <div class="product-detail">
                          <el-image class="product-image" :src="item.skuFilePath" fit="contain" @error=handleImageError
                            :preview-src-list="[item.skuFilePath]">
                          </el-image>
                          <div class="product-name" v-on:click.stop.prevent="showProductDetails(item)">
                            <p :title="item.productName" v-html="item.productName">
                            </p>
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="3">
                        <div class="sku-info">{{ item.skuName }}</div>
                        <div v-if="!item.isInvalid">
                          <el-popover placement="right" trigger="click">
                            <div class="sku-edit">
                              <div class="sku-edit-content">
                                <div class="sku-props-selector ">
                                  <dl class="prop">
                                    <dd>
                                      <ul class="clearfix">
                                        <li v-for="sku in modificationInfoArray[itemIndex]" :key="sku.id" data-prop="尺碼"
                                          :title="sku.name" :class="{ 'selected': sku.selected }">
                                          <a href="#" @click="updateCurrentSku(sku, itemIndex)">
                                            <span>{{ sku.name }}</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </dd>
                                  </dl>
                                  <p class="operate">
                                    <a href="#" class="add-cart">
                                      <span @click="updateCartItemSku(item, itemIndex)">確定</span>
                                    </a>
                                    <a href="#" class="cancel" @click="closureSkuBox(itemIndex)">
                                      <span>取消</span>
                                    </a>
                                    <a href="#" style="color: #ff6a00;margin-left: 20px;">
                                      <span v-if="currentSku && currentSku[itemIndex]">NT$ {{ currentSku[itemIndex].price
                                        }}</span>
                                    </a>
                                  </p>
                                </div>
                              </div>

                              <div class="sku-edit-image">
                                <el-image v-if="currentSku && currentSku[itemIndex]" class="sku-item-pic"
                                  @error="handleImageError" :src="currentSku[itemIndex].picUrl"
                                  :preview-src-list="[currentSku[itemIndex].picUrl]" fit="scale-down">
                                </el-image>
                              </div>
                            </div>
                            <button @click="handleModification(item, itemIndex)" class="modification-button"
                              slot="reference">修改</button>
                          </el-popover>
                        </div>
                      </el-col>
                      <el-col :span="2" class="item-center">
                        <p style="font-size: 14px;">NT$ {{ item.price }}</p>
                      </el-col>

                      <el-col :span="3" class="item-center">
                        <el-input-number v-model="item.quantity" size="small" @change="itemQuantityUpdate(item)"
                          :min="1" :max="10000" style="text-indent: 0 !important;"></el-input-number>
                      </el-col>

                      <el-col :span="3" class="item-center">
                        <p style="color:#fa9852;font-size: 14px;">NT$ {{ (item.price * item.quantity).toFixed(2) }}
                        </p>
                      </el-col>

                      <el-col :span="2" class="item-center">
                        <el-button type="text" size="mini" style="color: black;"
                          @click="openRemoveConfirmationBox(item)">
                          <p style="margin:4px 0;font-size: 14px;">移除</p>
                        </el-button>
                      </el-col>
                    </el-row>
                  </div>
                </el-row>

                <!-- <el-row>
                  <div v-for="(cart, cartIndex) in cartList" :key="cartIndex">
                    <div v-for="(cartShop, shopIndex) in cart.xtCartShopVoList" :key="shopIndex">
                      <table class="table" v-loading="loading">
                        <tr>
                          <td colspan="6" style="background:#F7F7F7;text-align: left;">
                            <span style="color: black; font-size: 14px;">店鋪：{{ cartShop.shopName }}
                            </span>
                            <i class="table_i5 isShow"></i>
                          </td>
                        </tr>
                        <div v-for="(item, itemIndex) in cartShop.cartItemVoList" :key="itemIndex">
                          <tr class="tr" :class="{ 'lose-efficacy': item.isInvalid }">
                            <td colspan="3"
                                style="text-align: center; vertical-align: middle;margin-bottom:8px;margin-top: 8px;">
                              <div class="product-container">
                                <el-checkbox v-model="selectedItems[item.id]" v-if="!item.isInvalid"
                                             @change="handleCheckboxChange(item.id)"
                                             style="margin-bottom: 0px !important;"></el-checkbox>
                                <el-image style="width: 80px;height: 80px;" :src="item.skuFilePath"
                                          :preview-src-list="[item.skuFilePath]">
                                </el-image>
                                <div>


                                  <div t v-on:click.stop.prevent="showProductDetails(item)"
                                             v-if="!item.isInvalid">
                                       <p :title="item.productName"
                                       style="font-size: 14px; text-align: left; margin-left: 10px"
                                       v-html="item.productName"></p>
                                  </div>

                                  <el-tooltip class="item" effect="dark" content="商品失效" placement="top"
                                              v-if="item.isInvalid">
                                    <el-button type="text">
                                      <p :title="item.productName" v-html="`${limitCharacters(item.productName, 25)}`"
                                         style="text-decoration: line-through;width: 350px; text-align: left; margin-left: 20px"></p>
                                    </el-button>
                                  </el-tooltip>

                                </div>
                                <div class="sku-info" style="display: flex; flex-direction: column; align-items: center;">
                                   <div style="margin-left:40px; font-size: 14px;">{{ item.skuName }}</div>
                                  <div class="modification-button">
                                    <button @click="handleModification(item, itemIndex)"
                                            style="color: #ff6a00;">修改
                                    </button>
                                  </div>
                                </div>
                                <div class="hi" :style="{
                                  display: isHoveredArray[itemIndex] ? 'block' : 'none',
                                  position: 'absolute',
                                  maxHeight: '400px',
                                  marginBottom: '20px',
                                  lineHeight: '20px',
                                  top: isHovered ? '-82px' : '48px',
                                  right: '105px',
                                  zIndex: '100',
                                  minWidth: '400px',
                                  background: 'white',
                                  boxShadow: '-3px -3px 20px 0px #ccc',
                                  overflowY: 'auto',
                                  right: '-360px',
                                }">
                                  <template>
                                    <div class="hideList">
                                      <div class="block" style="display: flex; border: 1px solid #ccc; padding: 10px;">
                                        <div class="sku-edit-content">
                                          <div class="sku-props-selector clearfix">
                                            <dl class="prop clearfix J_Prop">
                                              <dd>
                                                <ul class="clearfix">
                                                  <li v-for="sku in modificationInfoArray[itemIndex]" :key="sku.id"
                                                      data-prop="尺　　碼" class="prop-block J_PropBlock"
                                                      :title="sku.name"
                                                      :class="{ 'selected': sku.selected }">
                                                    <a href="javascript: void(0)"
                                                       @click="updateCurrentSku(sku, itemIndex)">
                                                      <span style="font-size: 14px;">{{ sku.name }}</span>
                                                    </a>
                                                  </li>
                                                </ul>
                                              </dd>
                                            </dl>
                                            <p class="operate">
                                              <a href="javascript:void(0);" class="add-cart J_AddCart">
                                                <span style="margin-left: -8px;font-size: 14px;"
                                                      @click="updateCartItemSku(item, itemIndex)">確定</span>
                                              </a>
                                              <a href="javascript:void(0);" class="cancel J_Cancel"
                                                 @click="closureSkuBox(itemIndex)">
                                                <span style="font-size: 14px;">取消</span>
                                              </a>
                                              <a href="javascript:void(0);" style="color: #ff6a00;margin-left: 20px;">
                                                <span style="font-size: 14px;"
                                                      v-if="currentSku && currentSku[itemIndex]">NT$ {{ currentSku[itemIndex].price }}</span>
                                              </a>
                                            </p>
                                          </div>
                                        </div>

                                        <div class="sku-item-pic J_SkuItemPic" style="height: 150px;width: 150px;">
                                          <el-image v-if="currentSku && currentSku[itemIndex]"
                                                    style="width: 100%; height: 100%; object-fit: contain;"
                                                    :src="currentSku[itemIndex].picUrl"
                                                    :preview-src-list="[currentSku[itemIndex].picUrl]" fit="scale-down">
                                          </el-image>
                                        </div>
                                      </div>
                                    </div>
                                  </template>
</div>
<div style="clear:both"></div>
</div>
<br />
</td>
<td style="text-align: center; vertical-align: middle;">
  <p style="font-size: 14px;">NT$ {{ item.price }}元</p>
</td>

<td style="text-align: center;vertical-align: middle;">
  <el-input-number v-model="item.quantity" size="small" @change="itemQuantityUpdate(item)" :min="1" :max="10000"
    style="text-indent: 0 !important;"></el-input-number>
</td>

<td style="vertical-align: middle;text-align: center;">
  <p style="color:#fa9852;font-size: 14px;">NT$ {{ (item.price * item.quantity).toFixed(2) }}元
  </p>
</td>

<td style="text-align: center;vertical-align: middle;" class="deleteItemCart">
  <el-button type="text" size="mini" style="color: black;" @click="openRemoveConfirmationBox(item)">
    <p style="margin:4px 0;font-size: 14px;">移除</p>
  </el-button>
</td>
</tr>
</div>
</table>
</div>
</div>
</el-row> -->
              </div>
            </el-row>
          </el-col>
          <!-- <div class="row">
            <div class="col-12 table-footer">
              <div class="One_ShopFootBuy fix1">
                <div class="col-3">
                  <ul style="margin-top: 20px;">
                    <el-checkbox v-model="selectAll" @change="handleSelectAll">全選</el-checkbox>
                    <el-button type="text" size="mini" style="color: black;margin-left: 20px;"
                      @click="deleteConfirmationBox">
                      <p style="margin:4px 0;font-size: 15px; " class="operatButton">刪除</p>
                    </el-button>
                    <el-button type="text" size="mini" style="color: black; margin-left: 20px;">
                      <p style="margin:4px 0; font-size: 15px; " class="operatButton">移入收藏夾</p>
                    </el-button>
                  </ul>
                </div>
                <div class="col-5">
                  <ol>
                    <li style="text-align: right;">（已選商品 <span style="font-size: 16px;color: #FF5000;">{{ selectedCount
                    }}</span> 件）總價:
                      <span style="
                        font-weight: bold;
                        font-weight: 500px;
                        font-size: 15px;
                        color: #FF5000;
                        text-align: right;" class="fnt">NT$ {{ selectedTotalPrice }}元
                      </span>
                    </li>
                  </ol>
                </div>
                <div class="col-2" style="text-align: right;">
                  <button @click="toTrade" type="button">去結算</button>
                </div>
              </div>
            </div>
          </div> -->
        </el-row>
      </div>
    </section>

    <!-- <Footer /> -->

    <CustomPrompt :visible="dialogVisible" :dialog-title="dialogTitle" :input-placeholder="dialogInputPlaceholder"
      :confirm-button-style="confirmButtonStyle" width="25%" :tooltipVisible=true :reasonVisible=reasonVisible
      :tooltip=tooltip @update:visible="closeDialog" @confirm="handleConfirm" @cancel="handleCancel">
    </CustomPrompt>


  </div>
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import CustomPrompt from "../components/CustomPrompt.vue";

import { cartList, addPurchase, reductionProduct, removeProduct, updateSku } from "@/api/cart/cart";
import { getSkuInfoByProductId } from "@/api/product/product";
import eventBus from '@/utils/eventBus';


export default {
  components: {
    Header,
    Footer,
    CustomPrompt,
  },
  data() {
    return {
      loading: false,
      cartList: [],
      selectAll: false,
      select: false,
      selectedItems: {},
      //定義一個陣列來儲存選中的商品
      selectedCartItems: [],
      cartItemCount: 0,

      // 對話方塊元件的資料
      dialogVisible: false,//是否開啟對話方塊標識
      reasonVisible: false,//是否顯示理由輸入框
      dialogTitle: '確認要移除商品嗎',//對話方塊標題
      tooltip: '您確認要移除10個商品嗎？',//提示資訊
      dialogInputPlaceholder: '請輸入理由',//輸入框佔位符
      confirmButtonStyle: { // 確認按鈕樣式
        color: '#FFFFFF',
        backgroundColor: '#fa9852',
        borderColor: '#fa9852',
      },
      //定義一個變數儲存回撥的方法(1:刪除商品 2:移除 3:移入購物車)
      confirmCallback: null,
      removeCartItemId: null,//移除商品的購物車id


      //sku彈出框
      isHovered: false,
      isHoveredArray: Array(cartList.length).fill(false), // 初始化為所有行都未懸停
      modificationInfoArray: Array(cartList.length).fill(null), // 初始化為所有行的資訊為空
      openedTimelineIndex: -1,

      currentSku: {},
      currentSkuIndex: null,
      defaultImageUrl: require("@/assets/images/default.png"),
    };
  },

  created() {
    this.getMyCartList();
  },


  methods: {

    /** 查詢我的購物車列表 */
    getMyCartList() {
      this.loading = true;
      cartList().then(response => {
        this.cartList = response.rows;
        //判斷商品是否失效
        this.cartList.forEach(cart => {
          cart.xtCartShopVoList.forEach(cartShop => {
            cartShop.cartItemVoList.forEach(item => {
              if (item.xpsId == null || item.freezeStatus == 1 || item.publishStatus == 0) {
                this.$set(item, "isInvalid", true);
              } else {
                this.$set(item, "isInvalid", false);
              }
            });
          });
        });
        this.cartItemCount = response.total;
        this.loading = false;
      });

    },


    limitCharacters(str, limit) {
      if (str.length > 30) {
        return str.length > limit ? str.slice(0, limit) + '<br/>' + str.slice(limit, limit * 2) + '<br/>' + str.slice(limit * 2, limit * 3) : str;
      } else {
        return str.length > limit ? str.slice(0, limit) + '<br/>' + str.slice(limit) : str;
      }
    },


    /** 全選操作 */
    handleSelectAll() {
      this.cartList.forEach(cart => {
        cart.xtCartShopVoList.forEach(cartShop => {
          cartShop.cartItemVoList.forEach(item => {
            //判斷是否失效
            if (!item.isInvalid) {
              this.$set(this.selectedItems, item.id, this.selectAll);
              //更新選中的商品
              if (this.selectAll) {
                this.selectedCartItems.push(item.id);
              } else {
                //把當前商品id從陣列中移除
                const index = this.selectedCartItems.indexOf(item.id);
                this.selectedCartItems.splice(index, 1);
              }
            }
          });
        });
      });
    },

    /** 商品的加減 */
    itemQuantityUpdate(item) {
      if (item.quantity <= 0) {
        this.$message({
          message: '商品數量不能小於1',
          type: 'warning'
        });
        item.quantity = 1;
      }
      reductionProduct(item.id, item.quantity).then(() => {
        eventBus.$emit('cart-updated');
      });
    },

    /** 移除商品確認框 */
    openRemoveConfirmationBox(item) {
      this.tooltip = "您確認要移除' " + item.skuName + " '商品嗎？";
      this.confirmCallback = 2;
      this.removeCartItemId = item.id;
      this.dialogVisible = true;
    },

    /** 刪除確認框 */
    deleteConfirmationBox() {
      console.log(this.selectedCartItems);
      this.tooltip = "您確認要移除" + this.selectedCartItems.length + "個商品嗎？";
      this.dialogVisible = true;
      this.confirmCallback = 1;
    },

    /** 移除商品 */
    deleteCartItem() {
      let ids = null;
      if (this.confirmCallback === 1) {
        //遍歷選中的商品selectedCartItems
        this.selectedCartItems.forEach(item => {
          if (ids == null) {
            ids = item;
          } else {
            ids += ',' + item;
          }
        });
        // ids = Object.keys(this.selectedItems).join(',');
      } else if (this.confirmCallback === 2) {
        ids = this.removeCartItemId;
      } else {
        this.removeCartItemId = null;
        this.confirmCallback = null;
        return;
      }
      removeProduct(ids).then(response => {
        if (response.code === 200) {
          this.$message({
            message: '刪除成功',
            type: 'success'
          });
          this.removeCartItemId = null;
          this.confirmCallback = null;
          this.getMyCartList();
          eventBus.$emit('cart-updated');
        } else {
          this.removeCartItemId = null;
          this.confirmCallback = null;
          this.$message({
            message: '刪除失敗',
            type: 'error'
          });
        }
      });
    },


    /** 對話方塊確認回撥方法 */
    handleConfirm() {
      this.deleteCartItem();
      this.dialogVisible = false;
    },

    /** 對話方塊取消回撥方法 */
    handleCancel() {
      this.dialogVisible = false;
      this.confirmCallback = null;
      this.removeCartItemId = null;
    },

    /** 關閉對話方塊 */
    closeDialog(visible) {
      this.dialogVisible = visible;
      this.confirmCallback = null;
      this.removeCartItemId = null;
    },


    /** 查詢商品sku資訊 */
    async handleModification(item, index) {
      await getSkuInfoByProductId(item.productId).then(response => {
        if (response.code === 200) {
          this.modificationInfoArray[index] = response.data;
          this.modificationInfoArray[index].forEach(sku => {
            if (sku.id === item.skuId) {
              sku.selected = true;
              this.$set(this.currentSku, index, sku);
            }
          })

        } else {
          this.$message({
            message: '查詢商品sku資訊失敗',
            type: 'error'
          });
        }
      });
      // 更新當前行的懸停狀態
      this.$set(this.isHoveredArray, index, true);
    },

    // 關閉sku彈窗
    closureSkuBox(itemIndex) {
      // 清空當前修改的 SKU 資訊
      this.$set(this.modificationInfoArray, itemIndex, null);
      // 清空當前修改的 SKU 索引
      this.currentSkuIndex = null;
      // 隱藏修改框
      this.$set(this.isHoveredArray, itemIndex, false);
    },

    // 更新當前行的當前 SKU
    updateCurrentSku(sku, index) {
      this.modificationInfoArray[index].forEach((s) => (s.selected = false));
      sku.selected = true;
      this.$set(this.currentSku, index, sku);
      console.log(index);
      console.log(this.currentSku);
    },

    // 更新購物車商品的sku
    updateCartItemSku(item, itemIndex) {
      if (this.currentSku[itemIndex]) {
        console.log(item);
        console.log(this.currentSku[itemIndex]);
        //構建修改購物車商品sku的引數
        const xtCartItem = {
          id: item.id,
          skuId: this.currentSku[itemIndex].id,
          addPurchasePrice: this.currentSku[itemIndex].price,
          quantity: item.quantity,
        };
        updateSku(xtCartItem).then(response => {
          if (response.code === 200) {
            this.$message({
              message: '修改成功',
              type: 'success'
            });
            this.getMyCartList();
            eventBus.$emit('cart-updated');
          } else {
            this.$message({
              message: '修改失敗',
              type: 'error'
            });
          }
        });

        // 清空當前修改的 SKU 資訊
        this.$set(this.modificationInfoArray, itemIndex, null);
        // 清空當前修改的 SKU 索引
        this.currentSkuIndex = null;
        // 隱藏修改框
        this.$set(this.isHoveredArray, itemIndex, false);
      } else {
        this.$message({
          message: '請選擇商品規格',
          type: 'warning'
        });
      }
    },

    /** 核取方塊變化 */
    handleCheckboxChange(itemId) {
      const isChecked = this.selectedItems[itemId];
      if (!isChecked) {
        //把當前商品id從陣列中移除
        const index = this.selectedCartItems.indexOf(itemId);
        this.selectedCartItems.splice(index, 1);
        this.selectAll = false;
      } else {
        //把當前商品id新增到陣列中
        this.selectedCartItems.push(itemId);
        if (this.cartItemCount === this.selectedCartItems.length) {
          this.selectAll = true;
        } else {
          this.selectAll = false;
        }
      }
    },


    // 跳轉到結算頁面
    toTrade() {
      //判斷this.selectedItems是否為空
      if (this.selectedCartItems.length === 0) {
        this.$message({
          message: '請選擇商品',
          type: 'warning'
        });
        return;
      }
      let ids = '';
      for (let i = 0; i < this.selectedCartItems.length; i++) {
        ids += this.selectedCartItems[i];
        if (i < this.selectedCartItems.length - 1) {
          ids += ','; // 在非最後一個元素後新增逗號
        }
      }
      this.$router.push({ path: '/settleAccounts', query: { cartItemIds: ids } })
    },

    //跳轉到商品詳情
    showProductDetails(item) {
      //判斷商品是否失效，如果失效則不跳轉
      if (item.isInvalid) {
        return;
      }
      let url = this.$router.resolve({
        path: "/frontProductDetail",
        query: { id: item.productId }
      })
      window.open(url.href, '_blank');
      //開啟新的標籤頁
      // window.open(`/frontProductDetail?id=${item.productId}`, '_blank');
    },
    //圖片載入失敗,預設顯示default圖片
    handleImageError(e) {
      e.target.src = this.defaultImageUrl;
    }

  },

  computed: {
    selectedTotalPrice() {
      // 計算選中商品的總額
      let totalPrice = 0;

      // 遍歷購物車列表
      this.cartList.forEach(cart => {
        // 遍歷購物車中的商品
        cart.xtCartShopVoList.forEach(cartShop => {
          cartShop.cartItemVoList.forEach(item => {
            // 如果商品被選中，則累加價格
            if (this.selectedItems[item.id]) {
              totalPrice += item.price * item.quantity;
            }
          });
        });
      });

      // 返回計算結果，保留兩位小數
      return totalPrice.toFixed(2);
    },
    selectedCount() {
      let count = 0;
      this.cartList.forEach(cart => {
        // 遍歷購物車中的商品
        cart.xtCartShopVoList.forEach(cartShop => {
          cartShop.cartItemVoList.forEach(item => {
            // 如果商品被選中，則累加價格
            if (this.selectedItems[item.id]) {
              count++;
            }
          });
        });
      });
      return count;
    },

  }

};
</script>

<style scoped lang="scss">
@import "~@a/front/css/bootstrap.min.css";
@import "~@a/front/css/owl.theme.default.min.css";
@import "~@a/front/css/owl.carousel.min.css";
@import "~@a/front/css/remixicon.css";
@import "~@a/front/css/meanmenu.min.css";
@import "~@a/front/css/animate.min.css";
@import "~@a/front/css/style.css";
@import "~@a/front/css/responsive.css";

@import "~@a/front/css/cart/index.css";


::v-deep {

  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #ff6a00 !important;
    color: #FFFFFF !important;
  }

  .custom-select .el-input,
  .custom-select .el-input__inner {
    border: none;
    background: #f3f3f3;
    text-align: right;
  }

  .plain-button {
    border: none;
    background-color: transparent;
    color: #333;
    /* 可以根據需要設定文字顏色 */
    padding: 0;
    /* 如果有其他預設 padding，可以去掉 */
  }

  .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: inherit;
    background-color: inherit;
    border-color: red;
    -webkit-box-shadow: inherit;
    box-shadow: inherit;
  }


  .row-with-divider .col-with-border {
    border-right: 1px solid #ccc;
    padding-right: 10px;
  }


  .search {
    display: inline-block;
    width: 34px;
    height: 22px;
    border: 1px solid #ccc;
  }

  .table> :not(caption)>*>* {
    padding: 0;
  }

  //頂部結算算欄樣式
  .switch-cart {
    overflow: hidden;
    color: #000;
    font-size: 18px;
    font-weight: 600;
    height: 72px;
    line-height: 61px;
    margin-left: 15px;
  }

  .cart-sum {
    position: absolute;
    right: 18px;
    top: 0;
    height: 72px;
    // line-height: 72px;
  }

  .cart-sum .price {
    font-family: Arial, Verdana;
    font-weight: 400;
    margin-right: 12px;
    font-size: 18px;
    color: #FF5000;
  }

  .cart-sum .submit-btn-disabled,
  .cart-sum .combine-not-supported:hover,
  .cart-sum .submit-btn-disabled:hover {
    background: #aaa;
    color: #fff;
    cursor: not-allowed;
  }

  .cart-sum .submit-btn {
    display: inline-block;
    width: 74px;
    height: 42px;
    line-height: 42px;
    color: #fff;
    background: #FF5000;
    -webkit-border-radius: 21px;
    -moz-border-radius: 21px;
    -ms-border-radius: 21px;
    border-radius: 21px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    top: -2px;
    font-size: 16px;
  }

  .fixed-bottom {
    bottom: -1px;
    z-index: 9999;
    background-color: #fff;
    border-top: 1px solid #e6e6e6;
  }

  //底部結算欄樣式
  .One_ShopFootBuy {
    position: relative;
    background: #fff;
  }

  .One_ShopFootBuy {
    border: 1px solid #f0f0f0;
    height: 50px;
    line-height: 50px;
    // margin-top: 20px;
  }

  .One_ShopFootBuy>div {
    float: left;
  }

  // .One_ShopFootBuy>div:nth-child(3),
  .One_ShopFootBuy>div:nth-child(2) {
    text-align: center;
    color: gray;
    margin-top: 25px;
    margin-left: 226px;
  }

  //.One_ShopFootBuy>div:nth-child(2) {
  //  margin-left: 300px;
  //}

  .One_ShopFootBuy>div {
    float: left;
  }

  .One_ShopFootBuy>div:nth-child(3) {
    width: 150px;
  }

  .One_ShopFootBuy>div:last-child {
    float: right;
  }

  .One_ShopFootBuy>div:first-child ul li {
    float: left;
    padding-left: 10px;
  }


  element.style {
    cursor: pointer;
  }

  .One_ShopFootBuy>div:last-child button {
    width: 96px;
    height: 40px;
    background: #FF5000;
    color: white;
    border: none;
    outline: none;
    font-size: 16px;
    margin-right: 16px;
    margin-top: 6px;
    line-height: 33px;
  }

  One_ShopFootBuy>div:nth-child(3) ol li:last-child {
    margin-left: -30px;
  }

  // .One_ShopFootBuy>div:nth-child(3) ol li {
  //   width: 150px;
  //   height: 25px;
  //   line-height: 47px;
  // }

  // .dashboard-area {
  //   padding-top: 20px !important;
  //   padding-bottom: 0px !important;
  // }

  body {
    margin: 0;
    overflow: hidden;
  }

  html,
  .allBigCart,
  .other-containers {
    height: 100%;
  }

  .allBigCart {
    max-height: calc(100vh - 150px);
    overflow-y: auto;
  }

  .table-footer {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1320px;
    z-index: 9999;
  }

  .One_ShopFootBuy {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dashboard-area {
    padding-top: 20px !important;
    padding-bottom: 0px !important;
  }

  .operatButton:hover {
    color: #e4393c;
  }


  //sku修改
  .product-container {
    display: flex;
    align-items: center;
    position: relative;
    padding: 10px 0;
    border-top: 1px solid #d9d9d9;

  }

  .product-container:last-child {
    border-bottom: 1px solid #d9d9d9;
  }

  .sku-info {
    margin-left: 10px;
    font-size: 14px;
  }

  .modification-button {
    margin-left: 10px;
    font-size: 14px;
    color: #ff6a00;
    // position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    /* 預設隱藏按鈕 */
    transition: opacity 0.3s ease;
    /* 新增過渡效果 */
  }

  .modification-button:hover {
    opacity: 1;
    /* 當滑鼠懸停在 .sku-info 上時顯示按鈕 */
  }


  //sku修改框
  .hi {
    margin-top: 10px;
    /* 設定合適的間距 */
  }

  .hi .inner-content {
    margin-top: 10px;
    /* 設定合適的間距 */
  }

  .sku-edit-content {
    border-right: 1px solid #d9d9d9;
    padding: 20px 10px;
    min-height: 140px;
    _height: 140px;
  }


  .sku-props-selector .prop li,
  .sku-props-selector .prop a {
    color: #343434;
    cursor: pointer;
    _zoom: 1;
  }

  .sku-props-selector .prop li {
    float: left;
    border: 1px solid #d1d1d1;
    background-color: #fff;
    line-height: 20px;
    margin: 0 7px 4px 0;
    position: relative;
  }

  .sku-props-selector .prop a {
    display: block;
    padding: 0 9px;
    line-height: 18px;
    height: 18px;
    border: 1px solid #fff;
    white-space: nowrap;
    _display: inline;
  }

  .sku-props-selector .prop li,
  .sku-props-selector .prop a {
    color: #343434;
    cursor: pointer;
    _zoom: 1;
  }

  .sku-props-selector .prop {
    text-overflow: ellipsis;
    /* 當內容溢位時顯示省略號 */
    white-space: nowrap;
    /* 禁止文字換行 */

    overflow: hidden;
    margin-bottom: 15px;
  }


  .sku-props-selector .msg {
    margin: 10px 0 10px 65px;
  }

  .sku-props-selector .prop .selected a,
  .sku-props-selector .prop .selected {
    border-color: #ff5704;
  }

  .sku-props-selector .prop .img-mode a {
    display: block;
    height: 30px;
    min-width: 32px;
    line-height: 30px;
    padding: 0;
    _width: 32px;
  }


  .add-cart {
    display: block;
    width: 55px;
    float: left;
    border: 1px solid #ff6a00;
    color: #fff;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    border-radius: 2px;
    background: #f50;
    text-align: center;
  }

  .sku-props-selector .operate .cancel {
    padding-left: 10px;
    color: #0b72a4;
  }

  .sku-props-selector .amount dd,
  .sku-props-selector .prop dd {
    // margin-left: 65px;
    max-width: 250px;
  }

  .sku-props-selector .operate {
    float: left;
    font-size: 14px;
  }

  .sku-props-selector .operate {
    overflow: hidden;
    text-align: center;
  }

  .clearfix {
    padding-left: 0px;
  }

  .selected {
    border: 2px solid red;
    /* 邊框變紅色 */
  }

  .prop-block.selected .check-mark {
    display: block;
  }

  .lose-efficacy:not(.deleteItemCart) {
    background-color: #f2efef;
    filter: alpha(opacity=70);
    opacity: 0.7;
    z-index: 1 !important;
  }

  .el-checkbox__label {
    font-size: 15px !important;
  }

  .product-image {
    flex: 1;

    img {
      width: 80px;
      height: 80px;
    }
  }


}

.shop-product {
  margin-top: 20px;
  width: 100%;
  font-size: 12px;
}

.shop-name {
  padding: 10px;
  color: black;
  font-size: 14px;
  background: #F7F7F7;
  text-align: left;
}

.product-detail {
  display: flex;
  align-items: center;
  position: relative;

}

.product-name {
  flex: 5;

  p {
    font-size: 14px;
    text-align: left;
  }
}

.item-center {
  text-align: center;
}



.sku-edit {
  display: flex;
  border: 1px solid #ccc;
  font-size: 14px;
}


.sku-edit-image {
  display: flex;
  justify-content: center;
  align-items: center;


  //.sku-item-pic 垂直居中
  .sku-item-pic {
    height: 150px;
    width: 150px;
    object-fit: contain;
    margin: 0 5px;

  }
}
</style>
