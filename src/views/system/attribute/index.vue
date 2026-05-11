<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="產品屬性類別表ID" prop="attributeCategoryId">
        <el-input
          v-model="queryParams.attributeCategoryId"
          placeholder="請輸入產品屬性類別表ID"
          clearable
          @keyup.enter.native="handleQuery"
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
        <el-input
          v-model="queryParams.isCommon"
          placeholder="請輸入是否是公共屬性"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="排序欄位：最高的可以上傳圖片" prop="sort">
        <el-input
          v-model="queryParams.sort"
          placeholder="請輸入排序欄位：最高的可以上傳圖片"
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
          v-hasPermi="['system:attribute:add']"
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
          v-hasPermi="['system:attribute:edit']"
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
          v-hasPermi="['system:attribute:remove']"
        >刪除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:attribute:export']"
        >匯出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="attributeList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="ID" align="center" prop="attributeId" />
      <el-table-column label="產品屬性類別表ID" align="center" prop="attributeCategoryId" />
      <el-table-column label="原始屬性名稱" align="center" prop="originalAttributeName" />
      <el-table-column label="顯示屬性值名稱" align="center" prop="displayAttributeName" />
      <el-table-column label="規定的資料類別" align="center" prop="inputValidationType" />
      <el-table-column label="日期格式類別" align="center" prop="dateFormatType" />
      <el-table-column label="輸入類別" align="center" prop="inputType" />
      <el-table-column label="是否需要單位" align="center" prop="formatType" />
      <el-table-column label="是否是公共屬性" align="center" prop="isCommon" />
      <el-table-column label="排序欄位：最高的可以上傳圖片" align="center" prop="sort" />
      <el-table-column label="是否支援手動新增；0->不支援；1->支援" align="center" prop="handAddStatus" />
      <el-table-column label="屬性的類別；0->規格；1->引數" align="center" prop="type" />
      <el-table-column label="備註" align="center" prop="remarK" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:attribute:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:attribute:remove']"
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

    <!-- 新增或修改商品屬性引數對話方塊 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="產品屬性類別表ID" prop="attributeCategoryId">
          <el-input v-model="form.attributeCategoryId" placeholder="請輸入產品屬性類別表ID" />
        </el-form-item>
        <el-form-item label="原始屬性名稱" prop="originalAttributeName">
          <el-input v-model="form.originalAttributeName" placeholder="請輸入原始屬性名稱" />
        </el-form-item>
        <el-form-item label="顯示屬性值名稱" prop="displayAttributeName">
          <el-input v-model="form.displayAttributeName" placeholder="請輸入顯示屬性值名稱" />
        </el-form-item>
        <el-form-item label="是否是公共屬性" prop="isCommon">
          <el-input v-model="form.isCommon" placeholder="請輸入是否是公共屬性" />
        </el-form-item>
        <el-form-item label="排序欄位：最高的可以上傳圖片" prop="sort">
          <el-input v-model="form.sort" placeholder="請輸入排序欄位：最高的可以上傳圖片" />
        </el-form-item>
        <el-form-item label="刪除標誌" prop="delFlag">
          <el-input v-model="form.delFlag" placeholder="請輸入刪除標誌" />
        </el-form-item>
        <el-form-item label="備註" prop="remarK">
          <el-input v-model="form.remarK" type="textarea" placeholder="請輸入內容" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">確 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listAttribute, getAttribute, delAttribute, addAttribute, updateAttribute } from "@/api/product/attribute";

export default {
  name: "Attribute",
  data() {
    return {
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
      // 商品屬性引數列格資料
      attributeList: [],
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      open: false,
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
        handAddStatus: null,
        type: null,
        remarK: null
      },
      // 表單引數
      form: {},
      // 表單校驗
      rules: {
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查詢商品屬性引數列表 */
    getList() {
      this.loading = true;
      listAttribute(this.queryParams).then(response => {
        this.attributeList = response.rows;
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
      this.form = {
        attributeId: null,
        attributeCategoryId: null,
        originalAttributeName: null,
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
        remarK: null
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
          if (this.form.attributeId != null) {
            updateAttribute(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addAttribute(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
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
      this.download('product/attribute/export', {
        ...this.queryParams
      }, `attribute_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>