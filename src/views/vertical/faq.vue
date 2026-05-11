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
            <li class="active">常見問題</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="faq-area ptb-54">
      <div class="container">
        <div class="section-title text-center">
          <h2>常見問題</h2>
        </div>
        <div class="tab faq-tab">
          <ul class="tabs">
            <li>
              購物須知
            </li>
            <li>
              付款方式
            </li>
            <li>
              運送與退貨
            </li>
          </ul>
          <div class="tab_content">
            <div class="tabs_item">
              <div class="faq-accordion">
                <ul class="accordion">
                  <li class="accordion-item">
                    <a class="accordion-title active" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>問：</span>有哪些配送方式？
                    </a>
                    <div class="accordion-content show">
                      <span>答：</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>問：</span>你們有提供國際配送嗎？
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>問：</span>購買後可以退貨嗎？
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>問：</span>接受哪些付款方式？
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>問：</span>如何啟用我的禮品卡？
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>問：</span>可以使用 Visa 和 Mastercard 信用卡付款嗎？
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>問：</span>多久可以收到商品？
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="contact-us-for-faq text-center">
                <router-link to="/vertical/contact" class="default-btn">
                  聯絡我們
                </router-link>
              </div>
            </div>
            <div class="tabs_item">
              <div class="faq-accordion">
                <ul class="accordion">
                  <li class="accordion-item">
                    <a class="accordion-title active" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>Que:</span> What Shipping Methods Are Available?
                    </a>
                    <div class="accordion-content show">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>Que:</span> Do You Ship Internationally?
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>Que:</span> Can I Return The Product After Purchase?
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>Que:</span> What Payment Methods Are Accepted?
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>Que:</span> How Do I Activate My Gift Card?
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>Que:</span> Is It Possible To Pay For An Order With Visa And Mastercard Payment Cards?
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>Que:</span> How Long Will It Take To Get My Package?
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="contact-us-for-faq text-center">
                <router-link to="/vertical/contact" class="default-btn">
                  Contact
                </router-link>
              </div>
            </div>
            <div class="tabs_item">
              <div class="faq-accordion">
                <ul class="accordion">
                  <li class="accordion-item">
                    <a class="accordion-title active" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>Que:</span> What Shipping Methods Are Available?
                    </a>
                    <div class="accordion-content show">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>Que:</span> Do You Ship Internationally?
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>Que:</span> Can I Return The Product After Purchase?
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>Que:</span> What Payment Methods Are Accepted?
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>Que:</span> How Do I Activate My Gift Card?
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>Que:</span> Is It Possible To Pay For An Order With Visa And Mastercard Payment Cards?
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                  <li class="accordion-item">
                    <a class="accordion-title" href="javascript:void(0)">
                      <i class="ri-add-line"></i>
                      <span>Que:</span> How Long Will It Take To Get My Package?
                    </a>
                    <div class="accordion-content">
                      <span>Ans:</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                        maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Veniam optio soluta fuga illum, beatae perspiciatis similique officia, id repellendus voluptatum
                        impedit alias, praesentium omnis neque exercitationem quam minima expedita vitae incididunt ut
                        labore.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="contact-us-for-faq text-center">
                <router-link to="/vertical/contact" class="default-btn">
                  Contact
                </router-link>
              </div>
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
  name: 'Faq',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'Ehay - 工具商店'
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
