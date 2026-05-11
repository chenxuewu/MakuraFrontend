<template>
  <div class="vertical-page">


    <VerticalHead />


    <div class="modal fade cart-shit" id="exampleModal-cart" tabindex="-1" aria-hidden="true">
      <div class="cart-shit-wrap">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close-btn" data-bs-dismiss="modal">
                <i class="ri-close-fill"></i>
              </button>
            </div>
            <div class="modal-body">
              <ul class="cart-list">
                <li>
                  <img src="/test/static/picture/product-1.jpg" alt="Image">
                  <router-link to="/vertical/shopping-cart">
                    DFMALB 20V Max XX 多功能振動工具 變速工具
                  </router-link>
                  <span>$125.00</span>
                  <i class="ri-close-fill"></i>
                </li>
                <li>
                  <img src="/test/static/picture/product-2.jpg" alt="Image">
                  <router-link to="/vertical/shopping-cart">
                    電動工具組 中國製造 50V 鋰電池
                  </router-link>
                  <span>$125.00</span>
                  <i class="ri-close-fill"></i>
                </li>
                <li>
                  <img src="/test/static/picture/product-3.jpg" alt="Image">
                  <router-link to="/vertical/shopping-cart">
                    電磁衝擊電鎚鑽機
                  </router-link>
                  <span>$125.00</span>
                  <i class="ri-close-fill"></i>
                </li>
                <li>
                  <img src="/test/static/picture/product-4.jpg" alt="Image">
                  <router-link to="/vertical/shopping-cart">
                    專業無線電鑽電動工具組 優惠價格
                  </router-link>
                  <span>$125.00</span>
                  <i class="ri-close-fill"></i>
                </li>
              </ul>
              <ul class="payable">
                <li>
                  應付總額
                </li>
                <li class="total">
                  <span>$564.00</span>
                </li>
              </ul>
              <ul class="cart-check-btn">
                <li>
                  <router-link to="/vertical/shopping-cart" class="default-btn">
                    查看購物車
                  </router-link>
                </li>
                <li class="checkout">
                  <a href="" class="default-btn">
                    結帳
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="page-title-area">
      <div class="container">
        <div class="page-title-content">
          <ul>
            <li>
              <router-link to="/vertical/index">
                首頁
              </router-link>
            </li>
            <li class="active">結帳</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="checkout-area ptb-54">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12">
            <div class="log-in-coupon-code">
              <p>已經是會員？點擊這裡
                <router-link to="/vertical/my-account">
                  登入
                </router-link>
              </p>
            </div>
            <form>
              <div class="billing-details">
                <h3 class="title">帳單資訊</h3>
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label>名字 <span class="required">*</span></label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label>姓氏 <span class="required">*</span></label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label>電子郵件 <span class="required">*</span></label>
                      <input type="email" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label>電話 <span class="required">*</span></label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>公司名稱（選填）
                      </label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>國家 <span class="required">*</span></label>
                      <div class="select-box">
                        <select class="form-control">
                          <option value="5">英國</option>
                          <option value="1">中國</option>
                          <option value="2">阿拉伯聯合大公國</option>
                          <option value="0">德國</option>
                          <option value="3">法國</option>
                          <option value="4">日本</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                      <label>街道地址 <span class="required">*</span></label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                      <label>鄉鎮／城市 <span class="required">*</span></label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>州／省<span class="required">*</span></label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>郵遞區號 <span class="required">*</span></label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="ship-different-address">
                      <label class="form-check-label" for="ship-different-address">運送到其他地址？</label>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>訂單備註（可選）</label>
                      <textarea name="notes" id="notes" cols="30" rows="8" class="form-control"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="order-details ml-15">
              <div class="cart-totals mb-0">
                <h3>購物車總計</h3>
                <ul>
                  <li>小計 <span>$240.00</span></li>
                  <li>運費 <span>$240.00</span></li>
                  <li>優惠券 <span>$00.00</span></li>
                  <li>總計 <span>$240.00</span></li>
                  <li><b>應付總額</b> <span><b>$240.00</b></span></li>
                </ul>
                <div class="faq-accordion">
                  <h3>支付方式</h3>
                  <ul class="accordion">
                    <li class="accordion-item active">
                      <a class="accordion-title" href="javascript:void(0)">
                        銀行轉帳
                      </a>
                      <p class="accordion-content show">
                        請直接將款項轉入我們的銀行帳戶。請使用您的訂單編號作為付款參考。款項入帳後我們才會出貨。
                      </p>
                    </li>
                    <li class="accordion-item">
                      <a class="accordion-title" href="javascript:void(0)">
                        貨到付款
                      </a>
                      <p class="accordion-content">
                        請將支票寄至：商店名稱、商店街道、商店城鎮、商店州／縣、商店郵遞區號。
                      </p>
                    </li>
                    <li class="accordion-item">
                      <a class="accordion-title" href="javascript:void(0)">
                        PayPal
                      </a>
                      <p class="accordion-content">
                        透過 PayPal 付款；如果您沒有 PayPal 帳戶，也可以使用信用卡付款。
                      </p>
                    </li>
                    <li class="accordion-item">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="ship-differents-address">
                        <label class="form-check-label" for="ship-different-address">我已閱讀並接受
                          <router-link to="/vertical/terms-conditions">服務條款</router-link>
                          *</label>
                      </div>
                    </li>
                    <li class="place-order">
                      <a href="" class="default-btn two">
                        下單
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <VerticalSubscribe />

    <VerticalFoot />

  </div>

</template>

<script>
import VerticalHead from './components/head.vue'
import VerticalFoot from './components/foot.vue'
import VerticalSubscribe from './components/subscribe.vue'
import verticalMixin from '@/mixins/vertical'

export default {
  name: 'Checkout',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'Ehay - 工具商店'
  }
}
</script>
<style>
/* 第三方库全局样式（不能 scoped，否则动态生成的元素无法匹配） */
@import '/test/static/css/bootstrap.min.css';
@import '/test/static/css/owl.theme.default.min.css';
@import '/test/static/css/owl.carousel.min.css';
@import '/test/static/css/remixicon.css';
@import '/test/static/css/meanmenu.min.css';
@import '/test/static/css/animate.min.css';
@import '/test/static/css/style.css';
@import '/test/static/css/responsive.css';
</style>

<style scoped>
/* 确保样式在 Vue 组件中正确应用 */
.vertical-page {
  width: 100%;
}

.vertical-page :deep(*) {
  box-sizing: border-box;
}

.vertical-page :deep(.container) {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 12px;
}

.vertical-page :deep(.row) {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
}

.vertical-page :deep([class*="col-"]) {
  padding: 0 12px;
}
</style>
