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
        <template v-slot="{ row }">
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
              <el-button type="text" v-hasPermi="['product:platform:detail']" icon="el-icon-view" v-on:click.stop.prevent="detailEvent(row)"></el-button>
            </el-tooltip>
            <el-tooltip content="審核透過" placement="top" popper-class="atooltip">
              <el-button
                type="text"
                v-hasPermi="['product:platform:review']"
                icon="el-icon-check"
                v-if="row.reviewStatus === 0"
                v-on:click.stop.prevent="addProduct(row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip content="審核不透過" placement="top" popper-class="atooltip">
              <el-button
                type="text"
                v-hasPermi="['product:platform:review']"
                icon="el-icon-close"
                v-if="row.reviewStatus === 0"
                v-on:click.stop.prevent="reviewStatus(row, 2)"
              ></el-button>
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

    <!-- 新增商品SKU價格編輯 -->
    <el-dialog title="商品審核" :visible.sync="openEditSkuPage" width="900px" append-to-body>
      <el-form>
        <el-form-item style="text-align: right">
          <el-table style="width: 100%" border class="hiddenTbody" empty-text="">
            <el-table-column label="-" align="center" min-width="70"></el-table-column>
            <el-table-column label="-" align="center" min-width="200"></el-table-column>
            <el-table-column label="-" align="center" min-width="100"></el-table-column>
            <el-table-column label="-" align="center" min-width="100">
              <template slot="header" slot-scope="scope">
                <el-input-number
                    v-model="batchSkuPrice"
                    controls-position="right"
                    size="small"
                    :precision="2"
                    :step="1"
                    :min="0"
                ></el-input-number>
              </template>
            </el-table-column>
            <el-table-column label="-" align="center" min-width="100">
              <template slot="header" slot-scope="scope">
                <el-button type="primary" @click="bacthModify">批次修改批發價</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item>
          <div class="el-form-item-box">
            <el-table :row-class-name="tableRowClassName" :data="skuPriceForm.xtProductSkuPriceList" style="width: 100%;height: 600px; overflow-y: auto;" border>
              <el-table-column label="sku" prop="sku" align="center" min-width="70"></el-table-column>
              <el-table-column label="sku名稱" prop="name" align="center" min-width="200">
                <template v-slot="{ row }">
                  <el-col :span="8">
                    <img
                        height="90px"
                        width="90px"
                        style="margin: 2px 0"
                        :src="row.skuPicUrl"
                    />
                  </el-col>
                  <el-col :span="16">
                    <a class="item-name">{{ row.name }}</a>
                  </el-col>
                </template>
              </el-table-column>
              <el-table-column label="成本價（NT$）" prop="purchasePrice" align="center" min-width="100">
                <template slot-scope="scope">
                  {{ scope.row.purchasePrice | toFixed }}
                </template>
              </el-table-column>
              <el-table-column label="批發價（NT$）" prop="wholesalePrice" align="center" min-width="100">
                <template slot-scope="scope">
                  <el-input-number
                      v-model="scope.row.wholesalePrice"
                      placeholder="批發價"
                      size="small"
                      class="input-with-select"
                      id="aa"
                      :precision="2"
                      :step="1"
                      :min="0"
                      oninput="value=value.replace(/[^\d]/g,'')">
                  </el-input-number >
                </template>
              </el-table-column>
              <el-table-column label="利潤（NT$）" align="center" min-width="100">
                <template slot-scope="scope">
                  {{ scope.row.wholesalePrice - scope.row.purchasePrice | toFixed }}
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <span style="text-align: left; color: red;margin-right: 10px;" v-if="isPriceLowPurchasePrice">注意：零售價不建議少於成本價</span>
        <el-button type="primary" @click="handleAddReduce" :disabled="hadClick">審核</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { supplierProductList, getSkuPriceList, review } from '@/api/product/product'
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
        reviewStatus: null
      },
      reviewStatusList: [
        { label: '待審核', value: '0' },
        { label: '審核透過', value: '1' },
        { label: '審核不透過', value: '2' }
      ],
      options: [],
      openEditSkuPage: false,
      skuPriceForm: {
        productId: null,
        xtProductSkuPriceList: [],
        supplierShopId: null,
        reviewStatus: null
      },
      isPriceLowPurchasePrice: false,
      batchSkuPrice: 1,
      hadClick: false
    };
  },
  filters: {
    toFixed(value) {
      if (!value) return '0.00'; // 處理空值或非數字情況
      return Number(value).toFixed(2);
    }
  },
  created() {
    this.getList();
    this.geCategorytList();
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
      this.$router.push({ path: './productPlatformDetail', query: { id: row.id } })
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

    // 平臺稽核供應商商品
    reviewStatus(row, type) {
      var updateObect = {
        productId: row.id,
        reviewStatus: null,
        supplierShopId: row.supplierShopId
      };
      var tips = '';

      if (type == 1) {
        updateObect.reviewStatus = 1;
        tips = '審核透過';
      } else if (type == 2) {
        updateObect.reviewStatus = 2;
        tips = '審核不透過';
      }

      this.$confirm(`是否${tips}該商品`, '提示', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        review(updateObect).then((response) => {
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

    // 開啟sku價格頁面
    addProduct(row) {
      this.batchSkuPrice = 1;
      this.skuPriceForm.productId = row.id;
      this.skuPriceForm.supplierShopId = row.supplierShopId;
      getSkuPriceList(0, row.id).then(response => {
        if (response.code === 200) {
          this.skuPriceForm.xtProductSkuPriceList = response.data;
        }
      });

      this.openEditSkuPage = true;
    },

    // 批次修改零售價
    bacthModify() {
      if (!(this.batchSkuPrice == null || this.batchSkuPrice == "")) {
        this.skuPriceForm.xtProductSkuPriceList = this.skuPriceForm.xtProductSkuPriceList.map((item) => {
          item.wholesalePrice = this.batchSkuPrice;
          return item;
        });
      }
    },

    tableRowClassName({row, rowIndex}) {
      if (row.wholesalePrice < row.purchasePrice) {
        this.isPriceLowPurchasePrice = true;
        return 'success-row';
      }
      return '';
    },

    // 平臺稽核商品
    handleAddReduce() {
      this.hadClick = true;
      // 判斷零售價是否小於成本價
      let isPriceLessPurchasePrice = false;

      this.skuPriceForm.reviewStatus = 1;
      this.skuPriceForm.xtProductSkuPriceList = this.skuPriceForm.xtProductSkuPriceList.map((item) => {
        item.price = item.wholesalePrice;
        if (!isPriceLessPurchasePrice && item.wholesalePrice < item.purchasePrice) {
          isPriceLessPurchasePrice = true;
        }

        return item;
      });

      if (isPriceLessPurchasePrice) {
        this.$confirm('存在SKU批發價低於成本價，是否繼續修改', '提示', {
          confirmButtonText: '確定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });

          review(this.skuPriceForm).then(response => {
            if (response.code === 200) {
              this.$message({
                type: 'success',
                message: '審核成功!'
              });
              this.reset();
              this.openEditSkuPage = false;
              this.searchEvent(this.tablePage.currentPage);
            } else {
              this.$message.error("審核失敗");
            }
          });
          loading.close();
          this.hadClick = false;
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消審核'
          });
          this.hadClick = false;
          return;
        });
      } else {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });

        review(this.skuPriceForm).then(response => {
          if (response.code === 200) {
            this.$message({
              type: 'success',
              message: '審核成功!'
            });
            this.reset();
            this.openEditSkuPage = false;
            this.searchEvent(this.tablePage.currentPage);
          } else {
            this.$message.error("審核失敗");
          }
        });
        loading.close();
        this.hadClick = false;
      }

      this.batchSkuPrice = 1;
      this.isPriceLowPurchasePrice = false;
    },

    // 取消按鈕
    cancel() {
      this.openEditSkuPage = false;
      this.isPriceLowPurchasePrice = false;
      this.reset();
    },

    // 表單重置
    reset() {
      this.skuPriceForm = {
        productId : null,
        xtProductSkuPriceList : [],
        supplierShopId: null,
        reviewStatus: null
      };
      this.resetForm("skuPriceForm");
    },
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

::v-deep .vue-treeselect__control {
  border-radius: 0px ;
}

::v-deep .vue-treeselect__single-value{
  line-height: 28px;
}

.vxe-form.size--mini {
  font-size: 14px;
}
::v-deep .item-name {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
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
