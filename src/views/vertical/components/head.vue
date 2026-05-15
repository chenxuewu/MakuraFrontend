<template>
  <div class="vertical-page">
    <div class="preloader">
      <div class="content">
        <div class="box"></div>
      </div>
    </div>

    <header class="header-area">
      <div class="top-header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <ul class="header-left-content">
                <li>
                  <router-link to="/vertical/order-tracking">訂單追蹤</router-link>
                </li>
                <li>客服專線：<a href="tel:0800588168"><span>0800-588-168</span></a>（免付費）</li>
              </ul>
            </div>
            <div class="col-lg-4">
              <div class="header-right-content">
                <ul>
                  <li>
                    <div class="usd">
                      <select>
                        <option value="TWD">TWD 新台幣</option>
                        <option value="USD">USD 美金</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div class="navbar-option-item navbar-option-language dropdown language-option">
                      <button class="dropdown-toggle" type="button" id="language2" data-bs-toggle="dropdown"
                              aria-haspopup="true" aria-expanded="false"
                      >
                        <span class="lang-name">繁體中文</span>
                      </button>
                      <div class="dropdown-menu language-dropdown-menu" aria-labelledby="language2">
                        <a class="dropdown-item" href="#"><img src="/test/static/picture/english.png" alt="English">English</a>
                        <a class="dropdown-item" href="#"><img src="/test/static/picture/china.png" alt="简体中文">简体中文</a>
                      </div>
                    </div>
                  </li>
                  <li v-if="!isLoggedIn" class="header-user-li">
                    <router-link to="/vertical/login" class="header-login-btn">登入</router-link>
                  </li>
                  <li v-else class="header-user-li"
                      @mouseenter="userDropdownVisible = true"
                      @mouseleave="userDropdownVisible = false">
                    <div class="header-user-trigger">
                      <span class="header-user-name">{{ userName || '會員' }}</span>
                      <i class="ri-arrow-down-s-line header-arrow" :class="{ 'arrow-up': userDropdownVisible }"></i>
                    </div>
                    <transition name="dropdown-fade">
                      <div v-show="userDropdownVisible" class="header-user-dropdown">
                        <router-link to="/vertical/my-account" class="header-dd-item">
                          <i class="ri-user-line"></i>我的帳號
                        </router-link>
                        <router-link to="/vertical/order-history" class="header-dd-item">
                          <i class="ri-file-list-3-line"></i>我的訂單
                        </router-link>
                        <div class="header-dd-divider"></div>
                        <a href="javascript:;" class="header-dd-item header-dd-logout" @click="handleLogout">
                          <i class="ri-logout-box-r-line"></i>登出
                        </a>
                      </div>
                    </transition>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="middle-header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3">
              <div class="logo">
                <router-link to="/vertical/index"><img src="/test/static/picture/logo.png" alt="Makura"></router-link>
              </div>
            </div>
            <div class="col-lg-5">
              <form class="search-box" @submit.prevent="onHeadSearch">
                <input
                  v-model="headSearchInput"
                  type="text"
                  name="Search"
                  placeholder="搜尋商品、品牌或型號..."
                  class="form-control"
                >
                <button
                  v-if="headSearchInput"
                  type="button"
                  class="search-clear"
                  @click="headSearchInput = ''"
                >
                  <i class="ri-close-line"></i>
                </button>
                <button type="submit" class="search-btn">
                  <i class="ri-search-line"></i>搜尋
                </button>
              </form>
            </div>
            <div class="col-lg-4">
              <ul class="wish-cart">
                <li>
                  <router-link to="/vertical/wishlist">
                    <span class="wish-icon"><i class="ri-heart-line"></i><span class="count">{{ wishCount }}</span></span>
                    <span class="favorite">收藏</span>我的收藏
                  </router-link>
                </li>
                <li>
                  <router-link to="/vertical/shopping-cart">
                    <span class="wish-icon"><i class="ri-shopping-cart-line"></i><span class="count">{{ cartCount }}</span></span>
                    <span class="favorite">購物車</span>NT${{ cartTotalPrice.toFixed(2) }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-area navbar-area-style-two only-home-one-sticky">
        <div class="mobile-responsive-nav">
          <div class="container">
            <div class="mobile-responsive-menu">
              <div class="navbar-category">
                <button type="button" id="categoryButton-1" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false"
                ><i class="ri-menu-line"></i></button>
                <div class="navbar-category-dropdown dropdown-menu" aria-labelledby="categoryButton-1">
                  <ul>
                    <li v-for="cat in categories" :key="cat.id">
                      <router-link :to="{ path: '/vertical/products', query: { categoryId: cat.id } }">{{ cat.displayName }}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="logo">
                <router-link to="/vertical/index"><img src="/test/static/picture/logo.png" alt="Makura"></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="desktop-nav">
          <div class="container">
            <nav class="navbar navbar-expand-md navbar-light">
              <div class="navbar-category"
                   @mouseenter="onCategoryEnter"
                   @mouseleave="onCategoryLeave"
              >
                <button type="button"><i class="ri-menu-line"></i>所有分類<i class="arrow-down ri-arrow-down-s-line"></i></button>
                <transition name="cat-drop">
                  <div v-show="categoryVisible" class="navbar-category-dropdown">
                    <ul>
                      <li v-for="cat in categories" :key="cat.id">
                        <router-link :to="{ path: '/vertical/products', query: { categoryId: cat.id } }">{{ cat.displayName }}</router-link>
                      </li>
                    </ul>
                  </div>
                </transition>
              </div>
              <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                <ul class="navbar-nav">
                  <li class="nav-item mega-menu">
                    <a href="#" :class="['nav-link', { active: activeNav === 'shop' }]">商店<i class="ri-arrow-down-s-line"></i></a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <div class="row">
                          <div class="col">
                            <h6 class="sub-menu-title">商品頁面</h6>
                            <ul class="sub-menu">
                              <li>
                                <router-link to="/vertical/products">全部商品</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/best-sellers">熱銷商品</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/featured-products">精選商品</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/trending-products">熱門商品</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/new-arrivals">新品上市</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/categories">商品分類</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/product-details">商品詳情</router-link>
                              </li>
                            </ul>
                          </div>
                          <div class="col">
                            <h6 class="sub-menu-title">其他頁面</h6>
                            <ul class="sub-menu">
                              <li>
                                <router-link to="/vertical/offer-products">優惠商品</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/shopping-cart">購物車</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/checkout">結帳</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/wishlist">收藏清單</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/my-account">我的帳號</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/success-order">下單成功</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/order-tracking">訂單追蹤</router-link>
                              </li>
                            </ul>
                          </div>
                          <div class="col">
                            <h6 class="sub-menu-title">會員中心</h6>
                            <ul class="sub-menu">
                              <li>
                                <router-link to="/vertical/dashboard">儀表板</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/edit-profile">編輯個人資料</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/edit-address">編輯地址</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/order-history">訂單紀錄</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/order-details">訂單詳情</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/address">新增地址</router-link>
                              </li>
                              <li>
                                <router-link to="/vertical/password">變更密碼</router-link>
                              </li>
                            </ul>
                          </div>
                          <div class="col">
                            <router-link to="/vertical/products" class="menu-img"></router-link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a href="#" :class="['nav-link', { active: activeNav === 'pages' }]">其他頁面<i class="ri-arrow-down-s-line"></i></a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/vertical/about" class="nav-link">關於我們</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/vertical/customer-comments" class="nav-link">顧客評價</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/vertical/faq" class="nav-link">常見問題</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/vertical/knowledge" :class="['nav-link', { active: activeNav === 'knowledge' }]">工具知識百科</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/vertical/store-location" class="nav-link">門市據點</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/vertical/search-page" class="nav-link">搜尋頁面</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/vertical/privacy-policy" class="nav-link">隱私權政策</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/vertical/terms-conditions" class="nav-link">服務條款</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/vertical/coming-soon" class="nav-link">即將上線</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/vertical/404" class="nav-link">404 頁面</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link to="/vertical/contact" :class="['nav-link', { active: activeNav === 'contact' }]">聯絡我們</router-link>
                  </li>
                </ul>
                <div class="others-options"><span>全館單筆滿 NT$1,000 免運費 ‧ 24 小時快速出貨</span></div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <AddToCartModal ref="addToCartModal" />
  </div>
</template>

<script>
import verticalMixin, { DEPENDENCIES, CAROUSEL_SELECTORS, OWL_CONFIGS } from '@/mixins/vertical'
import { frontGetCategoryTree } from '@/api/product/category'
import { mapState } from 'vuex'
import { cartList } from '@/api/cart/cart'
import { listCollect } from '@/api/product/collect'
import eventBus from '@/utils/eventBus'
import AddToCartModal from './AddToCartModal.vue'

export default {
  name: 'VerticalHead',
  mixins: [verticalMixin],
  components: { AddToCartModal },
  data() {
    return {
      categoryVisible: false,  // 分類下拉顯示狀態
      categories: [],          // 後端動態分類列表
      headSearchInput: '',     // 頂部搜尋框輸入
      userDropdownVisible: false,   // 會員下拉顯示狀態
      cartCount: 0,            // 購物車商品數量
      cartTotalPrice: 0,       // 購物車總金額
      wishCount: 0             // 收藏商品數量
    }
  },
  created() {
    this.fetchCategories()
    if (this.token) {
      this.$store.dispatch('GetInfo')
      this.fetchCartAndWishCounts()
    }
  },
  mounted() {
    eventBus.$on('cart-updated', () => this.fetchCartAndWishCounts())
    eventBus.$on('wish-updated', () => this.fetchCartAndWishCounts())
    eventBus.$on('open-add-to-cart', ({ productId }) => this.openAddToCart(productId))
  },
  beforeDestroy() {
    eventBus.$off('cart-updated')
    eventBus.$off('wish-updated')
  },
  watch: {
    // 路由變化時重新判斷是否首頁
    '$route'() {
      this.categoryVisible = false
    }
  },
  computed: {
    ...mapState({
      token: state => state.user.token,
      userName: state => state.user.name,
      avatar: state => state.user.avatar
    }),
    isLoggedIn() {
      return !!this.token
    },
    userInitial() {
      const name = this.userName || 'M'
      return name.trim().charAt(0).toUpperCase()
    },
    isHomePage() {
      return this.$route.path === '/vertical/index' ||
             this.$route.path === '/vertical/' ||
             this.$route.path === '/vertical'
    },
    activeNav() {
      const path = this.$route.path
      const homeRoutes = ['/vertical/index']
      const shopRoutes = [
        '/vertical/products', '/vertical/best-sellers', '/vertical/featured-products',
        '/vertical/trending-products', '/vertical/new-arrivals', '/vertical/categories',
        '/vertical/product-details', '/vertical/offer-products', '/vertical/shopping-cart',
        '/vertical/checkout', '/vertical/wishlist', '/vertical/my-account', '/vertical/success-order',
        '/vertical/order-tracking', '/vertical/dashboard', '/vertical/edit-profile',
        '/vertical/edit-address', '/vertical/order-history', '/vertical/order-details',
        '/vertical/address', '/vertical/password', '/vertical/search-page'
      ]
      const pageRoutes = [
        '/vertical/about', '/vertical/customer-comments', '/vertical/faq',
        '/vertical/store-location', '/vertical/search-page', '/vertical/privacy-policy',
        '/vertical/terms-conditions', '/vertical/coming-soon', '/vertical/404'
      ]
      const knowledgeRoutes = ['/vertical/knowledge', '/vertical/knowledge-detail']
      if (homeRoutes.includes(path)) return 'home'
      if (shopRoutes.includes(path)) return 'shop'
      if (pageRoutes.includes(path)) return 'pages'
      if (knowledgeRoutes.includes(path)) return 'knowledge'
      if (path === '/vertical/contact') return 'contact'
      return ''
    }
  },
  methods: {
    fetchCategories() {
      frontGetCategoryTree().then(res => {
        if (res.code === 200 && Array.isArray(res.data)) {
          this.categories = res.data
        }
      }).catch(() => {})
    },

    fetchCartAndWishCounts() {
      const requestCart = cartList(null, null).then(res => {
        if (res.code === 200 && Array.isArray(res.rows)) {
          this.cartCount = res.rows.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0)
          this.cartTotalPrice = res.rows.reduce((sum, item) => {
            return sum + (Number(item.price) || 0) * (Number(item.quantity) || 0)
          }, 0)
        }
      }).catch(() => {})

      const requestWish = listCollect({ pageNum: 1, pageSize: 1 }).then(res => {
        if (res.code === 200) {
          this.wishCount = Number(res.total) || 0
        }
      }).catch(() => {})

      Promise.all([requestCart, requestWish])
    },

    onHeadSearch() {
      const kw = this.headSearchInput.trim()
      this.$router.push({
        path: '/vertical/best-sellers',
        query: kw ? { keyword: kw } : {}
      })
    },

    openAddToCart(productId) {
      this.$refs.addToCartModal.open(productId)
    },

    onCategoryEnter() {
      // 鼠標移入：始終顯示分類下拉
      this.categoryVisible = true
    },
    onCategoryLeave() {
      this.categoryVisible = false
    },

    handleLogout() {
      this.$confirm('確定要登出嗎？', '提示', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('LogOut').then(() => {
          this.$message.success('已成功登出')
          this.$router.push('/vertical/index')
        })
      }).catch(() => {})
    },

    loadScripts() {
      if (window._verticalScriptsLoaded) {
        // 脚本已加载，不再重复初始化（custom.js 已处理）
        return
      }
      window._verticalScriptsLoaded = true
      const loadNext = (index) => {
        if (index >= DEPENDENCIES.length) {
          const customScript = document.createElement('script')
          customScript.src = '/test/static/js/custom.js'
          customScript.async = false
          document.body.appendChild(customScript)
          return
        }
        const script = document.createElement('script')
        script.src = DEPENDENCIES[index]
        script.async = false
        script.onload = () => { loadNext(index + 1) }
        script.onerror = () => { loadNext(index + 1) }
        document.body.appendChild(script)
      }
      loadNext(0)
    },
    initPlugins() {
      // 等待 DOM 完全就绪
      this.$nextTick(() => {
        if (typeof jQuery === 'undefined') {
          setTimeout(() => { this.initPlugins() }, 100)
          return
        }
        const $ = jQuery

        // 只初始化当前页面存在的轮播
        CAROUSEL_SELECTORS.forEach(sel => {
          try {
            const $el = $(sel)
            if ($el.length) {
              if ($el.data('owl.carousel')) {
                $el.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded')
              }
            }
          } catch(e) {}
        })

        // 初始化 meanmenu（仅在桌面导航存在时）
        try {
          const $meanMenu = $('.mean-menu')
          if ($meanMenu.length && $.fn.meanmenu && !$meanMenu.data('meanmenu')) {
            $meanMenu.meanmenu({ meanScreenWidth: '991' })
          }
        } catch(e) {}

        // 初始化 Owl Carousel（仅在插件存在时）
        try {
          if ($.fn.owlCarousel) {
            Object.entries(OWL_CONFIGS).forEach(([sel, cfg]) => {
              const $carousel = $(sel)
              if ($carousel.length) {
                $carousel.owlCarousel(cfg)
              }
            })
          }
        } catch(e) {}

        // 初始化 WOW 动画
        try { if (typeof WOW !== 'undefined' && $('.wow').length) { new WOW({ mobile: false }).init() } } catch(e) {}
      })
    },
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

/* 搜尋框清除按鈕（放在非 scoped 區塊，避免 vue-loader 15 對 :deep() 解析的差異導致 position:absolute 失效，
   按鈕落到第二行）。.search-btn 來自 style.css：position:absolute; right:2px; 寬約 90px，
   清除按鈕需顯示在搜尋按鈕左側。 */
.middle-header .search-box {
  position: relative;
}
.middle-header .search-box .form-control {
  padding-right: 140px;
}
.middle-header .search-box .search-clear {
  position: absolute !important;
  right: 102px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #aaa;
  font-size: 18px;
  padding: 4px 6px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color .15s;
  z-index: 3;
}
.middle-header .search-box .search-clear:hover {
  color: #555;
}

/* 登入按鈕 */
.header-login-btn {
  color: #fff !important;
  background: #1A8FA4;
  padding: 5px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s;
}
.header-login-btn:hover {
  background: #157285;
  color: #fff !important;
}

/* 會員下拉 */
.header-user-li {
  /* 覆蓋全局 li 分隔線，避免 last-child 邏輯影響 */
  border-right: none !important;
}
.header-user-wrap,
.header-user-trigger {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
.header-avatar-wrap {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
.header-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.header-avatar-initial {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #1a1a2e;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  border-radius: 50%;
}
.header-user-name {
  font-size: 15px;
  font-weight: 500;
  color: #1a1a2e;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 72px;
}
.header-arrow {
  font-size: 16px;
  color: #888;
  transition: transform 0.2s;
  flex-shrink: 0;
}
.header-arrow.arrow-up {
  transform: rotate(180deg);
}

/* 下拉面板 */
.header-user-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 160px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  z-index: 9999;
  overflow: hidden;
}
.header-dd-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  font-size: 14px;
  color: #444;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}
.header-dd-item i {
  font-size: 16px;
  color: #888;
  transition: color 0.15s;
}
.header-dd-item:hover {
  background: #f4f4f8;
  color: #1a1a2e;
}
.header-dd-item:hover i {
  color: #1a1a2e;
}
.header-dd-logout {
  color: #1a1a2e;
}
.header-dd-logout i {
  color: #1a1a2e;
}
.header-dd-logout:hover {
  background: #f4f4f8;
}
.header-dd-divider {
  height: 1px;
  background: #eee;
  margin: 4px 0;
}

/* 下拉動畫 */
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.15s, transform 0.15s;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
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

/* 分類下拉面板：由 Vue v-show 控制顯示隱藏，確保外部 CSS 不干擾 */
.vertical-page :deep(.desktop-nav .navbar-category .navbar-category-dropdown) {
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: all !important;
}

/* 分類下拉展開動畫 */
.cat-drop-enter-active,
.cat-drop-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.cat-drop-enter,
.cat-drop-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* 搜尋框清除按鈕樣式已移至非 scoped 區塊，避免作用域選擇器解析差異 */
</style>
