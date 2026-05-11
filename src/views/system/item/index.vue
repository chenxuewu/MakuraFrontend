<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="店鋪ID" prop="shopId">
        <el-input
          v-model="queryParams.shopId"
          placeholder="請輸入店鋪ID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商品ID" prop="productId">
        <el-input
          v-model="queryParams.productId"
          placeholder="請輸入商品ID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商品code" prop="productSn">
        <el-input
          v-model="queryParams.productSn"
          placeholder="請輸入商品code"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商品SKU" prop="productSkuId">
        <el-input
          v-model="queryParams.productSkuId"
          placeholder="請輸入商品SKU"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="使用者ID" prop="memberId">
        <el-input
          v-model="queryParams.memberId"
          placeholder="請輸入使用者ID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="購買數量" prop="quantity">
        <el-input
          v-model="queryParams.quantity"
          placeholder="請輸入購買數量"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新增到購物車的價格" prop="price">
        <el-input
          v-model="queryParams.price"
          placeholder="請輸入新增到購物車的價格"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="建立時間" prop="createDate">
        <el-date-picker clearable
          v-model="queryParams.createDate"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="請選擇建立時間">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="修改時間" prop="modifyDate">
        <el-date-picker clearable
          v-model="queryParams.modifyDate"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="請選擇修改時間">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="商品分類" prop="productCategoryId">
        <el-input
          v-model="queryParams.productCategoryId"
          placeholder="請輸入商品分類"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商品平牌" prop="productBrand">
        <el-input
          v-model="queryParams.productBrand"
          placeholder="請輸入商品平牌"
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
          v-hasPermi="['system:item:add']"
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
          v-hasPermi="['system:item:edit']"
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
          v-hasPermi="['system:item:remove']"
        >刪除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:item:export']"
        >匯出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="itemList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="${comment}" align="center" prop="id" />
      <el-table-column label="店鋪ID" align="center" prop="shopId" />
      <el-table-column label="商品ID" align="center" prop="productId" />
      <el-table-column label="商品code" align="center" prop="productSn" />
      <el-table-column label="商品SKU" align="center" prop="productSkuId" />
      <el-table-column label="使用者ID" align="center" prop="memberId" />
      <el-table-column label="會員暱稱" align="center" prop="memberNickname" />
      <el-table-column label="購買數量" align="center" prop="quantity" />
      <el-table-column label="新增到購物車的價格" align="center" prop="price" />
      <el-table-column label="商品主圖" align="center" prop="productPic" />
      <el-table-column label="商品名稱" align="center" prop="productName" />
      <el-table-column label="商品副標題" align="center" prop="productSubTitle" />
      <el-table-column label="建立時間" align="center" prop="createDate" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createDate, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="修改時間" align="center" prop="modifyDate" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.modifyDate, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="是否刪除" align="center" prop="deleteStatus" />
      <el-table-column label="商品分類" align="center" prop="productCategoryId" />
      <el-table-column label="商品平牌" align="center" prop="productBrand" />
      <el-table-column label="商品銷售屬性:[{"key":"顏色","value":"顏色"},{"key":"容量","value":"4G"}]" align="center" prop="productAttr" />
      <el-table-column label="備註" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:item:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:item:remove']"
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

    <!-- 新增或修改購物車對話方塊 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="店鋪ID" prop="shopId">
          <el-input v-model="form.shopId" placeholder="請輸入店鋪ID" />
        </el-form-item>
        <el-form-item label="商品ID" prop="productId">
          <el-input v-model="form.productId" placeholder="請輸入商品ID" />
        </el-form-item>
        <el-form-item label="商品code" prop="productSn">
          <el-input v-model="form.productSn" placeholder="請輸入商品code" />
        </el-form-item>
        <el-form-item label="商品SKU" prop="productSkuId">
          <el-input v-model="form.productSkuId" placeholder="請輸入商品SKU" />
        </el-form-item>
        <el-form-item label="使用者ID" prop="memberId">
          <el-input v-model="form.memberId" placeholder="請輸入使用者ID" />
        </el-form-item>
        <el-form-item label="會員暱稱" prop="memberNickname">
          <el-input v-model="form.memberNickname" type="textarea" placeholder="請輸入內容" />
        </el-form-item>
        <el-form-item label="購買數量" prop="quantity">
          <el-input v-model="form.quantity" placeholder="請輸入購買數量" />
        </el-form-item>
        <el-form-item label="新增到購物車的價格" prop="price">
          <el-input v-model="form.price" placeholder="請輸入新增到購物車的價格" />
        </el-form-item>
        <el-form-item label="商品主圖" prop="productPic">
          <el-input v-model="form.productPic" type="textarea" placeholder="請輸入內容" />
        </el-form-item>
        <el-form-item label="商品名稱" prop="productName">
          <el-input v-model="form.productName" type="textarea" placeholder="請輸入內容" />
        </el-form-item>
        <el-form-item label="商品副標題" prop="productSubTitle">
          <el-input v-model="form.productSubTitle" type="textarea" placeholder="請輸入內容" />
        </el-form-item>
        <el-form-item label="建立時間" prop="createDate">
          <el-date-picker clearable
            v-model="form.createDate"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="請選擇建立時間">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="修改時間" prop="modifyDate">
          <el-date-picker clearable
            v-model="form.modifyDate"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="請選擇修改時間">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="商品分類" prop="productCategoryId">
          <el-input v-model="form.productCategoryId" placeholder="請輸入商品分類" />
        </el-form-item>
        <el-form-item label="商品平牌" prop="productBrand">
          <el-input v-model="form.productBrand" placeholder="請輸入商品平牌" />
        </el-form-item>
        <el-form-item label="商品銷售屬性:[{"key":"顏色","value":"顏色"},{"key":"容量","value":"4G"}]" prop="productAttr">
          <el-input v-model="form.productAttr" type="textarea" placeholder="請輸入內容" />
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
import { listItem, getItem, delItem, addItem, updateItem } from "@/api/system/item";

export default {
  name: "Item",
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
      // 購物車表格資料
      itemList: [],
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      open: false,
      // 查詢引數
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        shopId: null,
        productId: null,
        productSn: null,
        productSkuId: null,
        memberId: null,
        memberNickname: null,
        quantity: null,
        price: null,
        productPic: null,
        productName: null,
        productSubTitle: null,
        createDate: null,
        modifyDate: null,
        deleteStatus: null,
        productCategoryId: null,
        productBrand: null,
        productAttr: null,
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
    /** 查詢購物車列表 */
    getList() {
      this.loading = true;
      listItem(this.queryParams).then(response => {
        this.itemList = response.rows;
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
        shopId: null,
        productId: null,
        productSn: null,
        productSkuId: null,
        memberId: null,
        memberNickname: null,
        quantity: null,
        price: null,
        productPic: null,
        productName: null,
        productSubTitle: null,
        createDate: null,
        modifyDate: null,
        deleteStatus: null,
        productCategoryId: null,
        productBrand: null,
        productAttr: null,
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
      this.title = "新增購物車";
    },
    /** 修改按鈕操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids;
      getItem(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改購物車";
      });
    },
    /** 提交按鈕 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateItem(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addItem(this.form).then(response => {
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
      this.$modal.confirm('是否確認刪除購物車編號為"' + ids + '"的資料項？').then(function() {
        return delItem(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("刪除成功");
      }).catch(() => {});
    },
    /** 匯出按鈕操作 */
    handleExport() {
      this.download('system/item/export', {
        ...this.queryParams
      }, `item_${new Date().getTime()}.xlsx`);
    }
  }
};
</script>
