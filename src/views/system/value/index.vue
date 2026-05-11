<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="屬性引數ID" prop="attributeId">
        <el-input
          v-model="queryParams.attributeId"
          placeholder="請輸入屬性引數ID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="原始屬性值的數值" prop="originaLvalueName">
        <el-input
          v-model="queryParams.originaLvalueName"
          placeholder="請輸入原始屬性值的數值"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="顯示屬性值名稱" prop="displayValueName">
        <el-input
          v-model="queryParams.displayValueName"
          placeholder="請輸入顯示屬性值名稱"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="屬性值單位" prop="valueUnit">
        <el-input
          v-model="queryParams.valueUnit"
          placeholder="請輸入屬性值單位"
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
          v-hasPermi="['system:value:add']"
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
          v-hasPermi="['system:value:edit']"
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
          v-hasPermi="['system:value:remove']"
        >刪除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:value:export']"
        >匯出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="valueList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="屬性值ID" align="center" prop="valueId" />
      <el-table-column label="屬性引數ID" align="center" prop="attributeId" />
      <el-table-column label="原始屬性值的數值" align="center" prop="originaLvalueName" />
      <el-table-column label="顯示屬性值名稱" align="center" prop="displayValueName" />
      <el-table-column label="屬性值單位" align="center" prop="valueUnit" />
      <el-table-column label="備註" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:value:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:value:remove']"
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

    <!-- 新增或修改商品屬性值對話方塊 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="屬性引數ID" prop="attributeId">
          <el-input v-model="form.attributeId" placeholder="請輸入屬性引數ID" />
        </el-form-item>
        <el-form-item label="原始屬性值的數值" prop="originaLvalueName">
          <el-input v-model="form.originaLvalueName" placeholder="請輸入原始屬性值的數值" />
        </el-form-item>
        <el-form-item label="顯示屬性值名稱" prop="displayValueName">
          <el-input v-model="form.displayValueName" placeholder="請輸入顯示屬性值名稱" />
        </el-form-item>
        <el-form-item label="屬性值單位" prop="valueUnit">
          <el-input v-model="form.valueUnit" placeholder="請輸入屬性值單位" />
        </el-form-item>
        <el-form-item label="刪除標誌" prop="delFlag">
          <el-input v-model="form.delFlag" placeholder="請輸入刪除標誌" />
        </el-form-item>
        <el-form-item label="備註" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="請輸入內容" />
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
import { listValue, getValue, delValue, addValue, updateValue } from "@/api/system/value";

export default {
  name: "Value",
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
      // 商品屬性值表格資料
      valueList: [],
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      open: false,
      // 查詢引數
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        attributeId: null,
        originaLvalueName: null,
        displayValueName: null,
        valueUnit: null,
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
    /** 查詢商品屬性值列表 */
    getList() {
      this.loading = true;
      listValue(this.queryParams).then(response => {
        this.valueList = response.rows;
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
        valueId: null,
        attributeId: null,
        originaLvalueName: null,
        displayValueName: null,
        valueUnit: null,
        delFlag: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
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
      this.ids = selection.map(item => item.valueId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按鈕操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "新增商品屬性值";
    },
    /** 修改按鈕操作 */
    handleUpdate(row) {
      this.reset();
      const valueId = row.valueId || this.ids
      getValue(valueId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改商品屬性值";
      });
    },
    /** 提交按鈕 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.valueId != null) {
            updateValue(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addValue(this.form).then(response => {
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
      const valueIds = row.valueId || this.ids;
      this.$modal.confirm('是否確認刪除商品屬性值編號為"' + valueIds + '"的資料項？').then(function() {
        return delValue(valueIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("刪除成功");
      }).catch(() => {});
    },
    /** 匯出按鈕操作 */
    handleExport() {
      this.download('system/value/export', {
        ...this.queryParams
      }, `value_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>