<template>
  <div class="vertical-page">

    <VerticalHead />

    <section class="hero-slider-area hero-slider-area-style-two">
      <div class="hero-slider-two owl-carousel owl-theme">
        <div class="slider-item bg-4">
          <div class="d-table">
            <div class="d-table-cell">
              <div class="container">
                <div class="hero-slider-content">
                  <span>限時優惠</span>
                  <h1>手工具超值組合就在這裡</h1>
                  <p>全館免運，商品再打 4 折</p>
                  <div class="hero-slider-btn">
                    <router-link to="/vertical/products" class="default-btn">
                      <i class="ri-shopping-cart-line"></i>
                      立即選購
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slider-item bg-5">
          <div class="d-table">
            <div class="d-table-cell">
              <div class="container">
                <div class="hero-slider-content">
                  <span>Special Offer</span>
                  <h1>2021 年最佳家居裝飾精選</h1>
                  <p>全館免運，商品再打 4 折</p>
                  <div class="banner-btn">
                    <router-link to="/vertical/products" class="default-btn">
                      <i class="ri-shopping-cart-line"></i>
                      Shop Now
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="slider-item bg-6">
          <div class="d-table">
            <div class="d-table-cell">
              <div class="container">
                <div class="hero-slider-content">
                  <span>Special Offer</span>
                  <h1>各種頂級品質工具</h1>
                  <p>全館免運，商品再打 4 折</p>
                  <div class="banner-btn">
                    <router-link to="/vertical/products" class="default-btn">
                      <i class="ri-shopping-cart-line"></i>
                      Shop Now
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="popular-categories-area pt-54 pb-30">
      <div class="container">
        <div class="section-title">
          <h2>熱門分類</h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-sm-6">
            <div class="single-categories">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-25.png" alt="Image">
              </router-link>
              <h3>
                <router-link to="/vertical/product-details">
                  電動工具
                </router-link>
              </h3>
              <span>15 項商品</span>
              <a href="javascript:;" class="read-more">
                立即選購
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-categories bg-eff5ff">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-26.png" alt="Image">
              </router-link>
              <h3>
                <router-link to="/vertical/product-details">
                  機械工具
                </router-link>
              </h3>
              <span>05 項商品</span>
              <a href="javascript:;" class="read-more">
                立即選購
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-categories bg-ebf1f5">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-27.png" alt="Image">
              </router-link>
              <h3>
                <router-link to="/vertical/product-details">
                  手工具
                </router-link>
              </h3>
              <span>18 項商品</span>
              <a href="javascript:;" class="read-more">
                立即選購
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-categories bg-ebf9ea">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-28.png" alt="Image">
              </router-link>
              <h3>
                <router-link to="/vertical/product-details">
                  無線工具
                </router-link>
              </h3>
              <span>19 項商品</span>
              <a href="javascript:;" class="read-more">
                立即選購
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-categories bg-fff8e5">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-29.png" alt="Image">
              </router-link>
              <h3>
                <router-link to="/vertical/product-details">
                  焊接與銲接
                </router-link>
              </h3>
              <span>04 項商品</span>
              <a href="javascript:;" class="read-more">
                立即選購
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="single-categories bg-f3f1ff">
              <router-link to="/vertical/product-details">
                <img src="/test/static/picture/product-30.png" alt="Image">
              </router-link>
              <h3>
                <router-link to="/vertical/product-details">
                  套筒扳手
                </router-link>
              </h3>
              <span>12 項商品</span>
              <a href="javascript:;" class="read-more">
                立即選購
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="featured-products-area pb-30">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="featured-product-img bg-2">
              <div class="featured-product-content">
                <span class="best">最佳優惠</span>
                <h3>頂級工具組</h3>
                <span class="offer">最高 7 折</span>
                <router-link to="/vertical/products">
                  立即選購
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="section-title">
              <h2>精選商品</h2>
            </div>
            <div class="featured-product-wrap">
              <div v-if="sectionProducts(1).length" class="featured-product-slider owl-carousel owl-theme">
                <div v-for="product in sectionProducts(1)" :key="product.id">
                  <ProductCard :product="product" variant="standard" fallback-img="/test/static/picture/product-6.jpg" />
                </div>
              </div>
              <div v-else class="empty-products text-center py-4 text-muted">暫無商品</div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="best-seller-area pb-30">
      <div class="container">
        <div class="section-title">
          <h2>熱銷排行</h2>
        </div>
        <div v-if="sectionProducts(2).length" class="best-product-slider owl-carousel owl-theme">
          <div v-for="product in sectionProducts(2)" :key="product.id">
            <ProductCard :product="product" variant="standard" fallback-img="/test/static/picture/product-1.jpg" />
          </div>
        </div>
        <div v-else class="empty-products text-center py-4 text-muted">暫無商品</div>
      </div>
    </section>


    <section class="sale-offer-area">
      <div class="container">
        <div class="sale-offer-bg bg-2">
          <h5>限時特賣 - <span>7 折</span></h5>
          <h3>各種頂級品質工具</h3>
          <router-link to="/vertical/products" class="default-btn">
            <i class="ri-shopping-cart-line"></i>
            立即選購
          </router-link>
        </div>
      </div>
    </section>


    <section class="flash-deals-area ptb-54">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="section-title p-0">
              <h2>顧客評價</h2>
            </div>
            <div class="customer-slider owl-carousel owl-theme">
              <div class="single-customer">
                <div class="avatar">
                  <img src="/test/static/picture/customer-1.png" class="customer" alt="Image">
                  <img src="/test/static/picture/quote.png" class="quote" alt="Image">
                  <div class="avatar-name">
                    <h3>喬治亞</h3>
                    <span>財務主管</span>
                  </div>
                </div>
                <p>「收到商品後非常滿意，包裝仔細，工具組的做工精細，功能也很齊全。用了一個月下來，CP值真的很高，强烈推薦給需要工具的朋友們！」</p>
              </div>
              <div class="single-customer">
                <div class="avatar">
                  <img src="/test/static/picture/customer-2.png" class="customer" alt="Image">
                  <img src="/test/static/picture/quote.png" class="quote" alt="Image">
                  <div class="avatar-name">
                    <h3>阿萊斯</h3>
                    <span>行銷經理</span>
                  </div>
                </div>
                <p>「出貨速度快，客服態度也很好，回覆問題都很即時。商品跟照片描述完全一致，沒有色差。整體購物體驗很棒，已經是回頭客了！」</p>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="section-title">
              <h2>限時搶購</h2>
            </div>
            <div class="flash-deals-wrap need-border">
              <div v-if="sectionProducts(3).length" class="flash-deals-slider owl-carousel owl-theme">
                <div class="single-products deals-products" v-for="(product, idx) in sectionProducts(3)" :key="product.id">
                  <div class="row align-items-center">
                    <div class="col-xl-6">
                      <div class="product-img tw-flash-img">
                        <router-link :to="`/vertical/product-details?id=${product.id}`">
                          <img :src="product.mainImageUrl || '/test/static/picture/product-11.jpg'" :alt="product.name">
                        </router-link>
                        <span v-if="product.newStatus === 1" class="badge-corner badge-new">新品</span>
                        <span v-if="discountPercent(product) > 0" class="badge-discount">-{{ discountPercent(product) }}%</span>
                      </div>
                    </div>
                    <div class="col-xl-6">
                      <div class="tw-flash-body">
                        <div v-if="product.subTitle" class="tw-subtitle">{{ product.subTitle }}</div>
                        <router-link :to="`/vertical/product-details?id=${product.id}`" class="tw-title" :title="product.name">
                          {{ product.name }}
                        </router-link>
                        <div class="tw-price-row">
                          <span class="tw-price-current">NT$ {{ formatPrice(product.price) }}</span>
                          <span v-if="hasOriginalPrice(product)" class="tw-price-original">NT$ {{ formatPrice(product.originalPrice) }}</span>
                        </div>
                        <div class="tw-badges">
                          <span class="tw-badge"><i class="ri-truck-line"></i> 免運</span>
                          <span class="tw-badge"><i class="ri-flashlight-line"></i> 24H 到貨</span>
                        </div>
                        <div class="tw-evidence">
                          <span>已售 {{ product.sale || 0 }} 件</span>
                          <span v-if="product.stock != null" class="tw-dot">·</span>
                          <span v-if="product.stock != null && product.stock > 0" class="tw-stock-ok">庫存剩 {{ product.stock }} 件</span>
                        </div>
                        <div :id="'flash-timer-' + idx" class="tw-flash-timer">
                          <div class="days"></div>
                          <div class="hours"></div>
                          <div class="minutes"></div>
                          <div class="seconds"></div>
                        </div>
                        <router-link to="/vertical/shopping-cart" class="tw-btn-main tw-btn-flash">
                          <i class="ri-shopping-cart-line"></i> 立即搶購
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="empty-products text-center py-4 text-muted">暫無商品</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="new-arrivals-area pb-30">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="section-title">
              <h2>人氣商品</h2>
            </div>
            <div class="tw-list-wrap">
              <ProductCard v-for="product in sectionProducts(4)" :key="product.id" :product="product" variant="list" fallback-img="/test/static/picture/product-12.jpg" />
              <div v-if="!sectionProducts(4).length" class="empty-products text-center py-4 text-muted">暫無商品</div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="section-title">
              <h2>最新上架</h2>
              <router-link to="/vertical/products" class="read-more">
                查看全部
              </router-link>
            </div>
            <div class="row g-3">
              <div class="col-xl-3 col-sm-6" v-for="product in sectionProducts(5)" :key="product.id">
                <ProductCard :product="product" variant="standard" fallback-img="/test/static/picture/product-17.jpg" />
              </div>
              <div v-if="!sectionProducts(5).length" class="col-12">
                <div class="empty-products text-center py-4 text-muted">暫無商品</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="sale-discount-area pb-54">
      <div class="container">
        <div class="sale-discount-bg">
          <div class="discount-content">
            <h5>全館 7 折優惠</h5>
            <h3>數百種頂級品質工具，全新超低價格</h3>
          </div>
        </div>
      </div>
    </section>



    <section class="categories-area pb-54">
      <div class="container">
        <div class="categories-wrap">
          <div class="row">
            <div class="col-lg-3">
              <div class="section-title">
                <h2>商品分類</h2>
              </div>
              <ul class="tabs tw-category-tabs">
                <li
                  v-for="cat in categoryList"
                  :key="cat.id"
                  :class="{ active: String(activeCategoryId) === String(cat.id) }"
                  @click="onSelectCategory(cat.id)"
                >
                  {{ cat.displayName || cat.name }}
                </li>
                <li v-if="!categoryList.length" class="tw-tab-empty text-muted">暫無分類</li>
              </ul>
            </div>
            <div class="col-lg-9">
              <div
                class="tw-category-products"
                :class="{ 'is-loading': categoryLoading }"
                :style="lockedHeight ? { minHeight: lockedHeight } : null"
                ref="categoryProductsEl"
              >
                <div v-if="!categoryProducts.length && !categoryLoading" class="empty-products text-center py-4 text-muted">該分類暫無商品</div>
                <div v-else class="row g-3">
                  <div class="col-xl-3 col-sm-6" v-for="product in categoryProducts" :key="product.id">
                    <ProductCard :product="product" variant="standard" fallback-img="/test/static/picture/product-17.jpg" />
                  </div>
                </div>
                <div v-if="categoryLoading" class="tw-loading-mask">
                  <span class="tw-loading-spinner"></span>
                  <span class="tw-loading-text">載入中...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



