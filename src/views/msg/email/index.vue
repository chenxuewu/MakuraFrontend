<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="訂單編號" prop="orderProcedureSn">
        <el-input
          v-model="queryParams.orderProcedureSn"
          placeholder="請輸入訂單編號"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="郵箱地址" prop="emailAddress">
        <el-input
          v-model="queryParams.emailAddress"
          placeholder="請輸入接收郵箱地址"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="郵件主題" prop="subject">
        <el-input
          v-model="queryParams.subject"
          placeholder="請輸入郵件主題"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="型別" prop="sendType">
        <el-select v-model="queryParams.sendType" placeholder="請選擇型別" clearable>
          <el-option label="下單通知" value="1" />
          <el-option label="發貨通知" value="2" />
          <el-option label="取貨通知" value="3" />
          <el-option label="營銷通知" value="4" />
        </el-select>
      </el-form-item>
      <el-form-item label="狀態" prop="sendStatus">
        <el-select v-model="queryParams.sendStatus" placeholder="請選擇狀態" clearable>
          <el-option label="失敗" value="0" />
          <el-option label="成功" value="1" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜尋</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
      <el-table-column label="備註" align="center" prop="remark"  width="100"/>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['server:record:export']"
        >匯出</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="info"
          plain
          icon="el-icon-message"
          size="mini"
          @click="dialogVisible = true"
          v-if = isAdmin
        >測試</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>
    <el-table v-loading="loading" :data="recordList" @selection-change="handleSelectionChange" border>
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="ID" align="center" prop="id"  width="180" />
      <el-table-column label="訂單編號" align="center" prop="orderProcedureSn"  width="150"/>
      <el-table-column label="型別" align="center" prop="sendType"  width="100">
        <template slot-scope="scope">
          <span>
            {{
              scope.row.sendType === 1
                ? '下單通知'
                : scope.row.sendType === 2
                  ? '發貨通知'
                  : scope.row.sendType === 3
                    ? '取貨通知': scope.row.sendType === 4
                      ? '營銷通知'
                      : '未知'
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="郵箱地址" align="center" prop="emailAddress"  width="180"/>
      <el-table-column label="主題" align="left" prop="subject"  width="230"  header-align="center"/>
      <el-table-column label="內容" align="left" prop="content" header-align="center">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" :content="scope.row.content" placement="top">
            <div class="multi-line-ellipsis">
              {{ scope.row.content }}
            </div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="狀態" align="center" prop="sendStatus" width="100">
        <template slot-scope="scope">
          <span>
            {{
              scope.row.sendStatus === 0
                ? '失敗'
                : scope.row.sendStatus === 1
                  ? '成功'
                  : scope.row.sendStatus === 2
                    ? '未開啟'
                    : scope.row.sendStatus === 3
                      ? '数量已超过上限'
                      : '未知'
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="备注"  header-align="center" align="left" prop="remark"  width="100"/>
      <el-table-column label="傳送時間" align="center" prop="createTime"  width="100"/>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />


    <el-dialog
      title="測試簡訊傳送"
      :visible.sync="dialogVisible"
      width="500px"
      @close="resetDialog"
    >
      <el-form ref="form" :model="emailForm" label-width="120px">
        <el-form-item label="郵箱地址" prop="emailAddress" :rules="[{ required: true, message: '請輸入收件人郵箱地址', trigger: 'blur' }]">
          <el-input
            type="textarea"
            v-model="emailForm.emailAddress"
            placeholder="請輸入收件人郵箱地址"
            rows="2"
          />
        </el-form-item>
        <el-form-item label="標題" prop="subject" :rules="[{ required: true, message: '請輸入郵件標題', trigger: 'blur' }]">
          <el-input
            type="textarea"
            v-model="emailForm.subject"
            placeholder="請輸入郵件標題"
            rows="2"
          />
        </el-form-item>

        <el-form-item label="郵件內容" prop="content" :rules="[{ required: true, message: '請輸入郵件內容', trigger: 'blur' }]">
          <el-input
            type="textarea"
            v-model="emailForm.content"
            placeholder="請輸入郵件內容（不要含有測試等字眼）"
            rows="4"
          />
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitEmail">傳送</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { listRecord, getRecord, delRecord, addRecord, updateRecord,sendEmail } from "@/api/msg/email.js";

export default {
  name: "Record",
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
      // 郵件傳送記錄表格資料
      recordList: [],
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      open: false,
      // 查詢引數
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        orderId: null,
        orderProcedureId: null,
        orderProcedureSn: null,
        sendType: null,
        emailAddress: null,
        subject: null,
        content: null,
        sendStatus: null,
      },
      // 表單引數
      form: {},
      // 表單校驗
      rules: {
        sendType: [
          { required: true, message: "傳送型別：1-下單通知 2-發貨通知 3-收貨通知 4-營銷通知不能為空", trigger: "change" }
        ],
        emailAddress: [
          { required: true, message: "接收郵箱地址不能為空", trigger: "blur" }
        ],
        subject: [
          { required: true, message: "郵件主題不能為空", trigger: "blur" }
        ],
        content: [
          { required: true, message: "郵件內容不能為空", trigger: "blur" }
        ],
      },
      isAdmin: this.$store.getters.roles.includes("admin") ? true : false,
      // 郵件傳送表單引數
      dialogVisible: false,
      emailForm: {
        emailAddress: '',
        subject: '',
        content: ''
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查詢郵件傳送記錄列表 */
    getList() {
      this.loading = true;
      listRecord(this.queryParams).then(response => {
        this.recordList = response.rows;
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
        orderProcedureId: null,
        orderProcedureSn: null,
        sendType: null,
        emailAddress: null,
        subject: null,
        content: null,
        sendStatus: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        remark: null,
        delFlag: null
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
      this.title = "新增郵件傳送記錄";
    },
    /** 修改按鈕操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getRecord(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改郵件傳送記錄";
      });
    },
    /** 提交按鈕 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateRecord(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addRecord(this.form).then(response => {
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
      this.$modal.confirm('是否確認刪除郵件傳送記錄編號為"' + ids + '"的資料項？').then(function() {
        return delRecord(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("刪除成功");
      }).catch(() => {});
    },
    /** 匯出按鈕操作 */
    handleExport() {
      this.download('server/record/export', {
        ...this.queryParams
      }, `record_${new Date().getTime()}.xlsx`)
    },
    resetDialog() {
      this.emailForm.emailAddress = '';
      this.emailForm.content = '';
      this.emailForm.subject = '';
    },
    submitEmail() {
      if (!this.emailForm.emailAddress.trim() || !this.emailForm.content.trim()) {
        this.$message.warning('請填寫完整的郵箱地址和郵箱內容');
        return;
      }

      const emailAddress = this.emailForm.emailAddress.trim();

      if (!this.isValidTaiwanEmail(emailAddress)) {
        this.$message.warning('請輸入正確的郵箱地址');
        return;
      }

      sendEmail(this.emailForm.emailAddress,this.emailForm.subject, this.emailForm.content)
        .then(() => {
          this.$message.success('測試郵箱傳送成功');
          this.dialogVisible = false;
          this.resetDialog();
          this.handleQuery && this.handleQuery();
        })
        .catch(err => {
          console.error('郵箱傳送失敗:', err);
          this.$message.error('傳送失敗，請檢查日誌');
        });
    },
    isValidTaiwanEmail(email) {
      const allowedDomains = [
        '@gmail.com',
        '@yahoo.com.tw',
        '@kimo.com',
        '@hotmail.com',
        '@outlook.com',
        '@qq.com',
        '@163.com',
        '@yandex.com',
        '@live'
      ];
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) return false;
      const domain = email.slice(email.indexOf('@'));
      return allowedDomains.some(d => domain === d || domain.endsWith('.' + d.slice(1)));
    }
  }
};
</script>

<style scoped lang="css">
  .multi-line-ellipsis {
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 顯示最多2行 */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    line-height: 25px;
    max-height: 70px;
  }
</style>
