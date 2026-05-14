<template>
  <div class="vertical-page">

    <VerticalHead />

    <!-- 工具知識百科文章內容 -->
    <section class="tw-knowledge-detail-area">
      <div class="container">
        <!-- 麵包屑導航 -->
        <nav class="tw-breadcrumb" aria-label="breadcrumb">
          <router-link to="/vertical/index" class="tw-breadcrumb-home">首頁</router-link>
          <span class="tw-breadcrumb-sep">
            <i class="ri-arrow-right-s-line"></i>
          </span>
          <router-link to="/vertical/knowledge" class="tw-breadcrumb-parent">工具知識百科</router-link>
          <span class="tw-breadcrumb-sep">
            <i class="ri-arrow-right-s-line"></i>
          </span>
          <span class="tw-breadcrumb-current">{{ currentArticle.title }}</span>
        </nav>

        <!-- 文章主體 -->
        <div class="tw-article-layout">
          <!-- 左側內容區 -->
          <div class="tw-article-main">
            <article class="tw-article-card">
              <div class="tw-article-header">
                <div class="tw-article-icon-wrap">
                  <i :class="currentArticle.icon"></i>
                </div>
                <h1 class="tw-article-title">{{ currentArticle.title }}</h1>
                <div class="tw-article-meta">
                  <span class="tw-meta-item">
                    <i class="ri-time-line"></i>
                    閱讀時間約 {{ currentArticle.readTime }} 分鐘
                  </span>
                  <span class="tw-meta-item">
                    <i class="ri-file-list-3-line"></i>
                    工具知識百科
                  </span>
                </div>
              </div>

              <div class="tw-article-body">
                <p
                  v-for="(para, idx) in currentArticle.paragraphs"
                  :key="idx"
                  class="tw-article-para"
                >{{ para }}</p>

                <h3 v-if="currentArticle.tips && currentArticle.tips.length" class="tw-section-title">
                  <i class="ri-lightbulb-line"></i>
                  使用小提示
                </h3>
                <ul v-if="currentArticle.tips && currentArticle.tips.length" class="tw-tips-list">
                  <li v-for="(tip, idx) in currentArticle.tips" :key="idx">{{ tip }}</li>
                </ul>

                <h3 v-if="currentArticle.warnings && currentArticle.warnings.length" class="tw-section-title tw-warning-title">
                  <i class="ri-alert-line"></i>
                  安全警告
                </h3>
                <ul v-if="currentArticle.warnings && currentArticle.warnings.length" class="tw-warning-list">
                  <li v-for="(warn, idx) in currentArticle.warnings" :key="idx">{{ warn }}</li>
                </ul>
              </div>

              <div class="tw-article-footer">
                  <router-link to="/vertical/knowledge" class="tw-back-btn">
                  <i class="ri-arrow-left-line"></i>
                  返回工具知識百科
                </router-link>
              </div>
            </article>
          </div>

          <!-- 右側側邊欄 -->
          <aside class="tw-article-sidebar">
            <!-- 其他文章 -->
            <div class="tw-sidebar-widget">
              <h3 class="tw-sidebar-title">
                <i class="ri-book-open-line"></i>
                相關文章
              </h3>
              <ul class="tw-related-list">
                <li v-for="item in relatedArticles" :key="item.id">
                  <router-link
                    :to="{ path: '/vertical/knowledge-detail', query: { id: item.id } }"
                    class="tw-related-item"
                  >
                    <div class="tw-related-icon">
                      <i :class="item.icon"></i>
                    </div>
                    <div class="tw-related-info">
                      <span class="tw-related-name">{{ item.title }}</span>
                      <span class="tw-related-time">{{ item.readTime }} 分鐘</span>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>

            <!-- 工具分類快捷 -->
            <div class="tw-sidebar-widget">
              <h3 class="tw-sidebar-title">
                <i class="ri-layout-grid-line"></i>
                工具分類
              </h3>
              <ul class="tw-cat-list">
                <li>
                  <router-link to="/vertical/products">
                    <i class="ri-git-branch-line"></i> 電鏈鋸
                  </router-link>
                </li>
                <li>
                  <router-link to="/vertical/products">
                    <i class="ri-settings-3-line"></i> 砂輪機
                  </router-link>
                </li>
                <li>
                  <router-link to="/vertical/products">
                    <i class="ri-flashlight-line"></i> 水平儀
                  </router-link>
                </li>
                <li>
                  <router-link to="/vertical/products">
                    <i class="ri-wrench-line"></i> 衝擊扳手
                  </router-link>
                </li>
                <li>
                  <router-link to="/vertical/products">
                    <i class="ri-windy-line"></i> 暴風機 / 吹風機
                  </router-link>
                </li>
                <li>
                  <router-link to="/vertical/products">
                    <i class="ri-battery-charge-line"></i> 充電式工具
                  </router-link>
                </li>
              </ul>
            </div>
          </aside>
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

