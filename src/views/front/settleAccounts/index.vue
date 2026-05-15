<template>
  <div>
    <Header />

    <section class="dashboard-area ptb-30" style="padding: 0px 0px;">
      <div class="container" style="background-color:#ffffff;padding-left: 0px;padding-right: 0px;padding-bottom: 10px;"
        v-loading="loading">

        <el-row>

          <el-col :span="24">

            <el-row :span="24">
              <el-col :span="24">
                <div data-halo-id="addressPC_1" data-halo-type="address">
                  <div class="order-address OneRow" id="addressPC_1" data-spm-anchor-id="a210c.1.0.i0.79791debGEret4">
                    <div class="header-wrapper border-bottom">
                      <h2 class="header-title" style="padding-left: 12px;">確認收貨地址
                        <a @click.prevent="manageAddress" class="header-operation" href="#">管理收貨地址</a>
                      </h2>
                    </div>
                    <div class="address-tips-top"></div>
                    <div class="address-list">
                      <div v-for="(address, index) in userAddressList" :key="index">
                        <div class="addr-item-wrapper OneRow addr-default"
                          :class="{ 'addr-selected': address.addressId === selectedAddressIndex, 'hovered': hoverState[index] }"
                          @mouseover="handleMouseOver(index)" @mouseout="handleMouseOut(index)">
                          <div class="inner-infos">
                            <div class="content-container">

                              <div class="selected-description" v-if="address.addressId === selectedAddressIndex">
                                <i class="marker"><img style="max-width: 2%;margin-left: -80px;"
                                    src="./img/map-filling.png"></i>
                                <span class="marker-tip" style="margin-left: 10px;">寄送至</span>
                              </div>

                              <label dir="ltr" aria-checked="true" class="next-radio-wrapper address-contents"
                                :class="{ 'checked': address.addressId === selectedAddressIndex }">
                                <span class="next-radio checked ">
                                  <span class="next-radio-inner press"></span>
                                  <input type="radio" v-model="selectedAddressIndex" :value="address.addressId"
                                    @change="handleAddressChange(address)">
                                </span>
                                <span class="next-radio-label">
                                  <span class="provinceName">臺灣 </span>
                                  <span class="cityName">{{ address.city }} </span>
                                  <span class="areaName">{{ address.area }} </span>
                                  <!-- <span class="townName">{{ address.town }}</span> -->
                                  <span class="addressDetail">{{ address.detailAddress }} </span>
                                  <span class="mobile">{{ address.receivingPhone }} </span>
                                  <span class="default-tip" v-if="address.defaultAddress === 1">預設地址</span>
                                </span>
                              </label>
                              <a class="set-default" title="設定當前地址為預設" v-if="address.defaultAddress === 0">設定為預設收貨地址</a>
                            </div>
                            <!-- <a title="修改地址" class="modify-operation">修改本地址</a> -->
                          </div>
                          <div class="curMarker"></div>
                        </div>
                      </div>
                      <div class="address-tips OneRow"></div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>

            <el-row :span="24">

              <div data-halo-id="orderDesc_orderDesc_1" data-halo-type="itemHeader">
                <div class="item-headers" id="orderDesc_orderDesc_1">
                  <el-row :span="24">
                    <div class="header-wrapper ">
                      <h2 class="header-title">確認訂單資訊</h2>
                    </div>
                  </el-row>
                  <el-row :span="24">
                    <div class="item-headers-wrap item-headers-column-6 item-headers-undefined"
                      style="text-align: center;">
                      <el-col :span="11">
                        <div class="item-headers-content item-headers-0 ">店鋪寶貝</div>
                      </el-col>
                      <el-col :span="4">
                        <div class="item-headers-content item-headers-1 ">商品屬性</div>
                      </el-col>
                      <el-col :span="2">
                        <div class="item-headers-content item-headers-2 ">單價</div>
                      </el-col>
                      <el-col :span="2">
                        <div class="item-headers-content item-headers-3 ">數量</div>
                      </el-col>
                      <el-col :span="3">
                        <div class="item-headers-content item-headers-4 ">優惠方式</div>
                      </el-col>
                      <el-col :span="2">
                        <div class="item-headers-content item-headers-5 ">小計</div>
                      </el-col>
                    </div>
                  </el-row>
                </div>
              </div>
            </el-row>


            <el-row :span="24">
              <div class="dinamicx-card-group"
                style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; flex-shrink: 0;">

                <div v-for="(cart, cartIndex) in cartList" :key="cartIndex">
                  <div v-for="(cartShop, shopIndex) in cart.xtCartShopVoList" :key="shopIndex">
                    <el-row :span="24">
                      <div data-halo-type="seller">
                        <div class="order-orderInfo">
                          <img v-if="cartShop.shopLogo" :src="cartShop.shopLogo" class="shopIcon">
                          <span class="shop-name" style="color: black;">店鋪：&nbsp;</span>
                          <a href="#" target="_blank" rel="noopener noreferrer" :title="cartShop.shopName"
                            class="order-link shop-url">
                            {{ cartShop.shopName }}
                          </a>
                        </div>
                      </div>
                    </el-row>
                    <div v-for="(item, itemIndex) in cartShop.cartItemVoList" :key="itemIndex">
                      <el-row :span="24">
                        <div data-halo-id="item_171b0410a408a61231a2d306be522fa1" data-halo-type="flex">
                          <div id="item_171b0410a408a61231a2d306be522fa1">
                            <div style="padding: 0px;">
                              <div data-halo-type="itemRow">
                                <div class="item-row">
                                  <div class="order-itemInfo">
                                    <el-col :span="11">
                                      <div class="product-detail">
                                        <el-image :src="item.skuFilePath" fit="contain" class="info-img" @error=handleImageError
                                          :preview-src-list="[item.skuFilePath]">
                                        </el-image>
                                        <div class="product-name" @click="showProductDetails(item.productId)">
                                          <p :title="item.productName" v-html="item.productName">
                                          </p>
                                        </div>
                                      </div>
                                    </el-col>

                                    <el-col :span="4" >
                                      <div class="info-sku info-cell">
                                        <span class="bd">{{ item.skuName }}</span>
                                      </div>
                                    </el-col>

                                    <el-col :span="2" style="text-align: center;">
                                      <div class="info-price info-cell">NT$ {{ item.price }}</div>
                                    </el-col>

                                  </div>

                                  <el-col :span="2" style="text-align: center;">
                                    <div class="order-quantity">
                                      <div class="quantity-inner">
                                        <p style="font-size:15px;margin-bottom: 0px">{{ item.quantity }}</p>
                                      </div>
                                    </div>
                                  </el-col>

                                  <el-col :span="3" style="text-align: center;">
                                    <div class="item-row__select">
                                      <p class="item-row__text">無優惠</p>
                                    </div>
                                  </el-col>

                                  <el-col :span="2">
                                    <div class="item-row__price">
                                      <div class="label item-row__price-item"><span
                                          style="font-weight: bold; font-style: normal; text-decoration: none; color: rgb(255, 68, 0); font-size: 15px; min-width: 100px;">NT$ {{(item.price * item.quantity).toFixed(2) }}</span>
                                      </div>
                                    </div>
                                  </el-col>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </el-row>
                    </div>
                  </div>
                </div>
                <el-row :span="24">
                  <div data-halo-type="flex">
                    <div
                      style="display: flex; flex-direction: column; justify-content: flex-start; align-items: stretch; margin: 0px; padding: 0px; background-color: #F7F7F7">
                      <div style="padding: 0px; border-top: 1px solid rgb(255, 255, 255);">
                        <div data-halo-type="flex">
                          <div style="display: grid; grid-template-columns: 1fr; margin: 0px;">
                            <template>
                              <div style="padding: 0px; border-top: 1px solid rgb(255, 255, 255);">
                                <div data-halo-type="flex">
                                  <div
                                    style="display: flex; flex-direction: column; justify-content: flex-start; align-items: stretch; margin: -5px 0px; padding: 0px;">
                                    <div style="padding: 5px; border-top: 1px solid rgb(255, 255, 255);">
                                      <div data-halo-type="textArea">
                                        <div class="textarea">
                                          <label class="textarea__title">
                                            <div>給賣家留言：</div>
                                          </label>
                                          <div class="textarea__wrapper">
                                            <span class="next-input next-input-textarea textarea__input">
                                              <textarea v-model="message" @input="updateCharacterCount"
                                                style="font-size: 15px" placeholder="選填，請先和商家協商一致，付款後商家可見"
                                                maxlength="200" data-real="true" rows="3"></textarea>
                                              <span class="next-input-control">
                                                <span class="next-input-len">{{ characterCount }}/200</span>
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </template>
                          </div>
                        </div>
                      </div>
                      <div style="padding: 0px; border-top: 1px solid rgb(255, 255, 255);">
                        <div data-halo-id="orderPayLayoutPC_3b20635ef4a62340eb3cdb5ae8d6b2ae" data-halo-type="flex">
                          <div id="orderPayLayoutPC_3b20635ef4a62340eb3cdb5ae8d6b2ae"
                            style="display: flex; flex-direction: column; justify-content: flex-end; align-items: flex-end; margin: 0px; padding: 10px 0px; margin-right: 12px;">
                            <div style="padding: 0px;">
                              <div data-halo-id="orderPayPC_3b20635ef4a62340eb3cdb5ae8d6b2ae" data-halo-type="label">
                                <div id="orderPayPC_3b20635ef4a62340eb3cdb5ae8d6b2ae" class="label "><span
                                    class="label__header"
                                    style="font-weight: normal; font-style: normal; text-decoration: none; font-size: 15px; min-width: 100px; margin-right: 10px;">店鋪合計(含運費)</span><span
                                    style="font-weight: bold; font-style: normal; text-decoration: none; color: rgb(255, 68, 0); font-size: 15px; min-width: 100px;">NT$ {{
          selectedTotalPrice }}</span>
                                </div>
                              </div>
                            </div>
                            <div style="padding: 0px;">
                              <div
                                data-halo-id="presellDescGroupPC_presellDescGroup_presellDescGroup3b20635ef4a62340eb3cdb5ae8d6b2ae"
                                data-halo-type="descriptionGroup"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-row>
              </div>
            </el-row>

            <el-row :span="24">
              <div data-halo-id="realPayPC_1" data-halo-type="realPay">
                <div class="realpay order-payInfo" id="realPayPC_1">
                  <div class="boxSeettleAccounts">
                    <div class="box__wrapper box__wrapper-undefined">
                      <div class="box__shadow box__shadow-undefined">
                        <div><span class="realpay--title">實付款：</span><span class="realpay--price-symbol"> NT$</span><span
                            class="realpay--price" style="color: rgb(255, 80, 0);">{{ selectedTotalPrice }}</span>
                        </div>
                        <div class="order-confirmAddr">
                          <div class="confirmAddr-addr"><span class="confirmAddr-title">寄送至：</span><span
                              class="confirmAddr-addr-bd"> 臺灣省 {{ selectedAddress.city }} {{ selectedAddress.area }} {{
          selectedAddress.detailAddress }}</span></div>
                          <div class="confirmAddr-addr-user"><span class="confirmAddr-title">收貨人：</span><span
                              class="confirmAddr-addr-bd">{{ selectedAddress.receivingName }} {{
          selectedAddress.receivingPhone }}</span></div>
                        </div>
                        <div class="order-confirm-eticket"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-row>

            <el-row :span="24">
              <div data-halo-id="submitOrderPC_1" data-halo-type="submitOrder">
                <div class="submitOrder-container" id="submitOrderPC_1">
                  <div class="wrapper">
                    <a role="button" title="提交訂單" class="go-btn" style="background-color: rgb(255, 80, 0);"
                      @click="submitOrder">提交訂單
                    </a>
                  </div>
                  <div class="base-msg">若價格變動，請在提交訂單後聯絡賣家改價，並檢視已買到的寶貝</div>
                </div>
              </div>
            </el-row>

          </el-col>
        </el-row>

      </div>


    </section>


    <Footer />

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

