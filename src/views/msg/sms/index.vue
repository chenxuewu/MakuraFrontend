<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="訂單編號" prop="orderProcedureSn">
        <el-input
          v-model="queryParams.orderProcedureSn"
          placeholder="請輸入編號"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="接收號碼" prop="phoneNumber">
        <el-input
          v-model="queryParams.phoneNumber"
          placeholder="請輸入接收號碼"
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
          <el-option label="簡訊未開啟 " value="2" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜尋</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
<!--      <el-col :span="1.5">-->
<!--        <el-button-->
<!--          type="primary"-->
<!--          plain-->
<!--          icon="el-icon-plus"-->
<!--          size="mini"-->
<!--          @click="handleAdd"-->
<!--          v-hasPermi="['server:record:add']"-->
<!--        >新增</el-button>-->
<!--      </el-col>-->
<!--      <el-col :span="1.5">-->
<!--        <el-button-->
<!--          type="success"-->
<!--          plain-->
<!--          icon="el-icon-edit"-->
<!--          size="mini"-->
<!--          :disabled="single"-->
<!--          @click="handleUpdate"-->
<!--          v-hasPermi="['server:record:edit']"-->
<!--        >修改</el-button>-->
<!--      </el-col>-->
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
      <el-table-column label="ID" align="center" width="180" prop="id" />
      <el-table-column label="訂單編號" align="center" prop="orderProcedureSn" width="150"/>
      <el-table-column label="型別" align="center" width="100">
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
      <el-table-column label="號碼" align="center" prop="phoneNumber"  width="120"/>
