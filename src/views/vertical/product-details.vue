<template>
  <div class="vertical-page">

    <VerticalHead />

    <!-- 麵包屑 -->
    <div class="page-title-area">
      <div class="container">
        <div class="page-title-content">
          <ul>
            <li><router-link to="/vertical/index">首頁</router-link></li>
            <li v-if="categoryFirst"><router-link to="/vertical/products">{{ categoryFirst }}</router-link></li>
            <li class="active">{{ product ? product.name : '商品詳情' }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 載入中 -->
    <div v-if="loading" class="pd-loading-wrap">
      <div class="pd-spinner"></div>
      <p class="pd-loading-text">載入商品資訊…</p>
    </div>

    <!-- 錯誤 -->
    <div v-else-if="errorMsg" class="pd-error-wrap">
      <i class="ri-error-warning-line"></i>
      <p>{{ errorMsg }}</p>
      <router-link to="/vertical/products" class="default-btn">返回商品列表</router-link>
    </div>

    <!-- 商品主體 -->
    <section v-else-if="detail" class="product-details-area ptb-54">
      <div class="container">

        <!-- 上方：圖片 + 資訊 -->
        <div class="row align-items-start pd-top-row">

          <!-- 左：圖片畫廊 -->
          <div class="col-lg-5 col-md-6">
            <div class="pd-gallery">
              <div class="pd-main-img-wrap" @click="openImagePreview">
                <!-- 有視頻資料 → 視頻播放器；否則 → 圖片 -->
                <video
                  v-if="videoFile && isActiveVideo"
                  :src="activeMediaItem.fileUrl"
                  controls
                  autoplay
                  class="pd-main-video"
                  preload="metadata"
                ></video>
                <img v-else :src="activeImg" :alt="product.name" class="pd-main-img" />
                <span v-if="product.sale >= 100" class="pd-badge-hot">熱銷</span>
                <div class="pd-zoom-hint"><i class="ri-zoom-in-line"></i> 點擊放大</div>
              </div>
              <!-- 縮圖條：有視頻資料則視頻排第一，後接圖片 -->
              <div v-if="allMediaItems.length > 1" class="pd-thumbs-row">
                <div
                  v-for="(item, i) in allMediaItems"
                  :key="item.id"
                  class="pd-thumb"
                  :class="{ active: activeImgIdx === i }"
                  @click="activeImgIdx = i"
                >
                  <div v-if="Number(item.fileType) === 1" class="pd-video-thumb">
                    <i class="ri-play-circle-fill"></i>
                    <span v-if="item.duration" class="pd-video-dur">{{ item.duration }}s</span>
                  </div>
                  <img v-else :src="item.fileUrl" :alt="`商品圖片 ${i + 1}`" />
                </div>
              </div>
            </div>
          </div>

          <!-- 右：商品資訊 -->
          <div class="col-lg-7 col-md-6">
            <div class="pd-info">

              <!-- 店鋪資訊 -->
              <div v-if="detail.shopName" class="pd-shop-row">
                <img v-if="detail.shopLogo" :src="detail.shopLogo" class="pd-shop-logo" alt="shop" />
                <span class="pd-shop-name">{{ detail.shopName }}</span>
                <span class="pd-shop-tag">官方直營</span>
              </div>

              <!-- 商品名稱 -->
              <h1 class="pd-name">{{ product.name }}</h1>
              <p v-if="product.subTitle" class="pd-subtitle">{{ product.subTitle }}</p>

              <!-- 評分 & 銷量 -->
              <div class="pd-meta-row">
                <template v-if="hasRating">
                  <div class="pd-star-row">
                    <i v-for="n in 5" :key="n" :class="starClass(n)"></i>
                    <span class="pd-avg-num">{{ detail.avgRating.toFixed(1) }}</span>
                  </div>
                  <span class="pd-meta-sep">|</span>
                  <span class="pd-rating-count">{{ detail.ratingCount }} 則評分</span>
                  <span class="pd-meta-sep">|</span>
                  <span class="pd-positive-rate">好評率 {{ detail.positiveRate.toFixed(1) }}%</span>
                </template>
                <span v-else class="pd-no-rating">尚無評分</span>
                <span class="pd-sale-count"><i class="ri-fire-line"></i> 已售 {{ product.sale || 0 }} 件</span>
              </div>

              <!-- 價格 -->
              <div class="pd-price-box">
                <div class="pd-price-label">價格</div>
                <div class="pd-price-values">
                  <span class="pd-price-current">NT$&nbsp;{{ formatPrice(currentPrice) }}</span>
                  <span v-if="currentOriginalPrice > currentPrice" class="pd-price-original">NT$&nbsp;{{ formatPrice(currentOriginalPrice) }}</span>
                  <span v-if="discountPct > 0" class="pd-discount-chip">{{ (10 - Math.round(discountPct / 10)) }} 折</span>
                </div>
              </div>

              <!-- SKU 選擇（多規格時顯示） -->
              <div v-if="skuList.length > 1" class="pd-sku-row">
                <div class="pd-field-label">規格</div>
                <div class="pd-sku-btns">
                  <button
                    v-for="sku in skuList"
                    :key="sku.id"
                    class="pd-sku-btn"
                    :class="{
                      active: selectedSkuId === sku.id,
                      disabled: sku.xtProductSkuPriceVo.stock <= 0
                    }"
                    @click="selectSku(sku)"
                  >
                    <img v-if="sku.picUrl" :src="sku.picUrl" class="pd-sku-thumb" :alt="sku.name" @click.stop="openSkuImagePreview(sku)" />
                    <span>{{ sku.name }}</span>
                    <span v-if="sku.xtProductSkuPriceVo.stock <= 0" class="pd-sku-out">缺貨</span>
                  </button>
                </div>
              </div>

              <!-- 庫存 -->
              <div class="pd-stock-row">
                <i :class="currentStock > 0 ? 'ri-checkbox-circle-fill' : 'ri-close-circle-fill'"
                   :style="{ color: currentStock > 0 ? '#27ae60' : '#d9362e' }"></i>
                <span :class="currentStock > 0 ? 'pd-stock-ok' : 'pd-stock-out'">
                  {{ currentStock > 0 ? `現貨（剩餘 ${currentStock} 件）` : '已售完' }}
                </span>
              </div>

              <!-- 數量 + 操作按鈕 -->
              <div class="pd-buy-section">
                <div class="pd-qty-wrap">
                  <span class="pd-field-label">數量</span>
                  <div class="pd-qty-ctrl">
                    <button class="pd-qty-btn" @click="qty > 1 && qty--">－</button>
                    <input
                      class="pd-qty-input"
                      type="number"
                      v-model.number="qty"
                      min="1"
                      :max="currentStock || 999"
                    />
                    <button class="pd-qty-btn" @click="qty < (currentStock || 999) && qty++">＋</button>
                  </div>
                </div>
                <div class="pd-action-btns">
                  <button class="pd-btn-collect" :class="{ collected: collected, loading: collectLoading }" @click="handleToggleCollect">
                    <i :class="collected ? 'ri-heart-fill' : 'ri-heart-line'"></i>
                    {{ collected ? '已收藏' : '加入收藏' }}
                  </button>
                  <button class="pd-btn-cart" @click.prevent="handleAddToCart">
                    <i class="ri-shopping-cart-line"></i>&nbsp;加入購物車
                  </button>
                  <router-link to="/vertical/checkout" class="pd-btn-buy">
                    立即購買
                  </router-link>
                </div>
              </div>

              <!-- 服務標籤 -->
              <div class="pd-trust-row">
                <div class="pd-trust-item"><i class="ri-truck-line"></i><span>全館免運</span></div>
                <div class="pd-trust-item"><i class="ri-shield-check-line"></i><span>品質保證</span></div>
                <div class="pd-trust-item"><i class="ri-refresh-line"></i><span>7 天退換</span></div>
                <div class="pd-trust-item"><i class="ri-lock-2-line"></i><span>安全支付</span></div>
              </div>

              <!-- 分享 -->
              <div class="pd-share-row">
                <span class="pd-share-label">分享：</span>
                <a href="javascript:;" class="pd-share-icon"><i class="ri-facebook-fill"></i></a>
                <a href="javascript:;" class="pd-share-icon"><i class="ri-instagram-line"></i></a>
                <a href="javascript:;" class="pd-share-icon"><i class="ri-line-fill"></i></a>
                <a href="javascript:;" class="pd-share-icon"><i class="ri-twitter-fill"></i></a>
              </div>

            </div>
          </div>
        </div>

        <!-- Tab 面板 -->
        <div class="pd-tabs-section">
          <div class="pd-tab-nav">
            <button
              v-for="(tab, i) in tabs"
              :key="i"
              class="pd-tab-btn"
              :class="{ active: activeTab === i }"
              @click="activeTab = i"
            >{{ tab }}</button>
          </div>

          <div class="pd-tab-body">

            <!-- 商品描述 -->
            <div v-show="activeTab === 0" class="pd-tab-pane">
              <div v-if="product.description" v-html="product.description" class="pd-desc-html"></div>
              <div v-else class="pd-empty-hint">
                <i class="ri-file-list-line"></i>
                <p>暫無商品描述</p>
              </div>
            </div>

            <!-- 評價 -->
            <div v-show="activeTab === 1" class="pd-tab-pane pd-rating-tab">
              <template v-if="hasRating">
                <div class="pd-rating-overview">
                  <div class="pd-score-block">
                    <div class="pd-score-big">{{ detail.avgRating.toFixed(1) }}</div>
                    <div class="pd-score-stars">
                      <i v-for="n in 5" :key="n" :class="starClass(n)"></i>
                    </div>
                    <div class="pd-score-sub">滿分 5 分</div>
                    <div class="pd-score-positive">好評率 {{ detail.positiveRate.toFixed(1) }}%</div>
                  </div>
                  <div class="pd-bars-block">
                    <div v-for="star in [5, 4, 3, 2, 1]" :key="star" class="pd-bar-row">
                      <span class="pd-bar-label">{{ star }} 星</span>
                      <div class="pd-bar-track">
                        <div
                          class="pd-bar-fill"
                          :style="{ width: barWidth(star) + '%' }"
                        ></div>
                      </div>
                      <span class="pd-bar-count">{{ detail['star' + star + 'Count'] || 0 }} 人</span>
                    </div>
                    <p class="pd-rating-total-note">共 {{ detail.ratingCount }} 則評分</p>
                  </div>
                </div>
              </template>
              <div v-else class="pd-no-rating-panel">
                <i class="ri-star-line"></i>
                <p>此商品尚無評分</p>
                <small>購買後可留下您的評分，幫助其他買家參考</small>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- 相關商品 -->
    <section v-if="!loading && !errorMsg && relatedProducts.length" class="best-seller-area pb-30">
      <div class="container">
        <div class="section-title"><h2>相關商品</h2></div>
        <div class="best-product-slider owl-carousel owl-theme">
          <div v-for="p in relatedProducts" :key="p.id">
            <ProductCard :product="p" variant="standard" fallback-img="/test/static/picture/product-1.jpg" />
          </div>
        </div>
      </div>
    </section>

    <VerticalSubscribe />
    <VerticalFoot />

    <!-- 圖片預覽 -->
    <teleport to="body">
      <transition name="tw-img-preview-fade">
        <div v-if="imagePreviewVisible" class="tw-img-preview-overlay" @click="closeImagePreview">
          <div class="tw-img-preview-content" @click.stop>
            <button class="tw-img-preview-close" @click="closeImagePreview">
              <i class="ri-close-fill"></i>
            </button>
            <button class="tw-img-preview-nav prev" @click.stop="previewPrev" v-if="previewImages.length > 1">
              <i class="ri-arrow-left-s-line"></i>
            </button>
            <button class="tw-img-preview-nav next" @click.stop="previewNext" v-if="previewImages.length > 1">
              <i class="ri-arrow-right-s-line"></i>
            </button>
            <img :src="previewCurrentImg" :alt="product ? product.name : '商品圖片'" class="tw-img-preview-img" />
            <div class="tw-img-preview-dots" v-if="previewImages.length > 1">
              <span
                v-for="(img, idx) in previewImages"
                :key="idx"
                :class="{ active: idx === previewIndex }"
                @click.stop="previewIndex = idx"
              ></span>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
