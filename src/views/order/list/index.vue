<template>
  <div class="app-container">
    <vxe-form :data="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px"
              @reset="resetQuery">
      <vxe-form-item field="processStatus" title="處理狀態" span="24">
        <el-radio-group v-model="orderState" size="mini" @change="handleQuery()">
          <template v-for="oraderTab in orderTabList">
            <template v-if="oraderTab.value !== 3 || (oraderTab.value === 3 && isAdmin)">
              <el-radio-button :key="oraderTab.value" :label="oraderTab.value">
                {{ oraderTab.label }}
              </el-radio-button>
            </template>
          </template>
        </el-radio-group>
      </vxe-form-item>

      <!-- 我的訂單列表狀態篩選 -->
      <vxe-form-item v-show="orderState !== 1" field="processStatus" title="訂單狀態" span="24">
        <el-radio-group v-model="queryParams.orderStatus" size="mini" @change="handleQuery()">
          <el-radio-button v-for="orderState in orderStates" :key="orderState.value" :label="orderState.value">{{
              orderState.label
            }}
          </el-radio-button>
        </el-radio-group>
      </vxe-form-item>

      <!-- 我的待辦列表狀態篩選 -->
      <vxe-form-item v-show="orderState === 1" field="processStatus" title="訂單狀態" span="24">
        <el-radio-group v-model="queryParams.pendingStatus" size="mini" @change="handleQuery()">
          <el-radio-button v-for="orderStateOption in orderStateOptions" :key="orderStateOption.value"
                           :label="orderStateOption.value">
            {{ orderStateOption.label }}
          </el-radio-button>
        </el-radio-group>
      </vxe-form-item>

      <vxe-form-item field="queryOrderSns" title="訂單編號" span="12">
        <el-input v-model="queryOrderSns" ref="orderSn" placeholder="請輸入訂單編號" size="mini" type="textarea"
                  :autosize="{ minRows: 1, maxRows: 10 }" clearable></el-input>
      </vxe-form-item>

      <vxe-form-item field="buyerUserName" title="買家姓名" span="12">
        <el-input v-model="queryParams.buyerUserName" ref="buyerUserName" placeholder="請輸入買家姓名" size="mini"
                  :autosize="{ minRows: 1, maxRows: 10 }" clearable></el-input>
      </vxe-form-item>

      <vxe-form-item field="buyerUserPhone" title="買家手機號" span="12">
        <el-input v-model="queryParams.buyerUserPhone" ref="buyerUserPhone" placeholder="請輸入買家手機號" size="mini"
                  :autosize="{ minRows: 1, maxRows: 10 }" clearable></el-input>
      </vxe-form-item>

      <vxe-form-item field="shopName" title="店鋪名稱" span="12">
        <el-input v-model="queryParams.shopName" ref="shopName" placeholder="請輸入店鋪名稱" size="mini"
                  :autosize="{ minRows: 1, maxRows: 10 }" clearable></el-input>
      </vxe-form-item>

      <vxe-form-item field="lineType" title="Line狀態" span="12">
        <el-select v-model="queryParams.lineType" placeholder="請選擇Line狀態" clearable size="mini">
          <el-option label="未新增" :value="0"></el-option>
          <el-option label="加了未透過" :value="1"></el-option>
          <el-option label="已新增" :value="2"></el-option>
          <el-option label="搜尋不到賬號" :value="3"></el-option>
        </el-select>
      </vxe-form-item>

      <vxe-form-item field="createTime" title="訂單時間" span="12">
        <el-date-picker v-model="createTime" size="mini" type="datetimerange" unlink-panels range-separator="至"
                        start-placeholder="開始日期" end-placeholder="結束日期" :picker-options="pickerOptions"
                        @change="handleTimeChange"></el-date-picker>
      </vxe-form-item>

      <vxe-form-item span="24" align="right">
        <vxe-button style="background-color: #f96332; color: #fff; border-color:#f96332" content="查詢" type="primary"
                    nativeType="submit" @click="handleQuery"></vxe-button>
        <vxe-button content="重置" nativeType="reset" @click="resetQuery"></vxe-button>
        <vxe-button v-if="orderState === 0" style="background-color:red; color: #fff; border-color:red" content="刪除"
                    type="danger" nativeType="delete" @click="handleBatchDelete"></vxe-button>
        <vxe-button style="background-color: #28a745; color: #fff; border-color:#28a745" content="匯出Excel" type="primary"
                    @click="exportToExcel"></vxe-button>
      </vxe-form-item>

    </vxe-form>

    <vxe-toolbar print custom size="mini">
      <template v-slot:buttons>
        <el-button class="dt-button" size="mini" @click.stop.prevent="batchConfirmAction" v-if="orderState !== 0">
          <i class="ti-hand-point-up m-r-5"></i>確認訂單
        </el-button>

        <el-button class="dt-button" size="mini" @click.stop.prevent="batchConfirmReportAction(2)"
                   v-if="orderState !== 0 && userType !== '04'">
          <i class="ti-light-bulb m-r-5"></i>上報訂單
        </el-button>

        <el-button class="dt-button" size="mini" @click.stop.prevent="batchRejected" v-if="orderState !== 0">
          <i class="ti-na m-r-5"></i>拒絕訂單
        </el-button>

        <el-button class="dt-button" size="mini" @click.stop.prevent="batchConfirmReportAction(1)"
                   v-if="orderState !== 0 && userType !== '04'">
          <i class="ti-magnet m-r-5"></i>確認和上報
        </el-button>


        <el-button class="dt-button" size="mini" @click.stop.prevent="batchBuyerCancel" v-if="orderState === 0">
          <i class="ti-close m-r-5"></i>申請取消
        </el-button>

        <el-button class="dt-button" size="mini" @click.stop.prevent="batchsuperiorCancel" v-if="orderState !== 0">
          <i class="ti-close m-r-5"></i>取消發貨
        </el-button>

        <el-button class="dt-button" size="mini" @click.stop.prevent="batchProcessed" v-if="orderState !== 0">
          <i class="ti-truck m-r-5"></i>訂單發貨
        </el-button>
        <el-button class="dt-button" size="mini" @click.stop.prevent="batchConfirmReceipt" v-if="orderState === 0 || orderState === 4">
          <i class="ti-check m-r-5"></i>確認收貨
        </el-button>

        <el-button class="dt-button" size="mini" @click.stop.prevent="batchApprovalCanceled" v-if="orderState !== 0">
          <i class="ti-control-backward m-r-5"></i>審批取消
        </el-button>


        <el-button class="dt-button" size="mini" @click.stop.prevent="batchSendSms()" v-if="orderState === 4">
          <i class="ti-email m-r-5"></i>通知簽收
        </el-button>

        <!-- <el-button
          class="dt-button"
          size="mini"
          @click.stop.prevent="changeOrderNohandleByUser"
        >
          <i class="ti-trash m-r-5"></i>刪除訂單
        </el-button> -->

      </template>
    </vxe-toolbar>

    <vxe-table size="mini" border :scroll-y="{ gt: -1 }" keep-source highlight-hover-row ref="orderTableData"
               :align="allAlign" :loading="loading" :data="orderList" :checkbox-config="{ highlight: true }">
      <vxe-table-column type="checkbox" fixed="left" width="55" align="center"></vxe-table-column>

      <vxe-table-column title="訂單詳情" min-width="115">
        <template v-slot:header>
          <div class="header-cell-f">
            <div class="header-cell-s header-cell-s-left">訂單詳情</div>
            <div class="header-cell-s">
              <!-- <div class="header-cell-t border-bottom">訂單ID</div> -->
              <div class="header-cell-t border-bottom">訂單編號</div>
              <div class="header-cell-t border-bottom">總價</div>
            </div>
          </div>
        </template>
        <template v-slot="{ row }">
          <div align="left" style="margin-left: 5px;">
            <!-- <div>{{ row.orderId }}</div> -->
            <div>{{ row.orderProcedureSn }}</div>
            <div><span style="color: red;">NT$ {{ row.totalAmount }}</span></div>
          </div>
        </template>
      </vxe-table-column>

      <vxe-table-column type="html" min-width="400">
        <template v-slot:header>
          <div class="header-cell-f">
            <div class="header-cell-s header-cell-s-left">商品詳情</div>
            <div class="header-cell-s">
              <div class="header-cell-t border-bottom">名稱</div>
              <div class="header-cell-t">規格</div>
            </div>
          </div>
        </template>
        <template v-slot="{ row }">
          <el-row v-for="(xtOrderItem, index) in row.xtOrderItemVoList" :key="index" :class="row.xtOrderItemVoList.length - 1 > index ? 'border-bottom' : ''
            ">
            <el-tooltip placement="top-start" popper-class="atooltip">
              <div slot="content">
                商品名稱：{{ xtOrderItem.productName }}
                <br/>
                商品規格：{{
                  xtOrderItem.productSkuId > 0
                    ? xtOrderItem.productSkuName
                    : "無規格"
                }}
                <br/>
                商品數量：{{ xtOrderItem.modelQuantityPurchased }}
                <br/>
                商品單價：NT$ {{ xtOrderItem.modelDiscountedPrice }}
              </div>
              <div>
                <el-col :span="6">
                  <img height="70px" width="70px" style="margin: 2px 0" :src="xtOrderItem.productSkuPicUrl"/>
                </el-col>
                <el-col :span="14" style="text-align: left">
                  <a class="item-name" v-on:click="openItem(row.orderId, xtOrderItem.id)">{{
                      xtOrderItem.productName
                    }}</a>
                  <div>
                    {{
                      xtOrderItem.productSkuId > 0
                        ? xtOrderItem.productSkuName
                        : "無規格"
                    }}
                  </div>
                  <div>
                    NT$ {{ xtOrderItem.modelOriginalPrice }}
                  </div>

                </el-col>
                <el-col :span="4">
                  <div class="item-name item-num">
                    <i class="el-icon-close"></i>
                    {{ xtOrderItem.modelQuantityPurchased }}
                  </div>
                  <div>NT$ {{ (xtOrderItem.modelOriginalPrice * xtOrderItem.modelQuantityPurchased).toFixed(2) }}</div>
                </el-col>
              </div>
            </el-tooltip>
          </el-row>
        </template>
      </vxe-table-column>

      <!-- <vxe-table-column title="訂單狀態" width="80" :formatter="formatOrderStatus" align="center">
      </vxe-table-column> -->

      <vxe-table-column title="訂單狀態" width="80">
        <template v-slot="{ row }">
          <div>
            <div>{{ formatOrderStatus(row) }}</div>
            <div v-if="row.orderStatus === 4">{{ row.cancelledParty === 0 ? '買家取消' : '賣家取消' }}</div>
            <div v-if="orderState === 0 && row.isOrderInitiator !== 1">
              <el-button type="text" v-on:click.stop.prevent="toSourceOrderdetail(row)">
                <span class="ti-world m-r-5" title="來源訂單"></span>
              </el-button>
            </div>
            <div v-if="orderState === 4 && row.orderStatus !== 5 && row.orderStatus !== 3 && row.orderStatus !== 4  && row.isReport === 0 && (userType === '01' || userType === '02')">
              (可上報)
            </div>
          </div>
        </template>
      </vxe-table-column>

      <vxe-table-column title="訂單型別" width="80">
        <template v-slot="{ row }">
          <div>
            <div>{{ row.orderProcedureType === 1 ? '代發貨訂單' : '普通訂單' }}</div>
            <div v-if="row.orderProcedureType === 1">
              <span style="color: red;">NT$ {{ row.orderAmountSentBehalf }}</span>
            </div>
          </div>
        </template>
      </vxe-table-column>


      <vxe-table-column title="買家資訊" min-width="100" header-align="center">
        <template v-slot="{ row }">
          <el-tooltip placement="top" popper-class="atooltip">
            <div slot="content">
              賬號：{{ row.buyerUserName }}
              <br/>
              留言： {{ row.messageToSeller ? handleMessage(row.messageToSeller) : '無留言' }}
              <br/>
              備註：{{ row.myNote }}
            </div>
            <div align="left" style="margin-left: 5px;">
              <div>{{ row.buyerUserName }}</div>
              <div class="buyer-note">
                {{ row.messageToSeller ? handleMessage(row.messageToSeller) : '無留言' }}
              </div>
            </div>
          </el-tooltip>
        </template>
      </vxe-table-column>

      <vxe-table-column title="賣家資訊" min-width="90" header-align="center">
        <template v-slot="{ row }">
          <el-tooltip placement="top" popper-class="atooltip">
            <div slot="content">
              店鋪名稱：{{ row.shopName }}
              <br/>
              團長：{{ row.boosName }}
              <br/>
              聯絡方式：{{ row.boosPhone }}
            </div>
            <div>
              <div>{{ row.shopName }}</div>
              <div>{{ row.boosName }}</div>
              <div>{{ row.boosPhone }}</div>
            </div>
          </el-tooltip>
        </template>
      </vxe-table-column>

      <vxe-table-column title="收件資訊" min-width="150" header-align="center">
        <template v-slot="{ row }">
          <el-tooltip placement="top" popper-class="atooltip">
            <div slot="content">
              收件人：{{ row.buyerUserName }}
              <br/>
              手機號：{{ row.buyerUserPhone }}
              郵箱：{{ row.buyerUserEmail }}
              <br/>
              收件地址： ({{ row.buyerUserDeliveryType === 1 ? '宅家' : row.buyerUserDeliveryType === 2 ? '711' : row.buyerUserDeliveryType === 3 ? '全家' : ''}})  {{ row.buyerUserFullAddress }}
            </div>
            <div class="recipient" style="margin-left: 5px;">
              <div>{{ row.buyerUserName }}</div>
              <div>{{ row.buyerUserPhone }}</div>
              <div>{{ row.buyerUserEmail }}</div>
              <div class="address">({{ row.buyerUserDeliveryType === 1 ? '宅家' : row.buyerUserDeliveryType === 2 ? '711' : row.buyerUserDeliveryType === 3 ? '全家' : '' }}){{ row.buyerUserFullAddress }}</div>
            </div>
          </el-tooltip>
        </template>
      </vxe-table-column>


      <vxe-table-column title="訂單時間" width="100" align="center">
        <template v-slot="{ row }">
          {{ row.createTime }}
        </template>
      </vxe-table-column>

      <vxe-table-column title="Line狀態" width="80" align="center">
        <template v-slot="{ row }">
          <el-dropdown trigger="click" @command="(command) => handleLineStatusChange(row, command)">
            <span class="el-dropdown-link" style="cursor: pointer; color: #409EFF;">
              <span v-if="row.lineType === 0">未新增</span>
              <span v-else-if="row.lineType === 1">加了未透過</span>
              <span v-else-if="row.lineType === 2">已新增</span>
              <span v-else-if="row.lineType === 3">搜尋不到賬號</span>
              <span v-else>-</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :disabled="row.lineType === 0" command="0">未新增</el-dropdown-item>
              <el-dropdown-item :disabled="row.lineType === 1" command="1">加了未透過</el-dropdown-item>
              <el-dropdown-item :disabled="row.lineType === 2" command="2">已新增</el-dropdown-item>
              <el-dropdown-item :disabled="row.lineType === 3" command="3">搜尋不到賬號</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </vxe-table-column>

      <vxe-table-column title="操作" min-width="80" align="center">
        <template v-slot="{ row }">
          <div>
            <el-button type="text" v-on:click.stop.prevent="detailEvent(row)">
              <span class="ti-eye m-r-5" title="訂單詳情"></span>
            </el-button>

            <el-button type="text" :disabled="!(orderState === 4 && row.orderStatus === 1)"
                       v-on:click.stop.prevent="orderShipped(row)">
              <span class="ti-truck m-r-5" title="訂單發貨"></span>
            </el-button>

            <el-button type="text" :disabled="!(orderState === 0 && row.orderStatus === 2)"
                       v-on:click.stop.prevent="oneConfirmOrder(row)">
              <span class="ti-check m-r-5" title="確認收貨"></span>
            </el-button>

            <el-button type="text" :disabled="!((orderState === 1 || orderState === 4) && (row.orderStatus === 7))"
                       v-on:click.stop.prevent="confirmBox(row)">
              <span class="ti-magnet m-r-5" title="確認訂單"></span>
            </el-button>

            <el-button type="text" :disabled="!((orderState === 1 || orderState === 4) && (row.orderStatus === 7))"
                       v-on:click.stop.prevent="confirmBox(row)">
              <span class="ti-magnet m-r-5" title="確認訂單"></span>
            </el-button>
            <el-button type="text" :disabled="!(orderState === 4 && row.orderStatus === 2)"
                       v-on:click.stop.prevent="sendMessBox(row)">
              <span class="ti-email m-r-5" title="通知簽收"></span>
            </el-button>

            <el-button type="text" v-on:click.stop.prevent="orderMsgList(row)">
              <span class="ti-layout-media-overlay-alt m-r-5" title="通知記錄"></span>
            </el-button>
          </div>
        </template>
      </vxe-table-column>

    </vxe-table>

    <pagination :total="parseInt(total)" :page.sync="queryParams.pageNum"
                :limit.sync="queryParams.pageSize" @pagination="handleQuery"/>


    <!-- 審批對話方塊 -->
    <rejectConfirm :title="rejectConfirmTitle" :visible.sync="confirmVisible" :onConfirm="handleConfirmOrReject"
                   @cancel="handleCancel"/>

    <!-- 確定和上報對話方塊，批次 -->
    <batchConfirmReport :title="batchConfirmReportTitle" :batchFindSkuPriceParams="batchFindSkuPriceParams"
                        :userAddressList="userAddressList" :type="0" :visible.sync="dialogFormVisible"
                        :on-confirm="batchConfirmReportCallBack"
                        :on-cancel="handleDialogCancel" :shippingAddress="11111"></batchConfirmReport>


    <el-drawer
      title="通知記錄"
      :visible.sync="msgVisible"
      direction="rtl"
      @close="handleMsgDrawerClose"
      size="60%">
      <el-tabs v-model="activeName" @tab-click="switchTabs" type="card">
        <el-tab-pane :label="`簡訊記錄 (${msgSmsList.length})`" name="first">
          <div class="table-container">
            <el-table  v-loading="loading" :data="msgSmsList" border>
            <!-- 序号列 -->
            <el-table-column label="序號" align="center" width="60">
              <template slot-scope="scope">
                <span>{{ scope.$index + 1 }}</span>
              </template>
            </el-table-column>
            <el-table-column label="ID" align="center" width="100" prop="id" />
            <el-table-column label="訂單編號" align="center" prop="orderProcedureSn" width="100"/>
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
            <el-table-column label="內容" align="left" prop="content" header-align="center">
              <template slot-scope="scope">
                  <div class="multi-line-ellipsis">
                    {{ scope.row.content }}
                  </div>
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
            <el-table-column label="備註"  header-align="center" align="left" prop="remark"  width="100"/>
              <el-table-column label="傳送時間" align="center" prop="createTime"  width="100"/>
          </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="`郵件記錄 (${msgEmailList.length})`" name="second">
          <div class="table-container">
            <el-table v-loading="loading" :data="msgEmailList" border>
            <!-- 序号列 -->
            <el-table-column label="序號" align="center" width="60">
              <template slot-scope="scope">
                <span>{{ scope.$index + 1 }}</span>
              </template>
            </el-table-column>
            <el-table-column label="ID" align="center" prop="id"  width="100" />
            <el-table-column label="訂單編號" align="center" prop="orderProcedureSn"  width="100"/>
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
            <el-table-column label="郵箱地址" align="center" prop="emailAddress"  width="100"/>
            <el-table-column label="郵件主題" align="left" prop="subject" width="150"  header-align="center"/>
            <el-table-column label="内容" align="left" prop="content" header-align="center">
              <template slot-scope="scope">
                  <div class="multi-line-ellipsis">
                    {{ scope.row.content }}
                  </div>
              </template>
            </el-table-column>
            <el-table-column label="狀態" align="center" prop="sendStatus" width="80">
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
            <el-table-column label="備註"  header-align="center" align="left" prop="remark"  width="100"/>
              <el-table-column label="傳送時間" align="center" prop="createTime"  width="100"/>
          </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-drawer>


  </div>
