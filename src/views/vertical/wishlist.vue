<template>
  <div class="vertical-page">

    <VerticalHead />


    <!-- 願望清單主體 -->
    <div class="tw-wishlist-body">
      <div class="container">

        <!-- 載入中 -->
        <div v-if="loading" class="tw-wishlist-loading">
          <div class="tw-loading-ring"></div>
          <p>載入收藏商品中…</p>
        </div>

        <!-- 搜尋無結果（優先判斷，覆蓋 isEmpty） -->
        <div v-if="isNoResults" class="tw-wishlist-no-results">
          <div class="tw-no-results-visual">
            <div class="tw-no-results-circle">
              <i class="ri-search-line"></i>
            </div>
          </div>
          <h3>找不到符合「{{ searchKeyword }}」的商品</h3>
          <p>換個關鍵字試試，或許有其他驚喜等著你。</p>
          <button class="tw-empty-btn" @click="queryParams.productName = ''; handleSearch()">
            <i class="ri-arrow-go-back-line"></i>
            清除搜尋
          </button>
        </div>

        <!-- 空狀態（從未收藏） -->
        <div v-else-if="isEmpty" class="tw-wishlist-empty">
          <div class="tw-empty-visual">
            <div class="tw-empty-circle">
              <i class="ri-heart-line"></i>
            </div>
            <div class="tw-empty-rays">
              <span v-for="n in 6" :key="n"></span>
            </div>
          </div>
          <h3>還沒有收藏任何商品</h3>
          <p>開始探索優質工具，把喜歡的收藏起來吧！</p>
          <router-link to="/vertical/products" class="tw-empty-btn">
            <i class="ri-shopping-bag-line"></i>
            前往商品列表
          </router-link>
        </div>

        <!-- 收藏商品列表 -->
        <template v-else>

          <!-- 工具列 -->
          <div class="tw-wishlist-toolbar">
            <div class="tw-toolbar-left">
              <div class="tw-search-box">
                <i class="ri-search-line tw-search-icon"></i>
                <input
                  v-model="queryParams.productName"
                  type="text"
                  placeholder="搜尋收藏商品..."
                  class="tw-search-input"
                  @keyup.enter="handleSearch"
                />
                <button v-if="queryParams.productName" class="tw-search-clear" @click="queryParams.productName = ''; handleSearch()">
                  <i class="ri-close-line"></i>
                </button>
                <button class="tw-search-btn" @click="handleSearch">搜尋</button>
              </div>
            </div>
            <div class="tw-toolbar-right">
              <span class="tw-count-badge">
                <i class="ri-heart-fill"></i>
                共 <strong>{{ total }}</strong> 件收藏商品
              </span>
              <button
                class="tw-batch-btn"
                :disabled="checkedCount === 0"
                @click="handleBatchRemove"
              >
                <i class="ri-delete-bin-line"></i>
                批次移除 <span v-if="checkedCount > 0">({{ checkedCount }})</span>
              </button>
            </div>
          </div>

          <!-- 全選工具列 -->
          <div class="tw-select-bar">
            <label class="tw-check-all" :class="{ 'is-checked': allChecked }">
              <input
                type="checkbox"
                :checked="allChecked"
                @change="handleCheckAll($event)"
              />
              <span class="tw-check-mark">
                <i class="ri-check-line"></i>
              </span>
              <span class="tw-check-label">全選</span>
            </label>
            <span class="tw-selected-hint" v-if="checkedCount > 0">
              已選取 {{ checkedCount }} 件商品
            </span>
          </div>

          <!-- 商品卡片列表 -->
          <div class="tw-wishlist-grid">
            <div
              v-for="item in collectList"
              :key="item.productId"
              class="tw-wish-card"
              :class="{
                'is-checked': isChecked(item.productId),
                'is-invalid': isInvalid(item)
              }"
            >
              <!-- 勾選 -->
              <label class="tw-card-check">
                <input
                  type="checkbox"
                  :checked="isChecked(item.productId)"
                  @change="toggleCheck(item.productId)"
                />
                <span class="tw-card-check-mark">
                  <i class="ri-check-line"></i>
                </span>
              </label>

              <!-- 刪除按鈕 -->
              <button class="tw-card-delete" @click="handleRemove(item.productId)" title="移除收藏">
                <i class="ri-close-fill"></i>
              </button>

              <!-- 圖片 -->
              <router-link :to="getProductLink(item)" class="tw-card-img">
                <img
                  :src="item.mainImageUrl || '/test/static/picture/product-1.jpg'"
                  :alt="item.productName"
                  @error="handleImgError($event)"
                />
                <span v-if="isInvalid(item)" class="tw-card-badge-offline">已下架</span>
              </router-link>

              <!-- 資訊 -->
              <div class="tw-card-info">
                <router-link :to="getProductLink(item)" class="tw-card-name">
                  {{ item.productName || '已下架商品' }}
                </router-link>

                <div class="tw-card-meta">
                  <span class="tw-card-price">NT$ {{ formatPrice(item.price) }}</span>
                  <span v-if="item.originalPrice && item.originalPrice > item.price" class="tw-card-original">
                    NT$ {{ formatPrice(item.originalPrice) }}
                  </span>
                </div>

                <div class="tw-card-evidence" v-if="!isInvalid(item)">
                  <span v-if="item.sale != null"><i class="ri-flashlight-line"></i> 已售 {{ item.sale }} 件</span>
                  <span v-if="item.stock != null && item.stock > 0"><i class="ri-checkbox-circle-line"></i> 庫存 {{ item.stock }} 件</span>
                </div>
              </div>

              <!-- 操作 -->
              <div class="tw-card-actions">
                <router-link
                  v-if="!isInvalid(item)"
                  :to="getProductLink(item)"
                  class="tw-btn-buy"
                >
                  <i class="ri-shopping-cart-line"></i>
                  馬上購買
                </router-link>
                <span v-else class="tw-btn-disabled">已下架</span>
              </div>
            </div>
          </div>

          <!-- 分頁 -->
          <div v-if="total > queryParams.pageSize" class="tw-wishlist-pagination">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="parseInt(total)"
              :page-size="queryParams.pageSize"
              :current-page="queryParams.pageNum"
              @current-change="handlePageChange"
            />
          </div>

        </template>

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
import { getProductUserCollectList, collectProduct } from '@/api/product/productUserCollect'

