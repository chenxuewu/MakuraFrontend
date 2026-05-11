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
                  Payable total
                </li>
                <li class="total">
                  <span>$564.00</span>
                </li>
              </ul>
              <ul class="cart-check-btn">
                <li>
                  <router-link to="/vertical/shopping-cart" class="default-btn">
                    View Cart
                  </router-link>
                </li>
                <li class="checkout">
                  <router-link to="/vertical/checkout" class="default-btn">
                    Checkout
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
                Home
              </router-link>
            </li>
            <li class="active">Blog</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="blog-post-area ptb-54">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row justify-content-center">
              <div class="col-lg-12 col-md-6">
                <div class="single-blog blog-post">
                  <router-link to="/vertical/blog-details">
                    <img src="/test/static/picture/blog-1.jpg" alt="Image">
                  </router-link>
                  <div class="blog-content">
                    <ul>
                      <li>
                        <a href="javascript:;">
                          Admin
                        </a>
                      </li>
                      <li>
                        July 30, 2021
                      </li>
                      <li>
                        <router-link to="/vertical/blog-details">
                          (03) Comments
                        </router-link>
                      </li>
                    </ul>
                    <h3>
                      <router-link to="/vertical/blog-details">
                        Powerful Motor For The Best Performance In Compound Miter Saw
                      </router-link>
                    </h3>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
                      velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed
                      magna dictum porta. Curabitur aliquet quam id dui.</p>
                    <router-link to="/vertical/blog-details" class="default-btn">
                      Read More
                      <i class="ri-arrow-right-line"></i>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-6">
                <div class="single-blog blog-post">
                  <router-link to="/vertical/blog-details">
                    <img src="/test/static/picture/blog-2.jpg" alt="Image">
                  </router-link>
                  <div class="blog-content">
                    <ul>
                      <li>
                        <a href="javascript:;">
                          Admin
                        </a>
                      </li>
                      <li>
                        July 05, 2021
                      </li>
                      <li>
                        <router-link to="/vertical/blog-details">
                          (03) Comments
                        </router-link>
                      </li>
                    </ul>
                    <h3>
                      <router-link to="/vertical/blog-details">
                        Why We Used One Of The Best Corded Drill Power Tools
                      </router-link>
                    </h3>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
                      velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed
                      magna dictum porta. Curabitur aliquet quam id dui.</p>
                    <router-link to="/vertical/blog-details" class="default-btn">
                      Read More
                      <i class="ri-arrow-right-line"></i>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-6">
                <div class="single-blog blog-post">
                  <router-link to="/vertical/blog-details">
                    <img src="/test/static/picture/blog-3.jpg" alt="Image">
                  </router-link>
                  <div class="blog-content">
                    <ul>
                      <li>
                        <a href="javascript:;">
                          Admin
                        </a>
                      </li>
                      <li>
                        July 15, 2021
                      </li>
                      <li>
                        <router-link to="/vertical/blog-details">
                          (03) Comments
                        </router-link>
                      </li>
                    </ul>
                    <h3>
                      <router-link to="/vertical/blog-details">
                        The Most Advanced Quality Tools For Welding Work
                      </router-link>
                    </h3>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
                      velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed
                      magna dictum porta. Curabitur aliquet quam id dui.</p>
                    <router-link to="/vertical/blog-details" class="default-btn">
                      Read More
                      <i class="ri-arrow-right-line"></i>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="pagination-area">
                  <span class="page-numbers current" aria-current="page">1</span>
                  <a href="" class="page-numbers">2</a>
                  <a href="" class="page-numbers">3</a>
                  <a href="" class="next page-numbers">
                    <i class="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="widget-sidebar ml-15">
              <div class="sidebar-widget search">
                <form class="search-form">
                  <input class="form-control" name="search" placeholder="Search..." type="text">
                  <button class="search-button" type="submit">
                    <i class="ri-search-line"></i>
                  </button>
                </form>
              </div>
              <div class="sidebar-widget categories">
                <ul>
                  <li>
                    <h3>Categories</h3>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="ri-arrow-right-s-line"></i>
                      Power Tools
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="ri-arrow-right-s-line"></i>
                      Hand Tools
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="ri-arrow-right-s-line"></i>
                      Cordless Tools
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="ri-arrow-right-s-line"></i>
                      焊接與銲接
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
                    <h3>Recent posts</h3>
                  </li>
                  <li>
                    <router-link to="/vertical/blog-details">
                      Do You Know How To Buy High Quality Products?
                      <img src="/test/static/picture/recent-1.jpg" alt="Image">
                    </router-link>
                    <span>August 08, 2021</span>
                  </li>
                  <li>
                    <router-link to="/vertical/blog-details">
                      Why We Used Best Hand Tools for used?
                      <img src="/test/static/picture/recent-2.jpg" alt="Image">
                    </router-link>
                    <span>August 09, 2021</span>
                  </li>
                  <li>
                    <router-link to="/vertical/blog-details">
                      Why You Need Any Popular Brand Tools
                      <img src="/test/static/picture/recent-3.jpg" alt="Image">
                    </router-link>
                    <span>August 10, 2021</span>
                  </li>
                </ul>
              </div>
              <div class="sidebar-widget categories">
                <ul>
                  <li>
                    <h3>Archives</h3>
                  </li>
                  <li>
                    <a href="">
                      <i class="ri-arrow-right-s-line"></i>
                      January
                      <span>2021</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="ri-arrow-right-s-line"></i>
                      October
                      <span>2020</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="ri-arrow-right-s-line"></i>
                      January
                      <span>2019</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="ri-arrow-right-s-line"></i>
                      February
                      <span>2019</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="ri-arrow-right-s-line"></i>
                      October
                      <span>2019</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="ri-arrow-right-s-line"></i>
                      June
                      <span>2019</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="ri-arrow-right-s-line"></i>
                      February
                      <span>2019</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="ri-arrow-right-s-line"></i>
                      January
                      <span>2018</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="sidebar-widget tags mb-0">
                <h3>Tags</h3>
                <ul>
                  <li>
                    <a href="javascript:;">Power Tools</a>
                  </li>
                  <li>
                    <a href="javascript:;">Tools Store</a>
                  </li>
                  <li>
                    <a href="javascript:;">Hand Tools</a>
                  </li>
                  <li>
                    <a href="javascript:;">Screwdriver</a>
                  </li>
                  <li>
                    <a href="javascript:;">Cordless Tools</a>
                  </li>
                  <li>
                    <a href="javascript:;">安全工具</a>
                  </li>
                  <li>
                    <a href="javascript:;">園藝工具</a>
                  </li>
                  <li>
                    <a href="javascript:;">Accessories</a>
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
  name: 'Blog',
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
