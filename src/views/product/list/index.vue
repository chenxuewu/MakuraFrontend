<template>
  <div class="app-container">
    <vxe-form
      :data="searchForm"
      ref="searchForm"
      title-width="100"
      title-align="right"
      size="mini"
      @submit="searchEvent()"
    >
      <vxe-form-item field="productCategoryId" title="商品分類" span="5">
        <treeselect
          v-model="searchForm.productCategoryId"
          width="30%"
          :options="options"
          :show-count="true"
          placeholder="請選擇商品分類"
          :open-on-click="true"
          :open-on-focus="true"
          :normalizer="normalizer"
          class="mini"
        />
      </vxe-form-item>
      <vxe-form-item field="name" title="商品名稱" span="5">
        <el-input
          v-model="searchForm.name"
          size="small"
          placeholder="請輸入商品名稱"
          clearable
        />
      </vxe-form-item>
      <vxe-form-item field="sale" title="" span="5">
        <el-row>
          <el-col :span="4" style="padding-top: 6px; text-align: right">
            <span style="padding-right: 10px">銷量</span>
          </el-col>
          <el-col :span="9">
            <el-input
              v-model="searchForm.minSale"
              size="small"
              placeholder="最小"
              clearable
            />
          </el-col>
          <el-col :span="2">——</el-col>
          <el-col :span="9">
            <el-input
              v-model="searchForm.maxSale"
              size="small"
              placeholder="最大"
              clearable
            />
          </el-col>
        </el-row>
      </vxe-form-item>
      <vxe-form-item field="publishStatus" title="上架狀態" span="3">
        <el-select
          class="custom-select"
          v-model="searchForm.publishStatus"
          placeholder="上架狀態"
          size="small"
          clearable
        >
          <el-option
            v-for="option in publishStatusList"
            :key="option.value"
            :value="option.value"
            :label="option.label"
          ></el-option>
        </el-select>
      </vxe-form-item>
      <vxe-form-item field="freezeStatus" title="凍結狀態" span="3">
        <el-select
          class="custom-select"
          v-model="searchForm.freezeStatus"
          placeholder="凍結狀態"
          size="small"
          clearable
        >
          <el-option
            v-for="option in freezeStatusList"
            :key="option.value"
            :value="option.value"
            :label="option.label"
          ></el-option>
        </el-select>
      </vxe-form-item>
      <vxe-form-item
        field="isPlatform"
        title="商品來源"
        span="3"
        v-if="userType == '00'"
      >
        <el-select
          class="custom-select"
          v-model="searchForm.isPlatform"
          placeholder="商品來源"
          size="small"
          clearable
        >
          <el-option
            v-for="option in isPlatformList"
            :key="option.value"
            :value="option.value"
            :label="option.label"
          ></el-option>
        </el-select>
      </vxe-form-item>
      <vxe-form-item>
        <el-button
          type="primary"
          icon="el-icon-search"
          size="small"
          @click="getList"
          >搜尋</el-button
        >
        <el-button icon="el-icon-refresh" size="small" @click="resetQuery"
          >重置</el-button
        >
      </vxe-form-item>
    </vxe-form>

    <vxe-toolbar print custom size="mini">
      <template v-slot:buttons>
        <el-button
          class="dt-button"
          size="mini"
          @click.stop.prevent="batchDeleteProduct"
          v-hasPermi="['product:batchRemove']"
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
      <vxe-table-column
        type="checkbox"
        fixed="left"
        width="55"
      ></vxe-table-column>
      <vxe-table-column type="html" title="商品資訊" min-width="250">
        <template v-slot="{ row }">
          <div style="text-align: left">
            <el-col :span="6">
              <el-image
                style="width: 90px; height: 90px"
                :src="row.mainImageUrl"
                fit="contain"
              ></el-image>
            </el-col>
            <el-col :span="18">
              <a class="item-name" v-on:click.stop.prevent="detailEvent(row)">{{
                row.name
              }}</a>
              <div>ID:{{ row.id }}</div>
              <div>所屬分類:{{ row.categoryPath }}</div>
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
      <vxe-table-column type="html" title="凍結狀態" field="freezeStatus">
        <template v-slot="{ row }">
          <div>
            <el-tag v-if="row.freezeStatus == 1" type="danger">凍結</el-tag>
            <el-tag v-if="row.freezeStatus == 0" type="success">正常</el-tag>
          </div>
        </template>
      </vxe-table-column>
      <vxe-table-column
        type="html"
        title="商品來源"
        field="isPlatform"
        v-if="userType == '00'"
      >
        <template v-slot="{ row }">
          <div>
            <el-tag v-if="row.isPlatform == 1">平臺</el-tag>
            <el-tag v-if="row.isPlatform == 0">供應商</el-tag>
          </div>
        </template>
      </vxe-table-column>
      <vxe-table-column type="html" title="最低零售價格（NT$）" field="price" />
      <vxe-table-column
        type="html"
        title="最低批發價（NT$）"
        field="wholesalePrice"
      />
      <vxe-table-column
        type="html"
        title="最低成本價（NT$）"
        field="purchasePrice"
      />
      <vxe-table-column type="html" title="庫存" field="stock" />
      <vxe-table-column type="html" title="銷量" field="sale" />
      <vxe-table-column type="html" title="建立時間" field="createTime" />

      <vxe-table-column title="操作">
        <template v-slot="{ row }">
          <div>
            <el-tooltip content="詳情" placement="top" popper-class="atooltip">
              <el-button
                type="text"
                v-hasPermi="['product:detail']"
                icon="el-icon-view"
                v-on:click.stop.prevent="detailEvent(row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip content="編輯" placement="top" popper-class="atooltip">
              <el-button
                type="text"
                v-hasPermi="['product:edit']"
                icon="el-icon-edit"
                v-if="row.publishStatus === 0 && row.isPlatform === 1"
                v-on:click.stop.prevent="editEvent(row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip
              content="編輯SKU價格"
              placement="top"
              popper-class="atooltip"
            >
              <el-button
                type="text"
                v-hasPermi="['product:skuPriceEdit']"
                icon="el-icon-set-up"
                v-on:click.stop.prevent="skuPriceEdit(row.id)"
              ></el-button>
            </el-tooltip>
            <el-tooltip content="上架" placement="top" popper-class="atooltip">
              <el-button
                type="text"
                v-if="row.publishStatus === 0"
                icon="el-icon-upload2"
                v-hasPermi="['product:publishStatusUpdate']"
                v-on:click.stop.prevent="changeStatus(row, 1)"
              ></el-button>
            </el-tooltip>
            <el-tooltip content="下架" placement="top" popper-class="atooltip">
              <el-button
                type="text"
                v-if="row.publishStatus === 1"
                icon="el-icon-download"
                v-hasPermi="['product:publishStatusUpdate']"
                v-on:click.stop.prevent="changeStatus(row, 1)"
              ></el-button>
            </el-tooltip>
            <el-tooltip content="解凍" placement="top" popper-class="atooltip">
              <el-button
                type="text"
                v-hasPermi="['product:unfreeze']"
                icon="el-icon-open"
                v-if="row.freezeStatus === 1"
                v-on:click.stop.prevent="unfreeze(row.id)"
              ></el-button>
            </el-tooltip>
            <el-tooltip
              content="移除商品"
              placement="top"
              popper-class="atooltip"
            >
              <el-button
                type="text"
                icon="el-icon-close"
                v-hasPermi="['product:deleteFromShop']"
                v-on:click.stop.prevent="reduceProduct(row)"
              ></el-button>
            </el-tooltip>
            <el-tooltip content="刪除" placement="top" popper-class="atooltip">
              <el-button
                type="text"
                v-hasPermi="['product:remove']"
                icon="el-icon-delete"
                v-on:click.stop.prevent="deleteEvent(row.id)"
              ></el-button>
            </el-tooltip>
            <el-tooltip content="複製" placement="top" popper-class="atooltip">
              <el-button
                type="text"
                v-hasPermi="['product:copyProduct']"
                icon="el-icon-delete"
                v-on:click.stop.prevent="copyProductEvent(row.id)"
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
        :total="tablePage.totalResult"
      >
      </el-pagination>
    </div>

    <!-- 新增商品SKU價格編輯 -->
    <el-dialog
      title="SKU價格編輯"
      :visible.sync="openEditSkuPage"
      width="900px"
      append-to-body
      style="padding-top: 5px; padding-bottom: 5px"
    >
      <el-form>
        <el-form-item style="text-align: right">
          <el-table
            style="width: 100%"
            border
            class="hiddenTbody"
            empty-text=""
          >
            <el-table-column
              label="-"
              align="center"
              min-width="70"
            ></el-table-column>
            <el-table-column
              label="-"
              align="center"
              min-width="200"
            ></el-table-column>
            <el-table-column
              label="-"
              align="center"
              min-width="100"
            ></el-table-column>
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
                <el-button type="primary" @click="bacthModify"
                  >批次修改零售價</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item>
          <div class="el-form-item-box">
            <el-table
              :row-class-name="tableRowClassName"
              :data="skuPriceForm.xtProductSkuPriceList"
              style="width: 100%; height: 600px; overflow-y: auto"
              border
            >
              <el-table-column
                label="sku"
                prop="sku"
                align="center"
                min-width="70"
              ></el-table-column>
              <el-table-column
                label="sku名稱"
                prop="name"
                align="center"
                min-width="200"
              >
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
              <el-table-column
                label="成本價（NT$）"
                prop="purchasePrice"
                align="center"
                min-width="100"
              >
                <template slot-scope="scope">
                  {{ scope.row.purchasePrice | toFixed }}
                </template>
              </el-table-column>
              <el-table-column
                label="零售價（NT$）"
                prop="price"
                align="center"
                min-width="100"
              >
                <template slot-scope="scope">
                  <el-input-number
                    v-model="scope.row.price"
                    placeholder="零售價"
                    size="small"
                    class="input-with-select"
                    id="aa"
                    :precision="2"
                    :step="1"
                    :min="0"
                    oninput="value=value.replace(/[^\d]/g,'')"
                  >
                  </el-input-number>
                </template>
              </el-table-column>
              <el-table-column
                label="利潤（NT$）"
                align="center"
                min-width="100"
              >
                <template slot-scope="scope">
                  {{ (scope.row.price - scope.row.purchasePrice) | toFixed }}
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <span
          style="text-align: left; color: red; margin-right: 10px"
          v-if="isPriceLowPurchasePrice"
          >注意：零售價不建議低於成本價</span
        >
        <el-button type="primary" @click="skuPriceUpdate">確 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  listProduct,
  updateStatus,
  delProduct,
  skuPriceUpdate,
  unfreeze,
  getSkuPriceList,
} from "@/api/product/product";
import { getAttributeCategoryTree } from "@/api/product/attribute";
import { manageProduct } from "@/api/shop/shop";
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
      props: {},
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
        freezeStatus: null,
        isPlatform: null,
        minSale: null,
        maxSale: null,
      },
      buttonShow: {
        str: "隱藏按鈕",
        visable: true,
      },
      productCategoryTree: [],
      publishStatusList: [
        { label: "上架", value: "1" },
        { label: "下架", value: "0" },
      ],
      freezeStatusList: [
        { label: "凍結", value: "1" },
        { label: "正常", value: "0" },
      ],
      isPlatformList: [
        { label: "平臺", value: "1" },
        { label: "供應商", value: "0" },
      ],
      recommandStatusList: [
        { label: "推薦", value: "1" },
        { label: "不推薦", value: "0" },
      ],
      options: [],
      openEditSkuPage: false,
      skuPriceForm: {
        productId: null,
        xtProductSkuPriceList: [],
      },
      isPriceLowPurchasePrice: false,
      batchSkuPrice: 1,
      userType: null,
    };
  },
  filters: {
    toFixed(value) {
      if (!value) return "0.00"; // 處理空值或非數字情況
      return Number(value).toFixed(2);
    },
  },
  created() {
    //獲取使用者型別
    this.userType = this.$store.state.user.userType;
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
      listProduct(this.searchForm).then((response) => {
        this.loading = false;
        if (response.code === 200) {
          this.productList = response.rows;
          this.tablePage.totalResult = response.total;
        }
      });
    },

    //點選訂單詳情按鈕，彈出詳情框
    detailEvent(row) {
      this.$router.push({ path: "./productDetail", query: { id: row.id } });
    },

    // 批次修改零售價
    bacthModify() {
      if (!(this.batchSkuPrice == null || this.batchSkuPrice == "")) {
        this.skuPriceForm.xtProductSkuPriceList =
          this.skuPriceForm.xtProductSkuPriceList.map((item) => {
            item.price = this.batchSkuPrice;
            return item;
          });
      }
    },

    // 開啟sku價格頁面
    skuPriceEdit(productId) {
      this.skuPriceForm.productId = productId;
      getSkuPriceList(1, productId).then((response) => {
        if (response.code === 200) {
          this.skuPriceForm.xtProductSkuPriceList = response.data;
        }
      });

      this.openEditSkuPage = true;
    },

    //點選處理訂單，訂單值的設定
    editEvent(row) {
      this.$router.push({ path: "./edit", query: { id: row.id } });
    },

    //切換狀態按鈕顯示或隱藏
    changeButtonShowType() {
      if (this.buttonShow.visable) {
        this.buttonShow.visable = false;
        this.buttonShow.str = "隱藏按鈕";
      } else {
        this.buttonShow.visable = true;
        this.buttonShow.str = "顯示按鈕";
      }
      sessionStorage.setItem("buttonShow", JSON.stringify(this.buttonShow));
    },

    //篩選
    async searchEvent(currentPage) {
      currentPage
        ? (this.tablePage.currentPage = currentPage)
        : (this.tablePage.currentPage = 1);

      this.getList();
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
        children: node.children,
      };
    },

    /** 重置按鈕操作 */
    resetQuery() {
      this.$refs.searchForm.reset();
      this.searchForm.minSale = null;
      this.searchForm.maxSale = null;
      this.getList();
    },

    // SKU價格編輯
    skuPriceUpdate() {
      // 判斷零售價是否小於成本價
      let isPriceLessPurchasePrice = false;
      this.skuPriceForm.xtProductSkuPriceList =
        this.skuPriceForm.xtProductSkuPriceList.map((item) => {
          item.wholesalePrice = item.price;
          if (!isPriceLessPurchasePrice && item.price < item.purchasePrice) {
            isPriceLessPurchasePrice = true;
          }

          return item;
        });

      if (isPriceLessPurchasePrice) {
        this.$confirm("存在SKU零售價低於成本價，是否繼續修改", "提示", {
          confirmButtonText: "確定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            const loading = this.$loading({
              lock: true,
              text: "Loading",
              spinner: "el-icon-loading",
              background: "rgba(0, 0, 0, 0.7)",
            });

            skuPriceUpdate(this.skuPriceForm).then((response) => {
              loading.close();
              if (response.code === 200) {
                this.$message({
                  type: "success",
                  message: "修改SKU價格成功!",
                });
                this.reset();
                this.openEditSkuPage = false;
                this.searchEvent(this.tablePage.currentPage);
              } else {
                this.$message.error("修改SKU價格失敗");
              }
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消SKU修改",
            });
            return;
          });
      } else {
        const loading = this.$loading({
          lock: true,
          text: "Loading",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)",
        });

        skuPriceUpdate(this.skuPriceForm).then((response) => {
          loading.close();
          if (response.code === 200) {
            this.$message({
              type: "success",
              message: "修改SKU價格成功!",
            });
            this.reset();
            this.openEditSkuPage = false;
            this.searchEvent(this.tablePage.currentPage);
          } else {
            this.$message.error("修改SKU價格失敗");
          }
        });
      }

      this.batchSkuPrice = 1;
      this.isPriceLowPurchasePrice = false;
    },

    tableRowClassName({ row, rowIndex }) {
      if (row.price < row.purchasePrice) {
        this.isPriceLowPurchasePrice = true;
        return "success-row";
      }
      return "";
    },

    //商品上架狀態、新品狀態、推薦狀態修改
    changeStatus(row, type) {
      var updateObect = {
        productId: row.id,
        publishStatus: null,
        recommandStatus: null,
        newStatus: null,
      };
      var tips = "";

      if (type == 1) {
        if (row.publishStatus == 1) {
          updateObect.publishStatus = 0;
          tips = "下架商品";
        } else {
          updateObect.publishStatus = 1;
          tips = "上架商品";
        }
      } else if (type == 2) {
        if (row.newStatus == 1) {
          updateObect.newStatus = 0;
          tips = "修改商品非新品";
        } else {
          updateObect.newStatus = 1;
          tips = "修改商品新品";
        }
      } else if (type == 3) {
        if (row.recommandStatus == 1) {
          updateObect.recommandStatus = 0;
          tips = "修改商品為推薦商品";
        } else {
          updateObect.recommandStatus = 1;
          tips = "修改商品為不推薦商品";
        }
      }

      this.$confirm(`是否${tips}`, "提示", {
        confirmButtonText: "確定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
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
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消狀態修改",
          });
        });
    },

    // 批次刪除商品
    batchDeleteProduct() {
      const productIds = this.$refs.orderTableData
        .getCheckboxRecords()
        .map((item) => item.id);
      if (productIds.length === 0) {
        this.$message({
          type: "warning",
          message: "請選擇要刪除的商品!",
        });
        return;
      }
      this.deleteEvent(productIds);
    },

    // 刪除商品
    deleteEvent(productIds) {
      this.$confirm("是否刪除選中商品", "提示", {
        confirmButtonText: "確定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delProduct(productIds).then((response) => {
            if (response.code == 200) {
              this.$message({
                message: "刪除成功！",
                type: "success",
              });

              this.searchEvent(this.tablePage.currentPage);
            } else {
              this.$message({
                message: "刪除失敗！",
                type: "error",
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消刪除",
          });
        });
    },

    // 刪除商品
    unfreeze(id) {
      this.$confirm("是否解凍選中商品", "提示", {
        confirmButtonText: "確定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          unfreeze(id).then((response) => {
            if (response.code == 200) {
              this.$message({
                message: "解凍成功！",
                type: "success",
              });

              this.searchEvent(this.tablePage.currentPage);
            } else {
              this.$message({
                message: "解凍失敗！",
                type: "error",
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消解凍",
          });
        });
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
        productId: null,
        xtProductSkuPriceList: [],
      };
      this.resetForm("skuPriceForm");
    },

    // 移除店鋪
    reduceProduct(row) {
      this.$confirm("是否移除商品", "提示", {
        confirmButtonText: "確定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.skuPriceForm.productId = row.id;
          manageProduct(this.skuPriceForm, false).then((response) => {
            if (response.code === 200) {
              this.$message({
                type: "success",
                message: "移除商品成功!",
              });
              this.reset();
              this.searchEvent(this.tablePage.currentPage);
            } else {
              this.$message.error("加入商品失敗");
            }
          });
        })
        .catch(() => {
          this.reset();
          this.$message({
            type: "info",
            message: "已取消移除商品",
          });
        });
    },
  },
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
  border-radius: 0px;
}

::v-deep .vue-treeselect__single-value {
  line-height: 28px;
}

.vxe-form.size--mini {
  font-size: 14px;
}

.pagination-wrapper {
  text-align: right; /* 將分頁元件容器右對齊 */
}
::v-deep .item-name {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
}
::v-deep .el-table .success-row #aa {
  border: solid #f96332 2px;
}

::v-deep .el-dialog__body {
  padding: 0px 10px;
}

::v-deep .hiddenTbody .el-table__empty-block {
  display: none;
}
</style>
