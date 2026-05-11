<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="商品ID" prop="productId">
        <el-input
          v-model="queryParams.productId"
          placeholder="請輸入商品ID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="sku編碼" prop="sku">
        <el-input
          v-model="queryParams.sku"
          placeholder="請輸入sku編碼"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="規格名稱組合(紫色,125GB；紫色,256GB)" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="請輸入規格名稱組合(紫色,125GB；紫色,256GB)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="價格" prop="pricE">
        <el-input
          v-model="queryParams.pricE"
          placeholder="請輸入價格"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商品價格" prop="itemPrice">
        <el-input
          v-model="queryParams.itemPrice"
          placeholder="請輸入商品價格"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="國際貿易程式碼" prop="gtinCode">
        <el-input
          v-model="queryParams.gtinCode"
          placeholder="請輸入國際貿易程式碼"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="展示圖片" prop="pic">
        <el-input
          v-model="queryParams.pic"
          placeholder="請輸入展示圖片"
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
          v-hasPermi="['system:sku:add']"
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
          v-hasPermi="['system:sku:edit']"
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
          v-hasPermi="['system:sku:remove']"
        >刪除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:sku:export']"
        >匯出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="skuList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="ID" align="center" prop="id" />
      <el-table-column label="商品ID" align="center" prop="productId" />
      <el-table-column label="sku編碼" align="center" prop="sku" />
      <el-table-column label="規格位置組合[0,0] [0,1] [1,0] [1,1]" align="center" prop="tierIndex" />
      <el-table-column label="規格名稱組合(紫色,125GB；紫色,256GB)" align="center" prop="name" />
      <el-table-column label="價格" align="center" prop="pricE" />
      <el-table-column label="商品價格" align="center" prop="itemPrice" />
      <el-table-column label="國際貿易程式碼" align="center" prop="gtinCode" />
      <el-table-column label="展示圖片" align="center" prop="pic" />
      <el-table-column label="備註" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:sku:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:sku:remove']"
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

    <!-- 新增或修改sku的庫存對話方塊 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="商品ID" prop="productId">
          <el-input v-model="form.productId" placeholder="請輸入商品ID" />
        </el-form-item>
        <el-form-item label="sku編碼" prop="sku">
          <el-input v-model="form.sku" placeholder="請輸入sku編碼" />
        </el-form-item>
        <el-form-item label="規格位置組合[0,0] [0,1] [1,0] [1,1]" prop="tierIndex">
          <el-input v-model="form.tierIndex" type="textarea" placeholder="請輸入內容" />
        </el-form-item>
        <el-form-item label="規格名稱組合(紫色,125GB；紫色,256GB)" prop="name">
          <el-input v-model="form.name" placeholder="請輸入規格名稱組合(紫色,125GB；紫色,256GB)" />
        </el-form-item>
        <el-form-item label="價格" prop="pricE">
          <el-input v-model="form.pricE" placeholder="請輸入價格" />
        </el-form-item>
        <el-form-item label="商品價格" prop="itemPrice">
          <el-input v-model="form.itemPrice" placeholder="請輸入商品價格" />
        </el-form-item>
        <el-form-item label="國際貿易程式碼" prop="gtinCode">
          <el-input v-model="form.gtinCode" placeholder="請輸入國際貿易程式碼" />
        </el-form-item>
        <el-form-item label="展示圖片" prop="pic">
          <el-input v-model="form.pic" placeholder="請輸入展示圖片" />
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
import { listSku, getSku, delSku, addSku, updateSku } from "@/api/system/sku";

export default {
  name: "Sku",
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
      // sku的庫存表格資料
      skuList: [],
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      open: false,
      // 查詢引數
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        productId: null,
        sku: null,
        tierIndex: null,
        name: null,
        pricE: null,
        itemPrice: null,
        gtinCode: null,
        pic: null,
      },
      // 表單引數
      form: {},
      // 表單校驗
      rules: {
        sku: [
          { required: true, message: "sku編碼不能為空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查詢sku的庫存列表 */
    getList() {
      this.loading = true;
      listSku(this.queryParams).then(response => {
        this.skuList = response.rows;
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
        productId: null,
        sku: null,
        tierIndex: null,
        name: null,
        pricE: null,
        itemPrice: null,
        gtinCode: null,
        pic: null,
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
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按鈕操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "新增sku的庫存";
    },
    /** 修改按鈕操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getSku(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改sku的庫存";
      });
    },
    /** 提交按鈕 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateSku(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addSku(this.form).then(response => {
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
      this.$modal.confirm('是否確認刪除sku的庫存編號為"' + ids + '"的資料項？').then(function() {
        return delSku(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("刪除成功");
      }).catch(() => {});
    },
    /** 匯出按鈕操作 */
    handleExport() {
      this.download('system/sku/export', {
        ...this.queryParams
      }, `sku_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>