const knowledgeData = {
  chainsaw: {
    id: 'chainsaw',
    title: '電鏈鋸使用須知',
    icon: 'ri-git-branch-line',
    readTime: 5,
    paragraphs: [
      '電鏈鋸是工地現場最常用的林木加工與拆除工具之一，透過高速旋轉的鏈條切割木材或金屬管件，功率大、效率高，但危險性也相對較高，操作不當容易造成嚴重傷亡。',
      '使用前務必詳閱原廠操作手冊，了解各型號的差異與安全操作距離。嚴禁拆除鏈條制動器（Kickback Guard），此為防止反彈傷害的最後一道防線。',
      '作業前應確認工作區域無其他人員，鏈條張力須符合原廠規範（太鬆易脫落、太緊易斷裂），並每日作業前進行鏈條潤滑。導板兩側須定期清理鋸屑與油脂堆積。',
      '切割時應以雙手握持，右手控制油門後手把、左手控制前手把，身體與鋸鏈保持 30cm 以上距離。嚴禁在高空作業時以單手操作鏈鋸。',
      '作業中若鏈條停止轉動，應立即放開油門開關，等待鏈條完全靜止後再進行檢查或清理，切勿在運轉中嘗試排除卡料。'
    ],
    tips: [
      '新鏈條使用前建議空轉 1 分鐘，讓潤滑油均勻分布',
      '每切割 30 分鐘後暫停一次，檢查鏈條張力與潤滑油量',
      '存放時放掉油箱燃油，避免燃油變質造成噴油嘴堵塞',
      '長時間不使用時將鏈條放鬆，可延長導板與鏈條壽命'
    ],
    warnings: [
      '嚴禁拆除制動器（Kickback Guard）操作',
      '切割時禁止讓導板尖端接觸物料（易造成劇烈反彈）',
      '嚴禁在沒有安裝導板的情況下啟動鏈鋸',
      '作業時務必配戴防護手套、護目鏡、防護耳罩'
    ]
  },
  grinder: {
    id: 'grinder',
    title: '砂輪機安全操作',
    icon: 'ri-settings-3-line',
    readTime: 4,
    paragraphs: [
      '砂輪機（又稱角磨機）是施工現場最常見的金屬加工工具，用於去除毛刺、切割鋼筋、打磨焊接縫等。由於轉速高、砂輪薄脆，若使用不當極易發生砂輪爆裂造成碎片飛射傷人。',
      '每次安裝砂輪前，應目視檢查砂輪外觀有無裂痕、缺口或變形，輕敲砂輪聽取聲音確認無內部裂紋（清脆無雜音為正常）。嚴禁使用有裂痕或受過撞擊的砂輪。',
      '砂輪機出廠時配備的防護罩（Guard ）嚴禁拆除。防護罩的功能是將砂輪萬一爆裂時的碎片導向遠離操作者臉部的方向，是最重要的被動安全裝置。',
      '作業距離砂輪片保持 30 公分以上，確認工件已確實夾持或固定，避免加工時工件偏移造成砂輪卡死。',
      '砂輪更換後，須靜置砂輪機空轉至少 1 分鐘，確認無異常振動或異音後再開始作業。更換砂輪時建議佩戴防護面罩。'
    ],
    tips: [
      '切割鋼筋時，選用纖維加強型切割片（type 41/42），而非一般研磨片',
      '長時間使用時，每 15 分鐘讓砂輪機休息冷卻，避免軸承過熱',
      '安裝砂輪時，法蘭盤兩側需墊上紙墊圈，確保受力均勻',
      '作業時從工件側面接近，避免正面正對砂輪站立'
    ],
    warnings: [
      '嚴禁拆除防護罩進行作業',
      '嚴禁使用超過砂輪機額定轉速的砂輪',
      '嚴禁使用砂輪機側面進行研磨（側面強度最弱，易爆裂）',
      '作業時務必配戴護目鏡與防護面罩，禁止穿著寬鬆衣物或手套'
    ]
  },
  battery: {
    id: 'battery',
    title: '鋰電池保養指南',
    icon: 'ri-battery-charge-line',
    readTime: 4,
    paragraphs: [
      '近年來工地工具逐漸由傳統汽油或交流電驅動轉向充電式工具，其中又以 18V～80V 鋰電池平台最為普及。鋰電池的壽命與安全性高度依賴正確的使用與存放方式。',
      '鋰電池不建議使用到完全沒電才充電。當電量低於 20% 時應尽快充电，避免深度放電造成化學活性降低、永久容量衰減。最佳充電時機為電量在 20%～80% 区間。',
      '高溫是鋰電池最大的敵人。避免在高於 40°C 的環境（烈日下、悶熱貨櫃車內）充電，建議在通風良好的室內環境充電。充電時若感到電池外殼發燙，應立即停止充電並檢查。',
      '長期存放（超過一個月）時，建議將電量保持在 40%～60%，置於陰涼乾燥處（約 15°C～25°C），避免滿電或完全沒電存放。滿電存放會加速內部化學反應，導致容量衰退。',
      '如發現電池外殼膨脹、變形、發出異味或過度發燙，應立即停止使用並隔離處理，嚴禁穿刺或丟入一般垃圾，應依當地環保規範送回收處理。'
    ],
    tips: [
      '選用原廠配置的智能充电器，可自動偵測過充、過放、過熱狀況',
      '新电池前三次使用建议完全充放电一次，以活化电池化学活性',
      '多颗电池交替使用，可大幅延長整體使用壽命',
      '冬季低溫環境（低於 5°C）使用前先讓電池回溫至室溫'
    ],
    warnings: [
      '嚴禁使用非原廠或未通過認證的副廠充电器',
      '嚴禁將電池投入火中或加熱，會導致熱失控爆炸',
      '嚴禁以膠帶纏繞裸露的電池接點',
      '液體進入電池內部應立即停止使用，由專業人員處理'
    ]
  },
  safety: {
    id: 'safety',
    title: '工地防護配備',
    icon: 'ri-shield-check-line',
    readTime: 3,
    paragraphs: [
      '工地作業環境中存在噪音、粉塵、飛散碎屑、高溫、機械夾傷等多種危害因子，正確的個人防護裝備（PPE, Personal Protective Equipment）是降低職業傷害的最後一道防線。',
      '安全帽：進入施工現場，不分室內外，所有人員均須佩戴符合 CNS 4750 標準的安全帽。進入塔吊作業區、地下室等特殊區域需配戴具備下頦帶的類型，防止掉落時飛脫。',
      '護目鏡：研磨、切割、敲擊作業時飛散的微粒速度可達每秒數百公尺，普通近視眼鏡無法承受撞擊能量，必須配戴包覆式護目鏡或防衝擊安全眼鏡。',
      '防噪耳罩／耳塞：施工現場大型機具噪音經常超過 85 分貝，長期暴露會導致不可逆的聽力損失。建議使用 SNR 25dB 以上的耳罩或耳塞。',
      '防護手套：精密作業宜選用薄型尼龍手套（但嚴禁操作旋轉機械時穿戴）；搬運重物或粗糙物料時選用防切割手套（EN 388 標準）；焊接作業選用長筒皮革焊接手套。'
    ],
    tips: [
      '安全帽受撞击后不论外观是否损坏，建议立即更换',
      '護目鏡有刮痕應更換，刮痕會散射光線降低視線清晰度',
      '防護手套尺寸要合手，過大容易勾到機械轉軸造成夾傷',
      '建議在工具箱或腰包內常備一副備用護目鏡與耳塞'
    ],
    warnings: [
      '嚴禁穿著拖鞋、涼鞋進入施工現場，須穿著符合 CNS 20345 標準的防護安全鞋',
      '嚴禁在運轉中的機械旁脫下個人防護裝備',
      '高空作業（2 公尺以上）須正確配戴安全帶，並確認錨點可承受預期負荷',
      '使用高壓水槍或壓縮空氣時，嚴禁對著人員噴射'
    ]
  }
}

