<template>
  <!-- 標準大卡（owl carousel / 網格） -->
  <div v-if="variant === 'standard'" class="tw-product-card">
    <div class="tw-card-img">
      <router-link :to="`/vertical/product-details?id=${product.id}`">
        <img :src="imgSrc" :alt="product.name" />
      </router-link>
      <!-- 左上角徽章 -->
      <span v-if="product.newStatus === 1" class="badge-corner badge-new">新品</span>
      <span v-else-if="isHot" class="badge-corner badge-hot">熱銷</span>
      <!-- 右上角折扣徽章 -->
      <span v-if="discountPercent > 0" class="badge-discount">-{{ discountPercent }}%</span>
      <!-- 右下角收藏 -->
      <button
        class="wish-corner"
        :class="{ 'is-collected': collected, 'is-loading': collectLoading }"
        :aria-label="collected ? '取消收藏' : '加入收藏'"
        @click.prevent="handleToggleCollect"
      >
        <i :class="collected ? 'ri-heart-fill' : 'ri-heart-line'"></i>
      </button>
    </div>

    <div class="tw-card-body">
      <div v-if="product.subTitle" class="tw-subtitle">{{ product.subTitle }}</div>
      <router-link :to="`/vertical/product-details?id=${product.id}`" class="tw-title">
        {{ product.name }}
      </router-link>

      <div class="tw-price-row">
        <span class="tw-price-current">NT$ {{ formatPrice(product.price) }}</span>
        <span v-if="hasOriginalPrice" class="tw-price-original">NT$ {{ formatPrice(product.originalPrice) }}</span>
      </div>

      <div class="tw-badges">
        <span class="tw-badge"><i class="ri-truck-line"></i> 免運</span>
        <span class="tw-badge"><i class="ri-flashlight-line"></i> 24H 到貨</span>
        <span v-if="canInstallment" class="tw-badge"><i class="ri-bank-card-line"></i> 分期 0 利率</span>
      </div>

      <div class="tw-evidence">
        <span>已售 {{ product.sale || 0 }} 件</span>
        <span v-if="product.stock != null" class="tw-dot">·</span>
        <span v-if="product.stock != null && product.stock > 0" class="tw-stock-ok">庫存剩 {{ product.stock }} 件</span>
        <span v-else-if="product.stock != null && product.stock <= 0" class="tw-stock-out">暫時缺貨</span>
      </div>

      <div class="tw-actions">
        <button class="tw-btn-main" @click.prevent="handleAddToCart" aria-label="加入購物車">
          <i class="ri-shopping-cart-line"></i> 加入購物車
        </button>
        <button class="tw-btn-icon" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-label="快速預覽">
          <i class="ri-eye-line"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- 橫向小卡（人氣商品、特別優惠、最高評價板塊用） -->
  <div v-else-if="variant === 'list'" class="tw-product-list-item">
    <router-link :to="`/vertical/product-details?id=${product.id}`" class="tw-list-img">
      <img :src="imgSrc" :alt="product.name" />
      <span v-if="product.newStatus === 1" class="badge-mini badge-new">新</span>
    </router-link>
    <div class="tw-list-body">
      <router-link :to="`/vertical/product-details?id=${product.id}`" class="tw-list-title">
        {{ product.name }}
      </router-link>
      <div v-if="product.subTitle" class="tw-list-subtitle">{{ product.subTitle }}</div>
      <div class="tw-list-price">
        <span class="tw-price-current">NT$ {{ formatPrice(product.price) }}</span>
        <span v-if="hasOriginalPrice" class="tw-price-original">NT$ {{ formatPrice(product.originalPrice) }}</span>
      </div>
      <div class="tw-list-evidence">已售 {{ product.sale || 0 }} 件</div>
    </div>
  </div>
</template>

<script>
import { collectProduct } from '@/api/product/productUserCollect'
import { getToken } from '@/utils/auth'
import { Message } from 'element-ui'
import eventBus from '@/utils/eventBus'

