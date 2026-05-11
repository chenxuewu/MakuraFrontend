<template>
  <div class="search-tree">
    <el-popover
      v-model="visibleTreeNeed"
      placement="bottom-start"
      popper-class="prove-item no-arrow"
      trigger="click"
      :width="popperWidth"
      @show="onShow"
    >
      <span slot="reference">
        <el-select
          ref="select"
          v-model="dep"
          :popper-append-to-body="false"
          class="apply_info-select select_classify"
          :placeholder="`請選擇${title}`"
          size="small"
          :disabled="builtIn && builtIn == 1 ? true : false"
          :filterable="false"
          @focus.capture="visibleTreeNeed = !visibleTreeNeed"
          @change="handdelClear"
        />
      </span>
      <!-- <el-input
        v-model="filterText"
        placeholder="輸入內容"
        size="small"
        style="margin-bottom: 8px"
        @focus.capture="visibleTreeNeed = !visibleTreeNeed"
      /> -->
      <div class="demand-tree">
        <el-tree
          ref="tree"
          class="elTreeStyle01"
          :class="type == 'tagerAdd' ? 'tager-tree' : ''"
          :data="tenantTree"
          :props="defaultProps"
          node-key="id"
          :default-expand-all="!!defaultExpandAll"
          :default-expanded-keys="openId"
          :expand-on-click-node="false"
          :filter-node-method="filterNode"
          @node-click="handleNode"
        />
      </div>
    </el-popover>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['type', 'tenantTree', 'title', 'builtIn', 'regionId', 'id', 'nodeName', 'defaultExpandAll'],
  data() {
    return {
      dep: '',
      visibleTreeNeed: false,
      visible: false,
      filterText: '',
      defaultProps: {
        children: 'childrenList',
        label: 'regionName'
      },
      openId: [],
      popperWidth: 0
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
    id: {
      handler(val) {
        this.$nextTick(() => {
          this.init(val);
          this.openId = [val];
        });
      },
      immediate: true,
      deep: true
    },
    nodeName: {
      handler(val) {
        this.$nextTick(() => {
          this.dep = val;
        });
      },
      immediate: true,
      deep: true
    }
  },
  created() {},
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.id.indexOf(value) !== -1;
    },
    // 樹節點選中
    handleNode(data, node) {
      this.dep = node.label;
      this.visibleTreeNeed = false;
      this.$emit('handleNodeChange', data.id, data.regionName);
    },
    handdelClear() {
      this.$emit('handleNodeChange', '', this.type);
    },
    // 預設選中的節點
    init(val) {
      const tree = this.$refs.tree;
      tree.store.setCurrentNodeKey(val);
    },
    onShow() {
      this.popperWidth = this.$refs.select.$el.clientWidth;
    }
  }
};
</script>
<style lang="scss" scoped>
.search-tree ::v-deep {
  .el-select-dropdown {
    display: none;
  }
  .el-popper > .el-select-dropdown__empty {
    display: none;
  }
  .select_classify {
    // pointer-events: none;
    .el-input__inner {
      pointer-events: none;
    }
  }
  .el-tree {
    display: inline-block;
    width: 100%;
  }
  .el-tree-node__content {
    display: inline-block;
    min-width: 100%;
  }
  .el-tree__empty-block {
    width: 160px;
  }
  .tager-tree > .el-tree-node > .el-tree-node__content:nth-of-type(1) {
    display: none;
  }
}
.demand-tree {
  width: 100%;
  max-height: 400px;
  overflow-y: scroll;
  padding-right: 10px;
}
.el-tree-node > .el-tree-node__content {
  display: none;
}
.search-tree ::v-deep {
  .el-input__suffix {
    // height: 32px;
  }
  .el-tree {
    display: inline-block;
    min-width: 100%;
    width: max-content;
  }
  .el-tree-node__content {
    display: inline-block;
    min-width: 100%;
    height: 40px;
    line-height: 40px;
  }
  /* 選中節點高亮樣式，el-tree 元件需設定 highlight-current 屬性才能生效 */
  .is-current > .el-tree-node__content {
    // background-color: var(--colorPrimary);
    color: var(--colorPrimary);
    font-weight: bold;
    .el-tree-node > .el-tree-node__children {
      overflow: visible;
    }
    .el-button--text {
      color: #fff;
    }
  }
  /* 選中節點高亮樣式 end */
  .btn-menu {
    margin: 10px;
  }
}
</style>
