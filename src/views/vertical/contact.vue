<template>
  <div class="vertical-page">

    <VerticalHead />

    <div class="page-title-area">
      <div class="container">
        <div class="page-title-content">
          <ul>
            <li>
              <router-link to="/vertical/index">首頁</router-link>
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
                  <h4>客服中心 ‧ 全台免付費專線</h4>
                </li>
                <li>
                  <i class="ri-phone-line"></i>
                  <a href="tel:0800588168">0800-588-168（市話免付費）</a>
                </li>
                <li>
                  <i class="ri-customer-service-2-line"></i>
                  LINE 官方帳號：<a href="https://line.me/R/ti/p/@makura" target="_blank" rel="noopener">@makura</a>
                </li>
                <li>
                  <i class="ri-mail-send-line"></i>
                  <a href="mailto:service@makura.com.tw">service@makura.com.tw</a>
                </li>
                <li>
                  <i class="ri-time-line"></i>
                  週一至週日 09:00–22:00（全年無休）
                </li>
              </ul>

              <a class="line-cta" href="https://line.me/R/ti/p/@makura" target="_blank" rel="noopener">
                <i class="ri-line-fill"></i>加入 LINE 好友．享首購 95 折
              </a>

              <ul>
                <li class="p-0">
                  <h4>北部總部</h4>
                </li>
                <li>
                  <i class="ri-map-pin-line"></i>
                  新北市三重區重新路五段 168 號 8 樓
                </li>
                <li>
                  <i class="ri-phone-line"></i>
                  <a href="tel:0229998888">(02) 2999-8888</a>
                </li>
                <li>
                  <i class="ri-mail-send-line"></i>
                  <a href="mailto:sales@makura.com.tw">sales@makura.com.tw</a>
                </li>
                <li>
                  <i class="ri-time-line"></i>
                  週一至週五 09:00–18:00
                </li>
              </ul>

              <ul>
                <li class="p-0">
                  <h4>中部營運中心</h4>
                </li>
                <li>
                  <i class="ri-map-pin-line"></i>
                  台中市潭子區工業路 88 號
                </li>
                <li>
                  <i class="ri-phone-line"></i>
                  <a href="tel:0425998888">(04) 2599-8888</a>
                </li>
                <li>
                  <i class="ri-mail-send-line"></i>
                  <a href="mailto:taichung@makura.com.tw">taichung@makura.com.tw</a>
                </li>
                <li>
                  <i class="ri-time-line"></i>
                  週一至週五 09:00–18:00
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="map">
              <iframe
                src="https://www.google.com/maps?q=新北市三重區重新路五段&output=embed"
                width="100%"
                height="100%"
                style="border:0; min-height: 580px;"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Makura 北部總部地圖"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-area pb-54">
      <div class="container">
        <div class="contact-form">
          <h2>給我們留言</h2>
          <p class="form-desc">填寫以下表單，客服專員將於 1 個工作天內以 Email 或電話與您聯繫。</p>
          <form id="contactForm" @submit.prevent="onSubmit">
            <div class="row">
              <div class="col-lg-6 col-sm-6">
                <div class="form-group">
                  <label>姓名 <span class="required">*</span></label>
                  <input
                    v-model="form.name"
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="請輸入您的姓名"
                    required
                  >
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="form-group">
                  <label>電子郵件 <span class="required">*</span></label>
                  <input
                    v-model="form.email"
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="example@mail.com"
                    required
                  >
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="form-group">
                  <label>聯絡電話</label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    name="phone_number"
                    class="form-control"
                    placeholder="例：0912-345-678"
                  >
                </div>
              </div>
              <div class="col-lg-6 col-sm-6">
                <div class="form-group">
                  <label>諮詢類型 <span class="required">*</span></label>
                  <select v-model="form.type" class="form-control" required>
                    <option value="" disabled>請選擇諮詢類型</option>
                    <option value="product">商品諮詢</option>
                    <option value="quote">大量採購／報價</option>
                    <option value="after-sale">售後服務／維修</option>
                    <option value="dealer">經銷合作</option>
                    <option value="other">其他</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label>主旨 <span class="required">*</span></label>
                  <input
                    v-model="form.subject"
                    type="text"
                    name="msg_subject"
                    class="form-control"
                    placeholder="一句話描述您的需求"
                    required
                  >
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label>訊息內容 <span class="required">*</span></label>
                  <textarea
                    v-model="form.message"
                    name="message"
                    class="form-control"
                    cols="30"
                    rows="6"
                    placeholder="請詳述您的需求，例如商品型號、數量或問題描述，方便我們為您提供最合適的服務。"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                <div class="form-group checkboxs">
                  <input id="agreeTerms" v-model="form.agreed" type="checkbox" class="chb2">
                  <p>
                    我已閱讀並同意
                    <router-link to="/vertical/terms-conditions">服務條款</router-link>
                    及
                    <router-link to="/vertical/privacy-policy">隱私權政策</router-link>
                  </p>
                </div>
              </div>
              <div class="col-lg-12 col-md-12">
                <button type="submit" class="default-btn">
                  <span>送出訊息</span>
                </button>
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

const emptyForm = () => ({
  name: '',
  email: '',
  phone: '',
  type: '',
  subject: '',
  message: '',
  agreed: false
})

export default {
  name: 'Contact',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'Makura | 聯絡我們'
  },
  data() {
    return {
      form: emptyForm()
    }
  },
  methods: {
    onSubmit() {
      if (!this.form.agreed) {
        if (this.$message && this.$message.warning) {
          this.$message.warning('請先勾選同意服務條款與隱私權政策')
        }
        return
      }
      if (this.$message && this.$message.success) {
        this.$message.success('已收到您的訊息！客服將於 1 個工作天內回覆，感謝您聯繫 Makura。')
      }
      this.form = emptyForm()
    }
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

/* LINE 加好友按鈕 */
.vertical-page :deep(.line-cta) {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0 24px;
  padding: 10px 18px;
  background: #06c755;
  color: #fff !important;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  transition: opacity 0.2s;
}
.vertical-page :deep(.line-cta:hover) {
  opacity: 0.88;
}
.vertical-page :deep(.line-cta i) {
  font-size: 18px;
}

/* 表單描述文字 */
.vertical-page :deep(.contact-form .form-desc) {
  margin: -10px 0 24px;
  color: #777;
  font-size: 14px;
}

/* 必填星號 */
.vertical-page :deep(.contact-form .required) {
  color: #e23e3e;
  margin-left: 2px;
}

/* select 樣式對齊 form-control */
.vertical-page :deep(.contact-form select.form-control) {
  height: 48px;
  background: #fff;
  cursor: pointer;
}

/* 地圖嵌入容器 */
.vertical-page :deep(.map) {
  width: 100%;
  height: 100%;
  min-height: 580px;
  overflow: hidden;
  border-radius: 4px;
}
.vertical-page :deep(.map iframe) {
  display: block;
}
</style>
