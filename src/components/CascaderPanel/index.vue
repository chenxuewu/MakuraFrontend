<template>
  <div>
    <el-cascader-panel
      class="my-cascader"
      v-model="selectedValue"
      :options="options"
      :props="props"
      :separator="separator"
      @change="cascaderHandleChange"
      ref="cascaderPanel"
    >
      <template slot-scope="{ node, data }">
        <div>
          <span>{{ node.label }}</span>
          <!-- <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span> -->
        </div>
      </template>
    </el-cascader-panel>
    <div>
      <p class="path">{{cascaderLabel}}：{{ selectPath }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CascaderPanel",
  props: {
    options: {
      type: Array,
      // required: true,
    },
    props: {
      type: Object,
      default: () => ({
        value: "value",
        label: "label",
        children: "children",
      }),
    },
    separator: {
      type: String,
      default: " / ",
    },
    cascaderLabel: {
      type: String,
      default: "已選",
    },
  },
  data() {
    return {
      selectedValue: [],
      selectPath: null,
    };
  },
  methods: {
    // 級聯選擇器值變化處理
    cascaderHandleChange(value) {
      //獲取選中的節點資料物件
      let node_arr = this.$refs.cascaderPanel.getCheckedNodes();
      if (node_arr.length > 0) {
        this.selectPath = "";
        node_arr[0].pathLabels.forEach((label) => {
          this.selectPath = this.selectPath
            ? this.selectPath + " > " + label
            : label;
        });
      }
      this.$emit("selectPath", this.selectPath);
      this.$emit("selectedValue", value);
    },
    // 處理空的children
    processEmptyChildren(data, childrenPropertyName) {
      for (var i = 0; i < data.length; i++) {
        var item = data[i];
        if (
          item[childrenPropertyName] &&
          item[childrenPropertyName].length === 0
        ) {
          delete item[childrenPropertyName];
        } else if (
          item[childrenPropertyName] &&
          item[childrenPropertyName].length > 0
        ) {
          this.processEmptyChildren(
            item[childrenPropertyName],
            childrenPropertyName
          );
        }
      }
    },

    //初始化元件的值
    selectValue(selectedValue,selectPath) {
      this.selectedValue = selectedValue;
      this.selectPath = selectPath;
    },
    //重置元件的值
    reset() {
      this.selectedValue = [];
      this.selectPath = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-cascader-panel {
  display: flex;
  justify-content: flex-start;
}

.my-cascader::v-deep .el-scrollbar {
  width: 25%; //可以使用 `::v-deep` 或 `/deep/` 等深度選擇器來覆蓋 Element UI 的預設樣式
}

.my-cascader::v-deep .el-cascader-menu__wrap {
  height: 60vh;
}

.path {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}
 .my-cascader el-cascader-panel is-bordered {
  width: 360px;
  height: 152px;

}
</style>
