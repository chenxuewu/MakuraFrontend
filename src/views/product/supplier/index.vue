<template>
  <div class="app-container">
    <vxe-form :data="searchForm" ref="searchForm" title-width="100" title-align="right" size="mini" @submit="searchEvent()">
      <vxe-form-item field="productCategoryId" title="商品分類" span="5">
        <treeselect v-model="searchForm.productCategoryId" width="30%" :options="options" :show-count="true" placeholder="請選擇商品分類"
          :open-on-click="true" :open-on-focus="true" :normalizer="normalizer" class="mini"/>
      </vxe-form-item>
      <vxe-form-item field="name" title="商品名稱" span="5">
        <el-input v-model="searchForm.name" size="small" placeholder="請輸入商品名稱" clearable />
      </vxe-form-item>
      <vxe-form-item field="publishStatus" title="上架狀態" span="4">
        <el-select class="custom-select" v-model="searchForm.publishStatus" placeholder="上架狀態" size="small" clearable>
          <el-option v-for="option in publishStatusList" :key="option.value" :value="option.value" :label="option.label"></el-option>
        </el-select>
      </vxe-form-item>
      <vxe-form-item field="reviewStatus" title="審核狀態" span="4">
        <el-select class="custom-select" v-model="searchForm.reviewStatus" placeholder="審核狀態" size="small" clearable>
          <el-option v-for="option in reviewStatusList" :key="option.value" :value="option.value" :label="option.label"></el-option>
        </el-select>
      </vxe-form-item>
      <vxe-form-item>
        <el-button type="primary" icon="el-icon-search" size="small" @click="getList">搜尋</el-button>
        <el-button icon="el-icon-refresh" size="small" @click="resetQuery">重置</el-button>
      </vxe-form-item>
    </vxe-form>

    <vxe-toolbar print custom size="mini">
      <template v-slot:buttons>
        <el-button
          class="dt-button"
          size="mini"
          @click.stop.prevent="batchDeleteProduct"
          v-hasPermi="['product:supplier:remove']"
        >
          <i class="ti-hand-point-up m-r-5"></i>批次刪除
        </el-button>
      </template>
    </vxe-toolbar>
    <vxe-table
      size="mini"
      border
      :scroll-y="{ gt: -1 }"
      keep-source
      highlight-hover-row
      ref="orderTableData"
      :align="allAlign"
      :loading="loading"
      :data="productList"
      :checkbox-config="{ highlight: true }"
    >
      <vxe-table-column type="checkbox" fixed="left" width="55"></vxe-table-column>
      <vxe-table-column type="html" title="商品資訊" min-width="250">
        <template v-slot="{ row }" >
          <div style="text-align:left">
          <el-col :span="6">
            <img
              height="90px"
              width="90px"
              :src="row.mainImageUrl"
            />
          </el-col>
          <el-col :span="18">
            <a
              class="item-name"
              v-on:click.stop.prevent="detailEvent(row)"
              >{{ row.name }}</a
            >
            <div>
              ID:{{ row.id }}
            </div>
            <div>
              所屬分類:{{ row.categoryPath }}
            </div>
          </el-col>
        </div>
        </template>
      </vxe-table-column>
      <vxe-table-column type="html" title="上架狀態" field="publishStatus">
        <template v-slot="{ row }">
          <div>
            <el-tag v-if="row.publishStatus == 1" type="success">上架</el-tag>
            <el-tag v-if="row.publishStatus == 0" type="danger">下架</el-tag>
          </div>
        </template>
      </vxe-table-column>
      <vxe-table-column type="html" title="審核狀態" field="reviewStatus">
        <template v-slot="{ row }">
          <div>
            <el-tag v-if="row.reviewStatus == 0" type="warning">待審核</el-tag>
            <el-tag v-if="row.reviewStatus == 1" type="success">審核透過</el-tag>
            <el-tag v-if="row.reviewStatus == 2" type="danger">審核不透過</el-tag>
          </div>
        </template>
      </vxe-table-column>
      <vxe-table-column type="html" title="最低批發價（NT$）" field="wholesalePrice" />
      <vxe-table-column type="html" title="庫存" field="stock" />
      <vxe-table-column type="html" title="建立時間" field="createTime" />

      <vxe-table-column title="操作">
        <template v-slot="{ row }">
          <div>
            <el-tooltip content="詳情" placement="top" popper-class="atooltip">
              <el-button type="text" v-hasPermi="['product:supplier:detail']" icon="el-icon-view" v-on:click.stop.prevent="detailEvent(row)"></el-button>
            </el-tooltip>
            <el-tooltip content="編輯" placement="top" popper-class="atooltip">
              <el-button
                type="text"
                v-hasPermi="['product:supplier:edit']"
                icon="el-icon-edit"
                v-if="row.publishStatus === 0"
                v-on:click.stop.prevent="editEvent(row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip content="上架" placement="top" popper-class="atooltip">
              <el-button
                type="text"
                v-if="row.publishStatus === 0"
                icon="el-icon-upload2"
                v-hasPermi="['product:supplier:publishStatus']"
                v-on:click.stop.prevent="changeStatus(row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip content="下架" placement="top" popper-class="atooltip">
              <el-button
                type="text"
                v-if="row.publishStatus === 1"
                icon="el-icon-download"
                v-hasPermi="['product:supplier:publishStatus']"
                v-on:click.stop.prevent="changeStatus(row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip content="刪除" placement="top" popper-class="atooltip">
              <el-button type="text" v-hasPermi="['product:supplier:remove']" icon="el-icon-delete" v-on:click.stop.prevent="deleteEvent(row.id)"></el-button>
            </el-tooltip>
          </div>
        </template>
      </vxe-table-column>
    </vxe-table>

    <div class="pagination-wrapper">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="tablePage.currentPage"
          :page-sizes="[5, 10, 15, 20, 50, 100, 150, 200]"
          :page-size="tablePage.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tablePage.totalResult">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {
  supplierProductList,
  updateStatus,
  delProduct
} from '@/api/product/product'
import { getAttributeCategoryTree } from "@/api/product/attribute";
import Treeselect from "@riophae/vue-treeselect";