export default {
  name: 'Wishlist',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'makura - 願望清單'
  },
  data() {
    return {
      loading: false,
      total: 0,
      collectList: [],
      checkedIds: new Set(),
      queryParams: {
        pageNum: 1,
        pageSize: 20,
        productName: ''
      },
      searchKeyword: ''
    }
  },
  computed: {
    isEmpty() {
      return !this.loading && this.collectList.length === 0
    },
    isNoResults() {
      return !this.loading && this.collectList.length === 0 && this.searchKeyword.trim() !== ''
    },
    allChecked() {
      if (this.collectList.length === 0) return false
      return this.collectList
        .filter(item => !this.isInvalid(item))
        .every(item => this.checkedIds.has(item.productId))
    },
    checkedCount() {
      return this.checkedIds.size
    }
  },
  created() {
    this.fetchCollectList()
  },
  methods: {
    fetchCollectList() {
      this.loading = true
      this.searchKeyword = this.queryParams.productName.trim()
      getProductUserCollectList(this.queryParams).then(response => {
        this.collectList = response.rows || []
        this.total = response.total || 0
        this.checkedIds.clear()
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },

    handleSearch() {
      this.queryParams.pageNum = 1
      this.checkedIds.clear()
      this.fetchCollectList()
    },

    handlePageChange(page) {
      this.queryParams.pageNum = page
      this.checkedIds.clear()
      this.fetchCollectList()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },

    handleCheckAll(event) {
      if (event.target.checked) {
        this.collectList.forEach(item => {
          if (!this.isInvalid(item)) {
            this.checkedIds.add(item.productId)
          }
        })
      } else {
        this.checkedIds.clear()
      }
      this.checkedIds = new Set(this.checkedIds)
    },

    isChecked(productId) {
      return this.checkedIds.has(productId)
    },

    toggleCheck(productId) {
      if (this.checkedIds.has(productId)) {
        this.checkedIds.delete(productId)
      } else {
        this.checkedIds.add(productId)
      }
      this.checkedIds = new Set(this.checkedIds)
    },

    isInvalid(item) {
      return (
        item.isProductId == null ||
        item.freezeStatus === 1 ||
        item.publishStatus === 0
      )
    },

    getProductLink(item) {
      if (this.isInvalid(item)) return '#'
      return `/vertical/product-details?id=${item.productId}`
    },

    handleRemove(productId) {
      this.$confirm('確認要移除此商品嗎？', '提示', {
        confirmButtonText: '確認移除',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'tw-wishlist-confirm'
      }).then(() => {
        const formData = { isCollect: false, productIds: productId }
        collectProduct(formData).then(() => {
          this.$message({ message: '已從收藏移除', type: 'success' })
          this.checkedIds.delete(productId)
          this.checkedIds = new Set(this.checkedIds)
          this.fetchCollectList()
        })
      }).catch(() => {})
    },

    handleBatchRemove() {
      if (this.checkedCount === 0) return
      this.$confirm(`確認要移除選中的 ${this.checkedCount} 件商品嗎？`, '提示', {
        confirmButtonText: '確認移除',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'tw-wishlist-confirm'
      }).then(() => {
        const productIds = Array.from(this.checkedIds).join(',')
        const formData = { isCollect: false, productIds }
        collectProduct(formData).then(() => {
          this.$message({ message: '批次移除成功', type: 'success' })
          this.checkedIds.clear()
          this.checkedIds = new Set(this.checkedIds)
          this.fetchCollectList()
        })
      }).catch(() => {})
    },

    formatPrice(price) {
      if (price == null) return '0'
      return Number(price).toLocaleString('zh-TW', { minimumFractionDigits: 0 })
    },

    handleImgError(event) {
      event.target.src = '/test/static/picture/product-1.jpg'
    }
  }
}
</script>

<style>
/* 第三方库全局样式 */
@import '/test/static/css/bootstrap.min.css';
@import '/test/static/css/owl.theme.default.min.css';
@import '/test/static/css/owl.carousel.min.css';
@import '/test/static/css/remixicon.css';
@import '/test/static/css/meanmenu.min.css';
@import '/test/static/css/animate.min.css';
@import '/test/static/css/style.css';
@import '/test/static/css/responsive.css';

/* Element UI 分頁主題 */
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #1A8FA4 !important;
  color: #fff !important;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #1A8FA4 !important;
}

