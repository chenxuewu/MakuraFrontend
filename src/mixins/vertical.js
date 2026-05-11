/**
 * vertical 页面混入
 * 集中管理：外部脚本加载、Modal 清理、轮播插件初始化
 */

export const DEPENDENCIES = [
  '/test/static/js/jquery.min.js',
  '/test/static/js/bootstrap.bundle.min.js',
  '/test/static/js/meanmenu.min.js',
  '/test/static/js/owl.carousel.min.js',
  '/test/static/js/wow.min.js',
  '/test/static/js/range-slider.min.js',
  '/test/static/js/form-validator.min.js',
  '/test/static/js/contact-form-script.js',
  '/test/static/js/ajaxchimp.min.js',
]

export const CAROUSEL_SELECTORS = [
  '.hero-slider', '.hero-slider-two', '.best-product-slider',
  '.featured-product-slider', '.flash-deals-slider', '.categories-slider',
  '.partner-slider', '.customer-slider', '#big', '#thumbs',
]

export const OWL_CONFIGS = {
  '.hero-slider, .hero-slider-two': { items: 1, loop: true, nav: false, dots: true, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true },
  '.best-product-slider': { loop: true, margin: 24, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"], responsive: { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } } },
  '.featured-product-slider': { loop: true, margin: 24, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"], responsive: { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 2 }, 1200: { items: 3 } } },
  '.flash-deals-slider': { loop: true, margin: 24, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"], responsive: { 0: { items: 1 }, 576: { items: 2 }, 1200: { items: 2 } } },
  '.categories-slider': { loop: true, margin: 24, nav: true, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"], responsive: { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 2 }, 1200: { items: 3 } } },
  '.partner-slider': { loop: true, margin: 24, nav: false, dots: false, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, responsive: { 0: { items: 2 }, 576: { items: 3 }, 768: { items: 4 }, 992: { items: 5 }, 1200: { items: 6 } } },
  '.customer-slider': { loop: true, nav: false, dots: true, autoplay: true, smartSpeed: 1000, autoplayHoverPause: true, responsive: { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 1 } } },
}

export default {
  beforeDestroy() {
    this.cleanupModal()
    this.destroyCarousels()
  },
  mounted() {
    this.loadScripts()
    this.$nextTick(() => {
      const preloader = this.$el.querySelector('.preloader')
      if (preloader) preloader.classList.add('preloader-deactivate')
    })
    this.initPageScripts()
  },
  methods: {
    cleanupModal() {
      document.querySelectorAll('.modal.show').forEach(el => {
        if (window.bootstrap && window.bootstrap.Modal) {
          const instance = window.bootstrap.Modal.getInstance(el)
          if (instance) instance.hide()
        } else if (typeof jQuery !== 'undefined') {
          jQuery(el).modal('hide')
        }
      })
      document.querySelectorAll('.modal-backdrop').forEach(el => el.remove())
      document.body.classList.remove('modal-open')
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('padding-right')
    },

    destroyCarousels() {
      if (typeof jQuery === 'undefined') return
      const $ = jQuery
      CAROUSEL_SELECTORS.forEach(sel => {
        try {
          const el = $(sel)
          if (el.length && el.data('owl.carousel')) {
            el.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded')
          }
        } catch (e) {}
      })
      try {
        if ($.fn.meanmenu) {
          const menu = $('.mean-menu').data('meanmenu')
          if (menu) menu.meanmenu('destroy')
        }
      } catch (e) {}
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
        const $body = $(document.body)

        // 只初始化当前页面存在的轮播
        CAROUSEL_SELECTORS.forEach(sel => {
          try {
            const $el = $(sel)
            if ($el.length) {
              // 销毁已存在的实例
              if ($el.data('owl.carousel')) {
                $el.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded')
              }
            }
          } catch (e) {}
        })

        // 初始化 meanmenu（仅在桌面导航存在时）
        try {
          const $meanMenu = $('.mean-menu')
          if ($meanMenu.length && $.fn.meanmenu && !$meanMenu.data('meanmenu')) {
            $meanMenu.meanmenu({ meanScreenWidth: '991' })
          }
        } catch (e) {}

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
        } catch (e) {}

        // 初始化 WOW 动画
        try {
          if (typeof WOW !== 'undefined' && $('.wow').length) {
            new WOW({ mobile: false }).init()
          }
        } catch (e) {}
      })
    },

    initPageScripts() {},
  },
}
