<script>
const isEmpty = v => [null, undefined, '', NaN].includes(v);

export default {
  name: 'BaseSearchItem',
  inject: {
    BaseSearchInstance: {
      default: {}
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    labelWidth: null,
    prop: null,
    span: {
      type: [String, Number],
      default: null
    }
  },
  data() {
    return {};
  },
  computed: {
    myLabelWidth() {
      if (!isEmpty(this.labelWidth)) {
        return this.$pxToRem(this.labelWidth);
      }
      return this.BaseSearchInstance.myLabelWidth;
    },
    // 變數名請勿改動
    mySpan() {
      if (!isEmpty(this.span)) {
        return +this.span;
      }
      return +this.BaseSearchInstance.mySpan || 0;
    },
    labelSuffix() {
      return this.BaseSearchInstance.labelSuffix;
    }
  },
  created() {
    this.BaseSearchInstance.searchItemChange(1, this);
  },
  beforeDestroy() {
    this.BaseSearchInstance.searchItemChange(2, this);
  },
  methods: {},
  render(h, context) {
    const slotList = this.$scopedSlots.default() || [];
    // 只對只有一個node的情況做處理
    if (slotList.length === 1) {
      const item = slotList[0];
      const isElInput = item.tag.endsWith('-ElInput');
      const isElSelect = item.tag.endsWith('-ElSelect');
      const hasAttr = key => Object.hasOwn(item.data.attrs, key);
      if (isElInput || isElSelect) {
        if (!hasAttr('placeholder')) {
          let prefix = '';
          if (isElInput) prefix = '請輸入';
          if (isElSelect) prefix = '請選擇';
          item.data.attrs.placeholder = prefix + this.label;
        }
      }
      if (isElSelect) {
        if (!hasAttr('filterable')) {
          item.data.attrs.filterable = true;
        }
      }
      if (isElInput) {
        if (!hasAttr('clearable')) {
          item.data.attrs.clearable = true;
        }
      }
    }
    return (
      <el-col
        class="base-search-item-col"
        span={this.mySpan}
      >
        <el-form-item
          class="base-search-form-item"
          label-width={this.myLabelWidth}
          prop={this.prop}
          scopedSlots={{
            label: () => this.label + this.labelSuffix
          }}
        >
          {/**
           * el-form-item 元件中的寫法問題（v-if="label || $slots.label"），導致不能直接使用 scopedSlots 方式寫 label 的 slot。
           * 子元件的 $slots 是無法獲取父元件 jsx 的 scopedSlots 寫法的內容。
           * --
           * 這裡沒有直接在 span 中寫 label，是因為不想巢狀多一層 span，
           * 現在的寫法 span 是不會渲染的，span 只是為了符合 el-form-item 中 v-if 的判斷條件，
           * 這裡實際渲染的是 scopedSlots.label 的內容。
           */}
          <span slot="label" />
          {slotList}
        </el-form-item>
      </el-col>
    );
  }
};
</script>

<style scoped lang="scss">
.base-search-item-col {
  .base-search-form-item {
    width: 100%;
    display: flex;
    margin-bottom: 0;

    & > ::v-deep .el-form-item__label {
      width: var(--search-label-width);
    }

    & > ::v-deep .el-form-item__content {
      width: 0;
      flex: 1;

      > * {
        max-width: 100%;
      }
    }
  }
}
</style>