</template>

<script>
import {
  listOrder,
  delOrder,
  myOrderList,
  myToBeConfirmedOrderList,
  myConfirmedOrderList,
  myDeptOrderList,
  processedOrder,
  confirmReceiptOrder,
  batchEscalationOrder,
  batchConfirmAndescalationOrder,
  confirmOrder,
  rejectedOrder,
  applyCancelledOrder,
  approvalCancellation,
  superiorCancelOrder,
  batchFindSkuPriceBySkuId,
  updateLineStatus, orderMsgList
} from "@/api/order/order";
import {mapActions, mapState} from "vuex";
import orderDetail from './orderDetail.vue'
import rejectConfirm from '../components/rejectConfirm';
import {listAddress} from "@/api/system/address.js";
import batchConfirmReport from '../components/batchConfirmReport';
import {sendSms} from "@/api/msg/sms";

// 註意：使用前請先執行 npm install xlsx --save 安裝依賴
// import * as XLSX from 'xlsx';

export default {
  name: "Order",
  data() {
    return {
      // 遮罩層
      loading: true,
      userType: null,
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
      // 訂單表格資料
      orderList: [],
      // 彈出層標題
      title: "",
      // 是否顯示彈出層
      open: false,
      pickerOptions: null,
      buttonShow: {
        str: "隱藏按鈕",
        visable: true,
      },
      orderState: 1,
      allAlign: "center",
      createTime: null,
      //訂單編號搜尋框資料
      queryOrderSns: "",
      // 查詢引數
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        orderSns: [],
        orderStatus: null,
        searchParam: null,
        pendingStatus: 8,
        startTime: null,
        endTime: null,
        shopName: null,
        buyerUserName: null,
        buyerUserPhone: null,
        lineType: null,
      },
      // 表單引數
      form: {},
      // 表單校驗
      rules: {
        buyerUserId: [
          {required: true, message: "買家的使用者id不能為空", trigger: "blur"}
        ],
      },

      orderStateOptions: [
        {value: 8, label: '全部'},
        {value: 0, label: '待確認接收'},
        {value: 6, label: '待確認取消'},
      ],
      isAdmin: this.$store.getters.roles.includes("admin") ? true : false,
      orderOptionParam: {
        orderId: null,
        orderProcedureId: null,
        cancelledReason: '',
        cancelType: null
      },
      //審批對話方塊資料
      rejectConfirmTitle: '',
      confirmVisible: false,

      //確定和上報對話方塊資料（批次）
      batchConfirmReportTitle: '批次確認和上報',
      dialogFormVisible: false,
      batchFindSkuPriceParams: null,
      userAddressList: null,
      //確定回撥函式
      batchConfirmReportCallBack: null,


      //通知記錄對話框數據
      activeName: 'first',
      msgVisible: false,
      msgSmsList: [],
      msgEmailList: []
    };
  },
  components: {
    orderDetail,
    rejectConfirm,
    batchConfirmReport
  },
  async created() {
    this.userType = this.$store.state.user.userType;
    await this.getOrderStates(this);
    await this.getOrderTabList(this)
    await this.getMyToBeConfirmedOrderList();
  },
  computed: {
    ...mapState({
      orderStates: (state) => state.dict.orderStates,
      orderTabList: (state) => state.dict.orderTabList
    })
  },
  methods: {
    ...mapActions({
      getOrderStates: "dict/getOrderStates",
      getOrderTabList: "dict/getOrderTabList",
    }),

    /** 查詢我的訂單列表 */
    getMyOrderList() {
      this.loading = true;
      myOrderList(this.queryParams).then(response => {
        this.orderList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },

    // 查詢我的待辦
    getMyToBeConfirmedOrderList() {
      this.loading = true;
      myToBeConfirmedOrderList(this.queryParams).then(response => {
        this.orderList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },

    //查詢我的已辦
    getMyConfirmedOrderList() {
      this.loading = true;
      myConfirmedOrderList(this.queryParams).then(response => {
        this.orderList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },

    //查詢全部訂單
    getOrderList() {
      this.loading = true;
      listOrder(this.queryParams).then(response => {
        this.orderList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },

    /** 查詢我的團內訂單列表 */
    getMyDeptOrderList() {
      this.loading = true;
      myDeptOrderList(this.queryParams).then(response => {
        this.orderList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },


    /** 搜尋按鈕操作 */
    async handleQuery() {
      //呼叫驗證訂單編號方法，將訂單編號轉換成陣列，賦值給queryParams.orderSns
      const values = await this.validateOrdersns(this.queryOrderSns);
      this.queryParams.orderSns = values;
      //判斷
      if (this.orderState === 0) {
        this.getMyOrderList();
      } else if (this.orderState === 1) {
        if (this.queryParams.pendingStatus !== 8) {
          this.queryParams.orderStatus = this.queryParams.pendingStatus;
        } else {
          this.queryParams.orderStatus = null;
        }
        this.getMyToBeConfirmedOrderList();
      } else if (this.orderState === 2) {
        this.getMyConfirmedOrderList();
      } else if (this.orderState === 3) {
        this.getOrderList();
      } else if (this.orderState === 4) {
        this.getMyDeptOrderList();
      }
    },

    async validateOrdersns(str) {
      if (str == null || str.trim() === "") {
        return [];
      }
      //轉換成陣列
      var values = str.split(/[(\r\n)\r\n]+/);
      var dreg = /^\d{6}[A-Z0-9]{8}$/;
      // 已刪除計數
      var h = 0;
      //長度會隨著list刪減變短，先記錄下總長度
      var valuesLength = values.length;
      for (let i = 0; i < valuesLength; i++) {
        if (values[i - h] == null || values[i - h].trim() === "") {
          //刪除空項
          values.splice(i - h, 1);
          h = h + 1;
        } else if (!dreg.test(values[i - h])) {
          //刪除空項 await 使用非同步解決訊息重疊問題
          // await that.$message({
          //   message: "訂單編號只能含有數字或字母,刪除不滿足的訂單編號：" + values[i - h],
          //   type: "error"
          // });
          await this.$message.info("訂單編號只能含有數字或字母,刪除不滿足的訂單編號：" + values[i - h]);
          values.splice(i - h, 1);
          h = h + 1;
        }
      }
      this.textareaBackShow(values);
      return values;
    },

    textareaBackShow(values) {
      var str = ""
      if (values != null && values.length > 0) {
        values.forEach(value => {
          str = str + value + "\n"
        });
      }
      this.queryOrderSns = str;
    },


    /** 重置按鈕操作 */
    resetQuery() {
      // this.resetForm("queryForm");
      // this.handleQuery();
      this.createTime = null,
        this.queryParams.startTime = null,
        this.queryParams.endTime = null,
        this.queryParams.orderSns = null,
        this.queryOrderSns = null,
        this.queryParams.buyerUserName = null,
        this.queryParams.buyerUserPhone = null,
        this.queryParams.shopName = null,
        this.queryParams.lineType = null
    },


    /** 刪除按鈕操作 */
    handleDelete(row) {
      const orderProcedureIds = row.orderProcedureId;
      this.$modal.confirm('是否確定刪除訂單編號為"' + orderProcedureIds + '"的資料項？').then(function () {
        return delOrder(orderProcedureIds);
      }).then(() => {
        this.getMyOrderList();
        this.$modal.msgSuccess("刪除成功");
      }).catch(() => {
      });
    },


    /** 訂單發貨 */
    orderShipped(row) {
      const orderOptionParams = [];

      const orderOptionParam = {
        orderId: row.orderId,
        orderProcedureId: row.orderProcedureId
      };

      orderOptionParams.push(orderOptionParam);
      this.$modal.confirm('是否確定發貨訂單編號為"' + row.orderProcedureSn + '"的訂單？')
        .then(() => {
          return processedOrder(orderOptionParams);
        })
        .then(response => {
          if (response.code === 200) {
            this.getMyOrderList();
            this.$modal.msgSuccess("發貨成功");
            this.handleQuery();
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


    /** 確定收貨 */
    oneConfirmOrder(row) {
      const orderOptionParams = [];

      const orderOptionParam = {
        orderId: row.orderId,
        orderProcedureId: row.orderProcedureId
      };
      // this.orderOptionParam.orderId = row.orderId;
      // this.orderOptionParam.orderProcedureId = row.orderProcedureId;
      orderOptionParams.push(orderOptionParam);

      this.$modal.confirm('是否確定收貨訂單編號為"' + row.orderProcedureSn + '"的訂單？')
        .then(() => {
          // 傳送請求並處理成功情況
          return confirmReceiptOrder(orderOptionParams);
        })
        .then(response => {
          // 處理成功的響應
          if (response.code === 200) {
            this.handleQuery();
            this.$modal.msgSuccess("確定收貨成功");
          } else {
            // 處理介面返回的其他狀態碼
            this.$modal.msgError("確定收貨失敗，介面返回錯誤：" + response.msg);
          }
        })
        .catch(error => {
          // 如果是取消操作引起的錯誤，不進行錯誤提示
          if (this.$modal.isCancel(error)) {
            return;
          }

          // 處理網路錯誤或其他未知錯誤
          console.error("確定收貨失敗，發生錯誤：", error);
          this.$modal.msgError("確定收貨失敗，發生錯誤，請重試");
        });
    },


    //批次刪除
    handleBatchDelete() {
      const selectedData = this.$refs.orderTableData.getCheckboxRecords();

      if (selectedData && Array.isArray(selectedData)) {
        // 遍歷判斷是否有已拒絕、已取消、已完成的訂單
        const orderProcedureSns = [];
        const orderProcedureIds = [];
        selectedData.forEach(item => {
          if (item.orderStatus === 3 || item.orderStatus === 4 || item.orderStatus === 5) {
            orderProcedureSns.push(item.orderProcedureSn);
            orderProcedureIds.push(item.orderProcedureId);
          }
        });
        if (orderProcedureSns.length === 0) {
          this.$modal.msgWarning("請選擇狀態為'已拒絕''已取消''已完成'的訂單");
        } else {
          // 如果有已拒絕、已取消、已完成的訂單，則執行刪除操作
          this.ids = orderProcedureSns.join(',');
          this.$modal.confirm('是否確定刪除訂單編號為"' + this.ids + '"的資料項？').then(function () {
            return delOrder(orderProcedureIds);
          }).then(() => {
            this.getMyOrderList();
            this.$modal.msgSuccess("已刪除狀態為'已拒絕''已取消''已完成'的訂單");
          }).catch(() => {
          });
        }
      }
    },


    /** 匯出為CSV功能 */
    exportToExcel() {
      if (this.orderList.length === 0) {
        this.$message.warning('沒有資料可匯出');
        return;
      }

      console.log('開始匯出流程');

      // 儲存當前分頁設定
      const currentPageNum = this.queryParams.pageNum;
      const currentPageSize = this.queryParams.pageSize;

      // 查詢引數
      const exportParams = { ...this.queryParams };
      exportParams.pageNum = 1;
      exportParams.pageSize = 1000; // 使用大頁碼提高效率

      // 根據當前選擇的訂單狀態決定呼叫哪個API
      let fetchDataApi;
      if (this.orderState === 0) {
        fetchDataApi = myOrderList;
      } else if (this.orderState === 1) {
        fetchDataApi = myToBeConfirmedOrderList;
      } else if (this.orderState === 2) {
        fetchDataApi = myConfirmedOrderList;
      } else if (this.orderState === 3) {
        fetchDataApi = listOrder;
      } else if (this.orderState === 4) {
        fetchDataApi = myDeptOrderList;
      }

      // 直接使用當前列表的總資料量
      const total = this.total;
      const pageSize = exportParams.pageSize;
      const totalPages = Math.ceil(total / pageSize);

      console.log('顯示匯出對話方塊');

      // 使用ElementUI的MessageBox顯示輸入框
      this.$confirm(
        `<div>
          <p>共有 ${total} 條資料，共 ${totalPages} 頁</p>
          <p>每頁 ${pageSize} 條資料</p>
          <p>請輸入要匯出的頁碼範圍（格式：起始頁-結束頁）</p>
          <p style="color: #E6A23C;">單次最多匯出 5000 條資料</p>
          <input id="export-range-input" value="1-${Math.min(5, totalPages)}" style="width: 100%; margin-top: 10px; padding: 5px;" placeholder="例如：1-5" />
        </div>`,
        '匯出頁碼範圍',
        {
          confirmButtonText: '確定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          closeOnClickModal: false
        }
      ).then(() => {
        // 獲取輸入框的值
        const value = document.getElementById('export-range-input').value;
        const pattern = /^\d+-\d+$/;

        if (!pattern.test(value)) {
          this.$message.error('格式不正確，請使用"起始頁-結束頁"的格式');
          return;
        }

        // 解析頁碼範圍
        const [startPage, endPage] = value.split('-').map(Number);

        // 驗證頁碼範圍
        if (startPage < 1 || endPage > totalPages || startPage > endPage) {
          this.$message.error(`頁碼範圍無效，有效範圍為 1-${totalPages}`);
          return;
        }

        // 計算將要匯出的資料量
        const estimatedCount = (endPage - startPage + 1) * pageSize;
        if (estimatedCount > 5000) {
          this.$message.error('單次最多匯出 5000 條資料，請縮小頁碼範圍');
          return;
        }

        // 執行匯出
        this.exportRangeData(fetchDataApi, exportParams, startPage, endPage, currentPageNum, currentPageSize);
      }).catch(() => {
        this.$message.info('已取消匯出');
      });
    },

    //轉換訂單狀態
    formatOrderStatus(row) {
      const orderStatus = row.orderStatus;
      // 根據實際情況處理狀態值的對映關係
      const displayStatus = this.getOrderStatusLabel(orderStatus);
      return displayStatus;
    },

    getOrderStatusLabel(orderStatus) {
      // 根據狀態值獲取對應的顯示文字
      const statusObj = this.orderStates.find((item) => item.value === orderStatus);
      return statusObj ? statusObj.label : orderStatus;
    },

    getDefaultOrderStatus(orderState) {
      // 根據 orderState 的值返回相應的預設值
      if (orderState === 0 || orderState === 3 || orderState === 4 || orderState === 2) {
        return 0;
      } else if (orderState === 1) {
        return 8;
      }
    },

    //賦值篩選時間
    handleTimeChange(val) {
      //如果時間為null則賦值為null
      if (val === null) {
        this.queryParams.startTime = null;
        this.queryParams.endTime = null;
        return;
      } else {
        this.queryParams.startTime = val[0] ? this.formatDate(val[0]) : null;
        this.queryParams.endTime = val[1] ? this.formatDate(val[1]) : null;
      }

    },


    formatDate(date) {
      const formattedDate = new Date(date);
      // 手動拼接成 yyyy-MM-dd HH:mm:ss 格式
      const year = formattedDate.getFullYear();
      const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
      const day = String(formattedDate.getDate()).padStart(2, '0');
      const hours = String(formattedDate.getHours()).padStart(2, '0');
      const minutes = String(formattedDate.getMinutes()).padStart(2, '0');
      const seconds = String(formattedDate.getSeconds()).padStart(2, '0');

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },

    //檢視訂單詳情
    detailEvent(row) {
      this.$router.push({
        path: './orderDetail',
        query: {id: row.orderId, orderProcedureId: row.orderProcedureId, orderProcedureSn: row.orderProcedureSn}
      })
    },

    // 批次操作訂單
    batchOrderAction(cancelType) {
      const orderOptionParams = [];
      let orderCount = 0; // 訂單計數
      const selectedData = this.$refs.orderTableData.getCheckboxRecords();
      if (selectedData && Array.isArray(selectedData)) {
        selectedData.forEach(item => {
          if (item.orderStatus === 7) {
            orderOptionParams.push({
              orderId: item.orderId,
              orderProcedureId: item.orderProcedureId,
              cancelType: cancelType
            });
            orderCount++;
          }
        });

        if (orderOptionParams.length > 0) {
          const actionText = cancelType === 0 ? '拒絕' : '確定';
          this.$modal.confirm(`是否${actionText}所選的 ${orderCount} 個訂單？`).then(() => {
            return confirmOrder(orderOptionParams);
          }).then(() => {
            this.handleQuery();
            this.$message.success(`${actionText} ${orderCount} 個訂單成功`);
          }).catch(error => {
            console.error(`${actionText}訂單時發生錯誤：`, error);
          });
        } else {
          const infoText = cancelType === 0 ? '拒絕' : '確定';
          this.$message.info(`所選訂單中沒有符合條件的項，無法${infoText}`);
        }
      }
    },

    // 批次確定訂單
    batchConfirmAction() {
      this.batchOrderAction(1);
    },

    // 批次拒絕訂單
    batchRejected() {
      const selectedData = this.$refs.orderTableData.getCheckboxRecords();
      const orderOptionParams = [];
      let orderCount = 0;

      selectedData.forEach(item => {
        if (item.orderStatus === 7) {
          orderOptionParams.push({
            orderId: item.orderId,
            orderProcedureId: item.orderProcedureId,
          });
          orderCount++;
        }
      });

      if (orderOptionParams.length > 0) {
        const actionText = '拒絕';

        this.$prompt(`請輸入${actionText}所選的 ${orderCount} 個訂單的拒絕理由`, '提示', {
          confirmButtonText: '確定',
          cancelButtonText: '取消',
          inputPlaceholder: '拒絕理由',
          inputType: 'textarea',
        }).then(({value, action}) => {
          if (action === 'confirm') {
            orderOptionParams.forEach(order => {
              order.cancelledReason = value;
            });

            // 根據傳入的拒絕訂單函式執行拒絕訂單操作
            rejectedOrder(orderOptionParams).then(() => {
              this.handleQuery();
              this.$message.success(`${actionText} ${orderCount} 個訂單成功`);
            }).catch(error => {
              console.error(`${actionText}訂單時發生錯誤：`, error);
            });
          }
        }).catch(() => {
          // 使用者點選取消按鈕
          this.$message.info(`已取消${actionText}`);
        });
      } else {
        const infoText = '拒絕';
        this.$message.info(`所選訂單中沒有符合條件的項，無法${infoText}`);
      }
    },

    // 批次傳送取貨通知簡訊
    batchSendSms() {
      const orderOptionParams = [];
      const selectedData = this.$refs.orderTableData.getCheckboxRecords();
      if (selectedData && Array.isArray(selectedData)) {
        selectedData.forEach(item => {
          if (item.orderStatus === 2) {
            orderOptionParams.push({
              orderId: item.orderId,
              orderProcedureId: item.orderProcedureId,
            });
          }
        });

        if (orderOptionParams.length > 0) {
          this.$modal.confirm(`是否為所選全部訂單傳送取貨通知簡訊嗎？`).then(() => {
            return sendSms(orderOptionParams,3);
          }).then(() => {
            this.handleQuery();
            this.$message.success(`傳送取貨通知簡訊成功`);
          }).catch(error => {
            console.error(`送取貨通知簡訊發生錯誤：`, error);
          });
        } else {
          this.$message.info(`所選訂單中沒有符合條件的項，無法傳送簡訊`);
        }
      }
    },


    // 公共取消訂單方法
    commonCancelOrder(orderStatusFilter, cancelOrderFunction) {
      const selectedData = this.$refs.orderTableData.getCheckboxRecords();
      const orderOptionParams = [];
      let orderCount = 0;

      selectedData.forEach(item => {
        if (orderStatusFilter.includes(item.orderStatus)) {
          orderOptionParams.push({
            orderId: item.orderId,
            orderProcedureId: item.orderProcedureId
          });
          orderCount++;
        }
      });

      if (orderOptionParams.length > 0) {
        const actionText = "取消";

        this.$prompt(`請輸入${actionText}所選的 ${orderCount} 個訂單的取消理由`, '提示', {
          confirmButtonText: '確定',
          cancelButtonText: '取消',
          inputPlaceholder: '取消理由',
          inputType: 'textarea'
        }).then(({value}) => {
          // value 為使用者輸入的取消理由
          orderOptionParams.forEach(order => {
            order.cancelledReason = value;
          });

          // 根據傳入的取消訂單函式執行取消訂單操作
          cancelOrderFunction(orderOptionParams).then(() => {
            this.handleQuery();
            this.$message.success(`${actionText} ${orderCount} 個訂單成功`);
          }).catch(error => {
            console.error(`${actionText}訂單時發生錯誤：`, error);
          });
        }).catch(() => {
          // 使用者取消輸入
          this.$message.info(`已取消${actionText}`);
        });
      } else {
        const infoText = "取消";
        this.$message.info(`所選訂單中沒有符合條件的項，無法${infoText}`);
      }
    },

    //批次取消訂單(買)
    batchBuyerCancel() {
      const orderStatusFilter = [7, 1, 2];
      this.commonCancelOrder.call(this, orderStatusFilter, applyCancelledOrder);
    },

    //批次取消訂單(賣)
    batchsuperiorCancel() {
      const orderStatusFilter = [1, 2];
      this.commonCancelOrder.call(this, orderStatusFilter, superiorCancelOrder);
    },

    // 批次訂單發貨
    batchProcessed() {
      const orderOptionParams = [];
      let processedCount = 0; // 訂單計數
      const selectedData = this.$refs.orderTableData.getCheckboxRecords();
      if (selectedData && Array.isArray(selectedData)) {
        selectedData.forEach(item => {
          if (item.orderStatus === 1) {
            orderOptionParams.push({
              orderId: item.orderId,
              orderProcedureId: item.orderProcedureId,
            });
            processedCount++;
          }
        });

        if (orderOptionParams.length > 0) {
          this.$modal.confirm(`是否為所選全部訂單，有效的 ${processedCount} 個訂單發貨？`).then(() => {
            return processedOrder(orderOptionParams);
          }).then(() => {
            this.handleQuery();
            this.$message.success(` ${processedCount} 個訂單發貨成功`);
          }).catch(error => {
            console.error(`訂單發貨時發生錯誤：`, error);
          });
        } else {
          this.$message.info(`所選訂單中沒有符合條件的項，無法發貨`);
        }
      }
    },

    // 批次確定收貨
    batchConfirmReceipt() {
      const orderOptionParams = [];
      let confirmReceiptCount = 0; // 訂單計數
      const selectedData = this.$refs.orderTableData.getCheckboxRecords();
      if (selectedData && Array.isArray(selectedData)) {
        selectedData.forEach(item => {
          if (item.orderStatus === 2) {
            orderOptionParams.push({
              orderId: item.orderId,
              orderProcedureId: item.orderProcedureId,
            });
            confirmReceiptCount++;
          }
        });

        if (orderOptionParams.length > 0) {
          this.$modal.confirm(`是否為所選全部訂單，有效的 ${confirmReceiptCount} 個訂單確定收貨？`).then(() => {
            return confirmReceiptOrder(orderOptionParams);
          }).then(() => {
            this.handleQuery();
            this.$message.success(` ${confirmReceiptCount} 個訂單確定收貨成功`);
          }).catch(error => {
            console.error(`確定收貨時發生錯誤：`, error);
          });
        } else {
          this.$message.info(`所選訂單中沒有符合條件的項，無法確定收貨`);
        }
      }
    },


    // 批次審批使用者取消訂單
    batchApprovalCanceled() {
      this.rejectConfirmTitle = '您確定要同意使用者取消該訂單嗎?';
      this.confirmVisible = true;
    },

    //審批使用者取消元件，同意或拒絕回撥函式
    handleConfirmOrReject(action) {
      if (action === 1) {
        this.batchApprovalCanceledCall(1);
      } else if (action === 0) {
        this.batchApprovalCanceledCall(0);
      }
      this.confirmVisible = false;
    },

    //審批使用者取消，取消操作回撥函式
    handleCancel() {
      this.confirmVisible = false;
      //列印取消操作
      console.log('取消操作');
    },



    batchApprovalCanceledCall(cancelType) {
      const orderOptionParams = [];
      let approvalCanceledCount = 0; // 訂單計數
      const selectedData = this.$refs.orderTableData.getCheckboxRecords();

      if (selectedData && Array.isArray(selectedData)) {
        selectedData.forEach(item => {
          if (item.orderStatus === 6) {
            orderOptionParams.push({
              orderId: item.orderId,
              orderProcedureId: item.orderProcedureId,
              cancelType: cancelType
            });
            approvalCanceledCount++;
          }
        });

        if (orderOptionParams.length > 0) {
          // 直接執行審批取消操作
          approvalCancellation(orderOptionParams).then(() => {
            this.handleQuery();
            this.$message.success(`${approvalCanceledCount} 個訂單審批取消成功`);
          }).catch(error => {
            console.error(`審批取消時發生錯誤：`, error);
          });
        } else {
          this.$message.info(`所選訂單中沒有符合條件的項，無法審批取消`);
        }
      }
    },

    /**
     * 批次確定和上報對話方塊和上報訂單對話方塊
     * type: 1 批次確定和上報 2 上報訂單
     */
    async batchConfirmReportAction(type) {

      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });

      const orderOptionParams = [];
      const selectedData = this.$refs.orderTableData.getCheckboxRecords();
      if (selectedData && Array.isArray(selectedData)) {
        selectedData.forEach(item => {
          if (type === 1) {
            if (item.orderStatus === 7) {
              orderOptionParams.push({
                orderId: item.orderId,
                orderProcedureId: item.orderProcedureId,
                orderProcedureSn: item.orderProcedureSn,
                xtOrderItemVoList: item.xtOrderItemVoList,
              });
            }
          } else if (type === 2) {
            if (item.isReport === 0) {
              orderOptionParams.push({
                orderId: item.orderId,
                orderProcedureSn: item.orderProcedureSn,
                orderProcedureId: item.orderProcedureId,
                xtOrderItemVoList: item.xtOrderItemVoList,
              });
            }
          }
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
                  //批次確定和上報
                  this.batchConfirmReportCallBack = this.handleDialogConfirm;
                } else if (type === 2) {
                  //批次上報
                  this.batchConfirmReportCallBack = this.handleBatchEscalation;
                  this.batchConfirmReportTitle = '批次上報';
                }
                this.dialogFormVisible = true;
              }
            } else {
              this.$message.error(`獲取訂單價格失敗`);
              loading.close();
            }

          } catch (error) {
            loading.close();
          }
        } else {
          this.$message.info(`所選訂單中沒有符合條件的項，無法確定和上報`);
          loading.close();
        }
      }
    },


    //確定和上報訂單確定邏輯
    handleDialogConfirm(formData) {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });

      batchConfirmAndescalationOrder(formData)
        .then(response => {
          if (response.code === 200) {
            this.handleQuery();

            this.$message({
              type: 'success',
              message: '確定和上報訂單成功',
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
            message: '確定和上報訂單失敗',
          });
        });
      this.dialogFormVisible = false,
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
            this.handleQuery();

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
      this.dialogFormVisible = false,
        loading.close();
    },


    //確定和上報訂單取消邏輯
    handleDialogCancel() {
      this.userAddressList = null;
      this.dialogFormVisible = false;
    },

    //確定接收訂單(單個)
    confirmBox(row) {
      this.$confirm('', "您確定要接收該訂單嗎", {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning' // 根據需要修改提示框型別
      }).then(() => {
        this.confirmAction(row);
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

    //確定接收訂單
    confirmAction(row) {
      const orderOptionParams = [];

      const orderOptionParam = {
        orderId: row.orderId,
        orderProcedureId: row.orderProcedureId
      };
      orderOptionParams.push(orderOptionParam);

      confirmOrder(orderOptionParams)
        .then(response => {
          if (response.code === 200) {
            this.handleQuery();

            this.$message({
              type: 'success',
              message: '已確定接受訂單',
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

    //傳送簡訊通知取貨(單個)
    sendMessBox(row) {
      this.$confirm('', "您確定要給該訂單使用者傳送取貨通知", {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning' // 根據需要修改提示框型別
      }).then(() => {
        this.sendMessAction(row);
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

    //確定傳送訂單取貨通知
   sendMessAction(row) {
      const orderOptionParams = [];

      const orderOptionParam = {
        orderId: row.orderId,
        orderProcedureId: row.orderProcedureId
      };
      orderOptionParams.push(orderOptionParam);

     sendSms(orderOptionParams,3)
        .then(response => {
          if (response.code === 200) {
            this.handleQuery();

            this.$message({
              type: 'success',
              message: '訂單已經傳送取貨通知',
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

    //處理留言
    handleMessage(message) {
      if (!message) {
        return '';
      } else {
        try {
          const messageToSeller = JSON.parse(message);
          if (Array.isArray(messageToSeller) && messageToSeller.length > 0) {
            return messageToSeller[0].messageContent;
          } else {
            return '';
          }
        } catch (error) {
          console.error('留言解析失敗', error);
          return '';
        }
      }
    },

    // 處理 Line 狀態變更
    handleLineStatusChange(row, lineType) {
      // 轉換為數字
      lineType = parseInt(lineType);

      // 如果選擇的狀態與當前狀態相同，則不執行操作
      if (row.lineType === lineType) {
        return;
      }

      // 顯示確認對話方塊
      const statusText = {
        0: '未新增',
        1: '加了未透過',
        2: '已新增',
        3: '搜尋不到賬號'
      };

      this.$confirm(`確定要將 Line 狀態從「${statusText[row.lineType] || '-'}」變更為「${statusText[lineType]}」嗎？`, '變更 Line 狀態', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 呼叫後端 API
        const params = {
          buyerUserId: row.buyerUserId,
          lineType: lineType
        };

        updateLineStatus(params)
          .then(response => {
            if (response.code === 200) {
              // 更新本地資料
              row.lineType = lineType;

              this.$message({
                type: 'success',
                message: 'Line 狀態已成功變更'
              });
            } else {
              this.$message({
                type: 'error',
                message: response.msg || 'Line 狀態變更失敗'
              });
            }
          })
          .catch(error => {
            console.error('Line 狀態變更失敗:', error);
            this.$message({
              type: 'error',
              message: 'Line 狀態變更失敗，請稍後重試'
            });
          });
      }).catch(() => {
        // 使用者取消操作
      });
    },


    //跳轉到來源訂單詳情
    toSourceOrderdetail(row) {
      if (row.orderSourceId === null || row.orderSourceId === 0) {
        this.$message({
          type: 'warning',
          message: '該訂單沒有來源訂單',
        });
        return;
      }
      this.$router.replace({
        path: './orderDetail',
        query: {id: row.orderId, orderProcedureId: row.orderSourceId, orderProcedureSn: row.orderProcedureSn}
      })
    },

    /**
     * 匯出指定頁碼範圍的資料
     */
    exportRangeData(fetchDataApi, exportParams, startPage, endPage, currentPageNum, currentPageSize) {
      const loading = this.$loading({
        lock: true,
        text: '正在獲取資料...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });

      // 獲取第一頁資料
      const firstPageParams = { ...exportParams, pageNum: startPage };
      fetchDataApi(firstPageParams).then(response => {
        let allData = response.rows || [];

        // 如果只需要匯出一頁，直接處理
        if (startPage === endPage) {
          this.exportToCsv(allData, `第${startPage}頁`);
          loading.close();

          // 恢復原始分頁設定
          this.queryParams.pageNum = currentPageNum;
          this.queryParams.pageSize = currentPageSize;
          return;
        }

        // 獲取剩餘頁面資料
        const promises = [];
        for (let page = startPage + 1; page <= endPage; page++) {
          const pageParams = { ...exportParams, pageNum: page };
          promises.push(fetchDataApi(pageParams));
        }

        // 處理所有頁面資料
        Promise.all(promises).then(results => {
          results.forEach(pageResult => {
            if (pageResult.rows && pageResult.rows.length > 0) {
              allData = allData.concat(pageResult.rows);
            }
          });

          // 匯出所有資料
          this.exportToCsv(allData, `第${startPage}-${endPage}頁`);
          loading.close();

          // 恢復原始分頁設定
          this.queryParams.pageNum = currentPageNum;
          this.queryParams.pageSize = currentPageSize;
        }).catch(error => {
          console.error('獲取多頁資料失敗:', error);
          loading.close();
          this.$message.error('匯出失敗，請重試');

          // 恢復原始分頁設定
          this.queryParams.pageNum = currentPageNum;
          this.queryParams.pageSize = currentPageSize;
        });
      }).catch(error => {
        console.error('獲取第一頁資料失敗:', error);
        loading.close();
        this.$message.error('匯出失敗，請重試');

        // 恢復原始分頁設定
        this.queryParams.pageNum = currentPageNum;
        this.queryParams.pageSize = currentPageSize;
      });
    },

    // 將資料匯出為CSV
    exportToCsv(dataList, pageSuffix = '') {
      try {
        // 準備資料
        const data = [];
        // 新增表頭
        const headers = [
          '訂單編號', '總價', '商品詳情', '商品數量', '訂單狀態', '訂單型別',
          '買家姓名', '買家留言', '賣家店鋪', '團長', '團長聯絡方式',
          '收件人', '收件人電話', '門店編號', '門店型別','收件地址', '訂單時間'
        ];
        data.push(headers);

        // 新增資料行
        dataList.forEach(row => {
          const productInfo = row.xtOrderItemVoList.map(item => {
            return `${item.productName}(${item.productSkuId > 0 ? item.productSkuName : "無規格"}) x ${item.modelQuantityPurchased}`;
          }).join('; ');

          // 計算商品總數量
          const totalQuantity = row.xtOrderItemVoList.reduce((sum, item) => {
            return sum + (parseInt(item.modelQuantityPurchased) || 0);
          }, 0);

          const rowData = [
            row.orderProcedureSn,
            row.totalAmount,
            productInfo,
            totalQuantity,
            this.formatOrderStatus(row),
            row.orderProcedureType === 1 ? '代發貨訂單' : '普通訂單',
            row.buyerUserName,
            row.messageToSeller ? this.handleMessage(row.messageToSeller) : '無留言',
            row.shopName,
            row.boosName,
            row.boosPhone,
            row.buyerUserName,
            `="${row.buyerUserPhone}"`, // 加上="數值"格式確保前導零不會丟失
            `="${row.buyerUserStoreNo || ''}"`, // 加上="數值"格式確保前導零不會丟失
            row.buyerUserStoreName || '',
            `(${row.buyerUserDelieryType === 1 ? '宅家' : row.buyerUserDeliveryType === 2 ? '711' : row.buyerUserDeliveryType === 3 ? '全家' : '' }) ${row.buyerUserFullAddress}`,
            row.createTime
          ];

          data.push(rowData);
        });

        // 生成CSV內容
        let csvContent = "\uFEFF"; // 新增BOM以支援中文

        data.forEach(rowArray => {
          const row = rowArray.map(value => {
            // 處理包含逗號、引號或換行的值
            if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
              return `"${value.replace(/"/g, '""')}"`;
            }
            return value;
          });
          csvContent += row.join(',') + '\r\n';
        });

        // 建立Blob物件
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

        // 建立下載連結
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);

        // 生成檔名
        let fileName = '訂單資料';
        if (this.orderState === 0) {
          fileName += '_我的訂單';
        } else if (this.orderState === 1) {
          fileName += '_待辦訂單';
        } else if (this.orderState === 2) {
          fileName += '_已辦訂單';
        } else if (this.orderState === 3) {
          fileName += '_全部訂單';
        } else if (this.orderState === 4) {
          fileName += '_團內訂單';
        }

        if (pageSuffix) {
          fileName += `_${pageSuffix}`;
        }

        fileName += `_${new Date().toLocaleDateString().replace(/\//g, '-')}.csv`;

        downloadLink.download = fileName;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        this.$message.success(`成功匯出 ${dataList.length} 條資料`);
      } catch (error) {
        console.error('匯出失敗:', error);
        this.$message.error('匯出失敗，請重試');
      }
    },

    //获取通知记录
    orderMsgList(row){
      orderMsgList(row.orderProcedureSn).then( response => {
          //赋值msgSmsList和msgEmailList
          this.msgSmsList = response.data.msgSmsSendRecordList;
          this.msgEmailList = response.data.msgEmailSendRecords;
          this.msgVisible = true;
      })
    },

    //关闭通知记录抽屉
    handleMsgDrawerClose(){
      this.msgVisible = false;
      this.msgSmsList = [];
      this.msgEmailList = [];
      this.activeName = 'first';
    },
    // switchTabs(tab, event) {
    //   console.log(tab, event);
    // }
  },

  watch: {
    orderState(newOrderState) {
      // 在 orderState 改變時更新 queryParams.orderStatus
      this.queryParams.orderStatus = this.getDefaultOrderStatus(newOrderState);
    },
  },
};
</script>


<style scoped lang="scss">
@import "~@a/backend/css/bootstrap.min.css";
@import "~@a/backend/css/font-awesome.min.css";
@import "~@a/backend/css/simdahs.css";
@import "~@a/backend/css/themify-icons.css";
@import "~@a/backend/css/style.css";

a {
  color: none !important;
}

.table-container {
  max-height: 850px; /* 你可以根据需要调整高度 */
  overflow-y: auto;  /* 垂直滚动条 */
  padding: 10px;
  border-top: 1px solid #eee; /* 可选：与 tab 标题区分开 */
}
</style>
