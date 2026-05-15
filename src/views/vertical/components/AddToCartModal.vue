<template>
  <!-- 加入購物車 Modal -->
  <teleport to="body">
    <transition name="tw-atc-fade">
      <div v-if="visible" class="tw-atc-overlay" @click.self="handleClose">
        <div class="tw-atc-modal" role="dialog" aria-modal="true">

          <!-- Header -->
          <div class="tw-atc-header">
            <div class="tw-atc-title">
              <i class="ri-shopping-cart-2-line"></i>
              選擇商品規格
            </div>
            <button class="tw-atc-close" @click="handleClose" aria-label="關閉">
              <i class="ri-close-fill"></i>
            </button>
          </div>

          <!-- 商品資訊 -->
          <div class="tw-atc-product" v-if="product">
            <div class="tw-atc-img-wrap">
              <img :src="displayImg" :alt="product.name || '商品圖片'" @error="handleImgError" />
              <span v-if="discountPercent > 0" class="tw-atc-badge-discount">-{{ discountPercent }}%</span>
            </div>
            <div class="tw-atc-product-info">
              <div class="tw-atc-name">{{ product.name || '商品名稱' }}</div>
              <div class="tw-atc-price-row">
                <span class="tw-atc-price">NT$ {{ formatPrice(displayPrice) }}</span>
                <span v-if="displayOriginalPrice > displayPrice" class="tw-atc-original">
                  NT$ {{ formatPrice(displayOriginalPrice) }}
                </span>
              </div>
              <div class="tw-atc-stock-hint">
                <i :class="displayStock > 0 ? 'ri-checkbox-circle-fill' : 'ri-close-circle-fill'"
                   :style="{ color: displayStock > 0 ? '#27ae60' : '#d9362e' }"></i>
                <span :style="{ color: displayStock > 0 ? '#27ae60' : '#d9362e' }">
                  {{ displayStock > 0 ? `現貨（剩餘 ${displayStock} 件）` : '已售完' }}
                </span>
              </div>
            </div>
          </div>

          <!-- SKU 選擇區 -->
          <div class="tw-atc-body" v-if="skuList.length">

            <!-- 規格屬性行 -->
            <div
              v-for="(attr, attrIdx) in skuAttributes"
              :key="attrIdx"
              class="tw-atc-attr-row"
            >
              <div class="tw-atc-attr-label">{{ attr.name }}</div>
              <div class="tw-atc-attr-values">
                <button
                  v-for="val in attr.values"
                  :key="val.value"
                  class="tw-atc-attr-btn"
                  :class="{
                    active: selectedAttrValues[attrIdx] === val.value,
                    disabled: val.disabled
                  }"
                  :disabled="val.disabled"
                  @click="selectAttr(attrIdx, val.value)"
                >
                  {{ val.value }}
                </button>
              </div>
            </div>

            <!-- 數量選擇 -->
            <div class="tw-atc-qty-row">
              <span class="tw-atc-attr-label">數量</span>
              <div class="tw-atc-qty-ctrl">
                <button class="tw-atc-qty-btn" :disabled="quantity <= 1 || displayStock <= 0" @click="quantity--">
                  <i class="ri-subtract-line"></i>
                </button>
                <input
                  type="number"
                  class="tw-atc-qty-input"
                  v-model.number="quantity"
                  :min="1"
                  :max="displayStock || 999"
                  :disabled="displayStock <= 0"
                  @change="clampQty"
                />
                <button class="tw-atc-qty-btn" :disabled="quantity >= (displayStock || 999)" @click="quantity++">
                  <i class="ri-add-line"></i>
                </button>
              </div>
              <span class="tw-atc-stock-note">
                <template v-if="displayStock > 0">庫存 {{ displayStock }} 件</template>
                <template v-else>庫存不足</template>
              </span>
            </div>

          </div>

          <!-- 無 SKU（單一規格） -->
          <div class="tw-atc-body" v-else>
            <div class="tw-atc-qty-row">
              <span class="tw-atc-attr-label">數量</span>
              <div class="tw-atc-qty-ctrl">
                <button class="tw-atc-qty-btn" :disabled="quantity <= 1" @click="quantity--">
                  <i class="ri-subtract-line"></i>
                </button>
                <input type="number" class="tw-atc-qty-input" v-model.number="quantity" min="1" />
                <button class="tw-atc-qty-btn" @click="quantity++">
                  <i class="ri-add-line"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="tw-atc-footer">
            <div class="tw-atc-total">
              <span class="tw-atc-total-label">小計</span>
              <span class="tw-atc-total-price">NT$ {{ formatPrice(displayPrice * quantity) }}</span>
            </div>
            <div class="tw-atc-actions">
              <button
                class="tw-atc-btn-add"
                :class="{ loading: submitting }"
                :disabled="submitting || displayStock <= 0"
                @click="handleAddToCart"
              >
                <i v-if="!submitting" class="ri-shopping-cart-line"></i>
                <span v-if="submitting" class="tw-atc-spinner"></span>
                {{ submitting ? '加入中…' : '加入購物車' }}
              </button>
              <button class="tw-atc-btn-buy" @click="handleBuyNow" :disabled="displayStock <= 0">
                立即購買
              </button>
            </div>
          </div>

        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { addPurchase } from '@/api/cart/cart'
