<template>
  <div class="app-container">
     <!--商品分類屬性樹-->
     <el-row :gutter="20">
     <el-col :span="4" :xs="24">
        <div class="head-container">
          <el-input
            v-model="attributeCategoryName"
            placeholder="請輸入分類屬性名稱"
            clearable
            size="small"
            prefix-icon="el-icon-search"
            style="margin-bottom: 20px"
          />
        </div>
        <div class="head-container" >
          <el-tree
            v-loading="treeLoading"
            :data="attributeCategoryOptions"
            :props="defaultProps"
            :expand-on-click-node="false"
            :filter-node-method="filterNode"
            ref="tree"
            node-key="id"
            highlight-current
            @node-click="handleNodeClick"
            class="custom-tree"
          />
        </div>
      </el-col>
      <el-col :span="20" :xs="24">
        <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="100px">
          <!-- <el-form-item label="上級屬性分類id" prop="parentId">
            <el-input
              v-model="queryParams.parentId"
              placeholder="請輸入上級屬性分類id"
              clearable
              @keyup.enter.native="handleQuery"
            />
          </el-form-item> -->
          <el-form-item label="分類屬性名稱" prop="name">
            <el-input
              v-model="queryParams.name"
              placeholder="請輸入分類屬性名稱"
              clearable
              @keyup.enter.native="handleQuery"
            />
          </el-form-item>
          <el-form-item label="顯示分類名稱" prop="displayName">
            <el-input
              v-model="queryParams.displayName"
              placeholder="請輸入顯示分類名稱"
              clearable
              @keyup.enter.native="handleQuery"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" size="small" @click="handleQuery">搜尋</el-button>
            <el-button icon="el-icon-refresh" size="small" @click="resetQuery">重置</el-button>
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
              v-hasPermi="['attribute:category:add']"
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
              v-hasPermi="['attribute:category:edit']"
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
              v-hasPermi="['attribute:category:remove']"
            >刪除</el-button>
          </el-col>
          <el-col :span="1.5">
            <el-button
              type="warning"
              plain
              icon="el-icon-download"
              size="mini"
              @click="handleExport"
              v-hasPermi="['attribute:category:export']"
            >匯出</el-button>
          </el-col>
          <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
        </el-row>

        <el-table v-loading="loading" :data="attributeCategoryList" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" align="center" />
          <!-- <el-table-column label="ID" align="center" prop="id" /> -->
          <el-table-column label="上級屬性分類id" align="center" prop="parentId" />
          <el-table-column label="屬性分類名稱" align="center" prop="name" />
          <el-table-column label="顯示分類名稱" align="center" prop="displayName" />
          <el-table-column label="分類照片" align="center" prop="categoryPicUrl" >
        <template slot-scope="scope">
        <img :src="scope.row.categoryPicUrl" alt="分類大圖" style="max-width: 100%; max-height: 80px;" />
      </template>
      </el-table-column>
          <el-table-column label="備註" align="center" prop="remark" />
          <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="text"
                icon="el-icon-edit"
                @click="handleUpdate(scope.row)"
                v-hasPermi="['attribute:category:edit']"
              >修改</el-button>
              <el-button
                size="mini"
                type="text"
                icon="el-icon-delete"
                @click="handleDelete(scope.row)"
                v-hasPermi="['attribute:category:remove']"
              >刪除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
  </el-row>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 新增或修改商品屬性分類對話方塊 -->
    <el-dialog  :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">

        <!-- <el-form-item label="上級屬性分類id" prop="parentId">
          <el-input v-model="form.parentId" placeholder="請輸入上級屬性分類id" />
        </el-form-item> -->
        <el-form-item label="上級屬性分類id"  prop="parentId">
             <!-- 顯示值不是label -->
              <treeselect v-model="form.parentId"
              :options="attributeCategoryOptions"
              :show-count="true"
              :open-on-click="true"
              :open-on-focus="true"
              placeholder="請選擇上級屬性分類" />
         </el-form-item>
        <el-form-item label="屬性分類名稱" prop="name">
          <el-input v-model="form.name" placeholder="請輸入屬性分類名稱" />
        </el-form-item>
        <el-form-item label="顯示分類名稱" prop="displayName">
          <el-input v-model="form.displayName" placeholder="請輸入顯示分類名稱" />
        </el-form-item>
        <el-form-item label="分類圖片" prop="categoryPicId">
          <!-- <el-input v-model="form.logo" placeholder="請輸入品牌logo" /> -->
          <div class="el-form-item-box">
              <ImageUpload :limit="1" :fileSize="10" :fileType="['png', 'jpg', 'jpeg', 'gif']"
                @fileList="handleUploadLogoSuccess" :displayFileList=this.categoryPicList></ImageUpload>
            </div>
        </el-form-item>

        <el-form-item label="商品屬性">
          <el-select v-model="form.attributeIds" clearable filterable multiple collapse-tags placeholder="請選擇屬性">
            <el-option
              v-for="item in attributeList"
              :key="item.attributeId"
              :label="item.displayAttributeName"
              :value="item.attributeId">
            </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="分類狀態" prop="status">
          <el-radio-group v-model="form.status" placeholder="請選擇分類狀態">
            <el-radio :label="'0'">正常</el-radio>
            <el-radio :label="'1'">停用</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="備註" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="請輸入內容" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" :loading="submitting" @click="submitForm">確 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { treeAttributeCategory,listAttributeCategory, getAttributeCategory, delAttributeCategory, addAttributeCategory, updateAttributeCategory } from "@/api/product/attributeCategory";
