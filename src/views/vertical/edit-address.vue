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
            <li class="active">編輯地址</li>
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
                <h3>導覽選單</h3>
              </li>
              <li>
                <router-link to="/vertical/dashboard">儀表板</router-link>
              </li>
              <li>
                <router-link to="/vertical/edit-profile">編輯個人資料</router-link>
              </li>
              <li>
                <a href="" class="active">編輯地址</a>
              </li>
              <li>
                <router-link to="/vertical/order-history">訂單記錄</router-link>
              </li>
              <li>
                <router-link to="/vertical/order-details">訂單詳情</router-link>
              </li>
              <li>
                <router-link to="/vertical/address">地址</router-link>
              </li>
              <li>
                <router-link to="/vertical/password">密碼</router-link>
              </li>
              <li>
                <router-link to="/vertical/my-account">登出</router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-8">
            <div class="edit-profile">
              <h3>編輯地址</h3>
              <form class="submit-property-form">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label>名字</label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label>姓氏</label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label>電子郵件地址</label>
                      <input type="email" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label>電話號碼</label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label>公司名稱（選填）</label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label>國家</label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label>街道地址</label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label>鄉鎮／城市</label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label>州／縣</label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label>郵遞區號</label>
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <button type="submit" class="default-btn">
                      儲存
                    </button>
                  </div>
                </div>
              </form>
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
  name: 'EditAddress',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'Ehay - Tools Store HTML Template'
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