/* Element UI Message 全域改色 */
.tw-wishlist-confirm .el-message-box__headerbtn .el-message-box__close {
  color: #666;
}
.tw-wishlist-confirm .el-button--primary {
  background-color: #1A8FA4 !important;
  border-color: #1A8FA4 !important;
}
.tw-wishlist-confirm .el-button--primary:hover {
  background-color: #157285 !important;
  border-color: #157285 !important;
}
</style>

<style scoped>
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

/* ─── Hero 區 ─── */
.tw-wishlist-hero {
  background: linear-gradient(135deg, #0f7a8a 0%, #1A8FA4 50%, #25b5cc 100%);
  padding: 48px 0 44px;
  position: relative;
  overflow: hidden;
}

.tw-wishlist-hero::before {
  content: '';
  position: absolute;
  top: -40px;
  right: -60px;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
}

.tw-wishlist-hero::after {
  content: '';
  position: absolute;
  bottom: -30px;
  left: 10%;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
}

.tw-hero-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;
  z-index: 1;
}

.tw-hero-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  backdrop-filter: blur(8px);
}

.tw-hero-icon i {
  font-size: 34px;
  color: #fff;
}

.tw-hero-text h1 {
  font-size: 28px;
  font-weight: 800;
  color: #fff;
  margin: 0 0 4px;
  letter-spacing: 1px;
}

.tw-hero-text p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
}

/* ─── 主體 ─── */
.tw-wishlist-body {
  padding: 40px 0 80px;
  min-height: 480px;
}

/* ─── 載入中 ─── */
.tw-wishlist-loading {
  text-align: center;
  padding: 80px 20px;
}

.tw-loading-ring {
  width: 48px;
  height: 48px;
  border: 3px solid rgba(26, 143, 164, 0.12);
  border-top-color: #1A8FA4;
  border-radius: 50%;
  margin: 0 auto 16px;
  animation: tw-spin 0.8s linear infinite;
}

@keyframes tw-spin {
  to { transform: rotate(360deg); }
}

.tw-wishlist-loading p {
  font-size: 14px;
  color: #888;
}

/* ─── 空狀態 ─── */
.tw-wishlist-empty {
  text-align: center;
  padding: 80px 20px;
}

.tw-empty-visual {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 32px;
}

.tw-empty-circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #e8f5f7, #d0eff3);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(26, 143, 164, 0.15);
}

.tw-empty-circle i {
  font-size: 48px;
  color: #1A8FA4;
  opacity: 0.5;
}

.tw-empty-rays {
  position: absolute;
  inset: -20px;
  animation: tw-rotate-rays 8s linear infinite;
}

.tw-empty-rays span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3px;
  height: 14px;
  background: rgba(26, 143, 164, 0.2);
  border-radius: 3px;
  transform-origin: center -54px;
}

