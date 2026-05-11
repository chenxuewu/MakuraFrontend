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
            <li class="active">聯絡我們</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="contact-area ptb-54">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="contact-info-europe">
              <h3>聯絡資訊</h3>
              <ul>
                <li class="p-0">
                  <h4>歐洲辦公室</h4>
                </li>
                <li>
                  <i class="ri-map-pin-line"></i>
                  2491 Reel Avenue Albuquerque, NM
                </li>
                <li>
                  <i class="ri-phone-line"></i>
                  <a href="tel:+1-(514)-321-4566">+1 (514) 321-4566</a>
                  <a href="tel:+1-(514)-321-4567">+1 (514) 321-4567</a>
                </li>
                <li>
                  <i class="ri-mail-send-line"></i>
                  <a href="javascript:;"><span class="__cf_email__" data-cfemail="bdd8d5dcc4fdd8c5dcd0cdd1d893ded2d0">[email&#160;protected]</span></a>
                </li>
                <li>
                  <i class="ri-time-line"></i>
                  週一至週六 8:00 AM - 8:00 PM
                </li>
              </ul>
              <ul>
                <li class="p-0">
                  <h4>亞洲辦公室</h4>
                </li>
                <li>
                  <i class="ri-map-pin-line"></i>
                  2491 Reel Avenue Albuquerque, NM
                </li>
                <li>
                  <i class="ri-phone-line"></i>
                  <a href="tel:+1-(514)-321-4566">+1 (514) 321-4566</a>
                  <a href="tel:+1-(514)-321-4567">+1 (514) 321-4567</a>
                </li>
                <li>
                  <i class="ri-mail-send-line"></i>
                  <a href="javascript:;"><span class="__cf_email__" data-cfemail="690c010810290c11080419050c470a0604">[email&#160;protected]</span></a>
                </li>
                <li>
                  <i class="ri-time-line"></i>
                  週一至週六 8:00 AM - 8:00 PM
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="map">

            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="contact-area pb-54">
      <div class="container">
        <div class="contact-form">
          <h2>留下訊息</h2>
          <form id="contactForm">
            <div class="row">
              <div class="col-lg-6 col-sm-6">
                <div class="form-group">
                  <label>姓名</label>
                  <input type="text" name="name" id="name" class="form-control" required="" data-error="請輸入您的姓名">
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="form-group">
                  <label>電子郵件</label>
                  <input type="email" name="email" id="email" class="form-control" required=""
                         data-error="請輸入您的電子郵件"
                  >
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="form-group">
                  <label>電話</label>
                  <input type="text" name="phone_number" id="phone_number" required="" data-error="請輸入您的電話號碼"
                         class="form-control"
                  >
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="form-group">
                  <label>主旨</label>
                  <input type="text" name="msg_subject" id="msg_subject" class="form-control" required=""
                         data-error="請輸入主旨"
                  >
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label>訊息內容</label>
                  <textarea name="message" class="form-control" id="message" cols="30" rows="6" required=""
                            data-error="請輸入訊息內容"
                  ></textarea>
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                <div class="form-group checkboxs">
                  <input type="checkbox" class="chb2">
                  <p>
                    接受
                    <router-link to="/vertical/terms-conditions">服務條款</router-link>
                    及
                    <router-link to="/vertical/privacy-policy">隱私權政策</router-link>
                  </p>
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                <button type="submit" class="default-btn">
                  <span>發送訊息</span>
                </button>
                <div id="msgSubmit" class="h3 text-center hidden"></div>
                <div class="clearfix"></div>
              </div>
            </div>
          </form>
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
  name: 'Contact',
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
