import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import { isRelogin } from '@/utils/request'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/register','/purchase/detail']

// 全域性前置守衛
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    to.meta.title && store.dispatch('settings/setTitle', to.meta.title)
    /* has token */
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        isRelogin.show = true
        // 判斷當前使用者是否已拉取完 user_info 資訊
        store.dispatch('GetInfo').then(() => {
          isRelogin.show = false
          store.dispatch('GenerateRoutes').then(accessRoutes => {
            // 根據 roles 許可權生成可訪問的路由表
            router.addRoutes(accessRoutes) // 動態新增可訪問路由表
            next({ ...to, replace: true }) // hack 方法 確保 addRoutes 已完成
          })
        }).catch(err => {
            store.dispatch('LogOut').then(() => {
              Message.error(err)
              next({ path: '/' })
            })
          })
      } else {
        // 普通使用者透過修改 URL 進入後臺的攔截處理
        if (store.state.user.userType === '03' && (to.path === '/index/' || to.path === '/index')) {
          next({ path: '/' })
          NProgress.done()
        } else {
          next()
        }
      }
    }
  } else {
    // 沒有 token
    const noAuth = to.matched.some(record => record.meta.noAuth);
    if ((whiteList.indexOf(to.path) !== -1) || noAuth || to.path === '/') {
      // 在免登入白名單，直接進入
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`) // 否則全部重定向到登入頁
      NProgress.done()
    }
  }
})

// 全域性後置守衛
router.afterEach(() => {
  NProgress.done()
})
