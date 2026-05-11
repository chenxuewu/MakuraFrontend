<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="訂單編號" prop="orderSn">
        <el-input
          v-model="queryParams.orderSn"
          placeholder="請輸入訂單編號"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="是否為貨到付款" prop="cod">
        <el-input
          v-model="queryParams.cod"
          placeholder="請輸入是否為貨到付款"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="訂單總金額" prop="totalAmount">
        <el-input
          v-model="queryParams.totalAmount"
          placeholder="請輸入訂單總金額"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="運輸承運人" prop="shippingCarrier">
        <el-input
          v-model="queryParams.shippingCarrier"
          placeholder="請輸入運輸承運人"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="付款方式" prop="paymentMethod">
        <el-input
          v-model="queryParams.paymentMethod"
          placeholder="請輸入付款方式"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="運費金額" prop="actualShippingFee">
        <el-input
          v-model="queryParams.actualShippingFee"
          placeholder="請輸入運費金額"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="給賣家的留言" prop="messageToSeller">
        <el-input
          v-model="queryParams.messageToSeller"
          placeholder="請輸入給賣家的留言"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="發貨時間" prop="daysToShip">
        <el-input
          v-model="queryParams.daysToShip"
          placeholder="請輸入發貨時間"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="寄出包裹的最後期限" prop="shipByDate">
        <el-input
          v-model="queryParams.shipByDate"
          placeholder="請輸入寄出包裹的最後期限"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="買家的使用者id" prop="buyerUserId">
        <el-input
          v-model="queryParams.buyerUserId"
          placeholder="請輸入買家的使用者id"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="買家姓名" prop="buyerUserName">
        <el-input
          v-model="queryParams.buyerUserName"
          placeholder="請輸入買家姓名"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="是否包含需要報關的商品" prop="goodsToDeclare">
        <el-input
          v-model="queryParams.goodsToDeclare"
          placeholder="請輸入是否包含需要報關的商品"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="付款時間" prop="payTime">
        <el-input
          v-model="queryParams.payTime"
          placeholder="請輸入付款時間"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="取消方" prop="cancelBy">
        <el-input
          v-model="queryParams.cancelBy"
          placeholder="請輸入取消方"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="取消原因" prop="cancelReason">
        <el-input
          v-model="queryParams.cancelReason"
          placeholder="請輸入取消原因"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="取貨完成時的時間戳" prop="pickupDoneTime">
        <el-input
          v-model="queryParams.pickupDoneTime"
          placeholder="請輸入取貨完成時的時間戳"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="訂單最早預計送達日期" prop="edtFrom">
        <el-input
          v-model="queryParams.edtFrom"
          placeholder="請輸入訂單最早預計送達日期"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="訂單的最新預計交貨日期" prop="edtTo">
        <el-input
          v-model="queryParams.edtTo"
          placeholder="請輸入訂單的最新預計交貨日期"
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
          v-hasPermi="['system:order:add']"
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
          v-hasPermi="['system:order:edit']"
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
          v-hasPermi="['system:order:remove']"
        >刪除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:order:export']"
        >匯出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="orderList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="訂單id" align="center" prop="orderId" />
      <el-table-column label="訂單編號" align="center" prop="orderSn" />
      <el-table-column label="是否為貨到付款" align="center" prop="cod" />
      <el-table-column label="訂單總金額" align="center" prop="totalAmount" />
      <el-table-column label="訂單狀態" align="center" prop="orderStatus" />
      <el-table-column label="運輸承運人" align="center" prop="shippingCarrier" />
      <el-table-column label="付款方式" align="center" prop="paymentMethod" />
      <el-table-column label="運費金額" align="center" prop="actualShippingFee" />
      <el-table-column label="給賣家的留言" align="center" prop="messageToSeller" />
      <el-table-column label="發貨時間" align="center" prop="daysToShip" />
      <el-table-column label="寄出包裹的最後期限" align="center" prop="shipByDate" />
      <el-table-column label="買家的使用者id" align="center" prop="buyerUserId" />
      <el-table-column label="買家姓名" align="center" prop="buyerUserName" />
      <el-table-column label="是否包含需要報關的商品" align="center" prop="goodsToDeclare" />
      <el-table-column label="付款時間" align="center" prop="payTime" />
      <el-table-column label="取消方" align="center" prop="cancelBy" />
      <el-table-column label="取消原因" align="center" prop="cancelReason" />
      <el-table-column label="取貨完成時的時間戳" align="center" prop="pickupDoneTime" />
      <el-table-column label="訂單最早預計送達日期" align="center" prop="edtFrom" />
      <el-table-column label="訂單的最新預計交貨日期" align="center" prop="edtTo" />
      <el-table-column label="發票型別：0->不開發票；1->電子發票；2->紙質發票" align="center" prop="billType" />
      <el-table-column label="備註" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:order:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:order:remove']"
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

    <!-- 新增或修改訂單對話方塊 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="訂單編號" prop="orderSn">
          <el-input v-model="form.orderSn" placeholder="請輸入訂單編號" />
        </el-form-item>
        <el-form-item label="是否為貨到付款" prop="cod">
          <el-input v-model="form.cod" placeholder="請輸入是否為貨到付款" />
        </el-form-item>
        <el-form-item label="訂單總金額" prop="totalAmount">
          <el-input v-model="form.totalAmount" placeholder="請輸入訂單總金額" />
        </el-form-item>
        <el-form-item label="運輸承運人" prop="shippingCarrier">
          <el-input v-model="form.shippingCarrier" placeholder="請輸入運輸承運人" />
        </el-form-item>
        <el-form-item label="付款方式" prop="paymentMethod">
          <el-input v-model="form.paymentMethod" placeholder="請輸入付款方式" />
        </el-form-item>
        <el-form-item label="運費金額" prop="actualShippingFee">
          <el-input v-model="form.actualShippingFee" placeholder="請輸入運費金額" />
        </el-form-item>
        <el-form-item label="給賣家的留言" prop="messageToSeller">
          <el-input v-model="form.messageToSeller" placeholder="請輸入給賣家的留言" />
        </el-form-item>
        <el-form-item label="發貨時間" prop="daysToShip">
          <el-input v-model="form.daysToShip" placeholder="請輸入發貨時間" />
        </el-form-item>
        <el-form-item label="寄出包裹的最後期限" prop="shipByDate">
          <el-input v-model="form.shipByDate" placeholder="請輸入寄出包裹的最後期限" />
        </el-form-item>
        <el-form-item label="買家的使用者id" prop="buyerUserId">
          <el-input v-model="form.buyerUserId" placeholder="請輸入買家的使用者id" />
        </el-form-item>
        <el-form-item label="買家姓名" prop="buyerUserName">
          <el-input v-model="form.buyerUserName" placeholder="請輸入買家姓名" />
        </el-form-item>
        <el-form-item label="是否包含需要報關的商品" prop="goodsToDeclare">
          <el-input v-model="form.goodsToDeclare" placeholder="請輸入是否包含需要報關的商品" />
        </el-form-item>
        <el-form-item label="付款時間" prop="payTime">
          <el-input v-model="form.payTime" placeholder="請輸入付款時間" />
        </el-form-item>
        <el-form-item label="取消方" prop="cancelBy">
          <el-input v-model="form.cancelBy" placeholder="請輸入取消方" />
        </el-form-item>
        <el-form-item label="取消原因" prop="cancelReason">
          <el-input v-model="form.cancelReason" placeholder="請輸入取消原因" />
        </el-form-item>
        <el-form-item label="取貨完成時的時間戳" prop="pickupDoneTime">
          <el-input v-model="form.pickupDoneTime" placeholder="請輸入取貨完成時的時間戳" />
        </el-form-item>
        <el-form-item label="訂單最早預計送達日期" prop="edtFrom">
          <el-input v-model="form.edtFrom" placeholder="請輸入訂單最早預計送達日期" />
        </el-form-item>
        <el-form-item label="訂單的最新預計交貨日期" prop="edtTo">
          <el-input v-model="form.edtTo" placeholder="請輸入訂單的最新預計交貨日期" />
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
import { listOrder, getOrder, delOrder, addOrder, updateOrder } from "@/api/system/order";

