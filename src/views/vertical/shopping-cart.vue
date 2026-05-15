<template>
  <div class="vertical-page">

    <VerticalHead />

    <!-- 主體 -->
    <div class="tw-cart-body">
      <div class="container">

        <!-- 載入中 -->
        <div v-if="loading" class="tw-cart-loading">
          <div class="tw-loading-ring"></div>
          <p>載入購物車中…</p>
        </div>

        <!-- 未登入 -->
        <div v-else-if="!isLoggedIn" class="tw-cart-empty">
          <div class="tw-empty-visual">
            <div class="tw-empty-circle">
              <i class="ri-shopping-cart-line"></i>
            </div>
          </div>
          <h3>請先登入會員</h3>
          <p>登入後即可查看購物車內容，開始愉快的選購體驗。</p>
          <router-link to="/vertical/login" class="tw-empty-btn">
            <i class="ri-login-box-line"></i>
            前往登入
          </router-link>
        </div>

        <!-- 空購物車 -->
        <div v-else-if="isEmpty" class="tw-cart-empty">
          <div class="tw-empty-visual">
            <div class="tw-empty-circle">
              <i class="ri-shopping-cart-line"></i>
            </div>
            <div class="tw-empty-rays">
              <span v-for="n in 6" :key="n"></span>
            </div>
          </div>
          <h3>購物車是空的</h3>
          <p>還沒選購任何商品，快去探索優質工具吧！</p>
          <router-link to="/vertical/products" class="tw-empty-btn">
            <i class="ri-store-2-line"></i>
            前往商品列表
          </router-link>
        </div>

        <!-- 購物車內容 -->
        <template v-else>

          <!-- 工具列 -->
          <div class="tw-cart-toolbar">
            <div class="tw-toolbar-left">
              <router-link to="/vertical/products" class="tw-continue-btn">
                <i class="ri-arrow-left-line"></i>
                繼續購物
              </router-link>
            </div>
            <div class="tw-toolbar-right">
              <span class="tw-count-badge">
                <i class="ri-shopping-cart-fill"></i>
                共 <strong>{{ cartItems.length }}</strong> 件商品
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

          <!-- 全選列 -->
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

          <!-- 購物車列表 -->
          <div class="tw-cart-list">
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="tw-cart-card"
              :class="{
                'is-checked': isChecked(item.id),
                'is-invalid': isInvalid(item)
              }"
            >
              <!-- 勾選 -->
              <label class="tw-card-check">
                <input
                  type="checkbox"
                  :checked="isChecked(item.id)"
                  @change="toggleCheck(item.id)"
                />
                <span class="tw-card-check-mark">
                  <i class="ri-check-line"></i>
                </span>
              </label>

              <!-- 圖片 -->
              <router-link :to="getProductLink(item)" class="tw-card-img">
                <img
                  :src="item.picUrl || '/test/static/picture/product-1.jpg'"
                  :alt="item.productName"
                  @error="handleImgError($event)"
                />
                <span v-if="isInvalid(item)" class="tw-card-badge-offline">已下架</span>
              </router-link>

              <!-- 資訊 -->
              <div class="tw-card-info">
                <router-link :to="getProductLink(item)" class="tw-card-name">
                  {{ item.productName || '商品名稱' }}
                </router-link>
                <div v-if="item.skuName" class="tw-card-sku">
                  <i class="ri-stack-line"></i>
                  {{ item.skuName }}
                </div>
                <div class="tw-card-meta">
                  <span class="tw-card-price">NT$ {{ formatPrice(item.price) }}</span>
                  <span v-if="item.originalPrice && item.originalPrice > item.price" class="tw-card-original">
                    NT$ {{ formatPrice(item.originalPrice) }}
                  </span>
                </div>
                <div v-if="!isInvalid(item)" class="tw-card-evidence">
                  <span><i class="ri-checkbox-circle-line"></i> 庫存 {{ item.stock || 0 }} 件</span>
                </div>
              </div>

              <!-- 數量控制 -->
              <div class="tw-card-qty">
                <div class="tw-qty-ctrl">
                  <button
                    class="tw-qty-btn"
                    :disabled="item.quantity <= 1 || item.stock <= 0"
                    @click="handleDecrement(item)"
                  >
                    <i class="ri-subtract-line"></i>
                  </button>
                  <input
                    type="number"
                    class="tw-qty-input"
                    :value="item.quantity"
                    :min="1"
                    :max="item.stock || 999"
                    :disabled="item.stock <= 0"
                    @change="handleQtyChange(item, $event)"
                    @blur="handleQtyBlur(item, $event)"
                  />
                  <button
                    class="tw-qty-btn"
                    :disabled="item.quantity >= (item.stock || 999)"
                    @click="handleIncrement(item)"
                  >
                    <i class="ri-add-line"></i>
                  </button>
                </div>
              </div>

              <!-- 小計 -->
              <div class="tw-card-subtotal">
                <span class="tw-subtotal-label">小計</span>
                <span class="tw-subtotal-price">NT$ {{ formatPrice(itemSubtotal(item)) }}</span>
              </div>

              <!-- 刪除 -->
              <button class="tw-card-delete" @click="handleRemove(item.id)" title="移除商品">
                <i class="ri-close-fill"></i>
              </button>
            </div>
          </div>

          <!-- 底部結算區 -->
          <div class="tw-cart-footer">
            <div class="tw-footer-left">
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
              <button
                class="tw-clear-btn"
                :disabled="cartItems.length === 0"
                @click="handleClearAll"
              >
                <i class="ri-delete-bin-7-line"></i>
                清空購物車
              </button>
            </div>
            <div class="tw-footer-right">
              <!-- 運費提示 -->
              <div class="tw-shipping-hint">
                <template v-if="subtotal < 1000">
                  <i class="ri-information-line"></i>
                  單筆滿 <strong>NT$1,000</strong> 免運費，繼續消費 NT$ {{ formatPrice(1000 - subtotal) }} 可享免運
                </template>
                <template v-else>
                  <i class="ri-truck-line"></i>
                  已達免運門檻，消費 NT$ {{ formatPrice(subtotal) }}
                </template>
              </div>

              <!-- 結算摘要 -->
              <div class="tw-checkout-summary">
                <div class="tw-summary-row">
                  <span>商品小計 ({{ checkedCount }} 件)</span>
                  <span>NT$ {{ formatPrice(subtotal) }}</span>
                </div>
                <div class="tw-summary-row">
                  <span>運費</span>
                  <span :class="{ 'tw-free-shipping': subtotal >= 1000 }">
                    {{ subtotal >= 1000 ? '免費' : 'NT$ 0' }}
                  </span>
                </div>
                <div class="tw-summary-divider"></div>
                <div class="tw-summary-row tw-summary-total">
                  <span>應付總額</span>
                  <span>NT$ {{ formatPrice(totalPrice) }}</span>
                </div>
              </div>

              <button
                class="tw-checkout-btn"
                :disabled="checkedCount === 0"
                @click="handleCheckout"
              >
                <i class="ri-shield-check-line"></i>
                前往結帳
              </button>
              <p class="tw-checkout-hint">
                <i class="ri-lock-line"></i>
                支援 SSL 加密，安全付款
              </p>
            </div>
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
import { cartList, removeProduct, reductionProduct } from '@/api/cart/cart'
import { mapState } from 'vuex'
import eventBus from '@/utils/eventBus'

