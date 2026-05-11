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
            <li class="active">願望清單</li>
          </ul>
        </div>
      </div>
    </div>


    <div class="cart-area ptb-54">
      <div class="container">
        <form class="cart-controller mb-0">
          <div class="cart-table table-responsive">
            <table class="table table-bordered">
              <thead>
              <tr>
                <th scope="col">商品</th>
                <th scope="col"></th>
                <th scope="col">價格</th>
                <th scope="col">總計</th>
                <th scope="col"></th>
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
                  <router-link to="/vertical/product-details">DFMALB 20V Max XX Oscillating Multi <br> Tool Variable
                    Speed Tool
                  </router-link>
                </td>
                <td class="product-price">
                  <span class="unit-amount">$90.00</span>
                </td>
                <td class="product-subtotal">
                  <span class="subtotal-amount">$90.00</span>
                </td>
                <td>
                  <router-link to="/vertical/products" class="default-btn">
                    馬上去買
                  </router-link>
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
                  <router-link to="/vertical/product-details">Power Tools Set Chinese Manufacturer <br> Production 50V
                    Lithu Battery
                  </router-link>
                </td>
                <td class="product-price">
                  <span class="unit-amount">$50.00</span>
                </td>
                <td class="product-subtotal">
                  <span class="subtotal-amount">$50.00</span>
                </td>
                <td>
                  <router-link to="/vertical/products" class="default-btn">
                    馬上去買
                  </router-link>
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
                  <span class="unit-amount">$30.00</span>
                </td>
                <td class="product-subtotal">
                  <span class="subtotal-amount">$30.00</span>
                </td>
                <td>
                  <router-link to="/vertical/products" class="default-btn">
                    馬上去買
                  </router-link>
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
                  <span class="unit-amount">$45.00</span>
                </td>
                <td class="product-subtotal">
                  <span class="subtotal-amount">$45.00</span>
                </td>
                <td>
                  <router-link to="/vertical/products" class="default-btn">
                    馬上去買
                  </router-link>
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
  name: 'Wishlist',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'Ehay - 願望清單'
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
