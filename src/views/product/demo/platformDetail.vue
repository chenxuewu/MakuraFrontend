<template>
  <div>
    <vxe-modal
      ref="showDetail"
      v-model="platformDetailData.showDetail"
      title="平臺訂單詳情"
      width="800"
      resize
      remember
      fullscreen
      destroy-on-close
    >
      <template v-slot>
        <div class="center">
          <div class="alert">
            <div class="card-header">
              <h4>平臺訂單</h4>
              <div class="card-header-right-icon"></div>
            </div>
            <div class="card-body">
              <div class="horizontal-form">
                <el-form
                  :model="platformDetailData.orderForm"
                  class="form-horizontal order-form"
                  ref="platformDetailData.orderForm"
                  label-width="100px"
                >
                  <div class="form-group">
                    <el-form-item label="店鋪名：" prop="anotherName" class="col-lg-4">
                      <el-input
                        v-html="platformDetailData.orderForm.shop.anotherName"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="平臺：" prop="platform" class="col-lg-4">
                      <el-input
                        v-html="getPlatformHtml(platformDetailData.orderForm.shop.platform)"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="地區：" prop="country" class="col-lg-4">
                      <el-input
                        v-html="getCountryStr(platformDetailData.orderForm.shop.country)"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                  </div>
                  <div class="form-group">
                    <el-form-item label="訂單編號：" prop="ordersn" class="col-lg-4">
                      <el-input v-html="platformDetailData.orderForm.ordersn" class="form-show"></el-input>
                    </el-form-item>
                    <el-form-item label="訂單總價：" prop="totalAmount" class="col-lg-4">
                      <el-input
                        v-html="platformDetailData.orderForm.totalAmount +' / '+ platformDetailData.orderForm.currency "
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="訂單狀態：" prop="platformStatus" class="col-lg-4">
                      <el-input
                        v-html="getPlatformStatusStr(platformDetailData.orderForm.platformStatus)"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                  </div>
                  <div class="form-group">
                    <el-form-item label="發貨方式：" prop="handle" class="col-lg-4">
                      <el-input
                        v-html="getHandleStr(platformDetailData.orderForm.handle)"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="處理狀態：" prop="processStatus" class="col-lg-4">
                      <el-input
                        v-html="getProcessStatusStr(platformDetailData.orderForm.processStatus)"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="裝袋號：" prop="bagNum" class="col-lg-4">
                      <el-tooltip placement="top" popper-class="atooltip">
                        <div slot="content">裝袋號：{{platformDetailData.orderForm.bagNum}}</div>
                        <el-input
                          v-html="platformDetailData.orderForm.bagNum"
                          class="form-show"
                        ></el-input>
                      </el-tooltip>
                    </el-form-item>
                  </div>
                  <div class="form-group b-b-1">
                    <el-form-item label="買家賬號：" prop="buyerUsername" class="col-lg-4">
                      <el-input
                        v-html="getHandleStr(platformDetailData.orderForm.buyerUsername)"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="買家留言：" prop="messageToSeller" class="col-lg-4">
                      <el-input
                        v-html="getProcessStatusStr(platformDetailData.orderForm.messageToSeller)"
                        class="form-show buyer-note"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="備註：" prop="myNote" class="col-lg-4">
                      <el-tooltip placement="top" popper-class="atooltip">
                        <div slot="content">備註：{{platformDetailData.orderForm.myNote}}</div>
                        <el-input
                          v-html="platformDetailData.orderForm.myNote"
                          class="form-show buyer-note"
                        ></el-input>
                      </el-tooltip>
                    </el-form-item>
                  </div>
                  <div class="form-group">
                    <div
                      v-for="(shopeeOrderItem,index) in platformDetailData.orderForm.shopeeOrderItems"
                      :key="index"
                      class="b-b-1"
                    >
                      <el-row>
                        <el-tooltip placement="top-start" popper-class="atooltip">
                          <div slot="content">
                            商品名稱：{{shopeeOrderItem.itemName}}
                            <br />
                            商品規格：{{shopeeOrderItem.modelId>0 ? shopeeOrderItem.modelName : '無規格'}}
                            <br />
                            商品數量：{{shopeeOrderItem.amount}}
                            <br />
                            商品單價：{{shopeeOrderItem.price}}
                          </div>
                          <div>
                            <el-col :span="6">
                              <img
                                height="70px"
                                width="70px"
                                style="margin:2px 0"
                                v-on:click.stop="pictrueVisible = true"
                                :src="shopeeOrderItem.modelUrl"
                              />
                            </el-col>
                            <el-dialog :visible.sync="pictrueVisible" append-to-body>
                              <img width="100%" :src="shopeeOrderItem.modelUrl" />
                            </el-dialog>
                            <el-col :span="14" style="text-align: left;">
                              <a
                                class="item-name"
                                v-on:click="openItem(platformDetailData.orderForm.shopId,shopeeOrderItem.itemId)"
                              >{{shopeeOrderItem.itemName}}</a>
                              <div>{{ shopeeOrderItem.modelId>0 ? shopeeOrderItem.modelName : '無規格' }}</div>
                            </el-col>
                            <el-col :span="4">
                              <div class="item-name item-num">
                                <i class="el-icon-close"></i>
                                {{ shopeeOrderItem.amount }}
                              </div>
                              <div>{{ shopeeOrderItem.price }}</div>
                            </el-col>
                          </div>
                        </el-tooltip>
                      </el-row>

                      <el-row v-if="platformDetailData.orderForm.handle==1">
                        <el-col :span="5" v-if="shopeeOrderItem.source">
                          <el-form-item label="貨源：" prop="source" class="form-show">
                            <el-input
                              v-html="getSourceStr(shopeeOrderItem.source)"
                              class="form-show"
                            ></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12" v-if="shopeeOrderItem.sourceUrl">
                          <el-form-item label="貨源連線：" prop="sourceUrl" class="form-show">
                            <a
                              :href="shopeeOrderItem.sourceUrl"
                              target="_blank"
                            >{{getSourceStr(shopeeOrderItem.source)}}</a>
                          </el-form-item>
                        </el-col>
                        <el-col :span="7"  v-if="shopeeOrderItem.sourcePrice">
                          <el-form-item label="貨源價格：" prop="price" class="form-show p-r-15">
                            <el-input v-html="shopeeOrderItem.sourcePrice"></el-input>
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                  <div class="form-group">
                    <el-form-item label="收件人：" prop="name" class="col-lg-4">
                      <el-input
                        v-html="platformDetailData.orderForm.recipientAddress.name"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="手機號：" prop="phone" class="col-lg-4">
                      <el-input
                        v-html="platformDetailData.orderForm.recipientAddress.phone"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="收件地址：" prop="fullAddress" class="col-lg-4">
                      <el-input
                        v-html="platformDetailData.orderForm.recipientAddress.fullAddress"
                        class="form-show address"
                      ></el-input>
                    </el-form-item>
                  </div>
                  <div class="form-group">
                    <el-form-item
                      label="代貼單："
                      prop="needPrint"
                      class="col-lg-6 form-show"
                      v-if="platformDetailData.orderForm.handle==Handle.TRANSFER||platformDetailData.orderForm.handle==Handle.CONCENTRATE"
                    >
                      <el-radio-group
                        v-model="platformDetailData.orderForm.orderShip.needPrint"
                        size="mini"
                        disabled
                        v-if="platformDetailData.orderForm.orderShip&&platformDetailData.orderForm.orderShip.needPrint"
                      >
                        <el-radio :label="true">是</el-radio>
                        <el-radio :label="false">否</el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item
                      label="代交店："
                      prop="needDelivery"
                      class="col-lg-6 form-show"
                      v-if="platformDetailData.orderForm.handle==Handle.TRANSFER||platformDetailData.orderForm.handle==Handle.CONCENTRATE"
                    >
                      <el-radio-group
                        v-model="platformDetailData.orderForm.orderShip.needDelivery"
                        size="mini"
                        disabled
                        v-if="platformDetailData.orderForm.orderShip&&platformDetailData.orderForm.orderShip.needDelivery"
                      >
                        <el-radio :label="true">是</el-radio>
                        <el-radio :label="false">否</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </div>
                  <div class="form-group">
                    <el-form-item label="派送物流：" prop="shippingCarrier" class="col-lg-6">
                      <el-input
                        v-html="platformDetailData.orderForm.shippingCarrier"
                        class="form-show"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="物流選擇："
                      prop="shipType"
                      class="col-lg-6 form-show"
                      v-if="platformDetailData.orderForm.handle&&platformDetailData.orderForm.handle!=Handle.OVERSEA"
                    >
                      <el-radio-group
                        v-model="platformDetailData.orderForm.orderShip.shipType"
                        size="mini"
                        disabled
                        v-if="platformDetailData.orderForm.orderShip&&platformDetailData.orderForm.orderShip.shipType"
                      >
                        <el-radio :label="1">空運</el-radio>
                        <el-radio :label="2">海運</el-radio>
                        <el-radio :label="3">海快</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </div>
                  <div class="form-group">
                    <el-form-item
                      label="重量："
                      prop="shipWeight"
                      class="col-lg-3 my_required_label"
                      v-if="platformDetailData.orderForm.orderShip&&platformDetailData.orderForm.orderShip.shipWeight"
                    >
                      <el-input
                        v-html="platformDetailData.orderForm.orderShip.shipWeight"
                        class="form-show"
                        size="mini"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="長："
                      prop="shipLength"
                      class="col-lg-3"
                      v-if="platformDetailData.orderForm.orderShip&&platformDetailData.orderForm.orderShip.shipLength"
                    >
                      <el-input
                        v-html="platformDetailData.orderForm.orderShip.shipLength"
                        class="form-show"
                        size="mini"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="寬："
                      prop="shipWidth"
                      class="col-lg-3"
                      v-if="platformDetailData.orderForm.orderShip&&platformDetailData.orderForm.orderShip.shipWidth"
                    >
                      <el-input
                        v-html="platformDetailData.orderForm.orderShip.shipWidth"
                        class="form-show"
                        size="mini"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="高："
                      prop="shipHeight"
                      class="col-lg-3"
                      v-if="platformDetailData.orderForm.orderShip&&platformDetailData.orderForm.orderShip.shipHeight"
                    >
                      <el-input
                        v-html="platformDetailData.orderForm.orderShip.shipHeight"
                        class="form-show"
                        size="mini"
                      ></el-input>
                    </el-form-item>
                  </div>
                  <div
                    class="form-group"
                    v-if="platformDetailData.orderForm.handle==Handle.TRANSFER||platformDetailData.orderForm.handle==Handle.CONCENTRATE"
                  >
                    <el-form-item
                      label="快遞單號："
                      prop="expresses"
                      class="col-lg-10 form-show my_required_label"
                    >
                      <el-row
                        v-for="(express,index) in platformDetailData.orderForm.expresses"
                        :key="index"
                      >
                        <el-col :span="10">
                          <el-input type="text" v-html="express.expressNum" size="mini"></el-input>
                        </el-col>
                        <el-col :span="10" v-if="express.expressNote">
                          <el-input type="text" v-html="express.expressNote" size="mini"></el-input>
                        </el-col>
                        <el-col :span="4">
                          <el-input
                            type="text"
                            v-html="getExpressStatusStr(express.expressStatus)"
                            size="mini"
                          ></el-input>
                        </el-col>
                      </el-row>
                    </el-form-item>
                  </div>
                  <div
                    class="form-group"
                    v-if="platformDetailData.orderForm.handle==Handle.MAINLAND"
                  >
                    <el-form-item
                      label="大陸倉SKU"
                      prop="platformList"
                      class="col-lg-12 form-show my_required_label"
                    >
                      <el-row
                        v-for="(mainland,index) in platformDetailData.orderForm.mainlands"
                        :key="index"
                      >
                        <el-col :span="11">
                           <el-input
                            type="text"
                            v-html="mainland.storageName+'/'+mainland.storageSku"
                            size="mini"
                          ></el-input>
                        </el-col>
                        <el-col :span="9">
                          <label
                            for="amount"
                            class="col-lg-5 el-form-item__label"
                            style="padding-left: 0px;"
                          >數量：</label>
                          <el-input
                            v-html="mainland.storageOrder.amount"
                            size="mini"
                            class="col-lg-7 el-form-item__content"
                            style="padding:0"
                            clearable
                          ></el-input>
                        </el-col>
                        <el-col :span="2"></el-col>
                        <el-col :span="2"></el-col>
                      </el-row>
                    </el-form-item>
                  </div>
                  <div
                    class="form-group"
                    v-if="platformDetailData.orderForm.handle==Handle.OVERSEA"
                  >
                    <el-form-item
                      label="海外倉SKU"
                      prop="platformList"
                      class="col-lg-12 form-show my_required_label"
                    >
                      <el-row
                        v-for="(oversea,index) in platformDetailData.orderForm.overseas"
                        :key="index"
                      >
                        <el-col :span="11">
                           <el-input
                            type="text"
                            v-html="oversea.storageName+'/'+oversea.storageSku"
                            size="mini"
                          ></el-input>
                        </el-col>
                        <el-col :span="9">
                          <label
                            for="amount"
                            class="col-md-5 el-form-item__label"
                            style="padding-left: 0px;"
                          >數量：</label>
                          <el-input
                            v-html="oversea.storageOrder.amount"
                            class="col-md-7 el-form-item__content"
                            style="padding:0"
                          ></el-input>
                        </el-col>
                        <el-col :span="2"></el-col>
                        <el-col :span="2"></el-col>
                      </el-row>
                    </el-form-item>
                  </div>
                  <div class="form-group m-t-10">
                    <div class="col-sm-12">
                      <button
                        class="btn btn-info btn-flat m-l-10"
                        @click.stop.prevent="closeForm"
                      >關閉</button>
                    </div>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </template>
    </vxe-modal>
  </div>