export default {
  name: 'ShoppingCart',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  metaInfo: {
    title: 'makura - 購物車'
  },
  data() {
    return {
      loading: false,
      cartItems: [],
      checkedIds: new Set(),
      couponCode: ''
    }
  },
  computed: {
    ...mapState({
      token: state => state.user.token
    }),
    isLoggedIn() {
      return !!this.token
    },
    isEmpty() {
      return !this.loading && this.cartItems.length === 0
    },
    allChecked() {
      if (this.cartItems.length === 0) return false
      return this.cartItems
        .filter(item => !this.isInvalid(item))
        .every(item => this.checkedIds.has(item.id))
    },
    checkedCount() {
      return this.checkedIds.size
    },
    subtotal() {
      return this.cartItems
        .filter(item => this.checkedIds.has(item.id))
        .reduce((sum, item) => sum + this.itemSubtotal(item), 0)
    },
    totalPrice() {
      return this.subtotal
    }
  },
  watch: {
    cartItems: {
      handler(newItems) {
        const validIds = new Set(newItems.filter(i => !this.isInvalid(i)).map(i => i.id))
        const toRemove = [...this.checkedIds].filter(id => !validIds.has(id))
        toRemove.forEach(id => this.checkedIds.delete(id))
        this.checkedIds = new Set(this.checkedIds)
      },
      deep: true
    }
  },
  created() {
    if (this.token) {
      this.fetchCartList()
    }
  },
  mounted() {
    eventBus.$on('cart-updated', () => {
      if (this.token) this.fetchCartList()
    })
  },
  beforeDestroy() {
    eventBus.$off('cart-updated')
  },
  methods: {
    fetchCartList() {
      this.loading = true
      cartList(null, null).then(response => {
        this.cartItems = response.rows || []
        this.checkedIds = new Set()
        this.loading = false
      }).catch(() => {
        this.cartItems = []
        this.loading = false
      })
    },

    isInvalid(item) {
      return item.freezeStatus === 1 || item.publishStatus === 0 || (item.stock != null && item.stock <= 0)
    },

    getProductLink(item) {
      if (this.isInvalid(item)) return '#'
      return `/vertical/product-details?id=${item.productId}`
    },

    itemSubtotal(item) {
      return (Number(item.price) || 0) * (Number(item.quantity) || 0)
    },

    formatPrice(price) {
      if (price == null) return '0'
      return Number(price).toLocaleString('zh-TW', { minimumFractionDigits: 0 })
    },

    handleImgError(event) {
      event.target.src = '/test/static/picture/product-1.jpg'
    },

    handleCheckAll(event) {
      if (event.target.checked) {
        this.cartItems.forEach(item => {
          if (!this.isInvalid(item)) {
            this.checkedIds.add(item.id)
          }
        })
      } else {
        this.checkedIds.clear()
      }
      this.checkedIds = new Set(this.checkedIds)
    },

    isChecked(id) {
      return this.checkedIds.has(id)
    },

    toggleCheck(id) {
      if (this.checkedIds.has(id)) {
        this.checkedIds.delete(id)
      } else {
        this.checkedIds.add(id)
      }
      this.checkedIds = new Set(this.checkedIds)
    },

    handleIncrement(item) {
      if (!item.stock || item.quantity >= item.stock) return
      this.updateQuantity(item, item.quantity + 1)
    },

    handleDecrement(item) {
      if (item.quantity <= 1) return
      this.updateQuantity(item, item.quantity - 1)
    },

    handleQtyChange(item, event) {
      const val = parseInt(event.target.value)
      if (isNaN(val) || val < 1) {
        event.target.value = item.quantity
        return
      }
      const qty = Math.min(val, item.stock || 999)
      event.target.value = qty
      this.updateQuantity(item, qty)
    },

    handleQtyBlur(item, event) {
      event.target.value = item.quantity
    },

    updateQuantity(item, quantity) {
      const originalQty = item.quantity
      item.quantity = quantity
      reductionProduct(item.id, quantity).then(() => {
        eventBus.$emit('cart-updated')
      }).catch(() => {
        item.quantity = originalQty
        this.$message({ message: '數量更新失敗，請稍後再試', type: 'error' })
      })
    },

    handleRemove(id) {
      this.$confirm('確認要移除此商品嗎？', '提示', {
        confirmButtonText: '確認移除',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'tw-cart-confirm'
      }).then(() => {
        removeProduct(id).then(() => {
          this.$message({ message: '已移除商品', type: 'success' })
          this.checkedIds.delete(id)
          this.checkedIds = new Set(this.checkedIds)
          this.fetchCartList()
          eventBus.$emit('cart-updated')
        })
      }).catch(() => {})
    },

    handleBatchRemove() {
      if (this.checkedCount === 0) return
      this.$confirm(`確認要移除選中的 ${this.checkedCount} 件商品嗎？`, '提示', {
        confirmButtonText: '確認移除',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'tw-cart-confirm'
      }).then(() => {
        const ids = Array.from(this.checkedIds).join(',')
        removeProduct(ids).then(() => {
          this.$message({ message: '批次移除成功', type: 'success' })
          this.checkedIds.clear()
          this.checkedIds = new Set(this.checkedIds)
          this.fetchCartList()
          eventBus.$emit('cart-updated')
        })
      }).catch(() => {})
    },

    handleClearAll() {
      if (this.cartItems.length === 0) return
      this.$confirm('確認要清空購物車嗎？此操作無法撤銷。', '警告', {
        confirmButtonText: '確認清空',
        cancelButtonText: '取消',
        type: 'warning',
        customClass: 'tw-cart-confirm'
      }).then(() => {
        const ids = this.cartItems.map(i => i.id).join(',')
        removeProduct(ids).then(() => {
          this.$message({ message: '購物車已清空', type: 'success' })
          this.checkedIds.clear()
          this.checkedIds = new Set(this.checkedIds)
          this.fetchCartList()
          eventBus.$emit('cart-updated')
        })
      }).catch(() => {})
    },

    handleCheckout() {
      if (this.checkedCount === 0) {
        this.$message({ message: '請先勾選要結帳的商品', type: 'warning' })
        return
      }
      // 將勾選的 cartItemIds 存入 sessionStorage，checkout 頁讀取
      const ids = Array.from(this.checkedIds).join(',')
      sessionStorage.setItem('checkout_cart_item_ids', ids)
      this.$router.push('/vertical/checkout')
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

/* Element UI Message 全域改色 */
.tw-cart-confirm .el-message-box__headerbtn .el-message-box__close {
  color: #666;
}
.tw-cart-confirm .el-button--primary {
  background-color: #1A8FA4 !important;
  border-color: #1A8FA4 !important;
}
.tw-cart-confirm .el-button--primary:hover {
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

/* ─── Hero ─── */
.tw-cart-hero {
  background: linear-gradient(135deg, #0f7a8a 0%, #1A8FA4 50%, #25b5cc 100%);
  padding: 48px 0 44px;
  position: relative;
  overflow: hidden;
}

.tw-cart-hero::before {
  content: '';
  position: absolute;
  top: -40px;
  right: -60px;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
}

.tw-cart-hero::after {
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
.tw-cart-body {
  padding: 40px 0 80px;
  min-height: 480px;
}

/* ─── 載入中 ─── */
.tw-cart-loading {
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

.tw-cart-loading p {
  font-size: 14px;
  color: #888;
}

/* ─── 空狀態 ─── */
.tw-cart-empty {
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

.tw-cart-empty h3 {
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0 0 10px;
  letter-spacing: 0.5px;
}

.tw-cart-empty p {
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
.tw-cart-toolbar {
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
}

.tw-toolbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.tw-continue-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  background: #fff;
  color: #1A8FA4;
  border: 1.5px solid #1A8FA4;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.tw-continue-btn:hover {
  background: #1A8FA4;
  color: #fff;
}

.tw-continue-btn i {
  font-size: 16px;
}

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
  color: #1A8FA4;
  font-size: 15px;
}

.tw-count-badge strong {
  color: #1A8FA4;
  font-weight: 700;
}

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
  margin-bottom: 14px;
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

/* ─── 購物車列表 ─── */
.tw-cart-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.tw-cart-card {
  position: relative;
  display: grid;
  grid-template-columns: auto auto 1fr auto auto auto;
  align-items: center;
  gap: 16px;
  background: #fff;
  border: 1.5px solid #e8f0f2;
  border-radius: 10px;
  padding: 16px 20px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.tw-cart-card:hover {
  border-color: #1A8FA4;
  box-shadow: 0 2px 12px rgba(26, 143, 164, 0.1);
}

.tw-cart-card.is-checked {
  border-color: #1A8FA4;
  background: #f5fbfc;
}

.tw-cart-card.is-invalid {
  opacity: 0.6;
}

/* 勾選框 */
.tw-card-check {
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
  border: 2px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  transition: all 0.15s;
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

/* 圖片 */
.tw-card-img {
  position: relative;
  display: block;
  width: 88px;
  height: 88px;
  border-radius: 8px;
  overflow: hidden;
  background: #f4f6f7;
  flex-shrink: 0;
}

.tw-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.tw-cart-card:hover .tw-card-img img {
  transform: scale(1.06);
}

.tw-card-badge-offline {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  border-radius: 8px;
}

/* 資訊區 */
.tw-card-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

.tw-card-name {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.15s;
  text-decoration: none;
}

.tw-card-name:hover {
  color: #1A8FA4;
}

.tw-card-sku {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: #888;
  background: #f5f5f5;
  padding: 3px 8px;
  border-radius: 4px;
  align-self: flex-start;
}

.tw-card-sku i {
  font-size: 12px;
}

.tw-card-meta {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
}

.tw-card-price {
  font-size: 18px;
  font-weight: 800;
  color: #c0392b;
  letter-spacing: -0.3px;
}

.tw-card-original {
  font-size: 12px;
  color: #aaa;
  text-decoration: line-through;
}

.tw-card-evidence {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #888;
}

.tw-card-evidence span {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

.tw-card-evidence i {
  font-size: 13px;
  color: #52c41a;
}

/* 數量控制 */
.tw-card-qty {
  flex-shrink: 0;
}

.tw-qty-ctrl {
  display: flex;
  align-items: center;
  border: 1.5px solid #e0eaec;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}

.tw-qty-btn {
  width: 34px;
  height: 34px;
  border: none;
  background: #f8fafa;
  color: #555;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;
}

.tw-qty-btn:hover:not(:disabled) {
  background: #1A8FA4;
  color: #fff;
}

.tw-qty-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.tw-qty-input {
  width: 44px;
  height: 34px;
  border: none;
  border-left: 1px solid #e0eaec;
  border-right: 1px solid #e0eaec;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  background: #fff;
  outline: none;
  -moz-appearance: textfield;
}

.tw-qty-input::-webkit-inner-spin-button,
.tw-qty-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* 小計 */
.tw-card-subtotal {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  flex-shrink: 0;
  min-width: 100px;
}

.tw-subtotal-label {
  font-size: 11px;
  color: #aaa;
  font-weight: 500;
}

.tw-subtotal-price {
  font-size: 17px;
  font-weight: 800;
  color: #1A8FA4;
  letter-spacing: -0.3px;
}

/* 刪除按鈕 */
.tw-card-delete {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #f5f5f5;
  border: none;
  cursor: pointer;
  color: #999;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  opacity: 0;
}

.tw-cart-card:hover .tw-card-delete {
  opacity: 1;
}

.tw-card-delete:hover {
  background: #d9362e;
  color: #fff;
  transform: scale(1.1);
}

/* ─── 底部結算區 ─── */
.tw-cart-footer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 24px;
  background: #fff;
  border: 1.5px solid #e8f0f2;
  border-radius: 10px;
  flex-wrap: wrap;
  box-shadow: 0 2px 12px rgba(26, 143, 164, 0.06);
}

.tw-footer-left {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.tw-clear-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #fff;
  color: #999;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.tw-clear-btn:hover:not(:disabled) {
  background: #fff5f5;
  color: #d9362e;
  border-color: #d9362e;
}

.tw-clear-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.tw-footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  min-width: 280px;
}

.tw-shipping-hint {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: #f8fafa;
  border: 1px solid #e0eaec;
  border-radius: 6px;
  font-size: 13px;
  color: #555;
  align-self: flex-end;
}

.tw-shipping-hint i {
  color: #1A8FA4;
  font-size: 15px;
  flex-shrink: 0;
}

.tw-shipping-hint strong {
  color: #1A8FA4;
}

.tw-checkout-summary {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tw-summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #555;
}

.tw-summary-row span:last-child {
  font-weight: 600;
}

.tw-free-shipping {
  color: #52c41a !important;
}

.tw-summary-divider {
  height: 1px;
  background: #e8f0f2;
  margin: 4px 0;
}

.tw-summary-total {
  font-size: 16px;
  color: #1a1a1a;
}

.tw-summary-total span:last-child {
  font-size: 22px;
  font-weight: 800;
  color: #c0392b;
  letter-spacing: -0.5px;
}

.tw-checkout-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 32px;
  background: linear-gradient(135deg, #1A8FA4, #25b5cc);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 16px rgba(26, 143, 164, 0.3);
}

.tw-checkout-btn:hover:not(:disabled) {
  opacity: 0.92;
  transform: translateY(-1px);
  color: #fff;
}

.tw-checkout-btn:active:not(:disabled) {
  transform: translateY(0);
}

.tw-checkout-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
}

.tw-checkout-btn i {
  font-size: 18px;
}

.tw-checkout-hint {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #aaa;
  margin: 0;
}

.tw-checkout-hint i {
  font-size: 13px;
}

/* ─── 響應式 ─── */
@media (max-width: 992px) {
  .tw-cart-card {
    grid-template-columns: auto auto 1fr;
    grid-template-rows: auto auto auto;
    gap: 10px 14px;
  }

  .tw-card-qty {
    grid-column: 2 / 4;
    justify-self: start;
  }

  .tw-card-subtotal {
    grid-column: 2 / 4;
    align-items: flex-start;
    flex-direction: row;
    gap: 8px;
  }

  .tw-card-delete {
    opacity: 1;
  }
}

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

  .tw-cart-toolbar {
    flex-direction: column;
    align-items: stretch;
  }

  .tw-footer-left {
    width: 100%;
  }

  .tw-footer-right {
    width: 100%;
    min-width: unset;
  }
}

@media (max-width: 480px) {
  .tw-hero-text h1 {
    font-size: 20px;
  }

  .tw-cart-card {
    padding: 12px 14px;
    gap: 8px 12px;
  }

  .tw-card-img {
    width: 70px;
    height: 70px;
  }
}
</style>