<!--    <div class="partner-area pb-54">-->
<!--      <div class="container">-->
<!--        <div class="partner-wrap">-->
<!--          <div class="partner-slider owl-carousel owl-theme">-->
<!--            <div class="partner-item">-->
<!--              <img src="/test/static/picture/partner-1.png" alt="Image">-->
<!--            </div>-->
<!--            <div class="partner-item">-->
<!--              <img src="/test/static/picture/partner-2.png" alt="Image">-->
<!--            </div>-->
<!--            <div class="partner-item">-->
<!--              <img src="/test/static/picture/partner-3.png" alt="Image">-->
<!--            </div>-->
<!--            <div class="partner-item">-->
<!--              <img src="/test/static/picture/partner-4.png" alt="Image">-->
<!--            </div>-->
<!--            <div class="partner-item">-->
<!--              <img src="/test/static/picture/partner-5.png" alt="Image">-->
<!--            </div>-->
<!--            <div class="partner-item">-->
<!--              <img src="/test/static/picture/partner-6.png" alt="Image">-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->


    <section class="special-area pb-30">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="section-title">
              <h2>特別優惠</h2>
            </div>
            <div class="tw-list-wrap">
              <ProductCard v-for="product in sectionProducts(6)" :key="product.id" :product="product" variant="list" fallback-img="/test/static/picture/product-19.jpg" />
              <div v-if="!sectionProducts(6).length" class="empty-products text-center py-4 text-muted">暫無商品</div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="section-title">
              <h2>熱門商品</h2>
            </div>
            <div class="tw-list-wrap">
              <ProductCard v-for="product in sectionProducts(2)" :key="product.id" :product="product" variant="list" fallback-img="/test/static/picture/product-34.jpg" />
              <div v-if="!sectionProducts(2).length" class="empty-products text-center py-4 text-muted">暫無商品</div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="section-title">
              <h2>最高評價商品</h2>
            </div>
            <div class="tw-list-wrap">
              <ProductCard v-for="product in sectionProducts(7)" :key="product.id" :product="product" variant="list" fallback-img="/test/static/picture/product-7.jpg" />
              <div v-if="!sectionProducts(7).length" class="empty-products text-center py-4 text-muted">暫無商品</div>
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
              <router-link to="/vertical/index">
                <img src="/test/static/picture/white-logo.png" alt="Image">
              </router-link>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="subscribe-content">
              <span>首次訂購享 7 折優惠</span>
              <h3>訂閱我們的電子報</h3>
              <p>訂閱電子報，獲取所有最新資訊</p>
            </div>
          </div>
          <div class="col-lg-5">
            <form class="newsletter-form" data-toggle="validator">
              <input type="email" class="form-control" placeholder="您的電子郵件地址" name="EMAIL" required=""
                     autocomplete="off"
              >
              <button class="submit-btn" type="submit">
                訂閱
              </button>
              <div id="validator-newsletter" class="form-result"></div>
            </form>
          </div>
        </div>
      </div>
    </section>


    <VerticalFoot />

  </div>
