<template>
  <div class="detail-container" style="margin: 100 100px;">
    <div style="padding-top: 20px;background-color: white;">
      <el-steps v-if="order.status !== 5" :active="formatStepStatus(order.status)" finish-status="success" align-center>
        <el-step title="提交訂單" :description="formatTime(order.createTime)"></el-step>
        <el-step title="商品發貨" :description="formatTime(order.deliveryTime)"></el-step>
        <el-step title="訂單結束" :description="formatTime(order.receiveTime)"></el-step>
      </el-steps>

      <el-steps v-if="order.status === 5" :active="formatStepStatus(order.status)" finish-status="success" align-center>
        <el-step title="提交訂單" :description="formatTime(order.createTime)"></el-step>
        <el-step title="訂單結束" :description="formatTime(order.updateTime)"></el-step>
      </el-steps>

    </div>

    <el-form>
      <el-card shadow="never">
        <div class="operate-container">
          <i class="el-icon-warning color-danger" style="margin-left: 20px"></i>
          <span class="color-danger" style="font-size: 14px;">當前訂單狀態：{{ formatOrderStatus(order.status) }}</span>
          <div class="operate-button-container" v-if="order.userType === 1">
            <div class="operate-button-container" v-show="order.status === 7">
              <el-button @click="confirmBox('您確定要接收該訂單嗎?', '', 0)">確認訂單</el-button>
              <el-button @click="confirmBox('您確定要拒絕該訂單嗎?', '拒絕理由：', 1)">拒絕訂單</el-button>
              <el-button @click="batchConfirmReportAction(1)" v-if="userType !== '04'">確認上報</el-button>
            </div>
            <div class="operate-button-container" v-show="order.status === 1">
              <el-button @click="confirmBox('您確定要該訂單已經發貨了嗎?', '', 2)">訂單發貨</el-button>
            </div>
            <div class="operate-button-container"
              v-show="order.status === 1 && order.isReport === 0 && userType !== '04'">
              <el-button @click="batchConfirmReportAction(2)">上報</el-button>
            </div>
            <div class="operate-button-container" v-show="order.status === 1 || order.status === 2">
              <el-button @click="confirmBox('您確定要取消該訂單嗎?', '取消理由：', 3)">取消發貨</el-button>
            </div>
            <div class="operate-button-container" v-show="order.status === 6">
              <el-button @click="approvalCanceled('您確定要同意使用者取消該訂單嗎?')">審批</el-button>
            </div>
          </div>
          <div class="operate-button-container" v-if="order.userType === 0">
            <div class="operate-button-container" v-show="order.status === 7 || order.status === 1 || order.status === 2">
              <el-button @click="confirmBox('您確定要取消該訂單嗎?', '', 4)">申請取消</el-button>
            </div>
            <div class="operate-button-container" v-show="order.status === 2 && userType !== '04'">
              <el-button @click="confirmBox('確定收貨?', '', 5)">確認收貨</el-button>
            </div>
          </div>
        </div>

        <div>
          <BaseTitle title="基本資訊" m-top="1" class="base-title" style="margin-top: 30px;" />
          <div style="margin-left: 30px;">
            <el-form :inline="true" :model="order" class="demo-form-inline">
              <el-row>
                <el-col :span="8">
                  <el-form-item label="訂單編號：">
                    <div v-html="order.orderProcedureSn"></div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="下單使用者：">
                    <div v-html="order.buyerUserName"></div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="下單時間：">
                    <div v-html="order.createTime"></div>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="訂單型別：">
                    <div v-html="order.orderProcedureType === 1 ? '代發貨訂單' : '普通訂單'"></div>
                  </el-form-item>
                </el-col>
                <el-col :span="8" v-if="order.orderProcedureType === 1">
                  <el-form-item label="代發訂單金額：">
                    <div><span class="color-danger">NT$ {{ order.orderAmountSentBehalf }}</span></div>
                  </el-form-item>
                </el-col>
                <el-col :span="8" v-if="order.status === 4">
                    <el-form-item label="取消方：">
                      <div class="color-danger" v-html="order.cancelledParty === 0 ? '買家' : '賣家'"></div>
                    </el-form-item>
                  </el-col>
              </el-row>
              <el-row v-if="order.status === 4">
                  <el-col :span="16">
                    <el-form-item label="取消理由：">
                      <el-input type="textarea" v-model="order.cancelledReason" style="width: 700px;"
                        :disabled="true" :rows="1"></el-input>
                    </el-form-item>
                  </el-col>
              </el-row>
            </el-form>

          </div>
        </div>

        <div>
          <BaseTitle title="收貨人資訊" m-top="0" class="base-title" />
          <div style="margin-left: 30px;">
            <el-form :inline="true" :model="order" class="demo-form-inline">
              <el-row>
                <el-col :span="8">
                  <el-form-item label="收貨人：">
                    <div v-html="order.receivingName"></div>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="手機號碼：">
                    <div v-html="order.receivingPhone"></div>
                  </el-form-item>
                </el-col>

                <el-col :span="8">
                  <el-form-item label="郵政編碼：">
                    <div v-html="order.receivingPostCode"></div>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item label="收貨地址：">
                    <div v-html="order.receivingFullAddress"></div>
                  </el-form-item>
                </el-col>
                <el-col :span="16">
                  <el-col :span="14">
                    <el-form-item label="留言：" class="message-form-item">
                      <template>
                        <div style="margin-top: 8px;">
                          <el-table :data="messageToSeller" id="custom-table" max-height="120px" :show-header=false
                            :row-style="{ height: '0' }" :cell-style="{ padding: '0' }">
                            <el-table-column prop="messageTime" width="160" :style="{ fontSize: '14px' }">
                            </el-table-column>
                            <el-table-column width="50px">
                              <template slot-scope="scope">
                                <div slot="reference" :class="{ 'seller-tr': scope.row.type === '賣家' }">{{
                                  scope.row.type
                                }}
                                </div>
                              </template>
                            </el-table-column>
                            <el-table-column prop="messageContent" width="200">
                            </el-table-column>
                          </el-table>
                        </div>
                      </template>
                    </el-form-item>
                  </el-col>
                  <el-col :span="2"
                    v-if="![3, 4, 5].includes(order.status) && (order.userType === 1 || order.userType === 0)"
                    style="text-align: left;">
                    <el-button type="primary" @click="SellerMessageToSeller">追加留言</el-button>
                  </el-col>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>

        <div>
          <BaseTitle title="商品資訊" m-top="0" style="margin-bottom:0px;" class="base-title" />

        </div>
        <div style="float: right;margin-bottom: 10px; margin-right: 5px;">
          <el-button type="text" v-on:click.stop.prevent="allPurchases" style="margin-right: 10px;"
            v-if="isPurchasingOrderProcedureId">
            <span class="ti-shopping-cart m-r-5" title="全部採購"></span>
          </el-button>
          合計：<span class="color-danger">NT$ {{ order.totalPrice }}</span>
        </div>
        <el-table ref="orderItemTable" :data="order.xtOrderItemVoList" style="width: 100%;margin-top: 0px" border
          :header-cell-style="{ fontSize: '14px' }">
          <el-table-column label="商品圖片" width="120" align="center">
            <template slot-scope="scope">
              <img :src="scope.row.productSkuPicUrl" style="height: 80px">
            </template>
          </el-table-column>
          <el-table-column label="商品名稱" align="center" min-width="130">
            <template slot-scope="scope">
              <p>{{ scope.row.productName }}</p>
            </template>
          </el-table-column>
          <el-table-column label="價格/貨號" width="250" align="center">
            <template slot-scope="scope">
              <p>NT$ {{ scope.row.modelDiscountedPrice }}</p>
            </template>
          </el-table-column>
          <el-table-column label="屬性" width="140" align="center">
            <template slot-scope="scope">
              {{ scope.row.productSkuName }}
            </template>
          </el-table-column>
          <el-table-column label="數量" width="110" align="center">
            <template slot-scope="scope">
              {{ scope.row.modelQuantityPurchased }}
            </template>
          </el-table-column>
          <el-table-column label="小計" width="120" align="center">
            <template slot-scope="scope">
              <span class="color-danger">NT$ {{
                scope.row.modelDiscountedPrice * scope.row.modelQuantityPurchased
              }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="120" align="center" v-if="order.isSupplierProduct">
            <template slot-scope="scope">

              <el-button type="text"
                v-if="scope.row.isSupplierProduct && order.userType === 1 && scope.row.purchasingOrderProcedureId === ''"
                v-on:click.stop.prevent="purchases(scope.row)">
                <span class="ti-shopping-cart m-r-5" title="採購"></span>
              </el-button>

            </template>
          </el-table-column>
        </el-table>

        <div v-if="order.sourceOrders && order.sourceOrders.length > 0">
          <svg-icon icon-class="marker" style="color: #606266"></svg-icon>
          <BaseTitle title="來源訂單" m-top="0" class="base-title" />
        </div>
        <el-table ref="orderItemTable2" v-if="order.sourceOrders && order.sourceOrders.length > 0"
          :data="order.sourceOrders" style="width: 100%;margin-top: 0px" border :header-cell-style="{ fontSize: '14px' }">
          <el-table-column label="訂單編號" width="180" align="center">
            <template slot-scope="scope">
              <a @click="toOrderDetail(scope.row)">{{ scope.row.orderProcedureSn }}</a>
            </template>
          </el-table-column>
          <el-table-column label="收貨資訊" align="center" min-width="150">
            <template slot-scope="scope">
              <p>{{ scope.row.buyerUserFullAddress }} ({{ scope.row.buyerUserName }} 收)</p>
            </template>
          </el-table-column>
          <el-table-column label="訂單總價" width="150" align="center">
            <template slot-scope="scope">
              <span style="color: red;">NT$ {{ scope.row.totalPrice }}</span>
            </template>
          </el-table-column>
          <el-table-column label="訂單狀態" width="120" align="center">
            <template slot-scope="scope">
              {{ formatOrderStatus(scope.row.status) }}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="120" align="center">
            <template slot-scope="scope">

              <el-button type="text" v-show="scope.row.status == 1" v-on:click.stop.prevent="orderShipped(scope.row)">
                <span class="ti-truck m-r-5" title="訂單發貨"></span>
              </el-button>

              <el-button type="text" v-if="![3, 4, 6].includes(scope.row.status)"
                v-on:click.stop.prevent="cancelSourceOrder('您確定要取消來源訂單嗎?', '取消理由：', scope.row.orderId, scope.row.id)">
                <span class="ti-close m-r-5" title="取消發貨"></span>
              </el-button>

            </template>
          </el-table-column>
        </el-table>

        <div>
          <svg-icon icon-class="marker" style="color: #606266"></svg-icon>
          <!-- <span class="font-small">操作資訊</span> -->
          <BaseTitle title="操作資訊" m-top="0" class="base-title" />
        </div>
        <template>
          <div class="block">
            <el-timeline :reverse="reverse">
              <el-timeline-item v-for="(orderOperateHistory, index) in order.xtOrderOperateHistoryList" :key="index"
                :timestamp="orderOperateHistory.createTime">
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
        </template>

      </el-card>
    </el-form>

    <!-- 審批對話方塊 -->
    <rejectConfirm :title="title" :applicationReason="applicationReason" :visible.sync="confirmVisible"
      :onConfirm="handleConfirmOrReject" @cancel="handleCancel" />

    <!-- 確認和上報對話方塊，批次 -->
    <batchConfirmReport :title="batchConfirmReportTitle" :batchFindSkuPriceParams="batchFindSkuPriceParams"
      :userAddressList="userAddressList" :visible.sync="batchDialogFormVisible"
      :shippingAddress="oldAddress.buyerUserAddressId" :oldAddress="oldAddress" :oldMessageToSeller="oldMessageToSeller"
      :type="1" :on-confirm="batchConfirmReportCallBack" :on-cancel="batchHandleDialogCancel"></batchConfirmReport>

  </div>
</template>

<script>

import {
  getOrderDetails,
  rejectedOrder,
  superiorCancelOrder,
  confirmOrder,
  processedOrder,
  applyCancelledOrder,
  approvalCancellation,
  confirmReceiptOrder,
  addMessage,
  batchFindSkuPriceBySkuId, batchConfirmAndescalationOrder, batchEscalationOrder
} from "@/api/order/order";
import { findSkuPriceBySkuId } from "@/api/product/product.js";
import { listAddress } from "@/api/system/address.js";
import { mapActions, mapState } from "vuex";
import { formatDate } from '@/utils/date';
import rejectConfirm from '../components/rejectConfirm';
import confirmReport from '../components/confirmReport';
import batchConfirmReport from "@v/order/components/batchConfirmReport.vue";

export default {
  name: 'orderDetail',
  components: { batchConfirmReport, rejectConfirm, confirmReport },
  data() {
    return {
      userType: null,
      id: null,
      orderProcedureId: null,
      orderProcedureSn: null,
      order: {},
      isPurchasingOrderProcedureId: false,
      reverse: false,
      orderOptionParam: {
        orderId: this.id,
        orderProcedureId: this.orderProcedureId,
        cancelledReason: '',
        cancelType: null
      },
      //留言資訊
      messageToSeller: [],
      //留言表格行高
      rowHeight: 40,

      //審批使用者申請取消對話方塊變數
      title: '',
      confirmVisible: false,
      //審批使用者申請取消理由
      applicationReason: '',


      //確認和上報對話方塊資料（批次）
      userAddressList: null,
      oldMessageToSeller: null,
      oldAddress: {},
      batchConfirmReportTitle: '批次確認和上報',
      batchDialogFormVisible: false,
      batchFindSkuPriceParams: null,
      batchConfirmReportCallBack: null, //確認回撥函式
    }
  },

  async created() {
    this.userType = this.$store.state.user.userType;
    await this.getOrderStates(this);
    await this.getOrderOperateTypeList(this);
    //訂單id
    this.id = this.list = this.$route.query.id;
    this.orderProcedureId = this.list = this.$route.query.orderProcedureId;
    this.orderProcedureSn = this.list = this.$route.query.orderProcedureSn;
    await this.fetchOrderDetails();
  },


  async beforeRouteUpdate(to, from, next) {
    // 在路由變化時重新獲取資料
    this.id = to.query.id;
    this.orderProcedureId = to.query.orderProcedureId;
    this.orderProcedureSn = to.query.orderProcedureSn;
    await this.fetchOrderDetails();
    // 呼叫 next() 表示繼續導航
    next();
  },

  methods: {
    ...mapActions({
      getOrderStates: "dict/getOrderStates",
      getOrderOperateTypeList: "dict/getOrderOperateTypeList",
    }),

    async fetchOrderDetails() {
      try {
        this.isPurchasingOrderProcedureId = false;
        const response = await getOrderDetails(this.id, this.orderProcedureId);
        this.order = response.data;
        //判斷商品的this.order.xtOrderItemVoList的purchasingOrderProcedureId是否有都有值
        this.order.xtOrderItemVoList.forEach(item => {
          if (item.isSupplierProduct && this.order.userType === 1 && item.purchasingOrderProcedureId === '') {
            this.isPurchasingOrderProcedureId = true;
          }
        });

        // 更新舊地址
        this.oldAddress.buyerUserAddressId = this.order.buyerUserAddressId;
        this.oldAddress.receivingName = this.order.receivingName;
        this.oldAddress.receivingPhone = this.order.receivingPhone;
        this.oldAddress.receivingPostCode = this.order.receivingPostCode;
        this.oldAddress.receivingFullAddress = this.order.receivingFullAddress;

        // 留言資訊 this.order.messageToSeller是一個json陣列字元串，需要轉換成json物件
        this.messageToSeller = JSON.parse(this.order.messageToSeller);

        // 如果有留言，更新舊留言資訊
        if (this.messageToSeller.length > 0) {
          this.oldMessageToSeller = this.messageToSeller[0].messageContent;
        }
      } catch (error) {
        // 處理獲取訂單詳情失敗的情況
        console.error('Failed to fetch order details:', error);
      }
    },

    formatTime(time) {
      if (time == null || time === '') {
        return '';
      }
      let date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    },

    formatStepStatus(value) {
      if (value === 0) {
        //待發貨
        return 1;
      } else if (value === 2) {
        //已發貨
        return 2;
      } else if (value === 3) {
        //已完成，結束
        return 3;
      } else if (value === 5) {
        //已拒絕，流程結束
        return 2;
      } else if (value === 4) {
        //已取消，結束
        return 3;
      } else {
        //待付款、已關閉、無限訂單
        return 1;
      }
    },

    //轉換訂單狀態
    formatOrderStatus(orderStatus) {
      const displayStatus = this.getOrderStatusLabel(orderStatus);
      return displayStatus;
    },
    getOrderStatusLabel(orderStatus) {
      const statusObj = this.orderStates.find((item) => item.value === orderStatus);
      return statusObj ? statusObj.label : orderStatus;
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

    //拒絕訂單
    rejected(rejectedReason) {
      const orderOptionParams = [];

      const orderOptionParam = {
        orderId: this.id,
        orderProcedureId: this.orderProcedureId,
        cancelledReason: rejectedReason
      };
      orderOptionParams.push(orderOptionParam);
      rejectedOrder(orderOptionParams)
        .then(response => {
          if (response.code === 200) {
            //重新整理頁面
            this.id = this.list = this.$route.query.id;
            this.orderProcedureId = this.list = this.$route.query.orderProcedureId;
            this.fetchOrderDetails();

            this.$message({
              type: 'success',
              message: '拒絕訂單成功',
            });
          } else {
            this.$message({
              type: 'error',
              message: response.msg,
            });
          }
        });
    },

    //取消訂單
    superiorCancel(rejectedReason) {
      const orderOptionParams = [];

      const orderOptionParam = {
        orderId: this.id,
        orderProcedureId: this.orderProcedureId,
        cancelledReason: rejectedReason
      };
      orderOptionParams.push(orderOptionParam);
      superiorCancelOrder(orderOptionParams)
        .then(response => {
          if (response.code === 200) {
            //重新整理頁面
            this.id = this.list = this.$route.query.id;
            this.orderProcedureId = this.list = this.$route.query.orderProcedureId;
            this.fetchOrderDetails();

            this.$message({
              type: 'success',
              message: '取消訂單成功',
            });
          } else {
            this.$message({
              type: 'error',
              message: response.msg,
            });
          }
        });
    },

    //取消來源訂單
    cancelSourceOrder(title, prompt, orderId, orderProcedureId) {
      this.$prompt(prompt, title, {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        const orderOptionParams = [];
        const orderOptionParam = {
          orderId: orderId,
          orderProcedureId: orderProcedureId,
          cancelledReason: value
        };
        orderOptionParams.push(orderOptionParam);
        superiorCancelOrder(orderOptionParams)
          .then(response => {
            if (response.code === 200) {
              //重新整理頁面
              this.id = this.list = this.$route.query.id;
              this.orderProcedureId = this.list = this.$route.query.orderProcedureId;
              this.fetchOrderDetails();

              this.$message({
                type: 'success',
                message: '取消訂單成功',
              });
            } else {
              this.$message({
                type: 'error',
                message: response.msg,
              });
            }
          });
      }).catch(reason => {
        // 判斷使用者是取消了操作還是觸發了其他錯誤
        if (reason !== 'cancel') {
          this.$message({
            type: 'error',
            message: "操作失敗",
          });
        }
      });
    },

    //確認接收訂單
    confirmAction() {
      const orderOptionParams = [];
      const orderOptionParam = {
        orderId: this.id,
        orderProcedureId: this.orderProcedureId
      };
      orderOptionParams.push(orderOptionParam);
      confirmOrder(orderOptionParams)
        .then(response => {
          if (response.code === 200) {
            this.id = this.list = this.$route.query.id;
            this.orderProcedureId = this.list = this.$route.query.orderProcedureId;
            this.fetchOrderDetails();
            this.$message({
              type: 'success',
              message: '已確認接受訂單',
            });
          } else {
            this.$message({
              type: 'error',
              message: response.msg,
            });
          }
        })
        .catch(error => {
          // 處理介面請求異常的情況
          this.$message({
            type: 'error',
            message: '操作異常',
          });
        });
    },

    //訂單發貨
    processed() {
      const orderOptionParams = [];
      const orderOptionParam = {
        orderId: this.id,
        orderProcedureId: this.orderProcedureId
      };
      orderOptionParams.push(orderOptionParam);
      processedOrder(orderOptionParams)
        .then(response => {
          if (response.code === 200) {
            this.id = this.list = this.$route.query.id;
            this.orderProcedureId = this.list = this.$route.query.orderProcedureId;
            this.fetchOrderDetails();

            this.$message({
              type: 'success',
              message: '訂單發貨成功',
            });
          } else {
            this.$message({
              type: 'error',
              message: response.msg,
            });
          }
        })
        .catch(error => {
          // 處理介面請求異常的情況
          this.$message({
            type: 'error',
            message: '操作異常',
          });
        });
    },

    cancelledOrder(rejectedReason) {
      const orderOptionParams = [];
      const orderOptionParam = {
        orderId: this.id,
        orderProcedureId: this.orderProcedureId,
        cancelledReason: rejectedReason
      };
      orderOptionParams.push(orderOptionParam);
      applyCancelledOrder(orderOptionParams)
        .then(response => {
          if (response.code === 200) {
            this.id = this.list = this.$route.query.id;
            this.orderProcedureId = this.list = this.$route.query.orderProcedureId;
            this.fetchOrderDetails();

            this.$message({
              type: 'success',
              message: '申請取消訂單成功',
            });
          } else {
            this.$message({
              type: 'error',
              message: response.msg,
            });
          }
        })
        .catch(error => {
          // 處理介面請求異常的情況
          this.$message({
            type: 'error',
            message: '操作異常',
          });
        });
    },

    approvalCanceledAction(cancelType) {
      const orderOptionParams = [];
      const orderOptionParam = {
        orderId: this.id,
        orderProcedureId: this.orderProcedureId,
        cancelType: cancelType
      };
      orderOptionParams.push(orderOptionParam);
      approvalCancellation(orderOptionParams)
        .then(response => {
          if (response.code === 200) {
            this.id = this.list = this.$route.query.id;
            this.orderProcedureId = this.list = this.$route.query.orderProcedureId;
            this.fetchOrderDetails();

            this.$message({
              type: 'success',
              message: '操作成功',
            });
          } else {
            this.$message({
              type: 'error',
              message: response.msg,
            });
          }
        })
        .catch(error => {
          // 處理介面請求異常的情況
          this.$message({
            type: 'error',
            message: '操作異常',
          });
        });
    },

    //買家確認收貨
    confirmReceipt() {
      const orderOptionParams = [];

      const orderOptionParam = {
        orderId: this.id,
        orderProcedureId: this.orderProcedureId
      };
      orderOptionParams.push(orderOptionParam);
      confirmReceiptOrder(orderOptionParams)
        .then(response => {
          if (response.code === 200) {
            this.id = this.list = this.$route.query.id;
            this.orderProcedureId = this.list = this.$route.query.orderProcedureId;
            this.fetchOrderDetails();
            this.$message({
              type: 'success',
              message: '確收收貨成功',
            });
          } else {
            this.$message({
              type: 'error',
              message: response.msg,
            });
          }
        })
        .catch(error => {
          // 處理介面請求異常的情況
          this.$message({
            type: 'error',
            message: '操作異常',
          });
        });
    },

    //賣家留言,做成非同步
    async SellerMessageToSeller() {
      try {
        const { value } = await this.$prompt('請輸入留言內容', '追加留言', {
          confirmButtonText: '確定',
          cancelButtonText: '取消',
          inputPattern: /\S/,
          inputErrorMessage: '留言內容不能為空'
        });

        const message = {
          orderId: this.id,
          orderProcedureId: this.orderProcedureId,
          message: value
        };

        const response = await addMessage(message);

        if (response.code === 200) {
          this.id = this.list = this.$route.query.id;
          this.orderProcedureId = this.list = this.$route.query.orderProcedureId;
          this.fetchOrderDetails();

          this.$message({
            type: 'success',
            message: '留言成功',
          });
        } else {
          this.$message({
            type: 'error',
            message: response.msg,
          });
        }
      } catch (error) {
        if (error !== 'cancel') {
          this.$message({
            type: 'error',
            message: "操作失敗",
          });
        }
      }
    },


    /**
     * 操作確認框
     * @param {*} optineType  0：確認訂單，1：拒絕訂單，2：訂單發貨，3：取消訂單
     */
    confirmBox(title, prompt, optineType) {
      // 對於optineType為0和2，使用確認框而不是提示框
      if (optineType === 0 || optineType === 2 || optineType === 5) {
        this.$confirm(prompt, title, {
          confirmButtonText: '確定',
          cancelButtonText: '取消',
          type: 'warning' // 根據需要修改提示框型別
        }).then(() => {
          // 根據optineType的值選擇不同的處理函式
          switch (optineType) {
            case 0:
              // 確認訂單
              this.confirmAction();
              break;
            case 2:
              // 訂單發貨
              this.processed();
              break;
            default:
              break;
            case 5:
              // 買家確認收貨
              this.confirmReceipt();
              break;
          }
        }).catch(reason => {
          // 判斷使用者是取消了操作還是觸發了其他錯誤
          if (reason !== 'cancel') {
            this.$message({
              type: 'error',
              message: "操作失敗",
            });
          }
        });
      } else {
        // 對於其他optineType，使用帶有輸入框的提示框
        this.$prompt(prompt, title, {
          confirmButtonText: '確定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          // 根據optineType的值選擇不同的處理函式
          switch (optineType) {
            case 1:
              // 賣家拒絕訂單
              this.rejected(value);
              break;
            case 3:
              // 賣家取消訂單
              this.superiorCancel(value);
              break;
            case 4:
              // 買家申請取消
              this.cancelledOrder(value);
              break;
            default:
              break;
          }
        }).catch(reason => {
          // 判斷使用者是取消了操作還是觸發了其他錯誤
          if (reason !== 'cancel') {
            this.$message({
              type: 'error',
              message: "操作失敗",
            });
          }
        });
      }
    },


    //賣家審批使用者申請取消操作
    approvalCanceled(tilte) {
      this.title = tilte;
      this.applicationReason = this.order.cancelledReason;
      this.confirmVisible = true;
    },

    //審批使用者取消元件，同意或拒絕回撥函式
    handleConfirmOrReject(action) {
      if (action === 1) {
        //同意
        this.approvalCanceledAction(1);
      } else if (action === 0) {
        //拒絕
        this.approvalCanceledAction(0);
      }
      this.confirmVisible = false;
    },

    //審批使用者取消，取消操作回撥函式
    handleCancel() {
      this.confirmVisible = false;
    },

    //訂單發貨
    orderShipped(row) {
      const orderOptionParams = [];

      const orderOptionParam = {
        orderId: row.orderId,
        orderProcedureId: row.id
      };

      orderOptionParams.push(orderOptionParam);
      this.$modal.confirm('是否確認發貨訂單編號為"' + row.orderProcedureSn + '"的訂單？')
        .then(() => {
          return processedOrder(orderOptionParams);
        })
        .then(response => {
          if (response.code === 200) {
            this.id = this.list = this.$route.query.id;
            this.orderProcedureId = this.list = this.$route.query.orderProcedureId;
            getOrderDetails(this.id, this.orderProcedureId).then(response => {
              this.order = response.data;
            });
            this.$modal.msgSuccess("發貨成功");
          } else {
            this.$modal.msgError("發貨失敗，介面返回錯誤：" + response.msg);
          }
        })
        .catch(error => {
          if (this.$modal.isCancel(error)) {
            return;
          }
          this.$modal.msgError("發貨失敗，發生錯誤，請重試");
        });
    },

    toOrderDetail(order) {
      this.$router.replace({ path: './orderDetail', query: { id: order.orderId, orderProcedureId: order.id } })
    },


    //確認和上報訂單確認邏輯
    batchHandleDialogConfirm(formData) {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });

      batchConfirmAndescalationOrder(formData)
        .then(response => {
          if (response.code === 200) {
            //重新整理頁面
            this.id = this.list = this.$route.query.id;
            this.orderProcedureId = this.list = this.$route.query.orderProcedureId;
            this.fetchOrderDetails();

            this.$message({
              type: 'success',
              message: '確認和上報訂單成功',
            });
          } else {
            this.$message({
              type: 'error',
              message: response.msg,
            });
          }
        })
        .catch(error => {
          // 處理介面請求異常的情況
          this.$message({
            type: 'error',
            message: '確認和上報訂單失敗',
          });
        });
      this.batchDialogFormVisible = false;
      loading.close();
    },

    //批次上報訂單邏輯
    handleBatchEscalation(formData) {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });

      batchEscalationOrder(formData)
        .then(response => {
          if (response.code === 200) {
            //重新整理頁面
            this.id = this.list = this.$route.query.id;
            this.orderProcedureId = this.list = this.$route.query.orderProcedureId;
            this.fetchOrderDetails();
            this.$message({
              type: 'success',
              message: '批次上報訂單成功',
            });
          } else {
            this.$message({
              type: 'error',
              message: response.msg,
            });
          }
        })
        .catch(error => {
          // 處理介面請求異常的情況
          this.$message({
            type: 'error',
            message: '批次上報訂單失敗',
          });
        });
      this.batchDialogFormVisible = false,
        loading.close();
    },


    //確認和上報訂單取消邏輯
    batchHandleDialogCancel() {
      this.userAddressList = null;
      this.batchDialogFormVisible = false;
    },

    /**
     * 批次確認和上報對話方塊和上報訂單對話方塊
     * type: 1 批次確認和上報 2 上報訂單
     */
    async batchConfirmReportAction(type) {

      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });

      const orderOptionParams = [];
      orderOptionParams.push({
        orderId: this.id,
        orderProcedureId: this.orderProcedureId,
        orderProcedureSn: this.orderProcedureSn,
        xtOrderItemVoList: this.order.xtOrderItemVoList,
      });
      if (orderOptionParams.length > 0) {
        try {
          // 等待 findSkuPriceBySkuId 請求完成
          const result = await batchFindSkuPriceBySkuId(orderOptionParams);
          if (result.code === 200) {
            this.batchFindSkuPriceParams = result.data;
            const listAddressResult = await listAddress();
            if (listAddressResult.code === 200) {
              this.userAddressList = listAddressResult.rows;
              loading.close();
              if (type === 1) {
                //批次確認和上報
                this.batchConfirmReportCallBack = this.batchHandleDialogConfirm;
              } else if (type === 2) {
                //批次上報
                this.batchConfirmReportCallBack = this.handleBatchEscalation;
                this.batchConfirmReportTitle = '批次上報';
              }
              this.batchDialogFormVisible = true;
            }
          } else {
            this.$message.error(`獲取訂單價格失敗`);
            loading.close();
          }

        } catch (error) {
          loading.close();
        }
      } else {
        this.$message.info(`所選訂單中沒有符合條件的項，無法確認和上報`);
        loading.close();
      }
    },

    async handleOrderAction(actionType, items) {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });

      const orderOptionParams = [];
      const xtOrderItemVoList = [];

      if (actionType === 'allPurchases') {
        this.order.xtOrderItemVoList.forEach(item => {
          if (item.isSupplierProduct && this.order.userType === 1 && item.purchasingOrderProcedureId === '') {
            xtOrderItemVoList.push(item);
          }
        });
      } else if (actionType === 'purchases' && items) {
        xtOrderItemVoList.push(items);
      } else {
        xtOrderItemVoList.push(...this.order.xtOrderItemVoList);
      }

      orderOptionParams.push({
        orderId: this.id,
        orderProcedureId: this.orderProcedureId,
        orderProcedureSn: this.orderProcedureSn,
        xtOrderItemVoList: xtOrderItemVoList,
      });

      if (orderOptionParams.length > 0) {
        try {
          const result = await batchFindSkuPriceBySkuId(orderOptionParams);
          if (result.code === 200) {
            this.batchFindSkuPriceParams = result.data;
            const listAddressResult = await listAddress();
            if (listAddressResult.code === 200) {
              this.userAddressList = listAddressResult.rows;
              loading.close();
              // Determine which callback to use based on actionType
              if (actionType === 'batchConfirmReport') {
                this.batchConfirmReportCallBack = this.batchHandleDialogConfirm;
              } else if (actionType === 'allPurchases' || actionType === 'purchases') {
                this.batchConfirmReportCallBack = this.handleBatchEscalation;
                this.batchConfirmReportTitle = actionType === 'allPurchases' ? '全部採購' : '採購';
              }
              this.batchDialogFormVisible = true;
            }
          } else {
            this.$message.error(`獲取訂單價格失敗`);
            loading.close();
          }
        } catch (error) {
          loading.close();
        }
      } else {
        this.$message.info(`所選訂單中沒有符合條件的項，無法確認和上報`);
        loading.close();
      }
    },

    /**
     * 全部採購
     */
    async allPurchases() {
      await this.handleOrderAction('allPurchases');
    },

    /**
     * 單個商品採購
     */
    async purchases(orderItem) {
      await this.handleOrderAction('purchases', orderItem);
    }

  },

  computed: {
    ...mapState({
      orderStates: (state) => state.dict.orderStates,
      orderOperateTypeList: (state) => state.dict.orderOperateTypeList
    })
  }

}
</script>
<style scoped lang="scss">
@import "~@a/backend/css/style.css";
@import "~@a/backend/css/themify-icons.css";

