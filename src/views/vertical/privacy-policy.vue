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
            <li class="active">隱私政策</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="ptb-54">
      <div class="container">
        <div class="main-content-text">
          <h3>1. 個人資訊：</h3>
          <p>
            我們重視您的個人隱私。在使用我們的服務時，我們會收集必要的個人資訊以提供更好的購物體驗。這些資訊包括但不限於您的姓名、聯絡方式、送貨地址等。我們承諾妥善保管您的個人資料，並僅用於訂單處理、客戶服務及改善我們的服務品質。</p>
          <div class="gap-20"></div>
          <h3>2. 收集個人資訊：</h3>
          <p>
            當您註冊帳戶、下訂單或聯絡我們時，我們會收集您提供的個人資訊。這些資訊有助於我們確認您的身份、處理您的訂單、提供客戶支援服務，以及向您發送相關的促銷資訊（需經您同意）。我們使用安全的技術來保護您的資料傳輸過程。</p>
          <p>我們也可能透過 cookies 和類似技術收集您的瀏覽資訊，以改善網站功能和使用體驗。您可以隨時調整瀏覽器設定來管理
            cookies。</p>
          <div class="gap-20"></div>
          <h3>3. 使用和披露您的個人資訊：</h3>
          <p>
            我們僅在必要時使用您的個人資訊，包括處理訂單、提供客戶服務、發送訂單狀態更新、以及經您同意後發送行銷資訊。我們不會將您的個人資訊出售給第三方。</p>
          <p>
            在某些情況下，我們可能需要與合作夥伴（如物流業者）分享您的資訊以完成訂單配送。這些合作夥伴僅能存取履行其職責所需的資訊，並且必須遵守嚴格的保密義務。</p>
          <div class="gap-20"></div>
          <h3>4. 公司聯繫：</h3>
          <p>我們可能會透過電子郵件、電話或簡訊與您聯繫，以提供訂單相關資訊、回覆您的詢問，或發送您可能感興趣的促銷活動通知。如果您不希望收到行銷資訊，可以隨時取消訂閱或
            <router-link to="/vertical/contact">聯絡我們</router-link>
            。
          </p>
          <ul>
            <li>
              <i class="ri-check-line"></i>
              我們僅在必要時與您聯繫，確保良好的客戶服務體驗。
            </li>
            <li>
              <i class="ri-check-line"></i>
              您可以隨時選擇停止接收我們的行銷通訊。
            </li>
            <li>
              <i class="ri-check-line"></i>
              我們尊重您的通訊偏好設定。
            </li>
          </ul>
          <div class="gap-20"></div>
          <h3>5. 個人存取權：</h3>
          <p>您有權存取、修改或刪除您的個人資訊。如果您希望查看我們持有的您的個人資料，或需要更新您的資訊，請登入您的帳戶或
            <router-link to="/vertical/contact">聯絡我們</router-link>
            。我們將在合理的時間內回應您的請求。
          </p>
          <p>
            您也有權要求我們限制對您個人資訊的處理，或反對某些處理方式。我們尊重您的隱私權利，並將盡力協助您行使這些權利。</p>
          <div class="gap-20"></div>
          <h3>6. 公司與其他網站連結：</h3>
          <p>
            我們的網站可能包含指向第三方網站的連結。這些網站有其獨立的隱私政策，我們對這些網站的內容和隱私實踐不承擔責任。我們建議您在提供任何個人資訊之前，先閱讀這些網站的隱私政策。</p>
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
  name: 'PrivacyPolicy',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'Ehay - 隱私政策'
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
