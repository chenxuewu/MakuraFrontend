<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch">
      <el-form-item label="社團名稱" prop="deptName">
        <el-input
          v-model="queryParams.deptName"
          placeholder="請輸入社團名稱"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="狀態" prop="status">
        <el-select v-model="queryParams.status" placeholder="社團狀態" clearable>
          <el-option
            v-for="dict in dict.type.sys_normal_disable"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜尋</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="info"
          plain
          icon="el-icon-sort"
          size="mini"
          @click="toggleExpandAll"
        >展開/摺疊</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table
      v-if="refreshTable"
      v-loading="loading"
      :data="deptList"
      row-key="deptId"
      :default-expand-all="isExpandAll"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="deptName" label="社團名稱" width="260"></el-table-column>
      <el-table-column prop="orderNum" label="排序" width="200"></el-table-column>
      <el-table-column prop="status" label="狀態" width="100">
        <!-- <template slot-scope="scope">
          <dict-tag :options="dict.type.sys_normal_disable" :value="scope.row.status"/>
        </template> -->

        <template slot-scope="scope">
                    <el-switch v-model="scope.row.status"
                      active-value="0" inactive-value="1"
                      @change="changeStatus(scope.row)">
                    </el-switch>
                  </template>

      </el-table-column>
      <el-table-column label="建立時間" align="center" prop="createTime" width="200">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:dept:edit']"
          >修改</el-button>
          <!-- 暫時不開放新增功能,使用者指定為團長時新增-->
          <el-button v-if="false"
            size="mini"
            type="text"
            icon="el-icon-plus"
            @click="handleAdd(scope.row)"
            v-hasPermi="['system:dept:add']"
          >新增</el-button>
          <el-button
            v-if="scope.row.parentId != 0"
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:dept:remove']"
          >刪除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增或修改社團對話方塊 -->
    <el-dialog :title="title" :visible.sync="open" width="600px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-row>
          <el-col :span="24" v-if="form.parentId !== 0">
            <!-- <el-form-item label="上級社團" prop="parentId">
              <treeselect v-model="form.parentId" :options="deptOptions" :normalizer="normalizer" placeholder="選擇上級社團" />
            </el-form-item> -->
            <el-form-item label="上級社團id" prop="parentId" style="display: none;">
              <el-input v-model="form.parentId" placeholder="上級社團id" />
            </el-form-item>
            <!-- 不可輸入屬性 -->
            <el-form-item label="上級社團" prop="parentName">
              <el-input v-model="form.parentName" placeholder="上級社團"  :disabled="true"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="社團名稱" prop="deptName">
              <el-input v-model="form.deptName" placeholder="請輸入社團名稱"  />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="顯示排序" prop="orderNum">
              <el-input-number v-model="form.orderNum" controls-position="right" :min="0" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="負責人" prop="leader">
              <el-input v-model="form.leader" placeholder="請輸入負責人" :disabled="true" maxlength="20" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="聯絡電話" prop="phone">
              <el-input v-model="form.phone" placeholder="請輸入聯絡電話" maxlength="10" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="郵箱" prop="email">
              <el-input v-model="form.email" placeholder="請輸入郵箱" maxlength="50" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="社團狀態" v-if="form.deptId == undefined">
              <el-radio-group v-model="form.status">
                <el-radio
                  v-for="dict in dict.type.sys_normal_disable"
                  :key="dict.value"
                  :label="dict.value"
                >{{dict.label}}</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">確 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { changeStatus,listDept, getDept, delDept, addDept, updateDept, listDeptExcludeChild } from "@/api/system/dept";
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  name: "Dept",
  dicts: ['sys_normal_disable'],
  components: { Treeselect },
  data() {
    return {
      // 遮罩層
      loading: true,
      // 顯示搜尋條件
      showSearch: true,
      // 表格樹資料
      deptList: [],
      // 社團樹選項
      deptOptions: [],
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      open: false,
      // 是否展開，預設全部展開
      isExpandAll: true,
      // 重新渲染表格狀態
      refreshTable: true,
      // 查詢引數
      queryParams: {
        deptName: undefined,
        status: undefined
      },
      // 表單引數
      form: {},
      // 表單校驗
      rules: {
        parentId: [
          { required: true, message: "上級社團不能為空", trigger: "blur" }
        ],
        deptName: [
          { required: true, message: "社團名稱不能為空", trigger: "blur" }
        ],
        orderNum: [
          { required: true, message: "顯示排序不能為空", trigger: "blur" }
        ],
        email: [
          {
            type: "email",
            message: "請輸入正確的郵箱地址",
            trigger: ["blur", "change"]
          }
        ],
        phone: [
          {
            pattern: /^\d{6,15}$/,
            //pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
            message: "請輸入正確的手機號碼",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    changeStatus(row) {
      this.$modal.confirm(row.status == '0' ? '是否啟用':'停用部門會影響下級部門,是否確定').then(function() {
        return changeStatus(row.deptId);
      }).then(() => {
        this.$modal.msgSuccess("修改成功");
      }).catch(() => {
        row.status = row.status === "0" ? "1" : "0";
      });
    },

    /** 查詢社團列表 */
    getList() {
      this.loading = true;
      listDept(this.queryParams).then(response => {
        this.deptList = this.handleTree(response.data, "deptId");
        this.loading = false;
      });
    },
    /** 轉換社團資料結構 */
    normalizer(node) {
      if (node.children && !node.children.length) {
        delete node.children;
      }
      return {
        id: node.deptId,
        label: node.deptName,
        children: node.children
      };
    },
    // 取消按鈕
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表單重置
    reset() {
      this.form = {
        deptId: undefined,
        parentId: undefined,
        parentName: undefined,
        deptName: undefined,
        orderNum: undefined,
        leader: undefined,
        phone: undefined,
        email: undefined,
        status: "0"
      };
      this.resetForm("form");
    },
    /** 搜尋按鈕操作 */
    handleQuery() {
      this.getList();
    },
    /** 重置按鈕操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    /** 新增按鈕操作 */
    handleAdd(row) {
      this.reset();
      if (row != undefined) {
        this.form.parentId = row.deptId;
        this.form.parentName = row.deptName;
      }
      this.open = true;
      this.title = "新增社團";
      // listDept().then(response => {
      //   this.deptOptions = this.handleTree(response.data, "deptId");
      // });
    },
    /** 展開/摺疊操作 */
    toggleExpandAll() {
      this.refreshTable = false;
      this.isExpandAll = !this.isExpandAll;
      this.$nextTick(() => {
        this.refreshTable = true;
      });
    },
    /** 修改按鈕操作 */
    handleUpdate(row) {
      this.reset();
      getDept(row.deptId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改社團";
        // listDeptExcludeChild(row.deptId).then(response => {
        //   this.deptOptions = this.handleTree(response.data, "deptId");
        //   if (this.deptOptions.length == 0) {
        //     const noResultsOptions = { deptId: this.form.parentId, deptName: this.form.parentName, children: [] };
        //     this.deptOptions.push(noResultsOptions);
        //   }
        // });
      });
    },
    /** 提交按鈕 */
    submitForm: function() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.deptId != undefined) {
            updateDept(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addDept(this.form).then(response => {
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
      this.$modal.confirm('是否確認刪除名稱為"' + row.deptName + '"的資料項？').then(function() {
        return delDept(row.deptId);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("刪除成功");
      }).catch(() => {});
    }
  }
};
</script>
