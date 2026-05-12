<template>
  <section class="subscribe-area ptb-54">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-2">
          <div class="logo">
            <router-link to="/vertical/index">
              <img src="/test/static/picture/white-logo.png" alt="Makura">
            </router-link>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="subscribe-content">
            <span>新會員首購享 7 折優惠</span>
            <h3>訂閱 Makura 電子報</h3>
            <p>搶先收到新品上市與不定期專屬優惠</p>
          </div>
        </div>
        <div class="col-lg-5">
          <form class="newsletter-form" @submit.prevent="onSubscribe">
            <input
              v-model="email"
              type="email"
              class="form-control"
              placeholder="請輸入您的 Email"
              name="EMAIL"
              required
              autocomplete="off"
            >
            <button class="submit-btn" type="submit">
              立即訂閱
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VerticalSubscribe',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    onSubscribe() {
      const value = (this.email || '').trim()
      if (!value) return
      if (this.$message && this.$message.success) {
        this.$message.success('訂閱成功！首購 7 折優惠碼將寄送到您的信箱。')
      }
      this.email = ''
    }
  }
}
</script>
