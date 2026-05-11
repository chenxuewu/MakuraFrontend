<template>
  <div class="app-container">
    <el-steps :active="active" finish-status="success" align-center class="steps">
      <el-step title="填寫類目"></el-step>
      <el-step title="完善商品資訊"></el-step>
      <el-step title="完成新增商品"></el-step>
    </el-steps>
    <div class="buttons">
      <el-button @click="last" v-show="active === 1">上一步</el-button>
      <el-button @click="next" v-show="active === 0" :disabled="active === 0 && this.categoryId == null">下一步</el-button>
      <el-button @click="addProduct" v-show="active === 1" :disabled="addProductDisable">儲存提交</el-button>
    </div>
    <div class="product-add-container">
      <!-- 選擇類目 -->
      <CascaderPanel @selectedValue="categoryIds = $event" @selectPath="categoryPath = $event" :options="options"
        :props="props" ref="cascaderPanel" v-show="active === 0"></CascaderPanel>
      <!-- 新增商品資訊 -->
      <ProductInfo v-if="active === 1" :categoryId="categoryId" :categoryPath="categoryPath" ref="productInfo"
        @submitResult="submitResult" @addProductDisableChagne="addProductDisableChagne">
      </ProductInfo>
      <!-- 提交結果 -->
      <SubmitState v-if="active === 2" :submitState="submitState"></SubmitState>
    </div>
  </div>
</template>

<script>
import CascaderPanel from "@c/CascaderPanel";
import ProductInfo from "@v/components/product/productInfo.vue";
import { getAttributeCategoryTree } from "@/api/product/attribute";
import SubmitState from '@v/components/product/submitState.vue';

export default {
  name: "Product",
  components: {
    ProductInfo,
    CascaderPanel,
    SubmitState
  },
  props: {
    editActive: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  data() {
    return {
      // 遮罩層
      loading: true,
      options: [],
      props: {
        value: "id",
        label: "displayName",
        children: "children",
      },
      active: 0,
      categoryIds: [],
      categoryPath: null,
      submitState: {
        icon: '',
        header: "",
        content: "",
        path: "/product/product",
        buttonContent: ""
      },
      addProductDisable: false,
    };
  },
  computed: {
    categoryId: {
      get() {
        return this.categoryIds[this.categoryIds.length - 1];
      },
    },
  },
  created() {
    this.active = this.editActive;
    this.geCategorytList();
  },
  methods: {
    /** 獲取商品類目列表 */
    //非同步載入
    async geCategorytList() {
      this.loading = true;
      await getAttributeCategoryTree().then((response) => {
        this.options = response.data;
        // 刪除空的children
        this.$refs['cascaderPanel'].processEmptyChildren(this.options, "children");
      });
    },

    last() {
      this.active--;
    },
    next() {
      if (this.active < 2) {
        this.active++;
      }
    },
    addProduct() {
      this.loading = true;
      this.addProductDisable = true;
      this.$refs["productInfo"].submitForm();
    },
    submitResult(result, massage) {
      this.loading = false;
      if (result) {
        this.active++;
        this.submitState.icon = 'ri-checkbox-circle-fill';
        this.submitState.style = 'font-size: 50px; color: #67C23A;';
        this.submitState.header = '商品提交成功';
        this.submitState.content = '請跳轉至商品列表頁面檢視';
        this.submitState.buttonContent = '跳轉商品列表';
      } else {
        this.submitState.icon = 'ri-close-circle-fill';
        this.submitState.style = 'font-size: 50px; color: #F56C6C;';
        this.submitState.header = '商品提交失敗';
        this.submitState.content = massage;
        this.submitState.buttonContent = '返回商品資訊';
        this.active = 2;
      }
      this.addProductDisable = false;
    },
    //新增商品按鈕狀態切換
    addProductDisableChagne(state) {
      this.addProductDisable = state;
    }
  },
};
</script>
<style lang="scss" scoped>
.app-container {
  padding: 20px 45px;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  position: relative;
}

.my-upload .el-upload {
  display: none !important;
}

.my-upload .is-ready {
  width: 80px;
  height: 80px;
  border-radius: 0px;
  margin-top: 6px;
}

// .steps {
//   margin-bottom: 20px;
//   border-bottom: 1px solid #ebeef5;
// }

.product-add-container {
  flex: 1 1;
  display: flex;
  flex-direction: column;
  width: 100%;
}

// .bottom {
//   height: 75px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-top: 1px solid #ebeef5;
//   background-color: white;
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   z-index: 2;
// }

.buttons {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ebeef5;
}
</style>