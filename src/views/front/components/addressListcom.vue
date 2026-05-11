<template>
  <div>
    <!-- addressList不為空展示 -->
     <div><el-empty description="暫無資料" v-show="addressList.length <= 0" /> </div>
      <div v-for="(address,addressIndex) in addressList" :key="addressIndex" v-show="addressList.length > 0">
                      <div class="billing-address-bar mb-5" :style="{ border: '1px solid red'}" style="background-color: white; " >
                          <div class="row align-items-center ">
                              <div class="col-lg-4 col-md-6">
                              <!-- <h3>Billing Address</h3> -->
                                <ul>
                                  <li><h3>{{address.receivingName}}</h3></li>
                                  <li>
                                  <span>收件地址:{{address.fullAddress}}</span>
                                  
                                  </li>
                                  <li v-if="address.defaultAddress === 1 " 
                                  :style="{
                                            display: 'block',
                                            width: '80px',
                                            height: '30px',
                                            'line-height': '30px',
                                            'text-align': 'center',
                                            'border': '1px solid #ff5000',
                                            'border-radius': '3px',
                                            'background': '#ffd6cc',
                                            'color': '#f30',
                                              }">預設地址</li>
                                  <li v-if="address.defaultAddress === 0 " :style="{ color: 'red' }"><a href="#"  @click="handleUpdateDefaultAddress(address)">設定為預設地址</a></li>
                                </ul>
                              </div>
                              <div class="col-lg-4 col-md-6">
                                <ul>
                                    <li>
                                    <span>收件號碼:{{address.receivingPhone}}</span>                                   
                                    </li>
                                    <li>
                                    <span>郵政編碼:{{address.postalCode}}</span>
                                    </li>
                                </ul>
                              </div>
                              <div class="col-lg-4 col-md-6">
                              <div class="edit-address">
                              <button class="default-btn" @click="handleUpdate(address)">編輯地址</button>
                              <button class="default-btn m-0" @click="handleDelete(address)">
                              刪除地址
                              </button>
                              </div>
                              </div>
                          </div>
                      </div>
      </div>
     <!-- 新增或修改使用者收貨地址對話方塊 -->
     <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="使用者ID" prop="userId" v-if="false">
          <el-input v-model="form.userId" placeholder="請輸入使用者ID" />
        </el-form-item>
        <!-- 原有表單項 -->
        <el-form-item label="取貨方式" prop="deliveryType">
          <el-radio-group v-model="form.deliveryType">
            <el-radio label="home">宅配</el-radio>
            <el-radio label="seven">711</el-radio>
            <el-radio label="family">全家</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="收件人姓名" prop="receivingName">/div>/div/div>
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
       <!-- 街道選擇（僅711和全家） -->
       <el-form-item label="街道" prop="streetName" v-if="form.deliveryType !== 'home' && addressIds.length > 0">
          <el-select v-model="form.streetName" placeholder="請選擇街道" @change="handleStreetChange">
            <el-option
              v-for="street in streetList"
              :key="street.streetName"
              :label="street.streetName"
              :value="street.streetName">
            </el-option>
          </el-select>
        </el-form-item>

        <!-- 店鋪選擇（僅711和全家） -->
        <el-form-item label="選擇店鋪" prop="storeName" v-if="form.deliveryType !== 'home' && form.streetName">
          <el-select v-model="form.storeName" placeholder="請選擇店鋪">
            <el-option
              v-for="store in storeList"
              :key="store.storeName"
              :label="store.storeName"
              :value="store.storeName">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="詳細地址" prop="detailAddress">
          <el-input v-model="form.detailAddress" type="textarea" :autosize="{ minRows: 1 }" placeholder="請輸入內容" />
        </el-form-item>
        <el-form-item label="郵政編碼" prop="postalCode">
          <el-input v-model="form.postalCode" placeholder="請輸入郵政編碼" />
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
        <el-button type="primary" @click="submitForm">確 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 公共彈窗 -->
    <CustomPrompt :visible="dialogVisible" :dialog-title="dialogTitle" :input-placeholder="dialogInputPlaceholder"
      :confirm-button-style="confirmButtonStyle" width="25%" :tooltipVisible=true :reasonVisible=reasonVisible :tooltip=tooltip
       @update:visible="closeDialog" @confirm="handleConfirm" @cancel="handleCancel">
    </CustomPrompt>

  </div>
</template>

<script>
import Header from '../components/header'
import Footer from '../components/footer'
import userInfopro from "../components/userInfoPro";
import userAvatar from '../components/userAvatar'

import { getUserProfile } from "@/api/system/user";
import CascaderPanel from "@c/CascaderPanel";
import CustomPrompt from "../components/CustomPrompt";


