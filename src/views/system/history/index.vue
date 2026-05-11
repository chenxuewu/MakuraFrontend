<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="邀請人ID" prop="inviteUserId">
        <el-input
          v-model="queryParams.inviteUserId"
          placeholder="請輸入邀請人ID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="被邀請人ID" prop="acceptUserId">
        <el-input
          v-model="queryParams.acceptUserId"
          placeholder="請輸入被邀請人ID"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="邀請碼" prop="inviteCode">
        <el-input
          v-model="queryParams.inviteCode"
          placeholder="請輸入邀請碼"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="0：失效，1：有效" prop="inviteState">
        <el-input
          v-model="queryParams.inviteState"
          placeholder="請輸入0：失效，1：有效"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="邀請時間" prop="inviteTime">
        <el-date-picker clearable
          v-model="queryParams.inviteTime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="請選擇邀請時間">
        </el-date-picker>
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
          v-hasPermi="['system:history:add']"
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
          v-hasPermi="['system:history:edit']"
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
          v-hasPermi="['system:history:remove']"
        >刪除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:history:export']"
        >匯出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="historyList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="邀請ID" align="center" prop="inviteId" />
      <el-table-column label="邀請人ID" align="center" prop="inviteUserId" />
      <el-table-column label="被邀請人ID" align="center" prop="acceptUserId" />
      <el-table-column label="邀請碼" align="center" prop="inviteCode" />
      <el-table-column label="0：失效，1：有效" align="center" prop="inviteState" />
      <el-table-column label="邀請時間" align="center" prop="inviteTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.inviteTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:history:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:history:remove']"
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

    <!-- 新增或修改邀請記錄對話方塊 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="邀請人ID" prop="inviteUserId">
          <el-input v-model="form.inviteUserId" placeholder="請輸入邀請人ID" />
        </el-form-item>
        <el-form-item label="被邀請人ID" prop="acceptUserId">
          <el-input v-model="form.acceptUserId" placeholder="請輸入被邀請人ID" />
        </el-form-item>
        <el-form-item label="邀請碼" prop="inviteCode">
          <el-input v-model="form.inviteCode" placeholder="請輸入邀請碼" />
        </el-form-item>
        <el-form-item label="0：失效，1：有效" prop="inviteState">
          <el-input v-model="form.inviteState" placeholder="請輸入0：失效，1：有效" />
        </el-form-item>
        <el-form-item label="邀請時間" prop="inviteTime">
          <el-date-picker clearable
            v-model="form.inviteTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="請選擇邀請時間">
          </el-date-picker>
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
import { listHistory, getHistory, delHistory, addHistory, updateHistory } from "@/api/system/history";

export default {
  name: "History",
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
      // 邀請記錄表格資料
      historyList: [],
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      open: false,
      // 查詢引數
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        inviteUserId: null,
        acceptUserId: null,
        inviteCode: null,
        inviteState: null,
        inviteTime: null
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
    /** 查詢邀請記錄列表 */
    getList() {
      this.loading = true;
      listHistory(this.queryParams).then(response => {
        this.historyList = response.rows;
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
        inviteId: null,
        inviteUserId: null,
        acceptUserId: null,
        inviteCode: null,
        inviteState: null,
        inviteTime: null
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
      this.ids = selection.map(item => item.inviteId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按鈕操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "新增邀請記錄";
    },
    /** 修改按鈕操作 */
    handleUpdate(row) {
      this.reset();
      const inviteId = row.inviteId || this.ids
      getHistory(inviteId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改邀請記錄";
      });
    },
    /** 提交按鈕 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.inviteId != null) {
            updateHistory(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addHistory(this.form).then(response => {
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
      const inviteIds = row.inviteId || this.ids;
      this.$modal.confirm('是否確認刪除邀請記錄編號為"' + inviteIds + '"的資料項？').then(function() {
        return delHistory(inviteIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("刪除成功");
      }).catch(() => {});
    },
    /** 匯出按鈕操作 */
    handleExport() {
      this.download('system/history/export', {
        ...this.queryParams
      }, `history_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>