<template>
  <div class="vertical-page">


    <div class="preloader">
      <div class="content">
        <div class="box"></div>
      </div>
    </div>


    <div class="coming-soon-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="coming-soon-content">
            <h2>即將推出</h2>
            <div id="timer" class="flex-wrap d-flex justify-content-center">
              <div id="days" class="align-items-center flex-column d-flex justify-content-center"></div>
              <div id="hours" class="align-items-center flex-column d-flex justify-content-center"></div>
              <div id="minutes" class="align-items-center flex-column d-flex justify-content-center"></div>
              <div id="seconds" class="align-items-center flex-column d-flex justify-content-center"></div>
            </div>
            <form class="newsletter-form" data-toggle="validator">
              <div class="form-group">
                <input type="email" class="input-newsletter" placeholder="輸入你的電子郵件" name="EMAIL" required=""
                       autocomplete="off"
                >
              </div>
              <button type="submit" class="default-btn">
                立即訂閱
              </button>
              <div id="validator-newsletter" class="form-result"></div>
              <p>如果你想在網站上線時收到通知，請訂閱我們的電子報。</p>
            </form>
          </div>
        </div>
      </div>
    </div>

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
  name: 'ComingSoon',
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