import { updateDefaultAddress,getAdministrativeAreaByArea,getAdministrativeAreaTree, listAddress, getAddress, delAddress, addAddress, updateAddress } from "@/api/system/address";



export default {
  name: "addressListcom",
  components: {
    Header,
    Footer,
    userInfopro,
    userAvatar,
    CascaderPanel,
    CustomPrompt,
  },
  data() {
    return {
      activeDeliveryType: 'home',
      streetList: [],
      storeList: [],
      user: {},
      labelPosition: "top",
      activeMenu: '1',
      activeTab: "userinfo",
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
      addressList: [
      ],
      enumMapping: {
        '1': '是',
        '0': '否'
        // 其他列舉值對映...
      },
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      form: {
        deliveryType: 'home',
        streetName: '',
        storeName: '',
      },
      open: false,
      administrativeAreaTree: [],
      address: [],
      props: {
      value: "id",
      label: "divisionName",
      children: "children",

     
   },
      // 對話方塊元件的資料
    dialogVisible: false,//是否開啟對話方塊標識
    reasonVisible: false,//是否顯示理由輸入框
    dialogTitle: '收穫地址',//對話方塊標題
    tooltip:'是否確認刪除改使用者收貨地址？',//提示資訊
    dialogInputPlaceholder: '請輸入理由',//輸入框佔位符
    deleteRow:null,//刪除引數
    confirmButtonStyle: { // 確認按鈕樣式
        color: '#FFFFFF',
        backgroundColor: '#fa9852',
        borderColor: '#fa9852',
     },
  cascaderLabel: "地址",
      addressIds: [],
      addressPath: null,
      // 表單校驗
  rules: {
    streetName: [
          { required: true, message: "請選擇街道", trigger: "change", validator: (rule, value, callback) => {
            if (this.form.deliveryType !== 'home' && !value) {
              callback(new Error('請選擇街道'));
            } else {
              callback();
            }
          }}
        ],
        storeName: [
          { required: true, message: "請選擇店鋪", trigger: "change", validator: (rule, value, callback) => {
            if (this.form.deliveryType !== 'home' && !value) {
              callback(new Error('請選擇店鋪'));
            } else {
              callback();
            }
          }}
        ],
     receivingName: [
      { required: true, message: "收件人姓名不能為空", trigger: "blur" }
      ],
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
            message: "請輸入正確的手機號碼",
            trigger: "blur"
          }
        ]
      },
    };
  },
  watch: {
    // 根據名稱篩選樹
    addressIds(val) {
      // 獲取val最後一個元素,即區的id,併發起請求獲取地址編碼
      if(val.length > 0){
        val = val[val.length - 1];
        getAdministrativeAreaByArea(val).then(response => {
        this.form.postalCode = response.data.zipcode;
      });
      }
      // 只有711和全家需要獲取街道
      if (this.form.deliveryType !== 'home') {
          // 分割 addressPath 獲取市和區
          const pathParts = this.addressPath.split(' > ');
          this.form.city = pathParts[0]; // 第一個是市
          this.form.area = pathParts[1]; // 第二個是區
          this.getStreets(this.form.city, this.form.area);
        }
    },
    'form.deliveryType': function(newVal) {
      this.streetList = [];
      this.storeList = [];
      this.form.streetName = '';
      this.form.storeName = '';
      this.form.detailAddress = '';
      if (newVal !== 'home' && this.addressIds.length > 0) {
        const pathParts = this.addressPath.split(' > ');
        this.form.city = pathParts[0];
        this.form.area = pathParts[1];
        this.getStreets(this.form.city, this.form.area);
      }
    },
    'form.streetName': function(newVal) {
      if (newVal && this.form.deliveryType !== 'home') {
        // 使用市、區、街道查詢店鋪
        this.getStores(this.form.city, this.form.area, newVal);
      } else {
        this.storeList = [];
        this.form.storeName = '';
      }
    }
  },
    
  created() {
    this.getAddressList();
  },
  methods:{
    async getStreets(city, area) {
      try {
        const response = await getStreetsByArea({ city, area });
        this.streetList = response.data;
      } catch (error) {
        console.error('獲取街道失敗', error);
      }
    },
    
    async getStores(city, area, streetName) {
      try {
        const response = await getStoresByArea({
          city,
          area,
          streetName,
          storeType: this.form.deliveryType === 'seven' ? '711' : 'family'
        });
        this.storeList = response.data;
      } catch (error) {
        console.error('獲取店鋪失敗', error);
      }
    },
    
    handleStreetChange(streetName) {
      if (this.form.deliveryType !== 'home') {
        this.getStores(this.form.city, this.form.area, streetName);
      }
    },
    
    handleTabClick(tab) {
      this.activeDeliveryType = tab.name;
      this.form.deliveryType = tab.name;
      this.reset();
      this.getAddressList();
    },
    getDeliveryTypeText(type) {
      const types = {
        'home': '宅配',
        'seven': '711',
        'family': '全家'
      };
      return types[type] || '未知';
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
     getAddressList() {
      listAddress(this.queryParams).then(response => {
        this.addressList = response.rows;
      });
    },
     // 取消按鈕
     cancel() {
      this.open = false;
      this.reset();
    },
     // 收穫地址表單重置
     reset() {
      this.form = {
        deliveryType: 'home',
        streetName: '',
        storeName: '',
        addressId: null,
        fullAddress: null,
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
        remark: null
      };
      this.resetForm("form");
    },
      /** 修改按鈕操作 */
      async handleUpdate(row) {
      this.reset();
      const addressId = row.addressId || this.ids
      await getAddress(addressId).then(response => {
        this.form = response.data;
        this.addressPath = this.form.addressPath;
        this.addressIds = [this.form.cityId, this.form.areaId];
        this.open = true;
        this.getAdministrativeAreaTree(false);
        // 等待上個方法執行完畢後再執行下面的方法
        this.$nextTick(() => {
          // 選中市區
          this.$refs['cascaderPanel'].selectValue([this.form.cityId, this.form.areaId], this.form.addressPath)
        })
        //this.$refs['cascaderPanel'].selectValue([this.form.cityId, this.form.areaId], this.form.addressPath)
        this.title = "修改收貨地址";
      });

    },
    /** 提交按鈕 */
    submitForm() {
      // 判斷addressIds不能為空,不提交請求
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
              this.getAddressList();
              this.addressIds = [];
              this.addressPath = null;
            });
          } else {
            addAddress(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getAddressList();
              this.addressIds = [];
              this.addressPath = null;
            });
          }
        }
      });
    },
    /** 刪除按鈕操作 */
    handleDelete(row) {
      this.dialogVisible = true;
      this.deleteRow = row;
      // const addressIds = row.addressId || this.ids;
      // //是否確認刪除使用者收貨地址編號為"' + addressIds + '"的資料項？
      // this.$modal.confirm('是否確認刪除改使用者收貨地址？').then(function () {
      //   return delAddress(addressIds);
      // }).then(() => {
      //   this.getAddressList();
      //   this.$modal.msgSuccess("刪除成功");
      // }).catch(() => { });
    },
    /** 對話方塊確認回撥方法 */
    handleConfirm() {
      this.dialogVisible = false;
      const addressIds = this.deleteRow.addressId || this.ids;
      delAddress(addressIds).then(response => {
            this.getAddressList();
            this.$modal.msgSuccess("刪除成功");
           // this.$message({ message:'設定成功',center: true,position: 'bottom-right'});
          }).catch(() => {});;
    },

    /** 對話方塊取消回撥方法 */
    handleCancel() {
      this.deleteRow = null;
      this.dialogVisible = false;
    },

    /** 關閉對話方塊 */
    closeDialog(visible) {
      this.deleteRow = null;
      this.dialogVisible = visible;
    },
    
     /** 設定為預設收貨地址 */
     handleUpdateDefaultAddress(row) {
      const addressIds = row.addressId;
      updateDefaultAddress(addressIds).then(response => {
            this.getAddressList();
            this.$message({
          message: '設定成功',
          type: 'success',
        });
          }).catch(() => {});
    },
     /** 新增按鈕操作 */
     handleAdd() {
      this.reset();
      this.open = true;     
      this.getAdministrativeAreaTree(true);
      this.title = "新增收貨地址";
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleMenuSelect(index) {
      if (index === '1') {
        this.getUser();
      }else if(index === '2'){
        this.getAddressList();
      }
      this.activeMenu = index;
    },
    getUser() {
      getUserProfile().then(response => {
        this.user = response.data;
      });
    }
  },
 
};
</script>

<style  scoped>
@import "~@a/front/css/bootstrap.min.css";
@import "~@a/front/css/owl.theme.default.min.css";
@import "~@a/front/css/owl.carousel.min.css";
@import "~@a/front/css/remixicon.css";
@import "~@a/front/css/meanmenu.min.css";
@import "~@a/front/css/animate.min.css";
@import "~@a/front/css/style.css";
@import "~@a/front/css/responsive.css";

@import "~@a/backend/css/bootstrap.min.css";
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

::v-deep .el-scrollbar {
  height: 150px;
}

</style>
