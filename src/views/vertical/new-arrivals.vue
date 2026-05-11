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
            <li class="active">最新上架</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="new-arrivals-area ptb-54">
      <div class="container">
        <div class="section-title text-center">
          <h2>最新上架</h2>
        </div>
        <div class="row">
          <div class="col-xl-3 col-sm-6">
            <div class="single-products new-arrivals">
              <div class="product-img">
                <router-link to="/vertical/product-details">
                  <img src="/test/static/picture/product-17.jpg" alt="Image">
                </router-link>
                <span class="hot new">New</span>
              </div>
              <div class="product-content">
                <router-link to="/vertical/product-details" class="title">
                  Electrical Magnetic Impact Power Hammer Drills
                </router-link>
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
                  <li>
                    <router-link to="/vertical/product-details">
                      (10 則評價)
                    </router-link>
                  </li>
                </ul>
                <ul class="products-price">
                  <li>
                    $170.00
                    <del>$220.00</del>
                  </li>
                </ul>
                <ul class="products-cart-wish-view">
                  <li>
                    <router-link to="/vertical/shopping-cart" class="default-btn">
                      <i class="ri-shopping-cart-line"></i>
                      加入購物車
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/wishlist" class="wish-btn">
                      <i class="ri-heart-line"></i>
                    </router-link>
                  </li>
                  <li>
                    <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6">
            <div class="single-products new-arrivals">
              <div class="product-img">
                <router-link to="/vertical/product-details">
                  <img src="/test/static/picture/product-18.jpg" alt="Image">
                </router-link>
              </div>
              <div class="product-content">
                <router-link to="/vertical/product-details" class="title">
                  High Quality Electric Hand Planer, 4-3/8-Inch
                </router-link>
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
                  <li>
                    <router-link to="/vertical/product-details">
                      (05 則評價)
                    </router-link>
                  </li>
                </ul>
                <ul class="products-price">
                  <li>
                    $69.00
                    <del>$90.00</del>
                  </li>
                  <li>
                    <span>現貨供應</span>
                  </li>
                </ul>
                <ul class="products-cart-wish-view">
                  <li>
                    <router-link to="/vertical/shopping-cart" class="default-btn">
                      <i class="ri-shopping-cart-line"></i>
                      加入購物車
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/wishlist" class="wish-btn">
                      <i class="ri-heart-line"></i>
                    </router-link>
                  </li>
                  <li>
                    <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6">
            <div class="single-products new-arrivals">
              <div class="product-img">
                <router-link to="/vertical/product-details">
                  <img src="/test/static/picture/product-19.jpg" alt="Image">
                </router-link>
                <span class="hot new">New</span>
              </div>
              <div class="product-content">
                <router-link to="/vertical/product-details" class="title">
                  White Whale Vacuum Cleaner High Quality
                </router-link>
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
                  <li>
                    <router-link to="/vertical/product-details">
                      (10 則評價)
                    </router-link>
                  </li>
                </ul>
                <ul class="products-price">
                  <li>
                    $129.00
                    <del>$150.00</del>
                  </li>
                </ul>
                <ul class="products-cart-wish-view">
                  <li>
                    <router-link to="/vertical/shopping-cart" class="default-btn">
                      <i class="ri-shopping-cart-line"></i>
                      加入購物車
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/wishlist" class="wish-btn">
                      <i class="ri-heart-line"></i>
                    </router-link>
                  </li>
                  <li>
                    <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6">
            <div class="single-products new-arrivals">
              <div class="product-img">
                <router-link to="/vertical/product-details">
                  <img src="/test/static/picture/product-20.jpg" alt="Image">
                </router-link>
              </div>
              <div class="product-content">
                <router-link to="/vertical/product-details" class="title">
                  High Quality Carbon Steel Mini Drilling Machines
                </router-link>
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
                  <li>
                    <router-link to="/vertical/product-details">
                      (11 則評價)
                    </router-link>
                  </li>
                </ul>
                <ul class="products-price">
                  <li>
                    $99.00
                    <del>$150.00</del>
                  </li>
                  <li>
                    <span>In Stock</span>
                  </li>
                </ul>
                <ul class="products-cart-wish-view">
                  <li>
                    <router-link to="/vertical/shopping-cart" class="default-btn">
                      <i class="ri-shopping-cart-line"></i>
                      加入購物車
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/wishlist" class="wish-btn">
                      <i class="ri-heart-line"></i>
                    </router-link>
                  </li>
                  <li>
                    <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6">
            <div class="single-products new-arrivals">
              <div class="product-img">
                <router-link to="/vertical/product-details">
                  <img src="/test/static/picture/product-21.jpg" alt="Image">
                </router-link>
              </div>
              <div class="product-content">
                <router-link to="/vertical/product-details" class="title">
                  Power Hammer Drills 200V Machine Screwdriver
                </router-link>
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
                  <li>
                    <router-link to="/vertical/product-details">
                      (05 則評價)
                    </router-link>
                  </li>
                </ul>
                <ul class="products-price">
                  <li>
                    $159.00
                    <del>$200.00</del>
                  </li>
                  <li>
                    <span>In Stock</span>
                  </li>
                </ul>
                <ul class="products-cart-wish-view">
                  <li>
                    <router-link to="/vertical/shopping-cart" class="default-btn">
                      <i class="ri-shopping-cart-line"></i>
                      加入購物車
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/wishlist" class="wish-btn">
                      <i class="ri-heart-line"></i>
                    </router-link>
                  </li>
                  <li>
                    <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6">
            <div class="single-products new-arrivals">
              <div class="product-img">
                <router-link to="/vertical/product-details">
                  <img src="/test/static/picture/product-22.jpg" alt="Image">
                </router-link>
                <span class="hot new">New</span>
              </div>
              <div class="product-content">
                <router-link to="/vertical/product-details" class="title">
                  Multi-function Screw Driver Set For Home Use
                </router-link>
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
                  <li>
                    <router-link to="/vertical/product-details">
                      (07 則評價)
                    </router-link>
                  </li>
                </ul>
                <ul class="products-price">
                  <li>
                    $29.00
                    <del>$50.00</del>
                  </li>
                </ul>
                <ul class="products-cart-wish-view">
                  <li>
                    <router-link to="/vertical/shopping-cart" class="default-btn">
                      <i class="ri-shopping-cart-line"></i>
                      加入購物車
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/wishlist" class="wish-btn">
                      <i class="ri-heart-line"></i>
                    </router-link>
                  </li>
                  <li>
                    <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6">
            <div class="single-products new-arrivals">
              <div class="product-img">
                <router-link to="/vertical/product-details">
                  <img src="/test/static/picture/product-9.jpg" alt="Image">
                </router-link>
              </div>
              <div class="product-content">
                <router-link to="/vertical/product-details" class="title">
                  Wall Polishing Square Sander Electric Machine
                </router-link>
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
                  <li>
                    <router-link to="/vertical/product-details">
                      (10 則評價)
                    </router-link>
                  </li>
                </ul>
                <ul class="products-price">
                  <li>
                    $89.00
                    <del>$120.00</del>
                  </li>
                </ul>
                <ul class="products-cart-wish-view">
                  <li>
                    <router-link to="/vertical/shopping-cart" class="default-btn">
                      <i class="ri-shopping-cart-line"></i>
                      加入購物車
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/wishlist" class="wish-btn">
                      <i class="ri-heart-line"></i>
                    </router-link>
                  </li>
                  <li>
                    <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6">
            <div class="single-products new-arrivals">
              <div class="product-img">
                <router-link to="/vertical/product-details">
                  <img src="/test/static/picture/product-6.jpg" alt="Image">
                </router-link>
                <span class="hot new">New</span>
              </div>
              <div class="product-content">
                <router-link to="/vertical/product-details" class="title">
                  High Quality Carbon Steel Professional Power Tools
                </router-link>
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
                  <li>
                    <router-link to="/vertical/product-details">
                      (10 則評價)
                    </router-link>
                  </li>
                </ul>
                <ul class="products-price">
                  <li>
                    $99.00
                    <del>$130.00</del>
                  </li>
                  <li>
                    <span>In Stock</span>
                  </li>
                </ul>
                <ul class="products-cart-wish-view">
                  <li>
                    <router-link to="/vertical/shopping-cart" class="default-btn">
                      <i class="ri-shopping-cart-line"></i>
                      加入購物車
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/wishlist" class="wish-btn">
                      <i class="ri-heart-line"></i>
                    </router-link>
                  </li>
                  <li>
                    <button class="eye-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <i class="ri-eye-line"></i>
                    </button>
                  </li>
                </ul>
              </div>
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
  name: 'NewArrivals',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'Ehay - 最新上架'
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
