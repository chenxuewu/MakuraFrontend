<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="120px">
      <el-form-item label="按鈕來源" prop="buttonSource">
        <el-input
          v-model="queryParams.buttonSource"
          placeholder="請輸入按鈕來源"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="登入人" prop="userName">
        <el-input
          v-model="queryParams.userName"
          placeholder="請輸入登入人名稱"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="事件發生時間" prop="eventTime">
        <el-date-picker
          v-model="dateRange"
          type="datetimerange"
          range-separator="至"
          start-placeholder="開始日期時間"
          end-placeholder="結束日期時間"
          value-format="yyyy-MM-dd HH:mm:ss"
          @change="handleDateRangeChange"
        ></el-date-picker>
      </el-form-item>
     
      <el-form-item label="頁面URL" prop="pageUrl">
        <el-input
          v-model="queryParams.pageUrl"
          placeholder="請輸入頁面URL"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="作業系統" prop="os">
        <el-input
          v-model="queryParams.os"
          placeholder="請輸入作業系統"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="瀏覽器型別" prop="browser">
        <el-input
          v-model="queryParams.browser"
          placeholder="請輸入瀏覽器型別"
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
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['monitor:eventlog:remove']"
        >刪除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          @click="handleClean"
          v-hasPermi="['monitor:eventlog:remove']"
        >清空</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['monitor:eventlog:export']"
        >匯出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="logsList" @selection-change="handleSelectionChange" @sort-change="sortChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="日誌編號" align="center" prop="id" />
      <el-table-column label="事件型別" align="center" prop="eventType" />
      <el-table-column label="按鈕型別" align="center" prop="buttonType" />
      <el-table-column label="按鈕來源" align="center" prop="buttonSource" />
      <el-table-column label="登入人名稱" align="center" prop="userName" />
      <el-table-column label="事件發生時間" align="center" prop="eventTime" width="180" sortable="custom">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.eventTime, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="頁面URL" align="center" prop="pageUrl" />
      <el-table-column label="作業系統" align="center" prop="os" />
      <el-table-column label="瀏覽器型別" align="center" prop="browser" />
      <el-table-column label="額外資料" align="center" prop="extraData" />
      <el-table-column label="建立時間" align="center" prop="createdAt" width="180" sortable="custom">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createdAt, '{y}-{m}-{d} {h}:{i}:{s}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['monitor:eventlog:remove']"
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

  </div>
</template>

<script>
import { listLogs, getLogs, delLogs, cleanEventlog } from "@/api/monitor/eventlog";

export default {
  name: "Logs",
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
      // 前端埋點日誌表格資料
      logsList: [],
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      open: false,
      // 日期範圍
      dateRange: [],
      // 所有事件型別
      allEventTypes: ['click', 'view', 'submit', 'cancel', 'other'],
      // 所有按鈕型別
      allButtonTypes: ['submit', 'cancel', 'confirm', 'close', 'save'],
      // 所有按鈕來源
      allButtonSources: ['homepage', 'user_profile', 'settings', 'product_detail', 'checkout'],
      // 查詢引數
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        eventType: null,
        buttonType: null,
        buttonSource: null,
        userName: null,
        eventTime: null,
        eventTimeBegin: null,
        eventTimeEnd: null,
        pageUrl: null,
        os: null,
        browser: null,
        extraData: null,
        createdAt: null,
        orderByColumn: null,
        isAsc: null
      },
      // 表單引數
      form: {},
      // 表單校驗
      rules: {
        eventType: [
          { required: true, message: "事件型別，例如 click、view不能為空", trigger: "change" }
        ],
        eventTime: [
          { required: true, message: "事件發生時間不能為空", trigger: "blur" }
        ],
        createdAt: [
          { required: true, message: "$comment不能為空", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查詢前端埋點日誌列表 */
    getList() {
      this.loading = true;
      listLogs(this.queryParams).then(response => {
        this.logsList = response.rows;
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
        eventType: null,
        buttonType: null,
        buttonSource: null,
        userName: null,
        eventTime: null,
        pageUrl: null,
        os: null,
        browser: null,
        extraData: null,
        createdAt: null
      };
      this.resetForm("form");
    },
    /** 搜尋按鈕操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.$logEvent('檢視列表', '點選按鈕', '按鈕', '/product/list', null);
      this.getList();
    },
    /** 重置按鈕操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.dateRange = [];
      this.handleQuery();
    },
    
    /** 處理日期範圍變化 */
    handleDateRangeChange(dateRange) {
      if (dateRange) {
        this.queryParams.eventTimeBegin = dateRange[0];
        this.queryParams.eventTimeEnd = dateRange[1];
      } else {
        this.queryParams.eventTimeBegin = null;
        this.queryParams.eventTimeEnd = null;
      }
    },
    /** 排序觸發事件 */
    sortChange(column) {
      if (column.prop && column.order) {
        this.queryParams.orderByColumn = column.prop;
        this.queryParams.isAsc = column.order === 'ascending' ? 'asc' : 'desc';
      } else {
        this.queryParams.orderByColumn = null;
        this.queryParams.isAsc = null;
      }
      this.getList();
    },
    // 多選框選中資料
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },

    /** 刪除按鈕操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$modal.confirm('是否確認刪除前端埋點日誌資料？').then(function() {
        return delLogs(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("刪除成功");
      }).catch(() => {});
    },
    handleClean() {
      this.$modal.confirm('是否確認清空所有點選日誌資料項？').then(function() {
        return cleanEventlog();
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("清空成功");
      }).catch(() => {});
    },
    /** 匯出按鈕操作 */
    handleExport() {
      this.download('monitor/eventLogs/export', {
        ...this.queryParams
      }, `logs_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