export default {
  name: 'ProductCard',
  props: {
    product: { type: Object, required: true },
    variant: { type: String, default: 'standard' }, // 'standard' | 'list'
    fallbackImg: { type: String, default: '/test/static/picture/product-6.jpg' }
  },
  data() {
    return {
      collected: false,
      collectLoading: false
    }
  },
  computed: {
    imgSrc() {
      return this.product.mainImageUrl || this.fallbackImg
    },
    hasOriginalPrice() {
      const p = Number(this.product.price) || 0
      const op = Number(this.product.originalPrice) || 0
      return op > 0 && op > p
    },
    discountPercent() {
      if (!this.hasOriginalPrice) return 0
      const p = Number(this.product.price)
      const op = Number(this.product.originalPrice)
      return Math.round(((op - p) / op) * 100)
    },
    canInstallment() {
      return Number(this.product.price) >= 3000
    },
    isHot() {
      return Number(this.product.sale) >= 10
    }
  },
  created() {
    this.collected = !!this.product.collected
  },
  methods: {
    formatPrice(value) {
      const n = Number(value) || 0
      return n.toLocaleString('zh-TW', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    },
    handleToggleCollect() {
      if (!getToken()) {
        this.$router.push('/vertical/login').catch(() => {})
        return
      }
      if (this.collectLoading) return
      this.collectLoading = true
      const isCollect = !this.collected
      const formData = { isCollect, productIds: this.product.id }
      collectProduct(formData)
        .then(res => {
          this.collected = isCollect
          if (isCollect) {
            Message.success('已成功收藏商品')
          } else {
            Message.success('已取消收藏')
          }
          eventBus.$emit('wish-updated')
          this.$emit('collect-change', { productId: this.product.id, collected: isCollect })
        })
        .catch(() => {})
        .finally(() => {
          this.collectLoading = false
        })
    },

    handleAddToCart() {
      eventBus.$emit('open-add-to-cart', { productId: this.product.id })
    }
  }
}
</script>

<style scoped>
/* ========== 標準大卡 ========== */
.tw-product-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 6px;
  overflow: hidden;
  transition: box-shadow .25s ease, transform .25s ease, border-color .25s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.tw-product-card:hover {
  border-color: #1A8FA4;
  box-shadow: 0 6px 20px rgba(26, 143, 164, 0.14);
  transform: translateY(-2px);
}

.tw-card-img {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #f7f7f7;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
}
.tw-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s ease;
}
.tw-product-card:hover .tw-card-img img {
  transform: scale(1.05);
}

.badge-corner {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 3px 10px;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.5px;
}
.badge-new { background: #1A8FA4; }
.badge-hot { background: #d9362e; }

.badge-discount {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #d9362e;
  color: #fff;
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.wish-corner {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 34px;
  height: 34px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-size: 17px;
  transition: all .2s ease;
}
.wish-corner:hover {
  background: #1A8FA4;
  color: #fff;
}
.wish-corner.is-collected {
  color: #e74c3c;
}
.wish-corner.is-collected:hover {
  background: #e74c3c;
  color: #fff;
}
.wish-corner.is-loading {
  opacity: 0.6;
  pointer-events: none;
}

.tw-card-body {
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  flex: 1;
}

.tw-subtitle {
  font-size: 12px;
  color: #888;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.tw-title {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.45;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  letter-spacing: 0.2px;
}
.tw-title:hover { color: #1A8FA4; }

.tw-price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
}
.tw-price-current {
  color: #c0392b;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.5px;
}
.tw-price-original {
  color: #999;
  font-size: 12px;
  text-decoration: line-through;
  font-weight: 400;
}

.tw-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.tw-badge {
  font-size: 11px;
  color: #1A8FA4;
  background: #e8f5f7;
  padding: 2px 8px;
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  line-height: 1.6;
  font-weight: 500;
  letter-spacing: 0.2px;
}
.tw-badge i { font-size: 13px; }

.tw-evidence {
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
}
.tw-dot { color: #ccc; }
.tw-stock-ok { color: #27ae60; font-weight: 600; }
.tw-stock-out { color: #d9362e; }

.tw-actions {
  display: flex;
  gap: 8px;
  margin-top: auto;
  padding-top: 4px;
}
.tw-btn-main {
  flex: 1;
  background: #1A8FA4;
  color: #fff;
  border: none;
  padding: 9px 12px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  letter-spacing: 0.5px;
  transition: background .2s ease;
}
.tw-btn-main:hover { background: #157285; color: #fff; }
.tw-btn-icon {
  width: 36px;
  height: 36px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  color: #555;
  font-size: 16px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all .2s ease;
}
.tw-btn-icon:hover {
  border-color: #1A8FA4;
  color: #1A8FA4;
  background: #e8f5f7;
}

/* ========== 橫向小卡 ========== */
.tw-product-list-item {
  display: flex;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}
.tw-product-list-item:last-child { border-bottom: none; }

.tw-list-img {
  position: relative;
  flex-shrink: 0;
  width: 90px;
  height: 90px;
  border-radius: 4px;
  overflow: hidden;
  background: #f7f7f7;
}
.tw-list-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.badge-mini {
  position: absolute;
  top: 4px;
  left: 4px;
  padding: 1px 6px;
  border-radius: 3px;
  font-size: 10px;
  color: #fff;
  font-weight: 700;
  line-height: 1.4;
  background: #1A8FA4;
}

.tw-list-body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}
.tw-list-title {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  letter-spacing: 0.2px;
}
.tw-list-title:hover { color: #1A8FA4; }
.tw-list-subtitle {
  font-size: 11px;
  color: #888;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
}
.tw-list-price {
  display: flex;
  align-items: baseline;
  gap: 6px;
  flex-wrap: wrap;
}
.tw-list-price .tw-price-current { font-size: 15px; font-weight: 800; color: #c0392b; }
.tw-list-price .tw-price-original { font-size: 11px; color: #999; text-decoration: line-through; }
.tw-list-evidence {
  font-size: 11px;
  color: #888;
}
</style>
