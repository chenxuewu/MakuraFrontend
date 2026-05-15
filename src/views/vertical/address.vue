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
            <li class="active">地址管理</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="dashboard-area ptb-54">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <ul class="dashboard-navigation">
              <li>
                <h3>導航</h3>
              </li>
              <li>
                <router-link to="/vertical/dashboard">會員中心</router-link>
              </li>
              <li>
                <router-link to="/vertical/edit-profile">編輯個人資料</router-link>
              </li>
              <li>
                <router-link to="/vertical/edit-address">編輯地址</router-link>
              </li>
              <li>
                <router-link to="/vertical/order-history">訂單紀錄</router-link>
              </li>
              <li>
                <router-link to="/vertical/order-details">訂單詳情</router-link>
              </li>
              <li>
                <a href="" class="active">地址管理</a>
              </li>
              <li>
                <router-link to="/vertical/password">修改密碼</router-link>
              </li>
              <li>
                <router-link to="/vertical/my-account">退出登錄</router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-8">
            <div class="address-list">
              <h3>地址管理</h3>
              <div class="added-address">
                <a href="">
                  <i class="ri-add-line"></i>
                  <span>新增地址</span>
                </a>
              </div>
              <div class="billing-address-bar mb-0">
                <div class="row align-items-center">
                  <div class="col-lg-4 col-md-6">
                    <h3>帳單地址</h3>
                    <ul>
                      <li>Doreen McCool</li>
                      <li>
                        <span>地址：</span>
                        2491 Reel Avenue Albuquerque
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <ul>
                      <li>
                        <span>電話：</span>
                        <a href="tel:+1-(514)-321-4566">+1 (514) 321-4566</a>
                      </li>
                      <li>
                        <span>郵箱：</span>
                        <a href="javascript:;"> <span class="__cf_email__"
                                                      data-cfemail="76131e170f36130e171b061a135815191b"
                        >[email&#160;protected]</span></a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="edit-address">
                      <router-link to="/vertical/edit-address" class="default-btn">編輯地址</router-link>
                      <button class="default-btn m-0">
                        刪除
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="subscribe-area ptb-54">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-2">
            <div class="logo">
              <a href="">
                <img src="/test/static/picture/logo.png" alt="makura">
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
              <input type="email" class="form-control" placeholder="你的電子郵件" name="EMAIL" required=""
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


    <div class="popup-overlay popup-hide" style="display:none!important">
      <div class="container">
        <div class="align-middle">
          <div class="popup-body">
            <div class="popup-close">
              <i class="ri-close-fill"></i>
            </div>
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="modal-newsletter">
                  <h3>訂閱電子報</h3>
                  <p>訂閱我們的電子報，搶先收到最新消息與優惠。</p>
                  <form class="newsletter-form" data-toggle="validator">
                    <input type="email" class="form-control" placeholder="輸入電子郵件地址" name="EMAIL" required=""
                           autocomplete="off"
                    >
                    <button class="default-btn black-btn" type="submit">
                      立即訂閱
                    </button>
                    <div id="validator-newsletter-2" class="form-result"></div>
                    <div class="agree-label">
                      <input type="checkbox" id="chb1">
                      <label for="chb1">
                        不再顯示此視窗
                      </label>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="newsletter-img">
                  <img src="/test/static/picture/newsletter-img.jpg" alt="Image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="modal fade product-view-one" id="exampleModal">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <button type="button" class="close" data-bs-dismiss="modal">
<span aria-hidden="true">
<i class="ri-close-line"></i>
</span>
          </button>
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="product-view-one-image">
                <div id="big" class="owl-carousel owl-theme">
                  <div class="item">
                    <img src="/test/static/picture/product-1.jpg" alt="Image">
                  </div>
                  <div class="item">
                    <img src="/test/static/picture/product-2.jpg" alt="Image">
                  </div>
                  <div class="item">
                    <img src="/test/static/picture/product-3.jpg" alt="Image">
                  </div>
                  <div class="item">
                    <img src="/test/static/picture/product-4.jpg" alt="Image">
                  </div>
                  <div class="item">
                    <img src="/test/static/picture/product-5.jpg" alt="Image">
                  </div>
                  <div class="item">
                    <img src="/test/static/picture/product-6.jpg" alt="Image">
                  </div>
                </div>
                <div id="thumbs" class="owl-carousel owl-theme">
                  <div class="item">
                    <img src="/test/static/picture/product-1.jpg" alt="Image">
                  </div>
                  <div class="item">
                    <img src="/test/static/picture/product-2.jpg" alt="Image">
                  </div>
                  <div class="item">
                    <img src="/test/static/picture/product-3.jpg" alt="Image">
                  </div>
                  <div class="item">
                    <img src="/test/static/picture/product-4.jpg" alt="Image">
                  </div>
                  <div class="item">
                    <img src="/test/static/picture/product-5.jpg" alt="Image">
                  </div>
                  <div class="item">
                    <img src="/test/static/picture/product-6.jpg" alt="Image">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="product-content">
                <h3>
                  Cordless Drill Professional Combo Drill And Screwdriver
                </h3>
                <div class="product-review">
                  <div class="rating">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                  </div>
                  <a href="#" class="rating-count">4 則評價</a>
                </div>
                <div class="price">
                  <span class="new-price">$119.0 <del>$219.0</del></span>
                  <span class="in-stock">現貨供應（8 件）</span>
                </div>
                <ul class="product-info">
                  <li>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam ad reprehenderit fuga nam, non
                      odit necessitatibus facilis beatae temporibus</p>
                  </li>
                  <li>
                    <span>SKU:</span>
                    001
                  </li>
                  <li>
                    <span>供貨狀態：</span>
                    可購買
                  </li>
                  <li>
                    <span>品牌：</span>
                    Ehay
                  </li>
                  <li>
                    <span>分類：</span>
                    <router-link to="/vertical/products">Power Drill</router-link>
                  </li>
                </ul>
                <div class="product-color-switch">
                  <ul>
                    <li>
                      <span>顏色：</span>
                    </li>
                    <li>
                      <button title="Black" class="color-black"></button>
                    </li>
                    <li>
                      <button title="White" class="color-white"></button>
                    </li>
                    <li class="active">
                      <button title="Green" class="color-green"></button>
                    </li>
                    <li>
                      <button title="Yellow Green" class="color-yellowgreen"></button>
                    </li>
                    <li>
                      <button title="Teal" class="color-teal"></button>
                    </li>
                  </ul>
                </div>
                <div class="product-add-to-cart">
                  <div class="input-counter">
<span class="minus-btn">
<i class="ri-subtract-line"></i>
</span>
                    <input type="text" value="1">
                    <span class="plus-btn">
<i class="ri-add-line"></i>
</span>
                  </div>
                  <a href="javascript:;" class="default-btn">
                    <i class="ri-shopping-cart-line"></i>
                    加入購物車
                  </a>
                </div>
                <div class="wishlist-btn">
                  <router-link to="/vertical/wishlist" class="default-btn">
                    <i class="ri-heart-line"></i>
                    加入收藏
                  </router-link>
                </div>
                <div class="share-this-product">
                  <ul>
                    <li>
                      <span>分享</span>
                    </li>
                    <li>
                      <a href="javascript:;" target="_blank">
                        <i class="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;" target="_blank">
                        <i class="ri-instagram-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;" target="_blank">
                        <i class="ri-linkedin-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;" target="_blank">
                        <i class="ri-twitter-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <VerticalFoot />
  </div>
</template>

<script>
import VerticalHead from './components/head.vue'
import VerticalFoot from './components/foot.vue'

export default {
  name: 'Address',
  components: { VerticalHead, VerticalFoot },
  metaInfo: {
    title: 'Ehay - 工具商店 HTML 模板'
  }
}
</script>

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
