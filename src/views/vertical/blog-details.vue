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
            <li class="active">部落格詳情</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="blog-post-area ptb-54">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="blog-details-content mr-15">
              <div class="blog-details-img">
                <img src="/test/static/picture/blog-1.jpg" alt="Image">
              </div>
              <div class="blog-top-content">
                <div class="blog-content">
                  <ul class="admin">
                    <li>
                      <a href="javascript:;">
                        管理員
                      </a>
                    </li>
                    <li>
                      2021年7月14日
                    </li>
                    <li>
                      <a href="#comments">
                        (03) 則留言
                      </a>
                    </li>
                  </ul>
                  <h3>強力馬達帶來最佳性能的複合斜切鋸</h3>
                  <p>這款複合斜切鋸配備了強力馬達，能夠提供卓越的性能表現。無論是專業木工還是 DIY
                    愛好者，都能輕鬆應對各種切割需求。精準的切割角度調整功能，讓每一次操作都能達到理想效果。</p>
                  <p>
                    產品採用人體工學設計，握持舒適且操作簡便。高品質的材料確保了工具的耐用性與穩定性。內建的安全防護裝置，讓您在使用過程中更加安心。無論是橫切、斜切還是複合角度切割，這款工具都能完美勝任。</p>
                  <p>
                    我們深知工具對於工作的重要性，因此每一款產品都經過嚴格的品質檢測。從材料選擇到生產製造，每個環節都力求做到最好。選擇我們的工具，就是選擇了品質與信賴。</p>
                  <p>
                    除了優異的性能表現，這款斜切鋸還具有便於攜帶的特點。輕巧的機身設計，讓您可以輕鬆將它帶到任何工作場所。無論是在家中、工地還是工作室，都能隨時隨地展開工作。</p>
                </div>
                <blockquote>
                  <p>
                    「這款斜切鋸真的超好用！切割精準又順手，是我用過最棒的工具之一。強力推薦給所有需要的朋友，絕對不會後悔！」</p>
                  <i class="ri-double-quotes-l"></i>
                </blockquote>
                <p>
                  我們始終秉持著為顧客提供最優質產品的理念，不斷研發創新技術，提升產品性能。每一款工具都凝聚了我們的心血與專業，希望能為您的工作帶來更多便利與效率。</p>
              </div>
              <div class="tags">
                <ul class="tag-link">
                  <li class="title">
                    <span>標籤：</span>
                  </li>
                  <li>
                    <a href="javascript:;" target="_blank">
                      Power Tools
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" target="_blank">
                      Tools Store
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" target="_blank">
                      Hand Tools
                    </a>
                  </li>
                </ul>
                <div class="share-link">
                  <ul class="social-icon">
                    <li>
                      <span>分享：</span>
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
              <ul class="comment" id="comments">
                <li>
                  <img src="/test/static/picture/comment-1.jpg" alt="Image">
                  <h3>Harold McLeod</h3>
                  <span>2021年7月14日</span>
                  <p>這篇文章寫得太棒了！剛好最近想買一台斜切鋸，這篇介紹讓我更了解該怎麼選擇。感謝分享這麼實用的資訊！</p>
                  <a href="" class="read-more">回覆</a>
                </li>
                <li class="margin-left">
                  <img src="/test/static/picture/comment-2.jpg" alt="Image">
                  <h3>Alex Dew</h3>
                  <span>2021年7月14日</span>
                  <p>我也用過這款，真的蠻推薦的！切割很精準，而且操作起來很順手。</p>
                  <a href="" class="read-more">回覆</a>
                </li>
                <li>
                  <img src="/test/static/picture/comment-3.jpg" alt="Image">
                  <h3>Juhon Smith</h3>
                  <span>2021年7月14日</span>
                  <p>請問這款有保固嗎？大概多久呢？想確認一下售後服務的部分。</p>
                  <a href="" class="read-more">回覆</a>
                </li>
              </ul>
              <div class="leave-reply">
                <h3>發表回覆</h3>
                <form>
                  <p>你的電子郵件不會被公開。必填欄位標註為 *</p>
                  <div class="row">
                    <div class="col-lg-6 col-sm-6">
                      <div class="form-group">
                        <label>姓名 *</label>
                        <input type="text" name="name" id="name" class="form-control">
                      </div>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                      <div class="form-group">
                        <label>電子郵件 *</label>
                        <input type="email" name="email" id="email" class="form-control">
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label>你的網站連結</label>
                        <input type="text" name="website" id="website" class="form-control">
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group">
                        <label>留言內容</label>
                        <textarea name="message" class="form-control" id="message" rows="8"></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <button type="submit" class="default-btn">
                        發表留言
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="widget-sidebar ml-15">
              <div class="sidebar-widget search">
                <form class="search-form">
                  <input class="form-control" name="search" placeholder="搜尋..." type="text">
                  <button class="search-button" type="submit">
                    <i class="ri-search-line"></i>
                  </button>
                </form>
              </div>
              <div class="sidebar-widget categories">
                <ul>
                  <li>
                    <h3>商品分類</h3>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="ri-arrow-right-s-line"></i>
                      電動工具
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="ri-arrow-right-s-line"></i>
                      手工具
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="ri-arrow-right-s-line"></i>
                      無線工具
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="ri-arrow-right-s-line"></i>
                      焊接與焊錫
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="ri-arrow-right-s-line"></i>
                      園藝工具
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="ri-arrow-right-s-line"></i>
                      安全工具
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="ri-arrow-right-s-line"></i>
                      工地照明工具
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="ri-arrow-right-s-line"></i>
                      工具配件
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="ri-arrow-right-s-line"></i>
                      戶外動力設備
                    </a>
                  </li>
                </ul>
              </div>
              <div class="sidebar-widget recent-post">
                <ul>
                  <li class="pl-0">
                    <h3>最新文章</h3>
                  </li>
                  <li>
                    <a href="">
                      你知道如何購買高品質產品嗎？
                      <img src="/test/static/picture/recent-1.jpg" alt="Image">
                    </a>
                    <span>2021年8月8日</span>
                  </li>
                  <li>
                    <a href="">
                      為什麼我們要使用最好的手工具？
                      <img src="/test/static/picture/recent-2.jpg" alt="Image">
                    </a>
                    <span>2021年8月9日</span>
                  </li>
                  <li>
                    <a href="">
                      為什麼你需要知名品牌的工具
                      <img src="/test/static/picture/recent-3.jpg" alt="Image">
                    </a>
                    <span>2021年8月10日</span>
                  </li>
                </ul>
              </div>
              <div class="sidebar-widget categories">
                <ul>
                  <li>
                    <h3>文章歸檔</h3>
                  </li>
                  <li>
                    <router-link to="/vertical/blog">
                      <i class="ri-arrow-right-s-line"></i>
                      一月
                      <span>2021</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/blog">
                      <i class="ri-arrow-right-s-line"></i>
                      十月
                      <span>2020</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/blog">
                      <i class="ri-arrow-right-s-line"></i>
                      一月
                      <span>2019</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/blog">
                      <i class="ri-arrow-right-s-line"></i>
                      二月
                      <span>2019</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/blog">
                      <i class="ri-arrow-right-s-line"></i>
                      十月
                      <span>2019</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/blog">
                      <i class="ri-arrow-right-s-line"></i>
                      六月
                      <span>2019</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/blog">
                      <i class="ri-arrow-right-s-line"></i>
                      二月
                      <span>2019</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/vertical/blog">
                      <i class="ri-arrow-right-s-line"></i>
                      一月
                      <span>2018</span>
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="sidebar-widget tags mb-0">
                <h3>標籤</h3>
                <ul>
                  <li>
                    <a href="javascript:;">電動工具</a>
                  </li>
                  <li>
                    <a href="javascript:;">工具商店</a>
                  </li>
                  <li>
                    <a href="javascript:;">手工具</a>
                  </li>
                  <li>
                    <a href="javascript:;">螺絲起子</a>
                  </li>
                  <li>
                    <a href="javascript:;">無線工具</a>
                  </li>
                  <li>
                    <a href="javascript:;">安全工具</a>
                  </li>
                  <li>
                    <a href="javascript:;">園藝工具</a>
                  </li>
                  <li>
                    <a href="javascript:;">配件</a>
                  </li>
                </ul>
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
  name: 'BlogDetails',
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