import { listAddress } from "@/api/system/address.js";
import { cartList } from "@/api/cart/cart";
import { addOrder, immediatelyOrder } from "@/api/order/order";
import eventBus from '@/utils/eventBus';



export default {
  components: {
    Header,
    Footer,
    CustomPrompt,
  },
  data() {
    return {
      loading: true,
      userAddressList: null,
      //選中的address
      selectedAddress: {
        city: '',
        area: '',
        detailAddress: '',
        receivingName: '',
        receivingPhone: ''
      },
      cartList: [],
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


      selectedAddressIndex: null,
      hoverState: {},

      message: '', // 用於雙向繫結輸入框的值
      characterCount: 0, // 用於記錄字元數
      maxCharacter: 200, // 最大字元數

      cartItemIds: null,
      defaultImageUrl: require("@/assets/images/default.png"),
    };
  },

  async created() {
    try {
      this.loading = true;

      // 透過購物車跳轉過來
      this.cartItemIds = this.$route.query.cartItemIds;
      this.getMyAddressList();

      if (this.cartItemIds) {
        await this.getMyCartList(this.cartItemIds);
      }

      // 透過商品詳情跳轉過來
      const cartItem = this.$route.query.cartItem;

      if (cartItem) {
        const buyProduct = JSON.parse(cartItem);
        console.log(buyProduct);

        // 使用 await 等待介面請求完成
        const response = await immediatelyOrder(buyProduct);

        if (response.code === 200) {
          this.cartList = response.data;
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      // 無論請求成功還是失敗，都會在這裡設定 loading 為 false
      this.loading = false;
    }
  },


  methods: {
    /** 查詢我得收貨地址 */
    async getMyAddressList() {
      try {
        const listAddressResult = await listAddress();
        if (listAddressResult.code === 200) {
          this.userAddressList = listAddressResult.rows;
          //遍歷地址列表，設定預設地址
          this.userAddressList.forEach((item, index) => {
            if (item.defaultAddress === 1) {
              this.$nextTick(() => {
                this.selectedAddressIndex = item.addressId;
                this.selectedAddress = item;
              });
            }
          });
        }
      } catch (error) {
        console.error("獲取地址列表時出錯：", error);
      }
    },


    /** 查詢我的購物車列表 */
    getMyCartList(cartItemIds) {
      if (!cartItemIds) {
        // cartItemIds為空，不執行非同步請求
        return;
      }
      cartList(null, cartItemIds).then(response => {
        this.cartList = response.rows;
      });
    },


    limitCharacters(str, limit) {
      // 如果字元串長度超過限制，則擷取前 limit 個字元並新增換行
      return str.length > limit ? str.slice(0, limit) + '<br/>' + str.slice(limit) : str;
    },


    /** 選擇收貨地址 */
    handleAddressChange(address) {
      this.selectedAddressIndex = address.addressId;
      this.selectedAddress = address;
    },



    /** 滑鼠移入移出事件 */
    handleMouseOver(index) {
      this.$set(this.hoverState, index, true);
    },

    /** 滑鼠移入移出事件 */
    handleMouseOut(index) {
      this.$set(this.hoverState, index, false);
    },

    /** 監控輸入框資料變化 */
    updateCharacterCount() {
      this.characterCount = this.message.length;
      if (this.characterCount > this.maxCharacter) {
        // 當字元數超過最大字元數時，截斷輸入
        this.message = this.message.slice(0, this.maxCharacter);
      }
    },

    /** 提交訂單 */
    async submitOrder() {
      try {
        this.loading = true;
        //判斷地址是否為空
        if (!this.selectedAddressIndex) {
          this.$message({
            type: 'warning',
            message: '請選擇收貨地址',
          });
          return;
        }

        // 構建下單引數
        const formData = {
          buyerUserAddressId: this.selectedAddress.addressId,
          messageToSeller: this.message,
          //構建購物車商品id,分隔
          cartItemIds: this.cartItemIds,
          xtOrderItemForms: this.cartList.reduce((result, shop) => {
            // 將xtOrderItemForms陣列中的每個項轉換為後端所需的格式
            shop.xtCartShopVoList.forEach(cartShop => {
              cartShop.cartItemVoList.forEach(item => {
                result.push({
                  productId: item.productId,
                  modelDiscountedPrice: item.price, // 使用單價作為優惠價
                  modelOriginalPrice: item.price,//計算總價
                  modelQuantityPurchased: item.quantity,
                  productName: item.productName,
                  productSkuId: item.skuId,
                  productSkuName: item.skuName,
                  productSkuPicUrl: item.skuFilePath,
                });
              });
            });
            return result;
          }, [])
        };
        // 請求下單介面
        const response = await addOrder(formData);

        if (response.code === 200) {
          this.$message({
            type: 'success',
            message: '下單成功',
          });
          eventBus.$emit('cart-updated');
          // 跳轉到訂單列表
          this.$router.push({ path: '/order' });
        } else {
          this.$message({
            type: 'error',
            message: response.msg,
          });
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        // 無論請求成功還是失敗，都會在這裡設定 loading 為 false
        this.loading = false;
      }
    },

    /** 跳轉到管理地址 */
    manageAddress() {
      this.$router.push({ path: '/profile', query: { type: '2' } })
    },

    /** 返回購物車 */
    returnCart() {
      this.$router.push({ path: '/cart' })
    },

    showProductDetails(productId) {
      //開啟新的標籤頁
      window.open(`/frontProductDetail?id=${productId}`, '_blank');
    },

    /** 對話方塊確認回撥方法 */
    handleConfirm() {
      this.dialogVisible = false;
    },

    /** 對話方塊取消回撥方法 */
    handleCancel() {
      this.dialogVisible = false;
    },

    /** 關閉對話方塊 */
    closeDialog(visible) {
      this.dialogVisible = visible;
    },

    handleImageError(e){
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
            totalPrice += item.price * item.quantity;
          });
        });
      });

      // 返回計算結果，保留兩位小數
      return totalPrice.toFixed(2);
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