</template>

<script>
export default {
  props: {
    platformDetailData: {
      showDetail: false,
      orderForm: null
    }
  },
  data() {
    return {
      pictrueVisible: false,
      Handle: Handle
    };
  },

  created() {
    // this.defaultImg = require("@/assets/css/default.png");
  },

  mounted() {},
  methods: {
    closeForm() {
      this.platformDetailData.showDetail = false;
    },
    //地區由字母轉為中文
    getCountryStr(data) {
      // return getCountryStr(data);
    },
    //將快遞狀態由數字轉為中文
    getExpressStatusStr(data) {
      // return getExpressStatusStr(data);
    },
    //將處理狀態由數字轉為中文
    getProcessStatusStr(data) {
      // return getProcessStatusStr(data);
    },
    //平臺由數字轉為中文
    getPlatformStr(platform) {
      // return getPlatformStr(platform);
    },
    //將訂單處理方式由數字換為中文
    getHandleStr(data) {
      // return getHandleStr(data);
    },
    //將貨源由數字轉為中文
    getSourceStr(data) {
      // return getSourceStr(data);
    },
    //訂單狀態由數字轉為中文
    getPlatformStatusStr(data) {
      // return getPlatformStatusStr(data);
    },
    //平臺由數字轉為html顯示
    getPlatformHtml(platform) {
      // return getPlatformHtml(platform);
    },
    //打圖片頁面
    openImg(url) {
      window.open(url);
    },
    //開啟shopee商品頁面
    openItem(shopId, itemId) {
      window.open(urlShopeeItem + shopId + "." + itemId);
    },
    //組合倉儲的商品名和規格
    getStorageName(item) {
      // return getStorageName(item);
    }
  }
};
</script>


<style scoped>
/* @import "~@/assets/css/lib/font-awesome.min.css";
@import "~@/assets/css/lib/themify-icons.css";
@import "~@/assets/css/lib/simdahs.css";
@import "~@/assets/css/style.css"; */
</style>