import { frontGetProductByIdNoLogin } from '@/api/product/purchase'
import { getToken } from '@/utils/auth'
import eventBus from '@/utils/eventBus'

export default {
  name: 'AddToCartModal',
  data() {
    return {
      visible: false,
      product: null,
      productId: null,
      submitting: false,

      // SKU 原始資料
      skuList: [],        // 完整 SKU 陣列（與詳情頁一致）
      skuAttributes: [],  // 解析後的屬性結構
      selectedSkuId: null,

      // 單選屬性值
      selectedAttrValues: [],  // selectedAttrValues[attrIdx] = 選中的值字串

      quantity: 1,
      displayStock: 0,
      displayPrice: 0,
      displayOriginalPrice: 0,
      displayImg: ''
    }
  },
  computed: {
    discountPercent() {
      if (!this.displayOriginalPrice || this.displayOriginalPrice <= this.displayPrice) return 0
      return Math.round((this.displayOriginalPrice - this.displayPrice) / this.displayOriginalPrice * 100)
    },
    // 檢查是否所有屬性都已選
    allAttrsSelected() {
      return this.skuAttributes.every((attr, i) => this.selectedAttrValues[i] !== undefined)
    },
    // 根據當前選中的屬性，計算哪個 SKU id
    resolvedSkuId() {
      if (!this.skuList.length || !this.allAttrsSelected) return null
      const found = this.skuList.find(sku => {
        const attrs = sku.tierIndex ? sku.tierIndex.split(',') : []
        return attrs.length === this.selectedAttrValues.length &&
          attrs.every((v, i) => v === this.selectedAttrValues[i])
      })
      return found ? found.id : null
    }
  },
  watch: {
    resolvedSkuId: {
      handler(newId) {
        if (newId) {
          this.selectedSkuId = newId
          const sku = this.skuList.find(s => s.id === newId)
          if (sku) {
            this.displayPrice = Number(sku.xtProductSkuPriceVo.price) || 0
            this.displayOriginalPrice = Number(sku.xtProductSkuPriceVo.beforeDiscountPrice) || 0
            this.displayStock = Number(sku.xtProductSkuPriceVo.stock) || 0
            if (sku.picUrl) this.displayImg = sku.picUrl
          }
        }
      }
    },
    quantity(val) {
      if (val < 1) this.quantity = 1
      const max = this.displayStock || 999
      if (val > max) this.quantity = max
    }
  },
  methods: {
    open(productId) {
      if (!getToken()) {
        this.$message.warning('請先登入會員')
        this.$router.push('/vertical/login').catch(() => {})
        return
      }
      this.productId = productId
      this.resetState()
      this.visible = true
      document.body.style.overflow = 'hidden'
      this.loadSkuInfo()
    },

    close() {
      this.visible = false
      document.body.style.overflow = ''
    },

    handleClose() {
      this.close()
    },

    resetState() {
      this.product = null
      this.skuList = []
      this.skuAttributes = []
      this.selectedAttrValues = []
      this.selectedSkuId = null
      this.quantity = 1
      this.displayStock = 0
      this.displayPrice = 0
      this.displayOriginalPrice = 0
      this.displayImg = ''
      this.submitting = false
    },

    loadSkuInfo() {
      frontGetProductByIdNoLogin(this.productId).then(res => {
        if (res && res.code === 200 && res.data) {
          const data = res.data
          this.product = data.xtProductVo || {}
          // 設置商品主圖
          this.displayImg = this.product.mainImageUrl || '/test/static/picture/product-1.jpg'
          // 預設價格/庫存（非 SKU 商品）
          this.displayPrice = Number(this.product.price) || 0
          this.displayOriginalPrice = Number(this.product.originalPrice) || 0
          this.displayStock = Number(this.product.stock) || 0

          const skus = data.xtProductSkuVos || []
          this.skuList = skus
          if (skus.length > 0) {
            this.buildSkuAttributes(skus)
            // 預設選第一個 SKU
            this.autoSelectFirst()
          }
        }
      }).catch(() => {})
    },

    buildSkuAttributes(skus) {
      // 從第一個 SKU 的 tierIndex 解析屬性名稱
      if (!skus.length || !skus[0].tierIndex) return
      const firstAttrs = skus[0].tierIndex.split(',')
      this.skuAttributes = firstAttrs.map((_, attrIdx) => {
        const valuesSet = new Set()
        skus.forEach(sku => {
          const vals = sku.tierIndex ? sku.tierIndex.split(',') : []
          if (vals[attrIdx]) valuesSet.add(vals[attrIdx])
        })
        return {
          name: `規格${attrIdx + 1}`,
          values: [...valuesSet].map(v => ({ value: v, disabled: false }))
        }
      })
      this.selectedAttrValues = new Array(this.skuAttributes.length).fill(undefined)
    },

    autoSelectFirst() {
      // 如果只有一個 SKU 且只有一個屬性值，直接選中
      if (this.skuAttributes.length === 1 && this.skuAttributes[0].values.length === 1) {
        this.selectAttr(0, this.skuAttributes[0].values[0].value)
      }
    },

    selectAttr(attrIdx, value) {
      this.selectedAttrValues[attrIdx] = value
      this.selectedAttrValues = [...this.selectedAttrValues]
      this.updateDisabledStates()
    },

    updateDisabledStates() {
      // 遍歷每個屬性格式，標記不可選的組合
      this.skuAttributes.forEach((attr, attrIdx) => {
        attr.values.forEach(v => {
          const testSelection = [...this.selectedAttrValues]
          testSelection[attrIdx] = v.value
          const isValid = this.skuList.some(sku => {
            const skuAttrs = sku.tierIndex ? sku.tierIndex.split(',') : []
            return skuAttrs.length === testSelection.length &&
              skuAttrs.every((val, i) => {
                if (i === attrIdx) return v.value === val
                return !testSelection[i] || testSelection[i] === val
              }) &&
              Number(sku.xtProductSkuPriceVo.stock) > 0
          })
          v.disabled = !isValid && this.selectedAttrValues[attrIdx] !== v.value
        })
      })
    },

    clampQty() {
      if (this.quantity < 1) this.quantity = 1
      const max = this.displayStock || 999
      if (this.quantity > max) this.quantity = max
    },

    handleImgError(e) {
      e.target.src = '/test/static/picture/product-1.jpg'
    },

    formatPrice(v) {
      return (Number(v) || 0).toLocaleString('zh-TW', { minimumFractionDigits: 0 })
    },

    handleAddToCart() {
      if (this.submitting) return
      this.submitting = true
      const data = {
        productId: this.productId,
        skuId: this.selectedSkuId,
        quantity: this.quantity,
        addPurchasePrice: this.displayPrice
      }
      addPurchase(data).then(res => {
        if (res && res.code === 200) {
          this.$message.success('已加入購物車')
          eventBus.$emit('cart-updated')
          this.close()
        } else {
          this.$message.error((res && res.msg) || '加入購物車失敗')
        }
      }).catch(() => {
        this.$message.error('加入購物車失敗，請稍後再試')
      }).finally(() => {
        this.submitting = false
      })
    },

    handleBuyNow() {
      if (this.displayStock <= 0) return
      const data = {
        productId: this.productId,
        skuId: this.selectedSkuId,
        quantity: this.quantity,
        addPurchasePrice: this.displayPrice
      }
      sessionStorage.setItem('checkout_cart_item_ids', '')
      sessionStorage.setItem('direct_buy_product', JSON.stringify(data))
      this.close()
      this.$router.push('/vertical/checkout')
    }
  }
}
</script>

