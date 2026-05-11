<template>
  <div
    class="base-search-container"
    :style="{
      '--search-label-width': autoCalcLabelWidth,
      '--form-fold-max-height': formFoldMaxHeight
    }"
  >
    <el-form
      ref="searchFormRef"
      class="search-form"
      :class="{
        'is-fold': showFold && isFold,
        'is-unfold': showFold && !isFold
      }"
      :model="searchForm"
      :rules="rules"
      inline
      :label-width="myLabelWidth"
      :label-suffix="labelSuffix"
    >
      <el-row
        ref="searchElRow"
        class="search-el-row"
        :gutter="0"
      >
        <el-col
          v-if="operaInTopLeft"
          v-show="hasOperationDom"
          ref="topLeftOpera"
          v-children-list="handleChildrenList1"
          class="top-left-operation"
          :span="mySpan"
        >
          <slot name="operation" />
        </el-col>

        <!-- 主要內容 -->
        <slot />

        <el-col
          v-if="!searchInBottom"
          class="search-btn-in-search"
        >
          <!-- 注意，這部分程式碼有兩個地方有，還有個在下面的操作欄位置，展示在哪裡由動態計算決定 -->
          <slot name="searchBtn">
            <el-button
              type="primary"
              @click="handleSearch"
              >查詢</el-button
            >
            <el-button
              type="primary"
              plain
              @click="handleReset"
              >重置</el-button
            >
          </slot>
          <slot name="searchBtnAppend" />
        </el-col>
      </el-row>
    </el-form>
    <!-- 底部操作欄 -->
    <div
      v-if="!operaInTopLeft"
      class="operation-box"
    >
      <div
        v-if="operationArr.length"
        v-show="hasOperationDom"
        ref="bottomOpera"
        v-children-list="handleChildrenList2"
        class="operation-box__inner"
      >
        <slot name="operation" />
      </div>
      <!-- 底部的搜尋按鈕 -->
      <div
        v-if="searchInBottom"
        class="search-btn-in-opera"
        :class="{
          leftHasOperation: hasOperationDom
        }"
      >
        <!-- 這是操作欄中的搜尋按鈕 -->
        <slot name="searchBtn">
          <el-button
            type="primary"
            @click="handleSearch"
            >查詢</el-button
          >
          <el-button
            type="primary"
            plain
            @click="handleReset"
            >重置</el-button
          >
        </slot>
        <slot name="searchBtnAppend" />
      </div>
      <el-button
        v-if="showFold"
        class="fold-btn"
        type="text"
        @click="handleFold"
      >
        <i
          class="el-icon-d-arrow-left"
          :class="{
            'icon-is-fold': isFold,
            'icon-is-unfold': !isFold
          }"
        />
        {{ isFold ? '收起' : '展開' }}
      </el-button>
    </div>
  </div>
</template>

<script>
import { compact, debounce } from 'lodash-es';

