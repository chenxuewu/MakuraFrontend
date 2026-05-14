import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
// 前臺的Layout
// import { Front } from '@/layout/front.vue'

/**
 * Note: 路由配置項
 *
 * hidden: true                     // 當設定 true 的時候該路由不會再側邊欄出現 如401，login等頁面，或者如一些編輯頁面/edit/1
 * alwaysShow: true                 // 當你一個路由下面的 children 宣告的路由大於1個時，自動會變成巢狀的模式--如元件頁面
 *                                  // 只有一個時，會將那個子路由當做根路由顯示在側邊欄--如引導頁面
 *                                  // 若你想不管路由下面的 children 宣告的個數都顯示你的根路由
 *                                  // 你可以設定 alwaysShow: true，這樣它就會忽略之前定義的規則，一直顯示根路由
 * redirect: noRedirect             // 當設定 noRedirect 的時候該路由在麵包屑導航中不可被點選
 * name:'router-name'               // 設定路由的名字，一定要填寫不然使用<keep-alive>時會出現各種問題
 * query: '{"id": 1, "name": "ry"}' // 訪問路由的預設傳遞引數
 * roles: ['admin', 'common']       // 訪問路由的角色許可權
 * permissions: ['a:a:a', 'b:b:b']  // 訪問路由的選單許可權
 * meta : {
    noCache: true                   // 如果設定為true，則不會被 <keep-alive> 快取(預設 false)
    title: 'title'                  // 設定該路由在側邊欄和麵包屑中展示的名字
    icon: 'svg-name'                // 設定該路由的圖示，對應路徑src/assets/icons/svg
    breadcrumb: false               // 如果設定為false，則不會在breadcrumb麵包屑中顯示
    activeMenu: '/system/user'      // 當路由設定了該屬性，則會高亮相對應的側邊欄。
  }
 */