// @import "~@a/front/css/cart/index.css";


::v-deep {

  p {
    font-size: 12px;
    line-height: 1.8;
  }

  li,
  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .order-address {
    margin-bottom: 30px;
    margin-top: 30px;
  }

  .border-bottom {
    border-bottom: 2px solid #f1f1f1;
  }

  .header-wrapper {
    position: relative;
    margin-top: 15px;
  }

  .header-wrapper .header-title {
    line-height: 25px;
    color: #333;
    font-weight: 700;
    font-size: 15px;
    padding-left: 12px
  }

  .header-wrapper .header-title .header-operation {
    position: absolute;
    right: 0;
    cursor: pointer;
    font-size: 15px;
    font-weight: 400;
    padding-right: 12px;
    color: #ff6a00;
  }

  a,
  a:link,
  a:visited {
    color: #36c;
  }

  a:link,
  a:visited {
    color: #5584ff;
  }

  .order-address .address-tips-top {
    margin-top: -10px;
    margin-bottom: 5px;
  }

  .order-address .address-list {
    width: 100%;
  }

  .order-address .addr-selected.addr-item-wrapper.OneRow {
    border-color: #f40;
    background-color: #fff0e8;
    box-shadow: 5px 5px 0 #f3f3f3;
  }

  .order-address .addr-item-wrapper.OneRow {
    position: relative;
    padding-left: 92px;
    border: 1px solid #fff;
    line-height: 30px;
    margin: 10px 0;
  }

  .next-radio-wrapper {
    outline: 0;
  }

  .next-radio-wrapper .next-radio {
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    line-height: 1;
  }


  .next-radio-wrapper .next-radio-inner {
    display: block;
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid #c4c6cf;
    transition: all .1s linear;
    box-shadow: none;
  }

  .next-radio-wrapper .next-radio-inner:after {
    transform: scale(0);
    position: absolute;
    border-radius: 50%;
    top: 50%;
    margin-top: -2px;
    left: 50%;
    margin-left: -2px;
    background: #fff;
    content: "";
    transition: all .1s linear;
  }

  .next-radio-wrapper.checked .next-radio-inner {
    border-color: #ff6a00;
    background: #ff6a00;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  .next-radio-wrapper .next-radio *,
  .next-radio-wrapper .next-radio :after,
  .next-radio-wrapper .next-radio :before {
    box-sizing: border-box;
  }

  .next-radio-wrapper.checked .next-radio-inner:after {
    width: 4px;
    height: 4px;
    font-weight: 700;
    background: #fff;
    transform: scale(1);
  }

  .next-radio-wrapper .next-radio input[type=radio] {
    opacity: 0;
    position: absolute;
    vertical-align: middle;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    margin: 0;
    cursor: pointer;
  }

  .next-radio-label {
    margin: 0 0 0 4px;
    font-size: 14px;
    vertical-align: middle;
    line-height: 1;
    color: #333;
  }

  .order-address .content-container .mobile {
    color: grey;
    font-weight: 700;
  }

  .order-address .addr-default.addr-item-wrapper.OneRow .default-tip {
    display: inline;
  }


  .order-address .addr-item-wrapper.OneRow .default-tip,
  .order-address .addr-item-wrapper.OneRow .set-default {
    display: none;
  }


  .order-address .content-container .selected-description .marker-tip {
    font-weight: 700;
  }

  .order-address .content-container.selected {
    margin-right: 66px;
  }

  .order-address .content-container .selected-description .marker {
    font-family: tp-buy-font;
    font-size: 22px;
    font-style: normal;
    color: #ff4400;
    line-height: 26px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }


  .order-address .operations {
    display: block;
    position: relative;
  }

  .order-address .content-container .selected-description {
    display: inline;
    color: #f40;
    line-height: 26px;
    // margin-left: -215px;
    // margin-right: 18px;
  }

  .next-radio-wrapper .next-radio input[type=radio] {
    opacity: 0;
    position: absolute;
    vertical-align: middle;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    margin: 0;
    cursor: pointer;
  }

  .next-radio-wrapper .next-radio {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    line-height: 1;
    margin-left: 20px;
  }

  .next-radio-wrapper .next-radio input[type=radio] {
    opacity: 0;
    position: absolute;
    vertical-align: middle;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    margin: 0;
    cursor: pointer;
  }

  .header-wrapper {
    position: relative;
    margin-bottom: 15px;
  }

  .header-wrapper .header-title {
    line-height: 25px;
    color: #333;
    font-weight: 700;
    font-size: 15px;
  }

  .item-headers-wrap {
    margin-top: 15px;
    color: #6c6c6c;
  }


  .item-headers-content {
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-bottom: 3px solid #f2f2f2;
    vertical-align: bottom;
  }

  .order-orderInfo {
    position: relative;
    padding-bottom: 5px;
    margin-top: 15px;
    border-bottom: 2px dotted #f2f2f2;
    height: 27px;
    padding-left: 12px;
  }

  .order-orderInfo .shopIcon {
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
    margin-right: 6px;
    position: relative;
    top: 1px;
  }

  .order-orderInfo .shop-url {
    color: #3c3c3c;
  }

  .order-orderInfo .shop-seller {
    margin-left: 60px;
  }

  .order-orderInfo .shop-seller a {
    color: #3c3c3c;
  }


  .order-orderInfo .shop-url {
    color: #3c3c3c;
  }

  a,
  a:link,
  a:visited {
    color: #36c;
  }

  a:link,
  a:visited {
    color: #5584ff;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }


  .ww-light a span {
    display: none;
  }

  #item_171b0410a408a61231a2d306be522fa1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    margin: 0px;
    padding: 0px;
    background-color: rgb(251, 252, 255);
    border-bottom: 1px dotted rgb(221, 221, 221);
    padding-left: 12px;
    // padding-right: 12px;
  }

  .order-itemInfo {
    // display: inline-block;
    vertical-align: top;
  }

  .order-itemInfo .info-detail {
    // width: 245px;
    padding: 10px 0 10px 10px;
  }

  .order-itemInfo .info-cell {
    display: inline-block;
    box-sizing: content-box;
    margin-right: 1px;
  }


  .order-itemInfo .info-cell {
    display: inline-block;
    box-sizing: content-box;
    margin-right: 1px;
  }

  .order-itemInfo .info-msg {
    padding-left: 10px;
    vertical-align: top;
  }


  .order-itemInfo .info-title {
    color: #3c3c3c;
    width: 300px;
    // white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }

  .order-itemInfo .info-icon-list {
    width: 180px;
  }

  .order-itemInfo .icon-main {
    height: 16px;
    margin-right: 4px;
  }

  .order-itemInfo .icon-main img {
    vertical-align: middle;
    height: 16px;
  }


  .order-itemInfo .delivery-time {
    color: #6c6c6c;
    display: inline-block;
    width: 180px;
  }

  .order-itemInfo .info-sku {
    color: #6c6c6c;
    width: 180px;
    display: inline-block;
    vertical-align: top;
    padding: 10px 0;
  }

  .order-itemInfo .info-sku p {
    word-break: break-all;
  }

  .order-quantity {
    display: inline-block;
    vertical-align: top;
    text-align: center;
    width: 120px;
    padding: 10px 0;
    margin-right: 1px;
  }

  .order-quantity .quantity-inner {
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    padding: 0 0 5px;
  }

  .item-row .item-row__select {
    // display: inline-block;
    // width: 180px;
    vertical-align: top;
    text-align: center;
  }

  .item-row .item-row__text {
    padding: 10px;
    font-size: 15px;
    margin-bottom: 0px;
  }

  .item-row .item-row__price {
    // display: inline-block;
    // width: 130px;
    text-align: center;
    padding-right: 5px;
  }

  .item-row .item-row__price-item {
    padding: 10px 0 5px;
  }

  .label {
    display: inline-block;
    padding: 5px;
  }



  .service,
  .service .service-title {
    display: inline-block;
    vertical-align: top;
  }

  .service {
    text-align: left;
    line-height: 33px;
  }


  .service .service-title {
    width: 60px;
    text-align: right;
  }

  .service .title-field {
    width: 375px;
    padding-right: 1px;
    padding-left: 10px;
    display: inline-block;
    text-align: left;
  }

  .service .check-box,
  .service .title {
    margin-right: 5px;
  }

  .next-checkbox-wrapper,
  .next-checkbox-wrapper *,
  .next-checkbox-wrapper :after,
  .next-checkbox-wrapper :before {
    box-sizing: border-box;
  }


  .next-checkbox-wrapper .next-checkbox {
    display: inline-block;
    position: relative;
    line-height: 1;
    vertical-align: middle;
  }

  .next-checkbox-wrapper.checked .next-checkbox-inner {
    border-color: transparent;
    background-color: #5584ff;
  }

  .next-checkbox-wrapper .next-checkbox-inner {
    display: block;
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 3px;
    border: 1px solid #c4c6cf;
    transition: all .1s linear;
    text-align: left;
    box-shadow: none;
  }

  .textarea {
    position: relative;
    padding: 10px;
  }

  .textarea .textarea__title {
    vertical-align: top;
    display: inline-block;
  }

  .textarea .textarea__wrapper {
    display: inline-block;
  }

  .textarea .textarea__wrapper .textarea__input {
    vertical-align: top;
    width: 900px;
    resize: none;
    text-indent: 4px;
    border: 1px solid #ccc;
    outline: none;
    overflow: auto;
  }

  .next-input.next-input-textarea {
    border-radius: 3px;
    font-size: 0;
  }

  .next-input,
  .next-input *,
  .next-input :after,
  .next-input :before {
    box-sizing: border-box;
  }

  .next-input {
    vertical-align: middle;
    display: inline-table;
    border-collapse: separate;
    font-size: 0;
    line-height: 1;
    width: 200px;
    border-spacing: 0;
    transition: all .1s linear;
    border: 1px solid #c4c6cf;
    background-color: #fff;
  }


  .next-input.next-input-textarea textarea {
    color: #333;
    padding: 4px 8px;
    font-size: 15px;
    border-radius: 3px;
  }

  .next-input input,
  .next-input textarea {
    width: 100%;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    font-weight: 400;
    vertical-align: middle;
    background-color: transparent;
    color: #333;
  }

  .next-input textarea {
    resize: none;
  }

  .next-input.next-input-textarea .next-input-control {
    // display: block;
    // width: auto;
    border-radius: 3px;
  }

  .next-input-control,
  .next-input-inner,
  .next-input-label {
    display: table-cell;
    width: 1px;
    vertical-align: middle;
    line-height: 1;
    background-color: transparent;
    white-space: nowrap;
  }

  .next-input-control .next-input-len {
    font-size: 15px;
    line-height: 12px;
    color: #999;
    display: table-cell;
    width: 1px;
    vertical-align: bottom;
  }

  .select-container,
  .select-container .select__inline {
    display: inline-block;
  }

  .select-container .select__wrap {
    padding: 10px 0 5px;
    width: 100%;
  }

  .select-container .select-label {
    display: inline-block;
    min-width: 95px;
    padding-right: 15px;
    text-align: right;
    vertical-align: top;
    line-height: 26px;
  }

  .label-select .label-select__select {
    margin-right: 10px;
    max-width: 200px;
  }


  .next-select-single.next-no-search {
    cursor: pointer;
  }

  .next-select-trigger {
    min-width: 100px;
    outline: 0;
    transition: all .1s linear;
  }


  .next-select-single.next-no-search {
    cursor: pointer;
  }

  .next-select-trigger {
    min-width: 100px;
    outline: 0;
    transition: all .1s linear;
  }


  .next-select .next-select-inner {
    display: inline-flex;
    align-items: center;
    width: 100%;
    min-width: 100px;
    outline: 0;
    color: #333;
  }

  .next-input.next-medium .next-input-text-field {
    padding: 0 8px;
    font-size: 12px;
    height: 26px;
    line-height: 26px;
  }

  .next-select-single .next-select-values {
    display: inline-flex;
    align-items: center;
  }

  .next-select-trigger .next-select-values {
    display: block;
    width: 100%;
    flex: 1 1 0;
    overflow: hidden;
  }

  .next-select-single .next-select-values>em {
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .next-select-single.next-inactive .next-select-values>em+.next-select-trigger-search,
  .next-select-single.next-no-search .next-select-values>em+.next-select-trigger-search {
    width: 1px;
    opacity: 0;
    filter: alpha(opacity=0);
  }

  .next-select-trigger-search {
    position: relative;
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
  }

  .next-select.next-no-search .next-select-trigger-search input {
    color: transparent;
  }

  .next-select-trigger .next-select-values input {
    padding-left: 0;
    padding-right: 0;
  }

  .next-input.next-medium input {
    border-radius: 3px;
  }

  .next-select-trigger-search>span {
    position: relative;
    visibility: hidden;
    white-space: pre;
    max-width: 100%;
    z-index: -1;
  }

  .next-select-trigger-search>input,
  .next-select-trigger-search>span {
    display: block;
    font-size: inherit;
    font-family: inherit;
    letter-spacing: inherit;
    white-space: nowrap;
    overflow: hidden;
  }

  .realpay .boxSeettleAccounts {
    text-align: right;
    margin-top: 15px;
    margin-right: 12px;
  }

  .realpay .boxSeettleAccounts .box__wrapper {
    display: inline-block;
    border: 1px solid #ff0036;
  }

  .realpay .boxSeettleAccounts .box__wrapper .box__shadow {
    border: 3px solid #fff0e8;
    min-width: 230px;
    padding: 10px 5px 10px 20px;
  }

  .realpay .realpay--title {
    font-weight: 700;
    color: #333;
  }

  .realpay .realpay--price-symbol {
    font-size: 26px;
    margin-right: 4px;
    color: #999;
  }

  .realpay .realpay--price {
    color: #ff0036;
    font: 700 26px tahoma;
  }

  .order-confirmAddr {
    line-height: 1.6;
    margin-top: 10px;
  }


  .order-confirmAddr .confirmAddr-title {
    font-weight: 700;
    color: #333;
  }


  .order-confirm-eticket {
    line-height: 1.6;
    margin-top: 10px;
  }

  .submitOrder-container {
    text-align: right;
    margin-top: -1px;
    margin-right: 12px
  }

  .submitOrder-container .wrapper {
    display: inline-block;
    padding: 0 0 5px 5px;
  }

  .submitOrder-container .go-back {
    color: #36c;
    text-decoration: none;
    margin-right: 50px;
    line-height: 34px;
  }

  .submitOrder-container .go-back i {
    font: 17px/33px normal;
    font-family: tp-buy-font;
    padding-right: 6px;
  }

  .submitOrder-container .go-btn {
    display: inline-block;
    width: 182px;
    height: 39px;
    position: relative;
    vertical-align: middle;
    line-height: 39px;
    cursor: pointer;
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    background: #dd2727;
    color: #fff;
  }


  .hovered {
    background-color: #fff0e8;
  }

  .info-cell p:hover {
    color: red;
  }

  // .item-row {
  //   display: flex;
  //   align-items: center;
  // }

  .item-row .el-col {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product-detail {
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: space-around;

  .info-img {
    flex: 1;

    img {
      width: 80px;
      height: 80px;
    }

    margin-right: 10px;
  }

  .product-name {
    flex: 5;

    p {
      font-size: 14px;
      text-align: left;
    }
  }

}

}



</style>
