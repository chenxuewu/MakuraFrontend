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
                    DFMALB 20V Max XX Oscillating Multi Tool Variable Speed Tool
                  </router-link>
                  <span>$125.00</span>
                  <i class="ri-close-fill"></i>
                </li>
                <li>
                  <img src="/test/static/picture/product-2.jpg" alt="Image">
                  <router-link to="/vertical/shopping-cart">
                    Power Tools Set Chinese Manufacturer Production 50V Lithu Battery
                  </router-link>
                  <span>$125.00</span>
                  <i class="ri-close-fill"></i>
                </li>
                <li>
                  <img src="/test/static/picture/product-3.jpg" alt="Image">
                  <router-link to="/vertical/shopping-cart">
                    Electrical Magnetic Impact Power Hammer Drills Machine
                  </router-link>
                  <span>$125.00</span>
                  <i class="ri-close-fill"></i>
                </li>
                <li>
                  <img src="/test/static/picture/product-4.jpg" alt="Image">
                  <router-link to="/vertical/shopping-cart">
                    Professional Cordless Drill Power Tools Set Competitive Price
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
                  <router-link to="/vertical/checkout" class="default-btn">
                    結帳
                  </router-link>
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
            <li class="active">訂單成功</li>
          </ul>
        </div>
      </div>
    </div>


    <div class="order-area ptb-54">
      <div class="container">
        <div class="order-content pb-54">
          <img src="/test/static/picture/check-mark.png" alt="Image">
          <h3>感謝您的購買</h3>
          <span>您的訂單編號是：001</span>
          <p>我們將發送訂單確認郵件給您，包含詳細資訊和追蹤資訊</p>
          <router-link to="/vertical/products" class="default-btn">
            繼續購物
          </router-link>
        </div>
        <div class="item-order">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <ul class="order-item-content">
                <li>
                  <h3>訂單項目</h3>
                </li>
                <li>
                  訂單編號
                  <span>#001</span>
                </li>
                <li>
                  訂單日期
                  <span>2021年8月1日</span>
                </li>
                <li>
                  總計
                  <span>$564.00</span>
                </li>
                <li>
                  付款方式
                  <span>銀行轉帳</span>
                </li>
              </ul>
            </div>
            <div class="col-lg-6 col-md-6">
              <ul class="order-item-address">
                <li class="addresss">
                  <h3>帳單地址</h3>
                  <span>Doreen McCool</span>
                </li>
                <li>
                  <span>地址：</span>
                  2491 Reel Avenue Albuquerque, NM 4542
                </li>
                <li>
                  <span>電話：</span>
                  <a href="tel:+1-(514)-321-4566">+1 (514) 321-4566,</a>
                  <a href="tel:+1-(514)-321-4567">+1 (514) 321-4567</a>
                </li>
                <li>
                  <span>電子郵件：</span>
                  <a href="javascript:;">
                    <span class="__cf_email__" data-cfemail="34515c554d74514c55594458511a575b59"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


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
  name: 'SuccessOrder',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'Ehay - 訂單成功'
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
