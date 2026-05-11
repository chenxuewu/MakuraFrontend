<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="100px">
      <el-form-item label="原品牌名稱" prop="originalBrandName">
        <el-input
          v-model="queryParams.originalBrandName"
          placeholder="請輸入原品牌名稱"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="顯示品牌名稱" prop="displayBrandName">
        <el-input
          v-model="queryParams.displayBrandName"
          placeholder="請輸入顯示品牌名稱"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input
          v-model="queryParams.sort"
          placeholder="請輸入排序"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="品牌logo" prop="logo">
        <el-input
          v-model="queryParams.logo"
          placeholder="請輸入品牌logo"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="專區大圖" prop="bigPic">
        <el-input
          v-model="queryParams.bigPic"
          placeholder="請輸入專區大圖"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜尋</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['product:brand:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['product:brand:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['product:brand:remove']"
        >刪除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['product:brand:export']"
        >匯出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="brandList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <!-- <el-table-column label="ID" align="center" prop="brandId" /> -->
      <el-table-column label="原品牌名稱" align="center" prop="originalBrandName" />
      <el-table-column label="顯示品牌名稱" align="center" prop="displayBrandName" />
      <el-table-column label="排序" align="center" prop="sort" />
      <el-table-column label="品牌logo" align="center" prop="logoUrl" >
        <template slot-scope="scope">
        <img :src="scope.row.logoUrl" alt="專區大圖" style="max-width: 100%; max-height: 100px;" />
      </template>
      </el-table-column>
      <el-table-column label="專區大圖" align="center" prop="bigPicUrl" >
        <template slot-scope="scope">
        <img :src="scope.row.bigPicUrl" alt="專區大圖" style="max-width: 100%; max-height: 100px;" />
      </template>
      </el-table-column>
      <el-table-column label="品牌故事" align="center" prop="brandStory" />
      <el-table-column label="備註" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['product:brand:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['product:brand:remove']"
          >刪除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 新增或修改品牌對話方塊 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="品牌型別" prop="brainCategoryIds">
          <!-- <el-input v-model="form.attributeCategoryId" placeholder="請輸入產品屬性型別表ID" /> -->
             <!-- 顯示值不是label -->
              <treeselect v-model="form.brainCategoryIds"
              :options="brainCategoryOptions"
              :multiple="true"
              :disable-branch-nodes="true"
              :show-count="true"
              :clearable="true"
              :searchable="true"
              :simpleValue="true"
              :limit="6"
              placeholder="請選擇品牌型別" />
        </el-form-item>
        <el-form-item label="原品牌名稱" prop="originalBrandName">
          <el-input v-model="form.originalBrandName" placeholder="請輸入原品牌名稱" />
        </el-form-item>
        <el-form-item label="顯示品牌名稱" prop="displayBrandName">
          <el-input v-model="form.displayBrandName" placeholder="請輸入顯示品牌名稱" />
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input-number v-model="form.sort" :step="1" :min="0" placeholder="請輸入排序欄位：最高的可以單獨上傳圖片" />
        </el-form-item>
        <el-form-item label="品牌logo" prop="logo">
          <!-- <el-input v-model="form.logo" placeholder="請輸入品牌logo" /> -->
          <div class="el-form-item-box">
              <ImageUpload :limit="1" :fileSize="10" :fileType="['png', 'jpg', 'jpeg', 'gif']"
                @fileList="handleUploadLogoSuccess" :displayFileList=this.brandlogoList></ImageUpload>
            </div>
        </el-form-item>
        <el-form-item label="專區大圖" prop="bigPic">
          <div class="el-form-item-box">
              <ImageUpload :limit="1" :fileSize="10" :fileType="['png', 'jpg', 'jpeg', 'gif']"
                @fileList="handleUploadBigPicSuccess" :displayFileList=this.brandBigList></ImageUpload>
            </div>
          <!-- <el-form-item label="商品主圖" prop="imgUrls">

          </el-form-item> -->
        </el-form-item>
        <el-form-item label="品牌故事" prop="brandStory">
          <el-input v-model="form.brandStory" type="textarea" placeholder="請輸入內容" />
        </el-form-item>
        <!-- <el-form-item label="刪除標誌" prop="delFlag">
          <el-input v-model="form.delFlag" placeholder="請輸入刪除標誌" />
        </el-form-item> -->
        <el-form-item label="備註" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="請輸入內容" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" :loading="isSubmitting" @click="submitForm">確 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listBrand, getBrand, delBrand, addBrand, updateBrand } from "@/api/product/brand";
import { attributeCategoryTree } from "@/api/product/attribute";

import ImageUpload from "@c/ImageUpload";
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  components: {
    ImageUpload,
    Treeselect
  },
  name: "Brand",
  data() {
    return {
      submitting: false,
      // 遮罩層
      loading: true,
      // 選中陣列
      ids: [],
      // 非單個禁用
      single: true,
      // 非多個禁用
      multiple: true,
      // 顯示搜尋條件
      showSearch: true,
      // 總條數
      total: 0,
      // 品牌表格資料
      brandList: [],
      // 品牌logo
      brandlogoList: [],
      // 專區大圖
      brandBigList: [],
      // 商品屬性分類下拉樹結構
      brainCategoryOptions: undefined,
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      open: false,
      // 初始狀態為未提交
      isSubmitting: false,
      // 查詢引數
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        originalBrandName: null,
        displayBrandName: null,
        sort: null,
        logo: null,
        bigPic: null,
        brandStory: null,
      },
      // 表單引數
      form: {
        brainCategoryIds: null,
      },
      defaultProps: {
        children: "children",
        label: "displayName"
      },
      // 表單驗證
      rules: {
        originalBrandName: [
          { required: true, message: "原品牌名稱不能為空", trigger: "blur" }
        ],
        displayBrandName: [
          { required: true, message: "顯示品牌名稱不能為空", trigger: "blur" }
        ],
        sort: [
          { required: true, message: "排序不能為空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
    this.getAttributeCategoryTree();
  },
  methods: {
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
    /** 查詢分類下拉樹結構 */
    async getAttributeCategoryTree() {
      await attributeCategoryTree().then(response => {
        this.brainCategoryOptions = response.data;
        // 刪除空的children
        this.processEmptyChildren(this.brainCategoryOptions, "children");
      });
    },
    // 上傳成功,設定圖片地址
    handleUploadBigPicSuccess(fileList) {
      console.info(fileList);
      // 清空圖片地址
      this.form.bigPic = null;
      this.form.bigPicUrl = null;
      //商品圖片上傳成功後，將圖片地址賦值給imageUrls
      // this.form.imgUrls = fileList.map((item) => {
      //   return item.url;
      // });
      this.form.bigPic =fileList[0].id;
      this.form.bigPicUrl =fileList[0].url;
    },
    handleUploadLogoSuccess(fileList) {
      console.info(fileList);
      // 清空圖片地址
      this.form.logo = null;
      this.form.logoUrl = null;
      //商品圖片上傳成功後，將圖片地址賦值給imageUrls
      // this.form.imgUrls = fileList.map((item) => {
      //   return item.url;
      // });
      this.form.logo =fileList[0].id;
      this.form.logoUrl =fileList[0].url;
    },
    /** 查詢品牌列表 */
    getList() {
      this.loading = true;
      listBrand(this.queryParams).then(response => {
        this.brandList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按鈕
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表單重置
    reset() {
      this.brandBigList = [];
      this.brandlogoList = [];
      this.form = {
        brandId: null,
        originalBrandName: null,
        displayBrandName: null,
        sort: null,
        logo: null,
        bigPic: null,
        brandStory: null,
        delFlag: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        bigPicUrl: null,
        logoUrl: null,
        brainCategoryIds: null,
        remark: null
      };
      this.resetForm("form");
    },
    /** 搜尋按鈕操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按鈕操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多選框選中資料
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.brandId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按鈕操作 */
    handleAdd() {
      this.reset();
      this.getAttributeCategoryTree();
      this.open = true;
      this.title = "新增品牌";
    },
    /** 修改按鈕操作 */
    handleUpdate(row) {
      this.reset();
      const brandId = row.brandId || this.ids
      getBrand(brandId).then(response => {
        this.form = response.data;
        if(response.data.logoUrl){
          this.brandlogoList.push({ id: response.data.logo, name:'',url: response.data.logoUrl });
        }
        if(response.data.bigPicUrl){
          this.brandBigList.push({ id: response.data.bigPic,name:'', url: response.data.bigPicUrl});
        }
        this.title = "修改品牌";
        this.open = true;
      });
    },
    /** 提交按鈕 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          // 防止重複提交
          if (this.isSubmitting) {
            return;
          }
          // 設定提交狀態為true
          this.isSubmitting = true;
          if (this.form.brandId != null) {
            updateBrand(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            }).finally(() => {
              // 無論請求成功還是失敗，都將提交狀態設定為false
              this.isSubmitting = false;
            });
          } else {
            addBrand(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            }).finally(() => {
              // 無論請求成功還是失敗，都將提交狀態設定為false
              this.isSubmitting = false;
            });
          }
        }
      });
    },
    /** 刪除按鈕操作 */
    handleDelete(row) {
      const brandIds = row.brandId || this.ids;
      this.$modal.confirm('是否確認刪除品牌編號為"' + brandIds + '"的資料項？').then(function() {
        return delBrand(brandIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("刪除成功");
      }).catch(() => {});
    },
    /** 匯出按鈕操作 */
    handleExport() {
      this.download('product/brand/export', {
        ...this.queryParams
      }, `brand_${new Date().getTime()}.xlsx`)
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
::v-deep .el-form-item__error {
    color: #ff4949;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
    position: absolute;
    top: auto;
    left: 0;
}
</style>
