<template>
  <div class="vertical-page">
    <section class="services-area ptb-30">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-6">
            <div class="single-services">
              <div class="icon"><img src="/test/static/picture/support.png" alt="Image"></div>
              <h3>客服支援</h3>
              <p>24 小時全年無休，客服隨時為你服務</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-services">
              <div class="icon"><img src="/test/static/picture/payment.png" alt="Image"></div>
              <h3>安全付款</h3>
              <p>支援多種主流付款方式，結帳更安心</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-services">
              <div class="icon"><img src="/test/static/picture/network.png" alt="Image"></div>
              <h3>全球配送</h3>
              <p>你想送到哪裡，我們就幫你送到哪裡</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="footer-area pt-54 pb-30">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>快速資訊</h3>
              <ul class="info-list">
                <li><i class="ri-map-pin-line"></i>2491 Reel Avenue Albuquerque, NM</li>
                <li><i class="ri-phone-line"></i><a href="tel:+1-(514)-321-4566">+1 (514) 321-4566</a></li>
                <li><i class="ri-mail-send-line"></i><a href="mailto:info@ehay.com">info@ehay.com</a></li>
                <li><i class="ri-time-line"></i>週一至週六 8:00 AM - 8:00 PM</li>
              </ul>
              <ul class="social-link">
                <li><span>保持聯繫：</span></li>
                <li><a href="javascript:;" target="_blank"><i class="ri-facebook-fill"></i></a></li>
                <li><a href="javascript:;" target="_blank"><i class="ri-twitter-fill"></i></a></li>
                <li><a href="javascript:;" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
                <li><a href="javascript:;" target="_blank"><i class="ri-instagram-fill"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>資訊</h3>
              <ul class="import-link">
                <li>
                  <router-link to="/vertical/about">關於我們</router-link>
                </li>
                <li>
                  <router-link to="/vertical/order-tracking">訂單追蹤</router-link>
                </li>
                <li>
                  <router-link to="/vertical/terms-conditions">服務條款</router-link>
                </li>
                <li>
                  <router-link to="/vertical/store-location">門市據點</router-link>
                </li>
                <li>
                  <router-link to="/vertical/privacy-policy">隱私權政策</router-link>
                </li>
                <li>
                  <router-link to="/vertical/faq">配送資訊</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>客戶服務</h3>
              <ul class="import-link">
                <li>
                  <router-link to="/vertical/faq">幫助中心</router-link>
                </li>
                <li>
                  <router-link to="/vertical/products">商品列表</router-link>
                </li>
                <li>
                  <router-link to="/vertical/terms-conditions">退款保證</router-link>
                </li>
                <li>
                  <router-link to="/vertical/blog">部落格</router-link>
                </li>
                <li>
                  <router-link to="/vertical/privacy-policy">無障礙設計</router-link>
                </li>
                <li>
                  <router-link to="/vertical/contact">聯絡我們</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>在手機上下載應用程式</h3>
              <p>首次訂購享 7 折優惠</p>
              <ul class="app-btn">
                <li><a href="javascript:;" target="_blank"><img src="/test/static/picture/app-store.png" alt="Image"
                ></a></li>
                <li><a href="javascript:;" target="_blank"><img src="/test/static/picture/google-play.png" alt="Image"></a>
                </li>
              </ul>
              <span class="payment">我們接受以下付款方式</span>
              <ul class="payment-option">
                <li><img src="/test/static/picture/payment-1.png" alt="Image"></li>
                <li><img src="/test/static/picture/payment-2.png" alt="Image"></li>
                <li><img src="/test/static/picture/payment-3.png" alt="Image"></li>
                <li><img src="/test/static/picture/payment-4.png" alt="Image"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copy-right-area">
      <div class="container">
        <p>版權所有 &copy; 2021.公司名稱 保留所有權利。<a target="_blank" href="https://sc.chinaz.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a>
        </p>
      </div>
    </div>

    <div class="go-top">
      <i class="ri-arrow-up-s-fill"></i>
      <i class="ri-arrow-up-s-fill"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerticalFoot'
}
</script>

<style scoped>
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
