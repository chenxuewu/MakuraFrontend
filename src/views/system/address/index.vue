<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="120px">
      <el-form-item label="使用者ID" prop="userId" v-show="false">
        <el-input v-model="queryParams.userId" placeholder="請輸入使用者ID" clearable @keyup.enter.native="handleQuery" />
      </el-form-item>
      <el-form-item label="收件人姓名" prop="receivingName">
        <el-input v-model="queryParams.receivingName" placeholder="請輸入收件人姓名" clearable
                  @keyup.enter.native="handleQuery" />
      </el-form-item>
      <el-form-item label="聯絡電話" prop="receivingPhone">
        <el-input v-model="queryParams.receivingPhone" placeholder="請輸入聯絡電話" clearable
                  @keyup.enter.native="handleQuery" />
      </el-form-item>
      <el-form-item label="城市" prop="city">
        <el-input v-model="queryParams.city" placeholder="請輸入城市" clearable @keyup.enter.native="handleQuery" />
      </el-form-item>
      <el-form-item label="區" prop="area">
        <el-input v-model="queryParams.area" placeholder="請輸入區" clearable @keyup.enter.native="handleQuery" />
      </el-form-item>
      <el-form-item label="郵遞區號" prop="postalCode">
        <el-input v-model="queryParams.postalCode" placeholder="請輸入郵遞區號" clearable @keyup.enter.native="handleQuery" />
      </el-form-item>
      <el-form-item label="是否預設地址" prop="defaultAddress">
        <el-select v-model="queryParams.defaultAddress" placeholder="是否預設地址" clearable @keyup.enter.native="handleQuery">
          <el-option label="是" value="1" />
          <el-option label="否" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item label="郵箱" prop="email">
        <el-input v-model="queryParams.email" placeholder="請輸入郵箱" clearable @keyup.enter.native="handleQuery" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜尋</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button type="primary" plain icon="el-icon-plus" size="mini" @click="handleAdd"
                   v-hasPermi="['system:address:add']">新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="success" plain icon="el-icon-edit" size="mini" :disabled="single" @click="handleUpdate"
                   v-hasPermi="['system:address:edit']">修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="danger" plain icon="el-icon-delete" size="mini" :disabled="multiple" @click="handleDelete"
                   v-hasPermi="['system:address:remove']">刪除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button type="warning" plain icon="el-icon-download" size="mini" @click="handleExport"
                   v-hasPermi="['system:address:export']">匯出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="addressList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <!-- <el-table-column label="地址ID" align="center" prop="addressId" /> -->
      <!-- <el-table-column label="使用者ID" align="center" prop="userId" /> -->
      <el-table-column label="收件人姓名" align="center" prop="receivingName" />
      <el-table-column label="聯絡電話" align="center" prop="receivingPhone" />
      <el-table-column label="城市" align="center" prop="city" />
      <el-table-column label="區" align="center" prop="area" />
      <el-table-column label="詳細地址" align="center" prop="detailAddress" />
      <el-table-column label="郵遞區號" align="center" prop="postalCode" />
      <el-table-column label="郵箱" align="center" prop="email" />
      <el-table-column label="預設地址" align="center" prop="defaultAddress">
        <template slot-scope="scope">
          {{ enumMapping[scope.row.defaultAddress] }}
        </template>
      </el-table-column>
      <el-table-column label="備註" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button size="mini" type="text" icon="el-icon-edit" @click="handleUpdate(scope.row)"
                     v-hasPermi="['system:address:edit']">修改</el-button>
          <el-button size="mini" type="text" icon="el-icon-delete" @click="handleDelete(scope.row)"
                     v-hasPermi="['system:address:remove']">刪除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total > 0" :total="total" :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"
                @pagination="getList" />

    <!-- 新增或修改使用者收貨地址對話方塊 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="使用者ID" prop="userId" v-if="false">
          <el-input v-model="form.userId" placeholder="請輸入使用者ID" />
        </el-form-item>
        <!-- 原有表單項 -->
        <el-form-item label="取貨方式" prop="deliveryType">
          <el-radio-group v-model="form.deliveryType">
            <el-radio label="1">宅配</el-radio>
            <el-radio label="2">711</el-radio>
            <el-radio label="3">全家family</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="收件人姓名" prop="receivingName">
          <el-input v-model="form.receivingName" placeholder="請輸入收件人姓名" />
        </el-form-item>
        <el-form-item label="聯絡電話" prop="receivingPhone">
          <el-input v-model="form.receivingPhone" placeholder="請輸入聯絡電話" />
        </el-form-item>
        <el-form-item label="城市" prop="city" style="display: none;">
          <el-input v-model="form.city" placeholder="請輸入城市" />
        </el-form-item>
        <el-form-item label="區" prop="area" style="display: none;">
          <el-input v-model="form.area" placeholder="請輸入區" />
        </el-form-item>
        <el-form-item label="選擇市區" prop="area">
          <!-- 選擇類目 -->
          <CascaderPanel @selectedValue="addressIds = $event" @selectPath="addressPath = $event"
                         :options="administrativeAreaTree" :props="props" :cascaderLabel="cascaderLabel" ref="cascaderPanel">
          </CascaderPanel>
        </el-form-item>

        <!-- 街道選擇（僅711和全家family） -->
        <el-form-item label="街道" prop="streetName" v-if="form.deliveryType !== '1'">
          <el-select v-model="form.streetName" placeholder="請選擇街道" @change="handleStreetChange">
            <el-option
              v-for="street in streetList"
              :key="street"
              :label="street"
              :value="street">
            </el-option>
          </el-select>
        </el-form-item>

        <!-- 店鋪選擇（僅711和全家family） -->
        <el-form-item label="選擇店鋪" prop="storeName" v-if="form.deliveryType !== '1' && form.streetName">
          <el-select v-model="form.storeName" placeholder="請選擇店鋪" @change="handleStoreChange">
            <el-option
              v-for="store in storeList"
              :key="store.storeName"
              :label="store.storeName"
              :value="store.storeName"
              :disabled="store.storeAble === 'disable'">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="詳細地址" prop="detailAddress">
          <el-input
            v-model="form.detailAddress"
            type="textarea"
            :autosize="{ minRows: 1 }"
            placeholder="請輸入內容"
            :disabled="form.deliveryType !== '1'"
          />
        </el-form-item>
        <el-form-item label="郵遞區號" prop="postalCode">
          <el-input v-model="form.postalCode" placeholder="請輸入郵遞區號" />
        </el-form-item>
        <el-form-item label="郵箱" prop="email">
          <el-input v-model="form.email" placeholder="請輸入郵箱" maxlength="30" show-word-limit />
        </el-form-item>
        <el-form-item label="預設地址" prop="defaultAddress">
          <el-radio-group v-model="form.defaultAddress" placeholder="請選擇預設地址">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="刪除標誌" prop="delFlag" v-if="false">
          <el-input v-model="form.delFlag" placeholder="請輸入刪除標誌" />
        </el-form-item>
        <el-form-item label="備註" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="請輸入內容" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">確定</el-button>
        <el-button @click="cancel">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import CascaderPanel from "@c/CascaderPanel";