// 公共路由
export const constantRoutes = [
  {
    path: '/',
    redirect: '/vertical/index'
  },

  // Vertical 页面路由
  {
    path: '/vertical',
    name: 'Vertical',
    hidden: true,
    component: { render: h => h('router-view') },
    meta: { noAuth: true },
    children: [
      {
        path: '',
        redirect: 'index'
      },
      {
        path: 'index',
        name: 'VerticalIndex',
        component: () => import('@/views/vertical/index.vue'),
        meta: { title: '首頁', noAuth: true }
      },
      {
        path: 'about',
        name: 'VerticalAbout',
        component: () => import('@/views/vertical/about.vue'),
        meta: { title: '關於我們', noAuth: true }
      },
      {
        path: 'products',
        name: 'VerticalProducts',
        component: () => import('@/views/vertical/products.vue'),
        meta: { title: '全部商品', noAuth: true }
      },
      {
        path: 'product-details',
        name: 'VerticalProductDetails',
        component: () => import('@/views/vertical/product-details.vue'),
        meta: { title: '商品詳情', noAuth: true }
      },
      {
        path: 'shopping-cart',
        name: 'VerticalShoppingCart',
        component: () => import('@/views/vertical/shopping-cart.vue'),
        meta: { title: '購物車', noAuth: true }
      },
      {
        path: 'checkout',
        name: 'VerticalCheckout',
        component: () => import('@/views/vertical/checkout.vue'),
        meta: { title: '結帳', noAuth: true }
      },
      {
        path: 'wishlist',
        name: 'VerticalWishlist',
        component: () => import('@/views/vertical/wishlist.vue'),
        meta: { title: '願望清單', noAuth: true }
      },
      {
        path: 'my-account',
        name: 'VerticalMyAccount',
        component: () => import('@/views/vertical/my-account.vue'),
        meta: { title: '我的帳戶', noAuth: true }
      },
      {
        path: 'dashboard',
        name: 'VerticalDashboard',
        component: () => import('@/views/vertical/dashboard.vue'),
        meta: { title: '儀表板', noAuth: true }
      },
      {
        path: 'order-history',
        name: 'VerticalOrderHistory',
        component: () => import('@/views/vertical/order-history.vue'),
        meta: { title: '訂單紀錄', noAuth: true }
      },
      {
        path: 'order-details',
        name: 'VerticalOrderDetails',
        component: () => import('@/views/vertical/order-details.vue'),
        meta: { title: '訂單詳情', noAuth: true }
      },
      {
        path: 'order-tracking',
        name: 'VerticalOrderTracking',
        component: () => import('@/views/vertical/order-tracking.vue'),
        meta: { title: '訂單追蹤', noAuth: true }
      },
      {
        path: 'contact',
        name: 'VerticalContact',
        component: () => import('@/views/vertical/contact.vue'),
        meta: { title: '聯絡我們', noAuth: true }
      },
      {
        path: 'faq',
        name: 'VerticalFaq',
        component: () => import('@/views/vertical/faq.vue'),
        meta: { title: '常見問題', noAuth: true }
      },
      {
        path: 'knowledge',
        name: 'VerticalKnowledge',
        component: () => import('@/views/vertical/knowledge-list.vue'),
        meta: { title: '工具知識百科', noAuth: true }
      },
      {
        path: 'knowledge-detail',
        name: 'VerticalKnowledgeDetail',
        component: () => import('@/views/vertical/knowledge.vue'),
        meta: { title: '文章詳情', noAuth: true }
      },
      {
        path: 'categories',
        name: 'VerticalCategories',
        component: () => import('@/views/vertical/categories.vue'),
        meta: { title: '商品分類', noAuth: true }
      },
      {
        path: 'best-sellers',
        name: 'VerticalBestSellers',
        component: () => import('@/views/vertical/best-sellers.vue'),
        meta: { title: '熱銷商品', noAuth: true }
      },
      {
        path: 'featured-products',
        name: 'VerticalFeaturedProducts',
        component: () => import('@/views/vertical/featured-products.vue'),
        meta: { title: '精選商品', noAuth: true }
      },
      {
        path: 'trending-products',
        name: 'VerticalTrendingProducts',
        component: () => import('@/views/vertical/trending-products.vue'),
        meta: { title: '熱門商品', noAuth: true }
      },
      {
        path: 'new-arrivals',
        name: 'VerticalNewArrivals',
        component: () => import('@/views/vertical/new-arrivals.vue'),
        meta: { title: '新品上市', noAuth: true }
      },
      {
        path: 'offer-products',
        name: 'VerticalOfferProducts',
        component: () => import('@/views/vertical/offer-products.vue'),
        meta: { title: '優惠商品', noAuth: true }
      },
      {
        path: 'store-location',
        name: 'VerticalStoreLocation',
        component: () => import('@/views/vertical/store-location.vue'),
        meta: { title: '門市據點', noAuth: true }
      },
      {
        path: 'customer-comments',
        name: 'VerticalCustomerComments',
        component: () => import('@/views/vertical/customer-comments.vue'),
        meta: { title: '顧客評價', noAuth: true }
      },
      {
        path: 'privacy-policy',
        name: 'VerticalPrivacyPolicy',
        component: () => import('@/views/vertical/privacy-policy.vue'),
        meta: { title: '隱私權政策', noAuth: true }
      },
      {
        path: 'terms-conditions',
        name: 'VerticalTermsConditions',
        component: () => import('@/views/vertical/terms-conditions.vue'),
        meta: { title: '服務條款', noAuth: true }
      },
      {
        path: 'search-page',
        name: 'VerticalSearchPage',
        component: () => import('@/views/vertical/search-page.vue'),
        meta: { title: '搜尋頁面', noAuth: true }
      },
      {
        path: 'success-order',
        name: 'VerticalSuccessOrder',
        component: () => import('@/views/vertical/success-order.vue'),
        meta: { title: '下單成功', noAuth: true }
      },
      {
        path: 'coming-soon',
        name: 'VerticalComingSoon',
        component: () => import('@/views/vertical/coming-soon.vue'),
        meta: { title: '即將上線', noAuth: true }
      },
      {
        path: '404',
        name: 'Vertical404',
        component: () => import('@/views/vertical/404.vue'),
        meta: { title: '404', noAuth: true }
      },
      {
        path: 'edit-profile',
        name: 'VerticalEditProfile',
        component: () => import('@/views/vertical/edit-profile.vue'),
        meta: { title: '編輯個人資料', noAuth: true }
      },
      {
        path: 'edit-address',
        name: 'VerticalEditAddress',
        component: () => import('@/views/vertical/edit-address.vue'),
        meta: { title: '編輯地址', noAuth: true }
      },
      {
        path: 'address',
        name: 'VerticalAddress',
        component: () => import('@/views/vertical/address.vue'),
        meta: { title: '新增地址', noAuth: true }
      },
      {
        path: 'password',
        name: 'VerticalPassword',
        component: () => import('@/views/vertical/password.vue'),
        meta: { title: '變更密碼', noAuth: true }
      },
      {
        path: 'index',
        name: 'VerticalIndex',
        component: () => import('@/views/vertical/index.vue'),
        meta: { title: '首頁版型二', noAuth: true }
      },
    ]
  },
  {
    path: '/profile',
    name: 'ProfileFront',
    hidden: true,
    component: () =>
      import('@/views/front/profile/index.vue'),
    meta: { title: '個人中心', noAuth: true },
  },

  {
    path: '/order',
    name: 'Order',
    hidden: true,
    component: () =>
      import( /* webpackChunkName: "about" */ '@/views/front/order/index.vue'),
    meta: { title: '訂單管理', noAuth: true },
  },

  {
    path: '/cart',
    name: 'cart',
    hidden: true,
    component: () =>
      import( /* webpackChunkName: "about" */ '@/views/front/cart/index.vue'),
    meta: { title: '購物車', noAuth: true },
  },

  {
    path: '/settleAccounts',
    name: 'settleAccounts',
    hidden: true,
    component: () =>
      import( /* webpackChunkName: "about" */ '@/views/front/settleAccounts/index.vue'),
    meta: { title: '購物車', noAuth: true },
  },

  {
    path: '/settleAccountsNoAuth',
    name: 'settleAccountsNoAuth',
    hidden: true,
    component: () =>
      import( /* webpackChunkName: "about" */ '@/views/front/settleAccounts/indexNoAuth.vue'),
    meta: {
      title: '下單成功頁面',
      noAuth: true
    },
  },

  {
    path: '/frontProductDetail',
    name: 'FrontProductDetail',
    hidden: true,
    component: () =>
      import( '@/views/front/product/detail.vue'),
    meta: {
      title: '商品詳情',
      noAuth: true
    },
  },


  {
    path: '/myCollect',
    name: 'myCollect',
    hidden: true,
    component: () =>
      import( '@/views/front/collect/index.vue'),
    meta: { title: '我的收藏', noAuth: true },
  },

  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/register'),
    hidden: true
  },
  {
    path: '/purchase/detail',
    component: () => import('@/views/front/purchase/detail'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error/401'),
    hidden: true
  },
  {
    path: '/index',
    component: Layout,
    // redirect: 'index',
    children: [
      {
        path: '',
        component: () => import('@/views/index'),
        name: 'Index',
        meta: { title: '首頁', icon: 'dashboard', affix: true}
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    hidden: true,
    redirect: 'noredirect',
    children: [
      {
        path: 'profile',
        component: () => import('@/views/system/user/profile/index'),
        name: 'Profile',
        meta: { title: '個人中心', icon: 'user' }
      }
    ]
  },
]

// 動態路由，基於使用者許可權動態去載入
export const dynamicRoutes = [
  {
    path: '/system/user-auth',
    component: Layout,
    hidden: true,
    permissions: ['system:user:edit'],
    children: [
      {
        path: 'role/:userId(\\d+)',
        component: () => import('@/views/system/user/authRole'),
        name: 'AuthRole',
        meta: { title: '分配角色', activeMenu: '/system/user' }
      }
    ]
  },
  {
    path: '/system/role-auth',
    component: Layout,
    hidden: true,
    permissions: ['system:role:edit'],
    children: [
      {
        path: 'user/:roleId(\\d+)',
        component: () => import('@/views/system/role/authUser'),
        name: 'AuthUser',
        meta: { title: '分配使用者', activeMenu: '/system/role' }
      }
    ]
  },
  {
    path: '/system/dict-data',
    component: Layout,
    hidden: true,
    permissions: ['system:dict:list'],
    children: [
      {
        path: 'index/:dictId(\\d+)',
        component: () => import('@/views/system/dict/data'),
        name: 'Data',
        meta: { title: '字典資料', activeMenu: '/system/dict' }
      }
    ]
  },
  {
    path: '/monitor/job-log',
    component: Layout,
    hidden: true,
    permissions: ['monitor:job:list'],
    children: [
      {
        path: 'index/:jobId(\\d+)',
        component: () => import('@/views/monitor/job/log'),
        name: 'JobLog',
        meta: { title: '排程日誌', activeMenu: '/monitor/job' }
      }
    ]
  },
  {
    path: '/tool/gen-edit',
    component: Layout,
    hidden: true,
    permissions: ['tool:gen:edit'],
    children: [
      {
        path: 'index/:tableId(\\d+)',
        component: () => import('@/views/tool/gen/editTable'),
        name: 'GenEdit',
        meta: { title: '修改生成配置', activeMenu: '/tool/gen' }
      }
    ]
  }
]

// 防止連續點選多次路由報錯
let routerPush = Router.prototype.push;
let routerReplace = Router.prototype.replace;
// push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}
// replace
Router.prototype.replace = function push(location) {
  return routerReplace.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'hash', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
