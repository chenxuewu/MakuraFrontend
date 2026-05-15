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
                <li class="結帳去">
                  <router-link to="/vertical/結帳去" class="default-btn">
                    結帳去
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- 麵包屑 -->
    <div class="page-title-area">
      <div class="container">
        <div class="page-title-content">
          <ul>
            <li>
              <router-link to="/vertical/index">首頁</router-link>
            </li>
            <li class="active">
              <template v-if="searchKeyword">搜尋：{{ searchKeyword }}</template>
              <template v-else>搜尋商品</template>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <section class="search-result-area ptb-40">
      <div class="container">
        <!-- 工具列：搜尋提示 + 排序 -->
        <div class="search-toolbar">
          <div class="search-toolbar-left">
            <span v-if="searchKeyword" class="search-hint">
              <i class="ri-search-line"></i>
              關鍵字「<strong>{{ searchKeyword }}</strong>」的搜尋結果
            </span>
            <span class="search-count">
              <i class="ri-list-check"></i>
              共 <strong>{{ total }}</strong> 件符合條件
            </span>
          </div>
          <div class="search-toolbar-right">
            <label>排序：</label>
            <select class="search-sort-select" v-model="sortKey" @change="doSearch">
              <option
                v-for="opt in sortOptions"
                :key="opt.key"
                :value="opt.key"
              >{{ opt.label }}</option>
            </select>
          </div>
        </div>

        <!-- 商品網格 -->
        <div class="tw-product-grid">
          <!-- 載入中 -->
          <template v-if="productLoading">
            <div v-for="n in 8" :key="n" class="tw-skeleton-card">
              <div class="tw-skeleton-img"></div>
              <div class="tw-skeleton-body">
                <div class="tw-skeleton-line tw-skeleton-title"></div>
                <div class="tw-skeleton-line tw-skeleton-price"></div>
                <div class="tw-skeleton-line tw-skeleton-btn"></div>
              </div>
            </div>
          </template>

          <!-- 無資料 -->
          <div v-else-if="!productList.length" class="tw-empty-state">
            <i class="ri-search-line"></i>
            <p>找不到符合「<strong>{{ searchKeyword || '全部商品' }}</strong>」的商品</p>
            <a href="javascript:;" class="tw-empty-btn" @click="clearKeyword">清除搜尋</a>
          </div>

          <!-- 商品卡片 -->
          <template v-else>
            <div
              v-for="product in productList"
              :key="product.id"
              class="tw-product-cell"
            >
              <ProductCard :product="product" variant="standard" fallback-img="/test/static/picture/product-6.jpg" />
            </div>
          </template>
        </div>

        <!-- 分頁 -->
        <div v-if="total > pageSize" class="tw-pagination-wrap">
          <Pagination
            :total="total"
            :page.sync="queryParams.pageNum"
            :limit.sync="queryParams.pageSize"
            @pagination="handlePagination"
          />
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
import ProductCard from '@c/ProductCard'
import Pagination from '@c/Pagination'
import verticalMixin from '@/mixins/vertical'
import { frontListNoLogin } from '@/api/product/purchase'