.tw-empty-rays span:nth-child(1)  { transform: translateX(-50%) rotate(0deg); }
.tw-empty-rays span:nth-child(2)  { transform: translateX(-50%) rotate(60deg); }
.tw-empty-rays span:nth-child(3)  { transform: translateX(-50%) rotate(120deg); }
.tw-empty-rays span:nth-child(4)  { transform: translateX(-50%) rotate(180deg); }
.tw-empty-rays span:nth-child(5)  { transform: translateX(-50%) rotate(240deg); }
.tw-empty-rays span:nth-child(6)  { transform: translateX(-50%) rotate(300deg); }

@keyframes tw-rotate-rays {
  to { transform: rotate(360deg); }
}

.tw-wishlist-empty h3 {
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0 0 10px;
  letter-spacing: 0.5px;
}

.tw-wishlist-empty p {
  font-size: 14px;
  color: #888;
  margin: 0 0 28px;
  line-height: 1.6;
}

.tw-empty-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: #1A8FA4;
  color: #fff;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
  letter-spacing: 0.5px;
}

.tw-empty-btn:hover {
  background: #157285;
  color: #fff;
}

.tw-empty-btn i {
  font-size: 18px;
}

/* ─── 工具列 ─── */
.tw-wishlist-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: #fff;
  border: 1px solid #e8f0f2;
  border-radius: 10px;
  margin-bottom: 14px;
  flex-wrap: wrap;
  gap: 12px;
  box-shadow: 0 1px 4px rgba(26, 143, 164, 0.06);
}

.tw-toolbar-left {
  flex: 1;
  min-width: 220px;
}

.tw-toolbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

/* 搜尋框 */
.tw-search-box {
  display: flex;
  align-items: center;
  max-width: 340px;
  border: 1.5px solid #e0eaec;
  border-radius: 8px;
  overflow: hidden;
  background: #f8fafa;
  transition: border-color 0.2s;
}

.tw-search-box:focus-within {
  border-color: #1A8FA4;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(26, 143, 164, 0.1);
}

.tw-search-icon {
  padding-left: 12px;
  color: #aaa;
  font-size: 16px;
  flex-shrink: 0;
}

.tw-search-input {
  flex: 1;
  height: 40px;
  padding: 0 8px;
  border: none;
  background: transparent;
  font-size: 14px;
  outline: none;
  color: #333;
}

.tw-search-input::placeholder {
  color: #aaa;
}

.tw-search-clear {
  background: none;
  border: none;
  padding: 4px 6px;
  cursor: pointer;
  color: #aaa;
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: color 0.15s;
}

.tw-search-clear:hover {
  color: #666;
}

.tw-search-btn {
  height: 40px;
  padding: 0 18px;
  background: #1A8FA4;
  color: #fff;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  letter-spacing: 0.3px;
  white-space: nowrap;
}

.tw-search-btn:hover {
  background: #157285;
}

/* 計數徽章 */
.tw-count-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #555;
  background: #f0f8fa;
  padding: 7px 14px;
  border-radius: 20px;
  border: 1px solid rgba(26, 143, 164, 0.15);
}

.tw-count-badge i {
  color: #e74c3c;
  font-size: 15px;
}

.tw-count-badge strong {
  color: #1A8FA4;
  font-weight: 700;
}

/* 批次移除按鈕 */
.tw-batch-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #fff;
  color: #d9362e;
  border: 1.5px solid #d9362e;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.2px;
}

.tw-batch-btn:hover:not(:disabled) {
  background: #d9362e;
  color: #fff;
}

.tw-batch-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* ─── 全選列 ─── */
.tw-select-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: #f8fafa;
  border: 1px solid #e8f0f2;
  border-radius: 8px;
  margin-bottom: 18px;
}

.tw-check-all {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.tw-check-all input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.tw-check-mark {
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  transition: all 0.15s;
  flex-shrink: 0;
}

.tw-check-mark i {
  font-size: 13px;
  color: #fff;
  opacity: 0;
  transition: opacity 0.15s;
}

.tw-check-all.is-checked .tw-check-mark {
  background: #1A8FA4;
  border-color: #1A8FA4;
}

.tw-check-all.is-checked .tw-check-mark i {
  opacity: 1;
}

.tw-check-label {
  font-size: 14px;
  font-weight: 600;
  color: #444;
}

.tw-selected-hint {
  font-size: 13px;
  color: #1A8FA4;
  font-weight: 500;
}

/* ─── 商品卡片網格 ─── */
.tw-wishlist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 14px;
}

.tw-wish-card {
  position: relative;
  background: #fff;
  border: 1.5px solid #e8f0f2;
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  display: flex;
  flex-direction: column;
}

.tw-wish-card:hover {
  border-color: #1A8FA4;
  box-shadow: 0 4px 20px rgba(26, 143, 164, 0.12);
  transform: translateY(-2px);
}

