<template>
  <div class="vertical-page">
    <section class="services-area ptb-30">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-6">
            <div class="single-services">
              <div class="icon"><img src="/test/static/picture/support.png" alt="客服服務"></div>
              <h3>專人客服</h3>
              <p>週一至週日 09:00–22:00，LINE、電話即時為你服務</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-services">
              <div class="icon"><img src="/test/static/picture/payment.png" alt="多元付款"></div>
              <h3>多元付款</h3>
              <p>信用卡 ‧ LINE Pay ‧ 街口支付 ‧ 超商代碼，刷卡可分期</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-services">
              <div class="icon"><img src="/test/static/picture/network.png" alt="全台配送"></div>
              <h3>全台配送</h3>
              <p>24 小時快速出貨，本島滿千免運，離島另計</p>
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
              <h3>聯絡 Makura</h3>
              <ul class="info-list">
                <li><i class="ri-map-pin-line"></i>新北市三重區重新路五段 168 號</li>
                <li><i class="ri-phone-line"></i><a href="tel:0800588168">0800-588-168（免付費）</a></li>
                <li><i class="ri-mail-send-line"></i><a href="mailto:service@makura.com.tw">service@makura.com.tw</a></li>
                <li><i class="ri-time-line"></i>週一至週日 09:00–22:00</li>
              </ul>
              <ul class="social-link">
                <li><span>追蹤我們：</span></li>
                <li><a href="javascript:;" target="_blank" aria-label="Facebook"><i class="ri-facebook-fill"></i></a></li>
                <li><a href="javascript:;" target="_blank" aria-label="LINE"><i class="ri-line-fill"></i></a></li>
                <li><a href="javascript:;" target="_blank" aria-label="Instagram"><i class="ri-instagram-fill"></i></a></li>
                <li><a href="javascript:;" target="_blank" aria-label="YouTube"><i class="ri-youtube-fill"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>關於 Makura</h3>
              <ul class="import-link">
                <li>
                  <router-link to="/vertical/about">品牌故事</router-link>
                </li>
                <li>
                  <router-link to="/vertical/store-location">門市據點</router-link>
                </li>
                <li>
                  <router-link to="/vertical/order-tracking">訂單追蹤</router-link>
                </li>
                <li>
                  <router-link to="/vertical/terms-conditions">服務條款</router-link>
                </li>
                <li>
                  <router-link to="/vertical/privacy-policy">隱私權政策</router-link>
                </li>
                <li>
                  <router-link to="/vertical/blog">部落格‧職人專欄</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>客戶服務</h3>
              <ul class="import-link">
                <li>
                  <router-link to="/vertical/faq">常見問題</router-link>
                </li>
                <li>
                  <router-link to="/vertical/faq">配送與運費</router-link>
                </li>
                <li>
                  <router-link to="/vertical/terms-conditions">退換貨政策</router-link>
                </li>
                <li>
                  <router-link to="/vertical/terms-conditions">商品保固</router-link>
                </li>
                <li>
                  <router-link to="/vertical/products">全部商品</router-link>
                </li>
                <li>
                  <router-link to="/vertical/contact">聯絡我們</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="single-footer-widget">
              <h3>訂閱電子報</h3>
              <p>留下 Email，新會員首購享 95 折，搶先掌握優惠活動與新品上市資訊。</p>
              <form class="newsletter-form" @submit.prevent="onSubscribe">
                <input
                  v-model="subscribeEmail"
                  type="email"
                  placeholder="請輸入您的 Email"
                  required
                >
                <button type="submit">訂閱</button>
              </form>
              <span class="payment">我們接受以下付款方式</span>
              <ul class="payment-option">
                <li><img src="/test/static/picture/payment-1.png" alt="Visa"></li>
                <li><img src="/test/static/picture/payment-2.png" alt="MasterCard"></li>
                <li><img src="/test/static/picture/payment-3.png" alt="JCB"></li>
                <li><img src="/test/static/picture/payment-4.png" alt="LINE Pay"></li>
              </ul>
              <p class="pay-text">信用卡 ‧ LINE Pay ‧ 街口支付 ‧ 超商代碼 ‧ 貨到付款</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copy-right-area">
      <div class="container">
        <p>版權所有 © 2026 Makura 工具事業股份有限公司．保留所有權利</p>
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
  name: 'VerticalFoot',
  data() {
    return {
      subscribeEmail: ''
    }
  },
  methods: {
    onSubscribe() {
      const email = (this.subscribeEmail || '').trim()
      if (!email) return
      if (this.$message && this.$message.success) {
        this.$message.success('訂閱成功！感謝您加入 Makura，最新優惠將寄送到您的信箱。')
      }
      this.subscribeEmail = ''
    }
  }
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

.newsletter-form {
  display: flex;
  gap: 8px;
  margin: 14px 0 18px;
}

.newsletter-form input {
  flex: 1 1 auto;
  min-width: 0;
  padding: 10px 14px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
  background: #fff;
  color: #333;
  transition: border-color 0.2s;
}

.newsletter-form input:focus {
  outline: none;
  border-color: #1a1a1a;
}

.newsletter-form button {
  padding: 10px 22px;
  background: #1a1a1a;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: opacity 0.2s;
}

.newsletter-form button:hover {
  opacity: 0.85;
}

.pay-text {
  margin-top: 10px;
  font-size: 12px;
  color: #888;
  letter-spacing: 0.5px;
}
</style>