<!--      <el-table-column label="內容" align="center" prop="content" />-->
      <el-table-column label="內容" align="left" prop="content" header-align="center">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" :content="scope.row.content" placement="top">
            <div class="multi-line-ellipsis">
              {{ scope.row.content }}
            </div>
          </el-tooltip>
        </template>
      </el-table-column>

      <el-table-column label="狀態" align="center" width="100">
        <template slot-scope="scope">
          <span>
            {{
              scope.row.sendStatus === 0
                ? '失敗'
                : scope.row.sendStatus === 1
                  ? '成功'
                  : scope.row.sendStatus === 2
                    ? '簡訊未開啟'
                    : scope.row.sendStatus === 3
                    ? '数量已超过上限'
                      : '未知'
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="錯誤碼" align="center" prop="errorCode" width="100"/>
      <el-table-column label="費用" align="center" prop="sendFee" width="100" />
      <el-table-column label="訊息ID" align="center" prop="providerMsgId" width="100" />
      <el-table-column label="回撥狀態" align="center" width="100">
        <template slot-scope="scope">
          <span>
            {{
              scope.row.callbackStatus === 0 ? '未收到'
                : scope.row.callbackStatus === 1 ? '已收到'
                  : scope.row.callbackStatus === 2 ? '未傳送'
                    : '未知'
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="備註" align="center" prop="remark"  width="100"/>
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
      <el-form ref="form" :model="smsForm" label-width="120px">
        <el-form-item label="收件人號碼" prop="phone" :rules="[{ required: true, message: '請輸入號碼', trigger: 'blur' }]">
          <el-input
            type="textarea"
            v-model="smsForm.phone"
            placeholder="請輸入收件人號碼（必須加上區號，如臺灣886）"
            rows="2"
          />
        </el-form-item>

        <el-form-item label="簡訊內容" prop="content" :rules="[{ required: true, message: '請輸入簡訊內容', trigger: 'blur' }]">
          <el-input
            type="textarea"
            v-model="smsForm.content"
            placeholder="請輸入簡訊內容（不要含有測試等字眼）"
            rows="4"
          />
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitSms">傳送</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {listRecord, getRecord, delRecord, addRecord, updateRecord, sendSingleSms} from "@/api/msg/sms.js";
import {rejectedOrder} from "@/api/order/order";

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
      // 簡訊傳送記錄表格資料
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
        sendType: null,
        phoneNumber: null,
        content: null,
        sendStatus: null,
        errorCode: null,
        sendFee: null,
        providerMsgId: null,
        callbackStatus: null,
        rspContent: null,
      },
      // 表單引數
      form: {},
      // 表單校驗
      rules: {
        sendType: [
          { required: true, message: "傳送型別：1-下單通知 2-發貨通知 3-收貨通知 4-營銷通知不能為空", trigger: "change" }
        ],
        phoneNumber: [
          { required: true, message: "接收號碼不能為空", trigger: "blur" }
        ],
        content: [
          { required: true, message: "傳送內容不能為空", trigger: "blur" }
        ],
        sendStatus: [
          { required: true, message: "傳送狀態：0-失敗 1-成功不能為空", trigger: "change" }
        ],
        callbackStatus: [
          { required: true, message: "回撥狀態：0-未收到 1-已收到不能為空", trigger: "change" }
        ],
      },
      isAdmin: this.$store.getters.roles.includes("admin") ? true : false,
      // 簡訊測試對話方塊
      dialogVisible: false,
      smsForm: {
        phone: '',
        content: ''
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查詢簡訊傳送記錄列表 */
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
        sendType: null,
        phoneNumber: null,
        content: null,
        sendStatus: null,
        errorCode: null,
        sendFee: null,
        providerMsgId: null,
        callbackStatus: null,
        rspContent: null,
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
      this.title = "新增簡訊傳送記錄";
    },
    /** 修改按鈕操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getRecord(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改簡訊傳送記錄";
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
      this.$modal.confirm('是否確認刪除簡訊傳送記錄編號為"' + ids + '"的資料項？').then(function() {
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
    /**
     * 測試簡訊傳送
     */
    // testSendSms() {
    //   this.$alert(
    //     `<div>
    //                 <el-input
    //                   type="textarea"
    //                   placeholder="接受簡訊號碼（需要加上區號，臺灣886）"
    //                   v-model="smsDialog.phone"
    //                   rows="2"
    //                 ></el-input>
    //                 <el-input
    //                   type="textarea"
    //                   placeholder="請輸入簡訊內容"
    //                   v-model="smsDialog.content"
    //                   style="margin-top: 10px;"
    //                   rows="4"
    //                 ></el-input>
    //               </div>`,
    //     '測試簡訊傳送',
    //     {
    //       dangerouslyUseHTMLString: true,
    //       showCancelButton: true,
    //       confirmButtonText: '傳送',
    //       cancelButtonText: '取消',
    //       beforeClose: (action, instance, done) => {
    //         if (action === 'confirm') {
    //           const { phone, content } = this.smsDialog;
    //           if (!phone || !content) {
    //             this.$message.warning('請填寫完整的收件人號碼和簡訊內容');
    //             return;
    //           }
    //           sendSingleSms(phone, content)
    //             .then(() => {
    //               this.handleQuery();
    //               this.$message.success('測試簡訊傳送成功');
    //               done(); // 關閉彈窗
    //             })
    //             .catch(err => {
    //               console.error('簡訊傳送失敗：', err);
    //               this.$message.error('傳送失敗，請檢查日誌');
    //             });
    //         } else {
    //           done(); // 取消直接關閉
    //         }
    //       }
    //     }
    //   );
    // }
    resetDialog() {
      this.smsForm.phone = '';
      this.smsForm.content = '';
    },
    submitSms() {
      if (!this.smsForm.phone.trim() || !this.smsForm.content.trim()) {
        this.$message.warning('請填寫完整的收件人號碼和簡訊內容');
        return;
      }

      const phone = this.smsForm.phone.trim();

      if (!this.isValidTaiwanPhone(phone)) {
        this.$message.warning('請輸入正確的臺灣手機號碼，且需包含區號886');
        return;
      }

      sendSingleSms(this.smsForm.phone, this.smsForm.content)
        .then(() => {
          this.$message.success('測試簡訊傳送成功');
          this.dialogVisible = false;
          this.resetDialog();
          this.handleQuery && this.handleQuery();
        })
        .catch(err => {
          console.error('簡訊傳送失敗:', err);
          this.$message.error('傳送失敗，請檢查日誌');
        });
    },
    isValidTaiwanPhone(phone) {
      // 去除空格、橫槓等非數字字元
      const cleaned = phone.replace(/[\s\-]/g, '');

      // 必須包含區號 886 (帶不帶+都可以)
      const hasCountryCode = /^(\+?886)/.test(cleaned);
      if (!hasCountryCode) return false;

      // 去掉區號後的號碼部分
      const withoutCode = cleaned.replace(/^(\+?886)/, '');

      // 號碼部分必須是9位數字且第一位不是0
      // 因為臺灣手機去掉區號一般不帶前導0
      return /^[1-9]\d{8}$/.test(withoutCode);
    }
}
};
</script>



<style scoped lang="scss">

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