export default {
  name: 'BaseSearch',
  directives: {
    // 監聽 dom.children
    childrenList: {
      bind(el, binding) {
        if (typeof binding.value !== 'function') return;
        const fn = () => binding.value(el?.children || [], el);
        const obs = new MutationObserver(mutationList => {
          fn();
        });
        el.__m_obs__ = obs;
        obs.observe(el, { childList: true });
        fn();
      },
      unbind(el, binding) {
        const obs = el.__m_obs__;
        if (obs) obs.disconnect();
      }
    }
  },
  provide() {
    return {
      BaseSearchInstance: this
    };
  },
  props: {
    searchForm: {
      type: Object,
      default: () => ({})
    },
    // 操作欄強制放在搜尋欄下方
    operaInBottom: {
      type: Boolean,
      default: false
    },
    labelWidth: {
      type: [String, Number],
      default: null
    },
    /**
     * 動態計算 labelWidth
     * 獲取所有未設定 labelWidth 的 el-form-item 的 label 長度，將其中最大的長度作為 label 的預設長度
     * 可被 labelWidth 覆蓋
     */
    autoLabelWidth: {
      type: Boolean,
      default: true
    },
    labelSuffix: {
      type: String,
      default: ''
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    // 一行顯示幾個
    colNum: {
      type: [Number, String],
      default: 4
    }
  },
  data() {
    return {
      isFold: false,
      formFoldMaxHeight: null,
      topLeftOperaOverflow: false,
      hasOperationDom: false,
      autoCalcLabelWidth: null,
      searchItemList: []
    };
  },
  computed: {
    // 判斷操作欄是否要放到左上角
    /** @type boolean */
    operaInTopLeft() {
      if (this.operaInBottom) return false; // 手動設定
      if (!(this.operationArr.length > 0)) return false; // 操作欄沒內容時
      if (this.spanTotal + this.mySpan * 2 > 24) return false; // 搜尋項span + 搜尋按鈕span=6 + 操作欄span=6 > 24 時
      if (this.topLeftOperaOverflow) return false; // 左上角如果有操作欄，但是內容超出時
      return true;
    },
    myLabelWidth() {
      return this.$pxToRem(this.labelWidth);
    },
    /** @type number */
    mySpan() {
      return 24 / this.colNum;
    },
    /** @type *[] */
    operationArr() {
      return this.$scopedSlots.operation?.() || [];
    },
    /** @type boolean */
    searchInBottom() {
      // 搜尋欄項是否剛好能放滿 N 行
      const isFullCol = 24 - (this.spanTotal % 24 || 24) < this.mySpan;
      return isFullCol || this.showFold;
    },
    /** @type boolean */
    showFold() {
      return this.searchItemList.length / this.colNum > 2;
    },
    /** @type number */
    spanTotal() {
      return this.searchItemList.reduce((sum, item) => sum + (+item.mySpan || 0), 0);
    }
  },
  created() {
    this.searchItemVmSet = new Set();
    /** @type function */
    this.calcTopLeftOperaOverflow = debounce(() => {
      this._calcTopLeftOperaOverflow();
    }, 50);
  },
  mounted() {
    this.getMaxLabelWidth();
    this.calcTopLeftOperaOverflow();
    // 監聽dom的resize
    let width;
    const callback = debounce(arr => {
      // 監聽寬度變化
      const width2 = arr[0].contentRect.width;
      if (width2 !== width) {
        width = width2;
        this.getMaxLabelWidth();
      }
      this.calcTopLeftOperaOverflow();
    }, 50);
    this.observer = new ResizeObserver(callback);
    this.observer.observe(this.$el, { box: 'border-box' });
  },
  beforeDestroy() {
    this.searchItemVmSet = null;
    this.observer?.disconnect();
    this.observer = null;
  },
  methods: {
    // 計算左上角的操作按鈕是否超出盒子
    async _calcTopLeftOperaOverflow() {
      if (this.topLeftOperaOverflow) return;
      await this.$nextTick();
      const el = this.$refs.topLeftOpera?.$el;
      if (el) {
        this.topLeftOperaOverflow = el.scrollHeight > el.clientHeight + 1 || el.scrollWidth > el.clientWidth;
      } else {
        this.topLeftOperaOverflow = false;
      }
    },
    // 獲取 el-form-item 中最大的 labelWidth（僅獲取未設定 labelWidth 的生效）
    async getMaxLabelWidth() {
      if (!this.autoLabelWidth) return;
      if (!this.$refs?.searchElRow?.$el) return;
      this.autoCalcLabelWidth = null;
      await this.$nextTick();
      const formItemList = [...this.$refs.searchElRow.$el.querySelectorAll('.base-search-form-item')].filter(
        // 篩選出未設定 labelWidth 的
        el => !el.__vue__?.$props?.labelWidth
      );
      const labelList = formItemList.map(el => [...el.children].find(c => c.tagName === 'LABEL'));
      let maxWidth = Math.max(...compact(labelList.map(el => el.getBoundingClientRect().width)));
      this.autoCalcLabelWidth = maxWidth + 2 + 'px';
    },
    // BaseSearchItem 數量變化時
    searchItemChange(type, vm) {
      if (!this.searchItemVmSet) return;
      if (type === 1) {
        this.searchItemVmSet.add(vm);
      } else {
        this.searchItemVmSet.delete(vm);
      }
      this.searchItemList = [...this.searchItemVmSet];
      this.calcTopLeftOperaOverflow();
    },
    handleFold() {
      this.formFoldMaxHeight = this.$refs.searchFormRef.$el.scrollHeight + 10 + 'px';
      this.$nextTick(() => {
        this.isFold = !this.isFold;
      });
    },
    /**
     * 由於 v-has-permi 許可權判斷中，使用的是 dom.remove()，無法使用 $scopedSlots 判斷是否有渲染子節點
     * 所以透過判斷 dom元素是否有子節點來判斷
     */
    handleChildrenList1(arr) {
      this.hasOperationDom = arr.length > 0;
    },
    handleChildrenList2(arr) {
      this.hasOperationDom = arr.length > 0;
    },
    handleSearch() {
      this.$emit('search');
    },
    handleReset() {
      this.$emit('reset');
    }
  }
};
</script>

<style scoped lang="scss">
$searchRowGap: 16px;
.base-search-container {
  font-size: 14px;
  --gutter: 20px;
  --gutter-half: calc(var(--gutter) / 2);

  .search-form {
    transition: max-height 0.3s;
    margin-bottom: $searchRowGap;

    &.is-fold {
      max-height: var(--form-fold-max-height);
      overflow: hidden;
      animation: foldAnimate 0.3s;
    }
    &.is-unfold {
      max-height: 32px * 2 + $searchRowGap * 2 - $searchRowGap / 2;
      overflow: hidden;
      animation: unfoldAnimate 0.3s;
    }
  }

  .search-el-row {
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--gutter-half) * -1);
    margin-right: calc(var(--gutter-half) * -1);
    row-gap: 16px;

    &::before,
    &::after {
      display: none;
    }

    & > ::v-deep .el-col {
      padding-left: var(--gutter-half);
      padding-right: var(--gutter-half);
    }
  }

  .top-left-operation {
    max-height: 34px;
    flex: 1;

    ::v-deep .el-button {
      min-width: 72px;
    }
  }

  .search-btn-in-search {
    display: inline-block;
    width: auto;

    ::v-deep .el-button {
      min-width: 72px;
    }
  }

  .operation-box {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    &:empty {
      display: none;
    }

    &__inner {
      width: 0;
      flex: 1;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      row-gap: 16px;
    }

    ::v-deep .el-button {
      min-width: 72px;
    }

    &.hasSearchBtn {
      justify-content: space-between;
    }
  }

  .search-btn-in-opera {
    flex: none;

    &.leftHasOperation {
      margin-left: 72px;
    }
  }

  .fold-btn {
    flex: none;
    min-width: auto !important;
    margin-left: 16px;

    .icon-is-fold {
      transform: rotateZ(90deg);
    }
    .icon-is-unfold {
      transform: rotateZ(-90deg);
    }
  }
}
</style>
