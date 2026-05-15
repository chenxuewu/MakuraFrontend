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
            <li class="active">全部商品</li>
          </ul>
        </div>
      </div>
    </div>


    <section class="products-area pt-30 pb-54">
      <div class="container">
        <div class="row">
          <!-- 左側邊欄 -->
          <div class="col-lg-4">
            <div class="tw-sidebar">

              <!-- 商品分類（樹形，可展開/收起） -->
              <div class="tw-side-card">
                <div class="tw-side-card__head">
                  <i class="ri-layout-grid-line"></i>
                  <h3>商品分類</h3>
                </div>
                <div class="tw-side-card__body">
                  <div v-if="!categoryList.length && !categoryLoading" class="tw-empty-hint">
                    暫無分類
                  </div>
                  <CategoryTree
                    v-else
                    :nodes="categoryList"
                    :active-id="activeCategoryId"
                    :expanded-map="expandedMap"
                    @select="onSelectCategory"
                    @toggle="toggleExpand"
                  />
                </div>
              </div>

              <!-- 品牌 -->
              <div class="tw-side-card">
                <div class="tw-side-card__head">
                  <i class="ri-price-tag-3-line"></i>
                  <h3>品牌</h3>
                </div>
                <div class="tw-side-card__body">
                  <label class="tw-brand-item">
                    <input
                      type="checkbox"
                      value="Makura"
                      v-model="selectedBrands"
                      @change="doSearch"
                    >
                    <span class="tw-brand-name">Makura</span>
                  </label>
                </div>
              </div>

              <!-- 熱銷商品側邊欄 -->
              <div class="tw-side-card">
                <div class="tw-side-card__head">
                  <i class="ri-fire-line"></i>
                  <h3>熱銷商品</h3>
                </div>
                <div class="tw-side-card__body">
                  <div v-if="!trendingProducts.length && !trendingLoading" class="tw-empty-hint">
                    暫無熱銷商品
                  </div>
                  <ul v-else class="tw-trending-list">
                    <li
                      v-for="product in trendingProducts"
                      :key="product.id"
                      class="tw-trending-item"
                    >
                      <router-link :to="`/vertical/product-details?id=${product.id}`" class="tw-trending-thumb">
                        <img :src="product.mainImageUrl || '/test/static/picture/product-12.jpg'" :alt="product.name">
                      </router-link>
                      <div class="tw-trending-info">
                        <router-link :to="`/vertical/product-details?id=${product.id}`" class="tw-trending-title">
                          {{ product.name }}
                        </router-link>
                        <div class="tw-trending-price">
                          NT$ {{ formatPrice(product.price) }}
                          <del v-if="hasOriginalPrice(product)">NT$ {{ formatPrice(product.originalPrice) }}</del>
                        </div>
                        <ul class="tw-trending-rating">
                          <li v-for="n in 5" :key="n">
                            <i class="ri-star-fill"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <!-- 右側內容 -->
          <div class="col-lg-8">
            <!-- 促銷 Banner -->
            <div class="tw-promo-banner">
              <div class="tw-promo-text">
                <span class="tw-promo-tag">限時優惠</span>
                <h3>各種優質工具 全面 <em>7 折</em></h3>
                <p>嚴選工地機械工具，品質保證</p>
                <a href="javascript:;" class="tw-promo-btn">
                  <i class="ri-shopping-cart-line"></i>
                  立即選購
                </a>
              </div>
              <div class="tw-promo-deco">
                <i class="ri-tools-line"></i>
              </div>
            </div>

            <!-- 頂部工具列 -->
            <div class="tw-toolbar">
              <div class="tw-toolbar-count">
                <i class="ri-shopping-bag-3-line"></i>
                共 <strong>{{ total }}</strong> 件商品
              </div>
              <div class="tw-toolbar-sort">
                <label>排序方式：</label>
                <select
                  class="tw-sort-select"
                  v-model="sortKey"
                  @change="doSearch"
                >
                  <option
                    v-for="opt in sortOptions"
                    :key="opt.key"
                    :value="opt.key"
                  >{{ opt.label }}</option>
                </select>
              </div>
            </div>

            <!-- 當前篩選狀態提示 -->
            <div v-if="activeCategoryId || selectedBrands.length" class="tw-filter-chips">
              <span class="tw-chip-label">當前篩選：</span>
              <span v-if="activeCategoryId" class="tw-chip tw-chip-cat">
                {{ currentCategoryName }}
                <i class="ri-close-line" @click="onSelectCategory(null)"></i>
              </span>
              <span
                v-for="brand in selectedBrands"
                :key="brand"
                class="tw-chip tw-chip-brand"
              >
                {{ brand }}
                <i class="ri-close-line" @click="removeBrand(brand)"></i>
              </span>
              <a href="javascript:;" class="tw-chip-clear" @click="clearFilters">清除全部</a>
            </div>

            <!-- 商品列表 -->
            <div class="tw-product-grid">

              <!-- 加載中 -->
              <template v-if="productLoading">
                <div v-for="n in 6" :key="n" class="tw-skeleton-card">
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
                <i class="ri-inbox-line"></i>
                <p>找不到符合條件的商品</p>
                <a href="javascript:;" class="tw-empty-btn" @click="clearFilters">清除篩選</a>
              </div>

              <!-- 商品網格 -->
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
import CategoryTree from '@c/CategoryTree'
import verticalMixin from '@/mixins/vertical'
import { frontAllGetCategoryTree } from '@/api/product/category'
import { frontListNoLogin } from '@/api/product/purchase'

