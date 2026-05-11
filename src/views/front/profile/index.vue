<template>
  <div>
    <Header />
    <section class="dashboard-area ptb-54">
      <div class="container">
        <el-row >
          <el-col :span="4" id="contain">
            <ul>
              <h5>個人中心</h5>
              <li style="margin: 10px;">
                <a href="#" @click="handleMenuSelect('1')">
                  <span :style="{ color: activeMenu === '1' ? '#ff6a00' : '', fontWeight: activeMenu === '1' ? '800' : '',cursor: activeMenu === '2' ? 'pointer' : '' }" >
                    個人資訊
                 </span>
                </a>
              </li>
              <li style="margin: 10px;"><a href="#" @click="handleMenuSelect('2')">
                <span :style="{ color: activeMenu === '2' ? '#ff6a00' : '', fontWeight: activeMenu === '2' ? '800' : '',cursor: activeMenu === '2' ? 'pointer' : '' }">
                  收穫地址</span></a></li>
              <li style="margin: 10px;"><a href="#" @click="handleMenuSelect('4')">
                <span :style="{ color: activeMenu === '4' ? '#ff6a00' : '', fontWeight: activeMenu === '4' ? '800' : '' ,cursor: activeMenu === '2' ? 'pointer' : ''}">
                  通知公告
                </span></a></li>
            </ul>
            <!-- <el-menu :default-active="activeMenu" class="dashboard-navigation" @open="handleOpen" @close="handleClose" @select="handleMenuSelect"
               text-color="#111111" active-text-color="#ff6a00">
              <el-menu-item index="1">
                <i class="ri-profile-line"></i>
                <span>個人資訊</span>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="ri-pin-distance-line"></i>
                <span>收穫地址</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="ri-notification-line"></i>
                <span>通知公告</span>
              </el-menu-item>
            </el-menu> -->
          </el-col>
          <el-col :span="20"  v-show="activeMenu === '1'">
            <div slot="header" class="clearfix">
            <span>基本資料</span>
          </div>
          <el-col :span="18" >
            <el-tabs v-model="activeTab">
              <el-tab-pane label="基本資料" name="userinfo">
                <userInfopro :user="user" />
              </el-tab-pane>
              <!-- <el-tab-pane label="修改密碼" name="resetPwd">
                <resetPwd />
              </el-tab-pane> -->
            </el-tabs>
          </el-col>
          <el-col :span="6">
            <div class="text-center">
              <userAvatar :user="user" />
            </div>
          </el-col>
          </el-col>
          <!-- 我的收穫地址 -->
          <el-col :span="20"  v-show="activeMenu === '2'">
            <div class="addressclass" style="background-color: white;">
                <div class="address-list" >
                    <!-- <h3>我的收穫地址</h3> -->
                    <div class="added-address"  style="background-color: white;">
                      <a href="#"  @click="handleAdd">
                        <i class="ri-add-line"></i>
                        <span>新增地址</span>
                      </a>
                    </div>
                    <div><el-empty description="暫無資料" v-show="addressList.length <= 0" /> </div>
                    <div v-for="(address,addressIndex) in addressList" :key="addressIndex" v-show="addressList.length > 0">
                      <div class="billing-address-bar mb-5" :style="{ border: '1px solid #f96332'}" style="background-color: white; " >
                          <div class="row align-items-center ">
                              <div class="col-lg-4 col-md-6">
                                <ul>
                                  <li><h3>{{address.receivingName}}</h3></li>
                                  <li><span>取貨方式: {{ getDeliveryTypeText(address.deliveryType) }}</span></li>
                                   <li v-if="address.deliveryType !== 1"><span>店鋪: {{ address.storeName }}</span></li>
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
                                  <li v-if="address.defaultAddress === 0 " :style="{
                                            display: 'block',
                                            width: '120px',
                                            height: '30px',
                                            'line-height': '30px',
                                            'text-align': 'center',
                                            'border': '1px solid #ff5000',
                                            'border-radius': '3px',
                                            'background': '#ffd6cc',
                                            'color': '#f30',
                                              }"><a href="#"  @click="handleUpdateDefaultAddress(address)">設為預設地址</a></li>
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
                </div>
            </div>
          </el-col>
            <!-- 我的店鋪 -->
          <!-- <el-col :span="18" v-show="activeMenu === '3'">
            <el-empty description="你還沒有店鋪"  v-show="!shop"/>
            <userShop :shop="shop" v-show="shop"/>
          </el-col> -->

            <!-- 通知公告 -->
            <el-col :span="20"  v-show="activeMenu === '4'">
            <el-empty description="尚未有通知公告"  v-show="noticeList.length <= 0"/>
            <div v-for="(notice,noticeIndex) in noticeList" :key="noticeIndex" v-show="noticeList.length > 0">
                  <el-collapse v-model="activeName" accordion>
                        <el-collapse-item :title=notice.noticeTitle :name=noticeIndex>
                          <template #title>
                            <div class="title-with-margin">{{ notice.noticeTitle }}</div>
                          </template>
                          <div class="content-with-margin">
                          <div>釋出時間:{{ notice.createTime }}</div>
                          <div v-html="notice.noticeContent"></div>
                          <!-- <a href="#"> <span class="m-r-10">檢視詳情</span></a> -->
                        </div>
                        </el-collapse-item>
                  </el-collapse>
            </div>

                <pagination v-show="noticeTotal > 0" :total="parseInt(noticeTotal)" :page.sync="queryNoticeParams.pageNum"
                    :limit.sync="queryNoticeParams.pageSize" @pagination="getListNotice" />

          </el-col>
        </el-row>
      </div>
    </section>
    <Footer />

     <!-- 新增或修改使用者收穫地址對話方塊 -->
     <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="使用者ID" prop="userId" v-if="false">
          <el-input v-model="form.userId" placeholder="請輸入使用者ID" />
        </el-form-item>
         <!-- 原有表單項 -->
         <el-form-item label="取貨方式" prop="deliveryType">
          <el-radio-group v-model="form.deliveryType">
            <el-radio label= 1 >宅配</el-radio>
            <el-radio label= 2 >711</el-radio>
            <el-radio label= 3 >全家family</el-radio>
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
        <el-form-item label="街道" prop="streetName" v-if="form.deliveryType !==  '1' ">
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
// import '@/assets/js/jquery.min.js'
// import '@/assets/js/bootstrap.bundle.min.js'
// import '@/assets/js/meanmenu.min.js'
// import '@/assets/js/owl.carousel.min.js'
// import '@/assets/js/wow.min.js'
// import '@/assets/js/range-slider.min.js'
// import '@/assets/js/form-validator.min.js'
// import '@/assets/js/contact-form-script.js'
// import '@/assets/js/ajaxchimp.min.js'
// import '@/assets/js/custom.js'
import Header from '../components/header'
import Footer from '../components/footer'
import userInfopro from "../components/userInfoPro";
import userAvatar from '../components/userAvatar'
//import userShop from '../components/userShop'

