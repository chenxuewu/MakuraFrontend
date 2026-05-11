<template>
  <div class="app-container">
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
        <div class="head-container">
          <el-tree
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
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="120px">
      <!-- 隱藏這個輸入框 -->
      <el-form-item label="產品屬性型別ID" prop="attributeCategoryId" style="display: none">
        <el-input
          v-model="queryParams.attributeCategoryId"
          placeholder="請輸入產品屬性型別表ID"
          clearable
        />
      </el-form-item>
      <el-form-item label="原始屬性名稱" prop="originalAttributeName">
        <el-input
          v-model="queryParams.originalAttributeName"
          placeholder="請輸入原始屬性名稱"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="顯示屬性值名稱" prop="displayAttributeName">
        <el-input
          v-model="queryParams.displayAttributeName"
          placeholder="請輸入顯示屬性值名稱"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="是否是公共屬性" prop="isCommon">
        <el-select v-model="queryParams.isCommon"
          placeholder="是否是公共屬性"
          clearable
          @keyup.enter.native="handleQuery">
          <el-option label="是" value="1" />
          <el-option label="否" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item label="排序型別" prop="type">
        <el-select v-model="queryParams.type"
          placeholder="排序型別"
          clearable
          @keyup.enter.native="handleQuery">
          <el-option label="引數" value="1" />
        </el-select>
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
          v-hasPermi="['attribute:add']"
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
          v-hasPermi="['attribute:edit']"
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
          v-hasPermi="['attribute:remove']"
        >刪除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['attribute:export']"
        >匯出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="attributeList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <!-- <el-table-column label="ID" align="center" prop="attributeId" /> -->
      <!-- <el-table-column label="產品屬性型別ID" align="center" prop="attributeCategoryId" /> -->

      <el-table-column label="原始屬性名稱" align="center" prop="originalAttributeName" />
      <el-table-column label="顯示屬性值名稱" align="center" prop="displayAttributeName" />
      <el-table-column label="規定的資料型別" align="center" prop="inputValidationType" >
        <template slot-scope="scope">
          {{ enumInputValidationType[scope.row.inputValidationType] }}
        </template>
      </el-table-column>
      <el-table-column label="日期格式型別" align="center" prop="dateFormatType" >
        <template slot-scope="scope">
             {{ enumDateFormatType[scope.row.dateFormatType] }}
        </template>
      </el-table-column>
      <el-table-column label="輸入型別" align="center" prop="inputType" >
        <template slot-scope="scope">
          {{ enumInputType[scope.row.inputType] }}
        </template>
      </el-table-column>
      <el-table-column label="是否需要單位" align="center" prop="formatType" >
        <template slot-scope="scope">
          {{ enumFormatType[scope.row.formatType] }}
        </template>
      </el-table-column>
      <el-table-column label="是否必填" align="center" prop="mandatory" >
      <template slot-scope="scope">
          <span v-if="scope.row.mandatory">是</span>
          <span v-else>否</span>
        </template>
      </el-table-column>
      <el-table-column label="是否公共屬性" align="center" prop="isCommon" >
      <template slot-scope="scope">
          {{ enumCommon[scope.row.isCommon] }}
        </template>
      </el-table-column>
      <el-table-column label="排序欄位" align="center" prop="sort" />
      <!-- <el-table-column label="是否支援手動新增" align="center" prop="handAddStatus" >
        <template slot-scope="scope">
          {{ enumhandAddStatus[scope.row.handAddStatus] }}
        </template>
      </el-table-column> -->
      <!-- <el-table-column label="屬性型別" align="center" prop="type" >
        <template slot-scope="scope">
          {{ enumType[scope.row.type] }}
        </template>
      </el-table-column> -->
      <el-table-column label="備註" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['attribute:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['attribute:remove']"
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

    <!-- 新增或修改商品屬性引數對話方塊 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="130px">
        <el-form-item label="原始屬性名稱" prop="originalAttributeName">
          <el-input v-model="form.originalAttributeName" placeholder="請輸入原始屬性名稱" />
        </el-form-item>
        <el-form-item label="顯示屬性值名稱" prop="displayAttributeName">
          <el-input v-model="form.displayAttributeName" placeholder="請輸入顯示屬性值名稱" />
        </el-form-item>
        <el-form-item label="規定的資料型別" prop="inputValidationType">
          <!-- 下拉框選擇回顯 -->
          <el-select v-model="form.inputValidationType" clearable placeholder="規定的資料型別">
            <!-- form.inputValidationType 是0 回顯整型-->
            <el-option label="整型" :value="0" />
            <el-option label="字元串型別" :value="1"  />
            <el-option label="列舉值型別" :value="2" />
            <el-option label="浮點型別" :value="3" />
            <el-option label="時間戳型別" :value="4" />
            <el-option label="日期型別" :value="5" />
          </el-select>
          <!-- <el-input v-model="form.inputValidationType" placeholder="規定的資料型別" /> -->
        </el-form-item>
        <el-form-item label="日期格式型別" prop="dateFormatType">
          <!-- <el-input v-model="form.dateFormatType" placeholder="日期格式型別" /> -->
          <el-select v-model="form.dateFormatType" placeholder="日期格式型別" >
            <el-option :value="0" label="yyyy-MM-dd" />
          </el-select>
        </el-form-item>
        <el-form-item label="輸入型別" prop="inputType">
          <!-- <el-input v-model="form.inputType" placeholder="輸入型別" /> -->
          <el-select v-model="form.inputType" placeholder="輸入型別" clearable>
            <el-option :value="1" label="單選下拉選擇"/>
            <el-option :value="2" label="多選下拉選擇"/>
            <el-option :value="3" label="文字框"/>
            <el-option :value="4" label="單選下拉選擇+文字框"/>
            <el-option :value="5" label="多選下拉選擇+文字框"/>
          </el-select>
        </el-form-item>
        <el-form-item label="是否需要單位" prop="formatType">
          <!-- <el-input v-model="form.formatType" placeholder="是否需要單位" /> -->
          <el-radio-group v-model="form.formatType" placeholder="是否需要單位">
            <el-radio :label="1">不需要</el-radio>
            <el-radio :label="2">需要</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="商品屬性單位" v-show="form.formatType === 2">
          <el-select v-model="form.unitIds" clearable filterable multiple collapse-tags placeholder="請選擇屬性單位">
            <el-option
              v-for="item in unitList"
              :key="item.unitId"
              :label="item.unitSymbol"
              :value="item.unitId">
            </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="商品屬性值">
          <el-select v-model="form.valueIds" clearable filterable multiple collapse-tags placeholder="請選擇屬性值">
            <el-option
              v-for="item in valueList"
              :key="item.valueId"
              :label="item.displayValueName"
              :value="item.valueId">
            </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="屬性型別" prop="attributeCategoryIds">
              <treeselect v-model="form.attributeCategoryIds"
              :options="attributeCategoryOptions"
              :multiple="true"
              :disable-branch-nodes="true"
              :show-count="true"
              :clearable="true"
              :searchable="true"
              :simpleValue="true"
              :limit="6"
              placeholder="請選擇屬性型別" />
        </el-form-item>
        <el-form-item label="是否必填" prop="mandatory">
          <el-radio-group v-model="form.mandatory" placeholder="是否必填">
            <el-radio :label=true>是</el-radio>
            <el-radio :label=false>否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否公共屬性" prop="isCommon">
          <el-radio-group v-model="form.isCommon" placeholder="請選擇公共屬性">
            <el-radio :label="1" >是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- <el-form-item label="手動新增" prop="handAddStatus">
          <el-radio-group v-model="form.handAddStatus" placeholder="請選擇是否支援手動新增">
            <el-radio :label="1">支援</el-radio>
            <el-radio :label="0">不支援</el-radio>
          </el-radio-group>
        </el-form-item> -->
        <el-form-item label="屬性的型別" prop="type">
          <el-radio-group v-model="form.type" placeholder="請選擇屬性的型別">
            <el-radio :label="1">引數</el-radio>
            <!-- <el-radio :label="0">規格</el-radio> -->
          </el-radio-group>
        </el-form-item>
        <el-form-item label="排序欄位" prop="sort">
          <el-input-number v-model="form.sort" :step="1" :min="0" placeholder="請輸入排序欄位：最高的可以單獨上傳圖片" />
        </el-form-item>
        <el-form-item label="備註" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="請輸入內容" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" :loading="attSubmitting" @click="submitForm">確 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listAttribute, getAttribute, delAttribute, addAttribute, updateAttribute ,attributeCategoryTree } from "@/api/product/attribute";
import { listUnit } from "@/api/product/attributeUnit";
import { listValue } from "@/api/product/attributeValue";


import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  name: "Attribute",
  components: { Treeselect },
  data() {
    return {
      valueList:[],
      unitList:[],
      queryAttributeValueListParams: {
        pageNum: 1,
        pageSize: 100000,
      },
      queryAttributeUnitListParams: {
        pageNum: 1,
        pageSize: 100000,
      },
      // 遮罩層
      loading: true,
      attSubmitting: false,
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
      // 商品屬性引數列格資料
      attributeList: [],
       // 商品屬性分類樹資料
      attributeCategoryName: null,
      // 商品屬性引數下拉樹結構
      attributeCategoryOptions: undefined,
      // 彈出層標題
      title: "",

      enumhandAddStatus: {
        "1": '支援',
        "0": '不支援'
      },
      enumType: {
        "1": '引數',
      },

      enumFormatType: {
        1 : '不需要',
        2 : '需要'
      },
      enumCommon: {
        1 : '是',
        0 : '否'
      },
      enumInputValidationType: {
        0: '整型',
        1: '字元串型別',
        2: '列舉值型別',
        3: '浮點型別',
        4: '時間戳型別',
        5: '日期型別'
      },
      enumDateFormatType:{
        0: 'yyyy-MM-dd'
      },
      enumInputType:{
        1: '單選下拉選擇',
        2: '多選下拉選擇',
        3: '文字框',
        4: '單選下拉選擇+文字框',
        5: '多選下拉選擇+文字框'
      },
      // 是否顯示彈出層
      open: false,
      // 初始狀態為未提交

      // 查詢引數
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        attributeCategoryId: null,
        originalAttributeName: null,
        displayAttributeName: null,
        inputValidationType: null,
        dateFormatType: null,
        inputType: null,
        formatType: null,
        isCommon: null,
        sort: null,
        mandatory: null,
        handAddStatus: null,
        type: null,
        remark: null
      },
      // 表單引數
      form: {
        attributeCategoryIds:null,
      },
      defaultProps: {
        children: "children",
        label: "displayName"
      },
      // 表單驗證
      rules: {

        inputType: [
          { required: true, message: "輸入型別不能為空", trigger: "change" }
        ],
        dateFormatType: [
          { required: true, message: "日期格式型別不能為空", trigger: "change" }
        ],
        originalAttributeName: [
          {
             required: true, message: "原始屬性名稱不能為空", trigger: "blur"
          },{
            pattern: /^(?=.*[0-9a-zA-Z])[\d\w\s]+$/,
            message: "請輸入數字、英文字元和空格，但不是純空格",
            trigger: "blur"
          }
        ],
        inputValidationType: [
          { required: true, message: "規定的資料型別不能為空", trigger: "change" }
        ],

        displayAttributeName: [
          { required: true, message: "顯示屬性值名稱不能為空", trigger: "blur" }
        ],
        type: [
          { required: true, message: "屬性的型別不能為空", trigger: "blur" }
        ],
        handAddStatus: [
          { required: true, message: "是否手動新增不能為空", trigger: "blur" }
        ],
        mandatory: [
          { required: true, message: "是否必填不能為空", trigger: "blur" }
        ],
        sort: [
          { required: true, message: "排序欄位不能為空", trigger: "blur" }
        ],

        formatType: [
          { required: true, message: "是否需要單位不能為空", trigger: "blur" }
        ],
        isCommon: [
          { required: true, message: "是否是公共屬性不能為空", trigger: "blur" }
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
    this.getList();
    // 頁面載入完後執行
    this.getAttributeUnitList();
    this.getAttributeValueList();
    this.getAttributeCategoryTree();
  },
  methods: {

    getAttributeUnitList(){
      listUnit(this.queryAttributeUnitListParams).then(response => {
        this.unitList = response.rows;
      });
    },
    getAttributeValueList(){
      listValue(this.queryAttributeValueListParams).then(response => {
        this.valueList = response.rows;
      });
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
    /** 查詢商品屬性引數列表 */
    getList() {
      this.loading = true;
      listAttribute(this.queryParams).then(response => {
        this.attributeList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
      /** 查詢分類下拉樹結構 */
    async getAttributeCategoryTree() {
      await  attributeCategoryTree().then(response => {
        this.attributeCategoryOptions = response.data;
        this.processEmptyChildren(this.attributeCategoryOptions, "children");
      });
    },

     // 篩選節點
     filterNode(value, data) {
      if (!value) return true;
      return data.displayName.indexOf(value) !== -1;
    },
    // 節點單擊事件
    handleNodeClick(data) {
      this.queryParams.attributeCategoryId = data.id;
      this.handleQuery();
    },
    // 取消按鈕
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表單重置
    reset() {
      this.form = {
        attributeId: null,
        attributeCategoryId: null,
        originalAttributeName: null,
        mandatory: null,
        displayAttributeName: null,
        inputValidationType: null,
        dateFormatType: null,
        inputType: null,
        formatType: null,
        isCommon: null,
        sort: null,
        handAddStatus: null,
        type: null,
        delFlag: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        attributeCategoryIds: null,
        unitIds:[],
        valueIds:[],
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
      this.ids = selection.map(item => item.attributeId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按鈕操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "新增商品屬性引數";
    },
    /** 修改按鈕操作 */
    handleUpdate(row) {
      this.reset();
      const attributeId = row.attributeId || this.ids
      getAttribute(attributeId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改商品屬性引數";
      });
    },
    /** 提交按鈕 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
            // 防止重複提交
            if(this.attSubmitting){
              return;
            }
            this.attSubmitting = true;
          if (this.form.attributeId != null) {
            updateAttribute(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            }).finally(() => {
               this.attSubmitting = false;
            });
          } else {
            addAttribute(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            }).finally(() => {
              this.attSubmitting = false;
            });
          }
        };
      });
    },
    /** 刪除按鈕操作 */
    handleDelete(row) {
      const attributeIds = row.attributeId || this.ids;
      this.$modal.confirm('是否確認刪除商品屬性引數編號為"' + attributeIds + '"的資料項？').then(function() {
        return delAttribute(attributeIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("刪除成功");
      }).catch(() => {});
    },
    /** 匯出按鈕操作 */
    handleExport() {
      this.download('productAttribute/export', {
        ...this.queryParams
      }, `attribute_${new Date().getTime()}.xlsx`)
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