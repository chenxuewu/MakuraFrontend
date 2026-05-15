<template>
  <div class="vertical-page">

    <VerticalHead />


    <!-- 迷你購物車側邊欄 -->
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
                <li>應付總額</li>
                <li class="total"><span>$564.00</span></li>
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


    <!-- 麵包屑 -->
    <div class="page-title-area">
      <div class="container">
        <div class="page-title-content">
          <ul>
            <li>
              <router-link to="/vertical/index">首頁</router-link>
            </li>
            <li class="active">願望清單</li>
          </ul>
        </div>
      </div>
    </div>


    <!-- 願望清單主體 -->
    <div class="cart-area ptb-54">
      <div class="container">

        <!-- 工具列：搜尋 + 全選 + 批次刪除 -->
        <div v-if="!isEmpty" class="wishlist-toolbar">
          <div class="wishlist-toolbar-left">
            <div class="wishlist-search">
              <input
                v-model="queryParams.productName"
                type="text"
                placeholder="搜尋收藏商品..."
                class="wishlist-search-input"
                @keyup.enter="handleSearch"
              />
              <button class="wishlist-search-btn" @click="handleSearch">
                <i class="ri-search-line"></i>
              </button>
            </div>
          </div>
          <div class="wishlist-toolbar-right">
            <span class="wishlist-total-hint">
              共 <strong>{{ total }}</strong> 件收藏商品
            </span>
            <button
              class="wishlist-batch-delete"
              :disabled="checkedCount === 0"
              @click="handleBatchRemove"
            >
              <i class="ri-delete-bin-line"></i>
              批次移除 ({{ checkedCount }})
            </button>
          </div>
        </div>

        <!-- 載入中 -->
        <div v-if="loading" class="wishlist-loading">
          <div class="wishlist-spinner"></div>
          <p>載入收藏商品…</p>
        </div>

        <!-- 空狀態 -->
        <div v-else-if="isEmpty" class="wishlist-empty">
          <div class="wishlist-empty-icon">
            <i class="ri-heart-line"></i>
          </div>
          <h3>目前沒有收藏商品</h3>
          <p>快去逛逛，發現喜歡的工具就收藏起來吧！</p>
          <router-link to="/vertical/products" class="default-btn">
            前往商品列表
          </router-link>
        </div>

        <!-- 收藏商品表格 -->
        <form v-else class="cart-controller mb-0">
          <div class="cart-table table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col" class="wishlist-check-col">
                    <label class="wishlist-check-wrapper">
                      <input
                        type="checkbox"
                        :checked="allChecked"
                        @change="handleCheckAll($event)"
                      />
                      <span></span>
                    </label>
                  </th>
                  <th scope="col">商品</th>
                  <th scope="col">價格</th>
                  <th scope="col">總計</th>
                  <th scope="col"></th>
                  <th scope="col">刪除</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in collectList"
                  :key="item.productId"
                  :class="{ 'wishlist-invalid-row': isInvalid(item) }"
                >
                  <td class="wishlist-check-col">
                    <label class="wishlist-check-wrapper">
                      <input
                        type="checkbox"
                        :checked="isChecked(item.productId)"
                        @change="toggleCheck(item.productId)"
                      />
                      <span></span>
                    </label>
                  </td>
                  <td class="product-thumbnail">
                    <router-link :to="getProductLink(item)">
                      <img
                        :src="item.mainImageUrl || '/test/static/picture/product-1.jpg'"
                        :alt="item.productName"
                        @error="handleImgError($event)"
                      />
                    </router-link>
                  </td>
                  <td class="product-name">
                    <router-link :to="getProductLink(item)">
                      {{ item.productName || '已下架商品' }}
                    </router-link>
                    <span v-if="isInvalid(item)" class="wishlist-invalid-tag">已下架</span>
                  </td>
                  <td class="product-price">
                    <span class="unit-amount">NT$ {{ formatPrice(item.price) }}</span>
                  </td>
                  <td class="product-subtotal">
                    <span class="subtotal-amount">NT$ {{ formatPrice(item.price) }}</span>
                  </td>
                  <td>
                    <router-link
                      v-if="!isInvalid(item)"
                      :to="getProductLink(item)"
                      class="default-btn"
                    >
                      馬上去買
                    </router-link>
                    <span v-else class="wishlist-btn-disabled">已下架</span>
                  </td>
                  <td class="trash">
                    <button
                      type="button"
                      class="remove"
                      @click="handleRemove(item.productId)"
                    >
                      <i class="ri-close-fill"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>

        <!-- 分頁 -->
        <div v-if="!isEmpty && total > queryParams.pageSize" class="wishlist-pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="parseInt(total)"
            :page-size="queryParams.pageSize"
            :current-page="queryParams.pageNum"
            @current-change="handlePageChange"
          />
        </div>

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
        pageSize: 10,
        productName: ''
      }
    }
  },
  computed: {
    isEmpty() {
      return !this.loading && this.collectList.length === 0
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
        customClass: 'wishlist-confirm-dialog'
      }).then(() => {
        const formData = { isCollect: false, productIds: productId }
        collectProduct(formData).then(() => {
          this.$message({ message: '移除成功', type: 'success' })
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
        customClass: 'wishlist-confirm-dialog'
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
/* 第三方库全局样式（不能 scoped，否则动态生成的元素无法匹配） */
@import '/test/static/css/bootstrap.min.css';
@import '/test/static/css/owl.theme.default.min.css';
@import '/test/static/css/owl.carousel.min.css';
@import '/test/static/css/remixicon.css';
@import '/test/static/css/meanmenu.min.css';
@import '/test/static/css/animate.min.css';
@import '/test/static/css/style.css';
@import '/test/static/css/responsive.css';

/* Element UI 分頁主題覆蓋（不能 scoped） */
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ff6a00 !important;
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

/* ─── 工具列 ─── */
.wishlist-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
}

.wishlist-toolbar-left {
  flex: 1;
  min-width: 220px;
}

.wishlist-toolbar-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.wishlist-search {
  display: flex;
  align-items: center;
  max-width: 320px;
}

.wishlist-search-input {
  flex: 1;
  height: 38px;
  padding: 0 12px;
  border: 1px solid #ddd;
  border-radius: 6px 0 0 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.wishlist-search-input:focus {
  border-color: #ff6a00;
}

.wishlist-search-btn {
  height: 38px;
  padding: 0 14px;
  background: #ff6a00;
  color: #fff;
  border: 1px solid #ff6a00;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
}

.wishlist-search-btn:hover {
  background: #e55f00;
}

.wishlist-total-hint {
  font-size: 14px;
  color: #666;
}

.wishlist-total-hint strong {
  color: #ff6a00;
}

.wishlist-batch-delete {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #fff;
  color: #dc3545;
  border: 1px solid #dc3545;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.wishlist-batch-delete:hover:not(:disabled) {
  background: #dc3545;
  color: #fff;
}

.wishlist-batch-delete:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* ─── 載入中 ─── */
.wishlist-loading {
  text-align: center;
  padding: 60px 0;
  color: #999;
}

.wishlist-spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto 16px;
  border: 3px solid #f0f0f0;
  border-top-color: #ff6a00;
  border-radius: 50%;
  animation: wishlist-spin 0.8s linear infinite;
}

@keyframes wishlist-spin {
  to { transform: rotate(360deg); }
}

.wishlist-loading p {
  font-size: 14px;
}

/* ─── 空狀態 ─── */
.wishlist-empty {
  text-align: center;
  padding: 80px 20px;
}

.wishlist-empty-icon {
  font-size: 72px;
  color: #ddd;
  margin-bottom: 20px;
  line-height: 1;
}

.wishlist-empty h3 {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.wishlist-empty p {
  font-size: 14px;
  color: #999;
  margin-bottom: 28px;
}

/* ─── 表格自定義 ─── */
.wishlist-check-col {
  width: 44px;
  text-align: center;
}

.wishlist-check-wrapper {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.wishlist-check-wrapper input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.wishlist-check-wrapper span {
  display: block;
  width: 18px;
  height: 18px;
  border: 2px solid #ddd;
  border-radius: 4px;
  transition: all 0.15s;
  background: #fff;
}

.wishlist-check-wrapper input:checked + span {
  background: #ff6a00;
  border-color: #ff6a00;
}

.wishlist-check-wrapper input:checked + span::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 6px;
  width: 5px;
  height: 9px;
  border: 2px solid #fff;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
}

/* 已下架商品行 */
.wishlist-invalid-row {
  opacity: 0.6;
  background: #fafafa;
}

.wishlist-invalid-tag {
  display: inline-block;
  margin-left: 8px;
  padding: 2px 8px;
  background: #e9ecef;
  color: #888;
  font-size: 11px;
  border-radius: 4px;
}

.wishlist-btn-disabled {
  display: inline-block;
  padding: 6px 14px;
  background: #e9ecef;
  color: #aaa;
  border-radius: 4px;
  font-size: 13px;
  cursor: default;
}

.trash .remove {
  background: none;
  border: none;
  cursor: pointer;
  color: #dc3545;
  font-size: 18px;
  padding: 4px 8px;
  transition: color 0.2s;
}

.trash .remove:hover {
  color: #a71d2a;
}

/* ─── 分頁 ─── */
.wishlist-pagination {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}
</style>
