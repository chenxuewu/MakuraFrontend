<template>
  <div>
    <Header />
    <section class="dashboard-area ptb-54" style="padding: 20px 0px;">
      <div class="container">
        <el-row id="big">
          <el-col id="bigLeft" :span="4">
            <ul>
              <h5>訂單中心</h5>
              <li style="color:#ff6a00;font-weight:800;cursor: pointer;">我的訂單</li>
              <!-- <li>我的活動</li> -->
              <!-- <li>評價曬單</li> -->
              <li style="cursor: pointer;">訂單回收站</li>
              <!-- <li>購物助手</li> -->
            </ul>
            <ul>
              <h5>關注中心</h5>
              <li @click="toMyCollect" style="cursor: pointer;">關注的商品</li>
              <li style="cursor: pointer;">關注的店鋪</li>
              <!-- <li>關注的專輯</li>
              <li>收藏的內容<img src="./img/new.png"></li>
              <li>關注的活動</li>
              <li>瀏覽歷史</li> -->
            </ul>
            <ul>
              <h5>設定</h5>
              <li @click="manageAddress(1)" style="cursor: pointer;">個人資訊</li>
              <li @click="manageAddress(2)" style="cursor: pointer;">收貨地址</li>
            </ul>
          </el-col>

          <el-col :span="20" id="bigRight">
            <el-row class="myOrder" :span="24">
              <el-col :span="24">
                <div class="myOrder">
                  <p>我的訂單</p>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <div class="allBig">
                <el-row class="row-with-divider">
                  <el-col :span="8" style="font-size: 14px; line-height: 36px; text-align: left;">
                    <el-radio-group v-model="orderState" size="mini" @change="handleOrderState">
                      <template v-for="oraderTab in orderTabList">
                        <template>
                          <el-radio-button class="plain-button" :key="oraderTab.value" :label="oraderTab.value"
                            :class="{ 'highlighted': oraderTab.value === orderState }">
                            {{ oraderTab.label }}
                          </el-radio-button>
                        </template>
                      </template>
                    </el-radio-group>
                  </el-col>

                  <el-col :span="16" style="display: flex; justify-content: space-between; align-items: center;">
                    <el-col :span="5" style="font-size: 15px; line-height: 36px; text-align: center;">
                      <el-date-picker v-model="createTime" size="mini" type="datetimerange" unlink-panels
                        range-separator="至" start-placeholder="開始日期" end-placeholder="結束日期"
                        :picker-options="pickerOptions" @change="handleTimeChange"></el-date-picker>
                    </el-col>

                    <el-col :span="9"
                      style="font-size: 14px; line-height: 36px; text-align: center; display: flex; align-items: center;">
                      <el-input v-model="queryParams.orderSns[0]" placeholder="請輸入訂單號" @change="handleQuery"
                        style="width: 260px;"></el-input>
                      <button class="search"
                        style="display: flex; align-items: center; justify-content: center;
                        font-size: 14px; line-height: 36px; text-align: center; vertical-align: middle; margin-top: -1px;"
                        @click="handleQuery">
                        <i class="ri-search-line"></i>
                      </button>
                    </el-col>
                  </el-col>
                </el-row>


                <el-row style=" background-color: #f2f2f2; margin-top: 10px;display: flex; align-items: center;">
                  <el-col :span="3" class="detailsUl">
                    <el-select v-model="orderTimeValue" placeholder="請選擇" class="detailsLiok detailsLi custom-select"
                      @change="handleOrderTime">
                      <el-option v-for="item in orderTimeOptions" :key="item.value" class="allBig_i" :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="9" style="font-size: 14px;line-height: 36px;text-align: center;">
                    <span style="color: black;">訂單詳情</span>
                  </el-col>
                  <el-col :span="3" style="font-size: 14px;line-height: 36px;text-align: center;">
                    <span style="color: black;">收貨人</span>
                  </el-col>
                  <el-col :span="3" style="font-size: 14px;line-height: 36px;text-align: center;">
                    <span style="color: black;">金額</span>
                  </el-col>
                  <el-col :span="3">
                    <el-select v-model="orderStateOption" placeholder="請選擇" class="detailsLiok detailsLi custom-select"
                      @change="handleOrderStateOption">
                      <el-option v-for="item in orderStateOptions" :key="item.value" class="allBig_i" :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="3" style="font-size: 14px;line-height: 36px;text-align: center;">
                    <span style="color: black;">操作</span>
                  </el-col>
                </el-row>
                <el-row>
                  <div v-loading="loading">
                    <div v-for="(order, orderIndex) in orderList" :key="orderIndex">
                      <table class="table">
                        <tr>
                          <td colspan="7" style="background:#F7F7F7">
                            <span style="color: black;">{{ order.createTime }}</span>
                            <span style="color: black;"><ruby>訂單編號:</ruby> {{ order.orderProcedureSn }}</span>
                            <span style="color: black;">{{ order.shopName }}
                              <!-- <i class="table_i"></i> -->
                            </span>
                            <span style="float: right;" v-if="order.orderStatus === 4 || order.orderStatus === 3">
                              <a href="#" @click.prevent="handleIconClick">
                                <i class="ri-delete-bin-line" style="font-size: 14px;"
                                  @click="openRemoveConfirmationBox(order)"></i>
                              </a>
                            </span>
                            <i class="table_i5 isShow"></i>
                          </td>
                        </tr>
                        <tr class="tr">
                          <td colspan="3">
                            <div v-for="(item, index) in order.xtOrderItemVoList" :key="index" style="display: flex; align-items: center;">
                              <el-image style="width: 85px; height: 85px; flex-shrink: 0;" :src="item.productSkuPicUrl" :preview-src-list="[item.productSkuPicUrl]"></el-image>
                              <div style="flex: 1; margin-left: 20px;">
                                <el-button @click="showProductDetails(item.productId)" type="text" size="mini" style="color: black;">
                                  <p style="width: 350px;text-align: left" :title="item.productName" v-html="`${limitCharacters(item.productName, 30)} <br/> ${item.productSkuName} <br/> NT$ ${item.modelDiscountedPrice}`"></p>
                                </el-button>
                              </div>
                              <div>x{{ item.modelQuantityPurchased }}</div>
                            </div>
                            <br />
                          </td>

                          <td style="color: black;">{{ order.buyerUserName }}<i><i class="table_i1"></i></i></td>
                          <td style="text-align: center;">
                            <p style="color: #ff6a00;"> NT$ {{ order.totalAmount }}</p>
                          </td>
                          <td>
                            <ul style="margin-bottom: 0px;">
                              <li style="color:#ff6a00;">{{ formatOrderStatus(order.orderStatus) }}<span v-if="order.orderStatus === 4">{{ order.cancelledParty===0?'（買家）':'（賣家）' }}</span></li>
                              <br />
                              <template>
                                <li style="margin: 4px 0;" class="hide" @mouseover="showHideList"
                                  @mouseleave="hideHideList">
                                  <i class="table_i2"></i><span style="color: black;">追蹤</span>
                                  <div class="hi" :style="{
                                    display: isHovered ? 'block' : 'none',
                                    position: 'absolute',
                                    maxHeight: '450px',
                                    paddingLeft: '5px',
                                    marginBottom: '20px',
                                    lineHeight: '20px',
                                    top: isHovered ? '-82px' : '10px',
                                    right: '105px',
                                    zIndex: '100',
                                    textAlign: 'left',
                                    minWidth: '400px',
                                    background: '#F7F7F7',
                                    boxShadow: '-3px -3px 20px 0px #ccc',
                                    overflowY: 'auto',
                                  }">
                                    <div class="hideList">
                                      <h5
                                        style="color: #fa9852; margin-bottom: 17px;margin-top: 10px; text-align: center;">
                                        操作記錄</h5>
                                      <div class="block">
                                        <el-timeline>
                                          <el-timeline-item
                                            v-for="(orderOperateHistory, index) in order.xtOrderOperateHistoryList"
                                            :key="index" :timestamp="orderOperateHistory.createTime">
                                            <b>操作者</b>：{{ orderOperateHistory.operateMan }}
                                            <br />
                                            <b>操作型別</b>：{{ formatOperateType(orderOperateHistory.operateType) }}
                                            <br />
                                            <b>操作描述</b>：{{ orderOperateHistory.remark }}
                                            <div
                                              v-if="orderOperateHistory.operateType === 5 || orderOperateHistory.operateType === 10 || orderOperateHistory.operateType === 3">
                                              <b>取消理由</b>：{{ orderOperateHistory.note }}
                                            </div>
                                          </el-timeline-item>
                                        </el-timeline>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </template>
                              <br />
                              <template>
                                <li style="margin: 4px 0;color: black;" class="showMessage"> 留言
                                  <div>
                                    <div class="message">
                                      <h5
                                        style="color: #fa9852; margin-bottom: 17px;margin-top: 10px; text-align: center;">
                                        留言資訊</h5>
                                      <div class="block">
                                        <el-timeline>
                                          <el-timeline-item v-for="(messageToSeller, index) in order.messageToSellerList"
                                            :key="index" :timestamp="messageToSeller.messageTime">
                                            <b>時間</b>：{{ messageToSeller.messageTime }}
                                            <br />
                                            <b>型別</b>：{{ messageToSeller.type }}
                                            <br />
                                            <b>內容</b>：{{ messageToSeller.messageContent }}
                                          </el-timeline-item>
                                        </el-timeline>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </template>

                            </ul>
                          </td>
                          <td>
                            <button @click="openOneConfirmOrder(order)" class="confirmButton"
                              v-if="order.orderStatus === 2">確認收貨</button>
                            <br />
                            <el-button
                              v-if="order.orderStatus === 7 || order.orderStatus === 1 || order.orderStatus === 2"
                              type="text" size="mini">
                              <p style="margin:4px 0; color: black;" @click="openCancelledOrderBox(order)">取消訂單</p>
                            </el-button>
                            <br />
                            <!-- <el-button type="text" size="mini" style="color: black;">
                              <p style="margin:4px 0; ">再次購買</p>
                            </el-button> -->
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12">
                      <pagination v-show="total > 0" :total="parseInt(total)" :page-sizes="pageSizes"
                        :page.sync="queryParams.pageNum" :limit.sync="queryParams.pageSize"
                        @pagination="getMyOrderList" />
                    </div>
                  </div>
                </el-row>

              </div>
            </el-row>
          </el-col>


          <div style="clear:both;"></div>
        </el-row>

      </div>
    </section>

    <Footer />

    <CustomPrompt :visible="dialogVisible" :dialog-title="dialogTitle" :input-placeholder="dialogInputPlaceholder"
      :confirm-button-style="confirmButtonStyle" width="25%" :tooltipVisible=true :reasonVisible=reasonVisible
      :tooltip=tooltip @update:visible="closeDialog" @confirm="handleConfirm" @cancel="handleCancel">
    </CustomPrompt>

  </div>
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import CustomPrompt from "../components/CustomPrompt.vue";

