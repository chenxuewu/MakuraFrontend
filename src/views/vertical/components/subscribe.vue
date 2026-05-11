<template>
  <section class="subscribe-area ptb-54">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-2">
          <div class="logo">
            <a href="">
              <img src="/test/static/picture/white-logo.png" alt="Image">
            </a>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="subscribe-content">
            <span>首購享 30% 折扣</span>
            <h3>訂閱電子報</h3>
            <p>訂閱電子報，掌握最新消息</p>
          </div>
        </div>
        <div class="col-lg-5">
          <form class="newsletter-form" data-toggle="validator">
            <input
              type="email"
              class="form-control"
              placeholder="你的電子郵件"
              name="EMAIL"
              required
              autocomplete="off"
            >
            <button class="submit-btn" type="submit">
              立即訂閱
            </button>
            <div id="validator-newsletter" class="form-result"></div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VerticalSubscribe',
}
</script>
