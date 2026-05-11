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
            <li class="active">優惠商品</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="special-area rs-pb-54 ptb-54">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="section-title">
              <h2>特別優惠</h2>
            </div>
            <ul class="trending-product-list special-product-list">
              <li class="single-list">
                <img src="/test/static/picture/product-19.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    White Whale Vacuum Cleaner High Quality Product
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $129.00
                      <del>$150.00</del>
                    </li>
                  </ul>
                  <ul class="products-rating">
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="single-list">
                <img src="/test/static/picture/product-2.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    Professional Cordless Drill Power Tools Set Competitive Price
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $90.00
                      <del>$150.00</del>
                    </li>
                  </ul>
                  <ul class="products-rating">
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="single-list">
                <img src="/test/static/picture/product-4.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    Power Tools Set Chinese Manufacturer Production 50V Lithu Battery
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $29.00
                      <del>$50.00</del>
                    </li>
                  </ul>
                  <ul class="products-rating">
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="section-title">
              <h2>熱門商品</h2>
            </div>
            <ul class="trending-product-list special-product-list">
              <li class="single-list">
                <img src="/test/static/picture/product-34.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    Grinding Machine Polisher Household 5 Inch Mini Portable Power Tools
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $119.00
                      <del>$150.00</del>
                    </li>
                  </ul>
                  <ul class="products-rating">
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="single-list">
                <img src="/test/static/picture/product-35.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    Professional 2000W 25mm Electric Jack Hammer Drill
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $200.00
                      <del>$250.00</del>
                    </li>
                  </ul>
                  <ul class="products-rating">
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="single-list">
                <img src="/test/static/picture/product-5.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    Electrical Magnetic Impact Power Hammer Drills Machine
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $170.00
                      <del>$220.00</del>
                    </li>
                  </ul>
                  <ul class="products-rating">
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="section-title">
              <h2>評分最高商品</h2>
            </div>
            <ul class="trending-product-list special-product-list pb-0">
              <li class="single-list">
                <img src="/test/static/picture/product-7.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    High Quality Industrial Stapler Powerful Heavy Duty Metal
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $59.00
                      <del>$120.00</del>
                    </li>
                  </ul>
                  <ul class="products-rating">
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="single-list">
                <img src="/test/static/picture/product-9.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    High Quality Carbon Steel Professional Power Tools
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $99.00
                      <del>$130.00</del>
                    </li>
                  </ul>
                  <ul class="products-rating">
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="single-list">
                <img src="/test/static/picture/product-3.jpg" alt="Image">
                <div class="product-content">
                  <router-link to="/vertical/product-details" class="title">
                    DFMALB 20V Max XX Oscillating Multi Variable Speed Tool
                  </router-link>
                  <ul class="products-price">
                    <li>
                      $125.00
                      <del>$200.00</del>
                    </li>
                  </ul>
                  <ul class="products-rating">
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                    <li>
                      <i class="ri-star-fill"></i>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
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
  name: 'OfferProducts',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'Ehay - 優惠商品'
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