export default {
  name: 'Products',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe, ProductCard, Pagination, CategoryTree },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'Ehay - 全部商品'
  },
  data() {
    return {
      categoryList: [],
      categoryLoading: false,
      expandedMap: {},
      trendingProducts: [],
      trendingLoading: false,

      activeCategoryId: null,
      selectedBrands: [],

      productList: [],
      productLoading: false,
      total: 0,
      pageSize: 12,

      queryParams: {
        pageNum: 1,
        pageSize: 12
      },
      sortKey: '',
      sortOptions: [
        { key: '',            label: '預設排序',     sortType: null, sortMode: null },
        { key: 'latest',      label: '最新上架',     sortType: 0,    sortMode: 1 },
        { key: 'sale_desc',   label: '銷量：最多',   sortType: 1,    sortMode: 1 },
        { key: 'price_asc',   label: '價格：由低到高', sortType: 2,    sortMode: 0 },
        { key: 'price_desc',  label: '價格：由高到低', sortType: 2,    sortMode: 1 }
      ]
    }
  },
  computed: {
    flatCategories() {
      const flat = []
      const walk = (nodes) => {
        if (!Array.isArray(nodes)) return
        for (const node of nodes) {
          flat.push(node)
          if (Array.isArray(node.children) && node.children.length) {
            walk(node.children)
          }
        }
      }
      walk(this.categoryList)
      return flat
    },
    currentCategoryName() {
      const cat = this.flatCategories.find(c => String(c.id) === String(this.activeCategoryId))
      return cat ? (cat.displayName || cat.name) : ''
    }
  },
  created() {
    this.loadCategories()
    this.loadTrendingProducts()
    this.loadProducts()
  },
  methods: {
    // ---- 分類 ----
    async loadCategories() {
      this.categoryLoading = true
      try {
        const res = await frontAllGetCategoryTree()
        if (res && res.code === 200) {
          this.categoryList = res.data || []
        } else {
          this.categoryList = (res && res.data) || []
        }
      } catch (e) {
        console.warn('載入分類失敗', e)
        this.categoryList = []
      } finally {
        this.categoryLoading = false
      }
    },

    toggleExpand(nodeId) {
      if (this.expandedMap[nodeId]) {
        this.$delete(this.expandedMap, nodeId)
      } else {
        this.$set(this.expandedMap, nodeId, true)
      }
    },

    // ---- 熱銷商品側邊欄 ----
    async loadTrendingProducts() {
      this.trendingLoading = true
      try {
        const res = await frontListNoLogin({ pageNum: 1, pageSize: 5 })
        this.trendingProducts = (res && (res.rows || res.data || [])) || []
      } catch (e) {
        console.warn('載入熱銷商品失敗', e)
        this.trendingProducts = []
      } finally {
        this.trendingLoading = false
      }
    },

    // ---- 商品列表 ----
    async loadProducts() {
      this.productLoading = true
      try {
        const params = {
          pageNum: this.queryParams.pageNum,
          pageSize: this.queryParams.pageSize
        }
        if (this.activeCategoryId) {
          params.productCategoryId = this.activeCategoryId
        }
        if (this.selectedBrands.length) {
          params.brand = this.selectedBrands.join(',')
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

    onSelectCategory(catId) {
      if (this.activeCategoryId === catId) return
      this.activeCategoryId = catId
      this.queryParams.pageNum = 1
      this.loadProducts()
    },

    clearFilters() {
      this.activeCategoryId = null
      this.selectedBrands = []
      this.sortKey = ''
      this.queryParams.pageNum = 1
      this.loadProducts()
    },

    removeBrand(brand) {
      this.selectedBrands = this.selectedBrands.filter(b => b !== brand)
      this.doSearch()
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
    },

    formatPrice(value) {
      const n = Number(value) || 0
      return n.toLocaleString('zh-TW', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    },

    hasOriginalPrice(product) {
      const p = Number(product.price) || 0
      const op = Number(product.originalPrice) || 0
      return op > 0 && op > p
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

/* 麵包屑區域 */
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

/* ====== 左側邊欄 ====== */
.tw-sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: 16px;
}

.tw-side-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.tw-side-card__head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 18px;
  border-bottom: 1px solid #f0f0f0;
  background: #fafbfc;
}

.tw-side-card__head i {
  font-size: 18px;
  color: #1A8FA4;
}

.tw-side-card__head h3 {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: #222;
  letter-spacing: .5px;
}

.tw-side-card__body {
  padding: 10px 12px;
}

/* 空資料提示 */
.tw-empty-hint {
  padding: 14px 8px;
  color: #999;
  font-size: 13px;
  text-align: center;
}

/* 品牌 */
.tw-brand-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background .15s;
  margin: 0;
}

.tw-brand-item:hover {
  background: #f4fafb;
}

.tw-brand-item input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #1A8FA4;
  cursor: pointer;
}

.tw-brand-name {
  font-size: 14px;
  color: #555;
}

/* 熱銷商品 */
.tw-trending-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tw-trending-item {
  display: flex;
  gap: 12px;
  padding: 8px;
  border-radius: 6px;
  transition: background .15s;
}

.tw-trending-item:hover {
  background: #f4fafb;
}

.tw-trending-thumb {
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  border-radius: 6px;
  overflow: hidden;
  background: #f5f5f5;
}

.tw-trending-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tw-trending-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tw-trending-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 13px;
  line-height: 1.4;
  color: #333;
  text-decoration: none;
  transition: color .15s;
}

.tw-trending-title:hover {
  color: #1A8FA4;
}

.tw-trending-price {
  font-size: 14px;
  font-weight: 600;
  color: #d9362e;
}

.tw-trending-price del {
  margin-left: 6px;
  font-size: 12px;
  color: #aaa;
  font-weight: 400;
}

.tw-trending-rating {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 2px;
}

.tw-trending-rating i {
  color: #f5a623;
  font-size: 12px;
}

/* ====== 右側內容 ====== */
/* 促銷 Banner */
.tw-promo-banner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 32px;
  background: linear-gradient(135deg, #1A8FA4 0%, #2bb4cc 100%);
  border-radius: 10px;
  color: #fff;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(26, 143, 164, 0.18);
}

.tw-promo-text {
  position: relative;
  z-index: 2;
}

.tw-promo-tag {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.22);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.tw-promo-text h3 {
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 700;
  color: #fff;
}

.tw-promo-text h3 em {
  font-style: normal;
  color: #ffe066;
  font-size: 32px;
  margin-left: 4px;
}

.tw-promo-text p {
  margin: 0 0 16px;
  font-size: 14px;
  opacity: .9;
}

.tw-promo-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 22px;
  background: #fff;
  color: #1A8FA4;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  text-decoration: none;
  transition: transform .2s, box-shadow .2s;
}