import { getStores, getStreets, getAdministrativeAreaByArea, getAdministrativeAreaTree, listAddress, getAddress, delAddress, addAddress, updateAddress } from "@/api/system/address";

export default {
  name: "Address",
  components: {
    CascaderPanel,
  },
  data() {
    return {
      streetList: [],
      storeList: [],
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
      active: 0,
      // 使用者收貨地址表格資料
      addressList: [],
      enumMapping: {
        '1': '是',
        '0': '否'
        // 其他列舉值對映...
      },
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      open: false,
      // 查詢引數
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userId: null,
        receivingName: null,
        receivingPhone: null,
        city: null,
        area: null,
        detailAddress: null,
        postalCode: null,
        defaultAddress: null,
        remark: null,
        email: null
      },
      // 表單引數
      form: {},
      administrativeAreaTree: [],
      address: [],
      props: {
        value: "id",
        label: "divisionName",
        children: "children",
      },
      cascaderLabel: "地址",
      addressIds: [],
      addressPath: null,
      // 表單校驗
      rules: {
        streetName: [
          { required: true, message: "請選擇街道", trigger: "change", validator: (rule, value, callback) => {
              if (this.form.deliveryType !== '1' && !value) {
                callback(new Error('請選擇街道'));
              } else {
                callback();
              }
            }}
        ],
        storeName: [
          { required: true, message: "請選擇店鋪", trigger: "change", validator: (rule, value, callback) => {
              if (this.form.deliveryType !== '1' && !value) {
                callback(new Error('請選擇店鋪'));
              } else {
                callback();
              }
            }}
        ],
        receivingName: [
          { required: true, message: "收件人姓名不能為空", trigger: "blur" }
        ],
        // city: [
        //   { required: true, message: "城市不能為空", trigger: "blur" }
        // ],
        // area: [
        //   { required: true, message: "區不能為空", trigger: "blur" }
        // ],
        detailAddress: [
          { required: true, message: "詳細地址不能為空", trigger: "blur" }
        ],
        defaultAddress: [
          { required: true, message: "預設地址必選", trigger: "change" }
        ],
        receivingPhone: [
          {
            required: true,
            pattern: /^\d{6,15}$/,
            // pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
            message: "請輸入正確的手機號碼",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: false,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: '請輸入正確的郵箱格式',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  watch: {
    // 根據名稱篩選樹
    addressIds(val) {
      // 獲取val最後一個元素，即區的id，並發起請求獲取地址編碼
      if (val.length > 0) {
        this.streetList = [];
        this.storeList = [];
        this.form.streetName = '';
        this.form.storeName = '';
        val = val[val.length - 1];
        getAdministrativeAreaByArea(val).then(response => {
          this.form.postalCode = response.data.zipcode;
        });
      }
      // 只有711和全家family需要獲取街道
      if (this.form.deliveryType !== '1') {
        // 分割 addressPath 獲取市和區
        const pathParts = this.addressPath.split(' > ');
        this.form.city = pathParts[0]; // 第一個是市
        this.form.area = pathParts[1]; // 第二個是區
        this.getStreets(this.form.city, this.form.area);
      }
    },
    'form.deliveryType': function (newVal) {
      this.streetList = [];
      this.storeList = [];
      this.form.streetName = '';
      this.form.storeName = '';
      console.log('newVal:', newVal);
      if (newVal !== '1' && this.addressIds.length > 0) {
        const pathParts = this.addressPath.split(' > ');
        this.form.city = pathParts[0];
        this.form.area = pathParts[1];
        this.form.detailAddress = '';
        this.getStreets(this.form.city, this.form.area);
      }
    },
    'form.streetName': function (newVal) {
      this.form.storeName = '';
      this.form.detailAddress = '';
      if (newVal && this.form.deliveryType !== '1') {
        // 使用市、區、街道查詢店鋪
        this.getStores(this.form.city, this.form.area, newVal);
      } else {
        this.storeList = [];
        this.form.storeName = '';
        this.form.detailAddress = '';
      }
    }
  },
  created() {
    this.getList();
  },
  methods: {
    handleStoreChange(storeName) {
      // 查詢選中的店鋪物件
      // 假設店鋪物件中包含詳細位址列位 detailAddress
      const store = this.storeList.find(store => store.storeName === storeName);
      if (store) {
        // 設定店鋪編號
        this.form.storeNo = store.storeNo;
        this.form.detailAddress = store.storeNo + store.storeName + '門市' + store.storeAddr;
      }
    },
    async getStreets(city, area) {
      try {
        const response = await getStreets({ city, area, deliveryType: this.form.deliveryType });
        this.streetList = response.rows;
      } catch (error) {
        console.error('獲取街道失敗', error);
      }
    },
    async getStores(city, area, streetName) {
      try {
        const response = await getStores({
          city,
          area,
          streetName,
          deliveryType: this.form.deliveryType
        });
        this.storeList = response.rows;
      } catch (error) {
        console.error('獲取店鋪失敗', error);
      }
    },
    handleStreetChange(streetName) {
      if (this.form.deliveryType !== '1') {
        this.getStores(this.form.city, this.form.area, streetName);
      }
    },
    getDeliveryTypeText(type) {
      const types = {
        '1': '宅配',
        '2': '711',
        '3': '全家family'
      };
      return types[type] || '未知';
    },
    /** 查詢公告列表 */
    getListNotice() {
      listNotice(this.queryNoticeParams).then(response => {
        this.noticeList = response.rows;
        this.noticeTotal = response.total;
      });
    },
    async getAdministrativeAreaTree(flag) {
      await getAdministrativeAreaTree().then(response => {
        this.administrativeAreaTree = response.data;
        // 刪除空的children
         if (flag) {
          this.$refs['cascaderPanel'].reset();
         }
        this.$refs['cascaderPanel'].processEmptyChildren(this.administrativeAreaTree, "children");
      });
    },
    async getAdministrativeAreaTree(flag) {
      await getAdministrativeAreaTree().then(response => {
        this.administrativeAreaTree = response.data;
        // 刪除空的children
         if (flag) {
          this.$refs['cascaderPanel'].reset();
         }
        this.$refs['cascaderPanel'].processEmptyChildren(this.administrativeAreaTree, "children");
      });
    },
    /** 查詢使用者收貨地址列表 */
    getList() {
      this.loading = true;
      listAddress(this.queryParams).then(response => {
        this.addressList = response.rows;
        this.total = Number(response.total);
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
        deliveryType: 1,
        streetName: '',
        storeName: '',
        storeNo: '',
        addressId: null,
        userId: null,
        receivingName: null,
        receivingPhone: null,
        city: null,
        cityId: null,
        areaId: null,
        area: null,
        detailAddress: null,
        postalCode: null,
        defaultAddress: null,
        delFlag: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        remark: null,
        email: null
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
      this.ids = selection.map(item => item.addressId)
      this.single = selection.length !== 1
      this.multiple = !selection.length
    },
    /** 新增按鈕操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.getAdministrativeAreaTree(true);
      this.title = "新增使用者收貨地址";
    },
    /** 修改按鈕操作 */
    async handleUpdate(row) {
      this.reset(); // 重置表單
      const addressId = row.addressId || this.ids;

      // 獲取地址詳情
      await getAddress(addressId).then(response => {
        console.log('getAddress response:', response);
        this.form = { ...response.data }; // 深複製以防止直接引用
        console.log('form:', this.form);

        // 儲存初始值
        this.initialForm = {
          streetName: this.form.streetName || '',
          storeName: this.form.storeName || '',
          storeNo: this.form.storeNo || '',
          detailAddress: this.form.detailAddress || ''
        };

        this.form.deliveryType = String(response.data.deliveryType);
        this.addressPath = this.form.addressPath;
        this.addressIds = [this.form.cityId, this.form.areaId];
        this.open = true;
        this.title = "修改收貨地址";
      });

      // 載入行政區域樹
      await this.getAdministrativeAreaTree(false);

      // 等待 DOM 更新後選中市區
      this.$nextTick(() => {
        this.$refs['cascaderPanel'].selectValue([this.form.cityId, this.form.areaId], this.form.addressPath);
      });

      // 如果不是宅配，載入街道和門市
      if (this.form.deliveryType !== '1') {
        // 載入街道
        await this.getStreets(this.form.city, this.form.area);

        // 確保街道載入完成後，恢復初始值（如果未被介面更新）
        this.$nextTick(() => {
          this.form.streetName = this.form.streetName || this.initialForm.streetName;
        });

        // 載入門市
        if (this.initialForm.streetName) {
          await this.getStores(this.form.city, this.form.area, this.initialForm.streetName);

          // 確保門市載入完成後，恢復初始值
          this.$nextTick(() => {
            this.form.storeName = this.form.storeName || this.initialForm.storeName;
            this.form.detailAddress = this.form.detailAddress || this.initialForm.detailAddress;
          });
          console.log(this.form.streetName + ' --> ' + this.form.storeName);
        }
      }
    },
    /** 提交按鈕 */
    submitForm() {
      // 判斷addressIds不能為空，不提交請求
      if (this.addressIds.length == 0) {
        this.$message({
          message: '請選擇市區',
          type: 'warning'
        });
        return;
      }
      this.form.cityId = this.addressIds[0];
      this.form.areaId = this.addressIds[1];
      // 根據 > 分割this.addressPath
      this.address = this.addressPath.split(' > ');
      this.form.city = this.address[0];
      this.form.area = this.address[1];
      this.form.addressPath = this.addressPath;
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.addressId != null) {
            updateAddress(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
              this.addressIds = [];
              this.addressPath = null;
            });
          } else {
            addAddress(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
              this.addressIds = [];
              this.addressPath = null;
            });
          }
        }
      });
    },
    /** 刪除按鈕操作 */
    handleDelete(row) {
      const addressIds = row.addressId || this.ids;
      // 是否確認刪除使用者收貨地址編號為"' + addressIds + '"的資料項？
      this.$modal.confirm('是否確認刪除該使用者收貨地址？').then(function () {
        return delAddress(addressIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("刪除成功");
      }).catch(() => {});
    },
    /** 匯出按鈕操作 */
    handleExport() {
      this.download('system/address/export', {
        ...this.queryParams
      }, `address_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>

<style scoped>
@import "~@a/backend/css/bootstrap.min.css";
@import "~@a/backend/css/font-awesome.min.css";
@import "~@a/backend/css/simdahs.css";
@import "~@a/backend/css/themify-icons.css";
@import "~@a/backend/css/style.css";

::v-deep .el-form-item__error {
  color: #ff4949;
  font-size: 12px;
  line-height: 1;
  padding-top: 4px;
  position: absolute;
  top: auto;
  left: 0;
}
</style>
