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
            <li class="active">客戶評論</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="testimonials-area ptb-54">
      <div class="container">
        <div class="section-title">
          <h2>客戶評論</h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-6">
            <div class="single-customer single-card">
              <div class="avatar">
                <img src="/test/static/picture/customer-1.png" class="customer" alt="Image">
                <img src="/test/static/picture/quote.png" class="quote" alt="Image">
                <div class="avatar-name">
                  <h3>Georgia Cargill</h3>
                  <span>財務主管</span>
                </div>
              </div>
              <p>"Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Lorem ipsum
                dolor sit amet, consectetur elit. Donec sollicitudin molestie eget malesuada accumsan sit amet."</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-customer single-card">
              <div class="avatar">
                <img src="/test/static/picture/customer-2.png" class="customer" alt="Image">
                <img src="/test/static/picture/quote.png" class="quote" alt="Image">
                <div class="avatar-name">
                  <h3>Alex Dew</h3>
                  <span>財務行銷專員</span>
                </div>
              </div>
              <p>"Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Lorem ipsum
                dolor sit amet, consectetur elit. Donec sollicitudin molestie eget malesuada accumsan sit amet."</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-customer single-card">
              <div class="avatar">
                <img src="/test/static/picture/customer-3.png" class="customer" alt="Image">
                <img src="/test/static/picture/quote.png" class="quote" alt="Image">
                <div class="avatar-name">
                  <h3>Kilva Dew</h3>
                  <span>BK 公司執行長</span>
                </div>
              </div>
              <p>"Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Lorem ipsum
                dolor sit amet, consectetur elit. Donec sollicitudin molestie eget malesuada accumsan sit amet."</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-customer single-card">
              <div class="avatar">
                <img src="/test/static/picture/customer-4.png" class="customer" alt="Image">
                <img src="/test/static/picture/quote.png" class="quote" alt="Image">
                <div class="avatar-name">
                  <h3>Pikle Smith</h3>
                  <span>TT 公司執行長</span>
                </div>
              </div>
              <p>"Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Lorem ipsum
                dolor sit amet, consectetur elit. Donec sollicitudin molestie eget malesuada accumsan sit amet."</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-customer single-card">
              <div class="avatar">
                <img src="/test/static/picture/customer-5.png" class="customer" alt="Image">
                <img src="/test/static/picture/quote.png" class="quote" alt="Image">
                <div class="avatar-name">
                  <h3>Juhon Dew</h3>
                  <span>行銷專員</span>
                </div>
              </div>
              <p>"Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Lorem ipsum
                dolor sit amet, consectetur elit. Donec sollicitudin molestie eget malesuada accumsan sit amet."</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-customer single-card">
              <div class="avatar">
                <img src="/test/static/picture/customer-6.png" class="customer" alt="Image">
                <img src="/test/static/picture/quote.png" class="quote" alt="Image">
                <div class="avatar-name">
                  <h3>Randemari</h3>
                  <span>財務行銷專員</span>
                </div>
              </div>
              <p>"Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Lorem ipsum
                dolor sit amet, consectetur elit. Donec sollicitudin molestie eget malesuada accumsan sit amet."</p>
            </div>
          </div>
          <div class="col-12">
            <div class="pagination-area text-center">
              <span class="page-numbers current" aria-current="page">1</span>
              <a href="" class="page-numbers">2</a>
              <a href="" class="page-numbers">3</a>
              <a href="" class="next page-numbers">
                <i class="ri-arrow-right-line"></i>
              </a>
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
  name: 'CustomerComments',
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