.tw-promo-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: #1A8FA4;
}

.tw-promo-deco {
  font-size: 120px;
  opacity: .12;
  line-height: 1;
}

/* 工具列 */
.tw-toolbar {
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

.tw-toolbar-count {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #666;
}

.tw-toolbar-count i {
  color: #1A8FA4;
  font-size: 16px;
}

.tw-toolbar-count strong {
  color: #1A8FA4;
  font-weight: 600;
  margin: 0 2px;
}

.tw-toolbar-sort {
  display: flex;
  align-items: center;
  gap: 8px;
}

.tw-toolbar-sort label {
  margin: 0;
  font-size: 14px;
  color: #888;
}

.tw-sort-select {
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

.tw-sort-select:hover,
.tw-sort-select:focus {
  border-color: #1A8FA4;
}

/* 篩選狀態提示欄 */
.tw-filter-chips {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 16px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.tw-chip-label {
  font-size: 13px;
  color: #888;
  font-weight: 500;
}

.tw-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  cursor: default;
}

.tw-chip i {
  cursor: pointer;
  font-size: 14px;
  opacity: .7;
  transition: opacity .2s;
}

.tw-chip i:hover { opacity: 1; }

.tw-chip-cat {
  background: #e8f5f7;
  color: #1A8FA4;
}

.tw-chip-brand {
  background: #fff4e6;
  color: #c97a1c;
}

.tw-chip-clear {
  font-size: 13px;
  color: #d9362e;
  margin-left: auto;
  text-decoration: none;
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 4px;
  transition: background .15s;
}

.tw-chip-clear:hover {
  background: #fff0ef;
  color: #c0392b;
}

/* 商品網格 */
.tw-product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.tw-product-cell {
  min-width: 0;
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

/* 覆寫 Owl Carousel 內部商品卡的舊邊框 */
:deep(.tw-product-grid .single-products) {
  border: none !important;
  padding: 0 !important;
}

/* 商品區整體背景留白 */
.vertical-page :deep(.products-area) {
  background: transparent;
}
</style>
