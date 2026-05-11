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
            <li class="active">條款與條件</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="ptb-54">
      <div class="container">
        <div class="main-content-text">
          <h3>1. 資訊的準確性和有效性</h3>
          <p>
            我們致力於確保網站上所有資訊的準確性和有效性。然而，我們不保證所有資訊完全無誤。商品描述、價格和供貨狀態可能會隨時變更，恕不另行通知。我們保留更正任何錯誤或遺漏的權利，並有權隨時修改網站內容，包括商品價格和描述，而無需事先通知。</p>
          <div class="gap-20"></div>
          <h3>2. 服務可用性</h3>
          <p>
            我們努力確保網站全天候可用，但不保證網站不會中斷或出現故障。我們可能會因系統維護、更新或其他技術原因而暫時關閉網站。我們不對因網站不可用而造成的任何損失承擔責任。</p>
          <p>
            我們保留隨時修改、暫停或終止網站任何部分或功能的權利，恕不另行通知。我們建議您定期備份重要資訊，並了解網站服務可能會因各種因素而受限。</p>
          <div class="gap-20"></div>
          <h3>3. 第三方網站</h3>
          <p>
            我們的網站可能包含指向第三方網站的連結。這些連結僅為方便您使用而提供，並不表示我們對這些第三方網站的認可。我們對第三方網站的內容、隱私政策或實踐不承擔任何責任。</p>
          <p>
            當您點擊第三方連結時，您將離開我們的網站。我們建議您在提供任何個人資訊之前，先閱讀這些第三方網站的條款和條件以及隱私政策。您使用第三方網站的風險由您自行承擔。</p>
          <div class="gap-20"></div>
          <h3>4. 版權和知識產權</h3>
          <p>
            網站上的所有內容，包括但不限於文字、圖片、標誌、按鈕圖示、圖像、音頻片段和軟體，均屬於我們或我們的內容供應商的財產，受國際版權法保護。未經我們事先書面許可，不得以任何形式複製、修改、分發或使用這些內容。</p>
          <ul>
            <li>
              <i class="ri-check-line"></i>
              所有商標、服務標誌和商業外觀均為我們的專有財產。
            </li>
            <li>
              <i class="ri-check-line"></i>
              未經授權使用任何內容可能違反版權、商標和其他法律。
            </li>
            <li>
              <i class="ri-check-line"></i>
              我們保留對侵權行為採取法律行動的權利。
            </li>
          </ul>
          <div class="gap-20"></div>
          <h3>6. 合約終止</h3>
          <p>
            我們保留因任何原因（包括但不限於違反本條款）而終止或暫停您訪問我們網站的權利，且無需事先通知。合約終止後，您使用網站的權利將立即停止。</p>
          <p>
            即使合約終止，本條款中關於版權、責任限制和爭議解決的規定仍然有效。我們不對因終止您的訪問權而造成的任何損失承擔責任。</p>
          <div class="gap-20"></div>
          <h3>7. 責任限制</h3>
          <p>
            在法律允許的最大範圍內，我們不對因使用或無法使用我們的網站或服務而造成的任何直接、間接、附帶、特殊或後果性損害承擔責任。這包括但不限於利潤損失、數據丟失或業務中斷。</p>
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
  name: 'TermsConditions',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'Ehay - 條款與條件'
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
