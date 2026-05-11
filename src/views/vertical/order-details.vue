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
            <li class="active">訂單詳情</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="dashboard-area ptb-54">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <ul class="dashboard-navigation">
              <li>
                <h3>導航選單</h3>
              </li>
              <li>
                <router-link to="/vertical/dashboard">儀表板</router-link>
              </li>
              <li>
                <router-link to="/vertical/edit-profile">編輯個人資料</router-link>
              </li>
              <li>
                <router-link to="/vertical/edit-address">編輯地址</router-link>
              </li>
              <li>
                <router-link to="/vertical/order-history">訂單紀錄</router-link>
              </li>
              <li>
                <a href="" class="active">訂單詳情</a>
              </li>
              <li>
                <router-link to="/vertical/address">地址管理</router-link>
              </li>
              <li>
                <router-link to="/vertical/password">修改密碼</router-link>
              </li>
              <li>
                <router-link to="/vertical/my-account">登出</router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-7 col-md-6">
                <h3 class="order-details-title">訂單詳情</h3>
                <div class="order-details-area">
                  <div class="cart-totals">
                    <h3>訂單編號：#001</h3>
                    <p>訂單建立時間：2021年8月1日</p>
                    <router-link to="/vertical/order-history" class="default-btn">
                      返回訂單紀錄
                    </router-link>
                    <ul>
                      <li>小計 <span>$240.00</span></li>
                      <li>運費 <span>$240.00</span></li>
                      <li>優惠券 <span>$00.00</span></li>
                      <li>總計 <span>$240.00</span></li>
                      <li><b>總計</b> <span><b>$240.00</b></span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-md-6">
                <div class="address-details-area">
                  <div class="cart-totals">
                    <h3>帳單地址</h3>
                    <ul>
                      <li class="p-0">
                        Doreen McCool
                      </li>
                      <li>
                        <span>地址：</span>
                        2491 Reel Avenue Albuquer que, MN 2543
                      </li>
                      <li>
                        <span>電話：</span>
                        <a href="tel:+1-(514)-321-4566">+1 (514) 321-4566</a>
                      </li>
                      <li>
                        <span>電子郵件：</span>
                        <a href="javascript:;"><span class="__cf_email__"
                                                     data-cfemail="2b4e434a526b4e534a465b474e05484446"
                        ></span></a>
                      </li>
                    </ul>
                  </div>
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
  name: 'OrderDetails',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'Ehay - 訂單詳情'
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