</template>

<script>
import VerticalHead from './components/head.vue'
import VerticalFoot from './components/foot.vue'
import ProductCard from '@c/ProductCard'
import { getHomeSections } from '@/api/product/homeSection'
import { frontGetCategoryTree } from '@/api/product/category'
import { frontListNoLogin } from '@/api/product/purchase'
import { OWL_CONFIGS } from '@/mixins/vertical'

// 只針對「資料驅動」的 3 個輪播配置（與 mixins/vertical.js 中 OWL_CONFIGS 對應的 3 條保持一致）
const DYNAMIC_CAROUSELS = {
  '.featured-product-slider': { loop: true, margin: 24, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"], responsive: { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 2 }, 1200: { items: 3 } } },
  '.best-product-slider':     { loop: true, margin: 24, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"], responsive: { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } } },
  '.flash-deals-slider':      { loop: true, margin: 24, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"], responsive: { 0: { items: 1 }, 576: { items: 2 }, 1200: { items: 2 } } },
}

export default {
  name: 'Index2',
  components: { VerticalHead, VerticalFoot, ProductCard },
  metaInfo: {
    title: 'Ehay - 工具商店 HTML 模板'
  },
  data() {
    return {
      homeSections: [],
      categoryList: [],
      activeCategoryId: null,
      categoryProducts: [],
      categoryLoading: false,
      lockedHeight: ''
    }
  },
  created() {
    this.loadHomeSections()
    this.loadCategories()
  },
  mounted() {
    this.initStaticCarousels()
  },
  methods: {
    async loadHomeSections() {
      try {
        const res = await getHomeSections()
        const list = (res && (res.data || res.rows)) || []
        this.homeSections = Array.isArray(list) ? list : []
      } catch (e) {
        console.warn('載入首頁板塊失敗', e)
        this.homeSections = []
      }
      // 商品資料填入 DOM 後，只對 3 個資料驅動的輪播 destroy + re-init，不動 Hero / Partner / Customer / Categories
      // 用 rAF 等一幀，確保 DOM 完成 layout（特別是 SPA 返回時），避免 owl-carousel 基於 0 尺寸 init 導致圖片塌陷
      this.$nextTick(() => {
        requestAnimationFrame(() => this.refreshDynamicCarousels())
      })
    },
    sectionProducts(id) {
      const s = this.homeSections.find(x => String(x.id) === String(id))
      return (s && s.products) || []
    },
    async loadCategories() {
      try {
        const res = await frontGetCategoryTree()
        if (res && res.code === 200 && Array.isArray(res.data)) {
          this.categoryList = res.data
          if (this.categoryList.length > 0) {
            this.onSelectCategory(this.categoryList[0].id)
          }
        }
      } catch (e) {
        console.warn('載入分類失敗', e)
        this.categoryList = []
      }
    },
    async onSelectCategory(categoryId) {
      if (this.activeCategoryId === categoryId) return
      const el = this.$refs.categoryProductsEl
      if (el && this.categoryProducts.length > 0) {
        this.lockedHeight = el.offsetHeight + 'px'
      }
      this.activeCategoryId = categoryId
      this.categoryLoading = true
      try {
        const res = await frontListNoLogin({ pageNum: 1, pageSize: 20, productCategoryId: categoryId })
        if (this.activeCategoryId !== categoryId) return
        this.categoryProducts = (res && (res.rows || res.data)) || []
      } catch (e) {
        console.warn('載入分類商品失敗', e)
        this.categoryProducts = []
      } finally {
        if (this.activeCategoryId === categoryId) {
          this.categoryLoading = false
          this.$nextTick(() => {
            setTimeout(() => { if (!this.categoryLoading) this.lockedHeight = '' }, 60)
          })
        }
      }
    },
    formatPrice(value) {
      const n = Number(value) || 0
      return n.toLocaleString('zh-TW', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    },
    hasOriginalPrice(product) {
      const p = Number(product.price) || 0
      const op = Number(product.originalPrice) || 0
      return op > 0 && op > p
    },
    discountPercent(product) {
      if (!this.hasOriginalPrice(product)) return 0
      const p = Number(product.price)
      const op = Number(product.originalPrice)
      return Math.round(((op - p) / op) * 100)
    },
    refreshDynamicCarousels(retry = 0) {
      if (typeof jQuery === 'undefined' || !jQuery.fn.owlCarousel) {
        if (retry < 100) setTimeout(() => this.refreshDynamicCarousels(retry + 1), 100)
        return
      }
      const $ = jQuery
      Object.entries(DYNAMIC_CAROUSELS).forEach(([sel, cfg]) => {
        const $el = $(sel)
        if (!$el.length) return
        try {
          if ($el.data('owl.carousel')) {
            $el.trigger('destroy.owl.carousel').removeClass('owl-loaded')
          }
          // 重新 init 前確保 class 還在（destroy 不會移除 owl-carousel 本身）
          if (!$el.hasClass('owl-carousel')) $el.addClass('owl-carousel')
          $el.owlCarousel(cfg)
        } catch (e) {
          console.warn('輪播重建失敗', sel, e)
        }
      })
    },
    initStaticCarousels(retry = 0) {
      if (typeof jQuery === 'undefined' || !jQuery.fn.owlCarousel) {
        if (retry < 100) setTimeout(() => this.initStaticCarousels(retry + 1), 100)
        return
      }
      const $ = jQuery
      // 只初始化 index.vue 中存在的靜態輪播
      const staticSelectores = {
        '.partner-slider': OWL_CONFIGS['.partner-slider'],
        '.customer-slider': OWL_CONFIGS['.customer-slider'],
        // .flash-deals-slider 由 refreshDynamicCarousels 在商品載入後統一處理，避免 DOM 空時就被初始化
      }
      Object.entries(staticSelectores).forEach(([sel, cfg]) => {
        const $el = $(sel)
        if (!$el.length) return
        try {
          if ($el.data('owl.carousel')) {
            $el.trigger('destroy.owl.carousel').removeClass('owl-loaded')
          }
          if (!$el.hasClass('owl-carousel')) $el.addClass('owl-carousel')
          $el.owlCarousel(cfg)
        } catch (e) {
          console.warn('靜態輪播初始化失敗', sel, e)
        }
      })
    }
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

/* 讓左欄把高度傳遞給 featured-product-img */
.featured-products-area .col-lg-3 {
  display: flex;
  flex-direction: column;
}

/* Flash Sale 的暫無商品佔位不需要強制 380px（那是精選商品區的需求） */
.flash-deals-area .empty-products {
  min-height: unset;
}

.featured-product-img {
  flex: 1 1 auto;
}

/* 板塊無資料時的占位 — row 是 flex，需要撐高度，避免旁邊欄位（如 .featured-product-img）被壓扁 */
.empty-products {
  min-height: 380px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  border-radius: 6px;
  color: #999;
  font-size: 14px;
}

/* 人氣商品縮圖：固定方形尺寸 + cover 裁切，避免竖图把整张卡片撑爆 */
.trending-product-list .single-list {
  min-height: 90px;
}

.trending-product-list .single-list img {
  width: 90px;
  height: 90px;
  max-width: 90px;
  object-fit: cover;
  border-radius: 4px;
  background-color: #f7f7f7;
}

.trending-product-list .single-list {
  padding-left: 105px;
}

/* 最新上架卡片：col-xl-3 列宽较窄，强制按钮单行排列 */
.single-products.new-arrivals .products-cart-wish-view {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 6px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.single-products.new-arrivals .products-cart-wish-view li {
  margin: 0;
  flex-shrink: 0;
  display: inline-flex;
}

.single-products.new-arrivals .products-cart-wish-view li:first-child {
  flex: 1 1 auto;
  min-width: 0;
}

.single-products.new-arrivals .products-cart-wish-view li .default-btn {
  padding: 9px 12px;
  font-size: 13px;
  white-space: nowrap;
  width: 100%;
  text-align: center;
}

/* 熱門分類卡片：統一圓角 + 與商品卡一致的 hover 色調 */
.vertical-page :deep(.single-categories) {
  border-radius: 4px;
  border: 1px solid #ddd;
  overflow: hidden;
}
.vertical-page :deep(.single-categories::before) {
  border-radius: 0;
}
.vertical-page :deep(.single-categories:hover) {
  border-color: #1A8FA4;
}
.vertical-page :deep(.single-categories:hover h3 a) {
  color: #1A8FA4;
}
.vertical-page :deep(.single-categories:hover img) {
  transform: scale(1.05);
}
.vertical-page :deep(.single-categories img) {
  transition: transform .3s ease;
}

/* 橫向小卡的容器（人氣商品 / 特別優惠 / 熱門商品 / 最高評價商品） */
.vertical-page :deep(.tw-list-wrap) {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 4px 16px;
  background: #fff;
}

/* Flash Deals 卡片（限時搶購：左圖右訊息 + 倒計時） */
.product-img.tw-flash-img {
  position: relative;
  width: 100%;
  padding-top: 100%;
  background: #f7f7f7;
  border-radius: 8px;
  overflow: hidden;
}
.product-img.tw-flash-img > a {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
}
/* 用 .product-img.tw-flash-img 雙類選擇器把特異性提到 0,3,1，壓過 style.css 中
   .single-products .product-img img 的 z-index:-1 / position:relative，避免圖片被父背景蓋住 */
.product-img.tw-flash-img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
.tw-flash-img .badge-corner {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 4px 10px;
  border-radius: 20px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  background: #1A8FA4;
}
.tw-flash-img .badge-corner.badge-new { background: #1A8FA4; }
.tw-flash-img .badge-discount {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 10px;
  border-radius: 20px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  background: linear-gradient(135deg, #ff6b35, #ff4d4f);
}

.tw-flash-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.tw-flash-body .tw-subtitle {
  font-size: 12px;
  color: #999;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
}
.tw-flash-body .tw-title {
  font-size: 15px;
  font-weight: 700;
  color: #222;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  margin: 0;
}
.tw-flash-body .tw-title:hover { color: #1A8FA4; }
.tw-flash-body .tw-title { cursor: pointer; }

.tw-flash-body .tw-price-row {
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
}
.tw-flash-body .tw-price-current {
  color: #ff4d4f;
  font-size: 28px;
  font-weight: 700;
}
.tw-flash-body .tw-price-original {
  color: #999;
  font-size: 14px;
  text-decoration: line-through;
}

.tw-flash-body .tw-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tw-flash-body .tw-badge {
  font-size: 12px;
  color: #1A8FA4;
  background: #e6f4f6;
  padding: 3px 10px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

.tw-flash-body .tw-evidence {
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 6px;
}
.tw-flash-body .tw-dot { color: #ccc; }
.tw-flash-body .tw-stock-ok { color: #52c41a; }

.tw-flash-timer {
  display: flex;
  gap: 8px;
  margin: 6px 0 4px;
}

.tw-btn-main.tw-btn-flash {
  background: linear-gradient(135deg, #ff6b35, #ff4d4f);
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  align-self: flex-start;
  letter-spacing: 1px;
  transition: opacity .2s ease;
}
.tw-btn-main.tw-btn-flash:hover {
  opacity: 0.9;
  color: #fff;
}

/* 移除 owl-carousel 內部商品卡的舊邊框（舊 .single-products 樣式會帶 border） */
:deep(.featured-product-slider .single-products),
:deep(.best-product-slider .single-products) {
  border: none !important;
  padding: 0 !important;
}

/* 商品分類左側標籤列表 */
.tw-category-tabs {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}
.tw-category-tabs li {
  padding: 14px 18px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  position: relative;
  transition: all .2s ease;
  display: flex;
  align-items: center;
}
.tw-category-tabs li:last-child {
  border-bottom: none;
}
.tw-category-tabs li:hover {
  background: #f7f9fa;
  color: #1A8FA4;
  padding-left: 22px;
}
.tw-category-tabs li.active {
  background: #1A8FA4;
  color: #fff;
  font-weight: 600;
}
.tw-category-tabs li.tw-tab-empty {
  cursor: default;
  color: #999;
}
.tw-category-tabs li.tw-tab-empty:hover {
  background: #fff;
  color: #999;
  padding-left: 18px;
}

/* 商品分類右側商品區：切換時鎖定當前高度，加載完成自適應 */
.tw-category-products {
  position: relative;
  transition: min-height .25s ease;
}
.tw-category-products.is-loading > .row,
.tw-category-products.is-loading > .empty-products {
  opacity: .35;
  pointer-events: none;
}
/* 首次加載（無舊內容）保底高度，撐住 loading 遮罩 */
.tw-category-products.is-loading:not([style*="min-height"]) {
  min-height: 240px;
}

.tw-loading-mask {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  background: rgba(255, 255, 255, 0.55);
  z-index: 5;
  border-radius: 8px;
}
.tw-loading-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid #e6f4f6;
  border-top-color: #1A8FA4;
  border-radius: 50%;
  animation: tw-spin .8s linear infinite;
}
.tw-loading-text {
  font-size: 13px;
  color: #1A8FA4;
  letter-spacing: 1px;
}
@keyframes tw-spin {
  to { transform: rotate(360deg); }
}

</style>