import { getUserProfile } from "@/api/system/user";
import { getOwnerShopInfo } from "@/api/shop/shop";

import CascaderPanel from "@c/CascaderPanel";
import CustomPrompt from "../components/CustomPrompt";
import { listNotice} from "@/api/system/notice";


import { getStores,getStreets,updateDefaultAddress,getAdministrativeAreaByArea,getAdministrativeAreaTree, listAddress, getAddress, delAddress, addAddress, updateAddress } from "@/api/system/address";



export default {
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
      activeDeliveryType: '1',
      streetList: [],
      storeList: [],
      activeName: '1',
      user: {},
      noticeList:[],
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
      noticeTotal: 0,
      active: 0,
      // 使用者收穫地址表格資料
      addressList: [
      ],
      enumMapping: {
        '1': '是',
        '0': '否'
        // 其他列舉值對映...
      },
         // 查詢通知公告引數
      queryNoticeParams: {
        pageNum: 1,
        pageSize: 10,
        status: '0'
      },
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      form: {},
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
    tooltip:'是否確認刪除該使用者收穫地址？',//提示資訊
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
            //pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
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
      // 獲取val最後一個元素,即區的id,並發起請求獲取地址編碼
      if(val.length > 0){
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
    'form.deliveryType': function(newVal) {
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
    'form.streetName': function(newVal) {
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
    //獲取URL引數
    const type = this.$route.query.type + '';
    if(type === '1' || type === '2'|| type === '4'){
      this.handleMenuSelect(type);
    }else{
      this.getUser();
      this.getAddressList();
      this.getListNotice();
    }

  },
  methods:{
    handleStoreChange(storeName) {
        // 查詢選中的店鋪物件
        // 假設店鋪物件中包含詳細位址列位 detailAddress
        const store = this.storeList.find(store => store.storeName === storeName);
        if (store) {
          // 設定店鋪編號
          this.form.storeNo = store.storeNo;
          this.form.detailAddress = store.storeNo + store.storeName+'門市'+store.storeAddr;
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
     /** 查詢使用者收穫地址列表 */
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
        deliveryType: 1,
        streetName: '',
        storeName: '',
        storeNo: '',
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
        this.title = "修改收穫地址";
      });

      // 載入行政區域樹
      await this.getAdministrativeAreaTree(false);

      // 等待 DOM 更新後選中市區
      this.$nextTick(() => {
        this.$refs['cascaderPanel'].selectValue([this.form.cityId, this.form.areaId], this.form.addressPath);
      });

      // 如果不是宅配，載入街道和門店
      if (this.form.deliveryType !== '1') {
        // 載入街道
        await this.getStreets(this.form.city, this.form.area);

        // 確保街道載入完成後，恢復初始值（如果未被介面更新）
        this.$nextTick(() => {
          this.form.streetName = this.form.streetName || this.initialForm.streetName;

        });

        // 載入門店
        if (this.initialForm.streetName) {
          await this.getStores(this.form.city, this.form.area, this.initialForm.streetName);

          // 確保門店載入完成後，恢復初始值
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
      // //是否確認刪除使用者收穫地址編號為"' + addressIds + '"的資料項？
      // this.$modal.confirm('是否確認刪除該使用者收穫地址？').then(function () {
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

     /** 設為預設收穫地址 */
     handleUpdateDefaultAddress(row) {
      const addressIds = row.addressId;
      updateDefaultAddress(addressIds).then(response => {
            this.getAddressList();
            this.$message({
          message: '設定成功',
          type: 'success',
          //  offset: 250
        });
           // this.$message({ message:'設定成功',center: true,position: 'bottom-right'});
          }).catch(() => {});
    },
     /** 新增按鈕操作 */
     handleAdd() {
      this.reset();
      this.open = true;
      this.getAdministrativeAreaTree(true);
      this.title = "新增收穫地址";
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleMenuSelect(index) {
      this.activeMenu = index;
      if (index === '1') {
        this.getUser();
      }else if(index === '2'){
        this.getAddressList();
      }else if(index === '4'){
        this.getListNotice();
      }
    },
    getUser() {
      getUserProfile().then(response => {
        this.user = response.data;
      });
    },
  },

};
</script>

<style   scoped lang="scss">
@import "~@a/front/css/bootstrap.min.css";
@import "~@a/front/css/owl.theme.default.min.css";
@import "~@a/front/css/owl.carousel.min.css";
@import "~@a/front/css/remixicon.css";
@import "~@a/front/css/meanmenu.min.css";
@import "~@a/front/css/animate.min.css";
@import "~@a/front/css/style.css";
@import "~@a/front/css/responsive.css";


//@import "~@a/backend/css/bootstrap.min.css";
/* @import "~@a/backend/css/font-awesome.min.css";
@import "~@a/backend/css/simdahs.css";
@import "~@a/backend/css/themify-icons.css"; */
//@import "~@a/backend/css/style.css";
::v-deep .el-form-item__error {
  color: #ff4949;
  font-size: 12px;
  line-height: 1;
  padding-top: 4px;
  position: absolute;
  top: auto;
  left: 0;
}

// ::v-deep .el-scrollbar {
//   height: 150px;
// }


::v-deep .el-cascader-panel {
  max-height: 400px;
}

::v-deep .el-cascader-menu {
  max-height: 380px;
  overflow-y: auto;
}

::v-deep #contain ul li a:hover {
  color: #e4393c !important;
  text-decoration: underline !important;
}
::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #ff6a00 !important;
    color: #FFFFFF !important;
  }
  ::v-deep .content-with-margin {
  margin-left: 20px; /* 設定左邊邊距為20px，根據需要調整 */
}

.title-with-margin {
  font-size: 14px;
  margin-left: 15px; /* 設定標題內容向左偏移 15px，根據需要調整 */
}
// 分頁外掛被汙染
::v-deep .pagination-container {
    background: transparent;
    padding: 32px 16px;
}

::v-deep .dashboard-area {
    background: #fafafa;
}

</style>