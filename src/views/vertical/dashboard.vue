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
            <li class="active">儀表板</li>
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
                <a href="" class="active">儀表板</a>
              </li>
              <li>
                <router-link to="/vertical/edit-profile">編輯個人資料</router-link>
              </li>
              <li>
                <router-link to="/vertical/edit-address">編輯地址</router-link>
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
            <div class="profile-bar">
              <div class="row align-items-center">
                <div class="col-lg-6 col-md-6">
                  <div class="profile-info">
                    <img src="/test/static/picture/profile-img.jpg" alt="Image">
                    <h3>
                      <router-link to="/vertical/edit-profile">Doreen Mcool</router-link>
                    </h3>
                    <a href="javascript:;"><span class="__cf_email__" data-cfemail="b8dbd7d6ccd9dbccf8ddd0d9c196dbd7d5">[email&#160;protected]</span></a>
                    <a href="tel:+1-(514)-321-4566">+1 (514) 321-4566</a>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="edit-profiles">
                    <router-link to="/vertical/edit-profile" class="default-btn">編輯個人資料</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="billing-address-bar">
              <div class="row align-items-center">
                <div class="col-lg-4 col-md-6">
                  <h3>帳單地址</h3>
                  <ul>
                    <li>Doreen McCool</li>
                    <li>
                      <span>地址：</span>
                      2491 Reel Avenue Albuquerque
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                  <ul>
                    <li>
                      <span>電話：</span>
                      <a href="tel:+1-(514)-321-4566">+1 (514) 321-4566</a>
                    </li>
                    <li>
                      <span>電子郵件：</span>
                      <a href="javascript:;"> <span class="__cf_email__"
                                                    data-cfemail="badfd2dbc3fadfc2dbd7cad6df94d9d5d7"
                      >[email&#160;protected]</span></a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="edit-address">
                    <router-link to="/vertical/edit-address" class="default-btn">編輯地址</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="cart-area recent-order">
              <h3>最近訂單</h3>
              <form class="cart-controller mb-0">
                <div class="cart-table table-responsive">
                  <table class="table table-bordered">
                    <thead>
                    <tr>
                      <th scope="col">商品</th>
                      <th scope="col"></th>
                      <th scope="col">訂單編號</th>
                      <th scope="col">數量</th>
                      <th scope="col">狀態</th>
                      <th scope="col">總計</th>
                      <th scope="col">刪除</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td class="product-thumbnail">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-1.jpg" alt="Image">
                        </router-link>
                      </td>
                      <td class="product-name">
                        <router-link to="/vertical/product-details">DFMALB 20V Max XX Oscillating Multi <br> Tool
                          Variable Speed Tool
                        </router-link>
                      </td>
                      <td class="product-price">
                        <span class="unit-amount">#001</span>
                      </td>
                      <td class="product-price">
                        <span class="unit-amount">01</span>
                      </td>
                      <td class="product-subtotal">
                        <span class="subtotal-amount">已付款</span>
                      </td>
                      <td class="product-subtotal">
                        <span class="subtotal-amount">$90.00</span>
                      </td>
                      <td class="trash">
                        <router-link to="/vertical/shopping-cart" class="remove">
                          <i class="ri-close-fill"></i>
                        </router-link>
                      </td>
                    </tr>
                    <tr>
                      <td class="product-thumbnail">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-2.jpg" alt="Image">
                        </router-link>
                      </td>
                      <td class="product-name">
                        <router-link to="/vertical/product-details">Power Tools Set Chinese Manufacturer <br> Production
                          50V Lithu Battery
                        </router-link>
                      </td>
                      <td class="product-price">
                        <span class="unit-amount">#005</span>
                      </td>
                      <td class="product-price">
                        <span class="unit-amount">02</span>
                      </td>
                      <td class="product-subtotal">
                        <span class="subtotal-amount">處理中</span>
                      </td>
                      <td class="product-subtotal">
                        <span class="subtotal-amount">$50.00</span>
                      </td>
                      <td class="trash">
                        <router-link to="/vertical/shopping-cart" class="remove">
                          <i class="ri-close-fill"></i>
                        </router-link>
                      </td>
                    </tr>
                    <tr>
                      <td class="product-thumbnail">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-3.jpg" alt="Image">
                        </router-link>
                      </td>
                      <td class="product-name">
                        <router-link to="/vertical/product-details">Electrical Magnetic Impact Power <br> Hammer Drills
                          Machine
                        </router-link>
                      </td>
                      <td class="product-price">
                        <span class="unit-amount">#009</span>
                      </td>
                      <td class="product-price">
                        <span class="unit-amount">02</span>
                      </td>
                      <td class="product-subtotal">
                        <span class="subtotal-amount">失敗</span>
                      </td>
                      <td class="product-subtotal">
                        <span class="subtotal-amount">$30.00</span>
                      </td>
                      <td class="trash">
                        <router-link to="/vertical/shopping-cart" class="remove">
                          <i class="ri-close-fill"></i>
                        </router-link>
                      </td>
                    </tr>
                    <tr>
                      <td class="product-thumbnail">
                        <router-link to="/vertical/product-details">
                          <img src="/test/static/picture/product-4.jpg" alt="Image">
                        </router-link>
                      </td>
                      <td class="product-name">
                        <router-link to="/vertical/product-details">Professional Cordless Drill Power Tools <br> Set
                          Competitive Price
                        </router-link>
                      </td>
                      <td class="product-price">
                        <span class="unit-amount">#0062</span>
                      </td>
                      <td class="product-price">
                        <span class="unit-amount">02</span>
                      </td>
                      <td class="product-subtotal">
                        <span class="subtotal-amount">Paid</span>
                      </td>
                      <td class="product-subtotal">
                        <span class="subtotal-amount">$45.00</span>
                      </td>
                      <td class="trash">
                        <router-link to="/vertical/shopping-cart" class="remove">
                          <i class="ri-close-fill"></i>
                        </router-link>
                      </td>
                    </tr>
                    </tbody>
                  </table>
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
  name: 'Dashboard',
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