<style scoped>
/* ─── 過渡動畫 ─── */
.tw-atc-fade-enter-active,
.tw-atc-fade-leave-active {
  transition: opacity 0.2s ease;
}
.tw-atc-fade-enter-active .tw-atc-modal,
.tw-atc-fade-leave-active .tw-atc-modal {
  transition: transform 0.25s ease, opacity 0.2s ease;
}
.tw-atc-fade-enter,
.tw-atc-fade-leave-to {
  opacity: 0;
}
.tw-atc-fade-enter .tw-atc-modal {
  transform: translateY(30px);
  opacity: 0;
}
.tw-atc-fade-leave-to .tw-atc-modal {
  transform: translateY(10px);
  opacity: 0;
}

/* ─── 遮罩 ─── */
.tw-atc-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  backdrop-filter: blur(2px);
}

@media (min-width: 576px) {
  .tw-atc-overlay {
    align-items: center;
  }
}

/* ─── Modal 主體 ─── */
.tw-atc-modal {
  background: #fff;
  border-radius: 16px 16px 0 0;
  width: 100%;
  max-width: 520px;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.18);
}

@media (min-width: 576px) {
  .tw-atc-modal {
    border-radius: 16px;
    max-height: 88vh;
  }
}

/* ─── Header ─── */
.tw-atc-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px 14px;
  border-bottom: 1px solid #f0f0f0;
  flex-shrink: 0;
}