import { mapActions, mapState } from "vuex";

import { delOrder, myOrderList, confirmReceiptOrder, applyCancelledOrder } from "@/api/order/order";


export default {
  components: {
    Header,
    Footer,
    CustomPrompt
  },
  data() {
    return {
      loading: true,
      // 總條數
      total: 0,
      pageSizes: [5, 10, 15, 20],
      // 查詢引數
      queryParams: {
        pageNum: 1,
        pageSize: 5,
        orderStatus: 0,
        pendingStatus: 8,
        startTime: null,
        endTime: null,
        orderSns: [],
      },
      createTime: null,

      // 訂單表格資料
      orderList: [],

      //留言表格行高
      rowHeight: 40,

      //訂單時間篩選下拉選項
      orderTimeOptions: [
        {
          value: '0',
          label: '全部時間'
        },
        {
          value: '1',
          label: '近三個月訂單'
        }, {
          value: '2',
          label: '近六個月訂單'
        }, {
          value: '3',
          label: '近一年訂單'
        }
      ],
      orderTimeValue: '0',

      //訂單狀態篩選下拉選項
      orderStateOptions: [{
        value: '0',
        label: '全部狀態'
      }, {
        value: '1',
        label: '待發貨'
      }, {
        value: '2',
        label: '待收貨'
      }, {
        value: '3',
        label: '已完成'
      }, {
        value: '4',
        label: '已取消'
      }],
      orderStateOption: '0',

      // 訂單狀態
      orderTabList: [
        { value: 0, label: '全部訂單' },
        { value: 1, label: '待發貨' },
        { value: 2, label: '待收貨' }
      ],
      orderState: 0,

      pickerOptions: null,

      // 對話方塊元件的資料
      dialogVisible: false,//是否開啟對話方塊標識
      reasonVisible: false,//是否顯示理由輸入框
      dialogTitle: '確認要移除商品嗎',//對話方塊標題
      tooltip: '您確認要移除10個商品嗎？',//提示資訊
      dialogInputPlaceholder: '請輸入理由',//輸入框佔位符
      confirmButtonStyle: { // 確認按鈕樣式
        color: '#FFFFFF',
        backgroundColor: '#fa9852',
        borderColor: '#fa9852',
      },
      //定義一個變數儲存回撥的方法(1:刪除訂單 2:確認收貨 3:取消訂單 4:申請取消訂單)
      confirmCallback: null,
      //定義一個變數儲存需要操作的訂單
      operateOrder: null,

      isHovered: false,
      hoverTimer: null,
    };
  },

  async created() {
    await this.getOrderOperateTypeList(this);
    await this.getMyOrderList();
    await this.getOrderStates(this);
    await this.getOrderTabList(this)
  },

  computed: {
    ...mapState({
      orderStates: (state) => state.dict.orderStates,
      orderOperateTypeList: (state) => state.dict.orderOperateTypeList
    })
  },

  methods: {
    ...mapActions({
      getOrderStates: "dict/getOrderStates",
      getOrderTabList: "dict/getOrderTabList",
      getOrderOperateTypeList: "dict/getOrderOperateTypeList",
    }),

    /** 查詢我的訂單列表 */
    getMyOrderList() {
      this.loading = true;
      //判斷this.queryParams.orderSns是否有空資料，例如['']
      if (this.queryParams.orderSns.length > 0) {
        if (this.queryParams.orderSns[0] === '') {
          this.queryParams.orderSns = [];
        }
      }
      myOrderList(this.queryParams).then(response => {
        this.orderList = response.rows;
        //遍歷獲取留言資訊
        this.orderList.forEach((item, index) => {
          if (!item.messageToSeller) {
            item.messageToSellerList = [];
          } else {
            item.messageToSellerList = JSON.parse(item.messageToSeller);
          }
        });
        this.total = response.total;
        this.loading = false;
      });
    },


    /** 搜尋按鈕操作 */
    handleQuery() {
      this.getMyOrderList();

    },

    /** 刪除訂單確認框 */
    openRemoveConfirmationBox(row) {
      const orderProcedureSn = row.orderProcedureSn;
      this.tooltip = '是否確認刪除訂單編號為"' + orderProcedureSn + '"的資料項？';
      this.dialogTitle = '確認要刪除訂單嗎';
      this.confirmCallback = 1;
      this.operateOrder = row;
      this.dialogVisible = true;
    },


    /** 刪除按鈕操作 */
    handleDelete() {
      delOrder(this.operateOrder.orderProcedureId)
        .then(response => {
          try {
            if (response.code === 200) {
              this.getMyOrderList();
              this.$modal.msgSuccess("刪除成功");
            } else {
              this.$modal.msgError("刪除失敗，介面返回錯誤：" + response.msg);
            }
          } finally {
            this.operateOrder = null;
            this.confirmCallback = null;
            this.removeCartItemId = null;
            this.reasonVisible = false;
          }
        })
        .catch(error => {
          console.error("刪除失敗，發生錯誤：", error);
          this.$modal.msgError("刪除失敗，發生錯誤，請重試");
        })
        .finally(() => {
          this.operateOrder = null;
          this.confirmCallback = null;
          this.removeCartItemId = null;
          this.reasonVisible = false;
        });
    },


    /** 確認收貨確認框 */
    openOneConfirmOrder(row) {
      this.tooltip = '是否確認收貨訂單編號為"' + row.orderProcedureSn + '"的訂單？';
      this.dialogTitle = '確認收貨嗎';
      this.confirmCallback = 2;
      this.operateOrder = row;
      this.dialogVisible = true;
    },

    /** 確認收貨 */
    oneConfirmOrder(row) {
      const orderOptionParams = [];

      const orderOptionParam = {
        orderId: row.orderId,
        orderProcedureId: row.orderProcedureId
      };
      orderOptionParams.push(orderOptionParam);
      confirmReceiptOrder(orderOptionParams)
        .then(response => {
          try {
            if (response.code === 200) {
              this.getMyOrderList();
              this.$modal.msgSuccess("確認收貨成功");
            } else {
              this.$modal.msgError("確認收貨失敗，介面返回錯誤：" + response.msg);
            }
          } finally {
            this.operateOrder = null;
            this.confirmCallback = null;
            this.removeCartItemId = null;
            this.reasonVisible = false;
          }
        })
        .catch(error => {
          console.error("確認收貨失敗，發生錯誤：", error);
          this.$modal.msgError("確認收貨失敗，發生錯誤，請重試");
        })
        .finally(() => {
          this.operateOrder = null;
          this.confirmCallback = null;
          this.removeCartItemId = null;
          this.reasonVisible = false;
        });
    },

    /** 取消訂單確認框 */
    openCancelledOrderBox(row) {
      this.tooltip = '是否確認取消訂單編號為"' + row.orderProcedureSn + '"的訂單？';
      this.dialogTitle = '確認取消訂單嗎';
      this.reasonVisible = true;
      this.confirmCallback = 3;
      this.operateOrder = row;
      this.dialogVisible = true;
    },

    //申請取消訂單
    cancelledOrder(order, reason) {
      const orderOptionParams = [];
      const orderOptionParam = {
        orderId: order.orderId,
        orderProcedureId: order.orderProcedureId,
        cancelledReason: reason
      };
      orderOptionParams.push(orderOptionParam);
      applyCancelledOrder(orderOptionParams)
        .then(response => {
          try {
            if (response.code === 200) {
              this.getMyOrderList();
              this.$modal.msgSuccess("取消訂單成功");
            } else {
              this.$modal.msgError("取消訂單失敗，介面返回錯誤：" + response.msg);
            }
          } finally {
            this.operateOrder = null;
            this.confirmCallback = null;
            this.removeCartItemId = null;
            this.reasonVisible = false;
          }
        })
        .catch(error => {
          console.error("取消訂單失敗，發生錯誤：", error);
          this.$modal.msgError("取消訂單失敗，發生錯誤，請重試");
        })
        .finally(() => {
          this.operateOrder = null;
          this.confirmCallback = null;
          this.removeCartItemId = null;
          this.reasonVisible = false;
        });
    },

    //轉換訂單狀態
    formatOrderStatus(orderStatus) {
      // 根據實際情況處理狀態值的對映關係
      const displayStatus = this.getOrderStatusLabel(orderStatus);
      return displayStatus;
    },

    getOrderStatusLabel(orderStatus) {
      // 根據狀態值獲取對應的顯示文字
      const statusObj = this.orderStates.find((item) => item.value === orderStatus);
      return statusObj ? statusObj.label : orderStatus;
    },

    //賦值篩選時間
    handleTimeChange(val) {
      this.orderTimeValue = '0';
      if (val) {
        this.queryParams.startTime = val[0] ? this.formatDate(val[0]) : null;
        this.queryParams.endTime = val[1] ? this.formatDate(val[1]) : null;
        this.handleQuery();
      } else {
        this.queryParams.startTime = null;
        this.queryParams.endTime = null;
        this.handleQuery();
      }
    },

    formatDate(date) {
      const formattedDate = new Date(date); 1
      // 手動拼接成 yyyy-MM-dd HH:mm:ss 格式
      const year = formattedDate.getFullYear();
      const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
      const day = String(formattedDate.getDate()).padStart(2, '0');
      const hours = String(formattedDate.getHours()).padStart(2, '0');
      const minutes = String(formattedDate.getMinutes()).padStart(2, '0');
      const seconds = String(formattedDate.getSeconds()).padStart(2, '0');

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },

    //轉換訂單操作型別
    formatOperateType(operateType) {
      const displayStatus = this.getOrderOperateType(operateType);
      return displayStatus;
    },

    getOrderOperateType(operateType) {
      const statusObj = this.orderOperateTypeList.find((item) => item.value === operateType);
      return statusObj ? statusObj.label : operateType;
    },


    limitCharacters(str, limit) {
      return str.length > limit ? str.slice(0, limit) + '...'  : str;
    },


    //訂單時間篩選
    handleOrderTime() {
      this.createTime = null;
      if (this.orderTimeValue === '0') {
        this.queryParams.startTime = null;
        this.queryParams.endTime = null;
        this.handleQuery();
      } else if (this.orderTimeValue === '1') {
        this.queryParams.startTime = this.formatDate(new Date(new Date().getTime() - 90 * 24 * 3600 * 1000));
        this.queryParams.endTime = this.formatDate(new Date());
        this.handleQuery();
      } else if (this.orderTimeValue === '2') {
        this.queryParams.startTime = this.formatDate(new Date(new Date().getTime() - 180 * 24 * 3600 * 1000));
        this.queryParams.endTime = this.formatDate(new Date());
        this.handleQuery();
      } else if (this.orderTimeValue === '3') {
        this.queryParams.startTime = this.formatDate(new Date(new Date().getTime() - 365 * 24 * 3600 * 1000));
        this.queryParams.endTime = this.formatDate(new Date());
        this.handleQuery();
      }
    },

    handleOrderState() {
      this.orderStateOption = '0';
      if (this.orderState === 0) {
        this.queryParams.orderStatus = null;
        this.handleQuery();
      } else {
        this.queryParams.orderStatus = this.orderState;
        this.handleQuery();
      }
    },

    handleOrderStateOption() {
      this.orderState = 0;
      if (this.orderStateOption === '0') {
        this.queryParams.orderStatus = null;
        this.handleQuery();
      } else {
        this.queryParams.orderStatus = this.orderStateOption;
        this.handleQuery();
      }
    },

    showHideList() {
      this.hoverTimer = setTimeout(() => {
        this.isHovered = true;
      }, 1000);
    },
    hideHideList() {
      clearTimeout(this.hoverTimer);
      this.isHovered = false;
    },


    /** 對話方塊確認回撥方法 */
    handleConfirm(reason) {
      // console.log('確認理由:', reason);
      if (this.confirmCallback === 1) {
        this.handleDelete(this.operateOrder);
      } else if (this.confirmCallback === 2) {
        this.oneConfirmOrder(this.operateOrder);
      } else if (this.confirmCallback === 3) {
        this.cancelledOrder(this.operateOrder, reason);
      } else {
        this.operateOrder = null;
        this.confirmCallback = null;
        this.removeCartItemId = null;
        this.reasonVisible = false;
      }
      // 透過修改資料來控制元件的隱藏
      this.dialogVisible = false;
    },

    /** 對話方塊取消回撥方法 */
    handleCancel() {
      this.dialogVisible = false;
      this.confirmCallback = null;
      this.removeCartItemId = null;
    },

    // 關閉對話方塊
    closeDialog(visible) {
      this.dialogVisible = visible;
    },


    showProductDetails(productId) {
      //開啟新的標籤頁
      // window.open(`./frontProductDetail?id=${productId}`, '_blank');
      this.$router.push({
        path: './frontProductDetail',
        query: {
          id: productId
        },
      });
    },


    /** 跳轉到管理地址和個人資訊頁面 */
    manageAddress(type) {
      this.$router.push({ path: '/profile', query: { type: type } })
    },

    /** 跳轉到我的關注 */
    toMyCollect() {
      this.$router.push("/myCollect");
    },


  },
};
</script>

