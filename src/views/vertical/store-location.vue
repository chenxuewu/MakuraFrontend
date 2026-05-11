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
            <li class="active">門市據點</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="global-location-area pt-54 pb-30">
      <div class="container">
        <div class="section-title">
          <h2>歐洲國家</h2>
        </div>
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Austria</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Belgium</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Bulgaria</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Croatia</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Cyprus</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Czech Republic</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Denmark</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Estonia</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Finland</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>France</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Germany</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Greece</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Hungary</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Ireland</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Italy</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Latvia</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Luxembourg</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Lithuania</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Malta</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Netherlands</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Poland</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Portugal</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Romania</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Slovakia</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Slovenia</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Spain</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Sweden</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>United Kingdom</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="global-location-area pb-30">
      <div class="container">
        <div class="section-title">
          <h2>亞洲國家</h2>
        </div>
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Ahmedabad</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Kerteh</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Bangalore</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Bangalore</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Kolkata</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Bangkok</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Kuala Lumpur</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Baroda</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Beijing</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Kuantan</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Chennai</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Medan</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Port Klang</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Bangalore</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Qingdao</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Danang</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Semarang</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Ho Chi Minh</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Seoul</span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-location">
              <router-link to="/vertical/contact">
                <i class="ri-map-pin-line"></i>
                <span>Bangalore</span>
              </router-link>
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
  name: 'StoreLocation',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'Ehay - 門市據點'
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