export default {
  name: "Order",
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
      // 訂單表格資料
      orderList: [],
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      open: false,
      // 查詢引數
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        orderSn: null,
        cod: null,
        totalAmount: null,
        orderStatus: null,
        shippingCarrier: null,
        paymentMethod: null,
        actualShippingFee: null,
        messageToSeller: null,
        daysToShip: null,
        shipByDate: null,
        buyerUserId: null,
        buyerUserName: null,
        goodsToDeclare: null,
        payTime: null,
        cancelBy: null,
        cancelReason: null,
        pickupDoneTime: null,
        edtFrom: null,
        edtTo: null,
        billType: null,
      },
      // 表單引數
      form: {},
      // 表單校驗
      rules: {
        buyerUserId: [
          { required: true, message: "買家的使用者id不能為空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查詢訂單列表 */
    getList() {
      this.loading = true;
      listOrder(this.queryParams).then(response => {
        this.orderList = response.rows;
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
        orderId: null,
        orderSn: null,
        cod: null,
        totalAmount: null,
        orderStatus: null,
        shippingCarrier: null,
        paymentMethod: null,
        actualShippingFee: null,
        messageToSeller: null,
        daysToShip: null,
        shipByDate: null,
        buyerUserId: null,
        buyerUserName: null,
        goodsToDeclare: null,
        payTime: null,
        cancelBy: null,
        cancelReason: null,
        pickupDoneTime: null,
        edtFrom: null,
        edtTo: null,
        billType: null,
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
      this.ids = selection.map(item => item.orderId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按鈕操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "新增訂單";
    },
    /** 修改按鈕操作 */
    handleUpdate(row) {
      this.reset();
      const orderId = row.orderId || this.ids
      getOrder(orderId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改訂單";
      });
    },
    /** 提交按鈕 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.orderId != null) {
            updateOrder(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addOrder(this.form).then(response => {
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
      const orderIds = row.orderId || this.ids;
      this.$modal.confirm('是否確認刪除訂單編號為"' + orderIds + '"的資料項？').then(function() {
        return delOrder(orderIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("刪除成功");
      }).catch(() => {});
    },
    /** 匯出按鈕操作 */
    handleExport() {
      this.download('system/order/export', {
        ...this.queryParams
      }, `order_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>