.tw-wish-card.is-checked {
  border-color: #1A8FA4;
  background: #f5fbfc;
}

.tw-wish-card.is-invalid {
  opacity: 0.65;
}

/* 勾選框 */
.tw-card-check {
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 3;
  cursor: pointer;
}

.tw-card-check input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.tw-card-check-mark {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255,255,255,0.7);
  border-radius: 5px;
  background: rgba(0,0,0,0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
  backdrop-filter: blur(2px);
}

.tw-card-check-mark i {
  font-size: 12px;
  color: #fff;
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.15s;
}

.tw-card-check input:checked + .tw-card-check-mark {
  background: #1A8FA4;
  border-color: #1A8FA4;
}

.tw-card-check input:checked + .tw-card-check-mark i {
  opacity: 1;
  transform: scale(1);
}

/* 刪除按鈕 */
.tw-card-delete {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 3;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(255,255,255,0.9);
  border: none;
  cursor: pointer;
  color: #999;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  backdrop-filter: blur(2px);
  opacity: 0;
}

.tw-wish-card:hover .tw-card-delete,
.tw-wish-card.is-checked .tw-card-delete {
  opacity: 1;
}

.tw-card-delete:hover {
  background: #d9362e;
  color: #fff;
  transform: scale(1.1);
}

/* 圖片 */
.tw-card-img {
  display: block;
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #f4f6f7;
  overflow: hidden;
}

.tw-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.tw-wish-card:hover .tw-card-img img {
  transform: scale(1.06);
}

.tw-card-badge-offline {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* 資訊區 */
.tw-card-info {
  padding: 10px 12px 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.tw-card-name {
  font-size: 13px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.15s;
}

.tw-card-name:hover {
  color: #1A8FA4;
}

.tw-card-meta {
  display: flex;
  align-items: baseline;
  gap: 6px;
  flex-wrap: wrap;
}

.tw-card-price {
  font-size: 17px;
  font-weight: 800;
  color: #c0392b;
  letter-spacing: -0.3px;
}

.tw-card-original {
  font-size: 11px;
  color: #aaa;
  text-decoration: line-through;
}

.tw-card-evidence {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 11px;
  color: #888;
}

.tw-card-evidence span {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

.tw-card-evidence i {
  font-size: 12px;
  color: #1A8FA4;
}

/* 操作區 */
.tw-card-actions {
  padding: 8px 12px 12px;
}

.tw-btn-buy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  padding: 8px 10px;
  background: #1A8FA4;
  color: #fff;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s;
  letter-spacing: 0.5px;
}

.tw-btn-buy:hover {
  background: #157285;
  color: #fff;
}

.tw-btn-buy i {
  font-size: 15px;
}

.tw-btn-disabled {
  display: block;
  width: 100%;
  padding: 8px 10px;
  background: #e9ecef;
  color: #aaa;
  border-radius: 5px;
  font-size: 13px;
  text-align: center;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* ─── 搜尋無結果 ─── */
.tw-wishlist-no-results {
  text-align: center;
  padding: 80px 20px;
}

.tw-no-results-visual {
  margin-bottom: 28px;
}

.tw-no-results-circle {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f0f8fa, #e0eff2);
  border: 2px solid rgba(26, 143, 164, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.tw-no-results-circle i {
  font-size: 40px;
  color: #1A8FA4;
  opacity: 0.6;
}

.tw-wishlist-no-results h3 {
  font-size: 19px;
  font-weight: 700;
  color: #333;
  margin: 0 0 10px;
}

.tw-wishlist-no-results p {
  font-size: 14px;
  color: #888;
  margin: 0 0 24px;
  line-height: 1.6;
}

/* ─── 分頁 ─── */
.tw-wishlist-pagination {
  display: flex;
  justify-content: center;
  margin-top: 36px;
  padding-top: 24px;
  border-top: 1px solid #f0f0f0;
}

/* ─── 響應式 ─── */
@media (max-width: 768px) {
  .tw-hero-inner {
    gap: 16px;
  }

  .tw-hero-icon {
    width: 56px;
    height: 56px;
  }

  .tw-hero-icon i {
    font-size: 26px;
  }

  .tw-hero-text h1 {
    font-size: 22px;
  }

  .tw-wishlist-toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  .tw-toolbar-right {
    justify-content: space-between;
  }

  .tw-search-box {
    max-width: 100%;
  }

  .tw-wishlist-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .tw-wishlist-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .tw-hero-text h1 {
    font-size: 20px;
  }
}
</style>