export default {
  name: 'KnowledgeDetail',
  components: { VerticalHead, VerticalFoot, VerticalSubscribe },
  mixins: [verticalMixin],
  data() {
    return {
      articles: knowledgeData
    }
  },
  computed: {
    currentId() {
      return this.$route.query.id || 'chainsaw'
    },
    currentArticle() {
      return this.articles[this.currentId] || this.articles['chainsaw']
    },
    relatedArticles() {
      return Object.values(this.articles).filter(a => a.id !== this.currentId)
    }
  },
  metaInfo() {
    return {
      title: `${this.currentArticle.title} — MAKURA 工具知識百科`
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

/* ===== 麵包屑 ===== */
.tw-breadcrumb {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px 0;
  font-size: 13px;
  color: #999;
}
.tw-breadcrumb-home,
.tw-breadcrumb-parent {
  color: #1A8FA4;
  text-decoration: none;
  transition: color .2s;
}
.tw-breadcrumb-home:hover,
.tw-breadcrumb-parent:hover { color: #157285; }
.tw-breadcrumb-sep { color: #ccc; display: flex; align-items: center; }
.tw-breadcrumb-current { color: #555; font-weight: 600; }

/* ===== 文章佈局 ===== */
.tw-knowledge-detail-area { padding: 20px 0 60px; }
.tw-article-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 24px;
  align-items: start;
}

/* ===== 文章卡片 ===== */
.tw-article-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
}
.tw-article-header {
  background: linear-gradient(135deg, #1A8FA4, #2aafc4);
  padding: 40px 36px 32px;
  color: #fff;
}
.tw-article-icon-wrap {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 20px;
}
.tw-article-title {
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 16px;
  letter-spacing: 0.3px;
}
.tw-article-meta {
  display: flex;
  align-items: center;
  gap: 20px;
}
.tw-meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: rgba(255,255,255,0.85);
}
.tw-meta-item i { font-size: 15px; }

/* ===== 文章內容 ===== */
.tw-article-body { padding: 32px 36px; }
.tw-article-para {
  font-size: 15px;
  line-height: 1.8;
  color: #444;
  margin-bottom: 18px;
}
.tw-article-para:last-of-type { margin-bottom: 0; }
.tw-section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 17px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 32px 0 14px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}
.tw-section-title i { color: #1A8FA4; font-size: 20px; }
.tw-warning-title i { color: #e74c3c; }
.tw-tips-list,
.tw-warning-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.tw-tips-list li,
.tw-warning-list li {
  font-size: 14px;
  line-height: 1.7;
  color: #555;
  padding: 8px 0 8px 28px;
  position: relative;
}
.tw-tips-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #27ae60;
  font-weight: 700;
}
.tw-warning-list li::before {
  content: '⚠';
  position: absolute;
  left: 0;
  color: #e74c3c;
  font-weight: 700;
}

/* ===== 返回按鈕 ===== */
.tw-article-footer {
  padding: 24px 36px;
  border-top: 1px solid #eee;
  background: #fafafa;
}
.tw-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #1A8FA4;
  text-decoration: none;
  transition: gap .2s ease, color .2s;
}
.tw-back-btn:hover { gap: 10px; color: #157285; }

/* ===== 側邊欄 ===== */
.tw-article-sidebar { display: flex; flex-direction: column; gap: 20px; }
.tw-sidebar-widget {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 20px;
}
.tw-sidebar-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid #1A8FA4;
}
.tw-sidebar-title i { color: #1A8FA4; }

/* 相關文章 */
.tw-related-list { list-style: none; padding: 0; margin: 0; }
.tw-related-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
  text-decoration: none;
  transition: all .2s;
}
.tw-related-item:last-child { border-bottom: none; }
.tw-related-item:hover { padding-left: 6px; }
.tw-related-icon {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: #e8f5f7;
  color: #1A8FA4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  transition: all .2s;
}
.tw-related-item:hover .tw-related-icon {
  background: #1A8FA4;
  color: #fff;
}
.tw-related-info { display: flex; flex-direction: column; gap: 3px; }
.tw-related-name {
  font-size: 13px;
  font-weight: 600;
  color: #333;
  line-height: 1.4;
}
.tw-related-item:hover .tw-related-name { color: #1A8FA4; }
.tw-related-time { font-size: 12px; color: #999; }

/* 分類列表 */
.tw-cat-list { list-style: none; padding: 0; margin: 0; }
.tw-cat-list li a {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  font-size: 13px;
  color: #555;
  text-decoration: none;
  border-bottom: 1px solid #f5f5f5;
  transition: all .2s;
}
.tw-cat-list li:last-child a { border-bottom: none; }
.tw-cat-list li a:hover { color: #1A8FA4; padding-left: 6px; }
.tw-cat-list li a i { color: #1A8FA4; font-size: 16px; }

/* ===== 響應式 ===== */
@media (max-width: 991px) {
  .tw-article-layout { grid-template-columns: 1fr; }
  .tw-article-sidebar { flex-direction: row; flex-wrap: wrap; }
  .tw-sidebar-widget { flex: 1 1 calc(50% - 10px); min-width: 200px; }
}
@media (max-width: 576px) {
  .tw-article-header { padding: 28px 20px 24px; }
  .tw-article-body { padding: 24px 20px; }
  .tw-article-footer { padding: 20px; }
  .tw-article-title { font-size: 20px; }
  .tw-sidebar-widget { flex: 1 1 100%; }
}
</style>