import VerticalHead from './components/head.vue'
import VerticalFoot from './components/foot.vue'
import VerticalSubscribe from './components/subscribe.vue'
import ProductCard from '@c/ProductCard'
import verticalMixin from '@/mixins/vertical'
import { frontGetProductByIdNoLogin, frontListNoLogin } from '@/api/product/purchase'
import { collectProduct } from '@/api/product/productUserCollect'
import { getToken } from '@/utils/auth'
import eventBus from '@/utils/eventBus'

const FALLBACK = '/test/static/picture/product-1.jpg'
const RELATED_CAROUSEL_CFG = {
  loop: true, margin: 24, nav: true, dots: false, autoplay: true,
  smartSpeed: 1000, autoplayHoverPause: true,
  navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
  responsive: { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } }
}

export default {
  name: 'ProductDetails',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe, ProductCard },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'makura - 商品詳情'
  },
  data() {
    return {
      loading: true,
      errorMsg: '',
      detail: null,
      activeImgIdx: 0,
      selectedSkuId: null,
      qty: 1,
      activeTab: 0,
      tabs: ['商品描述', '評價'],
      relatedProducts: [],
      collected: false,
      collectLoading: false,
      // 圖片預覽
      imagePreviewVisible: false,
      previewIndex: 0
    }
  },
  computed: {
    product() {
      return this.detail && this.detail.xtProductVo
    },
    videoFile() {
      if (!this.detail || !this.detail.videoInfo) return null
      const v = this.detail.videoInfo
      // 必須有真實的 fileUrl 才算有視頻數據
      if (!v.fileUrl) return null
      // 後端商品詳情接口已單獨返回 videoInfo 欄位，這裡統一適配舊代碼期望的字段結構
      return {
        id: v.id,
        fileId: v.fileId,
        fileName: v.fileName,
        fileUrl: v.fileUrl,
        duration: v.duration,
        fileType: 1,
        isMainImage: 0,
        sortOrder: 0,
      }
    },
    galleryImages() {
      if (!this.detail) return []
      return (this.detail.xtProductFileVos || [])
        .filter(f => Number(f.fileType) === 0)
        .sort((a, b) => Number(a.sortOrder) - Number(b.sortOrder))
    },
    // 淘宝式：视频（若存在）排第一，后面跟图片
    allMediaItems() {
      return [...(this.videoFile ? [this.videoFile] : []), ...this.galleryImages]
    },
    activeMediaItem() {
      return this.allMediaItems[this.activeImgIdx] || this.allMediaItems[0] || null
    },
    isActiveVideo() {
      return !!this.activeMediaItem && Number(this.activeMediaItem.fileType) === 1
    },
    activeImg() {
      return this.activeMediaItem ? this.activeMediaItem.fileUrl || FALLBACK : FALLBACK
    },
    skuList() {
      return (this.detail && this.detail.xtProductSkuVos) || []
    },
    selectedSku() {
      if (!this.selectedSkuId) return this.skuList[0] || null
      return this.skuList.find(s => s.id === this.selectedSkuId) || this.skuList[0] || null
    },
    currentPrice() {
      return this.selectedSku ? Number(this.selectedSku.xtProductSkuPriceVo.price) : 0
    },
    currentOriginalPrice() {
      return this.selectedSku ? Number(this.selectedSku.xtProductSkuPriceVo.beforeDiscountPrice) : 0
    },
    currentStock() {
      return this.selectedSku ? Number(this.selectedSku.xtProductSkuPriceVo.stock) : 0
    },
    discountPct() {
      if (!this.currentOriginalPrice || this.currentOriginalPrice <= this.currentPrice) return 0
      return Math.round((this.currentOriginalPrice - this.currentPrice) / this.currentOriginalPrice * 100)
    },
    hasRating() {
      return this.detail && this.detail.ratingCount !== null && Number(this.detail.ratingCount) > 0
    },
    categoryFirst() {
      if (!this.product || !this.product.categoryPath) return ''
      return this.product.categoryPath.split('/')[0] || ''
    },
    // 圖片預覽用的圖片列表（包含 SKU 圖片）
    previewImages() {
      const images = [...this.allMediaItems.filter(item => Number(item.fileType) === 0)]
      this.skuList.forEach(sku => {
        if (sku.picUrl && !images.find(img => img.fileUrl === sku.picUrl)) {
          images.push({ id: 'sku-' + sku.id, fileUrl: sku.picUrl })
        }
      })
      return images
    },
    previewCurrentImg() {
      const images = this.previewImages
      if (images.length === 0) return ''
      return images[this.previewIndex] ? images[this.previewIndex].fileUrl : ''
    }
  },
  watch: {
    '$route.query.id'(newId) {
      if (newId) {
        this.resetState()
        this.loadProduct(newId)
      }
    }
  },
  created() {
    const id = this.$route.query.id
    if (id) {
      this.loadProduct(id)
    } else {
      this.loading = false
      this.errorMsg = '商品 ID 不存在，請從商品列表進入'
    }
  },
  methods: {
    resetState() {
      this.detail = null
      this.activeImgIdx = 0
      this.selectedSkuId = null
      this.qty = 1
      this.activeTab = 0
      this.relatedProducts = []
      this.errorMsg = ''
      this.collected = false
      this.collectLoading = false
    },
    async loadProduct(id) {
      this.loading = true
      try {
        const res = await frontGetProductByIdNoLogin(id)
        if (res && res.code === 200 && res.data) {
          this.detail = res.data
          const skus = this.detail.xtProductSkuVos || []
          if (skus.length) this.selectedSkuId = skus[0].id
          this.loadRelated()
        } else {
          this.errorMsg = (res && res.msg) || '商品不存在或已下架'
        }
      } catch (e) {
        this.errorMsg = '載入商品失敗，請稍後再試'
      } finally {
        this.loading = false
        this.$nextTick(() => requestAnimationFrame(() => this.initRelatedCarousel()))
      }
    },
    async loadRelated() {
      try {
        const catId = this.product && this.product.productCategoryId
        const res = await frontListNoLogin({ pageNum: 1, pageSize: 8, productCategoryId: catId || undefined })
        const list = (res && (res.rows || res.data)) || []
        const curId = this.$route.query.id
        this.relatedProducts = list.filter(p => String(p.id) !== String(curId))
      } catch (e) {
        this.relatedProducts = []
      }
      this.$nextTick(() => requestAnimationFrame(() => this.initRelatedCarousel()))
    },
    selectSku(sku) {
      this.selectedSkuId = sku.id
      this.qty = 1
      if (sku.picUrl) {
        const idx = this.allMediaItems.findIndex(item => item.fileUrl === sku.picUrl)
        if (idx >= 0) this.activeImgIdx = idx
      }
    },
    openImagePreview() {
      this.previewIndex = this.activeImgIdx
      this.imagePreviewVisible = true
      document.body.style.overflow = 'hidden'
    },
    openSkuImagePreview(sku) {
      if (!sku.picUrl) return
      const images = this.previewImages
      const idx = images.findIndex(item => item.fileUrl === sku.picUrl)
      this.previewIndex = idx >= 0 ? idx : 0
      this.imagePreviewVisible = true
      document.body.style.overflow = 'hidden'
    },
    closeImagePreview() {
      this.imagePreviewVisible = false
      document.body.style.overflow = ''
    },
    previewPrev() {
      if (this.previewIndex > 0) {
        this.previewIndex--
      } else {
        this.previewIndex = this.allMediaItems.length - 1
      }
    },
    previewNext() {
      if (this.previewIndex < this.allMediaItems.length - 1) {
        this.previewIndex++
      } else {
        this.previewIndex = 0
      }
    },
    starClass(n) {
      const avg = Number(this.detail ? this.detail.avgRating : 0)
      if (n <= Math.floor(avg)) return 'ri-star-fill pd-star-gold'
      if (n - 0.5 <= avg) return 'ri-star-half-fill pd-star-gold'
      return 'ri-star-line pd-star-empty'
    },
    barWidth(star) {
      const total = Number(this.detail && this.detail.ratingCount)
      if (!total) return 0
      return Math.round((Number(this.detail['star' + star + 'Count']) || 0) / total * 100)
    },
    formatPrice(v) {
      return (Number(v) || 0).toLocaleString('zh-TW', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    },
    handleToggleCollect() {
      if (!getToken()) {
        this.$router.push('/vertical/login').catch(() => {})
        return
      }
      if (this.collectLoading) return
      this.collectLoading = true
      const isCollect = !this.collected
      collectProduct({ isCollect, productIds: this.product.id })
        .then(() => {
          this.collected = isCollect
          this.$message.success(isCollect ? '已成功收藏商品' : '已取消收藏')
        })
        .catch(() => {})
        .finally(() => {
          this.collectLoading = false
        })
    },

    handleAddToCart() {
      if (!getToken()) {
        this.$router.push('/vertical/login').catch(() => {})
        return
      }
      eventBus.$emit('open-add-to-cart', { productId: this.product.id })
    },
    initRelatedCarousel(retry = 0) {
      if (typeof jQuery === 'undefined' || !jQuery.fn.owlCarousel) {
        if (retry < 100) setTimeout(() => this.initRelatedCarousel(retry + 1), 100)
        return
      }
      const $ = jQuery
      const $el = $('.best-product-slider')
      if (!$el.length) return
      try {
        if ($el.data('owl.carousel')) $el.trigger('destroy.owl.carousel').removeClass('owl-loaded')
        if (!$el.hasClass('owl-carousel')) $el.addClass('owl-carousel')
        $el.owlCarousel(RELATED_CAROUSEL_CFG)
      } catch (e) {}
    }
  }
}
</script>