export default {
  components: {
    Treeselect,
  },
  data() {
    return {
      loading: false,
      allAlign: "center",
      productList: [],
      props: {  },
      tablePage: {
        currentPage: 1,
        pageSize: 10,
        totalResult: 0,
      },
      searchForm: {
        pageNum: 1,
        pageSize: 10,
        productCategoryId: null,
        categoryPath: null,
        name: null,
        publishStatus: null,
        reviewStatus: null
      },
      publishStatusList: [
        { label: '上架', value: '1' },
        { label: '下架', value: '0' },
      ],
      reviewStatusList: [
        { label: '待審核', value: '0' },
        { label: '審核透過', value: '1' },
        { label: '審核不透過', value: '2' }
      ],
      options: [],
      userType: null
    };
  },
  created() {
    //獲取使用者型別
    this.userType = this.$store.state.user.userType;
    if (this.userType === '04') {
      this.getList();
      this.geCategorytList();
    }
  },

  methods: {
    /** 非同步獲取商品分類列表 */
    async geCategorytList() {
      getAttributeCategoryTree().then((response) => {
        this.options = response.data;
      });
    },

    /** 查詢商品資訊列表 */
    async getList() {
      this.loading = true;
      this.searchForm.pageNum = this.tablePage.currentPage;
      this.searchForm.pageSize = this.tablePage.pageSize;
      supplierProductList(this.searchForm).then(response => {
          this.loading = false;
          if (response.code === 200) {
            this.productList = response.rows;
            this.tablePage.totalResult = response.total;
          }
      });
    },

    //點選訂單詳情按鈕，彈出詳情框
    detailEvent(row) {
      this.$router.push({ path: './productSupplierDetail', query: { id: row.id } })
    },

    //點選處理訂單，訂單值的設定
    editEvent(row) {
      this.$router.push({ path: './edit', query: { id: row.id } })
    },

    //篩選
    async searchEvent(currentPage) {
      currentPage
        ? (this.tablePage.currentPage = currentPage)
        : (this.tablePage.currentPage = 1);

      this.getList()
    },

    //單頁顯示數量變化
    handleSizeChange(pageSize) {
      this.tablePage.pageSize = pageSize;
      this.searchEvent(this.tablePage.currentPage);
    },

    //翻頁變化
    handleCurrentChange(currentPage) {
      this.tablePage.currentPage = currentPage;
      this.searchEvent(currentPage);
    },

    /** 轉換選單資料結構 */
    normalizer(node) {
      if (node.children && !node.children.length) {
        delete node.children;
      }
      return {
        id: node.id,
        label: node.displayName,
        children: node.children
      };
    },

    /** 重置按鈕操作 */
    resetQuery() {
      this.$refs.searchForm.reset();
      this.searchForm.minSale = null;
      this.searchForm.maxSale = null;
      this.getList();
    },

    //商品上架狀態修改
    changeStatus(row) {
      var updateObect = {
        productId: row.id,
        publishStatus: null
      };
      var tips = '';

      if (row.publishStatus == 1) {
        updateObect.publishStatus = 0;
        tips = '下架商品';
      } else {
        updateObect.publishStatus = 1;
        tips = '上架商品';
      }

      this.$confirm(`是否${tips}`, '提示', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        updateStatus(updateObect).then((response) => {
          if (response.code == 200) {
            this.$message({
              message: `${tips}成功`,
              type: "success",
            });

            this.searchEvent(this.tablePage.currentPage);
          } else {
            this.$message({
              message: `${tips}失敗`,
              type: "error",
            });
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消狀態修改'
        });
      });
    },

    //批次刪除商品
    batchDeleteProduct() {
      const productIds = this.$refs.orderTableData.getCheckboxRecords().map(item => item.id);
      if (productIds.length === 0) {
        this.$message({
          type: 'warning',
          message: '請選擇要刪除的商品!'
        });
        return;
      }
      this.deleteEvent(productIds);
    },

    //刪除商品
    deleteEvent(productIds) {
      this.$confirm('是否刪除選中商品', '提示', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delProduct(productIds).then((response) => {
          if (response.code == 200) {
            this.$message({
              message: '刪除成功！',
              type: "success",
            });

            this.searchEvent(this.tablePage.currentPage);
          } else {
            this.$message({
              message: '刪除失敗！',
              type: "error",
            });
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消刪除'
        });
      });
    }
  }
};
</script>

<style scoped>
@import "~@a/backend/css/bootstrap.min.css";
@import "~@a/backend/css/font-awesome.min.css";
@import "~@a/backend/css/simdahs.css";
@import "~@a/backend/css/themify-icons.css";
@import "~@a/backend/css/style.css";
@import "~@riophae/vue-treeselect/dist/vue-treeselect.css";

::v-deep .vue-treeselect,
::v-deep .vue-treeselect__placeholder,
::v-deep .vue-treeselect__control,
::v-deep .vue-treeselect__input {
  height: 28px;
  line-height: 28px;
}
::v-deep .item-name {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
}

::v-deep .vue-treeselect__control {
  border-radius: 0px ;
}

::v-deep .vue-treeselect__single-value{
  line-height: 28px;
}

.vxe-form.size--mini {
  font-size: 14px;
}

.pagination-wrapper {
  text-align: right; /* 將分頁元件容器右對齊 */
}

::v-deep .el-table .success-row #aa{
  border: solid #f96332 2px;
}

::v-deep .el-dialog__body {
    padding: 0px 10px;
}

::v-deep .hiddenTbody .el-table__empty-block {
  display: none;
}

</style>