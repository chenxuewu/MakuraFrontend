<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="訂單ID" prop="orderId">
        <el-input
          v-model="queryParams.orderId"
          placeholder="請輸入訂單ID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="訂單下的包裹的唯一識別符號" prop="packageNumber">
        <el-input
          v-model="queryParams.packageNumber"
          placeholder="請輸入訂單下的包裹的唯一識別符號"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="物流公司" prop="shippingCarrier">
        <el-input
          v-model="queryParams.shippingCarrier"
          placeholder="請輸入物流公司"
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
          v-hasPermi="['system:package:add']"
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
          v-hasPermi="['system:package:edit']"
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
          v-hasPermi="['system:package:remove']"
        >刪除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:package:export']"
        >匯出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="packageList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="ID" align="center" prop="id" />
      <el-table-column label="訂單ID" align="center" prop="orderId" />
      <el-table-column label="訂單下的包裹的唯一識別符號" align="center" prop="packageNumber" />
      <el-table-column label="訂單的 物流狀態" align="center" prop="logisticsStatus" />
      <el-table-column label="物流公司" align="center" prop="shippingCarrier" />
      <el-table-column label="備註" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:package:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:package:remove']"
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

    <!-- 新增或修改訂單包裹對話方塊 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="訂單ID" prop="orderId">
          <el-input v-model="form.orderId" placeholder="請輸入訂單ID" />
        </el-form-item>
        <el-form-item label="訂單下的包裹的唯一識別符號" prop="packageNumber">
          <el-input v-model="form.packageNumber" placeholder="請輸入訂單下的包裹的唯一識別符號" />
        </el-form-item>
        <el-form-item label="物流公司" prop="shippingCarrier">
          <el-input v-model="form.shippingCarrier" placeholder="請輸入物流公司" />
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
import { listPackage, getPackage, delPackage, addPackage, updatePackage } from "@/api/system/package";

export default {
  name: "Package",
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
      // 訂單包裹表格資料
      packageList: [],
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      open: false,
      // 查詢引數
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        orderId: null,
        packageNumber: null,
        logisticsStatus: null,
        shippingCarrier: null,
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
    /** 查詢訂單包裹列表 */
    getList() {
      this.loading = true;
      listPackage(this.queryParams).then(response => {
        this.packageList = response.rows;
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
        id: null,
        orderId: null,
        packageNumber: null,
        logisticsStatus: null,
        shippingCarrier: null,
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
      this.ids = selection.map(item => item.id);
      this.single = selection.length!==1;
      this.multiple = !selection.length;
    },
    /** 新增按鈕操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "新增訂單包裹";
    },
    /** 修改按鈕操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids;
      getPackage(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改訂單包裹";
      });
    },
    /** 提交按鈕 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updatePackage(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addPackage(this.form).then(response => {
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
      const ids = row.id || this.ids;
      this.$modal.confirm('是否確認刪除訂單包裹編號為"' + ids + '"的資料項？').then(function() {
        return delPackage(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("刪除成功");
      }).catch(() => {});
    },
    /** 匯出按鈕操作 */
    handleExport() {
      this.download('system/package/export', {
        ...this.queryParams
      }, `package_${new Date().getTime()}.xlsx`);
    }
  }
};
</script>