<style  scoped lang="scss">
@import "~@a/front/css/bootstrap.min.css";
@import "~@a/front/css/owl.theme.default.min.css";
@import "~@a/front/css/owl.carousel.min.css";
@import "~@a/front/css/remixicon.css";
@import "~@a/front/css/meanmenu.min.css";
@import "~@a/front/css/animate.min.css";
@import "~@a/front/css/style.css";
@import "~@a/front/css/responsive.css";

@import "~@a/front/css/order/index.css";

::v-deep {

  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #ff6a00 !important;
    color: #FFFFFF !important;
  }

  .custom-select .el-input,
  .custom-select .el-input__inner {
    border: none;
    background: #f3f3f3;
    text-align: right;
  }

  .plain-button {
    border: none;
    background-color: transparent;
    color: #333;
    /* 可以根據需要設定文字顏色 */
    padding: 0;
    /* 如果有其他預設 padding，可以去掉 */
  }

  .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color: inherit;
    background-color: inherit;
    border-color: red;
    -webkit-box-shadow: inherit;
    box-shadow: inherit;
  }


  .row-with-divider .col-with-border {
    border-right: 1px solid #ccc;
    padding-right: 10px;
    /* 調整每個 el-col 的右邊距 */
  }


  .search {
    display: inline-block;
    width: 34px;
    height: 27px;
    border: 1px solid #ccc;
  }

  .hi {
    margin-top: 10px;
    /* 設定合適的間距 */
  }

  .hi .inner-content {
    margin-top: 10px;
    /* 設定合適的間距 */
  }

  .hideList {
    display: none;
    /* 初始時隱藏 div */
  }

  li:hover .hideList {
    display: block;
    /* 滑鼠懸停時顯示 div */
  }

  .message {
    display: none;
    /* 初始時隱藏 div */
  }

  li:hover .message {
    display: block;
    /* 滑鼠懸停時顯示 div */
  }

  //留言顯示框
  .showMessage:hover .message {
    display: block;
    position: absolute;
    max-height: 400px;
    padding-left: 5px;
    margin-bottom: 20px;
    line-height: 20px;
    right: 105px;
    z-index: 100;
    text-align: left;
    min-width: 350px;
    background: #F7F7F7;
    box-shadow: -3px -3px 20px 0px #ccc;
    overflow-y: auto;
  }

  .el-radio-button--mini .el-radio-button__inner {
    font-size: 14px !important;
  }

  p {
    font-size: 12px;
    margin-bottom: 15px;
    line-height: 1.8;
  }

  .highlighted {
    color: #ff6a00;
  }

  .el-input--medium .el-input__inner {
    height: 28px;
  }

  .el-input--medium .el-input__inner:focus {
    border-color: #ff6a00;
  }

  .seller-tr {
    color: #ff6a00;
  }

}
</style>