export default {
  name: 'BestSellers',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe, ProductCard, Pagination },
  mixins: [verticalMixin],
  metaInfo: {
    title: '搜尋商品 - makura'
  },
  data() {
    return {
      productList: [],
      productLoading: false,
      total: 0,
      pageSize: 12,

      queryParams: {
        pageNum: 1,
        pageSize: 12
      },
      sortKey: '',
      searchKeyword: '',
      searchInput: '',

      sortOptions: [
        { key: '',           label: '預設排序',      sortType: null, sortMode: null },
        { key: 'latest',     label: '最新上架',      sortType: 0,    sortMode: 1 },
        { key: 'sale_desc',  label: '銷量：最多',    sortType: 1,    sortMode: 1 },
        { key: 'price_asc',  label: '價格：由低到高', sortType: 2,    sortMode: 0 },
        { key: 'price_desc', label: '價格：由高到低', sortType: 2,    sortMode: 1 }
      ]
    }
  },
  created() {
    this.initFromQuery()
    this.loadProducts()
  },
  watch: {
    '$route.query.keyword'(newVal) {
      this.searchKeyword = newVal || ''
      this.searchInput = this.searchKeyword
      this.queryParams.pageNum = 1
      this.loadProducts()
    }
  },
  methods: {
    initFromQuery() {
      const { keyword } = this.$route.query
      if (keyword) {
        this.searchKeyword = String(keyword)
        this.searchInput = this.searchKeyword
      }
    },

    async loadProducts() {
      this.productLoading = true
      try {
        const params = {
          pageNum: this.queryParams.pageNum,
          pageSize: this.queryParams.pageSize
        }
        if (this.searchKeyword) {
          params.name = this.searchKeyword
        }
        const sortOpt = this.sortOptions.find(o => o.key === this.sortKey)
        if (sortOpt && sortOpt.sortType !== null) {
          params.sortType = sortOpt.sortType
          params.sortMode = sortOpt.sortMode
        }
        const res = await frontListNoLogin(params)
        const list = (res && (res.rows || res.data || [])) || []
        this.productList = Array.isArray(list) ? list : []
        this.total = (res && Number(res.total)) || 0
      } catch (e) {
        console.warn('載入商品列表失敗', e)
        this.productList = []
        this.total = 0
      } finally {
        this.productLoading = false
      }
    },

    onSearchKeyword() {
      const kw = this.searchInput.trim()
      this.searchKeyword = kw
      this.$router.replace({
        query: kw ? { keyword: kw } : {}
      }).catch(() => {})
      this.queryParams.pageNum = 1
      this.loadProducts()
    },

    clearKeyword() {
      this.searchKeyword = ''
      this.searchInput = ''
      this.$router.replace({ query: {} }).catch(() => {})
      this.queryParams.pageNum = 1
      this.loadProducts()
    },

    doSearch() {
      this.queryParams.pageNum = 1
      this.loadProducts()
    },

    handlePagination({ page }) {
      this.queryParams.pageNum = page
      this.loadProducts()
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
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
.vertical-page {
  width: 100%;
  background: #f7f8fa;
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

/* 麵包屑 */
.vertical-page :deep(.page-title-area) {
  background: linear-gradient(135deg, #1A8FA4 0%, #157285 100%);
  padding: 28px 0;
}

.vertical-page :deep(.page-title-content ul) {
  margin: 0;
  padding: 0;
  display: flex;
  gap: 8px;
  align-items: center;
  list-style: none;
}

.vertical-page :deep(.page-title-content li),
.vertical-page :deep(.page-title-content a) {
  color: #fff;
  font-size: 14px;
}

.vertical-page :deep(.page-title-content li.active) {
  opacity: .85;
}

/* ====== 搜尋結果區 ====== */
.search-result-area {
  background: transparent;
}

/* 工具列 */
.search-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 14px 18px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.search-toolbar-left {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.search-hint {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #555;
}

.search-hint i {
  color: #1A8FA4;
  font-size: 16px;
}

.search-hint strong {
  color: #1A8FA4;
  font-weight: 600;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.search-count {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #666;
}

.search-count i {
  color: #1A8FA4;
  font-size: 16px;
}

.search-count strong {
  color: #1A8FA4;
  font-weight: 600;
  margin: 0 2px;
}

.search-toolbar-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.search-toolbar-right label {
  margin: 0;
  font-size: 14px;
  color: #888;
}

.search-sort-select {
  padding: 6px 28px 6px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 13px;
  color: #333;
  background: #fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E") no-repeat right 8px center;
  appearance: none;
  cursor: pointer;
  outline: none;
  transition: border-color .15s;
}

.search-sort-select:hover,
.search-sort-select:focus {
  border-color: #1A8FA4;
}

/* ====== 商品網格 ====== */
.tw-product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.tw-product-cell {
  min-width: 0;
}

@media (max-width: 1199px) {
  .tw-product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 991px) {
  .tw-product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 575px) {
  .tw-product-grid {
    grid-template-columns: 1fr;
  }
}

/* 載入骨架屏 */
.tw-skeleton-card {
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.tw-skeleton-img {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: tw-shimmer 1.4s ease-in-out infinite;
}

.tw-skeleton-body {
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tw-skeleton-line {
  border-radius: 4px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: tw-shimmer 1.4s ease-in-out infinite;
}

.tw-skeleton-title { height: 16px; width: 85%; }
.tw-skeleton-price { height: 22px; width: 50%; }
.tw-skeleton-btn { height: 36px; width: 100%; margin-top: 4px; }

@keyframes tw-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* 空狀態 */
.tw-empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 80px 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  color: #999;
}

.tw-empty-state i {
  font-size: 56px;
  display: block;
  margin-bottom: 18px;
  color: #ddd;
}

.tw-empty-state p {
  font-size: 16px;
  margin-bottom: 22px;
  color: #666;
}

.tw-empty-state strong {
  color: #1A8FA4;
}

.tw-empty-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #1A8FA4;
  color: #fff;
  padding: 10px 28px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background .2s, transform .2s;
}

.tw-empty-btn:hover {
  background: #157285;
  color: #fff;
  transform: translateY(-1px);
}

/* 分頁包裝 */
.tw-pagination-wrap {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  padding: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
</style>
