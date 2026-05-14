<template>
  <div class="vertical-page">

    <VerticalHead />

    <!-- 工具知識百科列表頁 -->
    <section class="tw-knowledge-list-area">
      <div class="container">

        <!-- 頁面標題 -->
        <div class="tw-list-header">
          <div class="tw-list-header-icon">
            <i class="ri-book-open-line"></i>
          </div>
          <div>
            <h1 class="tw-list-title">工具知識百科</h1>
            <p class="tw-list-desc">提供工地機械工具的安全操作、保養知識，協助您正確使用設備、延長工具壽命、保障作業安全。</p>
          </div>
        </div>

        <!-- 文章卡片列表 -->
        <div class="row">
          <div
            v-for="article in articles"
            :key="article.id"
            class="col-lg-6"
          >
            <router-link
              :to="{ path: '/vertical/knowledge-detail', query: { id: article.id } }"
              class="tw-knowledge-card"
            >
              <div class="tw-kcard-icon">
                <i :class="article.icon"></i>
              </div>
              <div class="tw-kcard-body">
                <h3 class="tw-kcard-title">{{ article.title }}</h3>
                <p class="tw-kcard-summary">{{ article.summary }}</p>
                <div class="tw-kcard-footer">
                  <span class="tw-kcard-meta">
                    <i class="ri-time-line"></i>
                    閱讀時間約 {{ article.readTime }} 分鐘
                  </span>
                  <span class="tw-kcard-cta">
                    閱讀全文 <i class="ri-arrow-right-line"></i>
                  </span>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <!-- 安全提醒橫幅 -->
        <div class="tw-safety-banner">
          <div class="tw-safety-icon">
            <i class="ri-shield-check-line"></i>
          </div>
          <div>
            <h4>安全提醒</h4>
            <p>所有工具操作前請詳閱原廠說明書，並依規定配戴個人防護裝備。如有任何疑問，歡迎<a href="#">聯絡我們</a>。</p>
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
import verticalMixin from '@/mixins/vertical'

const knowledgeData = [
  {
    id: 'chainsaw',
    title: '電鏈鋸使用須知',
    icon: 'ri-git-branch-line',
    readTime: 5,
    summary: '鏈條張力確認、制動器測試、避免反彈（kickback）傷害，定期潤滑鏈條與導板，作業時務必配戴護目鏡與防護手套。'
  },
  {
    id: 'grinder',
    title: '砂輪機安全操作',
    icon: 'ri-settings-3-line',
    readTime: 4,
    summary: '安裝前確認砂輪無裂痕，嚴禁拆除防護罩，作業距離保持 30 公分以上，砂輪更換後需靜置 1 分鐘再啟動。'
  },
  {
    id: 'battery',
    title: '鋰電池保養指南',
    icon: 'ri-battery-charge-line',
    readTime: 4,
    summary: '避免過度放電（低於 20% 充電最佳）、勿在高溫環境充電、長期存放保持 40~60% 電量，可延長電池壽命與安全性。'
  },
  {
    id: 'safety',
    title: '工地防護配備',
    icon: 'ri-shield-check-line',
    readTime: 3,
    summary: '安全帽、護目鏡、防噪耳罩、防滑手套、防護鞋為標準配備，暴風機作業建議加配防護面罩與長袖衣物。'
  }
]

export default {
  name: 'KnowledgeList',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  data() {
    return {
      articles: knowledgeData
    }
  },
  metaInfo() {
    return {
      title: '工具知識百科 — MAKURA'
    }
  }
}
</script>

<style>
@import '/test/static/css/bootstrap.min.css';
@import '/test/static/css/owl.theme.default.min.css';
@import '/test/static/css/owl.carousel.min.css';
@import '/test/static/css/remixicon.css';
@import '/test/static/css/meanmenu.min.css';
@import '/test/static/css/animate.min.css';
@import '/test/static/css/style.css';
@import '/test/static/css/responsive.css';

/* ===== 列表頁標題區 ===== */
.tw-knowledge-list-area { padding: 20px 0 60px; }

.tw-list-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 32px 36px;
  background: linear-gradient(135deg, #1A8FA4, #2aafc4);
  border-radius: 8px;
  color: #fff;
  margin-bottom: 32px;
}
.tw-list-header-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  flex-shrink: 0;
}
.tw-list-title {
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px;
  letter-spacing: 0.3px;
}
.tw-list-desc {
  font-size: 14px;
  color: rgba(255,255,255,0.85);
  margin: 0;
  line-height: 1.6;
}

/* ===== 文章卡片 ===== */
.tw-knowledge-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 6px;
  text-decoration: none;
  transition: all .25s ease;
  margin-bottom: 20px;
  height: calc(100% - 20px);
}
.tw-knowledge-card:hover {
  border-color: #1A8FA4;
  box-shadow: 0 4px 20px rgba(26, 143, 164, 0.12);
  transform: translateY(-2px);
}
.tw-kcard-icon {
  width: 56px;
  height: 56px;
  border-radius: 6px;
  background: #e8f5f7;
  color: #1A8FA4;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all .25s;
}
.tw-knowledge-card:hover .tw-kcard-icon {
  background: #1A8FA4;
  color: #fff;
}
.tw-kcard-body { flex: 1; min-width: 0; }
.tw-kcard-title {
  font-size: 17px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 10px;
  letter-spacing: 0.2px;
}
.tw-knowledge-card:hover .tw-kcard-title { color: #1A8FA4; }
.tw-kcard-summary {
  font-size: 13px;
  color: #666;
  line-height: 1.7;
  margin: 0 0 14px;
}
.tw-kcard-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tw-kcard-meta {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #999;
}
.tw-kcard-cta {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
  color: #1A8FA4;
  transition: gap .2s;
}
.tw-knowledge-card:hover .tw-kcard-cta { gap: 8px; }

/* ===== 安全橫幅 ===== */
.tw-safety-banner {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: #fff8e1;
  border: 1px solid #ffe082;
  border-radius: 6px;
  margin-top: 12px;
}
.tw-safety-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #ffe082;
  color: #f57f17;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}
.tw-safety-banner h4 {
  font-size: 15px;
  font-weight: 700;
  color: #f57f17;
  margin: 0 0 4px;
}
.tw-safety-banner p {
  font-size: 13px;
  color: #795548;
  margin: 0;
  line-height: 1.6;
}
.tw-safety-banner p a { color: #1A8FA4; font-weight: 600; }

/* ===== 響應式 ===== */
@media (max-width: 576px) {
  .tw-list-header { flex-direction: column; padding: 24px 20px; }
  .tw-list-title { font-size: 20px; }
  .tw-knowledge-card { flex-direction: column; gap: 14px; }
}
</style>