.tw-atc-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: 0.5px;
}

.tw-atc-title i {
  font-size: 20px;
  color: #1A8FA4;
}

.tw-atc-close {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: #f5f5f5;
  color: #888;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s, color 0.15s;
}

.tw-atc-close:hover {
  background: #e8e8e8;
  color: #333;
}

/* ─── 商品資訊 ─── */
.tw-atc-product {
  display: flex;
  gap: 14px;
  padding: 16px 20px;
  background: #f8fafa;
  border-bottom: 1px solid #f0f0f0;
  flex-shrink: 0;
}

.tw-atc-img-wrap {
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #eee;
  flex-shrink: 0;
}

.tw-atc-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tw-atc-badge-discount {
  position: absolute;
  top: 4px;
  right: 4px;
  background: #d9362e;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
}

.tw-atc-product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  min-width: 0;
}

.tw-atc-name {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tw-atc-price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
}

.tw-atc-price {
  font-size: 20px;
  font-weight: 800;
  color: #c0392b;
  letter-spacing: -0.3px;
}

.tw-atc-original {
  font-size: 12px;
  color: #aaa;
  text-decoration: line-through;
}

.tw-atc-stock-hint {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
}

.tw-atc-stock-hint i {
  font-size: 14px;
}

/* ─── 規格選擇 ─── */
.tw-atc-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tw-atc-attr-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.tw-atc-attr-label {
  font-size: 13px;
  color: #888;
  white-space: nowrap;
  min-width: 42px;
  padding-top: 7px;
  font-weight: 500;
}

.tw-atc-attr-values {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tw-atc-attr-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 14px;
  border: 1.5px solid #ddd;
  border-radius: 6px;
  background: #fff;
  font-size: 13px;
  color: #333;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
  font-weight: 500;
}

.tw-atc-attr-btn:hover:not(.disabled) {
  border-color: #1A8FA4;
  color: #1A8FA4;
  background: #e8f5f7;
}

.tw-atc-attr-btn.active {
  border-color: #1A8FA4;
  background: #1A8FA4;
  color: #fff;
  font-weight: 700;
}

.tw-atc-attr-btn.disabled {
  opacity: 0.38;
  cursor: not-allowed;
  background: #f8f8f8;
}

/* ─── 數量 ─── */
.tw-atc-qty-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.tw-atc-qty-ctrl {
  display: inline-flex;
  align-items: center;
  border: 1.5px solid #e0eaec;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}

.tw-atc-qty-btn {
  width: 36px;
  height: 36px;
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

.tw-atc-qty-btn:hover:not(:disabled) {
  background: #1A8FA4;
  color: #fff;
}

.tw-atc-qty-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.tw-atc-qty-input {
  width: 52px;
  height: 36px;
  border: none;
  border-left: 1px solid #e0eaec;
  border-right: 1px solid #e0eaec;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: #333;
  background: #fff;
  outline: none;
  appearance: textfield;
}

.tw-atc-qty-input::-webkit-inner-spin-button,
.tw-atc-qty-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.tw-atc-stock-note {
  font-size: 12px;
  color: #888;
  margin-left: 4px;
}

/* ─── Footer ─── */
.tw-atc-footer {
  padding: 16px 20px 20px;
  border-top: 1px solid #f0f0f0;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tw-atc-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tw-atc-total-label {
  font-size: 13px;
  color: #888;
}

.tw-atc-total-price {
  font-size: 22px;
  font-weight: 800;
  color: #c0392b;
  letter-spacing: -0.5px;
}

.tw-atc-actions {
  display: flex;
  gap: 10px;
}

.tw-atc-btn-add {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 13px 16px;
  background: #1A8FA4;
  color: #fff;
  border: 2px solid #1A8FA4;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, opacity 0.2s;
  letter-spacing: 0.5px;
}

.tw-atc-btn-add:hover:not(:disabled) {
  background: #157285;
  border-color: #157285;
  color: #fff;
}

.tw-atc-btn-add:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.tw-atc-btn-add.loading {
  opacity: 0.8;
}

.tw-atc-btn-add i {
  font-size: 17px;
}

.tw-atc-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: tw-atc-spin 0.7s linear infinite;
}

@keyframes tw-atc-spin {
  to { transform: rotate(360deg); }
}

.tw-atc-btn-buy {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 13px 16px;
  background: #fff;
  color: #d9362e;
  border: 2px solid #d9362e;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  letter-spacing: 0.5px;
}

.tw-atc-btn-buy:hover:not(:disabled) {
  background: #d9362e;
  color: #fff;
}

.tw-atc-btn-buy:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