::v-deep {
  .detail-container {
    width: 80%;
    padding: 20px 20px 20px 20px;
    margin: 20px auto;
  }

  .operate-container {
    background: #F7F7F7;
    height: 70px;
    margin: -20px -20px 0;
    line-height: 70px;
  }

  .operate-button-container {
    float: right;
    margin-right: 20px
  }

  .table-layout {
    margin-top: 20px;
    border-left: 1px solid #DCDFE6;
    border-top: 1px solid #DCDFE6;
  }

  .table-cell {
    height: 60px;
    line-height: 40px;
    border-right: 1px solid #DCDFE6;
    border-bottom: 1px solid #DCDFE6;
    padding: 10px;
    font-size: 14px;
    color: #606266;
    text-align: center;
    overflow: hidden;
  }

  .table-cell-title {
    border-right: 1px solid #DCDFE6;
    border-bottom: 1px solid #DCDFE6;
    padding: 10px;
    background: #F2F6FC;
    text-align: center;
    font-size: 14px;
    color: #303133;
  }

  .base-title {
    color: #ff6a00;
  }

  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  .el-table tr {
    background-color: #F7F7F7;
  }

  .seller-tr {
    color: #ff6a00;
  }

  .tag-no-border {
    border: none;
  }

  .text-danger,
  .color-danger {
    color: #ff6a00;
  }

}
</style>