<style>
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
/* ===== 基礎 ===== */
.vertical-page { width: 100%; }
.vertical-page :deep(*) { box-sizing: border-box; }
.vertical-page :deep(.container) { width: 100%; max-width: 1320px; margin: 0 auto; padding: 0 12px; }
.vertical-page :deep(.row) { display: flex; flex-wrap: wrap; margin: 0 -12px; }
.vertical-page :deep([class*="col-"]) { padding: 0 12px; }

/* ===== 載入 / 錯誤 ===== */
.pd-loading-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  gap: 16px;
}
.pd-spinner {
  width: 44px;
  height: 44px;
  border: 4px solid #e6f4f6;
  border-top-color: #1A8FA4;
  border-radius: 50%;
  animation: pd-spin .8s linear infinite;
}
@keyframes pd-spin { to { transform: rotate(360deg); } }
.pd-loading-text { color: #1A8FA4; font-size: 14px; letter-spacing: 1px; }

.pd-error-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  gap: 12px;
  color: #999;
}
.pd-error-wrap i { font-size: 48px; color: #d9362e; }
.pd-error-wrap p { font-size: 16px; color: #555; }

/* ===== 頁面頂部行 ===== */
.pd-top-row { padding-bottom: 48px; }

/* ===== 圖片畫廊 ===== */
.pd-gallery { position: sticky; top: 20px; }

.pd-main-img-wrap {
  position: relative;
  width: 100%;
  padding-top: 100%;
  background: #f7f8fa;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eee;
}
.pd-main-img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: contain;
  transition: transform .35s ease;
}
.pd-main-img-wrap:hover .pd-main-img { transform: scale(1.04); }

.pd-badge-discount {
  position: absolute;
  top: 14px; right: 14px;
  background: #d9362e;
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  z-index: 2;
}
.pd-badge-hot {
  position: absolute;
  top: 14px; left: 14px;
  background: #ff6b35;
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  z-index: 2;
}

/* 視頻播放器（主展示區） */
.pd-main-video {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: contain;
  background: #000;
  border-radius: 12px;
}

/* 視頻縮圖 */
.pd-video-thumb {
  width: 100%;
  height: 100%;
  background: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 6px;
}
.pd-video-thumb i {
  font-size: 26px;
  color: rgba(255, 255, 255, 0.9);
}
.pd-video-dur {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
}
/* 視頻縮圖選中態：沿用 .pd-thumb.active 的青色邊框 */

.pd-thumbs-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}
.pd-thumb {
  width: 70px;
  height: 70px;
  border: 2px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background: #f7f8fa;
  transition: border-color .2s ease;
  flex-shrink: 0;
}
.pd-thumb img { width: 100%; height: 100%; object-fit: cover; }
.pd-thumb.active { border-color: #1A8FA4; }
.pd-thumb:hover { border-color: #1A8FA4; }

/* ===== 商品資訊面板 ===== */
.pd-info { display: flex; flex-direction: column; gap: 18px; }

.pd-shop-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: #f0f8fa;
  border-radius: 8px;
  border-left: 3px solid #1A8FA4;
}
.pd-shop-logo {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #ddd;
}
.pd-shop-name { font-size: 13px; font-weight: 700; color: #333; }
.pd-shop-tag {
  font-size: 11px;
  color: #1A8FA4;
  background: #d7eef2;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 600;
  margin-left: auto;
}

.pd-name {
  font-size: 22px;
  font-weight: 800;
  color: #111;
  line-height: 1.4;
  margin: 0;
  letter-spacing: 0.3px;
}
.pd-subtitle {
  font-size: 14px;
  color: #888;
  margin: 0;
  line-height: 1.5;
}

/* 評分行 */
.pd-meta-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13px;
  color: #666;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
}
.pd-star-row { display: flex; align-items: center; gap: 3px; }
.pd-star-gold { color: #f5a623; font-size: 15px; }
.pd-star-empty { color: #ddd; font-size: 15px; }
.pd-avg-num { font-size: 14px; font-weight: 700; color: #f5a623; margin-left: 4px; }
.pd-meta-sep { color: #ddd; }
.pd-rating-count { color: #1A8FA4; font-weight: 600; }
.pd-positive-rate { color: #27ae60; font-weight: 600; }
.pd-no-rating { color: #aaa; font-size: 13px; }
.pd-sale-count {
  margin-left: auto;
  color: #ff6b35;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 3px;
}

/* 價格區塊 */
.pd-price-box {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #fef9f0;
  border-radius: 10px;
  padding: 16px 20px;
  border: 1px solid #f5e6c8;
}
.pd-price-label {
  font-size: 13px;
  color: #888;
  white-space: nowrap;
  min-width: 32px;
}
.pd-price-values { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
.pd-price-current {
  font-size: 32px;
  font-weight: 800;
  color: #d9362e;
  letter-spacing: -1px;
  line-height: 1;
}
.pd-price-original {
  font-size: 15px;
  color: #aaa;
  text-decoration: line-through;
}
.pd-discount-chip {
  font-size: 13px;
  background: #d9362e;
  color: #fff;
  padding: 3px 10px;
  border-radius: 4px;
  font-weight: 700;
}

/* SKU 選擇 */
.pd-sku-row { display: flex; align-items: flex-start; gap: 12px; }
.pd-field-label {
  font-size: 13px;
  color: #888;
  white-space: nowrap;
  min-width: 32px;
  padding-top: 6px;
}
.pd-sku-btns { display: flex; flex-wrap: wrap; gap: 8px; }
.pd-sku-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fff;
  font-size: 13px;
  color: #333;
  cursor: pointer;
  transition: all .2s ease;
  position: relative;
}
.pd-sku-btn:hover { border-color: #1A8FA4; color: #1A8FA4; }
.pd-sku-btn.active { border-color: #1A8FA4; background: #e8f5f7; color: #1A8FA4; font-weight: 700; }
.pd-sku-btn.disabled { opacity: 0.5; cursor: not-allowed; }
.pd-sku-thumb {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  object-fit: cover;
  border: 1px solid #eee;
  cursor: zoom-in;
}
.pd-sku-thumb:hover {
  border-color: #1A8FA4;
  box-shadow: 0 2px 8px rgba(26, 143, 164, 0.3);
}
.pd-sku-out {
  font-size: 10px;
  background: #999;
  color: #fff;
  padding: 1px 5px;
  border-radius: 3px;
}

/* 庫存 */
.pd-stock-row { display: flex; align-items: center; gap: 6px; font-size: 13px; }
.pd-stock-ok { color: #27ae60; font-weight: 600; }
.pd-stock-out { color: #d9362e; font-weight: 600; }

/* 數量 + 購買 */
.pd-buy-section { display: flex; flex-direction: column; gap: 14px; }
.pd-qty-wrap { display: flex; align-items: center; gap: 12px; }
.pd-qty-ctrl {
  display: inline-flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
}
.pd-qty-btn {
  width: 36px;
  height: 36px;
  border: none;
  background: #f5f5f5;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background .15s;
  flex-shrink: 0;
}
.pd-qty-btn:hover { background: #e8f5f7; color: #1A8FA4; }
.pd-qty-input {
  width: 56px;
  height: 36px;
  border: none;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: #333;
  outline: none;
  appearance: textfield;
}
.pd-qty-input::-webkit-outer-spin-button,
.pd-qty-input::-webkit-inner-spin-button { -webkit-appearance: none; }

.pd-action-btns { display: flex; gap: 12px; }
.pd-btn-cart {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 13px 24px;
  border: 2px solid #1A8FA4;
  border-radius: 8px;
  color: #1A8FA4;
  background: #fff;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  transition: all .2s ease;
  white-space: nowrap;
}
.pd-btn-cart:hover { background: #1A8FA4; color: #fff; }
.pd-btn-collect {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 13px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  color: #555;
  background: #fff;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all .2s ease;
  white-space: nowrap;
  cursor: pointer;
}
.pd-btn-collect:hover {
  border-color: #e74c3c;
  color: #e74c3c;
  background: #fff5f5;
}
.pd-btn-collect.collected {
  border-color: #e74c3c;
  color: #e74c3c;
  background: #fff5f5;
}
.pd-btn-collect.collected i { color: #e74c3c; }
.pd-btn-collect.loading { opacity: 0.6; pointer-events: none; }
.pd-btn-buy {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 24px;
  background: #1A8FA4;
  color: #fff;
  border: 2px solid #1A8FA4;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  transition: all .2s ease;
  white-space: nowrap;
}
.pd-btn-buy:hover { background: #157285; border-color: #157285; color: #fff; }

/* 服務標籤 */
.pd-trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 14px 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
}
.pd-trust-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #555;
  background: #f7f9fa;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid #eee;
}
.pd-trust-item i { color: #1A8FA4; font-size: 14px; }

/* 分享 */
.pd-share-row { display: flex; align-items: center; gap: 10px; }
.pd-share-label { font-size: 13px; color: #888; }
.pd-share-icon {
  width: 34px;
  height: 34px;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-size: 16px;
  transition: all .2s ease;
}
.pd-share-icon:hover { background: #1A8FA4; border-color: #1A8FA4; color: #fff; }

/* ===== Tab 面板 ===== */
.pd-tabs-section {
  margin-top: 48px;
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
}
.pd-tab-nav {
  display: flex;
  background: #f7f9fa;
  border-bottom: 1px solid #eee;
}
.pd-tab-btn {
  padding: 16px 28px;
  border: none;
  background: transparent;
  font-size: 15px;
  color: #666;
  cursor: pointer;
  font-weight: 600;
  border-bottom: 3px solid transparent;
  transition: all .2s ease;
  letter-spacing: 0.5px;
}
.pd-tab-btn:hover { color: #1A8FA4; }
.pd-tab-btn.active {
  color: #1A8FA4;
  border-bottom-color: #1A8FA4;
  background: #fff;
}
.pd-tab-body { background: #fff; }
.pd-tab-pane { padding: 32px; }

/* 商品描述 HTML */
.pd-desc-html :deep(img) {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 8px auto;
  border-radius: 6px;
}
.pd-desc-html :deep(p) { line-height: 1.8; color: #444; margin-bottom: 12px; }
.pd-desc-html :deep(h3) { font-size: 18px; font-weight: 700; color: #222; margin: 24px 0 12px; }
.pd-desc-html :deep(ul) { padding-left: 20px; color: #555; line-height: 1.9; }

.pd-empty-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  color: #aaa;
  gap: 10px;
}
.pd-empty-hint i { font-size: 40px; }
.pd-empty-hint p { font-size: 15px; }

/* 評價 Tab */
.pd-rating-tab { min-height: 220px; }
.pd-rating-overview {
  display: flex;
  gap: 48px;
  align-items: flex-start;
  flex-wrap: wrap;
}
.pd-score-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  min-width: 120px;
}
.pd-score-big {
  font-size: 56px;
  font-weight: 900;
  color: #f5a623;
  line-height: 1;
  letter-spacing: -2px;
}
.pd-score-stars { display: flex; gap: 3px; }
.pd-score-stars .pd-star-gold { font-size: 18px; color: #f5a623; }
.pd-score-stars .pd-star-empty { font-size: 18px; color: #ddd; }
.pd-score-sub { font-size: 12px; color: #aaa; }
.pd-score-positive { font-size: 13px; color: #27ae60; font-weight: 700; margin-top: 4px; }

.pd-bars-block { flex: 1; min-width: 240px; }
.pd-bar-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.pd-bar-label { font-size: 13px; color: #888; width: 34px; flex-shrink: 0; }
.pd-bar-track {
  flex: 1;
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
}
.pd-bar-fill {
  height: 100%;
  background: #f5a623;
  border-radius: 4px;
  transition: width .4s ease;
}
.pd-bar-count { font-size: 12px; color: #aaa; width: 30px; text-align: right; flex-shrink: 0; }
.pd-rating-total-note { font-size: 12px; color: #aaa; margin-top: 8px; }

.pd-no-rating-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  gap: 10px;
  color: #aaa;
}
.pd-no-rating-panel i { font-size: 48px; color: #f5a623; opacity: 0.4; }
.pd-no-rating-panel p { font-size: 16px; color: #555; font-weight: 600; margin: 0; }
.pd-no-rating-panel small { font-size: 13px; color: #aaa; }

/* ===== 相關商品 ===== */
:deep(.best-product-slider .tw-product-card) {
  border: none !important;
}

/* ===== RWD ===== */
@media (max-width: 767px) {
  .pd-top-row { flex-direction: column; }
  .col-lg-5, .col-lg-7 { width: 100%; padding: 0 12px; }
  .pd-gallery { position: static; margin-bottom: 24px; }
  .pd-price-current { font-size: 26px; }
  .pd-action-btns { flex-direction: column; }
  .pd-btn-cart, .pd-btn-buy { flex: unset; width: 100%; }
  .pd-rating-overview { flex-direction: column; gap: 24px; }
  .pd-tab-pane { padding: 20px; }
}

/* ===== 圖片放大提示 ===== */
.pd-zoom-hint {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
}
.pd-main-img-wrap:hover .pd-zoom-hint {
  opacity: 1;
}

/* ===== 圖片預覽 ===== */
.tw-img-preview-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tw-img-preview-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}
.tw-img-preview-img {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 8px;
}
.tw-img-preview-close {
  position: absolute;
  top: -44px;
  right: 0;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tw-img-preview-close:hover {
  background: rgba(255, 255, 255, 0.25);
}
.tw-img-preview-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: #fff;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tw-img-preview-nav:hover {
  background: rgba(255, 255, 255, 0.25);
}
.tw-img-preview-nav.prev { left: -60px; }
.tw-img-preview-nav.next { right: -60px; }
.tw-img-preview-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}
.tw-img-preview-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
}
.tw-img-preview-dots span.active {
  background: #fff;
}
.tw-img-preview-fade-enter-active,
.tw-img-preview-fade-leave-active {
  transition: opacity 0.25s ease;
}
.tw-img-preview-fade-enter,
.tw-img-preview-fade-leave-to {
  opacity: 0;
}
@media (max-width: 767px) {
  .tw-img-preview-nav { display: none; }
  .tw-img-preview-img { max-width: 95vw; max-height: 70vh; }
}
</style>