import { listAttribute } from "@/api/product/attribute";

import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import ImageUpload from "@c/ImageUpload";
export default {
  name: "AttributeCategory",
  components: {
     Treeselect,
     ImageUpload
    },
  data() {
    return {
      submitting: false,
      treeLoading:true,
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
      // 商品分類圖片
      categoryPicList: [],
      //商品屬性列表
      attributeList:[],
      queryAttributeListParams: {
        pageNum: 1,
        pageSize: 100000,
      },
      // 商品屬性分類表格資料
      attributeCategoryList: [],
      attributeCategoryOptions: undefined,
      // 商品屬性分類樹資料
      attributeCategoryName: null,
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      open: false,
      // 查詢引數
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        parentId: null,
        name: null,
        displayName: null,
      },
      // 表單引數
      form: {},
      defaultProps: {
        children: "children",
        label: "displayName"
      },
      // 表單校驗
      rules: {
        name: [
          { required: true, message: "屬性名稱不能為空", trigger: "blur" }
        ],
        displayName: [
          { required: true, message: "顯示名稱不能為空", trigger: "blur" }
        ],
        status: [
          { required: true, message: "分類狀態必選", trigger: "change" }
        ],
      }
    };
  },
  watch: {
    // 根據名稱篩選樹
    attributeCategoryName(val) {
      this.$refs.tree.filter(val);
    }
  },
  created() {
    this.getAttributeCategoryTree();
    this.getList();
  },
  methods: {


    handleUploadLogoSuccess(fileList) {
      console.info(fileList);
      //清空圖片地址
      this.form.categoryPicId = null;
      this.form.categoryPicUrl = null;
      //商品圖片上傳成功後，將圖片地址賦值給imageUrls
      // this.form.imgUrls = fileList.map((item) => {
      //   return item.url;
      // });
      this.form.categoryPicId =fileList[0].id;
      this.form.categoryPicUrl =fileList[0].url;
    },
    getAttributeList(){
      listAttribute(this.queryAttributeListParams).then(response => {
        this.attributeList = response.rows;
      });
    },
    /** 查詢商品屬性分類列表 */
    getList() {
      this.loading = true;
      listAttributeCategory(this.queryParams).then(response => {
        this.attributeCategoryList = response.rows;
        this.total = parseInt(response.total);
        this.loading = false;
      });
    },
    // 取消按鈕
    cancel() {
      this.open = false;
      this.reset();
    },

        /** 查詢分類下拉樹結構 */
    getAttributeCategoryTree() {
      this.treeLoading = true;
      treeAttributeCategory().then(response => {
        this.attributeCategoryOptions = [{ id : "0",parentId: "0",label: "頂級分類", displayName: "頂級分類" ,children:response.data}];
        this.treeLoading = false;
      });
    },
    // 篩選節點
    filterNode(value, data) {
      if (!value) return true;
      return data.displayName.indexOf(value) !== -1;
    },
    // 節點單擊事件
    handleNodeClick(data) {
      this.queryParams.parentId = data.id;
      this.handleQuery();
    },
    // 表單重置
    reset() {
      this.categoryPicList = [],
      this.form = {
        id: null,
        parentId: null,
        name: null,
        displayName: null,
        delFlag: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        // 分類圖片
        categoryPicId: null,
        categoryPicUrl: null,
         //  商品屬性
        attributeIds: [],
        status: null,
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
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按鈕操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.getAttributeList();
      // 將選中的上級分類id賦值給form
      this.form.parentId = this.queryParams.parentId;
      this.title = "新增商品屬性分類";
    },
    /** 修改按鈕操作 */
    handleUpdate(row) {
      this.reset();
      this.getAttributeList();
      const id = row.id || this.ids
      getAttributeCategory(id).then(response => {
        this.form = response.data;
        if(response.data.categoryPicUrl){
          this.categoryPicList.push({ id: response.data.categoryPicId, name:'',url: response.data.categoryPicUrl });
        }
        this.open = true;
        this.title = "修改商品屬性分類";
      });
    },
    /** 提交按鈕 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.submitting) {
           return;
          }
          this.submitting = true;
          if (this.form.id != null) {
            updateAttributeCategory(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
              this.getAttributeCategoryTree();
            }).finally(() => {
              this.submitting = false;
            });
          } else {
            addAttributeCategory(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
              this.getAttributeCategoryTree();
            }).finally(() => {
              this.submitting = false;
            });;
          }
        }
      });
    },
    /** 刪除按鈕操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      // 是否確認刪除商品屬性分類編號為"' + ids + '"的資料項？
      this.$modal.confirm('是否確認刪除該商品屬性分類？').then(function() {
        return delAttributeCategory(ids);
      }).then(() => {
        this.getList();
        this.getAttributeCategoryTree();
        this.$modal.msgSuccess("刪除成功");
      }).catch(() => {});
    },
    /** 匯出按鈕操作 */
    handleExport() {
      try {
    this.download('productAttributeCategory/export', { ...this.queryParams }, `attributeCategory_${new Date().getTime()}.xlsx`);
  } catch (error) {
    console.error('Export failed:', error);
    // Add additional error handling logic if needed
  }
      // this.download('productAttributeCategory/export', {
      //   ...this.queryParams
      // }, `attributeCategory_${new Date().getTime()}.xlsx`)
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

.custom-tree {
  height: 650px; /* 設定高度 */
  overflow: auto; /* 新增捲軸，如果樹的內容超過了指定的高度 */
}
</style>